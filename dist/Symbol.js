'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// /*全局标记 Symbol() 表示独一无二的值
var a = new String();
var b = new Number();
var c = new Boolean();
var d = new Array();
var e = new Object();
var f = Symbol();
console.log(typeof f === 'undefined' ? 'undefined' : _typeof(f));

var g = Symbol('mzl');
console.log(g);
console.log(g.toString());
//*************************************** */
// Symbol在对象中的应用
//1. Symbol 构建对象的key
var mzl = Symbol();
var obj = _defineProperty({}, mzl, '机器侠');
//这里只能写成 obj[key] 不能写成obj.key
console.log(obj[mzl]); //机器侠
//这里就是给对象的键赋了一个新的值
obj[mzl] = 'mmm';
console.log(obj[mzl]); //mmm
//2.保护对象元素(部分循环)
var obj2 = { name: 'mzl', skill: 'ES6' };
var age = Symbol();
obj2[age] = 18;
for (var item in obj2) {
    console.log(item);
    // console.log(obj2[item]); //这里没有将age输出
}
console.log(obj2); //这个时候就将age这个属性保护起来了 {name:'mzl',skill:'ES6',Symbol():18}
