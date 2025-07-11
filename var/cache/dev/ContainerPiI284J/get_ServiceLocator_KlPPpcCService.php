<?php

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.
// Returns the private '.service_locator.KlPPpcC' shared service.

return $this->privates['.service_locator.KlPPpcC'] = new \Symfony\Component\DependencyInjection\Argument\ServiceLocator($this->getService, [
    'feature' => ['privates', 'App\\Repository\\FeatureRepository', 'getFeatureRepositoryService.php', true],
    'paginator' => ['services', 'knp_paginator', 'getKnpPaginatorService.php', true],
], [
    'feature' => 'App\\Repository\\FeatureRepository',
    'paginator' => '?',
]);
