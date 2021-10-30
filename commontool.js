const util = require('util');

// util.callbackify
async function fn() {
  return 'hello world';
}
const callbackFunction = util.callbackify(fn);

callbackFunction((err, ret) => {
  if (err) throw err;
  console.log(ret);
});

// util.inspect
// 特别要指出的是，util.inspect 并不会简单地直接把对象转换为字符串，即使该对象定义了 toString 方法也不会调用。
function Person() { 
    this.name = 'byvoid'; 
    this.toString = function() { 
    return this.name; 
    }; 
} 
var obj = new Person(); 
console.log(util.inspect(obj)); 
// showHidden 是一个可选参数，如果值为 true，将会输出更多隐藏信息。
console.log(util.inspect(obj, true)); 