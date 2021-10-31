var http = require('http');
var url = require('url');
var util = require('util');
 
// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
//     res.end(util.inspect(url.parse(req.url, true)));
// }).listen(3000);

// 测试：http://localhost:3000/user?name=菜鸟教程&url=www.runoob.com 

// Url {
//     protocol: null,
//     slashes: null,
//     auth: null,
//     host: null,
//     port: null,
//     hostname: null,
//     hash: null,
//     search:
//      '?name=%E8%8F%9C%E9%B8%9F%E6%95%99%E7%A8%8B&url=www.runoob.com',
//     query:
//      [Object: null prototype] { name: '菜鸟教程', url: 'www.runoob.com' },
//     pathname: '/user',
//     path:
//      '/user?name=%E8%8F%9C%E9%B8%9F%E6%95%99%E7%A8%8B&url=www.runoob.com',
//     href:
//      '/user?name=%E8%8F%9C%E9%B8%9F%E6%95%99%E7%A8%8B&url=www.runoob.com'
// }

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
 
    // 解析 url 参数
    var params = url.parse(req.url, true).query;
    res.write("网站名：" + params.name);
    res.write("\n");
    res.write("网站 URL：" + params.url);
    res.end();
 
}).listen(3000);