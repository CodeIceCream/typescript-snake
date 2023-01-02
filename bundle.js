/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Interface.ts":
/*!**************************!*\
  !*** ./src/Interface.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BODY\": function() { return /* binding */ BODY; },\n/* harmony export */   \"chromeDirection\": function() { return /* binding */ chromeDirection; },\n/* harmony export */   \"ieDirection\": function() { return /* binding */ ieDirection; }\n/* harmony export */ });\nvar BODY = 'body';\nvar chromeDirection;\n\n(function (chromeDirection) {\n  chromeDirection[\"right\"] = \"ArrowRight\";\n  chromeDirection[\"left\"] = \"ArrowLeft\";\n  chromeDirection[\"up\"] = \"ArrowUp\";\n  chromeDirection[\"down\"] = \"ArrowDown\";\n})(chromeDirection || (chromeDirection = {}));\n\nvar ieDirection;\n\n(function (ieDirection) {\n  ieDirection[\"right\"] = \"Right\";\n  ieDirection[\"left\"] = \"Left\";\n  ieDirection[\"up\"] = \"Up\";\n  ieDirection[\"down\"] = \"Down\";\n})(ieDirection || (ieDirection = {}));\n\n//# sourceURL=webpack://typescript-snake/./src/Interface.ts?");

/***/ }),

/***/ "./src/Utils/direction.ts":
/*!********************************!*\
  !*** ./src/Utils/direction.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isHorizontal\": function() { return /* binding */ isHorizontal; },\n/* harmony export */   \"isVertical\": function() { return /* binding */ isVertical; }\n/* harmony export */ });\n/* harmony import */ var _Interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Interface */ \"./src/Interface.ts\");\n\nvar isHorizontal = function isHorizontal(direction) {\n  return direction === _Interface__WEBPACK_IMPORTED_MODULE_0__.chromeDirection.left || direction === _Interface__WEBPACK_IMPORTED_MODULE_0__.chromeDirection.right || direction === _Interface__WEBPACK_IMPORTED_MODULE_0__.ieDirection.left || direction === _Interface__WEBPACK_IMPORTED_MODULE_0__.ieDirection.right;\n};\nvar isVertical = function isVertical(direction) {\n  return direction === _Interface__WEBPACK_IMPORTED_MODULE_0__.chromeDirection.up || direction === _Interface__WEBPACK_IMPORTED_MODULE_0__.chromeDirection.down || direction === _Interface__WEBPACK_IMPORTED_MODULE_0__.ieDirection.up || direction === _Interface__WEBPACK_IMPORTED_MODULE_0__.ieDirection.down;\n};\n\n//# sourceURL=webpack://typescript-snake/./src/Utils/direction.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.less */ \"./src/style/index.less\");\n/* harmony import */ var _moduls_GameControler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moduls/GameControler */ \"./src/moduls/GameControler.ts\");\n// 引入样式\n\n // // Food类测试代码\n// const food = new Food();\n// console.log(food.X, food.Y);\n// food.change();\n// console.log(food.X, food.Y);\n// // ScorePanel类测试代码\n// const scorePanel = new ScorePanel(20,30);\n// for (let i = 0; i < 99; i++) {\n//     scorePanel.addScore();\n// }\n\nvar gameControler = new _moduls_GameControler__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\n//# sourceURL=webpack://typescript-snake/./src/index.ts?");

/***/ }),

/***/ "./src/moduls/Food.ts":
/*!****************************!*\
  !*** ./src/moduls/Food.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// 食物类\nvar Food = /*#__PURE__*/function () {\n  function Food() {\n    _classCallCheck(this, Food);\n\n    this.element = document.getElementById('food');\n  } // 定义一个获取食物X轴坐标的方法\n\n\n  _createClass(Food, [{\n    key: \"X\",\n    get: function get() {\n      return this.element.offsetLeft;\n    }\n  }, {\n    key: \"Y\",\n    get: function get() {\n      return this.element.offsetTop;\n    } // 修改食物位置\n\n  }, {\n    key: \"change\",\n    value: function change() {\n      // 生成一个合理的随机位置\n      // 最小位置是0 最大是290 考虑蛇大小10px 位置必须是十的倍数\n      var top = Math.floor(Math.random() * 30) * 10;\n      var left = Math.floor(Math.random() * 30) * 10;\n      this.element.style.left = top + 'px';\n      this.element.style.top = left + 'px';\n    }\n  }]);\n\n  return Food;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Food);\n\n//# sourceURL=webpack://typescript-snake/./src/moduls/Food.ts?");

/***/ }),

/***/ "./src/moduls/GameControler.ts":
/*!*************************************!*\
  !*** ./src/moduls/GameControler.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Interface */ \"./src/Interface.ts\");\n/* harmony import */ var _Utils_direction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/direction */ \"./src/Utils/direction.ts\");\n/* harmony import */ var _Food__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Food */ \"./src/moduls/Food.ts\");\n/* harmony import */ var _ScorePanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ScorePanel */ \"./src/moduls/ScorePanel.ts\");\n/* harmony import */ var _Snake__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Snake */ \"./src/moduls/Snake.ts\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n // 游戏控制器 控制其他的类\n\nvar GameControler = /*#__PURE__*/function () {\n  function GameControler() {\n    _classCallCheck(this, GameControler);\n\n    // 存储一个蛇的前进方向\n    this.direction = _Interface__WEBPACK_IMPORTED_MODULE_0__.chromeDirection.right || _Interface__WEBPACK_IMPORTED_MODULE_0__.ieDirection.right;\n    this.snake = new _Snake__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n    this.food = new _Food__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    this.scorePanel = new _ScorePanel__WEBPACK_IMPORTED_MODULE_3__[\"default\"](10, 1);\n    this.init();\n  } // 游戏初始化方法 调用后游戏开始\n\n\n  _createClass(GameControler, [{\n    key: \"init\",\n    value: function init() {\n      // 绑定键盘事件\n      console.log(this);\n      document.addEventListener('keydown', this.keydownHandle.bind(this));\n      this.move();\n    }\n    /** ArrowUp/ArrowDown/ArrowLeft/ArrowRight\r\n     * 创建一个键盘按下的响应事件\r\n     * @param evt\r\n     */\n\n  }, {\n    key: \"keydownHandle\",\n    value: function keydownHandle(evt) {\n      evt.preventDefault();\n\n      if (evt.key === this.direction) {\n        return;\n      }\n\n      if (this.snake.bodies.length > 1) {\n        // 当有蛇身时，禁止同一个坐标方向的移动\n        if ((0,_Utils_direction__WEBPACK_IMPORTED_MODULE_1__.isHorizontal)(this.direction) && (0,_Utils_direction__WEBPACK_IMPORTED_MODULE_1__.isHorizontal)(evt.key) || (0,_Utils_direction__WEBPACK_IMPORTED_MODULE_1__.isVertical)(this.direction) && (0,_Utils_direction__WEBPACK_IMPORTED_MODULE_1__.isVertical)(evt.key)) {\n          return;\n        }\n      }\n\n      if ((0,_Utils_direction__WEBPACK_IMPORTED_MODULE_1__.isHorizontal)(evt.key) || (0,_Utils_direction__WEBPACK_IMPORTED_MODULE_1__.isVertical)(evt.key)) {\n        // 只能是方向键才赋方向值\n        this.direction = evt.key;\n        console.log(this);\n      }\n    }\n    /**\r\n     * 根据控制器存储的方向this.direction 使蛇的坐标改变\r\n     * 向上 top 减少\r\n     * 向下 top 增加\r\n     * 向左 left 减少\r\n     * 向右 left 增加\r\n     */\n\n  }, {\n    key: \"move\",\n    value: function move() {\n      var x = this.snake.X;\n      var y = this.snake.Y; // 读取方向属性, 移动一格\n\n      switch (this.direction) {\n        case _Interface__WEBPACK_IMPORTED_MODULE_0__.chromeDirection.up || _Interface__WEBPACK_IMPORTED_MODULE_0__.ieDirection.up:\n          // 每次移动是一格(10px)的倍数\n          y -= 10;\n          break;\n\n        case _Interface__WEBPACK_IMPORTED_MODULE_0__.chromeDirection.down || _Interface__WEBPACK_IMPORTED_MODULE_0__.ieDirection.down:\n          y += 10;\n          break;\n\n        case _Interface__WEBPACK_IMPORTED_MODULE_0__.chromeDirection.left || _Interface__WEBPACK_IMPORTED_MODULE_0__.ieDirection.left:\n          x -= 10;\n          break;\n\n        case _Interface__WEBPACK_IMPORTED_MODULE_0__.chromeDirection.right || _Interface__WEBPACK_IMPORTED_MODULE_0__.ieDirection.right:\n          x += 10;\n          break;\n\n        default:\n          break;\n      } // 移动前检查是否吃到食物\n\n\n      this.checkEat(x, y);\n\n      try {\n        // 将计算好的局部变量赋值给对象上的属性  设置后会触发Snake类的set语句\n        this.snake.X = x;\n        this.snake.Y = y;\n      } catch (error) {\n        // 捕获的异常 即此时超出合理范围\n        alert(error.message + 'Game Over!'); // 设置蛇的生命状态\n\n        this.snake.isLive = false;\n      } //活着的蛇开启一个定时器让蛇一直向保存的方向移动 注意定时器的默认this是window\n\n\n      this.snake.isLive && setTimeout(this.move.bind(this), 300 - (this.scorePanel.level - 1) * 30);\n    }\n    /**\r\n     * 检查是否吃到食物\r\n     * @param X 蛇头横坐标\r\n     * @param Y 蛇头纵坐标\r\n     */\n\n  }, {\n    key: \"checkEat\",\n    value: function checkEat(X, Y) {\n      if (X === this.food.X && Y === this.food.Y) {\n        console.log('吃到食物'); // 食物位置重置\n\n        this.food.change(); // 面板加分\n\n        this.scorePanel.addScore(); // 身体变长\n\n        this.snake.addBody();\n      }\n    }\n  }]);\n\n  return GameControler;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameControler);\n\n//# sourceURL=webpack://typescript-snake/./src/moduls/GameControler.ts?");

/***/ }),

/***/ "./src/moduls/ScorePanel.ts":
/*!**********************************!*\
  !*** ./src/moduls/ScorePanel.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// ScorePanel记分牌的类\nvar ScorePanel = /*#__PURE__*/function () {\n  function ScorePanel() {\n    var maxLevel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;\n    var upScore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;\n\n    _classCallCheck(this, ScorePanel);\n\n    this.score = 0;\n    this.level = 1;\n    this.scoreEle = document.getElementById('score');\n    this.levelEle = document.getElementById('level');\n    this.maxLevel = maxLevel;\n    this.upScore = upScore;\n  } // 加分方法\n\n\n  _createClass(ScorePanel, [{\n    key: \"addScore\",\n    value: function addScore() {\n      // 分数自增\n      this.scoreEle.innerHTML = ++this.score + ''; //每次达到跨度分升一级\n\n      if (this.score % this.upScore === 0) {\n        this.levelUp();\n      }\n    } // 等级提升\n\n  }, {\n    key: \"levelUp\",\n    value: function levelUp() {\n      if (this.level < this.maxLevel) {\n        this.levelEle.innerHTML = ++this.level + '';\n      }\n    }\n  }]);\n\n  return ScorePanel;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScorePanel);\n\n//# sourceURL=webpack://typescript-snake/./src/moduls/ScorePanel.ts?");

/***/ }),

/***/ "./src/moduls/Snake.ts":
/*!*****************************!*\
  !*** ./src/moduls/Snake.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Snake = /*#__PURE__*/function () {\n  function Snake() {\n    _classCallCheck(this, Snake);\n\n    this.snake = document.getElementById('snake');\n    this.head = document.querySelector('#snake > div');\n    this.bodies = this.snake.getElementsByTagName('div');\n    this.isLive = true;\n  } // 获取蛇头坐标\n\n\n  _createClass(Snake, [{\n    key: \"X\",\n    get: function get() {\n      return this.head.offsetLeft;\n    },\n    set: // 设置蛇头的坐标  setter的用法：当设置该X值时调用set语句体内方法\n    function set(value) {\n      if (this.X === value) {\n        return;\n      } // 30格的合法范围是0-290  利用好JS的异常捕获功能\n\n\n      if (value < 0 || value > 290) {\n        throw new Error('蛇撞墙了！');\n      } // 先移动身体,从后往前赋值避免丢失原有位置\n\n\n      this.moveBody();\n      this.head.style.left = value + 'px'; // 移动前检查是否吃到自己\n\n      this.checkSuicide();\n    }\n  }, {\n    key: \"Y\",\n    get: function get() {\n      return this.head.offsetTop;\n    },\n    set: function set(value) {\n      if (this.Y === value) {\n        return;\n      } // 30格的合法范围是0-290  利用好JS的异常捕获功能\n\n\n      if (value < 0 || value > 290) {\n        throw new Error('蛇撞墙了！');\n      } // 先移动身体,从后往前赋值避免丢失原有位置\n\n\n      this.moveBody();\n      this.head.style.top = value + 'px';\n      this.checkSuicide();\n    } // 蛇增加长度\n\n  }, {\n    key: \"addBody\",\n    value: function addBody() {\n      var div = document.createElement('div'); // 向element中添加一个div\n\n      this.snake.insertAdjacentElement('beforeend', div);\n    }\n    /**\r\n     * 蛇身体移动 第n节像素身体位置 = 第(n-1)节身体的位置\r\n     * eg： 第4节 = 第3节位置 从后往前赋值避免丢失原有位置\r\n     */\n\n  }, {\n    key: \"moveBody\",\n    value: function moveBody() {\n      // 遍历蛇身像素点 从最大索引开始\n      for (var i = this.bodies.length - 1; i > 0; i--) {\n        // 获取上前面身体的位置\n        var X = this.bodies[i - 1].offsetLeft;\n        var Y = this.bodies[i - 1].offsetTop;\n        this.bodies[i].style.left = X + 'px';\n        this.bodies[i].style.top = Y + 'px';\n      }\n    }\n    /** 蛇头撞到蛇身检查\r\n     * 第四个以上的身体才可能被撞到\r\n    */\n\n  }, {\n    key: \"checkSuicide\",\n    value: function checkSuicide() {\n      for (var i = 3; i < this.bodies.length; i++) {\n        var body = this.bodies[i];\n\n        if (this.X === body.offsetLeft && this.Y === body.offsetTop) {\n          // 吃到自己\n          throw new Error(\"吃到自己啦~~~\");\n        }\n      }\n    }\n  }]);\n\n  return Snake;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Snake);\n\n//# sourceURL=webpack://typescript-snake/./src/moduls/Snake.ts?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/less-loader/dist/cjs.js!./src/style/index.less":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/less-loader/dist/cjs.js!./src/style/index.less ***!
  \*********************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  -webkit-box-sizing: border-box;\\n          box-sizing: border-box;\\n}\\nbody {\\n  font: bodl 20px \\\"Courier\\\";\\n}\\n#main {\\n  width: 360px;\\n  height: 420px;\\n  background-color: #b7d4a8;\\n  margin: 20px auto;\\n  border: 10px solid black;\\n  border-radius: 40px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  -ms-flex-pack: distribute;\\n      justify-content: space-around;\\n}\\n#main #stage {\\n  width: 304px;\\n  height: 304px;\\n  border: 2px solid black;\\n  position: relative;\\n}\\n#main #stage #snake > div {\\n  width: 10px;\\n  height: 10px;\\n  background-color: #000;\\n  border: 1px solid #b7d4a8;\\n  position: absolute;\\n}\\n#main #stage #food {\\n  width: 10px;\\n  height: 10px;\\n  position: absolute;\\n  left: 40px;\\n  top: 100px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: horizontal;\\n  -webkit-box-direction: normal;\\n      -ms-flex-flow: row wrap;\\n          flex-flow: row wrap;\\n  -webkit-box-pack: justify;\\n      -ms-flex-pack: justify;\\n          justify-content: space-between;\\n  -ms-flex-line-pack: justify;\\n      align-content: space-between;\\n}\\n#main #stage #food > div {\\n  width: 4px;\\n  height: 4px;\\n  background-color: #000;\\n  -webkit-transform: rotate(45deg);\\n          transform: rotate(45deg);\\n}\\n#main #score-panel {\\n  width: 300px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: justify;\\n      -ms-flex-pack: justify;\\n          justify-content: space-between;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://typescript-snake/./src/style/index.less?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B2%5D!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://typescript-snake/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ (function(module) {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://typescript-snake/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style/index.less":
/*!******************************!*\
  !*** ./src/style/index.less ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../node_modules/less-loader/dist/cjs.js!./index.less */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/less-loader/dist/cjs.js!./src/style/index.less\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://typescript-snake/./src/style/index.less?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ (function(module) {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://typescript-snake/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ (function(module) {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://typescript-snake/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ (function(module) {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://typescript-snake/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://typescript-snake/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ (function(module) {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://typescript-snake/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ (function(module) {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://typescript-snake/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;