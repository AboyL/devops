// 启动一个node服务 并且返回对应的值
var http = require('http');
var fs = require('fs');

let requestCount=0
const port=3000

http.createServer(function (request, response) {
    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    console.log('requestCount',++requestCount)

    const text=fs.readFileSync('./file/test.txt',{
        encoding:'utf-8'
    })
    console.log('text',text)
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据 "Hello World"
    response.end(`${text}`+`${requestCount}`);
}).listen(port);

// 终端打印如下信息
console.log(`Server running at http://127.0.0.1:${port}/`);