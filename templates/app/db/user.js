'use strict';
const DB = require('../common/mysql');

/**
 * 查看详情
 * @param conn
 * @param id
 * @return {Promise}
 */
exports.load = async(conn, id) => {
    let data = [];
    let sql = `SELECT * 
    FROM t1 
    WHERE id = ?`;

    data.push(id);
    return await DB.findOne({
        connection: conn,
        sql: sql,
        data: data
    });
};