const topicModel = require('../models/topic');

exports.showIndex = (req, res) => {
  // 获取所有话题数据
  topicModel.getAll((err, topics) => {
    if (err) {
      return res.send('服务器内部错误');
    }
    res.render('index.html', {
      user: req.session.user,
      topics
    });
  });
  
};