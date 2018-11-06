<?php
namespace Grav\Plugin;

use Grav\Common\Page\Collection;
use Grav\Common\Plugin;
use Grav\Common\Uri;
use Grav\Common\Taxonomy;

class RandomPlugin extends Plugin
{
    /**
     * @return array
     */
    public static function getSubscribedEvents()
    {
        return [
            'onPluginsInitialized' => ['onPluginsInitialized', 0],
        ];
    }

    /**
     * Activate plugin if path matches to the configured one.
     */
    public function onPluginsInitialized()
    {
        if ($this->isAdmin()) {
            $this->active = false;
            return;
        }

        /** @var Uri $uri */
        $uri = $this->grav['uri'];
        $route = $this->config->get('plugins.random.route');

        if ($route && $route == $uri->path()) {
            $this->enable([
                'onPageInitialized' => ['onPageInitialized', 0]
            ]);
        }
    }

    /**
     * Display random page.
     */
    public function onPageInitialized()
    {
        /** @var Taxonomy $taxonomy_map */
        $taxonomy_map = $this->grav['taxonomy'];

        $filters = (array) $this->config->get('plugins.random.filters');
        $operator = $this->config->get('plugins.random.filter_combinator', 'and');

        if (count($filters)) {
            $collection = new Collection();
            $collection->append($taxonomy_map->findTaxonomy($filters, $operator)->toArray());
            if (count($collection)) {
                unset($this->grav['page']);
                $page = $collection->random()->current();

                if ($this->config->get('plugins.random.redirect', true)) {
                    $this->grav->redirect($page->url(true));
                } else {
                    // override the modified time
                    $page->modified(time());
                    $this->grav['page'] = $page;

                    // Convince the URI object that it is this random page...
                    $uri = $this->grav['uri'];
                    $uri->url = $uri->base().$page->url();
                    $uri->init();
                }
            }
        }
    }
}
