// 展开运算符 ---就是数组合并
//数组
const arr = [1,1,2];
const arr2 = [...arr,23,43]

console.info(arr2);

//对象
const pojo = { name:'zhang',age:23}
const pojo2 = {...pojo,tel:'1232222'}

console.info(pojo2)
//总结：在以前的js中我门不管合并数组还是对象，都需要去for遍历一把才能将旧的数组放在新的数组，
//但是在ES6 新的语法中，只需要在前面定义三个点点点就可以将对象/数组拼接在一起。
