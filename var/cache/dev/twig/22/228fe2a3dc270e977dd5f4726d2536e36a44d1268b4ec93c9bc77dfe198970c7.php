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

/* user/notification/notification.html.twig */
class __TwigTemplate_727e89ee5e2cebf41e33c0ebb0c5220022028d990e1c21dd28869fa7044f458f extends Template
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
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "user/notification/notification.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "user/notification/notification.html.twig"));

        // line 1
        yield "<!doctype html>
<html xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:v=\"urn:schemas-microsoft-com:vml\" xmlns:o=\"urn:schemas-microsoft-com:office:office\">

<head>
  <title>
  </title>
  <!--[if !mso]><!-- -->
  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">
  <!--<![endif]-->
  <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">
  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">
  <style type=\"text/css\">
    #outlook a {
      padding: 0;
    }

    body {
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }

    table,
    td {
      border-collapse: collapse;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }

    img {
      border: 0;
      height: auto;
      line-height: 100%;
      outline: none;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
    }

    p {
      display: block;
      margin: 13px 0;
    }
  </style>
  <!--[if mso]>
        <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
  <!--[if lte mso 11]>
        <style type=\"text/css\">
          .mj-outlook-group-fix { width:100% !important; }
        </style>
        <![endif]-->
  <!--[if !mso]><!-->
  <link href=\"https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700\" rel=\"stylesheet\" type=\"text/css\">
  <style type=\"text/css\">
    @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);
  </style>
  <!--<![endif]-->
  <style type=\"text/css\">
    @media only screen and (min-width:480px) {
      .mj-column-per-100 {
        width: 100% !important;
        max-width: 100%;
      }
    }
  </style>
  <style type=\"text/css\">
  </style>
</head>

<body style=\"background-color:#F0EFEA;\">
  <div style=\"background-color:#F0EFEA;\">
    <!--[if mso | IE]>
      <table
         align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"\" style=\"width:600px;\" width=\"600\"
      >
        <tr>
          <td style=\"line-height:0px;font-size:0px;mso-line-height-rule:exactly;\">
      <![endif]-->
    <div style=\"background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;\">
      <table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"background:#ffffff;background-color:#ffffff;width:100%;\">
        <tbody>
          <tr>
            <td style=\"direction:ltr;font-size:0px;padding:0px;text-align:center;\">
              <!--[if mso | IE]>
                  <table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">
                
        <tr>
      
            <td
               class=\"\" style=\"vertical-align:top;width:600px;\"
            >
          <![endif]-->
              <div class=\"mj-column-per-100 mj-outlook-group-fix\" style=\"font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;\">
                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" width=\"100%\">
                  <tbody>
                    <tr>
                      <td style=\"background-color:#F0EFEA;vertical-align:top;padding:0px;\">
                        <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style width=\"100%\">
                          <tr>
                            <td style=\"font-size:0px;padding:0px;word-break:break-word;\">
                              <!--[if mso | IE]>
    
        <table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tr><td height=\"50\" style=\"vertical-align:top;height:50px;\">
      
    <![endif]-->
                              <div style=\"height:50px;\"> &nbsp; </div>
                              <!--[if mso | IE]>
    
        </td></tr></table>
      
    <![endif]-->
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      
      <table
         align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"\" style=\"width:600px;\" width=\"600\"
      >
        <tr>
          <td style=\"line-height:0px;font-size:0px;mso-line-height-rule:exactly;\">
      <![endif]-->
    <div style=\"background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;\">
      <table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"background:#ffffff;background-color:#ffffff;width:100%;\">
        <tbody>
          <tr>
            <td style=\"direction:ltr;font-size:0px;padding:0px;text-align:center;\">
              <!--[if mso | IE]>
                  <table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">
                
        <tr>
      
            <td
               class=\"\" style=\"vertical-align:middle;width:600px;\"
            >
          <![endif]-->
              <div class=\"mj-column-per-100 mj-outlook-group-fix\" style=\"font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;\">
                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" width=\"100%\">
                  <tbody>
                    <tr>
                      <td style=\"background-color:#046077;vertical-align:middle;padding:0px;\">
                        <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style width=\"100%\">
                          <tr>
                            <td align=\"center\" style=\"font-size:0px;padding:0 25px;padding-top:30px;padding-bottom:30px;word-break:break-word;\">
                              <div style=\"font-family:Ubuntu, Helvetica Helvetica Neue, Arial, sans-serif;font-size:28px;line-height:1;text-align:center;color:#FFFFFF;\"><strong style=\"text-transform: uppercase;\">Big Bill</strong></div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      
      <table
         align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"\" style=\"width:600px;\" width=\"600\"
      >
        <tr>
          <td style=\"line-height:0px;font-size:0px;mso-line-height-rule:exactly;\">
      <![endif]-->
    <div style=\"background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;\">
      <table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"background:#ffffff;background-color:#ffffff;width:100%;\">
        <tbody>
          <tr>
            <td style=\"direction:ltr;font-size:0px;padding:0px;padding-bottom:20px;padding-top:10px;text-align:center;\">
              <!--[if mso | IE]>
                  <table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">
                
        <tr>
      
            <td
               class=\"\" style=\"vertical-align:top;width:600px;\"
            >
          <![endif]-->
              <div class=\"mj-column-per-100 mj-outlook-group-fix\" style=\"font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;\">
                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" width=\"100%\">
                  <tbody>
                    <tr>
                      <td style=\"vertical-align:top;padding:0px;\">
                        <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style width=\"100%\">
                          <tr>
                            <td align=\"center\" style=\"font-size:0px;padding:10px 25px;word-break:break-word;\">
                              <div style=\"font-family:Ubuntu, Helvetica Helvetica Neue, Arial, sans-serif;font-size:20px;line-height:1;text-align:center;color:#222222;\">
                                <h2>";
        // line 226
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((isset($context["title"]) || array_key_exists("title", $context) ? $context["title"] : (function () { throw new RuntimeError('Variable "title" does not exist.', 226, $this->source); })()), "html", null, true);
        yield "</h2>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td align=\"left\" style=\"font-size:0px;padding:0 25px;word-break:break-word;\">
                              <div style=\"font-family:Ubuntu, Helvetica Helvetica Neue, Arial, sans-serif;font-size:18px;line-height:1;text-align:left;color:#000000;\">
                                <p>";
        // line 233
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((isset($context["bodyText"]) || array_key_exists("bodyText", $context) ? $context["bodyText"] : (function () { throw new RuntimeError('Variable "bodyText" does not exist.', 233, $this->source); })()), "html", null, true);
        yield "</p>
                              </div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      
      <table
         align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"\" style=\"width:600px;\" width=\"600\"
      >
        <tr>
          <td style=\"line-height:0px;font-size:0px;mso-line-height-rule:exactly;\">
      <![endif]-->
    <div style=\"background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;\">
      <table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"background:#ffffff;background-color:#ffffff;width:100%;\">
        <tbody>
          <tr>
            <td style=\"direction:ltr;font-size:0px;padding:20px 0;padding-top:0px;text-align:center;\">
              <!--[if mso | IE]>
                  <table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">
                
        <tr>
      
            <td
               class=\"\" style=\"vertical-align:top;width:600px;\"
            >
          <![endif]-->
              <div class=\"mj-column-per-100 mj-outlook-group-fix\" style=\"font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;\">
                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" width=\"100%\">
                  <tbody>
                    <tr>
                      <td style=\"vertical-align:top;padding:0px;\">
                        <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style width=\"100%\">
                          <tr>
                            <td align=\"center\" vertical-align=\"middle\" style=\"font-size:0px;padding:0px;padding-top:20px;padding-bottom:100px;word-break:break-word;\">
                              <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"border-collapse:separate;line-height:100%;\">
                                <tr>
                                  <td align=\"center\" bgcolor=\"#046077\" role=\"presentation\" style=\"border:none;border-radius:2px;cursor:auto;mso-padding-alt:15px 30px;background:#046077;\" valign=\"middle\">
                                    <a href=\"";
        // line 291
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Symfony\Bridge\Twig\Extension\HttpFoundationExtension']->generateAbsoluteUrl($this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath((isset($context["pageLink"]) || array_key_exists("pageLink", $context) ? $context["pageLink"] : (function () { throw new RuntimeError('Variable "pageLink" does not exist.', 291, $this->source); })()), ["id" => (isset($context["userId"]) || array_key_exists("userId", $context) ? $context["userId"] : (function () { throw new RuntimeError('Variable "userId" does not exist.', 291, $this->source); })()), "token" => (isset($context["userToken"]) || array_key_exists("userToken", $context) ? $context["userToken"] : (function () { throw new RuntimeError('Variable "userToken" does not exist.', 291, $this->source); })())])), "html", null, true);
        yield "\" style=\"display: inline-block; background: #046077; font-family: Ubuntu, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 120%; margin: 0; text-transform: none; padding: 15px 30px; mso-padding-alt: 0px; border-radius: 2px; text-decoration: none; color: inherit;\" target=\"_blank\">
                                      <span style=\"color: #ffffff;\">";
        // line 292
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((isset($context["buttonName"]) || array_key_exists("buttonName", $context) ? $context["buttonName"] : (function () { throw new RuntimeError('Variable "buttonName" does not exist.', 292, $this->source); })()), "html", null, true);
        yield "</span>
                                    </a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      <![endif]-->
  </div>
</body>

</html>";
        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        return; yield '';
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName()
    {
        return "user/notification/notification.html.twig";
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
        return array (  346 => 292,  342 => 291,  281 => 233,  271 => 226,  44 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<!doctype html>
<html xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:v=\"urn:schemas-microsoft-com:vml\" xmlns:o=\"urn:schemas-microsoft-com:office:office\">

<head>
  <title>
  </title>
  <!--[if !mso]><!-- -->
  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">
  <!--<![endif]-->
  <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">
  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">
  <style type=\"text/css\">
    #outlook a {
      padding: 0;
    }

    body {
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }

    table,
    td {
      border-collapse: collapse;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }

    img {
      border: 0;
      height: auto;
      line-height: 100%;
      outline: none;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
    }

    p {
      display: block;
      margin: 13px 0;
    }
  </style>
  <!--[if mso]>
        <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
  <!--[if lte mso 11]>
        <style type=\"text/css\">
          .mj-outlook-group-fix { width:100% !important; }
        </style>
        <![endif]-->
  <!--[if !mso]><!-->
  <link href=\"https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700\" rel=\"stylesheet\" type=\"text/css\">
  <style type=\"text/css\">
    @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);
  </style>
  <!--<![endif]-->
  <style type=\"text/css\">
    @media only screen and (min-width:480px) {
      .mj-column-per-100 {
        width: 100% !important;
        max-width: 100%;
      }
    }
  </style>
  <style type=\"text/css\">
  </style>
</head>

<body style=\"background-color:#F0EFEA;\">
  <div style=\"background-color:#F0EFEA;\">
    <!--[if mso | IE]>
      <table
         align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"\" style=\"width:600px;\" width=\"600\"
      >
        <tr>
          <td style=\"line-height:0px;font-size:0px;mso-line-height-rule:exactly;\">
      <![endif]-->
    <div style=\"background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;\">
      <table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"background:#ffffff;background-color:#ffffff;width:100%;\">
        <tbody>
          <tr>
            <td style=\"direction:ltr;font-size:0px;padding:0px;text-align:center;\">
              <!--[if mso | IE]>
                  <table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">
                
        <tr>
      
            <td
               class=\"\" style=\"vertical-align:top;width:600px;\"
            >
          <![endif]-->
              <div class=\"mj-column-per-100 mj-outlook-group-fix\" style=\"font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;\">
                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" width=\"100%\">
                  <tbody>
                    <tr>
                      <td style=\"background-color:#F0EFEA;vertical-align:top;padding:0px;\">
                        <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style width=\"100%\">
                          <tr>
                            <td style=\"font-size:0px;padding:0px;word-break:break-word;\">
                              <!--[if mso | IE]>
    
        <table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tr><td height=\"50\" style=\"vertical-align:top;height:50px;\">
      
    <![endif]-->
                              <div style=\"height:50px;\"> &nbsp; </div>
                              <!--[if mso | IE]>
    
        </td></tr></table>
      
    <![endif]-->
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      
      <table
         align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"\" style=\"width:600px;\" width=\"600\"
      >
        <tr>
          <td style=\"line-height:0px;font-size:0px;mso-line-height-rule:exactly;\">
      <![endif]-->
    <div style=\"background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;\">
      <table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"background:#ffffff;background-color:#ffffff;width:100%;\">
        <tbody>
          <tr>
            <td style=\"direction:ltr;font-size:0px;padding:0px;text-align:center;\">
              <!--[if mso | IE]>
                  <table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">
                
        <tr>
      
            <td
               class=\"\" style=\"vertical-align:middle;width:600px;\"
            >
          <![endif]-->
              <div class=\"mj-column-per-100 mj-outlook-group-fix\" style=\"font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;\">
                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" width=\"100%\">
                  <tbody>
                    <tr>
                      <td style=\"background-color:#046077;vertical-align:middle;padding:0px;\">
                        <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style width=\"100%\">
                          <tr>
                            <td align=\"center\" style=\"font-size:0px;padding:0 25px;padding-top:30px;padding-bottom:30px;word-break:break-word;\">
                              <div style=\"font-family:Ubuntu, Helvetica Helvetica Neue, Arial, sans-serif;font-size:28px;line-height:1;text-align:center;color:#FFFFFF;\"><strong style=\"text-transform: uppercase;\">Big Bill</strong></div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      
      <table
         align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"\" style=\"width:600px;\" width=\"600\"
      >
        <tr>
          <td style=\"line-height:0px;font-size:0px;mso-line-height-rule:exactly;\">
      <![endif]-->
    <div style=\"background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;\">
      <table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"background:#ffffff;background-color:#ffffff;width:100%;\">
        <tbody>
          <tr>
            <td style=\"direction:ltr;font-size:0px;padding:0px;padding-bottom:20px;padding-top:10px;text-align:center;\">
              <!--[if mso | IE]>
                  <table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">
                
        <tr>
      
            <td
               class=\"\" style=\"vertical-align:top;width:600px;\"
            >
          <![endif]-->
              <div class=\"mj-column-per-100 mj-outlook-group-fix\" style=\"font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;\">
                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" width=\"100%\">
                  <tbody>
                    <tr>
                      <td style=\"vertical-align:top;padding:0px;\">
                        <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style width=\"100%\">
                          <tr>
                            <td align=\"center\" style=\"font-size:0px;padding:10px 25px;word-break:break-word;\">
                              <div style=\"font-family:Ubuntu, Helvetica Helvetica Neue, Arial, sans-serif;font-size:20px;line-height:1;text-align:center;color:#222222;\">
                                <h2>{{ title }}</h2>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td align=\"left\" style=\"font-size:0px;padding:0 25px;word-break:break-word;\">
                              <div style=\"font-family:Ubuntu, Helvetica Helvetica Neue, Arial, sans-serif;font-size:18px;line-height:1;text-align:left;color:#000000;\">
                                <p>{{ bodyText }}</p>
                              </div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      
      <table
         align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"\" style=\"width:600px;\" width=\"600\"
      >
        <tr>
          <td style=\"line-height:0px;font-size:0px;mso-line-height-rule:exactly;\">
      <![endif]-->
    <div style=\"background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;\">
      <table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"background:#ffffff;background-color:#ffffff;width:100%;\">
        <tbody>
          <tr>
            <td style=\"direction:ltr;font-size:0px;padding:20px 0;padding-top:0px;text-align:center;\">
              <!--[if mso | IE]>
                  <table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">
                
        <tr>
      
            <td
               class=\"\" style=\"vertical-align:top;width:600px;\"
            >
          <![endif]-->
              <div class=\"mj-column-per-100 mj-outlook-group-fix\" style=\"font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;\">
                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" width=\"100%\">
                  <tbody>
                    <tr>
                      <td style=\"vertical-align:top;padding:0px;\">
                        <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style width=\"100%\">
                          <tr>
                            <td align=\"center\" vertical-align=\"middle\" style=\"font-size:0px;padding:0px;padding-top:20px;padding-bottom:100px;word-break:break-word;\">
                              <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"border-collapse:separate;line-height:100%;\">
                                <tr>
                                  <td align=\"center\" bgcolor=\"#046077\" role=\"presentation\" style=\"border:none;border-radius:2px;cursor:auto;mso-padding-alt:15px 30px;background:#046077;\" valign=\"middle\">
                                    <a href=\"{{ absolute_url(path(pageLink, {'id': userId, 'token': userToken})) }}\" style=\"display: inline-block; background: #046077; font-family: Ubuntu, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 120%; margin: 0; text-transform: none; padding: 15px 30px; mso-padding-alt: 0px; border-radius: 2px; text-decoration: none; color: inherit;\" target=\"_blank\">
                                      <span style=\"color: #ffffff;\">{{ buttonName }}</span>
                                    </a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      <![endif]-->
  </div>
</body>

</html>", "user/notification/notification.html.twig", "/var/www/html/templates/user/notification/notification.html.twig");
    }
}
