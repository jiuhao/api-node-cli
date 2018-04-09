const DB = require('../common/mysql');
const userDB = require('../db/user');
const ApiErrorNames = require('../error/apiErrorNames');

/**
 * service db 分离
 * @param id
 * @return {*}
 */
exports.load = async({id}) => {
    let result;
    let conn;

    try {
        conn = await DB.getConnection();
        result = await userDB.load(conn, id);
    } catch (e) {
        throw e;
    } finally {
        await DB.release(conn);
    }

    return result;
};

/**
 * 只用 service 做逻辑数据处理
 * @param id
 * @return {*}
 */
exports.load2 = async({id}) => {
    let result;
    let conn;
    let sql;
    let data = [];

    if (!id) {
        throw new Error(ApiErrorNames.PARAM_ERROR);
    }
    try {
        conn = await DB.getConnection();
        sql = `SELECT * FROM t1 WHERE id = ?`;
        data.push(id);
        result = await DB.findOne({
            connection: conn,
            sql: sql,
            data: data
        })
    } catch (e) {
        throw e;
    } finally {
        await DB.release(conn);
    }

    return result;
};