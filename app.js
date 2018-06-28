// app.js 的作用 
// 程序的入口
// 负责：1 配置  2. 监听端口

const express = require('express');
// 导入路由模块
const router = require('./routes/router');
const app = express();

const PORT = 3000;

// 监听端口  
app.listen(PORT, () => {
  console.log('监听 3000');
});


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