<?php 
namespace Home\Logic;

use Think\Model\RelationModel;

class OrdersLogic extends RelationModel
{
	/**
	 * @author Zero
	 * Date 2018-09-10
	 * 订单列表
	 */
	public function get_order_list($type)
	{
		$Model = M('orders');
		switch ($type) {
			case 1:
				$list = $Model->where(array('status' => 1))->order('addtime desc')->select();
				break;

			case 2:
				$list = $Model->where(array('status' => 2))->order('addtime desc')->select();
				break;

			default:
				$list = $Model->order('addtime desc')->select();
				break;
		}
		foreach ($list as $key => $value) {
			$list[$key]['addtime'] = date('Y-m-d H:i:s', $list[$key]['addtime']);
			$arr = array_filter(explode(',', $list[$key]['goods_id']));
			$goods_sum = array_filter(explode(',', $list[$key]['goods_sum']));
			foreach ($arr as $k => $v) {
				$list[$key]['goods'][$k] = M('goods')->where(array('goods_id' => $v))->find();
				$list[$key]['goods'][$k]['sum'] = $goods_sum[$k];
			}
		}
		return $list;
	}

	/**
	 * @author Zero
	 * Date 2018-09-11
	 * 删除订单
	 */
	public function del_order($order_id)
	{
		if (empty($order_id)) return array('state' => false, 'msg' => '未指定订单!');
		if (M('orders')->where(array('order_id' => $order_id))->delete()) {
			$result = array('state' => true, 'msg' => '删除成功!');
		} else {
			$result = array('state' => false, 'msg' => '删除失败!');
		}
		return $result;
	}

	/**
	 * @author Zero
	 * Date 2018-08-29
	 * 订单确认
	 */
	public function order($data)
	{
		$openid = session('openId');
		$user_id = M('user')->where(array('openid' => $openid))->getField('user_id');
		// {sum: "4", price: "12", shopcar_id: ["4", "3"], goods_id: ["3", "3"], msg: ""}
		if (empty($data['sum'])) return array('state' => false, 'msg' => '未选择购买数量!');
		if (empty($data['price'])) return array('state' => false, 'msg' => '错误总价!');
		if (empty($data['goods_id'])) return array('state' => false, 'msg' => '未选择商品!');
		if (!empty($data['shopcar_id'])) {
			foreach ($data['shopcar_id'] as $key => $value) {
				M('user_shopcar')->where(array('id' => $value))->delete();
			}
		}

		$arr = array(
			'sum' => $data['sum'],
			'msg' => $data['msg'],
			'price' => $data['price'],
			'user_id' => $user_id,
			'number' => 'ML' . date('Ymd') . str_pad(mt_rand(1, 99999), 6, '0', STR_PAD_LEFT),
			'addtime' => time()
		);
		foreach ($data['goods_id'] as $key => $value) {
			$sell = M('goods')->where(array('goods_id' => $value))->getField('sell');
			$sell += $data['goods_sum'][$key];
			M('goods')->where(array('goods_id' => $value))->save(array('sell' => $sell));
			$arr['goods_id'] .= $value . ',';
		}
		foreach ($data['goods_sum'] as $key => $value) {
			$arr['goods_sum'] .= $value . ',';
		}
		$order_id = M('orders')->add($arr);
		if ($order_id) {
			$result = array('state' => true, 'msg' => '生成订单成功!', 'order_id' => $order_id);
		} else {
			$result = array('state' => false, 'msg' => '生成订单失败!');
		}

		return $result;

	}


	/**
	 * @author Zero
	 * Date 2018-08-30
	 * 获取订单详情
	 */
	public function get_order_detail($order_id)
	{
		$Model = M('orders');
		$data = M('orders')->where(array('order_id' => $order_id))->find();

		return $data;
	}



}
?>