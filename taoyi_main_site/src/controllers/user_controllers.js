'use strict'

//注册页
exports.register=function(req,res,next){
	res.render('user/register',{layout: false});
}
exports.register_action=function(req,res,next){
	res.json({ state: 'fail', msg: '操作失败', data: [] });
}

//登录页
exports.login=function(req,res,next){
	res.render('user/login',{layout: false});
}
exports.login_action=function(req,res,next){
	console.log(req.body);
	var user = req.body.user;
	var pwd = req.body.pwd;
	//先用固定的
	if (user=='admin'&&pwd=='123qwe'){
		res.json({ state: 'success', msg: '操作成功', data: [], tt: req.body });
	}else{
		res.json({ state: 'fail', msg: '操作失败', data: [], tt: req.body });
	}
}

//设置登录页
exports.setting=function(req,res,next){
	res.render('user/setting',{layout: false});
}