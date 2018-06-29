const categoryModel = require('../models/category');

// 1 显示添加话题的页面
exports.showCreate = (req, res) => {
  categoryModel.getAll((err, categories) => {
    res.render('topic/create.html', {
      categories
    });
  });
};
exports.handleCreate = (req, res) => {
  res.send('handleCreate');
};
exports.showTopic = (req, res) => {
  res.send('showTopic');
};
exports.showEdit = (req, res) => {
  res.send('showEdit');
};
exports.handleEdit = (req, res) => {
  res.send('handleEdit');
};
exports.handleDelete = (req, res) => {
  res.send('handleDelete');
};