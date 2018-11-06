<?php

/* partials/navigation.html.twig */
class __TwigTemplate_40658936e2454f5bd2ad12e61d06c379e79615123c4338c63f2f24f31cae4758 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        $context["navbar_style"] = $this->env->getExtension('Grav\Common\Twig\TwigExtension')->themeVarFunc("navbar_style");
        // line 2
        $context["navbar_bgcolor"] = $this->env->getExtension('Grav\Common\Twig\TwigExtension')->themeVarFunc("navbar_bgcolor");
        // line 3
        echo "<nav class=\"navbar navbar-expand-md ";
        echo ($context["navbar_style"] ?? null);
        echo "\" role=\"navigation\">
    <div class=\"container\">
        <a class=\"navbar-brand\" href=\"";
        // line 5
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
        // line 12
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute($this->getAttribute(($context["pages"] ?? null), "children", array()), "visible", array()));
        foreach ($context['_seq'] as $context["_key"] => $context["page"]) {
            // line 13
            echo "                    ";
            $context["current_page"] = ((($this->getAttribute($context["page"], "active", array()) || $this->getAttribute($context["page"], "activeChild", array()))) ? ("active") : (""));
            // line 14
            echo "                    ";
            if (($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute(($context["config"] ?? null), "themes", array()), "bootstrap4", array()), "dropdown", array()), "enabled", array()) && ($this->getAttribute($this->getAttribute($this->getAttribute($context["page"], "children", array()), "visible", array()), "count", array()) > 0))) {
                // line 15
                echo "                        <li class=\"nav-item dropdown ";
                echo ($context["current_page"] ?? null);
                echo "\">
                            <a href=\"#\" class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">";
                // line 16
                echo $this->getAttribute($context["page"], "menu", array());
                echo "</a>
                            <div class=\"dropdown-menu\">
                                ";
                // line 18
                $context["current_parent"] = (($this->getAttribute($context["page"], "active", array())) ? ("active") : (""));
                // line 19
                echo "                                <a href=\"";
                echo $this->getAttribute($context["page"], "url", array());
                echo "\" class=\"dropdown-item ";
                echo ($context["current_parent"] ?? null);
                echo "\">";
                echo $this->getAttribute($context["page"], "menu", array());
                echo "</a>
                                <div class=\"dropdown-divider\"></div>
                                ";
                // line 21
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable($this->getAttribute($this->getAttribute($context["page"], "children", array()), "visible", array()));
                foreach ($context['_seq'] as $context["_key"] => $context["child"]) {
                    // line 22
                    echo "                                    ";
                    $context["current_child"] = ((($this->getAttribute($context["child"], "active", array()) || $this->getAttribute($context["child"], "activeChild", array()))) ? ("active") : (""));
                    // line 23
                    echo "                                    <a href=\"";
                    echo $this->getAttribute($context["child"], "url", array());
                    echo "\" class=\"dropdown-item ";
                    echo ($context["current_child"] ?? null);
                    echo "\">";
                    echo $this->getAttribute($context["child"], "menu", array());
                    echo "</a>
                                ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['child'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 25
                echo "                            </div>
                        </li>
                    ";
            } else {
                // line 28
                echo "                        <li class=\"nav-item ";
                echo ($context["current_page"] ?? null);
                echo "\"><a class=\"nav-link\" href=\"";
                echo $this->getAttribute($context["page"], "url", array());
                echo "\">";
                echo $this->getAttribute($context["page"], "menu", array());
                echo "</a></li>
                    ";
            }
            // line 30
            echo "                ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['page'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 31
        echo "                ";
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute(($context["site"] ?? null), "menu", array()));
        foreach ($context['_seq'] as $context["_key"] => $context["mitem"]) {
            // line 32
            echo "                    <li class=\"nav-item\">
                        ";
            // line 33
            $context["icon"] = (($this->getAttribute($context["mitem"], "icon", array())) ? ((("<i class=\"fa fa-fw fa-" . $this->getAttribute($context["mitem"], "icon", array())) . "\"></i> ")) : (""));
            // line 34
            echo "                        <a class=\"nav-link\" href=\"";
            echo $this->getAttribute($context["mitem"], "url", array());
            echo "\">";
            echo ($context["icon"] ?? null);
            echo $this->getAttribute($context["mitem"], "text", array());
            echo "</a>
                    </li>
                ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['mitem'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 37
        echo "
                ";
        // line 38
        if (($this->getAttribute($this->getAttribute($this->getAttribute(($context["config"] ?? null), "plugins", array()), "login", array()), "enabled", array()) && $this->getAttribute($this->getAttribute(($context["grav"] ?? null), "user", array()), "username", array()))) {
            // line 39
            echo "                    <li class=\"nav-item\"><span class=\"nav-link\"><i class=\"fa fa-lock\"></i> ";
            $this->loadTemplate("partials/login-status.html.twig", "partials/navigation.html.twig", 39)->display($context);
            echo "</span></li>
                ";
        }
        // line 41
        echo "            </ul>
        </div>

        <div class=\"navbar-button\"><a href=\"#hiring\" class=\"lg-button-outline\">We're hiring ➞</a></div>
    </div>
</nav>
";
    }

    public function getTemplateName()
    {
        return "partials/navigation.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  148 => 41,  142 => 39,  140 => 38,  137 => 37,  124 => 34,  122 => 33,  119 => 32,  114 => 31,  108 => 30,  98 => 28,  93 => 25,  80 => 23,  77 => 22,  73 => 21,  63 => 19,  61 => 18,  56 => 16,  51 => 15,  48 => 14,  45 => 13,  41 => 12,  29 => 5,  23 => 3,  21 => 2,  19 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("{% set navbar_style = theme_var('navbar_style') %}
{% set navbar_bgcolor = theme_var('navbar_bgcolor') %}
<nav class=\"navbar navbar-expand-md {{ navbar_style }}\" role=\"navigation\">
    <div class=\"container\">
        <a class=\"navbar-brand\" href=\"{{ base_url == '' ? '/' : base_url }}\">{{ site.title|e('html') }}</a>
        <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\".navbar-collapse\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">
            <span class=\"navbar-toggler-icon\"></span>
        </button>

        <div class=\"navbar-collapse collapse justify-content-end\">
            <ul class=\"navbar-nav\">
                {% for page in pages.children.visible %}
                    {% set current_page = (page.active or page.activeChild) ? 'active' : '' %}
                    {% if config.themes.bootstrap4.dropdown.enabled and page.children.visible.count > 0 %}
                        <li class=\"nav-item dropdown {{ current_page }}\">
                            <a href=\"#\" class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">{{ page.menu }}</a>
                            <div class=\"dropdown-menu\">
                                {% set current_parent = page.active ? 'active' : '' %}
                                <a href=\"{{ page.url }}\" class=\"dropdown-item {{ current_parent }}\">{{ page.menu }}</a>
                                <div class=\"dropdown-divider\"></div>
                                {% for child in page.children.visible %}
                                    {% set current_child = (child.active or child.activeChild) ? 'active' : '' %}
                                    <a href=\"{{ child.url }}\" class=\"dropdown-item {{ current_child }}\">{{ child.menu }}</a>
                                {% endfor %}
                            </div>
                        </li>
                    {% else %}
                        <li class=\"nav-item {{ current_page }}\"><a class=\"nav-link\" href=\"{{ page.url }}\">{{ page.menu }}</a></li>
                    {% endif %}
                {% endfor %}
                {% for mitem in site.menu %}
                    <li class=\"nav-item\">
                        {% set icon = mitem.icon ? '<i class=\"fa fa-fw fa-' ~ mitem.icon ~ '\"></i> ' : '' %}
                        <a class=\"nav-link\" href=\"{{ mitem.url }}\">{{ icon }}{{ mitem.text }}</a>
                    </li>
                {% endfor %}

                {% if config.plugins.login.enabled and grav.user.username %}
                    <li class=\"nav-item\"><span class=\"nav-link\"><i class=\"fa fa-lock\"></i> {% include 'partials/login-status.html.twig' %}</span></li>
                {% endif %}
            </ul>
        </div>

        <div class=\"navbar-button\"><a href=\"#hiring\" class=\"lg-button-outline\">We're hiring ➞</a></div>
    </div>
</nav>
", "partials/navigation.html.twig", "/Users/stephanie/Dropbox/Projects/chia-network/grav/user/themes/bootstrap4/templates/partials/navigation.html.twig");
    }
}
