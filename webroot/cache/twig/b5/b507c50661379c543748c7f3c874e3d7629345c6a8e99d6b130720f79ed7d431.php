<?php

/* partials/hero.html.twig */
class __TwigTemplate_d284541f408d160bebf59b967a0d974a393094f803a55e788b3ffe1230919126 extends Twig_Template
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
        if ($this->getAttribute($this->getAttribute(($context["page"] ?? null), "header", array()), "hero_image", array())) {
            // line 2
            echo "  ";
            $context["header_image_media"] = $this->getAttribute($this->getAttribute($this->getAttribute(($context["page"] ?? null), "media", array()), "images", array()), $this->getAttribute($this->getAttribute(($context["page"] ?? null), "header", array()), "hero_image", array()), array(), "array");
        } else {
            // line 4
            echo "  ";
            $context["header_image_media"] = twig_first($this->env, $this->getAttribute($this->getAttribute(($context["page"] ?? null), "media", array()), "images", array()));
        }
        // line 6
        echo "
<div class=\"header hero ";
        // line 7
        echo $this->getAttribute($this->getAttribute(($context["page"] ?? null), "header", array()), "hero_classes", array());
        echo " ";
        echo ($context["classes"] ?? null);
        echo " ";
        echo (($this->getAttribute($this->getAttribute(($context["page"] ?? null), "header", array()), "hero_scroll", array())) ? ("hero-scroll-icon") : (""));
        echo "\">
    <div class=\"container\">
        ";
        // line 9
        if (($context["content"] ?? null)) {
            // line 10
            echo "            ";
            echo ($context["content"] ?? null);
            echo "
        ";
        } else {
            // line 12
            echo "            ";
            echo $this->getAttribute(($context["page"] ?? null), "content", array());
            echo "
        ";
        }
        // line 14
        echo "
        ";
        // line 15
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute($this->getAttribute(($context["page"] ?? null), "header", array()), "buttons", array()));
        foreach ($context['_seq'] as $context["_key"] => $context["button"]) {
            // line 16
            echo "            <a class=\"btn";
            if ($this->getAttribute($context["button"], "primary", array())) {
                echo " btn-primary";
            }
            echo "\" href=\"";
            echo ((twig_in_filter("//", $this->getAttribute($context["button"], "url", array()))) ? ($this->getAttribute($context["button"], "url", array())) : ((($context["base_url"] ?? null) . $this->getAttribute($context["button"], "url", array()))));
            echo "\">";
            echo $this->getAttribute($context["button"], "text", array());
            echo "</a>
        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['button'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 18
        echo "
        ";
        // line 19
        if ($this->getAttribute($this->getAttribute(($context["page"] ?? null), "header", array()), "hero_scroll", array())) {
            // line 20
            echo "            <i id=\"to-start\" class=\"pulse fa fa-angle-down\"></i>
        ";
        }
        // line 22
        echo "    </div>
</div>
";
    }

    public function getTemplateName()
    {
        return "partials/hero.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  86 => 22,  82 => 20,  80 => 19,  77 => 18,  62 => 16,  58 => 15,  55 => 14,  49 => 12,  43 => 10,  41 => 9,  32 => 7,  29 => 6,  25 => 4,  21 => 2,  19 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("{% if page.header.hero_image %}
  {% set header_image_media = page.media.images[page.header.hero_image] %}
{% else %}
  {% set header_image_media = page.media.images|first %}
{% endif %}

<div class=\"header hero {{ page.header.hero_classes }} {{ classes }} {{ page.header.hero_scroll ? 'hero-scroll-icon' : '' }}\">
    <div class=\"container\">
        {% if content %}
            {{ content|raw }}
        {% else %}
            {{ page.content }}
        {% endif %}

        {% for button in page.header.buttons %}
            <a class=\"btn{% if button.primary %} btn-primary{% endif %}\" href=\"{{ '//' in button.url ? button.url : base_url ~ button.url }}\">{{ button.text }}</a>
        {% endfor %}

        {% if page.header.hero_scroll %}
            <i id=\"to-start\" class=\"pulse fa fa-angle-down\"></i>
        {% endif %}
    </div>
</div>
", "partials/hero.html.twig", "/Users/stephanie/Dropbox/Projects/chia-network/grav/user/themes/bootstrap4/templates/partials/hero.html.twig");
    }
}
