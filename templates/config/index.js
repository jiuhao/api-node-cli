let env = process.env.SCENE || 'development';
if (!env) {
    env = 'development';
}
console.log(`当前启动的环境配置为${env}，如果不符，请立即关闭`);
module.exports = new Proxy({}, {
    get: function (target, name) {
        return require(`./${env}/${name}`);
    }
});