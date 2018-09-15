<?php 
//用户密码加密
function encrypt($str)
{
	return md5(C("AUTH_CODE") . $str);
}

/**
 * TODO 基础分页的相同代码封装
 * @param $count 要分页的总记录数
 * @param int $pagesize 每页查询条数
 * @return \Think\Page
 */
function getpage($count, $pagesize = 15)
{
	$p = new Think\Page($count, $pagesize);
	$p->setConfig('header', '<li class="rows">共<b>%TOTAL_ROW%</b>条记录&nbsp;第<b>%NOW_PAGE%</b>页/共<b>%TOTAL_PAGE%</b>页</li>');
	$p->setConfig('prev', '上一页');
	$p->setConfig('next', '下一页');
	$p->setConfig('last', '末页');
	$p->setConfig('first', '首页');
	$p->setConfig('theme', '%FIRST%%UP_PAGE%%LINK_PAGE%%DOWN_PAGE%%END%%HEADER%');
	$p->lastSuffix = false;//最后一页不显示为总页数
	return $p;
}

/**
 * 生成邀请码
 * @author Manty
 */
function create_yqm()
{
	$decode = array_merge(range(A, Z), range(0, 9));
	shuffle($decode);
	$yqm = implode('', array_slice($decode, 0, 6));
	return $yqm;
}

/**
 * Programmer : Zero
 * @param unknown $image
 * 上传商品函数
 */
function upload_goods_image($image)
{
	if (!empty($image)) {
		$upload = new \Think\Upload();
		$upload->maxSize = (1024 * 1024 *1024) * 2;
		$upload->allowExts = array(
			'jpg', 'gif', 'png', 'jpeg'
		);
		$upload->rootPath = './Uploads/'; // 设置附件上传根目录
		$upload->savePath = 'Goods/'; // 设置附件上传（子）目录
		$upload->replace = true;
		$upload->autoSub = false;
		$imginfo = $upload->upload();
		return $imginfo;
	}
}

/**
 * Programmer : Zero
 * @param unknown $image
 * 上传商品轮播图函数
 */
function upload_slider_image($image)
{
	if (!empty($image)) {
		$upload = new \Think\Upload();
		$upload->maxSize = (1024 * 1024 *1024) * 2;
		$upload->allowExts = array(
			'jpg', 'gif', 'png', 'jpeg'
		);
		$upload->rootPath = './Uploads/'; // 设置附件上传根目录
		$upload->savePath = 'Slider/'; // 设置附件上传（子）目录
		$upload->replace = true;
		$upload->autoSub = false;
		$imginfo = $upload->upload();
		return $imginfo;
	}
}


?>