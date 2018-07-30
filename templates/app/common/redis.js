'use strict';
const config = require('../config');
const Redis = require('ioredis');
const redis = new Redis(config.redis);

// 设置过期时间
exports.set = async(key, value) => {
    try {
        redis.set(key, value, 'EX', config.sys.session_expire);
    } catch (e) {
        throw e;
    }
};

exports.get = async(key) => {
    return await new Promise(function (res, rej) {
        redis.get(key, function (err, result) {
            if (err) {
                rej(err);
            } else {
                res(result)
            }
        });
    })
};