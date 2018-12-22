//变量定义 var
function info(bool) {
    if(bool) {
        var a = '111'
    } else {
        console.info(a)
    }
}

//info(false)

// let
function info2(bool) {
    if(bool) {
        let a = '111'
    } else {
        console.info(a)
    }
}

info2(false)

const aaa = '123'
aaa = '4321'
//总结：以前var定义变量的时候是全局都能使用，而在ES6 新语法中let 定义变量只能在自己区间使用，不能全局使用
//var能定义变量和常量，在ES6 新的语法中 定义常量用const 并且不能被重新赋值

