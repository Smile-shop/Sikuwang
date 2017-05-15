require(['config'],function(){
	// 这里不能保证jquery,gdszoom,common的加载顺序
	require(['jquery','lazyload','fly','common'],function($,lazyload,fly,common){
		$(function(){

			//懒加载
			$("img").lazyload({threshold:1,effect: "fadeIn"});
			//load公共头
			$('header').load('../html/header.html',function(){
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
			//load公共尾
			$('footer').load('../html/footer.html');
			$('.addGoods').on('click',function(event){
				var offset = $('#end').offset();
			    var flyer = $(this).parents('li').find('img').clone().addClass("u-flyer");
			    console.log(flyer)
			   
			    flyer.fly({
			        start: {
			            left: event.clientX,
			            top: event.clientY
			            
			        },
			        end: {
			            left: offset.left,
			            top: offset.top - window.scrollY,
			            width: 20,
			            height: 20
				    },
				    //动画结束后调用函数，清除飞入的图片
				    onEnd: function(){
				    	flyer.remove();
				    	//显示已加入购物车提示
				    	$('.tips').css({display: 'block',opacity:0}).stop().animate({left:1090,opacity: 1},300);
				    	setTimeout(function(){
				    		$('.tips').stop().animate({left:1145,opacity: 0},300).css({display: 'block',opacity:0});
				    	},1200);
				    }
				});
			
			

			//cookie
			var carlist = common.getCookie('carlist');
			carlist = carlist ? JSON.parse(carlist) : [];
			var currentGUID = $(this).parents('li').attr('data-guid');
			console.log($(this).parents('li').attr('data-guid'),$(this).parents('li'))
			var hasGoods = false;
			for(var i=0;i<carlist.length;i++){
					if(carlist[i].guid === currentGUID){
						hasGoods = true;

						// 如果当前商品已经存在cookie中，则商品数量+1
						carlist[i].qty++;
						
						break;
					}
				}

			if(!hasGoods){
				
					var goods = {
						guid:currentGUID,
						name:$(this).parents('li').find('h5').text(),
						price:$(this).parents('li').find('.jg').text(),
						imgurl:$(this).parents('li').find('img').attr("src"),
						qty:1

					};

					// 把当前商品信息写入carlist
					carlist.push(goods);
				}

			common.setCookie('carlist',JSON.stringify(carlist));	
			//读取cookie获取商品数量总和
			var sum = 0;
			carlist.forEach(function(ele)
				{
				sum += Number(ele.qty);
			
			// console.log(sum)
			$('.count').html(sum);

				})
				
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
// console.log(carlist)
			})

		});
	})
