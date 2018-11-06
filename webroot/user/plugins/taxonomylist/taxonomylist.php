<?php
namespace Grav\Plugin;

use Grav\Common\Plugin;
use Grav\Plugin\Taxonomylist;

class TaxonomylistPlugin extends Plugin
{

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

        $this->enable([
            'onTwigTemplatePaths' => ['onTwigTemplatePaths', 0],
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
     * Set needed variables to display the taxonomy list.
     */
    public function onTwigSiteVariables()
    {
        require_once __DIR__ . '/classes/taxonomylist.php';

        $twig = $this->grav['twig'];
        $twig->twig_vars['taxonomylist'] = new Taxonomylist();
        $twig->twig_vars['list_url'] = $this->config->get(
            'site.blog.route',
            $this->config->get('plugins.taxonomylist.route')
        );
    }
}
