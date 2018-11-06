<?php
namespace Grav\Plugin;

use \Grav\Common\Plugin;
use \Grav\Common\Grav;
use \Grav\Common\Page\Page;

class BootstrapperPlugin extends Plugin
{
    /**
     * @return array
     */
    public static function getSubscribedEvents()
    {
        return [
            'onThemeInitialized' => ['onThemeInitialized', 0]
        ];
    }

    /**
     * Initialize configuration
     */
    public function onThemeInitialized()
    {
        if ($this->isAdmin()) {
            return;
        }

        $load_events = false;

        // if not always_load see if the theme expects to load bootstrap plugin
        if (!$this->config->get('plugins.bootstrapper.always_load')) {
            $theme = $this->grav['theme'];
            if (isset($theme->load_bootstrapper_plugin) && $theme->load_bootstrapper_plugin) {
                $load_events = true;
            }
        } else {
            $load_events = true;
        }

        if ($load_events) {
            $this->enable([
                'onTwigSiteVariables' => ['onTwigSiteVariables', 0]
            ]);
        }
    }

    /**
     * if enabled on this page, load the JS + CSS and set the selectors.
     */
    public function onTwigSiteVariables()
    {
        $config = $this->config->get('plugins.bootstrapper');
        $version = $config['version'];
        $mode = $config['mode'] == 'production' ? '.min' : '';

        $bootstrap_bits = [];

        if ($version == 'v4') {
            $currentVersion = '4.1.1';
            $bootstrapCDN = 'https://stackpath.bootstrapcdn.com/';
        } else {
            $currentVersion = '3.3.7';
            $bootstrapCDN = 'https://maxcdn.bootstrapcdn.com/';
        }

        // Popper configuration (Bootstrap 4 only)
        $currentPopperVersion = '1.14.3';

        if ($config['use_cdn']) {
            if ($config['load_core_css']) {
                $bootstrap_bits[] = "{$bootstrapCDN}/bootstrap/{$currentVersion}/css/bootstrap{$mode}.css";
            }
            if ($config['load_theme_css'] && $version == 'v3') {
                $bootstrap_bits[] = "{$bootstrapCDN}/bootstrap/{$currentVersion}/css/bootstrap-theme{$mode}.css";
            }
            if ($config['load_popper_js'] && $version == 'v4') {
                $bootstrap_bits[] = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/{$currentPopperVersion}/umd/popper{$mode}.js";
            }
            if ($config['load_core_js']) {
                $bootstrap_bits[] = "{$bootstrapCDN}/bootstrap/{$currentVersion}/js/bootstrap{$mode}.js";
            }
        } else {
            if ($config['load_core_css']) {
                $bootstrap_bits[] = "plugin://bootstrapper/css/{$version}/bootstrap{$mode}.css";
            }
            if ($config['load_theme_css'] && $version == 'v3') {
                $bootstrap_bits[] = "plugin://bootstrapper/css/{$version}/bootstrap-theme{$mode}.css";
            }
            if ($config['load_popper_js'] && $version == 'v4') {
                $bootstrap_bits[] = "plugin://bootstrapper/js/{$version}/popper{$mode}.js";
            }
            if ($config['load_core_js']) {
                $bootstrap_bits[] = "plugin://bootstrapper/js/{$version}/bootstrap{$mode}.js";
            }
        }

        $assets = $this->grav['assets'];
        $assets->registerCollection('bootstrap', $bootstrap_bits);
        $assets->add('bootstrap', 100);
    }
}
