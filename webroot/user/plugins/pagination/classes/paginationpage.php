<?php
namespace Grav\Plugin;

use Grav\Common\Grav;

class PaginationPage
{
    /**
     * @var Grav
     */
    protected $grav;

    /**
     * @var int
     */
    public $number;

    /**
     * @var string
     */
    public $url;

    /**
     * @var int
     */
    protected $delta=0;

    /**
     * Constructor
     *
     * @param int $number
     * @param string $url
     */
    public function __construct($number, $url)
    {
        $this->grav = Grav::instance();
        $this->number = $number;
        $this->url = $url;
        $this->delta = $this->grav['config']->get('plugins.pagination.delta');
    }

    /**
     * Returns true if the page is the current one.
     *
     * @return bool
     */
    public function isCurrent()
    {
        if ($this->grav['uri']->currentPage() == $this->number) {
            return true;
        }

        return false;
    }

    /**
     * Returns true if the page is within a configurable delta of the current one
     *
     * @return bool
     */
    public function isInDelta()
    {
        if (!$this->delta) {
            return true;
        }

        return abs($this->grav['uri']->currentPage() - $this->number) < $this->delta;
    }

    /**
     * Returns true is this page is the last/first one at the border of the delta range
     * (Used to display a "gap" li element ...)
     *
     * @return bool
     */
    public function isDeltaBorder()
    {
        if (!$this->delta) {
            return false;
        }

        return abs($this->grav['uri']->currentPage() - $this->number) == $this->delta;
    }
}
