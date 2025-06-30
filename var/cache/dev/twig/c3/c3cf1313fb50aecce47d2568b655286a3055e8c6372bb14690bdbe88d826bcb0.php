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

/* user/index.html.twig */
class __TwigTemplate_c2de20c7bb565305dc35bcfa30315e4a4ce6d88d3caa1261a7a855f99e68aafb extends Template
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
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "user/index.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "user/index.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "user/index.html.twig", 1);
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

        yield "Big Bill | Utilisateur";
        
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
        yield "    <h1>Liste des utilisateurs</h1>
    <div class=\"text-right\">
        <a class=\" btn btn-primary mb-3\" href=\"";
        // line 8
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("user_new");
        yield "\"><i class=\"fas fa-plus-circle mr-1\"></i>Ajouter un
            utilisateur</a>
    </div>
    <table class=\"table table-hover\">
        <thead>
        <tr>
            <th class=\"text-center\">Nom</th>
            <th class=\"text-center\">Prénom</th>
            <th class=\"text-center\">Date d'entrée</th>
            <th class=\"text-center\">Email</th>
            <th class=\"text-center\">Rôle</th>
            <th class=\"text-center\">Actions</th>
        </tr>
        </thead>
        <tbody>
        ";
        // line 23
        $context['_parent'] = $context;
        $context['_seq'] = CoreExtension::ensureTraversable((isset($context["users"]) || array_key_exists("users", $context) ? $context["users"] : (function () { throw new RuntimeError('Variable "users" does not exist.', 23, $this->source); })()));
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
        foreach ($context['_seq'] as $context["_key"] => $context["user"]) {
            // line 24
            yield "            <tr>
                <td class=\"text-center\">";
            // line 25
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["user"], "lastname", [], "any", false, false, false, 25), "html", null, true);
            yield "</td>
                <th class=\"text-center\">";
            // line 26
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["user"], "firstname", [], "any", false, false, false, 26), "html", null, true);
            yield "</th>
                <td class=\"text-center\">";
            // line 27
            ((CoreExtension::getAttribute($this->env, $this->source, $context["user"], "creationDate", [], "any", false, false, false, 27)) ? (yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Twig\Extension\CoreExtension']->formatDate(CoreExtension::getAttribute($this->env, $this->source, $context["user"], "creationDate", [], "any", false, false, false, 27), "Y-m-d"), "html", null, true)) : (yield ""));
            yield "</td>
                <td class=\"text-center\">";
            // line 28
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["user"], "email", [], "any", false, false, false, 28), "html", null, true);
            yield "</td>
                <td class=\"text-center\">";
            // line 29
            yield (((0 === CoreExtension::compare(Twig\Extension\CoreExtension::replace(Twig\Extension\CoreExtension::join(CoreExtension::getAttribute($this->env, $this->source, $context["user"], "roles", [], "any", false, false, false, 29)), ["ROLE_USER" => ""]), "ROLE_ADMIN"))) ? ("Administrateur") : ("Utilisateur"));
            yield "</td>
                <td class=\"btn-row\">
                    ";
            // line 31
            yield Twig\Extension\CoreExtension::include($this->env, $context, "user/_delete_form.html.twig");
            yield "
                    ";
            // line 32
            if ((0 === CoreExtension::compare(CoreExtension::getAttribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 32, $this->source); })()), "user", [], "any", false, false, false, 32), $context["user"]))) {
                // line 33
                yield "                        <a class=\"btn btn-sm btn-primary ml-2 disabled\" href=\"";
                yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("user_index");
                yield "\"
                           title=\"Modifier le rôle de l'utilisateur\">
                            <i class=\"fas fa-pencil-alt\" aria-hidden=\"true\"></i>
                        </a>
                    ";
            } else {
                // line 38
                yield "                        <a class=\"btn btn-sm btn-primary ml-2 ";
                yield (((0 === CoreExtension::compare(CoreExtension::getAttribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 38, $this->source); })()), "user", [], "any", false, false, false, 38), $context["user"]))) ? ("disabled") : (""));
                yield "\"
                           href=\"";
                // line 39
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("user_role", ["id" => CoreExtension::getAttribute($this->env, $this->source, $context["user"], "id", [], "any", false, false, false, 39)]), "html", null, true);
                yield "\"
                           title=\"Modifier le rôle de l'utilisateur\">
                            <i class=\"fas fa-pencil-alt\" aria-hidden=\"true\"></i>
                        </a>
                    ";
            }
            // line 44
            yield "                </td>
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
                <td colspan=\"5\" class=\"text-center\">Pas d'utilisateur enregistré</td>
            </tr>
        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['user'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 51
        yield "        </tbody>
    </table>

    <div class=\"navigation my-5\">
        ";
        // line 55
        yield $this->extensions['Knp\Bundle\PaginatorBundle\Twig\Extension\PaginationExtension']->render($this->env, (isset($context["users"]) || array_key_exists("users", $context) ? $context["users"] : (function () { throw new RuntimeError('Variable "users" does not exist.', 55, $this->source); })()));
        yield "
    </div>
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

        return; yield '';
    }

    // line 59
    public function block_stylesheets($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "stylesheets"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "stylesheets"));

        // line 60
        yield "    ";
        yield $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackLinkTags("app");
        yield "
    ";
        // line 61
        yield $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackLinkTags("user");
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
        return "user/index.html.twig";
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
        return array (  242 => 61,  237 => 60,  227 => 59,  213 => 55,  207 => 51,  198 => 47,  183 => 44,  175 => 39,  170 => 38,  161 => 33,  159 => 32,  155 => 31,  150 => 29,  146 => 28,  142 => 27,  138 => 26,  134 => 25,  131 => 24,  113 => 23,  95 => 8,  91 => 6,  81 => 5,  61 => 3,  38 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}Big Bill | Utilisateur{% endblock %}

{% block body %}
    <h1>Liste des utilisateurs</h1>
    <div class=\"text-right\">
        <a class=\" btn btn-primary mb-3\" href=\"{{ path('user_new') }}\"><i class=\"fas fa-plus-circle mr-1\"></i>Ajouter un
            utilisateur</a>
    </div>
    <table class=\"table table-hover\">
        <thead>
        <tr>
            <th class=\"text-center\">Nom</th>
            <th class=\"text-center\">Prénom</th>
            <th class=\"text-center\">Date d'entrée</th>
            <th class=\"text-center\">Email</th>
            <th class=\"text-center\">Rôle</th>
            <th class=\"text-center\">Actions</th>
        </tr>
        </thead>
        <tbody>
        {% for user in users %}
            <tr>
                <td class=\"text-center\">{{ user.lastname }}</td>
                <th class=\"text-center\">{{ user.firstname }}</th>
                <td class=\"text-center\">{{ user.creationDate ? user.creationDate|date('Y-m-d') : '' }}</td>
                <td class=\"text-center\">{{ user.email }}</td>
                <td class=\"text-center\">{{ user.roles|join|replace({'ROLE_USER': ''}) == 'ROLE_ADMIN' ? 'Administrateur' : 'Utilisateur' }}</td>
                <td class=\"btn-row\">
                    {{ include('user/_delete_form.html.twig') }}
                    {% if app.user == user %}
                        <a class=\"btn btn-sm btn-primary ml-2 disabled\" href=\"{{ path('user_index') }}\"
                           title=\"Modifier le rôle de l'utilisateur\">
                            <i class=\"fas fa-pencil-alt\" aria-hidden=\"true\"></i>
                        </a>
                    {% else %}
                        <a class=\"btn btn-sm btn-primary ml-2 {{ app.user == user ? 'disabled' }}\"
                           href=\"{{ path('user_role', {'id': user.id}) }}\"
                           title=\"Modifier le rôle de l'utilisateur\">
                            <i class=\"fas fa-pencil-alt\" aria-hidden=\"true\"></i>
                        </a>
                    {% endif %}
                </td>
            </tr>
        {% else %}
            <tr>
                <td colspan=\"5\" class=\"text-center\">Pas d'utilisateur enregistré</td>
            </tr>
        {% endfor %}
        </tbody>
    </table>

    <div class=\"navigation my-5\">
        {{ knp_pagination_render(users) }}
    </div>
{% endblock %}

{% block stylesheets %}
    {{ encore_entry_link_tags('app') }}
    {{ encore_entry_link_tags('user') }}
{% endblock %}
", "user/index.html.twig", "/home/bonoit/Projets Web/site-encryption/templates/user/index.html.twig");
    }
}
