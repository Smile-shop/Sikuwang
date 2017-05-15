require(['config'],function(){
	// 这里不能保证jquery,gdszoom,common的加载顺序
	require(['common','jquery','carousel','lazyload'],function(common){
		$(function(){
			//懒加载
			$("img").lazyload({threshold:1,effect: "fadeIn"});
			$('header').load('html/header.html',function(){
				//移进去显示
				$('.nav1').hover(function(){
					$('.all').stop().slideDown(200)
				},function(){
					//移出来隐藏
					$('.all').stop().slideUp(200);
				})

				//头部显示登陆用户名称
				var login = common.getCookie('login');
				if(login){
					$('.res').remove()
					$('.lin').remove()
					$('.res1').html('退出');
					$('.lin1').html(login);
				}else{
					$('.res').text('免费注册');
					$('.lin').text('请登录');
					$('.res1').remove()
					$('.lin1').remove()
				}
				
				$('.res1').click(function(){
					common.removeCookie('login')
					common.removeCookie('carlist')
					window.location.href = '../index.html';
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
		});

		//读取cookie让刷新页面购物车商品数也不会变
			var carlist = common.getCookie('carlist');
			carlist = carlist ? JSON.parse(carlist) : [];
			var sum = 0;
			carlist.forEach(function(ele)
				{
				sum += Number(ele.qty);
			})
			// console.log(sum)
			$('.count').html(sum);
			

			
	});
});