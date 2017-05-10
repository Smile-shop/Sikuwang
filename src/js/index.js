require(['config'],function(){
	// 这里不能保证jquery,gdszoom,common的加载顺序
	require(['jquery','carousel','lazyload'],function($){
		$(function(){
			//懒加载
			$("img").lazyload({effect: "fadeIn"});
			$('header').load('html/header.html',function(){
				//移进去显示
				$('.nav1').hover(function(){
					$('.all').stop().slideDown(200)
				},function(){
					//移出来隐藏
					$('.all').stop().slideUp(200);
				})
			});
			$('footer').load('html/footer.html');
			
			});
		$('.box').lbtcarousel({
				imgs:['img/lbt11.jpg','img/lbt12.jpg','img/lbt13.jpg'],
				buttons:true,
				smallPictures:false,
				carouselType:'horizontal',
				width:innerWidth
			});
		$(window).on('scroll' , function() {
			var he = this.scrollY;
			if(he>200){
				$('.fu').slideDown(200);
			}else if(he <= 200){
				$('.fu').slideUp(200);
			}
		})
	});
});