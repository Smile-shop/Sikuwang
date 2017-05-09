require(['config'],function(){
	// 这里不能保证jquery,gdszoom,common的加载顺序
	require(['jquery'],function($){
		$(function(){
			//加载底部
			$('footer').load('/ajax/project/src/html/footer.html');
			
			 $('.btn').click(function(){
			 	// console.log($('#name').val(),$('#password').val());
		        $.post('/ajax/project/src/php/login.php',{
		          username: $('#name').val(),
		          password: $('#password').val()
		        }, function(response){
		        	//console.log(response)
		          var $obj = eval('(' + response + ')');
		          if($obj.state){
		            window.location.href = '/ajax/project/src/php/index.php';
		          } 
		          else {
		           alert($obj.message);
		          }
		        })        
		      })
			});
		
		});
	});