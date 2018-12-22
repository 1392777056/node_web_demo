function testdemo(name,age) {
    return {
        name,age
    }
}

let po = new testdemo('张飒',12);
console.info(po.name);
//简化对象的定义，因为在ES6 语法之前，对象key和value必须写，但是在ES6 新的语法中可以省略简化key，
//直接写key就行,但是要求必须key和括号中的参数要必须一样。