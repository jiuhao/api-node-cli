/**
 * API错误名称
 */
const ApiErrorNames = {};

ApiErrorNames.UNKNOW_ERROR = 'unknownError';
ApiErrorNames.DB_EXCEPTION = 'dbException';
ApiErrorNames.NO_CONN = 'noCONN';
ApiErrorNames.PARAM_ERROR = 'paramError';
/**
 * API错误名称对应的错误信息
 */
const errorMap = new Map();

errorMap.set(ApiErrorNames.UNKNOW_ERROR, {code: 0, message: '系统繁忙'});
errorMap.set(ApiErrorNames.DB_EXCEPTION, {code: 510, message: '数据库异常'});
errorMap.set(ApiErrorNames.NO_CONN, {code: 511, message: '请先获取数据库连接'});
errorMap.set(ApiErrorNames.PARAM_ERROR, {code: 410, message: '传参错误'});
//根据错误名称获取错误信息
ApiErrorNames.getErrorInfo = (errorName) => {
    let errorInfo;

    if (errorName) {
        errorInfo = errorMap.get(errorName);
    }
    //如果没有对应的错误信息，默认'未知错误'
    if (!errorInfo) {
        errorName = 'unknownError';
        errorInfo = errorMap.get(errorName);
    }
    return errorInfo;
};

module.exports = ApiErrorNames;