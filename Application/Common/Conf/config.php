<?php
return array(
	'DB_TYPE'               =>  'mysql',
    'DB_HOST'               =>  '127.0.0.1', // 服务器地址
    'DB_NAME'               =>  'ml',          // 数据库名
    'DB_USER'               =>  'root',      // 用户名
    'DB_PWD'                =>  'ML279623002',          // 密码
    'DB_PORT'               =>  '3306',        // 端口
    'DB_PREFIX'             =>  'ml_',    // 数据库表前缀
    'DB_PARAMS'          	=>  array(), // 数据库连接参数
    'DB_DEBUG'  			=>  TRUE, // 数据库调试模式 开启后可以记录SQL日志
    'DB_FIELDS_CACHE'       =>  true,        // 启用字段缓存
    'DB_CHARSET'            =>  'utf8',      // 数据库编码默认采用utf8
    'DB_DEPLOY_TYPE'        =>  0, // 数据库部署方式:0 集中式(单一服务器),1 分布式(主从服务器)
    'DB_RW_SEPARATE'        =>  false,       // 数据库读写是否分离 主从式有效
    'DB_MASTER_NUM'         =>  1, // 读写分离后 主服务器数量
    'DB_SLAVE_NO'           =>  '', // 指定从服务器序号

    'WEIXINPAY_CONFIG'       => array(
        'APPID'              => 'wxe90433384b5a84f3', // 微信支付APPID
        'MCHID'              => '1277421301', // 微信支付MCHID 商户收款账号
        'KEY'                => 'stmingliuweixinplay8319765821375', // 微信支付KEY
        'APPSECRET'          => '755b975dd29fbc1bf9a9a07c42ed9849',  //公众帐号secert
        'NOTIFY_URL'         => 'http://ml.stmingliu.com/Api/WeixPay/notify/order_number/', // 接收支付状态的连接  改成自己的域名
    ),
);