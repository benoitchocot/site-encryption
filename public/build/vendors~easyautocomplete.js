(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~easyautocomplete"],{

/***/ "./node_modules/core-js/internals/a-constructor.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/a-constructor.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isConstructor = __webpack_require__(/*! ../internals/is-constructor */ "./node_modules/core-js/internals/is-constructor.js");
var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "./node_modules/core-js/internals/try-to-string.js");

var $TypeError = TypeError;

// `Assert: IsConstructor(argument) is true`
module.exports = function (argument) {
  if (isConstructor(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a constructor');
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-instance.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/an-instance.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "./node_modules/core-js/internals/object-is-prototype-of.js");

var $TypeError = TypeError;

module.exports = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw new $TypeError('Incorrect invocation');
};


/***/ }),

/***/ "./node_modules/core-js/internals/environment-is-ios-pebble.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/environment-is-ios-pebble.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var userAgent = __webpack_require__(/*! ../internals/environment-user-agent */ "./node_modules/core-js/internals/environment-user-agent.js");

module.exports = /ipad|iphone|ipod/i.test(userAgent) && typeof Pebble != 'undefined';


/***/ }),

/***/ "./node_modules/core-js/internals/environment-is-ios.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/environment-is-ios.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var userAgent = __webpack_require__(/*! ../internals/environment-user-agent */ "./node_modules/core-js/internals/environment-user-agent.js");

// eslint-disable-next-line redos/no-vulnerable -- safe
module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);


/***/ }),

/***/ "./node_modules/core-js/internals/environment-is-node.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/environment-is-node.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ENVIRONMENT = __webpack_require__(/*! ../internals/environment */ "./node_modules/core-js/internals/environment.js");

module.exports = ENVIRONMENT === 'NODE';


/***/ }),

/***/ "./node_modules/core-js/internals/environment-is-webos-webkit.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/environment-is-webos-webkit.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var userAgent = __webpack_require__(/*! ../internals/environment-user-agent */ "./node_modules/core-js/internals/environment-user-agent.js");

module.exports = /web0s(?!.*chrome)/i.test(userAgent);


/***/ }),

/***/ "./node_modules/core-js/internals/environment.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/environment.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global Bun, Deno -- detection */
var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");
var userAgent = __webpack_require__(/*! ../internals/environment-user-agent */ "./node_modules/core-js/internals/environment-user-agent.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var userAgentStartsWith = function (string) {
  return userAgent.slice(0, string.length) === string;
};

module.exports = (function () {
  if (userAgentStartsWith('Bun/')) return 'BUN';
  if (userAgentStartsWith('Cloudflare-Workers')) return 'CLOUDFLARE';
  if (userAgentStartsWith('Deno/')) return 'DENO';
  if (userAgentStartsWith('Node.js/')) return 'NODE';
  if (globalThis.Bun && typeof Bun.version == 'string') return 'BUN';
  if (globalThis.Deno && typeof Deno.version == 'object') return 'DENO';
  if (classof(globalThis.process) === 'process') return 'NODE';
  if (globalThis.window && globalThis.document) return 'BROWSER';
  return 'REST';
})();


/***/ }),

/***/ "./node_modules/core-js/internals/host-report-errors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/host-report-errors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (a, b) {
  try {
    // eslint-disable-next-line no-console -- safe
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  } catch (error) { /* empty */ }
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterate.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/iterate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "./node_modules/core-js/internals/try-to-string.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "./node_modules/core-js/internals/object-is-prototype-of.js");
var getIterator = __webpack_require__(/*! ../internals/get-iterator */ "./node_modules/core-js/internals/get-iterator.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");
var iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ "./node_modules/core-js/internals/iterator-close.js");

var $TypeError = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal');
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw new $TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};


/***/ }),

/***/ "./node_modules/core-js/internals/microtask.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/microtask.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");
var safeGetBuiltIn = __webpack_require__(/*! ../internals/safe-get-built-in */ "./node_modules/core-js/internals/safe-get-built-in.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var macrotask = __webpack_require__(/*! ../internals/task */ "./node_modules/core-js/internals/task.js").set;
var Queue = __webpack_require__(/*! ../internals/queue */ "./node_modules/core-js/internals/queue.js");
var IS_IOS = __webpack_require__(/*! ../internals/environment-is-ios */ "./node_modules/core-js/internals/environment-is-ios.js");
var IS_IOS_PEBBLE = __webpack_require__(/*! ../internals/environment-is-ios-pebble */ "./node_modules/core-js/internals/environment-is-ios-pebble.js");
var IS_WEBOS_WEBKIT = __webpack_require__(/*! ../internals/environment-is-webos-webkit */ "./node_modules/core-js/internals/environment-is-webos-webkit.js");
var IS_NODE = __webpack_require__(/*! ../internals/environment-is-node */ "./node_modules/core-js/internals/environment-is-node.js");

var MutationObserver = globalThis.MutationObserver || globalThis.WebKitMutationObserver;
var document = globalThis.document;
var process = globalThis.process;
var Promise = globalThis.Promise;
var microtask = safeGetBuiltIn('queueMicrotask');
var notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!microtask) {
  var queue = new Queue();

  var flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (fn = queue.get()) try {
      fn();
    } catch (error) {
      if (queue.head) notify();
      throw error;
    }
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (!IS_IOS_PEBBLE && Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    // workaround of WebKit ~ iOS Safari 10.1 bug
    promise.constructor = Promise;
    then = bind(promise.then, promise);
    notify = function () {
      then(flush);
    };
  // Node.js without promises
  } else if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessage
  // - onreadystatechange
  // - setTimeout
  } else {
    // `webpack` dev server bug on IE global methods - use bind(fn, global)
    macrotask = bind(macrotask, globalThis);
    notify = function () {
      macrotask(flush);
    };
  }

  microtask = function (fn) {
    if (!queue.head) notify();
    queue.add(fn);
  };
}

module.exports = microtask;


/***/ }),

/***/ "./node_modules/core-js/internals/new-promise-capability.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/new-promise-capability.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");

var $TypeError = TypeError;

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw new $TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable(resolve);
  this.reject = aCallable(reject);
};

// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/core-js/internals/perform.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/perform.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/promise-constructor-detection.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/promise-constructor-detection.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");
var NativePromiseConstructor = __webpack_require__(/*! ../internals/promise-native-constructor */ "./node_modules/core-js/internals/promise-native-constructor.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var ENVIRONMENT = __webpack_require__(/*! ../internals/environment */ "./node_modules/core-js/internals/environment.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var V8_VERSION = __webpack_require__(/*! ../internals/environment-v8-version */ "./node_modules/core-js/internals/environment-v8-version.js");

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
var SPECIES = wellKnownSymbol('species');
var SUBCLASSING = false;
var NATIVE_PROMISE_REJECTION_EVENT = isCallable(globalThis.PromiseRejectionEvent);

var FORCED_PROMISE_CONSTRUCTOR = isForced('Promise', function () {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor);
  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // We can't detect it synchronously, so just check versions
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
  // We need Promise#{ catch, finally } in the pure version for preventing prototype pollution
  if (IS_PURE && !(NativePromisePrototype['catch'] && NativePromisePrototype['finally'])) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
    // Detect correctness of subclassing with @@species support
    var promise = new NativePromiseConstructor(function (resolve) { resolve(1); });
    var FakePromise = function (exec) {
      exec(function () { /* empty */ }, function () { /* empty */ });
    };
    var constructor = promise.constructor = {};
    constructor[SPECIES] = FakePromise;
    SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
    if (!SUBCLASSING) return true;
  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  } return !GLOBAL_CORE_JS_PROMISE && (ENVIRONMENT === 'BROWSER' || ENVIRONMENT === 'DENO') && !NATIVE_PROMISE_REJECTION_EVENT;
});

module.exports = {
  CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR,
  REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT,
  SUBCLASSING: SUBCLASSING
};


/***/ }),

/***/ "./node_modules/core-js/internals/promise-native-constructor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/promise-native-constructor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");

module.exports = globalThis.Promise;


/***/ }),

/***/ "./node_modules/core-js/internals/promise-resolve.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/promise-resolve.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var newPromiseCapability = __webpack_require__(/*! ../internals/new-promise-capability */ "./node_modules/core-js/internals/new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/core-js/internals/promise-statics-incorrect-iteration.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js/internals/promise-statics-incorrect-iteration.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NativePromiseConstructor = __webpack_require__(/*! ../internals/promise-native-constructor */ "./node_modules/core-js/internals/promise-native-constructor.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");
var FORCED_PROMISE_CONSTRUCTOR = __webpack_require__(/*! ../internals/promise-constructor-detection */ "./node_modules/core-js/internals/promise-constructor-detection.js").CONSTRUCTOR;

module.exports = FORCED_PROMISE_CONSTRUCTOR || !checkCorrectnessOfIteration(function (iterable) {
  NativePromiseConstructor.all(iterable).then(undefined, function () { /* empty */ });
});


/***/ }),

/***/ "./node_modules/core-js/internals/queue.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/queue.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Queue = function () {
  this.head = null;
  this.tail = null;
};

Queue.prototype = {
  add: function (item) {
    var entry = { item: item, next: null };
    var tail = this.tail;
    if (tail) tail.next = entry;
    else this.head = entry;
    this.tail = entry;
  },
  get: function () {
    var entry = this.head;
    if (entry) {
      var next = this.head = entry.next;
      if (next === null) this.tail = null;
      return entry.item;
    }
  }
};

module.exports = Queue;


/***/ }),

/***/ "./node_modules/core-js/internals/safe-get-built-in.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/safe-get-built-in.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Avoid NodeJS experimental warning
module.exports = function (name) {
  if (!DESCRIPTORS) return globalThis[name];
  var descriptor = getOwnPropertyDescriptor(globalThis, name);
  return descriptor && descriptor.value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-species.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/set-species.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var defineBuiltInAccessor = __webpack_require__(/*! ../internals/define-built-in-accessor */ "./node_modules/core-js/internals/define-built-in-accessor.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineBuiltInAccessor(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/species-constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/species-constructor.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var aConstructor = __webpack_require__(/*! ../internals/a-constructor */ "./node_modules/core-js/internals/a-constructor.js");
var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "./node_modules/core-js/internals/is-null-or-undefined.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || isNullOrUndefined(S = anObject(C)[SPECIES]) ? defaultConstructor : aConstructor(S);
};


/***/ }),

/***/ "./node_modules/core-js/internals/task.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/task.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");
var apply = __webpack_require__(/*! ../internals/function-apply */ "./node_modules/core-js/internals/function-apply.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var arraySlice = __webpack_require__(/*! ../internals/array-slice */ "./node_modules/core-js/internals/array-slice.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var validateArgumentsLength = __webpack_require__(/*! ../internals/validate-arguments-length */ "./node_modules/core-js/internals/validate-arguments-length.js");
var IS_IOS = __webpack_require__(/*! ../internals/environment-is-ios */ "./node_modules/core-js/internals/environment-is-ios.js");
var IS_NODE = __webpack_require__(/*! ../internals/environment-is-node */ "./node_modules/core-js/internals/environment-is-node.js");

var set = globalThis.setImmediate;
var clear = globalThis.clearImmediate;
var process = globalThis.process;
var Dispatch = globalThis.Dispatch;
var Function = globalThis.Function;
var MessageChannel = globalThis.MessageChannel;
var String = globalThis.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var $location, defer, channel, port;

fails(function () {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  $location = globalThis.location;
});

var run = function (id) {
  if (hasOwn(queue, id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var eventListener = function (event) {
  run(event.data);
};

var globalPostMessageDefer = function (id) {
  // old engines have not location.origin
  globalThis.postMessage(String(id), $location.protocol + '//' + $location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(handler) {
    validateArgumentsLength(arguments.length, 1);
    var fn = isCallable(handler) ? handler : Function(handler);
    var args = arraySlice(arguments, 1);
    queue[++counter] = function () {
      apply(fn, undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (IS_NODE) {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = eventListener;
    defer = bind(port.postMessage, port);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    globalThis.addEventListener &&
    isCallable(globalThis.postMessage) &&
    !globalThis.importScripts &&
    $location && $location.protocol !== 'file:' &&
    !fails(globalPostMessageDefer)
  ) {
    defer = globalPostMessageDefer;
    globalThis.addEventListener('message', eventListener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),

/***/ "./node_modules/core-js/internals/validate-arguments-length.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/validate-arguments-length.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $TypeError = TypeError;

module.exports = function (passed, required) {
  if (passed < required) throw new $TypeError('Not enough arguments');
  return passed;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.promise.all.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.all.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ "./node_modules/core-js/internals/new-promise-capability.js");
var perform = __webpack_require__(/*! ../internals/perform */ "./node_modules/core-js/internals/perform.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js");
var PROMISE_STATICS_INCORRECT_ITERATION = __webpack_require__(/*! ../internals/promise-statics-incorrect-iteration */ "./node_modules/core-js/internals/promise-statics-incorrect-iteration.js");

// `Promise.all` method
// https://tc39.es/ecma262/#sec-promise.all
$({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call($promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.promise.catch.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.catch.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var FORCED_PROMISE_CONSTRUCTOR = __webpack_require__(/*! ../internals/promise-constructor-detection */ "./node_modules/core-js/internals/promise-constructor-detection.js").CONSTRUCTOR;
var NativePromiseConstructor = __webpack_require__(/*! ../internals/promise-native-constructor */ "./node_modules/core-js/internals/promise-native-constructor.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "./node_modules/core-js/internals/define-built-in.js");

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

// `Promise.prototype.catch` method
// https://tc39.es/ecma262/#sec-promise.prototype.catch
$({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR, real: true }, {
  'catch': function (onRejected) {
    return this.then(undefined, onRejected);
  }
});

// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
if (!IS_PURE && isCallable(NativePromiseConstructor)) {
  var method = getBuiltIn('Promise').prototype['catch'];
  if (NativePromisePrototype['catch'] !== method) {
    defineBuiltIn(NativePromisePrototype, 'catch', method, { unsafe: true });
  }
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.promise.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.constructor.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var IS_NODE = __webpack_require__(/*! ../internals/environment-is-node */ "./node_modules/core-js/internals/environment-is-node.js");
var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");
var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "./node_modules/core-js/internals/define-built-in.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "./node_modules/core-js/internals/set-species.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");
var task = __webpack_require__(/*! ../internals/task */ "./node_modules/core-js/internals/task.js").set;
var microtask = __webpack_require__(/*! ../internals/microtask */ "./node_modules/core-js/internals/microtask.js");
var hostReportErrors = __webpack_require__(/*! ../internals/host-report-errors */ "./node_modules/core-js/internals/host-report-errors.js");
var perform = __webpack_require__(/*! ../internals/perform */ "./node_modules/core-js/internals/perform.js");
var Queue = __webpack_require__(/*! ../internals/queue */ "./node_modules/core-js/internals/queue.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var NativePromiseConstructor = __webpack_require__(/*! ../internals/promise-native-constructor */ "./node_modules/core-js/internals/promise-native-constructor.js");
var PromiseConstructorDetection = __webpack_require__(/*! ../internals/promise-constructor-detection */ "./node_modules/core-js/internals/promise-constructor-detection.js");
var newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ "./node_modules/core-js/internals/new-promise-capability.js");

var PROMISE = 'Promise';
var FORCED_PROMISE_CONSTRUCTOR = PromiseConstructorDetection.CONSTRUCTOR;
var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var setInternalState = InternalStateModule.set;
var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
var PromiseConstructor = NativePromiseConstructor;
var PromisePrototype = NativePromisePrototype;
var TypeError = globalThis.TypeError;
var document = globalThis.document;
var process = globalThis.process;
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;

var DISPATCH_EVENT = !!(document && document.createEvent && globalThis.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;

var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && isCallable(then = it.then) ? then : false;
};

var callReaction = function (reaction, state) {
  var value = state.value;
  var ok = state.state === FULFILLED;
  var handler = ok ? reaction.ok : reaction.fail;
  var resolve = reaction.resolve;
  var reject = reaction.reject;
  var domain = reaction.domain;
  var result, then, exited;
  try {
    if (handler) {
      if (!ok) {
        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
        state.rejection = HANDLED;
      }
      if (handler === true) result = value;
      else {
        if (domain) domain.enter();
        result = handler(value); // can throw
        if (domain) {
          domain.exit();
          exited = true;
        }
      }
      if (result === reaction.promise) {
        reject(new TypeError('Promise-chain cycle'));
      } else if (then = isThenable(result)) {
        call(then, result, resolve, reject);
      } else resolve(result);
    } else reject(value);
  } catch (error) {
    if (domain && !exited) domain.exit();
    reject(error);
  }
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  microtask(function () {
    var reactions = state.reactions;
    var reaction;
    while (reaction = reactions.get()) {
      callReaction(reaction, state);
    }
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    globalThis.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = globalThis['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  call(task, globalThis, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  call(task, globalThis, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw new TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          call(then, value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED_PROMISE_CONSTRUCTOR) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromisePrototype);
    aCallable(executor);
    call(Internal, this);
    var state = getInternalPromiseState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };

  PromisePrototype = PromiseConstructor.prototype;

  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: new Queue(),
      rejection: false,
      state: PENDING,
      value: null
    });
  };

  // `Promise.prototype.then` method
  // https://tc39.es/ecma262/#sec-promise.prototype.then
  Internal.prototype = defineBuiltIn(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
    var state = getInternalPromiseState(this);
    var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
    state.parent = true;
    reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;
    reaction.fail = isCallable(onRejected) && onRejected;
    reaction.domain = IS_NODE ? process.domain : undefined;
    if (state.state === PENDING) state.reactions.add(reaction);
    else microtask(function () {
      callReaction(reaction, state);
    });
    return reaction.promise;
  });

  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalPromiseState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };

  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && isCallable(NativePromiseConstructor) && NativePromisePrototype !== Object.prototype) {
    nativeThen = NativePromisePrototype.then;

    if (!NATIVE_PROMISE_SUBCLASSING) {
      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
      defineBuiltIn(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          call(nativeThen, that, resolve, reject);
        }).then(onFulfilled, onRejected);
      // https://github.com/zloirock/core-js/issues/640
      }, { unsafe: true });
    }

    // make `.constructor === Promise` work for native promise-based APIs
    try {
      delete NativePromisePrototype.constructor;
    } catch (error) { /* empty */ }

    // make `instanceof Promise` work for native promise-based APIs
    if (setPrototypeOf) {
      setPrototypeOf(NativePromisePrototype, PromisePrototype);
    }
  }
}

// `Promise` constructor
// https://tc39.es/ecma262/#sec-promise-executor
$({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  Promise: PromiseConstructor
});

PromiseWrapper = path.Promise;

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);


/***/ }),

/***/ "./node_modules/core-js/modules/es.promise.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove this module from `core-js@4` since it's split to modules listed below
__webpack_require__(/*! ../modules/es.promise.constructor */ "./node_modules/core-js/modules/es.promise.constructor.js");
__webpack_require__(/*! ../modules/es.promise.all */ "./node_modules/core-js/modules/es.promise.all.js");
__webpack_require__(/*! ../modules/es.promise.catch */ "./node_modules/core-js/modules/es.promise.catch.js");
__webpack_require__(/*! ../modules/es.promise.race */ "./node_modules/core-js/modules/es.promise.race.js");
__webpack_require__(/*! ../modules/es.promise.reject */ "./node_modules/core-js/modules/es.promise.reject.js");
__webpack_require__(/*! ../modules/es.promise.resolve */ "./node_modules/core-js/modules/es.promise.resolve.js");


/***/ }),

/***/ "./node_modules/core-js/modules/es.promise.race.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.race.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ "./node_modules/core-js/internals/new-promise-capability.js");
var perform = __webpack_require__(/*! ../internals/perform */ "./node_modules/core-js/internals/perform.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js");
var PROMISE_STATICS_INCORRECT_ITERATION = __webpack_require__(/*! ../internals/promise-statics-incorrect-iteration */ "./node_modules/core-js/internals/promise-statics-incorrect-iteration.js");

// `Promise.race` method
// https://tc39.es/ecma262/#sec-promise.race
$({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      iterate(iterable, function (promise) {
        call($promiseResolve, C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.promise.reject.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.reject.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ "./node_modules/core-js/internals/new-promise-capability.js");
var FORCED_PROMISE_CONSTRUCTOR = __webpack_require__(/*! ../internals/promise-constructor-detection */ "./node_modules/core-js/internals/promise-constructor-detection.js").CONSTRUCTOR;

// `Promise.reject` method
// https://tc39.es/ecma262/#sec-promise.reject
$({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  reject: function reject(r) {
    var capability = newPromiseCapabilityModule.f(this);
    var capabilityReject = capability.reject;
    capabilityReject(r);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.promise.resolve.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.resolve.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var NativePromiseConstructor = __webpack_require__(/*! ../internals/promise-native-constructor */ "./node_modules/core-js/internals/promise-native-constructor.js");
var FORCED_PROMISE_CONSTRUCTOR = __webpack_require__(/*! ../internals/promise-constructor-detection */ "./node_modules/core-js/internals/promise-constructor-detection.js").CONSTRUCTOR;
var promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ "./node_modules/core-js/internals/promise-resolve.js");

var PromiseConstructorWrapper = getBuiltIn('Promise');
var CHECK_WRAPPER = IS_PURE && !FORCED_PROMISE_CONSTRUCTOR;

// `Promise.resolve` method
// https://tc39.es/ecma262/#sec-promise.resolve
$({ target: 'Promise', stat: true, forced: IS_PURE || FORCED_PROMISE_CONSTRUCTOR }, {
  resolve: function resolve(x) {
    return promiseResolve(CHECK_WRAPPER && this === PromiseConstructorWrapper ? NativePromiseConstructor : this, x);
  }
});


/***/ }),

/***/ "./node_modules/easy-autocomplete/dist/jquery.easy-autocomplete.js":
/*!*************************************************************************!*\
  !*** ./node_modules/easy-autocomplete/dist/jquery.easy-autocomplete.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($, jQuery) {/*
 * easy-autocomplete
 * jQuery plugin for autocompletion
 * 
 * @author Łukasz Pawełczak (http://github.com/pawelczak)
 * @version 1.3.5
 * Copyright  License: 
 */

/*
 * EasyAutocomplete - Configuration 
 */
var EasyAutocomplete = (function(scope){

	scope.Configuration = function Configuration(options) {
		var defaults = {
			data: "list-required",
			url: "list-required",
			dataType: "json",

			listLocation: function(data) {
				return data;
			},

			xmlElementName: "",

			getValue: function(element) {
				return element;
			},

			autocompleteOff: true,

			placeholder: false,

			ajaxCallback: function() {},

			matchResponseProperty: false,

			list: {
				sort: {
					enabled: false,
					method: function(a, b) {
						a = defaults.getValue(a);
						b = defaults.getValue(b);
						if (a < b) {
							return -1;
						}
						if (a > b) {
							return 1;
						}
						return 0;
					}
				},

				maxNumberOfElements: 6,

				hideOnEmptyPhrase: true,

				match: {
					enabled: false,
					caseSensitive: false,
					method: function(element, phrase) {

						if (element.search(phrase) > -1) {
							return true;
						} else {
							return false;
						}
					}
				},

				showAnimation: {
					type: "normal", //normal|slide|fade
					time: 400,
					callback: function() {}
				},

				hideAnimation: {
					type: "normal",
					time: 400,
					callback: function() {}
				},

				/* Events */
				onClickEvent: function() {},
				onSelectItemEvent: function() {},
				onLoadEvent: function() {},
				onChooseEvent: function() {},
				onKeyEnterEvent: function() {},
				onMouseOverEvent: function() {},
				onMouseOutEvent: function() {},	
				onShowListEvent: function() {},
				onHideListEvent: function() {}
			},

			highlightPhrase: true,

			theme: "",

			cssClasses: "",

			minCharNumber: 0,

			requestDelay: 0,

			adjustWidth: true,

			ajaxSettings: {},

			preparePostData: function(data, inputPhrase) {return data;},

			loggerEnabled: true,

			template: "",

			categoriesAssigned: false,

			categories: [{
				maxNumberOfElements: 4
			}]

		};
		
		var externalObjects = ["ajaxSettings", "template"];

		this.get = function(propertyName) {
			return defaults[propertyName];
		};

		this.equals = function(name, value) {
			if (isAssigned(name)) {
				if (defaults[name] === value) {
					return true;
				}
			} 
			
			return false;
		};

		this.checkDataUrlProperties = function() {
			if (defaults.url === "list-required" && defaults.data === "list-required") {
				return false;
			}
			return true;
		};
		this.checkRequiredProperties = function() {
			for (var propertyName in defaults) {
				if (defaults[propertyName] === "required") {
					logger.error("Option " + propertyName + " must be defined");
					return false;
				}
			}
			return true;
		};

		this.printPropertiesThatDoesntExist = function(consol, optionsToCheck) {
			printPropertiesThatDoesntExist(consol, optionsToCheck);
		};


		prepareDefaults();

		mergeOptions();

		if (defaults.loggerEnabled === true) {
			printPropertiesThatDoesntExist(console, options);	
		}

		addAjaxSettings();

		processAfterMerge();
		function prepareDefaults() {

			if (options.dataType === "xml") {
				
				if (!options.getValue) {

					options.getValue = function(element) {
						return $(element).text();
					};
				}

				
				if (!options.list) {

					options.list = {};
				} 

				if (!options.list.sort) {
					options.list.sort = {};
				}


				options.list.sort.method = function(a, b) {
					a = options.getValue(a);
					b = options.getValue(b);
					if (a < b) {
						return -1;
					}
					if (a > b) {
						return 1;
					}
					return 0;
				};

				if (!options.list.match) {
					options.list.match = {};
				}

				options.list.match.method = function(element, phrase) {

					if (element.search(phrase) > -1) {
						return true;
					} else {
						return false;
					}
				};

			}
			if (options.categories !== undefined && options.categories instanceof Array) {

				var categories = [];

				for (var i = 0, length = options.categories.length; i < length; i += 1) { 

					var category = options.categories[i];

					for (var property in defaults.categories[0]) {

						if (category[property] === undefined) {
							category[property] = defaults.categories[0][property];
						}
					}

					categories.push(category);
				}

				options.categories = categories;
			}
		}

		function mergeOptions() {

			defaults = mergeObjects(defaults, options);

			function mergeObjects(source, target) {
				var mergedObject = source || {};

				for (var propertyName in source) {
					if (target[propertyName] !== undefined && target[propertyName] !== null) {

						if (typeof target[propertyName] !== "object" || 
								target[propertyName] instanceof Array) {
							mergedObject[propertyName] = target[propertyName];
						} else {
							mergeObjects(source[propertyName], target[propertyName]);
						}
					}
				}
			
				/* If data is an object */
				if (target.data !== undefined && target.data !== null && typeof target.data === "object") {
					mergedObject.data = target.data;
				}

				return mergedObject;
			}
		}	


		function processAfterMerge() {
			
			if (defaults.url !== "list-required" && typeof defaults.url !== "function") {
				var defaultUrl = defaults.url;
				defaults.url = function() {
					return defaultUrl;
				};
			}

			if (defaults.ajaxSettings.url !== undefined && typeof defaults.ajaxSettings.url !== "function") {
				var defaultUrl = defaults.ajaxSettings.url;
				defaults.ajaxSettings.url = function() {
					return defaultUrl;
				};
			}

			if (typeof defaults.listLocation === "string") {
				var defaultlistLocation = defaults.listLocation;

				if (defaults.dataType.toUpperCase() === "XML") {
					defaults.listLocation = function(data) {
						return $(data).find(defaultlistLocation);
					};
				} else {
					defaults.listLocation = function(data) {
						return data[defaultlistLocation];
					};	
				}
			}

			if (typeof defaults.getValue === "string") {
				var defaultsGetValue = defaults.getValue;
				defaults.getValue = function(element) {
					return element[defaultsGetValue];
				};
			}

			if (options.categories !== undefined) {
				defaults.categoriesAssigned = true;
			}

		}

		function addAjaxSettings() {

			if (options.ajaxSettings !== undefined && typeof options.ajaxSettings === "object") {
				defaults.ajaxSettings = options.ajaxSettings;
			} else {
				defaults.ajaxSettings = {};	
			}
			
		}

		function isAssigned(name) {
			if (defaults[name] !== undefined && defaults[name] !== null) {
				return true;
			} else {
				return false;
			}
		}
		function printPropertiesThatDoesntExist(consol, optionsToCheck) {
			
			checkPropertiesIfExist(defaults, optionsToCheck);

			function checkPropertiesIfExist(source, target) {
				for(var property in target) {
					if (source[property] === undefined) {
						consol.log("Property '" + property + "' does not exist in EasyAutocomplete options API.");		
					}

					if (typeof source[property] === "object" && $.inArray(property, externalObjects) === -1) {
						checkPropertiesIfExist(source[property], target[property]);
					}
				}	
			}
		}
	};

	return scope;

})(EasyAutocomplete || {});


/*
 * EasyAutocomplete - Logger 
 */
var EasyAutocomplete = (function(scope){
	
	scope.Logger = function Logger() {

		this.error = function(message) {
			console.log("ERROR: " + message);
		};

		this.warning = function(message) {
			console.log("WARNING: " + message);
		};
	};

	return scope;

})(EasyAutocomplete || {});
	

/*
 * EasyAutocomplete - Constans
 */
var EasyAutocomplete = (function(scope){	
	
	scope.Constans = function Constans() {
		var constants = {
			CONTAINER_CLASS: "easy-autocomplete-container",
			CONTAINER_ID: "eac-container-",

			WRAPPER_CSS_CLASS: "easy-autocomplete"
		};

		this.getValue = function(propertyName) {
			return constants[propertyName];
		};

	};

	return scope;

})(EasyAutocomplete || {});

/*
 * EasyAutocomplete - ListBuilderService 
 *
 * @author Łukasz Pawełczak 
 *
 */
var EasyAutocomplete = (function(scope) {

	scope.ListBuilderService = function ListBuilderService(configuration, proccessResponseData) {


		this.init = function(data) {
			var listBuilder = [],
				builder = {};

			builder.data = configuration.get("listLocation")(data);
			builder.getValue = configuration.get("getValue");
			builder.maxListSize = configuration.get("list").maxNumberOfElements;

				
			listBuilder.push(builder);

			return listBuilder;
		};

		this.updateCategories = function(listBuilder, data) {
			
			if (configuration.get("categoriesAssigned")) {

				listBuilder = [];

				for(var i = 0; i < configuration.get("categories").length; i += 1) {

					var builder = convertToListBuilder(configuration.get("categories")[i], data);

					listBuilder.push(builder);
				}

			} 

			return listBuilder;
		};

		this.convertXml = function(listBuilder) {
			if(configuration.get("dataType").toUpperCase() === "XML") {

				for(var i = 0; i < listBuilder.length; i += 1) {
					listBuilder[i].data = convertXmlToList(listBuilder[i]);
				}
			}

			return listBuilder;
		};

		this.processData = function(listBuilder, inputPhrase) {

			for(var i = 0, length = listBuilder.length; i < length; i+=1) {
				listBuilder[i].data = proccessResponseData(configuration, listBuilder[i], inputPhrase);
			}

			return listBuilder;
		};

		this.checkIfDataExists = function(listBuilders) {

			for(var i = 0, length = listBuilders.length; i < length; i += 1) {

				if (listBuilders[i].data !== undefined && listBuilders[i].data instanceof Array) {
					if (listBuilders[i].data.length > 0) {
						return true;
					}
				} 
			}

			return false;
		};


		function convertToListBuilder(category, data) {

			var builder = {};

			if(configuration.get("dataType").toUpperCase() === "XML") {

				builder = convertXmlToListBuilder();
			} else {

				builder = convertDataToListBuilder();
			}
			

			if (category.header !== undefined) {
				builder.header = category.header;
			}

			if (category.maxNumberOfElements !== undefined) {
				builder.maxNumberOfElements = category.maxNumberOfElements;
			}

			if (configuration.get("list").maxNumberOfElements !== undefined) {

				builder.maxListSize = configuration.get("list").maxNumberOfElements;
			}

			if (category.getValue !== undefined) {

				if (typeof category.getValue === "string") {
					var defaultsGetValue = category.getValue;
					builder.getValue = function(element) {
						return element[defaultsGetValue];
					};
				} else if (typeof category.getValue === "function") {
					builder.getValue = category.getValue;
				}

			} else {
				builder.getValue = configuration.get("getValue");	
			}
			

			return builder;


			function convertXmlToListBuilder() {

				var builder = {},
					listLocation;

				if (category.xmlElementName !== undefined) {
					builder.xmlElementName = category.xmlElementName;
				}

				if (category.listLocation !== undefined) {

					listLocation = category.listLocation;
				} else if (configuration.get("listLocation") !== undefined) {

					listLocation = configuration.get("listLocation");
				}

				if (listLocation !== undefined) {
					if (typeof listLocation === "string") {
						builder.data = $(data).find(listLocation);
					} else if (typeof listLocation === "function") {

						builder.data = listLocation(data);
					}
				} else {

					builder.data = data;
				}

				return builder;
			}


			function convertDataToListBuilder() {

				var builder = {};

				if (category.listLocation !== undefined) {

					if (typeof category.listLocation === "string") {
						builder.data = data[category.listLocation];
					} else if (typeof category.listLocation === "function") {
						builder.data = category.listLocation(data);
					}
				} else {
					builder.data = data;
				}

				return builder;
			}
		}

		function convertXmlToList(builder) {
			var simpleList = [];

			if (builder.xmlElementName === undefined) {
				builder.xmlElementName = configuration.get("xmlElementName");
			}


			$(builder.data).find(builder.xmlElementName).each(function() {
				simpleList.push(this);
			});

			return simpleList;
		}

	};

	return scope;

})(EasyAutocomplete || {});


/*
 * EasyAutocomplete - Data proccess module
 *
 * Process list to display:
 * - sort 
 * - decrease number to specific number
 * - show only matching list
 *
 */
var EasyAutocomplete = (function(scope) {

	scope.proccess = function proccessData(config, listBuilder, phrase) {

		scope.proccess.match = match;

		var list = listBuilder.data,
			inputPhrase = phrase;//TODO REFACTOR

		list = findMatch(list, inputPhrase);
		list = reduceElementsInList(list);
		list = sort(list);

		return list;


		function findMatch(list, phrase) {
			var preparedList = [],
				value = "";

			if (config.get("list").match.enabled) {

				for(var i = 0, length = list.length; i < length; i += 1) {

					value = config.get("getValue")(list[i]);
					
					if (match(value, phrase)) {
						preparedList.push(list[i]);	
					}
					
				}

			} else {
				preparedList = list;
			}

			return preparedList;
		}

		function match(value, phrase) {

			if (!config.get("list").match.caseSensitive) {

				if (typeof value === "string") {
					value = value.toLowerCase();	
				}
				
				phrase = phrase.toLowerCase();
			}
			if (config.get("list").match.method(value, phrase)) {
				return true;
			} else {
				return false;
			}
		}

		function reduceElementsInList(list) {
			if (listBuilder.maxNumberOfElements !== undefined && list.length > listBuilder.maxNumberOfElements) {
				list = list.slice(0, listBuilder.maxNumberOfElements);
			}

			return list;
		}

		function sort(list) {
			if (config.get("list").sort.enabled) {
				list.sort(config.get("list").sort.method);
			}

			return list;
		}
		
	};


	return scope;


})(EasyAutocomplete || {});


/*
 * EasyAutocomplete - Template 
 *
 * 
 *
 */
var EasyAutocomplete = (function(scope){

	scope.Template = function Template(options) {


		var genericTemplates = {
			basic: {
				type: "basic",
				method: function(element) { return element; },
				cssClass: ""
			},
			description: {
				type: "description",
				fields: {
					description: "description"
				},
				method: function(element) {	return element + " - description"; },
				cssClass: "eac-description"
			},
			iconLeft: {
				type: "iconLeft",
				fields: {
					icon: ""
				},
				method: function(element) {
					return element;
				},
				cssClass: "eac-icon-left"
			},
			iconRight: {
				type: "iconRight",
				fields: {
					iconSrc: ""
				},
				method: function(element) {
					return element;
				},
				cssClass: "eac-icon-right"
			},
			links: {
				type: "links",
				fields: {
					link: ""
				},
				method: function(element) {
					return element;
				},
				cssClass: ""
			},
			custom: {
				type: "custom",
				method: function() {},
				cssClass: ""
			}
		},



		/*
		 * Converts method with {{text}} to function
		 */
		convertTemplateToMethod = function(template) {


			var _fields = template.fields,
				buildMethod;

			if (template.type === "description") {

				buildMethod = genericTemplates.description.method; 

				if (typeof _fields.description === "string") {
					buildMethod = function(elementValue, element) {
						return elementValue + " - <span>" + element[_fields.description] + "</span>";
					};					
				} else if (typeof _fields.description === "function") {
					buildMethod = function(elementValue, element) {
						return elementValue + " - <span>" + _fields.description(element) + "</span>";
					};	
				}

				return buildMethod;
			}

			if (template.type === "iconRight") {

				if (typeof _fields.iconSrc === "string") {
					buildMethod = function(elementValue, element) {
						return elementValue + "<img class='eac-icon' src='" + element[_fields.iconSrc] + "' />" ;
					};					
				} else if (typeof _fields.iconSrc === "function") {
					buildMethod = function(elementValue, element) {
						return elementValue + "<img class='eac-icon' src='" + _fields.iconSrc(element) + "' />" ;
					};
				}

				return buildMethod;
			}


			if (template.type === "iconLeft") {

				if (typeof _fields.iconSrc === "string") {
					buildMethod = function(elementValue, element) {
						return "<img class='eac-icon' src='" + element[_fields.iconSrc] + "' />" + elementValue;
					};					
				} else if (typeof _fields.iconSrc === "function") {
					buildMethod = function(elementValue, element) {
						return "<img class='eac-icon' src='" + _fields.iconSrc(element) + "' />" + elementValue;
					};
				}

				return buildMethod;
			}

			if(template.type === "links") {

				if (typeof _fields.link === "string") {
					buildMethod = function(elementValue, element) {
						return "<a href='" + element[_fields.link] + "' >" + elementValue + "</a>";
					};					
				} else if (typeof _fields.link === "function") {
					buildMethod = function(elementValue, element) {
						return "<a href='" + _fields.link(element) + "' >" + elementValue + "</a>";
					};
				}

				return buildMethod;
			}


			if (template.type === "custom") {

				return template.method;
			}

			return genericTemplates.basic.method;

		},


		prepareBuildMethod = function(options) {
			if (!options || !options.type) {

				return genericTemplates.basic.method;
			}

			if (options.type && genericTemplates[options.type]) {

				return convertTemplateToMethod(options);
			} else {

				return genericTemplates.basic.method;
			}

		},

		templateClass = function(options) {
			var emptyStringFunction = function() {return "";};

			if (!options || !options.type) {

				return emptyStringFunction;
			}

			if (options.type && genericTemplates[options.type]) {
				return (function () { 
					var _cssClass = genericTemplates[options.type].cssClass;
					return function() { return _cssClass;};
				})();
			} else {
				return emptyStringFunction;
			}
		};


		this.getTemplateClass = templateClass(options);

		this.build = prepareBuildMethod(options);


	};

	return scope;

})(EasyAutocomplete || {});


/*
 * EasyAutocomplete - jQuery plugin for autocompletion
 *
 */
var EasyAutocomplete = (function(scope) {

	
	scope.main = function Core($input, options) {
				
		var module = {
				name: "EasyAutocomplete",
				shortcut: "eac"
			};

		var consts = new scope.Constans(),
			config = new scope.Configuration(options),
			logger = new scope.Logger(),
			template = new scope.Template(options.template),
			listBuilderService = new scope.ListBuilderService(config, scope.proccess),
			checkParam = config.equals,

			$field = $input, 
			$container = "",
			elementsList = [],
			selectedElement = -1,
			requestDelayTimeoutId;

		scope.consts = consts;

		this.getConstants = function() {
			return consts;
		};

		this.getConfiguration = function() {
			return config;
		};

		this.getContainer = function() {
			return $container;
		};

		this.getSelectedItemIndex = function() {
			return selectedElement;
		};

		this.getItems = function () {
			return elementsList;
		};

		this.getItemData = function(index) {

			if (elementsList.length < index || elementsList[index] === undefined) {
				return -1;
			} else {
				return elementsList[index];
			}
		};

		this.getSelectedItemData = function() {
			return this.getItemData(selectedElement);
		};

		this.build = function() {
			prepareField();
		};

		this.init = function() {
			init();
		};
		function init() {

			if ($field.length === 0) {
				logger.error("Input field doesn't exist.");
				return;
			}

			if (!config.checkDataUrlProperties()) {
				logger.error("One of options variables 'data' or 'url' must be defined.");
				return;
			}

			if (!config.checkRequiredProperties()) {
				logger.error("Will not work without mentioned properties.");
				return;
			}


			prepareField();
			bindEvents();	

		}
		function prepareField() {

				
			if ($field.parent().hasClass(consts.getValue("WRAPPER_CSS_CLASS"))) {
				removeContainer();
				removeWrapper();
			} 
			
			createWrapper();
			createContainer();	

			$container = $("#" + getContainerId());
			if (config.get("placeholder")) {
				$field.attr("placeholder", config.get("placeholder"));
			}


			function createWrapper() {
				var $wrapper = $("<div>"),
					classes = consts.getValue("WRAPPER_CSS_CLASS");

			
				if (config.get("theme") && config.get("theme") !== "") {
					classes += " eac-" + config.get("theme");
				}

				if (config.get("cssClasses") && config.get("cssClasses") !== "") {
					classes += " " + config.get("cssClasses");
				}

				if (template.getTemplateClass() !== "") {
					classes += " " + template.getTemplateClass();
				}
				

				$wrapper
					.addClass(classes);
				$field.wrap($wrapper);


				if (config.get("adjustWidth") === true) {
					adjustWrapperWidth();	
				}
				

			}

			function adjustWrapperWidth() {
				var fieldWidth = $field.outerWidth();

				$field.parent().css("width", fieldWidth);				
			}

			function removeWrapper() {
				$field.unwrap();
			}

			function createContainer() {
				var $elements_container = $("<div>").addClass(consts.getValue("CONTAINER_CLASS"));

				$elements_container
						.attr("id", getContainerId())
						.prepend($("<ul>"));


				(function() {

					$elements_container
						/* List show animation */
						.on("show.eac", function() {

							switch(config.get("list").showAnimation.type) {

								case "slide":
									var animationTime = config.get("list").showAnimation.time,
										callback = config.get("list").showAnimation.callback;

									$elements_container.find("ul").slideDown(animationTime, callback);
								break;

								case "fade":
									var animationTime = config.get("list").showAnimation.time,
										callback = config.get("list").showAnimation.callback;

									$elements_container.find("ul").fadeIn(animationTime), callback;
								break;

								default:
									$elements_container.find("ul").show();
								break;
							}

							config.get("list").onShowListEvent();
							
						})
						/* List hide animation */
						.on("hide.eac", function() {

							switch(config.get("list").hideAnimation.type) {

								case "slide":
									var animationTime = config.get("list").hideAnimation.time,
										callback = config.get("list").hideAnimation.callback;

									$elements_container.find("ul").slideUp(animationTime, callback);
								break;

								case "fade":
									var animationTime = config.get("list").hideAnimation.time,
										callback = config.get("list").hideAnimation.callback;

									$elements_container.find("ul").fadeOut(animationTime, callback);
								break;

								default:
									$elements_container.find("ul").hide();
								break;
							}

							config.get("list").onHideListEvent();

						})
						.on("selectElement.eac", function() {
							$elements_container.find("ul li").removeClass("selected");
							$elements_container.find("ul li").eq(selectedElement).addClass("selected");

							config.get("list").onSelectItemEvent();
						})
						.on("loadElements.eac", function(event, listBuilders, phrase) {
			

							var $item = "",
								$listContainer = $elements_container.find("ul");

							$listContainer
								.empty()
								.detach();

							elementsList = [];
							var counter = 0;
							for(var builderIndex = 0, listBuildersLength = listBuilders.length; builderIndex < listBuildersLength; builderIndex += 1) {

								var listData = listBuilders[builderIndex].data;

								if (listData.length === 0) {
									continue;
								}

								if (listBuilders[builderIndex].header !== undefined && listBuilders[builderIndex].header.length > 0) {
									$listContainer.append("<div class='eac-category' >" + listBuilders[builderIndex].header + "</div>");
								}

								for(var i = 0, listDataLength = listData.length; i < listDataLength && counter < listBuilders[builderIndex].maxListSize; i += 1) {
									$item = $("<li><div class='eac-item'></div></li>");
									

									(function() {
										var j = i,
											itemCounter = counter,
											elementsValue = listBuilders[builderIndex].getValue(listData[j]);

										$item.find(" > div")
											.on("click", function() {

												$field.val(elementsValue).trigger("change");

												selectedElement = itemCounter;
												selectElement(itemCounter);

												config.get("list").onClickEvent();
												config.get("list").onChooseEvent();
											})
											.mouseover(function() {

												selectedElement = itemCounter;
												selectElement(itemCounter);	

												config.get("list").onMouseOverEvent();
											})
											.mouseout(function() {
												config.get("list").onMouseOutEvent();
											})
											.html(template.build(highlight(elementsValue, phrase), listData[j]));
									})();

									$listContainer.append($item);
									elementsList.push(listData[i]);
									counter += 1;
								}
							}

							$elements_container.append($listContainer);

							config.get("list").onLoadEvent();
						});

				})();

				$field.after($elements_container);
			}

			function removeContainer() {
				$field.next("." + consts.getValue("CONTAINER_CLASS")).remove();
			}

			function highlight(string, phrase) {

				if(config.get("highlightPhrase") && phrase !== "") {
					return highlightPhrase(string, phrase);	
				} else {
					return string;
				}
					
			}

			function escapeRegExp(str) {
				return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
 			}

			function highlightPhrase(string, phrase) {
				var escapedPhrase = escapeRegExp(phrase);
				return (string + "").replace(new RegExp("(" + escapedPhrase + ")", "gi") , "<b>$1</b>");
			}



		}
		function getContainerId() {
			
			var elementId = $field.attr("id");

			elementId = consts.getValue("CONTAINER_ID") + elementId;

			return elementId;
		}
		function bindEvents() {

			bindAllEvents();
			

			function bindAllEvents() {
				if (checkParam("autocompleteOff", true)) {
					removeAutocomplete();
				}

				bindFocusOut();
				bindKeyup();
				bindKeydown();
				bindKeypress();
				bindFocus();
				bindBlur();
			}

			function bindFocusOut() {
				$field.focusout(function () {

					var fieldValue = $field.val(),
						phrase;

					if (!config.get("list").match.caseSensitive) {
						fieldValue = fieldValue.toLowerCase();
					}

					for (var i = 0, length = elementsList.length; i < length; i += 1) {

						phrase = config.get("getValue")(elementsList[i]);
						if (!config.get("list").match.caseSensitive) {
							phrase = phrase.toLowerCase();
						}

						if (phrase === fieldValue) {
							selectedElement = i;
							selectElement(selectedElement);
							return;
						}
					}
				});
			}

			function bindKeyup() {
				$field
				.off("keyup")
				.keyup(function(event) {

					switch(event.keyCode) {

						case 27:

							hideContainer();
							loseFieldFocus();
						break;

						case 38:

							event.preventDefault();

							if(elementsList.length > 0 && selectedElement > 0) {

								selectedElement -= 1;

								$field.val(config.get("getValue")(elementsList[selectedElement]));

								selectElement(selectedElement);

							}						
						break;

						case 40:

							event.preventDefault();

							if(elementsList.length > 0 && selectedElement < elementsList.length - 1) {

								selectedElement += 1;

								$field.val(config.get("getValue")(elementsList[selectedElement]));

								selectElement(selectedElement);
								
							}

						break;

						default:

							if (event.keyCode > 40 || event.keyCode === 8) {

								var inputPhrase = $field.val();

								if (!(config.get("list").hideOnEmptyPhrase === true && event.keyCode === 8 && inputPhrase === "")) {

									if (config.get("requestDelay") > 0) {
										if (requestDelayTimeoutId !== undefined) {
											clearTimeout(requestDelayTimeoutId);
										}

										requestDelayTimeoutId = setTimeout(function () { loadData(inputPhrase);}, config.get("requestDelay"));
									} else {
										loadData(inputPhrase);
									}

								} else {
									hideContainer();
								}
								
							}


						break;
					}
				

					function loadData(inputPhrase) {


						if (inputPhrase.length < config.get("minCharNumber")) {
							return;
						}


						if (config.get("data") !== "list-required") {

							var data = config.get("data");

							var listBuilders = listBuilderService.init(data);

							listBuilders = listBuilderService.updateCategories(listBuilders, data);
							
							listBuilders = listBuilderService.processData(listBuilders, inputPhrase);

							loadElements(listBuilders, inputPhrase);

							if ($field.parent().find("li").length > 0) {
								showContainer();	
							} else {
								hideContainer();
							}

						}

						var settings = createAjaxSettings();

						if (settings.url === undefined || settings.url === "") {
							settings.url = config.get("url");
						}

						if (settings.dataType === undefined || settings.dataType === "") {
							settings.dataType = config.get("dataType");
						}


						if (settings.url !== undefined && settings.url !== "list-required") {

							settings.url = settings.url(inputPhrase);

							settings.data = config.get("preparePostData")(settings.data, inputPhrase);

							$.ajax(settings) 
								.done(function(data) {

									var listBuilders = listBuilderService.init(data);

									listBuilders = listBuilderService.updateCategories(listBuilders, data);
									
									listBuilders = listBuilderService.convertXml(listBuilders);
									if (checkInputPhraseMatchResponse(inputPhrase, data)) {

										listBuilders = listBuilderService.processData(listBuilders, inputPhrase);

										loadElements(listBuilders, inputPhrase);	
																				
									}

									if (listBuilderService.checkIfDataExists(listBuilders) && $field.parent().find("li").length > 0) {
										showContainer();	
									} else {
										hideContainer();
									}

									config.get("ajaxCallback")();

								})
								.fail(function() {
									logger.warning("Fail to load response data");
								})
								.always(function() {

								});
						}

						

						function createAjaxSettings() {

							var settings = {},
								ajaxSettings = config.get("ajaxSettings") || {};

							for (var set in ajaxSettings) {
								settings[set] = ajaxSettings[set];
							}

							return settings;
						}

						function checkInputPhraseMatchResponse(inputPhrase, data) {

							if (config.get("matchResponseProperty") !== false) {
								if (typeof config.get("matchResponseProperty") === "string") {
									return (data[config.get("matchResponseProperty")] === inputPhrase);
								}

								if (typeof config.get("matchResponseProperty") === "function") {
									return (config.get("matchResponseProperty")(data) === inputPhrase);
								}

								return true;
							} else {
								return true;
							}

						}

					}


				});
			}

			function bindKeydown() {
				$field
					.on("keydown", function(evt) {
	        		    evt = evt || window.event;
	        		    var keyCode = evt.keyCode;
	        		    if (keyCode === 38) {
	        		        suppressKeypress = true; 
	        		        return false;
	        		    }
		        	})
					.keydown(function(event) {

						if (event.keyCode === 13 && selectedElement > -1) {

							$field.val(config.get("getValue")(elementsList[selectedElement]));

							config.get("list").onKeyEnterEvent();
							config.get("list").onChooseEvent();

							selectedElement = -1;
							hideContainer();

							event.preventDefault();
						}
					});
			}

			function bindKeypress() {
				$field
				.off("keypress");
			}

			function bindFocus() {
				$field.focus(function() {

					if ($field.val() !== "" && elementsList.length > 0) {
						
						selectedElement = -1;
						showContainer();	
					}
									
				});
			}

			function bindBlur() {
				$field.blur(function() {
					setTimeout(function() { 
						
						selectedElement = -1;
						hideContainer();
					}, 250);
				});
			}

			function removeAutocomplete() {
				$field.attr("autocomplete","off");
			}

		}

		function showContainer() {
			$container.trigger("show.eac");
		}

		function hideContainer() {
			$container.trigger("hide.eac");
		}

		function selectElement(index) {
			
			$container.trigger("selectElement.eac", index);
		}

		function loadElements(list, phrase) {
			$container.trigger("loadElements.eac", [list, phrase]);
		}

		function loseFieldFocus() {
			$field.trigger("blur");
		}


	};
	scope.eacHandles = [];

	scope.getHandle = function(id) {
		return scope.eacHandles[id];
	};

	scope.inputHasId = function(input) {

		if($(input).attr("id") !== undefined && $(input).attr("id").length > 0) {
			return true;
		} else {
			return false;
		}

	};

	scope.assignRandomId = function(input) {

		var fieldId = "";

		do {
			fieldId = "eac-" + Math.floor(Math.random() * 10000);		
		} while ($("#" + fieldId).length !== 0);
		
		elementId = scope.consts.getValue("CONTAINER_ID") + fieldId;

		$(input).attr("id", fieldId);
 
	};

	scope.setHandle = function(handle, id) {
		scope.eacHandles[id] = handle;
	};


	return scope;

})(EasyAutocomplete || {});

(function($) {

	$.fn.easyAutocomplete = function(options) {

		return this.each(function() {
			var $this = $(this),
				eacHandle = new EasyAutocomplete.main($this, options);

			if (!EasyAutocomplete.inputHasId($this)) {
				EasyAutocomplete.assignRandomId($this);
			}

			eacHandle.init();

			EasyAutocomplete.setHandle(eacHandle, $this.attr("id"));

		});
	};

	$.fn.getSelectedItemIndex = function() {

		var inputId = $(this).attr("id");

		if (inputId !== undefined) {
			return EasyAutocomplete.getHandle(inputId).getSelectedItemIndex();
		}

		return -1;
	};

	$.fn.getItems = function () {

		var inputId = $(this).attr("id");

		if (inputId !== undefined) {
			return EasyAutocomplete.getHandle(inputId).getItems();
		}

		return -1;
	};

	$.fn.getItemData = function(index) {

		var inputId = $(this).attr("id");

		if (inputId !== undefined && index > -1) {
			return EasyAutocomplete.getHandle(inputId).getItemData(index);
		}

		return -1;
	};

	$.fn.getSelectedItemData = function() {

		var inputId = $(this).attr("id");

		if (inputId !== undefined) {
			return EasyAutocomplete.getHandle(inputId).getSelectedItemData();
		}

		return -1;
	};

})(jQuery);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYS1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Vudmlyb25tZW50LWlzLWlvcy1wZWJibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Vudmlyb25tZW50LWlzLWlvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW52aXJvbm1lbnQtaXMtbm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW52aXJvbm1lbnQtaXMtd2Vib3Mtd2Via2l0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaG9zdC1yZXBvcnQtZXJyb3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9taWNyb3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL25ldy1wcm9taXNlLWNhcGFiaWxpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3BlcmZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3Byb21pc2UtY29uc3RydWN0b3ItZGV0ZWN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9wcm9taXNlLW5hdGl2ZS1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcHJvbWlzZS1yZXNvbHZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9wcm9taXNlLXN0YXRpY3MtaW5jb3JyZWN0LWl0ZXJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcXVldWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NhZmUtZ2V0LWJ1aWx0LWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtc3BlY2llcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdmFsaWRhdGUtYXJndW1lbnRzLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnByb21pc2UuYWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMucHJvbWlzZS5jYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnByb21pc2UuY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5wcm9taXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMucHJvbWlzZS5yYWNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMucHJvbWlzZS5yZWplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5wcm9taXNlLnJlc29sdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Vhc3ktYXV0b2NvbXBsZXRlL2Rpc3QvanF1ZXJ5LmVhc3ktYXV0b2NvbXBsZXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiLG9CQUFvQixtQkFBTyxDQUFDLHVGQUE2QjtBQUN6RCxrQkFBa0IsbUJBQU8sQ0FBQyxxRkFBNEI7O0FBRXREOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNWYTtBQUNiLG9CQUFvQixtQkFBTyxDQUFDLHVHQUFxQzs7QUFFakU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNSYTtBQUNiLGdCQUFnQixtQkFBTyxDQUFDLHVHQUFxQzs7QUFFN0Q7Ozs7Ozs7Ozs7Ozs7QUNIYTtBQUNiLGdCQUFnQixtQkFBTyxDQUFDLHVHQUFxQzs7QUFFN0Q7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0phO0FBQ2Isa0JBQWtCLG1CQUFPLENBQUMsaUZBQTBCOztBQUVwRDs7Ozs7Ozs7Ozs7OztBQ0hhO0FBQ2IsZ0JBQWdCLG1CQUFPLENBQUMsdUdBQXFDOztBQUU3RDs7Ozs7Ozs7Ozs7OztBQ0hhO0FBQ2I7QUFDQSxpQkFBaUIsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDbkQsZ0JBQWdCLG1CQUFPLENBQUMsdUdBQXFDO0FBQzdELGNBQWMsbUJBQU8sQ0FBQyxpRkFBMEI7O0FBRWhEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNwQlk7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsZ0JBQWdCO0FBQ25COzs7Ozs7Ozs7Ozs7O0FDTmE7QUFDYixXQUFXLG1CQUFPLENBQUMscUdBQW9DO0FBQ3ZELFdBQVcsbUJBQU8sQ0FBQyxxRkFBNEI7QUFDL0MsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyxrQkFBa0IsbUJBQU8sQ0FBQyxxRkFBNEI7QUFDdEQsNEJBQTRCLG1CQUFPLENBQUMsMkdBQXVDO0FBQzNFLHdCQUF3QixtQkFBTyxDQUFDLG1HQUFtQztBQUNuRSxvQkFBb0IsbUJBQU8sQ0FBQyx1R0FBcUM7QUFDakUsa0JBQWtCLG1CQUFPLENBQUMsbUZBQTJCO0FBQ3JELHdCQUF3QixtQkFBTyxDQUFDLGlHQUFrQztBQUNsRSxvQkFBb0IsbUJBQU8sQ0FBQyx1RkFBNkI7O0FBRXpEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxnQkFBZ0I7QUFDM0U7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDcEVhO0FBQ2IsaUJBQWlCLG1CQUFPLENBQUMsaUZBQTBCO0FBQ25ELHFCQUFxQixtQkFBTyxDQUFDLDZGQUFnQztBQUM3RCxXQUFXLG1CQUFPLENBQUMscUdBQW9DO0FBQ3ZELGdCQUFnQixtQkFBTyxDQUFDLG1FQUFtQjtBQUMzQyxZQUFZLG1CQUFPLENBQUMscUVBQW9CO0FBQ3hDLGFBQWEsbUJBQU8sQ0FBQywrRkFBaUM7QUFDdEQsb0JBQW9CLG1CQUFPLENBQUMsNkdBQXdDO0FBQ3BFLHNCQUFzQixtQkFBTyxDQUFDLGlIQUEwQztBQUN4RSxjQUFjLG1CQUFPLENBQUMsaUdBQWtDOztBQUV4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLHNCQUFzQjtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDOUVhO0FBQ2IsZ0JBQWdCLG1CQUFPLENBQUMsK0VBQXlCOztBQUVqRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwQmE7QUFDYjtBQUNBO0FBQ0EsWUFBWTtBQUNaLEdBQUc7QUFDSCxZQUFZO0FBQ1o7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1BhO0FBQ2IsaUJBQWlCLG1CQUFPLENBQUMsaUZBQTBCO0FBQ25ELCtCQUErQixtQkFBTyxDQUFDLCtHQUF5QztBQUNoRixpQkFBaUIsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDbkQsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyxvQkFBb0IsbUJBQU8sQ0FBQyx1RkFBNkI7QUFDekQsc0JBQXNCLG1CQUFPLENBQUMsNkZBQWdDO0FBQzlELGtCQUFrQixtQkFBTyxDQUFDLGlGQUEwQjtBQUNwRCxjQUFjLG1CQUFPLENBQUMseUVBQXNCO0FBQzVDLGlCQUFpQixtQkFBTyxDQUFDLHVHQUFxQzs7QUFFOUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSxZQUFZLEVBQUU7QUFDakY7QUFDQSx3QkFBd0IsY0FBYyxlQUFlLGNBQWM7QUFDbkU7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLGNBQWM7QUFDMUQ7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5Q2E7QUFDYixpQkFBaUIsbUJBQU8sQ0FBQyxpRkFBMEI7O0FBRW5EOzs7Ozs7Ozs7Ozs7O0FDSGE7QUFDYixlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MsMkJBQTJCLG1CQUFPLENBQUMsdUdBQXFDOztBQUV4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDWmE7QUFDYiwrQkFBK0IsbUJBQU8sQ0FBQywrR0FBeUM7QUFDaEYsa0NBQWtDLG1CQUFPLENBQUMsdUhBQTZDO0FBQ3ZGLGlDQUFpQyxtQkFBTyxDQUFDLHFIQUE0Qzs7QUFFckY7QUFDQSxzRUFBc0UsY0FBYztBQUNwRixDQUFDOzs7Ozs7Ozs7Ozs7O0FDUFk7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ3hCYTtBQUNiLGlCQUFpQixtQkFBTyxDQUFDLGlGQUEwQjtBQUNuRCxrQkFBa0IsbUJBQU8sQ0FBQyxpRkFBMEI7O0FBRXBEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDWmE7QUFDYixpQkFBaUIsbUJBQU8sQ0FBQyxtRkFBMkI7QUFDcEQsNEJBQTRCLG1CQUFPLENBQUMsMkdBQXVDO0FBQzNFLHNCQUFzQixtQkFBTyxDQUFDLDZGQUFnQztBQUM5RCxrQkFBa0IsbUJBQU8sQ0FBQyxpRkFBMEI7O0FBRXBEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGFBQWE7QUFDckMsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqQmE7QUFDYixlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLG1CQUFtQixtQkFBTyxDQUFDLHFGQUE0QjtBQUN2RCx3QkFBd0IsbUJBQU8sQ0FBQyxtR0FBbUM7QUFDbkUsc0JBQXNCLG1CQUFPLENBQUMsNkZBQWdDOztBQUU5RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2RhO0FBQ2IsaUJBQWlCLG1CQUFPLENBQUMsaUZBQTBCO0FBQ25ELFlBQVksbUJBQU8sQ0FBQyx1RkFBNkI7QUFDakQsV0FBVyxtQkFBTyxDQUFDLHFHQUFvQztBQUN2RCxpQkFBaUIsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDbkQsYUFBYSxtQkFBTyxDQUFDLDJGQUErQjtBQUNwRCxZQUFZLG1CQUFPLENBQUMscUVBQW9CO0FBQ3hDLFdBQVcsbUJBQU8sQ0FBQyxtRUFBbUI7QUFDdEMsaUJBQWlCLG1CQUFPLENBQUMsaUZBQTBCO0FBQ25ELG9CQUFvQixtQkFBTyxDQUFDLHlHQUFzQztBQUNsRSw4QkFBOEIsbUJBQU8sQ0FBQyw2R0FBd0M7QUFDOUUsYUFBYSxtQkFBTyxDQUFDLCtGQUFpQztBQUN0RCxjQUFjLG1CQUFPLENBQUMsaUdBQWtDOztBQUV4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcEhhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNOYTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsV0FBVyxtQkFBTyxDQUFDLHFGQUE0QjtBQUMvQyxnQkFBZ0IsbUJBQU8sQ0FBQywrRUFBeUI7QUFDakQsaUNBQWlDLG1CQUFPLENBQUMsdUdBQXFDO0FBQzlFLGNBQWMsbUJBQU8sQ0FBQyx5RUFBc0I7QUFDNUMsY0FBYyxtQkFBTyxDQUFDLHlFQUFzQjtBQUM1QywwQ0FBMEMsbUJBQU8sQ0FBQyxpSUFBa0Q7O0FBRXBHO0FBQ0E7QUFDQSxHQUFHLDZFQUE2RTtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3RDWTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsY0FBYyxtQkFBTyxDQUFDLHlFQUFzQjtBQUM1QyxpQ0FBaUMsbUJBQU8sQ0FBQyxxSEFBNEM7QUFDckYsK0JBQStCLG1CQUFPLENBQUMsK0dBQXlDO0FBQ2hGLGlCQUFpQixtQkFBTyxDQUFDLG1GQUEyQjtBQUNwRCxpQkFBaUIsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDbkQsb0JBQW9CLG1CQUFPLENBQUMseUZBQThCOztBQUUxRDs7QUFFQTtBQUNBO0FBQ0EsR0FBRyxpRkFBaUY7QUFDcEY7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxlQUFlO0FBQzNFO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN6QmE7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGNBQWMsbUJBQU8sQ0FBQyx5RUFBc0I7QUFDNUMsY0FBYyxtQkFBTyxDQUFDLGlHQUFrQztBQUN4RCxpQkFBaUIsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDbkQsV0FBVyxtQkFBTyxDQUFDLG1FQUFtQjtBQUN0QyxXQUFXLG1CQUFPLENBQUMscUZBQTRCO0FBQy9DLG9CQUFvQixtQkFBTyxDQUFDLHlGQUE4QjtBQUMxRCxxQkFBcUIsbUJBQU8sQ0FBQyx5R0FBc0M7QUFDbkUscUJBQXFCLG1CQUFPLENBQUMsNkZBQWdDO0FBQzdELGlCQUFpQixtQkFBTyxDQUFDLGlGQUEwQjtBQUNuRCxnQkFBZ0IsbUJBQU8sQ0FBQywrRUFBeUI7QUFDakQsaUJBQWlCLG1CQUFPLENBQUMsaUZBQTBCO0FBQ25ELGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MsaUJBQWlCLG1CQUFPLENBQUMsaUZBQTBCO0FBQ25ELHlCQUF5QixtQkFBTyxDQUFDLGlHQUFrQztBQUNuRSxXQUFXLG1CQUFPLENBQUMsbUVBQW1CO0FBQ3RDLGdCQUFnQixtQkFBTyxDQUFDLDZFQUF3QjtBQUNoRCx1QkFBdUIsbUJBQU8sQ0FBQywrRkFBaUM7QUFDaEUsY0FBYyxtQkFBTyxDQUFDLHlFQUFzQjtBQUM1QyxZQUFZLG1CQUFPLENBQUMscUVBQW9CO0FBQ3hDLDBCQUEwQixtQkFBTyxDQUFDLHVGQUE2QjtBQUMvRCwrQkFBK0IsbUJBQU8sQ0FBQywrR0FBeUM7QUFDaEYsa0NBQWtDLG1CQUFPLENBQUMscUhBQTRDO0FBQ3RGLGlDQUFpQyxtQkFBTyxDQUFDLHVHQUFxQzs7QUFFOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsZUFBZTtBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsb0JBQW9CLGNBQWM7QUFDbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPLEdBQUcsZUFBZTtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLGdCQUFnQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHLGtGQUFrRjtBQUNyRjtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BTYTtBQUNiO0FBQ0EsbUJBQU8sQ0FBQyxtR0FBbUM7QUFDM0MsbUJBQU8sQ0FBQyxtRkFBMkI7QUFDbkMsbUJBQU8sQ0FBQyx1RkFBNkI7QUFDckMsbUJBQU8sQ0FBQyxxRkFBNEI7QUFDcEMsbUJBQU8sQ0FBQyx5RkFBOEI7QUFDdEMsbUJBQU8sQ0FBQywyRkFBK0I7Ozs7Ozs7Ozs7Ozs7QUNQMUI7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLFdBQVcsbUJBQU8sQ0FBQyxxRkFBNEI7QUFDL0MsZ0JBQWdCLG1CQUFPLENBQUMsK0VBQXlCO0FBQ2pELGlDQUFpQyxtQkFBTyxDQUFDLHVHQUFxQztBQUM5RSxjQUFjLG1CQUFPLENBQUMseUVBQXNCO0FBQzVDLGNBQWMsbUJBQU8sQ0FBQyx5RUFBc0I7QUFDNUMsMENBQTBDLG1CQUFPLENBQUMsaUlBQWtEOztBQUVwRztBQUNBO0FBQ0EsR0FBRyw2RUFBNkU7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3pCWTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsaUNBQWlDLG1CQUFPLENBQUMsdUdBQXFDO0FBQzlFLGlDQUFpQyxtQkFBTyxDQUFDLHFIQUE0Qzs7QUFFckY7QUFDQTtBQUNBLEdBQUcsb0VBQW9FO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNkWTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsaUJBQWlCLG1CQUFPLENBQUMsbUZBQTJCO0FBQ3BELGNBQWMsbUJBQU8sQ0FBQyx5RUFBc0I7QUFDNUMsK0JBQStCLG1CQUFPLENBQUMsK0dBQXlDO0FBQ2hGLGlDQUFpQyxtQkFBTyxDQUFDLHFIQUE0QztBQUNyRixxQkFBcUIsbUJBQU8sQ0FBQyx5RkFBOEI7O0FBRTNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUcsK0VBQStFO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ2pCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7O0FBRUo7O0FBRUE7QUFDQTtBQUNBLElBQUk7O0FBRUo7O0FBRUE7O0FBRUEsOEJBQThCOztBQUU5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLCtCQUErQjtBQUMvQixvQ0FBb0M7QUFDcEMsOEJBQThCO0FBQzlCLGdDQUFnQztBQUNoQyxrQ0FBa0M7QUFDbEMsbUNBQW1DO0FBQ25DLGtDQUFrQztBQUNsQyxrQ0FBa0M7QUFDbEM7QUFDQSxJQUFJOztBQUVKOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLG1CQUFtQjs7QUFFbkIsaURBQWlELGFBQWE7O0FBRTlEOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOztBQUVKOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBO0FBQ0Esb0Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBLEs7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLHVEQUF1RCxZQUFZLFU7O0FBRW5FOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEc7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsTztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLCtCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxDQUFDLHdCQUF3Qjs7O0FBR3pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxDQUFDLHdCQUF3Qjs7O0FBR3pCO0FBQ0E7QUFDQTtBQUNBLHdDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLENBQUMsd0JBQXdCOztBQUV6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxrQkFBa0IsNENBQTRDOztBQUU5RDs7QUFFQTtBQUNBOztBQUVBLEk7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsOENBQThDLFlBQVk7QUFDMUQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLCtDQUErQyxZQUFZOztBQUUzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEs7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxJQUFJO0FBQ0oscUQ7QUFDQTs7O0FBR0E7OztBQUdBOztBQUVBLG9CQUFvQjtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxDQUFDLHdCQUF3Qjs7O0FBR3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0Esd0JBQXdCOztBQUV4QjtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx3Q0FBd0MsWUFBWTs7QUFFcEQ7O0FBRUE7QUFDQSxpQztBQUNBOztBQUVBOztBQUVBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxpQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBOzs7QUFHQSxDQUFDLHdCQUF3Qjs7O0FBR3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsZ0JBQWdCLEVBQUU7QUFDakQ7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsK0JBQStCLG1DQUFtQyxFQUFFO0FBQ3BFO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLEdBQUc7Ozs7QUFJSDtBQUNBLDRCQUE0QixNQUFNO0FBQ2xDO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUEsc0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsTztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7OztBQUdIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0EseUNBQXlDOztBQUV6Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0EseUI7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QixLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBLENBQUMsd0JBQXdCOzs7QUFHekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLGdCOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLEk7O0FBRUE7QUFDQSxxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLDBCO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUEsNkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEVBQTBFLG1DQUFtQzs7QUFFN0c7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx3REFBd0Qsd0VBQXdFO0FBQ2hJOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBLHVDOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQSxVQUFVOztBQUVWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxPQUFPOztBQUVQLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSw0QztBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0EsbUNBQW1DLEVBQUU7QUFDckM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrREFBa0QsWUFBWTs7QUFFOUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxRO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMERBQTBELHdCQUF3QjtBQUNsRixVQUFVO0FBQ1Y7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSx3QjtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxrRDs7QUFFQTs7QUFFQTtBQUNBLDBCO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUEsU0FBUztBQUNUOzs7O0FBSUE7O0FBRUEsd0JBQXdCO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBOztBQUVBOzs7QUFHQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkM7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQjtBQUNBOztBQUVBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsNEI7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTixLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSx3RDtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQSxDQUFDLHdCQUF3Qjs7QUFFekI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsQ0FBQyIsImZpbGUiOiJ2ZW5kb3JzfmVhc3lhdXRvY29tcGxldGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG52YXIgaXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jb25zdHJ1Y3RvcicpO1xudmFyIHRyeVRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RyeS10by1zdHJpbmcnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBBc3NlcnQ6IElzQ29uc3RydWN0b3IoYXJndW1lbnQpIGlzIHRydWVgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNDb25zdHJ1Y3Rvcihhcmd1bWVudCkpIHJldHVybiBhcmd1bWVudDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IodHJ5VG9TdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYSBjb25zdHJ1Y3RvcicpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBpc1Byb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBQcm90b3R5cGUpIHtcbiAgaWYgKGlzUHJvdG90eXBlT2YoUHJvdG90eXBlLCBpdCkpIHJldHVybiBpdDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0luY29ycmVjdCBpbnZvY2F0aW9uJyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnZpcm9ubWVudC11c2VyLWFnZW50Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gL2lwYWR8aXBob25lfGlwb2QvaS50ZXN0KHVzZXJBZ2VudCkgJiYgdHlwZW9mIFBlYmJsZSAhPSAndW5kZWZpbmVkJztcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdXNlci1hZ2VudCcpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVkb3Mvbm8tdnVsbmVyYWJsZSAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IC8oPzppcGFkfGlwaG9uZXxpcG9kKS4qYXBwbGV3ZWJraXQvaS50ZXN0KHVzZXJBZ2VudCk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgRU5WSVJPTk1FTlQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW52aXJvbm1lbnQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBFTlZJUk9OTUVOVCA9PT0gJ05PREUnO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnZpcm9ubWVudC11c2VyLWFnZW50Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gL3dlYjBzKD8hLipjaHJvbWUpL2kudGVzdCh1c2VyQWdlbnQpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLyogZ2xvYmFsIEJ1biwgRGVubyAtLSBkZXRlY3Rpb24gKi9cbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Vudmlyb25tZW50LXVzZXItYWdlbnQnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbnZhciB1c2VyQWdlbnRTdGFydHNXaXRoID0gZnVuY3Rpb24gKHN0cmluZykge1xuICByZXR1cm4gdXNlckFnZW50LnNsaWNlKDAsIHN0cmluZy5sZW5ndGgpID09PSBzdHJpbmc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbiAoKSB7XG4gIGlmICh1c2VyQWdlbnRTdGFydHNXaXRoKCdCdW4vJykpIHJldHVybiAnQlVOJztcbiAgaWYgKHVzZXJBZ2VudFN0YXJ0c1dpdGgoJ0Nsb3VkZmxhcmUtV29ya2VycycpKSByZXR1cm4gJ0NMT1VERkxBUkUnO1xuICBpZiAodXNlckFnZW50U3RhcnRzV2l0aCgnRGVuby8nKSkgcmV0dXJuICdERU5PJztcbiAgaWYgKHVzZXJBZ2VudFN0YXJ0c1dpdGgoJ05vZGUuanMvJykpIHJldHVybiAnTk9ERSc7XG4gIGlmIChnbG9iYWxUaGlzLkJ1biAmJiB0eXBlb2YgQnVuLnZlcnNpb24gPT0gJ3N0cmluZycpIHJldHVybiAnQlVOJztcbiAgaWYgKGdsb2JhbFRoaXMuRGVubyAmJiB0eXBlb2YgRGVuby52ZXJzaW9uID09ICdvYmplY3QnKSByZXR1cm4gJ0RFTk8nO1xuICBpZiAoY2xhc3NvZihnbG9iYWxUaGlzLnByb2Nlc3MpID09PSAncHJvY2VzcycpIHJldHVybiAnTk9ERSc7XG4gIGlmIChnbG9iYWxUaGlzLndpbmRvdyAmJiBnbG9iYWxUaGlzLmRvY3VtZW50KSByZXR1cm4gJ0JST1dTRVInO1xuICByZXR1cm4gJ1JFU1QnO1xufSkoKTtcbiIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgdHJ5IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZSAtLSBzYWZlXG4gICAgYXJndW1lbnRzLmxlbmd0aCA9PT0gMSA/IGNvbnNvbGUuZXJyb3IoYSkgOiBjb25zb2xlLmVycm9yKGEsIGIpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xudmFyIGlzQXJyYXlJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheS1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xudmFyIGlzUHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWlzLXByb3RvdHlwZS1vZicpO1xudmFyIGdldEl0ZXJhdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvcicpO1xudmFyIGdldEl0ZXJhdG9yTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBpdGVyYXRvckNsb3NlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWNsb3NlJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG52YXIgUmVzdWx0ID0gZnVuY3Rpb24gKHN0b3BwZWQsIHJlc3VsdCkge1xuICB0aGlzLnN0b3BwZWQgPSBzdG9wcGVkO1xuICB0aGlzLnJlc3VsdCA9IHJlc3VsdDtcbn07XG5cbnZhciBSZXN1bHRQcm90b3R5cGUgPSBSZXN1bHQucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgdW5ib3VuZEZ1bmN0aW9uLCBvcHRpb25zKSB7XG4gIHZhciB0aGF0ID0gb3B0aW9ucyAmJiBvcHRpb25zLnRoYXQ7XG4gIHZhciBBU19FTlRSSUVTID0gISEob3B0aW9ucyAmJiBvcHRpb25zLkFTX0VOVFJJRVMpO1xuICB2YXIgSVNfUkVDT1JEID0gISEob3B0aW9ucyAmJiBvcHRpb25zLklTX1JFQ09SRCk7XG4gIHZhciBJU19JVEVSQVRPUiA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5JU19JVEVSQVRPUik7XG4gIHZhciBJTlRFUlJVUFRFRCA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5JTlRFUlJVUFRFRCk7XG4gIHZhciBmbiA9IGJpbmQodW5ib3VuZEZ1bmN0aW9uLCB0aGF0KTtcbiAgdmFyIGl0ZXJhdG9yLCBpdGVyRm4sIGluZGV4LCBsZW5ndGgsIHJlc3VsdCwgbmV4dCwgc3RlcDtcblxuICB2YXIgc3RvcCA9IGZ1bmN0aW9uIChjb25kaXRpb24pIHtcbiAgICBpZiAoaXRlcmF0b3IpIGl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsICdub3JtYWwnKTtcbiAgICByZXR1cm4gbmV3IFJlc3VsdCh0cnVlLCBjb25kaXRpb24pO1xuICB9O1xuXG4gIHZhciBjYWxsRm4gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAoQVNfRU5UUklFUykge1xuICAgICAgYW5PYmplY3QodmFsdWUpO1xuICAgICAgcmV0dXJuIElOVEVSUlVQVEVEID8gZm4odmFsdWVbMF0sIHZhbHVlWzFdLCBzdG9wKSA6IGZuKHZhbHVlWzBdLCB2YWx1ZVsxXSk7XG4gICAgfSByZXR1cm4gSU5URVJSVVBURUQgPyBmbih2YWx1ZSwgc3RvcCkgOiBmbih2YWx1ZSk7XG4gIH07XG5cbiAgaWYgKElTX1JFQ09SRCkge1xuICAgIGl0ZXJhdG9yID0gaXRlcmFibGUuaXRlcmF0b3I7XG4gIH0gZWxzZSBpZiAoSVNfSVRFUkFUT1IpIHtcbiAgICBpdGVyYXRvciA9IGl0ZXJhYmxlO1xuICB9IGVsc2Uge1xuICAgIGl0ZXJGbiA9IGdldEl0ZXJhdG9yTWV0aG9kKGl0ZXJhYmxlKTtcbiAgICBpZiAoIWl0ZXJGbikgdGhyb3cgbmV3ICRUeXBlRXJyb3IodHJ5VG9TdHJpbmcoaXRlcmFibGUpICsgJyBpcyBub3QgaXRlcmFibGUnKTtcbiAgICAvLyBvcHRpbWlzYXRpb24gZm9yIGFycmF5IGl0ZXJhdG9yc1xuICAgIGlmIChpc0FycmF5SXRlcmF0b3JNZXRob2QoaXRlckZuKSkge1xuICAgICAgZm9yIChpbmRleCA9IDAsIGxlbmd0aCA9IGxlbmd0aE9mQXJyYXlMaWtlKGl0ZXJhYmxlKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgICAgcmVzdWx0ID0gY2FsbEZuKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgICAgIGlmIChyZXN1bHQgJiYgaXNQcm90b3R5cGVPZihSZXN1bHRQcm90b3R5cGUsIHJlc3VsdCkpIHJldHVybiByZXN1bHQ7XG4gICAgICB9IHJldHVybiBuZXcgUmVzdWx0KGZhbHNlKTtcbiAgICB9XG4gICAgaXRlcmF0b3IgPSBnZXRJdGVyYXRvcihpdGVyYWJsZSwgaXRlckZuKTtcbiAgfVxuXG4gIG5leHQgPSBJU19SRUNPUkQgPyBpdGVyYWJsZS5uZXh0IDogaXRlcmF0b3IubmV4dDtcbiAgd2hpbGUgKCEoc3RlcCA9IGNhbGwobmV4dCwgaXRlcmF0b3IpKS5kb25lKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9IGNhbGxGbihzdGVwLnZhbHVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaXRlcmF0b3JDbG9zZShpdGVyYXRvciwgJ3Rocm93JywgZXJyb3IpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHJlc3VsdCA9PSAnb2JqZWN0JyAmJiByZXN1bHQgJiYgaXNQcm90b3R5cGVPZihSZXN1bHRQcm90b3R5cGUsIHJlc3VsdCkpIHJldHVybiByZXN1bHQ7XG4gIH0gcmV0dXJuIG5ldyBSZXN1bHQoZmFsc2UpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgc2FmZUdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2FmZS1nZXQtYnVpbHQtaW4nKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtY29udGV4dCcpO1xudmFyIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90YXNrJykuc2V0O1xudmFyIFF1ZXVlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3F1ZXVlJyk7XG52YXIgSVNfSU9TID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Vudmlyb25tZW50LWlzLWlvcycpO1xudmFyIElTX0lPU19QRUJCTEUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW52aXJvbm1lbnQtaXMtaW9zLXBlYmJsZScpO1xudmFyIElTX1dFQk9TX1dFQktJVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnZpcm9ubWVudC1pcy13ZWJvcy13ZWJraXQnKTtcbnZhciBJU19OT0RFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Vudmlyb25tZW50LWlzLW5vZGUnKTtcblxudmFyIE11dGF0aW9uT2JzZXJ2ZXIgPSBnbG9iYWxUaGlzLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsVGhpcy5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xudmFyIGRvY3VtZW50ID0gZ2xvYmFsVGhpcy5kb2N1bWVudDtcbnZhciBwcm9jZXNzID0gZ2xvYmFsVGhpcy5wcm9jZXNzO1xudmFyIFByb21pc2UgPSBnbG9iYWxUaGlzLlByb21pc2U7XG52YXIgbWljcm90YXNrID0gc2FmZUdldEJ1aWx0SW4oJ3F1ZXVlTWljcm90YXNrJyk7XG52YXIgbm90aWZ5LCB0b2dnbGUsIG5vZGUsIHByb21pc2UsIHRoZW47XG5cbi8vIG1vZGVybiBlbmdpbmVzIGhhdmUgcXVldWVNaWNyb3Rhc2sgbWV0aG9kXG5pZiAoIW1pY3JvdGFzaykge1xuICB2YXIgcXVldWUgPSBuZXcgUXVldWUoKTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYgKElTX05PREUgJiYgKHBhcmVudCA9IHByb2Nlc3MuZG9tYWluKSkgcGFyZW50LmV4aXQoKTtcbiAgICB3aGlsZSAoZm4gPSBxdWV1ZS5nZXQoKSkgdHJ5IHtcbiAgICAgIGZuKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmIChxdWV1ZS5oZWFkKSBub3RpZnkoKTtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgICBpZiAocGFyZW50KSBwYXJlbnQuZW50ZXIoKTtcbiAgfTtcblxuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXIsIGV4Y2VwdCBpT1MgLSBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMzM5XG4gIC8vIGFsc28gZXhjZXB0IFdlYk9TIFdlYmtpdCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODk4XG4gIGlmICghSVNfSU9TICYmICFJU19OT0RFICYmICFJU19XRUJPU19XRUJLSVQgJiYgTXV0YXRpb25PYnNlcnZlciAmJiBkb2N1bWVudCkge1xuICAgIHRvZ2dsZSA9IHRydWU7XG4gICAgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgTXV0YXRpb25PYnNlcnZlcihmbHVzaCkub2JzZXJ2ZShub2RlLCB7IGNoYXJhY3RlckRhdGE6IHRydWUgfSk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlID0gIXRvZ2dsZTtcbiAgICB9O1xuICAvLyBlbnZpcm9ubWVudHMgd2l0aCBtYXliZSBub24tY29tcGxldGVseSBjb3JyZWN0LCBidXQgZXhpc3RlbnQgUHJvbWlzZVxuICB9IGVsc2UgaWYgKCFJU19JT1NfUEVCQkxFICYmIFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKSB7XG4gICAgLy8gUHJvbWlzZS5yZXNvbHZlIHdpdGhvdXQgYW4gYXJndW1lbnQgdGhyb3dzIGFuIGVycm9yIGluIExHIFdlYk9TIDJcbiAgICBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgLy8gd29ya2Fyb3VuZCBvZiBXZWJLaXQgfiBpT1MgU2FmYXJpIDEwLjEgYnVnXG4gICAgcHJvbWlzZS5jb25zdHJ1Y3RvciA9IFByb21pc2U7XG4gICAgdGhlbiA9IGJpbmQocHJvbWlzZS50aGVuLCBwcm9taXNlKTtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGVuKGZsdXNoKTtcbiAgICB9O1xuICAvLyBOb2RlLmpzIHdpdGhvdXQgcHJvbWlzZXNcbiAgfSBlbHNlIGlmIChJU19OT0RFKSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gICAgfTtcbiAgLy8gZm9yIG90aGVyIGVudmlyb25tZW50cyAtIG1hY3JvdGFzayBiYXNlZCBvbjpcbiAgLy8gLSBzZXRJbW1lZGlhdGVcbiAgLy8gLSBNZXNzYWdlQ2hhbm5lbFxuICAvLyAtIHdpbmRvdy5wb3N0TWVzc2FnZVxuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICAvLyBgd2VicGFja2AgZGV2IHNlcnZlciBidWcgb24gSUUgZ2xvYmFsIG1ldGhvZHMgLSB1c2UgYmluZChmbiwgZ2xvYmFsKVxuICAgIG1hY3JvdGFzayA9IGJpbmQobWFjcm90YXNrLCBnbG9iYWxUaGlzKTtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBtYWNyb3Rhc2soZmx1c2gpO1xuICAgIH07XG4gIH1cblxuICBtaWNyb3Rhc2sgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICBpZiAoIXF1ZXVlLmhlYWQpIG5vdGlmeSgpO1xuICAgIHF1ZXVlLmFkZChmbik7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWljcm90YXNrO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG52YXIgUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoQykge1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbiAoJCRyZXNvbHZlLCAkJHJlamVjdCkge1xuICAgIGlmIChyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpIHRocm93IG5ldyAkVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhQ2FsbGFibGUocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ID0gYUNhbGxhYmxlKHJlamVjdCk7XG59O1xuXG4vLyBgTmV3UHJvbWlzZUNhcGFiaWxpdHlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1uZXdwcm9taXNlY2FwYWJpbGl0eVxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIChDKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiB7IGVycm9yOiBmYWxzZSwgdmFsdWU6IGV4ZWMoKSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7IGVycm9yOiB0cnVlLCB2YWx1ZTogZXJyb3IgfTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgTmF0aXZlUHJvbWlzZUNvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Byb21pc2UtbmF0aXZlLWNvbnN0cnVjdG9yJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xudmFyIGluc3BlY3RTb3VyY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBFTlZJUk9OTUVOVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnZpcm9ubWVudCcpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdjgtdmVyc2lvbicpO1xuXG52YXIgTmF0aXZlUHJvbWlzZVByb3RvdHlwZSA9IE5hdGl2ZVByb21pc2VDb25zdHJ1Y3RvciAmJiBOYXRpdmVQcm9taXNlQ29uc3RydWN0b3IucHJvdG90eXBlO1xudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcbnZhciBTVUJDTEFTU0lORyA9IGZhbHNlO1xudmFyIE5BVElWRV9QUk9NSVNFX1JFSkVDVElPTl9FVkVOVCA9IGlzQ2FsbGFibGUoZ2xvYmFsVGhpcy5Qcm9taXNlUmVqZWN0aW9uRXZlbnQpO1xuXG52YXIgRk9SQ0VEX1BST01JU0VfQ09OU1RSVUNUT1IgPSBpc0ZvcmNlZCgnUHJvbWlzZScsIGZ1bmN0aW9uICgpIHtcbiAgdmFyIFBST01JU0VfQ09OU1RSVUNUT1JfU09VUkNFID0gaW5zcGVjdFNvdXJjZShOYXRpdmVQcm9taXNlQ29uc3RydWN0b3IpO1xuICB2YXIgR0xPQkFMX0NPUkVfSlNfUFJPTUlTRSA9IFBST01JU0VfQ09OU1RSVUNUT1JfU09VUkNFICE9PSBTdHJpbmcoTmF0aXZlUHJvbWlzZUNvbnN0cnVjdG9yKTtcbiAgLy8gVjggNi42IChOb2RlIDEwIGFuZCBDaHJvbWUgNjYpIGhhdmUgYSBidWcgd2l0aCByZXNvbHZpbmcgY3VzdG9tIHRoZW5hYmxlc1xuICAvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD04MzA1NjVcbiAgLy8gV2UgY2FuJ3QgZGV0ZWN0IGl0IHN5bmNocm9ub3VzbHksIHNvIGp1c3QgY2hlY2sgdmVyc2lvbnNcbiAgaWYgKCFHTE9CQUxfQ09SRV9KU19QUk9NSVNFICYmIFY4X1ZFUlNJT04gPT09IDY2KSByZXR1cm4gdHJ1ZTtcbiAgLy8gV2UgbmVlZCBQcm9taXNlI3sgY2F0Y2gsIGZpbmFsbHkgfSBpbiB0aGUgcHVyZSB2ZXJzaW9uIGZvciBwcmV2ZW50aW5nIHByb3RvdHlwZSBwb2xsdXRpb25cbiAgaWYgKElTX1BVUkUgJiYgIShOYXRpdmVQcm9taXNlUHJvdG90eXBlWydjYXRjaCddICYmIE5hdGl2ZVByb21pc2VQcm90b3R5cGVbJ2ZpbmFsbHknXSkpIHJldHVybiB0cnVlO1xuICAvLyBXZSBjYW4ndCB1c2UgQEBzcGVjaWVzIGZlYXR1cmUgZGV0ZWN0aW9uIGluIFY4IHNpbmNlIGl0IGNhdXNlc1xuICAvLyBkZW9wdGltaXphdGlvbiBhbmQgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3OVxuICBpZiAoIVY4X1ZFUlNJT04gfHwgVjhfVkVSU0lPTiA8IDUxIHx8ICEvbmF0aXZlIGNvZGUvLnRlc3QoUFJPTUlTRV9DT05TVFJVQ1RPUl9TT1VSQ0UpKSB7XG4gICAgLy8gRGV0ZWN0IGNvcnJlY3RuZXNzIG9mIHN1YmNsYXNzaW5nIHdpdGggQEBzcGVjaWVzIHN1cHBvcnRcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBOYXRpdmVQcm9taXNlQ29uc3RydWN0b3IoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSgxKTsgfSk7XG4gICAgdmFyIEZha2VQcm9taXNlID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgICAgIGV4ZWMoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0pO1xuICAgIH07XG4gICAgdmFyIGNvbnN0cnVjdG9yID0gcHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9O1xuICAgIGNvbnN0cnVjdG9yW1NQRUNJRVNdID0gRmFrZVByb21pc2U7XG4gICAgU1VCQ0xBU1NJTkcgPSBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlO1xuICAgIGlmICghU1VCQ0xBU1NJTkcpIHJldHVybiB0cnVlO1xuICAvLyBVbmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gIH0gcmV0dXJuICFHTE9CQUxfQ09SRV9KU19QUk9NSVNFICYmIChFTlZJUk9OTUVOVCA9PT0gJ0JST1dTRVInIHx8IEVOVklST05NRU5UID09PSAnREVOTycpICYmICFOQVRJVkVfUFJPTUlTRV9SRUpFQ1RJT05fRVZFTlQ7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIENPTlNUUlVDVE9SOiBGT1JDRURfUFJPTUlTRV9DT05TVFJVQ1RPUixcbiAgUkVKRUNUSU9OX0VWRU5UOiBOQVRJVkVfUFJPTUlTRV9SRUpFQ1RJT05fRVZFTlQsXG4gIFNVQkNMQVNTSU5HOiBTVUJDTEFTU0lOR1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2xvYmFsVGhpcy5Qcm9taXNlO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQywgeCkge1xuICBhbk9iamVjdChDKTtcbiAgaWYgKGlzT2JqZWN0KHgpICYmIHguY29uc3RydWN0b3IgPT09IEMpIHJldHVybiB4O1xuICB2YXIgcHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eS5mKEMpO1xuICB2YXIgcmVzb2x2ZSA9IHByb21pc2VDYXBhYmlsaXR5LnJlc29sdmU7XG4gIHJlc29sdmUoeCk7XG4gIHJldHVybiBwcm9taXNlQ2FwYWJpbGl0eS5wcm9taXNlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBOYXRpdmVQcm9taXNlQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcHJvbWlzZS1uYXRpdmUtY29uc3RydWN0b3InKTtcbnZhciBjaGVja0NvcnJlY3RuZXNzT2ZJdGVyYXRpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2hlY2stY29ycmVjdG5lc3Mtb2YtaXRlcmF0aW9uJyk7XG52YXIgRk9SQ0VEX1BST01JU0VfQ09OU1RSVUNUT1IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcHJvbWlzZS1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24nKS5DT05TVFJVQ1RPUjtcblxubW9kdWxlLmV4cG9ydHMgPSBGT1JDRURfUFJPTUlTRV9DT05TVFJVQ1RPUiB8fCAhY2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uKGZ1bmN0aW9uIChpdGVyYWJsZSkge1xuICBOYXRpdmVQcm9taXNlQ29uc3RydWN0b3IuYWxsKGl0ZXJhYmxlKS50aGVuKHVuZGVmaW5lZCwgZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9KTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIFF1ZXVlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmhlYWQgPSBudWxsO1xuICB0aGlzLnRhaWwgPSBudWxsO1xufTtcblxuUXVldWUucHJvdG90eXBlID0ge1xuICBhZGQ6IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgdmFyIGVudHJ5ID0geyBpdGVtOiBpdGVtLCBuZXh0OiBudWxsIH07XG4gICAgdmFyIHRhaWwgPSB0aGlzLnRhaWw7XG4gICAgaWYgKHRhaWwpIHRhaWwubmV4dCA9IGVudHJ5O1xuICAgIGVsc2UgdGhpcy5oZWFkID0gZW50cnk7XG4gICAgdGhpcy50YWlsID0gZW50cnk7XG4gIH0sXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHZhciBlbnRyeSA9IHRoaXMuaGVhZDtcbiAgICBpZiAoZW50cnkpIHtcbiAgICAgIHZhciBuZXh0ID0gdGhpcy5oZWFkID0gZW50cnkubmV4dDtcbiAgICAgIGlmIChuZXh0ID09PSBudWxsKSB0aGlzLnRhaWwgPSBudWxsO1xuICAgICAgcmV0dXJuIGVudHJ5Lml0ZW07XG4gICAgfVxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFF1ZXVlO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gQXZvaWQgTm9kZUpTIGV4cGVyaW1lbnRhbCB3YXJuaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGlmICghREVTQ1JJUFRPUlMpIHJldHVybiBnbG9iYWxUaGlzW25hbWVdO1xuICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihnbG9iYWxUaGlzLCBuYW1lKTtcbiAgcmV0dXJuIGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci52YWx1ZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVCdWlsdEluQWNjZXNzb3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluLWFjY2Vzc29yJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ09OU1RSVUNUT1JfTkFNRSkge1xuICB2YXIgQ29uc3RydWN0b3IgPSBnZXRCdWlsdEluKENPTlNUUlVDVE9SX05BTUUpO1xuXG4gIGlmIChERVNDUklQVE9SUyAmJiBDb25zdHJ1Y3RvciAmJiAhQ29uc3RydWN0b3JbU1BFQ0lFU10pIHtcbiAgICBkZWZpbmVCdWlsdEluQWNjZXNzb3IoQ29uc3RydWN0b3IsIFNQRUNJRVMsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfVxuICAgIH0pO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGFDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNvbnN0cnVjdG9yJyk7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxuLy8gYFNwZWNpZXNDb25zdHJ1Y3RvcmAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXNwZWNpZXNjb25zdHJ1Y3RvclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywgZGVmYXVsdENvbnN0cnVjdG9yKSB7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3I7XG4gIHZhciBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IGlzTnVsbE9yVW5kZWZpbmVkKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPyBkZWZhdWx0Q29uc3RydWN0b3IgOiBhQ29uc3RydWN0b3IoUyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBhcHBseSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1hcHBseScpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0Jyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2h0bWwnKTtcbnZhciBhcnJheVNsaWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNsaWNlJyk7XG52YXIgY3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xudmFyIHZhbGlkYXRlQXJndW1lbnRzTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3ZhbGlkYXRlLWFyZ3VtZW50cy1sZW5ndGgnKTtcbnZhciBJU19JT1MgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW52aXJvbm1lbnQtaXMtaW9zJyk7XG52YXIgSVNfTk9ERSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnZpcm9ubWVudC1pcy1ub2RlJyk7XG5cbnZhciBzZXQgPSBnbG9iYWxUaGlzLnNldEltbWVkaWF0ZTtcbnZhciBjbGVhciA9IGdsb2JhbFRoaXMuY2xlYXJJbW1lZGlhdGU7XG52YXIgcHJvY2VzcyA9IGdsb2JhbFRoaXMucHJvY2VzcztcbnZhciBEaXNwYXRjaCA9IGdsb2JhbFRoaXMuRGlzcGF0Y2g7XG52YXIgRnVuY3Rpb24gPSBnbG9iYWxUaGlzLkZ1bmN0aW9uO1xudmFyIE1lc3NhZ2VDaGFubmVsID0gZ2xvYmFsVGhpcy5NZXNzYWdlQ2hhbm5lbDtcbnZhciBTdHJpbmcgPSBnbG9iYWxUaGlzLlN0cmluZztcbnZhciBjb3VudGVyID0gMDtcbnZhciBxdWV1ZSA9IHt9O1xudmFyIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xudmFyICRsb2NhdGlvbiwgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG5cbmZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gRGVubyB0aHJvd3MgYSBSZWZlcmVuY2VFcnJvciBvbiBgbG9jYXRpb25gIGFjY2VzcyB3aXRob3V0IGAtLWxvY2F0aW9uYCBmbGFnXG4gICRsb2NhdGlvbiA9IGdsb2JhbFRoaXMubG9jYXRpb247XG59KTtcblxudmFyIHJ1biA9IGZ1bmN0aW9uIChpZCkge1xuICBpZiAoaGFzT3duKHF1ZXVlLCBpZCkpIHtcbiAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgICBmbigpO1xuICB9XG59O1xuXG52YXIgcnVubmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcnVuKGlkKTtcbiAgfTtcbn07XG5cbnZhciBldmVudExpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHJ1bihldmVudC5kYXRhKTtcbn07XG5cbnZhciBnbG9iYWxQb3N0TWVzc2FnZURlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gIC8vIG9sZCBlbmdpbmVzIGhhdmUgbm90IGxvY2F0aW9uLm9yaWdpblxuICBnbG9iYWxUaGlzLnBvc3RNZXNzYWdlKFN0cmluZyhpZCksICRsb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyAkbG9jYXRpb24uaG9zdCk7XG59O1xuXG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZiAoIXNldCB8fCAhY2xlYXIpIHtcbiAgc2V0ID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGhhbmRsZXIpIHtcbiAgICB2YWxpZGF0ZUFyZ3VtZW50c0xlbmd0aChhcmd1bWVudHMubGVuZ3RoLCAxKTtcbiAgICB2YXIgZm4gPSBpc0NhbGxhYmxlKGhhbmRsZXIpID8gaGFuZGxlciA6IEZ1bmN0aW9uKGhhbmRsZXIpO1xuICAgIHZhciBhcmdzID0gYXJyYXlTbGljZShhcmd1bWVudHMsIDEpO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBhcHBseShmbiwgdW5kZWZpbmVkLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhciA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKSB7XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgfTtcbiAgLy8gTm9kZS5qcyAwLjgtXG4gIGlmIChJU19OT0RFKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2socnVubmVyKGlkKSk7XG4gICAgfTtcbiAgLy8gU3BoZXJlIChKUyBnYW1lIGVuZ2luZSkgRGlzcGF0Y2ggQVBJXG4gIH0gZWxzZSBpZiAoRGlzcGF0Y2ggJiYgRGlzcGF0Y2gubm93KSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIERpc3BhdGNoLm5vdyhydW5uZXIoaWQpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIC8vIGV4Y2VwdCBpT1MgLSBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNjI0XG4gIH0gZWxzZSBpZiAoTWVzc2FnZUNoYW5uZWwgJiYgIUlTX0lPUykge1xuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICBwb3J0ID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGV2ZW50TGlzdGVuZXI7XG4gICAgZGVmZXIgPSBiaW5kKHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmIChcbiAgICBnbG9iYWxUaGlzLmFkZEV2ZW50TGlzdGVuZXIgJiZcbiAgICBpc0NhbGxhYmxlKGdsb2JhbFRoaXMucG9zdE1lc3NhZ2UpICYmXG4gICAgIWdsb2JhbFRoaXMuaW1wb3J0U2NyaXB0cyAmJlxuICAgICRsb2NhdGlvbiAmJiAkbG9jYXRpb24ucHJvdG9jb2wgIT09ICdmaWxlOicgJiZcbiAgICAhZmFpbHMoZ2xvYmFsUG9zdE1lc3NhZ2VEZWZlcilcbiAgKSB7XG4gICAgZGVmZXIgPSBnbG9iYWxQb3N0TWVzc2FnZURlZmVyO1xuICAgIGdsb2JhbFRoaXMuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGV2ZW50TGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYgKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjcmVhdGVFbGVtZW50KCdzY3JpcHQnKSkge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4oaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBzZXRUaW1lb3V0KHJ1bm5lcihpZCksIDApO1xuICAgIH07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0LFxuICBjbGVhcjogY2xlYXJcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocGFzc2VkLCByZXF1aXJlZCkge1xuICBpZiAocGFzc2VkIDwgcmVxdWlyZWQpIHRocm93IG5ldyAkVHlwZUVycm9yKCdOb3QgZW5vdWdoIGFyZ3VtZW50cycpO1xuICByZXR1cm4gcGFzc2VkO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcGVyZm9ybScpO1xudmFyIGl0ZXJhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0ZScpO1xudmFyIFBST01JU0VfU1RBVElDU19JTkNPUlJFQ1RfSVRFUkFUSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Byb21pc2Utc3RhdGljcy1pbmNvcnJlY3QtaXRlcmF0aW9uJyk7XG5cbi8vIGBQcm9taXNlLmFsbGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXByb21pc2UuYWxsXG4kKHsgdGFyZ2V0OiAnUHJvbWlzZScsIHN0YXQ6IHRydWUsIGZvcmNlZDogUFJPTUlTRV9TVEFUSUNTX0lOQ09SUkVDVF9JVEVSQVRJT04gfSwge1xuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmYoQyk7XG4gICAgdmFyIHJlc29sdmUgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkcHJvbWlzZVJlc29sdmUgPSBhQ2FsbGFibGUoQy5yZXNvbHZlKTtcbiAgICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICAgIHZhciBjb3VudGVyID0gMDtcbiAgICAgIHZhciByZW1haW5pbmcgPSAxO1xuICAgICAgaXRlcmF0ZShpdGVyYWJsZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gY291bnRlcisrO1xuICAgICAgICB2YXIgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgY2FsbCgkcHJvbWlzZVJlc29sdmUsIEMsIHByb21pc2UpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKGFscmVhZHlDYWxsZWQpIHJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lcnJvcikgcmVqZWN0KHJlc3VsdC52YWx1ZSk7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBGT1JDRURfUFJPTUlTRV9DT05TVFJVQ1RPUiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9wcm9taXNlLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpLkNPTlNUUlVDVE9SO1xudmFyIE5hdGl2ZVByb21pc2VDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9wcm9taXNlLW5hdGl2ZS1jb25zdHJ1Y3RvcicpO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGRlZmluZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluJyk7XG5cbnZhciBOYXRpdmVQcm9taXNlUHJvdG90eXBlID0gTmF0aXZlUHJvbWlzZUNvbnN0cnVjdG9yICYmIE5hdGl2ZVByb21pc2VDb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG5cbi8vIGBQcm9taXNlLnByb3RvdHlwZS5jYXRjaGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXByb21pc2UucHJvdG90eXBlLmNhdGNoXG4kKHsgdGFyZ2V0OiAnUHJvbWlzZScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRF9QUk9NSVNFX0NPTlNUUlVDVE9SLCByZWFsOiB0cnVlIH0sIHtcbiAgJ2NhdGNoJzogZnVuY3Rpb24gKG9uUmVqZWN0ZWQpIHtcbiAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gIH1cbn0pO1xuXG4vLyBtYWtlcyBzdXJlIHRoYXQgbmF0aXZlIHByb21pc2UtYmFzZWQgQVBJcyBgUHJvbWlzZSNjYXRjaGAgcHJvcGVybHkgd29ya3Mgd2l0aCBwYXRjaGVkIGBQcm9taXNlI3RoZW5gXG5pZiAoIUlTX1BVUkUgJiYgaXNDYWxsYWJsZShOYXRpdmVQcm9taXNlQ29uc3RydWN0b3IpKSB7XG4gIHZhciBtZXRob2QgPSBnZXRCdWlsdEluKCdQcm9taXNlJykucHJvdG90eXBlWydjYXRjaCddO1xuICBpZiAoTmF0aXZlUHJvbWlzZVByb3RvdHlwZVsnY2F0Y2gnXSAhPT0gbWV0aG9kKSB7XG4gICAgZGVmaW5lQnVpbHRJbihOYXRpdmVQcm9taXNlUHJvdG90eXBlLCAnY2F0Y2gnLCBtZXRob2QsIHsgdW5zYWZlOiB0cnVlIH0pO1xuICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBJU19OT0RFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Vudmlyb25tZW50LWlzLW5vZGUnKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgcGF0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9wYXRoJyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4nKTtcbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qtc2V0LXByb3RvdHlwZS1vZicpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgc2V0U3BlY2llcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtc3BlY2llcycpO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4taW5zdGFuY2UnKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIHRhc2sgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdGFzaycpLnNldDtcbnZhciBtaWNyb3Rhc2sgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWljcm90YXNrJyk7XG52YXIgaG9zdFJlcG9ydEVycm9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9ob3N0LXJlcG9ydC1lcnJvcnMnKTtcbnZhciBwZXJmb3JtID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3BlcmZvcm0nKTtcbnZhciBRdWV1ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9xdWV1ZScpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcbnZhciBOYXRpdmVQcm9taXNlQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcHJvbWlzZS1uYXRpdmUtY29uc3RydWN0b3InKTtcbnZhciBQcm9taXNlQ29uc3RydWN0b3JEZXRlY3Rpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcHJvbWlzZS1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24nKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG5cbnZhciBQUk9NSVNFID0gJ1Byb21pc2UnO1xudmFyIEZPUkNFRF9QUk9NSVNFX0NPTlNUUlVDVE9SID0gUHJvbWlzZUNvbnN0cnVjdG9yRGV0ZWN0aW9uLkNPTlNUUlVDVE9SO1xudmFyIE5BVElWRV9QUk9NSVNFX1JFSkVDVElPTl9FVkVOVCA9IFByb21pc2VDb25zdHJ1Y3RvckRldGVjdGlvbi5SRUpFQ1RJT05fRVZFTlQ7XG52YXIgTkFUSVZFX1BST01JU0VfU1VCQ0xBU1NJTkcgPSBQcm9taXNlQ29uc3RydWN0b3JEZXRlY3Rpb24uU1VCQ0xBU1NJTkc7XG52YXIgZ2V0SW50ZXJuYWxQcm9taXNlU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldHRlckZvcihQUk9NSVNFKTtcbnZhciBzZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5zZXQ7XG52YXIgTmF0aXZlUHJvbWlzZVByb3RvdHlwZSA9IE5hdGl2ZVByb21pc2VDb25zdHJ1Y3RvciAmJiBOYXRpdmVQcm9taXNlQ29uc3RydWN0b3IucHJvdG90eXBlO1xudmFyIFByb21pc2VDb25zdHJ1Y3RvciA9IE5hdGl2ZVByb21pc2VDb25zdHJ1Y3RvcjtcbnZhciBQcm9taXNlUHJvdG90eXBlID0gTmF0aXZlUHJvbWlzZVByb3RvdHlwZTtcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWxUaGlzLlR5cGVFcnJvcjtcbnZhciBkb2N1bWVudCA9IGdsb2JhbFRoaXMuZG9jdW1lbnQ7XG52YXIgcHJvY2VzcyA9IGdsb2JhbFRoaXMucHJvY2VzcztcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmY7XG52YXIgbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHk7XG5cbnZhciBESVNQQVRDSF9FVkVOVCA9ICEhKGRvY3VtZW50ICYmIGRvY3VtZW50LmNyZWF0ZUV2ZW50ICYmIGdsb2JhbFRoaXMuZGlzcGF0Y2hFdmVudCk7XG52YXIgVU5IQU5ETEVEX1JFSkVDVElPTiA9ICd1bmhhbmRsZWRyZWplY3Rpb24nO1xudmFyIFJFSkVDVElPTl9IQU5ETEVEID0gJ3JlamVjdGlvbmhhbmRsZWQnO1xudmFyIFBFTkRJTkcgPSAwO1xudmFyIEZVTEZJTExFRCA9IDE7XG52YXIgUkVKRUNURUQgPSAyO1xudmFyIEhBTkRMRUQgPSAxO1xudmFyIFVOSEFORExFRCA9IDI7XG5cbnZhciBJbnRlcm5hbCwgT3duUHJvbWlzZUNhcGFiaWxpdHksIFByb21pc2VXcmFwcGVyLCBuYXRpdmVUaGVuO1xuXG4vLyBoZWxwZXJzXG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiBpc0NhbGxhYmxlKHRoZW4gPSBpdC50aGVuKSA/IHRoZW4gOiBmYWxzZTtcbn07XG5cbnZhciBjYWxsUmVhY3Rpb24gPSBmdW5jdGlvbiAocmVhY3Rpb24sIHN0YXRlKSB7XG4gIHZhciB2YWx1ZSA9IHN0YXRlLnZhbHVlO1xuICB2YXIgb2sgPSBzdGF0ZS5zdGF0ZSA9PT0gRlVMRklMTEVEO1xuICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsO1xuICB2YXIgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmU7XG4gIHZhciByZWplY3QgPSByZWFjdGlvbi5yZWplY3Q7XG4gIHZhciBkb21haW4gPSByZWFjdGlvbi5kb21haW47XG4gIHZhciByZXN1bHQsIHRoZW4sIGV4aXRlZDtcbiAgdHJ5IHtcbiAgICBpZiAoaGFuZGxlcikge1xuICAgICAgaWYgKCFvaykge1xuICAgICAgICBpZiAoc3RhdGUucmVqZWN0aW9uID09PSBVTkhBTkRMRUQpIG9uSGFuZGxlVW5oYW5kbGVkKHN0YXRlKTtcbiAgICAgICAgc3RhdGUucmVqZWN0aW9uID0gSEFORExFRDtcbiAgICAgIH1cbiAgICAgIGlmIChoYW5kbGVyID09PSB0cnVlKSByZXN1bHQgPSB2YWx1ZTtcbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAoZG9tYWluKSBkb21haW4uZW50ZXIoKTtcbiAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7IC8vIGNhbiB0aHJvd1xuICAgICAgICBpZiAoZG9tYWluKSB7XG4gICAgICAgICAgZG9tYWluLmV4aXQoKTtcbiAgICAgICAgICBleGl0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKSB7XG4gICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgfSBlbHNlIGlmICh0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKSB7XG4gICAgICAgIGNhbGwodGhlbiwgcmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZG9tYWluICYmICFleGl0ZWQpIGRvbWFpbi5leGl0KCk7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgfVxufTtcblxudmFyIG5vdGlmeSA9IGZ1bmN0aW9uIChzdGF0ZSwgaXNSZWplY3QpIHtcbiAgaWYgKHN0YXRlLm5vdGlmaWVkKSByZXR1cm47XG4gIHN0YXRlLm5vdGlmaWVkID0gdHJ1ZTtcbiAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVhY3Rpb25zID0gc3RhdGUucmVhY3Rpb25zO1xuICAgIHZhciByZWFjdGlvbjtcbiAgICB3aGlsZSAocmVhY3Rpb24gPSByZWFjdGlvbnMuZ2V0KCkpIHtcbiAgICAgIGNhbGxSZWFjdGlvbihyZWFjdGlvbiwgc3RhdGUpO1xuICAgIH1cbiAgICBzdGF0ZS5ub3RpZmllZCA9IGZhbHNlO1xuICAgIGlmIChpc1JlamVjdCAmJiAhc3RhdGUucmVqZWN0aW9uKSBvblVuaGFuZGxlZChzdGF0ZSk7XG4gIH0pO1xufTtcblxudmFyIGRpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbiAobmFtZSwgcHJvbWlzZSwgcmVhc29uKSB7XG4gIHZhciBldmVudCwgaGFuZGxlcjtcbiAgaWYgKERJU1BBVENIX0VWRU5UKSB7XG4gICAgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICBldmVudC5wcm9taXNlID0gcHJvbWlzZTtcbiAgICBldmVudC5yZWFzb24gPSByZWFzb247XG4gICAgZXZlbnQuaW5pdEV2ZW50KG5hbWUsIGZhbHNlLCB0cnVlKTtcbiAgICBnbG9iYWxUaGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICB9IGVsc2UgZXZlbnQgPSB7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogcmVhc29uIH07XG4gIGlmICghTkFUSVZFX1BST01JU0VfUkVKRUNUSU9OX0VWRU5UICYmIChoYW5kbGVyID0gZ2xvYmFsVGhpc1snb24nICsgbmFtZV0pKSBoYW5kbGVyKGV2ZW50KTtcbiAgZWxzZSBpZiAobmFtZSA9PT0gVU5IQU5ETEVEX1JFSkVDVElPTikgaG9zdFJlcG9ydEVycm9ycygnVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgcmVhc29uKTtcbn07XG5cbnZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICBjYWxsKHRhc2ssIGdsb2JhbFRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJvbWlzZSA9IHN0YXRlLmZhY2FkZTtcbiAgICB2YXIgdmFsdWUgPSBzdGF0ZS52YWx1ZTtcbiAgICB2YXIgSVNfVU5IQU5ETEVEID0gaXNVbmhhbmRsZWQoc3RhdGUpO1xuICAgIHZhciByZXN1bHQ7XG4gICAgaWYgKElTX1VOSEFORExFRCkge1xuICAgICAgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChJU19OT0RFKSB7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBkaXNwYXRjaEV2ZW50KFVOSEFORExFRF9SRUpFQ1RJT04sIHByb21pc2UsIHZhbHVlKTtcbiAgICAgIH0pO1xuICAgICAgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcbiAgICAgIHN0YXRlLnJlamVjdGlvbiA9IElTX05PREUgfHwgaXNVbmhhbmRsZWQoc3RhdGUpID8gVU5IQU5ETEVEIDogSEFORExFRDtcbiAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHRocm93IHJlc3VsdC52YWx1ZTtcbiAgICB9XG4gIH0pO1xufTtcblxudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gIHJldHVybiBzdGF0ZS5yZWplY3Rpb24gIT09IEhBTkRMRUQgJiYgIXN0YXRlLnBhcmVudDtcbn07XG5cbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICBjYWxsKHRhc2ssIGdsb2JhbFRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJvbWlzZSA9IHN0YXRlLmZhY2FkZTtcbiAgICBpZiAoSVNfTk9ERSkge1xuICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG4gICAgfSBlbHNlIGRpc3BhdGNoRXZlbnQoUkVKRUNUSU9OX0hBTkRMRUQsIHByb21pc2UsIHN0YXRlLnZhbHVlKTtcbiAgfSk7XG59O1xuXG52YXIgYmluZCA9IGZ1bmN0aW9uIChmbiwgc3RhdGUsIHVud3JhcCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgZm4oc3RhdGUsIHZhbHVlLCB1bndyYXApO1xuICB9O1xufTtcblxudmFyIGludGVybmFsUmVqZWN0ID0gZnVuY3Rpb24gKHN0YXRlLCB2YWx1ZSwgdW53cmFwKSB7XG4gIGlmIChzdGF0ZS5kb25lKSByZXR1cm47XG4gIHN0YXRlLmRvbmUgPSB0cnVlO1xuICBpZiAodW53cmFwKSBzdGF0ZSA9IHVud3JhcDtcbiAgc3RhdGUudmFsdWUgPSB2YWx1ZTtcbiAgc3RhdGUuc3RhdGUgPSBSRUpFQ1RFRDtcbiAgbm90aWZ5KHN0YXRlLCB0cnVlKTtcbn07XG5cbnZhciBpbnRlcm5hbFJlc29sdmUgPSBmdW5jdGlvbiAoc3RhdGUsIHZhbHVlLCB1bndyYXApIHtcbiAgaWYgKHN0YXRlLmRvbmUpIHJldHVybjtcbiAgc3RhdGUuZG9uZSA9IHRydWU7XG4gIGlmICh1bndyYXApIHN0YXRlID0gdW53cmFwO1xuICB0cnkge1xuICAgIGlmIChzdGF0ZS5mYWNhZGUgPT09IHZhbHVlKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgdmFyIHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKTtcbiAgICBpZiAodGhlbikge1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7IGRvbmU6IGZhbHNlIH07XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY2FsbCh0aGVuLCB2YWx1ZSxcbiAgICAgICAgICAgIGJpbmQoaW50ZXJuYWxSZXNvbHZlLCB3cmFwcGVyLCBzdGF0ZSksXG4gICAgICAgICAgICBiaW5kKGludGVybmFsUmVqZWN0LCB3cmFwcGVyLCBzdGF0ZSlcbiAgICAgICAgICApO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGludGVybmFsUmVqZWN0KHdyYXBwZXIsIGVycm9yLCBzdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZS52YWx1ZSA9IHZhbHVlO1xuICAgICAgc3RhdGUuc3RhdGUgPSBGVUxGSUxMRUQ7XG4gICAgICBub3RpZnkoc3RhdGUsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaW50ZXJuYWxSZWplY3QoeyBkb25lOiBmYWxzZSB9LCBlcnJvciwgc3RhdGUpO1xuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYgKEZPUkNFRF9QUk9NSVNFX0NPTlNUUlVDVE9SKSB7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gIFByb21pc2VDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICBhbkluc3RhbmNlKHRoaXMsIFByb21pc2VQcm90b3R5cGUpO1xuICAgIGFDYWxsYWJsZShleGVjdXRvcik7XG4gICAgY2FsbChJbnRlcm5hbCwgdGhpcyk7XG4gICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxQcm9taXNlU3RhdGUodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGJpbmQoaW50ZXJuYWxSZXNvbHZlLCBzdGF0ZSksIGJpbmQoaW50ZXJuYWxSZWplY3QsIHN0YXRlKSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGludGVybmFsUmVqZWN0KHN0YXRlLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIFByb21pc2VQcm90b3R5cGUgPSBQcm9taXNlQ29uc3RydWN0b3IucHJvdG90eXBlO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFycyAtLSByZXF1aXJlZCBmb3IgYC5sZW5ndGhgXG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIHNldEludGVybmFsU3RhdGUodGhpcywge1xuICAgICAgdHlwZTogUFJPTUlTRSxcbiAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgbm90aWZpZWQ6IGZhbHNlLFxuICAgICAgcGFyZW50OiBmYWxzZSxcbiAgICAgIHJlYWN0aW9uczogbmV3IFF1ZXVlKCksXG4gICAgICByZWplY3Rpb246IGZhbHNlLFxuICAgICAgc3RhdGU6IFBFTkRJTkcsXG4gICAgICB2YWx1ZTogbnVsbFxuICAgIH0pO1xuICB9O1xuXG4gIC8vIGBQcm9taXNlLnByb3RvdHlwZS50aGVuYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1wcm9taXNlLnByb3RvdHlwZS50aGVuXG4gIEludGVybmFsLnByb3RvdHlwZSA9IGRlZmluZUJ1aWx0SW4oUHJvbWlzZVByb3RvdHlwZSwgJ3RoZW4nLCBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxQcm9taXNlU3RhdGUodGhpcyk7XG4gICAgdmFyIHJlYWN0aW9uID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsIFByb21pc2VDb25zdHJ1Y3RvcikpO1xuICAgIHN0YXRlLnBhcmVudCA9IHRydWU7XG4gICAgcmVhY3Rpb24ub2sgPSBpc0NhbGxhYmxlKG9uRnVsZmlsbGVkKSA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICByZWFjdGlvbi5mYWlsID0gaXNDYWxsYWJsZShvblJlamVjdGVkKSAmJiBvblJlamVjdGVkO1xuICAgIHJlYWN0aW9uLmRvbWFpbiA9IElTX05PREUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICBpZiAoc3RhdGUuc3RhdGUgPT09IFBFTkRJTkcpIHN0YXRlLnJlYWN0aW9ucy5hZGQocmVhY3Rpb24pO1xuICAgIGVsc2UgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNhbGxSZWFjdGlvbihyZWFjdGlvbiwgc3RhdGUpO1xuICAgIH0pO1xuICAgIHJldHVybiByZWFjdGlvbi5wcm9taXNlO1xuICB9KTtcblxuICBPd25Qcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBJbnRlcm5hbCgpO1xuICAgIHZhciBzdGF0ZSA9IGdldEludGVybmFsUHJvbWlzZVN0YXRlKHByb21pc2UpO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gYmluZChpbnRlcm5hbFJlc29sdmUsIHN0YXRlKTtcbiAgICB0aGlzLnJlamVjdCA9IGJpbmQoaW50ZXJuYWxSZWplY3QsIHN0YXRlKTtcbiAgfTtcblxuICBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoQykge1xuICAgIHJldHVybiBDID09PSBQcm9taXNlQ29uc3RydWN0b3IgfHwgQyA9PT0gUHJvbWlzZVdyYXBwZXJcbiAgICAgID8gbmV3IE93blByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICA6IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgfTtcblxuICBpZiAoIUlTX1BVUkUgJiYgaXNDYWxsYWJsZShOYXRpdmVQcm9taXNlQ29uc3RydWN0b3IpICYmIE5hdGl2ZVByb21pc2VQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpIHtcbiAgICBuYXRpdmVUaGVuID0gTmF0aXZlUHJvbWlzZVByb3RvdHlwZS50aGVuO1xuXG4gICAgaWYgKCFOQVRJVkVfUFJPTUlTRV9TVUJDTEFTU0lORykge1xuICAgICAgLy8gbWFrZSBgUHJvbWlzZSN0aGVuYCByZXR1cm4gYSBwb2x5ZmlsbGVkIGBQcm9taXNlYCBmb3IgbmF0aXZlIHByb21pc2UtYmFzZWQgQVBJc1xuICAgICAgZGVmaW5lQnVpbHRJbihOYXRpdmVQcm9taXNlUHJvdG90eXBlLCAndGhlbicsIGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VDb25zdHJ1Y3RvcihmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgY2FsbChuYXRpdmVUaGVuLCB0aGF0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKTtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82NDBcbiAgICAgIH0sIHsgdW5zYWZlOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIC8vIG1ha2UgYC5jb25zdHJ1Y3RvciA9PT0gUHJvbWlzZWAgd29yayBmb3IgbmF0aXZlIHByb21pc2UtYmFzZWQgQVBJc1xuICAgIHRyeSB7XG4gICAgICBkZWxldGUgTmF0aXZlUHJvbWlzZVByb3RvdHlwZS5jb25zdHJ1Y3RvcjtcbiAgICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG5cbiAgICAvLyBtYWtlIGBpbnN0YW5jZW9mIFByb21pc2VgIHdvcmsgZm9yIG5hdGl2ZSBwcm9taXNlLWJhc2VkIEFQSXNcbiAgICBpZiAoc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIHNldFByb3RvdHlwZU9mKE5hdGl2ZVByb21pc2VQcm90b3R5cGUsIFByb21pc2VQcm90b3R5cGUpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBgUHJvbWlzZWAgY29uc3RydWN0b3Jcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcHJvbWlzZS1leGVjdXRvclxuJCh7IGdsb2JhbDogdHJ1ZSwgY29uc3RydWN0b3I6IHRydWUsIHdyYXA6IHRydWUsIGZvcmNlZDogRk9SQ0VEX1BST01JU0VfQ09OU1RSVUNUT1IgfSwge1xuICBQcm9taXNlOiBQcm9taXNlQ29uc3RydWN0b3Jcbn0pO1xuXG5Qcm9taXNlV3JhcHBlciA9IHBhdGguUHJvbWlzZTtcblxuc2V0VG9TdHJpbmdUYWcoUHJvbWlzZUNvbnN0cnVjdG9yLCBQUk9NSVNFLCBmYWxzZSwgdHJ1ZSk7XG5zZXRTcGVjaWVzKFBST01JU0UpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gVE9ETzogUmVtb3ZlIHRoaXMgbW9kdWxlIGZyb20gYGNvcmUtanNANGAgc2luY2UgaXQncyBzcGxpdCB0byBtb2R1bGVzIGxpc3RlZCBiZWxvd1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lcy5wcm9taXNlLmNvbnN0cnVjdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzLnByb21pc2UuYWxsJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzLnByb21pc2UuY2F0Y2gnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXMucHJvbWlzZS5yYWNlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzLnByb21pc2UucmVqZWN0Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzLnByb21pc2UucmVzb2x2ZScpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG52YXIgcGVyZm9ybSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9wZXJmb3JtJyk7XG52YXIgaXRlcmF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRlJyk7XG52YXIgUFJPTUlTRV9TVEFUSUNTX0lOQ09SUkVDVF9JVEVSQVRJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcHJvbWlzZS1zdGF0aWNzLWluY29ycmVjdC1pdGVyYXRpb24nKTtcblxuLy8gYFByb21pc2UucmFjZWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXByb21pc2UucmFjZVxuJCh7IHRhcmdldDogJ1Byb21pc2UnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IFBST01JU0VfU1RBVElDU19JTkNPUlJFQ1RfSVRFUkFUSU9OIH0sIHtcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmYoQyk7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkcHJvbWlzZVJlc29sdmUgPSBhQ2FsbGFibGUoQy5yZXNvbHZlKTtcbiAgICAgIGl0ZXJhdGUoaXRlcmFibGUsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIGNhbGwoJHByb21pc2VSZXNvbHZlLCBDLCBwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZXJyb3IpIHJlamVjdChyZXN1bHQudmFsdWUpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIEZPUkNFRF9QUk9NSVNFX0NPTlNUUlVDVE9SID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Byb21pc2UtY29uc3RydWN0b3ItZGV0ZWN0aW9uJykuQ09OU1RSVUNUT1I7XG5cbi8vIGBQcm9taXNlLnJlamVjdGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXByb21pc2UucmVqZWN0XG4kKHsgdGFyZ2V0OiAnUHJvbWlzZScsIHN0YXQ6IHRydWUsIGZvcmNlZDogRk9SQ0VEX1BST01JU0VfQ09OU1RSVUNUT1IgfSwge1xuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKSB7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mKHRoaXMpO1xuICAgIHZhciBjYXBhYmlsaXR5UmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgY2FwYWJpbGl0eVJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgTmF0aXZlUHJvbWlzZUNvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Byb21pc2UtbmF0aXZlLWNvbnN0cnVjdG9yJyk7XG52YXIgRk9SQ0VEX1BST01JU0VfQ09OU1RSVUNUT1IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcHJvbWlzZS1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24nKS5DT05TVFJVQ1RPUjtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9wcm9taXNlLXJlc29sdmUnKTtcblxudmFyIFByb21pc2VDb25zdHJ1Y3RvcldyYXBwZXIgPSBnZXRCdWlsdEluKCdQcm9taXNlJyk7XG52YXIgQ0hFQ0tfV1JBUFBFUiA9IElTX1BVUkUgJiYgIUZPUkNFRF9QUk9NSVNFX0NPTlNUUlVDVE9SO1xuXG4vLyBgUHJvbWlzZS5yZXNvbHZlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcHJvbWlzZS5yZXNvbHZlXG4kKHsgdGFyZ2V0OiAnUHJvbWlzZScsIHN0YXQ6IHRydWUsIGZvcmNlZDogSVNfUFVSRSB8fCBGT1JDRURfUFJPTUlTRV9DT05TVFJVQ1RPUiB9LCB7XG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCkge1xuICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShDSEVDS19XUkFQUEVSICYmIHRoaXMgPT09IFByb21pc2VDb25zdHJ1Y3RvcldyYXBwZXIgPyBOYXRpdmVQcm9taXNlQ29uc3RydWN0b3IgOiB0aGlzLCB4KTtcbiAgfVxufSk7XG4iLCIvKlxyXG4gKiBlYXN5LWF1dG9jb21wbGV0ZVxyXG4gKiBqUXVlcnkgcGx1Z2luIGZvciBhdXRvY29tcGxldGlvblxyXG4gKiBcclxuICogQGF1dGhvciDFgXVrYXN6IFBhd2XFgmN6YWsgKGh0dHA6Ly9naXRodWIuY29tL3Bhd2VsY3phaylcclxuICogQHZlcnNpb24gMS4zLjVcclxuICogQ29weXJpZ2h0ICBMaWNlbnNlOiBcclxuICovXHJcblxyXG4vKlxyXG4gKiBFYXN5QXV0b2NvbXBsZXRlIC0gQ29uZmlndXJhdGlvbiBcclxuICovXHJcbnZhciBFYXN5QXV0b2NvbXBsZXRlID0gKGZ1bmN0aW9uKHNjb3BlKXtcclxuXHJcblx0c2NvcGUuQ29uZmlndXJhdGlvbiA9IGZ1bmN0aW9uIENvbmZpZ3VyYXRpb24ob3B0aW9ucykge1xyXG5cdFx0dmFyIGRlZmF1bHRzID0ge1xyXG5cdFx0XHRkYXRhOiBcImxpc3QtcmVxdWlyZWRcIixcclxuXHRcdFx0dXJsOiBcImxpc3QtcmVxdWlyZWRcIixcclxuXHRcdFx0ZGF0YVR5cGU6IFwianNvblwiLFxyXG5cclxuXHRcdFx0bGlzdExvY2F0aW9uOiBmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRcdFx0cmV0dXJuIGRhdGE7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHR4bWxFbGVtZW50TmFtZTogXCJcIixcclxuXHJcblx0XHRcdGdldFZhbHVlOiBmdW5jdGlvbihlbGVtZW50KSB7XHJcblx0XHRcdFx0cmV0dXJuIGVsZW1lbnQ7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRhdXRvY29tcGxldGVPZmY6IHRydWUsXHJcblxyXG5cdFx0XHRwbGFjZWhvbGRlcjogZmFsc2UsXHJcblxyXG5cdFx0XHRhamF4Q2FsbGJhY2s6IGZ1bmN0aW9uKCkge30sXHJcblxyXG5cdFx0XHRtYXRjaFJlc3BvbnNlUHJvcGVydHk6IGZhbHNlLFxyXG5cclxuXHRcdFx0bGlzdDoge1xyXG5cdFx0XHRcdHNvcnQ6IHtcclxuXHRcdFx0XHRcdGVuYWJsZWQ6IGZhbHNlLFxyXG5cdFx0XHRcdFx0bWV0aG9kOiBmdW5jdGlvbihhLCBiKSB7XHJcblx0XHRcdFx0XHRcdGEgPSBkZWZhdWx0cy5nZXRWYWx1ZShhKTtcclxuXHRcdFx0XHRcdFx0YiA9IGRlZmF1bHRzLmdldFZhbHVlKGIpO1xyXG5cdFx0XHRcdFx0XHRpZiAoYSA8IGIpIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gLTE7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0aWYgKGEgPiBiKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIDE7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0cmV0dXJuIDA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHJcblx0XHRcdFx0bWF4TnVtYmVyT2ZFbGVtZW50czogNixcclxuXHJcblx0XHRcdFx0aGlkZU9uRW1wdHlQaHJhc2U6IHRydWUsXHJcblxyXG5cdFx0XHRcdG1hdGNoOiB7XHJcblx0XHRcdFx0XHRlbmFibGVkOiBmYWxzZSxcclxuXHRcdFx0XHRcdGNhc2VTZW5zaXRpdmU6IGZhbHNlLFxyXG5cdFx0XHRcdFx0bWV0aG9kOiBmdW5jdGlvbihlbGVtZW50LCBwaHJhc2UpIHtcclxuXHJcblx0XHRcdFx0XHRcdGlmIChlbGVtZW50LnNlYXJjaChwaHJhc2UpID4gLTEpIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cclxuXHRcdFx0XHRzaG93QW5pbWF0aW9uOiB7XHJcblx0XHRcdFx0XHR0eXBlOiBcIm5vcm1hbFwiLCAvL25vcm1hbHxzbGlkZXxmYWRlXHJcblx0XHRcdFx0XHR0aW1lOiA0MDAsXHJcblx0XHRcdFx0XHRjYWxsYmFjazogZnVuY3Rpb24oKSB7fVxyXG5cdFx0XHRcdH0sXHJcblxyXG5cdFx0XHRcdGhpZGVBbmltYXRpb246IHtcclxuXHRcdFx0XHRcdHR5cGU6IFwibm9ybWFsXCIsXHJcblx0XHRcdFx0XHR0aW1lOiA0MDAsXHJcblx0XHRcdFx0XHRjYWxsYmFjazogZnVuY3Rpb24oKSB7fVxyXG5cdFx0XHRcdH0sXHJcblxyXG5cdFx0XHRcdC8qIEV2ZW50cyAqL1xyXG5cdFx0XHRcdG9uQ2xpY2tFdmVudDogZnVuY3Rpb24oKSB7fSxcclxuXHRcdFx0XHRvblNlbGVjdEl0ZW1FdmVudDogZnVuY3Rpb24oKSB7fSxcclxuXHRcdFx0XHRvbkxvYWRFdmVudDogZnVuY3Rpb24oKSB7fSxcclxuXHRcdFx0XHRvbkNob29zZUV2ZW50OiBmdW5jdGlvbigpIHt9LFxyXG5cdFx0XHRcdG9uS2V5RW50ZXJFdmVudDogZnVuY3Rpb24oKSB7fSxcclxuXHRcdFx0XHRvbk1vdXNlT3ZlckV2ZW50OiBmdW5jdGlvbigpIHt9LFxyXG5cdFx0XHRcdG9uTW91c2VPdXRFdmVudDogZnVuY3Rpb24oKSB7fSxcdFxyXG5cdFx0XHRcdG9uU2hvd0xpc3RFdmVudDogZnVuY3Rpb24oKSB7fSxcclxuXHRcdFx0XHRvbkhpZGVMaXN0RXZlbnQ6IGZ1bmN0aW9uKCkge31cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdGhpZ2hsaWdodFBocmFzZTogdHJ1ZSxcclxuXHJcblx0XHRcdHRoZW1lOiBcIlwiLFxyXG5cclxuXHRcdFx0Y3NzQ2xhc3NlczogXCJcIixcclxuXHJcblx0XHRcdG1pbkNoYXJOdW1iZXI6IDAsXHJcblxyXG5cdFx0XHRyZXF1ZXN0RGVsYXk6IDAsXHJcblxyXG5cdFx0XHRhZGp1c3RXaWR0aDogdHJ1ZSxcclxuXHJcblx0XHRcdGFqYXhTZXR0aW5nczoge30sXHJcblxyXG5cdFx0XHRwcmVwYXJlUG9zdERhdGE6IGZ1bmN0aW9uKGRhdGEsIGlucHV0UGhyYXNlKSB7cmV0dXJuIGRhdGE7fSxcclxuXHJcblx0XHRcdGxvZ2dlckVuYWJsZWQ6IHRydWUsXHJcblxyXG5cdFx0XHR0ZW1wbGF0ZTogXCJcIixcclxuXHJcblx0XHRcdGNhdGVnb3JpZXNBc3NpZ25lZDogZmFsc2UsXHJcblxyXG5cdFx0XHRjYXRlZ29yaWVzOiBbe1xyXG5cdFx0XHRcdG1heE51bWJlck9mRWxlbWVudHM6IDRcclxuXHRcdFx0fV1cclxuXHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHR2YXIgZXh0ZXJuYWxPYmplY3RzID0gW1wiYWpheFNldHRpbmdzXCIsIFwidGVtcGxhdGVcIl07XHJcblxyXG5cdFx0dGhpcy5nZXQgPSBmdW5jdGlvbihwcm9wZXJ0eU5hbWUpIHtcclxuXHRcdFx0cmV0dXJuIGRlZmF1bHRzW3Byb3BlcnR5TmFtZV07XHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMuZXF1YWxzID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcclxuXHRcdFx0aWYgKGlzQXNzaWduZWQobmFtZSkpIHtcclxuXHRcdFx0XHRpZiAoZGVmYXVsdHNbbmFtZV0gPT09IHZhbHVlKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gXHJcblx0XHRcdFxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMuY2hlY2tEYXRhVXJsUHJvcGVydGllcyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiAoZGVmYXVsdHMudXJsID09PSBcImxpc3QtcmVxdWlyZWRcIiAmJiBkZWZhdWx0cy5kYXRhID09PSBcImxpc3QtcmVxdWlyZWRcIikge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH07XHJcblx0XHR0aGlzLmNoZWNrUmVxdWlyZWRQcm9wZXJ0aWVzID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdGZvciAodmFyIHByb3BlcnR5TmFtZSBpbiBkZWZhdWx0cykge1xyXG5cdFx0XHRcdGlmIChkZWZhdWx0c1twcm9wZXJ0eU5hbWVdID09PSBcInJlcXVpcmVkXCIpIHtcclxuXHRcdFx0XHRcdGxvZ2dlci5lcnJvcihcIk9wdGlvbiBcIiArIHByb3BlcnR5TmFtZSArIFwiIG11c3QgYmUgZGVmaW5lZFwiKTtcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMucHJpbnRQcm9wZXJ0aWVzVGhhdERvZXNudEV4aXN0ID0gZnVuY3Rpb24oY29uc29sLCBvcHRpb25zVG9DaGVjaykge1xyXG5cdFx0XHRwcmludFByb3BlcnRpZXNUaGF0RG9lc250RXhpc3QoY29uc29sLCBvcHRpb25zVG9DaGVjayk7XHJcblx0XHR9O1xyXG5cclxuXHJcblx0XHRwcmVwYXJlRGVmYXVsdHMoKTtcclxuXHJcblx0XHRtZXJnZU9wdGlvbnMoKTtcclxuXHJcblx0XHRpZiAoZGVmYXVsdHMubG9nZ2VyRW5hYmxlZCA9PT0gdHJ1ZSkge1xyXG5cdFx0XHRwcmludFByb3BlcnRpZXNUaGF0RG9lc250RXhpc3QoY29uc29sZSwgb3B0aW9ucyk7XHRcclxuXHRcdH1cclxuXHJcblx0XHRhZGRBamF4U2V0dGluZ3MoKTtcclxuXHJcblx0XHRwcm9jZXNzQWZ0ZXJNZXJnZSgpO1xyXG5cdFx0ZnVuY3Rpb24gcHJlcGFyZURlZmF1bHRzKCkge1xyXG5cclxuXHRcdFx0aWYgKG9wdGlvbnMuZGF0YVR5cGUgPT09IFwieG1sXCIpIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAoIW9wdGlvbnMuZ2V0VmFsdWUpIHtcclxuXHJcblx0XHRcdFx0XHRvcHRpb25zLmdldFZhbHVlID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gJChlbGVtZW50KS50ZXh0KCk7XHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKCFvcHRpb25zLmxpc3QpIHtcclxuXHJcblx0XHRcdFx0XHRvcHRpb25zLmxpc3QgPSB7fTtcclxuXHRcdFx0XHR9IFxyXG5cclxuXHRcdFx0XHRpZiAoIW9wdGlvbnMubGlzdC5zb3J0KSB7XHJcblx0XHRcdFx0XHRvcHRpb25zLmxpc3Quc29ydCA9IHt9O1xyXG5cdFx0XHRcdH1cclxuXHJcblxyXG5cdFx0XHRcdG9wdGlvbnMubGlzdC5zb3J0Lm1ldGhvZCA9IGZ1bmN0aW9uKGEsIGIpIHtcclxuXHRcdFx0XHRcdGEgPSBvcHRpb25zLmdldFZhbHVlKGEpO1xyXG5cdFx0XHRcdFx0YiA9IG9wdGlvbnMuZ2V0VmFsdWUoYik7XHJcblx0XHRcdFx0XHRpZiAoYSA8IGIpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIC0xO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKGEgPiBiKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiAxO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cmV0dXJuIDA7XHJcblx0XHRcdFx0fTtcclxuXHJcblx0XHRcdFx0aWYgKCFvcHRpb25zLmxpc3QubWF0Y2gpIHtcclxuXHRcdFx0XHRcdG9wdGlvbnMubGlzdC5tYXRjaCA9IHt9O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0b3B0aW9ucy5saXN0Lm1hdGNoLm1ldGhvZCA9IGZ1bmN0aW9uKGVsZW1lbnQsIHBocmFzZSkge1xyXG5cclxuXHRcdFx0XHRcdGlmIChlbGVtZW50LnNlYXJjaChwaHJhc2UpID4gLTEpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fTtcclxuXHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKG9wdGlvbnMuY2F0ZWdvcmllcyAhPT0gdW5kZWZpbmVkICYmIG9wdGlvbnMuY2F0ZWdvcmllcyBpbnN0YW5jZW9mIEFycmF5KSB7XHJcblxyXG5cdFx0XHRcdHZhciBjYXRlZ29yaWVzID0gW107XHJcblxyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBvcHRpb25zLmNhdGVnb3JpZXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHsgXHJcblxyXG5cdFx0XHRcdFx0dmFyIGNhdGVnb3J5ID0gb3B0aW9ucy5jYXRlZ29yaWVzW2ldO1xyXG5cclxuXHRcdFx0XHRcdGZvciAodmFyIHByb3BlcnR5IGluIGRlZmF1bHRzLmNhdGVnb3JpZXNbMF0pIHtcclxuXHJcblx0XHRcdFx0XHRcdGlmIChjYXRlZ29yeVtwcm9wZXJ0eV0gPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0XHRcdGNhdGVnb3J5W3Byb3BlcnR5XSA9IGRlZmF1bHRzLmNhdGVnb3JpZXNbMF1bcHJvcGVydHldO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Y2F0ZWdvcmllcy5wdXNoKGNhdGVnb3J5KTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdG9wdGlvbnMuY2F0ZWdvcmllcyA9IGNhdGVnb3JpZXM7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBtZXJnZU9wdGlvbnMoKSB7XHJcblxyXG5cdFx0XHRkZWZhdWx0cyA9IG1lcmdlT2JqZWN0cyhkZWZhdWx0cywgb3B0aW9ucyk7XHJcblxyXG5cdFx0XHRmdW5jdGlvbiBtZXJnZU9iamVjdHMoc291cmNlLCB0YXJnZXQpIHtcclxuXHRcdFx0XHR2YXIgbWVyZ2VkT2JqZWN0ID0gc291cmNlIHx8IHt9O1xyXG5cclxuXHRcdFx0XHRmb3IgKHZhciBwcm9wZXJ0eU5hbWUgaW4gc291cmNlKSB7XHJcblx0XHRcdFx0XHRpZiAodGFyZ2V0W3Byb3BlcnR5TmFtZV0gIT09IHVuZGVmaW5lZCAmJiB0YXJnZXRbcHJvcGVydHlOYW1lXSAhPT0gbnVsbCkge1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKHR5cGVvZiB0YXJnZXRbcHJvcGVydHlOYW1lXSAhPT0gXCJvYmplY3RcIiB8fCBcclxuXHRcdFx0XHRcdFx0XHRcdHRhcmdldFtwcm9wZXJ0eU5hbWVdIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuXHRcdFx0XHRcdFx0XHRtZXJnZWRPYmplY3RbcHJvcGVydHlOYW1lXSA9IHRhcmdldFtwcm9wZXJ0eU5hbWVdO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdG1lcmdlT2JqZWN0cyhzb3VyY2VbcHJvcGVydHlOYW1lXSwgdGFyZ2V0W3Byb3BlcnR5TmFtZV0pO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0XHQvKiBJZiBkYXRhIGlzIGFuIG9iamVjdCAqL1xyXG5cdFx0XHRcdGlmICh0YXJnZXQuZGF0YSAhPT0gdW5kZWZpbmVkICYmIHRhcmdldC5kYXRhICE9PSBudWxsICYmIHR5cGVvZiB0YXJnZXQuZGF0YSA9PT0gXCJvYmplY3RcIikge1xyXG5cdFx0XHRcdFx0bWVyZ2VkT2JqZWN0LmRhdGEgPSB0YXJnZXQuZGF0YTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHJldHVybiBtZXJnZWRPYmplY3Q7XHJcblx0XHRcdH1cclxuXHRcdH1cdFxyXG5cclxuXHJcblx0XHRmdW5jdGlvbiBwcm9jZXNzQWZ0ZXJNZXJnZSgpIHtcclxuXHRcdFx0XHJcblx0XHRcdGlmIChkZWZhdWx0cy51cmwgIT09IFwibGlzdC1yZXF1aXJlZFwiICYmIHR5cGVvZiBkZWZhdWx0cy51cmwgIT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0XHRcdHZhciBkZWZhdWx0VXJsID0gZGVmYXVsdHMudXJsO1xyXG5cdFx0XHRcdGRlZmF1bHRzLnVybCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGRlZmF1bHRVcmw7XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGRlZmF1bHRzLmFqYXhTZXR0aW5ncy51cmwgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgZGVmYXVsdHMuYWpheFNldHRpbmdzLnVybCAhPT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRcdFx0dmFyIGRlZmF1bHRVcmwgPSBkZWZhdWx0cy5hamF4U2V0dGluZ3MudXJsO1xyXG5cdFx0XHRcdGRlZmF1bHRzLmFqYXhTZXR0aW5ncy51cmwgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHJldHVybiBkZWZhdWx0VXJsO1xyXG5cdFx0XHRcdH07XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICh0eXBlb2YgZGVmYXVsdHMubGlzdExvY2F0aW9uID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdFx0dmFyIGRlZmF1bHRsaXN0TG9jYXRpb24gPSBkZWZhdWx0cy5saXN0TG9jYXRpb247XHJcblxyXG5cdFx0XHRcdGlmIChkZWZhdWx0cy5kYXRhVHlwZS50b1VwcGVyQ2FzZSgpID09PSBcIlhNTFwiKSB7XHJcblx0XHRcdFx0XHRkZWZhdWx0cy5saXN0TG9jYXRpb24gPSBmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiAkKGRhdGEpLmZpbmQoZGVmYXVsdGxpc3RMb2NhdGlvbik7XHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRkZWZhdWx0cy5saXN0TG9jYXRpb24gPSBmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBkYXRhW2RlZmF1bHRsaXN0TG9jYXRpb25dO1xyXG5cdFx0XHRcdFx0fTtcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHR5cGVvZiBkZWZhdWx0cy5nZXRWYWx1ZSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHRcdHZhciBkZWZhdWx0c0dldFZhbHVlID0gZGVmYXVsdHMuZ2V0VmFsdWU7XHJcblx0XHRcdFx0ZGVmYXVsdHMuZ2V0VmFsdWUgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZWxlbWVudFtkZWZhdWx0c0dldFZhbHVlXTtcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAob3B0aW9ucy5jYXRlZ29yaWVzICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRkZWZhdWx0cy5jYXRlZ29yaWVzQXNzaWduZWQgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGFkZEFqYXhTZXR0aW5ncygpIHtcclxuXHJcblx0XHRcdGlmIChvcHRpb25zLmFqYXhTZXR0aW5ncyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBvcHRpb25zLmFqYXhTZXR0aW5ncyA9PT0gXCJvYmplY3RcIikge1xyXG5cdFx0XHRcdGRlZmF1bHRzLmFqYXhTZXR0aW5ncyA9IG9wdGlvbnMuYWpheFNldHRpbmdzO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGRlZmF1bHRzLmFqYXhTZXR0aW5ncyA9IHt9O1x0XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gaXNBc3NpZ25lZChuYW1lKSB7XHJcblx0XHRcdGlmIChkZWZhdWx0c1tuYW1lXSAhPT0gdW5kZWZpbmVkICYmIGRlZmF1bHRzW25hbWVdICE9PSBudWxsKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRmdW5jdGlvbiBwcmludFByb3BlcnRpZXNUaGF0RG9lc250RXhpc3QoY29uc29sLCBvcHRpb25zVG9DaGVjaykge1xyXG5cdFx0XHRcclxuXHRcdFx0Y2hlY2tQcm9wZXJ0aWVzSWZFeGlzdChkZWZhdWx0cywgb3B0aW9uc1RvQ2hlY2spO1xyXG5cclxuXHRcdFx0ZnVuY3Rpb24gY2hlY2tQcm9wZXJ0aWVzSWZFeGlzdChzb3VyY2UsIHRhcmdldCkge1xyXG5cdFx0XHRcdGZvcih2YXIgcHJvcGVydHkgaW4gdGFyZ2V0KSB7XHJcblx0XHRcdFx0XHRpZiAoc291cmNlW3Byb3BlcnR5XSA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbC5sb2coXCJQcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eSArIFwiJyBkb2VzIG5vdCBleGlzdCBpbiBFYXN5QXV0b2NvbXBsZXRlIG9wdGlvbnMgQVBJLlwiKTtcdFx0XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBzb3VyY2VbcHJvcGVydHldID09PSBcIm9iamVjdFwiICYmICQuaW5BcnJheShwcm9wZXJ0eSwgZXh0ZXJuYWxPYmplY3RzKSA9PT0gLTEpIHtcclxuXHRcdFx0XHRcdFx0Y2hlY2tQcm9wZXJ0aWVzSWZFeGlzdChzb3VyY2VbcHJvcGVydHldLCB0YXJnZXRbcHJvcGVydHldKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHRcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHJldHVybiBzY29wZTtcclxuXHJcbn0pKEVhc3lBdXRvY29tcGxldGUgfHwge30pO1xyXG5cclxuXHJcbi8qXHJcbiAqIEVhc3lBdXRvY29tcGxldGUgLSBMb2dnZXIgXHJcbiAqL1xyXG52YXIgRWFzeUF1dG9jb21wbGV0ZSA9IChmdW5jdGlvbihzY29wZSl7XHJcblx0XHJcblx0c2NvcGUuTG9nZ2VyID0gZnVuY3Rpb24gTG9nZ2VyKCkge1xyXG5cclxuXHRcdHRoaXMuZXJyb3IgPSBmdW5jdGlvbihtZXNzYWdlKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiRVJST1I6IFwiICsgbWVzc2FnZSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMud2FybmluZyA9IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJXQVJOSU5HOiBcIiArIG1lc3NhZ2UpO1xyXG5cdFx0fTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gc2NvcGU7XHJcblxyXG59KShFYXN5QXV0b2NvbXBsZXRlIHx8IHt9KTtcclxuXHRcclxuXHJcbi8qXHJcbiAqIEVhc3lBdXRvY29tcGxldGUgLSBDb25zdGFuc1xyXG4gKi9cclxudmFyIEVhc3lBdXRvY29tcGxldGUgPSAoZnVuY3Rpb24oc2NvcGUpe1x0XHJcblx0XHJcblx0c2NvcGUuQ29uc3RhbnMgPSBmdW5jdGlvbiBDb25zdGFucygpIHtcclxuXHRcdHZhciBjb25zdGFudHMgPSB7XHJcblx0XHRcdENPTlRBSU5FUl9DTEFTUzogXCJlYXN5LWF1dG9jb21wbGV0ZS1jb250YWluZXJcIixcclxuXHRcdFx0Q09OVEFJTkVSX0lEOiBcImVhYy1jb250YWluZXItXCIsXHJcblxyXG5cdFx0XHRXUkFQUEVSX0NTU19DTEFTUzogXCJlYXN5LWF1dG9jb21wbGV0ZVwiXHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMuZ2V0VmFsdWUgPSBmdW5jdGlvbihwcm9wZXJ0eU5hbWUpIHtcclxuXHRcdFx0cmV0dXJuIGNvbnN0YW50c1twcm9wZXJ0eU5hbWVdO1xyXG5cdFx0fTtcclxuXHJcblx0fTtcclxuXHJcblx0cmV0dXJuIHNjb3BlO1xyXG5cclxufSkoRWFzeUF1dG9jb21wbGV0ZSB8fCB7fSk7XHJcblxyXG4vKlxyXG4gKiBFYXN5QXV0b2NvbXBsZXRlIC0gTGlzdEJ1aWxkZXJTZXJ2aWNlIFxyXG4gKlxyXG4gKiBAYXV0aG9yIMWBdWthc3ogUGF3ZcWCY3phayBcclxuICpcclxuICovXHJcbnZhciBFYXN5QXV0b2NvbXBsZXRlID0gKGZ1bmN0aW9uKHNjb3BlKSB7XHJcblxyXG5cdHNjb3BlLkxpc3RCdWlsZGVyU2VydmljZSA9IGZ1bmN0aW9uIExpc3RCdWlsZGVyU2VydmljZShjb25maWd1cmF0aW9uLCBwcm9jY2Vzc1Jlc3BvbnNlRGF0YSkge1xyXG5cclxuXHJcblx0XHR0aGlzLmluaXQgPSBmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRcdHZhciBsaXN0QnVpbGRlciA9IFtdLFxyXG5cdFx0XHRcdGJ1aWxkZXIgPSB7fTtcclxuXHJcblx0XHRcdGJ1aWxkZXIuZGF0YSA9IGNvbmZpZ3VyYXRpb24uZ2V0KFwibGlzdExvY2F0aW9uXCIpKGRhdGEpO1xyXG5cdFx0XHRidWlsZGVyLmdldFZhbHVlID0gY29uZmlndXJhdGlvbi5nZXQoXCJnZXRWYWx1ZVwiKTtcclxuXHRcdFx0YnVpbGRlci5tYXhMaXN0U2l6ZSA9IGNvbmZpZ3VyYXRpb24uZ2V0KFwibGlzdFwiKS5tYXhOdW1iZXJPZkVsZW1lbnRzO1xyXG5cclxuXHRcdFx0XHRcclxuXHRcdFx0bGlzdEJ1aWxkZXIucHVzaChidWlsZGVyKTtcclxuXHJcblx0XHRcdHJldHVybiBsaXN0QnVpbGRlcjtcclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy51cGRhdGVDYXRlZ29yaWVzID0gZnVuY3Rpb24obGlzdEJ1aWxkZXIsIGRhdGEpIHtcclxuXHRcdFx0XHJcblx0XHRcdGlmIChjb25maWd1cmF0aW9uLmdldChcImNhdGVnb3JpZXNBc3NpZ25lZFwiKSkge1xyXG5cclxuXHRcdFx0XHRsaXN0QnVpbGRlciA9IFtdO1xyXG5cclxuXHRcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgY29uZmlndXJhdGlvbi5nZXQoXCJjYXRlZ29yaWVzXCIpLmxlbmd0aDsgaSArPSAxKSB7XHJcblxyXG5cdFx0XHRcdFx0dmFyIGJ1aWxkZXIgPSBjb252ZXJ0VG9MaXN0QnVpbGRlcihjb25maWd1cmF0aW9uLmdldChcImNhdGVnb3JpZXNcIilbaV0sIGRhdGEpO1xyXG5cclxuXHRcdFx0XHRcdGxpc3RCdWlsZGVyLnB1c2goYnVpbGRlcik7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSBcclxuXHJcblx0XHRcdHJldHVybiBsaXN0QnVpbGRlcjtcclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy5jb252ZXJ0WG1sID0gZnVuY3Rpb24obGlzdEJ1aWxkZXIpIHtcclxuXHRcdFx0aWYoY29uZmlndXJhdGlvbi5nZXQoXCJkYXRhVHlwZVwiKS50b1VwcGVyQ2FzZSgpID09PSBcIlhNTFwiKSB7XHJcblxyXG5cdFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0QnVpbGRlci5sZW5ndGg7IGkgKz0gMSkge1xyXG5cdFx0XHRcdFx0bGlzdEJ1aWxkZXJbaV0uZGF0YSA9IGNvbnZlcnRYbWxUb0xpc3QobGlzdEJ1aWxkZXJbaV0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIGxpc3RCdWlsZGVyO1xyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLnByb2Nlc3NEYXRhID0gZnVuY3Rpb24obGlzdEJ1aWxkZXIsIGlucHV0UGhyYXNlKSB7XHJcblxyXG5cdFx0XHRmb3IodmFyIGkgPSAwLCBsZW5ndGggPSBsaXN0QnVpbGRlci5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrPTEpIHtcclxuXHRcdFx0XHRsaXN0QnVpbGRlcltpXS5kYXRhID0gcHJvY2Nlc3NSZXNwb25zZURhdGEoY29uZmlndXJhdGlvbiwgbGlzdEJ1aWxkZXJbaV0sIGlucHV0UGhyYXNlKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIGxpc3RCdWlsZGVyO1xyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLmNoZWNrSWZEYXRhRXhpc3RzID0gZnVuY3Rpb24obGlzdEJ1aWxkZXJzKSB7XHJcblxyXG5cdFx0XHRmb3IodmFyIGkgPSAwLCBsZW5ndGggPSBsaXN0QnVpbGRlcnMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcclxuXHJcblx0XHRcdFx0aWYgKGxpc3RCdWlsZGVyc1tpXS5kYXRhICE9PSB1bmRlZmluZWQgJiYgbGlzdEJ1aWxkZXJzW2ldLmRhdGEgaW5zdGFuY2VvZiBBcnJheSkge1xyXG5cdFx0XHRcdFx0aWYgKGxpc3RCdWlsZGVyc1tpXS5kYXRhLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fTtcclxuXHJcblxyXG5cdFx0ZnVuY3Rpb24gY29udmVydFRvTGlzdEJ1aWxkZXIoY2F0ZWdvcnksIGRhdGEpIHtcclxuXHJcblx0XHRcdHZhciBidWlsZGVyID0ge307XHJcblxyXG5cdFx0XHRpZihjb25maWd1cmF0aW9uLmdldChcImRhdGFUeXBlXCIpLnRvVXBwZXJDYXNlKCkgPT09IFwiWE1MXCIpIHtcclxuXHJcblx0XHRcdFx0YnVpbGRlciA9IGNvbnZlcnRYbWxUb0xpc3RCdWlsZGVyKCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdGJ1aWxkZXIgPSBjb252ZXJ0RGF0YVRvTGlzdEJ1aWxkZXIoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHJcblx0XHRcdGlmIChjYXRlZ29yeS5oZWFkZXIgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdGJ1aWxkZXIuaGVhZGVyID0gY2F0ZWdvcnkuaGVhZGVyO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoY2F0ZWdvcnkubWF4TnVtYmVyT2ZFbGVtZW50cyAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0YnVpbGRlci5tYXhOdW1iZXJPZkVsZW1lbnRzID0gY2F0ZWdvcnkubWF4TnVtYmVyT2ZFbGVtZW50cztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGNvbmZpZ3VyYXRpb24uZ2V0KFwibGlzdFwiKS5tYXhOdW1iZXJPZkVsZW1lbnRzICE9PSB1bmRlZmluZWQpIHtcclxuXHJcblx0XHRcdFx0YnVpbGRlci5tYXhMaXN0U2l6ZSA9IGNvbmZpZ3VyYXRpb24uZ2V0KFwibGlzdFwiKS5tYXhOdW1iZXJPZkVsZW1lbnRzO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoY2F0ZWdvcnkuZ2V0VmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG5cclxuXHRcdFx0XHRpZiAodHlwZW9mIGNhdGVnb3J5LmdldFZhbHVlID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdFx0XHR2YXIgZGVmYXVsdHNHZXRWYWx1ZSA9IGNhdGVnb3J5LmdldFZhbHVlO1xyXG5cdFx0XHRcdFx0YnVpbGRlci5nZXRWYWx1ZSA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGVsZW1lbnRbZGVmYXVsdHNHZXRWYWx1ZV07XHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIGNhdGVnb3J5LmdldFZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdFx0XHRcdGJ1aWxkZXIuZ2V0VmFsdWUgPSBjYXRlZ29yeS5nZXRWYWx1ZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGJ1aWxkZXIuZ2V0VmFsdWUgPSBjb25maWd1cmF0aW9uLmdldChcImdldFZhbHVlXCIpO1x0XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblxyXG5cdFx0XHRyZXR1cm4gYnVpbGRlcjtcclxuXHJcblxyXG5cdFx0XHRmdW5jdGlvbiBjb252ZXJ0WG1sVG9MaXN0QnVpbGRlcigpIHtcclxuXHJcblx0XHRcdFx0dmFyIGJ1aWxkZXIgPSB7fSxcclxuXHRcdFx0XHRcdGxpc3RMb2NhdGlvbjtcclxuXHJcblx0XHRcdFx0aWYgKGNhdGVnb3J5LnhtbEVsZW1lbnROYW1lICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdGJ1aWxkZXIueG1sRWxlbWVudE5hbWUgPSBjYXRlZ29yeS54bWxFbGVtZW50TmFtZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChjYXRlZ29yeS5saXN0TG9jYXRpb24gIT09IHVuZGVmaW5lZCkge1xyXG5cclxuXHRcdFx0XHRcdGxpc3RMb2NhdGlvbiA9IGNhdGVnb3J5Lmxpc3RMb2NhdGlvbjtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGNvbmZpZ3VyYXRpb24uZ2V0KFwibGlzdExvY2F0aW9uXCIpICE9PSB1bmRlZmluZWQpIHtcclxuXHJcblx0XHRcdFx0XHRsaXN0TG9jYXRpb24gPSBjb25maWd1cmF0aW9uLmdldChcImxpc3RMb2NhdGlvblwiKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChsaXN0TG9jYXRpb24gIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBsaXN0TG9jYXRpb24gPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0XHRcdFx0YnVpbGRlci5kYXRhID0gJChkYXRhKS5maW5kKGxpc3RMb2NhdGlvbik7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBsaXN0TG9jYXRpb24gPT09IFwiZnVuY3Rpb25cIikge1xyXG5cclxuXHRcdFx0XHRcdFx0YnVpbGRlci5kYXRhID0gbGlzdExvY2F0aW9uKGRhdGEpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0YnVpbGRlci5kYXRhID0gZGF0YTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHJldHVybiBidWlsZGVyO1xyXG5cdFx0XHR9XHJcblxyXG5cclxuXHRcdFx0ZnVuY3Rpb24gY29udmVydERhdGFUb0xpc3RCdWlsZGVyKCkge1xyXG5cclxuXHRcdFx0XHR2YXIgYnVpbGRlciA9IHt9O1xyXG5cclxuXHRcdFx0XHRpZiAoY2F0ZWdvcnkubGlzdExvY2F0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuXHJcblx0XHRcdFx0XHRpZiAodHlwZW9mIGNhdGVnb3J5Lmxpc3RMb2NhdGlvbiA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHRcdFx0XHRidWlsZGVyLmRhdGEgPSBkYXRhW2NhdGVnb3J5Lmxpc3RMb2NhdGlvbl07XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBjYXRlZ29yeS5saXN0TG9jYXRpb24gPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0XHRcdFx0XHRidWlsZGVyLmRhdGEgPSBjYXRlZ29yeS5saXN0TG9jYXRpb24oZGF0YSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGJ1aWxkZXIuZGF0YSA9IGRhdGE7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRyZXR1cm4gYnVpbGRlcjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGNvbnZlcnRYbWxUb0xpc3QoYnVpbGRlcikge1xyXG5cdFx0XHR2YXIgc2ltcGxlTGlzdCA9IFtdO1xyXG5cclxuXHRcdFx0aWYgKGJ1aWxkZXIueG1sRWxlbWVudE5hbWUgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdGJ1aWxkZXIueG1sRWxlbWVudE5hbWUgPSBjb25maWd1cmF0aW9uLmdldChcInhtbEVsZW1lbnROYW1lXCIpO1xyXG5cdFx0XHR9XHJcblxyXG5cclxuXHRcdFx0JChidWlsZGVyLmRhdGEpLmZpbmQoYnVpbGRlci54bWxFbGVtZW50TmFtZSkuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRzaW1wbGVMaXN0LnB1c2godGhpcyk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0cmV0dXJuIHNpbXBsZUxpc3Q7XHJcblx0XHR9XHJcblxyXG5cdH07XHJcblxyXG5cdHJldHVybiBzY29wZTtcclxuXHJcbn0pKEVhc3lBdXRvY29tcGxldGUgfHwge30pO1xyXG5cclxuXHJcbi8qXHJcbiAqIEVhc3lBdXRvY29tcGxldGUgLSBEYXRhIHByb2NjZXNzIG1vZHVsZVxyXG4gKlxyXG4gKiBQcm9jZXNzIGxpc3QgdG8gZGlzcGxheTpcclxuICogLSBzb3J0IFxyXG4gKiAtIGRlY3JlYXNlIG51bWJlciB0byBzcGVjaWZpYyBudW1iZXJcclxuICogLSBzaG93IG9ubHkgbWF0Y2hpbmcgbGlzdFxyXG4gKlxyXG4gKi9cclxudmFyIEVhc3lBdXRvY29tcGxldGUgPSAoZnVuY3Rpb24oc2NvcGUpIHtcclxuXHJcblx0c2NvcGUucHJvY2Nlc3MgPSBmdW5jdGlvbiBwcm9jY2Vzc0RhdGEoY29uZmlnLCBsaXN0QnVpbGRlciwgcGhyYXNlKSB7XHJcblxyXG5cdFx0c2NvcGUucHJvY2Nlc3MubWF0Y2ggPSBtYXRjaDtcclxuXHJcblx0XHR2YXIgbGlzdCA9IGxpc3RCdWlsZGVyLmRhdGEsXHJcblx0XHRcdGlucHV0UGhyYXNlID0gcGhyYXNlOy8vVE9ETyBSRUZBQ1RPUlxyXG5cclxuXHRcdGxpc3QgPSBmaW5kTWF0Y2gobGlzdCwgaW5wdXRQaHJhc2UpO1xyXG5cdFx0bGlzdCA9IHJlZHVjZUVsZW1lbnRzSW5MaXN0KGxpc3QpO1xyXG5cdFx0bGlzdCA9IHNvcnQobGlzdCk7XHJcblxyXG5cdFx0cmV0dXJuIGxpc3Q7XHJcblxyXG5cclxuXHRcdGZ1bmN0aW9uIGZpbmRNYXRjaChsaXN0LCBwaHJhc2UpIHtcclxuXHRcdFx0dmFyIHByZXBhcmVkTGlzdCA9IFtdLFxyXG5cdFx0XHRcdHZhbHVlID0gXCJcIjtcclxuXHJcblx0XHRcdGlmIChjb25maWcuZ2V0KFwibGlzdFwiKS5tYXRjaC5lbmFibGVkKSB7XHJcblxyXG5cdFx0XHRcdGZvcih2YXIgaSA9IDAsIGxlbmd0aCA9IGxpc3QubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcclxuXHJcblx0XHRcdFx0XHR2YWx1ZSA9IGNvbmZpZy5nZXQoXCJnZXRWYWx1ZVwiKShsaXN0W2ldKTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aWYgKG1hdGNoKHZhbHVlLCBwaHJhc2UpKSB7XHJcblx0XHRcdFx0XHRcdHByZXBhcmVkTGlzdC5wdXNoKGxpc3RbaV0pO1x0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHByZXBhcmVkTGlzdCA9IGxpc3Q7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBwcmVwYXJlZExpc3Q7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gbWF0Y2godmFsdWUsIHBocmFzZSkge1xyXG5cclxuXHRcdFx0aWYgKCFjb25maWcuZ2V0KFwibGlzdFwiKS5tYXRjaC5jYXNlU2Vuc2l0aXZlKSB7XHJcblxyXG5cdFx0XHRcdGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0XHRcdHZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRwaHJhc2UgPSBwaHJhc2UudG9Mb3dlckNhc2UoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoY29uZmlnLmdldChcImxpc3RcIikubWF0Y2gubWV0aG9kKHZhbHVlLCBwaHJhc2UpKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gcmVkdWNlRWxlbWVudHNJbkxpc3QobGlzdCkge1xyXG5cdFx0XHRpZiAobGlzdEJ1aWxkZXIubWF4TnVtYmVyT2ZFbGVtZW50cyAhPT0gdW5kZWZpbmVkICYmIGxpc3QubGVuZ3RoID4gbGlzdEJ1aWxkZXIubWF4TnVtYmVyT2ZFbGVtZW50cykge1xyXG5cdFx0XHRcdGxpc3QgPSBsaXN0LnNsaWNlKDAsIGxpc3RCdWlsZGVyLm1heE51bWJlck9mRWxlbWVudHMpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gbGlzdDtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBzb3J0KGxpc3QpIHtcclxuXHRcdFx0aWYgKGNvbmZpZy5nZXQoXCJsaXN0XCIpLnNvcnQuZW5hYmxlZCkge1xyXG5cdFx0XHRcdGxpc3Quc29ydChjb25maWcuZ2V0KFwibGlzdFwiKS5zb3J0Lm1ldGhvZCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBsaXN0O1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fTtcclxuXHJcblxyXG5cdHJldHVybiBzY29wZTtcclxuXHJcblxyXG59KShFYXN5QXV0b2NvbXBsZXRlIHx8IHt9KTtcclxuXHJcblxyXG4vKlxyXG4gKiBFYXN5QXV0b2NvbXBsZXRlIC0gVGVtcGxhdGUgXHJcbiAqXHJcbiAqIFxyXG4gKlxyXG4gKi9cclxudmFyIEVhc3lBdXRvY29tcGxldGUgPSAoZnVuY3Rpb24oc2NvcGUpe1xyXG5cclxuXHRzY29wZS5UZW1wbGF0ZSA9IGZ1bmN0aW9uIFRlbXBsYXRlKG9wdGlvbnMpIHtcclxuXHJcblxyXG5cdFx0dmFyIGdlbmVyaWNUZW1wbGF0ZXMgPSB7XHJcblx0XHRcdGJhc2ljOiB7XHJcblx0XHRcdFx0dHlwZTogXCJiYXNpY1wiLFxyXG5cdFx0XHRcdG1ldGhvZDogZnVuY3Rpb24oZWxlbWVudCkgeyByZXR1cm4gZWxlbWVudDsgfSxcclxuXHRcdFx0XHRjc3NDbGFzczogXCJcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRkZXNjcmlwdGlvbjoge1xyXG5cdFx0XHRcdHR5cGU6IFwiZGVzY3JpcHRpb25cIixcclxuXHRcdFx0XHRmaWVsZHM6IHtcclxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBcImRlc2NyaXB0aW9uXCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdG1ldGhvZDogZnVuY3Rpb24oZWxlbWVudCkge1x0cmV0dXJuIGVsZW1lbnQgKyBcIiAtIGRlc2NyaXB0aW9uXCI7IH0sXHJcblx0XHRcdFx0Y3NzQ2xhc3M6IFwiZWFjLWRlc2NyaXB0aW9uXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0aWNvbkxlZnQ6IHtcclxuXHRcdFx0XHR0eXBlOiBcImljb25MZWZ0XCIsXHJcblx0XHRcdFx0ZmllbGRzOiB7XHJcblx0XHRcdFx0XHRpY29uOiBcIlwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRtZXRob2Q6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuXHRcdFx0XHRcdHJldHVybiBlbGVtZW50O1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Y3NzQ2xhc3M6IFwiZWFjLWljb24tbGVmdFwiXHJcblx0XHRcdH0sXHJcblx0XHRcdGljb25SaWdodDoge1xyXG5cdFx0XHRcdHR5cGU6IFwiaWNvblJpZ2h0XCIsXHJcblx0XHRcdFx0ZmllbGRzOiB7XHJcblx0XHRcdFx0XHRpY29uU3JjOiBcIlwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRtZXRob2Q6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuXHRcdFx0XHRcdHJldHVybiBlbGVtZW50O1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Y3NzQ2xhc3M6IFwiZWFjLWljb24tcmlnaHRcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRsaW5rczoge1xyXG5cdFx0XHRcdHR5cGU6IFwibGlua3NcIixcclxuXHRcdFx0XHRmaWVsZHM6IHtcclxuXHRcdFx0XHRcdGxpbms6IFwiXCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdG1ldGhvZDogZnVuY3Rpb24oZWxlbWVudCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGVsZW1lbnQ7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRjc3NDbGFzczogXCJcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjdXN0b206IHtcclxuXHRcdFx0XHR0eXBlOiBcImN1c3RvbVwiLFxyXG5cdFx0XHRcdG1ldGhvZDogZnVuY3Rpb24oKSB7fSxcclxuXHRcdFx0XHRjc3NDbGFzczogXCJcIlxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHJcblxyXG5cdFx0LypcclxuXHRcdCAqIENvbnZlcnRzIG1ldGhvZCB3aXRoIHt7dGV4dH19IHRvIGZ1bmN0aW9uXHJcblx0XHQgKi9cclxuXHRcdGNvbnZlcnRUZW1wbGF0ZVRvTWV0aG9kID0gZnVuY3Rpb24odGVtcGxhdGUpIHtcclxuXHJcblxyXG5cdFx0XHR2YXIgX2ZpZWxkcyA9IHRlbXBsYXRlLmZpZWxkcyxcclxuXHRcdFx0XHRidWlsZE1ldGhvZDtcclxuXHJcblx0XHRcdGlmICh0ZW1wbGF0ZS50eXBlID09PSBcImRlc2NyaXB0aW9uXCIpIHtcclxuXHJcblx0XHRcdFx0YnVpbGRNZXRob2QgPSBnZW5lcmljVGVtcGxhdGVzLmRlc2NyaXB0aW9uLm1ldGhvZDsgXHJcblxyXG5cdFx0XHRcdGlmICh0eXBlb2YgX2ZpZWxkcy5kZXNjcmlwdGlvbiA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHRcdFx0YnVpbGRNZXRob2QgPSBmdW5jdGlvbihlbGVtZW50VmFsdWUsIGVsZW1lbnQpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGVsZW1lbnRWYWx1ZSArIFwiIC0gPHNwYW4+XCIgKyBlbGVtZW50W19maWVsZHMuZGVzY3JpcHRpb25dICsgXCI8L3NwYW4+XCI7XHJcblx0XHRcdFx0XHR9O1x0XHRcdFx0XHRcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBfZmllbGRzLmRlc2NyaXB0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdFx0XHRcdGJ1aWxkTWV0aG9kID0gZnVuY3Rpb24oZWxlbWVudFZhbHVlLCBlbGVtZW50KSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBlbGVtZW50VmFsdWUgKyBcIiAtIDxzcGFuPlwiICsgX2ZpZWxkcy5kZXNjcmlwdGlvbihlbGVtZW50KSArIFwiPC9zcGFuPlwiO1xyXG5cdFx0XHRcdFx0fTtcdFxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cmV0dXJuIGJ1aWxkTWV0aG9kO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAodGVtcGxhdGUudHlwZSA9PT0gXCJpY29uUmlnaHRcIikge1xyXG5cclxuXHRcdFx0XHRpZiAodHlwZW9mIF9maWVsZHMuaWNvblNyYyA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHRcdFx0YnVpbGRNZXRob2QgPSBmdW5jdGlvbihlbGVtZW50VmFsdWUsIGVsZW1lbnQpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGVsZW1lbnRWYWx1ZSArIFwiPGltZyBjbGFzcz0nZWFjLWljb24nIHNyYz0nXCIgKyBlbGVtZW50W19maWVsZHMuaWNvblNyY10gKyBcIicgLz5cIiA7XHJcblx0XHRcdFx0XHR9O1x0XHRcdFx0XHRcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBfZmllbGRzLmljb25TcmMgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0XHRcdFx0YnVpbGRNZXRob2QgPSBmdW5jdGlvbihlbGVtZW50VmFsdWUsIGVsZW1lbnQpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGVsZW1lbnRWYWx1ZSArIFwiPGltZyBjbGFzcz0nZWFjLWljb24nIHNyYz0nXCIgKyBfZmllbGRzLmljb25TcmMoZWxlbWVudCkgKyBcIicgLz5cIiA7XHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cmV0dXJuIGJ1aWxkTWV0aG9kO1xyXG5cdFx0XHR9XHJcblxyXG5cclxuXHRcdFx0aWYgKHRlbXBsYXRlLnR5cGUgPT09IFwiaWNvbkxlZnRcIikge1xyXG5cclxuXHRcdFx0XHRpZiAodHlwZW9mIF9maWVsZHMuaWNvblNyYyA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHRcdFx0YnVpbGRNZXRob2QgPSBmdW5jdGlvbihlbGVtZW50VmFsdWUsIGVsZW1lbnQpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIFwiPGltZyBjbGFzcz0nZWFjLWljb24nIHNyYz0nXCIgKyBlbGVtZW50W19maWVsZHMuaWNvblNyY10gKyBcIicgLz5cIiArIGVsZW1lbnRWYWx1ZTtcclxuXHRcdFx0XHRcdH07XHRcdFx0XHRcdFxyXG5cdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIF9maWVsZHMuaWNvblNyYyA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRcdFx0XHRidWlsZE1ldGhvZCA9IGZ1bmN0aW9uKGVsZW1lbnRWYWx1ZSwgZWxlbWVudCkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gXCI8aW1nIGNsYXNzPSdlYWMtaWNvbicgc3JjPSdcIiArIF9maWVsZHMuaWNvblNyYyhlbGVtZW50KSArIFwiJyAvPlwiICsgZWxlbWVudFZhbHVlO1xyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHJldHVybiBidWlsZE1ldGhvZDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYodGVtcGxhdGUudHlwZSA9PT0gXCJsaW5rc1wiKSB7XHJcblxyXG5cdFx0XHRcdGlmICh0eXBlb2YgX2ZpZWxkcy5saW5rID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdFx0XHRidWlsZE1ldGhvZCA9IGZ1bmN0aW9uKGVsZW1lbnRWYWx1ZSwgZWxlbWVudCkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gXCI8YSBocmVmPSdcIiArIGVsZW1lbnRbX2ZpZWxkcy5saW5rXSArIFwiJyA+XCIgKyBlbGVtZW50VmFsdWUgKyBcIjwvYT5cIjtcclxuXHRcdFx0XHRcdH07XHRcdFx0XHRcdFxyXG5cdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIF9maWVsZHMubGluayA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRcdFx0XHRidWlsZE1ldGhvZCA9IGZ1bmN0aW9uKGVsZW1lbnRWYWx1ZSwgZWxlbWVudCkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gXCI8YSBocmVmPSdcIiArIF9maWVsZHMubGluayhlbGVtZW50KSArIFwiJyA+XCIgKyBlbGVtZW50VmFsdWUgKyBcIjwvYT5cIjtcclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRyZXR1cm4gYnVpbGRNZXRob2Q7XHJcblx0XHRcdH1cclxuXHJcblxyXG5cdFx0XHRpZiAodGVtcGxhdGUudHlwZSA9PT0gXCJjdXN0b21cIikge1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gdGVtcGxhdGUubWV0aG9kO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gZ2VuZXJpY1RlbXBsYXRlcy5iYXNpYy5tZXRob2Q7XHJcblxyXG5cdFx0fSxcclxuXHJcblxyXG5cdFx0cHJlcGFyZUJ1aWxkTWV0aG9kID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG5cdFx0XHRpZiAoIW9wdGlvbnMgfHwgIW9wdGlvbnMudHlwZSkge1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gZ2VuZXJpY1RlbXBsYXRlcy5iYXNpYy5tZXRob2Q7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChvcHRpb25zLnR5cGUgJiYgZ2VuZXJpY1RlbXBsYXRlc1tvcHRpb25zLnR5cGVdKSB7XHJcblxyXG5cdFx0XHRcdHJldHVybiBjb252ZXJ0VGVtcGxhdGVUb01ldGhvZChvcHRpb25zKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0cmV0dXJuIGdlbmVyaWNUZW1wbGF0ZXMuYmFzaWMubWV0aG9kO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHR0ZW1wbGF0ZUNsYXNzID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG5cdFx0XHR2YXIgZW1wdHlTdHJpbmdGdW5jdGlvbiA9IGZ1bmN0aW9uKCkge3JldHVybiBcIlwiO307XHJcblxyXG5cdFx0XHRpZiAoIW9wdGlvbnMgfHwgIW9wdGlvbnMudHlwZSkge1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gZW1wdHlTdHJpbmdGdW5jdGlvbjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKG9wdGlvbnMudHlwZSAmJiBnZW5lcmljVGVtcGxhdGVzW29wdGlvbnMudHlwZV0pIHtcclxuXHRcdFx0XHRyZXR1cm4gKGZ1bmN0aW9uICgpIHsgXHJcblx0XHRcdFx0XHR2YXIgX2Nzc0NsYXNzID0gZ2VuZXJpY1RlbXBsYXRlc1tvcHRpb25zLnR5cGVdLmNzc0NsYXNzO1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCkgeyByZXR1cm4gX2Nzc0NsYXNzO307XHJcblx0XHRcdFx0fSkoKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gZW1wdHlTdHJpbmdGdW5jdGlvbjtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblxyXG5cdFx0dGhpcy5nZXRUZW1wbGF0ZUNsYXNzID0gdGVtcGxhdGVDbGFzcyhvcHRpb25zKTtcclxuXHJcblx0XHR0aGlzLmJ1aWxkID0gcHJlcGFyZUJ1aWxkTWV0aG9kKG9wdGlvbnMpO1xyXG5cclxuXHJcblx0fTtcclxuXHJcblx0cmV0dXJuIHNjb3BlO1xyXG5cclxufSkoRWFzeUF1dG9jb21wbGV0ZSB8fCB7fSk7XHJcblxyXG5cclxuLypcclxuICogRWFzeUF1dG9jb21wbGV0ZSAtIGpRdWVyeSBwbHVnaW4gZm9yIGF1dG9jb21wbGV0aW9uXHJcbiAqXHJcbiAqL1xyXG52YXIgRWFzeUF1dG9jb21wbGV0ZSA9IChmdW5jdGlvbihzY29wZSkge1xyXG5cclxuXHRcclxuXHRzY29wZS5tYWluID0gZnVuY3Rpb24gQ29yZSgkaW5wdXQsIG9wdGlvbnMpIHtcclxuXHRcdFx0XHRcclxuXHRcdHZhciBtb2R1bGUgPSB7XHJcblx0XHRcdFx0bmFtZTogXCJFYXN5QXV0b2NvbXBsZXRlXCIsXHJcblx0XHRcdFx0c2hvcnRjdXQ6IFwiZWFjXCJcclxuXHRcdFx0fTtcclxuXHJcblx0XHR2YXIgY29uc3RzID0gbmV3IHNjb3BlLkNvbnN0YW5zKCksXHJcblx0XHRcdGNvbmZpZyA9IG5ldyBzY29wZS5Db25maWd1cmF0aW9uKG9wdGlvbnMpLFxyXG5cdFx0XHRsb2dnZXIgPSBuZXcgc2NvcGUuTG9nZ2VyKCksXHJcblx0XHRcdHRlbXBsYXRlID0gbmV3IHNjb3BlLlRlbXBsYXRlKG9wdGlvbnMudGVtcGxhdGUpLFxyXG5cdFx0XHRsaXN0QnVpbGRlclNlcnZpY2UgPSBuZXcgc2NvcGUuTGlzdEJ1aWxkZXJTZXJ2aWNlKGNvbmZpZywgc2NvcGUucHJvY2Nlc3MpLFxyXG5cdFx0XHRjaGVja1BhcmFtID0gY29uZmlnLmVxdWFscyxcclxuXHJcblx0XHRcdCRmaWVsZCA9ICRpbnB1dCwgXHJcblx0XHRcdCRjb250YWluZXIgPSBcIlwiLFxyXG5cdFx0XHRlbGVtZW50c0xpc3QgPSBbXSxcclxuXHRcdFx0c2VsZWN0ZWRFbGVtZW50ID0gLTEsXHJcblx0XHRcdHJlcXVlc3REZWxheVRpbWVvdXRJZDtcclxuXHJcblx0XHRzY29wZS5jb25zdHMgPSBjb25zdHM7XHJcblxyXG5cdFx0dGhpcy5nZXRDb25zdGFudHMgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuIGNvbnN0cztcclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy5nZXRDb25maWd1cmF0aW9uID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiBjb25maWc7XHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMuZ2V0Q29udGFpbmVyID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiAkY29udGFpbmVyO1xyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLmdldFNlbGVjdGVkSXRlbUluZGV4ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiBzZWxlY3RlZEVsZW1lbnQ7XHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMuZ2V0SXRlbXMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiBlbGVtZW50c0xpc3Q7XHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMuZ2V0SXRlbURhdGEgPSBmdW5jdGlvbihpbmRleCkge1xyXG5cclxuXHRcdFx0aWYgKGVsZW1lbnRzTGlzdC5sZW5ndGggPCBpbmRleCB8fCBlbGVtZW50c0xpc3RbaW5kZXhdID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRyZXR1cm4gLTE7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIGVsZW1lbnRzTGlzdFtpbmRleF07XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy5nZXRTZWxlY3RlZEl0ZW1EYXRhID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmdldEl0ZW1EYXRhKHNlbGVjdGVkRWxlbWVudCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMuYnVpbGQgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cHJlcGFyZUZpZWxkKCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMuaW5pdCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpbml0KCk7XHJcblx0XHR9O1xyXG5cdFx0ZnVuY3Rpb24gaW5pdCgpIHtcclxuXHJcblx0XHRcdGlmICgkZmllbGQubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdFx0bG9nZ2VyLmVycm9yKFwiSW5wdXQgZmllbGQgZG9lc24ndCBleGlzdC5cIik7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIWNvbmZpZy5jaGVja0RhdGFVcmxQcm9wZXJ0aWVzKCkpIHtcclxuXHRcdFx0XHRsb2dnZXIuZXJyb3IoXCJPbmUgb2Ygb3B0aW9ucyB2YXJpYWJsZXMgJ2RhdGEnIG9yICd1cmwnIG11c3QgYmUgZGVmaW5lZC5cIik7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIWNvbmZpZy5jaGVja1JlcXVpcmVkUHJvcGVydGllcygpKSB7XHJcblx0XHRcdFx0bG9nZ2VyLmVycm9yKFwiV2lsbCBub3Qgd29yayB3aXRob3V0IG1lbnRpb25lZCBwcm9wZXJ0aWVzLlwiKTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblxyXG5cdFx0XHRwcmVwYXJlRmllbGQoKTtcclxuXHRcdFx0YmluZEV2ZW50cygpO1x0XHJcblxyXG5cdFx0fVxyXG5cdFx0ZnVuY3Rpb24gcHJlcGFyZUZpZWxkKCkge1xyXG5cclxuXHRcdFx0XHRcclxuXHRcdFx0aWYgKCRmaWVsZC5wYXJlbnQoKS5oYXNDbGFzcyhjb25zdHMuZ2V0VmFsdWUoXCJXUkFQUEVSX0NTU19DTEFTU1wiKSkpIHtcclxuXHRcdFx0XHRyZW1vdmVDb250YWluZXIoKTtcclxuXHRcdFx0XHRyZW1vdmVXcmFwcGVyKCk7XHJcblx0XHRcdH0gXHJcblx0XHRcdFxyXG5cdFx0XHRjcmVhdGVXcmFwcGVyKCk7XHJcblx0XHRcdGNyZWF0ZUNvbnRhaW5lcigpO1x0XHJcblxyXG5cdFx0XHQkY29udGFpbmVyID0gJChcIiNcIiArIGdldENvbnRhaW5lcklkKCkpO1xyXG5cdFx0XHRpZiAoY29uZmlnLmdldChcInBsYWNlaG9sZGVyXCIpKSB7XHJcblx0XHRcdFx0JGZpZWxkLmF0dHIoXCJwbGFjZWhvbGRlclwiLCBjb25maWcuZ2V0KFwicGxhY2Vob2xkZXJcIikpO1xyXG5cdFx0XHR9XHJcblxyXG5cclxuXHRcdFx0ZnVuY3Rpb24gY3JlYXRlV3JhcHBlcigpIHtcclxuXHRcdFx0XHR2YXIgJHdyYXBwZXIgPSAkKFwiPGRpdj5cIiksXHJcblx0XHRcdFx0XHRjbGFzc2VzID0gY29uc3RzLmdldFZhbHVlKFwiV1JBUFBFUl9DU1NfQ0xBU1NcIik7XHJcblxyXG5cdFx0XHRcclxuXHRcdFx0XHRpZiAoY29uZmlnLmdldChcInRoZW1lXCIpICYmIGNvbmZpZy5nZXQoXCJ0aGVtZVwiKSAhPT0gXCJcIikge1xyXG5cdFx0XHRcdFx0Y2xhc3NlcyArPSBcIiBlYWMtXCIgKyBjb25maWcuZ2V0KFwidGhlbWVcIik7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoY29uZmlnLmdldChcImNzc0NsYXNzZXNcIikgJiYgY29uZmlnLmdldChcImNzc0NsYXNzZXNcIikgIT09IFwiXCIpIHtcclxuXHRcdFx0XHRcdGNsYXNzZXMgKz0gXCIgXCIgKyBjb25maWcuZ2V0KFwiY3NzQ2xhc3Nlc1wiKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICh0ZW1wbGF0ZS5nZXRUZW1wbGF0ZUNsYXNzKCkgIT09IFwiXCIpIHtcclxuXHRcdFx0XHRcdGNsYXNzZXMgKz0gXCIgXCIgKyB0ZW1wbGF0ZS5nZXRUZW1wbGF0ZUNsYXNzKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cclxuXHRcdFx0XHQkd3JhcHBlclxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKGNsYXNzZXMpO1xyXG5cdFx0XHRcdCRmaWVsZC53cmFwKCR3cmFwcGVyKTtcclxuXHJcblxyXG5cdFx0XHRcdGlmIChjb25maWcuZ2V0KFwiYWRqdXN0V2lkdGhcIikgPT09IHRydWUpIHtcclxuXHRcdFx0XHRcdGFkanVzdFdyYXBwZXJXaWR0aCgpO1x0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZnVuY3Rpb24gYWRqdXN0V3JhcHBlcldpZHRoKCkge1xyXG5cdFx0XHRcdHZhciBmaWVsZFdpZHRoID0gJGZpZWxkLm91dGVyV2lkdGgoKTtcclxuXHJcblx0XHRcdFx0JGZpZWxkLnBhcmVudCgpLmNzcyhcIndpZHRoXCIsIGZpZWxkV2lkdGgpO1x0XHRcdFx0XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZ1bmN0aW9uIHJlbW92ZVdyYXBwZXIoKSB7XHJcblx0XHRcdFx0JGZpZWxkLnVud3JhcCgpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmdW5jdGlvbiBjcmVhdGVDb250YWluZXIoKSB7XHJcblx0XHRcdFx0dmFyICRlbGVtZW50c19jb250YWluZXIgPSAkKFwiPGRpdj5cIikuYWRkQ2xhc3MoY29uc3RzLmdldFZhbHVlKFwiQ09OVEFJTkVSX0NMQVNTXCIpKTtcclxuXHJcblx0XHRcdFx0JGVsZW1lbnRzX2NvbnRhaW5lclxyXG5cdFx0XHRcdFx0XHQuYXR0cihcImlkXCIsIGdldENvbnRhaW5lcklkKCkpXHJcblx0XHRcdFx0XHRcdC5wcmVwZW5kKCQoXCI8dWw+XCIpKTtcclxuXHJcblxyXG5cdFx0XHRcdChmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdFx0XHQkZWxlbWVudHNfY29udGFpbmVyXHJcblx0XHRcdFx0XHRcdC8qIExpc3Qgc2hvdyBhbmltYXRpb24gKi9cclxuXHRcdFx0XHRcdFx0Lm9uKFwic2hvdy5lYWNcIiwgZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHN3aXRjaChjb25maWcuZ2V0KFwibGlzdFwiKS5zaG93QW5pbWF0aW9uLnR5cGUpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRjYXNlIFwic2xpZGVcIjpcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIGFuaW1hdGlvblRpbWUgPSBjb25maWcuZ2V0KFwibGlzdFwiKS5zaG93QW5pbWF0aW9uLnRpbWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2sgPSBjb25maWcuZ2V0KFwibGlzdFwiKS5zaG93QW5pbWF0aW9uLmNhbGxiYWNrO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0JGVsZW1lbnRzX2NvbnRhaW5lci5maW5kKFwidWxcIikuc2xpZGVEb3duKGFuaW1hdGlvblRpbWUsIGNhbGxiYWNrKTtcclxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgXCJmYWRlXCI6XHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhciBhbmltYXRpb25UaW1lID0gY29uZmlnLmdldChcImxpc3RcIikuc2hvd0FuaW1hdGlvbi50aW1lLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNhbGxiYWNrID0gY29uZmlnLmdldChcImxpc3RcIikuc2hvd0FuaW1hdGlvbi5jYWxsYmFjaztcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdCRlbGVtZW50c19jb250YWluZXIuZmluZChcInVsXCIpLmZhZGVJbihhbmltYXRpb25UaW1lKSwgY2FsbGJhY2s7XHJcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQkZWxlbWVudHNfY29udGFpbmVyLmZpbmQoXCJ1bFwiKS5zaG93KCk7XHJcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdGNvbmZpZy5nZXQoXCJsaXN0XCIpLm9uU2hvd0xpc3RFdmVudCgpO1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHQvKiBMaXN0IGhpZGUgYW5pbWF0aW9uICovXHJcblx0XHRcdFx0XHRcdC5vbihcImhpZGUuZWFjXCIsIGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRzd2l0Y2goY29uZmlnLmdldChcImxpc3RcIikuaGlkZUFuaW1hdGlvbi50eXBlKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSBcInNsaWRlXCI6XHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhciBhbmltYXRpb25UaW1lID0gY29uZmlnLmdldChcImxpc3RcIikuaGlkZUFuaW1hdGlvbi50aW1lLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNhbGxiYWNrID0gY29uZmlnLmdldChcImxpc3RcIikuaGlkZUFuaW1hdGlvbi5jYWxsYmFjaztcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdCRlbGVtZW50c19jb250YWluZXIuZmluZChcInVsXCIpLnNsaWRlVXAoYW5pbWF0aW9uVGltZSwgY2FsbGJhY2spO1xyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSBcImZhZGVcIjpcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIGFuaW1hdGlvblRpbWUgPSBjb25maWcuZ2V0KFwibGlzdFwiKS5oaWRlQW5pbWF0aW9uLnRpbWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2sgPSBjb25maWcuZ2V0KFwibGlzdFwiKS5oaWRlQW5pbWF0aW9uLmNhbGxiYWNrO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0JGVsZW1lbnRzX2NvbnRhaW5lci5maW5kKFwidWxcIikuZmFkZU91dChhbmltYXRpb25UaW1lLCBjYWxsYmFjayk7XHJcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQkZWxlbWVudHNfY29udGFpbmVyLmZpbmQoXCJ1bFwiKS5oaWRlKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdGNvbmZpZy5nZXQoXCJsaXN0XCIpLm9uSGlkZUxpc3RFdmVudCgpO1xyXG5cclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0Lm9uKFwic2VsZWN0RWxlbWVudC5lYWNcIiwgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0JGVsZW1lbnRzX2NvbnRhaW5lci5maW5kKFwidWwgbGlcIikucmVtb3ZlQ2xhc3MoXCJzZWxlY3RlZFwiKTtcclxuXHRcdFx0XHRcdFx0XHQkZWxlbWVudHNfY29udGFpbmVyLmZpbmQoXCJ1bCBsaVwiKS5lcShzZWxlY3RlZEVsZW1lbnQpLmFkZENsYXNzKFwic2VsZWN0ZWRcIik7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGNvbmZpZy5nZXQoXCJsaXN0XCIpLm9uU2VsZWN0SXRlbUV2ZW50KCk7XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdC5vbihcImxvYWRFbGVtZW50cy5lYWNcIiwgZnVuY3Rpb24oZXZlbnQsIGxpc3RCdWlsZGVycywgcGhyYXNlKSB7XHJcblx0XHRcdFxyXG5cclxuXHRcdFx0XHRcdFx0XHR2YXIgJGl0ZW0gPSBcIlwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0JGxpc3RDb250YWluZXIgPSAkZWxlbWVudHNfY29udGFpbmVyLmZpbmQoXCJ1bFwiKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0JGxpc3RDb250YWluZXJcclxuXHRcdFx0XHRcdFx0XHRcdC5lbXB0eSgpXHJcblx0XHRcdFx0XHRcdFx0XHQuZGV0YWNoKCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGVsZW1lbnRzTGlzdCA9IFtdO1xyXG5cdFx0XHRcdFx0XHRcdHZhciBjb3VudGVyID0gMDtcclxuXHRcdFx0XHRcdFx0XHRmb3IodmFyIGJ1aWxkZXJJbmRleCA9IDAsIGxpc3RCdWlsZGVyc0xlbmd0aCA9IGxpc3RCdWlsZGVycy5sZW5ndGg7IGJ1aWxkZXJJbmRleCA8IGxpc3RCdWlsZGVyc0xlbmd0aDsgYnVpbGRlckluZGV4ICs9IDEpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgbGlzdERhdGEgPSBsaXN0QnVpbGRlcnNbYnVpbGRlckluZGV4XS5kYXRhO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChsaXN0RGF0YS5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGxpc3RCdWlsZGVyc1tidWlsZGVySW5kZXhdLmhlYWRlciAhPT0gdW5kZWZpbmVkICYmIGxpc3RCdWlsZGVyc1tidWlsZGVySW5kZXhdLmhlYWRlci5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdCRsaXN0Q29udGFpbmVyLmFwcGVuZChcIjxkaXYgY2xhc3M9J2VhYy1jYXRlZ29yeScgPlwiICsgbGlzdEJ1aWxkZXJzW2J1aWxkZXJJbmRleF0uaGVhZGVyICsgXCI8L2Rpdj5cIik7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0Zm9yKHZhciBpID0gMCwgbGlzdERhdGFMZW5ndGggPSBsaXN0RGF0YS5sZW5ndGg7IGkgPCBsaXN0RGF0YUxlbmd0aCAmJiBjb3VudGVyIDwgbGlzdEJ1aWxkZXJzW2J1aWxkZXJJbmRleF0ubWF4TGlzdFNpemU7IGkgKz0gMSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQkaXRlbSA9ICQoXCI8bGk+PGRpdiBjbGFzcz0nZWFjLWl0ZW0nPjwvZGl2PjwvbGk+XCIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YXIgaiA9IGksXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpdGVtQ291bnRlciA9IGNvdW50ZXIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlbGVtZW50c1ZhbHVlID0gbGlzdEJ1aWxkZXJzW2J1aWxkZXJJbmRleF0uZ2V0VmFsdWUobGlzdERhdGFbal0pO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQkaXRlbS5maW5kKFwiID4gZGl2XCIpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRmaWVsZC52YWwoZWxlbWVudHNWYWx1ZSkudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNlbGVjdGVkRWxlbWVudCA9IGl0ZW1Db3VudGVyO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZWxlY3RFbGVtZW50KGl0ZW1Db3VudGVyKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbmZpZy5nZXQoXCJsaXN0XCIpLm9uQ2xpY2tFdmVudCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb25maWcuZ2V0KFwibGlzdFwiKS5vbkNob29zZUV2ZW50KCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lm1vdXNlb3ZlcihmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNlbGVjdGVkRWxlbWVudCA9IGl0ZW1Db3VudGVyO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZWxlY3RFbGVtZW50KGl0ZW1Db3VudGVyKTtcdFxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uZmlnLmdldChcImxpc3RcIikub25Nb3VzZU92ZXJFdmVudCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5tb3VzZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uZmlnLmdldChcImxpc3RcIikub25Nb3VzZU91dEV2ZW50KCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lmh0bWwodGVtcGxhdGUuYnVpbGQoaGlnaGxpZ2h0KGVsZW1lbnRzVmFsdWUsIHBocmFzZSksIGxpc3REYXRhW2pdKSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pKCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQkbGlzdENvbnRhaW5lci5hcHBlbmQoJGl0ZW0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRlbGVtZW50c0xpc3QucHVzaChsaXN0RGF0YVtpXSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvdW50ZXIgKz0gMTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdCRlbGVtZW50c19jb250YWluZXIuYXBwZW5kKCRsaXN0Q29udGFpbmVyKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0Y29uZmlnLmdldChcImxpc3RcIikub25Mb2FkRXZlbnQoKTtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdH0pKCk7XHJcblxyXG5cdFx0XHRcdCRmaWVsZC5hZnRlcigkZWxlbWVudHNfY29udGFpbmVyKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZnVuY3Rpb24gcmVtb3ZlQ29udGFpbmVyKCkge1xyXG5cdFx0XHRcdCRmaWVsZC5uZXh0KFwiLlwiICsgY29uc3RzLmdldFZhbHVlKFwiQ09OVEFJTkVSX0NMQVNTXCIpKS5yZW1vdmUoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZnVuY3Rpb24gaGlnaGxpZ2h0KHN0cmluZywgcGhyYXNlKSB7XHJcblxyXG5cdFx0XHRcdGlmKGNvbmZpZy5nZXQoXCJoaWdobGlnaHRQaHJhc2VcIikgJiYgcGhyYXNlICE9PSBcIlwiKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gaGlnaGxpZ2h0UGhyYXNlKHN0cmluZywgcGhyYXNlKTtcdFxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gc3RyaW5nO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmdW5jdGlvbiBlc2NhcGVSZWdFeHAoc3RyKSB7XHJcblx0XHRcdFx0cmV0dXJuIHN0ci5yZXBsYWNlKC9bXFwtXFxbXFxdXFwvXFx7XFx9XFwoXFwpXFwqXFwrXFw/XFwuXFxcXFxcXlxcJFxcfF0vZywgXCJcXFxcJCZcIik7XHJcbiBcdFx0XHR9XHJcblxyXG5cdFx0XHRmdW5jdGlvbiBoaWdobGlnaHRQaHJhc2Uoc3RyaW5nLCBwaHJhc2UpIHtcclxuXHRcdFx0XHR2YXIgZXNjYXBlZFBocmFzZSA9IGVzY2FwZVJlZ0V4cChwaHJhc2UpO1xyXG5cdFx0XHRcdHJldHVybiAoc3RyaW5nICsgXCJcIikucmVwbGFjZShuZXcgUmVnRXhwKFwiKFwiICsgZXNjYXBlZFBocmFzZSArIFwiKVwiLCBcImdpXCIpICwgXCI8Yj4kMTwvYj5cIik7XHJcblx0XHRcdH1cclxuXHJcblxyXG5cclxuXHRcdH1cclxuXHRcdGZ1bmN0aW9uIGdldENvbnRhaW5lcklkKCkge1xyXG5cdFx0XHRcclxuXHRcdFx0dmFyIGVsZW1lbnRJZCA9ICRmaWVsZC5hdHRyKFwiaWRcIik7XHJcblxyXG5cdFx0XHRlbGVtZW50SWQgPSBjb25zdHMuZ2V0VmFsdWUoXCJDT05UQUlORVJfSURcIikgKyBlbGVtZW50SWQ7XHJcblxyXG5cdFx0XHRyZXR1cm4gZWxlbWVudElkO1xyXG5cdFx0fVxyXG5cdFx0ZnVuY3Rpb24gYmluZEV2ZW50cygpIHtcclxuXHJcblx0XHRcdGJpbmRBbGxFdmVudHMoKTtcclxuXHRcdFx0XHJcblxyXG5cdFx0XHRmdW5jdGlvbiBiaW5kQWxsRXZlbnRzKCkge1xyXG5cdFx0XHRcdGlmIChjaGVja1BhcmFtKFwiYXV0b2NvbXBsZXRlT2ZmXCIsIHRydWUpKSB7XHJcblx0XHRcdFx0XHRyZW1vdmVBdXRvY29tcGxldGUoKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGJpbmRGb2N1c091dCgpO1xyXG5cdFx0XHRcdGJpbmRLZXl1cCgpO1xyXG5cdFx0XHRcdGJpbmRLZXlkb3duKCk7XHJcblx0XHRcdFx0YmluZEtleXByZXNzKCk7XHJcblx0XHRcdFx0YmluZEZvY3VzKCk7XHJcblx0XHRcdFx0YmluZEJsdXIoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZnVuY3Rpb24gYmluZEZvY3VzT3V0KCkge1xyXG5cdFx0XHRcdCRmaWVsZC5mb2N1c291dChmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHRcdFx0dmFyIGZpZWxkVmFsdWUgPSAkZmllbGQudmFsKCksXHJcblx0XHRcdFx0XHRcdHBocmFzZTtcclxuXHJcblx0XHRcdFx0XHRpZiAoIWNvbmZpZy5nZXQoXCJsaXN0XCIpLm1hdGNoLmNhc2VTZW5zaXRpdmUpIHtcclxuXHRcdFx0XHRcdFx0ZmllbGRWYWx1ZSA9IGZpZWxkVmFsdWUudG9Mb3dlckNhc2UoKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gZWxlbWVudHNMaXN0Lmxlbmd0aDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRwaHJhc2UgPSBjb25maWcuZ2V0KFwiZ2V0VmFsdWVcIikoZWxlbWVudHNMaXN0W2ldKTtcclxuXHRcdFx0XHRcdFx0aWYgKCFjb25maWcuZ2V0KFwibGlzdFwiKS5tYXRjaC5jYXNlU2Vuc2l0aXZlKSB7XHJcblx0XHRcdFx0XHRcdFx0cGhyYXNlID0gcGhyYXNlLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdGlmIChwaHJhc2UgPT09IGZpZWxkVmFsdWUpIHtcclxuXHRcdFx0XHRcdFx0XHRzZWxlY3RlZEVsZW1lbnQgPSBpO1xyXG5cdFx0XHRcdFx0XHRcdHNlbGVjdEVsZW1lbnQoc2VsZWN0ZWRFbGVtZW50KTtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZnVuY3Rpb24gYmluZEtleXVwKCkge1xyXG5cdFx0XHRcdCRmaWVsZFxyXG5cdFx0XHRcdC5vZmYoXCJrZXl1cFwiKVxyXG5cdFx0XHRcdC5rZXl1cChmdW5jdGlvbihldmVudCkge1xyXG5cclxuXHRcdFx0XHRcdHN3aXRjaChldmVudC5rZXlDb2RlKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRjYXNlIDI3OlxyXG5cclxuXHRcdFx0XHRcdFx0XHRoaWRlQ29udGFpbmVyKCk7XHJcblx0XHRcdFx0XHRcdFx0bG9zZUZpZWxkRm9jdXMoKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0XHRjYXNlIDM4OlxyXG5cclxuXHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZihlbGVtZW50c0xpc3QubGVuZ3RoID4gMCAmJiBzZWxlY3RlZEVsZW1lbnQgPiAwKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0c2VsZWN0ZWRFbGVtZW50IC09IDE7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0JGZpZWxkLnZhbChjb25maWcuZ2V0KFwiZ2V0VmFsdWVcIikoZWxlbWVudHNMaXN0W3NlbGVjdGVkRWxlbWVudF0pKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRzZWxlY3RFbGVtZW50KHNlbGVjdGVkRWxlbWVudCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0XHRjYXNlIDQwOlxyXG5cclxuXHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZihlbGVtZW50c0xpc3QubGVuZ3RoID4gMCAmJiBzZWxlY3RlZEVsZW1lbnQgPCBlbGVtZW50c0xpc3QubGVuZ3RoIC0gMSkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHNlbGVjdGVkRWxlbWVudCArPSAxO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdCRmaWVsZC52YWwoY29uZmlnLmdldChcImdldFZhbHVlXCIpKGVsZW1lbnRzTGlzdFtzZWxlY3RlZEVsZW1lbnRdKSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0c2VsZWN0RWxlbWVudChzZWxlY3RlZEVsZW1lbnQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0XHRkZWZhdWx0OlxyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAoZXZlbnQua2V5Q29kZSA+IDQwIHx8IGV2ZW50LmtleUNvZGUgPT09IDgpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgaW5wdXRQaHJhc2UgPSAkZmllbGQudmFsKCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCEoY29uZmlnLmdldChcImxpc3RcIikuaGlkZU9uRW1wdHlQaHJhc2UgPT09IHRydWUgJiYgZXZlbnQua2V5Q29kZSA9PT0gOCAmJiBpbnB1dFBocmFzZSA9PT0gXCJcIikpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChjb25maWcuZ2V0KFwicmVxdWVzdERlbGF5XCIpID4gMCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChyZXF1ZXN0RGVsYXlUaW1lb3V0SWQgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHJlcXVlc3REZWxheVRpbWVvdXRJZCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXF1ZXN0RGVsYXlUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgbG9hZERhdGEoaW5wdXRQaHJhc2UpO30sIGNvbmZpZy5nZXQoXCJyZXF1ZXN0RGVsYXlcIikpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxvYWREYXRhKGlucHV0UGhyYXNlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGhpZGVDb250YWluZXIoKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHJcblx0XHRcdFx0XHRmdW5jdGlvbiBsb2FkRGF0YShpbnB1dFBocmFzZSkge1xyXG5cclxuXHJcblx0XHRcdFx0XHRcdGlmIChpbnB1dFBocmFzZS5sZW5ndGggPCBjb25maWcuZ2V0KFwibWluQ2hhck51bWJlclwiKSkge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHJcblx0XHRcdFx0XHRcdGlmIChjb25maWcuZ2V0KFwiZGF0YVwiKSAhPT0gXCJsaXN0LXJlcXVpcmVkXCIpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0dmFyIGRhdGEgPSBjb25maWcuZ2V0KFwiZGF0YVwiKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0dmFyIGxpc3RCdWlsZGVycyA9IGxpc3RCdWlsZGVyU2VydmljZS5pbml0KGRhdGEpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRsaXN0QnVpbGRlcnMgPSBsaXN0QnVpbGRlclNlcnZpY2UudXBkYXRlQ2F0ZWdvcmllcyhsaXN0QnVpbGRlcnMsIGRhdGEpO1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdGxpc3RCdWlsZGVycyA9IGxpc3RCdWlsZGVyU2VydmljZS5wcm9jZXNzRGF0YShsaXN0QnVpbGRlcnMsIGlucHV0UGhyYXNlKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0bG9hZEVsZW1lbnRzKGxpc3RCdWlsZGVycywgaW5wdXRQaHJhc2UpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAoJGZpZWxkLnBhcmVudCgpLmZpbmQoXCJsaVwiKS5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRzaG93Q29udGFpbmVyKCk7XHRcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0aGlkZUNvbnRhaW5lcigpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdHZhciBzZXR0aW5ncyA9IGNyZWF0ZUFqYXhTZXR0aW5ncygpO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKHNldHRpbmdzLnVybCA9PT0gdW5kZWZpbmVkIHx8IHNldHRpbmdzLnVybCA9PT0gXCJcIikge1xyXG5cdFx0XHRcdFx0XHRcdHNldHRpbmdzLnVybCA9IGNvbmZpZy5nZXQoXCJ1cmxcIik7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdGlmIChzZXR0aW5ncy5kYXRhVHlwZSA9PT0gdW5kZWZpbmVkIHx8IHNldHRpbmdzLmRhdGFUeXBlID09PSBcIlwiKSB7XHJcblx0XHRcdFx0XHRcdFx0c2V0dGluZ3MuZGF0YVR5cGUgPSBjb25maWcuZ2V0KFwiZGF0YVR5cGVcIik7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoc2V0dGluZ3MudXJsICE9PSB1bmRlZmluZWQgJiYgc2V0dGluZ3MudXJsICE9PSBcImxpc3QtcmVxdWlyZWRcIikge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRzZXR0aW5ncy51cmwgPSBzZXR0aW5ncy51cmwoaW5wdXRQaHJhc2UpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRzZXR0aW5ncy5kYXRhID0gY29uZmlnLmdldChcInByZXBhcmVQb3N0RGF0YVwiKShzZXR0aW5ncy5kYXRhLCBpbnB1dFBocmFzZSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdCQuYWpheChzZXR0aW5ncykgXHJcblx0XHRcdFx0XHRcdFx0XHQuZG9uZShmdW5jdGlvbihkYXRhKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgbGlzdEJ1aWxkZXJzID0gbGlzdEJ1aWxkZXJTZXJ2aWNlLmluaXQoZGF0YSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRsaXN0QnVpbGRlcnMgPSBsaXN0QnVpbGRlclNlcnZpY2UudXBkYXRlQ2F0ZWdvcmllcyhsaXN0QnVpbGRlcnMsIGRhdGEpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0bGlzdEJ1aWxkZXJzID0gbGlzdEJ1aWxkZXJTZXJ2aWNlLmNvbnZlcnRYbWwobGlzdEJ1aWxkZXJzKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGNoZWNrSW5wdXRQaHJhc2VNYXRjaFJlc3BvbnNlKGlucHV0UGhyYXNlLCBkYXRhKSkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsaXN0QnVpbGRlcnMgPSBsaXN0QnVpbGRlclNlcnZpY2UucHJvY2Vzc0RhdGEobGlzdEJ1aWxkZXJzLCBpbnB1dFBocmFzZSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxvYWRFbGVtZW50cyhsaXN0QnVpbGRlcnMsIGlucHV0UGhyYXNlKTtcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChsaXN0QnVpbGRlclNlcnZpY2UuY2hlY2tJZkRhdGFFeGlzdHMobGlzdEJ1aWxkZXJzKSAmJiAkZmllbGQucGFyZW50KCkuZmluZChcImxpXCIpLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzaG93Q29udGFpbmVyKCk7XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRoaWRlQ29udGFpbmVyKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbmZpZy5nZXQoXCJhamF4Q2FsbGJhY2tcIikoKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdFx0LmZhaWwoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGxvZ2dlci53YXJuaW5nKFwiRmFpbCB0byBsb2FkIHJlc3BvbnNlIGRhdGFcIik7XHJcblx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdFx0LmFsd2F5cyhmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHJcblxyXG5cdFx0XHRcdFx0XHRmdW5jdGlvbiBjcmVhdGVBamF4U2V0dGluZ3MoKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHZhciBzZXR0aW5ncyA9IHt9LFxyXG5cdFx0XHRcdFx0XHRcdFx0YWpheFNldHRpbmdzID0gY29uZmlnLmdldChcImFqYXhTZXR0aW5nc1wiKSB8fCB7fTtcclxuXHJcblx0XHRcdFx0XHRcdFx0Zm9yICh2YXIgc2V0IGluIGFqYXhTZXR0aW5ncykge1xyXG5cdFx0XHRcdFx0XHRcdFx0c2V0dGluZ3Nbc2V0XSA9IGFqYXhTZXR0aW5nc1tzZXRdO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHNldHRpbmdzO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRmdW5jdGlvbiBjaGVja0lucHV0UGhyYXNlTWF0Y2hSZXNwb25zZShpbnB1dFBocmFzZSwgZGF0YSkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAoY29uZmlnLmdldChcIm1hdGNoUmVzcG9uc2VQcm9wZXJ0eVwiKSAhPT0gZmFsc2UpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmICh0eXBlb2YgY29uZmlnLmdldChcIm1hdGNoUmVzcG9uc2VQcm9wZXJ0eVwiKSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKGRhdGFbY29uZmlnLmdldChcIm1hdGNoUmVzcG9uc2VQcm9wZXJ0eVwiKV0gPT09IGlucHV0UGhyYXNlKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAodHlwZW9mIGNvbmZpZy5nZXQoXCJtYXRjaFJlc3BvbnNlUHJvcGVydHlcIikgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKGNvbmZpZy5nZXQoXCJtYXRjaFJlc3BvbnNlUHJvcGVydHlcIikoZGF0YSkgPT09IGlucHV0UGhyYXNlKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmdW5jdGlvbiBiaW5kS2V5ZG93bigpIHtcclxuXHRcdFx0XHQkZmllbGRcclxuXHRcdFx0XHRcdC5vbihcImtleWRvd25cIiwgZnVuY3Rpb24oZXZ0KSB7XHJcblx0ICAgICAgICBcdFx0ICAgIGV2dCA9IGV2dCB8fCB3aW5kb3cuZXZlbnQ7XHJcblx0ICAgICAgICBcdFx0ICAgIHZhciBrZXlDb2RlID0gZXZ0LmtleUNvZGU7XHJcblx0ICAgICAgICBcdFx0ICAgIGlmIChrZXlDb2RlID09PSAzOCkge1xyXG5cdCAgICAgICAgXHRcdCAgICAgICAgc3VwcHJlc3NLZXlwcmVzcyA9IHRydWU7IFxyXG5cdCAgICAgICAgXHRcdCAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cdCAgICAgICAgXHRcdCAgICB9XHJcblx0XHQgICAgICAgIFx0fSlcclxuXHRcdFx0XHRcdC5rZXlkb3duKGZ1bmN0aW9uKGV2ZW50KSB7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMgJiYgc2VsZWN0ZWRFbGVtZW50ID4gLTEpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0JGZpZWxkLnZhbChjb25maWcuZ2V0KFwiZ2V0VmFsdWVcIikoZWxlbWVudHNMaXN0W3NlbGVjdGVkRWxlbWVudF0pKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0Y29uZmlnLmdldChcImxpc3RcIikub25LZXlFbnRlckV2ZW50KCk7XHJcblx0XHRcdFx0XHRcdFx0Y29uZmlnLmdldChcImxpc3RcIikub25DaG9vc2VFdmVudCgpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRzZWxlY3RlZEVsZW1lbnQgPSAtMTtcclxuXHRcdFx0XHRcdFx0XHRoaWRlQ29udGFpbmVyKCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmdW5jdGlvbiBiaW5kS2V5cHJlc3MoKSB7XHJcblx0XHRcdFx0JGZpZWxkXHJcblx0XHRcdFx0Lm9mZihcImtleXByZXNzXCIpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmdW5jdGlvbiBiaW5kRm9jdXMoKSB7XHJcblx0XHRcdFx0JGZpZWxkLmZvY3VzKGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0XHRcdGlmICgkZmllbGQudmFsKCkgIT09IFwiXCIgJiYgZWxlbWVudHNMaXN0Lmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdHNlbGVjdGVkRWxlbWVudCA9IC0xO1xyXG5cdFx0XHRcdFx0XHRzaG93Q29udGFpbmVyKCk7XHRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZ1bmN0aW9uIGJpbmRCbHVyKCkge1xyXG5cdFx0XHRcdCRmaWVsZC5ibHVyKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHsgXHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRzZWxlY3RlZEVsZW1lbnQgPSAtMTtcclxuXHRcdFx0XHRcdFx0aGlkZUNvbnRhaW5lcigpO1xyXG5cdFx0XHRcdFx0fSwgMjUwKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZnVuY3Rpb24gcmVtb3ZlQXV0b2NvbXBsZXRlKCkge1xyXG5cdFx0XHRcdCRmaWVsZC5hdHRyKFwiYXV0b2NvbXBsZXRlXCIsXCJvZmZcIik7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gc2hvd0NvbnRhaW5lcigpIHtcclxuXHRcdFx0JGNvbnRhaW5lci50cmlnZ2VyKFwic2hvdy5lYWNcIik7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gaGlkZUNvbnRhaW5lcigpIHtcclxuXHRcdFx0JGNvbnRhaW5lci50cmlnZ2VyKFwiaGlkZS5lYWNcIik7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gc2VsZWN0RWxlbWVudChpbmRleCkge1xyXG5cdFx0XHRcclxuXHRcdFx0JGNvbnRhaW5lci50cmlnZ2VyKFwic2VsZWN0RWxlbWVudC5lYWNcIiwgaW5kZXgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGxvYWRFbGVtZW50cyhsaXN0LCBwaHJhc2UpIHtcclxuXHRcdFx0JGNvbnRhaW5lci50cmlnZ2VyKFwibG9hZEVsZW1lbnRzLmVhY1wiLCBbbGlzdCwgcGhyYXNlXSk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gbG9zZUZpZWxkRm9jdXMoKSB7XHJcblx0XHRcdCRmaWVsZC50cmlnZ2VyKFwiYmx1clwiKTtcclxuXHRcdH1cclxuXHJcblxyXG5cdH07XHJcblx0c2NvcGUuZWFjSGFuZGxlcyA9IFtdO1xyXG5cclxuXHRzY29wZS5nZXRIYW5kbGUgPSBmdW5jdGlvbihpZCkge1xyXG5cdFx0cmV0dXJuIHNjb3BlLmVhY0hhbmRsZXNbaWRdO1xyXG5cdH07XHJcblxyXG5cdHNjb3BlLmlucHV0SGFzSWQgPSBmdW5jdGlvbihpbnB1dCkge1xyXG5cclxuXHRcdGlmKCQoaW5wdXQpLmF0dHIoXCJpZFwiKSAhPT0gdW5kZWZpbmVkICYmICQoaW5wdXQpLmF0dHIoXCJpZFwiKS5sZW5ndGggPiAwKSB7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHR9O1xyXG5cclxuXHRzY29wZS5hc3NpZ25SYW5kb21JZCA9IGZ1bmN0aW9uKGlucHV0KSB7XHJcblxyXG5cdFx0dmFyIGZpZWxkSWQgPSBcIlwiO1xyXG5cclxuXHRcdGRvIHtcclxuXHRcdFx0ZmllbGRJZCA9IFwiZWFjLVwiICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDApO1x0XHRcclxuXHRcdH0gd2hpbGUgKCQoXCIjXCIgKyBmaWVsZElkKS5sZW5ndGggIT09IDApO1xyXG5cdFx0XHJcblx0XHRlbGVtZW50SWQgPSBzY29wZS5jb25zdHMuZ2V0VmFsdWUoXCJDT05UQUlORVJfSURcIikgKyBmaWVsZElkO1xyXG5cclxuXHRcdCQoaW5wdXQpLmF0dHIoXCJpZFwiLCBmaWVsZElkKTtcclxuIFxyXG5cdH07XHJcblxyXG5cdHNjb3BlLnNldEhhbmRsZSA9IGZ1bmN0aW9uKGhhbmRsZSwgaWQpIHtcclxuXHRcdHNjb3BlLmVhY0hhbmRsZXNbaWRdID0gaGFuZGxlO1xyXG5cdH07XHJcblxyXG5cclxuXHRyZXR1cm4gc2NvcGU7XHJcblxyXG59KShFYXN5QXV0b2NvbXBsZXRlIHx8IHt9KTtcclxuXHJcbihmdW5jdGlvbigkKSB7XHJcblxyXG5cdCQuZm4uZWFzeUF1dG9jb21wbGV0ZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG5cdFx0XHRcdGVhY0hhbmRsZSA9IG5ldyBFYXN5QXV0b2NvbXBsZXRlLm1haW4oJHRoaXMsIG9wdGlvbnMpO1xyXG5cclxuXHRcdFx0aWYgKCFFYXN5QXV0b2NvbXBsZXRlLmlucHV0SGFzSWQoJHRoaXMpKSB7XHJcblx0XHRcdFx0RWFzeUF1dG9jb21wbGV0ZS5hc3NpZ25SYW5kb21JZCgkdGhpcyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGVhY0hhbmRsZS5pbml0KCk7XHJcblxyXG5cdFx0XHRFYXN5QXV0b2NvbXBsZXRlLnNldEhhbmRsZShlYWNIYW5kbGUsICR0aGlzLmF0dHIoXCJpZFwiKSk7XHJcblxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0JC5mbi5nZXRTZWxlY3RlZEl0ZW1JbmRleCA9IGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdHZhciBpbnB1dElkID0gJCh0aGlzKS5hdHRyKFwiaWRcIik7XHJcblxyXG5cdFx0aWYgKGlucHV0SWQgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRyZXR1cm4gRWFzeUF1dG9jb21wbGV0ZS5nZXRIYW5kbGUoaW5wdXRJZCkuZ2V0U2VsZWN0ZWRJdGVtSW5kZXgoKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gLTE7XHJcblx0fTtcclxuXHJcblx0JC5mbi5nZXRJdGVtcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHR2YXIgaW5wdXRJZCA9ICQodGhpcykuYXR0cihcImlkXCIpO1xyXG5cclxuXHRcdGlmIChpbnB1dElkICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0cmV0dXJuIEVhc3lBdXRvY29tcGxldGUuZ2V0SGFuZGxlKGlucHV0SWQpLmdldEl0ZW1zKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIC0xO1xyXG5cdH07XHJcblxyXG5cdCQuZm4uZ2V0SXRlbURhdGEgPSBmdW5jdGlvbihpbmRleCkge1xyXG5cclxuXHRcdHZhciBpbnB1dElkID0gJCh0aGlzKS5hdHRyKFwiaWRcIik7XHJcblxyXG5cdFx0aWYgKGlucHV0SWQgIT09IHVuZGVmaW5lZCAmJiBpbmRleCA+IC0xKSB7XHJcblx0XHRcdHJldHVybiBFYXN5QXV0b2NvbXBsZXRlLmdldEhhbmRsZShpbnB1dElkKS5nZXRJdGVtRGF0YShpbmRleCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIC0xO1xyXG5cdH07XHJcblxyXG5cdCQuZm4uZ2V0U2VsZWN0ZWRJdGVtRGF0YSA9IGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdHZhciBpbnB1dElkID0gJCh0aGlzKS5hdHRyKFwiaWRcIik7XHJcblxyXG5cdFx0aWYgKGlucHV0SWQgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRyZXR1cm4gRWFzeUF1dG9jb21wbGV0ZS5nZXRIYW5kbGUoaW5wdXRJZCkuZ2V0U2VsZWN0ZWRJdGVtRGF0YSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiAtMTtcclxuXHR9O1xyXG5cclxufSkoalF1ZXJ5KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==