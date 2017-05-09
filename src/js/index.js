require(['config'],function(){
	// 这里不能保证jquery,gdszoom,common的加载顺序
	require(['jquery','slideshow'],function($){
		$(function(){
			$('header').load('html/header.html',function(){
				//移进去显示
				$('.nav1').hover(function(){
					$('.all').show();
				},function(){
					//移出来隐藏
					$('.all').hide();
				})
			});
			$('footer').load('html/footer.html');
			
			});
		$('.box').xqcarousel({
				imgs:['img/lbt11.jpg','img/lbt12.jpg','img/lbt13.jpg'],
				buttons:true,
				smallPictures:false,
				carouselType:'horizontal',
				width:innerWidth
			});
			console.log(innerWidth)
	});
});