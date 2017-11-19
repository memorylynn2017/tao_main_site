var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('hbs');
var hbsHelper = require('./hbsHelper');

// var index = require('./routes/index');
// var users = require('./routes/users');

//生成express服务实例
var app = express();

// view engine setup 默认布局视图
app.set("views", path.join(__dirname, "template"));
app.set("view engine", "hbs");
app.set("view options", {
  layout: "layouts/layout.hbs"
});
//注册函数
hbs.registerHelper(hbsHelper);
//局部组件...
hbs.registerPartials(__dirname + "/template/partials");

// 定义favicon
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//静态托管文件
app.use(express.static(path.join(__dirname, "static")));

// app.use('/', index);
// app.use('/users', users);
//路由设置
app.use(require("./src/router"));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
