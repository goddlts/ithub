// app.js 的作用 
// 程序的入口
// 负责：1 配置  2. 监听端口

const express = require('express');
// 导入处理模板的模块
const expressArtTemplate = require('express-art-template');
// 导入路由模块
const router = require('./routes/router');
const app = express();

const PORT = 3000;

// 监听端口  
app.listen(PORT, () => {
  console.log('监听 3000');
});

// 处理静态资源  -- 下载bootstrap@3.3.7  jquery
app.use('/public', express.static('./public'));
app.use('/node_modules', express.static('./node_modules'));
// 配置模板引擎
app.engine('html', expressArtTemplate);


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