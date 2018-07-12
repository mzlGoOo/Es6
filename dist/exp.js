'use strict';

var _temp = require('./temp.js');

console.log(_temp.a); //ES6模块化不能直接在浏览器预览，必须要用babel编译后才能看

console.log(_temp.b);
console.log(_temp.c);
console.log(_temp.d);
console.log((0, _temp.add)(1, 2));
console.log(_temp.names);
console.log(_temp.onames);
console.log(_temp.skills);
