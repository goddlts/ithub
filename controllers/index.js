const topicModel = require('../models/topic');
const moment = require('moment');

exports.showIndex = (req, res) => {
  // console.log(moment().format('YYYY/MM/DD HH:mm:ss'));
  // 获取所有话题数据
  topicModel.getAll((err, topics) => {
    if (err) {
      return res.send('服务器内部错误');
    }
    res.render('index.html', {
      user: req.session.user,
      topics,
      // 函数
      moment
    });
  });
  
};