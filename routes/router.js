// route  路由规则
// router 路由对象

// router.js 职责   设置路由规则

const express = require('express');
const indexCtrl = require('../controllers/index');
const categoryCtrl = require('../controllers/category');
const topicCtrl = require('../controllers/topic');
const userCtrl = require('../controllers/user');
// 创建路由对象
const router = express.Router();
// 导出模块
module.exports = router;

// 设置路由规则

// 1 index.js 不需要登录处理的功能

router.get('/', indexCtrl.showIndex);

router
  .get('/signin', (req,res) => {
    res.send('signin');
  })
  .post('/signin', (req, res) => {
  })