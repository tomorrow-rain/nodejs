// exports 和 module.exports 的使用
// 如果要对外暴露属性或方法，就用 exports 就行，要暴露对象(类似class，包含了很多属性和方法)，就用 module.exports。


//1. 调用 exports 暴露的接口
var hello = require('./hello');
hello.world();

//2. 调用 module.exports 暴露的接口
var Hello = require('./hello_module');
hello = new Hello();
hello.setName('developer');
hello.sayHello();