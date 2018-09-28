<?php
namespace Admin\Controller;

use Admin\Logic\UserLogic;
use Admin\Logic\StoreLogic;
use Think\Model;

class UserController extends BaseController
{

	/**
	 * @author Zero
	 * Date 2018-08-16
	 * 用户列表
	 */
	public function userList()
	{
		$UserLogic = new UserLogic();
		$data = I('post.', '', true);
		$userList = $UserLogic->get_user_list($data);
		$this->assign('page', $userList['page']->show());
		$this->assign('list', $userList['list']);
		$this->display();
	}



}