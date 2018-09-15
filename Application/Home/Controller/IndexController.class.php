<?php
namespace Home\Controller;

use Think\Controller;
use Home\Logic\GoodsLogic;

class IndexController extends BaseController
{

	/**
	 * @author Zero
	 * Date 2018-08-20
	 * 首页
	 */
    public function index()
    {
		$GoodsLogic = new GoodsLogic();
		$goods1 = $GoodsLogic->get_goods_list(1);
		$goods2 = $GoodsLogic->get_goods_list(2);
		$goods3 = $GoodsLogic->get_goods_list(3);

		$this->assign('goods1', $goods1);
		$this->assign('goods2', $goods2);
		$this->assign('goods3', $goods3);
        $this->display();
	}



}