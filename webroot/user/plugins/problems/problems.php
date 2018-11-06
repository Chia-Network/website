<?php
namespace Grav\Plugin;


use Grav\Common\Plugin;
use Grav\Common\Uri;
use Grav\Plugin\Problems\Base\ProblemChecker;

class ProblemsPlugin extends Plugin
{
    protected $checker;
    protected $problems = [];

    /**
     * @return array
     */
    public static function getSubscribedEvents()
    {
        return [
            'onPluginsInitialized' => ['onPluginsInitialized', 100001],
            'onFatalException' => ['onFatalException', 0]
        ];
    }

    public function onFatalException()
    {
        if ($this->isAdmin()) {
            return;
        }

        // Run through potential issues
        if ($this->problemsFound()) {
            $this->renderProblems();
        }
    }

    public function onPluginsInitialized()
    {
        if ($this->isAdmin()) {
            return;
        }

        require __DIR__ . '/vendor/autoload.php';
        $this->checker = new ProblemChecker();

        if (!$this->checker->statusFileExists()) {
            // If no issues remain, save a state file in the cache
            if (!$this->problemsFound()) {
                // delete any existing validated files
                foreach (new \GlobIterator(CACHE_DIR . ProblemChecker::PROBLEMS_PREFIX . '*') as $fileInfo) {
                    @unlink($fileInfo->getPathname());
                }
                // create a file in the cache dir so it only runs on cache changes
                $this->checker->storeStatusFile();
            } else {
                $this->renderProblems();
            }
        }
    }

    private function renderProblems()
    {
        /** @var Uri $uri */
        $uri = $this->grav['uri'];

        /** @var \Twig_Environment $twig */
        $twig = $this->getTwig();

        $data = [
            'problems' => $this->problems,
            'base_url' => $baseUrlRelative = $uri->rootUrl(false),
            'problems_url' => $baseUrlRelative . '/user/plugins/problems',
        ];

        echo $twig->render('problems.html.twig', $data);
        http_response_code(500);
        exit();
    }

    private function problemsFound()
    {
        $status = $this->checker->check(__DIR__ . '/classes/Problems');
        $this->problems = $this->checker->getProblems();
        
        return $status;
    }

    private function getTwig()
    {
        $loader = new \Twig_Loader_Filesystem(__DIR__ . '/templates');
        $twig = new \Twig_Environment($loader, ['debug' => true]);
        $twig->addExtension(New \Twig_Extension_Debug());

        return $twig;
    }
}
