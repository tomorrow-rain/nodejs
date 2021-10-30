var fs = require("fs");

// // 异步读取
// fs.readFile('input.txt', function (err, data) {
//    if (err) {
//        return console.error(err);
//    }
//    console.log("异步读取: " + data.toString());
// });

// // 同步读取
// var data = fs.readFileSync('input.txt');
// console.log("同步读取: " + data.toString());

// console.log("程序执行完毕。");

// // 获取文件信息
// console.log("准备打开文件！");
// fs.stat('file_system/input.txt', function (err, stats) {
//    if (err) {
//        return console.error(err);
//    }
//    console.log(stats);
//    console.log("读取文件信息成功！");
   
//    // 检测文件类型
//    console.log("是否为文件(isFile) ? " + stats.isFile());
//    console.log("是否为目录(isDirectory) ? " + stats.isDirectory());    
// });

// // 写入文件
// console.log("准备写入文件");
// fs.writeFile('file_system/write_output.txt', '我是通过fs.writeFile 写入文件的内容',  function(err) {
//    if (err) {
//        return console.error(err);
//    }
//    console.log("数据写入成功！");
//    console.log("--------我是分割线-------------")
//    console.log("读取写入的数据！");
//    fs.readFile('file_system/write_output.txt', function (err, data) {
//       if (err) {
//          return console.error(err);
//       }
//       console.log("异步读取文件数据: " + data.toString());
//    });
// });


// 截取文件 fs.ftruncate(fd, len, callback)
// 关闭文件 fs.close(fd, callback)
// 删除文件 fs.unlink(path, callback)

// 创建目录
// file_system 目录必须存在
// console.log("创建目录 file_system/test/");
// fs.mkdir("file_system/test/",function(err){
//    if (err) {
//        return console.error(err);
//    }
//    console.log("目录创建成功。");
// });

// 读取目录
// console.log("查看 file_system 目录");
// fs.readdir("file_system/",function(err, files){
//    if (err) {
//        return console.error(err);
//    }
//    files.forEach( function (file){
//        console.log( file );
//    });
// });

// 删除目录
console.log("准备删除目录 file_system/test");
fs.rmdir("file_system/test",function(err){
   if (err) {
       return console.error(err);
   }
});