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
    修改配置 根据SCENE值选择配置文件夹 config/dev,config/product,config/test 默认为config/dev
### 第八步
    自定义.gitignore
### 第九步
    运行app.js(webstorm) / 1. sudo npm install pm2 -g 2. npm run dev
### 第十步
    创建数据库 test 新建表 t1 -> 字段 id,name
    使用postman工具模拟请求 http://localhost:7001/api/user/hello 传参数 id:1
### TIPS
    为方便管理建议重命名 app.js为 项目名.js 并同时修改 pm2.json下的name
    README.md提供目录结构解释
    请求日志和错误日志路径参照 app/config/log.js