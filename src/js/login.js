require(['config'],function(){
	// 这里不能保证jquery,gdszoom,common的加载顺序
	require(['jquery'],function($){
		$(function(){
			//加载底部
			$('footer').load('/ajax/project/src/html/footer.html');
			
			 $('.btn').click(function(){
			 	// console.log($('#name').val(),$('#password').val());
<<<<<<< HEAD
<<<<<<< HEAD
		        $.post('../php/login.php',{
=======
		        $.post('/ajax/project/src/php/login.php',{
>>>>>>> ca259722b6dd346d4302f6a34a4f1e8e878d48eb
=======
		        $.post('/ajax/project/src/php/login.php',{
>>>>>>> ca259722b6dd346d4302f6a34a4f1e8e878d48eb
		          username: $('#name').val(),
		          password: $('#password').val()
		        }, function(response){
		        	//console.log(response)
		          var $obj = eval('(' + response + ')');
		          if($obj.state){
<<<<<<< HEAD
<<<<<<< HEAD
		            window.location.href = '../index.html';
=======
		            window.location.href = '/ajax/project/src/php/index.php';
>>>>>>> ca259722b6dd346d4302f6a34a4f1e8e878d48eb
=======
		            window.location.href = '/ajax/project/src/php/index.php';
>>>>>>> ca259722b6dd346d4302f6a34a4f1e8e878d48eb
		          } 
		          else {
		           alert($obj.message);
		          }
		        })        
		      })
			});
		
		});
	});