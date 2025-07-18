<?php

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.
// Returns the private '.service_locator.NPLq0xu' shared service.

return $this->privates['.service_locator.NPLq0xu'] = new \Symfony\Component\DependencyInjection\Argument\ServiceLocator($this->getService, [
    'paginator' => ['services', 'knp_paginator', 'getKnpPaginatorService.php', true],
    'project' => ['privates', 'App\\Repository\\ProjectRepository', 'getProjectRepositoryService.php', true],
    'projectCalculator' => ['privates', 'App\\Service\\ProjectCalculator', 'getProjectCalculatorService.php', true],
], [
    'paginator' => '?',
    'project' => 'App\\Repository\\ProjectRepository',
    'projectCalculator' => 'App\\Service\\ProjectCalculator',
]);
