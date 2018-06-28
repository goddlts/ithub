// var mysql = require('mysql');
// var pool  = mysql.createPool({
//   connectionLimit : 10,
//   host            : '127.0.0.1',
//   user            : 'root',
//   password        : 'root',
//   database        : 'ithub'
// });

const db = require('./db_helper');

// 1 展示登录页面
// 2 处理登录逻辑
// 3 展示注册页面
// 5 退出
exports.showSignin = (req, res) => {
  // res.send('showSignin');
  res.render('signin.html');
};
exports.handleSignin = (req, res) => {
  res.send('handleSignin');
};
exports.showSignup = (req, res) => {
  // res.send('showSignup');
  res.render('signup.html');
};
// 4 处理注册逻辑
exports.handleSignup = (req, res) => {
  // 获取post数据 配置body-parser 在app.js中配置
  req.body.createdAt = new Date();
  // insert into `users`(nickname, pwd) values('zs', 18)
  // 插入数据库
  db.query(
    'insert into `users` set ?',
    req.body,
    (err, results) => {
      if (err) {
        console.log(err);
        return res.send('服务器内部错误');
      }
      
      // console.log(results);
      if (results.affectedRows === 1) {
        // 注册成功
        res.redirect('/signin');

        // res.send('<script>alert("注册成功");location.href="/signin";</script>');
      } else {
        res.render('signup.html', {
          msg: '注册失败'
        });
      }
    }
  );
};
exports.handleSignout = (req, res) => {
  res.send('handleSignout');
};