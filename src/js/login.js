require(['config'],function(){
	// 这里不能保证jquery,gdszoom,common的加载顺序
	require(['common','jquery'],function(common){
		$(function(){
			//加载底部
			$('footer').load('../html/footer.html');
			
			 $('.btn').click(function(){


			 	if($('#name').val().trim()==''){
			 		alert('请输入用户名!')
			 		return false;
			 	}
			 	if($('#password').val().trim()==''){
			 		alert('请输入密码!')
			 		return false;
			 	}
			 	// console.log($('#name').val(),$('#password').val());
		        $.post('../php/login.php',{
		          username: $('#name').val(),
		          password: $('#password').val()
		        }, function(response){
		        	//console.log(response)
		          var $obj = eval('(' + response + ')');
		          if($obj.state){
		          	var $name  = $('#name').val();
		          	common.setCookie('login',$name);

		          	setTimeout(function(){
 						window.location.href = '../index.html';
		          	},100)
		           // console.log(login)
		          } 
		          else {
		           alert($obj.message);
		          }
		        })        
		      })
			});
		
		});
	});