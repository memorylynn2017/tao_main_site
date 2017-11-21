'use strict'

//服务页面
module.exports=function(req,res,next){
    var serviceData = require(process.cwd() + '/data/service.json');
    res.locals.serviceData = serviceData.data;
    res.render('shop/service');
}