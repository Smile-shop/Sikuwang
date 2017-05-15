require(['config'],function(){
	// 这里不能保证jquery,gdszoom,common的加载顺序
	require(['jquery','gdszoom','lazyload','fly','common'],function($,gdszoom,lazyload,fly,common){
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
			//放大镜显示位置
			$('.zoom').gdszoom({
				position:'right',
			});
			//点击小图切换图片
			$('.small-list').on('click','img',function(){
				$('.zoom img').attr({
					src:this.src,
					'data-big':$(this).attr('data-big')
				});
				//先全部清除图片的样式
				$('li img').removeClass('active');
				//给点击的图片加上样式
				$(this).addClass('active');

				});
			//选项
			$('.b1').on('click','span',function(){

				$(this).addClass('active').siblings().removeClass('active');

				});
			//吸顶效果
			$(window).on('scroll' , function() {
				var he = this.scrollY;
				if(he>1182){
					$('.t .nav').css({'position':'fixed','top':'0'});
				}else if(he <= 1182){
					$('.t .nav').css({'position':''});
				}
			});
			//页面商品数量减少
			var shu = parseInt($('.shu').val());
			var count = parseInt($('.count').html());
			$('.cut').on('click',function(){

				if(shu < 2){
					shu = 2;
				}
				$('.shu').val(--shu);
			})
			//页面商品数量增加加
			$('.add').on('click',function(){
				
				$('.shu').val(++shu);
				
			})
			
			
			// console.log(typeof(count))
			
			$('.gwc').on('click', function(event){
				
			    var offset = $('#end').offset();
			    var flyer = $('.zoom img').clone().addClass("u-flyer");
			    var left = $('.zoom img').offset().left +100;
			    var top = $('.zoom img').offset().top - window.scrollY +150;
			    flyer.fly({
			        start: {
			            // left: event.clientX,
			            // top: event.clientY
			            left:left,
			            top:top
			        },
			        end: {
			            left: offset.left,
			            top: offset.top - window.scrollY,
			            width: 20,
			            height: 20
				    },
				   
				    onEnd: function(){
				    	//动画结束后调用函数，清除飞入的图片
				    	flyer.remove();

				    	//显示已加入购物车提示
				    	$('.tips').css({display: 'block',opacity:0}).stop().animate({left:1020,opacity: 1},300);
				    	setTimeout(function(){
				    		$('.tips').stop().animate({left:1090,opacity: 0},300).css({display: 'block',opacity:0});
				    	},1200);
				    	// console.log($('.tips'))

				    }
				});

			//cookie

			var carlist = common.getCookie('carlist');
			carlist = carlist ? JSON.parse(carlist) : [];
			var currentGUID = $('.right').attr('data-guid');
			var hasGoods = false;
			var addnum = parseInt($('.shu').val());
			for(var i=0;i<carlist.length;i++){
					if(carlist[i].guid === currentGUID){
						hasGoods = true;

						
						carlist[i].qty +=addnum;
						
						break;
					}
				}

			if(!hasGoods){
					
					var goods = {
						guid:currentGUID,
						name:$('h5').text(),
						price:$('.jg').text(),
						imgurl:$('.img').attr("src"),
						qty:1

					};

					// 把当前商品信息写入carlist
					carlist.push(goods);
				}
			//重写cookie
			common.setCookie('carlist',JSON.stringify(carlist));	
			
			//读取cookie获取商品数量总和
			var sum = 0;
			carlist.forEach(function(ele)
				{
				sum += Number(ele.qty);
			})
			// console.log(sum)
			$('.count').html(sum);

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
	})
})