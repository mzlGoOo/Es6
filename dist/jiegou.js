'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

//数组模式和赋值模式统一：
var a = 1,
    b = 2,
    c = 3;

console.log(a);
console.log(b);
console.log(c);

var q = 1,
    w = 2,
    e = 3,
    r = 4;

console.log(q, w, e, r);

//解构的默认值
var _ref = [],
    _ref$ = _ref[0],
    foo = _ref$ === undefined ? true : _ref$;

console.log(foo); //true

var _ref2 = ['myname'],
    m = _ref2[0],
    _ref2$ = _ref2[1],
    z = _ref2$ === undefined ? 'mzl' : _ref2$;

console.log(m + z); //mynamemzl
//let [m,z='mzl']=['myname',undefined]
//这个undefined可以省略

//对象的解构赋值
//数组的元素是按次序排列的，
//变量的取值由它的位置决定；
//而对象的属性没有次序，变量必须与属性同名，
//才能取到正确的值。
var _j$k = { j: 'james', k: 'kevin' },
    j = _j$k.j,
    k = _j$k.k;

console.log(j + k); //jameskevin

/*字符串建构*/

var _mzl = 'mzl123',
    _mzl2 = _slicedToArray(_mzl, 6),
    t = _mzl2[0],
    y = _mzl2[1],
    u = _mzl2[2],
    i = _mzl2[3],
    o = _mzl2[4],
    p = _mzl2[5];

console.log(t, y, u, i, o, p);
