function test(a,b) {
    console.info(a+b)
}

test(1,2)

let tesss = (a,b) => {
    console.info(a+b)
}

tesss(3,4);
//总结：箭头函数 可以省略以前的 function,可以简化代码，如果是一个参数的话，也可以省略小括号，多个就必须加。