#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const stat = fs.stat;

const copy = function (src, dst) {
    //读取目录
    fs.readdir(src, function (err, paths) {
        if (err) {
            throw err;
        }
        paths.forEach(function (path) {
            let _src = src + '/' + path;
            let _dst = dst + '/' + path;
            let readable;
            let writable;
            stat(_src, function (err, st) {
                if (err) {
                    throw err;
                }

                if (st.isFile()) {
                    readable = fs.createReadStream(_src);//创建读取流
                    writable = fs.createWriteStream(_dst);//创建写入流
                    readable.pipe(writable);
                } else if (st.isDirectory()) {
                    exists(_src, _dst, copy);
                }
            });
        });
    });
};

const deleteAll = async() => {
    let files = [];
    if (fs.existsSync(path)) {
        files = fs.readdirSync(path);
        files.forEach(function (file, index) {
            let curPath = path + "/" + file;
            if (fs.statSync(curPath).isDirectory()) { // recurse
                deleteAll(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
};

const exists = async(src, dst, callback) => {
    //测试某个路径下文件是否存在
    fs.exists(dst, function (exists) {
        if (exists) {
            callback(src, dst);
        } else {
            fs.mkdir(dst, function () {//创建目录
                callback(src, dst)
            })
        }
    })
};

(async()=> {
    console.log("构建中....");
    try {
        await exists(path.join(__dirname, '/templates'), path.join(__dirname), copy);
        await deleteAll(path.join(__dirname, '/templates'));
    } catch (e) {
        console.log(`构建异常：${e}`);
    }
    console.log("构建完成");
})();