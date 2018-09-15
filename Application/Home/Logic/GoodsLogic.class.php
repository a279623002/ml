<?php 
namespace Home\Logic;

use Think\Model\RelationModel;

class GoodsLogic extends RelationModel
{

	/**
	 * @author Zero
	 * Date 2018-08-20
	 * 商品列表
	 */
	public function get_goods_list($status)
	{
		$Model = M('goods');
		$data = $Model->where(array('status' => $status))->select();
		return $data;
	}

	/**
	 * @author Zero
	 * Date 2018-08-22
	 * 商品详情
	 */
	public function get_goods_detail($goods_id)
	{

		$Model = M('goods');
		$data = M('goods')->where(array('goods_id' => $goods_id))->find();
		$slider = M('goods_slider')->where(array('goods_id' => $goods_id))->select();
		$data['detail'] = htmlspecialchars_decode($data['detail']);
		return array('data' => $data, 'slider' => $slider);
	}



}
?>