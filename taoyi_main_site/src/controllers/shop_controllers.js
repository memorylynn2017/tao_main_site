'use strict'

//每日一款
exports.dailyNew=function(req,res,next){
    var listData = require(process.cwd() + '/data/product_list.json');
    res.locals={
        list: listData.data,
    }
    res.render('shop/dailyNew');
}

//逛市场
exports.seller=function(req,res,next) {
    var sellerData = require(process.cwd() + '/data/shop_product.json');
    res.locals={
        data: sellerData.data,
        selectbox: sellerData.selectbox,
        shop: sellerData.shop
    }
    res.render('shop/seller');
}

//实拍优选
exports.orderRemit=function(req,res,next){
    var listData = require(process.cwd() + '/data/order_remit.json');
    res.locals={
        list: listData.data,
    }
    res.render('shop/orderRemit');
}

//商家页
exports.shop=function(req,res,next){
    // 商店信息
    var shopData = require(process.cwd() + '/data/shop/'+req.params.id+'.json');
    var shopProductData = require(process.cwd() + '/data/shop/'+req.params.id+'_product.json');
    res.locals={
        shop_info: shopData.data,
        product_info: shopProductData.data
    }
    res.render('shop/shop');
}

//产品详情页
exports.productDetail=function(req,res,next){
    var detailData = require(process.cwd() + '/data/product_detail/'+req.params.id+'.json');
    res.locals={
        detail: detailData.data
    }
    res.render('shop/product_detail');
}