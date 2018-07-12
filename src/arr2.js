//fill()实例方法 fill(填充的对象，从第几位开始，到第几位结束)
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.fill('jspang', 2, 5);
console.log(arr); //这样就填充了三个jspang
// for...of 循环
let arr2 = ['mmm', 'zzz', 'lll']
for (let val of arr2) {
    console.log(val)
}
//输出键值
let arr3 = ['www', 'zzz', 'lll', 'ddd', 'sss', 'bbb'];
for (let item of arr3.keys()) {
    console.log(item); //输出的是数组的键值
}
//输出键值和内容entries()
let arr4 = ['mmm', 'zzz', 'lll'];
for (let [index, val] of arr4.entries()) {
    console.log(index + ':' + val);
}
//手动控制数组输出的方式  手动跳转下一个值
let arr5 = ['mmmm', 'zzzz', 'llll', 'gggg', 'oooo'];
let arr6 = arr5.entries();
console.log(arr6.next().value);
console.log('----------------');
console.log(arr6.next().value);
console.log('////////////////');
console.log(arr6.next().value);
console.log('*****************');
console.log(arr6.next().value);
console.log('+++++++++++++++++');
console.log(arr6.next().value);