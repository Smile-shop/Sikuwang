require(['config'],function(){
	// 这里不能保证jquery,gdszoom,common的加载顺序
	require(['jquery'],function($){
		$(function(){
			//加载底部
			$('footer').load('../html/footer.html');
			$('.btn').click(function(){
				if( $('#name').val().trim()==''||$('#password').val().trim()==''||$('#password1').val().trim()==''){
					alert('请输入信息!')
					return false;
				}
<<<<<<< HEAD
<<<<<<< HEAD
				$.post('../php/register.php',{
=======
				$.post('/ajax/project/src/php/register.php',{
>>>>>>> ca259722b6dd346d4302f6a34a4f1e8e878d48eb
=======
				$.post('/ajax/project/src/php/register.php',{
>>>>>>> ca259722b6dd346d4302f6a34a4f1e8e878d48eb
					username: $('#name').val(),
					password: $('#password').val(),
					password1: $('#password1').val()
				}, function(response){
					if($('#password').val()!==$('#password1').val()){
						alert('输入密码不一致！')
						return;
					}
					var $obj = eval('(' + response + ')');
					if($obj.state){
<<<<<<< HEAD
<<<<<<< HEAD
						confirm('注册成功！');
						window.location.href = '../index.html';
					} else {
						confirm($obj.message);
=======
						alert('注册成功！');
					} else {
						alert($obj.message);
>>>>>>> ca259722b6dd346d4302f6a34a4f1e8e878d48eb
=======
						alert('注册成功！');
					} else {
						alert($obj.message);
>>>>>>> ca259722b6dd346d4302f6a34a4f1e8e878d48eb
					}
				})				
			})
			
			});
		});
	});