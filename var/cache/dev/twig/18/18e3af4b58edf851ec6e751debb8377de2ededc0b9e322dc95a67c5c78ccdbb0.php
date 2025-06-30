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

/* project/_form.html.twig */
class __TwigTemplate_6d8c11e50bd0f729ad4861adf5b49f80abd4c3a76772ccf839e9c63202e676ad extends Template
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
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "project/_form.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "project/_form.html.twig"));

        // line 1
        yield "<div class=\"project-header container\" ";
        yield (((null === CoreExtension::getAttribute($this->env, $this->source, (isset($context["project"]) || array_key_exists("project", $context) ? $context["project"] : (function () { throw new RuntimeError('Variable "project" does not exist.', 1, $this->source); })()), "id", [], "any", false, false, false, 1))) ? ("id=\"new-project\"") : (""));
        yield ">

    ";
        // line 3
        if (((isset($context["formFeature"]) || array_key_exists("formFeature", $context)) && $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["formFeature"]) || array_key_exists("formFeature", $context) ? $context["formFeature"] : (function () { throw new RuntimeError('Variable "formFeature" does not exist.', 3, $this->source); })()), "name", [], "any", false, false, false, 3), 'errors'))) {
            // line 4
            yield "        <div class=\"alert alert-danger mb-5\">
            ";
            // line 5
            yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["formFeature"]) || array_key_exists("formFeature", $context) ? $context["formFeature"] : (function () { throw new RuntimeError('Variable "formFeature" does not exist.', 5, $this->source); })()), "name", [], "any", false, false, false, 5), 'errors');
            yield "
        </div>
    ";
        }
        // line 8
        yield "
    ";
        // line 9
        yield from         $this->loadTemplate("project/_projectHeader.html.twig", "project/_form.html.twig", 9)->unwrap()->yield($context);
        // line 10
        yield "</div>
<div class=\"container my-5\">
    ";
        // line 12
        if ( !(null === CoreExtension::getAttribute($this->env, $this->source, (isset($context["project"]) || array_key_exists("project", $context) ? $context["project"] : (function () { throw new RuntimeError('Variable "project" does not exist.', 12, $this->source); })()), "id", [], "any", false, false, false, 12))) {
            // line 13
            yield "        <div class=\"table-tools d-flex justify-content-between\">
            <ul class=\"nav nav-pills\">
                ";
            // line 15
            $context['_parent'] = $context;
            $context['_seq'] = CoreExtension::ensureTraversable((isset($context["variants"]) || array_key_exists("variants", $context) ? $context["variants"] : (function () { throw new RuntimeError('Variable "variants" does not exist.', 15, $this->source); })()));
            foreach ($context['_seq'] as $context["_key"] => $context["variant"]) {
                // line 16
                yield "                    <li class=\"nav-item text-primary\">
                        <a class=\"nav-link variant-nav-link btn ";
                // line 17
                yield (((0 === CoreExtension::compare((isset($context["activeVariant"]) || array_key_exists("activeVariant", $context) ? $context["activeVariant"] : (function () { throw new RuntimeError('Variable "activeVariant" does not exist.', 17, $this->source); })()), CoreExtension::getAttribute($this->env, $this->source, $context["variant"], "name", [], "any", false, false, false, 17)))) ? ("active") : (""));
                yield "\"
                           href=\"";
                // line 18
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("project_edit", ["id" => CoreExtension::getAttribute($this->env, $this->source, (isset($context["project"]) || array_key_exists("project", $context) ? $context["project"] : (function () { throw new RuntimeError('Variable "project" does not exist.', 18, $this->source); })()), "id", [], "any", false, false, false, 18), "variant" => CoreExtension::getAttribute($this->env, $this->source, $context["variant"], "name", [], "any", false, false, false, 18)]), "html", null, true);
                yield "\">

                            ";
                // line 20
                if ((0 === CoreExtension::compare(CoreExtension::getAttribute($this->env, $this->source, $context["variant"], "name", [], "any", false, false, false, 20), "low"))) {
                    // line 21
                    yield "                                <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-bar-chart-fill\"
                                     fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">
                                    <rect width=\"4\" height=\"5\" x=\"1\" y=\"10\" rx=\"1\"/>
                                    <rect class='text-half' width=\"4\" height=\"9\" x=\"6\" y=\"6\" rx=\"1\"/>
                                    <rect class='text-half' width=\"4\" height=\"14\" x=\"11\" y=\"1\" rx=\"1\"/>
                                </svg>
                            ";
                }
                // line 28
                yield "                            ";
                if ((0 === CoreExtension::compare(CoreExtension::getAttribute($this->env, $this->source, $context["variant"], "name", [], "any", false, false, false, 28), "middle"))) {
                    // line 29
                    yield "                                <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-bar-chart-fill\"
                                     fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">
                                    <rect width=\"4\" height=\"5\" x=\"1\" y=\"10\" rx=\"1\"/>
                                    <rect width=\"4\" height=\"9\" x=\"6\" y=\"6\" rx=\"1\"/>
                                    <rect class='text-half' width=\"4\" height=\"14\" x=\"11\" y=\"1\" rx=\"1\"/>
                                </svg>
                            ";
                }
                // line 36
                yield "                            ";
                if ((0 === CoreExtension::compare(CoreExtension::getAttribute($this->env, $this->source, $context["variant"], "name", [], "any", false, false, false, 36), "high"))) {
                    // line 37
                    yield "                                <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-bar-chart-fill\"
                                     fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">
                                    <rect width=\"4\" height=\"5\" x=\"1\" y=\"10\" rx=\"1\"/>
                                    <rect width=\"4\" height=\"9\" x=\"6\" y=\"6\" rx=\"1\"/>
                                    <rect width=\"4\" height=\"14\" x=\"11\" y=\"1\" rx=\"1\"/>
                                </svg>
                            ";
                }
                // line 44
                yield "                            ";
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(Twig\Extension\CoreExtension::capitalize($this->env->getCharset(), CoreExtension::getAttribute($this->env, $this->source, $context["variant"], "name", [], "any", false, false, false, 44)), "html", null, true);
                yield "
                        </a>
                    </li>
                ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['variant'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 48
            yield "            </ul>

            <!-- Button trigger modal -->
            <button type=\"button\" class=\"btn btn-primary mb-3\" data-toggle=\"modal\" data-target=\"#add-feature\">
                <i class=\"fas fa-plus-circle m-1\"></i>Ajouter une fonctionnalité
            </button>

        </div>

        <div class=\"tab-content\">
            ";
            // line 58
            yield Twig\Extension\CoreExtension::include($this->env, $context, "project/_featuresList.html.twig");
            yield "
        </div>
    ";
        }
        // line 61
        yield "</div>

<div class=\"button-panel container d-flex \">

        <a class=\"btn btn-outline-primary form-btn\" href=\"";
        // line 65
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("project_index");
        yield "\">
            <i class=\"fa fa-arrow-left m-1\"></i> Revenir à la liste des projets
        </a>
        ";
        // line 68
        if ( !(null === CoreExtension::getAttribute($this->env, $this->source, (isset($context["project"]) || array_key_exists("project", $context) ? $context["project"] : (function () { throw new RuntimeError('Variable "project" does not exist.', 68, $this->source); })()), "id", [], "any", false, false, false, 68))) {
            // line 69
            yield "            <a class=\"btn btn-outline-primary form-btn\"
               href=\"";
            // line 70
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("export", ["id" => CoreExtension::getAttribute($this->env, $this->source, (isset($context["project"]) || array_key_exists("project", $context) ? $context["project"] : (function () { throw new RuntimeError('Variable "project" does not exist.', 70, $this->source); })()), "id", [], "any", false, false, false, 70), "variant" => (isset($context["activeVariant"]) || array_key_exists("activeVariant", $context) ? $context["activeVariant"] : (function () { throw new RuntimeError('Variable "activeVariant" does not exist.', 70, $this->source); })())]), "html", null, true);
            yield "\" target=\"_blank\">
                <i class=\"fa fa-file-pdf-o  m-1\"></i>Exporter au format PDF
            </a>
        ";
        }
        // line 74
        yield "        <button class=\"btn btn-primary form-btn\"><i class=\"fas fa-check m-1\"> </i> ";
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((isset($context["buttonName"]) || array_key_exists("buttonName", $context) ? $context["buttonName"] : (function () { throw new RuntimeError('Variable "buttonName" does not exist.', 74, $this->source); })()), "html", null, true);
        yield "</button>

</div>
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
        return "project/_form.html.twig";
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
        return array (  180 => 74,  173 => 70,  170 => 69,  168 => 68,  162 => 65,  156 => 61,  150 => 58,  138 => 48,  127 => 44,  118 => 37,  115 => 36,  106 => 29,  103 => 28,  94 => 21,  92 => 20,  87 => 18,  83 => 17,  80 => 16,  76 => 15,  72 => 13,  70 => 12,  66 => 10,  64 => 9,  61 => 8,  55 => 5,  52 => 4,  50 => 3,  44 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<div class=\"project-header container\" {{ project.id is null ? 'id=\"new-project\"' : ''}}>

    {% if formFeature is defined and form_errors(formFeature.name) %}
        <div class=\"alert alert-danger mb-5\">
            {{ form_errors(formFeature.name) }}
        </div>
    {% endif %}

    {% include 'project/_projectHeader.html.twig' %}
</div>
<div class=\"container my-5\">
    {% if not project.id is null %}
        <div class=\"table-tools d-flex justify-content-between\">
            <ul class=\"nav nav-pills\">
                {% for variant in variants %}
                    <li class=\"nav-item text-primary\">
                        <a class=\"nav-link variant-nav-link btn {{ activeVariant == variant.name ? 'active' : '' }}\"
                           href=\"{{ path('project_edit', {'id': project.id, 'variant':variant.name}) }}\">

                            {% if variant.name =='low' %}
                                <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-bar-chart-fill\"
                                     fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">
                                    <rect width=\"4\" height=\"5\" x=\"1\" y=\"10\" rx=\"1\"/>
                                    <rect class='text-half' width=\"4\" height=\"9\" x=\"6\" y=\"6\" rx=\"1\"/>
                                    <rect class='text-half' width=\"4\" height=\"14\" x=\"11\" y=\"1\" rx=\"1\"/>
                                </svg>
                            {% endif %}
                            {% if variant.name =='middle' %}
                                <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-bar-chart-fill\"
                                     fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">
                                    <rect width=\"4\" height=\"5\" x=\"1\" y=\"10\" rx=\"1\"/>
                                    <rect width=\"4\" height=\"9\" x=\"6\" y=\"6\" rx=\"1\"/>
                                    <rect class='text-half' width=\"4\" height=\"14\" x=\"11\" y=\"1\" rx=\"1\"/>
                                </svg>
                            {% endif %}
                            {% if variant.name =='high' %}
                                <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-bar-chart-fill\"
                                     fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">
                                    <rect width=\"4\" height=\"5\" x=\"1\" y=\"10\" rx=\"1\"/>
                                    <rect width=\"4\" height=\"9\" x=\"6\" y=\"6\" rx=\"1\"/>
                                    <rect width=\"4\" height=\"14\" x=\"11\" y=\"1\" rx=\"1\"/>
                                </svg>
                            {% endif %}
                            {{ variant.name|capitalize }}
                        </a>
                    </li>
                {% endfor %}
            </ul>

            <!-- Button trigger modal -->
            <button type=\"button\" class=\"btn btn-primary mb-3\" data-toggle=\"modal\" data-target=\"#add-feature\">
                <i class=\"fas fa-plus-circle m-1\"></i>Ajouter une fonctionnalité
            </button>

        </div>

        <div class=\"tab-content\">
            {{ include('project/_featuresList.html.twig') }}
        </div>
    {% endif %}
</div>

<div class=\"button-panel container d-flex \">

        <a class=\"btn btn-outline-primary form-btn\" href=\"{{ path('project_index') }}\">
            <i class=\"fa fa-arrow-left m-1\"></i> Revenir à la liste des projets
        </a>
        {% if not project.id is null %}
            <a class=\"btn btn-outline-primary form-btn\"
               href=\"{{ path('export', {'id': project.id, 'variant':activeVariant }) }}\" target=\"_blank\">
                <i class=\"fa fa-file-pdf-o  m-1\"></i>Exporter au format PDF
            </a>
        {% endif %}
        <button class=\"btn btn-primary form-btn\"><i class=\"fas fa-check m-1\"> </i> {{ buttonName }}</button>

</div>
", "project/_form.html.twig", "/home/bonoit/Projets Web/site-encryption/templates/project/_form.html.twig");
    }
}
