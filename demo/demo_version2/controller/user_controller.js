'use strict'
var _=require('lodash');
var validator=require('validator');
var mongoose=require('mongoose');
var user=require('../models/user.js');

exports.register=function(req,res,next){
	var option={
		error_msg:'',
		title:'注册页面'
	}
	res.render('user/register',option);
}
exports.register_action=function(req,res,next){
	console.log(req.body);
	res.send("處理註冊的action");
	//res.render('error',option);
}