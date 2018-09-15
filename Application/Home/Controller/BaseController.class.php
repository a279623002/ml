<?php
namespace Home\Controller;

use Think\Controller;

class BaseController extends Controller
{

	/**
	 * @author Zero
	 * Date 2018-08-16
	 * 微信授权登录-1-用户授权-取code码和openId
	 */
	public function __construct()
	{
		parent::__construct();
		header("Content-type: text/html; charset=utf-8");
		$opid = session('openId');
		if (empty($opid)) {
			$appId = 'wxe90433384b5a84f3';
			$uri = urlencode('http://ml.stmingliu.com/index.php/Home/Base/back'); //授权成功返回地址
            //下面$url请求授权登录地址,此处为静默授权，scope可改成snsapi_userinfo，注意此URL不能换行,静默授权只能获取_token 和 openId
			$url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' . $appId . '&redirect_uri=' . $uri . '&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect';
			header('Location:' . $url);
		}
	}

	/**
	 * @author Zero
	 * Date 2018-08-16
	 * 微信授权登录-2-拉取用户信息-用code码和openId换取
	 */
	public function back()
	{
		header("Content-type: text/html; charset=utf-8");
		$appId = 'wxe90433384b5a84f3';
		$appSecret = '755b975dd29fbc1bf9a9a07c42ed9849'; //appsecret,微信公众号基本设置里面找
		$code = $_GET['code']; //接收上面url返回code，5分钟有效期，code直接$_GET['code']接收，vdump($code);die();

        //通过下面url获取access_t和 openid，具体看代码
		$url = 'https://api.weixin.qq.com/sns/oauth2/access_token?appid=' . $appId . '&secret=' . $appSecret . '&code=' . $code . '&grant_type=authorization_code';
		$data = json_decode($this->curl($url));//调取function.php封装的CURL函数
        //存取session
		session('openId', $data->openid);

		$arr = array(
			'access_token' => $data->access_token,
			'openid' => $data->openid,
		);
		//拉取用户信息
		$url_user = 'https://api.weixin.qq.com/sns/userinfo?access_token=' . $arr['access_token'] . '&openid=' . $arr['openid'] . '&lang=zh_CN';
		$data_user = json_decode($this->curl($url_user));

        //添加到数据库
		$wx = M('user');
		$list = M('user')->where("openid='" . $data->openid . "'")->find();
		if (!empty($list)) {
			$wx->nickname = $data_user->nickname;
			$wx->sex = $data_user->sex;
			$wx->country = $data_user->country;
			$wx->province = $data_user->province;
			$wx->city = $data_user->city;
			$wx->headimgurl = $data_user->headimgurl;
			$wx->openid = $data->openid;
			$wx->updatetime = time();
			$wx->where("openid='" . $data->openid . "'")->save();
		} else {
			$wx->nickname = $data_user->nickname;
			$wx->sex = $data_user->sex;
			$wx->country = $data_user->country;
			$wx->province = $data_user->province;
			$wx->city = $data_user->city;
			$wx->headimgurl = $data_user->headimgurl;
			$wx->openid = $data->openid;
			$wx->addtime = time();
			$wx->add();
		}


		header('Location:http://ml.stmingliu.com');


	}

	/**
	 * @author Zero
	 * Date 2018-08-16
	 * 微信授权登录-3-拉取用户信息-用curl爬取信息
	 */
	public function curl($url)
	{
		$curl = curl_init();
		curl_setopt($curl, CURLOPT_URL, $url);
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
		$data = curl_exec($curl);
		curl_close($curl);
		$data = mb_convert_encoding($data, 'UTF-8', 'UTF-8,GBK,GB2312,BIG5');//使用该函数对结果进行转码
		return $data;
	}

}