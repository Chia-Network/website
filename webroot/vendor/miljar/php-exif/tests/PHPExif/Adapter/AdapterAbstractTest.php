<?php
/**
 * @covers \PHPExif\Adapter\AdapterAbstract::<!public>
 * @covers \PHPExif\Adapter\AdapterInterface
 */
class AdapterAbstractTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @var \PHPExif\Adapter\Exiftool|\PHPExif\Adapter\Native
     */
    protected $adapter;

    public function setUp()
    {
        $this->adapter = new \PHPExif\Adapter\Native();
    }

    /**
     * @group adapter
     * @covers \PHPExif\Adapter\AdapterAbstract::setOptions
     */
    public function testSetOptionsReturnsCurrentInstance()
    {
        $result = $this->adapter->setOptions(array());
        $this->assertSame($this->adapter, $result);
    }

    /**
     * @group adapter
     * @covers \PHPExif\Adapter\AdapterAbstract::setOptions
     */
    public function testSetOptionsCorrectlySetsProperties()
    {
        $expected = array(
            'requiredSections'  => array('foo', 'bar', 'baz',),
            'includeThumbnail' => \PHPExif\Adapter\Native::INCLUDE_THUMBNAIL,
            'sectionsAsArrays' => \PHPExif\Adapter\Native::SECTIONS_AS_ARRAYS,
        );
        $this->adapter->setOptions($expected);

        foreach ($expected as $key => $value) {
            $reflProp = new \ReflectionProperty('\\PHPExif\\Adapter\\Native', $key);
            $reflProp->setAccessible(true);
            $this->assertEquals($value, $reflProp->getValue($this->adapter));
        }
    }

    /**
     * @group adapter
     * @covers \PHPExif\Adapter\AdapterAbstract::setOptions
     */
    public function testSetOptionsIgnoresPropertiesWithoutSetters()
    {
        $expected = array(
            'iptcMapping' => array('foo', 'bar', 'baz'),
        );
        $this->adapter->setOptions($expected);

        foreach ($expected as $key => $value) {
            $reflProp = new \ReflectionProperty('\\PHPExif\\Adapter\\Native', $key);
            $reflProp->setAccessible(true);
            $this->assertNotEquals($value, $reflProp->getValue($this->adapter));
        }
    }


    /**
     * @group adapter
     * @covers \PHPExif\Adapter\AdapterAbstract::__construct
     */
    public function testConstructorSetsOptions()
    {
        $expected = array(
            'requiredSections'  => array('foo', 'bar', 'baz',),
            'includeThumbnail' => \PHPExif\Adapter\Native::INCLUDE_THUMBNAIL,
            'sectionsAsArrays' => \PHPExif\Adapter\Native::SECTIONS_AS_ARRAYS,
        );
        $adapter = new \PHPExif\Adapter\Native($expected);

        foreach ($expected as $key => $value) {
            $reflProp = new \ReflectionProperty('\\PHPExif\\Adapter\\Native', $key);
            $reflProp->setAccessible(true);
            $this->assertEquals($value, $reflProp->getValue($adapter));
        }
    }

    /**
     * @group adapter
     * @covers \PHPExif\Adapter\AdapterAbstract::setMapper
     */
    public function testSetMapperReturnsCurrentInstance()
    {
        $mapper = new \PHPExif\Mapper\Native();
        $result = $this->adapter->setMapper($mapper);
        $this->assertSame($this->adapter, $result);
    }

    /**
     * @group adapter
     * @covers \PHPExif\Adapter\AdapterAbstract::setMapper
     */
    public function testSetMapperCorrectlySetsInProperty()
    {
        $mapper = new \PHPExif\Mapper\Native();
        $this->adapter->setMapper($mapper);

        $reflProp = new \ReflectionProperty('\\PHPExif\\Adapter\\AdapterAbstract', 'mapper');
        $reflProp->setAccessible(true);
        $this->assertSame($mapper, $reflProp->getValue($this->adapter));
    }

    /**
     * @group adapter
     * @covers \PHPExif\Adapter\AdapterAbstract::getMapper
     */
    public function testGetMapperCorrectlyReturnsFromProperty()
    {
        $mapper = new \PHPExif\Mapper\Native();
        $reflProp = new \ReflectionProperty('\\PHPExif\\Adapter\\AdapterAbstract', 'mapper');
        $reflProp->setAccessible(true);
        $reflProp->setValue($this->adapter, $mapper);
        $this->assertSame($mapper, $this->adapter->getMapper());
    }

    /**
     * @group adapter
     * @covers \PHPExif\Adapter\AdapterAbstract::getMapper
     */
    public function testGetMapperLazyLoadsMapperWhenNotPresent()
    {
        $reflProp = new \ReflectionProperty(
            get_class($this->adapter),
            'mapperClass'
        );

        $mapperClass = '\\PHPExif\\Mapper\\Native';
        $reflProp->setAccessible(true);
        $reflProp->setValue($this->adapter, $mapperClass);

        $this->assertInstanceOf($mapperClass, $this->adapter->getMapper());
    }

    /**
     * @group adapter
     * @covers \PHPExif\Adapter\AdapterAbstract::getMapper
     */
    public function testGetMapperLazyLoadingSetsInProperty()
    {
        $reflProp = new \ReflectionProperty(
            get_class($this->adapter),
            'mapperClass'
        );

        $mapperClass = '\\PHPExif\\Mapper\\Native';
        $reflProp->setAccessible(true);
        $reflProp->setValue($this->adapter, $mapperClass);

        $reflProp2 = new \ReflectionProperty(
            get_class($this->adapter),
            'mapper'
        );
        $reflProp2->setAccessible(true);
        $this->adapter->getMapper();
        $this->assertInstanceOf($mapperClass, $reflProp2->getValue($this->adapter));
    }

    /**
     * @group adapter
     * @covers \PHPExif\Adapter\AdapterAbstract::setHydrator
     */
    public function testSetHydratorReturnsCurrentInstance()
    {
        $hydrator = new \PHPExif\Hydrator\Mutator();
        $result = $this->adapter->setHydrator($hydrator);
        $this->assertSame($this->adapter, $result);
    }

    /**
     * @group adapter
     * @covers \PHPExif\Adapter\AdapterAbstract::setHydrator
     */
    public function testSetHydratorCorrectlySetsInProperty()
    {
        $hydrator = new \PHPExif\Hydrator\Mutator();
        $this->adapter->setHydrator($hydrator);

        $reflProp = new \ReflectionProperty('\\PHPExif\\Adapter\\AdapterAbstract', 'hydrator');
        $reflProp->setAccessible(true);
        $this->assertSame($hydrator, $reflProp->getValue($this->adapter));
    }

    /**
     * @group adapter
     * @covers \PHPExif\Adapter\AdapterAbstract::getHydrator
     */
    public function testGetHydratorCorrectlyReturnsFromProperty()
    {
        $hydrator = new \PHPExif\Hydrator\Mutator();
        $reflProp = new \ReflectionProperty('\\PHPExif\\Adapter\\AdapterAbstract', 'hydrator');
        $reflProp->setAccessible(true);
        $reflProp->setValue($this->adapter, $hydrator);
        $this->assertSame($hydrator, $this->adapter->getHydrator());
    }

    /**
     * @group adapter
     * @covers \PHPExif\Adapter\AdapterAbstract::getHydrator
     */
    public function testGetHydratorLazyLoadsHydratorWhenNotPresent()
    {
        $hydratorClass = '\\PHPExif\\Hydrator\\Mutator';
        $this->assertInstanceOf($hydratorClass, $this->adapter->getHydrator());
    }

    /**
     * @group adapter
     * @covers \PHPExif\Adapter\AdapterAbstract::getHydrator
     */
    public function testGetHydratorLazyLoadingSetsInProperty()
    {
        $hydratorClass = '\\PHPExif\\Hydrator\\Mutator';

        $reflProp = new \ReflectionProperty(
            get_class($this->adapter),
            'hydrator'
        );
        $reflProp->setAccessible(true);
        $this->adapter->getHydrator();
        $this->assertInstanceOf($hydratorClass, $reflProp->getValue($this->adapter));
    }
}

