const apiErrorNames = require('./apiErrorNames');
const logUtil = require('../common/logUtil');

/**
 * 自定义Api异常
 */
class ApiError extends Error {
    //构造方法
    constructor(error_name) {
        super();

        let error_info;
        if (typeof  error_name == 'object') {
            error_info = error_name;
        } else {
            error_info = apiErrorNames.getErrorInfo(error_name);
        }
        this.name = error_name;
        this.code = error_info.code;
        this.message = error_info.message;
        //记录日志
        logUtil.logError(this);
    }
}

module.exports = ApiError;