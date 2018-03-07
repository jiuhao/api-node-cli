'use strict';
const mysql = require('mysql');
const config = require('../config');
const pool = mysql.createPool(config.mysql);
const ApiErrorNames = require('../error/apiErrorNames');

/**
 * 获取数据库连接
 * @return {Promise}
 */
exports.getConnection = async() => {
    return await new Promise(function (res, rej) {
        pool.getConnection(function (err, connection) {
            if (err) {
                rej(new Error(ApiErrorNames.DB_EXCEPTION));
            } else {
                res(connection);
            }
        });
    });
};

/**
 * 开始事务
 * @param connection
 * @return {Promise}
 */
exports.beginTransaction = async(connection) => {
    if (connection) {
        return await new Promise(function (res, rej) {
            connection.beginTransaction(function (err) {
                if (err) {
                    rej(new Error(ApiErrorNames.DB_EXCEPTION));
                } else {
                    res(true);
                }
            });
        });
    }
};
/**
 * 提交事务
 * @param connection
 * @return {Promise}
 */
exports.commit = async(connection) => {
    if (connection) {
        return await new Promise(function (res, rej) {
            connection.commit(function (err, info) {
                if (err) {
                    rej(new Error(ApiErrorNames.DB_EXCEPTION));
                } else {
                    res(true);
                }
            });
        });
    }
};
/**
 * 回滚事务
 * @param connection
 * @return {Promise}
 */
exports.rollback = async(connection) => {
    if (connection) {
        return await new Promise(function (res, rej) {
            connection.rollback(function (err) {
                if (err) {
                    rej(new Error(ApiErrorNames.DB_EXCEPTION));
                } else {
                    res(true);
                }
            });
        });
    }
};
/**
 * 释放连接
 * @param connection
 * @return {Promise}
 */
exports.release = async(connection) => {
    if (connection) {
        return await new Promise(function (res, rej) {
            try {
                connection.release();
            } catch (err) {
                rej(new Error(ApiErrorNames.DB_EXCEPTION));
            }
            res(true);
        });
    }
};
/**
 * 执行sql
 * @param opts{connection,sql,data}
 * @return {Promise}
 */
exports.query = async(opts) => {
    let connection = opts.connection;
    return await new Promise(function (res, rej) {
        connection.query(opts.sql, opts.data, function (err, results, fields) {
            if (err) {
                console.log(err);
                rej(new Error(ApiErrorNames.DB_EXCEPTION));
            } else {
                res(results[0]);
            }
        });
    });
};

exports.insert = async(opts) => {
    let connection = opts.connection;
    return await new Promise(function (res, rej) {
        connection.query(opts.sql, opts.data, function (err, results, fields) {
            console.log('results, fields', results, fields);
            if (err) {
                console.log(err);
                rej(new Error(ApiErrorNames.DB_EXCEPTION));
            } else {
                res(results);
            }
        });
    });
};

exports.update = async(opts) => {
    let connection = opts.connection;
    return await new Promise(function (res, rej) {
        connection.query(opts.sql, opts.data, function (err, results, fields) {
            if (err) {
                rej(new Error(ApiErrorNames.DB_EXCEPTION));
            } else {
                if (!results.changedRows) {
                    rej(new Error(ApiErrorNames.NOT_CHANGED));
                }
                res(results);
            }
        });
    });
};

exports.updateWithNoErr = async(opts) => {
    let connection = opts.connection;
    return await new Promise(function (res, rej) {
        connection.query(opts.sql, opts.data, function (err, results, fields) {
            if (err) {
                rej(new Error(ApiErrorNames.DB_EXCEPTION));
            } else {
                res(results);
            }
        });
    });
};

exports.queryArray = async(opts) => {
    let connection = opts.connection;
    return await new Promise(function (res, rej) {
        connection.query(opts.sql, opts.data, function (err, results, fields) {
            if (err) {
                rej(new Error(ApiErrorNames.DB_EXCEPTION));
            } else {
                res(results);
            }
        });
    });
};