/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["weiyaoUtils"] = factory();
	else
		root["weiyaoUtils"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/PubSub.js":
/*!***********************!*\
  !*** ./src/PubSub.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PubSub\": () => (/* binding */ PubSub)\n/* harmony export */ });\n/*\r\n自定义消息订阅与发布\r\n*/\r\n\r\nconst PubSub = {}\r\n/*\r\n  {\r\n    add: {\r\n      token1: callback1,\r\n      token2: callback2\r\n    },\r\n    update: {\r\n      token3: callback3\r\n    }\r\n  }\r\n*/\r\nlet callbacksObj = {} // 保存所有回调的容器\r\nlet id = 0 // 用于生成token的标记\r\n\r\n// 1. 订阅消息\r\nPubSub.subscribe = function (msgName, callback) {\r\n\r\n  // 确定token\r\n  const token = 'token_' + ++id\r\n  // 取出当前消息对应的callbacks\r\n  const callbacks = callbacksObj[msgName]\r\n  if (!callbacks) {\r\n    callbacksObj[msgName] = {\r\n      [token]: callback\r\n    }\r\n  } else {\r\n    callbacks[token] = callback\r\n  }\r\n  // 返回token\r\n  return token\r\n}\r\n\r\n\r\n// 2. 发布异步的消息\r\nPubSub.publish = function (msgName, data) {\r\n  // 取出当前消息对应的callbacks\r\n  let callbacks = callbacksObj[msgName]\r\n  // 如果有值\r\n  if (callbacks) {\r\n    // callbacks = Object.assign({}, callbacks)\r\n    // 启动定时器, 异步执行所有的回调函数\r\n    setTimeout(() => {\r\n      Object.values(callbacks).forEach(callback => {\r\n        callback(data)\r\n      })\r\n    }, 0)\r\n  }\r\n}\r\n\r\n// 3. 发布同步的消息\r\nPubSub.publishSync = function (msgName, data) {\r\n  // 取出当前消息对应的callbacks\r\n  const callbacks = callbacksObj[msgName]\r\n  // 如果有值\r\n  if (callbacks) {\r\n    // 立即同步执行所有的回调函数\r\n    Object.values(callbacks).forEach(callback => {\r\n      callback(data)\r\n    })\r\n  }\r\n}\r\n\r\n/*\r\n4. 取消消息订阅\r\n  1). 没有传值, flag为undefined\r\n  2). 传入token字符串\r\n  3). msgName字符串\r\n*/\r\nPubSub.unsubscribe = function (flag) {\r\n  // 如果flag没有指定或者为null, 取消所有\r\n  if (flag === undefined) {\r\n    callbacksObj = {}\r\n  } else if (typeof flag === 'string') {\r\n    if (flag.indexOf('token_') === 0) { // flag是token\r\n      // 找到flag对应的callbacks\r\n      const callbacks = Object.values(callbacksObj).find(callbacks => callbacks.hasOwnProperty(flag))\r\n      // 如果存在, 删除对应的属性\r\n      if (callbacks) {\r\n        delete callbacks[flag]\r\n      }\r\n    } else { // flag是msgName\r\n      delete callbacksObj[flag]\r\n    }\r\n\r\n  } else {\r\n    throw new Error('如果传入参数, 必须是字符串类型')\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://weiyaoUtils/./src/PubSub.js?");

/***/ }),

/***/ "./src/ShallowCopy.js":
/*!****************************!*\
  !*** ./src/ShallowCopy.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ShallowCopy\": () => (/* binding */ ShallowCopy)\n/* harmony export */ });\n/**\r\n * 浅拷贝\r\n * @param       {[type]} target [description]\r\n * @constructor\r\n */\r\nfunction ShallowCopy(target) {\r\n  // 如果是对象(不是函数, 也就是可能是object对象或者数组)\r\n  if (target!=null && typeof target==='object') {\r\n    if (target instanceof Array) {\r\n      // return target.slice()\r\n      // return target.filter(() => true)\r\n      // return target.map(item => item)\r\n      return [...target]\r\n    } else {\r\n      // return Object.assign({}, target)\r\n      return {...target}\r\n    }\r\n  }\r\n  // 基本类型或者函数, 直接返回\r\n  return target\r\n}\r\n\n\n//# sourceURL=webpack://weiyaoUtils/./src/ShallowCopy.js?");

/***/ }),

/***/ "./src/addEventListener.js":
/*!*********************************!*\
  !*** ./src/addEventListener.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addEventListener\": () => (/* binding */ addEventListener)\n/* harmony export */ });\n/**\r\n * 语法：addEventListener(element, type, fn, selector)\r\n说明：如果selector没有，直接给element绑定事件，如果selector有，将selector对应的多个元素的事件委托绑定给父元素element\r\n * @param {[type]}   element  [description]\r\n * @param {[type]}   type     [description]\r\n * @param {Function} fn       [description]\r\n * @param {[type]}   selector [description]\r\n */\r\nfunction addEventListener(element, type, fn, selector) {\r\n // 如果没有指定selector, 普通的事件绑定\r\n if (!selector) {\r\n   element.addEventListener(type, fn)\r\n } else {// 否则是代委托的事件绑定\r\n   element.addEventListener(type, function (event) {\r\n     // 得到真正发生事件的目标元素\r\n     const target = event.target\r\n     // 如果与选择器匹配\r\n     if (target.matches(selector)) {\r\n       // 调用处理事件的回调fn, 并指定this为目标元素, 参数为event\r\n       fn.call(target, event)\r\n     }\r\n   })\r\n }\r\n}\r\n\n\n//# sourceURL=webpack://weiyaoUtils/./src/addEventListener.js?");

/***/ }),

/***/ "./src/apply.js":
/*!**********************!*\
  !*** ./src/apply.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apply\": () => (/* binding */ apply)\n/* harmony export */ });\n/**\r\n * apply 函数实现\r\n * @param  {[type]} Fn   [原函数]\r\n * @param  {[type]} obj  [目标函数]\r\n * @param  {[type]} args [类型是数组Array]\r\n * @return {[type]}      [Obj,Obj,Array]\r\n */\r\nfunction apply(Fn,obj,args){\r\n  // 判断\r\n  if(obj == undefined || obj ==null){\r\n    obj = globalThis; //全局对象\r\n    //js中是window , node中是global\r\n  }\r\n  // 为obj 添加临时方法\r\n  obj.temp = Fn;\r\n  // 执行方法\r\n  let result = obj.temp(...args);\r\n  // 删除临时属性\r\n  delete obj.temp;\r\n  // 返回结果\r\n  return result;\r\n}\r\n\n\n//# sourceURL=webpack://weiyaoUtils/./src/apply.js?");

/***/ }),

/***/ "./src/call.js":
/*!*********************!*\
  !*** ./src/call.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"call\": () => (/* binding */ call)\n/* harmony export */ });\n/**\r\n * call方法的实现\r\n * @param  {[type]} Fn   [原函数]\r\n * @param  {[type]} obj  [目标函数]\r\n * @param  {[type]} args [多个参数]\r\n * @return {[type]}      [Obj]\r\n */\r\nfunction call(Fn, obj,...args){\r\n  // 判断\r\n  if(obj == undefined || obj ==null){\r\n    obj = globalThis; //全局对象\r\n    //js中是window , node中是global\r\n  }\r\n  // 为obj添加临时的方法\r\n  obj.temp = Fn;\r\n  // 调用temp 方法 ，变相的获取\r\n  let result = obj.temp(...args);\r\n  delete obj.temp;\r\n  return result;\r\n}\r\n\n\n//# sourceURL=webpack://weiyaoUtils/./src/call.js?");

/***/ }),

/***/ "./src/cancat.js":
/*!***********************!*\
  !*** ./src/cancat.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"concat\": () => (/* binding */ concat)\n/* harmony export */ });\n/**\r\n * concat 切片\r\n * @param  {[type]} arr  [description]\r\n * @param  {[type]} args [description]\r\n * @return {[type]}      [description]\r\n */\r\nfunction concat(arr,...args){\r\n  // 声明一个空数组\r\n  const result = [...arr];\r\n  // 遍历数组\r\n  args.forEach(item=>{\r\n    // 如果是个数组\r\n    if(Array.isArray(item)){\r\n      result.push(...item);\r\n    }else{\r\n      result.push(item);\r\n    }\r\n  });\r\n  return result;\r\n}\r\n\r\n// let arr =[1,2,3];\r\n// let result = concat(arr,[4,5,6],7,8);\r\n// console.log(result);\r\n\n\n//# sourceURL=webpack://weiyaoUtils/./src/cancat.js?");

/***/ }),

/***/ "./src/chunk.js":
/*!**********************!*\
  !*** ./src/chunk.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"chunk\": () => (/* binding */ chunk)\n/* harmony export */ });\n/**\r\n * 数组分块\r\n * @param  {[type]} array [description]\r\n * @param  {[type]} size  [description]\r\n * @return {[type]}       [description]\r\n */\r\nfunction chunk (array, size) {\r\n if (array.length===0) {\r\n   return []\r\n }\r\n size = size || 1\r\n\r\n const bigArr = []\r\n let smallArr = []\r\n\r\n array.forEach(item => {\r\n   if (smallArr.length===0) {\r\n     bigArr.push(smallArr)\r\n   }\r\n   smallArr.push(item)\r\n   if (smallArr.length===size) {\r\n     smallArr = []\r\n   }\r\n })\r\n\r\n return bigArr\r\n}\r\n //\r\n // console.log(chunk([1, 2, 3, 4, 5, 6, 7], 3)) // [[1,2,3], [4,5,6],[7]]\r\n\n\n//# sourceURL=webpack://weiyaoUtils/./src/chunk.js?");

/***/ }),

/***/ "./src/debounce.js":
/*!*************************!*\
  !*** ./src/debounce.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"debounce\": () => (/* binding */ debounce)\n/* harmony export */ });\n/**\r\n * 函数防抖方法\r\n * @param  {Function} callback [回调]\r\n * @param  {[type]}   time     [间隔时间]\r\n * @return {[type]}            [Function]\r\n */\r\nfunction debounce(callback,time){\r\n  // 定时器的变量\r\n  let timeId = null;\r\n  // 返回一个函数\r\n  return function(e){\r\n    // 判断\r\n    if(timeId !==null){\r\n      // 清空定时器\r\n      clearTimeout(timeId);\r\n    }\r\n    // 启动定时器\r\n  timeId =  setTimeout(()=>{\r\n      // 执行回调\r\n      callback.call(this,e);\r\n      // 重置定时器变量\r\n      timeId = null;\r\n    },time)\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://weiyaoUtils/./src/debounce.js?");

/***/ }),

/***/ "./src/deepCopy.js":
/*!*************************!*\
  !*** ./src/deepCopy.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deepCopy\": () => (/* binding */ deepCopy)\n/* harmony export */ });\n/**\r\n * 深拷贝\r\n * @param  {[type]} target   [description]\r\n * @param  {Map}    [map=new Map(]         [description]\r\n * @return {[type]}          [description]\r\n */\r\nfunction deepCopy(target, map=new Map()) {\r\n  if (target!==null && typeof target==='object') {\r\n    // 从缓存容器中读取克隆对象\r\n    let cloneTarget = map.get(target)\r\n    // 如果存在, 返回前面缓存的克隆对象\r\n    if (cloneTarget) {\r\n      return cloneTarget\r\n    }\r\n    // 创建克隆对象(可能是{}或者[])\r\n    if (target instanceof Array) {\r\n      cloneTarget = []\r\n      // 缓存到map中\r\n      map.set(target, cloneTarget)\r\n      target.forEach((item, index) => {\r\n        cloneTarget[index] = deepCopy(item, map)\r\n      })\r\n    } else {\r\n      cloneTarget = {}\r\n      // 缓存到map中\r\n      map.set(target, cloneTarget)\r\n      Object.keys(target).forEach(key => {\r\n        cloneTarget[key] = deepCopy(target[key], map)\r\n      })\r\n    }\r\n\r\n    return cloneTarget\r\n  }\r\n\r\n  return target\r\n}\r\n\n\n//# sourceURL=webpack://weiyaoUtils/./src/deepCopy.js?");

/***/ }),

/***/ "./src/difference.js":
/*!***************************!*\
  !*** ./src/difference.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"difference\": () => (/* binding */ difference)\n/* harmony export */ });\n/**\r\n * @差集\r\n * @param  {[type]} arr1 [description]\r\n * @param  {[type]} arr2 [description]\r\n * @return {[type]}      [description]\r\n */\r\nfunction difference(arr1,arr2){\r\n  if (arr1.length===0) {\r\n   return []\r\n } else if (arr2.length===0) {\r\n   return arr1.slice()\r\n }\r\n return arr1.filter(item => arr2.indexOf(item)===-1)\r\n}\r\n\n\n//# sourceURL=webpack://weiyaoUtils/./src/difference.js?");

/***/ }),

/***/ "./src/drop.js":
/*!*********************!*\
  !*** ./src/drop.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drop\": () => (/* binding */ drop)\n/* harmony export */ });\n/**\r\n * 前几位不要\r\n * @param  {[type]} arr  [description]\r\n * @param  {[type]} size [description]\r\n * @return {[type]}      [description]\r\n */\r\nfunction drop(arr,size){\r\n    return arr.filter((item,index)=> index>=size);\r\n}\r\n\n\n//# sourceURL=webpack://weiyaoUtils/./src/drop.js?");

/***/ }),

/***/ "./src/dropRight.js":
/*!**************************!*\
  !*** ./src/dropRight.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dropRight\": () => (/* binding */ dropRight)\n/* harmony export */ });\n/**\r\n * 后几位不要\r\n * @param  {[type]} arr  [description]\r\n * @param  {[type]} size [description]\r\n * @return {[type]}      [description]\r\n */\r\nfunction dropRight(arr,size){\r\n  return arr.filter((value,index)=>{\r\n    return index <arr.length -size;\r\n  })\r\n}\r\n\r\n// console.log(dropRight([1,2,3,4,5],2));\r\n\n\n//# sourceURL=webpack://weiyaoUtils/./src/dropRight.js?");

/***/ }),

/***/ "./src/eventBus.js":
/*!*************************!*\
  !*** ./src/eventBus.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"eventBus\": () => (/* binding */ eventBus)\n/* harmony export */ });\nlet eventBus = {}\r\n\r\n/*\r\n{\r\n  add:  [callback1, callback2]\r\n  delete: [callback3]\r\n}\r\n*/\r\nlet callbacksObj = {}\r\n\r\n/*\r\n绑定事件监听\r\n*/\r\neventBus.on = function (eventName, callback) {\r\n  const callbacks = callbacksObj[eventName]\r\n  if (callbacks) {\r\n    callbacks.push(callback)\r\n  } else {\r\n    callbacksObj[eventName] = [callback]\r\n  }\r\n}\r\n\r\n/*\r\n分发事件\r\n*/\r\neventBus.emit = function (eventName, data) {\r\n  const callbacks = callbacksObj[eventName]\r\n  if (callbacks && callbacks.length > 0) {\r\n    callbacks.forEach(callback => {\r\n      callback(data)\r\n    })\r\n  }\r\n}\r\n\r\n/*\r\n移除事件监听\r\n*/\r\neventBus.off = function (eventName) {\r\n  if (eventName) {\r\n    delete callbacksObj[eventName]\r\n  } else {\r\n    callbacksObj = {}\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://weiyaoUtils/./src/eventBus.js?");

/***/ }),

/***/ "./src/every.js":
/*!**********************!*\
  !*** ./src/every.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"every\": () => (/* binding */ every)\n/* harmony export */ });\n/**\r\n * [every description]\r\n * @param  {[type]}   arr      [description]\r\n * @param  {Function} callback [description]\r\n * @return {[type]}            [description]\r\n */\r\nfunction every(arr,callback){\r\n  //遍历数组\r\n  for (var i = 0; i < arr.length; i++) {\r\n    // 执行回调 如果返回结果是假 为false\r\n    if(!callback(arr[i],i)){\r\n      return false;\r\n    }\r\n  }\r\n// 如果都满足\r\n  return true;\r\n}\r\n\n\n//# sourceURL=webpack://weiyaoUtils/./src/every.js?");

/***/ }),

/***/ "./src/filter.js":
/*!***********************!*\
  !*** ./src/filter.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"filter\": () => (/* binding */ filter)\n/* harmony export */ });\n/**\r\n * [filter 方法]\r\n * @param  {[type]}   arr      [原数组]\r\n * @param  {Function} callback [回调函数]\r\n * @return {[type]}            [Array]\r\n */\r\nfunction filter(arr,callback){\r\n  // 声明空数组\r\n  let result = [];\r\n  // 变量数组\r\n  for(let i = 0;i<arr.length;i++){\r\n    // 执行回调\r\n    let res = callback(arr[i],i);\r\n    // 判断 如果为真则压入到原数组中\r\n    if(res){\r\n      result.push(arr[i]);\r\n    }\r\n  }\r\n  // 返回结果\r\n  return result;\r\n}\r\n\r\n// let arr = [3,43,54,65,65,23,321,12];\r\n// let result = filter(arr,function(item){\r\n//   return item>40;\r\n// });\r\n// f\r\n// console.log(result);\r\n\n\n//# sourceURL=webpack://weiyaoUtils/./src/filter.js?");

/***/ }),

/***/ "./src/find.js":
/*!*********************!*\
  !*** ./src/find.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"find\": () => (/* binding */ find)\n/* harmony export */ });\n/**\r\n * find 方法 找到第一个满足条件的下标\r\n * @param  {[type]}   arr      [原数组]\r\n * @param  {Function} callback [description]\r\n * @return {[type]}   Number         [description]\r\n */\r\nfunction find(arr,callback){\r\n  // 遍历数组\r\n  for (var i = 0; i < arr.length; i++) {\r\n    // 执行回调\r\n    let res = callback(arr[i],i);\r\n    // 判断\r\n    if(res){\r\n      // 返回当前正在遍历的元素\r\n      return arr[i];\r\n    }\r\n  }\r\n  return undefined;\r\n}\r\n\r\n// let arr = [3,43,54,65,65,23,321,12];\r\n// let result = find(arr,function(item){\r\n//   return item>40;\r\n// });\r\n//\r\n// console.log(result);\r\n\n\n//# sourceURL=webpack://weiyaoUtils/./src/find.js?");

/***/ }),

/***/ "./src/findIndex.js":
/*!**************************!*\
  !*** ./src/findIndex.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"findIndex\": () => (/* binding */ findIndex)\n/* harmony export */ });\n/**\r\n * @findIndex 方法\r\n * @param  {[type]}   arr      [description]\r\n * @param  {Function} callback [description]\r\n * @return {[type]}            [description]\r\n */\r\nfunction findIndex(arr,callback){\r\n  // 遍历数组\r\n  for (var i = 0; i < arr.length; i++) {\r\n    // 执行回调\r\n    let res = callback(arr[i],i);\r\n    // 判断\r\n    if(res){\r\n      // 返回当前正在遍历的元素\r\n      return i;\r\n    }\r\n  }\r\n  return -1;\r\n}\r\n\r\n// let arr = [3,43,54,65,65,23,321,12];\r\n// let result = findIndex(arr,function(item){\r\n//   return item>40;\r\n// });\r\n//\r\n// console.log(result);\r\n\n\n//# sourceURL=webpack://weiyaoUtils/./src/findIndex.js?");

/***/ }),

/***/ "./src/flat.js":
/*!*********************!*\
  !*** ./src/flat.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"flat\": () => (/* binding */ flat)\n/* harmony export */ });\n/**\r\n * [flat description]\r\n * @param  {[type]} array [description]\r\n * @return {[type]}     [description]\r\n */\r\nfunction flat(array){\r\n  let arr = [].concat(...array)\r\n  while (arr.some(item => Array.isArray(item))) {\r\n    arr = [].concat(...arr)\r\n  }\r\n  return arr\r\n}\r\n\r\n// let arr = [1,32,4,[32,43,5,3],3,23]\r\n// let result = flat(arr);\r\n// console.log(result);\r\n\n\n//# sourceURL=webpack://weiyaoUtils/./src/flat.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"concat\": () => (/* reexport safe */ _cancat__WEBPACK_IMPORTED_MODULE_0__.concat),\n/* harmony export */   \"addEventListener\": () => (/* reexport safe */ _addEventListener__WEBPACK_IMPORTED_MODULE_1__.addEventListener),\n/* harmony export */   \"apply\": () => (/* reexport safe */ _apply__WEBPACK_IMPORTED_MODULE_2__.apply),\n/* harmony export */   \"call\": () => (/* reexport safe */ _call__WEBPACK_IMPORTED_MODULE_3__.call),\n/* harmony export */   \"chunk\": () => (/* reexport safe */ _chunk__WEBPACK_IMPORTED_MODULE_4__.chunk),\n/* harmony export */   \"debounce\": () => (/* reexport safe */ _debounce__WEBPACK_IMPORTED_MODULE_5__.debounce),\n/* harmony export */   \"deepCopy\": () => (/* reexport safe */ _deepCopy__WEBPACK_IMPORTED_MODULE_6__.deepCopy),\n/* harmony export */   \"difference\": () => (/* reexport safe */ _difference__WEBPACK_IMPORTED_MODULE_7__.difference),\n/* harmony export */   \"drop\": () => (/* reexport safe */ _drop__WEBPACK_IMPORTED_MODULE_8__.drop),\n/* harmony export */   \"dropRight\": () => (/* reexport safe */ _dropRight__WEBPACK_IMPORTED_MODULE_9__.dropRight),\n/* harmony export */   \"eventBus\": () => (/* reexport safe */ _eventBus__WEBPACK_IMPORTED_MODULE_10__.eventBus),\n/* harmony export */   \"every\": () => (/* reexport safe */ _every__WEBPACK_IMPORTED_MODULE_11__.every),\n/* harmony export */   \"filter\": () => (/* reexport safe */ _filter__WEBPACK_IMPORTED_MODULE_12__.filter),\n/* harmony export */   \"find\": () => (/* reexport safe */ _find__WEBPACK_IMPORTED_MODULE_13__.find),\n/* harmony export */   \"findIndex\": () => (/* reexport safe */ _findIndex__WEBPACK_IMPORTED_MODULE_14__.findIndex),\n/* harmony export */   \"flat\": () => (/* reexport safe */ _flat__WEBPACK_IMPORTED_MODULE_15__.flat),\n/* harmony export */   \"map\": () => (/* reexport safe */ _map__WEBPACK_IMPORTED_MODULE_16__.map),\n/* harmony export */   \"mergeObject\": () => (/* reexport safe */ _mergeObject__WEBPACK_IMPORTED_MODULE_17__.mergeObject),\n/* harmony export */   \"myInstanceOf\": () => (/* reexport safe */ _myInstanceOf__WEBPACK_IMPORTED_MODULE_18__.myInstanceOf),\n/* harmony export */   \"newInstance\": () => (/* reexport safe */ _newInstance__WEBPACK_IMPORTED_MODULE_19__.newInstance),\n/* harmony export */   \"PubSub\": () => (/* reexport safe */ _PubSub__WEBPACK_IMPORTED_MODULE_20__.PubSub),\n/* harmony export */   \"pull\": () => (/* reexport safe */ _pull__WEBPACK_IMPORTED_MODULE_21__.pull),\n/* harmony export */   \"reduce\": () => (/* reexport safe */ _reduce__WEBPACK_IMPORTED_MODULE_22__.reduce),\n/* harmony export */   \"reverseString\": () => (/* reexport safe */ _reverseString__WEBPACK_IMPORTED_MODULE_23__.reverseString),\n/* harmony export */   \"palindrome\": () => (/* reexport safe */ _reverseString__WEBPACK_IMPORTED_MODULE_23__.palindrome),\n/* harmony export */   \"truncate\": () => (/* reexport safe */ _reverseString__WEBPACK_IMPORTED_MODULE_23__.truncate),\n/* harmony export */   \"ShallowCopy\": () => (/* reexport safe */ _ShallowCopy__WEBPACK_IMPORTED_MODULE_24__.ShallowCopy),\n/* harmony export */   \"slice\": () => (/* reexport safe */ _slice__WEBPACK_IMPORTED_MODULE_25__.slice),\n/* harmony export */   \"some\": () => (/* reexport safe */ _some__WEBPACK_IMPORTED_MODULE_26__.some),\n/* harmony export */   \"throttle\": () => (/* reexport safe */ _throttle__WEBPACK_IMPORTED_MODULE_27__.throttle),\n/* harmony export */   \"unique\": () => (/* reexport safe */ _unique__WEBPACK_IMPORTED_MODULE_28__.unique)\n/* harmony export */ });\n/* harmony import */ var _cancat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cancat */ \"./src/cancat.js\");\n/* harmony import */ var _addEventListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addEventListener */ \"./src/addEventListener.js\");\n/* harmony import */ var _apply__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apply */ \"./src/apply.js\");\n/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./call */ \"./src/call.js\");\n/* harmony import */ var _chunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chunk */ \"./src/chunk.js\");\n/* harmony import */ var _debounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./debounce */ \"./src/debounce.js\");\n/* harmony import */ var _deepCopy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deepCopy */ \"./src/deepCopy.js\");\n/* harmony import */ var _difference__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./difference */ \"./src/difference.js\");\n/* harmony import */ var _drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./drop */ \"./src/drop.js\");\n/* harmony import */ var _dropRight__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dropRight */ \"./src/dropRight.js\");\n/* harmony import */ var _eventBus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./eventBus */ \"./src/eventBus.js\");\n/* harmony import */ var _every__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./every */ \"./src/every.js\");\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./filter */ \"./src/filter.js\");\n/* harmony import */ var _find__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./find */ \"./src/find.js\");\n/* harmony import */ var _findIndex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./findIndex */ \"./src/findIndex.js\");\n/* harmony import */ var _flat__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./flat */ \"./src/flat.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./map */ \"./src/map.js\");\n/* harmony import */ var _mergeObject__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mergeObject */ \"./src/mergeObject.js\");\n/* harmony import */ var _myInstanceOf__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./myInstanceOf */ \"./src/myInstanceOf.js\");\n/* harmony import */ var _newInstance__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./newInstance */ \"./src/newInstance.js\");\n/* harmony import */ var _PubSub__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./PubSub */ \"./src/PubSub.js\");\n/* harmony import */ var _pull__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pull */ \"./src/pull.js\");\n/* harmony import */ var _reduce__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./reduce */ \"./src/reduce.js\");\n/* harmony import */ var _reverseString__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./reverseString */ \"./src/reverseString.js\");\n/* harmony import */ var _ShallowCopy__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ShallowCopy */ \"./src/ShallowCopy.js\");\n/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./slice */ \"./src/slice.js\");\n/* harmony import */ var _some__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./some */ \"./src/some.js\");\n/* harmony import */ var _throttle__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./throttle */ \"./src/throttle.js\");\n/* harmony import */ var _unique__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./unique */ \"./src/unique.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://weiyaoUtils/./src/index.js?");

/***/ }),

/***/ "./src/map.js":
/*!********************!*\
  !*** ./src/map.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"map\": () => (/* binding */ map)\n/* harmony export */ });\n/**\r\n * map()方法的封装\r\n * @param  {[type]}   arr      [原数组]\r\n * @param  {Function} callback [回调函数]\r\n * @return {[type]}            [Array]\r\n */\r\nfunction map(arr,callback){\r\n  // 声明一个空数组\r\n  let result = [];\r\n  // 变量数组\r\n  for(let i = 0;i<arr.length;i++){\r\n    // 执行回调\r\n    result.push(callback(arr[i],i));\r\n  }\r\n  // 返回结果\r\n  return result;\r\n}\r\n\r\n// let arr = [1,2,3,4,5];\r\n// let result  = map(arr,(item,index)=>{\r\n//   return item *10;\r\n// });\r\n// console.log(result);\r\n\n\n//# sourceURL=webpack://weiyaoUtils/./src/map.js?");

/***/ }),

/***/ "./src/mergeObject.js":
/*!****************************!*\
  !*** ./src/mergeObject.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mergeObject\": () => (/* binding */ mergeObject)\n/* harmony export */ });\n/**\r\n * 合并对象\r\n * @param  {[type]} objs [description]\r\n * @return {[type]}      [description]\r\n */\r\nfunction mergeObject(...objs) {\r\n  const result = {}\r\n\r\n  // 遍历objs\r\n  objs.forEach(obj => {\r\n    Object.keys(obj).forEach(key => {\r\n      // 如果result还没有key值属性\r\n      if (!result.hasOwnProperty(key)) {\r\n        result[key] = obj[key]\r\n      } else { // 否则 合并属性\r\n        result[key] = [].concat(result[key], obj[key])\r\n      }\r\n    })\r\n  })\r\n\r\n  // 可以使用reduce来代替forEach手动添加\r\n  return result\r\n}\r\n\n\n//# sourceURL=webpack://weiyaoUtils/./src/mergeObject.js?");

/***/ }),

/***/ "./src/myInstanceOf.js":
/*!*****************************!*\
  !*** ./src/myInstanceOf.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"myInstanceOf\": () => (/* binding */ myInstanceOf)\n/* harmony export */ });\n/**\r\n * 判断obj是否是Type类型的实例\r\n * 与instanceof 功能相同\r\n * @param  {[type]} obj  [description]\r\n * @param  {[type]} Type [description]\r\n * @return {[type]}      [description]\r\n */\r\nfunction myInstanceOf(obj, Type) {\r\n  // 得到原型对象\r\n  let protoObj = obj.__proto__\r\n\r\n  // 只要原型对象存在\r\n  while(protoObj) {\r\n    // 如果原型对象是Type的原型对象, 返回true\r\n    if (protoObj === Type.prototype) {\r\n      return true\r\n    }\r\n    // 指定原型对象的原型对象\r\n    protoObj = protoObj.__proto__\r\n  }\r\n\r\n  return false\r\n}\r\n\n\n//# sourceURL=webpack://weiyaoUtils/./src/myInstanceOf.js?");

/***/ }),

/***/ "./src/newInstance.js":
/*!****************************!*\
  !*** ./src/newInstance.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newInstance\": () => (/* binding */ newInstance)\n/* harmony export */ });\n/**\r\n * 创建Fn构造函数的实例对象\r\n * @param  {[type]} Fn   [description]\r\n * @param  {[type]} args [description]\r\n * @return {[type]}      [description]\r\n */\r\nfunction newInstance(Fn,...args){\r\n  // 创建一个空的object实例对象obj, 作为Fn的实例对象\r\n  const obj = {}\r\n  // 将Fn的prototype属性值赋值给obj的__proto__属性值\r\n  obj.__proto__ = Fn.prototype\r\n  // 调用Fn, 指定this为obj, 参数为args列表\r\n  const result = Fn.call(obj, ...args)\r\n  // 如果Fn返回的是一个对象类型, 那返回的就不再是obj, 而是Fn返回的对象\r\n  // 否则返回obj\r\n  return result instanceof Object ? result : obj\r\n}\r\n\n\n//# sourceURL=webpack://weiyaoUtils/./src/newInstance.js?");

/***/ }),

/***/ "./src/pull.js":
/*!*********************!*\
  !*** ./src/pull.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pull\": () => (/* binding */ pull)\n/* harmony export */ });\n/**\r\n * 删除原数组中与value相同的元素, 返回所有删除元素的数组\r\n * @param  {[type]} array  [description]\r\n * @param  {[type]} values [description]\r\n * @return {[type]}        [description]\r\n */\r\nfunction pull (array, ...values) {\r\n if (array.length===0 || values.length===0) {\r\n   return []\r\n }\r\n let result = []\r\n for (let index = 0; index < array.length; index++) {\r\n   const item = array[index]\r\n    if (values.indexOf(item)!==-1) {\r\n     array.splice(index, 1)\r\n     result.push(item)\r\n     index--\r\n   }\r\n }\r\n// 返回删除后的结果\r\n return array;\r\n}\r\n// let arr = [1,3,5,3,7]\r\n// console.log(pull(arr, 2, 7, 3, 7));\r\n\n\n//# sourceURL=webpack://weiyaoUtils/./src/pull.js?");

/***/ }),

/***/ "./src/reduce.js":
/*!***********************!*\
  !*** ./src/reduce.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reduce\": () => (/* binding */ reduce)\n/* harmony export */ });\n/**\r\n * [reduce 方法]\r\n * @param  {[type]}   arr       [原数组]\r\n * @param  {Function} callback  [回调函数]\r\n * @param  {[type]}   initValue [值,默认是 0 ]\r\n * @return {[type]}             [Number]\r\n */\r\n\r\nfunction reduce(arr,callback,initValue){\r\n  // 声明变量 默认是 0\r\n  let result = initValue || 0;\r\n  // 执行回调\r\n  for (var i = 0; i < arr.length; i++) {\r\n     result = callback(result,arr[i]);\r\n  }\r\n  // 返回最终的结果\r\n  return result;\r\n}\r\n\r\n// let arr = [1,2,3];\r\n// let result = reduce(arr, function(res,value){\r\n//     return res*value;\r\n// },1)\r\n// console.log(result);\r\n\n\n//# sourceURL=webpack://weiyaoUtils/./src/reduce.js?");

/***/ }),

/***/ "./src/reverseString.js":
/*!******************************!*\
  !*** ./src/reverseString.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reverseString\": () => (/* binding */ reverseString),\n/* harmony export */   \"palindrome\": () => (/* binding */ palindrome),\n/* harmony export */   \"truncate\": () => (/* binding */ truncate)\n/* harmony export */ });\n/**\r\n * 字符串倒序: reverseString(str)  生成一个倒序的字符串\r\n * @param  {[type]} str [description]\r\n * @return {[type]}     [description]\r\n */\r\nfunction reverseString(str) {\r\n// return str.split('').reverse().join('')\r\n  // return [...str].reverse().join('')\r\n  return Array.from(str).reverse().join('')\r\n}\r\n\r\n/**\r\n * 字符串是否是回文: palindrome(str) 如果给定的字符串是回文，则返回 true ；否则返回 false\r\n * @param  {[type]} str [description]\r\n * @return {[type]}     [description]\r\n */\r\nfunction palindrome(str) {\r\n    return str === reverseString(str)\r\n}\r\n\r\n/**\r\n * 截取字符串: truncate(str, num) 如果字符串的长度超过了num, 截取前面num长度部分, 并以...结束\r\n * @param  {[type]} str [description]\r\n * @param  {[type]} num [description]\r\n * @return {[type]}     [description]\r\n */\r\nfunction truncate(str, num) {\r\n\treturn str.length > num ? str.slice(0, num) + '...' : str\r\n}\r\n\n\n//# sourceURL=webpack://weiyaoUtils/./src/reverseString.js?");

/***/ }),

/***/ "./src/slice.js":
/*!**********************!*\
  !*** ./src/slice.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"slice\": () => (/* binding */ slice)\n/* harmony export */ });\nfunction slice(arr,begin,end){\r\n  // 若arr.length  = 0;\r\n  if(arr.length ===0){\r\n    return [];\r\n  }\r\n  // 判断 begin\r\n  begin = begin ||0;\r\n  if(begin>=arr.length){\r\n    return [];\r\n  }\r\n\r\n  // 判断end\r\n  end = end || arr.length;\r\n  // <1就变成数组长度\r\n  if(end<begin){\r\n    end = arr.length;\r\n  }\r\n  // 声明一个空数组\r\n  const result = [];\r\n  // 遍历对象\r\n  for (var i = 0; i < arr.length; i++) {\r\n\r\n    if(i>=begin && i < end){\r\n      //讲下标对应的元素压入数组\r\n        result.push(arr[i]);\r\n    }\r\n  }\r\n  return result;\r\n}\r\n\r\n\r\n// let arr = [1,2,3,4,5,6];\r\n// let result = slice(arr,1,4);\r\n// console.log(result);\r\n\n\n//# sourceURL=webpack://weiyaoUtils/./src/slice.js?");

/***/ }),

/***/ "./src/some.js":
/*!*********************!*\
  !*** ./src/some.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"some\": () => (/* binding */ some)\n/* harmony export */ });\n/**\r\n * [every description]\r\n * @param  {[type]}   arr      [description]\r\n * @param  {Function} callback [description]\r\n * @return {[type]}            [description]\r\n */\r\nfunction some(arr,callback){\r\n  //遍历数组\r\n  for (var i = 0; i < arr.length; i++) {\r\n    // 执行回调 如果返回结果有一个是真\r\n    if(callback(arr[i],i)){\r\n      return true;\r\n    }\r\n  }\r\n// 如果都不满足\r\n  return false;\r\n}\r\n\n\n//# sourceURL=webpack://weiyaoUtils/./src/some.js?");

/***/ }),

/***/ "./src/throttle.js":
/*!*************************!*\
  !*** ./src/throttle.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"throttle\": () => (/* binding */ throttle)\n/* harmony export */ });\n/**\r\n * 函数节流\r\n * @param  {Function} callback [事件函数]\r\n * @param  {[type]}   wait     [等待时间]\r\n * @return {[type]}            [Function]\r\n */\r\nfunction throttle(callback,wait){\r\n  // 定义开始时间\r\n  let start = 0;\r\n\r\n  return function(e){\r\n    // 获取当前的时间戳\r\n    let now = Date.now();\r\n    // 判断\r\n    if(now - start >= wait){\r\n      // 满足条件，则执行回调\r\n      callback.call(this,e);\r\n      // 修改开始时间\r\n      start = now;\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://weiyaoUtils/./src/throttle.js?");

/***/ }),

/***/ "./src/unique.js":
/*!***********************!*\
  !*** ./src/unique.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"unique\": () => (/* binding */ unique)\n/* harmony export */ });\n/**\r\n * 数组去重\r\n * @param  {[type]} arr [description]\r\n * @return {[type]}     [description]\r\n */\r\nfunction unique(arr){\r\n  // 声明一个空数组\r\n  let set = new Set([...arr]);\r\n\r\n  return [...set];\r\n}\r\n\r\n// let arr = [23,32,4,3,3,32,32,3,3,2,32];\r\n// let result = unique(arr);\r\n// console.log(result);\r\n\n\n//# sourceURL=webpack://weiyaoUtils/./src/unique.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});