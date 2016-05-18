(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else if(typeof exports === 'object')
		exports["jwplayer"] = factory();
	else
		root["jwplayer"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonpjwplayer"];
/******/ 	window["webpackJsonpjwplayer"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);

/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + ({"1":"polyfills.promise","2":"polyfills.base64","3":"provider.youtube"}[chunkId]||chunkId) + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** multi jwplayer ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./src/js/jwplayer.js */39);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/*!****************************!*\
  !*** ./src/js/jwplayer.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! api/global-api */ 40),
	    __webpack_require__(/*! utils/helpers */ 45),
	    __webpack_require__(/*! ../css/jwplayer.less */ 145)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (GlobalApi, utils) {
	    /*global __webpack_public_path__:true*/
	    __webpack_require__.p = utils.loadFrom();

	    return GlobalApi.selectPlayer;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 40 */
/*!**********************************!*\
  !*** ./src/js/api/global-api.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! api/api */ 41),
	    __webpack_require__(/*! utils/underscore */ 42),
	    __webpack_require__(/*! providers/default */ 80),
	    __webpack_require__(/*! providers/providers-loaded */ 78),
	    __webpack_require__(/*! providers/providers-supported */ 76),
	    __webpack_require__(/*! plugins/plugins */ 89)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(Api, _, Default, ProvidersLoaded, ProvidersSupported, plugins) {

	    var _instances = [],
	        _uniqueIndex = 0;


	    var selectPlayer = function (query) {
	        var player;
	        var domElement;

	        // prioritize getting a player over querying an element
	        if (!query) {
	            player = _instances[0];
	        } else if (typeof query === 'string') {
	            player = _playerById(query);
	            if (!player) {
	                domElement = document.getElementById(query);
	            }
	        } else if (typeof query === 'number') {
	            player = _instances[query];
	        } else if (query.nodeType) {
	            domElement = query;
	            player = _playerById(domElement.id);
	        }
	        // found player
	        if (player) {
	            return player;
	        }
	        // create player
	        if (domElement) {
	            return _addPlayer(new Api(domElement, _removePlayer));
	        }
	        // invalid query
	        return {
	            registerPlugin: plugins.registerPlugin
	        };
	    };

	    var _playerById = function (id) {
	        for (var p = 0; p < _instances.length; p++) {
	            if (_instances[p].id === id) {
	                return _instances[p];
	            }
	        }

	        return null;
	    };

	    var _addPlayer = function (api) {
	        _uniqueIndex++;
	        api.uniqueId = _uniqueIndex;
	        _instances.push(api);
	        return api;
	    };

	    var _removePlayer = function (api) {
	        for (var i=_instances.length; i--;) {
	            if (_instances[i].uniqueId === api.uniqueId) {
	                _instances.splice(i, 1);
	                break;
	            }
	        }
	    };

	    function registerProvider(provider) {
	        var name = provider.getName().name;

	        // If there isn't a "supports" val for this guy
	        if (! _.find(ProvidersSupported, _.matches({name : name}))) {
	            if (!_.isFunction(provider.supports)) {
	                throw {
	                    message: 'Tried to register a provider with an invalid object'
	                };
	            }

	            // The most recent provider will be in the front of the array, and chosen first
	            ProvidersSupported.unshift({
	                name : name,
	                supports : provider.supports
	            });
	        }

	        var F = function(){};
	        F.prototype = Default;
	        provider.prototype = new F();

	        // After registration, it is loaded
	        ProvidersLoaded[name] = provider;
	    }


	    var api = {
	        selectPlayer : selectPlayer,
	        registerProvider: registerProvider,
	        availableProviders: ProvidersSupported,
	        registerPlugin : plugins.registerPlugin
	    };

	    selectPlayer.api = api;

	    return api;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 41 */
/*!***************************!*\
  !*** ./src/js/api/api.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! events/events */ 43),
	    __webpack_require__(/*! events/states */ 59),
	    __webpack_require__(/*! utils/backbone.events */ 44),
	    __webpack_require__(/*! utils/helpers */ 45),
	    __webpack_require__(/*! utils/timer */ 58),
	    __webpack_require__(/*! utils/trycatch */ 48),
	    __webpack_require__(/*! utils/underscore */ 42),
	    __webpack_require__(/*! controller/controller */ 60),
	    __webpack_require__(/*! api/api-actions */ 142),
	    __webpack_require__(/*! api/api-mutators */ 143),
	    __webpack_require__(/*! api/callbacks-deprecate */ 144),
	    __webpack_require__(/*! version */ 57)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(events, states,
	            Events, utils, Timer, trycatch, _, Controller, actionsInit, mutatorsInit, legacyInit, version) {

	    function addFocusBorder(container) {
	        utils.addClass(container, 'jw-tab-focus');
	    }

	    function removeFocusBorder(container) {
	        utils.removeClass(container, 'jw-tab-focus');
	    }

	    var Api = function (container, globalRemovePlayer) {
	        var _this = this,
	            _controller,
	            _playerReady = false,
	            _itemMeta = {};

	        // Set up event handling
	        _.extend(this, Events);

	        // This helps plugins, particularly analytics
	        this.utils = utils;
	        this._ = _;
	        this.Events = Events;
	        this.version = version;

	        this.trigger = function(type, args) {
	            if (_.isObject(args)) {
	                args = _.extend({}, args);
	            } else {
	                args = {};
	            }
	            args.type = type;
	            if (window.jwplayer && window.jwplayer.debug) {
	                return Events.trigger.call(_this, type, args);
	            }
	            return Events.triggerSafe.call(_this, type, args);
	        };

	        // Required by vast
	        // <deprecate>
	        this.dispatchEvent = this.trigger;
	        this.removeEventListener = this.off.bind(this);
	        // </deprecate>

	        var _setupController = function() {
	            _controller = new Controller(container);

	            // Add a bunch of methods
	            actionsInit(_this, _controller);
	            mutatorsInit(_this, _controller);
	            _controller.on(events.JWPLAYER_PLAYLIST_ITEM, function () {
	                _itemMeta = {};
	            });
	            _controller.on(events.JWPLAYER_MEDIA_META, function (data) {
	                _.extend(_itemMeta, data.metadata);
	            });
	            _controller.on(events.JWPLAYER_VIEW_TAB_FOCUS, function (data) {
	                if (data.hasFocus === true) {
	                    addFocusBorder(this.getContainer());
	                } else {
	                    removeFocusBorder(this.getContainer());
	                }
	            });
	            // capture the ready event and add setup time to it
	            _controller.on(events.JWPLAYER_READY, function(event) {
	                _playerReady = true;
	                _qoe.tick('ready');
	                event.setupTime = _qoe.between('setup', 'ready');
	            });
	            _controller.on('all', _this.trigger);
	        };
	        _setupController();
	        legacyInit(this);

	        // These should be read-only model properties
	        this.id = container.id;

	        // Intialize QOE timer
	        var _qoe = this._qoe = new Timer();
	        _qoe.tick('init');


	        var _reset = function() {
	            _playerReady = false;
	            _itemMeta = {};

	            _this.off();

	            if (_controller) {
	                _controller.off();
	            }

	            // so players can be removed before loading completes
	            if (_controller && _controller.playerDestroy) {
	                _controller.playerDestroy();
	            }
	        };

	        this.getPlugin = function(name) {
	            return _this.plugins && _this.plugins[name];
	        };

	        this.addPlugin = function(name, pluginInstance) {
	            this.plugins = this.plugins || {};
	            this.plugins[name] = pluginInstance;


	            this.onReady(pluginInstance.addToPlayer);

	            // A swf plugin may rely on resize events
	            if (pluginInstance.resize) {
	                this.onResize(pluginInstance.resizeHandler);
	            }
	        };

	        this.setup = function (options) {
	            _qoe.tick('setup');

	            _reset();
	            _setupController();

	            // bind event listeners passed in to the config
	            utils.foreach(options.events, function(evt, val) {
	                var fn = _this[evt];
	                if (typeof fn === 'function') {
	                    fn.call(_this, val);
	                }
	            });

	            options.id = _this.id;
	            _controller.setup(options, this);

	            return _this;
	        };

	        this.qoe = function() {
	            var qoeItem = _controller.getItemQoe();

	            var setupTime = _qoe.between('setup', 'ready');
	            var firstFrame = qoeItem.between(events.JWPLAYER_MEDIA_PLAY_ATTEMPT, events.JWPLAYER_MEDIA_FIRST_FRAME);

	            return {
	                setupTime : setupTime,
	                firstFrame : firstFrame,
	                player : _qoe.dump(),
	                item : qoeItem.dump()
	            };
	        };

	        // Request this from the view/controller
	        this.getContainer = function () {
	            if(_controller.getContainer) {
	                // If the controller has fully set up...
	                return _controller.getContainer();
	            }
	            // If the controller hasn't set up yet, and we need this (due a setup to error), send the container
	            return container;
	        };

	        this.getMeta = this.getItemMeta = function () {
	            return _itemMeta;
	        };

	        this.getPlaylistItem = function (index) {
	            if (!utils.exists(index)) {
	                return _controller._model.get('playlistItem');
	            }
	            var playlist = _this.getPlaylist();
	            if (playlist) {
	                return playlist[index];
	            }
	            return null;
	        };

	        this.getRenderingMode = function () {
	            return 'html5';
	        };

	        this.load = function (toLoad) {
	            var plugin = this.getPlugin('vast') || this.getPlugin('googima');
	            if (plugin) {
	                plugin.destroy();
	            }
	            _controller.load(toLoad);
	            return _this;
	        };

	        this.play = function (state) {
	            if (state === true) {
	                _controller.play();
	                return _this;
	            } else if (state === false) {
	                _controller.pause();
	                return _this;
	            }

	            state = _this.getState();
	            switch (state) {
	                case states.PLAYING:
	                case states.BUFFERING:
	                    _controller.pause();
	                    break;
	                default:
	                    _controller.play();
	            }

	            return _this;
	        };

	        this.pause = function (state) {
	            if (_.isBoolean(state)) {
	                return this.play(!state);
	            }

	            return this.play();
	        };

	        this.createInstream = function () {
	            return _controller.createInstream();
	        };

	        this.castToggle = function() {
	            if (_controller && _controller.castToggle) {
	                _controller.castToggle();
	            }
	        };

	        // These may be overridden by ad plugins
	        this.playAd = this.pauseAd = utils.noop;

	        this.remove = function () {
	            // Remove from array of players
	            globalRemovePlayer(_this);

	            // terminate state
	            _this.trigger('remove');

	            // Unbind listeners and destroy controller/model/...
	            _reset();

	            return _this;
	        };

	        return this;
	    };

	    return Api;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 42 */
/*!************************************!*\
  !*** ./src/js/utils/underscore.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.6.0
	//     http://underscorejs.org
	//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Underscore may be freely distributed under the MIT license.

	// https://github.com/jashkenas/underscore/blob/1f4bf626f23a99f7a676f5076dc1b1475554c8f7/underscore.js

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {

	    // Establish the object that gets returned to break out of a loop iteration.
	    var breaker = {};

	    // Save bytes in the minified (but not gzipped) version:
	    var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

	    // Create quick reference variables for speed access to core prototypes.
	    var
	        slice = ArrayProto.slice,
	        concat = ArrayProto.concat,
	        toString = ObjProto.toString,
	        hasOwnProperty = ObjProto.hasOwnProperty;

	    // All **ECMAScript 5** native function implementations that we hope to use
	    // are declared here.
	    var
	        nativeMap = ArrayProto.map,
	        nativeReduce       = ArrayProto.reduce,
	        nativeForEach = ArrayProto.forEach,
	        nativeFilter = ArrayProto.filter,
	        nativeEvery = ArrayProto.every,
	        nativeSome = ArrayProto.some,
	        nativeIndexOf = ArrayProto.indexOf,
	        nativeIsArray = Array.isArray,
	        nativeKeys = Object.keys,
	        nativeBind = FuncProto.bind;


	    // Create a safe reference to the Underscore object for use below.
	    var _ = function (obj) {
	        if (obj instanceof _) return obj;
	        if (!(this instanceof _)) return new _(obj);
	    };

	    // Collection Functions
	    // --------------------

	    // The cornerstone, an `each` implementation, aka `forEach`.
	    // Handles objects with the built-in `forEach`, arrays, and raw objects.
	    // Delegates to **ECMAScript 5**'s native `forEach` if available.
	    var each = _.each = _.forEach = function (obj, iterator, context) {
	        if (obj == null) return obj;
	        if (nativeForEach && obj.forEach === nativeForEach) {
	            obj.forEach(iterator, context);
	        } else if (obj.length === +obj.length) {
	            for (var i = 0, length = obj.length; i < length; i++) {
	                if (iterator.call(context, obj[i], i, obj) === breaker) return;
	            }
	        } else {
	            var keys = _.keys(obj);
	            for (var i = 0, length = keys.length; i < length; i++) {
	                if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return;
	            }
	        }
	        return obj;
	    };

	    // Return the results of applying the iterator to each element.
	    // Delegates to **ECMAScript 5**'s native `map` if available.
	    _.map = _.collect = function (obj, iterator, context) {
	        var results = [];
	        if (obj == null) return results;
	        if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
	        each(obj, function (value, index, list) {
	            results.push(iterator.call(context, value, index, list));
	        });
	        return results;
	    };

	    var reduceError = 'Reduce of empty array with no initial value';

	    // **Reduce** builds up a single result from a list of values, aka `inject`,
	    // or `foldl`. Delegates to **ECMAScript 5**'s native `reduce` if available.
	    _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
	        var initial = arguments.length > 2;
	        if (obj == null) obj = [];
	        if (nativeReduce && obj.reduce === nativeReduce) {
	            if (context) iterator = _.bind(iterator, context);
	            return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
	        }
	        each(obj, function(value, index, list) {
	            if (!initial) {
	                memo = value;
	                initial = true;
	            } else {
	                memo = iterator.call(context, memo, value, index, list);
	            }
	        });
	        if (!initial) throw new TypeError(reduceError);
	        return memo;
	    };

	    // Return the first value which passes a truth test. Aliased as `detect`.
	    _.find = _.detect = function (obj, predicate, context) {
	        var result;
	        any(obj, function (value, index, list) {
	            if (predicate.call(context, value, index, list)) {
	                result = value;
	                return true;
	            }
	        });
	        return result;
	    };


	    // Return all the elements that pass a truth test.
	    // Delegates to **ECMAScript 5**'s native `filter` if available.
	    // Aliased as `select`.
	    _.filter = _.select = function (obj, predicate, context) {
	        var results = [];
	        if (obj == null) return results;
	        if (nativeFilter && obj.filter === nativeFilter) return obj.filter(predicate, context);
	        each(obj, function (value, index, list) {
	            if (predicate.call(context, value, index, list)) results.push(value);
	        });
	        return results;
	    };

	    // Return all the elements for which a truth test fails.
	    _.reject = function(obj, predicate, context) {
	        return _.filter(obj, function(value, index, list) {
	            return !predicate.call(context, value, index, list);
	        }, context);
	    };

	    // Trim out all falsy values from an array.
	    _.compact = function(array) {
	        return _.filter(array, _.identity);
	    };


	    // Determine whether all of the elements match a truth test.
	    // Delegates to **ECMAScript 5**'s native `every` if available.
	    // Aliased as `all`.
	    _.every = _.all = function (obj, predicate, context) {
	        predicate || (predicate = _.identity);
	        var result = true;
	        if (obj == null) return result;
	        if (nativeEvery && obj.every === nativeEvery) return obj.every(predicate, context);
	        each(obj, function (value, index, list) {
	            if (!(result = result && predicate.call(context, value, index, list))) return breaker;
	        });
	        return !!result;
	    };

	    // Determine if at least one element in the object matches a truth test.
	    // Delegates to **ECMAScript 5**'s native `some` if available.
	    // Aliased as `any`.
	    var any = _.some = _.any = function (obj, predicate, context) {
	        predicate || (predicate = _.identity);
	        var result = false;
	        if (obj == null) return result;
	        if (nativeSome && obj.some === nativeSome) return obj.some(predicate, context);
	        each(obj, function (value, index, list) {
	            if (result || (result = predicate.call(context, value, index, list))) return breaker;
	        });
	        return !!result;
	    };

	    //returns the size of an object
	    _.size = function (obj) {
	        if (obj == null) return 0;
	        return obj.length === +obj.length ? obj.length : _.keys(obj).length;
	    };


	    // Returns a function that will only be executed after being called N times.
	    _.after = function (times, func) {
	        return function () {
	            if (--times < 1) {
	                return func.apply(this, arguments);
	            }
	        };
	    };

	    // Returns a function that will only be executed up to (but not including) the Nth call.
	    _.before = function(times, func) {
	        var memo;
	        return function() {
	            if (--times > 0) {
	                memo = func.apply(this, arguments);
	            }
	            if (times <= 1) func = null;
	            return memo;
	        };
	    };

	    // An internal function to generate lookup iterators.
	    var lookupIterator = function (value) {
	        if (value == null) return _.identity;
	        if (_.isFunction(value)) return value;
	        return _.property(value);
	    };

	    // Use a comparator function to figure out the smallest index at which
	    // an object should be inserted so as to maintain order. Uses binary search.
	    _.sortedIndex = function (array, obj, iterator, context) {
	        iterator = lookupIterator(iterator);
	        var value = iterator.call(context, obj);
	        var low = 0, high = array.length;
	        while (low < high) {
	            var mid = (low + high) >>> 1;
	            iterator.call(context, array[mid]) < value ? low = mid + 1 : high = mid;
	        }
	        return low;
	    };

	    // Determine if at least one element in the object matches a truth test.
	    // Delegates to **ECMAScript 5**'s native `some` if available.
	    // Aliased as `any`.
	    var any = _.some = _.any = function (obj, predicate, context) {
	        predicate || (predicate = _.identity);
	        var result = false;
	        if (obj == null) return result;
	        if (nativeSome && obj.some === nativeSome) return obj.some(predicate, context);
	        each(obj, function (value, index, list) {
	            if (result || (result = predicate.call(context, value, index, list))) return breaker;
	        });
	        return !!result;
	    };

	    _.contains = _.include = function (obj, target) {
	        if (obj == null) return false;
	        if (obj.length !== +obj.length) obj = _.values(obj);
	        return _.indexOf(obj, target) >= 0;
	    };

	    // Convenience version of a common use case of `filter`: selecting only objects
	    // containing specific `key:value` pairs.
	    _.where = function (obj, attrs) {
	        return _.filter(obj, _.matches(attrs));
	    };

	    // Convenience version of a common use case of `find`: getting the first object
	    // containing specific `key:value` pairs.
	    _.findWhere = function(obj, attrs) {
	        return _.find(obj, _.matches(attrs));
	    };

	    // Return the maximum element or (element-based computation).
	    // Can't optimize arrays of integers longer than 65,535 elements.
	    // See [WebKit Bug 80797](https://bugs.webkit.org/show_bug.cgi?id=80797)
	    _.max = function(obj, iterator, context) {
	        if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
	            return Math.max.apply(Math, obj);
	        }
	        var result = -Infinity, lastComputed = -Infinity;
	        each(obj, function(value, index, list) {
	            var computed = iterator ? iterator.call(context, value, index, list) : value;
	            if (computed > lastComputed) {
	                result = value;
	                lastComputed = computed;
	            }
	        });
	        return result;
	    };

	    // Take the difference between one array and a number of other arrays.
	    // Only the elements present in just the first array will remain.
	    _.difference = function (array) {
	        var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
	        return _.filter(array, function (value) {
	            return !_.contains(rest, value);
	        });
	    };

	    // Return a version of the array that does not contain the specified value(s).
	    _.without = function (array) {
	        return _.difference(array, slice.call(arguments, 1));
	    };

	    // If the browser doesn't supply us with indexOf (I'm looking at you, **MSIE**),
	    // we need this function. Return the position of the first occurrence of an
	    // item in an array, or -1 if the item is not included in the array.
	    // Delegates to **ECMAScript 5**'s native `indexOf` if available.
	    // If the array is large and already in sort order, pass `true`
	    // for **isSorted** to use binary search.
	    _.indexOf = function (array, item, isSorted) {
	        if (array == null) return -1;
	        var i = 0, length = array.length;
	        if (isSorted) {
	            if (typeof isSorted == 'number') {
	                i = (isSorted < 0 ? Math.max(0, length + isSorted) : isSorted);
	            } else {
	                i = _.sortedIndex(array, item);
	                return array[i] === item ? i : -1;
	            }
	        }
	        if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item, isSorted);
	        for (; i < length; i++) if (array[i] === item) return i;
	        return -1;
	    };


	    // Function (ahem) Functions
	    // ------------------


	    // Reusable constructor function for prototype setting.
	    var ctor = function(){};

	    // Create a function bound to a given object (assigning `this`, and arguments,
	    // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
	    // available.
	    _.bind = function(func, context) {
	        var args, bound;
	        if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
	        if (!_.isFunction(func)) throw new TypeError;
	        args = slice.call(arguments, 2);
	        return bound = function() {
	            if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
	            ctor.prototype = func.prototype;
	            var self = new ctor;
	            ctor.prototype = null;
	            var result = func.apply(self, args.concat(slice.call(arguments)));
	            if (Object(result) === result) return result;
	            return self;
	        };
	    };

	    // Partially apply a function by creating a version that has had some of its
	    // arguments pre-filled, without changing its dynamic `this` context. _ acts
	    // as a placeholder, allowing any combination of arguments to be pre-filled.
	    _.partial = function (func) {
	        var boundArgs = slice.call(arguments, 1);
	        return function () {
	            var position = 0;
	            var args = boundArgs.slice();
	            for (var i = 0, length = args.length; i < length; i++) {
	                if (args[i] === _) args[i] = arguments[position++];
	            }
	            while (position < arguments.length) args.push(arguments[position++]);
	            return func.apply(this, args);
	        };
	    };

	    // Returns a function that will be executed at most one time, no matter how
	    // often you call it. Useful for lazy initialization.
	    _.once = _.partial(_.before, 2);

	    // Returns the first function passed as an argument to the second,
	    // allowing you to adjust arguments, run code before and after, and
	    // conditionally execute the original function.
	    //_.wrap = function(func, wrapper) {
	    //    return _.partial(wrapper, func);
	    //};


	    // Memoize an expensive function by storing its results.
	    _.memoize = function (func, hasher) {
	        var memo = {};
	        hasher || (hasher = _.identity);
	        return function () {
	            var key = hasher.apply(this, arguments);
	            return _.has(memo, key) ? memo[key] : (memo[key] = func.apply(this, arguments));
	        };
	    };

	    // Delays a function for the given number of milliseconds, and then calls
	    // it with the arguments supplied.
	    _.delay = function (func, wait) {
	        var args = slice.call(arguments, 2);
	        return setTimeout(function () {
	            return func.apply(null, args);
	        }, wait);
	    };

	    // Defers a function, scheduling it to run after the current call stack has
	    // cleared.
	    _.defer = function (func) {
	        return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
	    };



	    // Returns a function, that, when invoked, will only be triggered at most once
	    // during a given window of time. Normally, the throttled function will run
	    // as much as it can, without ever going more than once per `wait` duration;
	    // but if you'd like to disable the execution on the leading edge, pass
	    // `{leading: false}`. To disable execution on the trailing edge, ditto.
	    _.throttle = function(func, wait, options) {
	        var context, args, result;
	        var timeout = null;
	        var previous = 0;
	        options || (options = {});
	        var later = function() {
	            previous = options.leading === false ? 0 : _.now();
	            timeout = null;
	            result = func.apply(context, args);
	            context = args = null;
	        };
	        return function() {
	            var now = _.now();
	            if (!previous && options.leading === false) previous = now;
	            var remaining = wait - (now - previous);
	            context = this;
	            args = arguments;
	            if (remaining <= 0) {
	                clearTimeout(timeout);
	                timeout = null;
	                previous = now;
	                result = func.apply(context, args);
	                context = args = null;
	            } else if (!timeout && options.trailing !== false) {
	                timeout = setTimeout(later, remaining);
	            }
	            return result;
	        };
	    };


	    // Retrieve the names of an object's properties.
	    // Delegates to **ECMAScript 5**'s native `Object.keys`
	    _.keys = function (obj) {
	        if (!_.isObject(obj)) return [];
	        if (nativeKeys) return nativeKeys(obj);
	        var keys = [];
	        for (var key in obj) if (_.has(obj, key)) keys.push(key);
	        return keys;
	    };

	    _.invert = function (obj) {
	        var result = {};
	        var keys = _.keys(obj);
	        for (var i = 0, length = keys.length; i < length; i++) {
	            result[obj[keys[i]]] = keys[i];
	        }
	        return result;
	    };

	    // Fill in a given object with default properties.
	    _.defaults = function(obj) {
	        each(slice.call(arguments, 1), function(source) {
	            if (source) {
	                for (var prop in source) {
	                    if (obj[prop] === void 0) obj[prop] = source[prop];
	                }
	            }
	        });
	        return obj;
	    };

	    // Extend a given object with all the properties in passed-in object(s).
	    _.extend = function(obj) {
	        each(slice.call(arguments, 1), function(source) {
	            if (source) {
	                for (var prop in source) {
	                    obj[prop] = source[prop];
	                }
	            }
	        });
	        return obj;
	    };

	    // Return a copy of the object only containing the whitelisted properties.
	    _.pick = function (obj) {
	        var copy = {};
	        var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
	        each(keys, function (key) {
	            if (key in obj) copy[key] = obj[key];
	        });
	        return copy;
	    };

	    // Return a copy of the object without the blacklisted properties.
	    _.omit = function(obj) {
	        var copy = {};
	        var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
	        for (var key in obj) {
	            if (!_.contains(keys, key)) copy[key] = obj[key];
	        }
	        return copy;
	    };

	    // Create a (shallow-cloned) duplicate of an object.
	    _.clone = function(obj) {
	        if (!_.isObject(obj)) return obj;
	        return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
	    };

	    // Is a given value an array?
	    // Delegates to ECMA5's native Array.isArray
	    _.isArray = nativeIsArray || function (obj) {
	        return toString.call(obj) == '[object Array]';
	    };

	    // Is a given variable an object?
	    _.isObject = function (obj) {
	        return obj === Object(obj);
	    };

	    // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
	    each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function (name) {
	        _['is' + name] = function (obj) {
	            return toString.call(obj) == '[object ' + name + ']';
	        };
	    });

	    // Define a fallback version of the method in browsers (ahem, IE), where
	    // there isn't any inspectable "Arguments" type.
	    if (!_.isArguments(arguments)) {
	        _.isArguments = function (obj) {
	            return !!(obj && _.has(obj, 'callee'));
	        };
	    }

	    // Optimize `isFunction` if appropriate.
	    if (true) {
	        _.isFunction = function (obj) {
	            return typeof obj === 'function';
	        };
	    }

	    // Is a given object a finite number?
	    _.isFinite = function (obj) {
	        return isFinite(obj) && !isNaN(parseFloat(obj));
	    };

	    // Is the given value `NaN`? (NaN is the only number which does not equal itself).
	    _.isNaN = function (obj) {
	        return _.isNumber(obj) && obj != +obj;
	    };

	    // Is a given value a boolean?
	    _.isBoolean = function (obj) {
	        return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
	    };

	    // Is a given value equal to null?
	    _.isNull = function (obj) {
	        return obj === null;
	    };

	    // Is a given variable undefined?
	    _.isUndefined = function (obj) {
	        return obj === void 0;
	    };

	    // Shortcut function for checking if an object has a given property directly
	    // on itself (in other words, not on a prototype).
	    _.has = function (obj, key) {
	        return hasOwnProperty.call(obj, key);
	    };

	    // Keep the identity function around for default iterators.
	    _.identity = function (value) {
	        return value;
	    };

	    _.constant = function (value) {
	        return function () {
	            return value;
	        };
	    };

	    _.property = function (key) {
	        return function (obj) {
	            return obj[key];
	        };
	    };

	    _.propertyOf = function(obj) {
	        return obj == null ? function(){} : function(key) {
	            return obj[key];
	        };
	    };

	    // Returns a predicate for checking whether an object has a given set of `key:value` pairs.
	    _.matches = function (attrs) {
	        return function (obj) {
	            if (obj === attrs) return true; //avoid comparing an object to itself.
	            for (var key in attrs) {
	                if (attrs[key] !== obj[key])
	                    return false;
	            }
	            return true;
	        }
	    };


	    // A (possibly faster) way to get the current timestamp as an integer.
	    _.now = Date.now || function() { return new Date().getTime(); };

	    // If the value of the named `property` is a function then invoke it with the
	    // `object` as context; otherwise, return it.
	    _.result = function (object, property) {
	        if (object == null) return void 0;
	        var value = object[property];
	        return _.isFunction(value) ? value.call(object) : value;
	    };


	    // Generate a unique integer id (unique within the entire client session).
	    // Useful for temporary DOM ids.
	    var idCounter = 0;
	    _.uniqueId = function(prefix) {
	        var id = ++idCounter + '';
	        return prefix ? prefix + id : id;
	    };

	    return _;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 43 */
/*!*********************************!*\
  !*** ./src/js/events/events.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	    var touchEvents = {
	        DRAG: 'drag',
	        DRAG_START: 'dragStart',
	        DRAG_END: 'dragEnd',
	        CLICK: 'click',
	        DOUBLE_CLICK: 'doubleClick',
	        TAP: 'tap',
	        DOUBLE_TAP: 'doubleTap',
	        OVER: 'over',
	        OUT: 'out'
	    };

	    var events = {
	        // Script Loaders
	        COMPLETE: 'complete',
	        ERROR: 'error',

	        // Ad events
	        JWPLAYER_AD_CLICK: 'adClick',
	        JWPLAYER_AD_COMPANIONS: 'adCompanions',
	        JWPLAYER_AD_COMPLETE: 'adComplete',
	        JWPLAYER_AD_ERROR: 'adError',
	        JWPLAYER_AD_IMPRESSION: 'adImpression',
	        JWPLAYER_AD_META: 'adMeta',
	        JWPLAYER_AD_PAUSE: 'adPause',
	        JWPLAYER_AD_PLAY: 'adPlay',
	        JWPLAYER_AD_SKIPPED: 'adSkipped',
	        JWPLAYER_AD_TIME: 'adTime',
	        JWPLAYER_CAST_AD_CHANGED: 'castAdChanged',

	        // Events
	        JWPLAYER_MEDIA_COMPLETE: 'complete',
	        JWPLAYER_READY: 'ready',
	        JWPLAYER_MEDIA_SEEK: 'seek',
	        JWPLAYER_MEDIA_BEFOREPLAY: 'beforePlay',
	        JWPLAYER_MEDIA_BEFORECOMPLETE: 'beforeComplete',
	        JWPLAYER_MEDIA_BUFFER_FULL: 'bufferFull',
	        JWPLAYER_DISPLAY_CLICK: 'displayClick',
	        JWPLAYER_PLAYLIST_COMPLETE: 'playlistComplete',
	        JWPLAYER_CAST_SESSION: 'cast',
	        JWPLAYER_MEDIA_ERROR: 'mediaError',
	        JWPLAYER_MEDIA_FIRST_FRAME: 'firstFrame',
	        JWPLAYER_MEDIA_PLAY_ATTEMPT: 'playAttempt',
	        JWPLAYER_MEDIA_LOADED: 'loaded',
	        JWPLAYER_MEDIA_SEEKED: 'seeked',

	        // Setup Events
	        JWPLAYER_SETUP_ERROR: 'setupError',

	        // Utility
	        JWPLAYER_ERROR: 'error',
	        JWPLAYER_PLAYER_STATE: 'state',
	        JWPLAYER_CAST_AVAILABLE: 'castAvailable',

	        // Model Changes
	        JWPLAYER_MEDIA_BUFFER: 'bufferChange',
	        JWPLAYER_MEDIA_TIME: 'time',
	        JWPLAYER_MEDIA_TYPE: 'mediaType',
	        JWPLAYER_MEDIA_VOLUME: 'volume',
	        JWPLAYER_MEDIA_MUTE: 'mute',
	        JWPLAYER_MEDIA_META: 'meta',
	        JWPLAYER_MEDIA_LEVELS: 'levels',
	        JWPLAYER_MEDIA_LEVEL_CHANGED: 'levelsChanged',
	        JWPLAYER_CONTROLS: 'controls',
	        JWPLAYER_FULLSCREEN: 'fullscreen',
	        JWPLAYER_RESIZE: 'resize',
	        JWPLAYER_PLAYLIST_ITEM: 'playlistItem',
	        JWPLAYER_PLAYLIST_LOADED: 'playlist',
	        JWPLAYER_AUDIO_TRACKS: 'audioTracks',
	        JWPLAYER_AUDIO_TRACK_CHANGED: 'audioTrackChanged',

	        // View Component Actions
	        JWPLAYER_LOGO_CLICK: 'logoClick',

	        // Model - Captions
	        JWPLAYER_CAPTIONS_LIST: 'captionsList',
	        JWPLAYER_CAPTIONS_CHANGED: 'captionsChanged',

	        // Provider Communication
	        JWPLAYER_PROVIDER_CHANGED: 'providerChanged',
	        JWPLAYER_PROVIDER_FIRST_FRAME: 'providerFirstFrame',

	        // UI Events
	        JWPLAYER_USER_ACTION: 'userAction',
	        JWPLAYER_PROVIDER_CLICK: 'providerClick',
	        JWPLAYER_VIEW_TAB_FOCUS: 'tabFocus',
	        JWPLAYER_CONTROLBAR_DRAGGING: 'scrubbing',
	        JWPLAYER_INSTREAM_CLICK: 'instreamClick'
	    };

	    events.touchEvents = touchEvents;

	    return events;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 44 */
/*!*****************************************!*\
  !*** ./src/js/utils/backbone.events.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Backbone.js 1.1.2

	    // Backbone.Events
	    // ---------------

	    // A module that can be mixed in to *any object* in order to provide it with
	    // custom events. You may bind with `on` or remove with `off` callback
	    // functions to an event; `trigger`-ing an event fires all callbacks in
	    // succession.
	    //
	    //     var object = {};
	    //     _.extend(object, Backbone.Events);
	    //     object.on('expand', function(){ alert('expanded'); });
	    //     object.trigger('expand');
	    //
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/underscore */ 42)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(_) {

	    var array = [];
	    //var push = array.push;
	    var slice = array.slice;
	    //var splice = array.splice;

	    var Events = {

	        // Bind an event to a `callback` function. Passing `"all"` will bind
	        // the callback to all events fired.
	        on: function (name, callback, context) {
	            if (!eventsApi(this, 'on', name, [callback, context]) || !callback) return this;
	            this._events || (this._events = {});
	            var events = this._events[name] || (this._events[name] = []);
	            events.push({callback: callback, context: context});
	            return this;
	        },

	        // Bind an event to only be triggered a single time. After the first time
	        // the callback is invoked, it will be removed.
	        once: function (name, callback, context) {
	            if (!eventsApi(this, 'once', name, [callback, context]) || !callback) return this;
	            var self = this;
	            var once = _.once(function () {
	                self.off(name, once);
	                callback.apply(this, arguments);
	            });
	            once._callback = callback;
	            return this.on(name, once, context);
	        },

	        // Remove one or many callbacks. If `context` is null, removes all
	        // callbacks with that function. If `callback` is null, removes all
	        // callbacks for the event. If `name` is null, removes all bound
	        // callbacks for all events.
	        off: function (name, callback, context) {
	            var retain, ev, events, names, i, l, j, k;
	            if (!this._events || !eventsApi(this, 'off', name, [callback, context])) return this;
	            if (!name && !callback && !context) {
	                this._events = void 0;
	                return this;
	            }
	            names = name ? [name] : _.keys(this._events);
	            for (i = 0, l = names.length; i < l; i++) {
	                name = names[i];
	                if (events = this._events[name]) {
	                    this._events[name] = retain = [];
	                    if (callback || context) {
	                        for (j = 0, k = events.length; j < k; j++) {
	                            ev = events[j];
	                            if ((callback && callback !== ev.callback && callback !== ev.callback._callback) ||
	                                (context && context !== ev.context)) {
	                                retain.push(ev);
	                            }
	                        }
	                    }
	                    if (!retain.length) delete this._events[name];
	                }
	            }

	            return this;
	        },

	        // Trigger one or many events, firing all bound callbacks. Callbacks are
	        // passed the same arguments as `trigger` is, apart from the event name
	        // (unless you're listening on `"all"`, which will cause your callback to
	        // receive the true name of the event as the first argument).
	        trigger: function (name) {
	            if (!this._events) return this;
	            var args = slice.call(arguments, 1);
	            if (!eventsApi(this, 'trigger', name, args)) return this;
	            var events = this._events[name];
	            var allEvents = this._events.all;
	            if (events) triggerEvents(events, args, this);
	            if (allEvents) triggerEvents(allEvents, arguments, this);
	            return this;
	        },
	        // This is a c/p of the above trigger method, swapping out triggerEvents for safeTriggerEvents
	        //  this will have worse performance but safely allows plugins to not wreck eachother
	        triggerSafe: function (name) {
	            if (!this._events) return this;
	            var args = slice.call(arguments, 1);
	            if (!eventsApi(this, 'trigger', name, args)) return this;
	            var events = this._events[name];
	            var allEvents = this._events.all;
	            if (events) safeTriggerEvents(events, args, this);
	            if (allEvents) safeTriggerEvents(allEvents, arguments, this);
	            return this;
	        }

	        /*
	         // Tell this object to stop listening to either specific events ... or
	         // to every object it's currently listening to.
	         stopListening: function(obj, name, callback) {
	         var listeningTo = this._listeningTo;
	         if (!listeningTo) return this;
	         var remove = !name && !callback;
	         if (!callback && typeof name === 'object') callback = this;
	         if (obj) (listeningTo = {})[obj._listenId] = obj;
	         for (var id in listeningTo) {
	         obj = listeningTo[id];
	         obj.off(name, callback, this);
	         if (remove || _.isEmpty(obj._events)) delete this._listeningTo[id];
	         }
	         return this;
	         }
	         */

	    };


	    // Regular expression used to split event strings.
	    var eventSplitter = /\s+/;

	    // Implement fancy features of the Events API such as multiple event
	    // names `"change blur"` and jQuery-style event maps `{change: action}`
	    // in terms of the existing API.
	    var eventsApi = function (obj, action, name, rest) {
	        if (!name) return true;

	        // Handle event maps.
	        if (typeof name === 'object') {
	            for (var key in name) {
	                obj[action].apply(obj, [key, name[key]].concat(rest));
	            }
	            return false;
	        }

	        // Handle space separated event names.
	        if (eventSplitter.test(name)) {
	            var names = name.split(eventSplitter);
	            for (var i = 0, l = names.length; i < l; i++) {
	                obj[action].apply(obj, [names[i]].concat(rest));
	            }
	            return false;
	        }

	        return true;
	    };

	    // A difficult-to-believe, but optimized internal dispatch function for
	    // triggering events. Tries to keep the usual cases speedy (most internal
	    // Backbone events have 3 arguments).
	    var triggerEvents = function (events, args, context) {
	        var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
	        switch (args.length) {
	            case 0:
	                while (++i < l) (ev = events[i]).callback.call(ev.context || context);
	                return;
	            case 1:
	                while (++i < l) (ev = events[i]).callback.call(ev.context || context, a1);
	                return;
	            case 2:
	                while (++i < l) (ev = events[i]).callback.call(ev.context || context, a1, a2);
	                return;
	            case 3:
	                while (++i < l) (ev = events[i]).callback.call(ev.context || context, a1, a2, a3);
	                return;
	            default:
	                while (++i < l) (ev = events[i]).callback.apply(ev.context || context, args);
	                return;
	        }
	    };

	    // This is a deconstruction of the above default while loop, with try/catch inserted
	    var safeTriggerEvents = function(events, args, context) {
	        var ev, i = -1, l = events.length;
	        while (++i < l) {
	            try {
	                (ev = events[i]).callback.apply(ev.context || context, args);
	            } catch(e) {}
	        }
	    };

	    /*
	     var listenMethods = {listenTo: 'on', listenToOnce: 'once'};

	     // Inversion-of-control versions of `on` and `once`. Tell *this* object to
	     // listen to an event in another object ... keeping track of what it's
	     // listening to.
	     _.each(listenMethods, function(implementation, method) {
	     Events[method] = function(obj, name, callback) {
	     var listeningTo = this._listeningTo || (this._listeningTo = {});
	     var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
	     listeningTo[id] = obj;
	     if (!callback && typeof name === 'object') callback = this;
	     obj[implementation](name, callback, this);
	     return this;
	     };
	     });
	     */

	    return Events;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 45 */
/*!*********************************!*\
  !*** ./src/js/utils/helpers.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/strings */ 49),
	    __webpack_require__(/*! utils/underscore */ 42),
	    __webpack_require__(/*! utils/browser */ 50),
	    __webpack_require__(/*! utils/dom */ 51),
	    __webpack_require__(/*! utils/css */ 53),
	    __webpack_require__(/*! utils/parser */ 46),
	    __webpack_require__(/*! utils/ajax */ 54),
	    __webpack_require__(/*! utils/validator */ 47),
	    __webpack_require__(/*! utils/playerutils */ 55),
	    __webpack_require__(/*! utils/trycatch */ 48)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(strings, _, browser, dom, css, parser, ajax, validator, playerutils, trycatch) {

	    var utils = {};

	    utils.log = function () {
	        if (!window.console) {
	            return;
	        }
	        if (typeof console.log === 'object') {
	            console.log(Array.prototype.slice.call(arguments, 0));
	        } else {
	            console.log.apply(console, arguments);
	        }
	    };

	    utils.between = function (num, min, max) {
	        return Math.max(Math.min(num, max), min);
	    };

	    /**
	     * Iterates over an object and executes a callback function for each property (if it exists)
	     * This is a safe way to iterate over objects if another script has modified the object prototype
	     */
	    utils.foreach = function (aData, fnEach) {
	        var key, val;
	        for (key in aData) {
	            if (utils.typeOf(aData.hasOwnProperty) === 'function') {
	                if (aData.hasOwnProperty(key)) {
	                    val = aData[key];
	                    fnEach(key, val);
	                }
	            } else {
	                // IE8 has a problem looping through XML nodes
	                val = aData[key];
	                fnEach(key, val);
	            }
	        }
	    };

	    utils.indexOf = _.indexOf;
	    utils.noop = function () {
	    };

	    utils.seconds = strings.seconds;
	    utils.prefix = strings.prefix;
	    utils.suffix = strings.suffix;

	    _.extend(utils, parser, validator, browser, ajax, dom, css, playerutils, trycatch);

	    return utils;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));



/***/ },
/* 46 */
/*!********************************!*\
  !*** ./src/js/utils/parser.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/underscore */ 42),
	    __webpack_require__(/*! utils/validator */ 47),
	    __webpack_require__(/*! utils/trycatch */ 48)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(_, validator, trycatch) {
	    var parser = {};

	    /** Gets an absolute file path based on a relative filepath * */
	    parser.getAbsolutePath = function (path, base) {
	        if (!validator.exists(base)) {
	            base = document.location.href;
	        }
	        if (!validator.exists(path)) {
	            return;
	        }
	        if (isAbsolutePath(path)) {
	            return path;
	        }
	        var protocol = base.substring(0, base.indexOf('://') + 3);
	        var domain = base.substring(protocol.length, base.indexOf('/', protocol.length + 1));
	        var patharray;
	        if (path.indexOf('/') === 0) {
	            patharray = path.split('/');
	        } else {
	            var basepath = base.split('?')[0];
	            basepath = basepath.substring(protocol.length + domain.length + 1, basepath.lastIndexOf('/'));
	            patharray = basepath.split('/').concat(path.split('/'));
	        }
	        var result = [];
	        for (var i = 0; i < patharray.length; i++) {
	            if (!patharray[i] || !validator.exists(patharray[i]) || patharray[i] === '.') {
	                continue;
	            } else if (patharray[i] === '..') {
	                result.pop();
	            } else {
	                result.push(patharray[i]);
	            }
	        }
	        return protocol + domain + '/' + result.join('/');
	    };

	    function isAbsolutePath(path) {
	        return /^(?:(?:https?|file)\:)?\/\//.test(path);
	    }

	    parser.getScriptPath = _.memoize(function(scriptName) {
	        var scripts = document.getElementsByTagName('script');
	        for (var i = 0; i < scripts.length; i++) {
	            var src = scripts[i].src;
	            if (src && src.indexOf(scriptName) >= 0) {
	                return src.substr(0, src.indexOf(scriptName));
	            }
	        }
	        return '';
	    });

	    function containsParserErrors(childNodes) {
	        return _.some(childNodes, function(node) {
	            return node.nodeName === 'parsererror';
	        });
	    }

	    /** Takes an XML string and returns an XML object **/
	    parser.parseXML = function (input) {
	        var parsedXML = null;
	        trycatch.tryCatch(function() {
	            // Parse XML in FF/Chrome/Safari/Opera
	            if (window.DOMParser) {
	                parsedXML = (new window.DOMParser()).parseFromString(input, 'text/xml');
	                // In Firefox the XML doc may contain the parsererror, other browsers it's further down
	                if (containsParserErrors(parsedXML.childNodes) ||
	                    (parsedXML.childNodes && containsParserErrors(parsedXML.childNodes[0].childNodes))) {
	                    parsedXML = null;
	                }
	            } else {
	                // Internet Explorer
	                parsedXML = new window.ActiveXObject('Microsoft.XMLDOM');
	                parsedXML.async = 'false';
	                parsedXML.loadXML(input);
	            }
	        });

	        return parsedXML;
	    };

	    /**
	     * String representations of booleans and numbers that are 5 characters in length or less
	     * are returned typed
	     */
	    parser.serialize = function (val) {
	        if (val === undefined) {
	            return null;
	        }
	        if (typeof val === 'string' && val.length < 6) {
	            var lowercaseVal = val.toLowerCase();
	            if (lowercaseVal === 'true') {
	                return true;
	            }
	            if (lowercaseVal === 'false') {
	                return false;
	            }
	            if (!isNaN(Number(val)) && !isNaN(parseFloat(val))) {
	                return Number(val);
	            }
	        }
	        return val;
	    };

	    /**
	     * Cleans up a css dimension (e.g. '420px') and returns an integer.
	     */
	    parser.parseDimension = function(dimension) {
	        if (typeof dimension === 'string') {
	            if (dimension === '') {
	                return 0;
	            } else if (dimension.lastIndexOf('%') > -1) {
	                return dimension;
	            }
	            return parseInt(dimension.replace('px', ''), 10);
	        }
	        return dimension;
	    };

	    /** Format the elapsed / remaining text. **/
	    parser.timeFormat = function(sec, allowNegative) {
	        if (sec <= 0 && !allowNegative) {
	            return '00:00';
	        }

	        // If negative add a minus sign
	        var prefix = (sec < 0) ? '-' : '';
	        sec = Math.abs(sec);

	        var hrs  = Math.floor(sec / 3600),
	            mins = Math.floor((sec - hrs * 3600) / 60),
	            secs = Math.floor(sec % 60);

	        return prefix + (hrs ? hrs + ':' : '') + (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;
	    };

	    /**
	     * Determine the adaptive type
	     */
	    parser.adaptiveType = function(duration) {
	        if (duration !== -1) {
	            var MIN_DVR_DURATION = -120;
	            if(duration <= MIN_DVR_DURATION) {
	                return 'DVR';
	            }
	            if (duration < 0 || duration === Infinity) {
	                return 'LIVE';
	            }
	        }
	        return 'VOD';
	    };

	    return parser;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 47 */
/*!***********************************!*\
  !*** ./src/js/utils/validator.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/underscore */ 42)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(_) {
	    var validator = {};

	    /**
	     * Returns true if the value of the object is null, undefined or the empty
	     * string
	     *
	     * @param a The variable to inspect
	     */
	    validator.exists = function (item) {
	        switch (typeof(item)) {
	            case 'string':
	                return (item.length > 0);
	            case 'object':
	                return (item !== null);
	            case 'undefined':
	                return false;
	        }
	        return true;
	    };

	    /** Determines if the current page is HTTPS **/
	    validator.isHTTPS = function () {
	        return (window.location.href.indexOf('https') === 0);
	    };

	    /**
	     * Determines if a URL is an RTMP link
	     */
	    validator.isRtmp = function (file, type) {
	        return (file.indexOf('rtmp') === 0 || type === 'rtmp');
	    };

	    /**
	     * Determines if a URL is a YouTube link
	     */
	    validator.isYouTube = function (path, type) {
	        return (type === 'youtube') || (/^(http|\/\/).*(youtube\.com|youtu\.be)\/.+/).test(path);
	    };

	    /**
	     * Returns a YouTube ID from a number of YouTube URL formats:
	     *
	     * Matches the following YouTube URL types:
	     *  - http://www.youtube.com/watch?v=YE7VzlLtp-4
	     *  - http://www.youtube.com/watch?v=YE7VzlLtp-4&extra_param=123
	     *  - http://www.youtube.com/watch#!v=YE7VzlLtp-4
	     *  - http://www.youtube.com/watch#!v=YE7VzlLtp-4?extra_param=123&another_param=456
	     *  - http://www.youtube.com/v/YE7VzlLtp-4
	     *  - http://www.youtube.com/v/YE7VzlLtp-4?extra_param=123&another_param=456
	     *  - http://youtu.be/YE7VzlLtp-4
	     *  - http://youtu.be/YE7VzlLtp-4?extra_param=123&another_param=456
	     *  - YE7VzlLtp-4
	     **/
	    validator.youTubeID = function (path) {
	        // Left as a dense regular expression for brevity.
	        var matches = (/v[=\/]([^?&]*)|youtu\.be\/([^?]*)|^([\w-]*)$/i).exec(path);
	        if (!matches) {
	            return '';
	        }
	        return matches.slice(1).join('').replace('?', '');
	    };


	    /** Returns the true type of an object * */
	    validator.typeOf = function (value) {
	        if (value === null) {
	            return 'null';
	        }
	        var typeofString = typeof value;
	        if (typeofString === 'object') {
	            if (_.isArray(value)) {
	                return 'array';
	            }
	        }
	        return typeofString;
	    };

	    return validator;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 48 */
/*!**********************************!*\
  !*** ./src/js/utils/trycatch.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	], __WEBPACK_AMD_DEFINE_RESULT__ = function() {

	    var tryCatch = function (fn, ctx, args) {
	        // IE8 requires these not be undefined
	        ctx = ctx || this;
	        args = args || [];

	        // if in debug mode, let 'er blow!
	        if (window.jwplayer && window.jwplayer.debug) {
	            return fn.apply(ctx, args);
	        }

	        // else be careful
	        try {
	            return fn.apply(ctx, args);
	        }
	        catch (e) {
	            return new jwError(fn.name, e);
	        }
	    };

	    var jwError = function (name, error) {
	        this.name = name;
	        this.message = error.message || error.toString();
	        this.error = error;
	    };

	    return {
	        tryCatch: tryCatch,
	        Error: jwError
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 49 */
/*!*********************************!*\
  !*** ./src/js/utils/strings.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/underscore */ 42)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(_) {
	    /** Removes whitespace from the beginning and end of a string **/
	    var trim = function (inputString) {
	        return inputString.replace(/^\s+|\s+$/g, '');
	    };

	    /**
	     * Pads a string
	     * @param {String} string
	     * @param {Number} length
	     * @param {String} padder
	     */
	    var pad = function (str, length, padder) {
	        str = '' + str;
	        padder = padder || '0';
	        while (str.length < length) {
	            str = padder + str;
	        }
	        return str;
	    };

	    /**
	     * Get the value of a case-insensitive attribute in an XML node
	     * @param {XML} xml
	     * @param {String} attribute
	     * @return {String} Value
	     */
	    var xmlAttribute = function (xml, attribute) {
	        for (var attrib = 0; attrib < xml.attributes.length; attrib++) {
	            if (xml.attributes[attrib].name && xml.attributes[attrib].name.toLowerCase() === attribute.toLowerCase()) {
	                return xml.attributes[attrib].value.toString();
	            }
	        }
	        return '';
	    };

	    /**
	     * This does not return the file extension, instead it returns a media type extension
	     */
	    function getAzureFileFormat(path) {
	        if (path.indexOf('(format=m3u8-') > -1) {
	            return 'm3u8';
	        } else {
	            return false;
	        }
	    }

	    var extension = function (path) {
	        if (!path || path.substr(0, 4) === 'rtmp') {
	            return '';
	        }

	        var azureFormat = getAzureFileFormat(path);
	        if (azureFormat) {
	            return azureFormat;
	        }

	        path = path.substring(path.lastIndexOf('/') + 1, path.length).split('?')[0].split('#')[0];
	        if (path.lastIndexOf('.') > -1) {
	            return path.substr(path.lastIndexOf('.') + 1, path.length).toLowerCase();
	        }
	    };

	    /**
	     * Convert seconds to HH:MN:SS.sss
	     *
	     * @param seconds  The number of seconds
	     * @return        An HH:MN:SS.sss string
	     **/
	    var hms = function(seconds) {
	        var h = parseInt(seconds / 3600);
	        var m = parseInt(seconds / 60) % 60;
	        var s = seconds % 60;
	        return pad(h, 2) + ':' + pad(m, 2) + ':' + pad(s.toFixed(3), 6);
	    };

	    /**
	     * Convert a time-representing string to a number.
	     *
	     * @param {String}    The input string. Supported are 00:03:00.1 / 03:00.1 / 180.1s / 3.2m / 3.2h
	     * @return {Number}    The number of seconds.
	     */
	    var seconds = function (str) {
	        if (_.isNumber(str)) {
	            return str;
	        }

	        str = str.replace(',', '.');
	        var arr = str.split(':');
	        var sec = 0;
	        if (str.slice(-1) === 's') {
	            sec = parseFloat(str);
	        } else if (str.slice(-1) === 'm') {
	            sec = parseFloat(str) * 60;
	        } else if (str.slice(-1) === 'h') {
	            sec = parseFloat(str) * 3600;
	        } else if (arr.length > 1) {
	            sec = parseFloat(arr[arr.length - 1]);
	            sec += parseFloat(arr[arr.length - 2]) * 60;
	            if (arr.length === 3) {
	                sec += parseFloat(arr[arr.length - 3]) * 3600;
	            }
	        } else {
	            sec = parseFloat(str);
	        }
	        return sec;
	    };


	    var prefix = function(arr, add) {
	        return _.map(arr, function(val) {
	            return add + val;
	        });
	    };

	    var suffix = function(arr, add) {
	        return _.map(arr, function(val) {
	            return val + add;
	        });
	    };

	    return {
	        trim : trim,
	        pad : pad,
	        xmlAttribute : xmlAttribute,
	        extension : extension,
	        hms: hms,
	        seconds: seconds,
	        suffix: suffix,
	        prefix: prefix
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 50 */
/*!*********************************!*\
  !*** ./src/js/utils/browser.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/underscore */ 42)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(_) {
	    var browser = {};

	    var _userAgentMatch = _.memoize(function (regex) {
	        var agent = navigator.userAgent.toLowerCase();
	        return (agent.match(regex) !== null);
	    });

	    function _browserCheck(regex) {
	        return function () {
	            return _userAgentMatch(regex);
	        };
	    }

	    var _isInt = browser.isInt = function (value) {
	        return parseFloat(value) % 1 === 0;
	    };

	    browser.isFlashSupported = function () {
	        var flashVersion = browser.flashVersion();
	        return flashVersion && flashVersion >= (11.2);
	    };

	    browser.isFF = _browserCheck(/firefox/i);
	    browser.isIPod = _browserCheck(/iP(hone|od)/i);
	    browser.isIPad = _browserCheck(/iPad/i);
	    browser.isSafari602 = _browserCheck(/Macintosh.*Mac OS X 10_8.*6\.0\.\d* Safari/i);
	    browser.isOSX = _browserCheck(/Mac OS X/i);
	    browser.isEdge = _browserCheck(/\sedge\/\d+/i);

	    var _isIETrident = browser.isIETrident = function(browserVersion) {
	        if(browser.isEdge()){
	            return true;
	        }
	        if (browserVersion) {
	            browserVersion = parseFloat(browserVersion).toFixed(1);
	            return _userAgentMatch(new RegExp('trident/.+rv:\\s*' + browserVersion, 'i'));
	        }
	        return _userAgentMatch(/trident/i);
	    };


	    var _isMSIE = browser.isMSIE = function(browserVersion) {
	        if (browserVersion) {
	            browserVersion = parseFloat(browserVersion).toFixed(1);
	            return _userAgentMatch(new RegExp('msie\\s*' + browserVersion, 'i'));
	        }
	        return _userAgentMatch(/msie/i);
	    };

	    var _isChrome = _browserCheck(/chrome/i);

	    browser.isChrome = function(){
	        return _isChrome() && !browser.isEdge();
	    };

	    browser.isIE = function(browserVersion) {
	        if (browserVersion) {
	            browserVersion = parseFloat(browserVersion).toFixed(1);
	            if (browserVersion >= 11) {
	                return _isIETrident(browserVersion);
	            } else {
	                return _isMSIE(browserVersion);
	            }
	        }
	        return _isMSIE() || _isIETrident();
	    };

	    browser.isSafari = function() {
	        return (_userAgentMatch(/safari/i) && !_userAgentMatch(/chrome/i) &&
	        !_userAgentMatch(/chromium/i) && !_userAgentMatch(/android/i));
	    };

	    /** Matches iOS devices **/
	    var _isIOS = browser.isIOS = function(osVersion) {
	        if (osVersion) {
	            return _userAgentMatch(new RegExp('iP(hone|ad|od).+\\sOS\\s' + osVersion, 'i'));
	        }
	        return _userAgentMatch(/iP(hone|ad|od)/i);
	    };

	    /** Matches Android devices **/
	    browser.isAndroidNative = function(osVersion) {
	        return _isAndroid(osVersion, true);
	    };

	    var _isAndroid = browser.isAndroid = function(osVersion, excludeChrome) {
	        //Android Browser appears to include a user-agent string for Chrome/18
	        if (excludeChrome && _userAgentMatch(/chrome\/[123456789]/i) && !_userAgentMatch(/chrome\/18/)) {
	            return false;
	        }
	        if (osVersion) {
	            // make sure whole number version check ends with point '.'
	            if (_isInt(osVersion) && !/\./.test(osVersion)) {
	                osVersion = '' + osVersion + '.';
	            }
	            return _userAgentMatch(new RegExp('Android\\s*' + osVersion, 'i'));
	        }
	        return _userAgentMatch(/Android/i);
	    };

	    /** Matches iOS and Android devices **/
	    browser.isMobile = function () {
	        return _isIOS() || _isAndroid();
	    };

	    browser.isIframe = function () {
	        return (window.frameElement && (window.frameElement.nodeName === 'IFRAME'));
	    };

	    /**
	     * If the browser has flash capabilities, return the flash version
	     */
	    browser.flashVersion = function () {
	        if (browser.isAndroid()) {
	            return 0;
	        }

	        var plugins = navigator.plugins,
	            flash;

	        if (plugins) {
	            flash = plugins['Shockwave Flash'];
	            if (flash && flash.description) {
	                return parseFloat(flash.description.replace(/\D+(\d+\.?\d*).*/, '$1'));
	            }
	        }

	        if (typeof window.ActiveXObject !== 'undefined') {
	            try {
	                flash = new window.ActiveXObject('ShockwaveFlash.ShockwaveFlash');
	                if (flash) {
	                    return parseFloat(flash.GetVariable('$version').split(' ')[1].replace(/\s*,\s*/, '.'));
	                }
	            } catch(e) {
	                return 0;
	            }

	            return flash;
	        }
	        return 0;
	    };

	    return browser;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 51 */
/*!*****************************!*\
  !*** ./src/js/utils/dom.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/strings */ 49),
	    __webpack_require__(/*! utils/underscore */ 42),
	    __webpack_require__(/*! utils/jqueryfuncs */ 52)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(strings, _, jqueryfuncs) {

	    var dom = {};

	    // Given a string, convert to element and return
	    dom.createElement = function (html) {
	        var newElement = document.createElement('div');
	        newElement.innerHTML = html;
	        return newElement.firstChild;
	    };

	    /** Used for styling dimensions in CSS --
	     * return the string unchanged if it's a percentage width; add 'px' otherwise **/
	    dom.styleDimension = function (dimension) {
	        return dimension + (dimension.toString().indexOf('%') > 0 ? '' : 'px');
	    };


	    dom.classList = function (element) {
	        if (element.classList) {
	            return element.classList;
	        }
	        return element.className.split(' ');
	    };

	    dom.hasClass = jqueryfuncs.hasClass;

	    dom.addClass = function (element, classes) {
	        // TODO:: use _.union on the two arrays

	        var originalClasses = _.isString(element.className) ? element.className.split(' ') : [];
	        var addClasses = _.isArray(classes) ? classes : classes.split(' ');

	        _.each(addClasses, function (c) {
	            if (!_.contains(originalClasses, c)) {
	                originalClasses.push(c);
	            }
	        });

	        element.className = strings.trim(originalClasses.join(' '));
	    };

	    dom.removeClass = function (element, c) {
	        var originalClasses = _.isString(element.className) ? element.className.split(' ') : [];
	        var removeClasses = _.isArray(c) ? c : c.split(' ');

	        element.className = strings.trim(_.difference(originalClasses, removeClasses).join(' '));
	    };

	    dom.toggleClass = function (element, c, toggleTo) {
	        var hasClass = dom.hasClass(element, c);
	        toggleTo = _.isBoolean(toggleTo) ? toggleTo : !hasClass;

	        // short circuit if nothing to do
	        if (toggleTo === hasClass) {
	            return;
	        }

	        if (toggleTo) {
	            dom.addClass(element, c);
	        } else {
	            dom.removeClass(element, c);
	        }
	    };

	    dom.emptyElement = function (element) {
	        while (element.firstChild) {
	            element.removeChild(element.firstChild);
	        }
	    };

	    dom.addStyleSheet = function(url) {
	        var link = document.createElement('link');
	        link.rel = 'stylesheet';
	        link.href = url;
	        document.getElementsByTagName('head')[0].appendChild(link);
	    };

	    dom.empty = function(element) {
	        if (!element) {
	            return;
	        }
	        while (element.childElementCount > 0) {
	            element.removeChild(element.children[0]);
	        }
	    };

	    dom.bounds = function(element) {
	        var bounds = {
	            left: 0,
	            right: 0,
	            width: 0,
	            height: 0,
	            top: 0,
	            bottom: 0
	        };
	        if (!element || !document.body.contains(element)) {
	            return bounds;
	        }
	        if (element.getBoundingClientRect) {
	            var rect = element.getBoundingClientRect(element),
	                scrollOffsetY = window.pageYOffset,
	                scrollOffsetX = window.pageXOffset;
	            if (!rect.width && !rect.height && !rect.left && !rect.top) {
	                //element is not visible / no layout
	                return bounds;
	            }
	            bounds.left = rect.left + scrollOffsetX;
	            bounds.right = rect.right + scrollOffsetX;
	            bounds.top = rect.top + scrollOffsetY;
	            bounds.bottom = rect.bottom + scrollOffsetY;
	            bounds.width = rect.right - rect.left;
	            bounds.height = rect.bottom - rect.top;
	        } else {
	            /*jshint -W084 */ // For the while loop assignment
	            bounds.width = element.offsetWidth | 0;
	            bounds.height = element.offsetHeight | 0;
	            do {
	                bounds.left += element.offsetLeft | 0;
	                bounds.top += element.offsetTop | 0;
	            } while (element = element.offsetParent);
	            bounds.right = bounds.left + bounds.width;
	            bounds.bottom = bounds.top + bounds.height;
	        }
	        return bounds;
	    };

	    return dom;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));



/***/ },
/* 52 */
/*!*************************************!*\
  !*** ./src/js/utils/jqueryfuncs.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Code in this module uses code from jQuery
	// jQuery v1.11.2 | (c) 2005, 2014 jQuery Foundation, Inc. | Released under the MIT license | jquery.org/license

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	    return {
	        hasClass : function (element, searchClass) {
	            var className = ' ' + searchClass + ' ';

	            return (element.nodeType === 1 && (' ' + element.className + ' ')
	                    .replace(/[\t\r\n\f]/g, ' ').indexOf(className) >= 0);
	        }
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 53 */
/*!*****************************!*\
  !*** ./src/js/utils/css.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/strings */ 49)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(Strings) {

	    var _styleRules = {},
	        _styleSheet;

	    var _css = function(selector, styles) {
	        if (!_styleSheet) {
	            _styleSheet = document.createElement('style');
	            _styleSheet.type = 'text/css';
	            document.getElementsByTagName('head')[0].appendChild(_styleSheet);
	        }
	        var cssText = selector + JSON.stringify(styles).replace(/"/g, '');
	        var node = document.createTextNode(cssText);
	        if (_styleRules[selector]) {
	            _styleSheet.removeChild(_styleRules[selector]);
	        }
	        _styleRules[selector] = node;
	        _styleSheet.appendChild(node);
	    };

	    var _style = function (elements, styles) {
	        if (elements === undefined || elements === null) {
	            //utils.log('css.style invalid elements: '+ elements +' '+ JSON.stringify(styles) +' '+ immediate);
	            return;
	        }
	        if (elements.length === undefined) {
	            elements = [elements];
	        }

	        var style;
	        var cssRules = {};
	        for (style in styles) {
	            cssRules[style] = _styleValue(style, styles[style]);
	        }

	        for (var i = 0; i < elements.length; i++) {
	            var element = elements[i], styleName;
	            if (element !== undefined && element !== null) {
	                for (style in cssRules) {
	                    styleName = _styleAttributeName(style);
	                    if (element.style[styleName] !== cssRules[style]) {
	                        element.style[styleName] = cssRules[style];
	                    }
	                }
	            }
	        }
	    };

	    function _styleAttributeName(name) {
	        name = name.split('-');
	        for (var i = 1; i < name.length; i++) {
	            name[i] = name[i].charAt(0).toUpperCase() + name[i].slice(1);
	        }
	        return name.join('');
	    }

	    function _styleValue(style, value, important) {
	        if (value === '' || value === undefined || value === null) {
	            return '';
	        }
	        var importantString = important ? ' !important' : '';

	        //string
	        if (typeof value === 'string' && isNaN(value)) {
	            if ((/png|gif|jpe?g/i).test(value) && value.indexOf('url') < 0) {
	                return 'url(' + value + ')';
	            }
	            return value + importantString;
	        }
	        // number
	        if (value === 0 ||
	            style === 'z-index' ||
	            style === 'opacity') {
	            return '' + value + importantString;
	        }
	        if ((/color/i).test(style)) {
	            return '#' + Strings.pad(value.toString(16).replace(/^0x/i, ''), 6) + importantString;
	        }
	        return Math.ceil(value) + 'px' + importantString;
	    }

	    // Removes all css elements which match a particular style
	    var _clearCss = function(filter) {
	        for (var selector in _styleRules) {
	            if (selector.indexOf(filter) >= 0) {
	                _styleSheet.removeChild(_styleRules[selector]);
	                delete _styleRules[selector];
	            }
	        }
	    };

	    var transform = function (element, value) {
	        var transform = 'transform',
	            style = {};
	        value = value || '';
	        style[transform] = value;
	        style['-webkit-' + transform] = value;
	        style['-ms-' + transform] = value;
	        style['-moz-' + transform] = value;
	        style['-o-' + transform] = value;
	        _style(element, style);
	    };

	    var hexToRgba = function (hexColor, opacity) {
	        var style = 'rgb';
	        if (hexColor) {
	            hexColor = String(hexColor).replace('#', '');
	            if (hexColor.length === 3) {
	                hexColor = hexColor[0] + hexColor[0] + hexColor[1] + hexColor[1] + hexColor[2] + hexColor[2];
	            }
	        } else {
	            hexColor = '000000';
	        }
	        var channels = [
	            parseInt(hexColor.substr(0, 2), 16),
	            parseInt(hexColor.substr(2, 2), 16),
	            parseInt(hexColor.substr(4, 2), 16)
	        ];
	        if (opacity !== undefined && opacity !== 100) {
	            style += 'a';
	            channels.push(opacity / 100);
	        }
	        return style + '(' + channels.join(',') + ')';
	    };

	    return {
	        css : _css,
	        style : _style,
	        clearCss : _clearCss,
	        transform : transform,
	        hexToRgba : hexToRgba
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 54 */
/*!******************************!*\
  !*** ./src/js/utils/ajax.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/underscore */ 42),
	    __webpack_require__(/*! utils/validator */ 47),
	    __webpack_require__(/*! utils/parser */ 46),
	    __webpack_require__(/*! utils/trycatch */ 48)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(_, validator, parser, trycatch) {
	    var ajax = {};

	    /** Loads an XML file into a DOM object * */
	    ajax.ajax = function (xmldocpath, completecallback, errorcallback, donotparse) {
	        var xmlhttp;
	        var isError = false;
	        // Hash tags should be removed from the URL since they can't be loaded in IE
	        if (xmldocpath.indexOf('#') > 0) {
	            xmldocpath = xmldocpath.replace(/#.*$/, '');
	        }

	        if (_isCrossdomain(xmldocpath) && validator.exists(window.XDomainRequest)) {
	            // IE8 / 9
	            xmlhttp = new window.XDomainRequest();
	            xmlhttp.onload = _ajaxComplete(xmlhttp, xmldocpath, completecallback, errorcallback, donotparse);
	            xmlhttp.ontimeout = xmlhttp.onprogress = function () {
	            };
	            xmlhttp.timeout = 5000;
	        } else if (validator.exists(window.XMLHttpRequest)) {
	            // Firefox, Chrome, Opera, Safari
	            xmlhttp = new window.XMLHttpRequest();
	            xmlhttp.onreadystatechange =
	                _readyStateChangeHandler(xmlhttp, xmldocpath, completecallback, errorcallback, donotparse);
	        } else {
	            if (errorcallback) {
	                errorcallback('', xmldocpath, xmlhttp);
	            }
	            return xmlhttp;
	        }
	        if (xmlhttp.overrideMimeType) {
	            xmlhttp.overrideMimeType('text/xml');
	        }

	        xmlhttp.onerror = _ajaxError(errorcallback, xmldocpath, xmlhttp);
	        var status = trycatch.tryCatch(function () {
	            xmlhttp.open('GET', xmldocpath, true);
	        });

	        if (status instanceof trycatch.Error) {
	            isError = true;
	        }

	        // make XDomainRequest asynchronous:
	        setTimeout(function () {
	            if (isError) {
	                if (errorcallback) {
	                    errorcallback(xmldocpath, xmldocpath, xmlhttp);
	                }
	                return;
	            }
	            var status = trycatch.tryCatch(function () {
	                xmlhttp.send();
	            });

	            if (status instanceof trycatch.Error) {
	                if (errorcallback) {
	                    errorcallback(xmldocpath, xmldocpath, xmlhttp);
	                }
	            }

	        }, 0);

	        return xmlhttp;
	    };

	    function _isCrossdomain(path) {
	        return (path && path.indexOf('://') >= 0) &&
	            (path.split('/')[2] !== window.location.href.split('/')[2]);
	    }

	    function _ajaxError(errorcallback, xmldocpath, xmlhttp) {
	        return function () {
	            errorcallback('Error loading file', xmldocpath, xmlhttp);
	        };
	    }

	    function _readyStateChangeHandler(xmlhttp, xmldocpath, completecallback, errorcallback, donotparse) {
	        return function () {
	            if (xmlhttp.readyState === 4) {
	                switch (xmlhttp.status) {
	                    case 200:
	                        _ajaxComplete(xmlhttp, xmldocpath, completecallback, errorcallback, donotparse)();
	                        break;
	                    case 404:
	                        errorcallback('File not found', xmldocpath, xmlhttp);
	                }

	            }
	        };
	    }

	    function _ajaxComplete(xmlhttp, xmldocpath, completecallback, errorcallback, donotparse) {
	        return function () {
	            // Handle the case where an XML document was returned with an incorrect MIME type.
	            var xml, firstChild;
	            if (donotparse) {
	                completecallback(xmlhttp);
	            } else {
	                try {
	                    // This will throw an error on Windows Mobile 7.5.
	                    // We want to trigger the error so that we can move down to the next section
	                    xml = xmlhttp.responseXML;
	                    if (xml) {
	                        firstChild = xml.firstChild;
	                        if (xml.lastChild && xml.lastChild.nodeName === 'parsererror') {
	                            if (errorcallback) {
	                                errorcallback('Invalid XML', xmldocpath, xmlhttp);
	                            }
	                            return;
	                        }
	                    }
	                } catch (e) {
	                }
	                if (xml && firstChild) {
	                    return completecallback(xmlhttp);
	                }
	                var parsedXML = parser.parseXML(xmlhttp.responseText);
	                if (parsedXML && parsedXML.firstChild) {
	                    xmlhttp = _.extend({}, xmlhttp, {
	                        responseXML: parsedXML
	                    });
	                } else {
	                    if (errorcallback) {
	                        errorcallback(xmlhttp.responseText ? 'Invalid XML' : xmldocpath, xmldocpath, xmlhttp);
	                    }
	                    return;
	                }
	                completecallback(xmlhttp);
	            }
	        };
	    }

	    return ajax;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 55 */
/*!*************************************!*\
  !*** ./src/js/utils/playerutils.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/constants */ 56),
	    __webpack_require__(/*! utils/underscore */ 42),
	    __webpack_require__(/*! utils/validator */ 47),
	    __webpack_require__(/*! utils/parser */ 46),
	    __webpack_require__(/*! version */ 57)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(Constants, _, validator, parser, version) {
	    var playerUtils = {};

	    /** Gets the repository location **/
	    playerUtils.repo = _.memoize(function () {
	        var semver = version.split('+')[0];
	        var repo = Constants.repo + semver + '/';
	        if (validator.isHTTPS()) {
	            return repo.replace(/^http:/, 'https:');
	        }
	        return repo;
	    });

	    // Is the player at least a minimum required version?
	    playerUtils.versionCheck = function (target) {
	        var tParts = ('0' + target).split(/\W/);
	        var jParts = version.split(/\W/);
	        var tMajor = parseFloat(tParts[0]);
	        var jMajor = parseFloat(jParts[0]);
	        if (tMajor > jMajor) {
	            return false;
	        } else if (tMajor === jMajor) {
	            if (parseFloat('0' + tParts[1]) > parseFloat(jParts[1])) {
	                return false;
	            }
	        }
	        return true;
	    };


	    playerUtils.loadFrom = function () {
	        return (true ? parser.getScriptPath('jwplayer.js') : playerUtils.repo());
	    };

	    return playerUtils;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 56 */
/*!***********************************!*\
  !*** ./src/js/utils/constants.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	    return {
	        repo : 'http://p.jwpcdn.com/player/v/',
	        SkinsIncluded : ['glow'],
	        SkinsLoadable : ['beelden', 'bekle', 'five', 'seven', 'roundster', 'six', 'stormtrooper', 'vapor']
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 57 */
/*!***************************!*\
  !*** ./src/js/version.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	    // This is replaced by compiler
	    return ('7.2.4+local.2016-01-09-11-49-10-530');
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));



/***/ },
/* 58 */
/*!*******************************!*\
  !*** ./src/js/utils/timer.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/underscore */ 42)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(_) {
	    var Timer = function() {
	        var _startTimes = {};
	        var _sum = {};
	        var _counts = {};

	        var _ticks = {};

	        return {
	            // Profile methods
	            start : function(methodName) {
	                _startTimes[methodName] = _.now();
	                _counts[methodName] = _counts[methodName]+1 || 1;
	            },
	            end : function(methodName) {
	                if (!_startTimes[methodName]) {
	                    return;
	                }

	                var e = _.now() - _startTimes[methodName];
	                _sum[methodName] = _sum[methodName] + e || e;
	            },
	            dump : function() {
	                return {
	                    counts : _counts,
	                    sums : _sum,
	                    events : _ticks
	                };
	            },

	            // Profile events
	            tick : function(event, time) {
	                // If a time is given, use that instead of now()
	                _ticks[event] = time || _.now();
	            },
	            between : function(left, right) {
	                if (_ticks[right] && _ticks[left]) {
	                    return _ticks[right] - _ticks[left];
	                }
	                return -1;
	            }
	        };
	    };

	    return Timer;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 59 */
/*!*********************************!*\
  !*** ./src/js/events/states.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	    return {
	        BUFFERING : 'buffering',
	        IDLE      : 'idle',
	        COMPLETE  : 'complete',
	        PAUSED    : 'paused',
	        PLAYING   : 'playing',
	        ERROR     : 'error',

	        // These exist at the provider level, but are converted to BUFFERING at higher levels
	        LOADING   : 'loading',
	        STALLED   : 'stalled'
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 60 */
/*!*****************************************!*\
  !*** ./src/js/controller/controller.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! api/config */ 69),
	    __webpack_require__(/*! api/api-deprecate */ 102),
	    __webpack_require__(/*! controller/instream-adapter */ 71),
	    __webpack_require__(/*! utils/underscore */ 42),
	    __webpack_require__(/*! controller/Setup */ 87),
	    __webpack_require__(/*! controller/captions */ 98),
	    __webpack_require__(/*! controller/model */ 74),
	    __webpack_require__(/*! playlist/playlist */ 101),
	    __webpack_require__(/*! playlist/loader */ 61),
	    __webpack_require__(/*! utils/helpers */ 45),
	    __webpack_require__(/*! view/view */ 103),
	    __webpack_require__(/*! utils/backbone.events */ 44),
	    __webpack_require__(/*! events/change-state-event */ 73),
	    __webpack_require__(/*! events/states */ 59),
	    __webpack_require__(/*! events/events */ 43),
	    __webpack_require__(/*! view/error */ 140)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(Config, deprecateInit, InstreamAdapter, _, Setup, Captions,
	            Model, Playlist, PlaylistLoader, utils, View, Events, changeStateEvent, states, events, error) {

	    function _queue(command) {
	        return function() {
	            var args = Array.prototype.slice.call(arguments, 0);
	            this.eventsQueue.push([command, args]);
	        };
	    }

	    // The model stores a different state than the provider
	    function normalizeState(newstate) {
	        if (newstate === states.LOADING || newstate === states.STALLED) {
	            return states.BUFFERING;
	        }
	        return newstate;
	    }

	    var Controller = function(originalContainer) {
	        this.originalContainer = this.currentContainer = originalContainer;
	        this.eventsQueue = [];
	        _.extend(this, Events);

	        this._model = new Model();
	    };

	    Controller.prototype = {
	        play : _queue('play'),
	        pause : _queue('pause'),
	        setVolume : _queue('setVolume'),
	        setMute : _queue('setMute'),
	        seek : _queue('seek'),
	        stop : _queue('stop'),
	        load : _queue('load'),
	        playlistNext : _queue('playlistNext'),
	        playlistPrev : _queue('playlistPrev'),
	        playlistItem : _queue('playlistItem'),
	        setFullscreen : _queue('setFullscreen'),
	        setCurrentCaptions : _queue('setCurrentCaptions'),
	        setCurrentQuality : _queue('setCurrentQuality'),

	        setup : function(options, _api) {

	            var _model,
	                _view,
	                _captions,
	                _setup,
	                _preplay = false,
	                _actionOnAttach,
	                _stopPlaylist = false, // onComplete, should we play next item or not?
	                _interruptPlay,
	                _this = this;

	            var _video = function() { return _model.getVideo(); };

	            var config = new Config(options);

	            _model = this._model.setup(config);
	            _view  = this._view  = new View(_api, _model);
	            _captions = new Captions(_api, _model);
	            _setup = new Setup(_api, _model, _view, _setPlaylist);

	            _setup.on(events.JWPLAYER_READY, _playerReady, this);
	            _setup.on(events.JWPLAYER_SETUP_ERROR, this.setupError, this);

	            _model.mediaController.on(events.JWPLAYER_MEDIA_COMPLETE, function() {
	                // Insert a small delay here so that other complete handlers can execute
	                _.defer(_completeHandler);
	            });
	            _model.mediaController.on(events.JWPLAYER_MEDIA_ERROR, this.triggerError, this);

	            // If we attempt to load flash, assume it is blocked if we don't hear back within a second
	            _model.on('change:flashBlocked', function(model, isBlocked) {
	                if (!isBlocked) {
	                    this._model.set('errorEvent', undefined);
	                    return;
	                }
	                // flashThrottle indicates whether this is a throttled event or plugin blocked event
	                var throttled = !!model.get('flashThrottle');
	                var errorEvent  = {
	                    message: throttled ? 'Click to run Flash' : 'Flash plugin failed to load'
	                };
	                // Only dispatch an error for Flash blocked, not throttled events
	                if (!throttled) {
	                    this.trigger(events.JWPLAYER_ERROR, errorEvent);
	                }
	                this._model.set('errorEvent', errorEvent);
	            }, this);

	            function initMediaModel() {
	                _model.mediaModel.on('change:state', function(mediaModel, state) {
	                    var modelState = normalizeState(state);
	                    _model.set('state', modelState);
	                });
	            }
	            initMediaModel();
	            _model.on('change:mediaModel', initMediaModel);

	            function _playerReady() {
	                _setup = null;

	                // Set up provider and allow preload
	                _setItem(_model.get('item'));

	                _model.on('change:state', changeStateEvent, this);

	                // For 'onCast' callback
	                _model.on('change:castState', function(model, evt) {
	                    _this.trigger(events.JWPLAYER_CAST_SESSION, evt);
	                });
	                // For 'onFullscreen' callback
	                _model.on('change:fullscreen', function(model, bool) {
	                    _this.trigger(events.JWPLAYER_FULLSCREEN, {
	                        fullscreen: bool
	                    });
	                });
	                // For onItem callback
	                _model.on('itemReady', function() {
	                    _this.trigger(events.JWPLAYER_PLAYLIST_ITEM, {
	                        index: _model.get('item'),
	                        item: _model.get('playlistItem')
	                    });
	                });
	                // For onPlaylist callback
	                _model.on('change:playlist', function(model, playlist) {
	                    if (playlist.length) {
	                        _this.trigger(events.JWPLAYER_PLAYLIST_LOADED, {
	                            playlist: playlist
	                        });
	                    }
	                });
	                _model.on('change:volume', function(model, vol) {
	                    _this.trigger(events.JWPLAYER_MEDIA_VOLUME, {
	                        volume: vol
	                    });
	                });
	                _model.on('change:mute', function(model, mute) {
	                    _this.trigger(events.JWPLAYER_MEDIA_MUTE, {
	                        mute: mute
	                    });
	                });
	                _model.on('change:controls', function(model, mode) {
	                    _this.trigger(events.JWPLAYER_CONTROLS, {
	                        controls: mode
	                    });
	                });

	                _model.on('change:scrubbing', function(model, state) {
	                    if (state) {
	                        _pause();
	                    } else {
	                        _play();
	                    }
	                });

	                // For onCaptionsList and onCaptionsChange
	                _model.on('change:captionsList', function(model, captionsList) {
	                    _this.trigger(events.JWPLAYER_CAPTIONS_LIST, {
	                        tracks: captionsList,
	                        track: _getCurrentCaptions()
	                    });
	                });

	                _model.mediaController.on('all', _this.trigger.bind(_this));
	                _view.on('all', _this.trigger.bind(_this));

	                this.showView(_view.element());

	                // prevent video error in display on window close
	                window.addEventListener('beforeunload', function() {
	                    if (!_isCasting()) { // don't call stop while casting
	                        _stop(true);
	                    }
	                });

	                // Defer triggering of events until they can be registered
	                _.defer(_playerReadyNotify);
	            }

	            function _playerReadyNotify() {
	                // Tell the api that we are loaded
	                _this.trigger(events.JWPLAYER_READY, {
	                    // this will be updated by Api
	                    setupTime: 0
	                });

	                _this.trigger(events.JWPLAYER_PLAYLIST_LOADED, {
	                    playlist: _model.get('playlist')
	                });
	                _this.trigger(events.JWPLAYER_PLAYLIST_ITEM, {
	                    index: _model.get('item'),
	                    item: _model.get('playlistItem')
	                });
	                
	                _this.trigger(events.JWPLAYER_CAPTIONS_LIST, {
	                    tracks: _model.get('captionsList'),
	                    track: _model.get('captionsIndex')
	                });

	                if (_model.get('autostart')) {
	                    _play();
	                }

	                while (_this.eventsQueue.length > 0) {
	                    var q = _this.eventsQueue.shift();
	                    var method = q[0];
	                    var args = q[1] || [];
	                    _this[method].apply(_this, args);
	                }
	            }

	            function _load(item) {
	                if (_model.get('state') === states.ERROR) {
	                    _model.set('state', states.IDLE);
	                }
	                _stop(true);

	                if (_model.get('autostart')) {
	                    _model.once('itemReady', _play);
	                }

	                switch (typeof item) {
	                    case 'string':
	                        _loadPlaylist(item);
	                        break;
	                    case 'object':
	                        var success = _setPlaylist(item);
	                        if (success) {
	                            _setItem(0);
	                        }
	                        break;
	                    case 'number':
	                        _setItem(item);
	                        break;
	                }
	            }

	            function _loadPlaylist(toLoad) {
	                var loader = new PlaylistLoader();
	                loader.on(events.JWPLAYER_PLAYLIST_LOADED, function(evt) {
	                    _load(evt.playlist);
	                });
	                loader.on(events.JWPLAYER_ERROR, function(evt) {
	                    evt.message = 'Error loading playlist: ' + evt.message;
	                    this.triggerError(evt);
	                }, this);
	                loader.load(toLoad);
	            }

	            function _getState() {
	                var adState = _this._instreamAdapter && _this._instreamAdapter.getState();
	                if (_.isString(adState)) {
	                    return adState;
	                }
	                return _model.get('state');
	            }

	            function _play() {
	                var status;

	                if(_model.get('state') === states.ERROR) {
	                    return;
	                }

	                var adState = _this._instreamAdapter && _this._instreamAdapter.getState();
	                if (_.isString(adState)) {
	                    // this will resume the ad. _api.playAd would load a new ad
	                    return _api.pauseAd(false);
	                }

	                if (_model.get('state') === states.COMPLETE) {
	                    _stop(true);
	                    _setItem(0);
	                }
	                if (!_preplay) {
	                    _preplay = true;
	                    _this.trigger(events.JWPLAYER_MEDIA_BEFOREPLAY, {});
	                    _preplay = false;
	                    if (_interruptPlay) {
	                        _interruptPlay = false;
	                        _actionOnAttach = null;
	                        return;
	                    }
	                }

	                if (_isIdle()) {
	                    if (_model.get('playlist').length === 0) {
	                        return false;
	                    }

	                    status = utils.tryCatch(function() {
	                        _model.loadVideo();
	                    });
	                } else if (_model.get('state') === states.PAUSED) {
	                    status = utils.tryCatch(function() {
	                        _model.playVideo();
	                    });
	                }

	                if (status instanceof utils.Error) {
	                    _this.triggerError(status);
	                    _actionOnAttach = null;
	                    return false;
	                }
	                return true;
	            }

	            function _stop(internal) {
	                // Reset the autostart play
	                _model.off('itemReady', _play);

	                var fromApi = !internal;

	                _actionOnAttach = null;

	                var status = utils.tryCatch(function() {
	                    _model.stopVideo();
	                }, _this);

	                if (status instanceof utils.Error) {
	                    _this.triggerError(status);
	                    return false;
	                }

	                if (fromApi) {
	                    _stopPlaylist = true;
	                }

	                if (_preplay) {
	                    _interruptPlay = true;
	                }

	                return true;
	            }

	            function _pause() {
	                _actionOnAttach = null;

	                var adState = _this._instreamAdapter && _this._instreamAdapter.getState();
	                if (_.isString(adState)) {
	                    return _api.pauseAd(true);
	                }

	                switch (_model.get('state')) {
	                    case states.ERROR:
	                        return false;
	                    case states.PLAYING:
	                    case states.BUFFERING:
	                        var status = utils.tryCatch(function(){
	                            _video().pause();
	                        }, this);

	                        if (status instanceof utils.Error) {
	                            _this.triggerError(status);
	                            return false;
	                        }
	                        break;
	                    default:
	                        if (_preplay) {
	                            _interruptPlay = true;
	                        }
	                }
	                return true;
	            }

	            function _isIdle() {
	                var state = _model.get('state');
	                return (state === states.IDLE || state === states.COMPLETE || state === states.ERROR);
	            }

	            function _seek(pos) {
	                if(_model.get('state') === states.ERROR) {
	                    return;
	                }
	                if (!_model.get('scrubbing') && _model.get('state') !== states.PLAYING) {
	                    _play(true);
	                }
	                _video().seek(pos);
	            }

	            function _item(index) {
	                _stop(true);
	                _setItem(index);
	                _play();
	            }

	            function _setPlaylist(p) {
	                var playlist = Playlist(p);
	                playlist = Playlist.filterPlaylist(playlist, _model.getProviders(), _model.get('androidhls'),
	                    _model.get('drm'), _model.get('preload'));

	                _model.set('playlist', playlist);

	                if (!_.isArray(playlist) || playlist.length === 0) {
	                    _this.triggerError({
	                        message: 'Error loading playlist: No playable sources found'
	                    });
	                    return false;
	                }

	                return true;
	            }

	            function _setItem(index) {
	                var playlist = _model.get('playlist');

	                // If looping past the end, or before the beginning
	                index = (index + playlist.length) % playlist.length;

	                _model.set('item', index);
	                _model.set('playlistItem', playlist[index]);
	                _model.setActiveItem(playlist[index]);
	            }

	            function _prev() {
	                _item(_model.get('item') - 1);
	            }

	            function _next() {
	                _item(_model.get('item') + 1);
	            }

	            function _completeHandler() {
	                if (!_isIdle()) {
	                    // Something has made an API call before the complete handler has fired.
	                    return;
	                } else if (_stopPlaylist) {
	                    // Stop called in onComplete event listener
	                    _stopPlaylist = false;
	                    return;
	                }

	                _actionOnAttach = _completeHandler;

	                var idx = _model.get('item');
	                if (idx === _model.get('playlist').length - 1) {
	                    // If it's the last item in the playlist
	                    if (_model.get('repeat')) {
	                        _next();
	                    } else {
	                        _model.set('state', states.COMPLETE);
	                        _this.trigger(events.JWPLAYER_PLAYLIST_COMPLETE, {});
	                    }
	                    return;
	                }

	                // It wasn't the last item in the playlist,
	                //  so go to the next one
	                _next();
	            }

	            function _setCurrentQuality(quality) {
	                _video().setCurrentQuality(quality);
	            }

	            function _getCurrentQuality() {
	                if (_video()) {
	                    return _video().getCurrentQuality();
	                }
	                return -1;
	            }

	            function _getConfig() {
	                if (this._model) {
	                    return this._model.getConfiguration();
	                }
	            }

	            function _getVisualQuality() {
	                if (this._model.mediaModel) {
	                    return this._model.mediaModel.get('visualQuality');
	                }
	                // if quality is not implemented in the provider,
	                // return quality info based on current level
	                var qualityLevels = _getQualityLevels();
	                if (qualityLevels) {
	                    var levelIndex = _getCurrentQuality();
	                    var level = qualityLevels[levelIndex];
	                    if (level) {
	                        return {
	                            level: _.extend({
	                                index: levelIndex
	                            }, level),
	                            mode: '',
	                            reason: ''
	                        };
	                    }
	                }
	                return null;
	            }

	            function _getQualityLevels() {
	                if (_video()) {
	                    return _video().getQualityLevels();
	                }
	                return null;
	            }

	            function _setCurrentAudioTrack(index) {
	                _video().setCurrentAudioTrack(index);
	            }

	            function _getCurrentAudioTrack() {
	                if (_video()) {
	                    return _video().getCurrentAudioTrack();
	                }
	                return -1;
	            }

	            function _getAudioTracks() {
	                if (_video()) {
	                    return _video().getAudioTracks();
	                }
	                return null;
	            }

	            function _setCurrentCaptions(index) {
	                // update provider subtitle track
	                _model.setVideoSubtitleTrack(index);

	                _this.trigger(events.JWPLAYER_CAPTIONS_CHANGED, {
	                    tracks: _getCaptionsList(),
	                    track: index
	                });

	            }

	            function _getCurrentCaptions() {
	                return _captions.getCurrentIndex();
	            }

	            function _getCaptionsList() {
	                return _captions.getCaptionsList();
	            }

	            /** Used for the InStream API **/
	            function _detachMedia() {
	                var provider = _model.getVideo();
	                if (provider) {
	                    var video = provider.detachMedia();
	                    if (video instanceof HTMLVideoElement) {
	                        return video;
	                    }
	                }
	                return null;
	            }

	            function _isCasting() {
	                var provider = _model.getVideo();
	                if (provider) {
	                    return provider.isCaster;
	                }
	                return false;
	            }

	            function _attachMedia(seekable) {
	                // Called after instream ends
	                var status = utils.tryCatch(function() {
	                    _model.getVideo().attachMedia(seekable);
	                });

	                if (status instanceof utils.Error) {
	                    utils.log('Error calling _attachMedia', status);
	                    return;
	                }

	                if (typeof _actionOnAttach === 'function') {
	                    _actionOnAttach();
	                }
	            }

	            /** Controller API / public methods **/
	            this.play = _play;
	            this.pause = _pause;
	            this.seek = _seek;
	            this.stop = _stop;
	            this.load = _load;
	            this.playlistNext = _next;
	            this.playlistPrev = _prev;
	            this.playlistItem = _item;
	            this.setCurrentCaptions = _setCurrentCaptions;
	            this.setCurrentQuality = _setCurrentQuality;

	            this.detachMedia = _detachMedia;
	            this.attachMedia = _attachMedia;
	            this.getCurrentQuality = _getCurrentQuality;
	            this.getQualityLevels = _getQualityLevels;
	            this.setCurrentAudioTrack = _setCurrentAudioTrack;
	            this.getCurrentAudioTrack = _getCurrentAudioTrack;
	            this.getAudioTracks = _getAudioTracks;
	            this.getCurrentCaptions = _getCurrentCaptions;
	            this.getCaptionsList = _getCaptionsList;
	            this.getVisualQuality = _getVisualQuality;
	            this.getConfig = _getConfig;
	            this.getState = _getState;

	            // Model passthroughs
	            this.setVolume = _model.setVolume;
	            this.setMute = _model.setMute;
	            this.getProvider = function(){ return _model.get('provider'); };
	            this.getWidth = function() { return _model.get('containerWidth'); };
	            this.getHeight = function() { return _model.get('containerHeight'); };

	            // View passthroughs
	            this.getContainer = function(){ return this.currentContainer; };
	            this.resize = _view.resize;
	            this.getSafeRegion = _view.getSafeRegion;
	            //this.forceState = _view.forceState;
	            //this.releaseState = _view.releaseState;
	            this.setCues = _view.addCues;

	            this.setFullscreen = function(state) {
	                if (!_.isBoolean(state)) {
	                    state = !_model.get('fullscreen');
	                }

	                _model.set('fullscreen', state);
	                if (this._instreamAdapter && this._instreamAdapter._adModel) {
	                    this._instreamAdapter._adModel.set('fullscreen', state);
	                }
	            };

	            this.addButton = function(img, tooltip, callback, id, btnClass) {
	                var btn = {
	                    img : img,
	                    tooltip : tooltip,
	                    callback : callback,
	                    id : id,
	                    btnClass : btnClass
	                };

	                var dock = _model.get('dock');
	                dock = (dock) ? dock.slice(0) : [];
	                dock = _.reject(dock, _.matches({id : btn.id}));

	                dock.push(btn);
	                _model.set('dock', dock);
	            };

	            this.removeButton = function(id) {
	                var dock = _model.get('dock') || [];
	                dock = _.reject(dock, _.matches({id : id}));
	                _model.set('dock', dock);
	            };

	            this.checkBeforePlay = function() {
	                return _preplay;
	            };

	            this.getItemQoe = function() {
	                return _model._qoeItem;
	            };

	            this.setControls = function (mode) {
	                if (!_.isBoolean(mode)) {
	                    mode = ! _model.get('controls');
	                }
	                _model.set('controls', mode);

	                var provider = _model.getVideo();
	                if (provider) {
	                    provider.setControls(mode);
	                }
	            };

	            this.playerDestroy = function () {
	                this.stop();

	                this.showView(this.originalContainer);

	                if (_view) {
	                    _view.destroy();
	                }
	                if (_model) {
	                    _model.destroy();
	                }
	                if (_setup) {
	                    _setup.destroy();
	                    _setup = null;
	                }
	            };

	            this.isBeforePlay = this.checkBeforePlay;

	            this.isBeforeComplete = function () {
	                return _model.getVideo().checkComplete();
	            };

	            this.createInstream = function() {
	                this.instreamDestroy();
	                this._instreamAdapter = new InstreamAdapter(this, _model, _view);
	                return this._instreamAdapter;
	            };

	            this.skipAd = function() {
	                if (this._instreamAdapter) {
	                    this._instreamAdapter.skipAd();
	                }
	            };

	            this.instreamDestroy = function() {
	                if (_this._instreamAdapter) {
	                    _this._instreamAdapter.destroy();
	                }
	            };

	            // This is here because it binds to the methods declared above
	            deprecateInit(_api, this);

	            _setup.start();
	        },

	        showView: function(viewElement){
	            if (!document.documentElement.contains(this.currentContainer)) {
	                // This implies the player was removed from the DOM before setup completed
	                //   or a player has been "re" setup after being removed from the DOM
	                this.currentContainer = document.getElementById(this._model.get('id'));
	                if (!this.currentContainer) {
	                    return;
	                }
	            }

	            if(this.currentContainer.parentElement) {
	                this.currentContainer.parentElement.replaceChild(viewElement, this.currentContainer);
	            }
	            this.currentContainer = viewElement;
	        },

	        triggerError: function(evt) {

	            this._model.set('errorEvent', evt);
	            this._model.set('state', states.ERROR);
	            this._model.once('change:state', function() {
	                this._model.set('errorEvent', undefined);
	            }, this);

	            this.trigger(events.JWPLAYER_ERROR, evt);
	        },

	        setupError: function(evt){
	            var message = evt.message;
	            var errorElement = utils.createElement(error(this._model.get('id'), this._model.get('skin'), message));

	            var width = this._model.get('width'),
	                height = this._model.get('height');

	            utils.style(errorElement, {
	                width: width.toString().indexOf('%') > 0 ? width : (width+ 'px'),
	                height: height.toString().indexOf('%') > 0 ? height : (height + 'px')
	            });

	            this.showView(errorElement);

	            var _this = this;
	            _.defer(function() {
	                _this.trigger(events.JWPLAYER_SETUP_ERROR, {
	                    message: message
	                });
	            });
	        }
	    };

	    return Controller;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));



/***/ },
/* 61 */
/*!***********************************!*\
  !*** ./src/js/playlist/loader.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! parsers/parsers */ 62),
	    __webpack_require__(/*! parsers/rssparser */ 63),
	    __webpack_require__(/*! utils/helpers */ 45),
	    __webpack_require__(/*! events/events */ 43),
	    __webpack_require__(/*! utils/backbone.events */ 44),
	    __webpack_require__(/*! utils/underscore */ 42)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(parsers, rssParser, utils, events, Events, _) {

	    var PlaylistLoader = function() {
	        var _this = _.extend(this, Events),
	            _xhr;

	        this.load = function(playlistfile) {
	            _xhr = utils.ajax(playlistfile, _playlistLoaded, _playlistLoadError);
	        };

	        this.destroy = function() {
	            this.off();
	            _xhr = null;
	        };

	        function _playlistLoaded(loadedEvent) {
	            var status = utils.tryCatch(function() {
	                var childNodes = loadedEvent.responseXML.childNodes;
	                var rss = '';
	                for (var i = 0; i < childNodes.length; i++) {
	                    rss = childNodes[i];
	                    if (rss.nodeType !== 8) { // 8: Node.COMMENT_NODE (IE8 doesn't have the Node.COMMENT_NODE constant)
	                        break;
	                    }
	                }

	                if (parsers.localName(rss) === 'xml') {
	                    rss = rss.nextSibling;
	                }

	                if (parsers.localName(rss) !== 'rss') {
	                    _playlistError('Not a valid RSS feed');
	                    return;
	                }

	                var pl = rssParser.parse(rss);
	                _this.trigger(events.JWPLAYER_PLAYLIST_LOADED, {
	                    playlist: pl
	                });
	            });

	            if (status instanceof utils.Error) {
	                _playlistError();
	            }
	        }

	        function _playlistLoadError(err) {
	            _playlistError(err.match(/invalid/i) ? 'Not a valid RSS feed' : '');
	        }

	        function _playlistError(msg) {
	            _this.trigger(events.JWPLAYER_ERROR, {
	                message: msg ? msg : 'Error loading file'
	            });
	        }
	    };

	    return PlaylistLoader;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 62 */
/*!***********************************!*\
  !*** ./src/js/parsers/parsers.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! utils/strings */ 49)], __WEBPACK_AMD_DEFINE_RESULT__ = function(strings) {
	    return {
	        localName: function (node) {
	            if (!node) {
	                return '';
	            } else if (node.localName) {
	                return node.localName;
	            } else if (node.baseName) {
	                return node.baseName;
	            } else {
	                return '';
	            }
	        },
	        textContent: function (node) {
	            if (!node) {
	                return '';
	            } else if (node.textContent) {
	                return strings.trim(node.textContent);
	            } else if (node.text) {
	                return strings.trim(node.text);
	            } else {
	                return '';
	            }
	        },
	        getChildNode: function (parent, index) {
	            return parent.childNodes[index];
	        },
	        numChildren: function (parent) {
	            if (parent.childNodes) {
	                return parent.childNodes.length;
	            } else {
	                return 0;
	            }
	        }

	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 63 */
/*!*************************************!*\
  !*** ./src/js/parsers/rssparser.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Parse an RSS feed and translate it to a playlist.
	 */
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/strings */ 49),
	    __webpack_require__(/*! parsers/parsers */ 62),
	    __webpack_require__(/*! parsers/jwparser */ 64),
	    __webpack_require__(/*! parsers/mediaparser */ 65),
	    __webpack_require__(/*! playlist/item */ 66)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(strings, parsers, parseEntry, mediaParser, PlaylistItem) {
	    var _textContent = parsers.textContent,
	        _getChildNode = parsers.getChildNode,
	        _numChildren = parsers.numChildren,
	        _localName = parsers.localName;

	    var rssparser = {};


	    /**
	     * Parse an RSS playlist for feed items.
	     *
	     * @param {XML} dat
	     * @reuturn {Array} playlistarray
	     */
	    rssparser.parse = function (dat) {
	        var arr = [];
	        for (var i = 0; i < _numChildren(dat); i++) {
	            var node = _getChildNode(dat, i),
	                localName = _localName(node).toLowerCase();
	            if (localName === 'channel') {
	                for (var j = 0; j < _numChildren(node); j++) {
	                    var subNode = _getChildNode(node, j);
	                    if (_localName(subNode).toLowerCase() === 'item') {
	                        arr.push(_parseItem(subNode));
	                    }
	                }
	            }
	        }
	        return arr;
	    };


	    /**
	     * Translate RSS item to playlist item.
	     *
	     * @param {XML} obj
	     * @return {PlaylistItem} PlaylistItem
	     */
	    function _parseItem(obj) {
	        var itm = {};
	        for (var i = 0; i < obj.childNodes.length; i++) {
	            var node = obj.childNodes[i];
	            var localName = _localName(node);
	            if (!localName) {
	                continue;
	            }
	            switch (localName.toLowerCase()) {
	                case 'enclosure':
	                    itm.file = strings.xmlAttribute(node, 'url');
	                    break;
	                case 'title':
	                    itm.title = _textContent(node);
	                    break;
	                case 'guid':
	                    itm.mediaid = _textContent(node);
	                    break;
	                case 'pubdate':
	                    itm.date = _textContent(node);
	                    break;
	                case 'description':
	                    itm.description = _textContent(node);
	                    break;
	                case 'link':
	                    itm.link = _textContent(node);
	                    break;
	                case 'category':
	                    if (itm.tags) {
	                        itm.tags += _textContent(node);
	                    } else {
	                        itm.tags = _textContent(node);
	                    }
	                    break;
	            }
	        }
	        itm = mediaParser(obj, itm);
	        itm = parseEntry(obj, itm);

	        return new PlaylistItem(itm);
	    }

	    return rssparser;

	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 64 */
/*!************************************!*\
  !*** ./src/js/parsers/jwparser.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Parse a feed item for JWPlayer content.
	 */
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! parsers/parsers */ 62),
	    __webpack_require__(/*! utils/strings */ 49),
	    __webpack_require__(/*! utils/helpers */ 45)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(parsers, strings, utils) {

	    var PREFIX = 'jwplayer';

	    /**
	     * Parse a feed entry for JWPlayer content.
	     *
	     * @param {XML}
	     *            obj The XML object to parse.
	     * @param {Object}
	     *            itm The playlistentry to amend the object to.
	     * @return {Object} The playlistentry, amended with the JWPlayer info.
	     */
	    var parseEntry = function (obj, itm) {
	        var sources = [],
	            tracks = [],
	            _xmlAttribute = strings.xmlAttribute,
	            def = 'default',
	            label = 'label',
	            file = 'file',
	            type = 'type';
	        for (var i = 0; i < obj.childNodes.length; i++) {
	            var node = obj.childNodes[i];
	            if (node.prefix === PREFIX) {
	                var _localName = parsers.localName(node);
	                if (_localName === 'source') {
	                    delete itm.sources;
	                    sources.push({
	                        file: _xmlAttribute(node, file),
	                        'default': _xmlAttribute(node, def),
	                        label: _xmlAttribute(node, label),
	                        type: _xmlAttribute(node, type)
	                    });
	                } else if (_localName === 'track') {
	                    delete itm.tracks;
	                    tracks.push({
	                        file: _xmlAttribute(node, file),
	                        'default': _xmlAttribute(node, def),
	                        kind: _xmlAttribute(node, 'kind'),
	                        label: _xmlAttribute(node, label)
	                    });
	                } else {
	                    itm[_localName] = utils.serialize(parsers.textContent(node));
	                    if (_localName === 'file' && itm.sources) {
	                        // jwplayer namespace file should override existing source
	                        // (probably set in MediaParser)
	                        delete itm.sources;
	                    }
	                }

	            }
	            if (!itm[file]) {
	                itm[file] = itm.link;
	            }
	        }


	        if (sources.length) {
	            itm.sources = [];
	            for (i = 0; i < sources.length; i++) {
	                if (sources[i].file.length > 0) {
	                    sources[i][def] = (sources[i][def] === 'true') ? true : false;
	                    if (!sources[i].label.length) {
	                        delete sources[i].label;
	                    }
	                    itm.sources.push(sources[i]);
	                }
	            }
	        }

	        if (tracks.length) {
	            itm.tracks = [];
	            for (i = 0; i < tracks.length; i++) {
	                if (tracks[i].file.length > 0) {
	                    tracks[i][def] = (tracks[i][def] === 'true') ? true : false;
	                    tracks[i].kind = (!tracks[i].kind.length) ? 'captions' : tracks[i].kind;
	                    if (!tracks[i].label.length) {
	                        delete tracks[i].label;
	                    }
	                    itm.tracks.push(tracks[i]);
	                }
	            }
	        }
	        return itm;
	    };

	    return parseEntry;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 65 */
/*!***************************************!*\
  !*** ./src/js/parsers/mediaparser.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Parse a MRSS group into a playlistitem (used in RSS and ATOM).
	 */
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! parsers/parsers */ 62),
	    __webpack_require__(/*! utils/strings */ 49),
	    __webpack_require__(/*! utils/helpers */ 45)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(parsers, strings, utils) {

	    var _xmlAttribute = strings.xmlAttribute,
	        _localName = parsers.localName,
	        _textContent = parsers.textContent,
	        _numChildren = parsers.numChildren;


	    /** Prefix for the MRSS namespace. **/
	    var PREFIX = 'media';

	    /**
	     * Parse a feeditem for Yahoo MediaRSS extensions.
	     * The 'content' and 'group' elements can nest other MediaRSS elements.
	     * @param    {XML}        obj        The entire MRSS XML object.
	     * @param    {Object}    itm        The playlistentry to amend the object to.
	     * @return    {Object}            The playlistentry, amended with the MRSS info.
	     **/
	    // formally known as parseGroup
	    var mediaparser = function (obj, itm) {
	        var node,
	            i,
	            tracks = 'tracks',
	            captions = [];

	        function getLabel(code) {
	            var LANGS = {
	                'zh': 'Chinese',
	                'nl': 'Dutch',
	                'en': 'English',
	                'fr': 'French',
	                'de': 'German',
	                'it': 'Italian',
	                'ja': 'Japanese',
	                'pt': 'Portuguese',
	                'ru': 'Russian',
	                'es': 'Spanish'
	            };

	            if (LANGS[code]) {
	                return LANGS[code];
	            }
	            return code;
	        }

	        for (i = 0; i < _numChildren(obj); i++) {
	            node = obj.childNodes[i];
	            if (node.prefix === PREFIX) {
	                if (!_localName(node)) {
	                    continue;
	                }
	                switch (_localName(node).toLowerCase()) {
	                    case 'content':
	                        //itm['file'] = _xmlAttribute(node, 'url');
	                        if (_xmlAttribute(node, 'duration')) {
	                            itm.duration = utils.seconds(_xmlAttribute(node, 'duration'));
	                        }
	                        if (_numChildren(node) > 0) {
	                            itm = mediaparser(node, itm);
	                        }
	                        if (_xmlAttribute(node, 'url')) {
	                            if (!itm.sources) {
	                                itm.sources = [];
	                            }
	                            itm.sources.push({
	                                file: _xmlAttribute(node, 'url'),
	                                type: _xmlAttribute(node, 'type'),
	                                width: _xmlAttribute(node, 'width'),
	                                label: _xmlAttribute(node, 'label')
	                            });
	                        }
	                        break;
	                    case 'title':
	                        itm.title = _textContent(node);
	                        break;
	                    case 'description':
	                        itm.description = _textContent(node);
	                        break;
	                    case 'guid':
	                        itm.mediaid = _textContent(node);
	                        break;
	                    case 'thumbnail':
	                        if (!itm.image) {
	                            itm.image = _xmlAttribute(node, 'url');
	                        }
	                        break;
	                    case 'player':
	                        // var url = node.url;
	                        break;
	                    case 'group':
	                        mediaparser(node, itm);
	                        break;
	                    case 'subtitle':
	                        var entry = {};
	                        entry.file = _xmlAttribute(node, 'url');
	                        entry.kind = 'captions';
	                        if (_xmlAttribute(node, 'lang').length > 0) {
	                            entry.label = getLabel(_xmlAttribute(node, 'lang'));
	                        }
	                        captions.push(entry);
	                }
	            }
	        }

	        if (!itm.hasOwnProperty(tracks)) {
	            itm[tracks] = [];
	        }

	        for (i = 0; i < captions.length; i++) {
	            itm[tracks].push(captions[i]);
	        }

	        return itm;
	    };

	    return mediaparser;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 66 */
/*!*********************************!*\
  !*** ./src/js/playlist/item.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/underscore */ 42),
	    __webpack_require__(/*! playlist/source */ 67),
	    __webpack_require__(/*! playlist/track */ 68)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(_, Source, Track) {

	    var Defaults = {
	        //description: undefined,
	        //image: undefined,
	        //mediaid: undefined,
	        //title: undefined,
	        sources: [],
	        tracks: []
	    };

	    var PlaylistItem = function (config) {

	        config = config || {};
	        if (!_.isArray(config.tracks)) {
	            delete config.tracks;
	        }

	        var _playlistItem = _.extend({}, Defaults, config);

	        if (_.isObject(_playlistItem.sources) && !_.isArray(_playlistItem.sources)) {
	            _playlistItem.sources = [Source(_playlistItem.sources)];
	        }

	        if (!_.isArray(_playlistItem.sources) || _playlistItem.sources.length === 0) {
	            if (config.levels) {
	                _playlistItem.sources = config.levels;
	            } else {
	                _playlistItem.sources = [Source(config)];
	            }
	        }

	        /** Each source should be a named object **/
	        for (var i = 0; i < _playlistItem.sources.length; i++) {
	            var s = _playlistItem.sources[i];
	            if (!s) { continue; }
	            var def = s['default'];
	            if (def) {
	                s['default'] = (def.toString() === 'true');
	            } else {
	                s['default'] = false;
	            }

	            // If the source doesn't have a label, number it
	            if (! _playlistItem.sources[i].label) {
	                _playlistItem.sources[i].label = i.toString();
	            }

	            _playlistItem.sources[i] = Source(_playlistItem.sources[i]);
	        }

	        _playlistItem.sources = _.compact(_playlistItem.sources);


	        if (!_.isArray(_playlistItem.tracks)) {
	            _playlistItem.tracks = [];
	        }

	        if (_.isArray(_playlistItem.captions)) {
	            _playlistItem.tracks = _playlistItem.tracks.concat(_playlistItem.captions);
	            delete _playlistItem.captions;
	        }

	        _playlistItem.tracks = _.compact(_.map(_playlistItem.tracks, Track));

	        return _playlistItem;
	    };

	    return PlaylistItem;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 67 */
/*!***********************************!*\
  !*** ./src/js/playlist/source.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/helpers */ 45),
	    __webpack_require__(/*! utils/strings */ 49),
	    __webpack_require__(/*! utils/underscore */ 42)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(utils, strings, _) {

	    var Defaults = {
	        //file: undefined,
	        //label: undefined,
	        //type: undefined,
	        //androidhls : undefined,
	        'default': false
	    };


	    var Source = function (config) {
	        // file is the only hard requirement
	        if (!config || !config.file) {
	            return;
	        }

	        var _source = _.extend({}, Defaults, config);

	        // normalize for odd strings
	        _source.file = strings.trim('' + _source.file);

	        // if type is given as a mimetype
	        var mimetypeRegEx = /^[^\/]+\/(?:x-)?([^\/]+)$/;
	        if (mimetypeRegEx.test(_source.type)) {
	            _source.type = _source.type.replace(mimetypeRegEx, '$1');
	        }

	        // If type not included, we infer it from extension
	        if (! _source.type) {
	            if (utils.isYouTube(_source.file)) {
	                _source.type = 'youtube';
	            } else if (utils.isRtmp(_source.file)) {
	                _source.type = 'rtmp';
	            } else {
	                var extension = strings.extension(_source.file);
	                _source.type = extension;
	            }
	        }

	        if (!_source.type) {
	            return;
	        }

	        // normalize types
	        if (_source.type === 'm3u8') {
	            _source.type = 'hls';
	        }
	        if (_source.type === 'smil') {
	            _source.type = 'rtmp';
	        }
	        // Although m4a is a container format, it is most often used for aac files
	        // http://en.wikipedia.org/w/index.php?title=MPEG-4_Part_14
	        if (_source.type === 'm4a') {
	            _source.type = 'aac';
	        }

	        // remove empty strings
	        _.each(_source, function(val, key) {
	            if (val === '') {
	                delete _source[key];
	            }
	        });

	        return _source;
	    };

	    return Source;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 68 */
/*!**********************************!*\
  !*** ./src/js/playlist/track.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/underscore */ 42)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(_) {

	    var defaults = {
	        //file: undefined,
	        //label: undefined,
	        kind: 'captions',
	        'default': false
	    };

	    var Track = function (config) {
	        // File is the only required attr
	        if (!config || !config.file) {
	            return;
	        }

	        return _.extend({}, defaults, config);
	    };

	    return Track;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 69 */
/*!******************************!*\
  !*** ./src/js/api/config.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/helpers */ 45),
	    __webpack_require__(/*! utils/stretching */ 70),
	    __webpack_require__(/*! utils/underscore */ 42)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(utils, stretchUtils, _) {
	    /*global __webpack_public_path__:true*/

	    // Defaults
	    var Defaults = {
	        //androidhls: true,
	        autostart: false,
	        controls: true,
	        displaytitle : true,
	        displaydescription: true,
	        mobilecontrols: false,
	        repeat: false,
	        castAvailable: false,
	        skin: 'glow',
	        stretching: stretchUtils.UNIFORM,
	        mute: false,
	        volume: 90,
	        width: 480,
	        height: 270
	        //qualityLabel: '480p',     // specify a default quality
	        //captionLabel: 'English',  // specify a default Caption
	    };

	    function _deserialize(options) {
	        _.each(options, function(val, key) {
	            options[key] = utils.serialize(val);
	        });
	    }

	    function _normalizeSize(val) {
	        if (val.slice && val.slice(-2) === 'px') {
	            val = val.slice(0,-2);
	        }
	        return val;
	    }

	    var config = function(options) {
	        var allOptions = _.extend({}, (window.jwplayer || {}).defaults, options);

	        _deserialize(allOptions);

	        var config = _.extend({}, Defaults, allOptions);
	        if (config.base === '.') {
	            config.base = utils.getScriptPath('jwplayer.js');
	        }
	        config.base = (config.base || utils.loadFrom()).replace(/\/?$/, '/');
	        __webpack_require__.p = config.base;
	        config.width  = _normalizeSize(config.width);
	        config.height = _normalizeSize(config.height);
	        config.flashplayer = config.flashplayer || utils.getScriptPath('jwplayer.js') + 'jwplayer.flash.swf';

	        // Non ssl pages can only communicate with flash when it is loaded
	        //   from a non ssl location
	        if (window.location.protocol === 'http:') {
	            config.flashplayer = config.flashplayer.replace('https', 'http');
	        }

	        config.aspectratio = _evaluateAspectRatio(config.aspectratio, config.width);

	        if (_.isObject(config.skin)) {
	            config.skinUrl = config.skin.url;
	            config.skinColorInactive = config.skin.inactive; // default icon color
	            config.skinColorActive = config.skin.active;  // icon hover, on, slider color
	            config.skinColorBackground = config.skin.background; // control elements background
	            config.skin = _.isString(config.skin.name) ? config.skin.name : Defaults.skin; // get skin name if it exists
	        }

	        if (_.isString(config.skin) && config.skin.indexOf('.xml') > 0) {
	            console.log('JW Player does not support XML skins, please update your config');
	            config.skin = config.skin.replace('.xml', '');
	        }

	        if (!config.aspectratio) {
	            delete config.aspectratio;
	        }

	        if (!config.playlist) {
	            // This is a legacy fallback, assuming a playlist item has been flattened into the config
	            var obj = _.pick(config, [
	                'title',
	                'description',
	                'type',
	                'mediaid',
	                'image',
	                'file',
	                'sources',
	                'tracks',
	                'preload'
	            ]);

	            config.playlist = [ obj ];
	        }

	        return config;
	    };


	    function _evaluateAspectRatio(ar, width) {
	        if (width.toString().indexOf('%') === -1) {
	            return 0;
	        }
	        if (typeof ar !== 'string' || !utils.exists(ar)) {
	            return 0;
	        }
	        var index = ar.indexOf(':');
	        if (index === -1) {
	            return 0;
	        }
	        var w = parseFloat(ar.substr(0, index)),
	            h = parseFloat(ar.substr(index + 1));
	        if (w <= 0 || h <= 0) {
	            return 0;
	        }
	        return (h / w * 100) + '%';
	    }


	    return config;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 70 */
/*!************************************!*\
  !*** ./src/js/utils/stretching.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/underscore */ 42),
	    __webpack_require__(/*! utils/helpers */ 45),
	    __webpack_require__(/*! utils/css */ 53)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(_, utils, cssUtils) {
	    /*jshint maxparams:6*/

	    /** Stretching options **/
	    var _stretching = {
	        NONE: 'none',
	        FILL: 'fill',
	        UNIFORM: 'uniform',
	        EXACTFIT: 'exactfit'
	    };

	    var scale = function(domelement, xscale, yscale, xoffset, yoffset) {
	        var value = '';

	        // Set defaults
	        xscale = xscale || 1;
	        yscale = yscale || 1;
	        xoffset = xoffset | 0;
	        yoffset = yoffset | 0;

	        if (xscale !== 1 || yscale !== 1) {
	            value = 'scale(' + xscale + ', ' + yscale + ')';
	        }
	        if (xoffset || yoffset) {
	            if (value) {
	                value += ' ';
	            }
	            value += 'translate(' + xoffset + 'px, ' + yoffset + 'px)';
	        }
	        cssUtils.transform(domelement, value);
	    };
	    var _scale = scale;

	    /**
	     * Stretches domelement based on stretching. parentWidth, parentHeight,
	     * elementWidth, and elementHeight are required as the elements dimensions
	     * change as a result of the stretching. Hence, the original dimensions must
	     * always be supplied.
	     *
	     * @param {String}
	     *            stretching
	     * @param {DOMElement}
	     *            domelement
	     * @param {Number}
	     *            parentWidth
	     * @param {Number}
	     *            parentHeight
	     * @param {Number}
	     *            elementWidth
	     * @param {Number}
	     *            elementHeight
	     */
	    var stretch = function(stretching, domelement, parentWidth, parentHeight, elementWidth, elementHeight) {
	        if (!domelement) {
	            return false;
	        }
	        if (!parentWidth || !parentHeight || !elementWidth || !elementHeight) {
	            return false;
	        }
	        stretching = stretching || _stretching.UNIFORM;

	        var xscale = Math.ceil(parentWidth / 2) * 2 / elementWidth,
	            yscale = Math.ceil(parentHeight / 2) * 2 / elementHeight,
	            video = (domelement.tagName.toLowerCase() === 'video'),
	            scale = false,
	            stretchClass = 'jw-stretch-' + stretching.toLowerCase(),
	            heightLimited = false;

	        switch (stretching.toLowerCase()) {
	            case _stretching.FILL:
	                if (xscale > yscale) {
	                    yscale = xscale;
	                } else {
	                    xscale = yscale;
	                }
	                scale = true;
	                break;
	            case _stretching.NONE:
	                xscale = yscale = 1;
	            /* falls through */
	            case _stretching.EXACTFIT:
	                scale = true;
	                break;
	            case _stretching.UNIFORM:
	            /* falls through */
	            default:
	                if (xscale > yscale) {
	                    if (elementWidth * yscale / parentWidth > 0.95) {
	                        scale = true;
	                        stretchClass = 'jw-stretch-exactfit';
	                    } else {
	                        elementWidth = elementWidth * yscale;
	                        elementHeight = elementHeight * yscale;
	                    }
	                    heightLimited = true;
	                } else {
	                    if (elementHeight * xscale / parentHeight > 0.95) {
	                        scale = true;
	                        stretchClass = 'jw-stretch-exactfit';
	                    } else {
	                        elementWidth = elementWidth * xscale;
	                        elementHeight = elementHeight * xscale;
	                    }
	                    heightLimited = false;
	                }
	                if (scale) {
	                    xscale = Math.ceil(parentWidth / 2) * 2 / elementWidth;
	                    yscale = Math.ceil(parentHeight / 2) * 2 / elementHeight;
	                }
	        }

	        if (video) {
	            var style = {
	                left: '',
	                right: '',
	                width: '',
	                height: ''
	            };
	            if (scale) {
	                if (parentWidth < elementWidth) {
	                    style.left =
	                        style.right = Math.ceil((parentWidth - elementWidth) / 2);
	                }
	                if (parentHeight < elementHeight) {
	                    style.top =
	                        style.bottom = Math.ceil((parentHeight - elementHeight) / 2);
	                }
	                style.width = elementWidth;
	                style.height = elementHeight;
	                _scale(domelement, xscale, yscale, 0, 0);
	            } else {
	                scale = false;
	                cssUtils.transform(domelement);
	            }


	            // iOS 8 implemented object-fit poorly and needs additional styles to make it fit correctly when the
	            // video is scaled by the browser instead of manually via transforms
	            if (utils.isIOS(8) && scale === false){
	                var iOSScaleFix = {
	                    width: 'auto',
	                    height: 'auto'
	                };
	                if(stretching.toLowerCase() === _stretching.UNIFORM){
	                    iOSScaleFix[(heightLimited === false) ? 'width' : 'height'] = '100%';
	                }
	                _.extend(style, iOSScaleFix);
	            }

	            cssUtils.style(domelement, style);
	        } else {
	            domelement.className = domelement.className.replace(/\s*jw\-stretch\-(none|exactfit|uniform|fill)/g, '') +
	            ' ' + stretchClass;
	        }
	        return scale;
	    };

	    return {
	        scale : scale,
	        stretching : _stretching,
	        stretch : stretch
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 71 */
/*!***********************************************!*\
  !*** ./src/js/controller/instream-adapter.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! controller/instream-html5 */ 72),
	    __webpack_require__(/*! controller/instream-flash */ 86),
	    __webpack_require__(/*! events/events */ 43),
	    __webpack_require__(/*! events/states */ 59),
	    __webpack_require__(/*! utils/helpers */ 45),
	    __webpack_require__(/*! utils/backbone.events */ 44),
	    __webpack_require__(/*! utils/underscore */ 42)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(InstreamHtml5, InstreamFlash, events, states, utils, Events, _) {

	    function chooseInstreamMethod(_model) {
	        var providerName = _model.get('provider').name || '';
	        if (providerName.indexOf('flash') >= 0) {
	            return InstreamFlash;
	        }

	        return InstreamHtml5;
	    }

	    var _defaultOptions = {
	        skipoffset: null,
	        tag: null
	    };

	    var InstreamAdapter = function(_controller, _model, _view) {

	        var InstreamMethod = chooseInstreamMethod(_model);
	        var _instream = new InstreamMethod(_controller, _model);

	        var _array, // the copied in playlist
	            _arrayOptions,
	            _arrayIndex = 0,
	            _options = {},
	            _oldProvider,
	            _oldpos,
	            _olditem;

	        var _clickHandler = _.bind(function(evt) {
	            evt = evt || {};
	            evt.hasControls = !!_model.get('controls');

	            this.trigger(events.JWPLAYER_INSTREAM_CLICK, evt);

	            // toggle playback after click event
	            if (!_instream || !_instream._adModel) {
	                return;
	            }
	            if (_instream._adModel.get('state') === states.PAUSED) {
	                if (evt.hasControls) {
	                    _instream.instreamPlay();
	                }
	            } else {
	                _instream.instreamPause();
	            }
	        }, this);

	        var _doubleClickHandler = _.bind(function() {
	            if (!_instream || !_instream._adModel) {
	                return;
	            }
	            if (_instream._adModel.get('state') === states.PAUSED) {
	                if (_model.get('controls')) {
	                    _controller.setFullscreen();
	                    _controller.play();
	                }
	            }
	        }, this);

	        this.type = 'instream';

	        this.init = function() {

	            // Keep track of the original player state
	            _oldProvider = _model.getVideo();
	            _oldpos = _model.get('position');
	            _olditem = _model.get('playlist')[_model.get('item')];

	            _instream.on('all', _instreamForward, this);
	            _instream.on(events.JWPLAYER_MEDIA_TIME, _instreamTime, this);
	            _instream.on(events.JWPLAYER_MEDIA_COMPLETE, _instreamItemComplete, this);
	            _instream.init();

	            // Make sure the original player's provider stops broadcasting events (pseudo-lock...)
	            _oldProvider.detachMedia();

	            _model.mediaModel.set('state', states.BUFFERING);

	            if (_controller.checkBeforePlay() || (_oldpos === 0 && !_oldProvider.checkComplete())) {
	                // make sure video restarts after preroll
	                _oldpos = 0;
	                _model.set('preInstreamState', 'instream-preroll');
	            } else if (_oldProvider && _oldProvider.checkComplete() || _model.get('state') === states.COMPLETE) {
	                _model.set('preInstreamState', 'instream-postroll');
	            } else {
	                _model.set('preInstreamState', 'instream-midroll');
	            }

	            // If the player's currently playing, pause the video tag
	            var currState = _model.get('state');
	            if (currState === states.PLAYING || currState === states.BUFFERING) {
	                _oldProvider.pause();
	            }

	            // Show instream state instead of normal player state
	            _view.setupInstream(_instream._adModel);
	            _instream._adModel.set('state', states.BUFFERING);

	            // don't trigger api play/pause on display click
	            _view.clickHandler().setAlternateClickHandlers(utils.noop, null);

	            this.setText('Loading ad');
	            return this;
	        };

	        function _instreamForward(type, data) {
	            data = data || {};

	            if (_options.tag && !data.tag) {
	                data.tag = _options.tag;
	            }

	            this.trigger(type, data);
	        }

	        function _instreamTime(evt) {
	            _instream._adModel.set('duration', evt.duration);
	            _instream._adModel.set('position', evt.position);
	        }

	        function _instreamItemComplete(e) {

	            if (_array && _arrayIndex + 1 < _array.length) {
	                // We want a play event for the next item, so we ensure the state != playing
	                _instream._adModel.set('state', 'buffering');

	                // destroy skip button
	                _model.set('skipButton', false);

	                _arrayIndex++;
	                var item = _array[_arrayIndex];
	                var options;
	                if (_arrayOptions) {
	                    options = _arrayOptions[_arrayIndex];
	                }
	                this.loadItem(item, options);
	            } else {
	                if (e.type === events.JWPLAYER_MEDIA_COMPLETE) {
	                    // Forward last media complete event. 'all' listener has not fired yet.
	                    _instreamForward.call(this, e.type, e);
	                    // Dispatch playlist complete event for ad pods
	                    this.trigger(events.JWPLAYER_PLAYLIST_COMPLETE, {});
	                }
	                this.destroy();
	            }
	        }

	        this.loadItem = function(item, options) {
	            if (utils.isAndroid(2.3)) {
	                this.trigger({
	                    type: events.JWPLAYER_ERROR,
	                    message: 'Error loading instream: Cannot play instream on Android 2.3'
	                });
	                return;
	            }
	            // Copy the playlist item passed in and make sure it's formatted as a proper playlist item
	            if (_.isArray(item)) {
	                _array = item;
	                _arrayOptions = options;
	                item = _array[_arrayIndex];
	                if (_arrayOptions) {
	                    options = _arrayOptions[_arrayIndex];
	                }
	            }

	            // Dispatch playlist item event for ad pods
	            this.trigger(events.JWPLAYER_PLAYLIST_ITEM, {
	                index: _arrayIndex,
	                item: item
	            });

	            _options = _.extend({}, _defaultOptions, options);
	            _instream.load(item);

	            this.addClickHandler();

	            var skipoffset = item.skipoffset || _options.skipoffset;
	            if (skipoffset) {
	                _instream._adModel.set('skipMessage', _options.skipMessage);
	                _instream._adModel.set('skipText', _options.skipText);
	                _instream._adModel.set('skipOffset', skipoffset);

	                _model.set('skipButton', true);
	            }
	        };

	        this.play = function() {
	            _instream.instreamPlay();
	        };

	        this.pause = function() {
	            _instream.instreamPause();
	        };

	        this.hide = function() {
	            _instream.hide();
	        };

	        this.addClickHandler = function() {
	            // start listening for ad click
	            _view.clickHandler().setAlternateClickHandlers(_clickHandler, _doubleClickHandler);

	            //if (utils.isMSIE()) {
	                //_oldProvider.parentElement.addEventListener('click', _view.clickHandler().clickHandler);
	            //}

	            _instream.on(events.JWPLAYER_MEDIA_META, this.metaHandler, this);

	        };

	        this.skipAd = function(evt) {
	            var skipAdType = events.JWPLAYER_AD_SKIPPED;
	            this.trigger(skipAdType, evt);
	            _instreamItemComplete.call(this, {
	                type: skipAdType
	            });
	        };

	        /** Handle the JWPLAYER_MEDIA_META event **/
	        this.metaHandler = function (evt) {
	            // If we're getting video dimension metadata from the provider, allow the view to resize the media
	            if (evt.width && evt.height) {
	                _view.resizeMedia();
	            }
	        };

	        this.destroy = function() {
	            this.off();

	            _model.set('skipButton', false);

	            if (_instream) {
	                if (_view.clickHandler()) {
	                    _view.clickHandler().revertAlternateClickHandlers();
	                }
	                _instream.instreamDestroy();

	                // Must happen after instream.instreamDestroy()
	                _view.destroyInstream();

	                _instream = null;

	                // Re-attach the controller
	                _controller.attachMedia();

	                var oldMode = _model.get('preInstreamState');
	                switch (oldMode) {
	                    case 'instream-preroll':
	                    case 'instream-midroll':
	                        var item = _.extend({}, _olditem);
	                        item.starttime = _oldpos;
	                        _model.loadVideo(item);

	                        // On error, mediaModel has buffering states in mobile, but oldProvider's state is playing.
	                        // So, changing mediaModel's state to playing does not change provider state unless we do this
	                        if (utils.isMobile() && (_model.mediaModel.get('state') === states.BUFFERING)) {
	                            _oldProvider.setState(states.BUFFERING);
	                        }
	                        _oldProvider.play();
	                        break;
	                    case 'instream-postroll':
	                    case 'instream-idle':
	                        _oldProvider.stop();
	                        break;
	                }
	            }
	        };

	        this.getState = function() {
	            if (_instream && _instream._adModel) {
	                return _instream._adModel.get('state');
	            }
	            // api expects false to know we aren't in instreamMode
	            return false;
	        };

	        this.setText = function(text) {
	            _view.setAltText(text ? text : '');
	        };

	        // This method is triggered by plugins which want to hide player controls
	        this.hide = function() {
	            _view.useExternalControls();
	        };

	    };

	    _.extend(InstreamAdapter.prototype, Events);

	    return InstreamAdapter;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 72 */
/*!*********************************************!*\
  !*** ./src/js/controller/instream-html5.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/underscore */ 42),
	    __webpack_require__(/*! utils/backbone.events */ 44),
	    __webpack_require__(/*! events/change-state-event */ 73),
	    __webpack_require__(/*! events/events */ 43),
	    __webpack_require__(/*! events/states */ 59),
	    __webpack_require__(/*! controller/model */ 74)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(_, Events, changeStateEvent, events, states, Model) {

	    var InstreamHtml5 = function(_controller, _model) {

	        var _adModel,
	            _currentProvider,
	            _this = _.extend(this, Events);

	        // Listen for player resize events
	        _controller.on(events.JWPLAYER_FULLSCREEN, function(data) {
	            this.trigger(events.JWPLAYER_FULLSCREEN, data);
	        }, _this);

	        /*****************************************
	         *****  Public instream API methods  *****
	         *****************************************/

	        this.init = function() {
	            // Initialize the instream player's model copied from main player's model
	            _adModel = new Model().setup({
	                id: _model.get('id'),
	                volume: _model.get('volume'),
	                fullscreen: _model.get('fullscreen'),
	                mute: _model.get('mute')
	            });
	            _adModel.on('fullscreenchange', _nativeFullscreenHandler);

	            this._adModel = _adModel;
	        };

	        /** Load an instream item and initialize playback **/
	        _this.load = function(item) {

	            _adModel.set('item', 0);
	            _adModel.set('playlistItem', item);
	            // Make sure it chooses a provider
	            _adModel.setActiveItem(item);

	            // check provider after item change
	            _checkProvider();

	            // Match the main player's controls state
	            _adModel.off(events.JWPLAYER_ERROR);
	            _adModel.on(events.JWPLAYER_ERROR, function(data) {
	                this.trigger(events.JWPLAYER_ERROR, data);
	            }, _this);

	            // Load the instream item
	            _adModel.loadVideo(item);
	        };

	        /** Stop the instream playback and revert the main player back to its original state **/
	        this.instreamDestroy = function() {
	            if (!_adModel) {
	                return;
	            }

	            _adModel.off();

	            // We don't want the instream provider to be attached to the video tag anymore
	            this.off();
	            if (_currentProvider) {
	                _currentProvider.detachMedia();
	                _currentProvider.off();
	                _currentProvider.destroy();
	            }

	            // Return the view to its normal state
	            _adModel = null;

	            // Remove all callbacks for 'this' for all events
	            _controller.off(null, null, this);
	            _controller = null;
	        };

	        /** Start instream playback **/
	        _this.instreamPlay = function() {
	            if (!_adModel.getVideo()) {
	                return;
	            }
	            _adModel.getVideo().play(true);
	        };

	        /** Pause instream playback **/
	        _this.instreamPause = function() {
	            if (!_adModel.getVideo()) {
	                return;
	            }
	            _adModel.getVideo().pause(true);
	        };


	        /*****************************
	         ****** Private methods ******
	         *****************************/

	        function _checkProvider() {
	            var provider = _adModel.getVideo();

	            if (_currentProvider !== provider) {
	                _currentProvider = provider;

	                if (!provider) {
	                    return;
	                }

	                provider.off();

	                provider.on('all', function(type, data) {
	                    data = _.extend({}, data, {type: type});
	                    this.trigger(type, data);
	                }, _this);

	                provider.on(events.JWPLAYER_MEDIA_BUFFER_FULL, _bufferFullHandler);

	                provider.on(events.JWPLAYER_PLAYER_STATE, stateHandler);
	                provider.attachMedia();
	                provider.mute(_model.get('mute'));
	                provider.volume(_model.get('volume'));

	                _adModel.on('change:state', changeStateEvent, _this);
	            }
	        }

	        function stateHandler(evt) {
	            switch (evt.newstate) {
	                case states.PLAYING:
	                    _adModel.set('state', evt.newstate);
	                    break;
	                case states.PAUSED:
	                    _adModel.set('state', evt.newstate);
	                    break;
	            }
	        }


	        function _nativeFullscreenHandler(evt) {
	            _model.trigger(evt.type, evt);
	            _this.trigger(events.JWPLAYER_FULLSCREEN, {
	                fullscreen: evt.jwstate
	            });
	        }

	        /** Handle the JWPLAYER_MEDIA_BUFFER_FULL event **/
	        function _bufferFullHandler() {
	            _adModel.getVideo().play();
	        }

	        return _this;
	    };

	    return InstreamHtml5;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 73 */
/*!*********************************************!*\
  !*** ./src/js/events/change-state-event.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! events/states */ 59)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(states) {

	    // The api should dispatch an idle event when the model's state changes to complete
	    // This is to avoid conflicts with the complete event and to maintain legacy event flow
	    function normalizeApiState(newstate) {
	        if (newstate === states.COMPLETE || newstate === states.ERROR) {
	            return states.IDLE;
	        }
	        return newstate;
	    }

	    return function(model, newstate, oldstate) {
	        newstate = normalizeApiState(newstate);
	        oldstate = normalizeApiState(oldstate);
	        // do not dispatch idle a second time after complete
	        if (newstate !== oldstate) {
	            // buffering, playing and paused states become:
	            // buffer, play and pause events
	            var eventType = newstate.replace(/(?:ing|d)$/, '');
	            var evt = {
	                type: eventType,
	                newstate: newstate,
	                oldstate: oldstate,
	                reason: model.mediaModel.get('state')
	            };
	            this.trigger(eventType, evt);
	        }
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 74 */
/*!************************************!*\
  !*** ./src/js/controller/model.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/helpers */ 45),
	    __webpack_require__(/*! providers/providers */ 75),
	    __webpack_require__(/*! controller/storage */ 83),
	    __webpack_require__(/*! controller/qoe */ 84),
	    __webpack_require__(/*! utils/underscore */ 42),
	    __webpack_require__(/*! utils/backbone.events */ 44),
	    __webpack_require__(/*! utils/simplemodel */ 85),
	    __webpack_require__(/*! events/events */ 43),
	    __webpack_require__(/*! events/states */ 59)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(utils, Providers, Storage, QOE, _, Events, SimpleModel, events, states) {


	    var PERSIST_ITEMS = [
	        'volume',
	        'mute',
	        'captionLabel',
	        'qualityLabel'
	    ];

	    // Represents the state of the player
	    var Model = function() {
	        var _this = this,
	            // Video provider
	            _providers,
	            _provider,
	            _currentProvider = utils.noop;

	        this.mediaController = _.extend({}, Events);
	        this.mediaModel = new MediaModel();

	        QOE.model(this);

	        this.set('mediaModel', this.mediaModel);

	        this.setup = function(config) {
	            var storage = new Storage();
	            storage.track(PERSIST_ITEMS, this);

	            _.extend(this.attributes, config, storage.getAllItems(), {
	                // always start on first playlist item
	                item : 0,
	                // Initial state, upon setup
	                state: states.IDLE,
	                // Initially we don't assume Flash is needed
	                flashBlocked : false,
	                fullscreen: false,
	                compactUI: false,
	                scrubbing : false,
	                duration: 0,
	                position: 0,
	                buffer: 0
	            });

	            // Mobile doesn't support autostart
	            // This check should be replaced with something that detects whether the current system
	            // requires a user interaction to start playback
	            if (utils.isMobile() && !config.mobileSdk) {
	                this.set('autostart', false);
	            }

	            this.updateProviders();

	            return this;
	        };

	        this.getConfiguration = function() {
	            return _.omit(this.clone(), ['mediaModel']);
	        };

	        this.updateProviders = function() {
	            _providers = new Providers(this.getConfiguration());
	        };

	        function _videoEventHandler(type, data) {
	            switch (type) {
	                case 'flashThrottle':
	                    var throttled = (data.state !== 'resume');
	                    this.set('flashThrottle', throttled);
	                    this.set('flashBlocked', throttled);
	                    break;

	                case 'flashBlocked':
	                    this.set('flashBlocked', true);
	                    return;
	                case 'flashUnblocked':
	                    this.set('flashBlocked', false);
	                    return;

	                case 'volume':
	                case 'mute':
	                    this.set(type, data[type]);
	                    return;

	                case events.JWPLAYER_MEDIA_TYPE:
	                    this.mediaModel.set('mediaType', data.mediaType);
	                    break;

	                case events.JWPLAYER_PLAYER_STATE:
	                    this.mediaModel.set('state', data.newstate);

	                    // This "return" is important because
	                    //  we are choosing to not propagate this event.
	                    //  Instead letting the master controller do so
	                    return;

	                case events.JWPLAYER_MEDIA_BUFFER:
	                    this.set('buffer', data.bufferPercent);

	                    /* falls through */
	                case events.JWPLAYER_MEDIA_META:
	                    var duration = data.duration;
	                    if (_.isNumber(duration)) {
	                        this.mediaModel.set('duration', duration);
	                        this.set('duration', duration);
	                    }
	                    break;

	                case events.JWPLAYER_MEDIA_BUFFER_FULL:
	                    // media controller
	                    if(this.mediaModel.get('playAttempt')) {
	                        this.playVideo();
	                    } else {
	                        this.mediaModel.on('change:playAttempt', function() {
	                            this.playVideo();
	                        }, this);
	                    }
	                    break;

	                case events.JWPLAYER_MEDIA_TIME:
	                    this.mediaModel.set('position', data.position);
	                    this.mediaModel.set('duration', data.duration);
	                    this.set('position', data.position);
	                    this.set('duration', data.duration);
	                    break;
	                case events.JWPLAYER_PROVIDER_CHANGED:
	                    this.set('provider', _provider.getName());
	                    break;

	                case events.JWPLAYER_MEDIA_LEVELS:
	                    this.setQualityLevel(data.currentQuality, data.levels);
	                    this.mediaModel.set('levels', data.levels);
	                    break;
	                case events.JWPLAYER_MEDIA_LEVEL_CHANGED:
	                    this.setQualityLevel(data.currentQuality, data.levels);
	                    this.persistQualityLevel(data.currentQuality, data.levels);
	                    break;
	                case events.JWPLAYER_AUDIO_TRACKS:
	                    this.setCurrentAudioTrack(data.currentTrack, data.tracks);
	                    this.mediaModel.set('audioTracks', data.tracks);
	                    break;
	                case events.JWPLAYER_AUDIO_TRACK_CHANGED:
	                    this.setCurrentAudioTrack(data.currentTrack, data.tracks);
	                    break;

	                case 'visualQuality':
	                    var visualQuality = _.extend({}, data);
	                    this.mediaModel.set('visualQuality', visualQuality);
	                    break;
	            }

	            var evt = _.extend({}, data, {type: type});
	            this.mediaController.trigger(type, evt);
	        }

	        this.setQualityLevel = function(quality, levels){
	            if (quality > -1 && levels.length > 1 && _provider.getName().name !== 'youtube') {
	                this.mediaModel.set('currentLevel', parseInt(quality));

	            }
	        };

	        this.persistQualityLevel = function(quality, levels) {
	            var currentLevel = levels[quality] || {};
	            var label = currentLevel.label;
	            this.set('qualityLabel', label);
	        };

	        this.setCurrentAudioTrack = function(currentTrack, tracks) {
	            if (currentTrack > -1 && tracks.length > 1) {
	                this.mediaModel.set('currentAudioTrack', parseInt(currentTrack));
	            }
	        };

	        this.onMediaContainer = function () {
	            var container = this.get('mediaContainer');
	            _currentProvider.setContainer(container);
	        };

	        this.changeVideoProvider = function(Provider) {
	            this.off('change:mediaContainer', this.onMediaContainer);

	            if (_provider) {
	                _provider.off(null, null, this);
	                if (_provider.getContainer()) {
	                    _provider.remove();
	                }
	            }

	            _currentProvider = new Provider(_this.get('id'), _this.getConfiguration());

	            var container = this.get('mediaContainer');
	            if (container) {
	                _currentProvider.setContainer(container);
	            } else {
	                this.once('change:mediaContainer', this.onMediaContainer);
	            }

	            this.set('provider', _currentProvider.getName());

	            if (_currentProvider.getName().name.indexOf('flash') === -1) {
	                this.set('flashThrottle', undefined);
	                this.set('flashBlocked', false);
	            }

	            _provider = _currentProvider;
	            _provider.volume(_this.get('volume'));
	            _provider.mute(_this.get('mute'));
	            _provider.on('all', _videoEventHandler, this);
	        };

	        this.destroy = function() {
	            if (_provider) {
	                _provider.off(null, null, this);
	                _provider.destroy();
	            }
	        };

	        this.getVideo = function() {
	            return _provider;
	        };


	        this.setFullscreen = function(state) {
	            state = !!state;
	            if (state !== _this.get('fullscreen')) {
	                _this.set('fullscreen', state);
	            }
	        };

	        // Give the option for a provider to be forced
	        this.chooseProvider = function(source) {
	            return _providers.choose(source).provider;
	        };


	        this.setActiveItem = function(item) {

	            // Item is actually changing
	            this.mediaModel.off();
	            this.mediaModel = new MediaModel();
	            this.set('mediaModel', this.mediaModel);

	            var source = item && item.sources && item.sources[0];
	            if (source === undefined) {
	                // source is undefined when resetting index with empty playlist
	                return;
	            }

	            var Provider = this.chooseProvider(source);
	            if (!Provider) {
	                throw new Error('No suitable provider found');
	            }

	            // If we are changing video providers
	            if (!(_currentProvider instanceof Provider)) {
	                _this.changeVideoProvider(Provider);
	            }

	            // this allows the providers to preload
	            if (_currentProvider.init) {
	                _currentProvider.init(item);
	            }

	            // Listening for change:item won't suffice when loading the same index or file
	            // We also can't listen for change:mediaModel because it triggers whether or not
	            //  an item was actually loaded
	            this.trigger('itemReady', item);
	        };

	        this.getProviders = function() {
	            return _providers;
	        };

	        this.resetProvider = function() {
	            _currentProvider = null;
	        };

	        this.setVolume = function(vol) {
	            vol = Math.round(vol);
	            _this.set('volume', vol);
	            if (_provider) {
	                _provider.volume(vol);
	            }
	            var muted = (vol === 0);
	            if (muted !== _this.get('mute')) {
	                _this.setMute(muted);
	            }
	        };

	        this.setMute = function(state) {
	            if (!utils.exists(state)) {
	                state = !_this.get('mute');
	            }
	            _this.set('mute', state);
	            if (_provider) {
	                _provider.mute(state);
	            }
	            if (!state) {
	                var volume = Math.max(10, _this.get('volume'));
	                this.setVolume(volume);
	            }
	        };

	        // The model is also the mediaController for now
	        this.loadVideo = function(item) {

	            this.mediaModel.set('playAttempt', true);
	            this.mediaController.trigger(events.JWPLAYER_MEDIA_PLAY_ATTEMPT);

	            if (!item) {
	                var idx = this.get('item');
	                item = this.get('playlist')[idx];
	            }
	            this.set('position', item.starttime || 0);
	            this.set('duration', item.duration || 0);

	            _provider.load(item);
	        };

	        this.stopVideo = function() {
	            if (_provider) {
	                _provider.stop();
	            }
	        };

	        this.playVideo = function() {
	            _provider.play();
	        };

	        this.persistCaptionsTrack = function() {
	            var track = this.get('captionsTrack');

	            if (track) {
	                // update preference if an option was selected
	                this.set('captionLabel', track.label);
	            } else {
	                this.set('captionLabel', 'Off');
	            }
	        };


	        this.setVideoSubtitleTrack = function(trackIndex) {
	            this.set('captionsIndex', trackIndex);
	            this.persistCaptionsTrack();

	            if (_provider.setSubtitlesTrack) {
	                _provider.setSubtitlesTrack(trackIndex);
	            }
	        };
	    };

	    // Represents the state of the provider/media element
	    var MediaModel = Model.MediaModel = function() {
	        this.set('state', states.IDLE);
	    };



	    _.extend(Model.prototype, SimpleModel);
	    _.extend(MediaModel.prototype, SimpleModel);

	    return Model;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 75 */
/*!***************************************!*\
  !*** ./src/js/providers/providers.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! providers/providers-supported */ 76),
	    __webpack_require__(/*! providers/providers-loaded */ 78),
	    __webpack_require__(/*! utils/underscore */ 42)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function(ProvidersSupported, ProvidersLoaded, _) {


	    function Providers(config) {
	        this.providers = ProvidersSupported.slice();
	        this.config = config || {};

	        if (this.config.primary === 'flash') {
	            swap(this.providers, 'html5', 'flash');
	        }
	    }

	    _.extend(Providers.prototype, {

	        providerSupports : function(provider, source) {
	            return provider.supports(source);
	        },

	        // Find the name of the first provider which can support the media source-type
	        choose : function(source) {
	            // prevent throw on missing source
	            source = _.isObject(source) ? source : {};

	            var count = this.providers.length;
	            for (var i = 0; i < count; i++) {
	                var provider = this.providers[i];
	                if (this.providerSupports(provider, source)) {
	                    // prefer earlier providers
	                    var priority = count - i - 1;

	                    return {
	                        priority: priority,
	                        name : provider.name,
	                        type: source.type,
	                        // If provider isn't loaded, this will be undefined
	                        provider : ProvidersLoaded[provider.name]
	                    };
	                }
	            }

	            return null;
	        }
	    });

	    function getIndex(arr, name) {
	        for(var i =0; i < arr.length; i++) {
	            if (arr[i].name === name) {
	                return i;
	            }
	        }
	        return -1;
	    }

	    function swap(arr, left, right) {
	        var l = getIndex(arr, left);
	        var r = getIndex(arr, right);

	        var temp = arr[l];
	        arr[l] = arr[r];
	        arr[r] = temp;
	    }

	    return Providers;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 76 */
/*!*************************************************!*\
  !*** ./src/js/providers/providers-supported.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/helpers */ 45),
	    __webpack_require__(/*! utils/underscore */ 42),
	    __webpack_require__(/*! utils/video */ 77)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(utils, _, video) {

	    function _useAndroidHLS(source) {
	        if (source.type === 'hls') {
	            //when androidhls is not set to false, allow HLS playback on Android 4.1 and up
	            if (source.androidhls !== false) {
	                var isAndroidNative = utils.isAndroidNative;
	                if (isAndroidNative(2) || isAndroidNative(3) || isAndroidNative('4.0')) {
	                    return false;
	                } else if (utils.isAndroid()) { //utils.isAndroidNative()) {
	                    // skip canPlayType check
	                    // canPlayType returns '' in native browser even though HLS will play
	                    return true;
	                }
	            } else if (utils.isAndroid()) {
	                return false;
	            }
	        }
	        return null;
	    }

	    var SupportsMatrix = [
	        {
	            name: 'youtube',
	            supports: function (source) {
	                return (utils.isYouTube(source.file, source.type));
	            }
	        },
	        {
	            name: 'html5',
	            supports: function (source) {
	                var MimeTypes = {
	                    'aac': 'audio/mp4',
	                    'mp4': 'video/mp4',
	                    'f4v': 'video/mp4',
	                    'm4v': 'video/mp4',
	                    'mov': 'video/mp4',
	                    //'m4a': 'audio/x-m4a', // converted to aac by source.js
	                    'mp3': 'audio/mpeg',
	                    'mpeg': 'audio/mpeg',
	                    'ogv': 'video/ogg',
	                    'ogg': 'video/ogg',
	                    'oga': 'video/ogg',
	                    'vorbis': 'video/ogg',
	                    'webm': 'video/webm',

	                    // The following are not expected to work in Chrome
	                    'f4a': 'video/aac',
	                    'm3u8': 'application/vnd.apple.mpegurl',
	                    'm3u': 'application/vnd.apple.mpegurl',
	                    'hls': 'application/vnd.apple.mpegurl'
	                };

	                var file = source.file;
	                var type = source.type;

	                var isAndroidHLS = _useAndroidHLS(source);
	                if (isAndroidHLS !== null) {
	                    return isAndroidHLS;
	                }

	                // Ensure RTMP files are not seen as videos
	                if (utils.isRtmp(file, type)) {
	                    return false;
	                }

	                // Not OK to use HTML5 with no extension
	                if (!MimeTypes[type]) {
	                    return false;
	                }

	                // Last, but not least, we ask the browser
	                // (But only if it's a video with an extension known to work in HTML5)
	                if (video.canPlayType) {
	                    var result = video.canPlayType(MimeTypes[type]);
	                    return !!result;
	                }
	                return false;
	            }
	        },
	        {
	            name: 'flash',
	            supports: function (source) {
	                var flashExtensions = {
	                    'flv': 'video',
	                    'f4v': 'video',
	                    'mov': 'video',
	                    'm4a': 'video',
	                    'm4v': 'video',
	                    'mp4': 'video',
	                    'aac': 'video',
	                    'f4a': 'video',
	                    'mp3': 'sound',
	                    'mpeg': 'sound',
	                    'm3u8': 'application/vnd.apple.mpegurl',
	                    'm3u': 'application/vnd.apple.mpegurl',
	                    'hls': 'application/vnd.apple.mpegurl',

	                    'smil': 'rtmp'
	                };
	                var PLAYABLE = _.keys(flashExtensions);

	                if (!utils.isFlashSupported()) {
	                    return false;
	                }

	                var file = source.file;
	                var type = source.type;

	                var isAndroidHLS = _useAndroidHLS(source);
	                if (isAndroidHLS !== null) {
	                    return isAndroidHLS;
	                }

	                if (utils.isRtmp(file, type)) {
	                    return true;
	                }

	                return _.contains(PLAYABLE, type);
	            }
	        }
	    ];

	    return SupportsMatrix;

	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 77 */
/*!*******************************!*\
  !*** ./src/js/utils/video.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	    return document.createElement('video');
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 78 */
/*!**********************************************!*\
  !*** ./src/js/providers/providers-loaded.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! providers/html5 */ 79),
	    __webpack_require__(/*! providers/flash */ 81),
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(html5, flash) {

	    var Store = {
	        html5: html5,
	        flash: flash
	    };

	    return Store;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 79 */
/*!***********************************!*\
  !*** ./src/js/providers/html5.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/css */ 53),
	    __webpack_require__(/*! utils/helpers */ 45),
	    __webpack_require__(/*! utils/stretching */ 70),
	    __webpack_require__(/*! utils/underscore */ 42),
	    __webpack_require__(/*! events/events */ 43),
	    __webpack_require__(/*! events/states */ 59),
	    __webpack_require__(/*! providers/default */ 80),
	    __webpack_require__(/*! utils/backbone.events */ 44)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(cssUtils, utils, stretchUtils, _, events, states, DefaultProvider, Events) {

	    var clearTimeout = window.clearTimeout,
	        STALL_DELAY = 256,
	        _isMSIE = utils.isMSIE(),
	        _isMobile = utils.isMobile(),
	        _isSafari = utils.isSafari(),
	        _isFirefox = utils.isFF(),
	        _isAndroid = utils.isAndroidNative(),
	        _isIOS7 = utils.isIOS(7),
	        _name = 'html5';


	    function _setupListeners(eventsHash, videoTag) {
	        utils.foreach(eventsHash, function(evt, evtCallback) {
	            videoTag.addEventListener(evt, evtCallback, false);
	        });
	    }

	    function _removeListeners(eventsHash, videoTag) {
	        utils.foreach(eventsHash, function(evt, evtCallback) {
	            videoTag.removeEventListener(evt, evtCallback, false);
	        });
	    }

	    function _useAndroidHLS(source) {
	        if (source.type === 'hls') {
	            //when androidhls is not set to false, allow HLS playback on Android 4.1 and up
	            if (source.androidhls !== false) {
	                var isAndroidNative = utils.isAndroidNative;
	                if (isAndroidNative(2) || isAndroidNative(3) || isAndroidNative('4.0')) {
	                    return false;
	                } else if (utils.isAndroid()) { //utils.isAndroidNative()) {
	                    // skip canPlayType check
	                    // canPlayType returns '' in native browser even though HLS will play
	                    return true;
	                }
	            } else if (utils.isAndroid()) {
	                return false;
	            }
	        }
	        return null;
	    }

	    function VideoProvider(_playerId, _playerConfig) {

	        // Current media state
	        this.state = states.IDLE;

	        // Are we buffering due to seek, or due to playback?
	        this.seeking = false;

	        _.extend(this, Events);

	        // Overwrite the event dispatchers to block on certain occasions
	        this.trigger = function(type, args) {
	            if (!_attached) {
	                return;
	            }
	            return Events.trigger.call(this, type, args);
	        };

	        this.setState = function(state) {
	            if (!_attached) {
	                return;
	            }
	            return DefaultProvider.setState.call(this, state);
	        };

	        var _this = this,
	            _mediaEvents = {
	                //abort: _generalHandler,
	                click : _clickHandler,
	                durationchange: _durationChangeHandler,
	                //emptied: _generalHandler,
	                ended: _endedHandler,
	                error: _errorHandler,

	                //play: _onPlayHandler, // play is attempted, but hasn't necessarily started
	                //loadstart: _generalHandler,
	                //loadeddata: _onLoadedData, // we have duration
	                loadedmetadata: _loadedMetadataHandler, // we have video dimensions
	                canplay: _canPlayHandler,
	                playing: _playingHandler,
	                progress: _progressHandler,
	                //canplaythrough: _generalHandler,

	                pause: _pauseHandler,
	                //ratechange: _generalHandler,
	                //readystatechange: _generalHandler,
	                seeked: _seekedHandler,
	                //seeking: _seekingHandler,
	                //stalled: _stalledHandler,
	                //suspend: _generalHandler,
	                timeupdate: _timeUpdateHandler,
	                volumechange: _volumeChangeHandler,
	                //waiting: _stalledHandler,

	                webkitbeginfullscreen: _fullscreenBeginHandler,
	                webkitendfullscreen: _fullscreenEndHandler
	            },
	            // DOM container
	            _container,
	            // Currently playing source
	            _source,
	            // Current duration
	            _duration,
	            // Current position
	            _position,
	            // Whether seeking is ready yet
	            _canSeek = false,
	            // Whether we have sent out the BUFFER_FULL event
	            _bufferFull,
	            // If we should seek on canplay
	            _delayedSeek = 0,
	            // Using setInterval to check buffered ranges
	            _playbackTimeout = -1,
	            // Last sent buffer amount
	            _buffered = -1,
	            // Whether or not we're listening to video tag events
	            _attached = true,
	            // Quality levels
	            _levels,
	            // Current quality level index
	            _currentQuality = -1,

	            // android hls doesn't update currentTime so we want to skip the stall check since it always fails
	            _isAndroidHLS = null,

	            // post roll support
	            _beforecompleted = false,

	            _fullscreenState = false;

	        // Find video tag, or create it if it doesn't exist.  View may not be built yet.
	        var element = document.getElementById(_playerId);
	        var _videotag = (element) ? element.querySelector('video') : undefined;
	        _videotag = _videotag || document.createElement('video');
	        _videotag.className = 'jw-video jw-reset';

	        _setupListeners(_mediaEvents, _videotag);

	        // Workaround for a Safari bug where video disappears on switch to fullscreen
	        if (!_isIOS7) {
	            _videotag.controls = true;
	            _videotag.controls = false;
	        }

	        // Enable AirPlay
	        _videotag.setAttribute('x-webkit-airplay', 'allow');
	        _videotag.setAttribute('webkit-playsinline', '');

	        function _clickHandler(evt) {
	            _this.trigger('click', evt);
	        }

	        function _durationChangeHandler() {
	            if (!_attached) {
	                return;
	            }

	            _setBuffered(_getBuffer(), _position, _videotag.duration);
	            _setDuration(_videotag.duration);
	        }

	        function _progressHandler() {
	            if (!_attached) {
	                return;
	            }

	            _setBuffered(_getBuffer(), _position, _duration);
	        }

	        function _timeUpdateHandler() {
	            clearTimeout(_playbackTimeout);
	            _canSeek = true;
	            if (!_attached) {
	                return;
	            }
	            if (_this.state === states.STALLED) {
	                _this.setState(states.PLAYING);
	            } else if (_this.state === states.PLAYING) {
	                _playbackTimeout = setTimeout(_checkPlaybackStalled, STALL_DELAY);
	            }

	            _setDuration(_videotag.duration);
	            _setPosition(_videotag.currentTime);
	            // buffer ranges change during playback, not just on file progress
	            _setBuffered(_getBuffer(), _position, _duration);

	            // send time events when playing
	            if (_this.state === states.PLAYING) {
	                _this.trigger(events.JWPLAYER_MEDIA_TIME, {
	                    position: _position,
	                    duration: _duration
	                });
	            }
	        }

	        function _setBuffered(buffered, currentTime, duration) {
	            if (buffered !== _buffered || duration !== _duration) {
	                _buffered = buffered;
	                _this.trigger(events.JWPLAYER_MEDIA_BUFFER, {
	                    bufferPercent: buffered * 100,
	                    position: currentTime,
	                    duration: duration
	                });
	            }
	        }

	        function _setPosition(currentTime) {
	            _position = currentTime;
	        }

	        function _setDuration(duration) {
	            _duration = duration;
	            if (_delayedSeek > 0 && _duration > _delayedSeek) {
	                _this.seek(_delayedSeek);
	            }
	        }

	        function _sendMetaEvent() {
	            _this.trigger(events.JWPLAYER_MEDIA_META, {
	                duration: _videotag.duration,
	                height: _videotag.videoHeight,
	                width: _videotag.videoWidth
	            });
	            _setDuration(_videotag.duration);
	        }

	        function _canPlayHandler() {
	            if (!_attached) {
	                return;
	            }

	            _canSeek = true;
	            _sendBufferFull();
	        }

	        function _loadedMetadataHandler() {
	            if (!_attached) {
	                return;
	            }

	            //fixes Chrome bug where it doesn't like being muted before video is loaded
	            if (_videotag.muted) {
	                _videotag.muted = false;
	                _videotag.muted = true;
	            }
	            _sendMetaEvent();
	        }

	        function _sendBufferFull() {
	            if (!_bufferFull) {
	                _bufferFull = true;
	                _this.trigger(events.JWPLAYER_MEDIA_BUFFER_FULL);
	            }
	        }

	        function _playingHandler() {
	            _this.setState(states.PLAYING);
	            _this.trigger(events.JWPLAYER_PROVIDER_FIRST_FRAME, {});
	        }

	        function _pauseHandler() {
	            // Sometimes the browser will fire "complete" and then a "pause" event
	            if (_this.state === states.COMPLETE) {
	                return;
	            }

	            // If "pause" fires before "complete", we still don't want to propagate it
	            if (_videotag.currentTime === _videotag.duration) {
	                return;
	            }

	            _this.setState(states.PAUSED);
	        }

	        function _stalledHandler() {
	            // Android HLS doesnt update its times correctly so it always falls in here.  Do not allow it to stall.
	            if (_isAndroidHLS) {
	                return;
	            }

	            if (_videotag.paused || _videotag.ended) {
	                return;
	            }

	            // A stall after loading/error, should just stay loading/error
	            if (_this.state === states.LOADING || _this.state === states.ERROR) {
	                return;
	            }

	            // During seek we stay in paused state
	            if (_this.seeking) {
	                return;
	            }

	            _this.setState(states.STALLED);
	        }

	        function _errorHandler() {
	            if (!_attached) {
	                return;
	            }

	            utils.log('Error playing media: %o %s', _videotag.error, _videotag.src || _source.file);
	            _this.trigger(events.JWPLAYER_MEDIA_ERROR, {
	                message: 'Error loading media: File could not be played'
	            });
	        }

	        function _getPublicLevels(levels) {
	            var publicLevels;
	            if (utils.typeOf(levels) === 'array' && levels.length > 0) {
	                publicLevels = _.map(levels, function(level, i) {
	                    return {
	                        label: level.label || i
	                    };
	                });
	            }
	            return publicLevels;
	        }

	        function _setLevels(levels) {
	            _levels = levels;
	            _currentQuality = _pickInitialQuality(levels);
	            var publicLevels = _getPublicLevels(levels);
	            if (publicLevels) {
	                //_trigger?
	                _this.trigger(events.JWPLAYER_MEDIA_LEVELS, {
	                    levels: publicLevels,
	                    currentQuality: _currentQuality
	                });
	            }
	        }

	        function _pickInitialQuality(levels) {
	            var currentQuality = Math.max(0, _currentQuality);
	            var label = _playerConfig.qualityLabel;
	            if (levels) {
	                for (var i = 0; i < levels.length; i++) {
	                    if (levels[i]['default']) {
	                        currentQuality = i;
	                    }
	                    if (label && levels[i].label === label) {
	                        return i;
	                    }
	                }
	            }
	            return currentQuality;
	        }

	        function _forceVideoLoad() {
	            // These browsers will not replay videos without reloading them
	            return (_isMobile || _isSafari);
	        }

	        function _completeLoad(startTime, duration) {

	            _source = _levels[_currentQuality];

	            _delayedSeek = 0;
	            clearTimeout(_playbackTimeout);

	            var sourceChanged = (_videotag.src !== _source.file);
	            if (sourceChanged || _forceVideoLoad()) {
	                _duration = duration;
	                _setVideotagSource();
	                _videotag.load();
	                //_videotag.currentTime = 0;
	            } else {
	                // Load event is from the same video as before
	                if (startTime === 0 && _videotag.currentTime !== 0) {
	                    // restart video without dispatching seek event
	                    _delayedSeek = -1;
	                    _this.seek(startTime);
	                }

	                _videotag.play();
	            }

	            _position = _videotag.currentTime;

	            if (_isMobile) {
	                // results in html5.controller calling video.play()
	                _sendBufferFull();
	                // If we're still paused, then the tag isn't loading yet due to mobile interaction restrictions.
	                if(!_videotag.paused && _this.state !== states.PLAYING){
	                    _this.setState(states.LOADING);
	                }
	            }

	            //in ios and fullscreen, set controls true, then when it goes to normal screen the controls don't show'
	            if (utils.isIOS() && _this.getFullScreen()) {
	                _videotag.controls = true;
	            }

	            if (startTime > 0) {
	                _this.seek(startTime);
	            }
	        }

	        function _setVideotagSource() {
	            _canSeek = false;
	            _bufferFull = false;
	            _isAndroidHLS = _useAndroidHLS(_source);
	            _videotag.src = _source.file;
	            if (_source.preload) {
	                _videotag.setAttribute('preload', _source.preload);
	            }
	        }

	        this.stop = function() {
	            clearTimeout(_playbackTimeout);
	            if (!_attached) {
	                return;
	            }
	            _videotag.removeAttribute('src');
	            if (!_isMSIE) {
	                _videotag.load();
	            }
	            // IE may continue to play a video after changing source and loading a new media file.
	            // https://connect.microsoft.com/IE/feedbackdetail/view/2000141/htmlmediaelement-autoplays-after-src-is-changed-and-load-is-called
	            if(utils.isIETrident()) {
	                _videotag.pause();
	            }
	            _currentQuality = -1;
	            this.setState(states.IDLE);
	        };


	        this.destroy = function() {
	             _removeListeners(_mediaEvents, _videotag);

	            this.remove();
	            this.off();
	        };

	        this.init = function(item) {
	            if (!_attached) {
	                return;
	            }

	            _levels = item.sources;
	            _currentQuality = _pickInitialQuality(item.sources);
	            this.sendMediaType(item.sources);

	            _source = _levels[_currentQuality];
	            _position = item.starttime || 0;
	            _duration = item.duration || 0;
	            _setVideotagSource(item);
	        };

	        this.load = function(item) {
	            if (!_attached) {
	                return;
	            }

	            _setLevels(item.sources);
	            this.sendMediaType(item.sources);

	            if (!_isMobile) {
	                // don't change state on mobile because a touch event may be required to start playback
	                _this.setState(states.LOADING);
	            }
	            _completeLoad(item.starttime || 0, item.duration || 0);
	        };

	        this.play = function() {
	            if (_this.seeking) {
	                _this.setState(states.LOADING);
	                _this.once(events.JWPLAYER_MEDIA_SEEKED, _this.play);
	                return;
	            }
	            _videotag.play();
	        };

	        this.pause = function() {
	            clearTimeout(_playbackTimeout);
	            _videotag.pause();
	            this.setState(states.PAUSED);
	        };

	        this.seek = function(seekPos) {
	            if (!_attached) {
	                return;
	            }

	            if (_delayedSeek === 0) {
	                this.trigger(events.JWPLAYER_MEDIA_SEEK, {
	                    position: _videotag.currentTime,
	                    offset: seekPos
	                });
	            }

	            if (_canSeek) {
	                _delayedSeek = 0;
	                // handle readystate issue
	                var status = utils.tryCatch(function() {
	                    _this.seeking = true;
	                    _videotag.currentTime = seekPos;
	                });
	                if (status instanceof utils.Error) {
	                    _delayedSeek = seekPos;
	                }
	            } else {
	                _delayedSeek = seekPos;
	                // Firefox isn't firing canplay event when in a paused state
	                // https://bugzilla.mozilla.org/show_bug.cgi?id=1194624
	                if (_isFirefox && _videotag.paused) {
	                    _videotag.play();
	                }
	            }
	        };

	        function _seekedHandler() {
	            _this.seeking = false;
	            _this.trigger(events.JWPLAYER_MEDIA_SEEKED);
	        }

	        this.volume = function(vol) {
	            // volume must be 0.0 - 1.0
	            vol = utils.between(vol/100, 0, 1);

	            _videotag.volume = vol;
	        };

	        function _volumeChangeHandler() {
	            _this.trigger('volume', {
	                volume: Math.round(_videotag.volume * 100)
	            });
	            _this.trigger('mute', {
	                mute: _videotag.muted
	            });
	        }

	        this.mute = function(state) {
	            _videotag.muted = !!state;
	        };

	        function _checkPlaybackStalled() {
	            // Browsers, including latest chrome, do not always report Stalled events in a timely fashion
	            if (_videotag.currentTime === _position) {
	                _stalledHandler();
	            }
	        }

	        function _getBuffer() {
	            var buffered = _videotag.buffered;
	            var duration = _videotag.duration;
	            if (!buffered || buffered.length === 0 || duration <= 0 || duration === Infinity) {
	                return 0;
	            }
	            return utils.between(buffered.end(buffered.length-1) / duration, 0, 1);
	        }

	        function _endedHandler() {
	            if (!_attached) {
	                return;
	            }
	            if (_this.state !== states.IDLE && _this.state !== states.COMPLETE) {
	                clearTimeout(_playbackTimeout);
	                _currentQuality = -1;
	                _beforecompleted = true;

	                _this.trigger(events.JWPLAYER_MEDIA_BEFORECOMPLETE);
	                // This event may trigger the detaching of the player
	                //  In that case, playback isn't complete until the player is re-attached
	                if (!_attached) {
	                    return;
	                }

	                _playbackComplete();
	            }
	        }

	        function _playbackComplete() {
	            clearTimeout(_playbackTimeout);
	            _this.setState(states.COMPLETE);
	            _beforecompleted = false;
	            _this.trigger(events.JWPLAYER_MEDIA_COMPLETE);

	        }

	        function _fullscreenBeginHandler(e) {
	            _fullscreenState = true;
	            _sendFullscreen(e);
	            // show controls on begin fullscreen so that they are disabled properly at end
	            if (utils.isIOS()) {
	                _videotag.controls = false;
	            }
	        }

	        function _fullscreenEndHandler(e) {
	            _fullscreenState = false;
	            _sendFullscreen(e);
	            if (utils.isIOS()) {
	                _videotag.controls = false;
	            }
	        }

	        function _sendFullscreen(e) {
	            _this.trigger('fullscreenchange', {
	                target: e.target,
	                jwstate: _fullscreenState
	            });
	        }

	        this.checkComplete = function() {
	            return _beforecompleted;
	        };

	        /**
	         * Return the video tag and stop listening to events
	         */
	        this.detachMedia = function() {
	            clearTimeout(_playbackTimeout);
	            _attached = false;
	            return _videotag;
	        };

	        /**
	         * Begin listening to events again
	         */
	        this.attachMedia = function(seekable) {
	            _attached = true;
	            if (!seekable) {
	                _canSeek = false;
	            }

	            // If we were mid-seek when detached, we want to allow it to resume
	            this.seeking = false;

	            // In case the video tag was modified while we shared it
	            _videotag.loop = false;

	            // This is after a postroll completes
	            if (_beforecompleted) {
	                _playbackComplete();
	            }
	        };

	        this.setContainer = function(element) {
	            _container = element;
	            element.appendChild(_videotag);
	        };

	        this.getContainer = function() {
	            return _container;
	        };

	        this.remove = function() {
	            // stop video silently
	            if (_videotag) {
	                _videotag.removeAttribute('src');
	                if (!_isMSIE) {
	                    _videotag.load();
	                }
	            }

	            clearTimeout(_playbackTimeout);

	            _currentQuality = -1;

	            // remove
	            if (_container === _videotag.parentNode) {
	                _container.removeChild(_videotag);
	            }
	        };

	        this.setVisibility = function(state) {
	            state = !!state;
	            if (state || _isAndroid) {
	                // Changing visibility to hidden on Android < 4.2 causes
	                // the pause event to be fired. This causes audio files to
	                // become unplayable. Hence the video tag is always kept
	                // visible on Android devices.
	                cssUtils.style(_container, {
	                    visibility: 'visible',
	                    opacity: 1
	                });
	            } else {
	                cssUtils.style(_container, {
	                    visibility: '',
	                    opacity: 0
	                });
	            }
	        };

	        this.resize = function(width, height, stretching) {
	            return stretchUtils.stretch(stretching,
	                _videotag,
	                width, height,
	                _videotag.videoWidth, _videotag.videoHeight);
	        };

	        this.setFullscreen = function(state) {
	            state = !!state;

	            // This implementation is for iOS and Android WebKit only
	            // This won't get called if the player contain can go fullscreen
	            if (state) {
	                var status = utils.tryCatch(function() {
	                    var enterFullscreen =
	                        _videotag.webkitEnterFullscreen ||
	                        _videotag.webkitEnterFullScreen;
	                    if (enterFullscreen) {
	                        enterFullscreen.apply(_videotag);
	                    }

	                });

	                if (status instanceof utils.Error) {
	                    //object can't go fullscreen
	                    return false;
	                }

	                return _this.getFullScreen();

	            } else {
	                var exitFullscreen =
	                    _videotag.webkitExitFullscreen ||
	                    _videotag.webkitExitFullScreen;
	                if (exitFullscreen) {
	                    exitFullscreen.apply(_videotag);
	                }
	            }

	            return state;
	        };

	        _this.getFullScreen = function() {
	            return _fullscreenState || !!_videotag.webkitDisplayingFullscreen;
	        };

	        this.setCurrentQuality = function(quality) {
	            if (_currentQuality === quality) {
	                return;
	            }
	            quality = parseInt(quality, 10);
	            if (quality >= 0) {
	                if (_levels && _levels.length > quality) {
	                    _currentQuality = quality;
	                    this.trigger(events.JWPLAYER_MEDIA_LEVEL_CHANGED, {
	                        currentQuality: quality,
	                        levels: _getPublicLevels(_levels)
	                    });

	                    // The playerConfig is not updated automatically, because it is a clone
	                    // from when the provider was first initialized
	                    _playerConfig.qualityLabel = _levels[quality].label;

	                    var time = _videotag.currentTime || 0;
	                    var duration = _videotag.duration || 0;
	                    if (duration <= 0) {
	                        duration = _duration;
	                    }
	                    _this.setState(states.LOADING);
	                    _completeLoad(time, duration);
	                }
	            }
	        };

	        this.getCurrentQuality = function() {
	            return _currentQuality;
	        };

	        this.getQualityLevels = function() {
	            return _getPublicLevels(_levels);
	        };

	        this.getName = function() {
	            return { name : _name };
	        };
	    }

	    // Register provider
	    var F = function(){};
	    F.prototype = DefaultProvider;
	    VideoProvider.prototype = new F();

	    return VideoProvider;

	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 80 */
/*!*************************************!*\
  !*** ./src/js/providers/default.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/helpers */ 45),
	    __webpack_require__(/*! events/events */ 43),
	    __webpack_require__(/*! events/states */ 59),
	    __webpack_require__(/*! utils/underscore */ 42)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(utils, events, states, _) {

	    var noop = utils.noop,
	        returnFalse = _.constant(false);

	    var DefaultProvider = {
	        // This function is required to determine if a provider can work on a given source
	        supports : returnFalse,

	        // Basic playback features
	        play : noop,
	        load : noop,
	        stop : noop,
	        volume : noop,
	        mute : noop,
	        seek : noop,
	        resize : noop,
	        remove : noop,  // removes from page
	        destroy : noop, // frees memory

	        setVisibility : noop,
	        setFullscreen : returnFalse,
	        getFullscreen : noop,

	        // If setContainer has been set, this returns the element.
	        //  It's value is used to determine if we should remove the <video> element when setting a new provider.
	        getContainer : noop,

	        // Sets the parent element, causing provider to append <video> into it
	        setContainer : returnFalse,

	        getName: noop,
	        getQualityLevels : noop,
	        getCurrentQuality : noop,
	        setCurrentQuality : noop,

	        getAudioTracks : noop,
	        getCurrentAudioTrack : noop,
	        setCurrentAudioTrack : noop,

	        // TODO :: The following are targets for removal after refactoring
	        checkComplete : noop,
	        setControls : noop,
	        attachMedia : noop,
	        detachMedia : noop,

	        setState: function(state) {
	            var oldState = this.state || states.IDLE;
	            this.state = state;

	            if (state === oldState) {
	                return;
	            }

	            this.trigger(events.JWPLAYER_PLAYER_STATE, {
	                newstate: state
	            });
	        },

	        sendMediaType : function(levels) {
	            var type = levels[0].type;
	            var isAudioFile = (type === 'oga' || type === 'aac' || type === 'mp3' ||
	                type === 'mpeg' || type === 'vorbis');

	            this.trigger(events.JWPLAYER_MEDIA_TYPE, {
	                mediaType : isAudioFile ? 'audio' : 'video'
	            });
	        }
	    };


	    // Make available to other providers for extending
	    return DefaultProvider;

	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 81 */
/*!***********************************!*\
  !*** ./src/js/providers/flash.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/helpers */ 45),
	    __webpack_require__(/*! utils/underscore */ 42),
	    __webpack_require__(/*! events/events */ 43),
	    __webpack_require__(/*! events/states */ 59),
	    __webpack_require__(/*! utils/embedswf */ 82),
	    __webpack_require__(/*! providers/default */ 80),
	    __webpack_require__(/*! utils/backbone.events */ 44)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(utils, _, events, states, EmbedSwf, DefaultProvider, Events) {
	    var _providerId = 0;
	    function getObjectId(playerId) {
	        return playerId + '_swf_' + (_providerId++);
	    }

	    function flashThrottleTarget(config) {
	        var a = document.createElement('a');
	        a.href = config.flashplayer;

	        var sameHost = (a.hostname === window.location.host);

	        return utils.isChrome() && !sameHost;
	    }

	    function FlashProvider(_playerId, _playerConfig) {
	        // private properties
	        var _container;
	        var _swf;
	        var _item = null;
	        var _flashBlockedTimeout = -1;
	        var _beforecompleted = false;
	        var _currentQuality = -1;
	        var _qualityLevels = null;
	        var _currentAudioTrack = -1;
	        var _audioTracks = null;
	        var _flashProviderType;
	        var _attached = true;
	        var _fullscreen = false;

	        var _ready = function() {
	            return _swf && _swf.__ready;
	        };

	        var _flashCommand = function() {
	            if(_swf) {
	                _swf.triggerFlash.apply(_swf, arguments);
	            }
	        };

	        var _customLabels = _getCustomLabels();

	        /** Translate sources into quality levels, assigning custom levels if present. **/
	        function _labelLevels(levels) {
	            if (_customLabels) {
	                for (var i = 0; i < levels.length; i++) {
	                    var level = levels[i];
	                    if (level.bitrate) {
	                        // get label with nearest rate match
	                        var sourceKBps = Math.round(level.bitrate / 1024);
	                        level.label = _getNearestCustomLabel(sourceKBps);
	                    }
	                }
	            }
	        }

	        function _getNearestCustomLabel(sourceKBps) {
	            // get indexed value
	            var label = _customLabels[sourceKBps];
	            if (!label) {
	                //find nearest
	                var lastDiff = Infinity;
	                var i = _customLabels.bitrates.length;
	                while (i--) {
	                    var diff = Math.abs(_customLabels.bitrates[i] - sourceKBps);
	                    if (diff > lastDiff) {
	                        break;
	                    }
	                    lastDiff = diff;
	                }
	                label = _customLabels.labels[_customLabels.bitrates[i + 1]];
	                // index
	                _customLabels[sourceKBps] = label;
	            }
	            return label;
	        }

	        /** Indexed Custom Labels **/
	        function _getCustomLabels() {
	            var hlsLabels =_playerConfig.hlslabels;
	            if(!hlsLabels) {
	                return null;
	            }
	            var labels = {};
	            var bitrates = [];
	            for (var bitrate in hlsLabels) {
	                var key = parseFloat(bitrate);
	                if (!isNaN(key)) {
	                    var rateKBps = Math.round(key);
	                    labels[rateKBps] = hlsLabels[bitrate];
	                    bitrates.push(rateKBps);
	                }
	            }
	            if (bitrates.length === 0) {
	                return null;
	            }
	            bitrates.sort(function(a, b) {
	                return a - b;
	            });
	            return {
	                labels: labels,
	                bitrates: bitrates
	            };
	        }

	        _.extend(this, Events, {
	                init: function(item) {
	                    // if not preloading or autostart is true, do nothing
	                    if (!item.preload || item.preload === 'none' || _playerConfig.autostart) {
	                        return;
	                    } else {
	                        _item = item;
	                    }
	                },
	                load: function(item) {
	                    _item = item;
	                    _beforecompleted = false;
	                    this.setState(states.LOADING);
	                    _flashCommand('load', item);
	                    this.sendMediaType(item.sources);
	                },
	                play: function() {
	                    _flashCommand('play');
	                },
	                pause: function() {
	                    _flashCommand('pause');
	                    this.setState(states.PAUSED);
	                },
	                stop: function() {
	                    _flashCommand('stop');
	                    _currentQuality = -1;
	                    _item = null;
	                    this.setState(states.IDLE);
	                },
	                seek: function(seekPos) {
	                    _flashCommand('seek', seekPos);
	                },
	                volume: function(vol) {
	                    if (!_.isNumber(vol)) {
	                        return;
	                    }
	                    var volume = Math.min(Math.max(0, vol), 100);
	                    if (_ready()) {
	                        _flashCommand('volume', volume);
	                    }
	                },
	                mute: function(mute) {
	                    if (_ready()) {
	                        _flashCommand('mute', mute);
	                    }
	                },
	                setState: function() {
	                    return DefaultProvider.setState.apply(this, arguments);
	                },
	                checkComplete: function() {
	                    return _beforecompleted;
	                },
	                attachMedia: function() {
	                    _attached = true;
	                    // This is after a postroll completes
	                    if (_beforecompleted) {
	                        this.setState(states.COMPLETE);
	                        this.trigger(events.JWPLAYER_MEDIA_COMPLETE);
	                        _beforecompleted = false;
	                    }
	                },
	                detachMedia: function() {
	                    _attached = false;
	                    return null;
	                },

	                getSwfObject : function(parent) {
	                    var found = parent.getElementsByTagName('object')[0];
	                    if (found) {
	                        found.off(null, null, this);
	                        return found;
	                    }

	                    return EmbedSwf.embed(_playerConfig.flashplayer, parent, getObjectId(_playerId),
	                        _playerConfig.wmode);
	                },

	                getContainer: function() {
	                    return _container;
	                },

	                setContainer: function(parent) {
	                    if (_container === parent) {
	                        // ignore instream's attempt to put provider back in it's place
	                        return;
	                    }
	                    _container = parent;

	                    _swf = this.getSwfObject(parent);

	                    // The browser may block the flash object until user enables it
	                    var _this = this;
	                    _flashBlockedTimeout = setTimeout(function() {
	                        Events.trigger.call(_this, 'flashBlocked');
	                    }, 4000);
	                    _swf.once('embedded', function() {
	                        clearTimeout(_flashBlockedTimeout);
	                        Events.trigger.call(_this, 'flashUnblocked');
	                    }, this);

	                    // listen to events sendEvented from flash
	                    _swf.once('ready', function() {
	                        clearTimeout(_flashBlockedTimeout);
	                        // After plugins load, then execute commandqueue
	                        _swf.once('pluginsLoaded', function() {
	                            _swf.queueCommands = false;
	                            _flashCommand('setupCommandQueue', _swf.__commandQueue);
	                            _swf.__commandQueue = [];
	                        });

	                        // setup flash player
	                        var config = _.extend({}, _playerConfig);
	                        var result = _swf.triggerFlash('setup', config);
	                        if (result === _swf) {
	                        _swf.__ready = true;
	                        } else {
	                            this.trigger(events.JWPLAYER_MEDIA_ERROR, result);
	                        }

	                        // init if _item is defined
	                        if (_item) {
	                            _flashCommand('init', _item);
	                        }

	                    }, this);

	                    var forwardEventsWithData = [
	                        events.JWPLAYER_MEDIA_META,
	                        events.JWPLAYER_MEDIA_ERROR,
	                        events.JWPLAYER_MEDIA_SEEK,
	                        events.JWPLAYER_MEDIA_SEEKED,
	                        'subtitlesTracks',
	                        'subtitlesTrackChanged',
	                        'subtitlesTrackData'
	                    ];

	                    var forwardEventsWithDataDuration = [
	                        events.JWPLAYER_MEDIA_BUFFER,
	                        events.JWPLAYER_MEDIA_TIME
	                    ];

	                    var forwardEvents = [
	                        events.JWPLAYER_MEDIA_BUFFER_FULL
	                    ];

	                    // jwplayer 6 flash player events (forwarded from AS3 Player, Controller, Model)
	                    _swf.on(events.JWPLAYER_MEDIA_LEVELS, function(e) {
	                        _labelLevels(e.levels);
	                        _currentQuality = e.currentQuality;
	                        _qualityLevels = e.levels;
	                        this.trigger(e.type, e);
	                    }, this);

	                    _swf.on(events.JWPLAYER_MEDIA_LEVEL_CHANGED, function(e) {
	                        _labelLevels(e.levels);
	                        _currentQuality = e.currentQuality;
	                        _qualityLevels = e.levels;
	                        this.trigger(e.type, e);

	                    }, this);

	                    _swf.on(events.JWPLAYER_AUDIO_TRACKS, function(e) {
	                        _currentAudioTrack = e.currentTrack;
	                        _audioTracks = e.tracks;
	                        this.trigger(e.type, e);
	                    }, this);

	                    _swf.on(events.JWPLAYER_AUDIO_TRACK_CHANGED, function(e) {
	                        _currentAudioTrack = e.currentTrack;
	                        _audioTracks = e.tracks;
	                        this.trigger(e.type, e);
	                    }, this);

	                    _swf.on(events.JWPLAYER_PLAYER_STATE, function(e) {
	                        var state = e.newstate;
	                        if (state === states.IDLE) {
	                            return;
	                        }
	                        this.setState(state);
	                    }, this);

	                    _swf.on(forwardEventsWithDataDuration.join(' '), function(e) {
	                        if(e.duration === 'Infinity') {
	                            e.duration = Infinity;
	                        }
	                        this.trigger(e.type, e);
	                    }, this);

	                    _swf.on(forwardEventsWithData.join(' '), function(e) {
	                        this.trigger(e.type, e);
	                    }, this);

	                    _swf.on(forwardEvents.join(' '), function(e) {
	                        this.trigger(e.type);
	                    }, this);

	                    _swf.on(events.JWPLAYER_MEDIA_BEFORECOMPLETE, function(e){
	                        _beforecompleted = true;
	                        this.trigger(e.type);
	                        if(_attached === true) {
	                            _beforecompleted = false;
	                        }
	                    }, this);

	                    _swf.on(events.JWPLAYER_MEDIA_COMPLETE, function(e) {
	                        if(!_beforecompleted){
	                            this.setState(states.COMPLETE);
	                            this.trigger(e.type);
	                        }
	                    }, this);

	                    _swf.on('visualQuality', function(e) {
	                        e.reason = e.reason || 'api'; // or 'user selected';
	                        this.trigger('visualQuality', e);
	                        this.trigger(events.JWPLAYER_PROVIDER_FIRST_FRAME, {});
	                    }, this);

	                    _swf.on(events.JWPLAYER_PROVIDER_CHANGED, function(e) {
	                        _flashProviderType = e.message;
	                        this.trigger(events.JWPLAYER_PROVIDER_CHANGED, e);
	                    }, this);

	                    _swf.on(events.JWPLAYER_ERROR, function(event) {
	                        utils.log('Error playing media: %o %s', event.code, event.message, event);
	                        this.trigger(events.JWPLAYER_MEDIA_ERROR, event);
	                    }, this);

	                    if (flashThrottleTarget(_playerConfig)) {
	                        _swf.on('throttle', function(e) {
	                            clearTimeout(_flashBlockedTimeout);

	                            if (e.state === 'resume') {
	                                Events.trigger.call(_this, 'flashThrottle', e);
	                            } else {
	                                _flashBlockedTimeout = setTimeout(function () {
	                                    Events.trigger.call(_this, 'flashThrottle', e);
	                                }, 250);
	                            }
	                        }, this);
	                    }
	                },
	                remove: function() {
	                    _currentQuality = -1;
	                    _qualityLevels = null;
	                    EmbedSwf.remove(_swf);
	                },
	                setVisibility: function(visible) {
	                    visible = !!visible;
	                    _container.style.opacity = visible ? 1:0;
	                },
	                resize: function(width, height, stretching) {
	                    if (stretching) {
	                        _flashCommand('stretch', stretching);
	                    }
	                },
	                setControls: function(show) {
	                    _flashCommand('setControls', show);
	                },
	                setFullscreen: function(value) {
	                    _fullscreen = value;
	                    _flashCommand('fullscreen', value);
	                },
	                getFullScreen: function() {
	                    return _fullscreen;
	                },
	                setCurrentQuality: function(quality) {
	                    _flashCommand('setCurrentQuality', quality);
	                },
	                getCurrentQuality: function() {
	                    return _currentQuality;
	                },
	                setSubtitlesTrack: function(index) {
	                    _flashCommand('setSubtitlesTrack', index);
	                },
	                getName: function() {
	                    if (_flashProviderType) {
	                        return { name : 'flash_' + _flashProviderType };
	                    }
	                    return { name : 'flash' };
	                },
	                getQualityLevels: function() {
	                    return _qualityLevels || _item.sources;
	                },
	                getAudioTracks: function() {
	                    return _audioTracks;
	                },
	                getCurrentAudioTrack : function () {
	                    return _currentAudioTrack;
	                },
	                setCurrentAudioTrack : function(audioTrack) {
	                    _flashCommand('setCurrentAudioTrack', audioTrack);
	                },
	                destroy: function() {
	                    this.remove();
	                    if (_swf) {
	                        _swf.off();
	                        _swf = null;
	                    }
	                    _container = null;
	                    _item = null;
	                    this.off();
	                }
	        });

	        // Overwrite the event dispatchers to block on certain occasions
	        this.trigger = function(type, args) {
	            if (!_attached) {
	                return;
	            }
	            return Events.trigger.call(this, type, args);
	        };

	    }


	    // Register provider
	    var F = function(){};
	    F.prototype = DefaultProvider;
	    FlashProvider.prototype = new F();

	    return FlashProvider;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 82 */
/*!**********************************!*\
  !*** ./src/js/utils/embedswf.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/helpers */ 45),
	    __webpack_require__(/*! utils/backbone.events */ 44),
	    __webpack_require__(/*! utils/underscore */ 42)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(utils, Events, _) {

	    // Defaults
	    var BGCOLOR = '#000000';

	    function appendParam(object, name, value) {
	        var param = document.createElement('param');
	        param.setAttribute('name', name);
	        param.setAttribute('value', value);
	        object.appendChild(param);
	    }

	    function embed(swfUrl, container, id, wmode) {
	        var swf;

	        wmode = wmode || 'opaque';

	        if (utils.isMSIE()) {
	            // IE8 works best with outerHTML
	            var temp = document.createElement('div');
	            container.appendChild(temp);

	            temp.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' +
	                ' width="100%" height="100%" id="' + id +
	                '" name="' + id +
	                '" tabindex="0">' +
	                '<param name="movie" value="' + swfUrl + '">' +
	                '<param name="allowfullscreen" value="true">' +
	                '<param name="allowscriptaccess" value="always">' +
	                '<param name="wmode" value="' + wmode + '">' +
	                '<param name="bgcolor" value="' + BGCOLOR + '">' +
	                '<param name="menu" value="false">' +
	                '</object>';

	            var objectElements = container.getElementsByTagName('object');
	            for (var i = objectElements.length; i--;) {
	                if (objectElements[i].id === id) {
	                    swf = objectElements[i];
	                }
	            }

	        } else {
	            swf = document.createElement('object');
	            swf.setAttribute('type', 'application/x-shockwave-flash');
	            swf.setAttribute('data', swfUrl);
	            swf.setAttribute('width', '100%');
	            swf.setAttribute('height', '100%');
	            swf.setAttribute('bgcolor', BGCOLOR);
	            swf.setAttribute('id', id);
	            swf.setAttribute('name', id);

	            appendParam(swf, 'allowfullscreen', 'true');
	            appendParam(swf, 'allowscriptaccess', 'always');
	            appendParam(swf, 'wmode', wmode);
	            appendParam(swf, 'menu', 'false');

	            container.appendChild(swf, container);
	        }

	        swf.className = 'jw-swf jw-reset';
	        swf.style.display = 'block';
	        swf.style.position = 'absolute';
	        swf.style.left = 0;
	        swf.style.right = 0;
	        swf.style.top = 0;
	        swf.style.bottom = 0;

	        // flash can trigger events
	        _.extend(swf, Events);

	        swf.queueCommands = true;
	        // javascript can trigger SwfEventRouter callbacks
	        swf.triggerFlash = function(name) {
	            var swfInstance = this;
	            if (name !== 'setup' && swfInstance.queueCommands || !swfInstance.__externalCall) {
	                var commandQueue = swfInstance.__commandQueue;
	                // remove any earlier commands with the same name
	                for (var i = commandQueue.length; i--;) {
	                    if (commandQueue[i][0] === name) {
	                        commandQueue.splice(i, 1);
	                    }
	                }
	                commandQueue.push(Array.prototype.slice.call(arguments));
	                return swfInstance;
	            }
	            var args = Array.prototype.slice.call(arguments, 1);
	            var status = utils.tryCatch(function() {
	                if (args.length) {
	                    // remove any nodes from arguments
	                    // cyclical structures cannot be converted to JSON
	                    for (var i=args.length; i--;) {
	                        if (typeof args[i] === 'object') {
	                            _.each(args[i], deleteHTMLElement);
	                        }
	                    }
	                    var json = JSON.stringify(args);
	                    swfInstance.__externalCall(name, json);
	                } else {
	                    swfInstance.__externalCall(name);
	                }
	            });

	            if (status instanceof utils.Error) {
	                console.error(name, status);
	                if (name === 'setup') {
	                    status.name = 'Failed to setup flash';
	                    return status;
	                }
	            }
	            return swfInstance;
	        };

	        // commands are queued when __externalCall is not available
	        swf.__commandQueue = [];

	        return swf;
	    }

	    function remove(swf) {
	        if (swf && swf.parentNode) {
	            swf.style.display = 'none';
	            swf.parentNode.removeChild(swf);
	        }
	    }

	    function deleteHTMLElement(value, prop, object) {
	        if (value instanceof window.HTMLElement) {
	            delete object[prop];
	        }
	    }

	    return {
	        embed : embed,
	        remove : remove
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 83 */
/*!**************************************!*\
  !*** ./src/js/controller/storage.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/underscore */ 42),
	    __webpack_require__(/*! utils/helpers */ 45)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(_, utils) {

	    var jwplayer = window.jwplayer;
	    var storage = {
	        removeItem: utils.noop
	    };

	    try {
	        storage = window.localStorage;
	    } catch(e) {/* ignore */}

	    function jwPrefix(str) {
	        return 'jwplayer.' + str;
	    }

	    function getAllItems() {
	        return _.reduce(this.persistItems, function(memo, key) {
	            var val = storage[jwPrefix(key)];
	            if (val) {
	                memo[key] = utils.serialize(val);
	            }
	            return memo;
	        }, {});
	    }

	    function setItem(name, value) {
	        try {
	            storage[jwPrefix(name)] = value;
	        } catch(e) {
	            // ignore QuotaExceededError unless debugging
	            if (jwplayer && jwplayer.debug) {
	                console.error(e);
	            }
	        }
	    }

	    function clear() {
	        _.each(this.persistItems, function(val) {
	            storage.removeItem(jwPrefix(val));
	        });
	    }

	    function Storage() { }

	    function track(persistItems, model) {
	        this.persistItems = persistItems;

	        _.each(this.persistItems, function(item) {
	            model.on('change:' + item, function(model, value) {
	                setItem(item, value);
	            });
	        });
	    }

	    _.extend(Storage.prototype, {
	        getAllItems: getAllItems,
	        track : track,
	        clear: clear
	    });

	    return Storage;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 84 */
/*!**********************************!*\
  !*** ./src/js/controller/qoe.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/timer */ 58),
	    __webpack_require__(/*! events/events */ 43),
	    __webpack_require__(/*! utils/underscore */ 42)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(Timer, events, _) {

	    // This is to provide a first frame event even when
	    //  a provider does not give us one.
	    var onTimeIncreasesGenerator = (function(callback) {
	        var lastVal = Number.MIN_VALUE;
	        return function (evt) {
	            if (evt.position > lastVal) {
	                callback();
	            }
	            // sometimes the number will wrap around (ie 100 down to 0)
	            //  so always update
	            lastVal = evt.position;
	        };
	    });

	    function unbindFirstFrameEvents(model) {
	        model.mediaController.off(events.JWPLAYER_MEDIA_PLAY_ATTEMPT, model._onPlayAttempt);
	        model.mediaController.off(events.JWPLAYER_PROVIDER_FIRST_FRAME, model._triggerFirstFrame);
	        model.mediaController.off(events.JWPLAYER_MEDIA_TIME, model._onTime);
	    }

	    function trackFirstFrame(model) {
	        unbindFirstFrameEvents(model);

	        // When it occurs, send the event, and unbind all listeners
	        model._triggerFirstFrame = _.once(function() {
	            var qoeItem = model._qoeItem;
	            qoeItem.tick(events.JWPLAYER_MEDIA_FIRST_FRAME);

	            var time = qoeItem.between(events.JWPLAYER_MEDIA_PLAY_ATTEMPT, events.JWPLAYER_MEDIA_FIRST_FRAME);
	            model.mediaController.trigger(events.JWPLAYER_MEDIA_FIRST_FRAME, {loadTime : time});
	            unbindFirstFrameEvents(model);
	        });

	        model._onTime = onTimeIncreasesGenerator(model._triggerFirstFrame);

	        model._onPlayAttempt = function() {
	            model._qoeItem.tick(events.JWPLAYER_MEDIA_PLAY_ATTEMPT);
	        };

	        model.mediaController.once(events.JWPLAYER_MEDIA_PLAY_ATTEMPT, model._onPlayAttempt);
	        model.mediaController.once(events.JWPLAYER_PROVIDER_FIRST_FRAME, model._triggerFirstFrame);
	        model.mediaController.on(events.JWPLAYER_MEDIA_TIME, model._onTime);
	    }

	    function initModel(model) {

	        function onMediaModel(model, mediaModel, oldMediaModel) {
	            // finish previous item
	            if (model._qoeItem && oldMediaModel) {
	                model._qoeItem.end(oldMediaModel.get('state'));
	            }
	            // reset item level qoe
	            model._qoeItem = new Timer();
	            model._qoeItem.tick(events.JWPLAYER_PLAYLIST_ITEM);
	            model._qoeItem.start(mediaModel.get('state'));

	            trackFirstFrame(model);

	            mediaModel.on('change:state', function (mediaModel, newstate, oldstate) {
	                model._qoeItem.end(oldstate);
	                model._qoeItem.start(newstate);
	            });
	        }

	        model.on('change:mediaModel', onMediaModel);
	    }

	    return {
	        model : initModel
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 85 */
/*!*************************************!*\
  !*** ./src/js/utils/simplemodel.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/underscore */ 42),
	    __webpack_require__(/*! utils/backbone.events */ 44)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(_, Events) {

	    var SimpleModel = _.extend({
	        'get' : function (attr) {
	            this.attributes = this.attributes || {};
	            return this.attributes[attr];
	        },
	        'set' : function (attr, val) {
	            this.attributes = this.attributes || {};

	            if (this.attributes[attr] === val) {
	                return;
	            }
	            var oldVal = this.attributes[attr];
	            this.attributes[attr] = val;
	            this.trigger('change:' + attr, this, val, oldVal);
	        },
	        'clone' : function() {
	            return _.clone(this.attributes);
	        }
	    }, Events);

	    return SimpleModel;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 86 */
/*!*********************************************!*\
  !*** ./src/js/controller/instream-flash.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/backbone.events */ 44),
	    __webpack_require__(/*! controller/model */ 74),
	    __webpack_require__(/*! events/change-state-event */ 73),
	    __webpack_require__(/*! events/events */ 43),
	    __webpack_require__(/*! events/states */ 59),
	    __webpack_require__(/*! utils/helpers */ 45),
	    __webpack_require__(/*! utils/underscore */ 42)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(Events, Model, changeStateEvent, events, states, utils, _) {

	    var InstreamFlash = function(_controller, _model) {
	        this.model = _model;

	        this._adModel = new Model().setup({
	            id: _model.get('id'),
	            volume: _model.get('volume'),
	            fullscreen: _model.get('fullscreen'),
	            mute: _model.get('mute')
	        });

	        this._adModel.on('change:state', changeStateEvent, this);

	        var container = _controller.getContainer();
	        this.swf = container.querySelector('object');
	    };

	    InstreamFlash.prototype = _.extend({

	        init: function() {
	            // Pause playback when throttled, and only resume is paused here
	            if (utils.isChrome()) {
	                var _throttleTimeout = -1;
	                var _throttlePaused = false;
	                this.swf.on('throttle', function(e) {
	                    clearTimeout(_throttleTimeout);

	                    if (e.state === 'resume') {
	                        if (_throttlePaused) {
	                            _throttlePaused = false;
	                            this.instreamPlay();
	                        }
	                    } else {
	                        var _this = this;
	                        _throttleTimeout = setTimeout(function () {
	                            if (_this._adModel.get('state') === states.PLAYING) {
	                                _throttlePaused = true;
	                                _this.instreamPause();
	                            }
	                        }, 250);
	                    }
	                }, this);
	            }

	            this.swf.on('instream:state', function(evt) {
	                switch (evt.newstate) {
	                    case states.PLAYING:
	                        this._adModel.set('state', evt.newstate);
	                        break;
	                    case states.PAUSED:
	                        this._adModel.set('state', evt.newstate);
	                        break;
	                }
	            }, this)
	            .on('instream:time', function(evt) {
	                this._adModel.set('position', evt.position);
	                this._adModel.set('duration', evt.duration);
	                this.trigger(events.JWPLAYER_MEDIA_TIME, evt);
	            }, this)
	            .on('instream:complete', function(evt) {
	                this.trigger(events.JWPLAYER_MEDIA_COMPLETE, evt);
	            }, this)
	            .on('instream:error', function(evt) {
	                this.trigger(events.JWPLAYER_MEDIA_ERROR, evt);
	            }, this);

	            this.swf.triggerFlash('instream:init');
	        },

	        instreamDestroy: function() {
	            if (!this._adModel) {
	                return;
	            }

	            this.off();

	            this.swf.off(null, null, this);
	            this.swf.triggerFlash('instream:destroy');
	            this.swf = null;

	            this._adModel.off();
	            this._adModel = null;

	            this.model = null;
	        },

	        load: function(item) {
	            // Show the instream layer
	            this.swf.triggerFlash('instream:load', item);
	        },

	        instreamPlay: function() {
	            this.swf.triggerFlash('instream:play');
	        },

	        instreamPause: function() {
	            this.swf.triggerFlash('instream:pause');
	        }

	    }, Events);

	    return InstreamFlash;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 87 */
/*!************************************!*\
  !*** ./src/js/controller/Setup.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! controller/setup-steps */ 88),
	    __webpack_require__(/*! utils/backbone.events */ 44),
	    __webpack_require__(/*! utils/underscore */ 42),
	    __webpack_require__(/*! events/events */ 43)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(SetupSteps, Events, _, events) {


	    var Setup = function(_api, _model, _view, _setPlaylist) {
	        var _this = this,
	            _setupFailureTimeout;

	        var _queue = SetupSteps.getQueue();

	        var _errorTimeoutSeconds = 30;


	        this.start = function () {
	            _setupFailureTimeout = setTimeout(_setupTimeoutHandler, _errorTimeoutSeconds * 1000);
	            _nextTask();
	        };

	        this.destroy = function() {
	            clearTimeout(_setupFailureTimeout);
	            this.off();
	            _queue.length = 0;
	            _api = null;
	            _model = null;
	            _view = null;
	        };

	        function _setupTimeoutHandler() {
	            _error('Setup Timeout Error', 'Setup took longer than ' + _errorTimeoutSeconds + ' seconds to complete.');
	        }

	        function _nextTask() {
	            _.each(_queue, function(c) {
	                // If task completed, or destroy was called
	                if (c.complete === true || c.running === true || _api === null) {
	                    return;
	                }

	                if (_allComplete(c.depends)) {
	                    c.running = true;
	                    callTask(c);
	                }
	            });
	        }

	        function callTask(task) {
	            var resolve = function(resolveState) {
	                resolveState = resolveState || {};
	                _taskComplete(task, resolveState);
	            };

	            task.method(resolve, _model, _api, _view, _setPlaylist);
	        }

	        function _allComplete(dependencies) {
	            // return true if empty array,
	            //  or if each object has an attribute 'complete' which is true
	            return _.all(dependencies, function(name) {
	                return _queue[name].complete;
	            });
	        }

	        function _taskComplete(task, resolveState) {
	            if (resolveState.type === 'error') {
	                _error(resolveState.msg, resolveState.reason);
	            } else if (resolveState.type === 'complete') {
	                clearTimeout(_setupFailureTimeout);
	                _this.trigger(events.JWPLAYER_READY);
	            } else {
	                task.complete = true;
	                _nextTask();
	            }
	        }

	        function _error(message, reason) {
	            clearTimeout(_setupFailureTimeout);
	            _this.trigger(events.JWPLAYER_SETUP_ERROR, {
	                message: message + ': ' + reason
	            });
	            _this.destroy();
	        }
	    };

	    Setup.prototype = Events;

	    return Setup;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 88 */
/*!******************************************!*\
  !*** ./src/js/controller/setup-steps.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! plugins/plugins */ 89),
	    __webpack_require__(/*! playlist/loader */ 61),
	    __webpack_require__(/*! utils/scriptloader */ 92),
	    __webpack_require__(/*! utils/constants */ 56),
	    __webpack_require__(/*! utils/underscore */ 42),
	    __webpack_require__(/*! utils/helpers */ 45),
	    __webpack_require__(/*! events/events */ 43)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(plugins, PlaylistLoader, ScriptLoader, Constants, _, utils, events) {

	    var _pluginLoader,
	        _playlistLoader;


	    function getQueue() {

	        var Components = {
	            LOAD_PROMISE_POLYFILL : {
	                method: _loadPromisePolyfill,
	                depends: []
	            },
	            LOAD_BASE64_POLYFILL : {
	                method: _loadBase64Polyfill,
	                depends: []
	            },
	            LOADED_POLYFILLS : {
	                method: _loadedPolyfills,
	                depends: [
	                    'LOAD_PROMISE_POLYFILL',
	                    'LOAD_BASE64_POLYFILL'
	                ]
	            },
	            LOAD_PLUGINS : {
	                method: _loadPlugins,
	                depends: ['LOADED_POLYFILLS']
	            },
	            INIT_PLUGINS : {
	                method: _initPlugins,
	                depends: [
	                    'LOAD_PLUGINS',
	                    // Init requires jw-overlays to be in the DOM
	                    'SETUP_VIEW'
	                ]
	            },
	            LOAD_YOUTUBE : {
	                method: _loadYoutube,
	                depends: ['FILTER_PLAYLIST']
	            },
	            LOAD_SKIN : {
	                method: _loadSkin,
	                depends: ['LOADED_POLYFILLS']
	            },
	            LOAD_PLAYLIST : {
	                method: _loadPlaylist,
	                depends: ['LOADED_POLYFILLS']
	            },
	            FILTER_PLAYLIST: {
	                method: _filterPlaylist,
	                depends : ['LOAD_PLAYLIST']
	            },
	            SETUP_VIEW : {
	                method: _setupView,
	                depends: [
	                    'LOAD_SKIN'
	                ]
	            },
	            SEND_READY : {
	                method: _sendReady,
	                depends: [
	                    'INIT_PLUGINS',
	                    'LOAD_YOUTUBE',
	                    'SETUP_VIEW'
	                ]
	            }
	        };

	        return Components;
	    }

	    function _loadPromisePolyfill(resolve) {
	        if (!window.Promise) {
	            __webpack_require__.e/* nsure */(1/*! polyfills.promise */, function (require) {
	                __webpack_require__(/*! polyfills/promise */ 95);
	                resolve();
	            });
	        } else {
	            resolve();
	        }
	    }

	    function _loadBase64Polyfill(resolve) {
	        if (!window.btoa || !window.atob) {
	            __webpack_require__.e/* nsure */(2/*! polyfills.base64 */, function(require) {
	                __webpack_require__(/*! polyfills/base64 */ 96);
	                resolve();
	            });
	        } else {
	            resolve();
	        }
	    }

	    function _loadedPolyfills(resolve){
	        resolve();
	    }

	    function _loadPlugins(resolve, _model) {
	        _pluginLoader = plugins.loadPlugins(_model.get('id'), _model.get('plugins'));
	        _pluginLoader.on(events.COMPLETE, resolve);
	        _pluginLoader.on(events.ERROR, _.partial(_pluginsError, resolve));
	        _pluginLoader.load();
	    }

	    function _initPlugins(resolve, _model, _api) {
	        _pluginLoader.setupPlugins(_api, _model);
	        
	        resolve();
	    }

	    function _pluginsError(resolve, evt) {
	        error(resolve, 'Could not load plugin', evt.message);
	    }

	    function _loadPlaylist(resolve, _model) {
	        var playlist = _model.get('playlist');
	        if (_.isString(playlist)) {
	            _playlistLoader = new PlaylistLoader();
	            _playlistLoader.on(events.JWPLAYER_PLAYLIST_LOADED, function(data) {
	                _model.set('playlist', data.playlist);
	                resolve();
	            });
	            _playlistLoader.on(events.JWPLAYER_ERROR, _.partial(_playlistError, resolve));
	            _playlistLoader.load(playlist);
	        } else {
	            resolve();
	        }
	    }

	    function _filterPlaylist(resolve, _model, _api, _view, _setPlaylist) {
	        var playlist = _model.get('playlist');

	        // Performs filtering
	        var success = _setPlaylist(playlist);

	        if (success) {
	            resolve();
	        } else {
	            _playlistError(resolve);
	        }
	    }

	    function _playlistError(resolve, evt) {
	        if (evt && evt.message) {
	            error(resolve, 'Error loading playlist', evt.message);
	        } else {
	            error(resolve, 'Error loading player', 'No playable sources found');
	        }
	    }

	    function skinToLoad(skin, base) {
	        if(_.contains(Constants.SkinsLoadable, skin)) {
	            return base + 'skins/' + skin + '.css';
	        }
	    }

	    function isSkinLoaded(skinPath) {
	        var ss = document.styleSheets;
	        for (var i = 0, max = ss.length; i < max; i++) {
	            if (ss[i].href === skinPath) {
	                return true;
	            }
	        }
	        return false;
	    }

	    function _loadSkin(resolve, _model) {
	        var skinName = _model.get('skin');
	        var skinUrl = _model.get('skinUrl');

	        // If skin is built into player, there is nothing to load
	        if (_.contains(Constants.SkinsIncluded, skinName)) {
	            resolve();
	            return;
	        }

	        if (!skinUrl) {
	            // if a user doesn't specify a url, we assume it comes from our CDN or config.base
	            skinUrl = skinToLoad(skinName, _model.get('base'));
	        }

	        if (_.isString(skinUrl) && !isSkinLoaded(skinUrl)) {
	            _model.set('skin-loading', true);

	            var isStylesheet = true;
	            var loader = new ScriptLoader(skinUrl, isStylesheet);

	            loader.addEventListener(events.COMPLETE, function() {
	                _model.set('skin-loading', false);
	            });
	            loader.addEventListener(events.ERROR, function() {
	                _model.set('skin', 'seven'); // fall back to seven skin
	                _model.set('skin-loading', false);
	            });

	            loader.load();
	        }

	        // Control elements are hidden by the loading flag until it is ready
	        _.defer(function() {
	            resolve();
	        });
	    }

	    function _loadYoutube(resolve, _model) {
	        var p = _model.get('playlist');

	        var hasYoutube = _.some(p, function(item) {
	            var itemYoutube = utils.isYouTube(item.file, item.type);
	            if (itemYoutube && !item.image) {
	                var url = item.file;
	                var videoId = utils.youTubeID(url);
	                item.image = '//i.ytimg.com/vi/' + videoId + '/0.jpg';
	            }
	            return itemYoutube;
	        });

	        if (hasYoutube) {
	            __webpack_require__.e/* nsure */(3/*! provider.youtube */, function(require) {
	                var youtube = __webpack_require__(/*! providers/youtube */ 97);
	                youtube.register(window.jwplayer);
	                resolve();
	            });
	        } else {
	            resolve();
	        }
	    }

	    function _setupView(resolve, _model, _api, _view) {
	        _view.setup();
	        resolve();
	    }

	    function _sendReady(resolve) {
	        resolve({
	            type : 'complete'
	        });
	    }

	    function error(resolve, msg, reason) {
	        resolve({
	            type : 'error',
	            msg : msg,
	            reason : reason
	        });
	    }

	    return {
	        getQueue : getQueue,
	        error: error
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 89 */
/*!***********************************!*\
  !*** ./src/js/plugins/plugins.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! plugins/loader */ 90),
	    __webpack_require__(/*! plugins/model */ 93),
	    __webpack_require__(/*! plugins/plugin */ 94),
	    __webpack_require__(/*! plugins/utils */ 91)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(PluginsLoader, PluginsModel, Plugin, pluginsUtils) {

	    var _plugins = {},
	        _pluginLoaders = {};

	    var loadPlugins = function(id, config) {
	        _pluginLoaders[id] = new PluginsLoader(new PluginsModel(_plugins), config);
	        return _pluginLoaders[id];
	    };

	    var registerPlugin = function(id, target, arg1, arg2) {
	        var pluginId = pluginsUtils.getPluginName(id);
	        if (!_plugins[pluginId]) {
	            _plugins[pluginId] = new Plugin(id);
	        }
	        _plugins[pluginId].registerPlugin(id, target, arg1, arg2);
	    };


	    return {
	        loadPlugins : loadPlugins,
	        registerPlugin : registerPlugin
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 90 */
/*!**********************************!*\
  !*** ./src/js/plugins/loader.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! plugins/utils */ 91),
	    __webpack_require__(/*! utils/helpers */ 45),
	    __webpack_require__(/*! events/events */ 43),
	    __webpack_require__(/*! utils/backbone.events */ 44),
	    __webpack_require__(/*! utils/underscore */ 42),
	    __webpack_require__(/*! utils/scriptloader */ 92)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(pluginsUtils, utils, events, Events, _, scriptloader) {

	    function _addToPlayerGenerator(_api, pluginInstance, div) {
	        return function() {
	            var overlaysElement = _api.getContainer().getElementsByClassName('jw-overlays')[0];

	            // This should probably be an error
	            if (!overlaysElement) {
	                return;
	            }

	            overlaysElement.appendChild(div);
	            div.left = overlaysElement.style.left;
	            div.top = overlaysElement.style.top;

	            pluginInstance.displayArea = overlaysElement;
	        };
	    }

	    function _pluginResizeGenerator(pluginInstance) {
	        function resize() {
	            var displayarea = pluginInstance.displayArea;
	            if (displayarea) {
	                pluginInstance.resize(displayarea.clientWidth, displayarea.clientHeight);
	            }
	        }
	        return function() {
	            resize();
	            // Sometimes a mobile device may trigger resize before the new sizes are finalized
	            setTimeout(resize, 400);
	        };
	    }

	    var PluginLoader = function (model, _config) {
	        var _this = _.extend(this, Events),
	            _status = scriptloader.loaderstatus.NEW,
	            _iscomplete = false,
	            _pluginCount = _.size(_config),
	            _pluginLoaded,
	            _destroyed = false;

	        /*
	         * Plugins can be loaded by multiple players on the page, but all of them use
	         * the same plugin model singleton. This creates a race condition because
	         * multiple players are creating and triggering loads, which could complete
	         * at any time. We could have some really complicated logic that deals with
	         * this by checking the status when it's created and / or having the loader
	         * redispatch its current status on load(). Rather than do this, we just check
	         * for completion after all of the plugins have been created. If all plugins
	         * have been loaded by the time checkComplete is called, then the loader is
	         * done and we fire the complete event. If there are new loads, they will
	         * arrive later, retriggering the completeness check and triggering a complete
	         * to fire, if necessary.
	         */
	        function _complete() {
	            if (!_iscomplete) {
	                _iscomplete = true;
	                _status = scriptloader.loaderstatus.COMPLETE;
	                _this.trigger(events.COMPLETE);
	            }
	        }

	        // This is not entirely efficient, but it's simple
	        function _checkComplete() {
	            // Since we do not remove event listeners on pluginObj when destroying
	            if (_destroyed) {
	                return;
	            }
	            if (!_config || _.keys(_config).length === 0) {
	                _complete();
	            }
	            if (!_iscomplete) {
	                var plugins = model.getPlugins();
	                _pluginLoaded = _.after(_pluginCount, _complete);
	                _.each(_config, function (value, plugin) {
	                    var pluginName = pluginsUtils.getPluginName(plugin),
	                        pluginObj = plugins[pluginName],
	                        js = pluginObj.getJS(),
	                        target = pluginObj.getTarget(),
	                        status = pluginObj.getStatus();

	                    if (status === scriptloader.loaderstatus.LOADING || status === scriptloader.loaderstatus.NEW) {
	                        return;
	                    } else if (js && !utils.versionCheck(target)) {
	                        _this.trigger(events.ERROR, {
	                            message: 'Incompatible player version'
	                        });
	                    }
	                    _pluginLoaded();
	                });

	            }
	        }

	        function _pluginError(e) {
	            // Since we do not remove event listeners on pluginObj when destroying
	            if (_destroyed) {
	                return;
	            }
	            var message = 'File not found';
	            if (e.url) {
	                utils.log(message, e.url);
	            }
	            this.off();
	            this.trigger(events.ERROR, {
	                message: message
	            });
	            _checkComplete();
	        }

	        this.setupPlugins = function (api, playerModel) {
	            var flashPlugins = [],
	                plugins = model.getPlugins();

	            var pluginsConfig = playerModel.get('plugins');
	            _.each(pluginsConfig, function(pluginConfig, plugin) {
	                var pluginName = pluginsUtils.getPluginName(plugin),
	                    pluginObj = plugins[pluginName],
	                    flashPath = pluginObj.getFlashPath(),
	                    jsPlugin = pluginObj.getJS(),
	                    pluginURL = pluginObj.getURL();

	                if (flashPath) {
	                    var flashPluginConfig = _.extend({
	                        name: pluginName,
	                        swf: flashPath,
	                        pluginmode: pluginObj.getPluginmode()
	                    }, pluginConfig);
	                    flashPlugins.push(flashPluginConfig);
	                }

	                var status = utils.tryCatch(function() {
	                    if (jsPlugin && pluginsConfig[pluginURL]) {
	                        var div = document.createElement('div');
	                        div.id = api.id + '_' + pluginName;
	                        div.className = 'jw-plugin jw-reset';

	                        var pluginOptions = _.extend({}, pluginsConfig[pluginURL]);
	                        var pluginInstance = pluginObj.getNewInstance(api, pluginOptions, div);

	                        pluginInstance.addToPlayer   = _addToPlayerGenerator(api, pluginInstance, div);
	                        pluginInstance.resizeHandler = _pluginResizeGenerator(pluginInstance);

	                        api.addPlugin(pluginName, pluginInstance, div);
	                    }

	                });

	                if (status instanceof utils.Error) {
	                    utils.log('ERROR: Failed to load ' + pluginName + '.');
	                }
	            });

	            playerModel.set('flashPlugins', flashPlugins);
	        };

	        this.load = function () {
	            // Must be a hash map
	            if (utils.exists(_config) && utils.typeOf(_config) !== 'object') {
	                _checkComplete();
	                return;
	            }

	            _status = scriptloader.loaderstatus.LOADING;

	            /** First pass to create the plugins and add listeners **/
	            _.each(_config, function(value, pluginUrl) {
	                if (utils.exists(pluginUrl)) {
	                    var pluginObj = model.addPlugin(pluginUrl);
	                    pluginObj.on(events.COMPLETE, _checkComplete);
	                    pluginObj.on(events.ERROR, _pluginError);
	                }
	            });

	            var plugins = model.getPlugins();

	            /** Second pass to actually load the plugins **/
	            _.each(plugins, function(pluginObj) {
	                // Plugin object ensures that it's only loaded once
	                pluginObj.load();
	            });

	            // Make sure we're not hanging around waiting for plugins that already finished loading
	            _checkComplete();
	        };

	        this.destroy = function () {
	            _destroyed = true;
	            this.off();
	        };

	        this.getStatus = function () {
	            return _status;
	        };

	    };

	    return PluginLoader;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 91 */
/*!*********************************!*\
  !*** ./src/js/plugins/utils.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/strings */ 49)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(strings) {

	    var utils = {};

	    /**
	     * Types of plugin paths
	     */
	    var _pluginPathType = utils.pluginPathType = {
	        ABSOLUTE: 0,
	        RELATIVE: 1,
	        CDN: 2
	    };

	    utils.getPluginPathType = function (path) {
	        if (typeof path !== 'string') {
	            return;
	        }
	        path = path.split('?')[0];
	        var protocol = path.indexOf('://');
	        if (protocol > 0) {
	            return _pluginPathType.ABSOLUTE;
	        }
	        var folder = path.indexOf('/');
	        var extension = strings.extension(path);
	        if (protocol < 0 && folder < 0 && (!extension || !isNaN(extension))) {
	            return _pluginPathType.CDN;
	        }
	        return _pluginPathType.RELATIVE;
	    };


	    /**
	     * Extracts a plugin name from a string
	     */
	    utils.getPluginName = function (pluginName) {
	        /** Regex locates the characters after the last slash, until it encounters a dash. **/
	        return pluginName.replace(/^(.*\/)?([^-]*)-?.*\.(swf|js)$/, '$2');
	    };

	    /**
	     * Extracts a plugin version from a string
	     */
	    utils.getPluginVersion = function (pluginName) {
	        return pluginName.replace(/[^-]*-?([^\.]*).*$/, '$1');
	    };

	    return utils;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 92 */
/*!**************************************!*\
  !*** ./src/js/utils/scriptloader.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! events/events */ 43),
	    __webpack_require__(/*! utils/backbone.events */ 44),
	    __webpack_require__(/*! utils/underscore */ 42)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(events, Events, _) {

	    var _loaders = {};

	    var STATUS = {
	        NEW: 0,
	        LOADING: 1,
	        ERROR: 2,
	        COMPLETE: 3
	    };

	    var scriptloader = function (url, isStyle) {
	        var _this = _.extend(this, Events),
	            _status = STATUS.NEW;

	        // legacy support
	        this.addEventListener = this.on;
	        this.removeEventListener = this.off;


	        function _sendError(evt) {
	            _status = STATUS.ERROR;
	            _this.trigger(events.ERROR, evt);
	        }

	        function _sendComplete(evt) {
	            _status = STATUS.COMPLETE;
	            _this.trigger(events.COMPLETE, evt);
	        }

	        this.makeStyleLink = function(url) {
	            var link = document.createElement('link');
	            link.type = 'text/css';
	            link.rel = 'stylesheet';
	            link.href = url;
	            return link;
	        };
	        this.makeScriptTag = function(url) {
	            var scriptTag = document.createElement('script');
	            scriptTag.src = url;
	            return scriptTag;
	        };

	        this.makeTag = (isStyle ? this.makeStyleLink : this.makeScriptTag);

	        this.load = function () {
	            // Only execute on the first run
	            if (_status !== STATUS.NEW) {
	                return;
	            }

	            // If we already have a scriptloader loading the same script, don't create a new one;
	            var sameLoader = _loaders[url];
	            if (sameLoader) {
	                _status = sameLoader.getStatus();
	                if (_status < 2) {
	                    // dispatch to this instances listeners when the first loader gets updates
	                    sameLoader.on(events.ERROR, _sendError);
	                    sameLoader.on(events.COMPLETE, _sendComplete);
	                    return;
	                }
	                // already errored or loaded... keep going?
	            }

	            var head = document.getElementsByTagName('head')[0] || document.documentElement;
	            var scriptTag = this.makeTag(url);

	            var done = false;
	            scriptTag.onload = scriptTag.onreadystatechange = function (evt) {
	                if (!done &&
	                    (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete')) {
	                    done = true;
	                    _sendComplete(evt);

	                    // Handle memory leak in IE
	                    scriptTag.onload = scriptTag.onreadystatechange = null;
	                    if (head && scriptTag.parentNode && !isStyle) {
	                        head.removeChild(scriptTag);
	                    }
	                }
	            };
	            scriptTag.onerror = _sendError;

	            head.insertBefore(scriptTag, head.firstChild);

	            _status = STATUS.LOADING;
	            _loaders[url] = this;
	        };

	        this.getStatus = function () {
	            return _status;
	        };
	    };

	    scriptloader.loaderstatus = STATUS;

	    return scriptloader;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 93 */
/*!*********************************!*\
  !*** ./src/js/plugins/model.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! plugins/utils */ 91),
	    __webpack_require__(/*! plugins/plugin */ 94)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(pluginsUtils, Plugin) {

	    var PluginModel = function (plugins) {
	        this.addPlugin = function (url) {
	            var pluginName = pluginsUtils.getPluginName(url);
	            if (!plugins[pluginName]) {
	                plugins[pluginName] = new Plugin(url);
	            }
	            return plugins[pluginName];
	        };

	        this.getPlugins = function () {
	            return plugins;
	        };
	    };

	    return PluginModel;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 94 */
/*!**********************************!*\
  !*** ./src/js/plugins/plugin.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/helpers */ 45),
	    __webpack_require__(/*! plugins/utils */ 91),
	    __webpack_require__(/*! events/events */ 43),
	    __webpack_require__(/*! utils/backbone.events */ 44),
	    __webpack_require__(/*! utils/scriptloader */ 92),
	    __webpack_require__(/*! utils/underscore */ 42)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(utils, pluginsUtils, events, Events, scriptloader, _) {

	    var pluginmodes = {
	        FLASH: 0,
	        JAVASCRIPT: 1,
	        HYBRID: 2
	    };

	    var Plugin = function(url) {
	        var _this = _.extend(this, Events),
	            _status = scriptloader.loaderstatus.NEW,
	            _flashPath,
	            _js,
	            _target,
	            _completeTimeout;

	        function getJSPath() {
	            switch (pluginsUtils.getPluginPathType(url)) {
	                case pluginsUtils.pluginPathType.ABSOLUTE:
	                    return url;
	                case pluginsUtils.pluginPathType.RELATIVE:
	                    return utils.getAbsolutePath(url, window.location.href);
	            }
	        }

	        function completeHandler() {
	            _.defer(function() {
	                _status = scriptloader.loaderstatus.COMPLETE;
	                _this.trigger(events.COMPLETE);
	            });
	        }

	        function errorHandler() {
	            _status = scriptloader.loaderstatus.ERROR;
	            _this.trigger(events.ERROR, {url: url});
	        }

	        this.load = function() {
	            if (_status !== scriptloader.loaderstatus.NEW) {
	                return;
	            }
	            if (url.lastIndexOf('.swf') > 0) {
	                _flashPath = url;
	                _status = scriptloader.loaderstatus.COMPLETE;
	                _this.trigger(events.COMPLETE);
	                return;
	            }
	            if (pluginsUtils.getPluginPathType(url) === pluginsUtils.pluginPathType.CDN) {
	                _status = scriptloader.loaderstatus.COMPLETE;
	                _this.trigger(events.COMPLETE);
	                return;
	            }
	            _status = scriptloader.loaderstatus.LOADING;
	            var _loader = new scriptloader(getJSPath());
	            // Complete doesn't matter - we're waiting for registerPlugin
	            _loader.on(events.COMPLETE, completeHandler);
	            _loader.on(events.ERROR, errorHandler);
	            _loader.load();
	        };

	        this.registerPlugin = function(id, target, arg1, arg2) {
	            if (_completeTimeout) {
	                clearTimeout(_completeTimeout);
	                _completeTimeout = undefined;
	            }
	            _target = target;
	            if (arg1 && arg2) {
	                _flashPath = arg2;
	                _js = arg1;
	            } else if (typeof arg1 === 'string') {
	                _flashPath = arg1;
	            } else if (typeof arg1 === 'function') {
	                _js = arg1;
	            } else if (!arg1 && !arg2) {
	                _flashPath = id;
	            }
	            _status = scriptloader.loaderstatus.COMPLETE;
	            _this.trigger(events.COMPLETE);
	        };

	        this.getStatus = function() {
	            return _status;
	        };

	        this.getPluginName = function() {
	            return pluginsUtils.getPluginName(url);
	        };

	        this.getFlashPath = function() {
	            if (_flashPath) {
	                switch (pluginsUtils.getPluginPathType(_flashPath)) {
	                    case pluginsUtils.pluginPathType.ABSOLUTE:
	                        return _flashPath;
	                    case pluginsUtils.pluginPathType.RELATIVE:
	                        if (url.lastIndexOf('.swf') > 0) {
	                            return utils.getAbsolutePath(_flashPath, window.location.href);
	                        }
	                        return utils.getAbsolutePath(_flashPath, getJSPath());
	                }
	            }
	            return null;
	        };

	        this.getJS = function() {
	            return _js;
	        };

	        this.getTarget = function() {
	            return _target;
	        };

	        this.getPluginmode = function() {
	            if (typeof _flashPath !== undefined && typeof _js !== undefined) {
	                return pluginmodes.HYBRID;
	            } else if (typeof _flashPath !== undefined) {
	                return pluginmodes.FLASH;
	            } else if (typeof _js !== undefined) {
	                return pluginmodes.JAVASCRIPT;
	            }
	        };

	        this.getNewInstance = function(api, config, div) {
	            return new _js(api, config, div);
	        };

	        this.getURL = function() {
	            return url;
	        };
	    };

	    return Plugin;

	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */
/*!***************************************!*\
  !*** ./src/js/controller/captions.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! parsers/parsers */ 62),
	    __webpack_require__(/*! parsers/captions/srt */ 99),
	    __webpack_require__(/*! parsers/captions/dfxp */ 100),
	    __webpack_require__(/*! utils/helpers */ 45)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(parsers, srt, dfxp, utils) {

	    /** Displays closed captions or subtitles on top of the video. **/
	    var Captions = function(_api, _model) {

	        // Reset and load external captions on playlist item
	        _model.on('change:playlistItem', _itemHandler, this);

	        // Listen for captions menu index changes from the view
	        _model.on('change:captionsIndex', _captionsIndexHandler, this);

	        // Listen for provider subtitle tracks
	        //   ignoring provider "subtitlesTrackChanged" since index should be managed here
	        _model.mediaController.on('subtitlesTracks', function(e) {
	            if(! e.tracks.length) {
	                return;
	            }

	            // If we get webvtt captions, do not override with metadata captions
	            _model.mediaController.off('meta');

	            _tracks = [];
	            _tracksById = {};
	            _metaCuesByTextTime = {};
	            _unknownCount = 0;
	            var tracks = e.tracks || [];
	            for (var i = 0; i < tracks.length; i++) {
	                var track = tracks[i];
	                track.id = track.name;
	                track.label = track.name || track.language;
	                _addTrack(track);
	            }

	            var captionsMenu = _captionsMenu();
	            this.setCaptionsList(captionsMenu);
	            _selectDefaultIndex();
	        }, this);

	        // Append data to subtitle tracks
	        _model.mediaController.on('subtitlesTrackData', function(e) {
	            var track = _tracksById[e.name];
	            if (!track) {
	                // Player expects that tracks were received in 'subtitlesTracks' event
	                return;
	            }
	            track.source = e.source;
	            var cues = e.captions || [];
	            var sort = false;
	            for (var i=0; i<cues.length; i++) {
	                var cue = cues[i];
	                var cueId = e.name +'_'+ cue.begin +'_'+ cue.end;
	                if (!_metaCuesByTextTime[cueId]) {
	                    _metaCuesByTextTime[cueId] = cue;
	                    track.data.push(cue);
	                    sort = true;
	                }
	            }
	            if (sort) {
	                track.data.sort(function(a, b) {
	                    return a.begin - b.begin;
	                });
	            }
	        }, this);

	        // Listen for legacy Flash RTMP/MP4/608 metadata closed captions
	        _model.mediaController.on('meta', function(e) {
	            var metadata = e.metadata;
	            if (!metadata) {
	                return;
	            }
	            if (metadata.type === 'textdata') {
	                var track = _tracksById[metadata.trackid];
	                if (!track) {
	                    track = {
	                        kind: 'captions',
	                        id: metadata.trackid,
	                        data: []
	                    };
	                    _addTrack(track);
	                    var captionsMenu = _captionsMenu();
	                    this.setCaptionsList(captionsMenu);
	                }
	                var time = e.position || _model.get('position');
	                var cueId = '' + Math.round(time * 10) + '_' + metadata.text;
	                var cue = _metaCuesByTextTime[cueId];
	                if (!cue) {
	                    cue = {
	                        begin: time,
	                        text: metadata.text
	                    };
	                    _metaCuesByTextTime[cueId] = cue;
	                    track.data.push(cue);
	                }
	            }
	        }, this);

	        var _tracks = [],
	            _tracksById = {},
	            _metaCuesByTextTime = {},
	            _unknownCount = 0;

	        function _errorHandler(error) {
	            utils.log('CAPTIONS(' + error + ')');
	        }

	        /** Listen to playlist item updates. **/
	        function _itemHandler(model, item) {
	            _tracks = [];
	            _tracksById = {};
	            _metaCuesByTextTime = {};
	            _unknownCount = 0;

	            var tracks = item.tracks,
	                track, kind, i;

	            for (i = 0; i < tracks.length; i++) {
	                track = tracks[i];
	                kind = track.kind.toLowerCase();
	                if (kind === 'captions' || kind === 'subtitles') {
	                    if (track.file) {
	                        _addTrack(track);
	                        _load(track);
	                    } else if (track.data) {
	                        _addTrack(track);
	                    }
	                }
	            }

	            var captionsMenu = _captionsMenu();
	            this.setCaptionsList(captionsMenu);
	            _selectDefaultIndex();
	        }

	        function _captionsIndexHandler(model, captionsMenuIndex) {
	            var track = null;
	            if (captionsMenuIndex !== 0) {
	                track = _tracks[captionsMenuIndex-1];
	            }

	            model.set('captionsTrack', track);
	        }

	        function _addTrack(track) {
	            if(typeof track.id !== 'number') {
	                track.id = track.name || track.file || ('cc' + _tracks.length);
	            }
	            track.data = track.data || [];
	            if (!track.label) {
	                track.label = 'Unknown CC';
	                _unknownCount++;
	                if (_unknownCount > 1) {
	                    track.label += ' (' + _unknownCount + ')';
	                }
	            }
	            _tracks.push(track);
	            _tracksById[track.id] = track;
	        }

	        function _load(track) {
	            utils.ajax(track.file, function(xmlEvent) {
	                _xmlReadHandler(xmlEvent, track);
	            }, _xmlFailedHandler, true);
	        }

	        function _xmlReadHandler(xmlEvent, track) {
	            var rss = xmlEvent.responseXML ? xmlEvent.responseXML.firstChild : null,
	                status;

	            // IE9 sets the firstChild element to the root <xml> tag
	            if (rss) {
	                if (parsers.localName(rss) === 'xml') {
	                    rss = rss.nextSibling;
	                }
	                // Ignore all comments
	                while (rss.nodeType === rss.COMMENT_NODE) {
	                    rss = rss.nextSibling;
	                }
	            }
	            if (rss && parsers.localName(rss) === 'tt') {
	                status = utils.tryCatch(function() {
	                    track.data = dfxp(xmlEvent.responseXML);
	                });
	            } else {
	                status = utils.tryCatch(function() {
	                    track.data = srt(xmlEvent.responseText);
	                });
	            }
	            if (status instanceof utils.Error) {
	                _errorHandler(status.message + ': ' + track.file);
	            }
	        }

	        function _xmlFailedHandler(message) {
	            _errorHandler(message);
	        }

	        function _captionsMenu() {
	            var list = [{
	                id: 'off',
	                label: 'Off'
	            }];
	            for (var i = 0; i < _tracks.length; i++) {
	                list.push({
	                    id: _tracks[i].id,
	                    label: _tracks[i].label
	                });
	            }
	            return list;
	        }

	        function _selectDefaultIndex() {
	            var captionsMenuIndex = 0;
	            var label = _model.get('captionLabel');

	            // Because there is no explicit track for "Off"
	            //  it is the implied zeroth track
	            if (label === 'Off') {
	                _model.set('captionsIndex', 0);
	                return;
	            }

	            for (var i = 0; i < _tracks.length; i++) {
	                var track = _tracks[i];
	                if (label && label === track.label) {
	                    captionsMenuIndex = i + 1;
	                    break;
	                } else if (track['default'] || track.defaulttrack) {
	                    captionsMenuIndex = i + 1;
	                } else if (track.autoselect) {
	                    // TODO: auto select track by comparing track.language to system lang
	                }
	            }

	            // set the index without the side effect of storing the Off label in _selectCaptions
	            _model.set('captionsIndex', captionsMenuIndex);
	        }

	        this.getCurrentIndex = function() {
	            return _model.get('captionsIndex');
	        };

	        this.getCaptionsList = function() {
	            return _model.get('captionsList');
	        };

	        this.setCaptionsList = function(captionsMenu) {
	            _model.set('captionsList', captionsMenu);
	        };
	    };

	    return Captions;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 99 */
/*!****************************************!*\
  !*** ./src/js/parsers/captions/srt.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/helpers */ 45),
	    __webpack_require__(/*! utils/strings */ 49)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(utils, strings) {

	    /** Component that loads and parses an SRT file. **/

	    var _seconds = utils.seconds;

	    return function (data) {
	        // Trim whitespace and split the list by returns.
	        var _captions = [];
	        data = strings.trim(data);
	        var list = data.split('\r\n\r\n');
	        if (list.length === 1) {
	            list = data.split('\n\n');
	        }
	        for (var i = 0; i < list.length; i++) {
	            if (list[i] === 'WEBVTT') {
	                continue;
	            }
	            // Parse each entry
	            var entry = _entry(list[i]);
	            if (entry.text) {
	                _captions.push(entry);
	            }
	        }
	        if (!_captions.length) {
	            throw new Error('Invalid SRT file');
	        }
	        return _captions;
	    };


	    /** Parse a single captions entry. **/
	    function _entry(data) {
	        var entry = {};
	        var array = data.split('\r\n');
	        if (array.length === 1) {
	            array = data.split('\n');
	        }
	        var idx = 1;
	        if (array[0].indexOf(' --> ') > 0) {
	            idx = 0;
	        }
	        if (array.length > idx + 1 && array[idx + 1]) {
	            // This line contains the start and end.
	            var line = array[idx];
	            var index = line.indexOf(' --> ');
	            if (index > 0) {
	                entry.begin = _seconds(line.substr(0, index));
	                entry.end   = _seconds(line.substr(index + 5));
	                // Remaining lines contain the text
	                entry.text = array.slice(idx + 1).join('<br/>');
	            }
	        }
	        return entry;

	    }
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 100 */
/*!*****************************************!*\
  !*** ./src/js/parsers/captions/dfxp.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/strings */ 49)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(strings) {

	    /** Component that loads and parses an DFXP file. **/

	    var _seconds = strings.seconds;

	    return function (xmlDoc) {
	        validate(xmlDoc);
	        var _captions = [];
	        var paragraphs = xmlDoc.getElementsByTagName('p');
	        validate(paragraphs);
	        if (!paragraphs.length) {
	            paragraphs = xmlDoc.getElementsByTagName('tt:p');
	            if (!paragraphs.length) {
	                paragraphs = xmlDoc.getElementsByTagName('tts:p');
	            }
	        }

	        for (var i = 0; i < paragraphs.length; i++) {
	            var p = paragraphs[i];
	            var rawText = (p.innerHTML || p.textContent || p.text || '');
	            var text = strings.trim(rawText).replace(/>\s+</g, '><').replace(/tts?:/g, '');
	            if (text) {
	                var begin = p.getAttribute('begin');
	                var dur = p.getAttribute('dur');
	                var end = p.getAttribute('end');

	                var entry = {
	                    begin: _seconds(begin),
	                    text: text
	                };
	                if (end) {
	                    entry.end = _seconds(end);
	                } else if (dur) {
	                    entry.end = entry.begin + _seconds(dur);
	                }
	                _captions.push(entry);
	            }
	        }
	        if (!_captions.length) {
	            parseError();
	        }
	        return _captions;
	    };

	    function validate(object) {
	        if (!object) {
	            parseError();
	        }
	    }

	    function parseError() {
	        throw new Error('Invalid DFXP file');
	    }
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 101 */
/*!*************************************!*\
  !*** ./src/js/playlist/playlist.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! playlist/item */ 66),
	    __webpack_require__(/*! playlist/source */ 67),
	    __webpack_require__(/*! utils/underscore */ 42),
	    __webpack_require__(/*! providers/providers */ 75)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(PlaylistItem, Source, _, Providers) {

	    var Playlist = function (playlist) {
	        // Can be either an array of items or a single item.
	        playlist = (_.isArray(playlist) ? playlist : [playlist]);

	        return _.compact(_.map(playlist, PlaylistItem));
	    };

	    /** Go through the playlist and choose a single playable type to play; remove sources of a different type **/
	    Playlist.filterPlaylist = function(playlist, providers, androidhls, configDrm, preload) {
	        var list = [];

	        _.each(playlist, function(item) {
	            item = _.extend({}, item);
	            item.allSources = _formatSources(item.sources, androidhls,
	                item.drm || configDrm, item.preload || preload);
	            item.sources = _filterSources(item.allSources, providers);

	            if (!item.sources.length) {
	                return;
	            }

	            // include selected file in item for backwards compatibility
	            item.file = item.sources[0].file;

	            // set preload for the item, if it is defined
	            if (item.preload || preload) {
	                item.preload = item.preload || preload;
	            }

	            list.push(item);
	        });

	        return list;
	    };

	    var _formatSources = function(sources, androidhls, itemDrm, preload) {
	        return _.compact(_.map(sources, function(originalSource) {
	            if (! _.isObject(originalSource)) {
	                return;
	            }
	            if (androidhls !== undefined && androidhls !== null) {
	                originalSource.androidhls =  androidhls;
	            }

	            if (originalSource.drm || itemDrm) {
	                originalSource.drm = originalSource.drm || itemDrm;
	            }

	            if (originalSource.preload || preload) {
	                originalSource.preload = originalSource.preload || preload;
	            }

	            return Source(originalSource);
	        }));
	    };

	    // A playlist item may have multiple different sources, but we want to stick with one.
	    var _filterSources = function(sources, providers) {

	        // legacy plugin support
	        if (!providers || !providers.choose) {
	            providers = new Providers({primary : providers ? 'flash' : null});
	        }

	        var bestType = _chooseType(sources, providers);

	        return _.where(sources, {type : bestType});
	    };

	    //  Choose from the sources a type which matches our most preferred provider
	    function _chooseType(sources, providers) {
	        for (var i = 0; i < sources.length; i++) {
	            var source = sources[i];
	            var chosenProvider = providers.choose(source);
	            if (chosenProvider) {
	                return source.type;
	            }
	        }

	        return null;
	    }

	    return Playlist;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 102 */
/*!*************************************!*\
  !*** ./src/js/api/api-deprecate.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	], __WEBPACK_AMD_DEFINE_RESULT__ = function() {

	    return function(_api, _controller) {

	        // This file is only required for legacy support of JWPlayer 6

	        // Rename
	        _api.getPlaylistIndex = _api.getItem;

	        // jwNames
	        var legacy = {
	            jwPlay : _controller.play,
	            jwPause : _controller.pause,
	            jwSetMute : _controller.setMute,
	            jwLoad : _controller.load,
	            jwPlaylistItem : _controller.item,
	            jwGetAudioTracks : _controller.getAudioTracks,
	            jwDetachMedia : _controller.detachMedia,
	            jwAttachMedia : _controller.attachMedia,
	            jwAddEventListener : _controller.on,
	            jwRemoveEventListener : _controller.off,
	            jwStop : _controller.stop,
	            jwSeek : _controller.seek,
	            jwSetVolume : _controller.setVolume,
	            jwPlaylistNext : _controller.next,
	            jwPlaylistPrev : _controller.prev,
	            jwSetFullscreen : _controller.setFullscreen,
	            jwGetQualityLevels : _controller.getQualityLevels,
	            jwGetCurrentQuality : _controller.getCurrentQuality,
	            jwSetCurrentQuality : _controller.setCurrentQuality,
	            jwSetCurrentAudioTrack : _controller.setCurrentAudioTrack,
	            jwGetCurrentAudioTrack : _controller.getCurrentAudioTrack,
	            jwGetCaptionsList : _controller.getCaptionsList,
	            jwGetCurrentCaptions : _controller.getCurrentCaptions,
	            jwSetCurrentCaptions : _controller.setCurrentCaptions,
	            jwSetCues : _controller.setCues
	        };

	        _api.callInternal = function(method) {
	            console.log('You are using the deprecated callInternal method for ' + method);
	            var args = Array.prototype.slice.call(arguments, 1);
	            legacy[method].apply(_controller, args);
	        };
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 103 */
/*!*****************************!*\
  !*** ./src/js/view/view.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/helpers */ 45),
	    __webpack_require__(/*! events/events */ 43),
	    __webpack_require__(/*! utils/backbone.events */ 44),
	    __webpack_require__(/*! events/states */ 59),
	    __webpack_require__(/*! view/captionsrenderer */ 115),
	    __webpack_require__(/*! view/clickhandler */ 116),
	    __webpack_require__(/*! view/displayicon */ 117),
	    __webpack_require__(/*! view/dock */ 119),
	    __webpack_require__(/*! view/logo */ 104),
	    __webpack_require__(/*! view/controlbar */ 121),
	    __webpack_require__(/*! view/preview */ 135),
	    __webpack_require__(/*! view/rightclick */ 136),
	    __webpack_require__(/*! view/title */ 138),
	    __webpack_require__(/*! utils/underscore */ 42),
	    __webpack_require__(/*! handlebars-loader!templates/player.html */ 139)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(utils, events, Events, states,
	            CaptionsRenderer, ClickHandler, DisplayIcon, Dock, Logo,
	            Controlbar, Preview, RightClick, Title, _, playerTemplate) {

	    var _styles = utils.style,
	        _bounds = utils.bounds,
	        _isMobile = utils.isMobile(),
	        DOCUMENT_FULLSCREEN_EVENTS = [
	            'fullscreenchange',
	            'webkitfullscreenchange',
	            'mozfullscreenchange',
	            'MSFullscreenChange'
	        ];

	    var View = function(_api, _model) {
	        var _playerElement,
	            _controlsLayer,
	            _controlsTimeout = -1,
	            _timeoutDuration = _isMobile ? 4000 : 2000,
	            _controlBarOnlyHeight = 40,
	            _videoLayer,
	            _aspectRatioContainer,
	            _lastWidth,
	            _lastHeight,
	            _instreamModel,
	            _instreamMode = false,
	            _controlbar,
	            _preview,
	            _displayClickHandler,
	            _castDisplay,
	            _dock,
	            _logo,
	            _title,
	            _captionsRenderer,
	            _audioMode,
	            _showing = false,
	            _rightClickMenu,
	            _resizeMediaTimeout = -1,
	            _currentState,
	            _originalContainer,

	            // view fullscreen methods and ability
	            _requestFullscreen,
	            _exitFullscreen,
	            _elementSupportsFullscreen = false,

	            // Used to differentiate tab focus events from click events, because when
	            //  it is a click, the mouseDown event will occur immediately prior
	            _focusFromClick = false,

	            _this = _.extend(this, Events);

	        this.model = _model;
	        this.api = _api;

	        _playerElement = utils.createElement(playerTemplate({id: _model.get('id')}));

	        var width = _model.get('width'),
	            height = _model.get('height');

	        _styles(_playerElement, {
	            width: width.toString().indexOf('%') > 0 ? width : (width+ 'px'),
	            height: height.toString().indexOf('%') > 0 ? height : (height + 'px')
	        });

	        _requestFullscreen =
	            _playerElement.requestFullscreen ||
	            _playerElement.webkitRequestFullscreen ||
	            _playerElement.webkitRequestFullScreen ||
	            _playerElement.mozRequestFullScreen ||
	            _playerElement.msRequestFullscreen;
	        _exitFullscreen =
	            document.exitFullscreen ||
	            document.webkitExitFullscreen ||
	            document.webkitCancelFullScreen ||
	            document.mozCancelFullScreen ||
	            document.msExitFullscreen;
	        _elementSupportsFullscreen = _requestFullscreen && _exitFullscreen;

	        function adjustSeek(amount) {
	            var newSeek = utils.between(_model.get('position') + amount, 0, _model.get('duration'));
	            _api.seek(newSeek);
	        }

	        function adjustVolume(amount) {
	            var newVol = utils.between(_model.get('volume') + amount, 0, 100);
	            _api.setVolume(newVol);
	        }

	        function allowKeyHandling(evt) {
	            // If Meta keys return
	            if (evt.ctrlKey || evt.metaKey) {
	                return false;
	            }

	            // Controls may be disabled during share screens, or via API
	            if (!_model.get('controls')) {
	                return false;
	            }
	            return true;
	        }

	        function handleKeydown(evt) {
	            if (!allowKeyHandling(evt)) {
	                // Let event bubble upwards
	                return true;
	            }

	            // On keypress show the controlbar for a few seconds
	            if (!_instreamMode) {
	                _userActivity();
	            }

	            switch (evt.keyCode) {
	                case 27: // Esc
	                    _api.setFullscreen(false);
	                    break;
	                case 13: // enter
	                case 32: // space
	                    _api.play();
	                    break;
	                case 37: // left-arrow, if not adMode
	                    if (!_instreamMode) {
	                        adjustSeek(-5);
	                    }
	                    break;
	                case 39: // right-arrow, if not adMode
	                    if (!_instreamMode) {
	                        adjustSeek(5);
	                    }
	                    break;
	                case 38: // up-arrow
	                    adjustVolume(10);
	                    break;
	                case 40: // down-arrow
	                    adjustVolume(-10);
	                    break;
	                case 77: // m-key
	                    _api.setMute();
	                    break;
	                case 70: // f-key
	                    _api.setFullscreen();
	                    break;
	                default:
	                    if (evt.keyCode >= 48 && evt.keyCode <= 59) {
	                        // if 0-9 number key, move to n/10 of the percentage of the video
	                        var number = evt.keyCode - 48;
	                        var newSeek = (number / 10) * _model.get('duration');
	                        _api.seek(newSeek);
	                    }
	                    break;
	            }

	            if (/13|32|37|38|39|40/.test(evt.keyCode)) {
	                // Prevent keypresses from scrolling the screen
	                evt.preventDefault();
	                return false;
	            }
	        }

	        function handleMouseDown() {
	            _focusFromClick = true;

	            // After a click it no longer has 'tab-focus'
	            _this.trigger(events.JWPLAYER_VIEW_TAB_FOCUS, {
	                hasFocus: false
	            });
	        }

	        function handleFocus() {
	            var wasTabEvent = !_focusFromClick;
	            _focusFromClick = false;

	            if (wasTabEvent) {
	                _this.trigger(events.JWPLAYER_VIEW_TAB_FOCUS, {
	                    hasFocus: true
	                });
	            }

	            // On tab-focus, show the control bar for a few seconds
	            if (!_instreamMode) {
	                _userActivity();
	            }
	        }

	        function handleBlur() {
	            _focusFromClick = false;
	            _this.trigger(events.JWPLAYER_VIEW_TAB_FOCUS, {
	                hasFocus: false
	            });
	        }

	        function _responsiveListener() {
	            var bounds = _bounds(_playerElement),
	                containerWidth = Math.round(bounds.width),
	                containerHeight = Math.round(bounds.height);

	            if (!document.body.contains(_playerElement)) {
	                window.removeEventListener('resize', _responsiveListener);
	                if (_isMobile) {
	                    window.removeEventListener('orientationchange', _responsiveListener);
	                }
	            } else if (containerWidth && containerHeight) {
	                if (containerWidth !== _lastWidth || containerHeight !== _lastHeight) {
	                    _lastWidth = containerWidth;
	                    _lastHeight = containerHeight;
	                    clearTimeout(_resizeMediaTimeout);
	                    _resizeMediaTimeout = setTimeout(_resizeMedia, 50);

	                    _model.set('containerWidth', containerWidth);
	                    _model.set('containerHeight', containerHeight);
	                    _this.trigger(events.JWPLAYER_RESIZE, {
	                        width: containerWidth,
	                        height: containerHeight
	                    });
	                }
	            }
	            return bounds;
	        }


	        this.onChangeSkin = function(model, newSkin, oldSkin) {
	            if (oldSkin) {
	                utils.removeClass(_playerElement, 'jw-skin-'+oldSkin);
	            }
	            if (newSkin) {
	                utils.addClass(_playerElement, 'jw-skin-'+newSkin);
	            }
	        };


	        this.handleColorOverrides = function() {
	            var id = _model.get('id');

	            function addStyle(elements, attr, value) {
	                if (!value) {
	                    return;
	                }

	                elements = utils.prefix(elements, '#' + id + ' ');

	                var o = {};
	                o[attr] = value;
	                utils.css(elements.join(', '), o);
	            }

	            // We can assume that the user will define both an active and inactive color because otherwise it doesn't
	            // look good.
	            var activeColor = _model.get('skinColorActive'),
	                inactiveColor = _model.get('skinColorInactive'),
	                backgroundColor = _model.get('skinColorBackground');

	            // These will use standard style names for CSS since they are added directly to a style sheet
	            // Using background instead of background-color so we don't have to clear gradients with background-image

	            // Apply active color
	            addStyle([
	                // Toggle and menu button active colors
	                '.jw-toggle',
	                '.jw-button-color:hover'
	            ], 'color', activeColor);
	            addStyle([
	                // menu active option
	                '.jw-active-option',
	                // slider fill color
	                '.jw-progress',
	                '.jw-playlist-container .jw-option.jw-active-option',
	                '.jw-playlist-container .jw-option:hover'
	            ], 'background', activeColor);

	            // Apply inactive color
	            addStyle([
	                // text color of many ui elements
	                '.jw-text',
	                // menu option text
	                '.jw-option',
	                // controlbar button colors
	                '.jw-button-color',
	                // toggle button
	                '.jw-toggle.jw-off',
	                '.jw-tooltip-title',
	                '.jw-skip .jw-skip-icon',
	                '.jw-playlist-container .jw-icon'
	            ], 'color', inactiveColor);
	            addStyle([
	                // slider children
	                '.jw-cue',
	                '.jw-knob'
	            ], 'background', inactiveColor);
	            addStyle([
	                '.jw-playlist-container .jw-option'
	            ], 'border-bottom-color', inactiveColor);

	            // Apply background color
	            addStyle([
	                // general background color
	                '.jw-background-color',
	                '.jw-tooltip-title',
	                '.jw-playlist',
	                '.jw-playlist-container .jw-option'
	            ], 'background', backgroundColor);
	            addStyle([
	                // area around scrollbar on the playlist.  skin fix required to remove
	                '.jw-playlist-container ::-webkit-scrollbar'
	            ], 'border-color', backgroundColor);
	        };

	        this.setup = function() {

	            this.handleColorOverrides();

	            // Hide control elements until skin is loaded
	            if (_model.get('skin-loading') === true) {
	                utils.addClass(_playerElement, 'jw-flag-skin-loading');
	                _model.once('change:skin-loading', function() {
	                    utils.removeClass(_playerElement, 'jw-flag-skin-loading');
	                });
	            }

	            this.onChangeSkin(_model, _model.get('skin'), '');
	            _model.on('change:skin', this.onChangeSkin, this);

	            _videoLayer = _playerElement.getElementsByClassName('jw-media')[0];

	            _controlsLayer = _playerElement.getElementsByClassName('jw-controls')[0];
	            _aspectRatioContainer = _playerElement.getElementsByClassName('jw-aspect')[0];

	            var previewElem = _playerElement.getElementsByClassName('jw-preview')[0];
	            _preview = new Preview(_model);
	            _preview.setup(previewElem);

	            var _titleElement = _playerElement.getElementsByClassName('jw-title')[0];
	            _title = new Title(_model);
	            _title.setup(_titleElement);

	            _setupControls();

	            // call user activity to set timeout for control to fade
	            _userActivity();

	            // adds video tag to video layer
	            _model.set('mediaContainer', _videoLayer);

	            // Native fullscreen (coming through from the provider)
	            _model.mediaController.on('fullscreenchange', _fullscreenChangeHandler);
	            // DOM fullscreen
	            for (var i = DOCUMENT_FULLSCREEN_EVENTS.length; i--;) {
	                document.addEventListener(DOCUMENT_FULLSCREEN_EVENTS[i], _fullscreenChangeHandler, false);
	            }

	            window.removeEventListener('resize', _responsiveListener);
	            window.addEventListener('resize', _responsiveListener, false);
	            if (_isMobile) {
	                window.removeEventListener('orientationchange', _responsiveListener);
	                window.addEventListener('orientationchange', _responsiveListener, false);
	            }

	            _model.on('change:errorEvent', _errorHandler);

	            _model.on('change:controls', _onChangeControls);
	            _onChangeControls(_model, _model.get('controls'));
	            _model.on('change:state', _stateHandler);
	            _model.on('change:duration', _setLiveMode, this);

	            _model.on('change:flashBlocked', _onChangeFlashBlocked);
	            _onChangeFlashBlocked(_model, _model.get('flashBlocked'));

	            _api.onPlaylistComplete(_playlistCompleteHandler);
	            _api.onPlaylistItem(_playlistItemHandler);

	            _model.on('change:castAvailable', _onCastAvailable);
	            _onCastAvailable(_model, _model.get('castAvailable'));
	            _model.on('change:castActive', _onCastActive);
	            _onCastActive(_model, _model.get('castActive'));

	            // set initial state
	            if(_model.get('stretching')){
	                _onStretchChange(_model, _model.get('stretching'));
	            }
	            // watch for changes
	            _model.on('change:stretching', _onStretchChange);

	            _stateHandler(_model, states.IDLE);
	            _model.on('change:fullscreen', _fullscreen);

	            if (!_isMobile) {
	                _displayClickHandler.element().addEventListener('mouseout', _userActivity, false);
	                _displayClickHandler.element().addEventListener('mousemove', _userActivity, false);
	            }
	            _componentFadeListeners(_controlbar);
	            _componentFadeListeners(_logo);

	            if (_model.get('aspectratio')) {
	                utils.addClass(_playerElement, 'jw-flag-aspect-mode');
	                utils.style(_aspectRatioContainer, { 'padding-top': _model.get('aspectratio') });
	            }

	            // This setTimeout allows the player to actually get embedded into the player
	            _api.on(events.JWPLAYER_READY, function() {
	                // Initialize values for containerWidth and containerHeight
	                _responsiveListener();

	                _resize(_model.get('width'), _model.get('height'));
	            });
	        };

	        function _onCastActive(model, val) {
	            // if undefined it will simply alternate
	            val = val || false;

	            utils.toggleClass(_playerElement, 'jw-flag-casting', val);
	        }
	        function _onCastAvailable(model, val) {
	            utils.toggleClass(_playerElement, 'jw-flag-cast-available', val);
	            utils.toggleClass(_controlsLayer, 'jw-flag-cast-available', val);
	        }

	        function _onStretchChange(model, newVal, oldVal) {
	            if(oldVal){
	                utils.removeClass(_playerElement, 'jw-stretch-' + oldVal);
	            }
	            utils.addClass(_playerElement, 'jw-stretch-' + newVal);
	        }

	        function _onCompactUIChange(model, newVal) {
	            utils.toggleClass(_playerElement, 'jw-flag-compact-player', newVal);
	        }

	        function _componentFadeListeners(comp) {
	            if (comp && !_isMobile) {
	                comp.element().addEventListener('mousemove', _overControlElement, false);
	                comp.element().addEventListener('mouseout', _offControlElement, false);
	            }
	        }

	        function _touchHandler() {
	            if( (_model.get('state') === states.IDLE ||
	                _model.get('state') === states.COMPLETE ||
	                _model.get('state') === states.PAUSED) &&
	                _model.get('controls')) {
	                _api.play();
	            }

	            // Toggle visibility of the controls when clicking the media or play icon
	            if(!_showing) {
	                _userActivity();
	            } else {
	                _userInactive();
	            }
	        }

	        function _logoClickHandler(evt){
	            if (!evt.link) {
	                //_togglePlay();
	                if (_model.get('controls')) {
	                    _api.play();
	                }
	            } else {
	                _api.pause(true);
	                _api.setFullscreen(false);
	                window.open(evt.link, evt.linktarget);
	            }
	        }

	        function _overControlElement() {
	            // Over controlbar, timeout resumed when off controlbar
	            clearTimeout(_controlsTimeout);
	        }

	        function _offControlElement() {
	            _userActivity();
	        }

	        function forward(evt) {
	            _this.trigger(evt.type, evt);
	        }

	        function _onChangeFlashBlocked(model, isBlocked) {
	            if (isBlocked) {
	                if (_rightClickMenu) {
	                    _rightClickMenu.destroy();
	                }
	                utils.addClass(_playerElement, 'jw-flag-flash-blocked');
	            } else {
	                if (_rightClickMenu) {
	                    _rightClickMenu.setup(_model, _playerElement, _playerElement);
	                }
	                utils.removeClass(_playerElement,'jw-flag-flash-blocked');
	            }
	        }

	        var _onChangeControls = function(model, bool) {
	            if (bool) {
	                var state = (_instreamMode) ? _instreamModel.get('state') : _model.get('state');
	                // model may be instream or normal depending on who triggers this
	                _stateHandler(model, state);
	            }

	            utils.toggleClass(_playerElement, 'jw-flag-controls-disabled', !bool);
	        };

	        function _doubleClickFullscreen() {
	            if(_model.get('controls')) {
	                _api.setFullscreen();
	            }
	        }

	        function _setupControls() {

	            _displayClickHandler = new ClickHandler(_model, _videoLayer);
	            _displayClickHandler.on('click', function() {
	                forward({type : events.JWPLAYER_DISPLAY_CLICK});
	                if(_model.get('controls')) {
	                    _api.play();
	                }
	            });
	            _displayClickHandler.on('tap', function() {
	                forward({type : events.JWPLAYER_DISPLAY_CLICK});
	                _touchHandler();
	            });
	            _displayClickHandler.on('doubleClick', _doubleClickFullscreen);
	            
	            var displayIcon = new DisplayIcon(_model);
	            //toggle playback
	            displayIcon.on('click', function() {
	                forward({type : events.JWPLAYER_DISPLAY_CLICK});
	                _api.play();
	            });
	            displayIcon.on('tap', function() {
	                forward({type : events.JWPLAYER_DISPLAY_CLICK});
	                _touchHandler();
	            });

	            // make displayIcon clickthrough on chrome for flash to avoid power safe throttle
	            if (utils.isChrome()) {
	                displayIcon.el.addEventListener('mousedown', function() {
	                    var provider = _model.getVideo();
	                    var isFlash = (provider && provider.getName().name.indexOf('flash') === 0);

	                    if (!isFlash) {
	                        return;
	                    }

	                    var resetPointerEvents = function() {
	                        document.removeEventListener('mouseup', resetPointerEvents);
	                        displayIcon.el.style.pointerEvents = 'auto';
	                    };

	                    this.style.pointerEvents = 'none';
	                    document.addEventListener('mouseup', resetPointerEvents);
	                });
	            }
	            _controlsLayer.appendChild(displayIcon.element());

	            _dock = new Dock(_model);

	            _logo = new Logo(_model);
	            _logo.on(events.JWPLAYER_LOGO_CLICK, _logoClickHandler);

	            var rightside = document.createElement('div');
	            rightside.className = 'jw-controls-right jw-reset';
	            if (_model.get('logo')) {
	                rightside.appendChild(_logo.element());
	            }
	            rightside.appendChild(_dock.element());
	            _controlsLayer.appendChild(rightside);

	            // captions rendering
	            _captionsRenderer = new CaptionsRenderer(_model);
	            _captionsRenderer.setup(_model.get('captions'));

	            // captions should be place behind controls, and not hidden when controls are hidden
	            _controlsLayer.parentNode.insertBefore(_captionsRenderer.element(), _title.element());

	            // Touch UI mode when we're on mobile and we have a percentage height or we can fit the large UI in
	            var height = _model.get('height');
	            if (_isMobile && (typeof height === 'string' || height >= _controlBarOnlyHeight * 1.5)){
	                utils.addClass(_playerElement, 'jw-flag-touch');
	            } else {
	                _rightClickMenu = new RightClick();
	                _rightClickMenu.setup(_model, _playerElement, _playerElement);
	            }

	            _controlbar = new Controlbar(_api, _model);
	            _controlbar.on(events.JWPLAYER_USER_ACTION, _userActivity);
	            _model.on('change:scrubbing', _dragging);
	            _model.on('change:compactUI', _onCompactUIChange);

	            _controlsLayer.appendChild(_controlbar.element());

	            _playerElement.onfocusin = handleFocus;
	            _playerElement.onfocusout = handleBlur;
	            _playerElement.addEventListener('focus', handleFocus);
	            _playerElement.addEventListener('blur', handleBlur);
	            _playerElement.addEventListener('keydown', handleKeydown);
	            _playerElement.onmousedown = handleMouseDown;
	        }

	        function stopDragging(model) {
	            if (model.get('state') === states.PAUSED) {
	                model.once('change:state', stopDragging);
	                return;
	            }

	            // Handle the case where they begin seeking again before the last seek completes
	            if (model.get('scrubbing') === false) {
	                utils.removeClass(_playerElement, 'jw-flag-dragging');
	            }
	        }

	        function _dragging(model, val) {
	            model.off('change:state', stopDragging);

	            if (val) {
	                utils.addClass(_playerElement, 'jw-flag-dragging');
	            } else {
	                stopDragging(model);
	            }
	        }


	        // Perform the switch to fullscreen
	        var _fullscreen = function(model, state) {

	            // If it supports DOM fullscreen
	            var provider = _model.getVideo();
	            if (_elementSupportsFullscreen) {
	                if (state) {
	                    _requestFullscreen.apply(_playerElement);
	                } else {
	                    _exitFullscreen.apply(document);
	                }
	                _toggleDOMFullscreen(_playerElement, state);
	            } else {
	                if (utils.isIE()) {
	                    _toggleDOMFullscreen(_playerElement, state);
	                } else {
	                    // else use native fullscreen
	                    if (_instreamModel && _instreamModel.getVideo()) {
	                       _instreamModel.getVideo().setFullscreen(state);
	                    }
	                    provider.setFullscreen(state);
	                }
	            }
	            // pass fullscreen state to Flash provider
	            // provider.getName() is the same as _api.getProvider() or _model.get('provider')
	            if (provider && provider.getName().name.indexOf('flash') === 0) {
	                provider.setFullscreen(state);
	            }
	        };


	        /**
	         * Resize the player
	         */
	        function _resize(width, height, resetAspectMode) {
	            var className = _playerElement.className,
	                playerStyle;

	            // when jwResize is called remove aspectMode and force layout
	            resetAspectMode = !!resetAspectMode;
	            if (resetAspectMode) {
	                className = className.replace(/\s*aspectMode/, '');
	                if (_playerElement.className !== className) {
	                    _playerElement.className = className;
	                }
	                utils.style(_playerElement, {
	                    display: 'block'
	                }, resetAspectMode);
	            }

	            if (utils.exists(width) && utils.exists(height)) {
	                _model.set('width', width);
	                _model.set('height', height);
	            }

	            playerStyle = {
	                width: width
	            };
	            if (!utils.hasClass(_playerElement, 'jw-flag-aspect-mode')) {
	                playerStyle.height = height;
	            }
	            _styles(_playerElement, playerStyle, true);

	            if (_logo) {
	                _logo.offset(_controlbar && _logo.position().indexOf('bottom') >= 0 ?
	                    _controlbar.element().clientHeight : 0);
	            }

	            _checkAudioMode(height);

	            // pass width, height from jwResize if present
	            _resizeMedia(width, height);
	        }

	        function _checkAudioMode(height) {
	            _audioMode = _isAudioMode(height);
	            if (_controlbar) {
	                if (!_audioMode) {
	                    var model = _instreamMode ? _instreamModel : _model;
	                    _stateHandler(model, model.get('state'));
	                }
	            }

	            utils.toggleClass(_playerElement, 'jw-flag-audio-player', _audioMode);
	        }

	        function _isAudioMode(height) {
	            if (_model.get('aspectratio')) {
	                return false;
	            }
	            if (_.isString(height) && height.indexOf('%') > -1) {
	                return false;
	            }

	            var checkHeight = (_.isNumber(height) ? height : _model.get('containerHeight'));

	            return _isControlBarOnly(checkHeight);
	        }

	        function _isControlBarOnly(verticalPixels) {
	            // 1.75 so there's a little wiggle room on mobile for the large UI to fit in
	            return verticalPixels && verticalPixels <= (_controlBarOnlyHeight * ((_isMobile)?1.75:1));
	        }

	        function _resizeMedia(width, height) {
	            if (!width || isNaN(Number(width))) {
	                if (!_videoLayer) {
	                    return;
	                }
	                width = _videoLayer.clientWidth;
	            }
	            if (!height || isNaN(Number(height))) {
	                if (!_videoLayer) {
	                    return;
	                }
	                height = _videoLayer.clientHeight;
	            }

	            //IE9 Fake Full Screen Fix
	            if (utils.isMSIE(9) && document.all && !window.atob) {
	                width = height = '100%';
	            }

	            var provider = _model.getVideo();
	            if (!provider) {
	                return;
	            }
	            var transformScale = provider.resize(width, height, _model.get('stretching'));

	            // poll resizing if video is transformed
	            if (transformScale) {
	                clearTimeout(_resizeMediaTimeout);
	                _resizeMediaTimeout = setTimeout(_resizeMedia, 250);
	            }
	            _captionsRenderer.resize();

	            _controlbar.checkCompactMode(width);
	        }

	        this.resize = function(width, height) {
	            var resetAspectMode = true;
	            _resize(width, height, resetAspectMode);
	            _responsiveListener();
	        };
	        this.resizeMedia = _resizeMedia;

	        this.reset = function(){
	            if (document.contains(_playerElement)) {
	                _playerElement.parentNode.replaceChild(_originalContainer, _playerElement);
	            }
	            utils.emptyElement(_playerElement);
	        };

	        /**
	         * Return whether or not we're in native fullscreen
	         */
	        function _isNativeFullscreen() {
	            if (_elementSupportsFullscreen) {
	                var fsElement = document.fullscreenElement ||
	                    document.webkitCurrentFullScreenElement ||
	                    document.mozFullScreenElement ||
	                    document.msFullscreenElement;
	                return !!(fsElement && fsElement.id === _model.get('id'));
	            }
	            // if player element view fullscreen not available, return video fullscreen state
	            return  _instreamMode ? _instreamModel.getVideo().getFullScreen() :
	                        _model.getVideo().getFullScreen();
	        }


	        function _fullscreenChangeHandler(event) {
	            var modelState = _model.get('fullscreen');
	            var newState = (event.jwstate !== undefined) ? event.jwstate : _isNativeFullscreen();

	            // If fullscreen was triggered by something other than the player
	            //  then we want to sync up our internal state
	            if (modelState !== newState) {
	                _model.set('fullscreen', newState);
	            }

	            clearTimeout(_resizeMediaTimeout);
	            _resizeMediaTimeout = setTimeout(_resizeMedia, 200);
	        }

	        function _toggleDOMFullscreen(playerElement, fullscreenState) {
	            utils.removeClass(playerElement, 'jw-flag-fullscreen');
	            if (fullscreenState) {
	                utils.addClass(playerElement, 'jw-flag-fullscreen');
	                _styles(document.body, {
	                    'overflow-y': 'hidden'
	                });

	                // On going fullscreen we want the control bar to fade after a few seconds
	                _userActivity();
	            } else {
	                _styles(document.body, {
	                    'overflow-y': ''
	                });
	            }

	            _resizeMedia();
	        }

	        function _userInactive() {
	            _showing = false;

	            clearTimeout(_controlsTimeout);
	            _controlbar.hideComponents();
	            utils.addClass(_playerElement, 'jw-flag-user-inactive');
	        }

	        function _userActivity() {
	            if(!_showing){
	                utils.removeClass(_playerElement, 'jw-flag-user-inactive');
	                _controlbar.checkCompactMode(_videoLayer.clientWidth);
	            }

	            _showing = true;

	            clearTimeout(_controlsTimeout);
	            _controlsTimeout = setTimeout(_userInactive, _timeoutDuration);
	        }

	        function _playlistCompleteHandler() {
	            _api.setFullscreen(false);
	        }

	        function _playlistItemHandler() {
	            // update display title
	            if (_castDisplay) {
	                _castDisplay.setState(_model.get('state'));
	            }
	            _onMediaTypeChange(_model, _model.mediaModel.get('mediaType'));
	            _model.mediaModel.on('change:mediaType', _onMediaTypeChange, this);
	        }

	        function _onMediaTypeChange(model, val) {
	            var isAudioFile = (val ==='audio');
	            utils.toggleClass(_playerElement, 'jw-flag-media-audio', isAudioFile);
	        }

	        function _setLiveMode(model, duration){
	            var live = utils.adaptiveType(duration) === 'LIVE';
	            utils.toggleClass(_playerElement, 'jw-flag-live', live);
	            _this.setAltText((live) ? 'Live Broadcast' : '');
	        }

	        function _errorHandler(model, evt) {
	            if (!evt) {
	                _title.playlistItem(model, model.get('playlistItem'));
	                return;
	            }
	            if (evt.name) {
	                _title.updateText(evt.name, evt.message);
	            } else {
	                _title.updateText(evt.message, '');
	            }
	        }

	        function _isCasting() {
	            var provider = _model.getVideo();
	            if (provider) {
	                return provider.isCaster;
	            }
	            return false;
	        }


	        function _stateHandler(model, state) {
	            utils.removeClass(_playerElement, 'jw-state-' + _currentState);
	            utils.addClass(_playerElement, 'jw-state-' + state);
	            _currentState = state;
	            // cast.display
	            if (_isCasting()) {
	                // TODO: needs to be done in the provider.setVisibility
	                utils.addClass(_videoLayer, 'jw-media-show');

	                return;
	            }
	            // player display
	            switch (state) {
	                case states.PLAYING:
	                    _resizeMedia();
	                    break;
	                case states.PAUSED:
	                    _userActivity();
	                    break;
	            }
	        }

	        this.setupInstream = function(instreamModel) {
	            this.instreamModel = _instreamModel = instreamModel;
	            _instreamModel.on('change:controls', _onChangeControls, this);
	            _instreamModel.on('change:state', _stateHandler, this);

	            _instreamMode = true;
	            utils.addClass(_playerElement, 'jw-flag-ads');

	            // trigger _userActivity to display the UI temporarily for the start of the ad
	            _userActivity();
	        };

	        this.setAltText = function(text) {
	            _controlbar.setAltText(text);
	        };

	        this.useExternalControls = function() {
	            utils.addClass(_playerElement, 'jw-flag-ads-hide-controls');
	        };

	        this.destroyInstream = function() {
	            _instreamMode = false;
	            if (_instreamModel) {
	                _instreamModel.off(null, null, this);
	                _instreamModel = null;
	            }
	            this.setAltText('');
	            utils.removeClass(_playerElement, 'jw-flag-ads');
	            utils.removeClass(_playerElement, 'jw-flag-ads-hide-controls');
	            if (_model.getVideo) {
	                var provider = _model.getVideo();
	                provider.setContainer(_videoLayer);
	            }
	            _setLiveMode(_model, _model.get('duration'));
	            // reset display click handler
	            _displayClickHandler.revertAlternateClickHandlers();
	        };

	        this.addCues = function(cues) {
	            if (_controlbar) {
	                _controlbar.addCues(cues);
	            }
	        };

	        this.clickHandler = function() {
	            return _displayClickHandler;
	        };

	        this.controlsContainer = function() {
	            return _controlsLayer;
	        };

	        this.getContainer = this.element = function() {
	            return _playerElement;
	        };

	        this.getSafeRegion = function(includeCB) {
	            var bounds = {
	                x: 0,
	                y: 0,
	                width : _model.get('containerWidth') || 0,
	                height : _model.get('containerHeight') || 0
	            };

	            // If we are using a dock, subtract that from the top
	            var dockButtons = _model.get('dock');
	            if (dockButtons && dockButtons.length && _model.get('controls')) {
	                bounds.y = _dock.element().clientHeight;
	                bounds.height -= bounds.y;
	            }

	            // Subtract controlbar from the bottom when using one
	            includeCB = includeCB || !utils.exists(includeCB);
	            if (includeCB && _model.get('controls')) {
	                bounds.height -= _controlbar.element().clientHeight;
	            }

	            return bounds;
	        };

	        this.destroy = function() {
	            window.removeEventListener('resize', _responsiveListener);
	            window.removeEventListener('orientationchange', _responsiveListener);
	            for (var i = DOCUMENT_FULLSCREEN_EVENTS.length; i--;) {
	                document.removeEventListener(DOCUMENT_FULLSCREEN_EVENTS[i], _fullscreenChangeHandler, false);
	            }
	            if (_model.mediaController) {
	                _model.mediaController.off('fullscreenchange', _fullscreenChangeHandler);
	            }
	            _playerElement.removeEventListener('keydown', handleKeydown, false);
	            if (_rightClickMenu) {
	                _rightClickMenu.destroy();
	            }
	            if (_castDisplay) {
	                _model.off('change:state', _castDisplay.statusDelegate);
	                _castDisplay.destroy();
	                _castDisplay = null;
	            }
	            if (_controlsLayer) {
	                _displayClickHandler.element().removeEventListener('mousemove', _userActivity);
	                _displayClickHandler.element().removeEventListener('mouseout', _userActivity);
	            }
	            if (_instreamMode) {
	                this.destroyInstream();
	            }
	            utils.clearCss('#'+_model.get('id'));
	        };
	    };

	    return View;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 104 */
/*!*****************************!*\
  !*** ./src/js/view/logo.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/ui */ 105),
	    __webpack_require__(/*! utils/helpers */ 45),
	    __webpack_require__(/*! events/events */ 43),
	    __webpack_require__(/*! utils/underscore */ 42),
	    __webpack_require__(/*! utils/backbone.events */ 44),
	    __webpack_require__(/*! handlebars-loader!templates/logo.html */ 106)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(UI, utils, events, _, Events, logoTemplate) {
	    var _styles = utils.style;

	    var LogoDefaults = {
	        linktarget: '_blank',
	        margin: 8,
	        hide: false,
	        position: 'top-right'
	    };

	    var Logo = function(_model) {
	        var _this = this,
	            _logo,
	            _settings,
	            _logoConfig = _.extend({}, _model.get('logo'));

	        _.extend(this, Events);

	        function _setup() {
	            _settings = _.extend({}, LogoDefaults, _logoConfig);
	            _settings.hide = (_settings.hide.toString() === 'true');

	            _setupDisplayElements();
	        }

	        function _setupDisplayElements() {
	            _logo = utils.createElement(logoTemplate({
	                file: _settings.file
	            }));

	            if (!_settings.file) {
	                return;
	            }

	            if (_settings.hide) {
	                // This causes it to fade out when jw-flag-user-inactive
	                utils.addClass(_logo, 'jw-hide');
	            }

	            if(_settings.position !== LogoDefaults.position || _settings.margin !== LogoDefaults.margin){
	                var positions = (/(\w+)-(\w+)/).exec(_settings.position),
	                    style = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };

	                if (positions.length === 3){
	                    style[positions[1]] = _settings.margin;
	                    style[positions[2]] = _settings.margin;

	                    _styles(_logo, style);
	                }
	            }

	            var logoInteractHandler = new UI(_logo);
	            logoInteractHandler.on('click tap', _clickHandler);
	        }

	        this.element = function() {
	            return _logo;
	        };

	        this.offset = function(offset) {
	            _styles(_logo, {
	                marginBottom: offset
	            });
	        };

	        this.position = function() {
	            return _settings.position;
	        };

	        this.margin = function() {
	            return parseInt(_settings.margin, 10);
	        };

	        function _clickHandler(evt) {
	            if (utils.exists(evt) && evt.stopPropagation) {
	                evt.stopPropagation();
	            }

	            _this.trigger(events.JWPLAYER_LOGO_CLICK, {
	                link: _settings.link,
	                linktarget: _settings.linktarget
	            });

	        }

	        _setup();

	        return this;
	    };

	    return Logo;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 105 */
/*!****************************!*\
  !*** ./src/js/utils/ui.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/backbone.events */ 44),
	    __webpack_require__(/*! events/events */ 43),
	    __webpack_require__(/*! utils/underscore */ 42),
	    __webpack_require__(/*! utils/helpers */ 45)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(Events, events, _, utils) {
	    var _usePointerEvents = !_.isUndefined(window.PointerEvent);
	    var _useTouchEvents = !_usePointerEvents && utils.isMobile();
	    var _useMouseEvents = !_usePointerEvents && ! _useTouchEvents;
	    var _isOSXFirefox = utils.isFF() && utils.isOSX();

	    function getCoord(e, c) {
	        return /touch/.test(e.type) ? (e.originalEvent || e).changedTouches[0]['page' + c] : e['page' + c];
	    }

	    function isRightClick(evt) {
	        var e = evt || window.event;

	        if(!(evt instanceof MouseEvent)){
	            return false;
	        }

	        if ('which' in e) {
	            // Gecko (Firefox), WebKit (Safari/Chrome) & Opera
	            return (e.which === 3);
	        } else if ('button' in e) {
	            // IE and Opera
	            return (e.button === 2);
	        }

	        return false;
	    }

	    function normalizeUIEvent(type, srcEvent, target) {
	        var source;
	        if(srcEvent instanceof MouseEvent || (!srcEvent.touches && !srcEvent.changedTouches)) {
	            source = srcEvent;
	        } else {
	            if (srcEvent.touches && srcEvent.touches.length) {
	                source = srcEvent.touches[0];
	            } else {
	                source = srcEvent.changedTouches[0];
	            }
	        }
	        return {
	            type: type,
	            target: srcEvent.target,
	            currentTarget: target,
	            pageX: source.pageX,
	            pageY: source.pageY
	        };
	    }

	    // Preventdefault to prevent click events
	    function preventDefault(evt) {
	        // Because sendEvent from utils.eventdispatcher clones evt objects instead of passing them
	        //  we cannot call evt.preventDefault() on them
	        if (! (evt instanceof MouseEvent) && ! (evt instanceof window.TouchEvent)) {
	            return;
	        }

	        if (evt.preventManipulation) {
	            evt.preventManipulation();
	        }
	        // When cancelable is false, it means the page is likely scrolling
	        if (evt.cancelable && evt.preventDefault) {
	            evt.preventDefault();
	        }
	    }

	    var UI = function (elem, options) {
	        var _elem = elem,
	            _hasMoved = false,
	            _startX = 0,
	            _startY = 0,
	            _lastClickTime = 0,
	            _doubleClickDelay = 300,
	            _touchListenerTarget,
	            _pointerId;

	        options = options || {};

	        // If its not mobile, add mouse listener.  Add touch listeners so touch devices that aren't Android or iOS
	        // (windows phones) still get listeners just in case they want to use them.
	        if(_usePointerEvents) {
	            elem.addEventListener('pointerdown', interactStartHandler);
	            if(options.useHover){
	                elem.addEventListener('pointerover', overHandler);
	                elem.addEventListener('pointerout', outHandler);
	            }
	        } else if(_useMouseEvents){
	            elem.addEventListener('mousedown', interactStartHandler);
	            if(options.useHover) {
	                elem.addEventListener('mouseover', overHandler);
	                elem.addEventListener('mouseout', outHandler);
	            }
	        }

	        // Always add this, in case we don't properly identify the device as mobile
	        elem.addEventListener('touchstart', interactStartHandler);

	        // overHandler and outHandler not assigned in touch situations
	        function overHandler(evt){
	            if (_useMouseEvents || (_usePointerEvents && evt.pointerType !== 'touch')) {
	                triggerEvent(events.touchEvents.OVER, evt);
	            }
	        }

	        function outHandler(evt){
	            // elementFromPoint to handle an issue where setPointerCapture is causing a pointerout event
	            if (_useMouseEvents || (_usePointerEvents && evt.pointerType !== 'touch' &&
	                !elem.contains(document.elementFromPoint(evt.x, evt.y)))) {
	                triggerEvent(events.touchEvents.OUT, evt);
	            }
	        }

	        function interactStartHandler(evt) {
	            _touchListenerTarget = evt.target;
	            _startX = getCoord(evt, 'X');
	            _startY = getCoord(evt, 'Y');

	            if(!isRightClick(evt)){
	                if(_usePointerEvents){
	                    if(evt.isPrimary){
	                        if(options.preventScrolling){
	                            _pointerId = evt.pointerId;
	                            elem.setPointerCapture(_pointerId);
	                        }
	                        elem.addEventListener('pointermove', interactDragHandler);
	                        elem.addEventListener('pointerup', interactEndHandler);
	                        elem.addEventListener('pointercancel', interactEndHandler);
	                    }
	                } else if(_useMouseEvents){
	                    document.addEventListener('mousemove', interactDragHandler);

	                    // Handle clicks in OSX Firefox over Flash 'object'
	                    if (_isOSXFirefox && evt.target.nodeName.toLowerCase() === 'object') {
	                        elem.addEventListener('click', interactEndHandler);
	                    } else {
	                        document.addEventListener('mouseup', interactEndHandler);
	                    }
	                }

	                _touchListenerTarget.addEventListener('touchmove', interactDragHandler);
	                _touchListenerTarget.addEventListener('touchend', interactEndHandler);
	                _touchListenerTarget.addEventListener('touchcancel', interactEndHandler);
	            }
	        }

	        function interactDragHandler(evt) {
	            var touchEvents = events.touchEvents;
	            var movementThreshhold = 6;

	            if (_hasMoved) {
	                triggerEvent(touchEvents.DRAG, evt);
	            } else {
	                var endX = getCoord(evt, 'X');
	                var endY = getCoord(evt, 'Y');
	                var moveX = endX - _startX;
	                var moveY = endY - _startY;
	                if (moveX * moveX + moveY * moveY > movementThreshhold * movementThreshhold) {
	                    triggerEvent(touchEvents.DRAG_START, evt);
	                    _hasMoved = true;
	                    triggerEvent(touchEvents.DRAG, evt);
	                }
	            }

	            // Prevent scrolling the screen dragging while dragging on mobile.
	            if (options.preventScrolling) {
	                preventDefault(evt);
	            }
	        }

	        function interactEndHandler(evt) {
	            var touchEvents = events.touchEvents;

	            if(_usePointerEvents) {
	                if (options.preventScrolling) {
	                    elem.releasePointerCapture(_pointerId);
	                }
	                elem.removeEventListener('pointermove', interactDragHandler);
	                elem.removeEventListener('pointercancel', interactEndHandler);
	                elem.removeEventListener('pointerup', interactEndHandler);
	            } else if (_useMouseEvents) {
	                document.removeEventListener('mousemove', interactDragHandler);
	                document.removeEventListener('mouseup', interactEndHandler);
	            }

	            _touchListenerTarget.removeEventListener('touchmove', interactDragHandler);
	            _touchListenerTarget.removeEventListener('touchcancel', interactEndHandler);
	            _touchListenerTarget.removeEventListener('touchend', interactEndHandler);

	            if (_hasMoved) {
	                triggerEvent(touchEvents.DRAG_END, evt);
	            } else {
	                if(!options.directSelect || evt.target === elem) {
	                    if (_usePointerEvents && evt instanceof window.PointerEvent) {
	                        if (evt.pointerType === 'touch') {
	                            triggerEvent(touchEvents.TAP, evt);
	                        } else {
	                            triggerEvent(touchEvents.CLICK, evt);
	                        }
	                    } else if (_useMouseEvents) {
	                        triggerEvent(touchEvents.CLICK, evt);
	                    } else {
	                        triggerEvent(touchEvents.TAP, evt);

	                        // preventDefault to not dispatch the 300ms delayed click after a tap
	                        preventDefault(evt);
	                    }
	                }
	            }

	            _touchListenerTarget = null;
	            _hasMoved = false;
	        }

	        var self = this;
	        function triggerEvent(type, srcEvent) {
	            var evt;
	            if( options.enableDoubleTap && (type === events.touchEvents.CLICK || type === events.touchEvents.TAP)){
	                if(_.now() - _lastClickTime < _doubleClickDelay) {
	                    var doubleType = (type === events.touchEvents.CLICK) ?
	                        events.touchEvents.DOUBLE_CLICK : events.touchEvents.DOUBLE_TAP;
	                    evt = normalizeUIEvent(doubleType, srcEvent, _elem);
	                    self.trigger(doubleType, evt);
	                    _lastClickTime = 0;
	                } else {
	                    _lastClickTime = _.now();
	                }
	            }
	            evt = normalizeUIEvent(type, srcEvent, _elem);
	            self.trigger(type, evt);
	        }

	        this.triggerEvent = triggerEvent;

	        this.destroy = function() {
	            elem.removeEventListener('touchstart', interactStartHandler);
	            elem.removeEventListener('mousedown', interactStartHandler);

	            if(_touchListenerTarget){
	                _touchListenerTarget.removeEventListener('touchmove', interactDragHandler);
	                _touchListenerTarget.removeEventListener('touchcancel', interactEndHandler);
	                _touchListenerTarget.removeEventListener('touchend', interactEndHandler);
	            }

	            if(_usePointerEvents) {
	                if (options.preventScrolling) {
	                    elem.releasePointerCapture(_pointerId);
	                }
	                elem.removeEventListener('pointerdown', interactStartHandler);
	                elem.removeEventListener('pointermove', interactDragHandler);
	                elem.removeEventListener('pointercancel', interactEndHandler);
	                elem.removeEventListener('pointerup', interactEndHandler);
	            }

	            elem.removeEventListener('click', interactEndHandler);
	            document.removeEventListener('mousemove', interactDragHandler);
	            document.removeEventListener('mouseup', interactEndHandler);
	        };

	        return this;
	    };

	    _.extend(UI.prototype, Events);

	    return UI;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 106 */
/*!*******************************************************!*\
  !*** ./~/handlebars-loader!./src/templates/logo.html ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(/*! ./~/handlebars/runtime.js */ 107);
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(depth0,helpers,partials,data) {
	    var helper;

	  return "src=\""
	    + this.escapeExpression(((helper = (helper = helpers.file || (depth0 != null ? depth0.file : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"file","hash":{},"data":data}) : helper)))
	    + "\"";
	},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
	    var stack1;

	  return "<div class=\"jw-logo jw-reset\">\n    <img class=\"jw-logo-image\" "
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.file : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + ">\n</div>";
	},"useData":true});

/***/ },
/* 107 */
/*!*********************************!*\
  !*** ./~/handlebars/runtime.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	// Create a simple path alias to allow browserify to resolve
	// the runtime on a supported path.
	module.exports = __webpack_require__(/*! ./dist/cjs/handlebars.runtime */ 108)['default'];


/***/ },
/* 108 */
/*!*****************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars.runtime.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

	exports.__esModule = true;

	var _import = __webpack_require__(/*! ./handlebars/base */ 110);

	var base = _interopRequireWildcard(_import);

	// Each of these augment the Handlebars object. No need to setup here.
	// (This is done to easily share code between commonjs and browse envs)

	var _SafeString = __webpack_require__(/*! ./handlebars/safe-string */ 112);

	var _SafeString2 = _interopRequireWildcard(_SafeString);

	var _Exception = __webpack_require__(/*! ./handlebars/exception */ 111);

	var _Exception2 = _interopRequireWildcard(_Exception);

	var _import2 = __webpack_require__(/*! ./handlebars/utils */ 109);

	var Utils = _interopRequireWildcard(_import2);

	var _import3 = __webpack_require__(/*! ./handlebars/runtime */ 113);

	var runtime = _interopRequireWildcard(_import3);

	var _noConflict = __webpack_require__(/*! ./handlebars/no-conflict */ 114);

	var _noConflict2 = _interopRequireWildcard(_noConflict);

	// For compatibility and usage outside of module systems, make the Handlebars object a namespace
	function create() {
	  var hb = new base.HandlebarsEnvironment();

	  Utils.extend(hb, base);
	  hb.SafeString = _SafeString2['default'];
	  hb.Exception = _Exception2['default'];
	  hb.Utils = Utils;
	  hb.escapeExpression = Utils.escapeExpression;

	  hb.VM = runtime;
	  hb.template = function (spec) {
	    return runtime.template(spec, hb);
	  };

	  return hb;
	}

	var inst = create();
	inst.create = create;

	_noConflict2['default'](inst);

	inst['default'] = inst;

	exports['default'] = inst;
	module.exports = exports['default'];

/***/ },
/* 109 */
/*!***************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/utils.js ***!
  \***************************************************/
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.extend = extend;

	// Older IE versions do not directly support indexOf so we must implement our own, sadly.
	exports.indexOf = indexOf;
	exports.escapeExpression = escapeExpression;
	exports.isEmpty = isEmpty;
	exports.blockParams = blockParams;
	exports.appendContextPath = appendContextPath;
	var escape = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  '\'': '&#x27;',
	  '`': '&#x60;'
	};

	var badChars = /[&<>"'`]/g,
	    possible = /[&<>"'`]/;

	function escapeChar(chr) {
	  return escape[chr];
	}

	function extend(obj /* , ...source */) {
	  for (var i = 1; i < arguments.length; i++) {
	    for (var key in arguments[i]) {
	      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
	        obj[key] = arguments[i][key];
	      }
	    }
	  }

	  return obj;
	}

	var toString = Object.prototype.toString;

	exports.toString = toString;
	// Sourced from lodash
	// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
	/*eslint-disable func-style, no-var */
	var isFunction = function isFunction(value) {
	  return typeof value === 'function';
	};
	// fallback for older versions of Chrome and Safari
	/* istanbul ignore next */
	if (isFunction(/x/)) {
	  exports.isFunction = isFunction = function (value) {
	    return typeof value === 'function' && toString.call(value) === '[object Function]';
	  };
	}
	var isFunction;
	exports.isFunction = isFunction;
	/*eslint-enable func-style, no-var */

	/* istanbul ignore next */
	var isArray = Array.isArray || function (value) {
	  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
	};exports.isArray = isArray;

	function indexOf(array, value) {
	  for (var i = 0, len = array.length; i < len; i++) {
	    if (array[i] === value) {
	      return i;
	    }
	  }
	  return -1;
	}

	function escapeExpression(string) {
	  if (typeof string !== 'string') {
	    // don't escape SafeStrings, since they're already safe
	    if (string && string.toHTML) {
	      return string.toHTML();
	    } else if (string == null) {
	      return '';
	    } else if (!string) {
	      return string + '';
	    }

	    // Force a string conversion as this will be done by the append regardless and
	    // the regex test will do this transparently behind the scenes, causing issues if
	    // an object's to string has escaped characters in it.
	    string = '' + string;
	  }

	  if (!possible.test(string)) {
	    return string;
	  }
	  return string.replace(badChars, escapeChar);
	}

	function isEmpty(value) {
	  if (!value && value !== 0) {
	    return true;
	  } else if (isArray(value) && value.length === 0) {
	    return true;
	  } else {
	    return false;
	  }
	}

	function blockParams(params, ids) {
	  params.path = ids;
	  return params;
	}

	function appendContextPath(contextPath, id) {
	  return (contextPath ? contextPath + '.' : '') + id;
	}

/***/ },
/* 110 */
/*!**************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/base.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

	exports.__esModule = true;
	exports.HandlebarsEnvironment = HandlebarsEnvironment;
	exports.createFrame = createFrame;

	var _import = __webpack_require__(/*! ./utils */ 109);

	var Utils = _interopRequireWildcard(_import);

	var _Exception = __webpack_require__(/*! ./exception */ 111);

	var _Exception2 = _interopRequireWildcard(_Exception);

	var VERSION = '3.0.1';
	exports.VERSION = VERSION;
	var COMPILER_REVISION = 6;

	exports.COMPILER_REVISION = COMPILER_REVISION;
	var REVISION_CHANGES = {
	  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
	  2: '== 1.0.0-rc.3',
	  3: '== 1.0.0-rc.4',
	  4: '== 1.x.x',
	  5: '== 2.0.0-alpha.x',
	  6: '>= 2.0.0-beta.1'
	};

	exports.REVISION_CHANGES = REVISION_CHANGES;
	var isArray = Utils.isArray,
	    isFunction = Utils.isFunction,
	    toString = Utils.toString,
	    objectType = '[object Object]';

	function HandlebarsEnvironment(helpers, partials) {
	  this.helpers = helpers || {};
	  this.partials = partials || {};

	  registerDefaultHelpers(this);
	}

	HandlebarsEnvironment.prototype = {
	  constructor: HandlebarsEnvironment,

	  logger: logger,
	  log: log,

	  registerHelper: function registerHelper(name, fn) {
	    if (toString.call(name) === objectType) {
	      if (fn) {
	        throw new _Exception2['default']('Arg not supported with multiple helpers');
	      }
	      Utils.extend(this.helpers, name);
	    } else {
	      this.helpers[name] = fn;
	    }
	  },
	  unregisterHelper: function unregisterHelper(name) {
	    delete this.helpers[name];
	  },

	  registerPartial: function registerPartial(name, partial) {
	    if (toString.call(name) === objectType) {
	      Utils.extend(this.partials, name);
	    } else {
	      if (typeof partial === 'undefined') {
	        throw new _Exception2['default']('Attempting to register a partial as undefined');
	      }
	      this.partials[name] = partial;
	    }
	  },
	  unregisterPartial: function unregisterPartial(name) {
	    delete this.partials[name];
	  }
	};

	function registerDefaultHelpers(instance) {
	  instance.registerHelper('helperMissing', function () {
	    if (arguments.length === 1) {
	      // A missing field in a {{foo}} constuct.
	      return undefined;
	    } else {
	      // Someone is actually trying to call something, blow up.
	      throw new _Exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
	    }
	  });

	  instance.registerHelper('blockHelperMissing', function (context, options) {
	    var inverse = options.inverse,
	        fn = options.fn;

	    if (context === true) {
	      return fn(this);
	    } else if (context === false || context == null) {
	      return inverse(this);
	    } else if (isArray(context)) {
	      if (context.length > 0) {
	        if (options.ids) {
	          options.ids = [options.name];
	        }

	        return instance.helpers.each(context, options);
	      } else {
	        return inverse(this);
	      }
	    } else {
	      if (options.data && options.ids) {
	        var data = createFrame(options.data);
	        data.contextPath = Utils.appendContextPath(options.data.contextPath, options.name);
	        options = { data: data };
	      }

	      return fn(context, options);
	    }
	  });

	  instance.registerHelper('each', function (context, options) {
	    if (!options) {
	      throw new _Exception2['default']('Must pass iterator to #each');
	    }

	    var fn = options.fn,
	        inverse = options.inverse,
	        i = 0,
	        ret = '',
	        data = undefined,
	        contextPath = undefined;

	    if (options.data && options.ids) {
	      contextPath = Utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
	    }

	    if (isFunction(context)) {
	      context = context.call(this);
	    }

	    if (options.data) {
	      data = createFrame(options.data);
	    }

	    function execIteration(field, index, last) {
	      if (data) {
	        data.key = field;
	        data.index = index;
	        data.first = index === 0;
	        data.last = !!last;

	        if (contextPath) {
	          data.contextPath = contextPath + field;
	        }
	      }

	      ret = ret + fn(context[field], {
	        data: data,
	        blockParams: Utils.blockParams([context[field], field], [contextPath + field, null])
	      });
	    }

	    if (context && typeof context === 'object') {
	      if (isArray(context)) {
	        for (var j = context.length; i < j; i++) {
	          execIteration(i, i, i === context.length - 1);
	        }
	      } else {
	        var priorKey = undefined;

	        for (var key in context) {
	          if (context.hasOwnProperty(key)) {
	            // We're running the iterations one step out of sync so we can detect
	            // the last iteration without have to scan the object twice and create
	            // an itermediate keys array.
	            if (priorKey) {
	              execIteration(priorKey, i - 1);
	            }
	            priorKey = key;
	            i++;
	          }
	        }
	        if (priorKey) {
	          execIteration(priorKey, i - 1, true);
	        }
	      }
	    }

	    if (i === 0) {
	      ret = inverse(this);
	    }

	    return ret;
	  });

	  instance.registerHelper('if', function (conditional, options) {
	    if (isFunction(conditional)) {
	      conditional = conditional.call(this);
	    }

	    // Default behavior is to render the positive path if the value is truthy and not empty.
	    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
	    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
	    if (!options.hash.includeZero && !conditional || Utils.isEmpty(conditional)) {
	      return options.inverse(this);
	    } else {
	      return options.fn(this);
	    }
	  });

	  instance.registerHelper('unless', function (conditional, options) {
	    return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
	  });

	  instance.registerHelper('with', function (context, options) {
	    if (isFunction(context)) {
	      context = context.call(this);
	    }

	    var fn = options.fn;

	    if (!Utils.isEmpty(context)) {
	      if (options.data && options.ids) {
	        var data = createFrame(options.data);
	        data.contextPath = Utils.appendContextPath(options.data.contextPath, options.ids[0]);
	        options = { data: data };
	      }

	      return fn(context, options);
	    } else {
	      return options.inverse(this);
	    }
	  });

	  instance.registerHelper('log', function (message, options) {
	    var level = options.data && options.data.level != null ? parseInt(options.data.level, 10) : 1;
	    instance.log(level, message);
	  });

	  instance.registerHelper('lookup', function (obj, field) {
	    return obj && obj[field];
	  });
	}

	var logger = {
	  methodMap: { 0: 'debug', 1: 'info', 2: 'warn', 3: 'error' },

	  // State enum
	  DEBUG: 0,
	  INFO: 1,
	  WARN: 2,
	  ERROR: 3,
	  level: 1,

	  // Can be overridden in the host environment
	  log: function log(level, message) {
	    if (typeof console !== 'undefined' && logger.level <= level) {
	      var method = logger.methodMap[level];
	      (console[method] || console.log).call(console, message); // eslint-disable-line no-console
	    }
	  }
	};

	exports.logger = logger;
	var log = logger.log;

	exports.log = log;

	function createFrame(object) {
	  var frame = Utils.extend({}, object);
	  frame._parent = object;
	  return frame;
	}

	/* [args, ]options */

/***/ },
/* 111 */
/*!*******************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/exception.js ***!
  \*******************************************************/
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

	function Exception(message, node) {
	  var loc = node && node.loc,
	      line = undefined,
	      column = undefined;
	  if (loc) {
	    line = loc.start.line;
	    column = loc.start.column;

	    message += ' - ' + line + ':' + column;
	  }

	  var tmp = Error.prototype.constructor.call(this, message);

	  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
	  for (var idx = 0; idx < errorProps.length; idx++) {
	    this[errorProps[idx]] = tmp[errorProps[idx]];
	  }

	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, Exception);
	  }

	  if (loc) {
	    this.lineNumber = line;
	    this.column = column;
	  }
	}

	Exception.prototype = new Error();

	exports['default'] = Exception;
	module.exports = exports['default'];

/***/ },
/* 112 */
/*!*********************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/safe-string.js ***!
  \*********************************************************/
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	// Build out our basic SafeString type
	function SafeString(string) {
	  this.string = string;
	}

	SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
	  return '' + this.string;
	};

	exports['default'] = SafeString;
	module.exports = exports['default'];

/***/ },
/* 113 */
/*!*****************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/runtime.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

	exports.__esModule = true;
	exports.checkRevision = checkRevision;

	// TODO: Remove this line and break up compilePartial

	exports.template = template;
	exports.wrapProgram = wrapProgram;
	exports.resolvePartial = resolvePartial;
	exports.invokePartial = invokePartial;
	exports.noop = noop;

	var _import = __webpack_require__(/*! ./utils */ 109);

	var Utils = _interopRequireWildcard(_import);

	var _Exception = __webpack_require__(/*! ./exception */ 111);

	var _Exception2 = _interopRequireWildcard(_Exception);

	var _COMPILER_REVISION$REVISION_CHANGES$createFrame = __webpack_require__(/*! ./base */ 110);

	function checkRevision(compilerInfo) {
	  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
	      currentRevision = _COMPILER_REVISION$REVISION_CHANGES$createFrame.COMPILER_REVISION;

	  if (compilerRevision !== currentRevision) {
	    if (compilerRevision < currentRevision) {
	      var runtimeVersions = _COMPILER_REVISION$REVISION_CHANGES$createFrame.REVISION_CHANGES[currentRevision],
	          compilerVersions = _COMPILER_REVISION$REVISION_CHANGES$createFrame.REVISION_CHANGES[compilerRevision];
	      throw new _Exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
	    } else {
	      // Use the embedded version info since the runtime doesn't know about this revision yet
	      throw new _Exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
	    }
	  }
	}

	function template(templateSpec, env) {
	  /* istanbul ignore next */
	  if (!env) {
	    throw new _Exception2['default']('No environment passed to template');
	  }
	  if (!templateSpec || !templateSpec.main) {
	    throw new _Exception2['default']('Unknown template object: ' + typeof templateSpec);
	  }

	  // Note: Using env.VM references rather than local var references throughout this section to allow
	  // for external users to override these as psuedo-supported APIs.
	  env.VM.checkRevision(templateSpec.compiler);

	  function invokePartialWrapper(partial, context, options) {
	    if (options.hash) {
	      context = Utils.extend({}, context, options.hash);
	    }

	    partial = env.VM.resolvePartial.call(this, partial, context, options);
	    var result = env.VM.invokePartial.call(this, partial, context, options);

	    if (result == null && env.compile) {
	      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
	      result = options.partials[options.name](context, options);
	    }
	    if (result != null) {
	      if (options.indent) {
	        var lines = result.split('\n');
	        for (var i = 0, l = lines.length; i < l; i++) {
	          if (!lines[i] && i + 1 === l) {
	            break;
	          }

	          lines[i] = options.indent + lines[i];
	        }
	        result = lines.join('\n');
	      }
	      return result;
	    } else {
	      throw new _Exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
	    }
	  }

	  // Just add water
	  var container = {
	    strict: function strict(obj, name) {
	      if (!(name in obj)) {
	        throw new _Exception2['default']('"' + name + '" not defined in ' + obj);
	      }
	      return obj[name];
	    },
	    lookup: function lookup(depths, name) {
	      var len = depths.length;
	      for (var i = 0; i < len; i++) {
	        if (depths[i] && depths[i][name] != null) {
	          return depths[i][name];
	        }
	      }
	    },
	    lambda: function lambda(current, context) {
	      return typeof current === 'function' ? current.call(context) : current;
	    },

	    escapeExpression: Utils.escapeExpression,
	    invokePartial: invokePartialWrapper,

	    fn: function fn(i) {
	      return templateSpec[i];
	    },

	    programs: [],
	    program: function program(i, data, declaredBlockParams, blockParams, depths) {
	      var programWrapper = this.programs[i],
	          fn = this.fn(i);
	      if (data || depths || blockParams || declaredBlockParams) {
	        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
	      } else if (!programWrapper) {
	        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
	      }
	      return programWrapper;
	    },

	    data: function data(value, depth) {
	      while (value && depth--) {
	        value = value._parent;
	      }
	      return value;
	    },
	    merge: function merge(param, common) {
	      var obj = param || common;

	      if (param && common && param !== common) {
	        obj = Utils.extend({}, common, param);
	      }

	      return obj;
	    },

	    noop: env.VM.noop,
	    compilerInfo: templateSpec.compiler
	  };

	  function ret(context) {
	    var options = arguments[1] === undefined ? {} : arguments[1];

	    var data = options.data;

	    ret._setup(options);
	    if (!options.partial && templateSpec.useData) {
	      data = initData(context, data);
	    }
	    var depths = undefined,
	        blockParams = templateSpec.useBlockParams ? [] : undefined;
	    if (templateSpec.useDepths) {
	      depths = options.depths ? [context].concat(options.depths) : [context];
	    }

	    return templateSpec.main.call(container, context, container.helpers, container.partials, data, blockParams, depths);
	  }
	  ret.isTop = true;

	  ret._setup = function (options) {
	    if (!options.partial) {
	      container.helpers = container.merge(options.helpers, env.helpers);

	      if (templateSpec.usePartial) {
	        container.partials = container.merge(options.partials, env.partials);
	      }
	    } else {
	      container.helpers = options.helpers;
	      container.partials = options.partials;
	    }
	  };

	  ret._child = function (i, data, blockParams, depths) {
	    if (templateSpec.useBlockParams && !blockParams) {
	      throw new _Exception2['default']('must pass block params');
	    }
	    if (templateSpec.useDepths && !depths) {
	      throw new _Exception2['default']('must pass parent depths');
	    }

	    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
	  };
	  return ret;
	}

	function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
	  function prog(context) {
	    var options = arguments[1] === undefined ? {} : arguments[1];

	    return fn.call(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), depths && [context].concat(depths));
	  }
	  prog.program = i;
	  prog.depth = depths ? depths.length : 0;
	  prog.blockParams = declaredBlockParams || 0;
	  return prog;
	}

	function resolvePartial(partial, context, options) {
	  if (!partial) {
	    partial = options.partials[options.name];
	  } else if (!partial.call && !options.name) {
	    // This is a dynamic partial that returned a string
	    options.name = partial;
	    partial = options.partials[partial];
	  }
	  return partial;
	}

	function invokePartial(partial, context, options) {
	  options.partial = true;

	  if (partial === undefined) {
	    throw new _Exception2['default']('The partial ' + options.name + ' could not be found');
	  } else if (partial instanceof Function) {
	    return partial(context, options);
	  }
	}

	function noop() {
	  return '';
	}

	function initData(context, data) {
	  if (!data || !('root' in data)) {
	    data = data ? _COMPILER_REVISION$REVISION_CHANGES$createFrame.createFrame(data) : {};
	    data.root = context;
	  }
	  return data;
	}

/***/ },
/* 114 */
/*!*********************************************************!*\
  !*** ./~/handlebars/dist/cjs/handlebars/no-conflict.js ***!
  \*********************************************************/
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	exports.__esModule = true;
	/*global window */

	exports['default'] = function (Handlebars) {
	  /* istanbul ignore next */
	  var root = typeof global !== 'undefined' ? global : window,
	      $Handlebars = root.Handlebars;
	  /* istanbul ignore next */
	  Handlebars.noConflict = function () {
	    if (root.Handlebars === Handlebars) {
	      root.Handlebars = $Handlebars;
	    }
	  };
	};

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 115 */
/*!*****************************************!*\
  !*** ./src/js/view/captionsrenderer.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/helpers */ 45),
	    __webpack_require__(/*! utils/css */ 53),
	    __webpack_require__(/*! events/states */ 59),
	    __webpack_require__(/*! utils/underscore */ 42)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(utils, cssUtils, states, _) {
	    var _style = cssUtils.style;

	    var _defaults = {
	        back: true,
	        fontSize: 15,
	        fontFamily: 'Arial,sans-serif',
	        fontOpacity: 100,
	        color: '#FFF',
	        backgroundColor: '#000',
	        backgroundOpacity: 100,
	        // if back == false edgeStyle defaults to 'uniform',
	        // otherwise it's 'none'
	        edgeStyle: null,
	        windowColor: '#FFF',
	        windowOpacity: 0,
	        preprocessor: _.identity
	    };

	    /** Component that renders the actual captions on screen. **/
	    var CaptionsRenderer = function (_model) {

	        var _options = {},
	        // array of cues
	            _captionsTrack,

	        // current cue
	            _current,

	        // last time/seek event
	            _timeEvent,

	        // display hierarchy
	            _display,
	            _captionsWindow,
	            _textContainer;

	        _display = document.createElement('div');
	        _display.className = 'jw-captions jw-reset';


	        this.show = function () {
	            _display.className = 'jw-captions jw-captions-enabled jw-reset';
	        };

	        this.hide = function () {
	            _display.className = 'jw-captions jw-reset';
	        };

	        /** Assign list of captions to the renderer. **/
	        this.populate = function(captions) {
	            _current = -1;
	            _captionsTrack = captions;
	            if (!captions) {
	                _render('');
	                return;
	            }
	            _select(captions, _timeEvent);
	        };

	        /** Render the active caption. **/
	        function _render(html) {
	            html = html || '';
	            var windowClassName = 'jw-captions-window jw-reset';
	            if (html) {
	                _textContainer.innerHTML = html;
	                _captionsWindow.className = windowClassName + ' jw-captions-window-active';
	            } else {
	                _captionsWindow.className = windowClassName;
	                utils.empty(_textContainer);
	            }
	        }

	        this.resize = function () {
	            var width = _display.clientWidth,
	                scale = Math.pow(width / 400, 0.6);
	            if (scale) {
	                var size = _options.fontSize * scale;
	                _style(_display, {
	                    fontSize: Math.round(size) + 'px'
	                });
	            }
	        };

	        function _timeChange(e) {
	            _timeEvent = e;
	            _select(_captionsTrack, _timeEvent);
	        }

	        function _getAlignmentPosition(track, timeEvent) {
	            var source = track.source;
	            var metadata = timeEvent.metadata;

	            // subtitles with "source" time must be synced with "metadata[source]"
	            if (source) {
	                if (metadata && _.isNumber(metadata[source])) {
	                    return metadata[source];
	                } else {
	                    return false;
	                }
	            }

	            // Default to syncing with current position
	            return timeEvent.position;
	        }

	        /** Select a caption for rendering. **/
	        function _select(track, timeEvent) {
	            if (!(track && track.data) || !timeEvent) {
	                return;
	            }

	            var pos = _getAlignmentPosition(track, timeEvent);
	            if (pos === false) {
	                return;
	            }

	            var data = track.data;
	            if (_current >= 0 && _intersects(data, _current, pos)) {
	                // no change
	                return;
	            }

	            var found = -1;
	            for (var i = 0; i < data.length; i++) {
	                if (_intersects(data, i, pos)) {
	                    found = i;
	                    break;
	                }
	            }
	            // If none, empty the text. If not current, re-render.
	            if (found === -1) {
	                _render('');
	            } else if (found !== _current) {
	                _current = found;
	                _render( _options.preprocessor(data[_current].text) );
	            }
	        }

	        function _intersects(data, i, pos) {
	            return (data[i].begin <= pos && (!data[i].end || data[i].end >= pos) &&
	            (i === data.length - 1 || data[i + 1].begin >= pos));
	        }

	        /** Constructor for the renderer. **/
	        this.setup = function(options) {
	            _captionsWindow = document.createElement('div');
	            _textContainer = document.createElement('span');
	            _captionsWindow.className = 'jw-captions-window jw-reset';
	            _textContainer.className = 'jw-captions-text jw-reset';

	            _options = _.extend({}, _defaults, options);

	            if (options) {
	                var fontOpacity = _options.fontOpacity,
	                    windowOpacity = _options.windowOpacity,
	                    edgeStyle = _options.edgeStyle,
	                    bgColor = _options.backgroundColor,
	                    windowStyle = {},
	                    textStyle = {
	                        color: cssUtils.hexToRgba(_options.color, fontOpacity),
	                        fontFamily: _options.fontFamily,
	                        fontStyle: _options.fontStyle,
	                        fontWeight: _options.fontWeight,
	                        textDecoration: _options.textDecoration
	                    };

	                if (windowOpacity) {
	                    windowStyle.backgroundColor = cssUtils.hexToRgba(_options.windowColor, windowOpacity);
	                }

	                addEdgeStyle(edgeStyle, textStyle, fontOpacity);

	                if (_options.back) {
	                    textStyle.backgroundColor = cssUtils.hexToRgba(bgColor, _options.backgroundOpacity);
	                } else if (edgeStyle === null) {
	                    addEdgeStyle('uniform', textStyle);
	                }

	                _style(_captionsWindow, windowStyle);
	                _style(_textContainer, textStyle);
	            }

	            _captionsWindow.appendChild(_textContainer);
	            _display.appendChild(_captionsWindow);

	            this.populate(_model.get('captionsTrack'));
	        };

	        function addEdgeStyle(option, style, fontOpacity) {
	            var color = cssUtils.hexToRgba('#000000', fontOpacity);
	            if (option === 'dropshadow') { // small drop shadow
	                style.textShadow = '0 2px 1px ' + color;
	            } else if (option === 'raised') { // larger drop shadow
	                style.textShadow = '0 0 5px ' + color + ', 0 1px 5px ' + color + ', 0 2px 5px ' + color;
	            } else if (option === 'depressed') { // top down shadow
	                style.textShadow = '0 -2px 1px ' + color;
	            } else if (option === 'uniform') { // outline
	                style.textShadow = '-2px 0 1px ' + color + ',2px 0 1px ' + color +
	                ',0 -2px 1px ' + color + ',0 2px 1px ' + color + ',-1px 1px 1px ' +
	                color + ',1px 1px 1px ' + color + ',1px -1px 1px ' + color +
	                ',1px 1px 1px ' + color;
	            }
	        }

	        this.element = function() {
	            return _display;
	        };

	        _model.on('change:playlistItem', function() {
	            _timeEvent = null;
	            _current = -1;
	            _render('');
	        }, this);

	        _model.on('change:captionsTrack', function(model, captionsTrack) {
	            this.populate(captionsTrack);
	        }, this);
	        _model.mediaController.on('seek', function() {
	            _current = -1;
	        }, this);
	        _model.mediaController.on('time seek', _timeChange, this);
	        _model.mediaController.on('subtitlesTrackData', function() {
	            // update captions after a provider's subtitle track changes
	            _select(_captionsTrack, _timeEvent);
	        }, this);
	        _model.on('change:state', function(model, state) {
	            switch (state) {
	                case states.IDLE:
	                case states.ERROR:
	                case states.COMPLETE:
	                    this.hide();
	                    break;
	                default:
	                    this.show();
	                    break;
	            }
	        }, this);
	    };

	    return CaptionsRenderer;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 116 */
/*!*************************************!*\
  !*** ./src/js/view/clickhandler.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/ui */ 105),
	    __webpack_require__(/*! events/events */ 43),
	    __webpack_require__(/*! utils/backbone.events */ 44),
	    __webpack_require__(/*! utils/underscore */ 42)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(UI, events, Events, _) {

	    var ClickHandler = function(_model, _ele) {
	        var _display,
	            _alternateClickHandler,
	            _alternateDoubleClickHandler;

	        _.extend(this, Events);

	        _display = _ele;

	        this.element = function() { return _display; };

	        var userInteract = new UI(_display, {enableDoubleTap: true});
	        userInteract.on('click tap', _clickHandler);
	        userInteract.on('doubleClick doubleTap', _doubleClickHandler);

	        this.clickHandler = _clickHandler;

	        var _this = this;
	        function _clickHandler(evt) {
	            if (_model.get('flashBlocked')) {
	                return;
	            }

	            if (_alternateClickHandler) {
	                _alternateClickHandler(evt);
	                return;
	            }

	            _this.trigger((evt.type === events.touchEvents.CLICK) ? 'click' : 'tap');
	        }

	        // Handle double-clicks for fullscreen toggle
	        function _doubleClickHandler() {
	            if (_alternateDoubleClickHandler) {
	                _alternateDoubleClickHandler();
	                return;
	            }

	            _this.trigger('doubleClick');
	        }

	        this.setAlternateClickHandlers = function(clickHandler, doubleClickHandler) {
	            _alternateClickHandler = clickHandler;
	            _alternateDoubleClickHandler = doubleClickHandler || null;
	        };

	        this.revertAlternateClickHandlers = function() {
	            _alternateClickHandler = null;
	            _alternateDoubleClickHandler = null;
	        };
	    };


	    return ClickHandler;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 117 */
/*!************************************!*\
  !*** ./src/js/view/displayicon.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/helpers */ 45),
	    __webpack_require__(/*! utils/backbone.events */ 44),
	    __webpack_require__(/*! utils/ui */ 105),
	    __webpack_require__(/*! handlebars-loader!templates/displayicon.html */ 118),
	    __webpack_require__(/*! utils/underscore */ 42)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(utils, Events, UI, Template, _) {

	    var DisplayIcon = function(_model) {
	        _.extend(this, Events);

	        this.model = _model;

	        this.el = utils.createElement(Template({}));

	        var _this = this;
	        this.iconUI = new UI (this.el).on('click tap', function(evt){_this.trigger(evt.type);});

	    };

	    _.extend(DisplayIcon.prototype, {
	        element : function() { return this.el; }
	    });

	    return DisplayIcon;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 118 */
/*!**************************************************************!*\
  !*** ./~/handlebars-loader!./src/templates/displayicon.html ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(/*! ./~/handlebars/runtime.js */ 107);
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
	    return "<div class=\"jw-display-icon-container jw-background-color jw-reset\">\n    <div class=\"jw-icon jw-icon-display jw-button-color jw-reset\"></div>\n</div>\n";
	},"useData":true});

/***/ },
/* 119 */
/*!*****************************!*\
  !*** ./src/js/view/dock.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! handlebars-loader!templates/dock.html */ 120),
	    __webpack_require__(/*! utils/helpers */ 45),
	    __webpack_require__(/*! utils/underscore */ 42),
	    __webpack_require__(/*! utils/ui */ 105)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(dockTemplate, utils, _, UI) {

	    var Dock = function(_model) {
	        this.model = _model;

	        this.setup();
	        this.model.on('change:dock', this.render, this);
	    };

	    _.extend(Dock.prototype, {
	        setup : function() {
	            var buttons = this.model.get('dock');
	            var clickHandler = this.click.bind(this);

	            var html = dockTemplate(buttons);
	            this.el = utils.createElement(html);
	            new UI (this.el).on('click tap', clickHandler);
	        },
	        getDockButton : function(evt) {
	            if (utils.hasClass(evt.target, 'jw-dock-button')) {
	                // Clicks on button container
	                return evt.target;
	            } else if (utils.hasClass(evt.target, 'jw-dock-text')) {
	                // Clicks on the text overlay
	                return evt.target.parentElement.parentElement;
	            }

	            // Clicks on any other children
	            return evt.target.parentElement;
	        },
	        click : function(evt) {
	            var elem = this.getDockButton(evt);

	            var btnId = elem.getAttribute('button');
	            var buttons = this.model.get('dock');
	            var btn = _.findWhere(buttons, {id : btnId});

	            if (btn && btn.callback) {
	                btn.callback(evt);
	            }
	        },
	        render: function() {
	            var buttons = this.model.get('dock');
	            var html = dockTemplate(buttons);
	            var newEl = utils.createElement(html);

	            this.el.innerHTML = newEl.innerHTML;
	        },
	        element : function() {
	            return this.el;
	        }
	    });
	    return Dock;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 120 */
/*!*******************************************************!*\
  !*** ./~/handlebars-loader!./src/templates/dock.html ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(/*! ./~/handlebars/runtime.js */ 107);
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(depth0,helpers,partials,data) {
	    var stack1;

	  return "    <div class=\"jw-dock-bg\"></div>\n"
	    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
	},"2":function(depth0,helpers,partials,data) {
	    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

	  return "    <div class=\"jw-dock-button jw-reset\" button=\""
	    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
	    + "\">\n        <div class=\"jw-icon jw-dock-image jw-reset\" style=\"background-image: url("
	    + alias3(((helper = (helper = helpers.img || (depth0 != null ? depth0.img : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"img","hash":{},"data":data}) : helper)))
	    + ")\"></div>\n        <div class=\"jw-arrow jw-reset\"></div>\n"
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.tooltip : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "    </div>\n";
	},"3":function(depth0,helpers,partials,data) {
	    var helper;

	  return "        <div class=\"jw-overlay jw-reset\">\n            <span class=\"jw-text jw-dock-text jw-reset\">"
	    + this.escapeExpression(((helper = (helper = helpers.tooltip || (depth0 != null ? depth0.tooltip : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"tooltip","hash":{},"data":data}) : helper)))
	    + "</span>\n        </div>\n";
	},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
	    var stack1;

	  return "<div class=\"jw-dock jw-reset\">\n"
	    + ((stack1 = helpers['if'].call(depth0,depth0,{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "</div>";
	},"useData":true});

/***/ },
/* 121 */
/*!***********************************!*\
  !*** ./src/js/view/controlbar.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/helpers */ 45),
	    __webpack_require__(/*! utils/underscore */ 42),
	    __webpack_require__(/*! utils/backbone.events */ 44),
	    __webpack_require__(/*! utils/ui */ 105),
	    __webpack_require__(/*! view/components/slider */ 123),
	    __webpack_require__(/*! view/components/timeslider */ 122),
	    __webpack_require__(/*! view/components/menu */ 129),
	    __webpack_require__(/*! view/components/playlist */ 131),
	    __webpack_require__(/*! view/components/volumetooltip */ 133),
	    __webpack_require__(/*! view/components/drawer */ 134)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(utils, _, Events, UI, Slider, TimeSlider, Menu, Playlist, VolumeTooltip, Drawer) {

	    function button(icon, apiAction) {
	        var element = document.createElement('div');
	        element.className = 'jw-icon jw-icon-inline jw-button-color jw-reset ' + icon;
	        element.style.display = 'none';

	        if (apiAction) {
	            // Don't send the event to the handler so we don't have unexpected results. (e.g. play)
	            new UI(element).on('click tap', function() { apiAction(); });
	        }

	        return {
	            element : function() { return element; },
	            toggle : function(m) {
	                if (m) {
	                    this.show();
	                } else {
	                    this.hide();
	                }
	            },
	            show : function() { element.style.display = '';},
	            hide : function() { element.style.display = 'none';}
	        };
	    }

	    function text(name) {
	        var element = document.createElement('span');
	        element.className = 'jw-text jw-reset ' + name;
	        return element;
	    }

	    function menu(name) {
	        var createdMenu = new Menu(name);

	        return createdMenu;
	    }

	    function buildGroup(group, elements) {
	        var elem = document.createElement('div');
	        elem.className = 'jw-group jw-controlbar-' + group+'-group jw-reset';

	        _.each(elements, function(e) {
	            if (e.element) {
	                e = e.element();
	            }
	            elem.appendChild(e);
	        });

	        return elem;
	    }

	    function Controlbar(_api, _model) {
	        this._api = _api;
	        this._model = _model;
	        this._isMobile = utils.isMobile();
	        this._compactModeMaxSize = 400;
	        this._maxCompactWidth = -1;

	        this.setup();
	    }

	    _.extend(Controlbar.prototype, Events, {

	        setup : function() {
	            this.build();
	            this.initialize();
	        },

	        build : function() {
	            var timeSlider = new TimeSlider(this._model, this._api),
	                drawer = new Drawer('jw-icon-more'),
	                playlistTooltip,
	                volumeSlider,
	                volumeTooltip,
	                muteButton;

	            // Create the playlistTooltip as long as visualplaylist from the config is not false
	            if(this._model.get('visualplaylist') !== false) {
	                playlistTooltip = new Playlist('jw-icon-playlist');
	            }

	            // Do not initialize volume sliders on mobile.
	            if(!this._isMobile){
	                muteButton = button('jw-icon-volume', this._api.setMute);
	                volumeSlider = new Slider('jw-slider-volume', 'horizontal');
	                volumeTooltip = new VolumeTooltip(this._model, 'jw-icon-volume');
	            }

	            this.elements = {
	                alt: text('jw-text-alt'),
	                play: button('jw-icon-playback', this._api.play),
	                prev: button('jw-icon-prev', this._api.playlistPrev),
	                next: button('jw-icon-next', this._api.playlistNext),
	                playlist : playlistTooltip,
	                elapsed: text('jw-text-elapsed'),
	                time: timeSlider,
	                duration: text('jw-text-duration'),
	                drawer: drawer,
	                hd: menu('jw-icon-hd'),
	                cc: menu('jw-icon-cc'),
	                audiotracks: menu('jw-icon-audio-tracks'),
	                mute: muteButton,
	                volume: volumeSlider,
	                volumetooltip: volumeTooltip,
	                cast: button('jw-icon-cast jw-off', this._api.castToggle),
	                fullscreen: button('jw-icon-fullscreen', this._api.setFullscreen)
	            };

	            this.layout = {
	                left: [
	                    this.elements.play,
	                    this.elements.prev,
	                    this.elements.playlist,
	                    this.elements.next,
	                    this.elements.elapsed
	                ],
	                center: [
	                    this.elements.time,
	                    this.elements.alt
	                ],
	                right: [
	                    this.elements.duration,
	                    this.elements.hd,
	                    this.elements.cc,
	                    this.elements.audiotracks,
	                    this.elements.drawer,
	                    this.elements.mute,
	                    this.elements.cast,
	                    this.elements.volume,
	                    this.elements.volumetooltip,
	                    // this.elements.cast, // hidden for jw7.0 release
	                    this.elements.fullscreen
	                ],
	                drawer: [
	                    this.elements.hd,
	                    this.elements.cc,
	                    this.elements.audiotracks
	                ]
	            };

	            this.menus = _.compact([
	                this.elements.playlist,
	                this.elements.hd,
	                this.elements.cc,
	                this.elements.audiotracks,
	                this.elements.volumetooltip
	            ]);

	            // Remove undefined layout elements.  They are invalid for the current platform.
	            // (e.g. volume and volumetooltip on mobile)
	            this.layout.left = _.compact(this.layout.left);
	            this.layout.center = _.compact(this.layout.center);
	            this.layout.right = _.compact(this.layout.right);
	            this.layout.drawer = _.compact(this.layout.drawer);

	            this.el = document.createElement('div');
	            this.el.className = 'jw-controlbar jw-background-color jw-reset';

	            this.elements.left = buildGroup('left', this.layout.left);
	            this.elements.center = buildGroup('center', this.layout.center);
	            this.elements.right = buildGroup('right', this.layout.right);

	            this.el.appendChild(this.elements.left);
	            this.el.appendChild(this.elements.center);
	            this.el.appendChild(this.elements.right);
	        },

	        initialize : function() {
	            // Initial State
	            this.elements.play.show();
	            this.elements.fullscreen.show();
	            if(this.elements.mute){
	                this.elements.mute.show();
	            }
	            this.onVolume(this._model, this._model.get('volume'));
	            this.onPlaylist(this._model, this._model.get('playlist'));
	            this.onPlaylistItem(this._model, this._model.get('playlistItem'));
	            this.onMediaModel(this._model, this._model.get('mediaModel'));
	            this.onCastAvailable(this._model, this._model.get('castAvailable'));
	            this.onCastActive(this._model, this._model.get('castActive'));
	            this.onCaptionsList(this._model, this._model.get('captionsList'));

	            // Listen for model changes
	            this._model.on('change:volume', this.onVolume, this);
	            this._model.on('change:mute', this.onMute, this);
	            this._model.on('change:playlist', this.onPlaylist, this);
	            this._model.on('change:playlistItem', this.onPlaylistItem, this);
	            this._model.on('change:mediaModel', this.onMediaModel, this);
	            this._model.on('change:castAvailable', this.onCastAvailable, this);
	            this._model.on('change:castActive', this.onCastActive, this);
	            this._model.on('change:duration', this.onDuration, this);
	            this._model.on('change:position', this.onElapsed, this);
	            this._model.on('change:fullscreen', this.onFullscreen, this);
	            this._model.on('change:captionsList', this.onCaptionsList, this);
	            this._model.on('change:captionsIndex', this.onCaptionsIndex, this);
	            this._model.on('change:compactUI', this.onCompactUI, this);

	            // Event listeners

	            // Volume sliders do not exist on mobile so don't assign listeners to them.
	            if(this.elements.volume) {
	                this.elements.volume.on('update', function (pct) {
	                    var val = pct.percentage;
	                    this._api.setVolume(val);
	                }, this);
	            }
	            if(this.elements.volumetooltip) {
	                this.elements.volumetooltip.on('update', function(pct) {
	                    var val = pct.percentage;
	                    this._api.setVolume(val);
	                }, this);
	                this.elements.volumetooltip.on('toggleValue', function(){
	                    this._api.setMute();
	                }, this);
	            }

	            if(this.elements.playlist) {
	                this.elements.playlist.on('select', function (value) {
	                    this._model.once('itemReady', function () {
	                        this._api.play();
	                    }, this);
	                    this._api.load(value);
	                }, this);
	            }

	            this.elements.hd.on('select', function(value){
	                this._model.getVideo().setCurrentQuality(value);
	            }, this);
	            this.elements.hd.on('toggleValue', function(){
	                this._model.getVideo().setCurrentQuality((this._model.getVideo().getCurrentQuality() === 0) ? 1 : 0);
	            }, this);

	            this.elements.cc.on('select', function(value) {
	                this._api.setCurrentCaptions(value);
	            }, this);
	            this.elements.cc.on('toggleValue', function() {
	                var index = this._model.get('captionsIndex');
	                this._api.setCurrentCaptions(index ? 0 : 1);
	            }, this);

	            this.elements.audiotracks.on('select', function(value){
	                this._model.getVideo().setCurrentAudioTrack(value);
	            }, this);

	            new UI(this.elements.duration).on('click tap', function(){
	                if (utils.adaptiveType(this._model.get('duration')) === 'DVR') {
	                    // -0.1 places the playhead at the most recent time.
	                    // this._api.seek(0) puts the user at the oldest DVR segment available.
	                    this._api.seek(-0.1);
	                }
	            }, this);

	            // When the control bar is interacted with, trigger a user action event
	            new UI(this.el).on('click tap drag', function(){ this.trigger('userAction'); }, this);

	            this.elements.drawer.on('open-drawer close-drawer', function(evt, props){
	                utils.toggleClass(this.el, 'jw-drawer-expanded', props.isOpen);
	                if(!props.isOpen){
	                    this.closeMenus();
	                }
	            }, this);

	            _.each(this.menus, function(ele){
	                ele.on('open-tooltip', this.closeMenus, this);
	            }, this);
	        },

	        onCaptionsList: function(model, tracks) {
	            var index = model.get('captionsIndex');
	            this.elements.cc.setup(tracks, index);
	            this.clearCompactMode();
	        },
	        onCaptionsIndex: function(model, index) {
	            this.elements.cc.selectItem(index);
	        },
	        onPlaylist : function(model, playlist) {
	            var display = (playlist.length > 1);
	            this.elements.next.toggle(display);
	            this.elements.prev.toggle(display);
	            if(this.elements.playlist) {
	                this.elements.playlist.setup(playlist, model.get('item'));
	            }
	        },
	        onPlaylistItem : function(model/*, item*/) {
	            this.elements.time.updateBuffer(0);
	            this.elements.time.render(0);
	            this.elements.duration.innerHTML = '00:00';
	            this.elements.elapsed.innerHTML = '00:00';

	            this.clearCompactMode();

	            var itemIdx = model.get('item');
	            if (this.elements.playlist) {
	                this.elements.playlist.selectItem(itemIdx);
	            }

	            this.elements.audiotracks.setup();
	        },

	        onMediaModel : function(model, mediaModel) {
	            mediaModel.on('change:levels', function(model, levels) {
	                this.elements.hd.setup(levels, model.get('currentLevel'));
	                this.clearCompactMode();
	            }, this);
	            mediaModel.on('change:currentLevel', function(model, level) {
	                this.elements.hd.selectItem(level);
	            }, this);
	            mediaModel.on('change:audioTracks', function(model, audioTracks) {
	                var list = _.map(audioTracks, function(track) { return { label : track.name }; });
	                this.elements.audiotracks.setup(list, model.get('currentAudioTrack'), {toggle: false});
	                this.clearCompactMode();
	            }, this);
	            mediaModel.on('change:currentAudioTrack', function(model, currentAudioTrack) {
	                this.elements.audiotracks.selectItem(currentAudioTrack);
	            }, this);
	            mediaModel.on('change:state', function(model, state) {
	                if(state === 'complete') {
	                    this.elements.drawer.closeTooltip();
	                    utils.removeClass(this.el, 'jw-drawer-expanded');
	                }
	            }, this);
	        },
	        onVolume : function(model, pct) {
	            this.renderVolume(model.get('mute'), pct);
	        },
	        onMute : function(model, muted) {
	            this.renderVolume(muted, model.get('volume'));
	        },
	        renderVolume : function(muted, vol) {
	            // mute, volume, and volumetooltip do not exist on mobile devices.
	            if(this.elements.mute) {
	                utils.toggleClass(this.elements.mute.element(), 'jw-off', muted);
	            }
	            if(this.elements.volume) {
	                this.elements.volume.render(muted ? 0 : vol);
	            }
	            if(this.elements.volumetooltip){
	                this.elements.volumetooltip.volumeSlider.render(muted ? 0 : vol);
	                utils.toggleClass(this.elements.volumetooltip.element(), 'jw-off', muted);
	            }
	        },
	        onCastAvailable : function(model, val) {
	            this.elements.cast.toggle(val);
	            this.clearCompactMode();
	        },
	        onCastActive : function(model, val) {
	            utils.toggleClass(this.elements.cast.element(), 'jw-off', !val);
	        },
	        onElapsed : function(model, val) {
	            var elapsedTime;
	            var duration = model.get('duration');
	            if (utils.adaptiveType(duration) === 'DVR') {
	                elapsedTime = '-' + utils.timeFormat(-duration);
	            } else {
	                elapsedTime = utils.timeFormat(val);
	            }
	            this.elements.elapsed.innerHTML = elapsedTime;
	        },
	        onDuration : function(model, val) {
	            var totalTime;
	            if (utils.adaptiveType(val) === 'DVR') {
	                totalTime = 'Live';
	                this.clearCompactMode();
	            } else {
	                totalTime = utils.timeFormat(val);
	            }
	            this.elements.duration.innerHTML = totalTime;
	        },
	        onFullscreen : function(model, val) {
	            utils.toggleClass(this.elements.fullscreen.element(), 'jw-off', val);
	        },

	        element: function() {
	            return this.el;
	        },

	        getVisibleBounds : function (){
	            var el = this.el,
	                // getComputedStyle for modern browsers, currentStyle is for IE8
	                curStyle = (getComputedStyle) ? getComputedStyle(el) : el.currentStyle,
	                bounds;

	            if(curStyle.display === 'table'){
	                return utils.bounds(el);
	            } else {
	                el.style.visibility = 'hidden';
	                el.style.display = 'table';
	                bounds = utils.bounds(el);
	                el.style.visibility = el.style.display = '';
	                return bounds;
	            }
	        },
	        setAltText : function(altText) {
	            this.elements.alt.innerHTML = altText;
	        },
	        addCues : function(cues) {
	            if (this.elements.time) {
	                _.each(cues, function(ele){
	                    this.elements.time.addCue(ele);
	                }, this);
	                this.elements.time.drawCues();
	            }
	        },
	        // Close menus if it has no event.  Otherwise close all but the event's target.
	        closeMenus : function(evt){
	            _.each(this.menus, function(ele){
	                if(!evt || evt.target !== ele.el) {
	                    ele.closeTooltip(evt);
	                }
	            });
	        },
	        hideComponents : function(){
	            this.closeMenus();
	            this.elements.drawer.closeTooltip();
	            utils.removeClass(this.el, 'jw-drawer-expanded');
	        },
	        clearCompactMode : function() {
	            this._maxCompactWidth = -1;
	            this._model.set('compactUI', false);
	            if(this._containerWidth) {
	                this.checkCompactMode(this._containerWidth);
	            }
	        },
	        // Sets this._maxCompactWidth so we calculate less per call of isCompactMode
	        setCompactModeBounds : function(){
	            if(this.element().offsetWidth > 0 ){
	                // Use the current center section content (timeslider or alt text) to determine compact mode
	                var nonCenterExpandedSize = this.elements.left.offsetWidth + this.elements.right.offsetWidth;
	                if(utils.adaptiveType(this._model.get('duration')) === 'LIVE'){
	                    this._maxCompactWidth = nonCenterExpandedSize + this.elements.alt.offsetWidth;
	                } else {
	                    var containerRequiredSize = nonCenterExpandedSize +
	                            (this.elements.center.offsetWidth - this.elements.time.el.offsetWidth),
	                        timeSliderBreakpoint = 0.20;
	                    this._maxCompactWidth = containerRequiredSize / (1-timeSliderBreakpoint);
	                }

	            }
	        },
	        checkCompactMode : function(containerWidth) {
	            // If we cleared the _maxCompactWidth then try to reset it. This can fail if the controlbar is display: none
	            if(this._maxCompactWidth === -1){
	                this.setCompactModeBounds();
	            }

	            this._containerWidth = containerWidth;

	            // If the _maxCompactWidth is set (which it may or may not be above)
	            if(this._maxCompactWidth !== -1) {

	                // If we're in compact mode and we have enough space to exit it, then do so
	                if( containerWidth >= this._compactModeMaxSize && containerWidth > this._maxCompactWidth) {
	                    this._model.set('compactUI', false);
	                }
	                // Enter if we're in a small player or our timeslider is too small.
	                else if( containerWidth < this._compactModeMaxSize || containerWidth <= this._maxCompactWidth ){
	                    this._model.set('compactUI', true);
	                }
	            }
	        },
	        onCompactUI : function(model, isCompact) {
	            utils.removeClass(this.el, 'jw-drawer-expanded');

	            this.elements.drawer.setup(this.layout.drawer, isCompact);

	            // If we're not in compact mode or we're not hiding icons, then put them back where they came from.
	            if(!isCompact || this.elements.drawer.activeContents.length < 2){
	                _.each(this.layout.drawer,function(ele){
	                    this.elements.right.insertBefore(ele.el, this.elements.drawer.el);
	                }, this);
	            }
	        }
	    });

	    return Controlbar;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 122 */
/*!**********************************************!*\
  !*** ./src/js/view/components/timeslider.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/underscore */ 42),
	    __webpack_require__(/*! view/components/slider */ 123),
	    __webpack_require__(/*! utils/helpers */ 45),
	    __webpack_require__(/*! view/components/tooltip */ 126),
	    __webpack_require__(/*! view/components/chapters.mixin */ 127),
	    __webpack_require__(/*! view/components/thumbnails.mixin */ 128)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(_, Slider, utils, Tooltip, ChaptersMixin, ThumbnailsMixin) {

	    var TimeTip = Tooltip.extend({
	        setup : function() {

	            this.text = document.createElement('span');
	            this.text.className = 'jw-text jw-reset';
	            this.img  = document.createElement('div');
	            this.img.className = 'jw-reset';

	            var wrapper = document.createElement('div');
	            wrapper.className = 'jw-time-tip jw-background-color jw-reset';
	            wrapper.appendChild(this.img);
	            wrapper.appendChild(this.text);

	            utils.removeClass(this.el, 'jw-hidden');

	            this.addContent(wrapper);
	        },

	        image : function(style) {
	            utils.style(this.img, style);
	        },

	        update : function(txt) {
	            this.text.innerHTML = txt;
	        }
	    });

	    var TimeSlider = Slider.extend({
	        constructor : function(_model, _api) {
	            this._model = _model;
	            this._api = _api;

	            this.timeTip = new TimeTip('jw-tooltip-time');
	            this.timeTip.setup();

	            this.cues = [];

	            // Store the attempted seek, until the previous one completes
	            this.seekThrottled = _.throttle(this.performSeek, 400);

	            this._model
	                .on('change:playlistItem', this.onPlaylistItem, this)
	                .on('change:position', this.onPosition, this)
	                .on('change:duration', this.onDuration, this)
	                .on('change:buffer', this.onBuffer, this);

	            Slider.call(this, 'jw-slider-time', 'horizontal');
	        },

	        // These overwrite Slider methods
	        setup : function() {
	            Slider.prototype.setup.apply(this, arguments);

	            if (this._model.get('playlistItem')) {
	                this.onPlaylistItem(this._model, this._model.get('playlistItem'));
	            }

	            this.elementRail.appendChild(this.timeTip.element());

	            // mousemove/mouseout because this currently mouse specific functionality.
	            this.el.addEventListener('mousemove', this.showTimeTooltip.bind(this), false);
	            this.el.addEventListener('mouseout', this.hideTimeTooltip.bind(this), false);
	        },
	        update: function(pct) {
	            if (this.activeCue && _.isNumber(this.activeCue.pct)) {
	                this.seekTo = this.activeCue.pct;
	            } else {
	                this.seekTo = pct;
	            }
	            this.seekThrottled();
	            Slider.prototype.update.apply(this, arguments);
	        },
	        dragStart : function() {
	            this._model.set('scrubbing', true);
	            Slider.prototype.dragStart.apply(this, arguments);
	        },
	        dragEnd : function() {
	            Slider.prototype.dragEnd.apply(this, arguments);
	            this._model.set('scrubbing', false);
	        },


	        // Event Listeners
	        onSeeked : function () {
	            // When we are done scrubbing there will be a final seeked event
	            if (this._model.get('scrubbing')) {
	                this.performSeek();
	            }
	        },
	        onBuffer : function (model, pct) {
	            this.updateBuffer(pct);
	        },
	        onPosition : function(model, position) {
	            this.updateTime(position, model.get('duration'));
	        },
	        onDuration : function(model, duration) {
	            this.updateTime(model.get('position'), duration);
	        },
	        updateTime : function(position, duration) {
	            var pct = 0;
	            if (duration) {
	                var adaptiveType = utils.adaptiveType(duration);
	                if(adaptiveType === 'DVR') {
	                    pct = (duration - position) / duration * 100;
	                } else if (adaptiveType === 'VOD') {
	                    pct = position / duration * 100;
	                }
	            }
	            this.render(pct);
	        },
	        onPlaylistItem : function (model, playlistItem) {
	            this.reset();

	            model.mediaModel.on('seeked', this.onSeeked, this);

	            var tracks = playlistItem.tracks;
	            _.each(tracks, function (track) {
	                if (track && track.kind && track.kind.toLowerCase() === 'thumbnails') {
	                    this.loadThumbnails(track.file);
	                }
	                else if (track && track.kind && track.kind.toLowerCase() === 'chapters') {
	                    this.loadChapters(track.file);
	                }
	            }, this);
	        },

	        // These are new methods
	        performSeek : function () {
	            var duration = this._model.get('duration');
	            var adaptiveType = utils.adaptiveType(duration);
	            var position;
	            if (adaptiveType === 'LIVE' || duration === 0) {
	                this._api.play();
	            } else if (adaptiveType === 'DVR') {
	                position = (1 - (this.seekTo / 100)) * duration;
	                this._api.seek(Math.min(position, -0.25));
	            } else {
	                position = this.seekTo / 100 * duration;
	                this._api.seek(Math.min(position, duration - 0.25));
	            }
	        },
	        showTimeTooltip: function(evt) {
	            var duration = this._model.get('duration');
	            if (duration === 0) {
	                return;
	            }

	            var _railBounds = utils.bounds(this.elementRail);
	            var position = (evt.pageX ? (evt.pageX - _railBounds.left) : evt.x);
	            position = utils.between(position, 0, _railBounds.width);
	            var pct = position / _railBounds.width;
	            var time = duration * pct;

	            // For DVR we need to swap it around
	            if (duration < 0) {
	                time = duration - time;
	            }

	            var timetipText;
	            if (this.activeCue) {
	                timetipText = this.activeCue.text;
	            } else {
	                var allowNegativeTime = true;
	                timetipText = utils.timeFormat(time, allowNegativeTime);

	                // If DVR and within one second of live
	                if (duration < 0 && (Math.abs(time) < 1) ) {
	                    timetipText = 'Live';
	                }
	            }
	            this.timeTip.update(timetipText);
	            this.showThumbnail(time);

	            utils.addClass(this.timeTip.el, 'jw-open');
	            this.timeTip.el.style.left = (pct*100) + '%';
	        },

	        hideTimeTooltip: function() {
	            utils.removeClass(this.timeTip.el, 'jw-open');
	        },

	        reset : function() {
	            this.resetChapters();
	            this.resetThumbnails();
	        }
	    });

	    _.extend(TimeSlider.prototype, ChaptersMixin, ThumbnailsMixin);

	    return TimeSlider;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 123 */
/*!******************************************!*\
  !*** ./src/js/view/components/slider.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/extendable */ 124),
	    __webpack_require__(/*! utils/ui */ 105),
	    __webpack_require__(/*! handlebars-loader!templates/slider.html */ 125),
	    __webpack_require__(/*! utils/helpers */ 45)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(Extendable, UI, SliderTemplate, utils) {

	    var Slider = Extendable.extend({
	        constructor : function(className, orientation) {
	            this.className = className + ' jw-background-color jw-reset';
	            this.orientation = orientation;

	            this.dragStartListener = this.dragStart.bind(this);
	            this.dragMoveListener = this.dragMove.bind(this);
	            this.dragEndListener = this.dragEnd.bind(this);

	            this.tapListener = this.tap.bind(this);

	            this.setup();
	        },
	        setup : function() {
	            var obj = {
	                'default' : this['default'],
	                className : this.className,
	                orientation : 'jw-slider-' + this.orientation
	            };
	            this.el = utils.createElement(SliderTemplate(obj));

	            this.elementRail = this.el.getElementsByClassName('jw-slider-container')[0];
	            this.elementBuffer = this.el.getElementsByClassName('jw-buffer')[0];
	            this.elementProgress = this.el.getElementsByClassName('jw-progress')[0];
	            this.elementThumb = this.el.getElementsByClassName('jw-knob')[0];

	            this.userInteract = new UI(this.element(), {preventScrolling : true});

	            this.userInteract.on('dragStart', this.dragStartListener);
	            this.userInteract.on('drag', this.dragMoveListener);
	            this.userInteract.on('dragEnd', this.dragEndListener);

	            this.userInteract.on('tap click', this.tapListener);
	        },
	        dragStart : function() {
	            this.trigger('dragStart');
	            this.railBounds = utils.bounds(this.elementRail);
	        },
	        dragEnd : function(evt) {
	            this.dragMove(evt);
	            this.trigger('dragEnd');
	        },
	        dragMove : function(evt) {
	            var dimension,
	                bounds = this.railBounds = (this.railBounds) ? this.railBounds : utils.bounds(this.elementRail),
	                percentage;

	            if (this.orientation === 'horizontal'){
	                dimension = evt.pageX;
	                if (dimension < bounds.left) {
	                    percentage = 0;
	                } else if (dimension > bounds.right) {
	                    percentage = 100;
	                } else {
	                    percentage = utils.between((dimension-bounds.left)/bounds.width, 0, 1) * 100;
	                }
	            } else {
	                dimension = evt.pageY;
	                if (dimension >= bounds.bottom) {
	                    percentage = 0;
	                } else if (dimension <= bounds.top) {
	                    percentage = 100;
	                } else {
	                    percentage = utils.between((bounds.height-(dimension-bounds.top))/bounds.height, 0, 1) * 100;
	                }
	            }

	            this.render(percentage);
	            this.update(percentage);

	            return false;
	        },
	        tap : function(evt){
	            this.railBounds = utils.bounds(this.elementRail);
	            this.dragMove(evt);
	        },

	        update : function(percentage) {
	            this.trigger('update', { percentage : percentage });
	        },
	        render : function(percentage) {
	            percentage = Math.max(0, Math.min(percentage, 100));

	            if(this.orientation === 'horizontal'){
	                this.elementThumb.style.left = percentage + '%';
	                this.elementProgress.style.width = percentage + '%';
	            } else {
	                this.elementThumb.style.bottom = percentage + '%';
	                this.elementProgress.style.height = percentage + '%';
	            }
	        },
	        updateBuffer : function(percentage) {
	            this.elementBuffer.style.width = percentage + '%';
	        },

	        element : function() {
	            return this.el;
	        }
	    });

	    return Slider;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 124 */
/*!************************************!*\
  !*** ./src/js/utils/extendable.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/backbone.events */ 44),
	    __webpack_require__(/*! utils/underscore */ 42)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(Events, _) {

	    // Helper function to correctly set up the prototype chain, for subclasses.
	    // Similar to `goog.inherits`, but uses a hash of prototype properties and
	    // class properties to be extended.
	    var extend = function (protoProps, staticProps) {
	        var parent = this;
	        var child;

	        // The constructor function for the new subclass is either defined by you
	        // (the "constructor" property in your `extend` definition), or defaulted
	        // by us to simply call the parent's constructor.
	        if (protoProps && _.has(protoProps, 'constructor')) {
	            child = protoProps.constructor;
	        } else {
	            child = function () {
	                return parent.apply(this, arguments);
	            };
	        }

	        // Add static properties to the constructor function, if supplied.
	        _.extend(child, parent, staticProps);

	        // Set the prototype chain to inherit from `parent`, without calling
	        // `parent`'s constructor function.
	        var Surrogate = function () {
	            this.constructor = child;
	        };
	        Surrogate.prototype = parent.prototype;
	        child.prototype = new Surrogate();

	        // Add prototype properties (instance properties) to the subclass,
	        // if supplied.
	        if (protoProps)  { _.extend(child.prototype, protoProps); }

	        // Set a convenience property in case the parent's prototype is needed
	        // later.
	        child.__super__ = parent.prototype;

	        return child;
	    };


	    function Extendable() {}
	    Extendable.extend = extend;
	    _.extend(Extendable.prototype, Events);

	    return Extendable;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 125 */
/*!*********************************************************!*\
  !*** ./~/handlebars-loader!./src/templates/slider.html ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(/*! ./~/handlebars/runtime.js */ 107);
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
	    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

	  return "<div class=\""
	    + alias3(((helper = (helper = helpers.className || (depth0 != null ? depth0.className : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"className","hash":{},"data":data}) : helper)))
	    + " "
	    + alias3(((helper = (helper = helpers.orientation || (depth0 != null ? depth0.orientation : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"orientation","hash":{},"data":data}) : helper)))
	    + " jw-reset\">\n    <div class=\"jw-slider-container jw-reset\">\n        <div class=\"jw-rail jw-reset\"></div>\n        <div class=\"jw-buffer jw-reset\"></div>\n        <div class=\"jw-progress jw-reset\"></div>\n        <div class=\"jw-knob jw-reset\"></div>\n    </div>\n</div>";
	},"useData":true});

/***/ },
/* 126 */
/*!*******************************************!*\
  !*** ./src/js/view/components/tooltip.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/extendable */ 124),
	    __webpack_require__(/*! utils/helpers */ 45)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(Extendable, utils) {

	    var Tooltip = Extendable.extend({
	        'constructor' : function(name) {
	            this.el = document.createElement('div');
	            this.el.className = 'jw-icon jw-icon-tooltip ' + name + ' jw-button-color jw-reset jw-hidden';
	            this.container = document.createElement('div');
	            this.container.className = 'jw-overlay jw-reset';
	            this.openClass = 'jw-open';
	            this.componentType = 'tooltip';

	            this.el.appendChild(this.container);
	        },

	        addContent: function (elem) {
	            if(this.content){
	                this.removeContent();
	            }

	            this.content = elem;
	            this.container.appendChild(elem);
	        },
	        removeContent: function(){
	            if(this.content) {
	                this.container.removeChild(this.content);
	                this.content = null;
	            }
	        },
	        hasContent: function(){
	            return !!this.content;
	        },
	        element: function(){
	            return this.el;
	        },
	        openTooltip: function(evt) {
	            this.trigger('open-'+this.componentType, evt, {'isOpen': true});
	            this.isOpen = true;
	            utils.toggleClass(this.el, this.openClass, this.isOpen);
	        },
	        closeTooltip: function(evt) {
	            this.trigger('close-'+this.componentType, evt, {'isOpen': false});
	            this.isOpen = false;
	            utils.toggleClass(this.el, this.openClass, this.isOpen);
	        },
	        toggleOpenState: function(evt){
	            if(this.isOpen){
	                this.closeTooltip(evt);
	            } else {
	                this.openTooltip(evt);
	            }
	        }
	    });

	    return Tooltip;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 127 */
/*!**************************************************!*\
  !*** ./src/js/view/components/chapters.mixin.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/underscore */ 42),
	    __webpack_require__(/*! utils/helpers */ 45),
	    __webpack_require__(/*! parsers/captions/srt */ 99),
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(_, utils, srt) {

	    function Cue(time, text) {
	        this.time = time;
	        this.text = text;
	        this.el = document.createElement('div');
	        this.el.className = 'jw-cue jw-reset';
	    }

	    _.extend(Cue.prototype, {
	        align : function(duration) {
	            // If a percentage, use it, else calculate the percentage
	            if (this.time.toString().slice(-1) === '%') {
	                this.pct = this.time;
	            } else {
	                var percentage = (this.time/duration) * 100;
	                this.pct = percentage + '%';
	            }

	            this.el.style.left = this.pct;
	        }
	    });

	    var ChaptersMixin = {

	        loadChapters: function (file) {
	            utils.ajax(file, this.chaptersLoaded.bind(this), this.chaptersFailed, true);
	        },

	        chaptersLoaded: function (evt) {
	            var data = srt(evt.responseText);
	            if (_.isArray(data)) {
	                _.each(data, this.addCue, this);
	                this.drawCues();
	            }
	        },

	        chaptersFailed: function () {
	        },

	        addCue: function (obj) {
	            this.cues.push(new Cue(obj.begin, obj.text));
	        },

	        drawCues: function () {
	            // We won't want to draw them until we have a duration
	            var duration = this._model.mediaModel.get('duration');
	            if (!duration || duration <= 0) {
	                this._model.mediaModel.once('change:duration', this.drawCues, this);
	                return;
	            }

	            var _this = this;
	            _.each(this.cues, function (cue) {
	                cue.align(duration);
	                cue.el.addEventListener('mouseover', function () {
	                    _this.activeCue = cue;
	                });
	                cue.el.addEventListener('mouseout', function () {
	                    _this.activeCue = null;
	                });
	                _this.elementRail.appendChild(cue.el);
	            });
	        },

	        resetChapters : function() {
	            _.each(this.cues, function (cue) {
	                if (cue.el.parentNode) {
	                    cue.el.parentNode.removeChild(cue.el);
	                }
	            }, this);
	            this.cues = [];
	        }
	    };

	    return ChaptersMixin;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 128 */
/*!****************************************************!*\
  !*** ./src/js/view/components/thumbnails.mixin.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/underscore */ 42),
	    __webpack_require__(/*! utils/helpers */ 45),
	    __webpack_require__(/*! parsers/captions/srt */ 99),
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(_, utils, srt) {

	    function Thumbnail(obj) {
	        this.begin = obj.begin;
	        this.end = obj.end;
	        this.img = obj.text;
	    }

	    var ThumbnailsMixin = {
	        loadThumbnails: function (file) {
	            if (!file) {
	                return;
	            }
	            this.vttPath = file.split('?')[0].split('/').slice(0, -1).join('/');
	            // Only load the first individual image file so we can get its dimensions. All others are loaded when
	            // they're set as background-images.
	            this.individualImage = null;
	            utils.ajax(file, this.thumbnailsLoaded.bind(this), this.thumbnailsFailed.bind(this), true);
	        },

	        thumbnailsLoaded: function (evt) {
	            var data = srt(evt.responseText);
	            if (_.isArray(data)) {
	                _.each(data, function(obj) {
	                    this.thumbnails.push( new Thumbnail(obj) );
	                }, this);
	                this.drawCues();
	            }
	        },

	        thumbnailsFailed: function () { },

	        chooseThumbnail : function(seconds) {
	            var idx = _.sortedIndex(this.thumbnails, {end: seconds}, _.property('end'));
	            if (idx >= this.thumbnails.length) {
	                idx = this.thumbnails.length-1;
	            }
	            var url = this.thumbnails[idx].img;
	            if (url.indexOf('://') < 0) {
	                url = this.vttPath ? this.vttPath + '/' + url : url;
	            }

	            return url;
	        },

	        loadThumbnail : function(seconds) {
	            var url = this.chooseThumbnail(seconds);
	            var style = {
	                display: 'block',
	                margin: '0 auto',
	                backgroundPosition: '0 0'
	            };

	            var hashIndex = url.indexOf('#xywh');
	            if (hashIndex > 0) {
	                try {
	                    var matched = (/(.+)\#xywh=(\d+),(\d+),(\d+),(\d+)/).exec(url);
	                    url = matched[1];
	                    style.backgroundPosition = (matched[2] * -1) + 'px ' + (matched[3] * -1) + 'px';
	                    style.width = matched[4];
	                    style.height = matched[5];
	                } catch (e) {
	                    //this.vttFailed('Could not parse thumbnail');
	                    return;
	                }
	            } else {
	                if(!this.individualImage){
	                    this.individualImage = new Image();
	                    this.individualImage.onload = _.bind(function () {
	                        this.individualImage.onload = null;
	                        this.timeTip.image({ width: this.individualImage.width, height: this.individualImage.height });
	                    }, this);
	                    this.individualImage.src = url;
	                }
	            }

	            style.backgroundImage = 'url("' + url + '")';

	            return style;
	        },

	        showThumbnail : function(seconds) {
	            if (this.thumbnails.length < 1) {
	                return;
	            }
	            this.timeTip.image(this.loadThumbnail(seconds));
	        },

	        resetThumbnails : function() {
	            this.timeTip.image({
	                backgroundImage : '',
	                width : 0,
	                height : 0
	            });
	            this.thumbnails = [];
	        }
	    };

	    return ThumbnailsMixin;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 129 */
/*!****************************************!*\
  !*** ./src/js/view/components/menu.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! view/components/tooltip */ 126),
	    __webpack_require__(/*! utils/helpers */ 45),
	    __webpack_require__(/*! utils/underscore */ 42),
	    __webpack_require__(/*! utils/ui */ 105),
	    __webpack_require__(/*! handlebars-loader!templates/menu.html */ 130)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(Tooltip, utils, _, UI, menuTemplate) {
	    var Menu = Tooltip.extend({
	        setup : function (list, selectedIndex, options) {
	            if(!this.iconUI){
	                this.iconUI = new UI(this.el, {'useHover': true, 'directSelect': true});

	                this.toggleValueListener= this.toggleValue.bind(this);

	                this.toggleOpenStateListener = this.toggleOpenState.bind(this);
	                this.openTooltipListener = this.openTooltip.bind(this);
	                this.closeTooltipListener = this.closeTooltip.bind(this);

	                this.selectListener = this.select.bind(this);
	            }

	            this.reset();

	            list = _.isArray(list) ? list : [];

	            utils.toggleClass(this.el, 'jw-hidden', (list.length < 2));

	            var isMenu = list.length > 2 || (list.length === 2 && options && options.toggle === false);
	            var isToggle = !isMenu && list.length === 2;
	            utils.toggleClass(this.el, 'jw-toggle', isToggle);
	            utils.toggleClass(this.el, 'jw-button-color', !isToggle);
	            this.isActive = isMenu || isToggle;

	            if (isMenu) {
	                utils.removeClass(this.el, 'jw-off');

	                this.iconUI
	                    .on('tap', this.toggleOpenStateListener)
	                    .on('over', this.openTooltipListener)
	                    .on('out', this.closeTooltipListener);

	                var innerHtml = menuTemplate(list);
	                var elem = utils.createElement(innerHtml);
	                this.addContent(elem);
	                this.contentUI = new UI(this.content).on('click tap', this.selectListener);
	            } else if (isToggle) {
	                this.iconUI.on('click tap', this.toggleValueListener);
	            }

	            this.selectItem(selectedIndex);
	        },
	        toggleValue: function(){
	            this.trigger('toggleValue');
	        },
	        select: function (evt) {
	            if(evt.target.parentElement === this.content) {
	                var classes = utils.classList(evt.target);
	                // find the class with a name of the form 'jw-item-1'
	                var item = _.find(classes, function(c) { return c.indexOf('jw-item') === 0;});
	                if(item){
	                    this.trigger('select', parseInt(item.split('-')[2]));
	                    this.closeTooltipListener();
	                }
	            }
	        },
	        selectItem : function(selectedIndex) {
	            if(this.content){
	                for(var i=0; i<this.content.children.length; i++ ){
	                    utils.toggleClass(this.content.children[i], 'jw-active-option', (selectedIndex === i));
	                }
	            } else {
	                utils.toggleClass(this.el, 'jw-off', (selectedIndex === 0));
	            }
	        },
	        reset : function() {
	            utils.addClass(this.el, 'jw-off');
	            this.iconUI.off();
	            if(this.contentUI) {
	                this.contentUI.off().destroy();
	            }
	            this.removeContent();
	        }
	    });

	    return Menu;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 130 */
/*!*******************************************************!*\
  !*** ./~/handlebars-loader!./src/templates/menu.html ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(/*! ./~/handlebars/runtime.js */ 107);
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(depth0,helpers,partials,data) {
	    var helper, alias1=this.escapeExpression;

	  return "        <li class='jw-text jw-option jw-item-"
	    + alias1(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
	    + " jw-reset'>"
	    + alias1(this.lambda((depth0 != null ? depth0.label : depth0), depth0))
	    + "</li>\n";
	},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
	    var stack1;

	  return "<ul class=\"jw-menu jw-background-color jw-reset\">\n"
	    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "</ul>";
	},"useData":true});

/***/ },
/* 131 */
/*!********************************************!*\
  !*** ./src/js/view/components/playlist.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/helpers */ 45),
	    __webpack_require__(/*! utils/underscore */ 42),
	    __webpack_require__(/*! view/components/tooltip */ 126),
	    __webpack_require__(/*! utils/ui */ 105),
	    __webpack_require__(/*! handlebars-loader!templates/playlist.html */ 132)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(utils, _, Tooltip, UI, PlaylistTemplate) {

	    var Playlist = Tooltip.extend({
	        setup : function (list, selectedIndex) {
	            if(!this.iconUI){
	                this.iconUI = new UI(this.el, {'useHover': true});

	                this.toggleOpenStateListener = this.toggleOpenState.bind(this);
	                this.openTooltipListener = this.openTooltip.bind(this);
	                this.closeTooltipListener = this.closeTooltip.bind(this);

	                this.selectListener = this.onSelect.bind(this);
	            }

	            this.reset();

	            list = _.isArray(list) ? list : [];

	            utils.toggleClass(this.el, 'jw-hidden', (list.length < 2));

	            if (list.length >= 2) {
	                this.iconUI = new UI(this.el, {'useHover': true})
	                    .on('tap', this.toggleOpenStateListener)
	                    .on('over', this.openTooltipListener)
	                    .on('out', this.closeTooltipListener);

	                var innerHtml = this.menuTemplate(list, selectedIndex);
	                var elem = utils.createElement(innerHtml);
	                this.addContent(elem);
	                this.contentUI = new UI(this.content);

	                this.contentUI.on('click tap', this.selectListener);
	            }

	            this.originalList = list;
	        },

	        menuTemplate : function(list, selectedIndex) {
	            var newList = _.map(list, function(item, idx) {
	                return {
	                    active : (idx === selectedIndex),
	                    label : (idx+1)+ '.',
	                    title : item.title
	                };
	            });
	            return PlaylistTemplate(newList);
	        },

	        onSelect: function(evt) {
	            var elem = evt.target;
	            if(elem.tagName === 'UL'){
	                // skip if the target is not a menu option
	                return;
	            } else if(elem.tagName !== 'LI') {
	                // some menus have an extra level of nesting, this normalizes that
	                elem = elem.parentElement;
	            }

	            var classes = utils.classList(elem);
	            // find the class with a name of the form 'jw-item-1'
	            var item = _.find(classes, function(c) { return c.indexOf('jw-item') === 0;});
	            if (item) {
	                this.trigger('select', parseInt(item.split('-')[2]));
	                // Only close the tooltip if we are selecting an options
	                this.closeTooltip();
	            }
	        },

	        selectItem : function(item) {
	            this.setup(this.originalList, item);
	        },

	        reset : function() {
	            this.iconUI.off();
	            if(this.contentUI){
	                this.contentUI.off().destroy();
	            }
	            this.removeContent();
	        }
	    });

	    return Playlist;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 132 */
/*!***********************************************************!*\
  !*** ./~/handlebars-loader!./src/templates/playlist.html ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(/*! ./~/handlebars/runtime.js */ 107);
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(depth0,helpers,partials,data) {
	    var stack1;

	  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.active : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.program(4, data, 0),"data":data})) != null ? stack1 : "");
	},"2":function(depth0,helpers,partials,data) {
	    var helper, alias1=this.escapeExpression;

	  return "                <li class='jw-option jw-text jw-active-option jw-item-"
	    + alias1(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
	    + " jw-reset'>\n                    <span class=\"jw-label jw-reset\"><span class=\"jw-icon jw-icon-play jw-reset\"></span></span>\n                    <span class=\"jw-name jw-reset\">"
	    + alias1(this.lambda((depth0 != null ? depth0.title : depth0), depth0))
	    + "</span>\n                </li>\n";
	},"4":function(depth0,helpers,partials,data) {
	    var helper, alias1=this.escapeExpression, alias2=this.lambda;

	  return "                <li class='jw-option jw-text jw-item-"
	    + alias1(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
	    + " jw-reset'>\n                    <span class=\"jw-label jw-reset\">"
	    + alias1(alias2((depth0 != null ? depth0.label : depth0), depth0))
	    + "</span>\n                    <span class=\"jw-name jw-reset\">"
	    + alias1(alias2((depth0 != null ? depth0.title : depth0), depth0))
	    + "</span>\n                </li>\n";
	},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
	    var stack1;

	  return "<div class=\"jw-menu jw-playlist-container jw-background-color jw-reset\">\n\n    <div class=\"jw-tooltip-title jw-reset\">\n        <span class=\"jw-icon jw-icon-inline jw-icon-playlist jw-reset\"></span>\n        <span class=\"jw-text jw-reset\">播放列表</span>\n    </div>\n\n    <ul class=\"jw-playlist jw-reset\">\n"
	    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "    </ul>\n</div>";
	},"useData":true});

/***/ },
/* 133 */
/*!*************************************************!*\
  !*** ./src/js/view/components/volumetooltip.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! view/components/tooltip */ 126),
	    __webpack_require__(/*! view/components/slider */ 123),
	    __webpack_require__(/*! utils/ui */ 105),
	    __webpack_require__(/*! utils/helpers */ 45)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(Tooltip, Slider, UI, utils) {
	    var VolumeTooltip = Tooltip.extend({
	        'constructor' : function(_model, name) {
	            this._model = _model;

	            Tooltip.call(this, name);

	            this.volumeSlider = new Slider('jw-slider-volume jw-volume-tip', 'vertical');
	            this.addContent(this.volumeSlider.element());

	            this.volumeSlider.on('update', function (evt) {
	                this.trigger('update', evt);
	            }, this);

	            utils.removeClass(this.el, 'jw-hidden');

	            new UI(this.el, {'useHover': true, 'directSelect': true})
	                .on('click', this.toggleValue, this)
	                .on('tap', this.toggleOpenState, this)
	                .on('over', this.openTooltip, this)
	                .on('out', this.closeTooltip, this);

	            this._model.on('change:volume', this.onVolume, this);
	        },
	        toggleValue : function(){
	            this.trigger('toggleValue');
	        }
	    });

	    return VolumeTooltip;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));



/***/ },
/* 134 */
/*!******************************************!*\
  !*** ./src/js/view/components/drawer.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! view/components/tooltip */ 126),
	    __webpack_require__(/*! utils/helpers */ 45),
	    __webpack_require__(/*! utils/underscore */ 42),
	    __webpack_require__(/*! utils/ui */ 105)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(Tooltip, utils, _, UI) {
	    var Drawer = Tooltip.extend({
	        constructor: function(name) {
	            Tooltip.call(this, name);

	            this.container.className = 'jw-overlay-horizontal jw-reset';
	            this.openClass = 'jw-open-drawer';
	            this.componentType = 'drawer';
	        },
	        setup : function (list, isCompactMode) {
	            if(!this.iconUI){
	                this.iconUI = new UI(this.el, { 'useHover' : true, 'directSelect': true });

	                this.toggleOpenStateListener = this.toggleOpenState.bind(this);
	                this.openTooltipListener = this.openTooltip.bind(this);
	                this.closeTooltipListener = this.closeTooltip.bind(this);
	            }

	            this.reset();

	            list = _.isArray(list) ? list : [];

	            // Check how many icons we'd actually hide
	            this.activeContents = _.filter(list, function (ele) {
	                return ele.isActive;
	            });

	            // If we'd only hide no icons or 1 icon then it isn't worth using the drawer.
	            utils.toggleClass(this.el, 'jw-hidden', !isCompactMode || this.activeContents.length < 2);

	            // If we'd hide more than one icon, use the drawer.
	            if (isCompactMode && this.activeContents.length > 1) {
	                utils.removeClass(this.el, 'jw-off');

	                this.iconUI
	                    .on('tap', this.toggleOpenStateListener)
	                    .on('over', this.openTooltipListener)
	                    .on('out', this.closeTooltipListener);
	                
	                _.each(list, function (menu) {
	                    this.container.appendChild(menu.el);
	                }, this);
	            }
	        },
	        reset : function() {
	            utils.addClass(this.el, 'jw-off');
	            this.iconUI.off();
	            if(this.contentUI) {
	                this.contentUI.off().destroy();
	            }
	            this.removeContent();
	        }
	    });

	    return Drawer;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 135 */
/*!********************************!*\
  !*** ./src/js/view/preview.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/underscore */ 42)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(_) {

	    var Preview = function(_model) {
	        this.model = _model;

	        this.model.on('change:playlistItem', this.loadImage, this);
	    };

	    _.extend(Preview.prototype, {
	        setup: function(element) {
	            this.el = element;

	            if (this.model.get('playlistItem')) {
	                this.loadImage(this.model, this.model.get('playlistItem'));
	            }
	        },
	        loadImage: function(model, playlistItem) {
	            var img = playlistItem.image;

	            if (_.isString(img)) {
	                // encode special characters into URL
	                img = encodeURI(img);
	                this.el.style.backgroundImage = 'url("' + img + '")';
	            } else {
	                this.el.style.backgroundImage = '';
	            }
	        },
	        element : function() {
	            return this.el;
	        }
	    });

	    return Preview;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 136 */
/*!***********************************!*\
  !*** ./src/js/view/rightclick.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/helpers */ 45),
	    __webpack_require__(/*! handlebars-loader!templates/rightclick.html */ 137),
	    __webpack_require__(/*! utils/underscore */ 42),
	    __webpack_require__(/*! utils/ui */ 105),
	    __webpack_require__(/*! version */ 57)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(utils, rightclickTemplate, _, UI, version) {

	    var RightClick = function() {};

	    _.extend(RightClick.prototype, {
	        buildArray : function() {
	            var semverParts = version.split('+');
	            var majorMinorPatchPre = semverParts[0];

	            var obj = {
	                items : [{
	                    title: 'Powered by JW Player ' + majorMinorPatchPre,
	                    featured : true,
	                    showLogo : true,
	                    link: '//jwplayer.com/learn-more/?m=h&e=o&v=' + version
	                }]
	            };

	            var isPrerelease = majorMinorPatchPre.indexOf('-') > 0;
	            var versionMeta = semverParts[1];
	            if (isPrerelease && versionMeta) {
	                var pairs = versionMeta.split('.');
	                obj.items.push({
	                    title : 'build: (' + pairs[0] +'.'+ pairs[1] + ')',
	                    link : '#'
	                });
	            }

	            var _provider = this.model.get('provider').name;
	            if (_provider.indexOf('flash') >= 0) {
	                var text = 'Flash Version ' + utils.flashVersion();
	                obj.items.push({
	                    title : text,
	                    link : 'http://www.adobe.com/software/flash/about/'
	                });
	            }

	            return obj;
	        },
	        buildMenu : function() {
	            var obj = this.buildArray();
	            return utils.createElement(rightclickTemplate(obj));
	        },
	        updateHtml : function() {
	            this.el.innerHTML = this.buildMenu().innerHTML;
	        },

	        rightClick : function(evt) {
	            this.lazySetup();

	            if (this.mouseOverContext) {
	                // right click on menu item should execute it
	                return false;
	            }

	            this.hideMenu();
	            this.showMenu(evt);

	            return false;
	        },

	        getOffset: function(evt) {
	            var target = evt.target;
	            // offsetX is from the W3C standard, layerX is how Firefox does it
	            var x = evt.offsetX || evt.layerX;
	            var y = evt.offsetY || evt.layerY;
	            while (target !== this.playerElement) {
	                x += target.offsetLeft;
	                y += target.offsetTop;

	                target = target.parentNode;
	            }

	            return { x : x, y : y};
	        },
	        showMenu : function(evt) {
	            // Offset relative to player element
	            var off = this.getOffset(evt);

	            this.el.style.left = off.x+'px';
	            this.el.style.top  = off.y+'px';

	            utils.addClass(this.playerElement, 'jw-flag-rightclick-open');
	            utils.addClass(this.el, 'jw-open');
	            return false;
	        },

	        hideMenu : function() {
	            if (this.mouseOverContext) {
	                // If mouse is over the menu, do nothing
	                return;
	            }
	            utils.removeClass(this.playerElement, 'jw-flag-rightclick-open');
	            utils.removeClass(this.el, 'jw-open');
	        },

	        lazySetup : function() {
	            if (this.el) {
	                return;
	            }

	            this.el = this.buildMenu();

	            this.layer.appendChild(this.el);

	            this.hideMenuHandler = this.hideMenu.bind(this);
	            this.addOffListener(this.playerElement);
	            this.addOffListener(document);

	            // Update the menu if the provider changes
	            this.model.on('change:provider', this.updateHtml, this);

	            // Track if the mouse is above the menu or not
	            this.elementUI = new UI(this.el, {'useHover': true})
	                .on('over', function() { this.mouseOverContext = true; }, this)
	                .on('out', function() { this.mouseOverContext = false; }, this);
	        },

	        setup : function(_model, _playerElement, layer) {
	            this.playerElement = _playerElement;
	            this.model = _model;
	            this.mouseOverContext = false;
	            this.layer = layer;

	            // Defer the rest of setup until the first click
	            _playerElement.oncontextmenu = this.rightClick.bind(this);
	        },

	        addOffListener : function(element) {
	            element.addEventListener('mousedown', this.hideMenuHandler);
	            element.addEventListener('touchstart', this.hideMenuHandler);
	            element.addEventListener('pointerdown', this.hideMenuHandler);
	        },

	        removeOffListener : function(element) {
	            element.removeEventListener('mousedown', this.hideMenuHandler);
	            element.removeEventListener('touchstart', this.hideMenuHandler);
	            element.removeEventListener('pointerdown', this.hideMenuHandler);
	        },

	        destroy : function() {
	            if(this.el) {
	                this.hideMenu();
	                this.elementUI.off();
	                this.removeOffListener(this.playerElement);
	                this.removeOffListener(document);
	                this.hideMenuHandler = null;
	                this.el = null;
	            }

	            if (this.playerElement) {
	                this.playerElement.oncontextmenu = null;
	                this.playerElement = null;
	            }

	            if (this.model) {
	                this.model.off('change:provider', this.updateHtml);
	                this.model = null;
	            }

	        }
	    });

	    return RightClick;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 137 */
/*!*************************************************************!*\
  !*** ./~/handlebars-loader!./src/templates/rightclick.html ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(/*! ./~/handlebars/runtime.js */ 107);
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(depth0,helpers,partials,data) {
	    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

	  return "\n        <li class=\"jw-reset"
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.featured : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "\">\n            <a href=\""
	    + alias3(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"link","hash":{},"data":data}) : helper)))
	    + "\" class=\"jw-reset\" target=\"_top\">\n"
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.showLogo : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "                "
	    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
	    + "\n            </a>\n        </li>\n    ";
	},"2":function(depth0,helpers,partials,data) {
	    return " jw-featured";
	},"4":function(depth0,helpers,partials,data) {
	    return "                <span class=\"jw-icon jw-rightclick-logo jw-reset\"></span>\n";
	},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
	    var stack1;

	  return "<div class=\"jw-rightclick jw-reset\">\n    <ul class=\"jw-reset\">\n     <li class=\"jw-reset jw-featured\">\n            <a href=\"#\" class=\"jw-reset\" target=\"_top\">\n               JWP v7 \n            </a>\n        </li>\n  <!--   "
	    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + " -->\n    </ul>\n</div>";
	},"useData":true});

/***/ },
/* 138 */
/*!******************************!*\
  !*** ./src/js/view/title.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/underscore */ 42)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(_) {

	    var Title = function(_model) {
	        this.model = _model;

	        this.model.on('change:playlistItem', this.playlistItem, this);
	    };

	    _.extend(Title.prototype, {
	        // This is normally shown/hidden by states
	        //   these are only used for when no title exists
	        hide : function() {
	            this.el.style.display = 'none';
	        },
	        show : function() {
	            this.el.style.display = '';
	        },

	        setup : function(titleEl) {
	            this.el = titleEl;

	            // Perform the DOM search only once
	            var arr = this.el.getElementsByTagName('div');
	            this.title = arr[0];
	            this.description = arr[1];

	            if (this.model.get('playlistItem')) {
	                this.playlistItem(this.model, this.model.get('playlistItem'));
	            }
	        },

	        playlistItem : function(model, item) {
	            if (model.get('displaytitle') || model.get('displaydescription')) {
	                var title = '';
	                var description = '';

	                if (item.title && model.get('displaytitle')) {
	                    title = item.title;
	                }
	                if (item.description && model.get('displaydescription')) {
	                    description = item.description;
	                }

	                this.updateText(title, description);
	            } else {
	                this.hide();
	            }
	        },

	        updateText: function(title, description) {
	            this.title.innerHTML = title;
	            this.description.innerHTML = description;

	            if (this.title.firstChild || this.description.firstChild) {
	                this.show();
	            } else {
	                this.hide();
	            }
	        },

	        element: function(){
	            return this.el;
	        }
	    });

	    return Title;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 139 */
/*!*********************************************************!*\
  !*** ./~/handlebars-loader!./src/templates/player.html ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(/*! ./~/handlebars/runtime.js */ 107);
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
	    var helper;

	  return "<div id=\""
	    + this.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
	    + "\" class=\"jwplayer jw-reset\" tabindex=\"0\">\n    <div class=\"jw-aspect jw-reset\"></div>\n    <div class=\"jw-media jw-reset\"></div>\n    <div class=\"jw-preview jw-reset\"></div>\n    <div class=\"jw-title jw-reset\">\n        <div class=\"jw-title-primary jw-reset\"></div>\n        <div class=\"jw-title-secondary jw-reset\"></div>\n    </div>\n    <div class=\"jw-overlays jw-reset\"></div>\n    <div class=\"jw-controls jw-reset\"></div>\n</div>";
	},"useData":true});

/***/ },
/* 140 */
/*!******************************!*\
  !*** ./src/js/view/error.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! handlebars-loader!templates/error.html */ 141)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(error) {

	    function make(id, skin, title, body) {
	        return error({
	            id: id,
	            skin: skin,
	            title: title,
	            body: body
	        });
	    }

	    return make;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 141 */
/*!********************************************************!*\
  !*** ./~/handlebars-loader!./src/templates/error.html ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(/*! ./~/handlebars/runtime.js */ 107);
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
	    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

	  return "<div id=\""
	    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
	    + "\"class=\"jw-skin-"
	    + alias3(((helper = (helper = helpers.skin || (depth0 != null ? depth0.skin : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"skin","hash":{},"data":data}) : helper)))
	    + " jw-error jw-reset\">\n    <div class=\"jw-title jw-reset\">\n        <div class=\"jw-title-primary jw-reset\">"
	    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
	    + "</div>\n        <div class=\"jw-title-secondary jw-reset\">"
	    + alias3(((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"body","hash":{},"data":data}) : helper)))
	    + "</div>\n    </div>\n\n    <div class=\"jw-icon-container jw-reset\">\n        <div class=\"jw-display-icon-container jw-background-color jw-reset\">\n            <div class=\"jw-icon jw-icon-display jw-reset\"></div>\n        </div>\n    </div>\n</div>\n";
	},"useData":true});

/***/ },
/* 142 */
/*!***********************************!*\
  !*** ./src/js/api/api-actions.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! plugins/plugins */ 89),
	    __webpack_require__(/*! utils/underscore */ 42),
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(plugins, _) {

	    return function(_api, _controller) {
	        // Commented out methods are those which are not direct passthroughs
	        //   instead these have custom logic inside api.js
	        //   Ultimately they should be moved into this file
	        var passthroughs = [
	            // 'setup',
	            //'load',
	            //'play',
	            //'pause',
	            //'remove',

	            'seek',
	            'skipAd',
	            'stop',
	            'playlistNext',
	            'playlistPrev',
	            'playlistItem',
	            'resize',

	            'addButton',
	            'removeButton',

	            'registerPlugin',

	            'attachMedia'
	        ];


	        _.each(passthroughs, function(func) {
	            _api[func] = function() {
	                _controller[func].apply(_controller, arguments);
	                return _api;
	            };
	        });

	        _api.registerPlugin = plugins.registerPlugin;
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 143 */
/*!************************************!*\
  !*** ./src/js/api/api-mutators.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/underscore */ 42),
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(_) {

	    return function(_api, _controller) {

	        var modelGetters = [
	            'buffer',
	            'controls',
	            'position',
	            'duration',
	            'fullscreen',
	            'volume',
	            'mute',
	            'item', // this was playlistindex
	            'stretching',
	            'playlist'
	        ];

	        // given a name "buffer", it adds to jwplayer api a function named getBuffer
	        _.each(modelGetters, function(attr) {
	            var format = attr.slice(0,1).toUpperCase() + attr.slice(1);

	            _api['get' + format] = function() {
	                return _controller._model.get(attr);
	            };
	        });


	        var passthroughs = [
	            'getAudioTracks',
	            'getCaptionsList',

	            'getWidth',
	            'getHeight',
	            'getCurrentAudioTrack',
	            'setCurrentAudioTrack',

	            'getCurrentCaptions',
	            'setCurrentCaptions',

	            'getCurrentQuality',
	            'setCurrentQuality',

	            'getQualityLevels',
	            'getVisualQuality',

	            'getConfig',
	            'getState',

	            'getSafeRegion',
	            'isBeforeComplete',
	            'isBeforePlay',

	            'getProvider',
	            'detachMedia'

	            // These are implemented in api.js, but should be here
	            //'getItemMeta',
	            //'getMeta',
	            //'getPlaylistItem',
	            //'getContainer',
	            //'playlistItem',
	        ];

	        var passthroughsChain = [
	            // Sisters of the model getters
	            'setControls',
	            'setFullscreen',
	            'setVolume',
	            'setMute',
	            'setCues'
	        ];

	        // getters
	        _.each(passthroughs, function(func) {
	            _api[func] = function() {
	                if (_controller[func]) {
	                    return _controller[func].apply(_controller, arguments);
	                }
	                return null;
	            };
	        });
	        // setters (chainable)
	        _.each(passthroughsChain, function(func) {
	            _api[func] = function() {
	                _controller[func].apply(_controller, arguments);
	                return _api;
	            };
	        });
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 144 */
/*!*******************************************!*\
  !*** ./src/js/api/callbacks-deprecate.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(/*! utils/underscore */ 42),
	    __webpack_require__(/*! events/events */ 43)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(_, events) {

	    return function init(_api) {

	        var _eventMapping = {
	            onBufferChange: events.JWPLAYER_MEDIA_BUFFER,
	            onBufferFull: events.JWPLAYER_MEDIA_BUFFER_FULL,
	            onError: events.JWPLAYER_ERROR,
	            onSetupError: events.JWPLAYER_SETUP_ERROR,
	            onFullscreen: events.JWPLAYER_FULLSCREEN,
	            onMeta: events.JWPLAYER_MEDIA_META,
	            onMute: events.JWPLAYER_MEDIA_MUTE,
	            onPlaylist: events.JWPLAYER_PLAYLIST_LOADED,
	            onPlaylistItem: events.JWPLAYER_PLAYLIST_ITEM,
	            onPlaylistComplete: events.JWPLAYER_PLAYLIST_COMPLETE,
	            onReady: events.JWPLAYER_READY,
	            onResize: events.JWPLAYER_RESIZE,
	            onComplete: events.JWPLAYER_MEDIA_COMPLETE,
	            onSeek: events.JWPLAYER_MEDIA_SEEK,
	            onTime: events.JWPLAYER_MEDIA_TIME,
	            onVolume: events.JWPLAYER_MEDIA_VOLUME,
	            onBeforePlay: events.JWPLAYER_MEDIA_BEFOREPLAY,
	            onBeforeComplete: events.JWPLAYER_MEDIA_BEFORECOMPLETE,
	            onDisplayClick: events.JWPLAYER_DISPLAY_CLICK,
	            onControls: events.JWPLAYER_CONTROLS,
	            onQualityLevels: events.JWPLAYER_MEDIA_LEVELS,
	            onQualityChange: events.JWPLAYER_MEDIA_LEVEL_CHANGED,
	            onCaptionsList: events.JWPLAYER_CAPTIONS_LIST,
	            onCaptionsChange: events.JWPLAYER_CAPTIONS_CHANGED,
	            onAdError: events.JWPLAYER_AD_ERROR,
	            onAdClick: events.JWPLAYER_AD_CLICK,
	            onAdImpression: events.JWPLAYER_AD_IMPRESSION,
	            onAdTime: events.JWPLAYER_AD_TIME,
	            onAdComplete: events.JWPLAYER_AD_COMPLETE,
	            onAdCompanions: events.JWPLAYER_AD_COMPANIONS,
	            onAdSkipped: events.JWPLAYER_AD_SKIPPED,
	            onAdPlay: events.JWPLAYER_AD_PLAY,
	            onAdPause: events.JWPLAYER_AD_PAUSE,
	            onAdMeta: events.JWPLAYER_AD_META,
	            onCast: events.JWPLAYER_CAST_SESSION,
	            onAudioTrackChange: events.JWPLAYER_AUDIO_TRACK_CHANGED,
	            onAudioTracks: events.JWPLAYER_AUDIO_TRACKS
	        };

	        var _stateMapping = {
	            onBuffer: 'buffer',
	            onPause: 'pause',
	            onPlay: 'play',
	            onIdle: 'idle'
	        };

	        // Add state callbacks
	        _.each(_stateMapping, function (value, name) {
	            _api[name] = _.partial(_api.on, value, _);
	        });

	        // Add event callbacks
	        _.each(_eventMapping, function (value, name) {
	            _api[name] = _.partial(_api.on, value, _);
	        });
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 145 */
/*!*******************************!*\
  !*** ./src/css/jwplayer.less ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./../../~/autoprefixer-loader?browsers=%3E%201%25!./../../~/less-loader?compress!./jwplayer.less */ 146);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 150)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js?browsers=%3E%201%25!./../../node_modules/less-loader/index.js?compress!./jwplayer.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js?browsers=%3E%201%25!./../../node_modules/less-loader/index.js?compress!./jwplayer.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 146 */
/*!*******************************************************************************************************************!*\
  !*** ./~/css-loader!./~/autoprefixer-loader?browsers=%3E%201%25!./~/less-loader?compress!./src/css/jwplayer.less ***!
  \*******************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 147)();
	// imports


	// module
	exports.push([module.id, ".jw-reset{color:inherit;background-color:transparent;padding:0;margin:0;float:none;font-family:Arial,Helvetica,sans-serif;font-size:1em;line-height:1em;list-style:none;text-align:left;text-transform:none;vertical-align:baseline;border:0;direction:ltr;font-variant:inherit;font-stretch:inherit;-webkit-tap-highlight-color:rgba(255,255,255,0)}@font-face{font-family:'jw-icons';src:url(" + __webpack_require__(/*! ../../assets/fonts/jw-icons.woff */ 148) + ") format('woff'),url(" + __webpack_require__(/*! ../../assets/fonts/jw-icons.ttf */ 149) + ") format('truetype');font-weight:normal;font-style:normal}.jw-icon-inline,.jw-icon-tooltip,.jw-icon-display,.jw-controlbar .jw-menu .jw-option:before{font-family:'jw-icons';-webkit-font-smoothing:antialiased;font-style:normal;font-weight:normal;text-transform:none;background-color:transparent;font-variant:normal;-webkit-font-feature-settings:\"liga\";-ms-font-feature-settings:\"liga\" 1;-o-font-feature-settings:\"liga\";font-feature-settings:\"liga\";-moz-osx-font-smoothing:grayscale}.jw-icon-audio-tracks:before{content:\"\\E600\"}.jw-icon-buffer:before{content:\"\\E601\"}.jw-icon-cast:before{content:\"\\E603\"}.jw-icon-cast.jw-off:before{content:\"\\E602\"}.jw-icon-cc:before{content:\"\\E605\"}.jw-icon-cue:before{content:\"\\E606\"}.jw-icon-menu-bullet:before{content:\"\\E606\"}.jw-icon-error:before{content:\"\\E607\"}.jw-icon-fullscreen:before{content:\"\\E608\"}.jw-icon-fullscreen.jw-off:before{content:\"\\E613\"}.jw-icon-hd:before{content:\"\\E60A\"}.jw-watermark:before,.jw-rightclick-logo:before{content:\"\\E60B\"}.jw-icon-next:before{content:\"\\E60C\"}.jw-icon-pause:before{content:\"\\E60D\"}.jw-icon-play:before{content:\"\\E60E\"}.jw-icon-prev:before{content:\"\\E60F\"}.jw-icon-replay:before{content:\"\\E610\"}.jw-icon-volume:before{content:\"\\E612\"}.jw-icon-volume.jw-off:before{content:\"\\E611\"}.jw-icon-more:before{content:\"\\E614\"}.jw-icon-close:before{content:\"\\E615\"}.jw-icon-playlist:before{content:\"\\E616\"}.jwplayer{width:100%;font-size:16px;position:relative;display:block;min-height:0;overflow:hidden;box-sizing:border-box;font-family:Arial,Helvetica,sans-serif;background-color:#000;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.jwplayer *{box-sizing:inherit}.jwplayer.jw-flag-aspect-mode{height:auto !important}.jwplayer.jw-flag-aspect-mode .jw-aspect{display:block}.jwplayer .jw-aspect{display:none}.jwplayer:focus,.jwplayer .jw-swf{outline:none}.jwplayer:hover .jw-display-icon-container{background-color:#333;background:#333;background-size:#333}.jw-media,.jw-preview,.jw-overlays,.jw-controls{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}.jw-media{overflow:hidden;cursor:pointer}.jw-overlays{cursor:auto}.jw-media.jw-media-show{visibility:visible;opacity:1}.jw-media video{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;margin:auto;background:transparent}.jw-media video::-webkit-media-controls-start-playback-button{display:none}.jw-controls.jw-controls-disabled{display:none}.jw-controls .jw-controls-right{position:absolute;top:50%;right:0;-webkit-transform:translate(0, -50%);-ms-transform:translate(0, -50%);transform:translate(0, -50%)}.jw-text{height:1em;font-family:Arial,Helvetica,sans-serif;font-size:.75em;font-style:normal;font-weight:normal;color:white;text-align:center;font-variant:normal;font-stretch:normal}.jw-plugin{position:absolute}.jw-plugin .jw-banner{max-width:100%;opacity:0;cursor:pointer;position:absolute;margin:auto auto 0 auto;left:0;right:0;bottom:0;display:block}.jw-cast-screen{width:100%;height:100%}.jw-instream{position:absolute;top:0;right:0;bottom:0;left:0;display:none}.jw-icon-playback:before{content:\"\\E60E\"}.jw-tab-focus:focus{outline:solid 2px #0b7ef4}.jw-preview,.jw-captions,.jw-title,.jw-overlays,.jw-controls{pointer-events:none}.jw-overlays>div,.jw-media,.jw-controlbar,.jw-dock,.jw-logo,.jw-skip,.jw-display-icon-container{pointer-events:all}.jw-click{position:absolute;width:100%;height:100%}.jw-preview{position:absolute;display:none;opacity:1;visibility:visible;width:100%;height:100%;background:#000 no-repeat 50% 50%}.jwplayer .jw-preview,.jw-error .jw-preview,.jw-stretch-uniform .jw-preview{background-size:contain}.jw-stretch-none .jw-preview{background-size:auto auto}.jw-stretch-fill .jw-preview{background-size:cover}.jw-stretch-exactfit .jw-preview{background-size:100% 100%}.jw-display-icon-container{position:relative;top:50%;display:table;height:3.5em;width:3.5em;margin:-1.75em auto 0;cursor:pointer}.jw-display-icon-container .jw-icon-display{position:relative;display:table-cell;text-align:center;vertical-align:middle !important;background-position:50% 50%;background-repeat:no-repeat;font-size:2em}.jw-flag-audio-player .jw-display-icon-container,.jw-flag-dragging .jw-display-icon-container{display:none}.jw-icon{font-family:'jw-icons';-webkit-font-smoothing:antialiased;font-style:normal;font-weight:normal;text-transform:none;background-color:transparent;font-variant:normal;-webkit-font-feature-settings:\"liga\";-ms-font-feature-settings:\"liga\" 1;-o-font-feature-settings:\"liga\";font-feature-settings:\"liga\";-moz-osx-font-smoothing:grayscale}.jw-controlbar{display:table;position:absolute;right:0;left:0;bottom:0;height:2em;padding:0 .25em}.jw-controlbar .jw-hidden{display:none}.jw-controlbar.jw-drawer-expanded .jw-controlbar-left-group,.jw-controlbar.jw-drawer-expanded .jw-controlbar-center-group{opacity:0}.jw-background-color{background-color:#414040}.jw-group{display:table-cell}.jw-controlbar-center-group{width:100%;padding:0 .25em}.jw-controlbar-center-group .jw-slider-time,.jw-controlbar-center-group .jw-text-alt{padding:0}.jw-controlbar-center-group .jw-text-alt{display:none}.jw-controlbar-left-group,.jw-controlbar-right-group{white-space:nowrap}.jw-knob:hover,.jw-icon-inline:hover,.jw-icon-tooltip:hover,.jw-icon-display:hover,.jw-option:before:hover{color:#eee}.jw-icon-inline,.jw-icon-tooltip,.jw-slider-horizontal,.jw-text-elapsed,.jw-text-duration{display:inline-block;height:2em;position:relative;line-height:2em;vertical-align:middle;cursor:pointer}.jw-icon-inline,.jw-icon-tooltip{min-width:1.25em;text-align:center}.jw-icon-playback{min-width:2.25em}.jw-icon-volume{min-width:1.75em;text-align:left}.jw-time-tip{line-height:1em;pointer-events:none}.jw-icon-inline:after,.jw-icon-tooltip:after{width:100%;height:100%;font-size:1em}.jw-icon-cast{display:none}.jw-slider-volume.jw-slider-horizontal,.jw-icon-inline.jw-icon-volume{display:none}.jw-dock{margin:.75em;display:block;opacity:1;clear:right}.jw-dock:after{content:'';clear:both;display:block}.jw-dock-bg{position:absolute;top:0;right:0;width:100%;height:100%;border-radius:.5em 0 0 .5em;background:#333;opacity:.8;filter:alpha(opacity=80)}.jw-dock-button{cursor:pointer;display:block;position:relative;width:2.5em;height:2.5em;margin:.5em;margin-bottom:2.3em}.jw-dock-button .jw-arrow{display:none;position:absolute;bottom:-0.2em;width:.5em;height:.2em;left:50%;margin-left:-0.25em}.jw-dock-button .jw-overlay{position:relative;left:-25%;padding:.5em;white-space:nowrap}.jw-dock-button:hover .jw-overlay,.jw-dock-button:hover .jw-arrow{display:block}.jw-dock-image{width:100%;height:100%;background-position:50% 50%;background-repeat:no-repeat;opacity:.75}.jw-title{display:none;position:absolute;top:0;width:100%;font-size:.875em;height:8em;background:-webkit-linear-gradient(top, #000 0, #000 18%, rgba(0,0,0,0) 100%);background:linear-gradient(to bottom, #000 0, #000 18%, rgba(0,0,0,0) 100%)}.jw-title-primary,.jw-title-secondary{padding:.75em 1.5em;min-height:2.5em;width:75%;color:white;white-space:nowrap;text-overflow:ellipsis;overflow-x:hidden}.jw-title-primary{font-weight:bold}.jw-title-secondary{margin-top:-0.5em}.jw-slider-container{display:inline-block;height:1em;position:relative;-ms-touch-action:none;touch-action:none}.jw-rail,.jw-buffer,.jw-progress{position:absolute;cursor:pointer}.jw-progress{background-color:#fff}.jw-rail{background-color:#aaa}.jw-buffer{background-color:#202020}.jw-cue,.jw-knob{position:absolute;cursor:pointer}.jw-cue{background-color:#fff;width:.1em;height:.4em}.jw-knob{background-color:#aaa;width:.4em;height:.4em}.jw-slider-horizontal{width:4em;height:1em}.jw-slider-horizontal.jw-slider-volume{margin-right:5px}.jw-slider-horizontal .jw-rail,.jw-slider-horizontal .jw-buffer,.jw-slider-horizontal .jw-progress{width:100%;height:.4em}.jw-slider-horizontal .jw-progress,.jw-slider-horizontal .jw-buffer{width:0}.jw-slider-horizontal .jw-rail,.jw-slider-horizontal .jw-progress,.jw-slider-horizontal .jw-slider-container{width:100%}.jw-slider-horizontal .jw-knob{left:0;margin-left:-0.325em}.jw-slider-vertical{width:.75em;height:4em;bottom:0;position:absolute;padding:1em}.jw-slider-vertical .jw-rail,.jw-slider-vertical .jw-buffer,.jw-slider-vertical .jw-progress{bottom:0;height:100%}.jw-slider-vertical .jw-progress,.jw-slider-vertical .jw-buffer{height:0}.jw-slider-vertical .jw-slider-container,.jw-slider-vertical .jw-rail,.jw-slider-vertical .jw-progress{bottom:0;width:.75em;height:100%;left:0;right:0;margin:0 auto}.jw-slider-vertical .jw-slider-container{height:4em;position:relative}.jw-slider-vertical .jw-knob{bottom:0;left:0;right:0;margin:0 auto}.jw-slider-time{right:0;left:0;width:100%}.jw-tooltip-time{position:absolute}.jw-slider-volume .jw-buffer{display:none}.jw-captions{position:absolute;display:none;margin:0 auto;width:100%;left:0;bottom:3em;right:0;max-width:90%;text-align:center}.jw-captions.jw-captions-enabled{display:block}.jw-captions-window{display:none;padding:.25em;border-radius:.25em}.jw-captions-window.jw-captions-window-active{display:inline-block}.jw-captions-text{display:inline-block;color:white;background-color:transparent;word-wrap:break-word;white-space:pre-line;font-style:normal;font-weight:normal;text-align:center;text-decoration:none;line-height:1.3em;padding:.1em .8em}.jw-rightclick{display:none;position:absolute;white-space:nowrap}.jw-rightclick.jw-open{display:block}.jw-rightclick ul{list-style:none;font-weight:bold;border-radius:.15em;margin:0;border:1px solid #444;padding-left:0}.jw-rightclick .jw-rightclick-logo{font-size:2em;color:#ff0147;vertical-align:middle;padding-right:.3em;margin-right:.3em;border-right:1px solid #444}.jw-rightclick li{background-color:#000;border-bottom:1px solid #444;margin:0}.jw-rightclick a{color:#fff;text-decoration:none;padding:1em;display:block;font-size:.6875em}.jw-rightclick li:last-child{border-bottom:none}.jw-rightclick li:hover{background-color:#1a1a1a;cursor:pointer}.jw-rightclick .jw-featured{background-color:#252525;vertical-align:middle}.jw-rightclick .jw-featured a{color:#777}.jw-logo{float:right;padding:.75em;cursor:pointer;pointer-events:all}.jw-logo .jw-flag-audio-player{display:none}.jw-watermark{position:absolute;top:50%;left:0;right:0;bottom:0;text-align:center;font-size:14em;color:#eee;opacity:.33;pointer-events:none}.jw-icon-tooltip.jw-open .jw-overlay{opacity:1;visibility:visible}.jw-icon-tooltip.jw-hidden{display:none}.jw-overlay-horizontal{display:none}.jw-icon-tooltip.jw-open-drawer:before{display:none}.jw-icon-tooltip.jw-open-drawer .jw-overlay-horizontal{opacity:1;display:inline-block;vertical-align:top}.jw-overlay:before{position:absolute;top:0;bottom:0;left:-50%;width:100%;background-color:rgba(0,0,0,0);content:\" \"}.jw-slider-time .jw-overlay:before{height:1em;top:auto}.jw-time-tip,.jw-volume-tip,.jw-menu{position:relative;left:-50%;border:solid 1px #000;margin:0}.jw-volume-tip{width:100%;height:100%;display:block}.jw-time-tip{text-align:center;font-family:inherit;color:#aaa;bottom:1em;border:solid 4px #000}.jw-time-tip .jw-text{line-height:1em}.jw-controlbar .jw-overlay{margin:0;position:absolute;bottom:2em;left:50%;opacity:0;visibility:hidden}.jw-controlbar .jw-overlay .jw-contents{position:relative}.jw-controlbar .jw-option{position:relative;white-space:nowrap;cursor:pointer;list-style:none;height:1.5em;font-family:inherit;line-height:1.5em;color:#aaa;padding:0 .5em;font-size:.8em}.jw-controlbar .jw-option:hover,.jw-controlbar .jw-option:before:hover{color:#eee}.jw-controlbar .jw-option:before{padding-right:.125em}.jw-playlist-container ::-webkit-scrollbar-track{background-color:#333;border-radius:10px}.jw-playlist-container ::-webkit-scrollbar{width:5px;border:10px solid black;border-bottom:0;border-top:0}.jw-playlist-container ::-webkit-scrollbar-thumb{background-color:white;border-radius:5px}.jw-tooltip-title{border-bottom:1px solid #444;text-align:left;padding-left:.7em}.jw-playlist{max-height:11em;min-height:4.5em;overflow-x:hidden;overflow-y:scroll;width:calc(100% - 4px)}.jw-playlist .jw-option{height:3em;margin-right:5px;color:white;padding-left:1em;font-size:.8em}.jw-playlist .jw-label,.jw-playlist .jw-name{display:inline-block;line-height:3em;text-align:left;overflow:hidden;white-space:nowrap}.jw-playlist .jw-label{width:1em}.jw-playlist .jw-name{width:11em}.jw-skip{cursor:default;position:absolute;float:right;display:inline-block;right:.75em;bottom:3em}.jw-skip.jw-skippable{cursor:pointer}.jw-skip.jw-hidden{visibility:hidden}.jw-skip .jw-skip-icon{display:none;margin-left:-0.75em}.jw-skip .jw-skip-icon:before{content:\"\\E60C\"}.jw-skip .jw-text,.jw-skip .jw-skip-icon{color:#aaa;vertical-align:middle;line-height:1.5em;font-size:.7em}.jw-skip.jw-skippable:hover{cursor:pointer}.jw-skip.jw-skippable:hover .jw-text,.jw-skip.jw-skippable:hover .jw-skip-icon{color:#eee}.jw-skip.jw-skippable .jw-skip-icon{display:inline;margin:0}.jw-skip .jw-skiptext{padding:2em}.jwplayer.jw-state-playing.jw-flag-casting .jw-display-icon-container,.jwplayer.jw-state-paused.jw-flag-casting .jw-display-icon-container{display:table}.jwplayer.jw-flag-casting .jw-display-icon-container{border-radius:0;top:8em;padding:2em 5em;border:1px solid white}.jwplayer.jw-flag-casting .jw-display-icon-container .jw-icon{font-size:3em}.jwplayer.jw-flag-casting.jw-state-complete .jw-preview{display:none}.jw-cast{position:absolute;width:100%;height:100%;background-repeat:no-repeat;background-size:auto;background-position:50% 50%}.jw-cast-label{position:absolute;left:10px;right:10px;bottom:50%;margin-bottom:100px;text-align:center}.jw-cast-name{color:#ccc}.jw-state-idle .jw-preview{display:block}.jw-state-idle .jw-icon-display:before{content:\"\\E60E\"}.jw-state-idle .jw-controlbar{display:none}.jw-state-idle .jw-captions{display:none}.jw-state-idle .jw-title{display:block}.jwplayer.jw-state-playing .jw-display-icon-container{display:none}.jwplayer.jw-state-playing .jw-display-icon-container .jw-icon-display:before{content:\"\\E60D\"}.jwplayer.jw-state-playing .jw-icon-playback:before{content:\"\\E60D\"}.jwplayer.jw-state-paused .jw-display-icon-container{display:none}.jwplayer.jw-state-paused .jw-display-icon-container .jw-icon-display:before{content:\"\\E60E\"}.jwplayer.jw-state-paused .jw-icon-playback:before{content:\"\\E60E\"}.jwplayer.jw-state-buffering .jw-display-icon-container .jw-icon-display{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.jwplayer.jw-state-buffering .jw-display-icon-container .jw-icon-display:before{content:\"\\E601\"}@-webkit-keyframes spin{100%{-webkit-transform:rotate(360deg)}}@keyframes spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.jwplayer.jw-state-buffering .jw-display-icon-container .jw-text{display:none}.jwplayer.jw-state-buffering .jw-icon-playback:before{content:\"\\E60D\"}.jwplayer.jw-state-complete .jw-preview{display:block}.jwplayer.jw-state-complete .jw-display-icon-container .jw-icon-display:before{content:\"\\E610\"}.jwplayer.jw-state-complete .jw-display-icon-container .jw-text{display:none}.jwplayer.jw-state-complete .jw-icon-playback:before{content:\"\\E60E\"}.jwplayer.jw-state-complete .jw-captions{display:none}body .jw-error .jw-title,.jwplayer.jw-state-error .jw-title{display:block}body .jw-error .jw-title .jw-title-primary,.jwplayer.jw-state-error .jw-title .jw-title-primary{white-space:normal}body .jw-error .jw-preview,.jwplayer.jw-state-error .jw-preview{display:block}body .jw-error .jw-controlbar,.jwplayer.jw-state-error .jw-controlbar{display:none}body .jw-error .jw-captions,.jwplayer.jw-state-error .jw-captions{display:none}body .jw-error:hover .jw-display-icon-container,.jwplayer.jw-state-error:hover .jw-display-icon-container{cursor:default;color:#fff;background:#000}body .jw-error .jw-icon-display,.jwplayer.jw-state-error .jw-icon-display{cursor:default;font-family:'jw-icons';-webkit-font-smoothing:antialiased;font-style:normal;font-weight:normal;text-transform:none;background-color:transparent;font-variant:normal;-webkit-font-feature-settings:\"liga\";-ms-font-feature-settings:\"liga\" 1;-o-font-feature-settings:\"liga\";font-feature-settings:\"liga\";-moz-osx-font-smoothing:grayscale}body .jw-error .jw-icon-display:before,.jwplayer.jw-state-error .jw-icon-display:before{content:\"\\E607\"}body .jw-error .jw-icon-display:hover,.jwplayer.jw-state-error .jw-icon-display:hover{color:#fff}body .jw-error{font-size:16px;background-color:#000;color:#eee;width:100%;height:100%;display:table;opacity:1;position:relative}body .jw-error .jw-icon-container{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}.jwplayer.jw-flag-cast-available .jw-controlbar{display:table}.jwplayer.jw-flag-cast-available .jw-icon-cast{display:inline-block}.jwplayer.jw-flag-skin-loading .jw-captions,.jwplayer.jw-flag-skin-loading .jw-controls,.jwplayer.jw-flag-skin-loading .jw-title{display:none}.jwplayer.jw-flag-fullscreen{width:100% !important;height:100% !important;top:0;right:0;bottom:0;left:0;z-index:1000;margin:0;position:fixed}.jwplayer.jw-flag-fullscreen.jw-flag-user-inactive{cursor:none;-webkit-cursor-visibility:auto-hide}.jwplayer.jw-flag-live .jw-controlbar .jw-text-elapsed,.jwplayer.jw-flag-live .jw-controlbar .jw-text-duration,.jwplayer.jw-flag-live .jw-controlbar .jw-slider-time{display:none}.jwplayer.jw-flag-live .jw-controlbar .jw-text-alt{display:inline}.jw-flag-user-inactive.jw-state-playing .jw-controlbar,.jw-flag-user-inactive.jw-state-playing .jw-dock{display:none}.jw-flag-user-inactive.jw-state-playing .jw-logo.jw-hide{display:none}.jw-flag-user-inactive.jw-state-playing .jw-plugin,.jw-flag-user-inactive.jw-state-playing .jw-captions{bottom:.5em}.jwplayer.jw-flag-media-audio .jw-controlbar{display:table}.jw-flag-media-audio .jw-preview{display:block}.jwplayer.jw-flag-ads .jw-preview,.jwplayer.jw-flag-ads .jw-dock{display:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-inline,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-tooltip,.jwplayer.jw-flag-ads .jw-controlbar .jw-text,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-horizontal{display:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-playback,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-volume,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-volume,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-fullscreen{display:inline-block}.jwplayer.jw-flag-ads .jw-controlbar .jw-text-alt{display:inline}.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-volume.jw-slider-horizontal,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-inline.jw-icon-volume{display:inline-block}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-tooltip.jw-icon-volume{display:none}.jwplayer.jw-flag-ads .jw-logo{display:none}.jwplayer.jw-flag-ads-hide-controls .jw-controls{display:none !important}.jwplayer.jw-flag-ads.jw-flag-touch .jw-controlbar{display:table}.jwplayer.jw-flag-overlay-open .jw-title{display:none}.jwplayer.jw-flag-overlay-open .jw-controls-right .jw-logo{display:none}.jwplayer.jw-flag-rightclick-open{overflow:visible}.jwplayer.jw-flag-rightclick-open .jw-rightclick{z-index:16777215}.jw-flag-controls-disabled .jw-controls{visibility:hidden}.jw-flag-controls-disabled .jw-logo{visibility:visible}.jw-flag-controls-disabled .jw-media{cursor:auto}body .jwplayer.jw-flag-flash-blocked .jw-title{display:block}body .jwplayer.jw-flag-flash-blocked .jw-controls,body .jwplayer.jw-flag-flash-blocked .jw-overlays,body .jwplayer.jw-flag-flash-blocked .jw-preview{display:none}.jw-flag-touch .jw-controlbar,.jw-flag-touch .jw-skip,.jw-flag-touch .jw-plugin{font-size:1.5em}.jw-flag-touch .jw-captions{bottom:4.25em}.jw-flag-touch .jw-icon-tooltip.jw-open-drawer:before{display:inline}.jw-flag-touch .jw-icon-tooltip.jw-open-drawer:before{content:\"\\E615\"}.jw-flag-touch .jw-display-icon-container{pointer-events:none}.jw-flag-touch.jw-state-paused .jw-display-icon-container{display:table}.jw-flag-touch.jw-state-paused.jw-flag-dragging .jw-display-icon-container{display:none}.jw-flag-compact-player .jw-icon-playlist,.jw-flag-compact-player .jw-icon-next,.jw-flag-compact-player .jw-icon-prev,.jw-flag-compact-player .jw-text-elapsed,.jw-flag-compact-player .jw-text-duration{display:none}.jw-flag-audio-player{background-color:transparent}.jw-flag-audio-player .jw-media{visibility:hidden}.jw-flag-audio-player .jw-media object{width:1px;height:1px}.jw-flag-audio-player .jw-controlbar{display:table;bottom:0;margin:0;width:100%;min-width:100%;opacity:1}.jw-flag-audio-player .jw-controlbar .jw-icon-fullscreen{display:none}.jw-flag-audio-player .jw-controlbar .jw-icon-tooltip{display:none}.jw-flag-audio-player .jw-controlbar .jw-slider-volume.jw-slider-horizontal,.jw-flag-audio-player .jw-controlbar .jw-icon-inline.jw-icon-volume{display:inline-block}.jw-flag-audio-player .jw-controlbar .jw-icon-tooltip.jw-icon-volume{display:none}.jwplayer.jw-flag-audio-player .jw-controlbar{display:table;left:0}.jwplayer.jw-flag-audio-player .jw-controlbar{height:auto}.jwplayer.jw-flag-audio-player .jw-preview{display:none}.jwplayer.jw-flag-audio-player .jw-display-icon-container{display:none}.jw-skin-glow .jw-background-color{background:rgba(51,51,51,0.8)}.jw-skin-glow .jw-background-color{background:#333}.jw-skin-glow .jw-controlbar{background:rgba(19,20,21,0.8)}.jw-skin-glow .jw-text{color:#aaa}.jw-skin-glow .jw-tooltip-title{color:#aaa}.jw-skin-glow .jw-knob{color:#aaa}.jw-skin-glow .jw-button-color{color:#aaa}.jw-skin-glow .jw-button-color:hover{color:#fff}.jw-skin-glow .jw-toggle{color:#fff}.jw-skin-glow .jw-toggle.jw-off{color:#aaa}.jw-skin-glow .jw-option{color:#aaa}.jw-skin-glow .jw-option.jw-active-option{color:#fff}.jw-skin-glow .jw-icon-display{color:#aaa}.jw-skin-glow .jw-display-icon-container{border-radius:.5em}.jw-skin-glow .jw-display-icon-container:hover{background:#4d4d4d}.jw-skin-glow .jw-display-icon-container:hover .jw-icon-display{color:#fff}.jw-skin-glow .jw-rail{background:#2a2c2e}.jw-skin-glow .jw-buffer{background:#3b3d41}.jw-skin-glow .jw-progress{background:#fff}.jw-skin-glow .jw-slider-horizontal{background:rgba(19,20,21,0.8)}.jw-skin-glow .jw-slider-horizontal .jw-knob{margin-left:-0.325em}.jw-skin-glow .jw-slider-vertical .jw-knob{margin-bottom:-0.325em}.jw-skin-glow .jw-time-tip,.jw-skin-glow .jw-volume-tip,.jw-skin-glow .jw-menu{background:#333;border:0;padding:.5em}.jw-skin-glow .jw-skip{background:rgba(19,20,21,0.8);padding:.5em}.jw-skin-glow .jw-skip .jw-skip-icon{color:#aaa}.jw-skin-glow .jw-skip.jw-skippable:hover .jw-skip-icon,.jw-skin-glow .jw-skip.jw-skippable:hover .jw-text{color:#fff}.jw-skin-glow .jw-time-tip .jw-text,.jw-skin-glow .jw-dock-button .jw-text{color:#bbb}.jw-skin-glow .jw-time-tip{bottom:1em}.jw-skin-glow .jw-dock-button{background:#333;border-radius:.5em}.jw-skin-glow .jw-dock-button:hover{background:#4d4d4d}.jw-skin-glow .jw-playlist-container{padding:0}.jw-skin-glow .jw-icon-inline,.jw-skin-glow .jw-icon-tooltip,.jw-skin-glow .jw-text-elapsed,.jw-skin-glow .jw-text-duration{padding:0 .25em}.jw-skin-glow .jw-time-tip,.jw-skin-glow .jw-volume-tip,.jw-skin-glow .jw-menu,.jw-skin-glow .jw-skip{border-radius:.25em}.jw-skin-glow .jw-volume-tip,.jw-skin-glow .jw-menu{bottom:.3em}.jw-skin-glow .jw-playlist-container{left:-42%;bottom:0;border-radius:0}.jw-skin-glow .jw-playlist-container .jw-option{border-bottom:1px solid #000;color:#fff}.jw-skin-glow .jw-playlist-container .jw-option:hover,.jw-skin-glow .jw-playlist-container .jw-option.jw-active-option{background-color:rgba(19,20,21,0.8);color:#fff}.jw-skin-glow .jw-playlist-container ::-webkit-scrollbar-track{background-color:#000}.jw-skin-glow .jw-playlist-container ::-webkit-scrollbar{border:10px solid #3b3d41}.jw-skin-glow .jw-playlist-container ::-webkit-scrollbar-thumb{background-color:#fff}.jw-skin-glow .jw-tooltip-title{border-bottom:1px solid #000;background-color:#3b3d41}.jw-skin-glow .jw-rail,.jw-skin-glow .jw-buffer,.jw-skin-glow .jw-progress{border-radius:.5em}.jw-skin-glow .jw-knob{display:none}.jw-skin-glow .jw-slider-horizontal{background:transparent}.jw-skin-glow .jw-slider-horizontal .jw-cue{top:.075em;background-color:#000;width:.25em;height:.25em;border-radius:1em}.jw-skin-glow .jw-slider-vertical{bottom:5px}.jw-skin-glow .jw-slider-vertical .jw-rail{background-color:#141516}.jw-skin-glow .jw-slider-vertical .jw-rail,.jw-skin-glow .jw-slider-vertical .jw-progress{width:.4em}.jw-skin-glow .jw-overlays{z-index:1}", ""]);

	// exports


/***/ },
/* 147 */
/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 148 */
/*!************************************!*\
  !*** ./assets/fonts/jw-icons.woff ***!
  \************************************/
/***/ function(module, exports) {

	module.exports = "data:application/font-woff;base64,d09GRgABAAAAABQ4AAsAAAAAE+wAAQABAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxID2WNtYXAAAAFoAAAAVAAAAFQaVsydZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAD3AAAA9wKJaoQ2hlYWQAABE0AAAANgAAADYIhqKNaGhlYQAAEWwAAAAkAAAAJAmCBdxobXR4AAARkAAAAGwAAABscmAHPWxvY2EAABH8AAAAOAAAADg2EDnwbWF4cAAAEjQAAAAgAAAAIAAiANFuYW1lAAASVAAAAcIAAAHCwZOZtHBvc3QAABQYAAAAIAAAACAAAwAAAAMEmQGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA5hYDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOYW//3//wAAAAAAIOYA//3//wAB/+MaBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAABABgAAAFoAOAADoAPwBEAEkAACUVIi4CNTQ2Ny4BNTQ+AjMyHgIVFAYHHgEVFA4CIxEyFhc+ATU0LgIjIg4CFRQWFz4BMxExARUhNSEXFSE1IRcVITUhAUAuUj0jCgoKCkZ6o11do3pGCgoKCiM9Ui4qSh4BAjpmiE1NiGY6AQIeSioCVQIL/fWWAXX+i0oBK/7VHh4jPVIuGS4VH0MiXaN6RkZ6o10iQx8VLhkuUj0jAcAdGQ0bDk2IZjo6ZohNDhsNGR3+XgNilZXglZXglZUAAAABAEAAAAPAA4AAIQAAExQeAjMyPgI1MxQOAiMiLgI1ND4CMxUiDgIVMYs6ZohNTYhmOktGeqNdXaN6RkZ6o11NiGY6AcBNiGY6OmaITV2jekZGeqNdXaN6Rks6ZohNAAAEAEAAAATAA4AADgAcACoAMQAAJS4BJyERIREuAScRIREhByMuAyc1HgMXMSsBLgMnNR4DFzErATUeARcxAn8DBQQCDPxGCysLBDz9v1NaCERrjE9irINTCLVbByc6Sio9a1I1CLaBL0YMQgsoCgLB/ukDCgIBSPzCQk6HaEIIWAhQgKdgKUg5JgdYBzRRZzx9C0QuAAAAAAUAQAAABMADgAAOABkAJwA1ADwAACUuASchESERLgEnESERIQE1IREhLgMnMQEjLgMnNR4DFzErAS4DJzUeAxcxKwE1HgEXMQKAAgYFAg38QAwqCgRA/cD+gANA/iAYRVlsPgEtWghFa4xPYq2DUgmzWgcnO0oqPGpSNgm6gDBEDEAMKAwCwP7tAggDAUb8wAHQ8P3APWdUQRf98E2IaEIHWghQgKhgKUg4JgdaCDVRZzt9DEMuAAAEAEAAAAXAA4AABAAJAGcAxQAANxEhESEBIREhEQU+ATc+ATMyFhceARceARceARcjLgEnLgEnLgEnLgEjIgYHDgEHDgEHDgEVFBYXHgEXHgEXHgEzMjY3PgE3Mw4BBw4BBw4BBw4BIyImJy4BJy4BJy4BNTQ2Nz4BNzEhPgE3PgEzMhYXHgEXHgEXHgEXIy4BJy4BJy4BJy4BIyIGBw4BBw4BBw4BFRQWFx4BFx4BFx4BMzI2Nz4BNzMOAQcOAQcOAQcOASMiJicuAScuAScuATU0Njc+ATcxQAWA+oAFNvsUBOz8Iw4hExQsGBIhEA8cDQwUCAgLAlsBBQUECgYHDggIEAkQGgsLEgcHCgMDAwMDAwoHBxILCxoQFiEMDA8DWgIJBwgTDQwcERAkFBgsFBMhDg0VBwcHBwcHFQ0Bug0hFBMsGREhEBAcDAwVCAgKAloCBQQECwYGDggIEQgQGwsLEgcHCgMDAwMDAwoHBxILCxsQFSIMDA4DWwIJCAcUDAwdEBEkExksExQhDQ4UBwcICAcHFA4AA4D8gAM1/RYC6tcQGAgJCQUFBQ8KChgPDiETCQ4HBwwFBQgDAwIGBgYRCgoYDQ0cDg0aDQ0XCgoRBgYGDQ0OIhYUJBEQHAsLEgYGBgkICRcPDyQUFCwXGC0VFCQPEBgICQkFBQUPCgoYDw4hEwkOBwcMBQUIAwMCBgYGEQoKGA0NHA4NGg0NFwoKEQYGBg0NDiIWFCQREBwLCxIGBgYJCAkXDw8kFBQsFxgtFRQkDwAAAAADAEAAAAXAA4AAEABvAM4AACUhIiY1ETQ2MyEyFhURFAYjAT4BNz4BNz4BMzIWFx4BFx4BFx4BFzMuAScuAScuAScuASMiBgcOAQcOAQcOARUUFhceARceARceATMyNjc+ATc+ATc+ATcjDgEHDgEjIiYnLgEnLgEnLgE1NDY3OQEhPgE3PgE3PgEzMhYXHgEXHgEXHgEXMy4BJy4BJy4BJy4BIyIGBw4BBw4BBw4BFRQWFx4BFx4BFx4BMzI2Nz4BNz4BNz4BNyMOAQcOASMiJicuAScuAScuATU0Njc5AQUs+6g9V1c9BFg9V1c9/JoDCgcGEgsLGxAJEAgIDgYHCgQEBgFaAgoICBQNDBwQDyESGCwUEyEODRUHBwcHBwcVDQ4hExQrGRQkEBAdDAwUCAcJAloDDwwMIhUQGwsLEgYHCgMEAwMEAbkDCgcHEgsLGxAIEQgHDwYGCwQEBQFbAgoICBUMDBwQECERGSwTFCENDhQHBwgIBwcUDg0hFBMsGRMkERAdDAwUBwgJAlsDDgwNIRUQGwsLEgcHCgMDAwMDAFc+AlY+V1c+/ao+VwH0DRgKCxAGBgYCAwMIBQUMBwcOCRMhDg8YCgoOBgUFCQkIGBAPJBQVLRgXLBQUJA8PFwkICQYGBhILCxwQESQUFiIODQ0GBgYRCgoXDQ0aDg4bDQ0YCgsQBgYGAgMDCAUFDAcHDgkTIQ4PGAoKDgYFBQkJCBgQDyQUFS0YFywUFCQPDxcJCAkGBgYSCwscEBEkFBYiDg0NBgYGEQoKFw0NGg4OGw0AAAABAOAAoAMgAuAAFAAAARQOAiMiLgI1ND4CMzIeAhUDIC1OaTw8aU4tLU5pPDxpTi0BwDxpTi0tTmk8PGlOLS1OaTwAAAMAQAAQBEADkAADABAAHwAANwkBISUyNjU0JiMiBhUUFjMTNCYjIgYVERQWMzI2NRFAAgACAPwAAgAOFRUODhUVDiMVDg4VFQ4OFRADgPyAcBYQDxgWERAWAeYPGBYR/tcPGBYRASkAAgBAAAADwAOAAAcADwAANxEXNxcHFyEBIREnByc3J0CAsI2wgP5zAfMBjYCwjbCAAAGNgLCNsIADgP5zgLCNsIAAAAAFAEAAAAXAA4AABAAJABYAMwBPAAA3ESERIQEhESERATM1MxEjNSMVIxEzFSUeARceARceARUUBgcOAQcOAQcOASsBETMeARcxBxEzMjY3PgE3PgE3PgE1NCYnLgEnLgEnLgErAUAFgPqABTb7FATs/FS2YGC2ZGQCXBQeDg8UBwcJBgcHEwwMIRMTLBuwsBYqE6BHCRcJChIIBw0FBQUEAwINBwcTDAwgETcAA4D8gAM2/RcC6f7Arf5AwMABwK2dBxQODyIWFTAbGC4TFiIPDhgKCQcBwAIHB0P+5gQDAg0HBxcMDCETER0PDhgKCQ8EBQUABAA9AAAFwAOAABAAHQA7AFkAACUhIiY1ETQ2MyEyFhURFAYjASMVIzUjETM1MxUzEQUuAScuAScuASsBETMyNjc+ATc+ATc+ATUuASc5AQcOAQcOASsBETMyFhceARceARceARUUBgcOAQc5AQUq+6k+WFg+BFc+WFg+/bNgs2Rks2ABsAcXDA4fExMnFrCwGywTEx4PDBMHBwYCCAl3CBIKCRQMRzcTHgwMEwcHCwQDBAUFBQ0HAFg+AlQ+WFg+/aw+WAKdra3+QMDAAcB9FiIODxQHBwb+QAkHCRgPDiUTFiwYHTAW4ggNAgMEAR8EBQUPCgoYDw4fERMfDwwXBwAAAAABAEMABgOgA3oAjwAAExQiNScwJic0JicuAQcOARUcARUeARceATc+ATc+ATE2MhUwFAcUFhceARceATMyNjc+ATc+ATc+AzE2MhUwDgIVFBYXHgEXFjY3PgE3PgE3PgE3PgM3PAE1NCYnJgYHDgMxBiI1MDwCNTQmJyYGBw4BBw4DMQYiNTAmJy4BJyYGBw4BMRWQBgQIBAgCBQ4KBwkDFgcHIQ8QDwcHNgUEAwMHBQsJChcMBQ0FBwsHDBMICR8cFQUFAwQDCAUHFRERJBEMEwgJEgUOGQwGMjgvBAkHDBYEAz1IPAQFLyQRIhEQFgoGIiUcBQUEAgMYKCcmCgcsAboFBQwYDwUKBwUEAgMNBwcLBxRrDhENBwggDxOTCgqdMBM1EQwTCAcFBAIFCgcPIw4UQ0IxCgpTc3glEyMREBgIBwEKBxUKESUQJ00mE6/JrA8FBgIHDQMECAkGla2PCQk1VGYxNTsHAgUKChwQC2BqVQoKehYfTwUDRx8TkAMAAAAAAgBGAAAENgOAAAQACAAAJREzESMJAhEDxnBw/IADgPyAAAOA/IADgP5A/kADgAAAAgCAAAADgAOAAAQACQAAJREhESEBIREhEQKAAQD/AP4AAQD/AAADgPyAA4D8gAOAAAAAAAEAgAAABAADgAADAAAJAREBBAD8gAOAAcD+QAOA/kAAAgBKAAAEOgOAAAQACAAANxEjETMJAhG6cHADgPyAA4AAA4D8gAOA/kD+QAOAAAAAAQBDACADQwOgACkAAAEeARUUDgIjIi4CNTQ+AjM1DQE1Ig4CFRQeAjMyPgI1NCYnNwMNGhw8aYxPT4xoPT1ojE8BQP7APGlOLS1OaTw8aU4tFhNTAmMrYzVPjGg9PWiMT0+MaD2ArbOALU5pPDxpTi0tTmk8KUsfMAAAAAEAQABmAiADEwAGAAATETMlESUjQM0BE/7tzQEzARPN/VPNAAQAQAAABJADgAAXACsAOgBBAAAlJz4DNTQuAic3HgMVFA4CBzEvAT4BNTQmJzceAxUOAwcxJz4BNTQmJzceARUUBgcnBREzJRElIwPaKiY+KxcXKz4mKipDMBkZMEMqpCk5REQ5KSE0JBQBFCQzIcMiKCgiKiYwMCYq/c3NARP+7c0AIyheaXI8PHFpXikjK2ZyfEFBfHJmK4MjNZFUVJE1Ix5IUFgvL1lRRx2zFkgpK0YVIxxcNDVZHykDARPN/VPNAAACAEAAAAPDA4AABwAPAAABFyERFzcXBwEHJzcnIREnAypw/qlwl3mZ/iaWepZwAVdtAnNwAVdwlnqT/iOWepZw/qpsAAMAQAETBcACYAAMABkAJgAAARQGIyImNTQ2MzIWFSEUBiMiJjU0NjMyFhUhFAYjIiY1NDYzMhYVAY1iRUVhYUVFYgIWYUVFYmJFRWECHWFFRWJiRUVhAbpFYmJFRWFhRUViYkVFYWFFRWJiRUVhYUUAAAAAAQBmACYDmgNaACAAAAEXFhQHBiIvAQcGIicmND8BJyY0NzYyHwE3NjIXFhQPAQKj9yQkJGMd9vYkYx0kJPf3JCQkYx329iRjHSQk9wHA9iRjHSQk9/ckJCRjHfb2JGMdJCT39yQkJGMd9gAABgBEAAQDvAN8AAQACQAOABMAGAAdAAABIRUhNREhFSE1ESEVITUBMxUjNREzFSM1ETMVIzUBpwIV/esCFf3rAhX96/6dsrKysrKyA3xZWf6dWVn+nVlZAsaysv6dsrL+nbKyAAEAAAABGZqh06s/Xw889QALBAAAAAAA0dQiKwAAAADR1CIrAAAAAAXAA6AAAAAIAAIAAAAAAAAAAQAAA8D/wAAABgAAAAAABcAAAQAAAAAAAAAAAAAAAAAAABsEAAAAAAAAAAAAAAACAAAABgAAYAQAAEAFAABABQAAQAYAAEAGAABABAAA4ASAAEAEAABABgAAQAYAAD0D4ABDBIAARgQAAIAEAACABIAASgOAAEMEwABABMAAQAQAAEAGAABABAAAZgQAAEQAAAAAAAoAFAAeAIgAuAEEAWAChgOyA9QECAQqBKQFJgXoBgAGGgYqBkIGgAaSBvQHFgdQB4YHuAABAAAAGwDPAAYAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEADAAAAAEAAAAAAAIABwCNAAEAAAAAAAMADABFAAEAAAAAAAQADACiAAEAAAAAAAUACwAkAAEAAAAAAAYADABpAAEAAAAAAAoAGgDGAAMAAQQJAAEAGAAMAAMAAQQJAAIADgCUAAMAAQQJAAMAGABRAAMAAQQJAAQAGACuAAMAAQQJAAUAFgAvAAMAAQQJAAYAGAB1AAMAAQQJAAoANADganctc2l4LWljb25zAGoAdwAtAHMAaQB4AC0AaQBjAG8AbgBzVmVyc2lvbiAxLjEAVgBlAHIAcwBpAG8AbgAgADEALgAxanctc2l4LWljb25zAGoAdwAtAHMAaQB4AC0AaQBjAG8AbgBzanctc2l4LWljb25zAGoAdwAtAHMAaQB4AC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQByanctc2l4LWljb25zAGoAdwAtAHMAaQB4AC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="

/***/ },
/* 149 */
/*!***********************************!*\
  !*** ./assets/fonts/jw-icons.ttf ***!
  \***********************************/
/***/ function(module, exports) {

	module.exports = "data:application/octet-stream;base64,AAEAAAALAIAAAwAwT1MvMg8SA9kAAAC8AAAAYGNtYXAaVsydAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZiiWqEMAAAF4AAAPcGhlYWQIhqKNAAAQ6AAAADZoaGVhCYIF3AAAESAAAAAkaG10eHJgBz0AABFEAAAAbGxvY2E2EDnwAAARsAAAADhtYXhwACIA0QAAEegAAAAgbmFtZcGTmbQAABIIAAABwnBvc3QAAwAAAAATzAAAACAAAwSZAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADmFgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg5hb//f//AAAAAAAg5gD//f//AAH/4xoEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAAEAGAAAAWgA4AAOgA/AEQASQAAJRUiLgI1NDY3LgE1ND4CMzIeAhUUBgceARUUDgIjETIWFz4BNTQuAiMiDgIVFBYXPgEzETEBFSE1IRcVITUhFxUhNSEBQC5SPSMKCgoKRnqjXV2jekYKCgoKIz1SLipKHgECOmaITU2IZjoBAh5KKgJVAgv99ZYBdf6LSgEr/tUeHiM9Ui4ZLhUfQyJdo3pGRnqjXSJDHxUuGS5SPSMBwB0ZDRsOTYhmOjpmiE0OGw0ZHf5eA2KVleCVleCVlQAAAAEAQAAAA8ADgAAhAAATFB4CMzI+AjUzFA4CIyIuAjU0PgIzFSIOAhUxizpmiE1NiGY6S0Z6o11do3pGRnqjXU2IZjoBwE2IZjo6ZohNXaN6RkZ6o11do3pGSzpmiE0AAAQAQAAABMADgAAOABwAKgAxAAAlLgEnIREhES4BJxEhESEHIy4DJzUeAxcxKwEuAyc1HgMXMSsBNR4BFzECfwMFBAIM/EYLKwsEPP2/U1oIRGuMT2Ksg1MItVsHJzpKKj1rUjUItoEvRgxCCygKAsH+6QMKAgFI/MJCTodoQghYCFCAp2ApSDkmB1gHNFFnPH0LRC4AAAAABQBAAAAEwAOAAA4AGQAnADUAPAAAJS4BJyERIREuAScRIREhATUhESEuAycxASMuAyc1HgMXMSsBLgMnNR4DFzErATUeARcxAoACBgUCDfxADCoKBED9wP6AA0D+IBhFWWw+AS1aCEVrjE9irYNSCbNaByc7Sio8alI2CbqAMEQMQAwoDALA/u0CCAMBRvzAAdDw/cA9Z1RBF/3wTYhoQgdaCFCAqGApSDgmB1oINVFnO30MQy4AAAQAQAAABcADgAAEAAkAZwDFAAA3ESERIQEhESERBT4BNz4BMzIWFx4BFx4BFx4BFyMuAScuAScuAScuASMiBgcOAQcOAQcOARUUFhceARceARceATMyNjc+ATczDgEHDgEHDgEHDgEjIiYnLgEnLgEnLgE1NDY3PgE3MSE+ATc+ATMyFhceARceARceARcjLgEnLgEnLgEnLgEjIgYHDgEHDgEHDgEVFBYXHgEXHgEXHgEzMjY3PgE3Mw4BBw4BBw4BBw4BIyImJy4BJy4BJy4BNTQ2Nz4BNzFABYD6gAU2+xQE7PwjDiETFCwYEiEQDxwNDBQICAsCWwEFBQQKBgcOCAgQCRAaCwsSBwcKAwMDAwMDCgcHEgsLGhAWIQwMDwNaAgkHCBMNDBwRECQUGCwUEyEODRUHBwcHBwcVDQG6DSEUEywZESEQEBwMDBUICAoCWgIFBAQLBgYOCAgRCBAbCwsSBwcKAwMDAwMDCgcHEgsLGxAVIgwMDgNbAgkIBxQMDB0QESQTGSwTFCENDhQHBwgIBwcUDgADgPyAAzX9FgLq1xAYCAkJBQUFDwoKGA8OIRMJDgcHDAUFCAMDAgYGBhEKChgNDRwODRoNDRcKChEGBgYNDQ4iFhQkERAcCwsSBgYGCQgJFw8PJBQULBcYLRUUJA8QGAgJCQUFBQ8KChgPDiETCQ4HBwwFBQgDAwIGBgYRCgoYDQ0cDg0aDQ0XCgoRBgYGDQ0OIhYUJBEQHAsLEgYGBgkICRcPDyQUFCwXGC0VFCQPAAAAAAMAQAAABcADgAAQAG8AzgAAJSEiJjURNDYzITIWFREUBiMBPgE3PgE3PgEzMhYXHgEXHgEXHgEXMy4BJy4BJy4BJy4BIyIGBw4BBw4BBw4BFRQWFx4BFx4BFx4BMzI2Nz4BNz4BNz4BNyMOAQcOASMiJicuAScuAScuATU0Njc5ASE+ATc+ATc+ATMyFhceARceARceARczLgEnLgEnLgEnLgEjIgYHDgEHDgEHDgEVFBYXHgEXHgEXHgEzMjY3PgE3PgE3PgE3Iw4BBw4BIyImJy4BJy4BJy4BNTQ2NzkBBSz7qD1XVz0EWD1XVz38mgMKBwYSCwsbEAkQCAgOBgcKBAQGAVoCCggIFA0MHBAPIRIYLBQTIQ4NFQcHBwcHBxUNDiETFCsZFCQQEB0MDBQIBwkCWgMPDAwiFRAbCwsSBgcKAwQDAwQBuQMKBwcSCwsbEAgRCAcPBgYLBAQFAVsCCggIFQwMHBAQIREZLBMUIQ0OFAcHCAgHBxQODSEUEywZEyQREB0MDBQHCAkCWwMODA0hFRAbCwsSBwcKAwMDAwMAVz4CVj5XVz79qj5XAfQNGAoLEAYGBgIDAwgFBQwHBw4JEyEODxgKCg4GBQUJCQgYEA8kFBUtGBcsFBQkDw8XCQgJBgYGEgsLHBARJBQWIg4NDQYGBhEKChcNDRoODhsNDRgKCxAGBgYCAwMIBQUMBwcOCRMhDg8YCgoOBgUFCQkIGBAPJBQVLRgXLBQUJA8PFwkICQYGBhILCxwQESQUFiIODQ0GBgYRCgoXDQ0aDg4bDQAAAAEA4ACgAyAC4AAUAAABFA4CIyIuAjU0PgIzMh4CFQMgLU5pPDxpTi0tTmk8PGlOLQHAPGlOLS1OaTw8aU4tLU5pPAAAAwBAABAEQAOQAAMAEAAfAAA3CQEhJTI2NTQmIyIGFRQWMxM0JiMiBhURFBYzMjY1EUACAAIA/AACAA4VFQ4OFRUOIxUODhUVDg4VEAOA/IBwFhAPGBYREBYB5g8YFhH+1w8YFhEBKQACAEAAAAPAA4AABwAPAAA3ERc3FwcXIQEhEScHJzcnQICwjbCA/nMB8wGNgLCNsIAAAY2AsI2wgAOA/nOAsI2wgAAAAAUAQAAABcADgAAEAAkAFgAzAE8AADcRIREhASERIREBMzUzESM1IxUjETMVJR4BFx4BFx4BFRQGBw4BBw4BBw4BKwERMx4BFzEHETMyNjc+ATc+ATc+ATU0JicuAScuAScuASsBQAWA+oAFNvsUBOz8VLZgYLZkZAJcFB4ODxQHBwkGBwcTDAwhExMsG7CwFioToEcJFwkKEggHDQUFBQQDAg0HBxMMDCARNwADgPyAAzb9FwLp/sCt/kDAwAHArZ0HFA4PIhYVMBsYLhMWIg8OGAoJBwHAAgcHQ/7mBAMCDQcHFwwMIRMRHQ8OGAoJDwQFBQAEAD0AAAXAA4AAEAAdADsAWQAAJSEiJjURNDYzITIWFREUBiMBIxUjNSMRMzUzFTMRBS4BJy4BJy4BKwERMzI2Nz4BNz4BNz4BNS4BJzkBBw4BBw4BKwERMzIWFx4BFx4BFx4BFRQGBw4BBzkBBSr7qT5YWD4EVz5YWD79s2CzZGSzYAGwBxcMDh8TEycWsLAbLBMTHg8MEwcHBgIICXcIEgoJFAxHNxMeDAwTBwcLBAMEBQUFDQcAWD4CVD5YWD79rD5YAp2trf5AwMABwH0WIg4PFAcHBv5ACQcJGA8OJRMWLBgdMBbiCA0CAwQBHwQFBQ8KChgPDh8REx8PDBcHAAAAAAEAQwAGA6ADegCPAAATFCI1JzAmJzQmJy4BBw4BFRwBFR4BFx4BNz4BNz4BMTYyFTAUBxQWFx4BFx4BMzI2Nz4BNz4BNz4DMTYyFTAOAhUUFhceARcWNjc+ATc+ATc+ATc+Azc8ATU0JicmBgcOAzEGIjUwPAI1NCYnJgYHDgEHDgMxBiI1MCYnLgEnJgYHDgExFZAGBAgECAIFDgoHCQMWBwchDxAPBwc2BQQDAwcFCwkKFwwFDQUHCwcMEwgJHxwVBQUDBAMIBQcVEREkEQwTCAkSBQ4ZDAYyOC8ECQcMFgQDPUg8BAUvJBEiERAWCgYiJRwFBQQCAxgoJyYKBywBugUFDBgPBQoHBQQCAw0HBwsHFGsOEQ0HCCAPE5MKCp0wEzURDBMIBwUEAgUKBw8jDhRDQjEKClNzeCUTIxEQGAgHAQoHFQoRJRAnTSYTr8msDwUGAgcNAwQICQaVrY8JCTVUZjE1OwcCBQoKHBALYGpVCgp6Fh9PBQNHHxOQAwAAAAACAEYAAAQ2A4AABAAIAAAlETMRIwkCEQPGcHD8gAOA/IAAA4D8gAOA/kD+QAOAAAACAIAAAAOAA4AABAAJAAAlESERIQEhESERAoABAP8A/gABAP8AAAOA/IADgPyAA4AAAAAAAQCAAAAEAAOAAAMAAAkBEQEEAPyAA4ABwP5AA4D+QAACAEoAAAQ6A4AABAAIAAA3ESMRMwkCEbpwcAOA/IADgAADgPyAA4D+QP5AA4AAAAABAEMAIANDA6AAKQAAAR4BFRQOAiMiLgI1ND4CMzUNATUiDgIVFB4CMzI+AjU0Jic3Aw0aHDxpjE9PjGg9PWiMTwFA/sA8aU4tLU5pPDxpTi0WE1MCYytjNU+MaD09aIxPT4xoPYCts4AtTmk8PGlOLS1OaTwpSx8wAAAAAQBAAGYCIAMTAAYAABMRMyURJSNAzQET/u3NATMBE839U80ABABAAAAEkAOAABcAKwA6AEEAACUnPgM1NC4CJzceAxUUDgIHMS8BPgE1NCYnNx4DFQ4DBzEnPgE1NCYnNx4BFRQGBycFETMlESUjA9oqJj4rFxcrPiYqKkMwGRkwQyqkKTlERDkpITQkFAEUJDMhwyIoKCIqJjAwJir9zc0BE/7tzQAjKF5pcjw8cWleKSMrZnJ8QUF8cmYrgyM1kVRUkTUjHkhQWC8vWVFHHbMWSCkrRhUjHFw0NVkfKQMBE839U80AAAIAQAAAA8MDgAAHAA8AAAEXIREXNxcHAQcnNychEScDKnD+qXCXeZn+JpZ6lnABV20Cc3ABV3CWepP+I5Z6lnD+qmwAAwBAARMFwAJgAAwAGQAmAAABFAYjIiY1NDYzMhYVIRQGIyImNTQ2MzIWFSEUBiMiJjU0NjMyFhUBjWJFRWFhRUViAhZhRUViYkVFYQIdYUVFYmJFRWEBukViYkVFYWFFRWJiRUVhYUVFYmJFRWFhRQAAAAABAGYAJgOaA1oAIAAAARcWFAcGIi8BBwYiJyY0PwEnJjQ3NjIfATc2MhcWFA8BAqP3JCQkYx329iRjHSQk9/ckJCRjHfb2JGMdJCT3AcD2JGMdJCT39yQkJGMd9vYkYx0kJPf3JCQkYx32AAAGAEQABAO8A3wABAAJAA4AEwAYAB0AAAEhFSE1ESEVITURIRUhNQEzFSM1ETMVIzURMxUjNQGnAhX96wIV/esCFf3r/p2ysrKysrIDfFlZ/p1ZWf6dWVkCxrKy/p2ysv6dsrIAAQAAAAEZmqHTqz9fDzz1AAsEAAAAAADR1CIrAAAAANHUIisAAAAABcADoAAAAAgAAgAAAAAAAAABAAADwP/AAAAGAAAAAAAFwAABAAAAAAAAAAAAAAAAAAAAGwQAAAAAAAAAAAAAAAIAAAAGAABgBAAAQAUAAEAFAABABgAAQAYAAEAEAADgBIAAQAQAAEAGAABABgAAPQPgAEMEgABGBAAAgAQAAIAEgABKA4AAQwTAAEAEwABABAAAQAYAAEAEAABmBAAARAAAAAAACgAUAB4AiAC4AQQBYAKGA7ID1AQIBCoEpAUmBegGAAYaBioGQgaABpIG9AcWB1AHhge4AAEAAAAbAM8ABgAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAMAAAAAQAAAAAAAgAHAI0AAQAAAAAAAwAMAEUAAQAAAAAABAAMAKIAAQAAAAAABQALACQAAQAAAAAABgAMAGkAAQAAAAAACgAaAMYAAwABBAkAAQAYAAwAAwABBAkAAgAOAJQAAwABBAkAAwAYAFEAAwABBAkABAAYAK4AAwABBAkABQAWAC8AAwABBAkABgAYAHUAAwABBAkACgA0AOBqdy1zaXgtaWNvbnMAagB3AC0AcwBpAHgALQBpAGMAbwBuAHNWZXJzaW9uIDEuMQBWAGUAcgBzAGkAbwBuACAAMQAuADFqdy1zaXgtaWNvbnMAagB3AC0AcwBpAHgALQBpAGMAbwBuAHNqdy1zaXgtaWNvbnMAagB3AC0AcwBpAHgALQBpAGMAbwBuAHNSZWd1bGFyAFIAZQBnAHUAbABhAHJqdy1zaXgtaWNvbnMAagB3AC0AcwBpAHgALQBpAGMAbwBuAHNGb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"

/***/ },
/* 150 */
/*!*************************************!*\
  !*** ./~/style-loader/addStyles.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ])
});
;
//# sourceMappingURL=jwplayer.9f73de2589a35fa898c6.map