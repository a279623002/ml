<?php
namespace Home\Controller;

use Think\Controller;
use Home\Logic\UserLogic;

class UserController extends BaseController
{

	/**
	 * @author Zero
	 * Date 2018-08-20
	 * 会员中心
	 */
	public function index()
	{
		$openid = session('openId');
		$UserLogic = new UserLogic();
		$user = $UserLogic->get_user_detail($openid);
		$this->assign('user', $user);
		$this->display();
	}

	/**
	 * @author Zero
	 * Date 2018-08-20
	 * 会员账号设置
	 */
	public function editUser()
	{
		$openid = session('openId');
		$UserLogic = new UserLogic();
		$data = I('post.', '', true);
		if (!empty($data)) {
			$result = $UserLogic->user_edit($openid, $data);
			exit(json_encode($result));
		}
		$user = $UserLogic->get_user_detail($openid);
		$this->assign('user', $user);
		$this->display();
	}

	/**
	 * @author Zero
	 * Date 2018-08-22
	 * 购物车
	 */
	public function shopCar()
	{
		$openid = session('openId');
		$UserLogic = new UserLogic();
		$list = $UserLogic->get_shopCar($openid);
		$this->assign('list', $list);
		$this->display();
	}


	/**
	 * @author Zero
	 * Date 2018-08-24
	 * 添加购物车
	 */
	public function shopAdd()
	{

		$openid = session('openId');
		$UserLogic = new UserLogic();
		$user = $UserLogic->get_user_detail($openid);
		$data = I('post.', '', true);
		$data['user_id'] = $user['user_id'];
		$result = $UserLogic->add_shop($data);
		exit(json_encode($result));
	}

	/**
	 * @author Zero
	 * Date 2018-08-24
	 * 删除购物车
	 */
	public function shopDel()
	{
		$UserLogic = new UserLogic();
		$id = I('post.id', '', true);
		$result = $UserLogic->del_shop($id);
		exit(json_encode($result));
	}

	/**
	 * @author Zero
	 * Date 2018-08-29
	 * 购物车ID，购买数量
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
		$UserLogic = new UserLogic();
		$data = I('post.', '', true);
		// (
		// 	[shopids] => Array
		// 		(
		// 			[0] => 4,2
		// 			[1] => 3,2
		// 		)
		// )
		$list = $UserLogic->confirm($data);
		$this->assign('list', $list['list']);
		$this->assign('allnumber', $list['allnumber']);
		$this->assign('money', $list['money']);
		$this->display();
	}




}