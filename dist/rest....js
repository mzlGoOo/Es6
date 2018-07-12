'use strict';

//...扩展方法
function jspang() {
	console.log(arguments.length <= 0 ? undefined : arguments[0]);
	console.log(arguments.length <= 1 ? undefined : arguments[1]);
	console.log(arguments.length <= 2 ? undefined : arguments[2]);
	console.log(arguments.length <= 3 ? undefined : arguments[3]);
}
jspang(1, 2, 3);
//允许这个方法可以传不确定个数

/*实例*/
//传统方法
//	let arr1=['www','mmm','zzz'];
//	let arr2=arr1;
//	arr2.push('lll');
//	console.log(arr1) //['www','mmm','zzz','lll']
//	console.log(arr2) //['www','mmm','zzz']
//扩展方法
var arr1 = ['www', 'mmm', 'zzz'];
var arr2 = [].concat(arr1);
arr2.push('lll');
console.log(arr1); //['www','mmm','zzz']
console.log(arr2); //['www','mmm','zzz','lll']

//rest运算符
function mzl(first) {
	console.log(arguments.length <= 1 ? 0 : arguments.length - 1);
}
mzl(0, 1, 2, 3, 4, 5, 6, 7);
//for of循环
function mzl(first) {
	for (var _len = arguments.length, arg = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		arg[_key - 1] = arguments[_key];
	}

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = arg[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var val = _step.value;

			console.log(val);
		}
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
}
mzl(8, 1, 2, 3, 4, 5, 6, 7);
