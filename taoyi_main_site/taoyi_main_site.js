//@ts-check
const center_url = process.argv[2];
const specific_port  = parseInt(process.argv[3] || "0") ;

var base = require('base');
base.init(center_url , specific_port)
    .then( port => {
        base.log(null, "info" , "taoyi_main_site" , "base init 完成. express正在启动",null)
        var express = require('express');
        var bodyParser = require('body-parser');

        var app = express();
        app.use(bodyParser.json()); // for parsing application/json
        app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
        
        app.use(require('./src/router.js'));
        
        app.use(function (err, req, res, next) {
            // 带有四个参数的 middleware 专门用来处理异常
            if(err){
                base.log(null, "error" , "taoyi_main_site", "未处理的异常",err);
            }           
           
            var resobj = base.status("系统错误");
            resobj.desc += err.message;
            res.status(500).send(resobj);
        });
        
        var server = app.listen(port);//选择一个随机端口
        server.on('listening', function () {
            var port = server.address().port
            base.log(null, "info" , "taoyi_main_site" , `****管理后台， 在端口【 ${port} 】监听****`,null)
        })
        
        server.on("close", function () {    
            console.log(`****管理后台， 在端口【 %d 】监听**** 当前正在停止`)
        })
        
    })
