require(['config'],function(){
	// 这里不能保证jquery,gdszoom,common的加载顺序
	require(['jquery','carousel','lazyload'],function($){
		$(function(){
<<<<<<< HEAD
			//懒加载
			$("img").lazyload({effect: "fadeIn"});
			$('header').load('html/header.html',function(){
				//移进去显示
				$('.nav1').hover(function(){
					$('.all').stop().slideDown(200)
				},function(){
					//移出来隐藏
					$('.all').stop().slideUp(200);
=======
			$('header').load('/ajax/project/src/html/header.html',function(){
				//移进去显示
				$('.nav1').hover(function(){
					$('.all').slideDown(200)
				},function(){
					//移出来隐藏
					$('.all').slideUp(200);
>>>>>>> ca259722b6dd346d4302f6a34a4f1e8e878d48eb
				})
			});
			$('footer').load('/ajax/project/src/html/footer.html');
			
			});
<<<<<<< HEAD
		$('.box').lbtcarousel({
				imgs:['img/lbt11.jpg','img/lbt12.jpg','img/lbt13.jpg'],
=======
		$('.box').xqcarousel({
				imgs:['/ajax/project/src/img/lbt11.jpg','/ajax/project/src/img/lbt12.jpg','/ajax/project/src/img/lbt13.jpg'],
>>>>>>> ca259722b6dd346d4302f6a34a4f1e8e878d48eb
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