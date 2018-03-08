'use strict';
process.env.UV_THREADPOOL_SIZE = 10;

const config = require('./config');
const koa = require('koa');
const cors = require('koa-cors');
const bodyParser = require('koa-bodyparser');
const convert = require('koa-convert');
const app = new koa();
const router = require('./router');

//允许跨域
app.use(convert(cors()));
//解析请求体
app.use(bodyParser({enableTypes: ['text', 'json', "form"]}));
//路由
app.use(router.routes(), router.allowedMethods());

//解析ipv4
app.listen(config.sys.port, '0.0.0.0', function () {
    console.log(`app start success listen ${config.sys.port}`);
});
//
// app.listen(config.sys.port, function () {
//     console.log(`app start success listen ${config.sys.port}`);
// });