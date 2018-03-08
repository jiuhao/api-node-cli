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
    安装依赖 npm install 或者 cnpm install
### 第七步
    修改配置 根据SCENE值选择配置文件夹 config/development,config/product,config/test 默认为config/development
### 第八步
    自定义.gitignore
### 第九步
    运行app.js
    
### TIPS
    为方便管理建议重命名 app.js 为 项目名.js
    README.md提供目录结构解释