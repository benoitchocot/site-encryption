<?php

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.
// Returns the public 'Vich\UploaderBundle\Naming\OrignameNamer' shared service.

include_once \dirname(__DIR__, 4).'/vendor/vich/uploader-bundle/Naming/NamerInterface.php';
include_once \dirname(__DIR__, 4).'/vendor/vich/uploader-bundle/Naming/ConfigurableInterface.php';
include_once \dirname(__DIR__, 4).'/vendor/vich/uploader-bundle/Naming/OrignameNamer.php';

return $this->services['Vich\\UploaderBundle\\Naming\\OrignameNamer'] = new \Vich\UploaderBundle\Naming\OrignameNamer();
