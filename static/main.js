/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/parse-gedcom/d3ize.js":
/*!********************************************!*\
  !*** ./node_modules/parse-gedcom/d3ize.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function hasTag(val) {\n    return function(node) {\n        return node.tag === val;\n    };\n}\n\nfunction d3ize(tree) {\n    var peopleNodes = tree\n        .filter(hasTag('INDI'))\n        .map(toNode);\n    var families = tree.filter(hasTag('FAM'));\n    var familyNodes = families.map(toNode);\n    var links = families.reduce(function(memo, family) {\n        return memo.concat(familyLinks(family));\n    }, []);\n    var allNodes = peopleNodes.concat(familyNodes);\n    var indexedNodes = allNodes.reduce(function(memo, node, i) {\n        memo[node.id] = i;\n        return memo;\n    }, {});\n    links = links.map(idToIndex(indexedNodes));\n    return {\n        nodes: allNodes,\n        links: links\n    };\n}\n\nfunction getName(p) {\n    if (p.tag === 'INDI') {\n        var nameNode = (p.tree.filter(hasTag('NAME')) || [])[0];\n        if (nameNode) {\n            return nameNode.data.replace(/\\//g, '');\n        } else {\n            return '?';\n        }\n    } else {\n        return 'Family';\n    }\n}\n\nfunction toNode(p) {\n    p.id = p.pointer;\n    p.name = getName(p);\n    return p;\n}\n\nfunction idToIndex(indexedNodes) {\n    return function(link) {\n        function getIndexed(id) {\n            return indexedNodes[id];\n        }\n        return {\n            source: getIndexed(link.source),\n            target: getIndexed(link.target)\n        };\n    };\n}\n\nfunction familyLinks(family) {\n    var memberLinks = family.tree.filter(function(member) {\n        // avoid connecting MARR, etc: things that are not\n        // people.\n        return member.data && member.data[0] === '@';\n    }).map(function(member) {\n        return {\n            source: family.pointer,\n            target: member.data\n        };\n    });\n    return memberLinks;\n}\n\nmodule.exports = d3ize;\n\n\n//# sourceURL=webpack:///./node_modules/parse-gedcom/d3ize.js?");

/***/ }),

/***/ "./node_modules/parse-gedcom/index.js":
/*!********************************************!*\
  !*** ./node_modules/parse-gedcom/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var crawl = __webpack_require__(/*! tree-crawl */ \"./node_modules/tree-crawl/dist/tree-crawl.js\");\n\n// from https://github.com/madprime/python-gedcom/blob/master/gedcom/__init__.py\n// * Level must start with nonnegative int, no leading zeros.\n// * Pointer optional, if it exists it must be flanked by '@'\n// * Tag must be alphanumeric string\n// * Value optional, consists of anything after a space to end of line\n//   End of line defined by \\n or \\r\nvar lineRe = /\\s*(0|[1-9]+[0-9]*) (@[^@]+@ |)([A-Za-z0-9_]+)( [^\\n\\r]*|)/;\n\nfunction parse(input) {\n    var start = { root: { tree: [] }, level: 0 };\n    start.pointer = start.root;\n\n    var data = input\n        .split('\\n')\n        .map(mapLine)\n        .filter(function(_) { return _; })\n        .reduce(buildTree, start)\n        .root;\n\n    crawl(data, cleanUp, { getChildren });\n    return data.tree;\n\n    // the basic trick of this module is turning the suggested tree\n    // structure of a GEDCOM file into a tree in JSON. This reduction\n    // does that. The only real trick is the `.up` member of objects\n    // that points to a level up in the structure. This we have to\n    // censor before JSON.stringify since it creates circular references.\n    function buildTree(memo, data) {\n        if (data.level === memo.level) {\n            memo.pointer.tree.push(data);\n        } else if (data.level > memo.level) {\n            var up = memo.pointer;\n            memo.pointer = memo.pointer.tree[\n                memo.pointer.tree.length - 1];\n                memo.pointer.tree.push(data);\n                memo.pointer.up = up;\n                memo.level = data.level;\n        } else if (data.level < memo.level) {\n            // the jump up in the stack may be by more than one, so ascend\n            // until we're at the right level.\n            while (data.level <= memo.pointer.level && memo.pointer.up) {\n                memo.pointer = memo.pointer.up;\n            }\n            memo.pointer.tree.push(data);\n            memo.level = data.level;\n        }\n        return memo;\n    }\n\n    function mapLine(data) {\n        var match = data.match(lineRe);\n        if (!match) return null;\n        return {\n            level: parseInt(match[1], 10),\n            pointer: match[2].trim(),\n            tag: match[3].trim(),\n            data: match[4].trimLeft(),\n            tree: []\n        };\n    }\n\n    function cleanUp(node) {\n        delete node.up;\n        delete node.level;\n    }\n\n    function getChildren(node) {\n        return node.tree;\n    }\n}\n\nmodule.exports.parse = parse;\nmodule.exports.d3ize = __webpack_require__(/*! ./d3ize */ \"./node_modules/parse-gedcom/d3ize.js\");\n\n\n//# sourceURL=webpack:///./node_modules/parse-gedcom/index.js?");

/***/ }),

/***/ "./node_modules/tree-crawl/dist/tree-crawl.js":
/*!****************************************************!*\
  !*** ./node_modules/tree-crawl/dist/tree-crawl.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function (global, factory) {\n\t true ? module.exports = factory() :\n\tundefined;\n}(this, (function () { 'use strict';\n\nfunction Context(flags, cursor) {\n  this.flags = flags;\n  this.cursor = cursor;\n}\nContext.prototype = {\n  skip: function skip() {\n    this.flags.skip = true;\n  },\n  break: function _break() {\n    this.flags.break = true;\n  },\n  remove: function remove() {\n    this.flags.remove = true;\n  },\n  replace: function replace(node) {\n    this.flags.replace = node;\n  },\n  get parent() {\n    return this.cursor.parent;\n  },\n  get depth() {\n    return this.cursor.depth;\n  },\n  get level() {\n    return this.cursor.depth + 1;\n  },\n  get index() {\n    return this.cursor.index;\n  }\n};\nfunction ContextFactory(flags, cursor) {\n  return new Context(flags, cursor);\n}\n\nfunction Stack(initial) {\n  this.xs = [initial];\n  this.top = 0;\n}\nStack.prototype = {\n  push: function push(x) {\n    this.top++;\n    if (this.top < this.xs.length) {\n      this.xs[this.top] = x;\n    } else {\n      this.xs.push(x);\n    }\n  },\n  pushArrayReverse: function pushArrayReverse(xs) {\n    for (var i = xs.length - 1; i >= 0; i--) {\n      this.push(xs[i]);\n    }\n  },\n  pop: function pop() {\n    var x = this.peek();\n    this.top--;\n    return x;\n  },\n  peek: function peek() {\n    return this.xs[this.top];\n  },\n  isEmpty: function isEmpty() {\n    return -1 === this.top;\n  }\n};\nfunction QueueFactory(initial) {\n  return new Stack(initial);\n}\n\nfunction DfsCursor() {\n  this.depth = 0;\n  this.stack = QueueFactory({ node: null, index: -1 });\n}\nDfsCursor.prototype = {\n  moveDown: function moveDown(node) {\n    this.depth++;\n    this.stack.push({ node: node, index: 0 });\n  },\n  moveUp: function moveUp() {\n    this.depth--;\n    this.stack.pop();\n  },\n  moveNext: function moveNext() {\n    this.stack.peek().index++;\n  },\n  get parent() {\n    return this.stack.peek().node;\n  },\n  get index() {\n    return this.stack.peek().index;\n  }\n};\nfunction CursorFactory() {\n  return new DfsCursor();\n}\n\nfunction Flags() {\n  this.break = false;\n  this.skip = false;\n  this.remove = false;\n  this.replace = null;\n}\nFlags.prototype = {\n  reset: function reset() {\n    this.break = false;\n    this.skip = false;\n    this.remove = false;\n    this.replace = null;\n  }\n};\nfunction FlagsFactory() {\n  return new Flags();\n}\n\nfunction isNotEmpty(xs) {\n  return xs && 0 !== xs.length;\n}\n\nfunction dfsPre(root, iteratee, getChildren) {\n  var flags = FlagsFactory();\n  var cursor = CursorFactory();\n  var context = ContextFactory(flags, cursor);\n  var stack = QueueFactory(root);\n  var dummy = Object.assign({}, root);\n  while (!stack.isEmpty()) {\n    var node = stack.pop();\n    if (node === dummy) {\n      cursor.moveUp();\n      continue;\n    }\n    flags.reset();\n    iteratee(node, context);\n    if (flags.break) break;\n    if (flags.remove) continue;\n    cursor.moveNext();\n    if (!flags.skip) {\n      if (flags.replace) {\n        node = flags.replace;\n      }\n      var children = getChildren(node);\n      if (isNotEmpty(children)) {\n        stack.push(dummy);\n        stack.pushArrayReverse(children);\n        cursor.moveDown(node);\n      }\n    }\n  }\n}\n\nfunction dfsPost(root, iteratee, getChildren) {\n  var flags = FlagsFactory();\n  var cursor = CursorFactory();\n  var context = ContextFactory(flags, cursor);\n  var stack = QueueFactory(root);\n  var ancestors = QueueFactory(null);\n  while (!stack.isEmpty()) {\n    var node = stack.peek();\n    var parent = ancestors.peek();\n    var children = getChildren(node);\n    flags.reset();\n    if (node === parent || !isNotEmpty(children)) {\n      if (node === parent) {\n        ancestors.pop();\n        cursor.moveUp();\n      }\n      stack.pop();\n      iteratee(node, context);\n      if (flags.break) break;\n      if (flags.remove) continue;\n      cursor.moveNext();\n    } else {\n      ancestors.push(node);\n      cursor.moveDown(node);\n      stack.pushArrayReverse(children);\n    }\n  }\n}\n\nvar THRESHOLD = 32768;\nfunction Queue(initial) {\n  this.xs = [initial];\n  this.top = 0;\n  this.maxLength = 0;\n}\nQueue.prototype = {\n  enqueue: function enqueue(x) {\n    this.xs.push(x);\n  },\n  enqueueMultiple: function enqueueMultiple(xs) {\n    for (var i = 0, len = xs.length; i < len; i++) {\n      this.enqueue(xs[i]);\n    }\n  },\n  dequeue: function dequeue() {\n    var x = this.peek();\n    this.top++;\n    if (this.top === THRESHOLD) {\n      this.xs = this.xs.slice(this.top);\n      this.top = 0;\n    }\n    return x;\n  },\n  peek: function peek() {\n    return this.xs[this.top];\n  },\n  isEmpty: function isEmpty() {\n    return this.top === this.xs.length;\n  }\n};\nfunction QueueFactory$1(initial) {\n  return new Queue(initial);\n}\n\nfunction BfsCursor() {\n  this.depth = 0;\n  this.index = -1;\n  this.queue = QueueFactory$1({ node: null, arity: 1 });\n  this.levelNodes = 1;\n  this.nextLevelNodes = 0;\n}\nBfsCursor.prototype = {\n  store: function store(node, arity) {\n    this.queue.enqueue({ node: node, arity: arity });\n    this.nextLevelNodes += arity;\n  },\n  moveNext: function moveNext() {\n    this.index++;\n  },\n  moveForward: function moveForward() {\n    this.queue.peek().arity--;\n    this.levelNodes--;\n    if (0 === this.queue.peek().arity) {\n      this.index = 0;\n      this.queue.dequeue();\n    }\n    if (0 === this.levelNodes) {\n      this.depth++;\n      this.levelNodes = this.nextLevelNodes;\n      this.nextLevelNodes = 0;\n    }\n  },\n  get parent() {\n    return this.queue.peek().node;\n  }\n};\nfunction CursorFactory$1() {\n  return new BfsCursor();\n}\n\nfunction bfs(root, iteratee, getChildren) {\n  var flags = FlagsFactory();\n  var cursor = CursorFactory$1();\n  var context = ContextFactory(flags, cursor);\n  var queue = QueueFactory$1(root);\n  while (!queue.isEmpty()) {\n    var node = queue.dequeue();\n    flags.reset();\n    iteratee(node, context);\n    if (flags.break) break;\n    if (!flags.remove) {\n      cursor.moveNext();\n      if (flags.replace) {\n        node = flags.replace;\n      }\n      if (!flags.skip) {\n        var children = getChildren(node);\n        if (isNotEmpty(children)) {\n          queue.enqueueMultiple(children);\n          cursor.store(node, children.length);\n        }\n      }\n    }\n    cursor.moveForward();\n  }\n}\n\nvar defaultGetChildren = function defaultGetChildren(node) {\n  return node.children;\n};\nfunction crawl(root, iteratee, options) {\n  if (null == root) return;\n  options = options || {};\n  var order = options.order || 'pre';\n  var getChildren = options.getChildren || defaultGetChildren;\n  if ('pre' === order) {\n    dfsPre(root, iteratee, getChildren);\n  } else if ('post' === order) {\n    dfsPost(root, iteratee, getChildren);\n  } else if ('bfs' === order) {\n    bfs(root, iteratee, getChildren);\n  }\n}\n\nreturn crawl;\n\n})));\n\n\n//# sourceURL=webpack:///./node_modules/tree-crawl/dist/tree-crawl.js?");

/***/ }),

/***/ "./src/gedcom-reader/index.js":
/*!************************************!*\
  !*** ./src/gedcom-reader/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mixins_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mixins/data */ \"./src/gedcom-reader/mixins/data.js\");\n/* harmony import */ var _mixins_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mixins/names */ \"./src/gedcom-reader/mixins/names.js\");\n/* harmony import */ var _mixins_children__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mixins/children */ \"./src/gedcom-reader/mixins/children.js\");\n/* harmony import */ var _mixins_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mixins/events */ \"./src/gedcom-reader/mixins/events.js\");\n\n\n\n\n\nconst gedcom = __webpack_require__(/*! parse-gedcom */ \"./node_modules/parse-gedcom/index.js\")\n\nfunction readGedcom (input) {\n  const parseGedcom = JSON.stringify(gedcom.parse(input), null, 2)\n  const obj = JSON.parse(parseGedcom)\n\n  // obj.forEach(el => console.log(el))\n\n  function createEntry (el) {\n    const o = {\n      id: el.pointer || '',\n      tag: el.tag\n    }\n\n    if (el.tag === 'FAM') {\n      o.husb = Object(_mixins_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(el, 'HUSB')\n      o.wife = Object(_mixins_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(el, 'WIFE')\n      o.marr = Object(_mixins_events__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(el, 'MARR')\n      o.children = Object(_mixins_children__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(el)\n    }\n\n    if (el.tag === 'INDI') {\n      o.name = Object(_mixins_names__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(el)\n      o.sex = Object(_mixins_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(el, 'SEX')\n      o.birt = Object(_mixins_events__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(el, 'BIRT')\n      o.deat = Object(_mixins_events__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(el, 'DEAT')\n      o.buri = Object(_mixins_events__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(el, 'BURI')\n      o.chr = Object(_mixins_events__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(el, 'CHR')\n    }\n\n    return o\n  }\n\n  function combineEntries () {\n    const target = {\n      entries: []\n    }\n\n    obj.forEach(el => {\n      target.entries.push(createEntry(el))\n    })\n\n    console.log('Output:', target)\n    return target\n  }\n\n  return combineEntries()\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (readGedcom);\n\n\n//# sourceURL=webpack:///./src/gedcom-reader/index.js?");

/***/ }),

/***/ "./src/gedcom-reader/mixins/children.js":
/*!**********************************************!*\
  !*** ./src/gedcom-reader/mixins/children.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction getChildren (el) {\n  if (!el.tree) return\n\n  const node = el.tree\n  const children = []\n\n  const child = node.filter(function (child) {\n    return child.tag === 'CHIL'\n  })\n\n  children.push(child)\n  return children\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getChildren);\n\n\n//# sourceURL=webpack:///./src/gedcom-reader/mixins/children.js?");

/***/ }),

/***/ "./src/gedcom-reader/mixins/data.js":
/*!******************************************!*\
  !*** ./src/gedcom-reader/mixins/data.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tags */ \"./src/gedcom-reader/mixins/tags.js\");\n\n\n//\n// Get tag data by \"tag\" type\n//\nfunction getDataByType (el, type) {\n  if (!el.tree) return\n\n  const node = Object(_tags__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(el.tree, String(type))[0]\n  const o = {}\n\n  if (node) o.data = node.data\n  return o\n}\n\n//\n// Get single data entry for specified type\n//\nfunction getData (el, type) {\n  const data = getDataByType(el, type)\n\n  if (data) {\n    return data\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getData);\n\n\n//# sourceURL=webpack:///./src/gedcom-reader/mixins/data.js?");

/***/ }),

/***/ "./src/gedcom-reader/mixins/events.js":
/*!********************************************!*\
  !*** ./src/gedcom-reader/mixins/events.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tags */ \"./src/gedcom-reader/mixins/tags.js\");\n\n\nfunction getEventData (el, type) {\n  if (!el.tree) return\n\n  const node = Object(_tags__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(el.tree, type)[0]\n  if (!node) return\n\n  const o = {}\n\n  if (node.data) {\n    o.data = node.data\n  }\n\n  if (node.tree) {\n    const eventDate = Object(_tags__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(node.tree, 'DATE')[0]\n    const eventPlace = Object(_tags__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(node.tree, 'PLAC')[0]\n\n    if (eventDate) o.date = eventDate.data\n    if (eventPlace) o.place = eventPlace.data\n  }\n\n  return o\n}\n\nfunction getEvent (el, type) {\n  const event = getEventData(el, type)\n  const target = []\n\n  if (event && event !== undefined) {\n    target.push(event)\n  }\n  return target\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getEvent);\n\n\n//# sourceURL=webpack:///./src/gedcom-reader/mixins/events.js?");

/***/ }),

/***/ "./src/gedcom-reader/mixins/names.js":
/*!*******************************************!*\
  !*** ./src/gedcom-reader/mixins/names.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tags */ \"./src/gedcom-reader/mixins/tags.js\");\n\n\nfunction getName (el) {\n  if (!el.tree) return\n\n  const node = Object(_tags__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(el.tree, 'NAME')[0]\n  if (!node) return\n\n  const o = {}\n  const nameData = node.data\n\n  o.data = nameData\n\n  if (node.tree) {\n    const fName = Object(_tags__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(node.tree, 'GIVN')[0]\n    const lName = Object(_tags__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(node.tree, 'SURN')[0]\n    const nName = Object(_tags__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(node.tree, 'NICK')[0]\n\n    if (fName) o.givn = fName.data\n    if (lName) o.surn = lName.data\n    if (nName) o.nick = nName.data\n  } else if (nameData) {\n    const [fName, lName] = nameData.split('/').map(n => n.trim())\n    const p = { givn: fName, surn: lName }\n    const merged = Object.assign(p, o)\n\n    return merged\n  }\n\n  return o\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getName);\n\n\n//# sourceURL=webpack:///./src/gedcom-reader/mixins/names.js?");

/***/ }),

/***/ "./src/gedcom-reader/mixins/tags.js":
/*!******************************************!*\
  !*** ./src/gedcom-reader/mixins/tags.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction getTags (data, tag) {\n  const tags = data.filter(el => el.tag === tag)\n\n  if (tags.length > 0) {\n    return tags.map(el => {\n      const result = {}\n\n      if (el.data) {\n        result.data = el.data\n      }\n\n      if (el.tree && el.tree.length > 0) {\n        result.tree = el.tree\n      }\n\n      return result\n    })\n  }\n  return []\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getTags);\n\n\n//# sourceURL=webpack:///./src/gedcom-reader/mixins/tags.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gedcom_reader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gedcom-reader */ \"./src/gedcom-reader/index.js\");\n/* harmony import */ var _translator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translator */ \"./src/translator/index.js\");\n\n\n\nconst inputFile = document.querySelector('#file-input')\n\ninputFile.addEventListener('change', (event) => {\n  readFile(event.target)\n})\n\nfunction readFile (input) {\n  const file = input.files[0]\n  const reader = new window.FileReader()\n  const displayResult = document.querySelector('.result')\n\n  reader.readAsText(file)\n\n  reader.onerror = function () {\n    displayResult.textContent = 'Error'\n  }\n\n  reader.onload = function () {\n    const output = reader.result\n\n    const o = Object(_gedcom_reader__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(output)\n    Object(_translator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(o)\n  }\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/translator/index.js":
/*!*********************************!*\
  !*** ./src/translator/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mixins_personName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mixins/personName */ \"./src/translator/mixins/personName.js\");\n/* harmony import */ var _mixins_personBirth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mixins/personBirth */ \"./src/translator/mixins/personBirth.js\");\n/* harmony import */ var _mixins_personDeath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mixins/personDeath */ \"./src/translator/mixins/personDeath.js\");\n\n\n\n\nconst result = document.querySelector('.result')\n\nfunction formatEntry (entry) {\n  const textnode = document.createTextNode(entry)\n  const node = document.createElement('p')\n\n  node.appendChild(textnode)\n  result.appendChild(node)\n}\n\nfunction gedcomTranslate (obj) {\n  const entries = obj.entries\n  let data = ''\n\n  result.textContent = ''\n\n  entries.map(entry => {\n    const str = Object(_mixins_personName__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(entry) + Object(_mixins_personBirth__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(entry) + Object(_mixins_personDeath__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(entry)\n    formatEntry(str)\n\n    data = data.concat(str)\n  })\n\n  return data\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (gedcomTranslate);\n\n\n//# sourceURL=webpack:///./src/translator/index.js?");

/***/ }),

/***/ "./src/translator/mixins/personBirth.js":
/*!**********************************************!*\
  !*** ./src/translator/mixins/personBirth.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction personBirth (data) {\n  if (data.tag && data.tag !== 'INDI') return\n\n  const person = data\n\n  if (person.birt && person.birt.length <= 0) return\n\n  const birthDate = person.birt[0].date\n  const birthPlace = person.birt[0].place\n\n  const str0 = 'was born'\n  const str1 = 'on'\n  const str2 = 'in'\n  const str3 = '. '\n\n  return ` ${str0} ${str1} ${birthDate} ${str2} ${birthPlace}${str3}`\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (personBirth);\n\n\n//# sourceURL=webpack:///./src/translator/mixins/personBirth.js?");

/***/ }),

/***/ "./src/translator/mixins/personDeath.js":
/*!**********************************************!*\
  !*** ./src/translator/mixins/personDeath.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction personDeath (data) {\n  if (data.tag && data.tag !== 'INDI') return\n\n  const person = data\n\n  if (person.deat && person.deat.length <= 0) return\n\n  // const birthDate = person.birt[0].date\n  const deathDate = person.deat[0].date\n  const deathPlace = person.deat[0].place\n\n  // function getYear (date) {\n  //   var year = date.match(/\\d{4}/)\n  //   return year\n  // }\n  //\n  // const deathAge = (birth, death) => {\n  //   // make specific to day\n  //   const b = getYear(birth)\n  //   const d = getYear(death)\n  //   return (d - b)\n  // }\n\n  function getPronoun (person) {\n    if (!person.sex) return\n    if (person.sex.data === undefined) return 'they'\n\n    const gender = person.sex.data.toString()\n\n    if (gender === 'M') return 'he'\n    else if (gender === 'F') return 'she'\n    else return 'they'\n  }\n\n  getPronoun(person)\n\n  const str0 = ' passed away '\n  const str1 = ' on '\n  const str2 = ' in '\n  // const str3 = ', at the age of '\n\n  return `\n    ${getPronoun(person)}${str0}${str1}${deathDate}${str2}${deathPlace}.\n  `\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (personDeath);\n\n\n//# sourceURL=webpack:///./src/translator/mixins/personDeath.js?");

/***/ }),

/***/ "./src/translator/mixins/personName.js":
/*!*********************************************!*\
  !*** ./src/translator/mixins/personName.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction personName (data) {\n  if (data.tag && data.tag !== 'INDI') return\n\n  const person = data\n  let result = ''\n\n  if (person.name) {\n    const fName = person.name.givn\n    const lName = person.name.surn\n    const nameData = person.name.data\n\n    if (fName && lName) result += fName + ' ' + lName\n    else if (nameData) result += nameData\n    else if (!nameData && fName) result += fName\n    else if (!nameData && lName) result += lName\n    else result = 'Unknown'\n\n    return result\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (personName);\n\n\n//# sourceURL=webpack:///./src/translator/mixins/personName.js?");

/***/ })

/******/ });