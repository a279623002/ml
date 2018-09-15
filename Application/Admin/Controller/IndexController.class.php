<?php
namespace Admin\Controller;

use Think\Verify;
use Admin\Logic\AdminLogic;

class IndexController extends BaseController
{

	/**
	 * @author Zero
	 * Date 2018-08-15
	 * 后台首页
	 */
	public function index()
	{

		$this->display();
	}

	/**
	 * @author Zero
	 * Date 2018-08-15
	 * 管理员登录
	 */
	public function login()
	{
		try {
			$data = I('post.');
			if (!empty($data)) {
				$verify = new \Think\Verify();
				$AdminLogic = new AdminLogic();
				$code_check = $verify->check($data['code'], $id = '');
				if ($code_check != true) {
					$result = array('state' => false, 'msg' => '验证码错误!');
				} else {
					$result = $AdminLogic->login($data);
					exit(json_encode($result));
				}
				exit(json_encode($result));
			}

		} catch (\Exception $e) {
			$result = array('state' => false, 'msg' => $e->getMessage());
		}
		$this->display();
	}

	/**
	 * @author Zero
	 * Date 2018-08-15
	 * 退出登录
	 */
	public function logout()
	{
		setcookie('admin_id', '', time() - 3600, '/');
		setcookie('account', '', time() - 3600, '/');
		session_unset();
		session_destroy();
		header("location:" . U('Index/login'));
		exit;
	}

	/**
	 * @author Zero
	 * Date 2018-08-15
	 * 验证码
	 */
	public function verify()
	{
		$config = array(
			'fontSize' => 40,
			'length' => 4,
			'imageH' => 60,
			'imageW' => 298,
			'useCurve' => false,
			'useNoise' => false,
			'codeSet' => '123456'
		);
		$Verify = new Verify($config);
		$Verify->entry();
	}
}