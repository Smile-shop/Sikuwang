require(['config'],function(){
	// 这里不能保证jquery,gdszoom,common的加载顺序
	require(['jquery'],function($){
		$(function(){
			//加载底部
			$('footer').load('../html/footer.html');
			$('.btn').click(function(){
				if( $('#name').val().trim()==''||$('#password').val().trim()==''||$('#password1').val().trim()==''){
					alert('请输入注册信息!')
					return false;
				}
				if($('#password').val()!==$('#password1').val()){
						alert('输入密码不一致！')
						return false;;
					}
				$.post('../php/register.php',{
					username: $('#name').val(),
					password: $('#password').val(),
					password1: $('#password1').val()
				}, function(response){
					
					var $obj = eval('(' + response + ')');
					if($obj.state){
						confirm('注册成功！');
						window.location.href = 'login.html';
					} else {
						confirm($obj.message);
					}
				})				
			})
			
			});
		});
	});