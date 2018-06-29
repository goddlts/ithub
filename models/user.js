const db = require('./db_helper');

// 增加一个用户
exports.createUser = (user, callback) => {
  // insert into users(password, nickname) values(?,?)
  db.query(
    'insert into `users` set ?',
    user,
    (err, results) => {
      if (err) {
        return callback(err);
      }
      // 
      // callback(null, results);
      if (results.affectedRows > 0) {
        callback(null, true);
      } else {
        callback(null, false);
      }
    }
  );
};
// 根据email查询用户
exports.getByEmail = (email, callback) => {
  db.query(
    'select * from `users` where `email`=?',
    email,
    (err, results) => {
      if (err) {
        return callback(err);
      }
      if (results.length > 0) {
        // email要求是唯一的，不能重复的
        // 所以根据email只能查询到一个用户信息
        callback(null, results[0]);
      } else {
        callback(null, null);
      }
    }
  );
};

// 根据nickname查询用户
exports.getByNickname = (nickname, callback) => {
  db.query(
    'select * from `users` where `nickname`=?',
    nickname,
    (err, results) => {
      if (err) {
        return callback(err);
      }
      if (results.length > 0) {
        // nickname要求是唯一的，不能重复的
        // 所以根据nickname只能查询到一个用户信息
        callback(null, results[0]);
      } else {
        callback(null, null);
      }
    }
  );
};