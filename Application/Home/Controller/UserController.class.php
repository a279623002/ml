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
		$UserLogic = new UserLogic();
		$user = $UserLogic->get_user_detail();
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
		$UserLogic = new UserLogic();
		$data = I('post.', '', true);
		if (!empty($data)) {
			$result = $UserLogic->user_edit($data);
			exit(json_encode($result));
		}
		$user = $UserLogic->get_user_detail();
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
		$UserLogic = new UserLogic();
		$list = $UserLogic->get_shopCar();
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
		$UserLogic = new UserLogic();
		$user = $UserLogic->get_user_detail();
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

	/**
	 * @author Zero
	 * Date 2018-09/15
	 * 用户评价
	 */
	public function remark()
	{
		$UserLogic = new UserLogic();
		$list = $UserLogic->get_remark_list();
		$this->assign('list', $list);
		$this->display();
	}

	/**
	 * @author Zero
	 * Date 2018-09-15
	 * 删除评论
	 */
	public function delRemark()
	{
		$UserLogic = new UserLogic();
		$remark_id = I('post.remark_id', '', true);
		$result = $UserLogic->del_remark($remark_id);
		exit(json_encode($result));
	}

}