var app = {
	init: function(){
		var me = this;
		me.render();
		me.bind();
	},
	render: function(){
		var me = this;
        me.btn_login = $('#btn_login');
        me.tb_user= $('#tb_user');
        me.tb_pwd= $('#tb_pwd');
	},
	bind: function(){
		var me = this;
		//登录
		me.btn_login.on('click',function(e){
            var user = me.tb_user.val();
            var pwd = me.tb_pwd.val();
            $.ajax({
                //url: '/adminNewsType/add',
                url: '/api/click',
                type: 'post',
                dataType: 'json',
                data: {ac: 'add'},
                success: function(data){
                    console.log(data);
                    if (data.state == 'success'){
                        
                    }else{
                        alert('登录失败')
                    }
                }
            })
		})
	}
}
$(function (){  
   app.init();
});
