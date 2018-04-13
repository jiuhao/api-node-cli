const path = require('path');
const project = require('../../package.json');

//错误日志输出完整路径
let errorLogPath = path.resolve(__dirname, `../../logs/${project.name}/error`);
let reqLogPath = path.resolve(__dirname, `../../logs/${project.name}/req`);
module.exports = {
    "appenders": [
        //错误日志
        {
            "category": "errorLogger", //logger名称
            "type": "dateFile",//日志类型
            "filename": errorLogPath,//日志输出位置
            "alwaysIncludePattern": true,//是否总是有后缀名
            "pattern": "-yyyy-MM-dd.log"//后缀，每小时创建一个新的日志文件
        },
        {
            "category": "reqLogPath", //logger名称
            "type": "dateFile",//日志类型
            "filename": reqLogPath,//日志输出位置
            "alwaysIncludePattern": true,//是否总是有后缀名
            "pattern": "-yyyy-MM-dd.log"//后缀，每天创建一个新的日志文件
        }
    ],
    "levels":                                     //设置logger名称对应的的日志等级
    {
        "errorLogger": "ALL"
    }
};