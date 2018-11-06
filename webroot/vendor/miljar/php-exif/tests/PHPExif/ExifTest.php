<?php
/**
 * @covers \PHPExif\Exif::<!public>
 */
class ExifTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @var \PHPExif\Exif
     */
    protected $exif;

    /**
     * Setup function before the tests
     */
    public function setUp()
    {
        $this->exif = new \PHPExif\Exif();
    }

    /**
     * @group exif
     * @covers \PHPExif\Exif::__construct
     */
    public function testConstructorCallsSetData()
    {
        $input = array();

        // Get mock, without the constructor being called
        $mock = $this->getMockBuilder('\\PHPExif\\Exif')
            ->disableOriginalConstructor()
            ->getMock();

        // set expectations for constructor calls
        $mock->expects($this->once())
            ->method('setData')
            ->with(
                $this->equalTo($input)
            );

        // now call the constructor
        $reflectedClass = new ReflectionClass('\\PHPExif\\Exif');
        $constructor = $reflectedClass->getConstructor();
        $constructor->invoke($mock, $input);
    }

    /**
     * @group exif
     * @covers \PHPExif\Exif::getRawData
     */
    public function testGetRawData()
    {
        $reflProperty = new \ReflectionProperty('\PHPExif\Exif', 'rawData');
        $reflProperty->setAccessible(true);

        $this->assertEquals($reflProperty->getValue($this->exif), $this->exif->getRawData());
    }

    /**
     * @group exif
     * @covers \PHPExif\Exif::setRawData
     */
    public function testSetRawData()
    {
        $testData = array('foo', 'bar', 'baz');
        $reflProperty = new \ReflectionProperty('\PHPExif\Exif', 'rawData');
        $reflProperty->setAccessible(true);

        $result = $this->exif->setRawData($testData);

        $this->assertEquals($testData, $reflProperty->getValue($this->exif));
        $this->assertEquals($this->exif, $result);
    }

    /**
     * @group exif
     * @covers \PHPExif\Exif::getData
     */
    public function testGetData()
    {
        $reflProperty = new \ReflectionProperty('\PHPExif\Exif', 'data');
        $reflProperty->setAccessible(true);

        $this->assertEquals($reflProperty->getValue($this->exif), $this->exif->getData());
    }

    /**
     * @group exif
     * @covers \PHPExif\Exif::setData
     */
    public function testSetData()
    {
        $testData = array('foo', 'bar', 'baz');
        $reflProperty = new \ReflectionProperty('\PHPExif\Exif', 'data');
        $reflProperty->setAccessible(true);

        $result = $this->exif->setData($testData);

        $this->assertEquals($testData, $reflProperty->getValue($this->exif));
        $this->assertEquals($this->exif, $result);
    }

    /**
     *
     * @dataProvider providerUndefinedPropertiesReturnFalse
     * @covers \PHPExif\Exif::getAperture
     * @covers \PHPExif\Exif::getIso
     * @covers \PHPExif\Exif::getExposure
     * @covers \PHPExif\Exif::getExposureMilliseconds
     * @covers \PHPExif\Exif::getFocusDistance
     * @covers \PHPExif\Exif::getWidth
     * @covers \PHPExif\Exif::getHeight
     * @covers \PHPExif\Exif::getTitle
     * @covers \PHPExif\Exif::getCaption
     * @covers \PHPExif\Exif::getCopyright
     * @covers \PHPExif\Exif::getKeywords
     * @covers \PHPExif\Exif::getCamera
     * @covers \PHPExif\Exif::getHorizontalResolution
     * @covers \PHPExif\Exif::getVerticalResolution
     * @covers \PHPExif\Exif::getSoftware
     * @covers \PHPExif\Exif::getFocalLength
     * @covers \PHPExif\Exif::getCreationDate
     * @covers \PHPExif\Exif::getAuthor
     * @covers \PHPExif\Exif::getCredit
     * @covers \PHPExif\Exif::getSource
     * @covers \PHPExif\Exif::getJobtitle
     * @covers \PHPExif\Exif::getMimeType
     * @covers \PHPExif\Exif::getFileSize
     * @covers \PHPExif\Exif::getHeadline
     * @covers \PHPExif\Exif::getColorSpace
     * @covers \PHPExif\Exif::getOrientation
     * @covers \PHPExif\Exif::getGPS
     * @param string $accessor
     */
    public function testUndefinedPropertiesReturnFalse($accessor)
    {
        $expected = false;
        $this->assertEquals($expected, $this->exif->$accessor());
    }

    /**
     * Data provider for testUndefinedPropertiesReturnFalse
     *
     * @return array
     */
    public function providerUndefinedPropertiesReturnFalse()
    {
        return array(
            array('getAperture'),
            array('getIso'),
            array('getExposure'),
            array('getExposureMilliseconds'),
            array('getFocusDistance'),
            array('getWidth'),
            array('getHeight'),
            array('getTitle'),
            array('getCaption'),
            array('getCopyright'),
            array('getKeywords'),
            array('getCamera'),
            array('getHorizontalResolution'),
            array('getVerticalResolution'),
            array('getSoftware'),
            array('getFocalLength'),
            array('getCreationDate'),
            array('getAuthor'),
            array('getHeadline'),
            array('getCredit'),
            array('getSource'),
            array('getJobtitle'),
            array('getMimeType'),
            array('getFileSize'),
            array('getHeadline'),
            array('getColorSpace'),
            array('getOrientation'),
            array('getGPS'),
        );
    }

    /**
     * @group exif
     * @covers \PHPExif\Exif::getAperture
     */
    public function testGetAperture()
    {
        $expected = 'f/8.0';
        $data[\PHPExif\Exif::APERTURE] = $expected;
        $this->exif->setData($data);

        $this->assertEquals($expected, $this->exif->getAperture());
    }

    /**
     * @group exif
     * @covers \PHPExif\Exif::getIso
     */
    public function testGetIso()
    {
        $expected = 200;
        $data[\PHPExif\Exif::ISO] = $expected;
        $this->exif->setData($data);
        $this->assertEquals($expected, $this->exif->getIso());
    }

    /**
     * @group exif
     * @covers \PHPExif\Exif::getExposure
     */
    public function testGetExposure()
    {
        $expected = '1/320';
        $data[\PHPExif\Exif::EXPOSURE] = $expected;
        $this->exif->setData($data);
        $this->assertEquals($expected, $this->exif->getExposure());
    }

    /**
     * @group exif
     * @covers \PHPExif\Exif::getExposureMilliseconds
     */
    public function testGetExposureMilliseconds()
    {
        $rawData = array(
            array(1/300, '1/300'),
            array(0.0025, 0.0025),
        );

        foreach ($rawData as $data) {
            $expected = reset($data);
            $value = end($data);

            $data[\PHPExif\Exif::EXPOSURE] = $value;
            $this->exif->setData($data);
            $this->assertEquals($expected, $this->exif->getExposureMilliseconds());
        }
    }

    /**
     * @group exif
     * @covers \PHPExif\Exif::getFocusDistance
     */
    public function testGetFocusDistance()
    {
        $expected = '7.94m';
        $data[\PHPExif\Exif::FOCAL_DISTANCE] = $expected;
        $this->exif->setData($data);
        $this->assertEquals($expected, $this->exif->getFocusDistance());
    }

    /**
     * @group exif
     * @covers \PHPExif\Exif::getWidth
     */
    public function testGetWidth()
    {
        $expected = 500;
        $data[\PHPExif\Exif::WIDTH] = $expected;
        $this->exif->setData($data);
        $this->assertEquals($expected, $this->exif->getWidth());
    }

    /**
     * @group exif
     * @covers \PHPExif\Exif::getHeight
     */
    public function testGetHeight()
    {
        $expected = 332;
        $data[\PHPExif\Exif::HEIGHT] = $expected;
        $this->exif->setData($data);
        $this->assertEquals($expected, $this->exif->getHeight());
    }

    /**
     * @group exif
     * @covers \PHPExif\Exif::getTitle
     */
    public function testGetTitle()
    {
        $expected = 'Morning Glory Pool';
        $data[\PHPExif\Exif::TITLE] = $expected;
        $this->exif->setData($data);
        $this->assertEquals($expected, $this->exif->getTitle());
    }

    /**
     * @group exif
     * @covers \PHPExif\Exif::getCaption
     */
    public function testGetCaption()
    {
        $expected = 'Foo Bar Baz';
        $data[\PHPExif\Exif::CAPTION] = $expected;
        $this->exif->setData($data);
        $this->assertEquals($expected, $this->exif->getCaption());
    }

    /**
     * @group exif
     * @covers \PHPExif\Exif::getCopyright
     */
    public function testGetCopyright()
    {
        $expected = 'Miljar';
        $data[\PHPExif\Exif::COPYRIGHT] = $expected;
        $this->exif->setData($data);
        $this->assertEquals($expected, $this->exif->getCopyright());
    }

    /**
     * @group exif
     * @covers \PHPExif\Exif::getKeywords
     */
    public function testGetKeywords()
    {
        $expected = array('18-200', 'D90', 'USA', 'Wyoming', 'Yellowstone');
        $data[\PHPExif\Exif::KEYWORDS] = $expected;
        $this->exif->setData($data);
        $this->assertEquals($expected, $this->exif->getKeywords());
    }

    /**
     * @group exif
     * @covers \PHPExif\Exif::getCamera
     */
    public function testGetCamera()
    {
        $expected = 'NIKON D90';
        $data[\PHPExif\Exif::CAMERA] = $expected;
        $this->exif->setData($data);
        $this->assertEquals($expected, $this->exif->getCamera());
    }

    /**
     * @group exif
     * @covers \PHPExif\Exif::getHorizontalResolution
     */
    public function testGetHorizontalResolution()
    {
        $expected = 240;
        $data[\PHPExif\Exif::HORIZONTAL_RESOLUTION] = $expected;
        $this->exif->setData($data);
        $this->assertEquals($expected, $this->exif->getHorizontalResolution());
    }

    /**
     * @group exif
     * @covers \PHPExif\Exif::getVerticalResolution
     */
    public function testGetVerticalResolution()
    {
        $expected = 240;
        $data[\PHPExif\Exif::VERTICAL_RESOLUTION] = $expected;
        $this->exif->setData($data);
        $this->assertEquals($expected, $this->exif->getVerticalResolution());
    }

    /**
     * @group exif
     * @covers \PHPExif\Exif::getSoftware
     */
    public function testGetSoftware()
    {
        $expected = 'Adobe Photoshop Lightroom';
        $data[\PHPExif\Exif::SOFTWARE] = $expected;
        $this->exif->setData($data);
        $this->assertEquals($expected, $this->exif->getSoftware());
    }

    /**
     * @group exif
     * @covers \PHPExif\Exif::getFocalLength
     */
    public function testGetFocalLength()
    {
        $expected = 18;
        $data[\PHPExif\Exif::FOCAL_LENGTH] = $expected;
        $this->exif->setData($data);
        $this->assertEquals($expected, $this->exif->getFocalLength());
    }

    /**
     * @group exif
     * @covers \PHPExif\Exif::getCreationDate
     */
    public function testGetCreationDate()
    {
        $expected = '2011-06-07 20:01:50';
        $input = \DateTime::createFromFormat('Y-m-d H:i:s', $expected);
        $data[\PHPExif\Exif::CREATION_DATE] = $input;
        $this->exif->setData($data);
        $this->assertEquals($expected, $this->exif->getCreationDate()->format('Y-m-d H:i:s'));
    }

    /**
     * @group exif
     * @covers \PHPExif\Exif::getAuthor
     */
    public function testGetAuthor()
    {
        $expected = 'John Smith';
        $data[\PHPExif\Exif::AUTHOR] = $expected;
        $this->exif->setData($data);
        $this->assertEquals($expected, $this->exif->getAuthor());
    }

    /**
     * @group exif
     * @covers \PHPExif\Exif::getHeadline
     */
    public function testGetHeadline()
    {
        $expected = 'Foobar Baz';
        $data[\PHPExif\Exif::HEADLINE] = $expected;
        $this->exif->setData($data);
        $this->assertEquals($expected, $this->exif->getHeadline());
    }

    /**
     * @group exif
     * @covers \PHPExif\Exif::getCredit
     */
    public function testGetCredit()
    {
        $expected = 'john.smith@example.com';
        $data[\PHPExif\Exif::CREDIT] = $expected;
        $this->exif->setData($data);
        $this->assertEquals($expected, $this->exif->getCredit());
    }

    /**
     * @group exif
     * @covers \PHPExif\Exif::getSource
     */
    public function testGetSource()
    {
        $expected = 'FBB NEWS';
        $data[\PHPExif\Exif::SOURCE] = $expected;
        $this->exif->setData($data);
        $this->assertEquals($expected, $this->exif->getSource());
    }

    /**
     * @group exif
     * @covers \PHPExif\Exif::getJobtitle
     */
    public function testGetJobtitle()
    {
        $expected = 'Yellowstone\'s geysers and pools';
        $data[\PHPExif\Exif::JOB_TITLE] = $expected;
        $this->exif->setData($data);
        $this->assertEquals($expected, $this->exif->getJobtitle());
    }

    /**
     * @group exif
     * @covers \PHPExif\Exif::getColorSpace
     */
    public function testGetColorSpace()
    {
        $expected = 'RGB';
        $data[\PHPExif\Exif::COLORSPACE] = $expected;
        $this->exif->setData($data);
        $this->assertEquals($expected, $this->exif->getColorSpace());
    }

    /**
     * @group exif
     * @covers \PHPExif\Exif::getMimeType
     */
    public function testGetMimeType()
    {
        $expected = 'image/jpeg';
        $data[\PHPExif\Exif::MIMETYPE] = $expected;
        $this->exif->setData($data);
        $this->assertEquals($expected, $this->exif->getMimeType());
    }

    /**
     * @group exif
     * @covers \PHPExif\Exif::getFileSize
     */
    public function testGetFileSize()
    {
        $expected = '27852365';
        $data[\PHPExif\Exif::FILESIZE] = $expected;
        $this->exif->setData($data);
        $this->assertEquals($expected, $this->exif->getFileSize());
    }

    /**
     * @group exif
     * @covers \PHPExif\Exif::getOrientation
     */
    public function testGetOrientation()
    {
        $expected = 1;
        $data[\PHPExif\Exif::ORIENTATION] = $expected;
        $this->exif->setData($data);
        $this->assertEquals($expected, $this->exif->getOrientation());
    }

    /**
     * @group exif
     * @covers \PHPExif\Exif::getGPS
     */
    public function testGetGPS()
    {
        $expected = '40.333452380556,-20.167314813889';
        $data[\PHPExif\Exif::GPS] = $expected;
        $this->exif->setData($data);
        $this->assertEquals($expected, $this->exif->getGPS());
    }

    /**
     * @group exif
     * @covers \PHPExif\Exif::setAperture
     * @covers \PHPExif\Exif::setIso
     * @covers \PHPExif\Exif::setExposure
     * @covers \PHPExif\Exif::setFocusDistance
     * @covers \PHPExif\Exif::setWidth
     * @covers \PHPExif\Exif::setHeight
     * @covers \PHPExif\Exif::setTitle
     * @covers \PHPExif\Exif::setCaption
     * @covers \PHPExif\Exif::setCopyright
     * @covers \PHPExif\Exif::setKeywords
     * @covers \PHPExif\Exif::setCamera
     * @covers \PHPExif\Exif::setHorizontalResolution
     * @covers \PHPExif\Exif::setVerticalResolution
     * @covers \PHPExif\Exif::setSoftware
     * @covers \PHPExif\Exif::setFocalLength
     * @covers \PHPExif\Exif::setCreationDate
     * @covers \PHPExif\Exif::setAuthor
     * @covers \PHPExif\Exif::setCredit
     * @covers \PHPExif\Exif::setSource
     * @covers \PHPExif\Exif::setJobtitle
     * @covers \PHPExif\Exif::setMimeType
     * @covers \PHPExif\Exif::setFileSize
     * @covers \PHPExif\Exif::setHeadline
     * @covers \PHPExif\Exif::setColorSpace
     * @covers \PHPExif\Exif::setOrientation
     * @covers \PHPExif\Exif::setGPS
     */
    public function testMutatorMethodsSetInProperty()
    {
        $reflClass = new \ReflectionClass(get_class($this->exif));
        $constants = $reflClass->getConstants();

        $reflProp = new \ReflectionProperty(get_class($this->exif), 'data');
        $reflProp->setAccessible(true);

        $expected = 'foo';
        foreach ($constants as $name => $value) {
            $setter = 'set' . ucfirst($value);

            switch ($value) {
                case 'creationdate':
                    $now = new \DateTime();
                    $this->exif->$setter($now);
                    $propertyValue = $reflProp->getValue($this->exif);
                    $this->assertSame($now, $propertyValue[$value]);
                    break;
                case 'gps':
                    $coords = '40.333452380556,-20.167314813889';
                    $setter = 'setGPS';
                    $this->exif->$setter($coords);
                    $propertyValue = $reflProp->getValue($this->exif);
                    $this->assertEquals($coords, $propertyValue[$value]);
                    break;
                case 'focalDistance':
                    $setter = 'setFocusDistance';
                default:
                    $this->exif->$setter($expected);
                    $propertyValue = $reflProp->getValue($this->exif);
                    $this->assertEquals($expected, $propertyValue[$value]);
                    break;
            }
        }
    }

    /**
     * Test that the values returned by both adapters are equal
     *
     * @group consistency
     * @covers \PHPExif\Exif::getAperture
     * @covers \PHPExif\Exif::getIso
     * @covers \PHPExif\Exif::getExposure
     * @covers \PHPExif\Exif::getExposureMilliseconds
     * @covers \PHPExif\Exif::getFocusDistance
     * @covers \PHPExif\Exif::getWidth
     * @covers \PHPExif\Exif::getHeight
     * @covers \PHPExif\Exif::getTitle
     * @covers \PHPExif\Exif::getCaption
     * @covers \PHPExif\Exif::getCopyright
     * @covers \PHPExif\Exif::getKeywords
     * @covers \PHPExif\Exif::getCamera
     * @covers \PHPExif\Exif::getHorizontalResolution
     * @covers \PHPExif\Exif::getVerticalResolution
     * @covers \PHPExif\Exif::getSoftware
     * @covers \PHPExif\Exif::getFocalLength
     * @covers \PHPExif\Exif::getCreationDate
     * @covers \PHPExif\Exif::getAuthor
     * @covers \PHPExif\Exif::getCredit
     * @covers \PHPExif\Exif::getSource
     * @covers \PHPExif\Exif::getJobtitle
     * @covers \PHPExif\Exif::getMimeType
     * @covers \PHPExif\Exif::getFileSize
     */
    public function testAdapterConsistency()
    {
        $reflClass = new \ReflectionClass('\PHPExif\Exif');
        $methods = $reflClass->getMethods(ReflectionMethod::IS_PUBLIC);
        $testfiles = array(
            PHPEXIF_TEST_ROOT . '/files/morning_glory_pool_500.jpg',
            PHPEXIF_TEST_ROOT . '/files/dsc_5794.jpg',
            PHPEXIF_TEST_ROOT . '/files/dsc_0003.jpg'
        );

        $adapter_exiftool = new \PHPExif\Adapter\Exiftool();
        $adapter_native = new \PHPExif\Adapter\Native();

        foreach ($testfiles as $file) {
            $result_exiftool = $adapter_exiftool->getExifFromFile($file);
            $result_native = $adapter_native->getExifFromFile($file);

            // find all Getter methods on the results and compare its output
            foreach ($methods as $method) {
                $name = $method->getName();
                if (strpos($name, 'get') !== 0 || $name == 'getRawData' || $name == 'getData' || $name == 'getColorSpace') {
                    continue;
                }
                $this->assertEquals(
                    call_user_func(array($result_native, $name)),
                    call_user_func(array($result_exiftool, $name)),
                    'Adapter difference detected in method "' . $name . '" on image "' . basename($file) . '"'
                );
            }
        }
    }
}

