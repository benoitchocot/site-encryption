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

/* project/index.html.twig */
class __TwigTemplate_cb1ba24651e1abaab35f52c42601c2290d37960bc1e890f1b783bedc5670295a extends Template
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
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "project/index.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "project/index.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "project/index.html.twig", 1);
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

        yield "Big Bill | Projets";
        
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
        yield "    <h1>Liste des projets</h1>
    <div class=\"text-right\">
        <a class=\" btn btn-primary mb-3\" href=\"";
        // line 8
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("project_new");
        yield "\"><i class=\"fas fa-plus-circle mr-1\"></i>Ajouter un projet</a>
    </div>
    <table class=\"table table-hover project-index\">
        <thead>
            <tr>
                <th class=\"text-center name\"><a href=\"";
        // line 13
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("project_index");
        yield "?sort=name&direction=";
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((isset($context["newDirection"]) || array_key_exists("newDirection", $context) ? $context["newDirection"] : (function () { throw new RuntimeError('Variable "newDirection" does not exist.', 13, $this->source); })()), "html", null, true);
        yield "\">Nom du projet <i class=\"sort-";
        yield (((0 === CoreExtension::compare((isset($context["sort"]) || array_key_exists("sort", $context) ? $context["sort"] : (function () { throw new RuntimeError('Variable "sort" does not exist.', 13, $this->source); })()), "name"))) ? ("active") : ("inactive"));
        yield " fas fa-angle-";
        yield (((0 === CoreExtension::compare((isset($context["newDirection"]) || array_key_exists("newDirection", $context) ? $context["newDirection"] : (function () { throw new RuntimeError('Variable "newDirection" does not exist.', 13, $this->source); })()), "asc"))) ? ("up") : ("down"));
        yield "\"></i></a></th>
                <th class=\"text-center date\"><a href=\"";
        // line 14
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("project_index");
        yield "?sort=date&direction=";
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((isset($context["newDirection"]) || array_key_exists("newDirection", $context) ? $context["newDirection"] : (function () { throw new RuntimeError('Variable "newDirection" does not exist.', 14, $this->source); })()), "html", null, true);
        yield "\">Création <i class=\"sort-";
        yield (((0 === CoreExtension::compare((isset($context["sort"]) || array_key_exists("sort", $context) ? $context["sort"] : (function () { throw new RuntimeError('Variable "sort" does not exist.', 14, $this->source); })()), "date"))) ? ("active") : ("inactive"));
        yield " fas fa-angle-";
        yield (((0 === CoreExtension::compare((isset($context["newDirection"]) || array_key_exists("newDirection", $context) ? $context["newDirection"] : (function () { throw new RuntimeError('Variable "newDirection" does not exist.', 14, $this->source); })()), "asc"))) ? ("up") : ("down"));
        yield "\"></i></a></th>
                <th class=\"text-center description\">Description</th>
                <th class=\"text-center cost\">Chiffrage</th>
                <th class=\"text-center variant\"><a href=\"";
        // line 17
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("project_index");
        yield "?sort=quotation&direction=";
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((isset($context["newDirection"]) || array_key_exists("newDirection", $context) ? $context["newDirection"] : (function () { throw new RuntimeError('Variable "newDirection" does not exist.', 17, $this->source); })()), "html", null, true);
        yield "\">Variante <i class=\"sort-";
        yield (((0 === CoreExtension::compare((isset($context["sort"]) || array_key_exists("sort", $context) ? $context["sort"] : (function () { throw new RuntimeError('Variable "sort" does not exist.', 17, $this->source); })()), "quotation"))) ? ("active") : ("inactive"));
        yield " fas fa-angle-";
        yield (((0 === CoreExtension::compare((isset($context["newDirection"]) || array_key_exists("newDirection", $context) ? $context["newDirection"] : (function () { throw new RuntimeError('Variable "newDirection" does not exist.', 17, $this->source); })()), "asc"))) ? ("up") : ("down"));
        yield "\"></i></a></th>
                <th class=\"text-center action\">Actions</th>
            </tr>
        </thead>
        <tbody>
        ";
        // line 22
        $context['_parent'] = $context;
        $context['_seq'] = CoreExtension::ensureTraversable((isset($context["projects"]) || array_key_exists("projects", $context) ? $context["projects"] : (function () { throw new RuntimeError('Variable "projects" does not exist.', 22, $this->source); })()));
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
        foreach ($context['_seq'] as $context["_key"] => $context["project"]) {
            // line 23
            yield "            <tr>
                <th class=\"text-center name\">
                    <span class=\"text-overflow-dynamic-container\">
                        <span class=\"text-overflow-dynamic-ellipsis\" data-toggle=\"tooltip\" title=\"";
            // line 26
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["project"], "name", [], "any", false, false, false, 26), "html", null, true);
            yield "\">
                            ";
            // line 27
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["project"], "name", [], "any", false, false, false, 27), "html", null, true);
            yield "
                        </span>
                    </span>
                </th>
                <td class=\"text-center date\">";
            // line 31
            ((CoreExtension::getAttribute($this->env, $this->source, $context["project"], "date", [], "any", false, false, false, 31)) ? (yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Twig\Extension\CoreExtension']->formatDate(CoreExtension::getAttribute($this->env, $this->source, $context["project"], "date", [], "any", false, false, false, 31), "d/m/Y"), "html", null, true)) : (yield ""));
            yield "</td>
                <td class=\"text-center description\">
                    <span class=\"text-overflow-dynamic-container\">
                        <span class=\"text-overflow-dynamic-ellipsis\" data-toggle=\"tooltip\" title=\"";
            // line 34
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["project"], "description", [], "any", false, false, false, 34), "html", null, true);
            yield "\">
                            ";
            // line 35
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["project"], "description", [], "any", false, false, false, 35), "html", null, true);
            yield "
                        </span>
                    </span>
                </td>

                ";
            // line 40
            $context["highCostTip"] = ($this->extensions['Twig\Extension\CoreExtension']->formatNumber(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["costs"]) || array_key_exists("costs", $context) ? $context["costs"] : (function () { throw new RuntimeError('Variable "costs" does not exist.', 40, $this->source); })()), CoreExtension::getAttribute($this->env, $this->source, $context["project"], "id", [], "any", false, false, false, 40), [], "array", false, false, false, 40), "cost", [], "array", false, false, false, 40), "high", [], "array", false, false, false, 40), 2, ".", ",") . " €");
            // line 41
            yield "                ";
            $context["middleCostTip"] = ($this->extensions['Twig\Extension\CoreExtension']->formatNumber(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["costs"]) || array_key_exists("costs", $context) ? $context["costs"] : (function () { throw new RuntimeError('Variable "costs" does not exist.', 41, $this->source); })()), CoreExtension::getAttribute($this->env, $this->source, $context["project"], "id", [], "any", false, false, false, 41), [], "array", false, false, false, 41), "cost", [], "array", false, false, false, 41), "middle", [], "array", false, false, false, 41), 2, ".", ",") . " €");
            // line 42
            yield "                ";
            $context["lowCostTip"] = ($this->extensions['Twig\Extension\CoreExtension']->formatNumber(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["costs"]) || array_key_exists("costs", $context) ? $context["costs"] : (function () { throw new RuntimeError('Variable "costs" does not exist.', 42, $this->source); })()), CoreExtension::getAttribute($this->env, $this->source, $context["project"], "id", [], "any", false, false, false, 42), [], "array", false, false, false, 42), "cost", [], "array", false, false, false, 42), "low", [], "array", false, false, false, 42), 2, ".", ",") . " €");
            // line 43
            yield "
                ";
            // line 44
            $context["highLoadTip"] = ($this->extensions['Twig\Extension\CoreExtension']->formatNumber(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["costs"]) || array_key_exists("costs", $context) ? $context["costs"] : (function () { throw new RuntimeError('Variable "costs" does not exist.', 44, $this->source); })()), CoreExtension::getAttribute($this->env, $this->source, $context["project"], "id", [], "any", false, false, false, 44), [], "array", false, false, false, 44), "load", [], "array", false, false, false, 44), "high", [], "array", false, false, false, 44), 2, ".", ",") . " jours");
            // line 45
            yield "                ";
            $context["middleLoadTip"] = ($this->extensions['Twig\Extension\CoreExtension']->formatNumber(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["costs"]) || array_key_exists("costs", $context) ? $context["costs"] : (function () { throw new RuntimeError('Variable "costs" does not exist.', 45, $this->source); })()), CoreExtension::getAttribute($this->env, $this->source, $context["project"], "id", [], "any", false, false, false, 45), [], "array", false, false, false, 45), "load", [], "array", false, false, false, 45), "middle", [], "array", false, false, false, 45), 2, ".", ",") . " jours");
            // line 46
            yield "                ";
            $context["lowLoadTip"] = ($this->extensions['Twig\Extension\CoreExtension']->formatNumber(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["costs"]) || array_key_exists("costs", $context) ? $context["costs"] : (function () { throw new RuntimeError('Variable "costs" does not exist.', 46, $this->source); })()), CoreExtension::getAttribute($this->env, $this->source, $context["project"], "id", [], "any", false, false, false, 46), [], "array", false, false, false, 46), "load", [], "array", false, false, false, 46), "low", [], "array", false, false, false, 46), 2, ".", ",") . " jours");
            // line 47
            yield "
                <td class=\"text-center text-nowrap cost\"
                    data-toggle=\"tooltip\"
                    data-placement=\"left\"
                    data-html=\"true\"
                    title=\" <h6> High :</h6>
                    <p>";
            // line 53
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((isset($context["highCostTip"]) || array_key_exists("highCostTip", $context) ? $context["highCostTip"] : (function () { throw new RuntimeError('Variable "highCostTip" does not exist.', 53, $this->source); })()), "html", null, true);
            yield "</p>
                    <p>";
            // line 54
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((isset($context["highLoadTip"]) || array_key_exists("highLoadTip", $context) ? $context["highLoadTip"] : (function () { throw new RuntimeError('Variable "highLoadTip" does not exist.', 54, $this->source); })()), "html", null, true);
            yield "</p>
                    <h6> Middle :</h6>
                    <p>";
            // line 56
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((isset($context["middleCostTip"]) || array_key_exists("middleCostTip", $context) ? $context["middleCostTip"] : (function () { throw new RuntimeError('Variable "middleCostTip" does not exist.', 56, $this->source); })()), "html", null, true);
            yield "</p>
                    <p>";
            // line 57
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((isset($context["middleLoadTip"]) || array_key_exists("middleLoadTip", $context) ? $context["middleLoadTip"] : (function () { throw new RuntimeError('Variable "middleLoadTip" does not exist.', 57, $this->source); })()), "html", null, true);
            yield "</p>
                    <h6> Low :</h6>
                    <p>";
            // line 59
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((isset($context["lowCostTip"]) || array_key_exists("lowCostTip", $context) ? $context["lowCostTip"] : (function () { throw new RuntimeError('Variable "lowCostTip" does not exist.', 59, $this->source); })()), "html", null, true);
            yield "</p>
                    <p>";
            // line 60
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((isset($context["lowLoadTip"]) || array_key_exists("lowLoadTip", $context) ? $context["lowLoadTip"] : (function () { throw new RuntimeError('Variable "lowLoadTip" does not exist.', 60, $this->source); })()), "html", null, true);
            yield "</p>\"
                >
                    ";
            // line 62
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context, (CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, $context["project"], "quotation", [], "any", false, false, false, 62), "name", [], "any", false, false, false, 62) . "CostTip"), [], "array", false, false, false, 62), "html", null, true);
            yield "
                    <p class=\"small\">(";
            // line 63
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context, (CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, $context["project"], "quotation", [], "any", false, false, false, 63), "name", [], "any", false, false, false, 63) . "LoadTip"), [], "array", false, false, false, 63), "html", null, true);
            yield ")</p>
                </td>

                <td class=\"text-center variant\">";
            // line 66
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, $context["project"], "quotation", [], "any", false, false, false, 66), "name", [], "any", false, false, false, 66), "html", null, true);
            yield "</td>

                <td class=\"btn-row action\">
                    ";
            // line 69
            if ($this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("ROLE_ADMIN")) {
                // line 70
                yield "                    ";
                yield Twig\Extension\CoreExtension::include($this->env, $context, "project/_delete_form.html.twig");
                yield "
                    ";
            }
            // line 72
            yield "                    <a title=\"Editer\" class=\"btn btn-sm btn-primary ml-2\" href=\"";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("project_edit", ["id" => CoreExtension::getAttribute($this->env, $this->source, $context["project"], "id", [], "any", false, false, false, 72)]), "html", null, true);
            yield "\">
                        <i class=\"fas fa-pencil-alt\"></i>
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
            // line 78
            yield "            <tr>
                <td class=\"text-center\" colspan=\"4\">Pas de projets enregistrés !</td>
            </tr>
        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['project'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 82
        yield "        </tbody>
    </table>
    <div class=\"navigation my-5\">
        ";
        // line 85
        yield $this->extensions['Knp\Bundle\PaginatorBundle\Twig\Extension\PaginationExtension']->render($this->env, (isset($context["projects"]) || array_key_exists("projects", $context) ? $context["projects"] : (function () { throw new RuntimeError('Variable "projects" does not exist.', 85, $this->source); })()));
        yield "
    </div>
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

        return; yield '';
    }

    // line 89
    public function block_stylesheets($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "stylesheets"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "stylesheets"));

        // line 90
        yield "    ";
        yield $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackLinkTags("app");
        yield "
    ";
        // line 91
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
        return "project/index.html.twig";
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
        return array (  332 => 91,  327 => 90,  317 => 89,  303 => 85,  298 => 82,  289 => 78,  269 => 72,  263 => 70,  261 => 69,  255 => 66,  249 => 63,  245 => 62,  240 => 60,  236 => 59,  231 => 57,  227 => 56,  222 => 54,  218 => 53,  210 => 47,  207 => 46,  204 => 45,  202 => 44,  199 => 43,  196 => 42,  193 => 41,  191 => 40,  183 => 35,  179 => 34,  173 => 31,  166 => 27,  162 => 26,  157 => 23,  139 => 22,  125 => 17,  113 => 14,  103 => 13,  95 => 8,  91 => 6,  81 => 5,  61 => 3,  38 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}Big Bill | Projets{% endblock %}

{% block body %}
    <h1>Liste des projets</h1>
    <div class=\"text-right\">
        <a class=\" btn btn-primary mb-3\" href=\"{{ path('project_new') }}\"><i class=\"fas fa-plus-circle mr-1\"></i>Ajouter un projet</a>
    </div>
    <table class=\"table table-hover project-index\">
        <thead>
            <tr>
                <th class=\"text-center name\"><a href=\"{{ path('project_index')}}?sort=name&direction={{ newDirection}}\">Nom du projet <i class=\"sort-{{ sort=='name'?'active':'inactive' }} fas fa-angle-{{ newDirection=='asc'?'up':'down' }}\"></i></a></th>
                <th class=\"text-center date\"><a href=\"{{ path('project_index')}}?sort=date&direction={{ newDirection}}\">Création <i class=\"sort-{{ sort=='date'?'active':'inactive' }} fas fa-angle-{{ newDirection=='asc'?'up':'down' }}\"></i></a></th>
                <th class=\"text-center description\">Description</th>
                <th class=\"text-center cost\">Chiffrage</th>
                <th class=\"text-center variant\"><a href=\"{{ path('project_index')}}?sort=quotation&direction={{ newDirection}}\">Variante <i class=\"sort-{{ sort=='quotation'?'active':'inactive' }} fas fa-angle-{{ newDirection=='asc'?'up':'down' }}\"></i></a></th>
                <th class=\"text-center action\">Actions</th>
            </tr>
        </thead>
        <tbody>
        {% for project in projects %}
            <tr>
                <th class=\"text-center name\">
                    <span class=\"text-overflow-dynamic-container\">
                        <span class=\"text-overflow-dynamic-ellipsis\" data-toggle=\"tooltip\" title=\"{{ project.name }}\">
                            {{ project.name }}
                        </span>
                    </span>
                </th>
                <td class=\"text-center date\">{{ project.date ? project.date|date('d/m/Y') : '' }}</td>
                <td class=\"text-center description\">
                    <span class=\"text-overflow-dynamic-container\">
                        <span class=\"text-overflow-dynamic-ellipsis\" data-toggle=\"tooltip\" title=\"{{ project.description }}\">
                            {{ project.description }}
                        </span>
                    </span>
                </td>

                {%  set highCostTip = costs[project.id]['cost']['high']|number_format(2, '.', ',') ~ ' €' %}
                {%  set middleCostTip = costs[project.id]['cost']['middle']|number_format(2, '.', ',') ~ ' €' %}
                {%  set lowCostTip = costs[project.id]['cost']['low']|number_format(2, '.', ',') ~ ' €' %}

                {%  set highLoadTip = costs[project.id]['load']['high']|number_format(2, '.', ',') ~ ' jours' %}
                {%  set middleLoadTip = costs[project.id]['load']['middle']|number_format(2, '.', ',') ~ ' jours' %}
                {%  set lowLoadTip = costs[project.id]['load']['low']|number_format(2, '.', ',') ~ ' jours' %}

                <td class=\"text-center text-nowrap cost\"
                    data-toggle=\"tooltip\"
                    data-placement=\"left\"
                    data-html=\"true\"
                    title=\" <h6> High :</h6>
                    <p>{{ highCostTip }}</p>
                    <p>{{ highLoadTip }}</p>
                    <h6> Middle :</h6>
                    <p>{{ middleCostTip }}</p>
                    <p>{{ middleLoadTip }}</p>
                    <h6> Low :</h6>
                    <p>{{ lowCostTip }}</p>
                    <p>{{ lowLoadTip }}</p>\"
                >
                    {{ _context[project.quotation.name ~ 'CostTip'] }}
                    <p class=\"small\">({{ _context[project.quotation.name ~ 'LoadTip'] }})</p>
                </td>

                <td class=\"text-center variant\">{{ project.quotation.name }}</td>

                <td class=\"btn-row action\">
                    {% if is_granted('ROLE_ADMIN') %}
                    {{ include('project/_delete_form.html.twig') }}
                    {% endif %}
                    <a title=\"Editer\" class=\"btn btn-sm btn-primary ml-2\" href=\"{{ path('project_edit', {'id': project.id}) }}\">
                        <i class=\"fas fa-pencil-alt\"></i>
                    </a>
                </td>
            </tr>
        {% else %}
            <tr>
                <td class=\"text-center\" colspan=\"4\">Pas de projets enregistrés !</td>
            </tr>
        {% endfor %}
        </tbody>
    </table>
    <div class=\"navigation my-5\">
        {{ knp_pagination_render(projects) }}
    </div>
{% endblock %}

{% block stylesheets %}
    {{ encore_entry_link_tags('app') }}
    {{ encore_entry_link_tags('index') }}
{% endblock %}
", "project/index.html.twig", "/var/www/html/templates/project/index.html.twig");
    }
}
