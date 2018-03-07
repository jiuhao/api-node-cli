/**
 * API错误名称
 */
const ApiErrorNames = {};

ApiErrorNames.UNKNOW_ERROR = 'unknownError';
/**
 * API错误名称对应的错误信息
 */
const errorMap = new Map();

errorMap.set(ApiErrorNames.UNKNOW_ERROR, {code: 0, message: '系统繁忙'});
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