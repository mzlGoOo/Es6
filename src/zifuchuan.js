//拼接字符串
//（传统模式）
// let mzl='机器人';
// let hello='很高兴认识你';
// let helloname=hello+'我的朋友'+mzl;
// console.log(helloname);
//es6模式
let mzl = '机器人';
//***注意这里不是单引号 是 `
let helloname = `我的朋友${mzl}`;
console.log(helloname);
//支持运算
let a = 1;
let b = 2;
let result = `${a+b}`;
console.log(result);
//查找是否村存在
let jspang = '技术胖';
let blog = `非常高兴能够认识你，我的好朋友技术胖，你最棒`;
console.log(blog.indexOf(jspang)); //返回的是jspang所在的索引值
console.log(blog.includes(jspang)); //返回的是布尔值，是够包含jspang
console.log(blog.startsWith(jspang)); //判断开头是否存在
console.log(blog.endsWith(jspang)); //判断结尾是否存在
console.log('jspang'.repeat(3)); //复制3个字符串