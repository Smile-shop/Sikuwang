require(['config'],function(){
	// 这里不能保证jquery,gdszoom,common的加载顺序
	require(['jquery','gdszoom'],function($){
		$(function(){
<<<<<<< HEAD
<<<<<<< HEAD
			$('header').load('../html/header.html',function(){
=======
			$('header').load('/ajax/project/src/html/header.html',function(){
>>>>>>> ca259722b6dd346d4302f6a34a4f1e8e878d48eb
=======
			$('header').load('/ajax/project/src/html/header.html',function(){
>>>>>>> ca259722b6dd346d4302f6a34a4f1e8e878d48eb
					//移进去显示
				$('.nav1').hover(function(){
					$('.all').slideDown(200)
				},function(){
					//移出来隐藏
					$('.all').slideUp(200);
				})
			});
<<<<<<< HEAD
<<<<<<< HEAD
			$('footer').load('../html/footer.html');
=======
			$('footer').load('/ajax/project/src/html/footer.html');
>>>>>>> ca259722b6dd346d4302f6a34a4f1e8e878d48eb
=======
			$('footer').load('/ajax/project/src/html/footer.html');
>>>>>>> ca259722b6dd346d4302f6a34a4f1e8e878d48eb

			$('.zoom').gdszoom({
				position:'right',
			});

			$('.small-list').on('click','img',function(){
				$('.zoom img').attr({
					src:this.src,
					'data-big':$(this).attr('data-big')
				});
<<<<<<< HEAD
<<<<<<< HEAD
			
				$('li img').removeClass('active');
				$(this).addClass('active');

				});
			$('.b1').on('click','span',function(){

				$(this).addClass('active').siblings().removeClass('active');

				});

			$(window).on('scroll' , function() {
			var he = this.scrollY;
			console.log(he)
			if(he>1182){
				$('.t .nav').css({'position':'fixed','top':'0'});
			}else if(he <= 1182){
				$('.t .nav').css({'position':''});
			}
		})
=======
			})
>>>>>>> ca259722b6dd346d4302f6a34a4f1e8e878d48eb
=======
			})
>>>>>>> ca259722b6dd346d4302f6a34a4f1e8e878d48eb
		});
	})
})