require(['config'],function(){
	// 这里不能保证jquery,gdszoom,common的加载顺序
	require(['jquery'],function($){
		$(function(){
			//加载底部
			$('footer').load('../html/footer.html',function(){
				console.log($('#password1'))
			});
			
			});
		});
	});