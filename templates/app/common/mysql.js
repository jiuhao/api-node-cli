'use strict';
const mysql = require('mysql');
const config = require('../config');
const pool = mysql.createPool(config.mysql);
const ApiErrorNames = require('../error/apiErrorNames');

/**
 * 获取数据库连接
 * @return {Promise}
 */
exports.getConnection = () => {
    return new Promise(function (res, rej) {
        pool.getConnection(function (err, connection) {
            if (err) {
                rej(err);
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
exports.beginTransaction = (connection) => {
    if (!connection) {
        throw new Error(ApiErrorNames.NO_CONN);
    }
    return new Promise(function (res, rej) {
        connection.beginTransaction(function (err) {
            if (err) {
                rej(err);
            } else {
                res(true);
            }
        });
    });
};

/**
 * 提交事务
 * @param connection
 * @return {Promise}
 */
exports.commit = (connection) => {
    if (!connection) {
        throw new Error(ApiErrorNames.NO_CONN);
    }
    return new Promise(function (res, rej) {
        connection.commit(function (err, info) {
            if (err) {
                rej(err);
            } else {
                res(true);
            }
        });
    });
};

/**
 * 回滚事务
 * @param connection
 * @return {Promise}
 */
exports.rollback = (connection) => {
    if (!connection) {
        throw new Error(ApiErrorNames.NO_CONN);
    }
    return new Promise(function (res, rej) {
        connection.rollback(function (err) {
            if (err) {
                rej(err);
            } else {
                res(true);
            }
        });
    });
};

/**
 * 释放连接
 * @param connection
 * @return {Promise}
 */
exports.release = (connection) => {
    if (!connection) {
        throw new Error(ApiErrorNames.NO_CONN);
    }
    return new Promise(function (res, rej) {
        try {
            connection.release();
        } catch (err) {
            rej(err);
        }
        res(true);
    });
};

/**
 * 查询
 * @param connection
 * @param sql
 * @param data
 * @return {Promise}
 */
exports.query = ({connection, sql, data}) => {
    return new Promise(function (res, rej) {
        connection.query(sql, data, function (err, results, fields) {
            if (err) {
                rej(err);
            } else {
                res({
                    results: results,
                    fields: fields
                });
            }
        });
    });
};

/**
 * 查询一条数据
 * @param connection
 * @param sql
 * @param data
 * @return {Promise}
 */
exports.findOne = ({connection, sql, data}) => {
    return new Promise(function (res, rej) {
        connection.query(sql, data, function (err, results, fields) {
            if (err) {
                rej(err);
            } else {
                res(results[0]);
            }
        });
    });
};

/**
 * 插入数据并返回id
 * @param connection
 * @param sql
 * @param data
 * @return {Promise}
 */
exports.insert = ({connection, sql, data}) => {
    return new Promise(function (res, rej) {
        connection.query(sql, data, function (err, results, fields) {
            if (err) {
                rej(err);
            } else {
                res(results.insertId);
            }
        });
    });
};

/**
 * 批量查询
 * @param connection
 * @param sql
 * @param data
 * @return {Promise}
 */
exports.find = ({connection, sql, data}) => {
    return new Promise(function (res, rej) {
        connection.query(sql, data, function (err, results, fields) {
            if (err) {
                rej(err);
            } else {
                res(results);
            }
        });
    });
};

/**
 * 更新
 * @param connection
 * @param sql
 * @param data
 * @return {Promise}
 */
exports.update = async({connection, sql, data}) => {
    return await new Promise(function (res, rej) {
        connection.query(sql, data, function (err, results, fields) {
            if (err) {
                rej(err);
            } else {
                res(results.changedRows);
            }
        });
    });
};