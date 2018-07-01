# ithub
一个简单的问答社区

## 项目从无到有

1. 新建项目  npm init -y   ->>>  package.json
2. 安装express
3. 写app.js    职责： 配置，监听端口
4. 写routes/router.js  路由规则  (如果项目特别大，路由也可以根据功能拆分到不同的文件中)
5. controllers   中书写 处理请求的函数  --》 读取模板，处理数据。返回响应
6.  配置
    静态资源处理
    模板引擎
    处理post过来的数据body-parser
    注册路由app.user(router)
    配置session  
7. 实现功能--   注册功能
8. models/user.js    添加用户的方法
9. controllers/user.js    接收post请求中的数据 req.body  调用models/user.js中的添加方法，把结果告知浏览器
10. 客户端 发送ajax请求



 ## 如果通过url传参

 1. 通过查询字符串传参   /topic?id=1
 2. 动态参数            /topic/1