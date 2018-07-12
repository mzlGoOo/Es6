//对象赋值  将声明的变量直接赋给obj,届时obj成为一个对象
let name = 'mzl';
let skill = 'ES6';
let obj = { name, skill };
console.log(obj); //{name:'mzl',skill:'ES6'}
//对象Key值构建 利用[]进行构建
let key = 'skill';
let obj2 = {
    [key]: 'ES6'
}
console.log(obj2); //{skill:'ES6'}
//*********************************************** */
//自定义对象方法
//传统方法
var obj3 = {
    add: function(a, b) {
        return a + b;
    }
}
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
let d = Object.assign(a, b, c);
console.log(d); //{a:'mzl',b:'wzl',c:'ES6'}
//****************************************************** */