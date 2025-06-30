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

/* parts/_navbar.html.twig */
class __TwigTemplate_b23a16b940a6639dbdfce4b19e4e7bc4d03a0ec186284d499abeb6bae9b41f17 extends Template
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
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "parts/_navbar.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "parts/_navbar.html.twig"));

        // line 1
        yield "<nav class=\"menu\">
    <div class=\"menu-wrapper\">
        <div class=\"logo\">
            <a href=\"";
        // line 4
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("project_index");
        yield "\" title=\"Big Bill\">B</a>
        </div>
        <ul>
            <li>
                <a href=\"";
        // line 8
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("project_index");
        yield "\" title=\"Projets\">
                    <i class=\"fas fa-project-diagram\"></i>
                </a>
                <a href=\"";
        // line 11
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("project_index");
        yield "\" class=\"link-hover\">Projets</a>
            </li>
            <li>
                <a href=\"";
        // line 14
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("feature_index");
        yield "\" title=\"Fonctionnalités\">
                    <i class=\"fas fa-cog\"></i>
                </a>
                <a href=\"";
        // line 17
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("feature_index");
        yield "\" class=\"link-hover\">Fonctionnalités</a>
            </li>
            <li>
                <a href=\"";
        // line 20
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("category_index");
        yield "\" title=\"Catégories\">
                    <i class=\"fas fa-tags\"></i>
                </a>
                <a href=\"";
        // line 23
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("category_index");
        yield "\" class=\"link-hover\">Catégories</a>
            </li>
            <li>
                <a href=\"";
        // line 26
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("profile_index");
        yield "\" title=\"Mon profil\">
                    <i class=\"fas fa-address-card\"></i>
                </a>
                <a href=\"";
        // line 29
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("profile_index");
        yield "\" class=\"link-hover\">Mon profil</a>
            </li>
            ";
        // line 31
        if ($this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("ROLE_ADMIN")) {
            // line 32
            yield "            <li>
                <a href=\"";
            // line 33
            yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("user_index");
            yield "\" title=\"Gestion des utilisateurs\">
                    <i class=\"fas fa-user-friends\"></i>
                </a>
                <a href=\"";
            // line 36
            yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("user_index");
            yield "\" class=\"link-hover\">Gestion des utilisateurs</a>
            </li>
            ";
        }
        // line 39
        yield "        </ul>
        <div class=\"exit\">
            <a href=\"";
        // line 41
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_logout");
        yield "\" title=\"Se déconnecter\"><i class=\"fas fa-sign-out-alt\"></i></a>
        </div>
    </div>
</nav>
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
        return "parts/_navbar.html.twig";
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
        return array (  124 => 41,  120 => 39,  114 => 36,  108 => 33,  105 => 32,  103 => 31,  98 => 29,  92 => 26,  86 => 23,  80 => 20,  74 => 17,  68 => 14,  62 => 11,  56 => 8,  49 => 4,  44 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<nav class=\"menu\">
    <div class=\"menu-wrapper\">
        <div class=\"logo\">
            <a href=\"{{ path('project_index') }}\" title=\"Big Bill\">B</a>
        </div>
        <ul>
            <li>
                <a href=\"{{ path('project_index') }}\" title=\"Projets\">
                    <i class=\"fas fa-project-diagram\"></i>
                </a>
                <a href=\"{{ path('project_index') }}\" class=\"link-hover\">Projets</a>
            </li>
            <li>
                <a href=\"{{ path('feature_index') }}\" title=\"Fonctionnalités\">
                    <i class=\"fas fa-cog\"></i>
                </a>
                <a href=\"{{ path('feature_index') }}\" class=\"link-hover\">Fonctionnalités</a>
            </li>
            <li>
                <a href=\"{{ path('category_index') }}\" title=\"Catégories\">
                    <i class=\"fas fa-tags\"></i>
                </a>
                <a href=\"{{ path('category_index') }}\" class=\"link-hover\">Catégories</a>
            </li>
            <li>
                <a href=\"{{ path('profile_index') }}\" title=\"Mon profil\">
                    <i class=\"fas fa-address-card\"></i>
                </a>
                <a href=\"{{ path('profile_index') }}\" class=\"link-hover\">Mon profil</a>
            </li>
            {% if is_granted('ROLE_ADMIN') %}
            <li>
                <a href=\"{{ path('user_index') }}\" title=\"Gestion des utilisateurs\">
                    <i class=\"fas fa-user-friends\"></i>
                </a>
                <a href=\"{{ path('user_index') }}\" class=\"link-hover\">Gestion des utilisateurs</a>
            </li>
            {% endif %}
        </ul>
        <div class=\"exit\">
            <a href=\"{{ path('app_logout') }}\" title=\"Se déconnecter\"><i class=\"fas fa-sign-out-alt\"></i></a>
        </div>
    </div>
</nav>
", "parts/_navbar.html.twig", "/home/bonoit/Projets Web/site-encryption/templates/parts/_navbar.html.twig");
    }
}
