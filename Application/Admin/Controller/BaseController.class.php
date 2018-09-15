<?php
namespace Admin\Controller;

use Think\Controller;
use Admin\Logic\AdminLogic;

class BaseController extends Controller
{

	/**
	 * @author Zero
	 * Date 2018-08-15
	 * 验证管理员登录
	 */
	protected $admin_id = 0;
	public $admin = array();
	protected $role = 1;

	public function __construct()
	{
		parent::__construct();
		$AdminLogic = new AdminLogic();
		if (session('?admin_id')) {
			$admin_id = session('admin_id');
			$account = $AdminLogic->get_admin_account($admin_id);
			$this->admin_id = $admin_id;
			$this->role = $account['role'];
		} else {
			$nologin = array(
				'login', 'verify', 'logout',
			);
			if (!in_array(ACTION_NAME, $nologin)) {
				header("location:" . U('Index/login'));
				exit;
			}
		}
		$this->assign('role', $account['role']);
		$this->assign('account', $account['account']);
	}
}