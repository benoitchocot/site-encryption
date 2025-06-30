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

/* project/_addFeatures.html.twig */
class __TwigTemplate_05d57506112863cfd24e6afc65e862675c22fbfa5191ae8a3b752796f9e04144 extends Template
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
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "project/_addFeatures.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "project/_addFeatures.html.twig"));

        // line 1
        yield "<!-- Modal -->
<div class=\"modal fade\" id=\"add-feature\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"
     aria-hidden=\"true\">
    <div class=\"modal-dialog\">
        <div class=\"modal-content\">
            <div class=\"modal-header\">
                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Ajouter une fonctionnalité</h5>
                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">
                    <span aria-hidden=\"true\">&times;</span>
                </button>
            </div>

            ";
        // line 13
        yield         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["formFeature"]) || array_key_exists("formFeature", $context) ? $context["formFeature"] : (function () { throw new RuntimeError('Variable "formFeature" does not exist.', 13, $this->source); })()), 'form_start');
        yield "
            <div class=\"modal-body\">
                <div class=\"form-group my-2\">
                    ";
        // line 16
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["formFeature"]) || array_key_exists("formFeature", $context) ? $context["formFeature"] : (function () { throw new RuntimeError('Variable "formFeature" does not exist.', 16, $this->source); })()), "name", [], "any", false, false, false, 16), 'label', ["label" => "Nom"]);
        yield "
                    ";
        // line 17
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["formFeature"]) || array_key_exists("formFeature", $context) ? $context["formFeature"] : (function () { throw new RuntimeError('Variable "formFeature" does not exist.', 17, $this->source); })()), "name", [], "any", false, false, false, 17), 'widget');
        yield "
                </div>
                <div class=\"form-group my-2\">
                    ";
        // line 20
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["formFeature"]) || array_key_exists("formFeature", $context) ? $context["formFeature"] : (function () { throw new RuntimeError('Variable "formFeature" does not exist.', 20, $this->source); })()), "day", [], "any", false, false, false, 20), 'label', ["label" => "Charge"]);
        yield "
                    ";
        // line 21
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["formFeature"]) || array_key_exists("formFeature", $context) ? $context["formFeature"] : (function () { throw new RuntimeError('Variable "formFeature" does not exist.', 21, $this->source); })()), "day", [], "any", false, false, false, 21), 'widget');
        yield "
                </div>
                <div class=\"form-group my-2\">
                    ";
        // line 24
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["formFeature"]) || array_key_exists("formFeature", $context) ? $context["formFeature"] : (function () { throw new RuntimeError('Variable "formFeature" does not exist.', 24, $this->source); })()), "description", [], "any", false, false, false, 24), 'label', ["label" => "Description"]);
        yield "
                    ";
        // line 25
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["formFeature"]) || array_key_exists("formFeature", $context) ? $context["formFeature"] : (function () { throw new RuntimeError('Variable "formFeature" does not exist.', 25, $this->source); })()), "description", [], "any", false, false, false, 25), 'widget');
        yield "
                </div>
                <div class=\"form-group my-2\">
                    ";
        // line 28
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["formFeature"]) || array_key_exists("formFeature", $context) ? $context["formFeature"] : (function () { throw new RuntimeError('Variable "formFeature" does not exist.', 28, $this->source); })()), "category", [], "any", false, false, false, 28), 'label', ["label" => "Catégorie"]);
        yield "
                    ";
        // line 29
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["formFeature"]) || array_key_exists("formFeature", $context) ? $context["formFeature"] : (function () { throw new RuntimeError('Variable "formFeature" does not exist.', 29, $this->source); })()), "category", [], "any", false, false, false, 29), 'widget');
        yield "
                </div>

                <div class=\"form-group my-2\">
                    <div class=\"form-check form-check-inline\">
                        ";
        // line 34
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["formFeature"]) || array_key_exists("formFeature", $context) ? $context["formFeature"] : (function () { throw new RuntimeError('Variable "formFeature" does not exist.', 34, $this->source); })()), "isHigh", [], "any", false, false, false, 34), 'widget');
        yield "
                        ";
        // line 35
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["formFeature"]) || array_key_exists("formFeature", $context) ? $context["formFeature"] : (function () { throw new RuntimeError('Variable "formFeature" does not exist.', 35, $this->source); })()), "isHigh", [], "any", false, false, false, 35), 'label', ["label" => "High"]);
        yield "
                    </div>
                    <div class=\"form-check form-check-inline\">
                        ";
        // line 38
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["formFeature"]) || array_key_exists("formFeature", $context) ? $context["formFeature"] : (function () { throw new RuntimeError('Variable "formFeature" does not exist.', 38, $this->source); })()), "isMiddle", [], "any", false, false, false, 38), 'widget');
        yield "
                        ";
        // line 39
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["formFeature"]) || array_key_exists("formFeature", $context) ? $context["formFeature"] : (function () { throw new RuntimeError('Variable "formFeature" does not exist.', 39, $this->source); })()), "isMiddle", [], "any", false, false, false, 39), 'label', ["label" => "Middle"]);
        yield "
                    </div>
                    <div class=\"form-check form-check-inline\">
                        ";
        // line 42
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["formFeature"]) || array_key_exists("formFeature", $context) ? $context["formFeature"] : (function () { throw new RuntimeError('Variable "formFeature" does not exist.', 42, $this->source); })()), "isLow", [], "any", false, false, false, 42), 'widget');
        yield "
                        ";
        // line 43
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["formFeature"]) || array_key_exists("formFeature", $context) ? $context["formFeature"] : (function () { throw new RuntimeError('Variable "formFeature" does not exist.', 43, $this->source); })()), "isLow", [], "any", false, false, false, 43), 'label', ["label" => "Low"]);
        yield "
                    </div>
                </div>
            </div>

            <div class=\"modal-footer\">
                <div class=\"button-panel container\">
                    <button class=\"btn btn-primary form-btn\">Enregistrer</button>
                </div>
            </div>
            ";
        // line 53
        yield         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["formFeature"]) || array_key_exists("formFeature", $context) ? $context["formFeature"] : (function () { throw new RuntimeError('Variable "formFeature" does not exist.', 53, $this->source); })()), 'form_end');
        yield "
        </div>
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
        return "project/_addFeatures.html.twig";
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
        return array (  143 => 53,  130 => 43,  126 => 42,  120 => 39,  116 => 38,  110 => 35,  106 => 34,  98 => 29,  94 => 28,  88 => 25,  84 => 24,  78 => 21,  74 => 20,  68 => 17,  64 => 16,  58 => 13,  44 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<!-- Modal -->
<div class=\"modal fade\" id=\"add-feature\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"
     aria-hidden=\"true\">
    <div class=\"modal-dialog\">
        <div class=\"modal-content\">
            <div class=\"modal-header\">
                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Ajouter une fonctionnalité</h5>
                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">
                    <span aria-hidden=\"true\">&times;</span>
                </button>
            </div>

            {{ form_start(formFeature) }}
            <div class=\"modal-body\">
                <div class=\"form-group my-2\">
                    {{ form_label(formFeature.name, \"Nom\") }}
                    {{ form_widget(formFeature.name) }}
                </div>
                <div class=\"form-group my-2\">
                    {{ form_label(formFeature.day, \"Charge\") }}
                    {{ form_widget(formFeature.day) }}
                </div>
                <div class=\"form-group my-2\">
                    {{ form_label(formFeature.description, \"Description\") }}
                    {{ form_widget(formFeature.description) }}
                </div>
                <div class=\"form-group my-2\">
                    {{ form_label(formFeature.category, \"Catégorie\") }}
                    {{ form_widget(formFeature.category) }}
                </div>

                <div class=\"form-group my-2\">
                    <div class=\"form-check form-check-inline\">
                        {{ form_widget(formFeature.isHigh) }}
                        {{ form_label(formFeature.isHigh, \"High\") }}
                    </div>
                    <div class=\"form-check form-check-inline\">
                        {{ form_widget(formFeature.isMiddle) }}
                        {{ form_label(formFeature.isMiddle, \"Middle\") }}
                    </div>
                    <div class=\"form-check form-check-inline\">
                        {{ form_widget(formFeature.isLow) }}
                        {{ form_label(formFeature.isLow, \"Low\") }}
                    </div>
                </div>
            </div>

            <div class=\"modal-footer\">
                <div class=\"button-panel container\">
                    <button class=\"btn btn-primary form-btn\">Enregistrer</button>
                </div>
            </div>
            {{ form_end(formFeature) }}
        </div>
    </div>
</div>

", "project/_addFeatures.html.twig", "/var/www/html/templates/project/_addFeatures.html.twig");
    }
}
