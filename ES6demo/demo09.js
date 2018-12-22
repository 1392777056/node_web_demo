import {add} from './demo08'
console.info(add(11,2))


//总结：在模块化开发，我通常要调用其他js中的方法。export {方法名} 是将方法暴露在外面供其他的js调用，而
//import {方法名} from '调用的js'
//ES6中的新语法，类似于exports和require，可以实现函数跨文件使用，但是
//很多ES6高级功能在浏览器不支持，需要使用babel转换成ES5
//使用babel转换过程：
//1)在项目根目录添加.babelrc文件，配置es2015插件
//  {
//    "presets": ["es2015"]
//  }
//  注：es2015 === es6   es2016 === es7   es2017 === es8 
//2)安装es2015插件
//cnpm install babel-preset-es2015 --save-dev
//3)全局安装命令行工具
//cnpm install babel-cli -g
//4)使用  babel-node  文件名.js