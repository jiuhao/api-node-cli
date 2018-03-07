# node.js
* [官网](https://nodejs.org/en/) [中文网](http://nodejs.cn/)
* 异步io(非阻塞io)： 本人理解的是 在耗时操作过程中，例如：网络请求，文件读写，数据库操作等，node以异步的方式处理不阻塞主线程。一般要等待耗时操作返回结果可用 generator yield或者async await来等待获取返回结果。
* [事件机制](http://www.ruanyifeng.com/blog/2014/10/event-loop.html)：主线程和任务(事件)队列的交互，异步任务准备好后会触发事件通知主线程
* [事件循环](https://www.cnblogs.com/jasonxuli/p/6074231.html)：node底层会对任务队列进行循环检测
* [promise](https://www.jianshu.com/p/063f7e490e9a)：处理回调程序神器
* [generator](http://www.ruanyifeng.com/blog/2015/04/generator.html)：特殊的函数，可以交出函数的执行权（即暂停执行）
* [async](http://www.ruanyifeng.com/blog/2015/05/async.html)：传说中的究极异步解决方案 generator语法糖
* 同步代码块：利用yield 或者 await 争夺函数执行
* 异步调用(不回调)：async 默认异步执行