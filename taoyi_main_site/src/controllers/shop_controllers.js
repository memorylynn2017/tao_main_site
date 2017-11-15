'use strict'

//每日一款
exports.dailyNew=function(req,res,next){
    var dailyNew_Data = require(process.cwd() + '/data/dailyNew.json');
	res.render('shop/dailyNew',{
        product: dailyNew_Data.data,
    });
}