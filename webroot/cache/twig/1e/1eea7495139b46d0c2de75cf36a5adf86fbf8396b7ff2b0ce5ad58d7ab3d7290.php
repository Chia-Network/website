<?php

/* modular.html.twig */
class __TwigTemplate_bbaebea0d0f57af67fd58370e5572dee0407fccdc18db9e51d8824749c0f196f extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("partials/base.html.twig", "modular.html.twig", 1);
        $this->blocks = array(
            'javascripts' => array($this, 'block_javascripts'),
            'bottom' => array($this, 'block_bottom'),
            'body_classes' => array($this, 'block_body_classes'),
            'header_navigation' => array($this, 'block_header_navigation'),
            'content' => array($this, 'block_content'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "partials/base.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 3
        $context["show_onpage_menu"] = (($this->getAttribute(($context["header"] ?? null), "onpage_menu", array()) == true) || (null === $this->getAttribute(($context["header"] ?? null), "onpage_menu", array())));
        // line 1
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 6
    public function block_javascripts($context, array $blocks = array())
    {
        // line 7
        echo "    ";
        if (($context["show_onpage_menu"] ?? null)) {
            // line 8
            echo "        ";
            $this->getAttribute(($context["assets"] ?? null), "add", array(0 => "theme://js/singlePageNav.min.js"), "method");
            // line 9
            echo "    ";
        }
        // line 10
        echo "    ";
        $this->displayParentBlock("javascripts", $context, $blocks);
        echo "
";
    }

    // line 13
    public function block_bottom($context, array $blocks = array())
    {
        // line 14
        echo "    ";
        $this->displayParentBlock("bottom", $context, $blocks);
        echo "
    ";
        // line 15
        if (($context["show_onpage_menu"] ?? null)) {
            // line 16
            echo "        <script>
        // singlePageNav initialization & configuration
        \$('.navbar-nav').singlePageNav({
            //offset: \$('#header').outerHeight(),
            filter: ':not(.external)',
            updateHash: true,
            currentClass: 'active'
        });
        </script>
    ";
        }
    }

    // line 28
    public function block_body_classes($context, array $blocks = array())
    {
        $this->displayParentBlock("body_classes", $context, $blocks);
        echo " ";
        if (($context["show_onpage_menu"] ?? null)) {
            echo "fixed-nav";
        }
        echo " ";
    }

    // line 30
    public function block_header_navigation($context, array $blocks = array())
    {
        // line 31
        echo "    ";
        if (($context["show_onpage_menu"] ?? null)) {
            // line 32
            echo "        <nav class=\"navbar navbar-expand-md navbar-light bg-light fixed-top\" role=\"navigation\">
            <div class=\"container\">
                <a class=\"navbar-brand\" href=\"";
            // line 34
            echo (((($context["base_url"] ?? null) == "")) ? ("/") : (($context["base_url"] ?? null)));
            echo "\">";
            echo twig_escape_filter($this->env, $this->getAttribute(($context["site"] ?? null), "title", array()), "html");
            echo "</a>
                <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\".navbar-collapse\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">
                    <span class=\"navbar-toggler-icon\"></span>
                </button>

                <div class=\"navbar-collapse collapse justify-content-end\">
                    <ul class=\"navbar-nav\">
                        ";
            // line 41
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute(($context["page"] ?? null), "collection", array(), "method"));
            foreach ($context['_seq'] as $context["_key"] => $context["module"]) {
                // line 42
                echo "
                            ";
                // line 43
                $context["current_module"] = ((($this->getAttribute($context["module"], "active", array()) || $this->getAttribute($context["module"], "activeChild", array()))) ? ("active") : (""));
                // line 44
                echo "                            <li class=\"nav-item ";
                echo ($context["current_module"] ?? null);
                echo "\"><a class=\"nav-link\" href=\"#";
                echo $this->getAttribute($this, "pageLinkName", array(0 => $this->getAttribute($context["module"], "menu", array())), "method");
                echo "\">";
                echo $this->getAttribute($context["module"], "menu", array());
                echo "</a></li>

                        ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['module'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 47
            echo "                    </ul>
                </div>
            </div>
        </nav>
    ";
        } else {
            // line 52
            echo "        ";
            $this->displayParentBlock("header_navigation", $context, $blocks);
            echo "
    ";
        }
    }

    // line 56
    public function block_content($context, array $blocks = array())
    {
        // line 57
        echo "    ";
        echo $this->getAttribute(($context["page"] ?? null), "content", array());
        echo "
    ";
        // line 58
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute(($context["page"] ?? null), "collection", array(), "method"));
        foreach ($context['_seq'] as $context["_key"] => $context["module"]) {
            // line 59
            echo "        <div class=\"modular-anchor\" id=\"";
            echo $this->getAttribute($this, "pageLinkName", array(0 => $this->getAttribute($context["module"], "menu", array())), "method");
            echo "\"></div>
        ";
            // line 60
            echo $this->getAttribute($context["module"], "content", array());
            echo "
    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['module'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
    }

    // line 4
    public function getpageLinkName($__text__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "text" => $__text__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            echo twig_replace_filter(twig_lower_filter($this->env, ($context["text"] ?? null)), array(" " => "_"));
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        } catch (Throwable $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    public function getTemplateName()
    {
        return "modular.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  176 => 4,  166 => 60,  161 => 59,  157 => 58,  152 => 57,  149 => 56,  141 => 52,  134 => 47,  120 => 44,  118 => 43,  115 => 42,  111 => 41,  99 => 34,  95 => 32,  92 => 31,  89 => 30,  78 => 28,  64 => 16,  62 => 15,  57 => 14,  54 => 13,  47 => 10,  44 => 9,  41 => 8,  38 => 7,  35 => 6,  31 => 1,  29 => 3,  11 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("{% extends 'partials/base.html.twig' %}

{% set show_onpage_menu = header.onpage_menu == true or header.onpage_menu is null %}
{% macro pageLinkName(text) %}{{ text|lower|replace({' ':'_'}) }}{% endmacro %}

{% block javascripts %}
    {% if show_onpage_menu %}
        {% do assets.add('theme://js/singlePageNav.min.js') %}
    {% endif %}
    {{ parent() }}
{% endblock %}

{% block bottom %}
    {{ parent() }}
    {% if show_onpage_menu %}
        <script>
        // singlePageNav initialization & configuration
        \$('.navbar-nav').singlePageNav({
            //offset: \$('#header').outerHeight(),
            filter: ':not(.external)',
            updateHash: true,
            currentClass: 'active'
        });
        </script>
    {% endif %}
{% endblock %}

{% block body_classes %}{{ parent() }} {% if show_onpage_menu %}fixed-nav{% endif %} {% endblock %}

{% block header_navigation %}
    {% if show_onpage_menu %}
        <nav class=\"navbar navbar-expand-md navbar-light bg-light fixed-top\" role=\"navigation\">
            <div class=\"container\">
                <a class=\"navbar-brand\" href=\"{{ base_url == '' ? '/' : base_url }}\">{{ site.title|e('html') }}</a>
                <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\".navbar-collapse\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">
                    <span class=\"navbar-toggler-icon\"></span>
                </button>

                <div class=\"navbar-collapse collapse justify-content-end\">
                    <ul class=\"navbar-nav\">
                        {% for module in page.collection() %}

                            {% set current_module = (module.active or module.activeChild) ? 'active' : '' %}
                            <li class=\"nav-item {{ current_module }}\"><a class=\"nav-link\" href=\"#{{ _self.pageLinkName(module.menu) }}\">{{ module.menu }}</a></li>

                        {% endfor %}
                    </ul>
                </div>
            </div>
        </nav>
    {% else %}
        {{ parent() }}
    {% endif %}
{% endblock %}

{% block content %}
    {{ page.content }}
    {% for module in page.collection() %}
        <div class=\"modular-anchor\" id=\"{{ _self.pageLinkName(module.menu) }}\"></div>
        {{ module.content }}
    {% endfor %}
{% endblock %}
", "modular.html.twig", "/Users/stephanie/Dropbox/Projects/chia-network/grav/user/themes/bootstrap4/templates/modular.html.twig");
    }
}
