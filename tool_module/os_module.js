var os = require("os")

// CPU 的字节序
console.log('endianness : ' + os.endianness());

// 操作系统名
console.log('type : ' + os.type());

// 操作系统名
console.log('platform : ' + os.platform());

// 系统内存总量
console.log('total memory : ' + os.totalmem() + " bytes.");

// 操作系统空闲内存量
console.log('free memory : ' + os.freemem() + " bytes.");

// 操作系统的主机名
console.log('操作系统的主机名: ' + os.hostname())

// 操作系统 CPU 架构
console.log('操作系统 CPU 架构: ' + os.arch())

// 网络接口列表
console.log('网络接口列表: ' + os.networkInterfaces())