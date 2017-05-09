require(['config'],function(){
	// 这里不能保证jquery,gdszoom,common的加载顺序
	require(['jquery','gdszoom'],function($){
		$(function(){
			$('header').load('/ajax/project/src/html/header.html',function(){
					//移进去显示
				$('.nav1').hover(function(){
					$('.all').slideDown(200)
				},function(){
					//移出来隐藏
					$('.all').slideUp(200);
				})
			});
			$('footer').load('/ajax/project/src/html/footer.html');

			$('.zoom').gdszoom({
				position:'right',
			});

			$('.small-list').on('click','img',function(){
				$('.zoom img').attr({
					src:this.src,
					'data-big':$(this).attr('data-big')
				});
			})
		});
	})
})