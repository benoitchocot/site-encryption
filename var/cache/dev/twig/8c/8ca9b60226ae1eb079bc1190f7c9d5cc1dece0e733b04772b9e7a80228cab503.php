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

/* export/export.html.twig */
class __TwigTemplate_829999436ed5b09aadee39267a7b0b6a0053e3bc0679c9560f934f0be34c9038 extends Template
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
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "export/export.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "export/export.html.twig"));

        // line 1
        yield "<!DOCTYPE html>
<html>
<head>
    <title class=\"text-dark\">";
        // line 4
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, (isset($context["project"]) || array_key_exists("project", $context) ? $context["project"] : (function () { throw new RuntimeError('Variable "project" does not exist.', 4, $this->source); })()), "name", [], "any", false, false, false, 4), "html", null, true);
        yield "</title>
    <link href=\"";
        // line 5
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Symfony\Bridge\Twig\Extension\HttpFoundationExtension']->generateAbsoluteUrl($this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("build/app.css")), "html", null, true);
        yield "\" rel=\"stylesheet\">
</head>
<h1>";
        // line 7
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, (isset($context["project"]) || array_key_exists("project", $context) ? $context["project"] : (function () { throw new RuntimeError('Variable "project" does not exist.', 7, $this->source); })()), "name", [], "any", false, false, false, 7), "html", null, true);
        yield "</h1>
<body class=\"m-5\">
<img class=\"float-right\" src=\"";
        // line 9
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("build/img/Points.svg"), "html", null, true);
        yield "\" alt=\"entete\">

<p class=\"text-dark\">Cher client, </p>
<p class=\"text-dark\">Voici ci-dessous notre meilleure proposition concernant votre demande à notre
    entreprise Easter APP sur le projet ";
        // line 13
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, (isset($context["project"]) || array_key_exists("project", $context) ? $context["project"] : (function () { throw new RuntimeError('Variable "project" does not exist.', 13, $this->source); })()), "name", [], "any", false, false, false, 13), "html", null, true);
        yield ".</p>

<p class=\"text-dark\"> Il inclut les fonctionnalités suivantes :</p>
<div>
    <table class=\"w-75 text-left\">
        <thead>
        <tr >
            <th class=\"text-dark\" scope=\"col\">Catégorie</th>
            <th class=\"text-dark\" scope=\"col\">Coût</th>
            <th class=\"text-dark\" scope=\"col\">Charge estimée</th>
            <th class=\"text-dark\" scope=\"col\"></th>
        </tr>
        </thead>
        <tbody>
        ";
        // line 27
        $context['_parent'] = $context;
        $context['_seq'] = CoreExtension::ensureTraversable(Twig\Extension\CoreExtension::keys(CoreExtension::getAttribute($this->env, $this->source, (isset($context["projectSynthesis"]) || array_key_exists("projectSynthesis", $context) ? $context["projectSynthesis"] : (function () { throw new RuntimeError('Variable "projectSynthesis" does not exist.', 27, $this->source); })()), (isset($context["variant"]) || array_key_exists("variant", $context) ? $context["variant"] : (function () { throw new RuntimeError('Variable "variant" does not exist.', 27, $this->source); })()), [], "array", false, false, false, 27)));
        foreach ($context['_seq'] as $context["_key"] => $context["featureCategory"]) {
            // line 28
            yield "            <tr>
                <td class=\"feature-category\">
                    <div>
                        ";
            // line 31
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($context["featureCategory"], "html", null, true);
            yield "
                    </div>
                </td>
                <td class=\"feature-category\">
                    ";
            // line 35
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["projectSynthesis"]) || array_key_exists("projectSynthesis", $context) ? $context["projectSynthesis"] : (function () { throw new RuntimeError('Variable "projectSynthesis" does not exist.', 35, $this->source); })()), (isset($context["variant"]) || array_key_exists("variant", $context) ? $context["variant"] : (function () { throw new RuntimeError('Variable "variant" does not exist.', 35, $this->source); })()), [], "array", false, false, false, 35), $context["featureCategory"], [], "array", false, false, false, 35), "cost", [], "any", false, false, false, 35), "html", null, true);
            yield " €.
                </td>
                <td class=\"feature-category\">
                    ";
            // line 38
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["projectSynthesis"]) || array_key_exists("projectSynthesis", $context) ? $context["projectSynthesis"] : (function () { throw new RuntimeError('Variable "projectSynthesis" does not exist.', 38, $this->source); })()), (isset($context["variant"]) || array_key_exists("variant", $context) ? $context["variant"] : (function () { throw new RuntimeError('Variable "variant" does not exist.', 38, $this->source); })()), [], "array", false, false, false, 38), $context["featureCategory"], [], "array", false, false, false, 38), "load", [], "any", false, false, false, 38), "html", null, true);
            yield " j*h
                </td>
                <td class=\"feature-category\">
                </td>
            </tr>
        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['featureCategory'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 44
        yield "        </tbody>
    </table>
</div>
<table>
    <p class=\"text-dark\">Pour une charge de travail de

        ";
        // line 50
        $context["highLoadTip"] = ($this->extensions['Twig\Extension\CoreExtension']->formatNumber(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["costs"]) || array_key_exists("costs", $context) ? $context["costs"] : (function () { throw new RuntimeError('Variable "costs" does not exist.', 50, $this->source); })()), CoreExtension::getAttribute($this->env, $this->source, (isset($context["project"]) || array_key_exists("project", $context) ? $context["project"] : (function () { throw new RuntimeError('Variable "project" does not exist.', 50, $this->source); })()), "id", [], "any", false, false, false, 50), [], "array", false, false, false, 50), "load", [], "array", false, false, false, 50), "high", [], "array", false, false, false, 50), 2, ".", ",") . " jours");
        // line 51
        yield "        ";
        $context["middleLoadTip"] = ($this->extensions['Twig\Extension\CoreExtension']->formatNumber(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["costs"]) || array_key_exists("costs", $context) ? $context["costs"] : (function () { throw new RuntimeError('Variable "costs" does not exist.', 51, $this->source); })()), CoreExtension::getAttribute($this->env, $this->source, (isset($context["project"]) || array_key_exists("project", $context) ? $context["project"] : (function () { throw new RuntimeError('Variable "project" does not exist.', 51, $this->source); })()), "id", [], "any", false, false, false, 51), [], "array", false, false, false, 51), "load", [], "array", false, false, false, 51), "middle", [], "array", false, false, false, 51), 2, ".", ",") . " jours");
        // line 52
        yield "        ";
        $context["lowLoadTip"] = ($this->extensions['Twig\Extension\CoreExtension']->formatNumber(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["costs"]) || array_key_exists("costs", $context) ? $context["costs"] : (function () { throw new RuntimeError('Variable "costs" does not exist.', 52, $this->source); })()), CoreExtension::getAttribute($this->env, $this->source, (isset($context["project"]) || array_key_exists("project", $context) ? $context["project"] : (function () { throw new RuntimeError('Variable "project" does not exist.', 52, $this->source); })()), "id", [], "any", false, false, false, 52), [], "array", false, false, false, 52), "load", [], "array", false, false, false, 52), "low", [], "array", false, false, false, 52), 2, ".", ",") . " jours");
        // line 53
        yield "
        ";
        // line 54
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context, ((isset($context["variant"]) || array_key_exists("variant", $context) ? $context["variant"] : (function () { throw new RuntimeError('Variable "variant" does not exist.', 54, $this->source); })()) . "LoadTip"), [], "array", false, false, false, 54), "html", null, true);
        yield ",
    son prix total est estimé à
        ";
        // line 56
        $context["highCostTip"] = ($this->extensions['Twig\Extension\CoreExtension']->formatNumber(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["costs"]) || array_key_exists("costs", $context) ? $context["costs"] : (function () { throw new RuntimeError('Variable "costs" does not exist.', 56, $this->source); })()), CoreExtension::getAttribute($this->env, $this->source, (isset($context["project"]) || array_key_exists("project", $context) ? $context["project"] : (function () { throw new RuntimeError('Variable "project" does not exist.', 56, $this->source); })()), "id", [], "any", false, false, false, 56), [], "array", false, false, false, 56), "cost", [], "array", false, false, false, 56), "high", [], "array", false, false, false, 56), 2, ".", ",") . " €");
        // line 57
        yield "        ";
        $context["middleCostTip"] = ($this->extensions['Twig\Extension\CoreExtension']->formatNumber(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["costs"]) || array_key_exists("costs", $context) ? $context["costs"] : (function () { throw new RuntimeError('Variable "costs" does not exist.', 57, $this->source); })()), CoreExtension::getAttribute($this->env, $this->source, (isset($context["project"]) || array_key_exists("project", $context) ? $context["project"] : (function () { throw new RuntimeError('Variable "project" does not exist.', 57, $this->source); })()), "id", [], "any", false, false, false, 57), [], "array", false, false, false, 57), "cost", [], "array", false, false, false, 57), "middle", [], "array", false, false, false, 57), 2, ".", ",") . " €");
        // line 58
        yield "        ";
        $context["lowCostTip"] = ($this->extensions['Twig\Extension\CoreExtension']->formatNumber(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["costs"]) || array_key_exists("costs", $context) ? $context["costs"] : (function () { throw new RuntimeError('Variable "costs" does not exist.', 58, $this->source); })()), CoreExtension::getAttribute($this->env, $this->source, (isset($context["project"]) || array_key_exists("project", $context) ? $context["project"] : (function () { throw new RuntimeError('Variable "project" does not exist.', 58, $this->source); })()), "id", [], "any", false, false, false, 58), [], "array", false, false, false, 58), "cost", [], "array", false, false, false, 58), "low", [], "array", false, false, false, 58), 2, ".", ",") . " €");
        // line 59
        yield "
        ";
        // line 60
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context, ((isset($context["variant"]) || array_key_exists("variant", $context) ? $context["variant"] : (function () { throw new RuntimeError('Variable "variant" does not exist.', 60, $this->source); })()) . "CostTip"), [], "array", false, false, false, 60), "html", null, true);
        yield ".
    </p>
</table>

<p class=\"text-dark\">Si ce devis vous convient, n'hésitez pas à nous recontacter pour confirmer ou non votre choix.
    Cette offre est valable pour une durée de 30 jours.</p>
<p class=\"text-dark\">    Nous restons à votre disposition pour toutes demandes
    complémentaires</p>
<p class=\"text-dark\">Cordialement, L'équipe Easter APP</p>
<img src=\"";
        // line 69
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("build/img/vagues.svg"), "html", null, true);
        yield "\" alt=\"vagues\">
<img src=\"";
        // line 70
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("build/img/Black%20Copy.png"), "html", null, true);
        yield "\" alt=\"logo\">

</body>
</html>
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
        return "export/export.html.twig";
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
        return array (  172 => 70,  168 => 69,  156 => 60,  153 => 59,  150 => 58,  147 => 57,  145 => 56,  140 => 54,  137 => 53,  134 => 52,  131 => 51,  129 => 50,  121 => 44,  109 => 38,  103 => 35,  96 => 31,  91 => 28,  87 => 27,  70 => 13,  63 => 9,  58 => 7,  53 => 5,  49 => 4,  44 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<!DOCTYPE html>
<html>
<head>
    <title class=\"text-dark\">{{ project.name }}</title>
    <link href=\"{{ absolute_url(asset('build/app.css')) }}\" rel=\"stylesheet\">
</head>
<h1>{{ project.name }}</h1>
<body class=\"m-5\">
<img class=\"float-right\" src=\"{{ asset('build/img/Points.svg') }}\" alt=\"entete\">

<p class=\"text-dark\">Cher client, </p>
<p class=\"text-dark\">Voici ci-dessous notre meilleure proposition concernant votre demande à notre
    entreprise Easter APP sur le projet {{ project.name }}.</p>

<p class=\"text-dark\"> Il inclut les fonctionnalités suivantes :</p>
<div>
    <table class=\"w-75 text-left\">
        <thead>
        <tr >
            <th class=\"text-dark\" scope=\"col\">Catégorie</th>
            <th class=\"text-dark\" scope=\"col\">Coût</th>
            <th class=\"text-dark\" scope=\"col\">Charge estimée</th>
            <th class=\"text-dark\" scope=\"col\"></th>
        </tr>
        </thead>
        <tbody>
        {% for featureCategory in projectSynthesis[variant]|keys %}
            <tr>
                <td class=\"feature-category\">
                    <div>
                        {{ featureCategory }}
                    </div>
                </td>
                <td class=\"feature-category\">
                    {{ projectSynthesis[variant][featureCategory].cost }} €.
                </td>
                <td class=\"feature-category\">
                    {{ projectSynthesis[variant][featureCategory].load }} j*h
                </td>
                <td class=\"feature-category\">
                </td>
            </tr>
        {% endfor %}
        </tbody>
    </table>
</div>
<table>
    <p class=\"text-dark\">Pour une charge de travail de

        {% set highLoadTip = costs[project.id]['load']['high']|number_format(2, '.', ',') ~ ' jours' %}
        {% set middleLoadTip = costs[project.id]['load']['middle']|number_format(2, '.', ',') ~ ' jours' %}
        {% set lowLoadTip = costs[project.id]['load']['low']|number_format(2, '.', ',') ~ ' jours' %}

        {{ _context[variant ~ 'LoadTip'] }},
    son prix total est estimé à
        {% set highCostTip = costs[project.id]['cost']['high']|number_format(2, '.', ',') ~ ' €' %}
        {% set middleCostTip = costs[project.id]['cost']['middle']|number_format(2, '.', ',') ~ ' €' %}
        {% set lowCostTip = costs[project.id]['cost']['low']|number_format(2, '.', ',') ~ ' €' %}

        {{ _context[variant ~ 'CostTip'] }}.
    </p>
</table>

<p class=\"text-dark\">Si ce devis vous convient, n'hésitez pas à nous recontacter pour confirmer ou non votre choix.
    Cette offre est valable pour une durée de 30 jours.</p>
<p class=\"text-dark\">    Nous restons à votre disposition pour toutes demandes
    complémentaires</p>
<p class=\"text-dark\">Cordialement, L'équipe Easter APP</p>
<img src=\"{{ asset('build/img/vagues.svg') }}\" alt=\"vagues\">
<img src=\"{{ asset('build/img/Black%20Copy.png') }}\" alt=\"logo\">

</body>
</html>
", "export/export.html.twig", "/home/bonoit/Projets Web/site-encryption/templates/export/export.html.twig");
    }
}
