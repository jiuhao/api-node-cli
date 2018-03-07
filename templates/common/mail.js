'use strict';
const nodemailer = require('nodemailer');
function getIPAdress() {
    let interfaces = require('os').networkInterfaces();
    for (let devName in interfaces) {
        let iface = interfaces[devName];
        for (let i = 0; i < iface.length; i++) {
            let alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
}
let transporter = nodemailer.createTransport({
    service: 'qq',
    auth: {
        user: 'haozi.shi@foxmail.com',
        pass: 'tgqytvracsqufffa' //授权码,通过QQ获取
    }
});

exports.sendMail = function (subject, text) {
    if (text) {
        let mailOptions = {
            from: 'haozi.shi@foxmail.com', // 发送者
            to: 'haozi.shi@foxmail.com', // 接受者,可以同时发送多个,以逗号隔开
            subject: (subject || '星火项目') + '-' + getIPAdress(), // 标题
            text: text // 文本
        };
        //todo 开启注释后，你将收到错误信息邮件，当然你可以过滤错误类型
        // transporter.sendMail(mailOptions, function (err, info) {
        //     if (err) {
        //         console.log(err);
        //     }
        // });
    }
};