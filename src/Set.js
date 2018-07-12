/*Set数据结构*/
//Set的声明 不是数组  Set([])
let setArr = new Set(['mzl', 'ES6', 'web', '机器侠', 'mzl']);
console.log(setArr); //Set(4){} Set 和 Array 的区别:Set不允许有重复的，去重，而且Set不是数组
/********************************************************************** */
//Set值的增删查
// 1.add
let setArr2 = new Set(['mzl', 'ES6', 'web', '机器侠']);
setArr2.add('前端小白');
console.log(setArr2); //Set(5){}
//2.delete
let setArr3 = new Set(['mzl', 'ES6', 'web', '机器侠']);
setArr3.delete('web');
console.log(setArr3); //Set(3){}
//3.has
let setArr4 = new Set(['mzl', 'ES6', 'web', '机器侠']);
console.log(setArr4.has('mzl')); //true
//4.clear
let setArr5 = new Set(['mzl', 'ES6', 'web', '机器侠']);
setArr5.clear();
console.log(setArr5); //Set(0){}
console.log('*********************************');
/********************************************************** */
//Set的循环
//1.for...of...
let setArr6 = new Set(['mzl', 'ES6', 'web', '机器侠']);
for (let item of setArr6) {
    console.log(item);
}
//2.forEach()
setArr6.forEach(val => console.log(val));
//3.size //获取Set的值的数量(长度)
console.log(setArr6.size);


/*--------------------------------------------------------------------------------*/
//*WeakSet的声明(了解)
//注意这里不能直接在new的时候放入值，必须利用add填值
let weakObj = new WeakSet();
let Obj = { a: 'mzl', b: 'wzl' };
weakObj.add(Obj);
console.log(weakObj);