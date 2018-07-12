'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//对象赋值  将声明的变量直接赋给obj,届时obj成为一个对象
var name = 'mzl';
var skill = 'ES6';
var obj = { name: name, skill: skill };
console.log(obj); //{name:'mzl',skill:'ES6'}
//对象Key值构建 利用[]进行构建
var key = 'skill';
var obj2 = _defineProperty({}, key, 'ES6');
console.log(obj2); //{skill:'ES6'}
//*********************************************** */
//自定义对象方法
//传统方法
var obj3 = {
    add: function add(a, b) {
        return a + b;
    }
};
console.log(obj3.add(1, 2)); //3
/************************************************ */
//1.对象比较   Object.is(对象1,对象2)
var ooo1 = { name: 'mzl' };
var ooo2 = { name: 'mzl' };
//传统方式的比较
console.log(ooo1.name === ooo2.name); //true
//ES6的比较  Object.is(对象1,对象2)
console.log(Object.is(ooo1.name, ooo2.name)); //true
// *  ===为同值相等 is为严格相等
//2.对象合并 Object.assign(对象1，对象2，对象3)
var a = { a: 'mzl' };
var b = { b: 'wzl' };
var c = { c: 'ES6' };
var d = Object.assign(a, b, c);
console.log(d); //{a:'mzl',b:'wzl',c:'ES6'}
//****************************************************** */
