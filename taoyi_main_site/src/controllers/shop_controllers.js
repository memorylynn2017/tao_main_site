'use strict'

//每日一款
exports.dailyNew=function(req,res,next){
    var listData = require(process.cwd() + '/data/product_list.json');
	res.render('shop/dailyNew',{
        list: listData.data,
    });
}

//产品详情页
exports.productDetail=function(req,res,next){
    var detailData = require(process.cwd() + '/data/product_detail.json');
	res.render('shop/product_detail',{
        detail: detailData.data
    });
}