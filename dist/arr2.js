'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

//fill()实例方法 fill(填充的对象，从第几位开始，到第几位结束)
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.fill('jspang', 2, 5);
console.log(arr); //这样就填充了三个jspang
// for...of 循环
var arr2 = ['mmm', 'zzz', 'lll'];
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = arr2[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var val = _step.value;

        console.log(val);
    }
    //输出键值
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

var arr3 = ['www', 'zzz', 'lll', 'ddd', 'sss', 'bbb'];
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = arr3.keys()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var item = _step2.value;

        console.log(item); //输出的是数组的键值
    }
    //输出键值和内容entries()
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}

var arr4 = ['mmm', 'zzz', 'lll'];
var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
    for (var _iterator3 = arr4.entries()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var _step3$value = _slicedToArray(_step3.value, 2),
            index = _step3$value[0],
            _val = _step3$value[1];

        console.log(index + ':' + _val);
    }
    //手动控制数组输出的方式  手动跳转下一个值
} catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
        }
    } finally {
        if (_didIteratorError3) {
            throw _iteratorError3;
        }
    }
}

var arr5 = ['mmmm', 'zzzz', 'llll', 'gggg', 'oooo'];
var arr6 = arr5.entries();
console.log(arr6.next().value);
console.log('----------------');
console.log(arr6.next().value);
console.log('////////////////');
console.log(arr6.next().value);
console.log('*****************');
console.log(arr6.next().value);
console.log('+++++++++++++++++');
console.log(arr6.next().value);
