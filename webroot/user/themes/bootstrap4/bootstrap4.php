<?php
namespace Grav\Theme;

use Grav\Common\Theme;

class Bootstrap4 extends Theme
{
    // Boostrap plugin will look for this class var to know it should load
    public $load_bootstrapper_plugin = true;

    public static function getSubscribedEvents()
    {
        return [
            'onThemeInitialized'    => ['onThemeInitialized', 0]
        ];
    }

    public function onThemeInitialized()
    {
        $this->config->set('plugins.bootstrapper.version', 'v4');
    }

}
