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

/* feature/_form.html.twig */
class __TwigTemplate_c5795b60bee06d63b852b07389070da388d5b235a2a965f670237cc599236c29 extends Template
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
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "feature/_form.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "feature/_form.html.twig"));

        // line 1
        yield         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 1, $this->source); })()), 'form_start');
        yield "
<div class=\"container\">
    <div class=\"form-group\">
        <div class=\"col-12 name\">
            ";
        // line 5
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 5, $this->source); })()), "name", [], "any", false, false, false, 5), 'label', ["label" => "Nom"]);
        yield "
        </div>
        <div class=\"col-12\">
            ";
        // line 8
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 8, $this->source); })()), "name", [], "any", false, false, false, 8), 'widget');
        yield "
        </div>
    </div>
    <div class=\"form-group\">
        <div class=\"col-12\">
            ";
        // line 13
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 13, $this->source); })()), "day", [], "any", false, false, false, 13), 'label', ["label" => "Charge"]);
        yield "
        </div>
        <div class=\"col-12 \">
            ";
        // line 16
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 16, $this->source); })()), "day", [], "any", false, false, false, 16), 'widget');
        yield "
        </div>
    </div>
    <div class=\"form-group\">
        <div class=\"col-12 \">
            ";
        // line 21
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 21, $this->source); })()), "description", [], "any", false, false, false, 21), 'label', ["label" => "Description"]);
        yield "
        </div>
        <div class=\"col-12 \">
            ";
        // line 24
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 24, $this->source); })()), "description", [], "any", false, false, false, 24), 'widget');
        yield "
        </div>
    </div>
    <div class=\"form-group\">
        <div class=\"col-12 \">
            ";
        // line 29
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 29, $this->source); })()), "category", [], "any", false, false, false, 29), 'label', ["label" => "Catégorie"]);
        yield "
        </div>
        <div class=\"col-12\">
            ";
        // line 32
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 32, $this->source); })()), "category", [], "any", false, false, false, 32), 'widget');
        yield "
        </div>
    </div>

    ";
        // line 36
        if (CoreExtension::getAttribute($this->env, $this->source, ($context["form"] ?? null), "isHigh", [], "any", true, true, false, 36)) {
            // line 37
            yield "        <div class=\"col-12\">
            ";
            // line 38
            yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 38, $this->source); })()), "category", [], "any", false, false, false, 38), 'label', ["label" => "Ajouter à la variante "]);
            yield "
            ";
            // line 39
            yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 39, $this->source); })()), "isHigh", [], "any", false, false, false, 39), 'widget');
            yield "
            ";
            // line 40
            yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 40, $this->source); })()), "isMiddle", [], "any", false, false, false, 40), 'widget');
            yield "
            ";
            // line 41
            yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 41, $this->source); })()), "isLow", [], "any", false, false, false, 41), 'widget');
            yield "
        </div>
    ";
        }
        // line 44
        yield "
</div>

<div class=\"button-panel\">
    <button class=\"btn btn-primary form-btn\"><i class=\"fas fa-check m-1\"></i> Enregistrer les modifications</button>
    ";
        // line 49
        if ((isset($context["id"]) || array_key_exists("id", $context))) {
            // line 50
            yield "        ";
            $context["route"] = $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("project_edit", ["id" => (isset($context["id"]) || array_key_exists("id", $context) ? $context["id"] : (function () { throw new RuntimeError('Variable "id" does not exist.', 50, $this->source); })())]);
            // line 51
            yield "        ";
            $context["label"] = "Revenir à la fiche projet";
            // line 52
            yield "    ";
        }
        // line 53
        yield "    <a class=\"btn btn-outline-primary form-btn\" href=\"";
        ((((isset($context["route"]) || array_key_exists("route", $context)) &&  !(null === (isset($context["route"]) || array_key_exists("route", $context) ? $context["route"] : (function () { throw new RuntimeError('Variable "route" does not exist.', 53, $this->source); })())))) ? (yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((isset($context["route"]) || array_key_exists("route", $context) ? $context["route"] : (function () { throw new RuntimeError('Variable "route" does not exist.', 53, $this->source); })()), "html", null, true)) : (yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("feature_index")));
        yield "\">
        <i class=\"fa fa-arrow-left m-1\"></i> ";
        // line 54
        ((((isset($context["label"]) || array_key_exists("label", $context)) &&  !(null === (isset($context["label"]) || array_key_exists("label", $context) ? $context["label"] : (function () { throw new RuntimeError('Variable "label" does not exist.', 54, $this->source); })())))) ? (yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((isset($context["label"]) || array_key_exists("label", $context) ? $context["label"] : (function () { throw new RuntimeError('Variable "label" does not exist.', 54, $this->source); })()), "html", null, true)) : (yield "Revenir à la liste des fonctionnalités"));
        yield "
    </a>
</div>
";
        // line 57
        yield         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 57, $this->source); })()), 'form_end');
        yield "
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
        return "feature/_form.html.twig";
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
        return array (  158 => 57,  152 => 54,  147 => 53,  144 => 52,  141 => 51,  138 => 50,  136 => 49,  129 => 44,  123 => 41,  119 => 40,  115 => 39,  111 => 38,  108 => 37,  106 => 36,  99 => 32,  93 => 29,  85 => 24,  79 => 21,  71 => 16,  65 => 13,  57 => 8,  51 => 5,  44 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{{ form_start(form) }}
<div class=\"container\">
    <div class=\"form-group\">
        <div class=\"col-12 name\">
            {{ form_label(form.name, \"Nom\") }}
        </div>
        <div class=\"col-12\">
            {{ form_widget(form.name) }}
        </div>
    </div>
    <div class=\"form-group\">
        <div class=\"col-12\">
            {{ form_label(form.day, \"Charge\") }}
        </div>
        <div class=\"col-12 \">
            {{ form_widget(form.day) }}
        </div>
    </div>
    <div class=\"form-group\">
        <div class=\"col-12 \">
            {{ form_label(form.description, \"Description\") }}
        </div>
        <div class=\"col-12 \">
            {{ form_widget(form.description) }}
        </div>
    </div>
    <div class=\"form-group\">
        <div class=\"col-12 \">
            {{ form_label(form.category, \"Catégorie\") }}
        </div>
        <div class=\"col-12\">
            {{ form_widget(form.category) }}
        </div>
    </div>

    {% if form.isHigh is defined %}
        <div class=\"col-12\">
            {{ form_label(form.category, \"Ajouter à la variante \") }}
            {{ form_widget(form.isHigh) }}
            {{ form_widget(form.isMiddle) }}
            {{ form_widget(form.isLow) }}
        </div>
    {% endif %}

</div>

<div class=\"button-panel\">
    <button class=\"btn btn-primary form-btn\"><i class=\"fas fa-check m-1\"></i> Enregistrer les modifications</button>
    {% if id is defined %}
        {% set route = path('project_edit', {'id':id}) %}
        {% set label = 'Revenir à la fiche projet' %}
    {% endif %}
    <a class=\"btn btn-outline-primary form-btn\" href=\"{{ route ?? path('feature_index') }}\">
        <i class=\"fa fa-arrow-left m-1\"></i> {{ label ?? 'Revenir à la liste des fonctionnalités' }}
    </a>
</div>
{{ form_end(form) }}
", "feature/_form.html.twig", "/home/bonoit/Projets Web/site-encryption/templates/feature/_form.html.twig");
    }
}
