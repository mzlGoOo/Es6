//json和Map的对比
//json
var json = {
    name: 'mzl',
    skill: 'ES6'
};
console.log(json.name);
//Map (key,value)
var map1 = new Map();
var map2 = new Map();
//1.Map 数组
map1.set(json, 'gogo'); //map1.set(key,value) key=json  value=gogo 
map2.set('gogo', json); //map2.set(key,value) key=gogo  value=json
console.log(map1); //Map(1)  === Array(1)
console.log(map2); //Map(1)  === Array(1)
console.log(json); //map不会改变原始数组
console.log('***********************************');
//2.Map的增删查  
//******这里注意 所有的Map操作都是在操作key
//1.增加值set set(key,value)   //补充：Set()添加值是add()
var map = new Map();
map.set('name', 'mzl'); //set(key,value)
map.set('sex', 'man');
map.set('age', 18);
console.log(map);
//2.取值get //get(key)  输出value值
console.log(map.get('name')); //mzl
//3.删除delete delete(key) 如果删除成功true  删除失败false
console.log(map.delete('age')); //true
console.log(map); //Map(2)
//4.判断是否存在has(key)
console.log(map.has('sex')); //true
//5.判断个数(长度) size
console.log(map.size); //2
//6.清除所有的元素 clear
map.clear();
console.log(map); //Map(0)