//单行字符串拼接
let a = 'hello'
let b = `${a} world`

console.info(b)

//多行拼接
let aa = `hello
world`

console.info(aa)

//总结：模板字符串 ---> 在以前定义var 字符串拼接的时候需要用+去连接，并且在多行的时候用\，but在ES6 语法中
//可以使用`${}` 去定义变量，并且在多行的时候不用加\