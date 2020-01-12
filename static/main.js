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

/***/ "../../../../../usr/local/lib/node_modules/parse-gedcom/d3ize.js":
/*!*********************************************************!*\
  !*** /usr/local/lib/node_modules/parse-gedcom/d3ize.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function hasTag(val) {\n    return function(node) {\n        return node.tag === val;\n    };\n}\n\nfunction d3ize(tree) {\n    var peopleNodes = tree\n        .filter(hasTag('INDI'))\n        .map(toNode);\n    var families = tree.filter(hasTag('FAM'));\n    var familyNodes = families.map(toNode);\n    var links = families.reduce(function(memo, family) {\n        return memo.concat(familyLinks(family));\n    }, []);\n    var allNodes = peopleNodes.concat(familyNodes);\n    var indexedNodes = allNodes.reduce(function(memo, node, i) {\n        memo[node.id] = i;\n        return memo;\n    }, {});\n    links = links.map(idToIndex(indexedNodes));\n    return {\n        nodes: allNodes,\n        links: links\n    };\n}\n\nfunction getName(p) {\n    if (p.tag === 'INDI') {\n        var nameNode = (p.tree.filter(hasTag('NAME')) || [])[0];\n        if (nameNode) {\n            return nameNode.data.replace(/\\//g, '');\n        } else {\n            return '?';\n        }\n    } else {\n        return 'Family';\n    }\n}\n\nfunction toNode(p) {\n    p.id = p.pointer;\n    p.name = getName(p);\n    return p;\n}\n\nfunction idToIndex(indexedNodes) {\n    return function(link) {\n        function getIndexed(id) {\n            return indexedNodes[id];\n        }\n        return {\n            source: getIndexed(link.source),\n            target: getIndexed(link.target)\n        };\n    };\n}\n\nfunction familyLinks(family) {\n    var memberLinks = family.tree.filter(function(member) {\n        // avoid connecting MARR, etc: things that are not\n        // people.\n        return member.data && member.data[0] === '@';\n    }).map(function(member) {\n        return {\n            source: family.pointer,\n            target: member.data\n        };\n    });\n    return memberLinks;\n}\n\nmodule.exports = d3ize;\n\n\n//# sourceURL=webpack:////usr/local/lib/node_modules/parse-gedcom/d3ize.js?");

/***/ }),

/***/ "../../../../../usr/local/lib/node_modules/parse-gedcom/index.js":
/*!*********************************************************!*\
  !*** /usr/local/lib/node_modules/parse-gedcom/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var crawl = __webpack_require__(/*! tree-crawl */ \"../../../../../usr/local/lib/node_modules/parse-gedcom/node_modules/tree-crawl/dist/tree-crawl.js\");\n\n// from https://github.com/madprime/python-gedcom/blob/master/gedcom/__init__.py\n// * Level must start with nonnegative int, no leading zeros.\n// * Pointer optional, if it exists it must be flanked by '@'\n// * Tag must be alphanumeric string\n// * Value optional, consists of anything after a space to end of line\n//   End of line defined by \\n or \\r\nvar lineRe = /\\s*(0|[1-9]+[0-9]*) (@[^@]+@ |)([A-Za-z0-9_]+)( [^\\n\\r]*|)/;\n\nfunction parse(input) {\n    var start = { root: { tree: [] }, level: 0 };\n    start.pointer = start.root;\n\n    var data = input\n        .split('\\n')\n        .map(mapLine)\n        .filter(function(_) { return _; })\n        .reduce(buildTree, start)\n        .root;\n\n    crawl(data, cleanUp, { getChildren });\n    return data.tree;\n\n    // the basic trick of this module is turning the suggested tree\n    // structure of a GEDCOM file into a tree in JSON. This reduction\n    // does that. The only real trick is the `.up` member of objects\n    // that points to a level up in the structure. This we have to\n    // censor before JSON.stringify since it creates circular references.\n    function buildTree(memo, data) {\n        if (data.level === memo.level) {\n            memo.pointer.tree.push(data);\n        } else if (data.level > memo.level) {\n            var up = memo.pointer;\n            memo.pointer = memo.pointer.tree[\n                memo.pointer.tree.length - 1];\n                memo.pointer.tree.push(data);\n                memo.pointer.up = up;\n                memo.level = data.level;\n        } else if (data.level < memo.level) {\n            // the jump up in the stack may be by more than one, so ascend\n            // until we're at the right level.\n            while (data.level <= memo.pointer.level && memo.pointer.up) {\n                memo.pointer = memo.pointer.up;\n            }\n            memo.pointer.tree.push(data);\n            memo.level = data.level;\n        }\n        return memo;\n    }\n\n    function mapLine(data) {\n        var match = data.match(lineRe);\n        if (!match) return null;\n        return {\n            level: parseInt(match[1], 10),\n            pointer: match[2].trim(),\n            tag: match[3].trim(),\n            data: match[4].trimLeft(),\n            tree: []\n        };\n    }\n\n    function cleanUp(node) {\n        delete node.up;\n        delete node.level;\n    }\n\n    function getChildren(node) {\n        return node.tree;\n    }\n}\n\nmodule.exports.parse = parse;\nmodule.exports.d3ize = __webpack_require__(/*! ./d3ize */ \"../../../../../usr/local/lib/node_modules/parse-gedcom/d3ize.js\");\n\n\n//# sourceURL=webpack:////usr/local/lib/node_modules/parse-gedcom/index.js?");

/***/ }),

/***/ "../../../../../usr/local/lib/node_modules/parse-gedcom/node_modules/tree-crawl/dist/tree-crawl.js":
/*!*******************************************************************************************!*\
  !*** /usr/local/lib/node_modules/parse-gedcom/node_modules/tree-crawl/dist/tree-crawl.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function (global, factory) {\n\t true ? module.exports = factory() :\n\tundefined;\n}(this, (function () { 'use strict';\n\nfunction Context(flags, cursor) {\n  this.flags = flags;\n  this.cursor = cursor;\n}\nContext.prototype = {\n  skip: function skip() {\n    this.flags.skip = true;\n  },\n  break: function _break() {\n    this.flags.break = true;\n  },\n  remove: function remove() {\n    this.flags.remove = true;\n  },\n  replace: function replace(node) {\n    this.flags.replace = node;\n  },\n  get parent() {\n    return this.cursor.parent;\n  },\n  get depth() {\n    return this.cursor.depth;\n  },\n  get level() {\n    return this.cursor.depth + 1;\n  },\n  get index() {\n    return this.cursor.index;\n  }\n};\nfunction ContextFactory(flags, cursor) {\n  return new Context(flags, cursor);\n}\n\nfunction Stack(initial) {\n  this.xs = [initial];\n  this.top = 0;\n}\nStack.prototype = {\n  push: function push(x) {\n    this.top++;\n    if (this.top < this.xs.length) {\n      this.xs[this.top] = x;\n    } else {\n      this.xs.push(x);\n    }\n  },\n  pushArrayReverse: function pushArrayReverse(xs) {\n    for (var i = xs.length - 1; i >= 0; i--) {\n      this.push(xs[i]);\n    }\n  },\n  pop: function pop() {\n    var x = this.peek();\n    this.top--;\n    return x;\n  },\n  peek: function peek() {\n    return this.xs[this.top];\n  },\n  isEmpty: function isEmpty() {\n    return -1 === this.top;\n  }\n};\nfunction QueueFactory(initial) {\n  return new Stack(initial);\n}\n\nfunction DfsCursor() {\n  this.depth = 0;\n  this.stack = QueueFactory({ node: null, index: -1 });\n}\nDfsCursor.prototype = {\n  moveDown: function moveDown(node) {\n    this.depth++;\n    this.stack.push({ node: node, index: 0 });\n  },\n  moveUp: function moveUp() {\n    this.depth--;\n    this.stack.pop();\n  },\n  moveNext: function moveNext() {\n    this.stack.peek().index++;\n  },\n  get parent() {\n    return this.stack.peek().node;\n  },\n  get index() {\n    return this.stack.peek().index;\n  }\n};\nfunction CursorFactory() {\n  return new DfsCursor();\n}\n\nfunction Flags() {\n  this.break = false;\n  this.skip = false;\n  this.remove = false;\n  this.replace = null;\n}\nFlags.prototype = {\n  reset: function reset() {\n    this.break = false;\n    this.skip = false;\n    this.remove = false;\n    this.replace = null;\n  }\n};\nfunction FlagsFactory() {\n  return new Flags();\n}\n\nfunction isNotEmpty(xs) {\n  return xs && 0 !== xs.length;\n}\n\nfunction dfsPre(root, iteratee, getChildren) {\n  var flags = FlagsFactory();\n  var cursor = CursorFactory();\n  var context = ContextFactory(flags, cursor);\n  var stack = QueueFactory(root);\n  var dummy = Object.assign({}, root);\n  while (!stack.isEmpty()) {\n    var node = stack.pop();\n    if (node === dummy) {\n      cursor.moveUp();\n      continue;\n    }\n    flags.reset();\n    iteratee(node, context);\n    if (flags.break) break;\n    if (flags.remove) continue;\n    cursor.moveNext();\n    if (!flags.skip) {\n      if (flags.replace) {\n        node = flags.replace;\n      }\n      var children = getChildren(node);\n      if (isNotEmpty(children)) {\n        stack.push(dummy);\n        stack.pushArrayReverse(children);\n        cursor.moveDown(node);\n      }\n    }\n  }\n}\n\nfunction dfsPost(root, iteratee, getChildren) {\n  var flags = FlagsFactory();\n  var cursor = CursorFactory();\n  var context = ContextFactory(flags, cursor);\n  var stack = QueueFactory(root);\n  var ancestors = QueueFactory(null);\n  while (!stack.isEmpty()) {\n    var node = stack.peek();\n    var parent = ancestors.peek();\n    var children = getChildren(node);\n    flags.reset();\n    if (node === parent || !isNotEmpty(children)) {\n      if (node === parent) {\n        ancestors.pop();\n        cursor.moveUp();\n      }\n      stack.pop();\n      iteratee(node, context);\n      if (flags.break) break;\n      if (flags.remove) continue;\n      cursor.moveNext();\n    } else {\n      ancestors.push(node);\n      cursor.moveDown(node);\n      stack.pushArrayReverse(children);\n    }\n  }\n}\n\nvar THRESHOLD = 32768;\nfunction Queue(initial) {\n  this.xs = [initial];\n  this.top = 0;\n  this.maxLength = 0;\n}\nQueue.prototype = {\n  enqueue: function enqueue(x) {\n    this.xs.push(x);\n  },\n  enqueueMultiple: function enqueueMultiple(xs) {\n    for (var i = 0, len = xs.length; i < len; i++) {\n      this.enqueue(xs[i]);\n    }\n  },\n  dequeue: function dequeue() {\n    var x = this.peek();\n    this.top++;\n    if (this.top === THRESHOLD) {\n      this.xs = this.xs.slice(this.top);\n      this.top = 0;\n    }\n    return x;\n  },\n  peek: function peek() {\n    return this.xs[this.top];\n  },\n  isEmpty: function isEmpty() {\n    return this.top === this.xs.length;\n  }\n};\nfunction QueueFactory$1(initial) {\n  return new Queue(initial);\n}\n\nfunction BfsCursor() {\n  this.depth = 0;\n  this.index = -1;\n  this.queue = QueueFactory$1({ node: null, arity: 1 });\n  this.levelNodes = 1;\n  this.nextLevelNodes = 0;\n}\nBfsCursor.prototype = {\n  store: function store(node, arity) {\n    this.queue.enqueue({ node: node, arity: arity });\n    this.nextLevelNodes += arity;\n  },\n  moveNext: function moveNext() {\n    this.index++;\n  },\n  moveForward: function moveForward() {\n    this.queue.peek().arity--;\n    this.levelNodes--;\n    if (0 === this.queue.peek().arity) {\n      this.index = 0;\n      this.queue.dequeue();\n    }\n    if (0 === this.levelNodes) {\n      this.depth++;\n      this.levelNodes = this.nextLevelNodes;\n      this.nextLevelNodes = 0;\n    }\n  },\n  get parent() {\n    return this.queue.peek().node;\n  }\n};\nfunction CursorFactory$1() {\n  return new BfsCursor();\n}\n\nfunction bfs(root, iteratee, getChildren) {\n  var flags = FlagsFactory();\n  var cursor = CursorFactory$1();\n  var context = ContextFactory(flags, cursor);\n  var queue = QueueFactory$1(root);\n  while (!queue.isEmpty()) {\n    var node = queue.dequeue();\n    flags.reset();\n    iteratee(node, context);\n    if (flags.break) break;\n    if (!flags.remove) {\n      cursor.moveNext();\n      if (flags.replace) {\n        node = flags.replace;\n      }\n      if (!flags.skip) {\n        var children = getChildren(node);\n        if (isNotEmpty(children)) {\n          queue.enqueueMultiple(children);\n          cursor.store(node, children.length);\n        }\n      }\n    }\n    cursor.moveForward();\n  }\n}\n\nvar defaultGetChildren = function defaultGetChildren(node) {\n  return node.children;\n};\nfunction crawl(root, iteratee, options) {\n  if (null == root) return;\n  options = options || {};\n  var order = options.order || 'pre';\n  var getChildren = options.getChildren || defaultGetChildren;\n  if ('pre' === order) {\n    dfsPre(root, iteratee, getChildren);\n  } else if ('post' === order) {\n    dfsPost(root, iteratee, getChildren);\n  } else if ('bfs' === order) {\n    bfs(root, iteratee, getChildren);\n  }\n}\n\nreturn crawl;\n\n})));\n\n\n//# sourceURL=webpack:////usr/local/lib/node_modules/parse-gedcom/node_modules/tree-crawl/dist/tree-crawl.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mixins_getByTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mixins/getByTag */ \"./src/mixins/getByTag.js\");\n\n\nconst gedcom = __webpack_require__(/*! parse-gedcom */ \"../../../../../usr/local/lib/node_modules/parse-gedcom/index.js\")\nconst input = `\n  0 HEAD\n  1 SOUR webtreeprint.com\n  2 VERS 1.0\n  2 NAME webtreeprint\n  1 FILE shakespeare.ged\n  1 GEDC\n  2 VERS 5.5.1\n  2 FORM LINEAGE-LINKED\n  1 CHAR UTF-8\n  1 SUBM @SUB1@\n  0 @SUB1@ SUBM\n  1 NAME webTreePrint\n  0 @I0001@ INDI\n  1 NAME William /Shakespeare/\n  2 GIVN William\n  2 SURN Shakespeare\n  1 SEX M\n  1 BIRT\n  2 DATE BEF 23 APR 1564\n  2 PLAC Stratford-upon-Avon\n  1 CHR\n  2 DATE 26 APR 1564\n  2 PLAC Stratford-upon-Avon\n  1 DEAT\n  2 DATE 23 APR 1616\n  2 PLAC Stratford-upon-Avon\n  1 FAMC @F001@\n  1 FAMS @F002@\n  0 @I0002@ INDI\n  1 NAME Mary /Arden/\n  2 GIVN Mary\n  2 SURN Arden\n  1 SEX F\n  1 BIRT\n  2 DATE ABT 1537\n  1 DEAT\n  2 DATE SEP 1608\n  1 FAMC @F005@\n  1 FAMS @F001@\n  0 @I0003@ INDI\n  1 NAME John /Shakespeare/\n  2 GIVN John\n  2 SURN Shakespeare\n  1 SEX M\n  1 BIRT\n  2 DATE ABT 1531\n  1 DEAT\n  2 DATE 07 SEP 1601\n  1 BURI\n  2 DATE 08 SEP 1601\n  1 FAMC @F003@\n  1 FAMS @F001@\n  0 @I0004@ INDI\n  1 NAME Anne /Hathaway/\n  2 GIVN Anne\n  2 SURN Hathaway\n  1 SEX F\n  1 BIRT\n  2 DATE APR 1556\n  2 PLAC Shottery, Warwickshire\n  1 DEAT\n  2 DATE 06 AUG 1623\n  2 PLAC Stratford-upon-Avon\n  1 FAMC @F010@\n  1 FAMS @F002@\n  0 @I0005@ INDI\n  1 NAME Susanna /Shakespeare/\n  2 GIVN Susanna\n  2 SURN Shakespeare\n  1 SEX F\n  1 BIRT\n  2 DATE MAY 1583\n  2 PLAC Stratford-upon-Avon\n  1 CHR\n  2 DATE 26 MAY 1583\n  2 PLAC Stratford-upon-Avon\n  1 DEAT\n  2 DATE 11 JUL 1649\n  2 PLAC Stratford-upon-Avon\n  1 FAMC @F002@\n  1 FAMS @F006@\n  0 @I0006@ INDI\n  1 NAME Hamnet /Shakespeare/\n  2 GIVN Hamnet\n  2 SURN Shakespeare\n  1 SEX M\n  1 BIRT\n  2 DATE JAN 1585\n  2 PLAC Stratford-upon-Avon\n  1 CHR\n  2 DATE 02 FEB 1585\n  2 PLAC Stratford-upon-Avon\n  1 DEAT\n  2 DATE AUG 1596\n  2 PLAC Stratford-upon-Avon\n  1 BURI\n  2 DATE 11 AUG 1596\n  2 PLAC Stratford-upon-Avon\n  1 FAMC @F002@\n  0 @I0007@ INDI\n  1 NAME Judith /Shakespeare/\n  2 GIVN Judith\n  2 SURN Shakespeare\n  1 SEX F\n  1 BIRT\n  2 DATE JAN 1585\n  2 PLAC Stratford-upon-Avon\n  1 CHR\n  2 DATE 02 FEB 1585\n  2 PLAC Stratford-upon-Avon\n  1 DEAT\n  2 DATE FEB 1662\n  2 PLAC Stratford-upon-Avon\n  1 BURI\n  2 DATE 09 FEB 1662\n  2 PLAC Stratford-upon-Avon\n  1 FAMC @F002@\n  1 FAMS @F009@\n  0 @I0008@ INDI\n  1 NAME Joan /Shakespeare/\n  2 GIVN Joan\n  2 SURN Shakespeare\n  1 SEX F\n  1 BIRT\n  2 DATE SEP 1558\n  1 CHR\n  2 DATE 15 SEP 1558\n  1 DEAT\n  2 DATE AFT SEP 1558\n  1 FAMC @F001@\n  0 @I0009@ INDI\n  1 NAME Margaret /Shakespeare/\n  2 GIVN Margaret\n  2 SURN Shakespeare\n  1 SEX F\n  1 BIRT\n  2 DATE NOV 1562\n  1 CHR\n  2 DATE 02 DEC 1562\n  1 DEAT\n  2 DATE APR 1563\n  1 BURI\n  2 DATE 30 APR 1563\n  1 FAMC @F001@\n  0 @I0010@ INDI\n  1 NAME Gilbert /Shakespeare/\n  2 GIVN Gilbert\n  2 SURN Shakespeare\n  1 SEX M\n  1 BIRT\n  2 DATE OCT 1566\n  1 DEAT\n  2 DATE JAN 1612\n  1 FAMC @F001@\n  0 @I0011@ INDI\n  1 NAME Joan /Shakespeare/\n  2 GIVN Joan\n  2 SURN Shakespeare\n  1 SEX F\n  1 BIRT\n  2 DATE APR 1569\n  1 DEAT\n  2 DATE NOV 1646\n  1 FAMC @F001@\n  0 @I0012@ INDI\n  1 NAME Anne /Shakespeare/\n  2 GIVN Anne\n  2 SURN Shakespeare\n  1 SEX F\n  1 BIRT\n  2 DATE SEP 1571\n  1 DEAT\n  2 DATE APR 1579\n  1 FAMC @F001@\n  0 @I0013@ INDI\n  1 NAME Richard /Shakespeare/\n  2 GIVN Richard\n  2 SURN Shakespeare\n  1 SEX M\n  1 BIRT\n  2 DATE MAR 1574\n  1 DEAT\n  2 DATE FEB 1613\n  1 FAMC @F001@\n  0 @I0014@ INDI\n  1 NAME Edmund /Shakespeare/\n  2 GIVN Edmund\n  2 SURN Shakespeare\n  1 SEX M\n  1 BIRT\n  2 DATE APR 1580\n  1 DEAT\n  2 DATE DEC 1607\n  1 FAMC @F001@\n  0 @I0015@ INDI\n  1 NAME Richard /Shakespeare/\n  2 GIVN Richard\n  2 SURN Shakespeare\n  1 SEX M\n  1 BIRT\n  2 DATE ABT 1490\n  1 DEAT\n  2 DATE BEF 10 FEB 1561\n  1 FAMS @F003@\n  0 @I0016@ INDI\n  1 NAME Henry /Shakespeare/\n  2 GIVN Henry\n  2 SURN Shakespeare\n  1 SEX M\n  1 DEAT\n  2 DATE 1596\n  1 FAMC @F003@\n  1 FAMS @F004@\n  0 @I0017@ INDI\n  1 NAME Margaret //\n  2 GIVN Margaret\n  1 SEX F\n  1 DEAT\n  2 DATE 1597\n  1 FAMS @F004@\n  0 @I0018@ INDI\n  1 NAME Agnes /Webbe/\n  2 GIVN Agnes\n  2 SURN Webbe\n  1 SEX F\n  1 FAMS @F005@\n  0 @I0019@ INDI\n  1 NAME Robert /Arden/\n  2 GIVN Robert\n  2 SURN Arden\n  1 SEX M\n  1 DEAT\n  2 DATE DEC 1556\n  1 FAMS @F005@\n  0 @I0020@ INDI\n  1 NAME John /Hall/\n  2 GIVN John\n  2 SURN Hall\n  1 TITL Dr.\n  1 SEX M\n  1 BIRT\n  2 DATE 1575\n  1 DEAT\n  2 DATE NOV 1635\n  1 FAMS @F006@\n  0 @I0021@ INDI\n  1 NAME Elizabeth /Shakespeare/\n  2 GIVN Elizabeth\n  2 SURN Shakespeare\n  1 SEX F\n  1 BIRT\n  2 DATE FEB 1608\n  1 CHR\n  2 DATE 21 FEB 1608\n  2 PLAC Stratford-upon-Avon\n  1 DEAT\n  2 DATE FEB 1670\n  1 FAMC @F006@\n  1 FAMS @F007@\n  1 FAMS @F008@\n  0 @I0022@ INDI\n  1 NAME Thomas /Nash/\n  2 GIVN Thomas\n  2 SURN Nash\n  1 SEX M\n  1 BIRT\n  2 DATE 1593\n  1 DEAT\n  2 DATE APR 1647\n  1 FAMS @F007@\n  0 @I0023@ INDI\n  1 NAME John /Barnard/\n  2 GIVN John\n  2 SURN Barnard\n  1 TITL Sir\n  1 SEX M\n  1 DEAT\n  2 DATE 1674\n  1 FAMS @F008@\n  0 @I0024@ INDI\n  1 NAME Thomas /Quiney/\n  2 GIVN Thomas\n  2 SURN Quiney\n  1 SEX M\n  1 BIRT\n  2 DATE 1589\n  1 DEAT\n  2 DATE ABT 1655\n  1 FAMS @F009@\n  1 FAMS @F011@\n  0 @I0025@ INDI\n  1 NAME Shakespeare /Quiney/\n  2 GIVN Shakespeare\n  2 SURN Quiney\n  1 SEX M\n  1 BIRT\n  2 DATE NOV 1616\n  1 CHR\n  2 DATE 23 NOV 1616\n  1 DEAT\n  2 DATE MAY 1617\n  1 BURI\n  2 DATE 08 MAY 1617\n  1 FAMC @F009@\n  0 @I0026@ INDI\n  1 NAME Richard /Quiney/\n  2 GIVN Richard\n  2 SURN Quiney\n  1 SEX M\n  1 BIRT\n  2 DATE FEB 1618\n  1 CHR\n  2 DATE 09 FEB 1618\n  1 DEAT\n  2 DATE FEB 1639\n  1 BURI\n  2 DATE 06 FEB 1639\n  1 FAMC @F009@\n  0 @I0027@ INDI\n  1 NAME Thomas /Quiney/\n  2 GIVN Thomas\n  2 SURN Quiney\n  1 SEX M\n  1 BIRT\n  2 DATE JAN 1620\n  1 CHR\n  2 DATE 23 JAN 1620\n  1 DEAT\n  2 DATE JAN 1639\n  1 BURI\n  2 DATE 28 JAN 1639\n  1 FAMC @F009@\n  0 @I0028@ INDI\n  1 NAME Richard /Hathaway/\n  2 GIVN Richard\n  2 SURN Hathaway\n  1 SEX M\n  1 DEAT\n  2 DATE SEP 1581\n  1 FAMS @F010@\n  0 @I0029@ INDI\n  1 NAME Margaret /Wheeler/\n  2 GIVN Margaret\n  2 SURN Wheeler\n  1 SEX F\n  1 DEAT\n  2 PLAC Died in childbirth\n  1 BURI\n  2 DATE 15 MAR 1616\n  1 FAMS @F011@\n  0 @I0030@ INDI\n  1 NAME Not named /Quiney/\n  2 GIVN Not named\n  2 SURN Quiney\n  1 SEX\n  1 DEAT\n  2 PLAC Died in childbirth\n  1 BURI\n  2 DATE 15 MAR 1616\n  1 FAMC @F011@\n  0 @I0031@ INDI\n  1 NAME  /Unknown/\n  2 SURN Unknown\n  1 SEX F\n  1 FAMS @F003@\n  0 @F001@ FAM\n  1 HUSB @I0003@\n  1 WIFE @I0002@\n  1 MARR\n  2 DATE ABT 1557\n  1 CHIL @I0001@\n  1 CHIL @I0008@\n  1 CHIL @I0009@\n  1 CHIL @I0010@\n  1 CHIL @I0011@\n  1 CHIL @I0012@\n  1 CHIL @I0013@\n  1 CHIL @I0014@\n  0 @F002@ FAM\n  1 HUSB @I0001@\n  1 WIFE @I0004@\n  1 MARR\n  2 DATE NOV 1582\n  1 CHIL @I0005@\n  1 CHIL @I0006@\n  1 CHIL @I0007@\n  0 @F003@ FAM\n  1 HUSB @I0015@\n  1 WIFE @I0031@\n  1 CHIL @I0016@\n  1 CHIL @I0003@\n  0 @F004@ FAM\n  1 HUSB @I0016@\n  1 WIFE @I0017@\n  0 @F005@ FAM\n  1 HUSB @I0019@\n  1 WIFE @I0018@\n  1 CHIL @I0002@\n  0 @F006@ FAM\n  1 HUSB @I0020@\n  1 WIFE @I0005@\n  1 MARR\n  2 DATE 05 JUN 1607\n  2 PLAC Stratford-upon-Avon\n  1 CHIL @I0021@\n  0 @F007@ FAM\n  1 HUSB @I0022@\n  1 WIFE @I0021@\n  1 MARR\n  2 DATE 1626\n  0 @F008@ FAM\n  1 HUSB @I0023@\n  1 WIFE @I0021@\n  1 MARR\n  2 DATE 1649\n  0 @F009@ FAM\n  1 HUSB @I0024@\n  1 WIFE @I0007@\n  1 MARR\n  2 DATE 10 FEB 1616\n  2 PLAC Stratford-upon-Avon\n  1 CHIL @I0025@\n  1 CHIL @I0026@\n  1 CHIL @I0027@\n  0 @F010@ FAM\n  1 HUSB @I0028@\n  1 CHIL @I0004@\n  0 @F011@ FAM\n  1 HUSB @I0024@\n  1 WIFE @I0029@\n  1 MARR\n  2 PLAC Unmarried\n  1 CHIL @I0030@\n  0 TRLR\n`\n\nconst parseGedcom = JSON.stringify(gedcom.parse(input), null, 2)\nconst obj = JSON.parse(parseGedcom)\n\nobj.forEach(el => console.log(el))\n\nfunction getDataByType (el, type) {\n  if (!el.tree) return\n  const node = Object(_mixins_getByTag__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(el.tree, String(type))[0]\n  const o = {}\n\n  if (node) o.data = node.data\n  return o\n}\n\nfunction getNames (el) {\n  if (!el.tree) return\n\n  const node = Object(_mixins_getByTag__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(el.tree, 'NAME')[0]\n  const o = {}\n\n  if (node) o.data = node.data\n\n  if (node && node.tree) {\n    const firstName = Object(_mixins_getByTag__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(node.tree, 'GIVN')[0]\n    if (firstName) o.givn = firstName.data\n\n    const lastName = Object(_mixins_getByTag__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(node.tree, 'SURN')[0]\n    if (lastName) o.surn = lastName.data\n  }\n  return o\n}\n\nfunction getEvent (el, type) {\n  if (!el.tree) return\n\n  const node = Object(_mixins_getByTag__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(el.tree, type)[0]\n  if (!node) return\n\n  const o = {}\n\n  if (node.data) {\n    o.data = node.data\n  }\n\n  if (node.tree) {\n    const eventDate = Object(_mixins_getByTag__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(node.tree, 'DATE')[0]\n    const eventPlace = Object(_mixins_getByTag__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(node.tree, 'PLAC')[0]\n\n    if (eventDate) o.date = eventDate.data\n    if (eventPlace) o.place = eventPlace.data\n  }\n\n  return o\n}\n\nfunction createEntry (el) {\n  const o = {\n    id: el.pointer || '',\n    tag: el.tag\n  }\n\n  function getData (el, type) {\n    const data = getDataByType(el, type)\n    if (data) return data\n  }\n\n  function getChildren (el) {\n    const children = []\n    const newchild = el.tree.filter(function (child) {\n      return child.tag === 'CHIL'\n    })\n\n    children.push(newchild)\n    return children\n  }\n\n  function pushEvent (type) {\n    const event = getEvent(el, type)\n    const target = []\n\n    if (event && event !== undefined) {\n      target.push(event)\n    }\n    return target\n  }\n\n  if (el.tag === 'FAM') {\n    o.husb = getData(el, 'HUSB')\n    o.wife = getData(el, 'WIFE')\n    o.marr = pushEvent('MARR')\n    o.children = getChildren(el)\n  }\n\n  if (el.tag === 'INDI') {\n    o.name = getNames(el)\n    o.sex = getData(el, 'SEX')\n    o.birt = pushEvent('BIRT')\n    o.deat = pushEvent('DEAT')\n    o.buri = pushEvent('BURI')\n    o.chr = pushEvent('CHR')\n  }\n\n  return o\n}\n\nfunction getIndividuals () {\n  const target = []\n\n  obj.forEach(el => { target.push(createEntry(el)) })\n\n  console.log('*************', target)\n}\n\ngetIndividuals()\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/mixins/getByTag.js":
/*!********************************!*\
  !*** ./src/mixins/getByTag.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst getByTag = (data, tag) => {\n  const d = data.filter(el => el.tag === tag)\n\n  if (d.length > 0) {\n    return d.map(el => {\n      const result = {}\n      if (el.data) result.data = el.data\n      if (el.tree && el.tree.length > 0) result.tree = el.tree\n      return result\n    })\n  }\n  return []\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getByTag);\n\n\n//# sourceURL=webpack:///./src/mixins/getByTag.js?");

/***/ })

/******/ });