// es6的传参函数
//常规函数
function add(a, b) {
    return a + b;
}
console.log(add(1, 5)); //6
console.log(add.length); //2

console.log('------------------')

//默认值
function add2(a, b = 1) {
    return a + b;
}
console.log(add2(2)); //这里只传了一个参数即为函数中未定义的参数a的值
console.log(add2.length); //1

console.log('--------------------')

//es6箭头函数
var adds = (a, b) => a + b;

// var adds = function(a, b) {
//     return a + b;
// }
console.log(adds(1, 5)); //6

var addsa = (a, b = 1) => a + b;
console.log(addsa(2));