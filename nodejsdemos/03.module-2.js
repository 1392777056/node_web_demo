//模块化开发  exports 将方法暴露在外面 供别的服务也能使用这个方法   exports.abc  abc为变量，谁调我必须和这个变量名称一致
exports.add = function add(a,b) {
	return a+b
}