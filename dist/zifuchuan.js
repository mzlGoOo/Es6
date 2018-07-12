'use strict';

//拼接字符串
//（传统模式）
// let mzl='机器人';
// let hello='很高兴认识你';
// let helloname=hello+'我的朋友'+mzl;
// console.log(helloname);
//es6模式
var mzl = '机器人';
//***注意这里不是单引号 是 `
var helloname = '\u6211\u7684\u670B\u53CB' + mzl;
console.log(helloname);
