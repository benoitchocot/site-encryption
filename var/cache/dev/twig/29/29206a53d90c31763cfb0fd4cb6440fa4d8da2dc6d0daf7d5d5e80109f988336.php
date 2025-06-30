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

/* project/_projectHeader.html.twig */
class __TwigTemplate_42371719b983c8bd739d72b7ffe7b4907f2070e644daabdfff973ca64e3e2841 extends Template
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
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "project/_projectHeader.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "project/_projectHeader.html.twig"));

        // line 1
        yield "<div class=\"project-card my-5\">
    <div class=\"d-flex justify-content-between\">
        <div class=\"name_project\">
            <div class=\"col-sm-12 pl-0 name\" data-toggle=\"tooltip\" title=\"Indiquer le nom du projet.\">
                ";
        // line 5
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 5, $this->source); })()), "name", [], "any", false, false, false, 5), 'widget');
        yield "
            </div>
            <div class=\"col-sm-12 name\">
                ";
        // line 8
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 8, $this->source); })()), "name", [], "any", false, false, false, 8), 'errors');
        yield "
            </div>
            <div class=\"application pl-0 col-sm-12 mt-2\">
                <p>";
        // line 11
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 11, $this->source); })()), "application", [], "any", false, false, false, 11), 'widget', ["attr" => ["data-toggle" => "tooltip", "title" => "Indiquer le type du projet."]]);
        yield "</p>
                ";
        // line 12
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 12, $this->source); })()), "application", [], "any", false, false, false, 12), 'errors');
        yield "
            </div>
        </div>
        <div class=\"stat_project\">
            <div class=\"wrapper\">
                <div class=\"input-align d-flex justify-content-between align-items-center\">
                    <div class=\"load d-flex align-items-center\">
                        <i class='fas fa-user-clock'> </i>
                        <p class=\"input-info-header\">";
        // line 20
        ((((isset($context["load"]) || array_key_exists("load", $context)) &&  !(null === (isset($context["load"]) || array_key_exists("load", $context) ? $context["load"] : (function () { throw new RuntimeError('Variable "load" does not exist.', 20, $this->source); })())))) ? (yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((isset($context["load"]) || array_key_exists("load", $context) ? $context["load"] : (function () { throw new RuntimeError('Variable "load" does not exist.', 20, $this->source); })()), "html", null, true)) : (yield 0));
        yield "j*h</p>
                    </div>
                    <div class=\"cost d-flex align-items-center\">
                        <i class=\"fa fa-eur\"> </i>
                        <p class=\"input-info-header\">
                            ";
        // line 25
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Twig\Extension\CoreExtension']->formatNumber(((isset($context["price_per_day"]) || array_key_exists("price_per_day", $context) ? $context["price_per_day"] : (function () { throw new RuntimeError('Variable "price_per_day" does not exist.', 25, $this->source); })()) * (isset($context["load"]) || array_key_exists("load", $context) ? $context["load"] : (function () { throw new RuntimeError('Variable "load" does not exist.', 25, $this->source); })())), 2, ".", " "), "html", null, true);
        yield "
                        </p>
                    </div>
                    <div class=\"select text-center\" data-toggle=\"tooltip\" title=\"Indiquer la variante 'préférée' du projet.\">
                        ";
        // line 29
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 29, $this->source); })()), "quotation", [], "any", false, false, false, 29), 'widget');
        yield "
                    </div>
                </div>
                <div class=\"input-align mt-2 d-flex justify-content-between\">
                    <div class=\"skill text-confirmed d-flex align-items-center\" data-toggle=\"tooltip\" title=\"Indiquer la proportion de ressources 'juniors' dans l'équipe projet.\">
                        ";
        // line 34
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 34, $this->source); })()), "junior", [], "any", false, false, false, 34), 'label', ["label" => "Junior"]);
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 34, $this->source); })()), "junior", [], "any", false, false, false, 34), 'widget');
        yield " %
                    </div>
                    <div class=\"skill text-confirmed d-flex align-items-center mx-3\" data-toggle=\"tooltip\" title=\"Indiquer la proportion de ressources 'confirmées' dans l'équipe projet.\">
                        ";
        // line 37
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 37, $this->source); })()), "confirmed", [], "any", false, false, false, 37), 'label', ["label" => "Confirmé"]);
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 37, $this->source); })()), "confirmed", [], "any", false, false, false, 37), 'widget');
        yield " %
                    </div>
                    <div class=\"skill text-confirmed d-flex align-items-center\" data-toggle=\"tooltip\" title=\"Indiquer la proportion de ressources 'expertes' dans l'équipe projet.\">
                        ";
        // line 40
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 40, $this->source); })()), "expert", [], "any", false, false, false, 40), 'label', ["label" => "Expert"]);
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 40, $this->source); })()), "expert", [], "any", false, false, false, 40), 'widget');
        yield " %
                    </div>
                </div>
                <div class=\"row mt-4 stat_errors\">
                    ";
        // line 44
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 44, $this->source); })()), "expert", [], "any", false, false, false, 44), 'errors');
        yield "
                    ";
        // line 45
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 45, $this->source); })()), "junior", [], "any", false, false, false, 45), 'errors');
        yield "
                    ";
        // line 46
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 46, $this->source); })()), "confirmed", [], "any", false, false, false, 46), 'errors');
        yield "
                    ";
        // line 47
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 47, $this->source); })()), 'errors');
        yield "
                </div>
            </div>
        </div>
    </div>
</div>

<div class=\"form-group my-4\">
    <div class=\"col-12 p-0 description normal\" data-toggle=\"tooltip\" title=\"Indiquer la description du projet.\">
        ";
        // line 56
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 56, $this->source); })()), "description", [], "any", false, false, false, 56), 'widget', ["attr" => ["rows" => "3"]]);
        yield "
    </div>
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
        return "project/_projectHeader.html.twig";
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
        return array (  146 => 56,  134 => 47,  130 => 46,  126 => 45,  122 => 44,  114 => 40,  107 => 37,  100 => 34,  92 => 29,  85 => 25,  77 => 20,  66 => 12,  62 => 11,  56 => 8,  50 => 5,  44 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<div class=\"project-card my-5\">
    <div class=\"d-flex justify-content-between\">
        <div class=\"name_project\">
            <div class=\"col-sm-12 pl-0 name\" data-toggle=\"tooltip\" title=\"Indiquer le nom du projet.\">
                {{ form_widget(form.name) }}
            </div>
            <div class=\"col-sm-12 name\">
                {{ form_errors(form.name) }}
            </div>
            <div class=\"application pl-0 col-sm-12 mt-2\">
                <p>{{ form_widget(form.application, {'attr': {'data-toggle': 'tooltip', 'title': 'Indiquer le type du projet.'}}) }}</p>
                {{ form_errors(form.application) }}
            </div>
        </div>
        <div class=\"stat_project\">
            <div class=\"wrapper\">
                <div class=\"input-align d-flex justify-content-between align-items-center\">
                    <div class=\"load d-flex align-items-center\">
                        <i class='fas fa-user-clock'> </i>
                        <p class=\"input-info-header\">{{ load ?? 0 }}j*h</p>
                    </div>
                    <div class=\"cost d-flex align-items-center\">
                        <i class=\"fa fa-eur\"> </i>
                        <p class=\"input-info-header\">
                            {{ (price_per_day * load)|number_format(2, '.', ' ') }}
                        </p>
                    </div>
                    <div class=\"select text-center\" data-toggle=\"tooltip\" title=\"Indiquer la variante 'préférée' du projet.\">
                        {{ form_widget(form.quotation) }}
                    </div>
                </div>
                <div class=\"input-align mt-2 d-flex justify-content-between\">
                    <div class=\"skill text-confirmed d-flex align-items-center\" data-toggle=\"tooltip\" title=\"Indiquer la proportion de ressources 'juniors' dans l'équipe projet.\">
                        {{ form_label(form.junior, \"Junior\") }}{{ form_widget(form.junior) }} %
                    </div>
                    <div class=\"skill text-confirmed d-flex align-items-center mx-3\" data-toggle=\"tooltip\" title=\"Indiquer la proportion de ressources 'confirmées' dans l'équipe projet.\">
                        {{ form_label(form.confirmed, \"Confirmé\") }}{{ form_widget(form.confirmed) }} %
                    </div>
                    <div class=\"skill text-confirmed d-flex align-items-center\" data-toggle=\"tooltip\" title=\"Indiquer la proportion de ressources 'expertes' dans l'équipe projet.\">
                        {{ form_label(form.expert, \"Expert\") }}{{ form_widget(form.expert) }} %
                    </div>
                </div>
                <div class=\"row mt-4 stat_errors\">
                    {{ form_errors(form.expert) }}
                    {{ form_errors(form.junior) }}
                    {{ form_errors(form.confirmed) }}
                    {{form_errors(form) }}
                </div>
            </div>
        </div>
    </div>
</div>

<div class=\"form-group my-4\">
    <div class=\"col-12 p-0 description normal\" data-toggle=\"tooltip\" title=\"Indiquer la description du projet.\">
        {{ form_widget(form.description,{'attr': {'rows': '3'}}) }}
    </div>
</div>

", "project/_projectHeader.html.twig", "/home/bonoit/Projets Web/site-encryption/templates/project/_projectHeader.html.twig");
    }
}
