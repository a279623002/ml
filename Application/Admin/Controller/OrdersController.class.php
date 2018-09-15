<?php
namespace Admin\Controller;

use Admin\Logic\OrdersLogic;
use Think\Model;

class OrdersController extends BaseController
{

	/**
	 * @author Zero
	 * Date 2018-08-30
	 * 订单列表
	 */
	public function orderList()
	{
		$where = I('post.') == '' ? 1 : I('post.');
		$OrdersLogic = new OrdersLogic();
		$orderList = $OrdersLogic->get_order_list($where);
		$this->assign('page', $orderList['page']->show());
		$this->assign('list', $orderList['list']);
		$this->display();
	}

	/**
	 * @author Zero
	 * Date 2018-08-30
	 * 订单详情
	 */
	public function orderDetail()
	{
		$order_id = I('get.order_id', '', true);
		$OrdersLogic = new OrdersLogic();
		$data = $OrdersLogic->get_order_detail($order_id);
	
		$this->assign('order', $data['order']);
		$this->assign('user', $data['user']);
		$this->assign('goods', $data['goods']);
		$this->display();
	}
	
	
	//订单删除
	public function orderDel()
	{
		try {
			$order_id = I('post.order_id', '', true);
			$OrdersLogic = new OrdersLogic();
			$result = $OrdersLogic->orderDel($order_id);
			exit(json_encode($result));
		} catch (\Exception $e) {
			$result = array('state' => false, 'msg' => $e->getMessage());
			exit(json_encode($result));
		}
	}
	
	//订单线下支付操作
	public function stateUp()
	{
		try {
			$order_id = I('post.order_id', '', true);
			$OrdersLogic = new OrdersLogic();
			$result = $OrdersLogic->stateUp($order_id);
			exit(json_encode($result));
		} catch (\Exception $e) {
			$result = array('state' => false, 'msg' => $e->getMessage());
			exit(json_encode($result));
		}
	}
}