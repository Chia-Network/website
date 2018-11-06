<?php
return [
    '@class' => 'Grav\\Common\\File\\CompiledYamlFile',
    'filename' => '/Users/stephanie/Dropbox/Projects/chia-network/grav/user/config/system.yaml',
    'modified' => 1541490500,
    'data' => [
        'home' => [
            'alias' => '/home'
        ],
        'pages' => [
            'theme' => 'bootstrap4',
            'process' => [
                'markdown' => true,
                'twig' => false
            ]
        ],
        'cache' => [
            'enabled' => true,
            'check' => [
                'method' => 'file'
            ],
            'driver' => 'auto',
            'prefix' => 'g'
        ],
        'twig' => [
            'cache' => true,
            'debug' => true,
            'auto_reload' => true,
            'autoescape' => false
        ],
        'assets' => [
            'css_pipeline' => false,
            'css_minify' => true,
            'css_rewrite' => true,
            'js_pipeline' => false,
            'js_minify' => true
        ],
        'debugger' => [
            'enabled' => true,
            'twig' => true,
            'shutdown' => [
                'close_connection' => true
            ]
        ]
    ]
];
