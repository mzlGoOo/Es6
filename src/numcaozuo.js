//二进制
let num = 0b010101;
console.log(num);
//八进制
let num2 = 0o666;
console.log(num2);
//数字的判断
let a = 11 / 4;
//验证数字(不论是整形还是浮点型都返回true)
//Number.isFinite()
console.log(Number.isFinite(a)); //true
console.log(Number.isFinite('mzl')); //false
console.log(Number.isFinite(NaN)); //false
console.log(Number.isFinite(undefined)); //false
console.log('----------------------------');
//验证是是否为整数
//Number.isInteger()
let b = 123.1;
console.log(Number.isInteger(b)); //false
//整数，浮点型转换
let c = 200;
console.log(Number.parseFloat(c)); //200
console.log(Number.parseInt(b)); //123
console.log('----------------------------');
//整数取值范围操作
// Math.pow(底数，指数)
let d = Math.pow(2, 53); //2的53次方
console.log(d);
//验证NaN
//Number.isNaN()
console.log(Number.isNaN(NaN)); //true