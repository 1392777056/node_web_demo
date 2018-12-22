//http为node.js内置的模块，用来创建http服务器
var http = require('http')
//创建url模块
var url = require('url')
//createServer:http模块中创建服务的方法
http.createServer(function(request,response){
	//设置响应头
	response.writeHead(200,{'Content-Type':'text/plain'})
	// 1.parse 设置要转换的请求地址
	// 2.是否将请求参数转换成为JS对象
	//	true---转换成 {name : '123'}
	//	false---不转换，以字符串输入
	var params = url.parse(request.url,true).query
	response.write('name'+ params.name)
	//设置响应结束（必须写）
	response.end('')
//设置监听端口
}).listen(9999);
console.info('Server localhost:9999');