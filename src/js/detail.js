require(['config'],function(){
	// 这里不能保证jquery,gdszoom,common的加载顺序
	require(['jquery','gdszoom','lazyload'],function($){
		$(function(){
			//懒加载
			$("img").lazyload({effect: "fadeIn"});
			console.log($("img"))
			$('header').load('../html/header.html',function(){
					//移进去显示
				$('.nav1').hover(function(){
					$('.all').stop().slideDown(200)
				},function(){
					//移出来隐藏
					$('.all').stop().slideUp(200);
				})
			});
			$('footer').load('../html/footer.html');

			$('.zoom').gdszoom({
				position:'right',
			});

			$('.small-list').on('click','img',function(){
				$('.zoom img').attr({
					src:this.src,
					'data-big':$(this).attr('data-big')
				});
			
				$('li img').removeClass('active');
				$(this).addClass('active');

				});
			$('.b1').on('click','span',function(){

				$(this).addClass('active').siblings().removeClass('active');

				});

			$(window).on('scroll' , function() {
			var he = this.scrollY;
			
			if(he>1182){
				$('.t .nav').css({'position':'fixed','top':'0'});
			}else if(he <= 1182){
				$('.t .nav').css({'position':''});
			}
		})
		});
	})
})