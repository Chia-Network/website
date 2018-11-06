<?php
/**
 * @covers \PHPExif\Adapter\Native::<!public>
 */
class NativeTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @var \PHPExif\Adapter\Native
     */
    protected $adapter;

    public function setUp()
    {
        $this->adapter = new \PHPExif\Adapter\Native();
    }

    /**
     * @group native
     * @covers \PHPExif\Adapter\Native::setIncludeThumbnail
     */
    public function testSetIncludeThumbnailInProperty()
    {
        $reflProperty = new \ReflectionProperty('\PHPExif\Adapter\Native', 'includeThumbnail');
        $reflProperty->setAccessible(true);

        $this->assertEquals(\PHPExif\Adapter\Native::NO_THUMBNAIL, $reflProperty->getValue($this->adapter));

        $this->adapter->setIncludeThumbnail(\PHPExif\Adapter\Native::INCLUDE_THUMBNAIL);

        $this->assertEquals(\PHPExif\Adapter\Native::INCLUDE_THUMBNAIL, $reflProperty->getValue($this->adapter));
    }

    /**
     * @group native
     * @covers \PHPExif\Adapter\Native::getIncludeThumbnail
     */
    public function testGetIncludeThumbnailFromProperty()
    {
        $reflProperty = new \ReflectionProperty('\PHPExif\Adapter\Native', 'includeThumbnail');
        $reflProperty->setAccessible(true);
        $reflProperty->setValue($this->adapter, \PHPExif\Adapter\Native::INCLUDE_THUMBNAIL);

        $this->assertEquals(\PHPExif\Adapter\Native::INCLUDE_THUMBNAIL, $this->adapter->getIncludeThumbnail());
    }

    /**
     * @group native
     * @covers \PHPExif\Adapter\Native::GetIncludeThumbnail
     */
    public function testGetIncludeThumbnailHasDefaultValue()
    {
        $this->assertEquals(\PHPExif\Adapter\Native::NO_THUMBNAIL, $this->adapter->getIncludeThumbnail());
    }

    /**
     * @group native
     * @covers \PHPExif\Adapter\Native::getRequiredSections
     */
    public function testGetRequiredSections()
    {
        $reflProperty = new \ReflectionProperty('\PHPExif\Adapter\Native', 'requiredSections');
        $reflProperty->setAccessible(true);

        $this->assertEquals($reflProperty->getValue($this->adapter), $this->adapter->getRequiredSections());
    }

    /**
     * @group native
     * @covers \PHPExif\Adapter\Native::setRequiredSections
     */
    public function testSetRequiredSections()
    {
        $reflProperty = new \ReflectionProperty('\PHPExif\Adapter\Native', 'requiredSections');
        $reflProperty->setAccessible(true);

        $testData = array('foo', 'bar', 'baz');

        $returnValue = $this->adapter->setRequiredSections($testData);

        $this->assertEquals($testData, $reflProperty->getValue($this->adapter));
        $this->assertEquals($this->adapter, $returnValue);
    }

    /**
     * @group native
     * @covers \PHPExif\Adapter\Native::addRequiredSection
     */
    public function testAddRequiredSection()
    {
        $reflProperty = new \ReflectionProperty('\PHPExif\Adapter\Native', 'requiredSections');
        $reflProperty->setAccessible(true);

        $testData = array('foo', 'bar', 'baz');
        $this->adapter->setRequiredSections($testData);

        $returnValue = $this->adapter->addRequiredSection('test');
        array_push($testData, 'test');

        $this->assertEquals($testData, $reflProperty->getValue($this->adapter));
        $this->assertEquals($this->adapter, $returnValue);
    }

    /**
     * @group native
     * @covers \PHPExif\Adapter\Native::getExifFromFile
     */
    public function testGetExifFromFileNoData()
    {
        $file = PHPEXIF_TEST_ROOT . '/files/empty.jpg';
        $result = $this->adapter->getExifFromFile($file);
        $this->assertFalse($result);
    }

    /**
     * @group native
     * @covers \PHPExif\Adapter\Native::getExifFromFile
     */
    public function testGetExifFromFileHasData()
    {
        $file = PHPEXIF_TEST_ROOT . '/files/morning_glory_pool_500.jpg';
        $result = $this->adapter->getExifFromFile($file);
        $this->assertInstanceOf('\PHPExif\Exif', $result);
        $this->assertInternalType('array', $result->getRawData());
        $this->assertNotEmpty($result->getRawData());
    }

    /**
     * @group native
     * @covers \PHPExif\Adapter\Native::getIptcData
     */
    public function testGetIptcData()
    {
        $file = PHPEXIF_TEST_ROOT . '/files/morning_glory_pool_500.jpg';
        $result = $this->adapter->getIptcData($file);
        $expected = array(
            'title' => 'Morning Glory Pool',
            'keywords'  => array(
                '18-200', 'D90', 'USA', 'Wyoming', 'Yellowstone'
            ),
        );

        $this->assertEquals($expected, $result);
    }

    /**
     * @group native
     * @covers \PHPExif\Adapter\Native::setSectionsAsArrays
     */
    public function testSetSectionsAsArrayInProperty()
    {
        $reflProperty = new \ReflectionProperty('\PHPExif\Adapter\Native', 'sectionsAsArrays');
        $reflProperty->setAccessible(true);
        $expected = \PHPExif\Adapter\Native::SECTIONS_AS_ARRAYS;
        $this->adapter->setSectionsAsArrays($expected);
        $actual = $reflProperty->getValue($this->adapter);
        $this->assertEquals($expected, $actual);
    }

    /**
     * @group native
     * @covers \PHPExif\Adapter\Native::setSectionsAsArrays
     */
    public function testSetSectionsAsArrayConvertsToBoolean()
    {
        $reflProperty = new \ReflectionProperty('\PHPExif\Adapter\Native', 'sectionsAsArrays');
        $reflProperty->setAccessible(true);
        $expected = \PHPExif\Adapter\Native::SECTIONS_AS_ARRAYS;
        $this->adapter->setSectionsAsArrays('Foo');
        $actual = $reflProperty->getValue($this->adapter);
        $this->assertEquals($expected, $actual);
    }

    /**
     * @group native
     * @covers \PHPExif\Adapter\Native::getSectionsAsArrays
     */
    public function testGetSectionsAsArrayFromProperty()
    {
        $reflProperty = new \ReflectionProperty('\PHPExif\Adapter\Native', 'sectionsAsArrays');
        $reflProperty->setAccessible(true);
        $reflProperty->setValue($this->adapter, \PHPExif\Adapter\Native::SECTIONS_AS_ARRAYS);

        $this->assertEquals(\PHPExif\Adapter\Native::SECTIONS_AS_ARRAYS, $this->adapter->getSectionsAsArrays());
    }
}
