//http为node.js内置的模块，用来创建http服务器
var http = require('http')
//createServer:http模块中创建服务的方法
http.createServer(function(request,response){
	//设置响应头
	response.writeHead(200,{'Content-Type':'text/plain'})
	for(var i=0;i<10;i++){
		response.write('hello \n')
	}
	//设置响应结束（必须）
	response.end('hello world! \n')
//设置监听端口
}).listen(9999);
console.info('Server localhost:9999');