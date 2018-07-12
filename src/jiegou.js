//数组模式和赋值模式统一：
let [a,b,c]=[1,2,3]
console.log(a)
console.log(b)
console.log(c)

let[q,[w,e],r]=[1,[2,3],4]
console.log(q,w,e,r)

//解构的默认值
let [foo=true]=[];
console.log(foo)//true

let [m,z='mzl']=['myname']
console.log(m+z) //mynamemzl
//let [m,z='mzl']=['myname',undefined]
//这个undefined可以省略

//对象的解构赋值
	//数组的元素是按次序排列的，
	//变量的取值由它的位置决定；
	//而对象的属性没有次序，变量必须与属性同名，
	//才能取到正确的值。
let {j,k}={j:'james',k:'kevin'}
console.log(j+k) //jameskevin

/*字符串建构*/
const [t,y,u,i,o,p]='mzl123';
console.log(t,y,u,i,o,p)
