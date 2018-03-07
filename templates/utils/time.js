'use strict';
/**
 * 时间戳格式化为字符串
 * @param timestamp 时间戳
 * @param format 各式串
 * @return {string}
 */
exports.timestampToString = function (timestamp, format) {
    let date = new Date(timestamp);
    let Y = date.getFullYear();
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours());
    let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
    let s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
    let ms = date.getMilliseconds();
    if (ms < 10) {
        ms = '00' + ms;
    } else if (ms < 100) {
        ms = '0' + ms;
    }
    let result = Y + M + D + h + m + s;
    let results = {
        'YYYY-MM-DD hh:mm:ss': Y + '-' + M + '-' + D + ' ' + h + ':' + m + ':' + s,
        'YYYY-MM-DD hh:mm': Y + '-' + M + '-' + D + ' ' + h + ':' + m,
        'YYYY-MM-DD': Y + '-' + M + '-' + D,
        'YYYY-MM': Y + '-' + M,
        'hh:mm': h + ':' + m,
        'MM-DD': M + '-' + D,
        'MM-DD hh:mm': M + '-' + D + ' ' + h + ':' + m,
        'YYYYMMDDhhmmssms': Y + '' + M + '' + D + '' + '' + h + '' + '' + m + '' + '' + s + '' + ms,
        'YYYYMMDD': Y + '' + '' + M + '' + D,
    };
    return format ? results[format] : result;
};

/**
 * 获取本周、本季度、本月、上月的开始日期、结束日期
 */
let now = new Date(); //当前日期
let nowMonth = now.getMonth(); //当前月
let nowYear = now.getYear(); //当前年
nowYear += (nowYear < 2000) ? 1900 : 0;


//格式化日期：yyyy-MM-dd
function formatDate(date) {
    let myyear = date.getFullYear();
    let mymonth = date.getMonth() + 1;
    let myweekday = date.getDate();

    if (mymonth < 10) {
        mymonth = "0" + mymonth;
    }
    if (myweekday < 10) {
        myweekday = "0" + myweekday;
    }
    return (myyear + "-" + mymonth + "-" + myweekday);
}

//获得某月的天数
function getMonthDays(myMonth) {
    let monthStartDate = new Date(nowYear, myMonth, 1);
    let monthEndDate = new Date(nowYear, myMonth + 1, 1);
    let days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24);
    return days;
}

//获得本月的开始日期
exports.getMonthStartDate = ()=> {
    let monthStartDate = new Date(nowYear, nowMonth, 1);
    console.log(monthStartDate);
    return formatDate(monthStartDate) + ' 00:00:00';
};

//获得本月的结束日期
exports.getMonthEndDate = ()=> {
    let monthEndDate = new Date(nowYear, nowMonth, getMonthDays(nowMonth));
    return formatDate(monthEndDate) + ' 59:59:59';
};