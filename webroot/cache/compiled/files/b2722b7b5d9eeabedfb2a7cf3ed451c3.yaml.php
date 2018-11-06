<?php
return [
    '@class' => 'Grav\\Common\\File\\CompiledYamlFile',
    'filename' => '/Users/stephanie/Dropbox/Projects/chia-network/grav/user/config/site.yaml',
    'modified' => 1541484525,
    'data' => [
        'title' => 'Chia',
        'author' => [
            'name' => 'Chia Network',
            'email' => 'hello@chia.net'
        ],
        'blog' => [
            'route' => ''
        ],
        'metadata' => [
            'description' => 'Chia is new way to approach digital money. Green, global, and helping you grow'
        ],
        'menu' => [
            0 => [
                'text' => 'Blog',
                'url' => 'https://medium.com/@chia_network'
            ]
        ],
        'taxonomies' => [
            0 => 'category',
            1 => 'tag',
            2 => 'month'
        ],
        'redirects' => [
            '/changelog' => '/blog/the-urban-jungle'
        ],
        'routes' => [
            '/something/else' => '/blog/focus-and-blur',
            '/another/one/(.*)' => '/blog/$1'
        ]
    ]
];
