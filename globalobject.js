// 最好不要使用 var 定义变量以避免引入全局变量，因为全局变量会污染命名空间，提高代码的耦合风险

// // 输出全局变量 __filename 的值
// console.log(__filename);

// // 输出全局变量 __dirname 的值
// console.log(__dirname);


function printHello() {
    console.log("Hello, World!");
}

// 两秒后执行以上函数(只执行一次)
//  setTimeout(printHello, 2000);

// 两秒后执行以上函数（不停的重复执行）
// setInterval(printHello, 2000);


// console.info("程序开始执行：");

// var counter = 10;
// console.log("计数: %d", counter);

// console.time("获取数据");
// //
// // 执行一些代码
// for(i=10;i>0;i--){
//     counter--;
//     console.log(counter);
// }
// // 
// console.timeEnd('获取数据');

// console.info("程序执行完毕。")

/*
process.on('exit', function (code) {

    // 以下代码永远不会执行
    setTimeout(function () {
        console.log("该代码不会执行");
    }, 0);

    console.log('退出码为:', code);
});
console.log("程序执行结束");

*/

/*
// 输出到终端
process.stdout.write("Hello World!" + "\n");

// 通过参数读取
process.argv.forEach(function(val, index, array) {
   console.log(index + ': ' + val);
});

// 获取执行路径
console.log(process.execPath);

// 平台信息
console.log(process.platform);

*/

// 输出当前目录
console.log('当前目录: ' + process.cwd());

// 输出当前版本
console.log('当前版本: ' + process.version);

// 输出内存使用情况
console.log(process.memoryUsage());