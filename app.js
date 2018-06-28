const express = require('express');

const app = express();

const PORT = 3000;

// 监听端口  
app.listen(PORT, () => {
  console.log('监听 3000');
});

// 
app.get('/', (req, res) => {
  // res.send('Hello Express');
  // res.send({
  //   name: 'zs'
  // });
  // res.json({
  //   name: 'ls'
  // });
});