<?php 
namespace Admin\Logic;

use Think\Model\RelationModel;

class OrdersLogic extends RelationModel
{

	/**
	 * @author Zero
	 * Date 2018-08-30
	 * 订单列表
	 */
	public function get_order_list($where)
	{
		$Model = M('orders');
		if (!empty($where['number'])) {
			$map['number'] = array('like', '%'.$where['number'].'%');
		}
		if (!empty($where['status'])) {
			$map['status'] = $where['status'];
		}
		$map = array_filter($map);
		$count = $Model->where($map)->count();
		$p = getpage($count, 15);
		$order_list = $Model->where($map)->limit($p->firstRow, $p->listRows)->select();
		foreach ($order_list as $key => $value) {
			$order_list[$key]['addtime'] = date('Y-m-d H:i:s', $order_list[$key]['addtime']);
			$order_list[$key]['realname'] = M('user')->where(array('user_id' => $order_list[$key]['user_id']))->getField('realname');
			$order_list[$key]['sex'] = M('user')->where(array('user_id' => $order_list[$key]['user_id']))->getField('sex');
			$order_list[$key]['mobile'] = M('user')->where(array('user_id' => $order_list[$key]['user_id']))->getField('mobile');
		}
		return array('list' => $order_list, 'page' => $p);
	}


	/**
	 * @author Zero
	 * Date 2018-08-30
	 * 订单详情
	 */
	public function get_order_detail($order_id)
	{
		$order = M('orders')->where(array('order_id' => $order_id))->find();
		$order['addtime'] = date('Y-m-d H:i:s', $order['addtime']);
		$user = M('user')->where(array('user_id' => $order['user_id']))->find();

		$arr = array_filter(explode(',', $order['goods_id']));
		$goods_sum = array_filter(explode(',', $order['goods_sum']));
		foreach ($arr as $k => $v) {
			$goods[$k] = M('goods')->where(array('goods_id' => $v))->find();
			$goods[$k]['sum'] = $goods_sum[$k];
		}
	
		return array('order'=>$order, 'goods'=>$goods, 'user'=>$user);

	}
	
	//更新订单备注
	public function orderRemark($order_id, $remark)
	{
		if (M('orders')->save(array('order_id' => $order_id, 'remark' => $remark))) {
			return array('state' => true);
		} else {
			return array('state' => false);
		}
	}
	
	//订单删除
	public function orderDel($order_id)
	{
		if (M('orders')->delete($order_id)) {
			return array('state' => true);
		} else {
			return array('state' => false);
		}
	}
	
	//订单线下支付操作
	public function stateUp($order_id)
	{
		if (!empty($order_id)) {
			if (M('orders')->where(array('order_id' => $order_id))->save(array('pay_state' => 2))) {
				return array('state' => true);
			} else {
				return array('state' => false);
			}
		}
	}
}