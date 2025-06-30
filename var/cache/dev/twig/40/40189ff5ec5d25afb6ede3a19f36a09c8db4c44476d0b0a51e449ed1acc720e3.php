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

/* security/profile.html.twig */
class __TwigTemplate_674b06908656c869a5623c956bf873f793984c2cfb564f3aa78bcfa2970dea0d extends Template
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
            'javascripts' => [$this, 'block_javascripts'],
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
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "security/profile.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "security/profile.html.twig"));

        // line 2
        $this->env->getRuntime("Symfony\\Component\\Form\\FormRenderer")->setTheme((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 2, $this->source); })()), ["bootstrap_4_layout.html.twig"], true);
        // line 3
        $this->env->getRuntime("Symfony\\Component\\Form\\FormRenderer")->setTheme((isset($context["formUpdateAvatar"]) || array_key_exists("formUpdateAvatar", $context) ? $context["formUpdateAvatar"] : (function () { throw new RuntimeError('Variable "formUpdateAvatar" does not exist.', 3, $this->source); })()), ["bootstrap_4_layout.html.twig"], true);
        // line 1
        $this->parent = $this->loadTemplate("base.html.twig", "security/profile.html.twig", 1);
        yield from $this->parent->unwrap()->yield($context, array_merge($this->blocks, $blocks));
        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    // line 5
    public function block_title($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        yield "Big Bill | Profil";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

        return; yield '';
    }

    // line 7
    public function block_body($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        // line 8
        yield "    <h1>Mon profil</h1>
    <div class=\"row mt-2 mb-2\">
        <div class=\"col-5\">
            ";
        // line 11
        yield         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["formUpdateAvatar"]) || array_key_exists("formUpdateAvatar", $context) ? $context["formUpdateAvatar"] : (function () { throw new RuntimeError('Variable "formUpdateAvatar" does not exist.', 11, $this->source); })()), 'form_start');
        yield "
            <div class=\"card\">
                <img src=\"";
        // line 13
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((( !Twig\Extension\CoreExtension::testEmpty(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 13, $this->source); })()), "user", [], "any", false, false, false, 13), "profilePicture", [], "any", false, false, false, 13))) ? ($this->extensions['Vich\UploaderBundle\Twig\Extension\UploaderExtension']->asset((isset($context["user"]) || array_key_exists("user", $context) ? $context["user"] : (function () { throw new RuntimeError('Variable "user" does not exist.', 13, $this->source); })()), "profilePictureFile", "App\\Entity\\User")) : ($this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("build/img/default_profile_picture.png"))), "html", null, true);
        yield "\" class=\"card-img-top img-fluid\" alt=\"Photo de l'utilisateur\">
                <div class=\"card-body\">
                    <div class=\"row form-group\">
                        <div class=\"row form-group mt-2\">
                            <div class=\"col-sm-12 col-md-12\">
                                ";
        // line 18
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["formUpdateAvatar"]) || array_key_exists("formUpdateAvatar", $context) ? $context["formUpdateAvatar"] : (function () { throw new RuntimeError('Variable "formUpdateAvatar" does not exist.', 18, $this->source); })()), "profilePictureFile", [], "any", false, false, false, 18), 'row');
        yield "
                            </div>
                        </div>
                    </div>
                </div>
                <div class=\"card-footer\">
                    <button class=\"btn btn-primary float-right\"><i class=\"fas fa-check m-1\"></i>Enregistrer</button>
                </div>
            </div>
            ";
        // line 27
        yield         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["formUpdateAvatar"]) || array_key_exists("formUpdateAvatar", $context) ? $context["formUpdateAvatar"] : (function () { throw new RuntimeError('Variable "formUpdateAvatar" does not exist.', 27, $this->source); })()), 'form_end');
        yield "
        </div>
        <div class=\"col-7\">
            <div class=\"row\">
                <div class=\"col-12\">
                    ";
        // line 32
        yield         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 32, $this->source); })()), 'form_start');
        yield "
                    <div class=\"card\">
                        <div class=\"card-header bg-primary\">
                            <h2 class=\"text-white\">Informations personnelles</h2>
                        </div>
                        <div class=\"card-body\">
                            <div class=\"row form-group\">
                                <div class=\"col-sm-12 col-md-4 d-flex align-items-center\">
                                    ";
        // line 40
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 40, $this->source); })()), "lastname", [], "any", false, false, false, 40), 'label', ["label" => "Nom"]);
        yield "
                                </div>
                                <div class=\"col-sm-12 col-md-8\">
                                    ";
        // line 43
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 43, $this->source); })()), "lastname", [], "any", false, false, false, 43), 'widget');
        yield "
                                </div>
                            </div>
                            <div class=\"row form-group\">
                                <div class=\"col-sm-12 col-md-4 d-flex align-items-center\">
                                    ";
        // line 48
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 48, $this->source); })()), "firstname", [], "any", false, false, false, 48), 'label', ["label" => "Prénom"]);
        yield "
                                </div>
                                <div class=\"col-sm-12 col-md-8\">
                                    ";
        // line 51
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 51, $this->source); })()), "firstname", [], "any", false, false, false, 51), 'widget');
        yield "
                                </div>
                            </div>
                            <div class=\"row form-group\">
                                <div class=\"col-sm-12 col-md-4 d-flex align-items-center\">
                                    ";
        // line 56
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 56, $this->source); })()), "email", [], "any", false, false, false, 56), 'label', ["label" => "Email"]);
        yield "
                                </div>
                                <div class=\"col-sm-12 col-md-8\">
                                    ";
        // line 59
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 59, $this->source); })()), "email", [], "any", false, false, false, 59), 'widget');
        yield "
                                </div>
                            </div>
                        </div>
                        <div class=\"card-footer\">
                            <button class=\"btn btn-primary float-right\"><i class=\"fas fa-check m-1\"></i>Enregistrer</button>
                        </div>
                    </div>
                    ";
        // line 67
        yield         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 67, $this->source); })()), 'form_end');
        yield "
                </div>
            </div>
            <div class=\"row mt-3\">
                <div class=\"col-12\">
                    <div class=\"card\">
                        <div class=\"card-header bg-primary\">
                            <h2 class=\"text-white\">Mot de passe</h2>
                        </div>
                        <div class=\"card-body\">
                            <div class=\"row d-flex align-items-center justify-content-center\">
                                <div class=\"col-4\">
                                    <p>Mot de passe : </p>
                                </div>
                                <div class=\"col-8\">
                                    <p class=\"pt-2\">********</p>
                                </div>
                            </div>
                        </div>
                        <div class=\"card-footer\">
                            <a href=\"";
        // line 87
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("profile_password");
        yield "\" class=\"btn btn-primary float-right\">
                                <i class=\"fas fa-pencil-alt mr-1\" aria-hidden=\"true\"></i>Modifier le mot de passe</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

        return; yield '';
    }

    // line 97
    public function block_stylesheets($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "stylesheets"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "stylesheets"));

        // line 98
        yield "    ";
        yield $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackLinkTags("app");
        yield "
    ";
        // line 99
        yield $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackLinkTags("profile");
        yield "
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

        return; yield '';
    }

    // line 102
    public function block_javascripts($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        // line 103
        yield "    ";
        yield from $this->yieldParentBlock("javascripts", $context, $blocks);
        yield "
    ";
        // line 104
        yield $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackScriptTags("uploadform");
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
        return "security/profile.html.twig";
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
        return array (  277 => 104,  272 => 103,  262 => 102,  249 => 99,  244 => 98,  234 => 97,  214 => 87,  191 => 67,  180 => 59,  174 => 56,  166 => 51,  160 => 48,  152 => 43,  146 => 40,  135 => 32,  127 => 27,  115 => 18,  107 => 13,  102 => 11,  97 => 8,  87 => 7,  67 => 5,  56 => 1,  54 => 3,  52 => 2,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}
{% form_theme form 'bootstrap_4_layout.html.twig' %}
{% form_theme formUpdateAvatar 'bootstrap_4_layout.html.twig' %}

{% block title %}Big Bill | Profil{% endblock %}

{% block body %}
    <h1>Mon profil</h1>
    <div class=\"row mt-2 mb-2\">
        <div class=\"col-5\">
            {{ form_start(formUpdateAvatar) }}
            <div class=\"card\">
                <img src=\"{{ app.user.profilePicture is not empty ? vich_uploader_asset (user, 'profilePictureFile', 'App\\\\Entity\\\\User') : asset('build/img/default_profile_picture.png')}}\" class=\"card-img-top img-fluid\" alt=\"Photo de l'utilisateur\">
                <div class=\"card-body\">
                    <div class=\"row form-group\">
                        <div class=\"row form-group mt-2\">
                            <div class=\"col-sm-12 col-md-12\">
                                {{ form_row(formUpdateAvatar.profilePictureFile) }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class=\"card-footer\">
                    <button class=\"btn btn-primary float-right\"><i class=\"fas fa-check m-1\"></i>Enregistrer</button>
                </div>
            </div>
            {{ form_end(formUpdateAvatar) }}
        </div>
        <div class=\"col-7\">
            <div class=\"row\">
                <div class=\"col-12\">
                    {{ form_start(form) }}
                    <div class=\"card\">
                        <div class=\"card-header bg-primary\">
                            <h2 class=\"text-white\">Informations personnelles</h2>
                        </div>
                        <div class=\"card-body\">
                            <div class=\"row form-group\">
                                <div class=\"col-sm-12 col-md-4 d-flex align-items-center\">
                                    {{ form_label(form.lastname, \"Nom\") }}
                                </div>
                                <div class=\"col-sm-12 col-md-8\">
                                    {{ form_widget(form.lastname) }}
                                </div>
                            </div>
                            <div class=\"row form-group\">
                                <div class=\"col-sm-12 col-md-4 d-flex align-items-center\">
                                    {{ form_label(form.firstname, \"Prénom\") }}
                                </div>
                                <div class=\"col-sm-12 col-md-8\">
                                    {{ form_widget(form.firstname) }}
                                </div>
                            </div>
                            <div class=\"row form-group\">
                                <div class=\"col-sm-12 col-md-4 d-flex align-items-center\">
                                    {{ form_label(form.email, \"Email\") }}
                                </div>
                                <div class=\"col-sm-12 col-md-8\">
                                    {{ form_widget(form.email) }}
                                </div>
                            </div>
                        </div>
                        <div class=\"card-footer\">
                            <button class=\"btn btn-primary float-right\"><i class=\"fas fa-check m-1\"></i>Enregistrer</button>
                        </div>
                    </div>
                    {{ form_end(form) }}
                </div>
            </div>
            <div class=\"row mt-3\">
                <div class=\"col-12\">
                    <div class=\"card\">
                        <div class=\"card-header bg-primary\">
                            <h2 class=\"text-white\">Mot de passe</h2>
                        </div>
                        <div class=\"card-body\">
                            <div class=\"row d-flex align-items-center justify-content-center\">
                                <div class=\"col-4\">
                                    <p>Mot de passe : </p>
                                </div>
                                <div class=\"col-8\">
                                    <p class=\"pt-2\">********</p>
                                </div>
                            </div>
                        </div>
                        <div class=\"card-footer\">
                            <a href=\"{{ path('profile_password') }}\" class=\"btn btn-primary float-right\">
                                <i class=\"fas fa-pencil-alt mr-1\" aria-hidden=\"true\"></i>Modifier le mot de passe</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
{% endblock %}

{% block stylesheets %}
    {{ encore_entry_link_tags('app') }}
    {{ encore_entry_link_tags('profile') }}
{% endblock %}

{% block javascripts %}
    {{ parent() }}
    {{ encore_entry_script_tags('uploadform') }}
{% endblock %}
", "security/profile.html.twig", "/var/www/html/templates/security/profile.html.twig");
    }
}
