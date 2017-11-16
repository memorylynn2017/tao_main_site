'use strict'

//每日一款
exports.dailyNew=function(req,res,next){
    var listData = require(process.cwd() + '/data/product_list.json');
	res.render('shop/dailyNew',{
        list: listData.data,
    });
}