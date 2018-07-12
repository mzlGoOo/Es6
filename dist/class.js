'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//类的使用
var Coder = function () {
    function Coder() {
        _classCallCheck(this, Coder);
    }

    _createClass(Coder, [{
        key: 'name',
        value: function name(val) {
            console.log(val);
        }
    }]);

    return Coder;
}();

var a = new Coder();
a.name('机器侠');
//类的多方法使用

var Coder2 = function () {
    function Coder2() {
        _classCallCheck(this, Coder2);
    }

    _createClass(Coder2, [{
        key: 'name',
        value: function name(val) {
            console.log(val);
            return val; //这里必须写return 不然下面skill方法接受不到值
        }
    }, {
        key: 'skill',
        value: function skill(val) {
            console.log(this.name('mizongliang') + ':' + val);
        }
    }]);

    return Coder2;
}();

var b = new Coder2();
b.name('mzl');
b.skill('ES6');
//类的传参

var Coder3 = function () {
    _createClass(Coder3, [{
        key: 'name',
        value: function name(val) {
            console.log(val);
            return val;
        }
    }, {
        key: 'skill',
        value: function skill(val) {
            console.log(this.name('机器侠') + ':' + val);
        }
    }]);

    function Coder3(a, b) {
        _classCallCheck(this, Coder3);

        this.a = a;
        this.b = b;
    }
    //这里add是不传参的


    _createClass(Coder3, [{
        key: 'add',
        value: function add() {
            return this.a + this.b;
        }
    }]);

    return Coder3;
}();

var c = new Coder3(2, 6);
c.name('机器侠');
c.skill('Vue');
console.log(c.add());
//class的继承
//这里的htmls继承Coder

var htmls = function (_Coder) {
    _inherits(htmls, _Coder);

    function htmls() {
        _classCallCheck(this, htmls);

        return _possibleConstructorReturn(this, (htmls.__proto__ || Object.getPrototypeOf(htmls)).apply(this, arguments));
    }

    return htmls;
}(Coder);

var d = new htmls();
d.name('机器人');
