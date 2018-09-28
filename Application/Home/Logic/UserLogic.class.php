<?php 
namespace Home\Logic;

use Think\Model\RelationModel;

class UserLogic extends RelationModel
{

	/**
	 * @author Zero
	 * Date 2018-08-16
	 * 获取用户信息
	 */
	public function get_user_detail()
	{
		$openid = session('openId');
		$Model = M('user');
		$data = $Model->where(array('openid' => $openid))->find();
		$data['updatetime'] = date('Y-m-d H:i:s', $data['updatetime']);
		return $data;
	}

	/**
	 * @author Zero
	 * Date 2018-08-20
	 * 用户信息修改
	 */
	public function user_edit($data)
	{
		$openid = session('openId');
		$Model = M('user');
		if (empty($data['realname'])) return array('state' => false, 'msg' => '请填写用户名!');
		if (empty($data['mobile'])) return array('state' => false, 'msg' => '请填写手机号!');
		$point = $Model->where(array('openid' => $openid))->getField('point');
		if($point <= 0) $data['point'] = $point + 200;
		if ($Model->where(array('openid' => $openid))->save($data)) {
			$result = array('state' => true, 'msg' => '修改成功!');
		} else {
			$result = array('state' => false, 'msg' => '修改失败');
		}
		return $result;
	}

	/**
	 * @author Zero
	 * Date 2018-08-24
	 * 添加购物车
	 */
	public function add_shop($data)
	{
		$Model = M('user_shopcar');
		if (empty($data['goods_id'])) return array('state' => false, 'msg' => '请选择商品!');
		if (empty($data['sum'])) return array('state' => false, 'msg' => '请选择购买数量!');
		if ($Model->add($data)) {
			$result = array('state' => true, 'msg' => '添加成功!');
		} else {
			$result = array('state' => false, 'msg' => '添加失败');
		}
		return $result;
	}

	/**
	 * @author Zero
	 * Date 2018-08-24
	 * 删除购物车
	 */
	public function del_shop($id)
	{
		$Model = M('user_shopcar');
		if (empty($id)) return array('state' => false, 'msg' => '请选择商品!');
		if ($Model->where(array('id' => $id))->delete()) {
			$result = array('state' => true, 'msg' => '删除成功!');
		} else {
			$result = array('state' => false, 'msg' => '删除失败');
		}
		return $result;
	}

	/**
	 * @author Zero
	 * Date 2018-08-24
	 * 购物车列表
	 */
	public function get_shopCar()
	{
		$openid = session('openId');
		$user_id = M('user')->where(array('openid' => $openid))->getField('user_id');
		$list = M('user_shopcar')->where(array('user_id' => $user_id))->order('id desc')->select();
		foreach ($list as $key => $value) {
			$list[$key]['goods'] = M('goods')->where(array('goods_id' => $list[$key]['goods_id']))->find();
		}

		return $list;
	}

	/**
	 * @author Zero
	 * Date 2018-08-24
	 * 购物车商品确认页
	 */
	public function confirm($data)
	{
		$openid = session('openId');
		$user = M('user')->where(array('openid' => $openid))->find();
		if (empty($user['realname']) || empty($user['mobile'])) {
			echo "<script>alert('请完善个人资料!');window.location.href='" . U('Home/User/editUser') . "'</script>";
			die;
		}
		foreach ($data['shopids'] as $key => $value) {
			$arr[$key] = explode(',', $value);
		}
		$allnumber = 0;
		$money = 0;
		foreach ($arr as $key => $value) {
			// $arr[$key][0] 购物车ID
			// $arr[$key][1] 购物数量

			$goods_id = M('user_shopcar')->where(array('id' => $arr[$key][0]))->getField('goods_id');
			$goods = M('goods')->where(array('goods_id' => $goods_id))->find();
			$goods['sum'] = $arr[$key][1];
			$goods['shopcar_id'] = $arr[$key][0];
			$list[$key] = $goods;
			$allnumber += $arr[$key][1];
			$money += $goods['price'] * $arr[$key][1];
		}

		// (
		// 	[0] => Array
		// 		(
		// 			[goods_id] => 3
		// 			[image] => 5b7a602715581.jpg
		// 			[name] => 3
		// 			[price] => 3.00
		// 			[sort] => 3
		// 			[detail] => 5b7a6027158de.jpg
		// 			[sell] => 0
		// 			[addtime] => 1534746663
		// 			[status] => 3
		// 			[sum] => 2
		// 			[shopcar_id] => 4
		// 		)
		// 	...
		// )

		return array('list' => $list, 'allnumber' => $allnumber, 'money' => $money);
	}

	/**
	 * @author Zero
	 * Date 2018-09-15
	 * 获取用户评论列表
	 */
	public function get_remark_list()
	{
		$openid = session('openId');
		$user_id = M('user')->where(array('openid' => $openid))->getField('user_id');
		$list = M('user_remark')->where(array('user_id' => $user_id))->select();
		foreach ($list as $key => $value) {
			//评价时间
			$list[$key]['addtime'] = date('Y-m-d H:i:s', $list[$key]['addtime']);
			//评论商品
			$list[$key]['goods'] = M('goods')->where(array('goods_id'=>$list[$key]['goods_id']))->find();
		}
		return $list;
	}

	
	/**
	 * @author Zero
	 * Date 2018-09-15
	 * 删除评论
	 */
	public function del_remark($remark_id)
	{
		$Model = M('user_remark');
		if (empty($remark_id)) return array('state' => false, 'msg' => '请选择评论!');
		if ($Model->where(array('remark_id' => $remark_id))->delete()) {
			$result = array('state' => true, 'msg' => '删除成功!');
		} else {
			$result = array('state' => false, 'msg' => '删除失败');
		}
		return $result;
	}

}
?>