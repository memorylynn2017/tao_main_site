'use strict';
var express = require('express');
var router = express.Router();

//用户控制器controller
var user_controller = require(process.cwd() + '/src/controllers/user_controllers');

//首页
router.get('/', function(req, res, next) {
    //左侧导航json
    var typeData = require(process.cwd() + '/data/product_type.json');

    var options = { title: 'Express',
        // city: "London",
        // street: "Baker Street",
        // number: "221B",
        // picurl: "/assets/images/logo_new.png",
        nav: typeData.data
    }
    res.render('index', options);
});

//跳转到注册页面
router.get('/register', user_controller.register);

//跳转到登录页面
router.get('/login', user_controller.login);


router.get('/shop/dailyNew', function(req, res, next) {
    res.render('shop/dailyNew');
});
router.get('/shop/seller', function(req, res, next) {
    res.render('shop/seller');
});
router.get('/shop/orderRemit', function(req, res, next) {
    res.render('shop/orderRemit');
});
router.get('/shop/service', function(req, res, next) {
    res.render('shop/service');
});
router.get('/shop/clearStore', function(req, res, next) {
    res.render('shop/clearStore');
});


//跳转到搜索页面
//router.get('/shop/product/search', user_controller.login);


router.post('/api/user/login', user_controller.login_action);

router.post('/api/user/register', user_controller.register_action);


module.exports = router;