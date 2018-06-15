# api-node-cli
### 说明
该项目为node微小服务端开发框架，求轻喷QAQ。工具,db,service,router,config分离，提供mongo(mongoist)，mysql(mysql)，redis(ioredis)数据库基础工具。项目环境可配置，统一请求和返回值处理，自定义错误信息，可配置日志（错误和请求），可选择邮件提示。
### 第一步
全局安装 sudo npm install api-node-cli -g
### 第二步
创建工程目录 mkdir demo
### 第三步
进入工程新目录 cd demo
### 第四步
执行命令 api-node-cli 构建目录
### 第五步
自定义 package.json 
### 第六步
安装依赖 npm install
### 第七步
修改配置 值选择配置文件夹 config/dev,config/product,config/test 默认为config/dev
### 第八步
自定义.gitignore
### 第九步
运行app.js(webstorm) / 1. sudo npm install pm2 -g 2. npm run dev 将根据package.json中的
### 第十步
创建数据库 test 新建表 t1 -> 字段 id,name 插入数据
使用postman工具模拟请求 http://localhost:7001/api/user/hello 传参数 id:1
### TIPS
1.为方便管理建议重命名 app.js为 项目名.js 并同时修改 pm2.json下的name<br/>
2.README.md提供目录结构解释<br/>
3.请求日志和错误日志路径参照 app/config/log.js<br/>
4.mongo操作依赖模块[mongoist](https://github.com/saintedlama/mongoist)
5.mysql操作依赖模块[mysql](https://github.com/mysqljs/mysql)，在app/common/mysql.js 中进行了方法的简单封装：<br/>
getConnection 从连接池里获取一个数据库连接<br/>
beginTransaction 开始事物<br/>
commit 提交事物<br/>
rollback 回滚事物<br/>
query 返回查询相关的所有信息{results, fields}<br/>
findOne 返回一条结果集对象<br/>
find 返回多条结果集数组<br/>
update 返回修改的行数<br/>
insert 返回插入的id<br/>
6./router下index.js 中将对所有请求进行拦截格式化处理和记录日志，可通过路由正则的方式进行额外处理<br />
7./error下封装了自定义的错误类型
