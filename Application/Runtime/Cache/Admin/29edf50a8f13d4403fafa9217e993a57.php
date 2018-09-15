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

<style>
    .pages a,
    .pages span {
        display: inline-block;
        padding: 2px 5px;
        margin: 0 1px;
        border: 1px solid #f0f0f0;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
    }

    .pages a,
    .pages li {
        display: inline-block;
        list-style: none;
        text-decoration: none;
        color: #58A0D3;
    }

    .pages a.first,
    .pages a.prev,
    .pages a.next,
    .pages a.end {
        margin: 0;
    }

    .pages a:hover {
        border-color: #50A8E6;
    }

    .pages span.current {
        background: #50A8E6;
        color: #FFF;
        font-weight: 700;
        border-color: #50A8E6;
    }

    .token {
        border: none;
    }
</style>
<div class="wrapper wrapper-content animated fadeInRight">
    <div class="row">
        <div class="col-sm-12">
            <div class="ibox float-e-margins">
                <div class="ibox-title">
                    <h3>商品轮播图</h3>
                    <form action="#" method="post" class="form-horizontal m-t" enctype="multipart/form-data" id="signupForm">
                        <input type="hidden" name="goods_id" value="<?php echo ($goods_id); ?>" />
                        <div class="form-group" style="width:200px;float:left;margin-right:0px;margin-left:0px;">
                            <div class="col-sm-3" style="width:200px;float:left;">
                                <input type="file" class="form-control" name="image" style="max-width: 178px;">
                            </div>
                        </div>
                        <button class="btn btn-primary" type="button" onclick="add()" style="margin-left:20px;">添加</button>
                    </form>
                    <div class="ibox-content">
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th>轮播图ID</th>
                                        <th>所属商品</th>
                                        <th>图片</th>
                                        <th>添加时间</th>
                                        <th>操作</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php if(is_array($list)): foreach($list as $key=>$item): ?><tr>
                                            <td><?php echo ($item["slider_id"]); ?></td>
                                            <td><?php echo ($item["name"]); ?></td>
                                            <td>
                                                <img src="/Uploads/Slider/<?php echo ($item["image"]); ?>" width="50px" height="50px">
                                            </td>
                                            <td><?php echo ($item["addtime"]); ?></td>
                                            <td>
                                                <a href="/Uploads/Slider/<?php echo ($item["image"]); ?>" target="_blank"> 查看大图 </a>&nbsp;|
                                                <a href="javascript:del(<?php echo ($item["slider_id"]); ?>)"> 删除</a>
                                            </td>
                                        </tr><?php endforeach; endif; ?>
                                </tbody>
                            </table>
                        </div>
                        <div class="pages"><?php echo ($page); ?></div>
                    </div>
                </div>
            </div>
        </div>
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
    
<script type="text/javascript">
    function add() {
        var formData = new FormData(document.getElementById("signupForm"));
        $.ajax({
            url: '<?php echo U('Admin/Goods/addSlider');?>',
            type: 'post',
            dataType: 'json',
            data: formData,
            async: false,
            cache: false,
            contentType: false,
            processData: false,
            success: function (data) {
                if (data.state == true) {
                    alert('添加成功！');
                    window.location.reload();
                } else {
                    alert('添加失败!');
                }
            }
        });
    }

    function del(ID) {
        if (confirm('确定删除吗？') == true) {
            $.ajax({
                url: '<?php echo U('Admin/Goods/delSlider');?>',
                type: 'post',
                dataType: 'json',
                data: { 'slider_id': ID },
                success: function (data) {
                    if (data.state == true) {
                        alert('删除成功！');
                        window.location.reload();
                    } else {
                        alert('删除失败!');
                    }
                }
            });
        }
    }
</script>
</body>

</html>