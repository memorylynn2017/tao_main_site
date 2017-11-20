'use strict'

//每日一款
exports.dailyNew=function(req,res,next){
    var listData = require(process.cwd() + '/data/product_list.json');
	res.render('shop/dailyNew',{
        list: listData.data,
    });
}

//逛市场
exports.seller=function(req,res,next) {
    var sellerData = require(process.cwd() + '/data/shop_product.json');
    res.render('shop/seller',{
        data: sellerData.data,
        selectbox: sellerData.selectbox,
        shop: sellerData.shop
    });
}

//实拍优选
exports.orderRemit=function(req,res,next){
    var listData = require(process.cwd() + '/data/order_remit.json');
	res.render('shop/orderRemit',{
        list: listData.data,
    });
}

//商家页
exports.shop=function(req,res,next){
    // var detailData = require(process.cwd() + '/data/product_detail/'+req.params.id+'.json');
    var listData = require(process.cwd() + '/data/product_list.json');
    // res.locals.shop_pro_list = listData.data;
	res.render('shop/shop',{
        // detail: detailData.data,
        shop_pro_list: listData.data
    });
}

//产品详情页
exports.productDetail=function(req,res,next){
    var detailData = require(process.cwd() + '/data/product_detail/'+req.params.id+'.json');
	res.render('shop/product_detail',{
        detail: detailData.data
    });
}