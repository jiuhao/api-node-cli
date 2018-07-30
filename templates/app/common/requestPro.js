const request = require('request');
const config = require('../config');
const LogUtil = require('../common/logUtil');

/**
 * 发起请求
 * @param url
 * @param options {method :'get'/'post', data, headers, is_log}
 */
exports.send = function (url, options) {
    if (!url) {
        throw new Error('url必填');
    }
    let reqBody = {
        url: url,
        method: options && options.method && options.method.toUpperCase() || 'GET'
    };
    options && options.headers && (reqBody.headers = options.headers);
    reqBody.method == 'GET' ? reqBody.qs = options.data : reqBody.form = options.data;
    return new Promise(function (res, rej) {
        request(reqBody, function (error, response, body) {
            if (error) {
                rej(error);
            } else {
                res(typeof body === 'string' ? JSON.parse(body) : body);
            }
            options.is_log && LogUtil.forwardLogger({
                url,
                method: reqBody.method,
                data: options.data,
                response,
                err: error
            });
        });
    });
};