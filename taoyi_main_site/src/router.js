'use strict';
var express = require('express');
var router = express.Router();

//首页
router.get('/', function(req, res, next) {
    //左侧导航json
    var navData = require('../data/product_type.json');
    var options = { title: 'Express',
        // city: "London",
        // street: "Baker Street",
        // number: "221B",
        // picurl: "/assets/images/logo_new.png",
        nav: navData.data,
    }
    res.render('index', options);
});

//跳转到注册页面
router.get('/register', require('../src/controllers/user_controllers').register);

//跳转到登录页面
router.get('/login', require('../src/controllers/user_controllers').login);

//每日一款
router.get('/shop/dailyNew', function(req, res, next) {
    res.render('shop/dailyNew');
});
//逛市场
router.get('/shop/seller', function(req, res, next) {
    res.render('shop/seller');
});
//实拍优选
router.get('/shop/orderRemit', function(req, res, next) {
    res.render('shop/orderRemit');
});
//服务
router.get('/shop/service', function(req, res, next) {
    res.render('shop/service');
});
//尾品汇
router.get('/shop/clearStore', function(req, res, next) {
    res.render('shop/clearStore');
});


//跳转到搜索页面
//router.get('/shop/product/search', require('../src/controllers/user_controllers').login);

router.post('/api/user/login', require('../src/controllers/user_controllers').login_action);

router.post('/api/user/register', require('../src/controllers/user_controllers').register_action);


module.exports = router;