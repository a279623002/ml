<?php
namespace Home\Controller;

use Think\Controller;
use Home\Logic\OrdersLogic;

class OrdersController extends BaseController
{
	/**
	 * @author Zero
	 * Date 2018-09-10
	 * 订单列表
	 */
	public function ordersList()
	{
		$OrdersLogic = new OrdersLogic();
		$type = I('get.type', '', true);
		$list = $OrdersLogic->get_order_list($type);
		$this->assign('list', $list);
		$this->display();
	}

	/**
	 * @author Zero
	 * Date 2018-09-11
	 * 删除订单
	 */
	public function delOrder()
	{
		$OrdersLogic = new OrdersLogic();
		$order_id = I('post.order_id', '', true);
		$result = $OrdersLogic->del_order($order_id);
		exit(json_encode($result));
	}

	/**
	 * @author Zero
	 * Date 2018-09-15
	 * 订单评论
	 */
	public function remark()
	{
		$OrdersLogic = new OrdersLogic();
		$data = I('post.', '', true);
		$result = $OrdersLogic->remark($data);
		exit(json_encode($result));
	}

	/**
	 * @author Zero
	 * Date 2018-08-30
	 * 订单确认页
	 */
	public function order()
	{
		$OrdersLogic = new OrdersLogic();
		$data = I('post.', '', true);
		//{sum: "4", price: "12", goods_id: ["3"], msg: ""}
		$result = $OrdersLogic->order($data);
		exit(json_encode($result));
	}

	/**
	 * @author Zero
	 * Date 2018-08-30
	 * 商品支付页
	 */
	public function paying()
	{
		$OrdersLogic = new OrdersLogic();
		$order_id = I('get.order_id', '', true);
		if (!empty($order_id)) {
			$detail = $OrdersLogic->get_order_detail($order_id);
			if (empty($detail)) {
				echo "<script>alert('参数错误!')</script>";
				echo "<script>window.location.href='" . U('Home/Index/index') . "'</script>";
			}
			$this->assign('orderid', $order_id);
			$this->assign('detail', $detail);
		} else {
			echo "<script>alert('无记录!')</script>";
			echo "<script>window.location.href='" . U('Home/Index/index') . "'</script>";
		}

		$this->display();
	}

	/**
	 * 微信 公众号jssdk支付
	 */
	public function wexinpay_js()
	{
    // 此处根据实际业务情况生成订单 然后拿着订单去支付
		$out_trade_no = I('get.orderid', '', true);
		if (empty($out_trade_no)) {
			echo "<script>alert('参数错误!');history.go(-1);</sctipt>";
			die;
		}
    // 组合url
		$url = U('Api/Weixinpay/pay', array('out_trade_no' => $out_trade_no));
    // 前往支付
		redirect($url);
	}

	/**
	 * @author Zero
	 * Date 2018-09-20
	 * 微信 公众号jssdk支付回调
	 */
	public function notify()
	{
		$OrdersLogic = new OrdersLogic();
		$order_id = I('get.order_id', '', true);
		$OrdersLogic->notify($order_id);
	}



}