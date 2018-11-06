<?php
namespace Grav\Plugin;

use \Grav\Common\Plugin;
use RocketTheme\Toolbox\Event\Event;

class MarkdownFontAwesomePlugin extends Plugin
{
    /**
     * @return array
     */
    public static function getSubscribedEvents()
    {
        return [
            'onMarkdownInitialized' => ['onMarkdownInitialized', 0]
        ];
    }

    public function onMarkdownInitialized(Event $event)
    {
        $markdown = $event['markdown'];

        // Initialize Text example
        $markdown->addInlineType(':', 'FontAwesome');

        // Add function to handle this
        $markdown->inlineFontAwesome = function($excerpt) {
            // Search $excerpt['text'] for regex and store whole matching string in $matches[0], store icon name in $matches[1]
            if (preg_match('/:fa-([-\w]+):/', $excerpt['text'], $matches))
            {
                return array(
                    'extent' => strlen($matches[0]),
                    'element' => array(
                        'name' => 'i',
                        'text' => '',
                        'attributes' => array(
                            'class' => 'fa fa-'.$matches[1],
                        ),
                    ),
                );
            }
        };
    }
}