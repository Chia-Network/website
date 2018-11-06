<?php
error_reporting(-1);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

date_default_timezone_set('Europe/Brussels');

if (!is_file($autoloadFile = __DIR__ . '/../vendor/autoload.php')) {
    echo 'Could not find "vendor/autoload.php". Did you forget to run "composer install --dev"?' . PHP_EOL;
    exit(1);
}

$autoloader = require $autoloadFile;

define('PHPEXIF_TEST_ROOT', __DIR__);
