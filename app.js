// app.js 的作用 
// 程序的入口
// 负责：1 配置  2. 监听端口

const express = require('express');
// 导入处理模板的模块
const expressArtTemplate = require('express-art-template');
// 导入路由模块
const router = require('./routes/router');
const bodyParser = require('body-parser');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const config = require('./config');
const app = express();

// 监听端口  
app.listen(config.port, () => {
  console.log('监听 ' + config.port);
});

// 处理静态资源  -- 下载bootstrap@3.3.7  jquery
app.use('/public', express.static('./public'));
app.use('/node_modules', express.static('./node_modules'));
// 配置模板引擎
app.engine('html', expressArtTemplate);
// 配置bodyParser
// parse application/x-www-form-urlencoded
// name=zs&pwd=123
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
// { "name": "zs", "age": 18 }
// app.use(bodyParser.json());


var db = config.database;
// 把session保存到mysql中
var options = {
  host: db.host,
  port: db.port,
  user: db.user,
  password: db.password,
  database: db.database
};

var sessionStore = new MySQLStore(options);
// 配置session
app.use(session({
  key: 'sessionid',  // 修改sessionid的名称
  secret: 'keyboard cat',  // 对sessionid 进行加密 
  resave: false,   // 强制重新存储服务器上的session数据  
  store: sessionStore,   // 配置把session数据存储到mysql
  saveUninitialized: true  // 即使不写session 也会生成sessionid
}));


// 注册路由
app.use(router);



// 
// app.get('/', (req, res) => {
//   // res.send('Hello Express');
//   // res.send({
//   //   name: 'zs'
//   // });
//   // res.json({
//   //   name: 'ls'
//   // });
// });

// app.get('/db.json', (req, res) => {
//   // res.send('db.json 没有');
// });

// // 路由 标示 使用正则对象
// app.get(/a/, (req, res) => {
//   res.send('有a的');
// });