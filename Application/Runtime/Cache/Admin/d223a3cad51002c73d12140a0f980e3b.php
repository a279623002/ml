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

<div class="wrapper wrapper-content animated fadeInRight">
    <div class="row">
        <div class="col-sm-4">
            <div class="contact-box">
                <a href="profile.html">
                    <div class="col-sm-4">
                        <div class="text-center">
                            <img alt="image" class="img-circle m-t-xs img-responsive" src="<?php echo ($user["headimgurl"]); ?>">
                            <div class="m-t-xs font-bold"><?php echo ($user["nickname"]); ?></div>
                        </div>
                    </div>
                </a>
                <div class="col-sm-8">
                    
                        <h3>
                            <strong><?php echo ($user["realname"]); ?></strong>
                        </h3>
                        <p>
                            <i class="fa fa-map-marker"></i> <?php echo ($user["country"]); ?>·<?php echo ($user["province"]); ?>·<?php echo ($user["city"]); ?></p>
                    
                    <address>
                        <a href="profile.html">
                            <strong>单号：<?php echo ($order["number"]); ?></strong>
                            <br> 价格：<?php echo ($order["price"]); ?>
                            <br> 数量：<?php echo ($order["sum"]); ?>
                            <br> 备注：<?php echo ($order["msg"]); ?>
                        </a>
                        <br>
                        <abbr title="Phone">Tel:</abbr> <?php echo ($user["mobile"]); ?>
                    </address>
                </div>
                <div class="clearfix"></div>

            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-4">
            <div class="contact-box">
                <a href="profile.html">
                    <div class="col-sm-4">
                        <div class="text-center">
                            <img alt="image" class="img-circle m-t-xs img-responsive" src="<?php echo ($user["headimgurl"]); ?>">
                            <div class="m-t-xs font-bold"><?php echo ($user["nickname"]); ?></div>
                        </div>
                    </div>
                </a>
                <div class="col-sm-8">
                    
                        <h3>
                            <strong><?php echo ($user["realname"]); ?></strong>
                        </h3>
                        <p>
                            <i class="fa fa-map-marker"></i> <?php echo ($user["country"]); ?>·<?php echo ($user["province"]); ?>·<?php echo ($user["city"]); ?></p>
                    
                    <address>
                        <a href="profile.html">
                            <strong>单号：<?php echo ($order["number"]); ?></strong>
                            <br> 价格：<?php echo ($order["price"]); ?>
                            <br> 数量：<?php echo ($order["sum"]); ?>
                            <br> 备注：<?php echo ($order["msg"]); ?>
                        </a>
                        <br>
                        <abbr title="Phone">Tel:</abbr> <?php echo ($user["mobile"]); ?>
                    </address>
                </div>
                <div class="clearfix"></div>

            </div>
        </div>
    </div>
</div>
<script src="https://cdn.staticfile.org/jquery/2.1.4/jquery.min.js"></script>
<script src="https://cdn.bootcss.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
<script src="js/content.min.js?v=1.0.0"></script>
<script>
    $(document).ready(function () {
        $(".contact-box").each(function () {
            animationHover(this, "pulse")
        })
    });
</script>




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
    



</body>

</html>