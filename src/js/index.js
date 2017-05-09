require(['config'],function(){
	// 这里不能保证jquery,gdszoom,common的加载顺序
	require(['jquery','slideshow'],function($){
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
			
			});
		$('.box').xqcarousel({
				imgs:['/ajax/project/src/img/lbt11.jpg','/ajax/project/src/img/lbt12.jpg','/ajax/project/src/img/lbt13.jpg'],
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