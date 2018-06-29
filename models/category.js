const db = require('./db_helper');
// 获取所有分类
exports.getAll = (callback) => {
  db.query(
    'select * from `topic_categories`',
    (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, results);
    }
  );
};