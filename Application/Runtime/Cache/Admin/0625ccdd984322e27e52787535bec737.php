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
	<div class="wrapper wrapper-content">
		<form action="" method="post" enctype="multipart/form-data" id="signupForm">
			<input type="hidden" name="goods_id" value="<?php echo ($detail["goods_id"]); ?>">
			<div class="row animated fadeInRight">
				<h3 style="margin-left:13px;">商品资料</h3>
				<hr style="width:98%; height:2px;border:none;border-top:1px solid #185598;" />
				<div class="col-md-3">
					<div class="form-group">
						<label for="showEasing">商品名称</label>
						<input type="text" name="name" placeholder="" class="form-control" value="<?php echo ($detail["name"]); ?>">
					</div>
					<div class="form-group">
						<label for="showEasing">商品图片</label>
						<input type="file" name="image1" placeholder="" class="form-control">
						<?php if(($detail["image"] != '')): ?><br/>
							<img src="/Uploads/Goods/<?php echo ($detail["image"]); ?>" max-width="400px"><?php endif; ?>
					</div>
					<div class="form-group">
						<label for="showEasing">商品详情图片</label>
						<input type="file" name="image2" placeholder="" class="form-control">
						<?php if(($detail["detail"] != '')): ?><br/>
							<img src="/Uploads/Goods/<?php echo ($detail["detail"]); ?>" max-width="100px"><?php endif; ?>
					</div>
					<div class="form-group">
						<label for="showEasing">商品价格</label>
						<input type="text" name="price" placeholder="" class="form-control" value="<?php echo ($detail["price"]); ?>">
					</div>
					<div class="form-group">
						<label for="showEasing">排序</label>
						<input type="text" name="sort" placeholder="请填写排序值，数字越小越排前" class="form-control" value="<?php echo ($detail["sort"]); ?>">
					</div>
				</div>
			</div>
			<button type="submit" class="btn btn-w-m btn-primary" id="btnsubmit">提交</button>
			<button type="button" class="btn btn-w-m btn-primary" onclick="history.go(-1)">返回</button>
		</form>
	</div>
	<script src="/Public/Admin/js/jquery.min.js"></script>
	<script src="/Public/Admin/js/plugins/sweetalert/sweetalert.min.js"></script>
	<script src="/Public/Admin/js/plugins/layer/laydate/laydate.js"></script>
	<script src="/Public/Admin/js/plugins/validate/jquery.validate.js"></script>
	<script src="/Public/Admin/js/plugins/validate/additional-methods.js"></script>
	<script type="text/javascript">
		$().ready(function () {
			$("#signupForm").validate({
				rules: {
					name: {
						required: true,
					},
					image1: {
						required: true,
					},
					image2: {
						required: true,
					},
					price: {
						required: true,
					},
					sort: {
						required: true,
					},
				},
				messages: {
					name: {
						required: "请填写商品名称",
					},
					image1: {
						required: "请上传图片",
					},
					image2: {
						required: "请上传详细图片",
					},
					price: {
						required: "请填写价格",
					},
					sort: {
						required: "请填写商品排序",
					},
				},
				submitHandler: function (form) {
					var formData = new FormData(document.getElementById("signupForm"));
					$.ajax({
						url: '<?php echo U('Admin/Goods/goodsAdd');?>',
						type: 'post',
						dataType: 'json',
						data: formData,
						async: false,
						cache: false,
						contentType: false,
						processData: false,
						success: function (data) {
							if (data.state) {
								window.location.href = "<?php echo U('Admin/Goods/goodsList');?>";
							} else {
								swal(data.msg, "", false);
							}
						},
						error: function (XMLHttpRequest, textStatus, errorThrown) {
							$("div").html(textStatus);
							$("div").append("<br/>"+XMLHttpRequest.status);
							$("div").append("<br/>"+XMLHttpRequest.readyState);
							$("div").append("<br/>"+XMLHttpRequest.responseText);
						}
					});
				}
			})
		});
	</script>
</body>
<style>
</style>

</html>