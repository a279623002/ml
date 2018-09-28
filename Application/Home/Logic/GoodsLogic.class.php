<?php 
namespace Home\Logic;

use Think\Model\RelationModel;

class GoodsLogic extends RelationModel
{

	/**
	 * @author Zero
	 * Date 2018-08-20
	 * 商品列表
	 */
	public function get_goods_list($status)
	{
		$Model = M('goods');
		$data = $Model->where(array('status' => $status))->select();
		return $data;
	}

	/**
	 * @author Zero
	 * Date 2018-08-22
	 * 商品详情
	 */
	public function get_goods_detail($goods_id)
	{

		$openid = session('openId');
		$user = M('user')->where(array('openid' => $openid))->find();
		if (empty($user['realname']) || empty($user['mobile'])) {
			echo "<script>alert('请完善个人资料!');window.location.href='" . U('Home/User/editUser') . "'</script>";
			die;
		}

		$Model = M('goods');
		$data = M('goods')->where(array('goods_id' => $goods_id))->find();
		$slider = M('goods_slider')->where(array('goods_id' => $goods_id))->select();
		$data['detail'] = htmlspecialchars_decode($data['detail']);
		$remark = M('user_remark')->where(array('goods_id' => $goods_id))->select();
		foreach ($remark as $key => $value) {
			$remark[$key]['addtime'] = date('Y-m-d H:i:s', $remark[$key]['addtime']);
			$remark[$key]['user'] = M('user')->where(array('user_id' => $remark[$key]['user_id']))->find();
		}
		return array('data' => $data, 'slider' => $slider, 'remark' => $remark);
	}



}
?>