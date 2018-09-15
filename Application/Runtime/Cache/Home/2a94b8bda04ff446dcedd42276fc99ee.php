<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="zh-CN" style="font-size: 38.333px;">

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
	<title>汕头名流积分商城</title>
	<link rel="stylesheet" type="text/css" href="/Public/Home/css/base.css">
	<link rel="stylesheet" type="text/css" href="/Public/Home/css/index.css">
	<link rel="stylesheet" type="text/css" href="/Public/Home/css/mui.min.css">
	<link rel="stylesheet" type="text/css" href="/Public/Home/css/loaders.min.css">
	<link rel="stylesheet" type="text/css" href="/Public/Home/css/loading.css">
	<link rel="stylesheet" href="/Public/Home/css/swiper.min.css">
	<script src="/Public/Home/js/rem.js"></script>
	<script src="/Public/Home/js/jquery.min.js" type="text/javascript"></script>
	<script src="/Public/Home/js/others.js"></script>
	<script src="/Public/Home/js/swiper.jquery.min.js"></script>
	<script type="text/javascript">

		var speed = 60000;
		var temlenone = 6000;
		var obj = null, bodywt = 0;
		var sintv = 0, timejs = 0;

		// function gdfunc() {
		// 	obj.css({ 'left': bodywt + 'px' });
		// 	$('.buymessage').show();
		// 	$('#main').css('padding-top', '2.4rem');


		// 	obj.animate({
		// 		left: '-' + obj.width() + 'px'
		// 	}, (temlenone * $('.gdbuymessagelt').length), function () {
		// 		$('.buymessage').hide();
		// 		$('#main').css('padding-top', '1.5rem');
		// 		setTimeout("gdfunc()", speed);

		// 	});


		// }

		function jctime(tim) {
			if (tim < 10) {
				if (tim < 0) {
					return 60;
				} else {
					return '0' + tim;
				}
			}
			return tim;
		}

		function qianggoudate() {
			var sec = document.getElementById("sec").innerText;

			sec = jctime(--sec);
			if (sec == 60) {
				var min = document.getElementById("min").innerText;
				min = jctime(--min);
				if (min == 60) {
					var hour = document.getElementById("hour").innerText;
					hour = jctime(--hour);
					document.getElementById("hour").innerText = hour == 60 ? '00' : hour;
					if (hour == 60) {
						clearInterval(timejs);

					}
				}
				document.getElementById("min").innerText = min;
			}
			document.getElementById("sec").innerText = sec;
		}


		$(window).load(function () {
			$('.buymessage').show();
			$(".loading").addClass("loader-chanage");
			$(".loading").fadeOut(300);

			$('.lookwewechat').click(function (e) {
				e.preventDefault();
				$('.gzerweimas').show();
				$('.zdpingfeng').show();
			});

			$('.colosethisbox').click(function () {
				$(this).parent().hide();
				$('.zdpingfeng').hide();
			});

			bodywt = $('body').width();
			//$('.gdbuymessagelt').css('width',bodywt+'px');
			var tempwidth = 0;

			$('.gdbuymessagelt').each(function (index) {
				tempwidth += parseFloat($(this).outerWidth(true));
			})
			obj = $('.gundongtiaoxlist').css('width', (tempwidth + 2) + 'px');



			gdfunc();
			if ($('#sec').length > 0)
				timejs = setInterval("qianggoudate()", 1000);
			//$('.gdbuymessagelt')
		})
	</script>
	<style type="text/css">
		.syhnowbtn {
			background: url(https://int.stmingliu.cn/static/image/buynow.png);
			background-position: center;
			background-size: 100%;
			background-repeat: no-repeat;
			width: 2.2rem;
			height: 1rem;
			border: 0px !important;
			border-radius: 0 !important;
			background-color: rgba(204, 204, 204, 0) !important;
		}

		.colosethisbox {
			position: absolute;
			right: 0.2rem;
			background: rgba(0, 0, 0, 0.39);
			color: white;
			border-radius: 50%;
			padding: 0.16rem 0.3rem;
			top: -0.01rem;
		}

		.buymessage {
			display: none;
		}
	</style>
</head>

<body>

	<!--loading页开始
<div class="loading">
	<div class="loader">
        <div class="loader-inner pacman">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
	</div>
</div>
<!--loading页结束-->
	<!-- 公众号二维码 -->
	<div class="gzerweimas" style="
    padding: 5%;
    position: fixed;
    z-index: 10;
    top: 16%;
    display: none;
">
		<a class="colosethisbox" style="
     
">X</a>
		<img src="https://int.stmingliu.cn/static/image/qrcode_for_gh_718799c89a25_860.jpg" style="
    width: 100%;
">
	</div>

	<!--遮挡屏风-->
	<div class="zdpingfeng" style="display: none; width: 100%;height: 100%; position: fixed; z-index: 9; background: rgba(0, 0, 0, 0.28);left: 0px;top: 0px;  "></div>


	<!--头部区域-->
	<header class="mui-bar mui-bar-nav" id="header">
		<h4></h4>
	</header>
	<!-- <div class="buymessage">
		<div class="gundongtiaoxlist">
			{volist name="buymessagelist" id="vo"}
			<div class="gdbuymessagelt"><?php echo ($vo["name"]); ?></div>
			{/volist}
		</div>

	</div> -->
	<!-- padding-top:1.5rem; -->
	<div id="main" class="clearfloat warp">
		<div class="mui-content">
			<!--banner开始-->
			<div class="banner swiper-container swiper-container-horizontal">
				<div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(-1656px, 0px, 0px);">

					<div class="swiper-slide" data-swiper-slide-index="0" style="width: 414px;">
						<a href="javascript:void(0)">
							<img class="swiper-lazy swiper-lazy-loaded" alt="" src="/Public/Home/image/banner1.jpg">
						</a>
					</div>

					<div class="swiper-slide" data-swiper-slide-index="1" style="width: 414px;">
						<a href="javascript:void(0)">
							<img class="swiper-lazy swiper-lazy-loaded" alt="" src="/Public/Home/image/banner2.jpg">
						</a>
					</div>

					<div class="swiper-slide" data-swiper-slide-index="2" style="width: 414px;">
						<a href="javascript:void(0)">
							<img class="swiper-lazy swiper-lazy-loaded" alt="" src="/Public/Home/image/banner3.jpg">
						</a>
					</div>
					<!--
		                <div class="swiper-slide" data-swiper-slide-index="3" style="width: 414px;"><a href="javascript:void(0)"><img class="swiper-lazy swiper-lazy-loaded" alt="" src="/Public/Home/image/banner1.jpg"></a></div>
		                
		                <div class="swiper-slide" data-swiper-slide-index="4" style="width: 414px;"><a href="javascript:void(0)"><img class="swiper-lazy swiper-lazy-loaded" alt="" src="/Public/Home/image/banner2.jpg"></a></div>
		                
		            	<div class="swiper-slide swiper-slide-duplicate swiper-slide-active" data-swiper-slide-index="5" style="width: 414px;"><a href="javascript:void(0)"><img class="swiper-lazy swiper-lazy-loaded" alt="" src="/Public/Home/image/banner2.jpg"></a></div>-->
				</div>
			</div>
			<!--第一栏分类开始-->
			<div class="cation clearfloat box-s">
				<ul>
					<li>
						<a href="<?php echo ($list); ?>?id=<?php echo ($res[0]['Id']); ?>">
							<img src="/Public/Home/image/ico5.png">
							<p>每月推荐</p>
						</a>
					</li>
					<li>
						<a href="<?php echo ($list); ?>?id=<?php echo ($res[1]['Id']); ?>">
							<img src="/Public/Home/image/ico2.png">
							<p>积分礼品</p>
						</a>
					</li>

					<li>
						<a href="<?php echo ($list); ?>?id=<?php echo ($res[2]['Id']); ?>">
							<img src="/Public/Home/image/ico4.png">
							<p>特价抢购</p>
						</a>
					</li>
					<li>
						<a href="<?php echo ($getintergel); ?>">
							<img src="/Public/Home/image/ico3.png">
							<p>积分获取</p>
						</a>
					</li>
				</ul>
			</div>
			<!--第一栏分类结束-->


			<!--商品分类 开始-->
			<div class="theme clearfloat">
				<div class="boutit clearfloat">
					<span></span>
					<samp>每月推荐</samp>
				</div>
				<div class="content clearfloat">

					<?php if(is_array($goods1)): foreach($goods1 as $k=>$vo): ?><div class="list clearfloat fl">
							<a href="<?php echo U('Home/Goods/goods/goods_id/'.$vo['goods_id']);?>">
								<div class="tu clearfloat fr">
									<span></span>
									<img src="./Uploads/Goods/<?php echo ($vo["image"]); ?>">
								</div>
								<div class="shang clearfloat fl box-s">
									<p class="tit over"><?php echo ($vo["name"]); ?></p>
									<p>
										<span class="red">
											<span id="money"><?php echo ($vo["price"]); ?>元</span>
										</span>
										<span class="over db red"></span>
									</p>
								</div>
							</a>
						</div><?php endforeach; endif; ?>

				</div>
			</div>

			<div class="theme clearfloat">
				<div class="boutit clearfloat">
					<span></span>
					<samp>积分礼品</samp>
				</div>
				<div class="content clearfloat">

					<?php if(is_array($goods2)): foreach($goods2 as $k=>$vo): ?><div class="list clearfloat fl">
							<a href="<?php echo U('Home/Goods/goods/goods_id/'.$vo['goods_id']);?>">
								<div class="tu clearfloat fr">
									<span></span>
									<img src="./Uploads/Goods/<?php echo ($vo["image"]); ?>">
								</div>
								<div class="shang clearfloat fl box-s">
									<p class="tit over"><?php echo ($vo["name"]); ?></p>
									<p>
										<span class="red">
											<span id="money"><?php echo ($vo["price"]); ?>元</span>
										</span>
										<span class="over db red"></span>
									</p>
								</div>
							</a>
						</div><?php endforeach; endif; ?>

				</div>
			</div>
			<div class="theme clearfloat">
				<div class="boutit clearfloat">
					<span></span>
					<samp>特价抢购</samp>
				</div>
				<div class="content clearfloat">

					<?php if(is_array($goods3)): foreach($goods3 as $k=>$vo): ?><div class="list clearfloat fl">
							<a href="<?php echo U('Home/Goods/goods/goods_id/'.$vo['goods_id']);?>">
								<div class="tu clearfloat fr">
									<span></span>
									<img src="./Uploads/Goods/<?php echo ($vo["image"]); ?>">
								</div>
								<div class="shang clearfloat fl box-s">
									<p class="tit over"><?php echo ($vo["name"]); ?></p>
									<p>
										<span class="red">
											<span id="money"><?php echo ($vo["price"]); ?>元</span>
										</span>
										<span class="over db red"></span>
									</p>
								</div>
							</a>
						</div><?php endforeach; endif; ?>

				</div>
			</div>

			<!--商品分类 结束-->


			<div class="addlinew">
				<div>
					<a href="http://www.stmingliu.com/">官方主页</a>
					<a class="lookwewechat">关注我们</a>
					<a href="http://j.map.baidu.com/7d3cC">线下门店</a>
					<a href="https://m.weibo.cn/p/1005052355101520">新浪微博</a>
				</div>
				<p>
					<a href="tel:0754-87268339">
						<img src="/Public/Home/image/phone.png" /> 美丽热线：0754-87268339</a>
				</p>
			</div>
		</div>

	</div>
	<footer class="page-footer fixed-footer" id="footer">
			<ul>
				<li >
					<a href="/">
						<i class="iconfont icon-shouye"></i>
						<p>首页</p>
					</a>
				</li>
				<li>
					<a href="<?php echo U('Home/Goods/cate');?>">
						<i class="iconfont icon-icon04"></i>
						<p>分类</p>
					</a>
				</li>
				<li>
					<a href="<?php echo U('Home/User/shopCar');?>">
						<i class="iconfont icon-gouwuche"></i>
						<p>购物车</p>
					</a>
				</li>
				<li>
					<a href="<?php echo U('Home/User/index');?>">
						<i class="iconfont icon-yonghuming"></i>
						<p>我的</p>
					</a>
				</li>
			</ul>
</footer>
<script type="text/javascript">
	var temp='<?php echo ($active); ?>';
	//alert(temp);
	$(function(){
		$('.page-footer>ul>li>a').each(function(){
			var hr=$(this).attr('href');
			var cs=hr.substring(hr.lastIndexOf('/')+1,hr.lastIndexOf('.'));
			if(cs==temp)
				$(this).parent().addClass('active');
		})
	})
</script>


</body>

</html>