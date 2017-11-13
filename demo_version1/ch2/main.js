var express = require('express');
var app = express();
var handlebars = require('express3-handlebars')
    .create({ defaultLayout: 'main' }); //设置默认布局文件

var m_data = require('./lib/m_data.js');
var m_weatherData = require('./lib/weatherData.js');

// 使用模板
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
//设置端口
app.set('port', process.env.PORT || 3000);
//使用静态文件
app.use(express.static(__dirname + '/public'));




// 不让测试一直运行

// 因为拖慢网站的速度，用户也不需要看到测试结果
// 期望的情况是在url后面加上?test=1才加载测试页面


//定义中间件来检测查询字符串中的test=1,放在所有路由之前

// res.locals对象是要传给视图上下文的一部分
// 如果test=1出现在任何页面的字符串查询中，属性res.locals.showTests就会被设为true

app.use(function(req, res, next) {
    res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
    console.log(res.locals.showTests)
    next();
});

// 创建一个中间件给res.locals.weather添加数据
//给res.locals.weather添加数据
app.use(function(req, res, next) {
    if (!res.locals.weather) {
        res.locals.weather = {};

    }
    res.locals.weather = m_weatherData.getWeatherData();
    console.log(res.locals.weather)
    next();
});
//数据请求
app.get('/data/ajaxtest', function(req, res) {
    res.json({
        animal: 'dog',
        bodyPart: 'tail',
        adjective: 'sharp',
        noun: 'run'
    });
});

//设置路由  主要还是跳到主页面的，看一看主页面有多少个组件
app.get('/', function(req, res) {
    res.render('home');
});
app.get('/about', function(req, res) {

    res.render('about', {
        args: m_data.getData(),
        // 这里假设:测试确保有总有一个指向联系我们页面的链接，创建一个public/qa/tests-about.js
        pageTestScript: '/qa/tests-about.js'
    });
});

// 404 catch-all handler (middleware)
app.use(function(req, res, next) {
    res.status(404);
    res.render('404');
});

// 500 error handler (middleware)
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function() {
    console.log('Express started on http://localhost:' +
        app.get('port') + '; press Ctrl-C to terminate.');
});