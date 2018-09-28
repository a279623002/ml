<?php
namespace Api\Controller;

use Think\Controller;
/**
 * @author Zero AND 白俊遥
 * Date 2018-09-13
 * 微信支付
 */
class WeixinpayController extends Controller
{

    /**
     * notify_url接收页面
     */
    public function notify()
    {
        // 导入微信支付sdk
        Vendor('Weixinpay.Weixinpay');
        $wxpay = new \Weixinpay();
        $result = $wxpay->notify();
        if ($result) {
            // 验证成功 修改数据库的订单状态等 $result['out_trade_no']为订单号
            if (M('orders')->where(array('order_id' => $result['out_trade_no']))->save(array('status' => 2))) {
                echo "<script>alert('支付成功!');window.location.href='" . U('Home/Orders/ordersList') . "'</script>";
            } else {
                echo "<script>alert('支付失败，请联系客服!');window.location.href='" . U('Home/User/index') . "'</script>";
            }
        }

    }

    /**
     * 公众号支付 必须以get形式传递 out_trade_no 参数
     * 示例请看 /Application/Home/Controller/IndexController.class.php
     * 中的weixinpay_js方法
     */
    public function pay()
    {
        // 导入微信支付sdk
        Vendor('Weixinpay.Weixinpay');
        $wxpay = new \Weixinpay();
        // 获取jssdk需要用到的数据
        $data = $wxpay->getParameters();
        // 将数据分配到前台页面
        $assign = array(
            'data' => json_encode($data)
        );
        $order_id = I('get.state');
        $this->assign('order_id', $order_id);
        $this->assign($assign);
        $this->display();
    }

}