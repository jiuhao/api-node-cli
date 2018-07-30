### 目录结构介绍
* app: 服务目录
    * common：服务工具。例如数据库基础操作，日志操作，邮件提醒操作...
    * config：服务器配置信息。dev、test、product 配置不同环境下的服务信息
    * db：数据库逻辑操作层
    * error: 自定义错误类型
    * router：路由配置
    * service：服务业务层
    * utils：工具包。时间处理、字符串处理...
    * .gitignore: git仓库过滤存储文件配置
    * app.js 服务程序入口
    * pm2.json pm2 启动配置
    * package.json 服务配置。名称，版本，作者，依赖包...
