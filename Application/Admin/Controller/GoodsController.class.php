<?php
namespace Admin\Controller;

use Admin\Logic\GoodsLogic;

class GoodsController extends BaseController
{

	/**
	 * @author Zero
	 * Date 2018-08-16
	 * 商品列表
	 */
	public function goodsList()
	{
		$GoodsLogic = new GoodsLogic();
		$where = I('post.') == '' ? 1 : I('post.');
		$goodsList = $GoodsLogic->get_goods_list($where);

		$this->assign('page', $goodsList['page']->show());
		$this->assign('list', $goodsList['list']);
		$this->display();
	}

	/**
	 * @author Zero
	 * Date 2018-08-18
	 * 商品添加/编辑
	 */
	public function goodsAdd()
	{
		try {
			$GoodsLogic = new GoodsLogic();
			$goods_id = I('get.goods_id', '', true);
			if (!empty($goods_id)) {
				$detail = $GoodsLogic->get_goods_detail($goods_id);
				$this->assign('detail', $detail);
			}
			$data = I('post.');
			if (!empty($data)) {
				$image = empty($_FILES['image']) ? '' : $_FILES['image'];
				if ($image['error'] == 0) {
					$image = upload_goods_image($image);
					$data['image'] = $image['image']['savename'];
				}

				if (empty($data['goods_id'])) {
					$result = $GoodsLogic->goodsAdd($data);
					exit(json_encode($result));
				} else {
					$result = $GoodsLogic->goodsEdit($data);
					exit(json_encode($result));
				}
			}
		} catch (\Exception $e) {
			$result = array('state' => false, 'msg' => $e->getMessage());
			exit(json_encode($result));
		}

		$this->display();
	}

	/**
	 * @author Zero
	 * Date 2018-08-16
	 * 删除商品
	 */
	public function goodsDel()
	{
		$goods_id = I('post.goods_id', '', true);
		$GoodsLogic = new GoodsLogic();
		$result = $GoodsLogic->goodsDel($goods_id);
		exit(json_encode($result));
	}

	/**
	 * @author Zero
	 * Date 2018-08-21
	 * 轮播图
	 */
	public function goodsSlider()
	{
		$goods_id = I('get.goods_id', '', true);
		$GoodsLogic = new GoodsLogic();
		$list = $GoodsLogic->sliderList($goods_id);
		$this->assign('list', $list);
		$this->assign('goods_id', $goods_id);
		$this->display();
	}

	/**
	 * @author Zero
	 * Date 2018-08-21
	 * 添加轮播图
	 */
	public function addSlider()
	{
		$goods_id = I('post.goods_id', '', true);
		$GoodsLogic = new GoodsLogic();
		$image = empty($_FILES['image']) ? '' : $_FILES['image'];
		if ($image['error'] == 0) {
			$image = upload_slider_image($image);
			$data['image'] = $image['image']['savename'];
			$data['addtime'] = time();
			$data['goods_id'] = $goods_id;

		}
		$result = $GoodsLogic->sliderAdd($data);
		exit(json_encode($result));
	}

	/**
	 * @author Zero
	 * Date 2018-08-21
	 * 删除轮播图
	 */
	public function delSlider()
	{
		$slider_id = I('post.slider_id', '', true);
		$GoodsLogic = new GoodsLogic();
		$result = $GoodsLogic->sliderDel($slider_id);
		exit(json_encode($result));
	}

	/**
	 * @author Zero
	 * Date 2018-09-15
	 * 商品评论
	 */
	public function goodsRemark()
	{
		$goods_id = I('get.goods_id', '', true);
		$data = I('post.', '', true);
		$GoodsLogic = new GoodsLogic();
		$list = $GoodsLogic->remarkList($goods_id, $data);
		$this->assign('goods_id', $goods_id);
		$this->assign('page', $list['page']->show());
		$this->assign('list', $list['list']);
		$this->display();
	}
}