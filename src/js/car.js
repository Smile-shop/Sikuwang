require(['config'],function(){
	// 这里不能保证jquery,gdszoom,common的加载顺序
	require(['jquery','common'],function($,common){
		$(function(){
			
			$('footer').load('footer.html');

			//读取cookie
			var goodslist = common.getCookie('carlist');

				// 把json字符串转换成js对象
			goodslist = goodslist ? JSON.parse(goodslist) : [];

			// 2）把cookie中的商品信息写入#carList
			// var ul = document.createElement('ul');
			$div = $('<div/>')
			$div.addClass('list')

			// 总价
			// var totalPrice = 0;

			res = goodslist.map(function(item){
				// totalPrice += item.price * item.qty;
				
				return '<ul class="sp" data-guid="'+item.guid+'"><li><input type="checkbox" name="newslist" class="gcheck"></li><li class="gname"><div class="pic"><img src="'
				+item.imgurl+'"></div><p class="txt">'+item.name+'</p></li><li><p class="gprice">'+item.price+
				'</p></li><li><span class="cut a">-</span><input type="text" class="gcount a" value="'+item.qty+
				'"><span class="add a">+</span></li><li><p class="gsum">'+Number(item.price)*Number(item.qty)+
				'</p></li><li><p class="gcao"><a href="">删除</a></p></li></ul>'
					
			}).join('');
			$div.html(res);

			// 把div写入#carList
			$('.car').append($div);

			// 写入总价
			function GetCount() {
				var sum = 0;
				$(".gcheck").each(function () {
					if ($(this).prop("checked")) {
						for (var i = 0; i < $(this).length; i++) {
							sum += parseInt($(this).parents('li').siblings().find('.gsum').text());
							// console.log(sum )
						}
					}
					else{
						sum = 0;
					}
				});
				$(".totalprice").html(sum);
			}


			
			// 页面商品数量减少
			$('.cut').on('click',function(){

				var shu = parseInt($(this).next().val())
				
				if(shu< 2){
					shu = 2;
				}

				$(this).next().val(--shu);
				//获取单价
				var gprice = parseInt($(this).parents('li').prev().find('.gprice').text());
				//获取数量
				var mintotal = parseInt($(this).next().val());

				// console.log()
				//点击减少后的小计价格
				$(this).parents('li').next().find('.gsum').text(gprice*mintotal);
				
				// console.log(parseInt($(this).parents('li').next().find('.gprice').text()))
				//把减少之后的数量写到cookie
				var currentGUID = ($(this).parents('.sp').attr('data-guid'))
				// 减少cookie中对应的商品信息
					for(var i=0;i<goodslist.length;i++){

						if(goodslist[i].guid === currentGUID){

							goodslist[i].qty = shu;
							// console.log(shu)
							break;
						}
					}

				//重写cookie
				common.setCookie('carlist',JSON.stringify(goodslist));
				GetCount();
			})


			//页面商品数量增加
			$('.add').on('click',function(){
				// console.log(shu)
				var shu = parseInt($(this).prev().val());
				$(this).prev().val(++shu);
				// console.log(shu)
				var gprice = parseInt($(this).parents('li').prev().find('.gprice').text());
				var mintotal = parseInt($(this).prev().val());
				//点击增加后的小计价格
				$(this).parents('li').next().find('.gsum').text(gprice*mintotal);
				// console.log(parseInt($(this).parents('li').prev().find('.gprice').text())* parseInt($(this).prev().val()))
				// 把增加之后的数量写到cookie
				var currentGUID = ($(this).parents('.sp').attr('data-guid'))
				// console.log(currentGUID)
				// 添加cookie中对应的商品信息
					for(var i=0;i<goodslist.length;i++){

						if(goodslist[i].guid === currentGUID){

							goodslist[i].qty = shu;
							// console.log(shu)
							break;
						}
					}
				//重写cookie
				common.setCookie('carlist',JSON.stringify(goodslist));
				// console.log(goodslist)
				GetCount();
			});

			//手动输入
			$('.gcount').on('blur',function(){
				var shu = $(this).val();

				var gprice = parseInt($(this).parents('li').prev().find('.gprice').text());
				console.log(gprice)
				//点击增加后的小计价格
				$(this).parents('li').next().find('.gsum').text(gprice*shu);

				// 把增加或减少之后的数量写到cookie

				var currentGUID = ($(this).parents('.sp').attr('data-guid'))
				// console.log(currentGUID)
				// 添加cookie中对应的商品信息
					for(var i=0;i<goodslist.length;i++){

						if(goodslist[i].guid === currentGUID){

							goodslist[i].qty = shu;
							// console.log(shu)
							break;
						}
					}
				//重写cookie
				common.setCookie('carlist',JSON.stringify(goodslist));
				// console.log(goodslist)
				//增加后的总价
				GetCount();
			
			})

			// 删除单个商品
			// 移除DOM节点
			// 清除cookie中对应的商品信息
			$('.gcao').on('click',function(){
				// 移除DOM节点
				var currentGUID = ($(this).parents('.sp').attr('data-guid'))
				// 清除cookie中对应的商品信息
					for(var i=0;i<goodslist.length;i++){
						if(goodslist[i].guid === currentGUID){
							goodslist.splice(i,1);
							break;
						}
					}
					// 删除后重写cookie
					common.setCookie('carlist',JSON.stringify(goodslist));

			})
			


			$(".all").on('click',function () {
				// console.log($(this).prop("checked"))
				
				if($(this).prop("checked")){
					
					$(".gcheck").each(function () {
						$(this).prop("checked", true);
					});
					GetCount();
				
				}
				else
		   		{

					$(".gcheck").each(function () {
						if ($(this).prop("checked")) {
							$(this).prop("checked", false);
						} 
						else {
							$(this).prop("checked", true);
						} 
					});
					GetCount();
		    
		   		}
		   	})


			$(".gcheck").on('click',function () {
				
				
					$(".all").prop("checked",false)
				
							
				// console.log($(this).prop("checked"))
				var sum = 0;

				var arr = [];
				

				$(".gcheck").each(function () {
					if ($(this).prop("checked")) {
						var number = Number($(this).parents('li').siblings().find('.gsum').text());
						
						arr.push(number);

						// console.log(arr)

					}
				})
				// if($(this).prop("checked")){
					
				// 	//$('.gcheck')
				// }
				//GetCount();
				arr.forEach(function(item){
					sum+=item;
				});

				
				$(".totalprice").html(sum);
			});


			// 清空选中商品
			$('.shan').on('click',function(){
				//清除浏览器默认事件
				event.preventDefault()
				var list = $('.list').find('.gcheck').filter(':checked');
				var gArr=[];
				list.each(function(idx,ele){
					var gu = $(ele).parents('ul').attr('data-guid');
					gArr.push(gu);
				})
				console.log(gArr);
				var arr = common.getCookie('carlist');
				var arr = JSON.parse(arr);
				// console.log(arr);
				
				for(var i = 0; i < arr.length; i++){
					if(gArr.indexOf(arr[i].guid) != -1){
						// console.log(ele)
						arr.splice(i,1);
						i--;
					}
					
				}
				console.log(arr)
				setTimeout(function(){
					common.setCookie('carlist',JSON.stringify(arr));
					location.reload();
				},30)
				
				
				
			})
		})
	});
});