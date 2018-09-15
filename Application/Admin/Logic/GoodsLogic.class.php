<?php 
namespace Admin\Logic;

use Think\Model\RelationModel;

class GoodsLogic extends RelationModel
{
	/**
	 * @author Zero
	 * Date 2018-08-18
	 * 商品列表
	 */
	public function get_goods_list($where)
	{
		$Model = M('goods');
		if (!empty($where['name'])) {
			$map['name'] = array('like', '%' . $where['name'] . '%');
		}
		if (!empty($where['status'])) $map['status'] = $where['status'];
		$map['_logic'] = 'or';
		$map = array_filter($map);
		$count = $Model->where($map)->count();
		$p = getpage($count, 15);
		$goodsList = $Model->where($map)->limit($p->firstRow, $p->listRows)->order('sort asc')->select();
		foreach ($goodsList as $key => $value) {
			$goodsList[$key]['addtime'] = date('Y-m-d H:i:s', $goodsList[$key]['addtime']);
			switch ($goodsList[$key]['status']) {
				case 2:
					$goodsList[$key]['statusInfo'] = '积分礼品';
					break;

				case 3:
					$goodsList[$key]['statusInfo'] = '特价抢购';
					break;

				default:
					$goodsList[$key]['statusInfo'] = '每月推荐';
					break;
			}
		}
		return array('list' => $goodsList, 'page' => $p);
	}

	/**
	 * @author Zero
	 * Date 2018-08-18
	 * 商品详情
	 */
	public function get_goods_detail($goods_id)
	{
		$result = M('goods')->where(array('goods_id' => $goods_id))->find();
		switch ($result['status']) {
			case 2:
				$result['statusInfo'] = '积分礼品';
				break;

			case 3:
				$result['statusInfo'] = '特价抢购';
				break;

			default:
				$result['statusInfo'] = '每月推荐';
				break;
		}
		$result['detail'] = htmlspecialchars_decode($result['detail']);
		return $result;
	}


	/**
	 * @author Zero
	 * Date 2018-08-18
	 * 添加商品
	 */
	public function goodsAdd($data)
	{
		if (empty($data['image'])) return array('state' => false, 'msg' => '添加图片失败!');
		if (empty($data['price'])) return array('state' => false, 'msg' => '添加价格失败!');
		if (empty($data['sort'])) return array('state' => false, 'msg' => '添加排序失败!');
		if (empty($data['detail'])) return array('state' => false, 'msg' => '添加详细图片失败!');
		$data['addtime'] = time();
		if (M('goods')->add($data)) {
			$result = array('state' => true, 'msg' => '添加成功!');
		} else {
			$result = array('state' => false, 'msg' => '添加失败!');
		}
		return $result;
	}

	/**
	 * @author Zero
	 * Date 2018-08-18
	 * 商品编辑
	 */
	public function goodsEdit($data)
	{
		$data = array_filter($data);
		if (M('goods')->save($data)) {
			$result = array('state' => true, 'msg' => '修改成功!');
		} else {
			$result = array('state' => false, 'msg' => '修改失败!');
		}
		return $result;
	}

	/**
	 * @author Zero
	 * Date 2018-08-18
	 * 删除商品
	 */
	public function goodsDel($goods_id)
	{
		if (!empty($goods_id)) {
			if (M('goods')->delete($goods_id)) {
				$result = array('state' => true);
			} else {
				$result = array('state' => false);
			}
			return $result;
		}
	}

	/**
	 * @author Zero
	 * Date 2018-08-21
	 * 添加商品轮播图
	 */
	public function sliderAdd($data)
	{
		if (empty($data['goods_id'])) return array('state' => false, 'msg' => '未指定商品!');
		if (empty($data['image'])) return array('state' => false, 'msg' => '丢失图片!');
		if (M('goods_slider')->add($data)) {
			$result = array('state' => true, 'msg' => '添加成功!');
		} else {
			$result = array('state' => false, 'msg' => '添加失败!');
		}
		return $result;
	}

	/**
	 * @author Zero
	 * Date 2018-08-21
	 * 删除商品轮播图
	 */
	public function sliderdel($slider_id)
	{
		if (empty($slider_id)) return array('state' => false, 'msg' => '未指定图片!');
		if (M('goods_slider')->where(array('slider_id' => $slider_id))->delete()) {
			$result = array('state' => true, 'msg' => '删除成功!');
		} else {
			$result = array('state' => false, 'msg' => '删除失败!');
		}
		return $result;
	}

	/**
	 * @author Zero
	 * Date 2018-08-21
	 * 商品轮播图列表
	 */
	public function sliderList($goods_id)
	{
		$list = M('goods_slider')->where(array('data' => $data))->select();
		foreach ($list as $key => $value) {
			$list[$key]['addtime'] = date('Y-m-s H:i:s', $list[$key]['addtime']);
			$list[$key]['name'] = M('goods')->where(array('goods_id' => $list[$key]['goods_id']))->getField('name');
		}
		return $list;
	}
}