//类的使用
class Coder {
    name(val) {
        console.log(val)
    }
}
let a = new Coder;
a.name('机器侠');
//类的多方法使用
class Coder2 {
    name(val) {
        console.log(val);
        return val; //这里必须写return 不然下面skill方法接受不到值
    }
    skill(val) {
        console.log(this.name('mizongliang') + ':' + val);
    }
}
let b = new Coder2;
b.name('mzl');
b.skill('ES6');
//类的传参
class Coder3 {
    name(val) {
        console.log(val);
        return val;
    }
    skill(val) {
        console.log(this.name('机器侠') + ':' + val);
    }
    constructor(a, b) {
            this.a = a;
            this.b = b;
        }
        //这里add是不传参的
    add() {
        return this.a + this.b;
    }
}
let c = new Coder3(2, 6);
c.name('机器侠');
c.skill('Vue');
console.log(c.add());
//class的继承
//这里的htmls继承Coder
class htmls extends Coder {

}
let d = new htmls;
d.name('机器人')