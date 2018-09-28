<?php 
namespace Admin\Logic;

use Think\Model\RelationModel;

class UserLogic extends RelationModel
{

	/**
	 * @author Zero
	 * Date 2018-08-16
	 * 取用户列表
	 */
	public function get_user_list($data)
	{
		$Model = M('user');
		if (!empty($data['realname'])) $where['realname'] = array('like', '%'.$data['realname'].'%');
		if (!empty($data['mobile'])) $where['mobile'] = array('like', '%'.$data['mobile'].'%');
		!empty($where['realname']) || !empty($where['mobile']) ? $where['_logic'] = 'or' : $where = array();
		$order = $data['sort'] == 1 ? 'addtime desc' : 'updatetime desc';
		$where = array_filter($where);
		$count = $Model->where($where)->count();
		$p = getpage($count, 15);
		$user_list = $Model->where($where)->limit($p->firstRow, $p->listRows)->order($order)->select();
		foreach ($user_list as $key => $value) {
			$user_list[$key]['updatetime'] = date('Y-m-d H:i:s', $user_list[$key]['updatetime']);
			$user_list[$key]['addtime'] = date('Y-m-d H:i:s', $user_list[$key]['addtime']);
		}
		return array('list' => $user_list, 'page' => $p);
	}

}
?>