# Nodejs
run in the V8 JavaScript engine
command line interface(CLI).


## v8 engine
A program that onverts the javascript code into something the computer canunderstand.
THe v8 engine is a black box, we can't possibly hope to understand.
With v8 engine javascript can write other features that the EMCAscript standard can't handle.
And V8 can `add features` to JavaScript!!!

## server and client
Based on the Client-server model -> request and response
server: need to talk with database

## node
node is a framework and is a library of code.

## module
A ruseable block of code whose existence does not accidentally impact other code.
`Javascript didn't have this before!`

### commonJS Module
`An agreed upon standardd for how code modules should be structured.`

### functions
functions in JavaScript is the first-class
first-class object:
```javascript
第一类对象拥有以下特征：

匿名字面量被当做是表达式。

可以在变量中存储。

可以在数据结构中存储。

拥有唯一标识（可以通过函数名进行区分）

能够和其他实体进行是否相同的比较

可以当做参数

可以当做返回值

能够在运行时动态创建

可以打印

可以读取

可以在不同的进程中传递

可以在运行进程外进行存储
```

### require()
get a moduole by require().


## JS Basis

### inheritance
* every object has a peoperty: `prototype` which can implment inheritance
* the prototye chain

### function constructor
* the `new` keyword

### primitive value: 基本类型
* Primitive values are data that are stored on the `stack`.
* Primitive value is stored directly in the location that the variable accesses.
* Primitive types include `Undefined`, `Null`, `Boolean`, `Number`, or `String`.

### reference value: 引用类型
* Reference values are objects that are stored in the `heap`.
* Reference value stored in the variable location is a pointer to a location in memory where the object is stored.


### Pass by value/Pass by referrence
* value: just change the value of the parameter -> can't change the parameter itself.
* referenece: modify or add property of the parameter -> change the parameter itself.

### IIFE
Immediately invoked function expressions(IIFE) : write the code in the parenthese
* scope: where in code you hace access to particular variable or function

### JSON
javascript object notation/convert to object easily!!!


## require
* if without extansion, the V8 will add .js to the path defaultly
* require can load `serveral type` of file.

## module.exports
* the code is wrapeed in a function expression:
```javascirpt

(function (exports, require, module, __filname, __dirname) {
    //module expreesions
    moudle.exports = xxx;
})
```

* module.exports -> return a module(or say object)
* module.exports.fn() -> return a module too but there's new property in this module
```javascript
var tem = require(./module).fn
tem();
```
* `require a module will be saved in the cache!!!`
* return a javascript obejct syntax module:
```javascript

module.exports = {
    greet: greet
}
````
This is call `revealing module pattern`: exposing only the preperties and methods you want via an returned object
`use this way to protect content!`

### exports vs module.exports
just use module.exports

### core native module
see the document api !!!
should not consider about the path of the native module! just `require('moduleName')`.
