var fs = require("fs");

//同步，阻塞
var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log("程序执行结束!");

// 异步，不阻塞
fs.readFile('input1.txt', function (err, data) {
    if (err) return console.error(err.stack);
    console.log(data.toString());
});
console.log("程序执行结束!");