<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\CoreExtension;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* @KnpPaginator/Pagination/semantic_ui_pagination.html.twig */
class __TwigTemplate_30bb5614c2e9db698b913e8c405529294feaebed27e3a8478155b109841ea525 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "@KnpPaginator/Pagination/semantic_ui_pagination.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "@KnpPaginator/Pagination/semantic_ui_pagination.html.twig"));

        // line 13
        yield "<div class=\"ui pagination menu\">
    ";
        // line 14
        if (((isset($context["first"]) || array_key_exists("first", $context)) && (0 !== CoreExtension::compare((isset($context["current"]) || array_key_exists("current", $context) ? $context["current"] : (function () { throw new RuntimeError('Variable "current" does not exist.', 14, $this->source); })()), (isset($context["first"]) || array_key_exists("first", $context) ? $context["first"] : (function () { throw new RuntimeError('Variable "first" does not exist.', 14, $this->source); })()))))) {
            // line 15
            yield "        <a class=\"icon item\" href=\"";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath((isset($context["route"]) || array_key_exists("route", $context) ? $context["route"] : (function () { throw new RuntimeError('Variable "route" does not exist.', 15, $this->source); })()), Twig\Extension\CoreExtension::merge((isset($context["query"]) || array_key_exists("query", $context) ? $context["query"] : (function () { throw new RuntimeError('Variable "query" does not exist.', 15, $this->source); })()), [(isset($context["pageParameterName"]) || array_key_exists("pageParameterName", $context) ? $context["pageParameterName"] : (function () { throw new RuntimeError('Variable "pageParameterName" does not exist.', 15, $this->source); })()) => (isset($context["first"]) || array_key_exists("first", $context) ? $context["first"] : (function () { throw new RuntimeError('Variable "first" does not exist.', 15, $this->source); })())])), "html", null, true);
            yield "\">
            <i class=\"angle double left icon\"></i>
        </a>
    ";
        }
        // line 19
        yield "
    ";
        // line 20
        if ((isset($context["previous"]) || array_key_exists("previous", $context))) {
            // line 21
            yield "        <a rel=\"prev\" class=\"item icon\" href=\"";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath((isset($context["route"]) || array_key_exists("route", $context) ? $context["route"] : (function () { throw new RuntimeError('Variable "route" does not exist.', 21, $this->source); })()), Twig\Extension\CoreExtension::merge((isset($context["query"]) || array_key_exists("query", $context) ? $context["query"] : (function () { throw new RuntimeError('Variable "query" does not exist.', 21, $this->source); })()), [(isset($context["pageParameterName"]) || array_key_exists("pageParameterName", $context) ? $context["pageParameterName"] : (function () { throw new RuntimeError('Variable "pageParameterName" does not exist.', 21, $this->source); })()) => (isset($context["previous"]) || array_key_exists("previous", $context) ? $context["previous"] : (function () { throw new RuntimeError('Variable "previous" does not exist.', 21, $this->source); })())])), "html", null, true);
            yield "\">
            <i class=\"angle left icon\"></i>
        </a>
    ";
        }
        // line 25
        yield "
    ";
        // line 26
        $context['_parent'] = $context;
        $context['_seq'] = CoreExtension::ensureTraversable((isset($context["pagesInRange"]) || array_key_exists("pagesInRange", $context) ? $context["pagesInRange"] : (function () { throw new RuntimeError('Variable "pagesInRange" does not exist.', 26, $this->source); })()));
        foreach ($context['_seq'] as $context["_key"] => $context["page"]) {
            // line 27
            yield "        ";
            if ((0 !== CoreExtension::compare($context["page"], (isset($context["current"]) || array_key_exists("current", $context) ? $context["current"] : (function () { throw new RuntimeError('Variable "current" does not exist.', 27, $this->source); })())))) {
                // line 28
                yield "            <a class=\"item\" href=\"";
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath((isset($context["route"]) || array_key_exists("route", $context) ? $context["route"] : (function () { throw new RuntimeError('Variable "route" does not exist.', 28, $this->source); })()), Twig\Extension\CoreExtension::merge((isset($context["query"]) || array_key_exists("query", $context) ? $context["query"] : (function () { throw new RuntimeError('Variable "query" does not exist.', 28, $this->source); })()), [(isset($context["pageParameterName"]) || array_key_exists("pageParameterName", $context) ? $context["pageParameterName"] : (function () { throw new RuntimeError('Variable "pageParameterName" does not exist.', 28, $this->source); })()) => $context["page"]])), "html", null, true);
                yield "\">";
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($context["page"], "html", null, true);
                yield "</a>
        ";
            } else {
                // line 30
                yield "            <span class=\"active item\">";
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($context["page"], "html", null, true);
                yield "</span>
        ";
            }
            // line 32
            yield "
    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['page'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 34
        yield "
    ";
        // line 35
        if ((isset($context["next"]) || array_key_exists("next", $context))) {
            // line 36
            yield "        <a rel=\"next\" class=\"icon item\" href=\"";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath((isset($context["route"]) || array_key_exists("route", $context) ? $context["route"] : (function () { throw new RuntimeError('Variable "route" does not exist.', 36, $this->source); })()), Twig\Extension\CoreExtension::merge((isset($context["query"]) || array_key_exists("query", $context) ? $context["query"] : (function () { throw new RuntimeError('Variable "query" does not exist.', 36, $this->source); })()), [(isset($context["pageParameterName"]) || array_key_exists("pageParameterName", $context) ? $context["pageParameterName"] : (function () { throw new RuntimeError('Variable "pageParameterName" does not exist.', 36, $this->source); })()) => (isset($context["next"]) || array_key_exists("next", $context) ? $context["next"] : (function () { throw new RuntimeError('Variable "next" does not exist.', 36, $this->source); })())])), "html", null, true);
            yield "\">
            <i class=\"angle right icon\"></i>
        </a>
    ";
        }
        // line 40
        yield "
    ";
        // line 41
        if (((isset($context["last"]) || array_key_exists("last", $context)) && (0 !== CoreExtension::compare((isset($context["current"]) || array_key_exists("current", $context) ? $context["current"] : (function () { throw new RuntimeError('Variable "current" does not exist.', 41, $this->source); })()), (isset($context["last"]) || array_key_exists("last", $context) ? $context["last"] : (function () { throw new RuntimeError('Variable "last" does not exist.', 41, $this->source); })()))))) {
            // line 42
            yield "        <a class=\"icon item\" href=\"";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath((isset($context["route"]) || array_key_exists("route", $context) ? $context["route"] : (function () { throw new RuntimeError('Variable "route" does not exist.', 42, $this->source); })()), Twig\Extension\CoreExtension::merge((isset($context["query"]) || array_key_exists("query", $context) ? $context["query"] : (function () { throw new RuntimeError('Variable "query" does not exist.', 42, $this->source); })()), [(isset($context["pageParameterName"]) || array_key_exists("pageParameterName", $context) ? $context["pageParameterName"] : (function () { throw new RuntimeError('Variable "pageParameterName" does not exist.', 42, $this->source); })()) => (isset($context["last"]) || array_key_exists("last", $context) ? $context["last"] : (function () { throw new RuntimeError('Variable "last" does not exist.', 42, $this->source); })())])), "html", null, true);
            yield "\">
            <i class=\"angle right double icon\"></i>
        </a>
    ";
        }
        // line 46
        yield "</div>
";
        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        return; yield '';
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName()
    {
        return "@KnpPaginator/Pagination/semantic_ui_pagination.html.twig";
    }

    /**
     * @codeCoverageIgnore
     */
    public function isTraitable()
    {
        return false;
    }

    /**
     * @codeCoverageIgnore
     */
    public function getDebugInfo()
    {
        return array (  127 => 46,  119 => 42,  117 => 41,  114 => 40,  106 => 36,  104 => 35,  101 => 34,  94 => 32,  88 => 30,  80 => 28,  77 => 27,  73 => 26,  70 => 25,  62 => 21,  60 => 20,  57 => 19,  49 => 15,  47 => 14,  44 => 13,);
    }

    public function getSourceContext()
    {
        return new Source("{#
/**
 * @file
 * Semantic UI Sliding pagination control implementation.
 *
 * View that can be used with the pagination module
 * from the Semantic UI CSS Toolkit
 * https://semantic-ui.com/collections/menu.html#pagination
 *
 * @author Valerian Dorcy <valerian.dorcy@gmail.com>
 */
#}
<div class=\"ui pagination menu\">
    {% if first is defined and current != first %}
        <a class=\"icon item\" href=\"{{ path(route, query|merge({(pageParameterName): first})) }}\">
            <i class=\"angle double left icon\"></i>
        </a>
    {% endif %}

    {% if previous is defined %}
        <a rel=\"prev\" class=\"item icon\" href=\"{{ path(route, query|merge({(pageParameterName): previous})) }}\">
            <i class=\"angle left icon\"></i>
        </a>
    {% endif %}

    {% for page in pagesInRange %}
        {% if page != current %}
            <a class=\"item\" href=\"{{ path(route, query|merge({(pageParameterName): page})) }}\">{{ page }}</a>
        {% else %}
            <span class=\"active item\">{{ page }}</span>
        {% endif %}

    {% endfor %}

    {% if next is defined %}
        <a rel=\"next\" class=\"icon item\" href=\"{{ path(route, query|merge({(pageParameterName): next})) }}\">
            <i class=\"angle right icon\"></i>
        </a>
    {% endif %}

    {% if last is defined and current != last %}
        <a class=\"icon item\" href=\"{{ path(route, query|merge({(pageParameterName): last})) }}\">
            <i class=\"angle right double icon\"></i>
        </a>
    {% endif %}
</div>
", "@KnpPaginator/Pagination/semantic_ui_pagination.html.twig", "/var/www/html/vendor/knplabs/knp-paginator-bundle/templates/Pagination/semantic_ui_pagination.html.twig");
    }
}
