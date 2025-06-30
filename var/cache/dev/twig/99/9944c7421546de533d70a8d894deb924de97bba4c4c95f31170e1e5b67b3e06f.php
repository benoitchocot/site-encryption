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

/* project/_featuresList.html.twig */
class __TwigTemplate_794d57679cb712a538a37db33b6e875aab82654a3f55eb256cd02213b3660746 extends Template
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
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "project/_featuresList.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "project/_featuresList.html.twig"));

        // line 1
        yield "<table class=\"table table-hover feature-list\">

    <thead>
    <tr>
        <th scope=\"col\">Nom de la fonctionnalité</th>
        <th class=\"text-center\" scope=\"col\">Catégorie de la fonctionnalité</th>
        <th colspan=\"2\" class=\"text-left\" scope=\"col\">Charge estimée</th>
    </tr>
    </thead>
    <tbody>

    ";
        // line 12
        $context['_parent'] = $context;
        $context['_seq'] = CoreExtension::ensureTraversable(Twig\Extension\CoreExtension::keys(CoreExtension::getAttribute($this->env, $this->source, (isset($context["projectSynthesis"]) || array_key_exists("projectSynthesis", $context) ? $context["projectSynthesis"] : (function () { throw new RuntimeError('Variable "projectSynthesis" does not exist.', 12, $this->source); })()), (isset($context["activeVariant"]) || array_key_exists("activeVariant", $context) ? $context["activeVariant"] : (function () { throw new RuntimeError('Variable "activeVariant" does not exist.', 12, $this->source); })()), [], "array", false, false, false, 12)));
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
        foreach ($context['_seq'] as $context["_key"] => $context["featureCategory"]) {
            // line 13
            yield "        <tr>
            <td colspan=\"2\" class=\"feature-category\">
                <div>
                    ";
            // line 16
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($context["featureCategory"], "html", null, true);
            yield "
                </div>
            </td>

            <td colspan=\"1\" class=\"feature-category\">
                <div class=\"m-0 text-center\">";
            // line 21
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Twig\Extension\CoreExtension']->formatNumber(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["projectSynthesis"]) || array_key_exists("projectSynthesis", $context) ? $context["projectSynthesis"] : (function () { throw new RuntimeError('Variable "projectSynthesis" does not exist.', 21, $this->source); })()), (isset($context["activeVariant"]) || array_key_exists("activeVariant", $context) ? $context["activeVariant"] : (function () { throw new RuntimeError('Variable "activeVariant" does not exist.', 21, $this->source); })()), [], "array", false, false, false, 21), $context["featureCategory"], [], "array", false, false, false, 21), "load", [], "any", false, false, false, 21), 2, ".", " "), "html", null, true);
            yield " j*h</div>
                <div class=\"small m-0 text-center\">";
            // line 22
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Twig\Extension\CoreExtension']->formatNumber(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["projectSynthesis"]) || array_key_exists("projectSynthesis", $context) ? $context["projectSynthesis"] : (function () { throw new RuntimeError('Variable "projectSynthesis" does not exist.', 22, $this->source); })()), (isset($context["activeVariant"]) || array_key_exists("activeVariant", $context) ? $context["activeVariant"] : (function () { throw new RuntimeError('Variable "activeVariant" does not exist.', 22, $this->source); })()), [], "array", false, false, false, 22), $context["featureCategory"], [], "array", false, false, false, 22), "cost", [], "any", false, false, false, 22), 2, ".", " "), "html", null, true);
            yield " €.</div>
            </td>
            <td colspan=\"1\" class=\"feature-category\"></td>
        </tr>

        ";
            // line 27
            $context['_parent'] = $context;
            $context['_seq'] = CoreExtension::ensureTraversable(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 27, $this->source); })()), "projectFeatures", [], "any", false, false, false, 27));
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
            foreach ($context['_seq'] as $context["_key"] => $context["projectFeature"]) {
                // line 28
                yield "            ";
                if ((0 === CoreExtension::compare($context["featureCategory"], CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, $context["projectFeature"], "vars", [], "any", false, false, false, 28), "data", [], "any", false, false, false, 28), "category", [], "any", false, false, false, 28), "name", [], "any", false, false, false, 28)))) {
                    // line 29
                    yield "                ";
                    yield Twig\Extension\CoreExtension::include($this->env, $context, "project/_featureLine.html.twig");
                    yield "
            ";
                }
                // line 31
                yield "        ";
                ++$context['loop']['index0'];
                ++$context['loop']['index'];
                $context['loop']['first'] = false;
                if (isset($context['loop']['length'])) {
                    --$context['loop']['revindex0'];
                    --$context['loop']['revindex'];
                    $context['loop']['last'] = 0 === $context['loop']['revindex0'];
                }
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['projectFeature'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 32
            yield "    ";
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
            // line 33
            yield "        <td colspan=\"4\">Pas de fonctionnalité enregistrée !</td>
    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['featureCategory'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 35
        yield "
    </tbody>
</table>
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
        return "project/_featuresList.html.twig";
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
        return array (  160 => 35,  153 => 33,  140 => 32,  126 => 31,  120 => 29,  117 => 28,  100 => 27,  92 => 22,  88 => 21,  80 => 16,  75 => 13,  57 => 12,  44 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<table class=\"table table-hover feature-list\">

    <thead>
    <tr>
        <th scope=\"col\">Nom de la fonctionnalité</th>
        <th class=\"text-center\" scope=\"col\">Catégorie de la fonctionnalité</th>
        <th colspan=\"2\" class=\"text-left\" scope=\"col\">Charge estimée</th>
    </tr>
    </thead>
    <tbody>

    {%  for featureCategory in projectSynthesis[activeVariant]|keys %}
        <tr>
            <td colspan=\"2\" class=\"feature-category\">
                <div>
                    {{ featureCategory }}
                </div>
            </td>

            <td colspan=\"1\" class=\"feature-category\">
                <div class=\"m-0 text-center\">{{ projectSynthesis[activeVariant][featureCategory].load | number_format(2, '.', ' ') }} j*h</div>
                <div class=\"small m-0 text-center\">{{ projectSynthesis[activeVariant][featureCategory].cost | number_format(2, '.', ' ') }} €.</div>
            </td>
            <td colspan=\"1\" class=\"feature-category\"></td>
        </tr>

        {% for projectFeature in form.projectFeatures %}
            {% if featureCategory == projectFeature.vars.data.category.name %}
                {{ include('project/_featureLine.html.twig') }}
            {%  endif %}
        {% endfor %}
    {% else %}
        <td colspan=\"4\">Pas de fonctionnalité enregistrée !</td>
    {% endfor %}

    </tbody>
</table>
", "project/_featuresList.html.twig", "/home/bonoit/Projets Web/site-encryption/templates/project/_featuresList.html.twig");
    }
}
