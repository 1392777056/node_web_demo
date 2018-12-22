let people = {
    name:'张三',
    age:12
}
let {name,age} = people
console.info(`${age}--${name}`)


let arr = [1,6,2,3,4,5]
let [a,b,c,d,e,s,u] = arr
console.info(`${a}---${b}---${c}`)
console.info(a+'------'+b+'---'+c)//总结：对象的解构，在ES6 语法中省略了不用一个一个去赋值了，可以把他们都放在一块进行取值。