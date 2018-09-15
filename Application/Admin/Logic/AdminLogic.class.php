<?php 
namespace Admin\Logic;

use Think\Model\RelationModel;

class AdminLogic extends RelationModel
{

	/**
	 * @author Zero
	 * Date 2018-08-15
	 * 管理员登录验证
	 */
	public function login($data)
	{
		$admin = M('admin')->where(array('account' => $data['account']))->find();
		if (!$admin) return array('state' => false, 'msg' => '管理员账号不存在!');
		if (encrypt($data['password']) != $admin['password'])
			return array('state' => false, 'msg' => '管理员密码不正确!');
		$row = array(
			'admin_id' => $admin['admin_id'],
			'login_time' => time(),
			'login_ip' => $_SERVER['REMOTE_ADDR'],
		);
		if (M('admin')->save($row)) {
			session('admin_id', $admin['admin_id']);
			session('role', $admin['role']);
			setcookie('admin_id', $admin['admin_id'], null, '/');
			setcookie('account', $admin['account'], null, '/');
			return array('state' => true, 'msg' => '登录成功', 'data' => $admin);
		} else {
			return array('state' => false, 'msg' => '系统异常,请重新登录');
		}
	}

	/**
	 * @author Zero
	 * Date 2018-08-15
	 * 取管理员账号
	 */
	public function get_admin_account($admin_id)
	{
		$account = M('admin')->where("admin_id=$admin_id")->field('account,role')->find();
		return $account;
	}

	/**
	 * @author Zero
	 * Date 2018-08-15
	 * 管理员列表
	 */
	public function get_admin_list($where)
	{
		$Model = M('admin');
		$where = array_filter($where);
		$count = $Model->where($where)->count();
		$p = getpage($count, 10);
		$adminList = $Model->where($where)->limit($p->firstRow, $p->listRows)->order('admin_id desc')->select();
		foreach ($adminList as $key => $value) {
			$adminList[$key]['login_time'] = date('Y-m-d H:i:s', $adminList[$key]['login_time']);
			switch ($adminList[$key]['role']) {
				case 1:
					$adminList[$key]['role_name'] = '普通管理员';
					break;
				case 2:
					$adminList[$key]['role_name'] = '题库管理员';
					break;
				case 3:
					$adminList[$key]['role_name'] = '试题员';
					break;
				case 4:
					$adminList[$key]['role_name'] = '进程管理员';
					break;
				default:
					$adminList[$key]['role_name'] = '超级管理员';
					break;
			}
			$adminList[$key]['status_name'] = $adminList[$key]['status'] == '0' ? '正常' : '异常';
		}
		return $adminList;
	}

	/**
	 * @author Zero
	 * Date 2018-08-15
	 * 取管理员详情
	 */
	public function get_admin_info($admin_id)
	{
		$detail = M('admin')->where("admin_id=$admin_id")->find();
		return $detail;
	}

	/**
	 * @author Zero
	 * Date 2018-08-15
	 * 添加管理员
	 */
	public function adminAdd($data)
	{
		$Model = M('admin');
		if ($this->validate_admin($data['account'])) {
			$data['addtime'] = time();
			$data['password'] = encrypt($data['password']);
			if ($Model->add($data)) {
				$result = array('state' => true, 'msg' => '添加成功!');
			} else {
				$result = array('state' => false, 'msg' => '添加失败!');
			}
		} else {
			$result = array('state' => false, 'msg' => '账号已存在!');
		}
		return $result;
	}

	/**
	 * @author Zero
	 * Date 2018-08-15
	 * 修改密码管理员
	 */
	public function adminPasswordEdit($data)
	{
		$Model = M('admin');
		$admin = $this->get_admin_info($data['admin_id']);
		if (!$admin) return array('state' => false, 'msg' => '管理员账号不存在!');
		if (encrypt($data['password']) != $admin['password']) {
			return array('state' => false, 'msg' => '管理员密码不正确!');
		} else {
			$data['password'] = encrypt($data['new_password']);
			if ($Model->save($data)) {
				$result = array('state' => true, 'msg' => '修改密码成功!');
			} else {
				$result = array('state' => false, 'msg' => '修改密码失败!');
			}
			return $result;
		}
	}

	/**
	 * @author Zero
	 * Date 2018-08-15
	 * 删除管理员
	 */
	public function adminDel($admin_id)
	{
		if (!empty($admin_id)) {
			if ($admin_id == 1) {
				$result = array('state' => false, 'msg' => '超级管理员不能删除');
			} else {
				if (M('admin')->delete($admin_id)) {
					$result = array('state' => true);
				} else {
					$result = array('state' => false);
				}
			}
			return $result;
		}
	}

	/**
	 * @author Zero
	 * Date 2018-08-15
	 * 验证管理员账号是否存在
	 */
	public function validate_admin($account)
	{
		$account = M('admin')->where(array('account' => $account))->getField('account');
		if (empty($account)) {
			return true;
		} else {
			return false;
		}
	}
}
?>