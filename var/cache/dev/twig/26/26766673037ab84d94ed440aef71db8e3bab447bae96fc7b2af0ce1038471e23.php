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

/* project/_featureLine.html.twig */
class __TwigTemplate_7f0732a9ec4ba8d9e700c5c5ec7a28cc624b2141934c53548d4093708cbace33 extends Template
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
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "project/_featureLine.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "project/_featureLine.html.twig"));

        // line 1
        yield "<tr class=\"feature-line\">
    <th class=\"w-50\" scope=\"row\">

        <div class=\"ml-4\" data-toggle=\"tooltip\" title=\"Cliquer sur le triangle pour éditer la description de cette fonctionnalité.\">
            <a class=\"collapse-toggler collapsed\" data-toggle=\"collapse\" href=\"#collapseDescription";
        // line 5
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, (isset($context["loop"]) || array_key_exists("loop", $context) ? $context["loop"] : (function () { throw new RuntimeError('Variable "loop" does not exist.', 5, $this->source); })()), "index", [], "any", false, false, false, 5), "html", null, true);
        yield "\"
               aria-expanded=\"false\" aria-controls=\"collapseDescription";
        // line 6
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, (isset($context["loop"]) || array_key_exists("loop", $context) ? $context["loop"] : (function () { throw new RuntimeError('Variable "loop" does not exist.', 6, $this->source); })()), "index", [], "any", false, false, false, 6), "html", null, true);
        yield "\">
                ";
        // line 7
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["projectFeature"]) || array_key_exists("projectFeature", $context) ? $context["projectFeature"] : (function () { throw new RuntimeError('Variable "projectFeature" does not exist.', 7, $this->source); })()), "vars", [], "any", false, false, false, 7), "data", [], "any", false, false, false, 7), "feature", [], "any", false, false, false, 7), "name", [], "any", false, false, false, 7), "html", null, true);
        yield "
            </a>
        </div>
        <div class=\"collapse ml-4\" id=\"collapseDescription";
        // line 10
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, (isset($context["loop"]) || array_key_exists("loop", $context) ? $context["loop"] : (function () { throw new RuntimeError('Variable "loop" does not exist.', 10, $this->source); })()), "index", [], "any", false, false, false, 10), "html", null, true);
        yield "\">
            <div class=\"mt-3 description small\" colspan=\"3\">
                ";
        // line 12
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["projectFeature"]) || array_key_exists("projectFeature", $context) ? $context["projectFeature"] : (function () { throw new RuntimeError('Variable "projectFeature" does not exist.', 12, $this->source); })()), "description", [], "any", false, false, false, 12), 'widget', ["attr" => ["rows" => "3"]]);
        yield "
                ";
        // line 13
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["projectFeature"]) || array_key_exists("projectFeature", $context) ? $context["projectFeature"] : (function () { throw new RuntimeError('Variable "projectFeature" does not exist.', 13, $this->source); })()), "description", [], "any", false, false, false, 13), 'errors');
        yield "
            </div>
        </div>

        ";
        // line 17
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["projectFeature"]) || array_key_exists("projectFeature", $context) ? $context["projectFeature"] : (function () { throw new RuntimeError('Variable "projectFeature" does not exist.', 17, $this->source); })()), "feature", [], "any", false, false, false, 17), 'widget', ["attr" => ["class" => "hidden-field"]]);
        yield "
        ";
        // line 18
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["projectFeature"]) || array_key_exists("projectFeature", $context) ? $context["projectFeature"] : (function () { throw new RuntimeError('Variable "projectFeature" does not exist.', 18, $this->source); })()), "feature", [], "any", false, false, false, 18), 'errors');
        yield "
    </th>

    <td class=\"text-center\" data-toggle=\"tooltip\" title=\"Choisir la catégorie de cette fonctionnalité.\">
        ";
        // line 22
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["projectFeature"]) || array_key_exists("projectFeature", $context) ? $context["projectFeature"] : (function () { throw new RuntimeError('Variable "projectFeature" does not exist.', 22, $this->source); })()), "category", [], "any", false, false, false, 22), 'widget', ["attr" => ["class" => "category"]]);
        yield "
        ";
        // line 23
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["projectFeature"]) || array_key_exists("projectFeature", $context) ? $context["projectFeature"] : (function () { throw new RuntimeError('Variable "projectFeature" does not exist.', 23, $this->source); })()), "category", [], "any", false, false, false, 23), 'errors');
        yield "
    </td>

    <td class=\"text-center input-align\" data-toggle=\"tooltip\" title=\"Indiquer le nombre de jours-homme nécéssaires.\">
        ";
        // line 27
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["projectFeature"]) || array_key_exists("projectFeature", $context) ? $context["projectFeature"] : (function () { throw new RuntimeError('Variable "projectFeature" does not exist.', 27, $this->source); })()), "day", [], "any", false, false, false, 27), 'widget');
        yield " j*h
        ";
        // line 28
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["projectFeature"]) || array_key_exists("projectFeature", $context) ? $context["projectFeature"] : (function () { throw new RuntimeError('Variable "projectFeature" does not exist.', 28, $this->source); })()), "day", [], "any", false, false, false, 28), 'errors');
        yield "
    </td>

    <td class=\"text-center\">
        <button title=\"Supprimer la fonctionnalité\" class=\"btn btn-sm btn-primary\" type=\"submit\" formmethod=\"post\"
                formaction=\"";
        // line 33
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("project_feature_delete", ["id" => CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["projectFeature"]) || array_key_exists("projectFeature", $context) ? $context["projectFeature"] : (function () { throw new RuntimeError('Variable "projectFeature" does not exist.', 33, $this->source); })()), "vars", [], "any", false, false, false, 33), "data", [], "any", false, false, false, 33), "id", [], "any", false, false, false, 33), "variant" => (isset($context["activeVariant"]) || array_key_exists("activeVariant", $context) ? $context["activeVariant"] : (function () { throw new RuntimeError('Variable "activeVariant" does not exist.', 33, $this->source); })())]), "html", null, true);
        yield "\">
            <i class=\"fas fa-trash-alt\"></i>
        </button>
    </td>
</tr>
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
        return "project/_featureLine.html.twig";
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
        return array (  114 => 33,  106 => 28,  102 => 27,  95 => 23,  91 => 22,  84 => 18,  80 => 17,  73 => 13,  69 => 12,  64 => 10,  58 => 7,  54 => 6,  50 => 5,  44 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<tr class=\"feature-line\">
    <th class=\"w-50\" scope=\"row\">

        <div class=\"ml-4\" data-toggle=\"tooltip\" title=\"Cliquer sur le triangle pour éditer la description de cette fonctionnalité.\">
            <a class=\"collapse-toggler collapsed\" data-toggle=\"collapse\" href=\"#collapseDescription{{ loop.index }}\"
               aria-expanded=\"false\" aria-controls=\"collapseDescription{{ loop.index }}\">
                {{ projectFeature.vars.data.feature.name }}
            </a>
        </div>
        <div class=\"collapse ml-4\" id=\"collapseDescription{{ loop.index }}\">
            <div class=\"mt-3 description small\" colspan=\"3\">
                {{ form_widget(projectFeature.description,{'attr': {'rows': '3'}}) }}
                {{ form_errors(projectFeature.description) }}
            </div>
        </div>

        {{ form_widget(projectFeature.feature, {'attr': {'class': 'hidden-field'}}) }}
        {{ form_errors(projectFeature.feature) }}
    </th>

    <td class=\"text-center\" data-toggle=\"tooltip\" title=\"Choisir la catégorie de cette fonctionnalité.\">
        {{ form_widget(projectFeature.category, {'attr': {'class': 'category' }}) }}
        {{ form_errors(projectFeature.category) }}
    </td>

    <td class=\"text-center input-align\" data-toggle=\"tooltip\" title=\"Indiquer le nombre de jours-homme nécéssaires.\">
        {{ form_widget(projectFeature.day) }} j*h
        {{ form_errors(projectFeature.day) }}
    </td>

    <td class=\"text-center\">
        <button title=\"Supprimer la fonctionnalité\" class=\"btn btn-sm btn-primary\" type=\"submit\" formmethod=\"post\"
                formaction=\"{{ path('project_feature_delete', {'id': projectFeature.vars.data.id, 'variant':activeVariant}) }}\">
            <i class=\"fas fa-trash-alt\"></i>
        </button>
    </td>
</tr>
", "project/_featureLine.html.twig", "/var/www/html/templates/project/_featureLine.html.twig");
    }
}
