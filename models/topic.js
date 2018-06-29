const db = require('./db_helper');

// 添加话题
exports.createTopic = (topic, callback) => {
  db.query(
    'insert into `topics` set ?',
    topic,
    (err, results) => {
      if (err) {
        return callback(err);
      }
      if (results.affectedRows > 0) {
        // 添加成功
        callback(null, true);
      } else {
        // 添加失败
        callback(null, false);
      }
    }
  );
};

// 根据id查询话题
exports.getById = (id, callback) => {
  db.query(
    'select * from `topics` where `id`=?',
    id,
    (err, results) => {
      if (err) {
        return callback(err);
      }
      if (results.length > 0) {
        callback(null, results[0]);
      } else {
        callback(null, null);
      }
    }
  );
};

// 跟id删除话题
exports.delete = (id, callback) => {
  db.query(
    'delete from `topics` where `id`=?',
    id,
    (err, results) => {
      if (err) {
        return callback(err);
      }
      if (results.affectedRows > 0) {
        // 删除成功
        callback(null, true);
      } else {
        callback(null, false);
      }
    }
  );
};

// 修改话题
exports.update = (topic, callback) => {
  db.query(
    'update `topics` set `title`=?, `content`=?, categoryId=? where id=?',
    [topic.title, topic.content, topic.categoryId, topic.id],
    (err, results) => {
      if (err) {
        return callback(err);
      }
      if (results.affectedRows > 0) {
        // 更新成功
        callback(null, true);
      } else {
        callback(null, false);
      }
    }
  );
};

// 查询所有话题
exports.getAll = (callback) => {
  db.query(
    'select topics.id, nickname, title, topics.createdAt from `topics` JOIN `users` ON userId = users.id',
    (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, results);
    }
  );
};



