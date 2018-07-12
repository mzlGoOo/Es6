export var a = 'mzl';
var b = 'mzl';
var c = '机器侠';
var d = 'ES6';
export { b, c, d };
export function add(a, b) {
    return a + b;
}
//as的用法 有些时候我们并不想暴露模块里边的变量名称，而给模块起一个更语义话的名称，这时候我们就可以使用as来操作。
var m = 'mzl';
var z = '机器侠';
var l = 'Es6';
export {
    names as m,
    onames as z,
    skills as l
}

//export default的使用  加上default相当是一个默认的入口。在一个文件里export default只能有一个。我们来对比一下export和export   default的区别

/****************export*****************

export var a ='jspang';
export function add(a,b){
    return a+b;
}
export var a ='jspang'; 
export function add(a,b){
    return a+b;
}

对应的导入方式
import {a,add} form './temp';//也可以分开写

/***************export defalut******************

export default var a='jspang';
export default var a='jspang';

对应的引入方式
import str from './temp';   
import str from './temp';*/