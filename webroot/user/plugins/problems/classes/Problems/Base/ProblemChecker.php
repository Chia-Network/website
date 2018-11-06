<?php
namespace Grav\Plugin\Problems\Base;

use Grav\Common\Cache;
use Grav\Common\Grav;
use RocketTheme\Toolbox\Event\Event;

class ProblemChecker
{
    const PROBLEMS_PREFIX = 'problem-check-';

    protected $problems = [];
    protected $status_file;


    public function __construct()
    {
        /** @var Cache $cache */
        $cache = Grav::instance()['cache'];
        $this->status_file = CACHE_DIR . $this::PROBLEMS_PREFIX . $cache->getKey() . '.json';
    }

    public function load()
    {
        if ($this->statusFileExists()) {
            $json = file_get_contents($this->status_file);
            $data = json_decode($json, true);

            foreach ($data as $problem) {
                $class = $problem['class'];
                $this->problems[] = new $class($problem);
            }
        }
    }

    public function getStatusFile()
    {
        return $this->status_file;
    }

    public function statusFileExists()
    {
        return file_exists($this->status_file);
    }


    public function storeStatusFile()
    {
        $problems = $this->getProblemsSerializable();
        $json = json_encode($problems);
        file_put_contents($this->status_file, $json);
    }

    public function check($problems_dir)
    {
        $problems = [];
        $problems_found = false;

        foreach (new \DirectoryIterator($problems_dir) as $file) {
            if ($file->isDot() || $file->isDir()) {
                continue;
            }
            $classname = 'Grav\\Plugin\\Problems\\' . $file->getBasename('.php');
            /** @var Problem $problem */
            $problem = new $classname();
            $problems[$problem->getId()] = $problem;
        }

        // Fire event to allow other plugins to add problems
        Grav::instance()->fireEvent('onProblemsInitialized', new Event(['problems' => $problems]));

        // Get the problems in order
        usort($problems, function($a, $b) {
            return $b->getOrder() - $a->getOrder();
        });

        // run the process methods in new order
        foreach ($problems as $problem) {
            $problem->process();
            if ($problem->getStatus() === false && $problem->getLevel() === Problem::LEVEL_CRITICAL) {
                $problems_found = true;
            }
        }

        $this->problems = $problems;

        return $problems_found;
    }

    public function getProblems()
    {
        if (empty($this->problems)) {
            $this->check();
        }

        $problems = $this->problems;

        // Put the failed ones first
        usort($problems, function($a, $b) {
            return $a->getStatus() - $b->getStatus();
        });

        return $problems;
    }

    public function getProblemsSerializable()
    {
        if (empty($this->problems)) {
            $this->getProblems();
        }

        $problems = [];
        foreach ($this->problems as $problem) {
            $problems[] = $problem->toArray();
        }
        return $problems;
    }

}