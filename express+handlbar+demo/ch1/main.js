//不使用express你可能要这么写
/*
* var http = require('http');
* var server =  http.createServer(function(req, res){
*    if(req.url === '/'){
        res.setHeader('Content-type','text-plain');
        res.write('……');&&res.end();
*   }
*}).listen(3000,'localhost');
*/

var express = require('express');
var app = express();
// (defaultLayout:'main')意味着除非你特别指明否则所有的视图都是这个布局
var handlebars = require('express3-handlebars')
    .create({ defaultLayout: 'main' }); //设置默认布局文件

// 使用模板
app.engine('handlebars', handlebars.engine); // 将express模板引擎配置成handlebars 
app.set('view engine', 'handlebars');


// app.use(function(req,res,next){}
// 默认匹配的路由是‘/’，多个use要使用next()方法，但是使用了，res.end()或者res.send()
// 就不能使用next到达下一个use了

// static中间件可以将一个或多个目录指派为包含静态资源的目录，
// 其中的资源不经过特殊处理直接发送到客户端

//使用静态文件
app.use(express.static(__dirname + '/public'));
//现在所有文件都可以相对public直接进行访问，例如public下面有一个img文
//件夹，那么在handlebars中(不需要理会在handlebars的目录结构)直接访问
//路径/img/logo.png

// 根目录下建一个public的子目录，应该把static中间件加载所有路由之前

//设置端口
app.set('port', process.env.PORT || 3000);

var args = 'its a arguments'; //虚拟一个参数

// app.get()是添加路由的方法，忽略大小写，反斜杠，进行匹配时不考虑查询字符串

//设置路由
app.get('/', function(req, res) {
    res.render('home');
});
app.get('/about', function(req, res) {

    res.render('about', { args: args });
});

// 对定制的404页面和500页面的处理与对普通页面的处理有所区别，
// 用的不是app.get,而是app.use。app.use是express添加中间件的一种方法
// express中路由和中间件的添加顺序至关重要，
// 如果把404处理器放在所有的路由上面，普通页面的路由就不能用了

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