<?php
namespace Admin\Controller;
use Admin\Logic\AdminLogic;
class AdminController extends BaseController {
	
	/**
	 * @author Zero
	 * Date 2018-08-15
	 * 管理员列表
	 */
	public function adminList() {
		$AdminLogic = new AdminLogic();
		$where = I('post.') == '' ? 1 : I('post.');
		$adminList = $AdminLogic->get_admin_list($where);
		
		$this->assign('list', $adminList);
		$this->display();
	}
	
	/**
	 * @author Zero
	 * Date 2018-08-15
	 * 管理员添加
	 */
	public function adminAdd(){
		try {
			$AdminLogic = new AdminLogic();
			$data = I('post.');
			if (!empty($data)){
				$result = $AdminLogic->adminAdd($data);
				exit(json_encode($result));
			}
		} catch (\Exception $e) {
			$result = array('state'=>false,'msg'=>$e->getMessage());
			exit(json_encode($result));
		}
		$this->display();
	}
	
	/**
	 * @author Zero
	 * Date 2018-08-15
	 * 管理员修改密码
	 */
	public function adminPasswordEdit() {
		try {
			$AdminLogic = new AdminLogic();
			$admin_id = I('get.admin_id');
			if (!empty($admin_id)){
				$detail = $AdminLogic->get_admin_info($admin_id);
				if ($detail['role'] == 0){
					echo "<script>alert('超级管理员不能修改密码');window.location.href='/index.php/Admin/Admin/adminList'</script>";
				}
			}
		    $data = I('post.');
		    if (!empty($data)){
		    	$result = $AdminLogic->adminPasswordEdit($data);
		    	exit(json_encode($result));
		    }
		} catch (\Exception $e) {
			$result = array('state'=>false,'msg'=>$e->getMessage());
			exit(json_encode($result));
		}
		$this->assign('admin_id', $admin_id);
		$this->display();
	}
	
	/**
	 * @author Zero
	 * Date 2018-08-15
	 * 管理员删除
	 */
	public function adminDel() {
		$admin_id = I('post.admin_id');
		$AdminLogic = new AdminLogic();
		$result = $AdminLogic->adminDel($admin_id);
		exit(json_encode($result));
	}

}