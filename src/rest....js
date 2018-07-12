//...扩展方法
function jspang(...arg){
    console.log(arg[0]);
    console.log(arg[1]);
    console.log(arg[2]);
    console.log(arg[3]);
 
}
jspang(1,2,3);
//允许这个方法可以传不确定个数

/*实例*/
	//传统方法
//	let arr1=['www','mmm','zzz'];
//	let arr2=arr1;
//	arr2.push('lll');
//	console.log(arr1) //['www','mmm','zzz','lll']
//	console.log(arr2) //['www','mmm','zzz']
	//扩展方法
	let arr1=['www','mmm','zzz'];
	let arr2=[...arr1];
	arr2.push('lll');
	console.log(arr1); //['www','mmm','zzz']
	console.log(arr2);//['www','mmm','zzz','lll']

//rest运算符
function mzl(first,...arg){
	console.log(arg.length)
}
mzl(0,1,2,3,4,5,6,7)
//for of循环
function mzls(first,...arg){
	for(let val of arg){
		console.log(val);
	}
}
mzls(8,1,2,3,4,5,6,7)
