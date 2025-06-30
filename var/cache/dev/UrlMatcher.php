<?php

/**
 * This file has been auto-generated
 * by the Symfony Routing Component.
 */

return [
    false, // $matchHost
    [ // $staticRoutes
        '/_profiler' => [[['_route' => '_profiler_home', '_controller' => 'web_profiler.controller.profiler::homeAction'], null, null, null, true, false, null]],
        '/_profiler/search' => [[['_route' => '_profiler_search', '_controller' => 'web_profiler.controller.profiler::searchAction'], null, null, null, false, false, null]],
        '/_profiler/search_bar' => [[['_route' => '_profiler_search_bar', '_controller' => 'web_profiler.controller.profiler::searchBarAction'], null, null, null, false, false, null]],
        '/_profiler/phpinfo' => [[['_route' => '_profiler_phpinfo', '_controller' => 'web_profiler.controller.profiler::phpinfoAction'], null, null, null, false, false, null]],
        '/_profiler/open' => [[['_route' => '_profiler_open_file', '_controller' => 'web_profiler.controller.profiler::openAction'], null, null, null, false, false, null]],
        '/categorie' => [[['_route' => 'category_index', '_controller' => 'App\\Controller\\CategoryController::index'], null, ['GET' => 0], null, true, false, null]],
        '/categorie/ajouter' => [[['_route' => 'category_new', '_controller' => 'App\\Controller\\CategoryController::new'], null, ['GET' => 0, 'POST' => 1], null, false, false, null]],
        '/fonctionnalite' => [[['_route' => 'feature_index', '_controller' => 'App\\Controller\\FeatureController::index'], null, ['GET' => 0], null, true, false, null]],
        '/fonctionnalite/ajouter' => [[['_route' => 'feature_new', '_controller' => 'App\\Controller\\FeatureController::new'], null, ['GET' => 0, 'POST' => 1], null, false, false, null]],
        '/mot-de-passe/oublier' => [[['_route' => 'password_forgot_request', '_controller' => 'App\\Controller\\PasswordController::forgotPasswordRequest'], null, null, null, false, false, null]],
        '/profil' => [[['_route' => 'profile_index', '_controller' => 'App\\Controller\\ProfileController::index'], null, null, null, true, false, null]],
        '/profil/mot-de-passe' => [[['_route' => 'profile_password', '_controller' => 'App\\Controller\\ProfileController::changePassword'], null, null, null, false, false, null]],
        '/' => [[['_route' => 'project_index', '_controller' => 'App\\Controller\\ProjectController::index'], null, ['GET' => 0], null, false, false, null]],
        '/ajouter' => [[['_route' => 'project_new', '_controller' => 'App\\Controller\\ProjectController::new'], null, ['GET' => 0, 'POST' => 1], null, false, false, null]],
        '/utilisateur/ajouter' => [[['_route' => 'user_new', '_controller' => 'App\\Controller\\UserController::new'], null, ['GET' => 0, 'POST' => 1], null, false, false, null]],
    ],
    [ // $regexpList
        0 => '{^(?'
                .'|/_(?'
                    .'|error/(\\d+)(?:\\.([^/]++))?(*:38)'
                    .'|wdt/([^/]++)(*:57)'
                    .'|profiler/([^/]++)(?'
                        .'|/(?'
                            .'|search/results(*:102)'
                            .'|router(*:116)'
                            .'|exception(?'
                                .'|(*:136)'
                                .'|\\.css(*:149)'
                            .')'
                        .')'
                        .'|(*:159)'
                    .')'
                .')'
                .'|/categorie/([^/]++)(?'
                    .'|/editer(*:198)'
                    .'|(*:206)'
                .')'
                .'|/([^/]++)/export(?:/(high|middle|low))?(*:254)'
                .'|/fonctionnalite/([^/]++)(?'
                    .'|/editer(*:296)'
                    .'|(*:304)'
                .')'
                .'|/mot\\-de\\-passe(?'
                    .'|/([^/]++)/ajouter/([^/]++)(*:357)'
                    .'|\\{/id\\}/reinitialiser/([^/]++)(*:395)'
                .')'
                .'|/([^/]++)(?'
                    .'|/editer(?:/(high|middle|low))?(*:446)'
                    .'|(*:454)'
                .')'
                .'|/fonctionnalite/([^/]++)(?:/(high|middle|low))?(*:510)'
                .'|/([^/]++)/ajouter/fonctionnalite(?:/(high|middle|low))?(*:573)'
                .'|/feature/search/([^/]++)(*:605)'
                .'|/connecter(*:623)'
                .'|/deconnecter(*:643)'
                .'|/utilisateur(?'
                    .'|(*:666)'
                    .'|/([^/]++)(?'
                        .'|/modifier/droits(*:702)'
                        .'|(*:710)'
                    .')'
                .')'
            .')/?$}sD',
    ],
    [ // $dynamicRoutes
        38 => [[['_route' => '_twig_error_test', '_controller' => 'twig.controller.preview_error::previewErrorPageAction', '_format' => 'html'], ['code', '_format'], null, null, false, true, null]],
        57 => [[['_route' => '_wdt', '_controller' => 'web_profiler.controller.profiler::toolbarAction'], ['token'], null, null, false, true, null]],
        102 => [[['_route' => '_profiler_search_results', '_controller' => 'web_profiler.controller.profiler::searchResultsAction'], ['token'], null, null, false, false, null]],
        116 => [[['_route' => '_profiler_router', '_controller' => 'web_profiler.controller.router::panelAction'], ['token'], null, null, false, false, null]],
        136 => [[['_route' => '_profiler_exception', '_controller' => 'web_profiler.controller.exception_panel::body'], ['token'], null, null, false, false, null]],
        149 => [[['_route' => '_profiler_exception_css', '_controller' => 'web_profiler.controller.exception_panel::stylesheet'], ['token'], null, null, false, false, null]],
        159 => [[['_route' => '_profiler', '_controller' => 'web_profiler.controller.profiler::panelAction'], ['token'], null, null, false, true, null]],
        198 => [[['_route' => 'category_edit', '_controller' => 'App\\Controller\\CategoryController::edit'], ['id'], ['GET' => 0, 'POST' => 1], null, false, false, null]],
        206 => [[['_route' => 'category_delete', '_controller' => 'App\\Controller\\CategoryController::delete'], ['id'], ['DELETE' => 0], null, false, true, null]],
        254 => [[['_route' => 'export', 'variant' => 'high', '_controller' => 'App\\Controller\\ExportController::index'], ['id', 'variant'], null, null, false, true, null]],
        296 => [[['_route' => 'feature_edit', '_controller' => 'App\\Controller\\FeatureController::edit'], ['id'], ['GET' => 0, 'POST' => 1], null, false, false, null]],
        304 => [[['_route' => 'feature_delete', '_controller' => 'App\\Controller\\FeatureController::delete'], ['id'], ['DELETE' => 0], null, false, true, null]],
        357 => [[['_route' => 'password_add', '_controller' => 'App\\Controller\\PasswordController::add'], ['id', 'token'], null, null, false, true, null]],
        395 => [[['_route' => 'password_reset', '_controller' => 'App\\Controller\\PasswordController::reset'], ['token'], null, null, false, true, null]],
        446 => [[['_route' => 'project_edit', 'variant' => 'high', '_controller' => 'App\\Controller\\ProjectController::edit'], ['id', 'variant'], ['GET' => 0, 'POST' => 1], null, false, true, null]],
        454 => [[['_route' => 'project_delete', '_controller' => 'App\\Controller\\ProjectController::delete'], ['id'], ['DELETE' => 0], null, false, true, null]],
        510 => [[['_route' => 'project_feature_delete', 'variant' => 'high', '_controller' => 'App\\Controller\\ProjectController::deleteProjectFeature'], ['id', 'variant'], ['POST' => 0], null, false, true, null]],
        573 => [[['_route' => 'project_feature_add', 'variant' => 'high', '_controller' => 'App\\Controller\\ProjectController::addProjectFeature'], ['id', 'variant'], ['GET' => 0, 'POST' => 1], null, false, true, null]],
        605 => [[['_route' => 'feature_search', '_controller' => 'App\\Controller\\ProjectController::searchFeature'], ['input'], null, null, false, true, null]],
        623 => [[['_route' => 'app_login', '_controller' => 'App\\Controller\\SecurityController::login'], [], null, null, false, false, null]],
        643 => [[['_route' => 'app_logout', '_controller' => 'App\\Controller\\SecurityController::logout'], [], null, null, false, false, null]],
        666 => [[['_route' => 'user_index', '_controller' => 'App\\Controller\\UserController::index'], [], ['GET' => 0], null, true, false, null]],
        702 => [[['_route' => 'user_role', '_controller' => 'App\\Controller\\UserController::changeRole'], ['id'], ['GET' => 0, 'POST' => 1], null, false, false, null]],
        710 => [
            [['_route' => 'user_delete', '_controller' => 'App\\Controller\\UserController::delete'], ['id'], ['DELETE' => 0], null, false, true, null],
            [null, null, null, null, false, false, 0],
        ],
    ],
    null, // $checkCondition
];
