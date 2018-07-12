'use strict';

/*Set数据结构*/
//Set的声明 不是数组  Set([])
var setArr = new Set(['mzl', 'ES6', 'web', '机器侠', 'mzl']);
console.log(setArr); //Set(4){} Set 和 Array 的区别:Set不允许有重复的，去重，而且Set不是数组
/********************************************************************** */
//Set值的增删查
// 1.add
var setArr2 = new Set(['mzl', 'ES6', 'web', '机器侠']);
setArr2.add('前端小白');
console.log(setArr2); //Set(5){}
//2.delete
var setArr3 = new Set(['mzl', 'ES6', 'web', '机器侠']);
setArr3.delete('web');
console.log(setArr3); //Set(3){}
//3.has
var setArr4 = new Set(['mzl', 'ES6', 'web', '机器侠']);
console.log(setArr4.has('mzl')); //true
//4.clear
var setArr5 = new Set(['mzl', 'ES6', 'web', '机器侠']);
setArr5.clear();
console.log(setArr5); //Set(0){}
console.log('*********************************');
/********************************************************** */
//Set的循环
//1.for...of...
var setArr6 = new Set(['mzl', 'ES6', 'web', '机器侠']);
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = setArr6[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;

        console.log(item);
    }
    //2.forEach()
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

setArr6.forEach(function (val) {
    return console.log(val);
});
//3.size //获取Set的值的数量(长度)
console.log(setArr6.size);
/*--------------------------------------------------------------------------------*/
//*WeakSet的声明(了解)
//注意这里不能直接在new的时候放入值，必须利用add填值
var weakObj = new WeakSet();
var Obj = { a: 'mzl', b: 'wzl' };
weakObj.add(Obj);
console.log(weakObj);
