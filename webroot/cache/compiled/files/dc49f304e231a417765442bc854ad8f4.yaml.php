<?php
return [
    '@class' => 'Grav\\Common\\File\\CompiledYamlFile',
    'filename' => '/Users/stephanie/Dropbox/Projects/chia-network/grav/user/plugins/simplesearch/simplesearch.yaml',
    'modified' => 1536959246,
    'data' => [
        'enabled' => true,
        'built_in_css' => true,
        'built_in_js' => true,
        'display_button' => false,
        'min_query_length' => 3,
        'route' => '/search',
        'search_content' => 'rendered',
        'template' => 'simplesearch_results',
        'filters' => [
            'category' => 'blog'
        ],
        'filter_combinator' => 'and',
        'ignore_accented_characters' => false,
        'order' => [
            'by' => 'date',
            'dir' => 'desc'
        ]
    ]
];
