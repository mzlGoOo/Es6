/*传统传递对象参数 */
var somedata = {
    name: 'wzl',
    sex: 'woman'
};

function go(a, b) {
    console.log(a, b);
}
go(somedata.name, somedata.sex);

/*对象的函数解构  （不用一个一个传递参数了）*/
let json = {
    name: 'mzl',
    sex: 'man'
};
/*这里直接传递了一个对象*/
function fun({ name, sex }) {
    console.log(name, sex)
}
fun(json);
// *************************************************
/*数组的函数解构*/
//数组里面可以有多个值 ，用扩展符轻松搞定
let arr = ['mzl', 'man', 'good', 'duoyu'];

function gogo(a, b, c) {
    console.log(a, b, c)
};
gogo(...arr);
//*************************************************** */
//in是用来判断对象中是否存在某个值
let obj = {
    a: 'mzl',
    b: 'wzl',
    c: 'love'
};
console.log('a' in obj);
//***************************************************** */
//数组的遍历方法
// 1.forEach()
let arr2 = ['aaa', 'bbb', 'ccc'];
arr2.forEach((val, index) => console.log(index, val));
console.log('*****************');
//2.filter过滤
arr2.filter(x => console.log(x));
/*这里传的两个参数分别是val 和 index*/
arr2.filter((x, y) => console.log(y, x));
console.log('*****************');
//3.some和filter写法一致
arr2.some(x => console.log(x));
arr2.some((x, y) => console.log(y, x));
console.log('*****************');
//*4.map //map起到一个替换的作用
console.log(arr2.map(x => 'web')); //['web','web','web']
//************************************************************* */
//数组转换为字符串
//1.join() 在数组的元素中间加一些东西
let arr3 = ['mmm', 'zzz', 'lll'];
console.log(arr3.join(' '));
//2.toString() 直接将数组的元素用逗号分隔开
console.log(arr3.toString());