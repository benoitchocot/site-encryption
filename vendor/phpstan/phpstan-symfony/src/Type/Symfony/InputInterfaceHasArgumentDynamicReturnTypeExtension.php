<?php declare(strict_types = 1);

namespace PHPStan\Type\Symfony;

use InvalidArgumentException;
use PhpParser\Node\Expr\MethodCall;
use PHPStan\Analyser\Scope;
use PHPStan\Reflection\MethodReflection;
use PHPStan\Symfony\ConsoleApplicationResolver;
use PHPStan\Type\BooleanType;
use PHPStan\Type\Constant\ConstantBooleanType;
use PHPStan\Type\DynamicMethodReturnTypeExtension;
use PHPStan\Type\Type;
use PHPStan\Type\TypeUtils;
use function array_unique;
use function count;

final class InputInterfaceHasArgumentDynamicReturnTypeExtension implements DynamicMethodReturnTypeExtension
{

	/** @var \PHPStan\Symfony\ConsoleApplicationResolver */
	private $consoleApplicationResolver;

	public function __construct(ConsoleApplicationResolver $consoleApplicationResolver)
	{
		$this->consoleApplicationResolver = $consoleApplicationResolver;
	}

	public function getClass(): string
	{
		return 'Symfony\Component\Console\Input\InputInterface';
	}

	public function isMethodSupported(MethodReflection $methodReflection): bool
	{
		return $methodReflection->getName() === 'hasArgument';
	}

	public function getTypeFromMethodCall(MethodReflection $methodReflection, MethodCall $methodCall, Scope $scope): Type
	{
		$defaultReturnType = new BooleanType();

		if (!isset($methodCall->args[0])) {
			return $defaultReturnType;
		}

		$classReflection = $scope->getClassReflection();
		if ($classReflection === null) {
			return $defaultReturnType;
		}

		$argStrings = TypeUtils::getConstantStrings($scope->getType($methodCall->args[0]->value));
		if (count($argStrings) !== 1) {
			return $defaultReturnType;
		}
		$argName = $argStrings[0]->getValue();

		$returnTypes = [];
		foreach ($this->consoleApplicationResolver->findCommands($classReflection) as $command) {
			try {
				$command->getDefinition()->getArgument($argName);
				$returnTypes[] = true;
			} catch (InvalidArgumentException $e) {
				$returnTypes[] = false;
			}
		}

		if (count($returnTypes) === 0) {
			return $defaultReturnType;
		}

		$returnTypes = array_unique($returnTypes);
		return count($returnTypes) === 1 ? new ConstantBooleanType($returnTypes[0]) : $defaultReturnType;
	}

}
