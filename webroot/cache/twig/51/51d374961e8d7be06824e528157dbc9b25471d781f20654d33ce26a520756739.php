<?php

/* partials/base.html.twig */
class __TwigTemplate_852db7da4b80d90fd92b05bd16ce15138998374d8b66aaa3a1d5ffeb5c1fea6d extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'head' => array($this, 'block_head'),
            'stylesheets' => array($this, 'block_stylesheets'),
            'javascripts' => array($this, 'block_javascripts'),
            'body_classes' => array($this, 'block_body_classes'),
            'header_navigation' => array($this, 'block_header_navigation'),
            'content' => array($this, 'block_content'),
            'pagination' => array($this, 'block_pagination'),
            'bottom' => array($this, 'block_bottom'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<!DOCTYPE html>
<html lang=\"";
        // line 2
        echo (($this->getAttribute($this->getAttribute(($context["grav"] ?? null), "language", array()), "getLanguage", array())) ? ($this->getAttribute($this->getAttribute(($context["grav"] ?? null), "language", array()), "getLanguage", array())) : ("en"));
        echo "\">
    <head>
        ";
        // line 4
        $this->displayBlock('head', $context, $blocks);
        // line 39
        echo "    </head>

    <body class=\"";
        // line 41
        $this->displayBlock('body_classes', $context, $blocks);
        echo "\">
      <div class=\"bg-wrapper\">
        ";
        // line 43
        if ($this->getAttribute($this->getAttribute($this->getAttribute(($context["config"] ?? null), "plugins", array()), "langswitcher", array()), "enabled", array())) {
            // line 44
            echo "            ";
            $this->loadTemplate("partials/langswitcher.html.twig", "partials/base.html.twig", 44)->display($context);
            // line 45
            echo "        ";
        }
        // line 46
        echo "
        ";
        // line 47
        $this->displayBlock('header_navigation', $context, $blocks);
        // line 50
        echo "
        ";
        // line 51
        $this->displayBlock('content', $context, $blocks);
        // line 52
        echo "        ";
        $this->displayBlock('pagination', $context, $blocks);
        // line 53
        echo "      </div>
        <div class=\"body-content\">
          <div class=\"container\">
            <div class=\"row\">
              <div class=\"col-md extra-padding\">
                <h3>01 ——— USEFUL</h3>
                <h2>Your money, how and where you want it</h2>
                <p>Chia's targeted functionality does everything you can do with a bank account - but better, and without the bank. Transactions are easy, secure, and smart.</p>
              </div>
              <div class=\"col-md\">
                <video class=\"afterglow\" id=\"chia-1\" width=\"1920\" height=\"1080\" src=\"/user/themes/bootstrap4/assets/chia-video-1.mp4\" poster=\"/user/themes/bootstrap4/images/chia-video-1.png\"></video>
              </div>
            </div>
            <div class=\"row\">
              <div class=\"col-md\">
                <img src=\"/user/themes/bootstrap4/images/img-sustainable.png\" />
              </div>
              <div class=\"col-md extra-padding\">
                <h3>02 ——— SUSTAINABLE</h3>
                <h2>Digital money doesn't have to be wasteful</h2>
                <p>Traditional cryptocurrency mining is slow, wasteful, and centralized. Chia's method is energy efficient and broadly distributed, because even digital money should be green.</p>
              </div>
            </div>
            <div class=\"row\">
              <div class=\"col-md extra-padding\">
                <h3>03 ——— ACCESSIBLE</h3>
                <h2>Currency that's compatible for both professional and personal needs</h2>
                <p>Now, even multinational businesses can join our new financial world without fear of volatility or vulnerability.</p>
              </div>
              <div class=\"col-md\">
                <img src=\"/user/themes/bootstrap4/images/img-accessible.png\" />
              </div>
            </div>
          </div>
        </div>

        <div class=\"about-feature\">
          <div class=\"container\">
            <div class=\"row\">
              <div class=\"col-12\">
                <h2>The Chia Community</h2>
              </div>
            </div>
            <div class=\"row subhead\">
              <div class=\"col-md\">
                <h4>VDF Competition</h4>
                <p>To help improve our proof of time protocol with fast, open, and secure implementations, Chia is hosting a three-month, two-track competition for our VDF algorithm.</p>
                <h3><a href=\"https://github.com/Chia-Network/vdf-competition\">Learn more ➞</a></h3>
              </div>
              <div class=\"col-md\">
                <h4>Join our Keybase group</h4>
                <ul style=\"line-height: 200%;\">
                  <li>Install and set up Keybase</li>
                  <li>Run this in your terminal:<br />
                  <code>keybase team request-access chia_network.public</code></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class=\"about-investors\">
          <div class=\"container\">
            <div class=\"row\">
              <div class=\"col-md\">
                <img src=\"/user/themes/bootstrap4/images/img-wind.png\" />
              </div>
              <div class=\"col-md\">
                <h3>Our investors</h3>
                <ul class=\"investors\">
                  <li><img src=\"/user/themes/bootstrap4/assets/naval-ravikant.png\" class=\"image-grid\" /></li>
                  <li><img src=\"/user/themes/bootstrap4/assets/andreessen.png\" class=\"image-grid\" /></li>
                  <li><img src=\"/user/themes/bootstrap4/assets/greylock-partners.png\" class=\"image-grid\" /></li>
                  <li><img src=\"/user/themes/bootstrap4/assets/true-ventures.png\" class=\"image-grid\" /></li>
                  <li><img src=\"/user/themes/bootstrap4/assets/slow-ventures.png\" class=\"image-grid\" /></li>
                  <li><img src=\"/user/themes/bootstrap4/assets/galaxy-group.png\" class=\"image-grid\" /></li>
                  <li><img src=\"/user/themes/bootstrap4/assets/danhua-capital.png\" class=\"image-grid\" /></li>
                  <li><img src=\"/user/themes/bootstrap4/assets/stillmark-capital.png\" class=\"image-grid\" /></li>
                  <li><img src=\"/user/themes/bootstrap4/assets/dcm.png\" class=\"image-grid\" /></li>
                  <li><img src=\"/user/themes/bootstrap4/assets/metastable.png\" class=\"image-grid\" /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>


        <div class=\"lower-feature\">
          <div class=\"container\">
            <div class=\"row\">
              <div class=\"col-7\">
                <h2>We're hiring!</h2><a name=\"hiring\"></a>
                <p>We're looking to hire several technically gifted programmers to work with our team of cryptographers on building our protocol. Must have strong algorithms skills. Cryptography experience is a plus but not required. Remote is okay but being in San Francisco is a plus. To apply please complete a couple <a href=\"https://leetcode.com/contest/\">LeetCode</a> Contests and send a link to your LeetCode profile plus your resume to <a href=\"mailto:jobs@chia.net\">jobs@chia.net</a>.</p>
                <p><br /><a href=\"#\" class=\"lg-button\">Apply now ➞</a></p>
              </div>
            </div>
          </div>
        </div>

        <div class=\"footer\">
          <div class=\"container\">
            <div class=\"row\">
              <div class=\"col-sm\">
                <img src=\"/user/themes/bootstrap4/assets/chia-logo.svg\" class=\"footer-logo\" /><br />
                <p class=\"brand-green\">© Chia Network 2018</p>
              </div>
              <div class=\"col-sm\">
                <h6>Contact</h6>
                <p><a href=\"mailto:hello@chia.net\">hello@chia.net</a></p>
                <p>1-844-257-8433</p>
                <br />
                <p>44 Montgomery Street<br />
                  San Francisco, CA 94104</p>
              </div>
              <!--<div class=\"col-2\">
                <p class=\"text-muted\"></p>
              </div>-->
              <div class=\"col-sm\">
                <h6>Find Us</h6>
                <ul class=\"social\">
                  <li><a href=\"https://twitter.com/ChiaNetworkInc\"><i class=\"fa fa-twitter\"></i></a></li>
                  <li><a href=\"https://www.facebook.com/ChiaNetworkInc/\"><i class=\"fa fa-facebook-f\"></i></a></li>
                  <li><a href=\"https://medium.com/@chia_network\"><i class=\"fa fa-medium\"></i></a></li>
                  <li><a href=\"https://github.com/Chia-Network\"><i class=\"fa fa-github\"></i></a></li>
                </ul>
              </div>
            </div>
            <div class=\"row\">
              <div class=\"col-12\">
                <p class=\"text-muted\">By contributing to this repository, you agree to license your work under the MIT license unless specified otherwise in contrib/debian/copyright or at the top of the file itself. Any work contributed where you are not the original author must contain its license header with the original author(s) and source.</p>
              </div>
            </div>
          </div>
        </div>

        ";
        // line 188
        $this->displayBlock('bottom', $context, $blocks);
        // line 191
        echo "        <script type=\"text/javascript\" src=\"//cdn.jsdelivr.net/npm/afterglowplayer@1.x\"></script>
    </body>
</html>
";
    }

    // line 4
    public function block_head($context, array $blocks = array())
    {
        // line 5
        echo "        <meta charset=\"utf-8\" />
        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />
        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />

        ";
        // line 9
        $this->loadTemplate("partials/metadata.html.twig", "partials/base.html.twig", 9)->display($context);
        // line 10
        echo "
        <title>";
        // line 11
        if ($this->getAttribute(($context["header"] ?? null), "title", array())) {
            echo twig_escape_filter($this->env, $this->getAttribute(($context["header"] ?? null), "title", array()), "html");
            echo " | ";
        }
        echo twig_escape_filter($this->env, $this->getAttribute(($context["site"] ?? null), "title", array()), "html");
        echo "</title>
        <link rel=\"icon\" type=\"image/png\" href=\"";
        // line 12
        echo $this->env->getExtension('Grav\Common\Twig\TwigExtension')->urlFunc("theme://images/favicon.png", true);
        echo "\" />
        <link href=\"https://fonts.googleapis.com/css?family=Montserrat:300,800|Nunito+Sans:400,700\" rel=\"stylesheet\">
        <link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"apple-touch-icon.png\">
        <link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"favicon.ico\">
        <meta name=\"apple-mobile-web-app-title\" content=\"Chia\">
        <meta name=\"application-name\" content=\"Chia\">

        ";
        // line 19
        $this->displayBlock('stylesheets', $context, $blocks);
        // line 24
        echo "        ";
        echo $this->getAttribute(($context["assets"] ?? null), "css", array(), "method");
        echo "

        ";
        // line 26
        $this->displayBlock('javascripts', $context, $blocks);
        // line 36
        echo "        ";
        echo $this->getAttribute(($context["assets"] ?? null), "js", array(), "method");
        echo "

        ";
    }

    // line 19
    public function block_stylesheets($context, array $blocks = array())
    {
        // line 20
        echo "            ";
        $this->getAttribute(($context["assets"] ?? null), "add", array(0 => "theme://css/font-awesome.min.css", 1 => 99), "method");
        // line 21
        echo "            ";
        $this->getAttribute(($context["assets"] ?? null), "add", array(0 => "theme://css-compiled/theme.css", 1 => 98), "method");
        // line 22
        echo "            ";
        $this->getAttribute(($context["assets"] ?? null), "add", array(0 => "theme://css/custom.css", 1 => 97), "method");
        // line 23
        echo "        ";
    }

    // line 26
    public function block_javascripts($context, array $blocks = array())
    {
        // line 27
        echo "            ";
        $this->getAttribute(($context["assets"] ?? null), "add", array(0 => "jquery", 1 => 101), "method");
        // line 28
        echo "            ";
        $this->getAttribute(($context["assets"] ?? null), "add", array(0 => "theme://js/modernizr-custom.js", 1 => 100), "method");
        // line 29
        echo "            ";
        $this->getAttribute(($context["assets"] ?? null), "add", array(0 => "theme://js/site.js", 1 => array("group" => "bottom")), "method");
        // line 30
        echo "
            ";
        // line 31
        if (((($this->getAttribute(($context["browser"] ?? null), "getBrowser", array()) == "msie") && ($this->getAttribute(($context["browser"] ?? null), "getVersion", array()) >= 8)) && ($this->getAttribute(($context["browser"] ?? null), "getVersion", array()) <= 9))) {
            // line 32
            echo "                ";
            $this->getAttribute(($context["assets"] ?? null), "add", array(0 => "https://oss.maxcdn.com/respond/1.4.2/respond.min.js"), "method");
            // line 33
            echo "                ";
            $this->getAttribute(($context["assets"] ?? null), "add", array(0 => "theme://js/html5shiv-printshiv.min.js"), "method");
            // line 34
            echo "            ";
        }
        // line 35
        echo "        ";
    }

    // line 41
    public function block_body_classes($context, array $blocks = array())
    {
        echo $this->getAttribute($this->getAttribute(($context["page"] ?? null), "header", array()), "body_classes", array());
    }

    // line 47
    public function block_header_navigation($context, array $blocks = array())
    {
        // line 48
        echo "            ";
        $this->loadTemplate("partials/navigation.html.twig", "partials/base.html.twig", 48)->display($context);
        // line 49
        echo "        ";
    }

    // line 51
    public function block_content($context, array $blocks = array())
    {
    }

    // line 52
    public function block_pagination($context, array $blocks = array())
    {
    }

    // line 188
    public function block_bottom($context, array $blocks = array())
    {
        // line 189
        echo "            ";
        echo $this->getAttribute(($context["assets"] ?? null), "js", array(0 => "bottom"), "method");
        echo "
        ";
    }

    public function getTemplateName()
    {
        return "partials/base.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  338 => 189,  335 => 188,  330 => 52,  325 => 51,  321 => 49,  318 => 48,  315 => 47,  309 => 41,  305 => 35,  302 => 34,  299 => 33,  296 => 32,  294 => 31,  291 => 30,  288 => 29,  285 => 28,  282 => 27,  279 => 26,  275 => 23,  272 => 22,  269 => 21,  266 => 20,  263 => 19,  255 => 36,  253 => 26,  247 => 24,  245 => 19,  235 => 12,  227 => 11,  224 => 10,  222 => 9,  216 => 5,  213 => 4,  206 => 191,  204 => 188,  67 => 53,  64 => 52,  62 => 51,  59 => 50,  57 => 47,  54 => 46,  51 => 45,  48 => 44,  46 => 43,  41 => 41,  37 => 39,  35 => 4,  30 => 2,  27 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("<!DOCTYPE html>
<html lang=\"{{ grav.language.getLanguage ?: 'en' }}\">
    <head>
        {% block head %}
        <meta charset=\"utf-8\" />
        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />
        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />

        {% include 'partials/metadata.html.twig' %}

        <title>{% if header.title %}{{ header.title|e('html') }} | {% endif %}{{ site.title|e('html') }}</title>
        <link rel=\"icon\" type=\"image/png\" href=\"{{ url('theme://images/favicon.png', true) }}\" />
        <link href=\"https://fonts.googleapis.com/css?family=Montserrat:300,800|Nunito+Sans:400,700\" rel=\"stylesheet\">
        <link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"apple-touch-icon.png\">
        <link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"favicon.ico\">
        <meta name=\"apple-mobile-web-app-title\" content=\"Chia\">
        <meta name=\"application-name\" content=\"Chia\">

        {% block stylesheets %}
            {% do assets.add('theme://css/font-awesome.min.css',99) %}
            {% do assets.add('theme://css-compiled/theme.css',98) %}
            {% do assets.add('theme://css/custom.css',97) %}
        {% endblock %}
        {{ assets.css() }}

        {% block javascripts %}
            {% do assets.add('jquery', 101) %}
            {% do assets.add('theme://js/modernizr-custom.js', 100) %}
            {% do assets.add('theme://js/site.js', {group:'bottom'}) %}

            {% if browser.getBrowser == 'msie' and browser.getVersion >= 8 and browser.getVersion <= 9 %}
                {% do assets.add('https://oss.maxcdn.com/respond/1.4.2/respond.min.js') %}
                {% do assets.add('theme://js/html5shiv-printshiv.min.js') %}
            {% endif %}
        {% endblock %}
        {{ assets.js() }}

        {% endblock head %}
    </head>

    <body class=\"{% block body_classes %}{{ page.header.body_classes }}{% endblock %}\">
      <div class=\"bg-wrapper\">
        {% if config.plugins.langswitcher.enabled %}
            {% include 'partials/langswitcher.html.twig' %}
        {% endif %}

        {% block header_navigation %}
            {% include 'partials/navigation.html.twig' %}
        {% endblock %}

        {% block content %}{% endblock %}
        {% block pagination %}{% endblock %}
      </div>
        <div class=\"body-content\">
          <div class=\"container\">
            <div class=\"row\">
              <div class=\"col-md extra-padding\">
                <h3>01 ——— USEFUL</h3>
                <h2>Your money, how and where you want it</h2>
                <p>Chia's targeted functionality does everything you can do with a bank account - but better, and without the bank. Transactions are easy, secure, and smart.</p>
              </div>
              <div class=\"col-md\">
                <video class=\"afterglow\" id=\"chia-1\" width=\"1920\" height=\"1080\" src=\"/user/themes/bootstrap4/assets/chia-video-1.mp4\" poster=\"/user/themes/bootstrap4/images/chia-video-1.png\"></video>
              </div>
            </div>
            <div class=\"row\">
              <div class=\"col-md\">
                <img src=\"/user/themes/bootstrap4/images/img-sustainable.png\" />
              </div>
              <div class=\"col-md extra-padding\">
                <h3>02 ——— SUSTAINABLE</h3>
                <h2>Digital money doesn't have to be wasteful</h2>
                <p>Traditional cryptocurrency mining is slow, wasteful, and centralized. Chia's method is energy efficient and broadly distributed, because even digital money should be green.</p>
              </div>
            </div>
            <div class=\"row\">
              <div class=\"col-md extra-padding\">
                <h3>03 ——— ACCESSIBLE</h3>
                <h2>Currency that's compatible for both professional and personal needs</h2>
                <p>Now, even multinational businesses can join our new financial world without fear of volatility or vulnerability.</p>
              </div>
              <div class=\"col-md\">
                <img src=\"/user/themes/bootstrap4/images/img-accessible.png\" />
              </div>
            </div>
          </div>
        </div>

        <div class=\"about-feature\">
          <div class=\"container\">
            <div class=\"row\">
              <div class=\"col-12\">
                <h2>The Chia Community</h2>
              </div>
            </div>
            <div class=\"row subhead\">
              <div class=\"col-md\">
                <h4>VDF Competition</h4>
                <p>To help improve our proof of time protocol with fast, open, and secure implementations, Chia is hosting a three-month, two-track competition for our VDF algorithm.</p>
                <h3><a href=\"https://github.com/Chia-Network/vdf-competition\">Learn more ➞</a></h3>
              </div>
              <div class=\"col-md\">
                <h4>Join our Keybase group</h4>
                <ul style=\"line-height: 200%;\">
                  <li>Install and set up Keybase</li>
                  <li>Run this in your terminal:<br />
                  <code>keybase team request-access chia_network.public</code></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class=\"about-investors\">
          <div class=\"container\">
            <div class=\"row\">
              <div class=\"col-md\">
                <img src=\"/user/themes/bootstrap4/images/img-wind.png\" />
              </div>
              <div class=\"col-md\">
                <h3>Our investors</h3>
                <ul class=\"investors\">
                  <li><img src=\"/user/themes/bootstrap4/assets/naval-ravikant.png\" class=\"image-grid\" /></li>
                  <li><img src=\"/user/themes/bootstrap4/assets/andreessen.png\" class=\"image-grid\" /></li>
                  <li><img src=\"/user/themes/bootstrap4/assets/greylock-partners.png\" class=\"image-grid\" /></li>
                  <li><img src=\"/user/themes/bootstrap4/assets/true-ventures.png\" class=\"image-grid\" /></li>
                  <li><img src=\"/user/themes/bootstrap4/assets/slow-ventures.png\" class=\"image-grid\" /></li>
                  <li><img src=\"/user/themes/bootstrap4/assets/galaxy-group.png\" class=\"image-grid\" /></li>
                  <li><img src=\"/user/themes/bootstrap4/assets/danhua-capital.png\" class=\"image-grid\" /></li>
                  <li><img src=\"/user/themes/bootstrap4/assets/stillmark-capital.png\" class=\"image-grid\" /></li>
                  <li><img src=\"/user/themes/bootstrap4/assets/dcm.png\" class=\"image-grid\" /></li>
                  <li><img src=\"/user/themes/bootstrap4/assets/metastable.png\" class=\"image-grid\" /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>


        <div class=\"lower-feature\">
          <div class=\"container\">
            <div class=\"row\">
              <div class=\"col-7\">
                <h2>We're hiring!</h2><a name=\"hiring\"></a>
                <p>We're looking to hire several technically gifted programmers to work with our team of cryptographers on building our protocol. Must have strong algorithms skills. Cryptography experience is a plus but not required. Remote is okay but being in San Francisco is a plus. To apply please complete a couple <a href=\"https://leetcode.com/contest/\">LeetCode</a> Contests and send a link to your LeetCode profile plus your resume to <a href=\"mailto:jobs@chia.net\">jobs@chia.net</a>.</p>
                <p><br /><a href=\"#\" class=\"lg-button\">Apply now ➞</a></p>
              </div>
            </div>
          </div>
        </div>

        <div class=\"footer\">
          <div class=\"container\">
            <div class=\"row\">
              <div class=\"col-sm\">
                <img src=\"/user/themes/bootstrap4/assets/chia-logo.svg\" class=\"footer-logo\" /><br />
                <p class=\"brand-green\">© Chia Network 2018</p>
              </div>
              <div class=\"col-sm\">
                <h6>Contact</h6>
                <p><a href=\"mailto:hello@chia.net\">hello@chia.net</a></p>
                <p>1-844-257-8433</p>
                <br />
                <p>44 Montgomery Street<br />
                  San Francisco, CA 94104</p>
              </div>
              <!--<div class=\"col-2\">
                <p class=\"text-muted\"></p>
              </div>-->
              <div class=\"col-sm\">
                <h6>Find Us</h6>
                <ul class=\"social\">
                  <li><a href=\"https://twitter.com/ChiaNetworkInc\"><i class=\"fa fa-twitter\"></i></a></li>
                  <li><a href=\"https://www.facebook.com/ChiaNetworkInc/\"><i class=\"fa fa-facebook-f\"></i></a></li>
                  <li><a href=\"https://medium.com/@chia_network\"><i class=\"fa fa-medium\"></i></a></li>
                  <li><a href=\"https://github.com/Chia-Network\"><i class=\"fa fa-github\"></i></a></li>
                </ul>
              </div>
            </div>
            <div class=\"row\">
              <div class=\"col-12\">
                <p class=\"text-muted\">By contributing to this repository, you agree to license your work under the MIT license unless specified otherwise in contrib/debian/copyright or at the top of the file itself. Any work contributed where you are not the original author must contain its license header with the original author(s) and source.</p>
              </div>
            </div>
          </div>
        </div>

        {% block bottom %}
            {{ assets.js('bottom') }}
        {% endblock %}
        <script type=\"text/javascript\" src=\"//cdn.jsdelivr.net/npm/afterglowplayer@1.x\"></script>
    </body>
</html>
", "partials/base.html.twig", "/Users/stephanie/Dropbox/Projects/chia-network/grav/user/themes/bootstrap4/templates/partials/base.html.twig");
    }
}
