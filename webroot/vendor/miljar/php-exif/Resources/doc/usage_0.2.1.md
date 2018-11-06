## Usage ##

### Using factory method

```php
<?php
// reader with Native adapter
$reader = \PHPExif\Reader::factory(\PHPExif\Reader::TYPE_NATIVE);

// reader with Exiftool adapter
//$reader = \PHPExif\Reader::factory(\PHPExif\Reader::TYPE_EXIFTOOL);

$exif = $reader->getExifFromFile('/path/to/file');

echo 'Title: ' . $exif->getTitle() . PHP_EOL;
```

### Using custom options

```php
<?php
$adapter = new \PHPExif\Reader\Adapter\Exiftool(
    array(
        'toolPath'  => '/path/to/exiftool',
    )
);
$reader = new \PHPExif\Reader($adapter);

$exif = $reader->getExifFromFile('/path/to/file');

echo 'Title: ' . $exif->getTitle() . PHP_EOL;
```