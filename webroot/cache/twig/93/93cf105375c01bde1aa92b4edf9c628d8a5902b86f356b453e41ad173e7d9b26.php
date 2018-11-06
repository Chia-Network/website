<?php

/* modular/showcase.html.twig */
class __TwigTemplate_82e670fe4c01311b5499a711aa943d67524f6491fe855b7987a2255ecdee752c extends Twig_Template
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
        $context["classes"] = "modular-row showcase";
        // line 2
        echo "
";
        // line 3
        $this->loadTemplate("partials/hero.html.twig", "modular/showcase.html.twig", 3)->display(array_merge($context, array("classes" => ($context["classes"] ?? null))));
    }

    public function getTemplateName()
    {
        return "modular/showcase.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  24 => 3,  21 => 2,  19 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("{% set classes = 'modular-row showcase' %}

{% include 'partials/hero.html.twig' with {'classes': classes} %}
", "modular/showcase.html.twig", "/Users/stephanie/Dropbox/Projects/chia-network/grav/user/themes/bootstrap4/templates/modular/showcase.html.twig");
    }
}
