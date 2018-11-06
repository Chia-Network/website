<?php
namespace Grav\Plugin;

use Grav\Common\Plugin;
use Grav\Common\Grav;
use Grav\Common\Page\Collection;
use Grav\Common\Page\Page;
use Grav\Common\Debugger;
use Grav\Common\Taxonomy;
use RocketTheme\Toolbox\Event\Event;

class ArchivesPlugin extends Plugin
{
    /**
     * @var string
     */
    protected $month_taxonomy_name;

    /**
     * @var string
     */
    protected $year_taxonomy_name;

    /**
     * @return array
     */
    public static function getSubscribedEvents()
    {
        return [
            'onPluginsInitialized' => ['onPluginsInitialized', 0]
        ];
    }

    /**
     * Initialize configuration
     */
    public function onPluginsInitialized()
    {
        if ($this->isAdmin()) {
            $this->active = false;
            return;
        }

        $this->month_taxonomy_name = $this->config->get('plugins.archives.taxonomy_names.month');
        $this->year_taxonomy_name = $this->config->get('plugins.archives.taxonomy_names.year');

        // Dynamically add the needed taxonomy types to the taxonomies config
        $taxonomy_config = array_merge((array)$this->config->get('site.taxonomies'), [$this->month_taxonomy_name, $this->year_taxonomy_name]);
        $this->config->set('site.taxonomies', $taxonomy_config);

        $this->enable([
            'onTwigTemplatePaths' => ['onTwigTemplatePaths', 0],
            'onPageProcessed' => ['onPageProcessed', 0],
            'onTwigSiteVariables' => ['onTwigSiteVariables', 0]
        ]);
    }

    /**
     * Add current directory to twig lookup paths.
     */
    public function onTwigTemplatePaths()
    {
        $this->grav['twig']->twig_paths[] = __DIR__ . '/templates';
    }

    /**
     * Add
     *
     * @param Event $event
     */
    public function onPageProcessed(Event $event)
    {
        // Get the page header
        $page = $event['page'];
        $taxonomy = $page->taxonomy();

        // track month taxonomy in "jan_2015" format:
        if (!isset($taxonomy[$this->month_taxonomy_name])) {
            $taxonomy[$this->month_taxonomy_name] = array(strtolower(date('M_Y', $page->date())));
        }

        // track year taxonomy in "2015" format:
        if (!isset($taxonomy[$this->year_taxonomy_name])) {
            $taxonomy[$this->year_taxonomy_name] = array(date('Y', $page->date()));
        }

        // set the modified taxonomy back on the page object
        $page->taxonomy($taxonomy);
    }

    /**
     * Set needed variables to display breadcrumbs.
     */
    public function onTwigSiteVariables()
    {
        $page = $this->grav['page'];
        // If a page exists merge the configs
        if ($page) {
            $this->config->set('plugins.archives', $this->mergeConfig($page));
        }

        /** @var Taxonomy $taxonomy_map */
        $taxonomy_map = $this->grav['taxonomy'];
        $taxonomies = [];
        $find_taxonomy = [];

        $pages = $this->grav['pages'];

        // Get current datetime
        $start_date = time();

        $archives = array();

        // get the plugin filters setting
        $filters = (array) $this->config->get('plugins.archives.filters');
        $operator = $this->config->get('plugins.archives.filter_combinator');
        $new_approach = false;
        $collection = null;

        if ( ! $filters || (count($filters) == 1 && !reset($filters))){
            $collection = $pages->all();
        } else {
            foreach ($filters as $key => $filter) {
                // flatten item if it's wrapped in an array
                if (is_int($key)) {
                    if (is_array($filter)) {
                        $key = key($filter);
                        $filter = $filter[$key];
                    } else {
                        $key = $filter;
                    }
                }
                // see if the filter uses the new 'items-type' syntax
                if ($key === '@self' || $key === 'self@') {
                    $new_approach = true;
                } elseif ($key === '@taxonomy' || $key === 'taxonomy@') {
                    $taxonomies = $filter === false ? false : array_merge($taxonomies, (array) $filter);
                } else {
                    $find_taxonomy[$key] = $filter;
                }
            }
            if ($new_approach) {
                $collection = $page->children();
            } else {
                $collection = new Collection();
                $collection->append($taxonomy_map->findTaxonomy($find_taxonomy, $operator)->toArray());
            }
        }

        // reorder the collection based on settings
        $collection = $collection->order($this->config->get('plugins.archives.order.by'), $this->config->get('plugins.archives.order.dir'));
        $date_format = $this->config->get('plugins.archives.date_display_format');

        // loop over new collection of pages that match filters
        foreach ($collection as $page) {
            // update the start date if the page date is older
            $start_date = $page->date() < $start_date ? $page->date() : $start_date;

            $archives[date($date_format, $page->date())][] = $page;
        }

        // slice the array to the limit you want
        $archives = array_slice($archives, 0, intval($this->config->get('plugins.archives.limit')), is_string(reset($archives)) ? false : true );

        // add the archives_start date to the twig variables
        $this->grav['twig']->twig_vars['archives_show_count'] = $this->config->get('plugins.archives.show_count');
        $this->grav['twig']->twig_vars['archives_data'] = $archives;
    }
}
