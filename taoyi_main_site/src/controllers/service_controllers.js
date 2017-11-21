'use strict'

//服务页面
module.exports=function(req,res,next){
    var serviceData = require(process.cwd() + '/data/service.json');
	res.render('shop/service',{
        data: serviceData.data,
    });
}