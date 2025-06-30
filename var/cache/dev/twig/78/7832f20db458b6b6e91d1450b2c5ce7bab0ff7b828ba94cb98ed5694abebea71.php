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

/* feature/index.html.twig */
class __TwigTemplate_af1ff18655ecd3340f0bc7182482a804a720da16589aca85078df0d52598c2a4 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'title' => [$this, 'block_title'],
            'body' => [$this, 'block_body'],
            'stylesheets' => [$this, 'block_stylesheets'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 1
        return "base.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "feature/index.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "feature/index.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "feature/index.html.twig", 1);
        yield from $this->parent->unwrap()->yield($context, array_merge($this->blocks, $blocks));
        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    // line 3
    public function block_title($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        yield "Big Bill | Fonctionnalités";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

        return; yield '';
    }

    // line 5
    public function block_body($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        // line 6
        yield "    <h1>Liste des fonctionnalités récurrentes</h1>

    <div class=\"text-right\">
        <a class=\" btn btn-primary mb-3\" href=\"";
        // line 9
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("feature_new");
        yield "\"><i class=\"fas fa-plus-circle mr-1\"></i>Ajouter une fonctionnalité</a>
    </div>
    <table class=\"table feature-index table-hover\">

        <thead>
        <tr>
            <th class=\"text-center\"><a href=\"";
        // line 15
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("feature_index");
        yield "?sort=name&direction=";
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((isset($context["newDirection"]) || array_key_exists("newDirection", $context) ? $context["newDirection"] : (function () { throw new RuntimeError('Variable "newDirection" does not exist.', 15, $this->source); })()), "html", null, true);
        yield "\">Nom de la fonctionnalité <i class=\"sort-";
        yield (((0 === CoreExtension::compare((isset($context["sort"]) || array_key_exists("sort", $context) ? $context["sort"] : (function () { throw new RuntimeError('Variable "sort" does not exist.', 15, $this->source); })()), "name"))) ? ("active") : ("inactive"));
        yield " fas fa-angle-";
        yield (((0 === CoreExtension::compare((isset($context["newDirection"]) || array_key_exists("newDirection", $context) ? $context["newDirection"] : (function () { throw new RuntimeError('Variable "newDirection" does not exist.', 15, $this->source); })()), "asc"))) ? ("up") : ("down"));
        yield "\"></i></a></th>
            <th class=\"text-center\"><a href=\"";
        // line 16
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("feature_index");
        yield "?sort=day&direction=";
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((isset($context["newDirection"]) || array_key_exists("newDirection", $context) ? $context["newDirection"] : (function () { throw new RuntimeError('Variable "newDirection" does not exist.', 16, $this->source); })()), "html", null, true);
        yield "\">Charge <i class=\"sort-";
        yield (((0 === CoreExtension::compare((isset($context["sort"]) || array_key_exists("sort", $context) ? $context["sort"] : (function () { throw new RuntimeError('Variable "sort" does not exist.', 16, $this->source); })()), "day"))) ? ("active") : ("inactive"));
        yield " fas fa-angle-";
        yield (((0 === CoreExtension::compare((isset($context["newDirection"]) || array_key_exists("newDirection", $context) ? $context["newDirection"] : (function () { throw new RuntimeError('Variable "newDirection" does not exist.', 16, $this->source); })()), "asc"))) ? ("up") : ("down"));
        yield "\"></i></a></th>
            <th class=\"text-center\"><a href=\"";
        // line 17
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("feature_index");
        yield "?sort=category.name&direction=";
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((isset($context["newDirection"]) || array_key_exists("newDirection", $context) ? $context["newDirection"] : (function () { throw new RuntimeError('Variable "newDirection" does not exist.', 17, $this->source); })()), "html", null, true);
        yield "\">Catégorie <i class=\"sort-";
        yield (((0 === CoreExtension::compare((isset($context["sort"]) || array_key_exists("sort", $context) ? $context["sort"] : (function () { throw new RuntimeError('Variable "sort" does not exist.', 17, $this->source); })()), "category.name"))) ? ("active") : ("inactive"));
        yield " fas fa-angle-";
        yield (((0 === CoreExtension::compare((isset($context["newDirection"]) || array_key_exists("newDirection", $context) ? $context["newDirection"] : (function () { throw new RuntimeError('Variable "newDirection" does not exist.', 17, $this->source); })()), "asc"))) ? ("up") : ("down"));
        yield "\"></i></a></th>
            <th class=\"text-center\">Description</th>
            <th class=\"text-center\">Actions</th>
        </tr>
        </thead>
        <tbody>
        ";
        // line 23
        $context['_parent'] = $context;
        $context['_seq'] = CoreExtension::ensureTraversable((isset($context["features"]) || array_key_exists("features", $context) ? $context["features"] : (function () { throw new RuntimeError('Variable "features" does not exist.', 23, $this->source); })()));
        $context['_iterated'] = false;
        $context['loop'] = [
          'parent' => $context['_parent'],
          'index0' => 0,
          'index'  => 1,
          'first'  => true,
        ];
        if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof \Countable)) {
            $length = count($context['_seq']);
            $context['loop']['revindex0'] = $length - 1;
            $context['loop']['revindex'] = $length;
            $context['loop']['length'] = $length;
            $context['loop']['last'] = 1 === $length;
        }
        foreach ($context['_seq'] as $context["_key"] => $context["feature"]) {
            // line 24
            yield "            <tr>
                <th class=\"text-center\">";
            // line 25
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["feature"], "name", [], "any", false, false, false, 25), "html", null, true);
            yield "</th>
                <td class=\"text-center\">";
            // line 26
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["feature"], "day", [], "any", false, false, false, 26), "html", null, true);
            yield "</td>
                <td class=\"text-center\">";
            // line 27
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, $context["feature"], "category", [], "any", false, false, false, 27), "name", [], "any", false, false, false, 27), "html", null, true);
            yield "</td>

                <td class=\"text-center description\">
                    <span class=\"text-overflow-dynamic-container\">
                        <span class=\"text-overflow-dynamic-ellipsis\" data-toggle=\"tooltip\" title=\"";
            // line 31
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["feature"], "description", [], "any", false, false, false, 31), "html", null, true);
            yield "\">
                            ";
            // line 32
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["feature"], "description", [], "any", false, false, false, 32), "html", null, true);
            yield "
                        </span>
                    </span>

                <td class=\"btn-row\">
                    ";
            // line 37
            if ($this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("ROLE_ADMIN")) {
                // line 38
                yield "                        ";
                yield Twig\Extension\CoreExtension::include($this->env, $context, "feature/_delete_form.html.twig");
                yield "
                    ";
            }
            // line 40
            yield "
                    <a class=\"btn btn-sm btn-primary\" href=\"";
            // line 41
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("feature_edit", ["id" => CoreExtension::getAttribute($this->env, $this->source, $context["feature"], "id", [], "any", false, false, false, 41)]), "html", null, true);
            yield "\">
                        <i class=\"fas fa-pencil-alt\" aria-hidden=\"true\"></i>
                    </a>
                </td>
            </tr>
        ";
            $context['_iterated'] = true;
            ++$context['loop']['index0'];
            ++$context['loop']['index'];
            $context['loop']['first'] = false;
            if (isset($context['loop']['length'])) {
                --$context['loop']['revindex0'];
                --$context['loop']['revindex'];
                $context['loop']['last'] = 0 === $context['loop']['revindex0'];
            }
        }
        if (!$context['_iterated']) {
            // line 47
            yield "            <tr>
                <td colspan=\"5\">Pas de fonctionnalité disponible !</td>
            </tr>
        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['feature'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 51
        yield "        </tbody>
    </table>
    <div class=\"navigation my-5\">
        ";
        // line 54
        yield $this->extensions['Knp\Bundle\PaginatorBundle\Twig\Extension\PaginationExtension']->render($this->env, (isset($context["features"]) || array_key_exists("features", $context) ? $context["features"] : (function () { throw new RuntimeError('Variable "features" does not exist.', 54, $this->source); })()));
        yield "
    </div>
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

        return; yield '';
    }

    // line 58
    public function block_stylesheets($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "stylesheets"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "stylesheets"));

        // line 59
        yield "    ";
        yield from $this->yieldParentBlock("stylesheets", $context, $blocks);
        yield "
    ";
        // line 60
        yield $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackLinkTags("index");
        yield "
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

        return; yield '';
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName()
    {
        return "feature/index.html.twig";
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
        return array (  261 => 60,  256 => 59,  246 => 58,  232 => 54,  227 => 51,  218 => 47,  199 => 41,  196 => 40,  190 => 38,  188 => 37,  180 => 32,  176 => 31,  169 => 27,  165 => 26,  161 => 25,  158 => 24,  140 => 23,  125 => 17,  115 => 16,  105 => 15,  96 => 9,  91 => 6,  81 => 5,  61 => 3,  38 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}Big Bill | Fonctionnalités{% endblock %}

{% block body %}
    <h1>Liste des fonctionnalités récurrentes</h1>

    <div class=\"text-right\">
        <a class=\" btn btn-primary mb-3\" href=\"{{ path('feature_new') }}\"><i class=\"fas fa-plus-circle mr-1\"></i>Ajouter une fonctionnalité</a>
    </div>
    <table class=\"table feature-index table-hover\">

        <thead>
        <tr>
            <th class=\"text-center\"><a href=\"{{ path('feature_index')}}?sort=name&direction={{ newDirection}}\">Nom de la fonctionnalité <i class=\"sort-{{ sort=='name'?'active':'inactive' }} fas fa-angle-{{ newDirection=='asc'?'up':'down' }}\"></i></a></th>
            <th class=\"text-center\"><a href=\"{{ path('feature_index')}}?sort=day&direction={{ newDirection}}\">Charge <i class=\"sort-{{ sort=='day'?'active':'inactive' }} fas fa-angle-{{ newDirection=='asc'?'up':'down' }}\"></i></a></th>
            <th class=\"text-center\"><a href=\"{{ path('feature_index')}}?sort=category.name&direction={{ newDirection}}\">Catégorie <i class=\"sort-{{ sort=='category.name'?'active':'inactive' }} fas fa-angle-{{ newDirection=='asc'?'up':'down' }}\"></i></a></th>
            <th class=\"text-center\">Description</th>
            <th class=\"text-center\">Actions</th>
        </tr>
        </thead>
        <tbody>
        {% for feature in features %}
            <tr>
                <th class=\"text-center\">{{ feature.name }}</th>
                <td class=\"text-center\">{{ feature.day }}</td>
                <td class=\"text-center\">{{ feature.category.name }}</td>

                <td class=\"text-center description\">
                    <span class=\"text-overflow-dynamic-container\">
                        <span class=\"text-overflow-dynamic-ellipsis\" data-toggle=\"tooltip\" title=\"{{ feature.description }}\">
                            {{ feature.description }}
                        </span>
                    </span>

                <td class=\"btn-row\">
                    {% if is_granted('ROLE_ADMIN') %}
                        {{ include('feature/_delete_form.html.twig') }}
                    {% endif %}

                    <a class=\"btn btn-sm btn-primary\" href=\"{{ path('feature_edit', {'id': feature.id}) }}\">
                        <i class=\"fas fa-pencil-alt\" aria-hidden=\"true\"></i>
                    </a>
                </td>
            </tr>
        {% else %}
            <tr>
                <td colspan=\"5\">Pas de fonctionnalité disponible !</td>
            </tr>
        {% endfor %}
        </tbody>
    </table>
    <div class=\"navigation my-5\">
        {{ knp_pagination_render(features) }}
    </div>
{% endblock %}

{% block stylesheets %}
    {{ parent() }}
    {{ encore_entry_link_tags('index') }}
{% endblock %}
", "feature/index.html.twig", "/var/www/html/templates/feature/index.html.twig");
    }
}
