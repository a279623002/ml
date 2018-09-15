<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="renderer" content="webkit">
    <meta http-equiv="Cache-Control" content="no-siteapp" />
    <title>名流后台管理系统</title>
    <link href="/Public/Admin/css/bootstrap.min14ed.css?v=3.3.6" rel="stylesheet">
    <link href="/Public/Admin/css/font-awesome.min93e3.css?v=4.4.0" rel="stylesheet">
    <link href="/Public/Admin/css/animate.min.css" rel="stylesheet">
    <link href="/Public/Admin/css/plugins/sweetalert/sweetalert.css" rel="stylesheet">
    <link href="/Public/Admin/css/style.min862f.css?v=4.1.0" rel="stylesheet">
    <link href="/Public/Admin/css/plugins/iCheck/custom.css" rel="stylesheet">
    <link href="/Public/Admin/css/plugins/blueimp/css/blueimp-gallery.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="/Public/Admin/css/plugins/webuploader/webuploader.css">
    <link rel="stylesheet" type="text/css" href="/Public/Admin/css/demo/webuploader-demo.min.css">
    <link  rel="stylesheet" type="text/css" href="/Public/Admin/css/plugins/blueimp/css/blueimp-gallery.min.css">
    <script type="text/javascript" charset="utf-8" src="/Public/Admin/ueditor/ueditor.config.js"></script>
    <script type="text/javascript" charset="utf-8" src="/Public/Admin/ueditor/ueditor.all.min.js"></script>
    <script type="text/javascript" charset="utf-8" src="/Public/Admin/ueditor/lang/zh-cn/zh-cn.js"></script>
</head>

<body class="gray-bg">
    <div class="middle-box text-center loginscreen  animated fadeInDown">
        <h2>诸暨婚恋后台管理系统</h2>
        <div>
            <form class="m-t" action="" method="post" id="loginForm">
                <div class="form-group">
                    <input type="text" class="form-control" name="account" placeholder="用户名">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" name="password" placeholder="密码">
                </div>
                <div class="">
                 <input id="j_verify" name="code" type="text" class="form-control x164 in" placeholder="验证码">
                 <img id="verify_img" alt="点击更换" title="点击更换" src="<?php echo U('Index/verify',array());?>" style="margin-top: 15px;margin-bottom: 15px;">
                </div>
                <button type="submit" class="btn btn-primary block full-width m-b">登 录</button>
            </form>
        </div>
    </div>
    <script src="/Public/Admin/js/jquery.min.js?v=2.1.4"></script>
    <script src="/Public/Admin/js/bootstrap.min.js?v=3.3.6"></script>
    <script src="/Public/Admin/js/plugins/metisMenu/jquery.metisMenu.js"></script>
    <script src="/Public/Admin/js/plugins/slimscroll/jquery.slimscroll.min.js"></script>
    <script src="/Public/Admin/js/plugins/layer/layer.min.js"></script>
    <script src="/Public/Admin/js/hplus.min.js?v=4.1.0"></script>
    <script type="text/javascript" src="/Public/Admin/js/contabs.min.js"></script>
    <script src="/Public/Admin/js/plugins/pace/pace.min.js"></script>
    <script src="/Public/Admin/js/content.min.js?v=1.0.0"></script>
    <script src="/Public/Admin/js/plugins/layer/laydate/laydate.js"></script>
    <script src="/Public/Admin/js/plugins/validate/jquery.validate.min.js"></script>
    <script src="/Public/Admin/js/plugins/validate/messages_zh.min.js"></script>
    <script src="/Public/Admin/js/plugins/validate/additional-methods.js"></script>
    <script src="/Public/Admin/js/demo/form-validate-demo.min.js"></script>
    <script src="/Public/Admin/js/plugins/iCheck/icheck.min.js"></script>
    <script src="/Public/Admin/js/plugins/blueimp/jquery.blueimp-gallery.min.js"></script>
    <script src="/Public/Admin/js/plugins/blueimp/jquery.blueimp-gallery.min.js"></script>
    
    <script type="text/javascript">
        var BASE_URL = 'js/plugins/webuploader/index.html';
    </script>
    <script src="/Public/Admin/js/plugins/webuploader/webuploader.min.js"></script>
    <script src="/Public/Admin/js/demo/webuploader-demo.min.js"></script>
    <script>
        $(document).ready(function(){$(".i-checks").iCheck({checkboxClass:"icheckbox_square-green",radioClass:"iradio_square-green",})});
    </script>
    <script>
        laydate({elem:"#hello",event:"focus"});var start={elem:"#start",format:"YYYY/MM/DD hh:mm:ss",min:laydate.now(),max:"2099-06-16 23:59:59",istime:true,istoday:false,choose:function(datas){end.min=datas;end.start=datas}};var end={elem:"#end",format:"YYYY/MM/DD hh:mm:ss",min:laydate.now(),max:"2099-06-16 23:59:59",istime:true,istoday:false,choose:function(datas){start.max=datas}};laydate(start);laydate(end);
    </script>
    
<script src="/Public/Admin/js/jquery.min.js"></script>
<script src="/Public/Admin/js/plugins/sweetalert/sweetalert.min.js"></script>
<script src="/Public/Admin/js/plugins/layer/laydate/laydate.js"></script>
<script src="/Public/Admin/js/plugins/validate/jquery.validate.js"></script>
<script src="/Public/Admin/js/plugins/validate/additional-methods.js"></script>
<script>
$("#verify_img").click(function() {
   var verifyURL = "<?php echo U('index/verify',array());?>";
   var time = new Date().getTime();
   $("#verify_img").attr({
      "src" : verifyURL
   });
});
</script>
   <script type="text/javascript">
    $().ready(function() {
    	  $("#loginForm").validate({
    	    rules: {
    	      account: {
    	    	  required : true,
    	    	  minlength : 5,
    	      },
    	      password: {
    	    	  required : true,
    	    	  minlength : 6,
    	      },
    	      code: {
    	    	  required : true,
    	    	  minlength : 4,
    	      },
    	    },
    	    messages: {
    	      account: {
       	        required : "请填写账号",
       	        minlength: "账号长度大于5位",
       	      },
       	      password: {
      	        required : "请填写密码",
      	        minlength: "密码长度大于6位",
      	      },
      	      code: {
    	        required : "请填写验证码",
    	        minlength: "验证码长度大于4位",
    	      },
    	     },
    	     submitHandler:function(form){
	  				$.ajax({
	  					url: '<?php echo U('Index/login');?>',
	  					type: 'post',
	  					dataType: 'json',
	  					data: $("#loginForm").serialize(),
	  					success: function (data) {
	                     if(data.state) {
	                    	 window.location.href = "<?php echo U('Index/index');?>";
	                     } else {
	                    	 swal(data.msg, "", false);
	                     }
		  				}
	  				});
	  			}
    	    })
    	});
    </script>
</body>
</html>