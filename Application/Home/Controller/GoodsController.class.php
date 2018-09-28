<?php
namespace Home\Controller;

use Think\Controller;
use Home\Logic\GoodsLogic;

class GoodsController extends BaseController
{

	/**
	 * @author Zero
	 * Date 2018-08-20
	 * 商品列表
	 */
	public function cate()
	{
		$GoodsLogic = new GoodsLogic();
		$status = I('get.status', '', true);
		$status = empty($status) ? 1 : $status;
		$data = $GoodsLogic->get_goods_list($status);

		$this->assign('data', $data);
		$this->display();
	}

	/**
	 * @author Zero
	 * Date 2018-08-22
	 * 商品详情
	 */
	public function goods()
	{
		$GoodsLogic = new GoodsLogic();
		$goods_id = I('get.goods_id', '', true);
		$data = $GoodsLogic->get_goods_detail($goods_id);

		$this->assign('data', $data['data']);
		$this->assign('slider', $data['slider']);
		$this->assign('remark', $data['remark']);
		$this->display();
	}

	/**
	 * @author Zero
	 * Date 2018-08-22
	 * 商品确认页
	 */
	public function confirm()
	{
		$GoodsLogic = new GoodsLogic();
		$goods_id = I('post.goods_id', '', true);
		$data = $GoodsLogic->get_goods_detail($goods_id);

		$this->assign('data', $data['data']);
		$this->display();
	}

}