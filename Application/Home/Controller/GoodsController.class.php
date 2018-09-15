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
		$this->display();
	}

	/**
	 * @author Zero
	 * Date 2018-08-22
	 * 商品确认页
	 */
	public function confirm()
	{
		$openid = session('openId');
		$user = M('user')->where(array('openid' => $openid))->find();
		if (empty($user['realname']) || empty($user['mobile'])) {
			echo "<script>alert('请完善个人资料!');window.location.href='" . U('Home/User/editUser') . "'</script>";
			die;
		}

		$GoodsLogic = new GoodsLogic();
		$goods_id = I('post.goods_id', '', true);
		$data = $GoodsLogic->get_goods_detail($goods_id);

		$this->assign('data', $data['data']);
		$this->display();
	}

}