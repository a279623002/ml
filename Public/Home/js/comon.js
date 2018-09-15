/*
* @Author: itwo
* @Date:   2016-05-16 11:43:42
* @Last Modified by:   itwo
* @Last Modified time: 2016-12-21 10:00:29
 
var header = [
  '<div class="yetou clearfloat">',
    '<div class="yetou-div1" id="yetou-div1">',
        '<img src="/static/images/menu.png"><em></em>',
    '</div>',
    '<div class="yetou-div2"><img src="/static/images/logo.png"></div>',
    '<div class="yetou-div3">',
    '<a href="tel:0754-87268339">',
    '<img src="/static/images/tel.png">',
    '</a>',
    '</div>',
  '</div>',
  '<div class="nav" id="nav">',
  '  <div class="nav-name"><span>网站导航</span><div class="nav-arrows" id="nav-arrows">',
  '<img src="/static/images/closepopmenu.png" class="wP"></div>',
  '  </div>',
  '  <div class="nav-list">',
  '    <div class="nav-listdiv">',
  '      <ul class="nav-ul">',
  '        <li>全韩整形</li>',
  '        <li>医学美肤</li>',
  '        <li>微整注射</li>',
  '        <li>形体雕塑</li>',
  '        <li>抗衰逆龄</li>',
  '        <li>口腔美容</li>',
  '        <li>修整鼻部</li>',
  '        <li>眼部整形</li>',
  '        <li>紧肤除皱</li>',
  '        <li>面部雕塑</li>',
  '        <li>胸部整形</li>',
  '        <li>医学纹绣</li>',
  '        <li>医师团队</li>',
  '        <li>来院线路</li>',
  '        <li>关于名流</li>',
  '      </ul>',
  '    </div>  ',  
  '    <dl class="nav-project nav-project0" style="display: block;">',
  '      <dt class="nav-project-title">全韩整形</dt>',
  '      <dd><a href="/ss/ztlx/">自体脂肪隆胸</a></dd>',
  '      <dd><a href="/ss/lx/">内窥镜动感隆胸</a></dd>',
  '      <dd><a href="/ss/jtlx/">假体隆胸</a></dd>',        
  '      <dd><a href="/ss/lb/">3D立体隆鼻</a></dd>',
  '      <dd><a href="/ss/syp/">名流韩式双眼皮</a></dd>',
  '      <dd><a href="/ss/glx/">面部精致轮廓成型术</a></dd>',
  '      <dd><a href="/ss/jtlb/">精雕假体隆鼻</a></dd>',
  '      <dd><a href="/ss/fbxz/">名流水动力吸脂</a></dd>',
  '      <dd><a href="/ss/zfft/">丰臀</a></dd>',
  '      <dd><a href="/ss/3dty/">回春减龄术</a></dd>',
  '    </dl>',
  '    <dl class="nav-project nav-project1">',
  '      <dt class="nav-project-title">医学美肤</dt>',
  '      <dd><a href="/ss/sgz/">水光针嫩肤</a></dd> ',
  '      <dd><a href="/ss/qb/">雀斑</a></dd>',
  '      <dd><a href="/ss/hhb/">黄褐斑</a></dd>',
  '      <dd><a href="/ss/rsb/">妊娠斑</a></dd>',
  '      <dd><a href="/ss/lnb/">老年斑</a></dd>',
  '      <dd><a href="/ss/zfcz/">除皱</a></dd>',
  '      <dd><a href="/ss/shaiban/">晒斑</a></dd>',
  '      <dd><a href="/ss/dd/">痘痘</a></dd>',
  '      <dd><a href="/ss/dy/">痘印</a></dd>',
  '      <dd><a href="/ss/tm/">脱毛</a></dd>',
  '      <dd><a href="/ss/mkcd/">毛孔粗大</a></dd>',
  '      <dd><a href="/ss/pfmb/">皮肤美白</a></dd>',
  '      <dd><a href="/ss/qhxs/">祛红血丝</a></dd>',
  '      <dd><a href="/ss/pf_hyq/">黑眼圈</a></dd>',
  '      <dd><a href="/ss/bh/">疤痕</a></dd>',
  '      <dd><a href="/ss/tj/">胎记</a></dd>',
  '      <dd><a href="/ss/mbcz/">面部除皱</a></dd>',
  '      <dd><a href="/ss/jw/">颈纹</a></dd>',
  '      <dd><a href="/ss/fpw/">肥胖纹</a></dd>',
  '      <dd><a href="/ss/rsw/">妊娠纹</a></dd>',
  '      <dd><a href="/ss/qyc/">祛腋臭</a></dd>',
  '    </dl>',
  '    <dl class="nav-project nav-project2">',
  '      <dt class="nav-project-title">微整注射</dt>',
  '      <dd><a href="/ss/bns/">玻尿酸</a></dd>',
  '      <dd><a href="/ss/zsst/">注射瘦腿</a></dd>',
  '      <dd><a href="/ss/wz_zslb/">注射隆鼻</a></dd>',
  '      <dd><a href="/ss/wz_zslb/">泪沟填充</a></dd>',
  '      <dd><a href="/ss/wz_fxb/">丰下巴</a></dd>',
  '      <dd><a href="/ss/qyww/">祛鱼尾纹</a></dd>',
  '      <dd><a href="/ss/qflw/">祛法令纹</a></dd>',
  '      <dd><a href="/ss/wz_fmj/">丰面颊</a></dd>',
  '      <dd><a href="/ss/wz_fet/">丰额头</a></dd>',
  '      <dd><a href="/ss/wz_ftyx/">丰太阳穴</a></dd>',
  '      <dd><a href="/ss/wz_fpgj/">丰苹果肌</a></dd>',
  '      <dd><a href="/ss/fc/">丰唇</a></dd>',
  '      <dd><a href="/ss/qttw/">祛抬头纹</a></dd>',
  '      <dd><a href="/ss/qmjw/">祛眉间纹</a></dd>',
  '      <dd><a href="/ss/qzjw/">祛嘴角纹</a></dd>',
  '      <dd><a href="/ss/qjw/">祛颈纹</a></dd>',
  '      <dd><a href="/ss/botox/">BOTOX</a></dd>',
  '      <dd><a href="/ss/wz_zssl/">注射瘦脸</a></dd>',
  '      <dd><a href="/ss/jydb/">胶原蛋白</a></dd>',
  '      <dd><a href="/ss/wz_fec/">丰耳垂</a></dd>',
  '      <dd><a href="/ss/wz_zslx/">注射隆胸</a></dd>',
  '    </dl>',
  '    <dl class="nav-project nav-project3">',
  '      <dt class="nav-project-title">抽脂吸肪</dt>',
  '      <dd><a href="/ss/sbxz/">手臂吸脂</a></dd>',
  '      <dd><a href="/ss/fbxz/">腰腹吸脂</a></dd>',
  '      <dd><a href="/ss/dtxz/">大腿吸脂</a></dd>',
  '      <dd><a href="/ss/xtxz/">小腿吸脂</a></dd>',
  '      <dd><a href="/ss/tbxz/">臀部吸脂</a></dd>',
        '<dd><a href="/ss/zfmbxz/">面部吸脂</a></dd>',
        '<dd><a href="/ss/zfsxb/">双下巴</a></dd>',
        '<dd><a href="/ss/jgrz/">激光溶脂</a></dd>',
        '<dd><a href="/ss/qsxz/">全身吸脂</a></dd>',
        '<dd><a href="/ss/zfft/">脂肪丰臀</a></dd>',
      '</dl>',
      '<dl class="nav-project nav-project4">',
        '<dt class="nav-project-title">抗衰逆龄</dt>',
        '<dd><a href="/ss/qyd/">灵韵祛眼袋</a></dd> ',
        '<dd><a href="/ss/ks_mbcz/">溶脂紧肤术</a></dd>',
        '<dd><a href="/ss/smzx/">私密处整形</a></dd>',
        '<dd><a href="/ss/yczx/">阴唇整形</a></dd>',
        '<dd><a href="/ss/ydsc/">阴道松弛</a></dd>',
        '<dd><a href="/ss/ydfd/">阴蒂肥大</a></dd>',
        '<dd><a href="/ss/cnmxf/">处女膜修复</a></dd>',
      '</dl>',
      '<dl class="nav-project nav-project5">',
        '<dt class="nav-project-title">口腔美容</dt>',
        '<dd><a href="/ss/ycjz/">牙齿矫正</a></dd> ',
        '<dd><a href="/ss/yxjz/">隐形矫正</a></dd>',
        '<dd><a href="/ss/yczz/">牙齿种植</a></dd>',
        '<dd><a href="/ss/kcy/">烤瓷牙</a></dd>',
        '<dd><a href="/ss/mrg/">美容冠</a></dd>',
        '<dd><a href="/ss/ycmb/">牙齿美白</a></dd>',
        '<dd><a href="/ss/lgmb/">冷光美白</a></dd>',
        '<dd><a href="/zt/yctm/index2.html">牙齿贴面</a></dd>',
        '<dd><a href="/ss/yzy/index1.html">牙周治疗</a></dd>',
        '<dd><a href="/ss/buya/index1.html">补牙</a></dd>',
        '<dd><a href="/ss/baya/index1.html">拔牙</a></dd>',
        '<dd><a href="/ss/ggzl/index.html">根管治疗</a></dd>',
      '</dl>',
     ' <dl class="nav-project nav-project6">',
        '<dt class="nav-project-title">修整鼻部</dt>',
        '<dd><a href="/ss/lb/">隆鼻</a></dd>' ,
        '<dd><a href="/ss/jtlb/">假体隆鼻</a></dd>',
        '<dd><a href="/ss/rglb/">软骨隆鼻</a></dd>',
        '<dd><a href="/ss/zslb/">注射隆鼻</a></dd>',
        '<dd><a href="/ss/lbxf/">隆鼻修复</a></dd>',
        '<dd><a href="/ss/bjzx/">鼻尖整形</a></dd>',
        '<dd><a href="/ss/btzx/">鼻头整形</a></dd>',
        '<dd><a href="/ss/ctb/">朝天鼻</a></dd>',
        '<dd><a href="/ss/wbjz/">歪鼻矫正</a></dd>',
        '<dd><a href="/ss/bysx/">鼻翼缩小</a></dd>',
      '</dl>',
      '<dl class="nav-project nav-project7">',
        '<dt class="nav-project-title">眼部整形</dt>',
        '<dd><a href="/ss/syp/">双眼皮</a></dd> ',
        '<dd><a href="/ss/qyd/">祛眼袋</a></dd>',
        '<dd><a href="/ss/kyj/">开眼角</a></dd>',
        '<dd><a href="/ss/lgtc/">泪沟填充</a></dd>',
        '<dd><a href="/ss/sjxc/">上睑下垂</a></dd>',
        '<dd><a href="/ss/ybxf/">眼部修复</a></dd>',
        '<dd><a href="/ss/ybxz/">眼部吸脂</a></dd>',
        '<dd><a href="/ss/yww/">鱼尾纹</a></dd>',
        '<dd><a href="/ss/hyq/">黑眼圈</a></dd>', 
        '<dd><a href="/ss/yckme/">YC卡米尔综合眼周定格术</a></dd>',     
      '</dl>',
      '<dl class="nav-project nav-project8">',
        '<dt class="nav-project-title">紧肤除皱</dt>',
        '<dd><a href="/ss/ks_mbcz/">面部除皱</a></dd>',
        '<dd><a href="/ss/mjbsc/">面颈部松弛</a></dd>',
        '<dd><a href="/ss/ttw/">抬头纹</a></dd>',
        '<dd><a href="/ss/jgcz/">激光除皱</a></dd>',
        '<dd><a href="/ss/lpss/">拉皮手术</a></dd>',
        '<dd><a href="/ss/mjw/">眉间纹</a></dd>',
        '<dd><a href="/ss/flw/">法令纹</a></dd>',
        '<dd><a href="/ss/ks_yww/">鱼尾纹</a></dd>',
        '<dd><a href="/ss/ks_jw/">颈纹</a></dd>',
        '<dd><a href="/ss/zjw/">嘴角纹</a></dd>',
        '<dd><a href="/ss/ks_qyd/">祛眼袋</a></dd>',
        '<dd><a href="/ss/3dty/">回春减龄术</a></dd>',
        '<dd><a href="/ss/yblp/">超声刀</a></dd>',
        '<dd><a href="/ss/rmj/">塑美极</a></dd>',
      '</dl>',
      '<dl class="nav-project nav-project9">',
        '<dt class="nav-project-title">面部雕塑</dt>',
        '<dd><a href="/ss/glx/">改脸型</a></dd>',
        '<dd><a href="/ss/qgzx/">颧骨整形</a></dd>',
        '<dd><a href="/ss/xhj/">下颌角整形</a></dd>',
        '<dd><a href="/ss/xbzx/">下巴整形</a></dd>',
        '<dd><a href="/ss/mb_sxb/">双下巴</a></dd>',
        '<dd><a href="/ss/cbzx/">唇部整形</a></dd>',
        '<dd><a href="/ss/zssl/">注射瘦脸</a></dd>',
        '<dd><a href="/ss/mb_fet/">丰额头</a></dd>',
        '<dd><a href="/ss/mb_ftyx/">丰太阳穴</a></dd>',
        '<dd><a href="/ss/mb_fpgj/">丰苹果肌</a></dd>',
        '<dd><a href="/ss/mbxz/">面部吸脂</a></dd>',
        '<dd><a href="/ss/mbtc/">面部填充</a></dd>',
      '</dl>',
      '<dl class="nav-project nav-project10">',
        '<dt class="nav-project-title">胸部整形</dt>',
        '<dd><a href="/ss/lx/">隆胸</a></dd>',
        '<dd><a href="/ss/jtlx/">假体隆胸</a></dd>',
        '<dd><a href="/ss/ztlx/">自体隆胸</a></dd>',
        '<dd><a href="/ss/zslx/">注射隆胸</a></dd>',
        '<dd><a href="/ss/jrsx/">巨乳缩小</a></dd>',
        '<dd><a href="/ss/lxxf/">隆胸修复</a></dd>',
        '<dd><a href="/ss/fr/">副乳(胳膊窝)</a></dd>',
        '<dd><a href="/ss/rfxc/">乳房下垂</a></dd>',
        '<dd><a href="/ss/rtnx/">乳头内陷</a></dd>',
        '<dd><a href="/ss/ryph/">乳晕漂红</a></dd>',
        '<dd><a href="/ss/rtsx/">乳头缩小</a></dd>',
        '<dd><a href="/ss/rysx/">乳晕缩小</a></dd>',
      '</dl>',
      '<dl class="nav-project nav-project11">',
        '<dt class="nav-project-title">医学纹绣</dt>',
        '<dd><a href="/ss/xm/">绣眉</a></dd>',
        '<dd><a href="/ss/wyx/">纹眼线</a></dd>',
        '<dd><a href="/ss/pc/">漂唇</a></dd>',
        '<dd><a href="/ss/pf_ryph/">乳晕漂红</a></dd>',
        '<dd><a href="/ss/wenmei/">纹眉</a></dd>',
      '</dl>',
     ' <dl class="nav-project nav-project12">',
        '<dt class="nav-project-title">名流医师团队</dt>',
        '<dd><a href="/zjtd/mllj/">李晶</a></dd>' ,
        '<dd><a href="javascript:;">李增贵</a></dd>',
        '<dd><a href="javascript:;">麻伟达</a></dd>',
        '<dd><a href="/zjtd/mlzsl/">曾少玲</a></dd>',
        '<dd><a href="javascript:;">林虹虹</a></dd>',
        '<dd><a href="javascript:;">陆雪君</a></dd>',
        '<dd><a href="javascript:;">张燕香</a></dd>',
      '</dl>',
      '<dl class="nav-project nav-project13">',
        '<dt class="nav-project-title">来院线路</dt>',
        '<dd><a href="//j.map.baidu.com/nm7_v">来院线路</a></dd>' ,
      '</dl>',
     ' <dl class="nav-project nav-project14">',
        '<dt class="nav-project-title">关于名流</dt>',
        '<dd><a href="/pinpai/about.html">关于名流</a></dd>',
        '<dd><a href="/pinpai/environment.html">院内环境</a></dd>' ,
      '</dl>',
  '  </div>',
 ' </div>',
  ].join("\r\n");
var footer = [
  '  <div class="wP">',
  '    <a href="javascript:;"><img src="/static/images/zj1.jpg" class="wP"></a>',
  '  </div>',
  '  <div class="wP" style="background-color:#2b292a;">',
  '    <img src="/static/images/position2.jpg" class="wP">',
  '    <div class="footer-div wP clearfloat">',
  '      <div class="footer-div1 mRight">',
  '        <img src="/static/images/qrcode_for_st_fwh.jpg" class="wP">',
  '        <p>名流整形</p>',
  '      </div>',
  '      <div class="footer-div1">',
  '        <img src="/static/images/qrcode_for_st_dyh.jpg" class="wP">',
  '        <p>名流美牙</p>',
  '      </div>',
  '    </div>',
  '     <div class="wP filing">',
  '        <p>汕头市龙湖区名流医疗美容门诊部</p>',
  '        <p>备案号：粤ICP备13071991号</p>',
  '        <p>(粤) 医广「2017」第03-09-235号</p>', 
  '    </div>',
  '  </div>',
  '  <div class="wP yewei clearfloat">',
  '    <ul>',
  '        <li class="yeweili1">',
  '          <a href="/index.html" class="yewei-a1">',
  '            <p class="am-icon-home am-icon-sm"></p>',
  '            <p class="yewei-a1-p">名流首页</p>',
  '          </a>',
  '        </li>',
  '        <li class="yeweili2">',
  '          <a href="tel:0754-87268339" class="yewei-a2">',
  '            <p class="am-icon-phone am-icon-sm">&nbsp;拨打电话</p>',
  '          </a>',
  '        </li>',
  '        <li class="yeweili3">',
  '          <a href="javascript:void(0);" rel="nofollow" onclick="openZoosUrl();LR_HideInvite();return false;" class="yewei-a3">',
  '            <p class="am-icon-comments-o am-icon-sm">&nbsp;悄悄提问</p>',
  '          </a>',
  '        </li>',
  '        <li class="yeweili4">',
  '          <a href="/zt/staging/index.html" class="yewei-a4">',
  '            <p class="am-icon-credit-card am-icon-sm"></p>',
  '            <p class="yewei-a4-p">申请分期</p>',
  '          </a>',
  '        </li>',
  '      </ul>',
  '    </div>',
].join("\r\n");
/* 回顶start */
//document.writeln("<div class=\"goTop\" style=\"bottom:1.2rem; display: none; position: fixed; right: 0; width:40px;\"><img src=\"/static/images/top.png\" class=\"my-img-fullscreen my-block\" id=\"ScrollToTop\" style=\"display:block;width:100%;\"></div>")
document.writeln("<div style=\"display:none;\" id=\"consult\"><a href=\"javascript:void(0);\" rel=\"nofollow\" onclick=\"openZoosUrl();LR_HideInvite();return false;\" class=\"consult-a\">  class=\"wP\"></a></div>")
/*// 回顶淡入淡出
function scrollUp(){
 if($(".goTop").offset().top>=800){
    $(".goTop").fadeIn(600,function(){
        $("#consult").fadeIn(500)
    });
    }else {
     $(".goTop").fadeOut(600,function(){});
      }
}
//setInterval("scrollUp()",1000);
// 回顶js
$("#ScrollToTop").click(function() {
    $("html, body").animate({
        "scroll-top": 0
    });
});

/* 回顶end */

/*顶部列表 
$(function(){
    $('#yetou-div1').mousedown(function(){
        $('#nav').css({'willchange':'transform'});
    })
    $('#nav-arrows').mousedown(function(){
        $('#nav').css({'willchange':'auto'});
    })

    $('#yetou-div1').click(function(){
      $('#nav').addClass('app-menu');
      $('body').addClass('over')
    })
    $('#nav-arrows').click(function(){
      $('#nav').removeClass('app-menu');
      $('body').removeClass('over');
    })
    $('.nav-ul li').click(function(){
      $(this).css({'background-color':'#3F4754'}).siblings().css({'background-color':'#2E3642'})
      var liItem = $(this).index();
      $('.nav-project'+liItem).css({'display':'block'}).siblings('dl').css({'display':'none'})
    })
})

/*自定义商务通 start*/
document.writeln("<style type=\"text/css\">");
 document.writeln("#LRdiv0{display:none !important;}");
 document.writeln("</style>");
// document.writeln(".swtCenter {position:relative; width:279px;height:271px; background:#FFF url(/static/images/april.jpg) no-repeat center top;position:fixed;left:50%;top:50%;z-index:200;margin-left:-139px;margin-top:-130px;-moz-border-radius:15px;-webkit-border-radius:15px;border-radius:15px;-moz-box-shadow:0 0 20px rgba(10,2,4,0.75);-webkit-box-shadow:0 0 20px rgba(10,2,4,0.75);box-shadow:0 0 20px rgba(10,2,4,0.75);overflow:hidden;}");
// /*弹窗特效*/
// document.writeln(".animated{-webkit-animation-duration:2s;animation-duration:2s;}")
// document.writeln(".rollIn {-webkit-animation-name: rollIn;animation-name: rollIn;-ms-animation-name: rollIn;}")
// document.writeln("@-webkit-keyframes rollIn { 0% { opacity: 0;   -webkit-transform: translateX(-100%) rotate(-120deg);transform: translateX(-100%) rotate(-120deg);} 100% {opacity: 1;-ms-transform: translateX(-100%) rotate(-120deg);} 100% {opacity: 1;-webkit-transform: translateX(0px) rotate(0deg);transform: translateX(0px) rotate(0deg); }}")
// document.writeln("@keyframes rollIn {0% {opacity: 0;-webkit-transform: translateX(-100%) rotate(-120deg);-ms-transform: translateX(-100%) rotate(-120deg);transform: translateX(-100%) rotate(-120deg);}100% {    opacity: 1;-webkit-transform: translateX(0px) rotate(0deg);    -ms-transform: translateX(0px) rotate(0deg);transform: translateX(0px) rotate(0deg);}}")
// document.writeln(".bounceOutUp {-webkit-animation-name: bounceOutUp;  animation-name: bounceOutUp;}")
// document.writeln("@-webkit-keyframes bounceOutUp {  0% {    -webkit-transform: translateY(0);transform: translateY(0); } 20% {    opacity: 1;    -webkit-transform: translateY(20px);transform: translateY(20px);  }100% { opacity: 0;-webkit-transform: translateY(-2000px);transform: translateY(-2000px); }}")
// document.writeln("@keyframes bounceOutUp {0% {-webkit-transform: translateY(0);    -ms-transform: translateY(0);transform: translateY(0);}  20% {    opacity: 1;-webkit-transform: translateY(20px);-ms-transform: translateY(20px);transform: translateY(20px);}100% {opacity: 0;    -webkit-transform: translateY(-2000px);-ms-transform: translateY(-2000px);  transform: translateY(-2000px); }}")
/*弹窗特效end*/
// document.writeln(".swtCenter h3 {width:100%;font-size:28px;text-align:center; color:#2e3642;font-weight:500;margin-top:33px;margin-bottom: 0;}");
// document.writeln(".swtCenter h4 {width:100%;font-size:14px;text-align:center;color:#2e3642;margin:0;font-weight:normal;}");
// document.writeln(".telPhone {width:227px;height:32px;-moz-border-radius:17px;-webkit-border-radius:17px;border-radius:17px;margin:10px auto 5px;}");
// document.writeln(".telPhone input {width:140px;height:30px;line-height:30px; background-color:#FFF;font-size:14px;color:#6a7380;-moz-border-radius:15px 0 0 15px;-webkit-border-radius:15px 0 0 15px;border-radius:15px 0 0 15px;float:left;outline:none;}");
// document.writeln(".telPhone a {width:70px;height:32px;line-height:30px;color:#fff; background-color:#6a7380;font-size:12px;text-align:center;text-decoration:none;-moz-border-radius:0 14px 14px 0;-webkit-border-radius:0 14px 14px 0;border-radius:0 14px 14px 0;float:left;}");
// document.writeln(".swtCenter p {width:230px;font-size:12px;color:#6a7380;margin:0 auto;}");
// document.writeln(".swt_lists {position:absolute; bottom:0;left:0;width:100%;height:58px;line-height:58px;-moz-border-radius:0 0 15px 15px;-webkit-border-radius:0 0 15px 15px;border-radius:0 0 15px 15px;}");
// document.writeln(".swt_lists a {display:block;width:50%;height:100%;position:relative;float:left;}");
// document.writeln(".swt_list1 { background-color:#6b1f8b;-moz-border-radius:0 0 0 15px;-webkit-border-radius:0 0 0 15px;border-radius:0 0 0 15px;}");
// document.writeln(".swt_list2 { background-color:#e74495;-moz-border-radius:0 0 15px 0;-webkit-border-radius:0 0 15px 0;border-radius:0 0 15px 0;}");
// document.writeln(".swt_lists a i,.swt_lists a em {display:block;position:absolute;left:50%;color:#fff;text-decoration:none;}");
// document.writeln(".swtCallIcon {top:50%;margin-left:-50px;margin-top:-13px;width:27px;height:27px; background:url(/static/images/footerLink3.png) no-repeat;-moz-background-size:100%;-webkit-background-size:100%;background-size:100%;}");
// document.writeln(".swt_lists em {height:100%;top:0;margin-left:-16px;font-size:16px;}");
// document.writeln(".swtLinkIcon {top:50%;margin-left:-50px;width:27px;height:24px;margin-top:-12px;background:url(/static/images/footerLink2.png) no-repeat;-moz-background-size:100%;-webkit-background-size:100%;background-size:100%;}");
// document.writeln(".swt_lists .swtLinkCounter {top:15px;width:14px;height:14px;margin-left:-34px;line-height:13px;text-align:center;font-size:9px;background-color:#e60012;-moz-border-radius:14px;-webkit-border-radius:14px;border-radius:14px;-moz-box-shadow:0 0 3px rgba(0,0,0,0.8);-webkit-box-shadow:0 0 3px rgba(0,0,0,0.8);box-shadow:0 0 3px rgba(0,0,0,0.8);z-index:3;font-style:normal;}");
// document.writeln(".closeBtn_swt {position:absolute;z-index:10; right:0px;top:0px;width:38px;height:38px;border-radius: 50%; background:#009ed6 url(/static/images/closeBtn_swt.png) no-repeat;-moz-background-size:100%;-webkit-background-size:100%;background-size:100%;cursor:pointer;}");
// document.writeln(".callbF_text{ width:140px;height:30px;line-height:30px; background-color:#FFF;font-size:14px;color:#6a7380;-moz-border-radius:15px 0 0 15px;-webkit-border-radius:15px 0 0 15px;border-radius:15px 0 0 15px;padding-left:13px;float:left;outline:none;}");
// document.writeln(".callbF_sub{width:70px;height:32px;line-height:30px;color:#fff; background-color:#6a7380;font-size:12px;text-align:center;text-decoration:none;-moz-border-radius:0 14px 14px 0;-webkit-border-radius:0 14px 14px 0;border-radius:0 14px 14px 0;float:left;}");
/*2-3添加*/
// document.writeln(".dashengt{position:absolute;top:0;z-index:2;}")
// document.writeln(".guangquan{display: block; width: 80px; height: 80px; border-radius: 50%; background-color: #fff;position: absolute;left: 36.5%;    z-index: 1;top: 15%; -webkit-animation: guangquan 3s linear infinite; -moz-animation: guangquan 3s linear infinite; animation: guangquan 3s linear infinite;}")
// document.writeln(".gq1{-webkit-animation: guangquan 3s linear 1s infinite; -moz-animation: guangquan 3s linear 1s infinite; animation: guangquan 3s linear 1s infinite;}")
// document.writeln(".gq2{-webkit-animation: guangquan 3s linear 2s infinite; -moz-animation: guangquan 3s linear 2s infinite; animation: guangquan 3s linear 2s infinite;}")
// document.writeln("@-webkit-keyframes guangquan {  from { opacity:1; -webkit-transform:scale(0) translate3d(0, 0, 0)}to { opacity: 0; -webkit-transform: scale(3.5) translate3d(0, 0, 0) }}")
/*2-3添加*/
var LR_websiteid = 'LVT81076038';
var LiveReceptionCode_isonline = 1;
var LR_b294a='785AD584E0F84755A845A39E1E138AFE';var LR_ssl = 0;
if(typeof(LR_showfloat)=='undefined' || LR_showfloat!=1)var LR_showfloat = 1;
var LR_lng = 'cn';
LR_b294a=LR_b294a.replace(/A/g,'B').replace(/C/g,'D').replace(/E/g,'F').replace(/G/g,'H').replace(/I/g,'J').replace(/K/g,'L');var LR_isMobile = 0;
var LR_Tick=new Date().getTime().toString()+parseInt(Math.random()*499999999+Math.random()*400000000+100000000).toString();
var LR_siteid = '81076038';
LR_b294a=((4+2).toString()+LR_b294a+(4*2).toString());var LR_js_pm = 'd';
var LR_imgurl = 'http://lvt.zoosnet.net/';
var LR_sysurl = 'http://lvt.zoosnet.net/';
LR_b294a=((3+3).toString()+LR_b294a+(3*3).toString());var LR_FMLK=LR_b294a.replace(/5/g,'6').replace(/7/g,'1');if(typeof(LR_cid) == 'undefined')
{
  var _lr_helpalt_on=unescape("%u5982%u679c%u60a8%u6709%u4ec0%u4e48%u95ee%u9898%2c%u8bf7%u70b9%u51fb%u6b64%u5904%u8fdb%u884c%u5373%u65f6%u6c9f%u901a%3b");
  var _lr_helpsrc_on=unescape("lr%2fimages%2fonline_cn3.gif");
  var _lr_helpalt_of=unescape("%u6ca1%u6709%u5ba2%u670d%u4eba%u5458%u5728%u7ebf%2c%u8bf7%u70b9%u51fb%u6b64%u5904%u7559%u8a00!%u6211%u4eec%u4f1a%u5c3d%u5feb%u7b54%u590d%3b");
  var _lr_helpsrc_of=unescape("lr%2fimages%2foffline_cn3.gif");
  var _lr_closesrc0='7.gif';
  var _lr_toright=((typeof(LiveReceptionCode_ToRight)!='undefined')?LiveReceptionCode_ToRight:0);
  var _lr_tobottom=((typeof(LiveReceptionCode_ToBottom)!='undefined')?LiveReceptionCode_ToBottom:0);
  var _lr_left=((typeof(LiveReceptionCode_helpimgleft)!='undefined')?LiveReceptionCode_helpimgleft:0);
  var _lr_top=((typeof(LiveReceptionCode_helpimgtop)!='undefined')?LiveReceptionCode_helpimgtop:150);
  var _lr_issupport_track= LiveReceptionCode_isonline;
  LR_hasInstall=0;
  var LR_ivite_img='JS/tj_blue/p.gif';
  var LR_invite_color0='#8DC4EB';
  var LR_invite_color1='#E1EFFC';
  var LR_invite_color2='#A7C5E3';
  var LR_invite_color3='#000000';
  var LR_accept_img='js/tj_blue/a_cn.gif';
  var LR_refuse_img='js/tj_blue/r_cn.gif';
  var LR_close_img='js/tj_blue/close.gif';
  var _lr_invitetitle=unescape("%u60a8%u597d%uff0c%u6765%u81ea%25IP%25%u7684%u670b%u53cb");
  var _lr_invitestring=unescape("%3cH2 style%3d%22FONT-SIZE%3a 14px%22%3e%3cFONT size%3d4%3e%26nbsp%3b%26nbsp%3b%26nbsp%3b %u3010%3cSPAN style%3d'FONT-SIZE%3a 12pt%3b FONT-FAMILY%3a %22%u5fae%u8f6f%u96c5%u9ed1%22%2csans-serif%3b COLOR%3a black%3b mso-bidi-font-family%3a Tahoma%3b mso-font-kerning%3a 0pt'%3e%u6c55%u5934%u540d%u6d41%u6574%u5f62 %u2022 %u4e13%u6ce8%u9ad8%u7aef%u6574%u5f6212%u5e74%3c%2fSPAN%3e%u3011%u6b22%u8fce%u60a8!%3c%2fFONT%3e%3c%2fH2%3e%3cDIV style%3d%22FONT-SIZE%3a 12px%3b COLOR%3a rgb(34%2c34%2c34)%3b LINE-HEIGHT%3a 20px%22%3e%26nbsp%3b%26nbsp%3b%26nbsp%3b%26nbsp%3b%26nbsp%3b %3cFONT color%3dblack size%3d2%3e%u60a8%u597d%uff0c%u6211%u662f%u5728%u7ebf%u54a8%u8be2%u533b%u751f%uff0c%u60a8%u6709%u4efb%u4f55%u76ae%u80a4%u7f8e%u5bb9%u3001%u6574%u5f62%u3001%u5fae%u6574%u5f62%u3001%u53e3%u8154%u3001%u7eb9%u7ee3%u7b49%u76f8%u5173%u95ee%u9898%uff0c%u8bf7%u63a5%u53d7%u6b64%u9080%u8bf7%u4e0e%u6211%u5728%u7ebf%u4ea4%u6d41%u3002%3c%2fFONT%3e%26gt%3b%26gt%3b%26gt%3b %3cBR%3e___________________________________________________________%3c%2fDIV%3e%3cDIV%3e%3c%2fDIV%3e%3cP%3e%3cFONT color%3dred size%3d4%3e%26nbsp%3b%26nbsp%3b%u25a0%3c%2fFONT%3e%3cA href%3d%22http%3a%2f%2fkft.zoosnet.net%2fLR%2fChatpre.aspx%3fid%3dKFT85974053%22%3e%3cFONT color%3dred size%3d3%3e%3cSTRONG%3e%u95ee%u4e13%u5bb6%3c%2fSTRONG%3e%3c%2fFONT%3e%3c%2fA%3e%26nbsp%3b%26nbsp%3b%26nbsp%3b%3cFONT color%3d%23ff0000 size%3d4%3e%u25a0%3c%2fFONT%3e%3cA href%3d%22http%3a%2f%2fkft.zoosnet.net%2fLR%2fChatpre.aspx%3fid%3dKFT85974053%22%3e%3cFONT color%3d%23ff0000 size%3d3%3e%3cSTRONG%3e%u95ee%u6280%u672f%3c%2fSTRONG%3e%3c%2fFONT%3e%3c%2fA%3e%3cFONT size%3d3%3e%3cSTRONG%3e%26nbsp%3b%26nbsp%3b %3c%2fSTRONG%3e%3c%2fFONT%3e%3cFONT color%3d%23ff0000 size%3d4%3e%u25a0%3c%2fFONT%3e%3cA href%3d%22http%3a%2f%2fkft.zoosnet.net%2fLR%2fChatpre.aspx%3fid%3dKFT85974053%22%3e%3cFONT color%3d%23ff0000 size%3d3%3e%3cSTRONG%3e%u95ee%u6548%u679c%3c%2fSTRONG%3e%3c%2fFONT%3e%3c%2fA%3e%3cFONT size%3d3%3e%3cSTRONG%3e%26nbsp%3b%26nbsp%3b %3c%2fSTRONG%3e%3c%2fFONT%3e%3cFONT color%3d%23ff0000 size%3d4%3e%u25a0%3c%2fFONT%3e%3cFONT color%3d%23ff0000%3e%3cFONT size%3d3%3e%3cSTRONG%3e%u95ee%u4ef7%u94b1%3c%2fSTRONG%3e%3c%2fFONT%3e%3c%2fP%3e%3c%2fFONT%3e");
  var _lr_invite_interval=6;
  var offline_invite_hidden=1;
  if('0'=='1'){LR_showfloat=0;}
  var LR_invite_hide_float=1;
  var LR_UserInviteDiv=null;
  var LR_hidden_region='';
  var LR_repeatinvite=0;
  setInterval("LR_repeatinvite=0;",20);
  var LR_defineregion=0;
  var LR_invitesearchkey=0;
  var LR_invitestring1_auto=unescape("%3cH2 style%3d%22FONT-SIZE%3a 14px%22%3e%3cFONT size%3d4%3e%26nbsp%3b%26nbsp%3b%26nbsp%3b %u3010%3cSPAN style%3d%22FONT-SIZE%3a 12pt%3b FONT-FAMILY%3a '%u5fae%u8f6f%u96c5%u9ed1'%2csans-serif%3b COLOR%3a black%3b mso-bidi-font-family%3a Tahoma%3b mso-font-kerning%3a 0pt%22%3e%u6c55%u5934%u540d%u6d41%u6574%u5f62 %u2022 %u4e13%u6ce8%u9ad8%u7aef%u6574%u5f6212%u5e74%3c%2fSPAN%3e%u3011%u6b22%u8fce%u60a8!%3c%2fFONT%3e%3c%2fH2%3e%3cDIV style%3d%22FONT-SIZE%3a 12px%3b COLOR%3a rgb(34%2c34%2c34)%3b LINE-HEIGHT%3a 20px%22%3e%26nbsp%3b%26nbsp%3b%26nbsp%3b%26nbsp%3b%26nbsp%3b %3cFONT color%3dblack size%3d2%3e%u60a8%u597d%uff0c%u6211%u662f%u5728%u7ebf%u54a8%u8be2%u533b%u751f%uff0c%u60a8%u6709%u4efb%u4f55%u76ae%u80a4%u7f8e%u5bb9%u3001%u6574%u5f62%u3001%u5fae%u6574%u5f62%u3001%u53e3%u8154%u3001%u7eb9%u7ee3%u7b49%u76f8%u5173%u95ee%u9898%uff0c%u8bf7%u63a5%u53d7%u6b64%u9080%u8bf7%u4e0e%u6211%u5728%u7ebf%u4ea4%u6d41%u3002%3c%2fFONT%3e%26gt%3b%26gt%3b%26gt%3b %3cBR%3e___________________________________________________________%3c%2fDIV%3e%3cDIV%3e%3c%2fDIV%3e%3cP%3e%3cFONT color%3dred size%3d4%3e%26nbsp%3b%26nbsp%3b%u25a0%3c%2fFONT%3e%3cA href%3d%22http%3a%2f%2fkft.zoosnet.net%2fLR%2fChatpre.aspx%3fid%3dKFT85974053%22%3e%3cFONT color%3dred size%3d3%3e%3cSTRONG%3e%u95ee%u4e13%u5bb6%3c%2fSTRONG%3e%3c%2fFONT%3e%3c%2fA%3e%26nbsp%3b%26nbsp%3b%26nbsp%3b%3cFONT color%3d%23ff0000 size%3d4%3e%u25a0%3c%2fFONT%3e%3cA href%3d%22http%3a%2f%2fkft.zoosnet.net%2fLR%2fChatpre.aspx%3fid%3dKFT85974053%22%3e%3cFONT color%3d%23ff0000 size%3d3%3e%3cSTRONG%3e%u95ee%u6280%u672f%3c%2fSTRONG%3e%3c%2fFONT%3e%3c%2fA%3e%3cFONT size%3d3%3e%3cSTRONG%3e%26nbsp%3b%26nbsp%3b %3c%2fSTRONG%3e%3c%2fFONT%3e%3cFONT color%3d%23ff0000 size%3d4%3e%u25a0%3c%2fFONT%3e%3cA href%3d%22http%3a%2f%2fkft.zoosnet.net%2fLR%2fChatpre.aspx%3fid%3dKFT85974053%22%3e%3cFONT color%3d%23ff0000 size%3d3%3e%3cSTRONG%3e%u95ee%u6548%u679c%3c%2fSTRONG%3e%3c%2fFONT%3e%3c%2fA%3e%3cFONT size%3d3%3e%3cSTRONG%3e%26nbsp%3b%26nbsp%3b %3c%2fSTRONG%3e%3c%2fFONT%3e%3cFONT color%3d%23ff0000 size%3d4%3e%u25a0%3c%2fFONT%3e%3cFONT color%3d%23ff0000%3e%3cFONT size%3d3%3e%3cSTRONG%3e%u95ee%u4ef7%u94b1%3c%2fSTRONG%3e%3c%2fFONT%3e%3c%2fP%3e%3c%2fFONT%3e");
  var LR_auto_pagetitle=0;
  var LR_issupport_feydj=0;
  var LR_chated_no_invite=0;
  var LR_userurl0=0;
  var LR_invite_display_kind=0;
  var LR_fade_invite=0;
  var LR_confirm_closechat=unescape("%u60a8%u6b63%u5728%u8fdb%u884c%u5728%u7ebf%u5bf9%u8bdd%uff0c%u786e%u5b9a%u8981%u7ed3%u675f%u5bf9%u8bdd%u5417%uff1f");
  var LR_pm001=0;
  setInterval("if(typeof(LR_nextshowmini_s)!='undefined')LR_nextshowmini_s='lr';",50);
  var _lr_mfloat_toright=1;
  var _lr_mfloat_tobottom=1;
  var _lr_mfloat_imgleft=0;
  var _lr_mfloat_imgtop=0;
  var LR_pm002=0;
  var LR_pm003=0;
  var LR_pm004=1;
  var LR_pm006='#5ba4ed';
  if(typeof(LR_showminiDivtimeout)=='undefined')var LR_showminiDivtimeout=2;
  var LR_pm007=1;
  var LR_pm011=0;
  var LR_pm012=30;
function LR_SetCookie(name,value,minutes)
{
  if (name.indexOf(LR_websiteid)==-1){name='N'+LR_websiteid+name;}
  var exp  = new Date();
  exp.setTime(exp.getTime() + minutes*60*1000);
  document.cookie = name + '='+ escape (value) + ';'+getRDomain()+'path=/;expires=' + exp.toGMTString();
}
function LR_getCookie(name)
{
  if (name.indexOf(LR_websiteid)==-1){
  var arr = document.cookie.match(new RegExp('(^| )'+'N'+LR_websiteid+name+'=([^;]*)(;|$)'));
  if(arr != null) return unescape(arr[2]);
  }
  var arr = document.cookie.match(new RegExp('(^| )'+name+'=([^;]*)(;|$)'));
  if(arr != null) return unescape(arr[2]);
  if(name=='LiveWS'+LR_websiteid)
  {
    LR_SetCookie(name,LR_Tick,2628000);
    return LR_Tick;
  }
  if(name=='LiveWS'+LR_websiteid+'sessionid')
  {
    LR_SetCookie(name,LR_Tick,720);
    return LR_Tick;
  }
  return null;
}
function getRDomain(){var d,a=location.hostname,b='',c=['.com','.co','.cn','.vn','.info','.net','.org','.me','.mobi','.us','.biz','.xxx','.ca','.co.jp','.js.cn','.com.cn','.net.cn','.org.cn','.gov.cn','.cq.cn','.ac.cn','.edu.cn','.mx','.tv','.ws','.ag','.com.ag','.net.ag','.org.ag','.am','.asia','.at','.be','.com.br','.net.br','.bz','.com.bz','.net.bz','.cc','.com.co','.net.co','.nom.co','.de','.es','.com.es','.nom.es','.org.es','.eu','.fm','.fr','.gs','.in','.co.in','.firm.in','.gen.in','.ind.in','.net.in','.org.in','.it','.jobs','.jp','.ms','.com.mx','.nl','.nu','.co.nz','.net.nz','.org.nz','.se','.tc','.tk','.tw','.com.tw','.com.hk','.idv.tw','.org.tw','.hk','.co.uk','.me.uk','.org.uk','.vg','.name'];return c=c.join('|').replace('.','\\.'),d=new RegExp('\\.?([^.]+('+c+'))$'),a.replace(d,function(a,c){b=c}),''!=b?'domain=.'+b+';':b}
var LR_cookie_test=1;function LR_cookie_test1() {LR_SetCookie('LR_cookie_t0',1,0.05);LR_cookie_test=(LR_getCookie('LR_cookie_t0')!=null);}LR_cookie_test1();
if(typeof(LR_hasInstall) == 'undefined')
{
  var LR_hasInstall=0;
  var MM_contentVersion = 8;
  var plugin = (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"]) ? navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin : 0;
  if (plugin)
  {
    var words = navigator.plugins["Shockwave Flash"].description.split(" ");
    for (var i = 0; i < words.length; ++i)
    {
      if (isNaN(parseInt(words[i])))
        continue;
      var MM_PluginVersion = words[i];
    }
    if(MM_PluginVersion >= MM_contentVersion)LR_hasInstall = 1;
  }
  else if( navigator.userAgent && navigator.userAgent.indexOf("MSIE")>=0 && (navigator.appVersion.indexOf("Win") != -1) )
  {
  try{
    document.write('<SCR' + 'IPT LANGUAGE=VBScript\> \n');
    document.write('on error resume next \n');
    document.write('LR_hasInstall = ( IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash." & MM_contentVersion)))\n');
    document.write('</SCR' + 'IPT\> \n');
  }catch(e){}
    if(LR_hasInstall)LR_hasInstall=2;
  }
  if(window.location.protocol!='http:' && window.location.protocol!='https:')LR_hasInstall=0;
  if(LR_cookie_test && LR_getCookie('LR_hasInstall')=='0'){LR_hasInstall=0;}

}
if(LR_ssl){_lr_helpsrc_on=_lr_helpsrc_on.replace('http://','https://');_lr_helpsrc_of=_lr_helpsrc_of.replace('http://','https://');_lr_closesrc0=_lr_closesrc0.replace('http://','https://');LR_ivite_img=LR_ivite_img.replace('http://','https://');}function LR_addnew0(){
if(_lr_issupport_track)
{
var data='jid='+LR_js_pm+'&id='+LR_siteid+'&sid='+LR_sid+'&cid='+LR_cid+'&lng='+LR_lng;
  data+='&p='+escape(location.href)+'&r='+lr_refer5237+'&e='+escape(LR_explain)+'&GCMI='+LR_FMLK;
  if(typeof(LR_username)!='undefined'){data+='&un='+escape(LR_username);}
  if(typeof(LR_userdata)!='undefined'){data+='&ud='+escape(LR_userdata);}
  if(typeof(LR_pagetitle)!='undefined'){data+='&pt='+escape(LR_pagetitle);}
  if(LR_issupport_feydj){data+='&f=1';}
checkcount=-1;LR_inviteimgJS=0;LR_hcloopJS(LR_sysurl+'js/JS_Float.aspx',data);LR_explain='';
}else{LR_sidexists=2;}
}
    var minichathtml1=(typeof(minichathtml)!='function');if(minichathtml1)document.write('<link href="http://lvt.zoosnet.net/js/JS5.css" rel="stylesheet" type="text/css" />');
function if_src(){if(/rv:11.0;|SE 2.X MetaSr 1.0/.test(navigator.userAgent)) {return '';}return 'src=\"about:blank\"';}
var LR_MCount1 = 5000;

function LR_CheckUserUrl(_url) {
  if (_url == null) {
    return '';
  }
  if (_url.indexOf('//') == -1) {
    return LR_imgurl + _url;
  }
  if (LR_sysurl.substring(0, LR_sysurl.indexOf('//')) == 'http:') {
    return _url.replace(LR_sysurl, LR_imgurl).replace('https://', 'http://');
  } else {
    return _url.replace('http://', 'https://');
  }
}
var LR_cid = null;
var LR_sid = null;
var LR_msg = '';
var LR_fistvisitetime = null;
var LR_visitetime = new Date().getTime();
var LR_lastvisitetime = null;
var LR_visitecounts = 0;
LR_visitepages = 0;
var LR_ip = null;
var LR_ip1 = null;
var LR_ip2 = null;
var LR_showinvite = 1;
var LR_invite0 = '';
var LR_invite1 = null;
var LR_sidexists = -1;
var LR_lastinvite = new Date().getTime();
var checkcount = 0;
var LR_inviteimgJS = 1;
var LR_chatkind = -1;
var lr_refer5237 = escape(document.referrer);
if (typeof(lr_refer5236) != 'undefined') lr_refer5237 = escape(lr_refer5236);
var LR_cname = null;
var LR_ccolor = null;
var LR_lastoname = null;
var LR_nexttimerID = null;
var LR_istate = 0,
  LR_gstate = 0;
var LR_skey = null;
var LR_surl = null;
var LR_ClientEnd = 1;
var LR_cur_invite = null;
var LR_cookie_ctick = 0;
var LR_maxoid = 0;
var lastshowmini = 0;
var lr_newcount=0;

function LR_GetObj(id, theDoc) {
  if (!theDoc) {
    theDoc = document;
  }
  if (theDoc.getElementById) {
    return theDoc.getElementById(id);
  } else if (document.all) {
    return theDoc.all(id);
  }
}
var LR_m_d = null;

function LR_m_e(p1, p2, p3) {
  if (LR_m_d != null) return null;
  var div = document.createElement('DIV');
  div.id = 'LR_m_h_' + new Date().getTime();
  with(div.style) {
    zIndex = 8998;
    top = '0px';
    left = '0px';
    width = '100%';
    height = '100%';
    border = 'none';
    margin = padding = 0;
    position = 'absolute';
    backgroundColor = '#000';
    opacity = '0.2';
    filter = 'alpha(opacity=20)';
    duration = 1000;
  }
  document.body.insertBefore(div, document.body.firstChild);
  if (!p3) LR_m_a('SELECT');
  if (!p2) LR_m_a('OBJECT');
  if (!p1) LR_m_a('IFRAME');
  LR_m_c(div);
  return div;
}

function LR_m_c(obj) {
  obj.style.width = '100%';
  obj.style.height = '100%';
  var bodyCW = 0,
    bodyCH = 0;
  if (document.documentElement && document.documentElement.clientWidth) {
    bodyCW = document.documentElement.clientWidth;
  } else if (window.innerWidth) {
    bodyCW = window.innerWidth;
  } else if (document.body) {
    bodyCW = document.body.clientWidth;
  }
  if (window.innerHeight) bodyCH = window.innerHeight;
  else if (document.documentElement && document.documentElement.clientHeight) bodyCH = document.documentElement.clientHeight;
  else if (document.body) bodyCH = document.body.clientHeight;
  setTimeout(function() {
    bodyCW = Math.max(document.body.scrollWidth, bodyCW);
    bodyCH = Math.max(document.body.scrollHeight, bodyCH);
    obj.style.width = bodyCW + 'px';
    obj.style.height = bodyCH + 'px';
  }, 1);
}

function LR_m_b(TagName) {
  var s = document.getElementsByTagName(TagName);
  for (var i = 0, n = s.length; i < n; i++) {
    if (s[i].id == 'LR_Flash') continue;
    s[i].style.visibility = s[i].getAttribute('LR_m_g');
    s[i].removeAttribute('LR_m_g');
  }
};

function LR_m_a(TagName) {
  var s = document.getElementsByTagName(TagName);
  for (var i = 0, n = s.length; i < n; i++) {
    if (s[i].id == 'LR_Flash') continue;
    s[i].setAttribute('LR_m_g', s[i].style.visibility, 0);
    s[i].style.visibility = 'hidden';
  }
};

function LR_m_f(obj, p1, p2, p3) {
  if (LR_m_d == null) return;
  try {
    if (obj) {
      document.body.removeChild(obj);
      LR_m_d = null;
      if (!p3) LR_m_b('SELECT');
      if (!p2) LR_m_b('OBJECT');
      if (!p1) LR_m_b('IFRAME');
    }
  } catch (e) {}
};
if (LR_auto_pagetitle && typeof(LR_pagetitle) == 'undefined') {
  var LR_pagetitle = document.title;
}
if (typeof(LiveReceptionCode_need_help_html) != 'undefined') LR_showfloat = 1;
if (typeof(LR_explain) == 'undefined') {
  LR_explain = '';
  if (typeof(LiveReception_explain) != 'undefined') {
    LR_explain = unescape(LiveReception_explain);
  }
  if (typeof(LiveReceptionCode_chatexplain_online) != 'undefined') {
    LR_explain = unescape(LiveReceptionCode_chatexplain_online);
  }
}

function LR_minisrc() {
  return LiveReceptionCode_isonline ? (minichathtml1?'minichat_PC':'minichat3') : 'minioffline160714';
}
function minichathtmlF(islrminimin) { if (!minichathtml1) return minichathtml(islrminimin); return '<div style="' + (LiveReceptionCode_isonline ? 'width:400px; height:400px;' : 'width:420px; height:463px;') + (islrminimin ? 'display:none;' : '') + '" id="LRMINIWIN"><div  id="LRMINIWIN0" style="z-index: 2147483647; position: absolute; height: 30px; overflow: hidden; display: block;right:0"><span style="float:left;clear:none; width:103px;height:20px; overflow:hidden; margin:0 5px;"></span><span style="' + (LR_pm007 ? '' : 'display:none;') + 'CURSOR:pointer;float:right;clear:none; width:20px;height:20px; margin:6px 2px 0 0; overflow:hidden;" onclick="lr_closemini(1);"><img style="cursor:pointer;" src="' + LR_imgurl + 'lr/mini_new/close.png" border="0"></span><span style="CURSOR:pointer;float:right;overflow:hidden;width:20px;height:20px;clear:none;display:block;margin:6px 2px 0 0;" onclick="lrminiMin();"><img src="' + LR_imgurl + 'lr/mini_new/da1.png" style="cursor:pointer;"  border="0"></span><span style="CURSOR:pointer;float:right;overflow:hidden;width:20px;height:20px;clear:none;display:block;margin:6px 2px 0 0;" onclick="openZoosUrl(\'bchatwin\');lr_hidemini();"><img src="' + LR_imgurl + 'lr/mini_new/da.png" style="cursor:pointer;"  border="0"></span><span style="CURSOR:pointer;float:right;overflow:hidden;width:20px;height:20px;clear:none;display:block;margin:6px 2px 0 0;" onclick="lrmove();"><img src="' + LR_imgurl + 'lr/mini_new/jiantou.png" style="cursor:pointer;"  border="0"></span></div><iframe id="LR_miniframe" name="LR_miniframe" width="100%" height="' + (LiveReceptionCode_isonline ? '400' : '463') + 'px" frameborder="0" scrolling="No" allowtransparency="true" ' + if_src() + '></iframe></div>'; }
        function minibarhtmlF(islrminimin) {if(!minichathtml1)return minibarhtml(islrminimin);return '<div id="LRMINIBar" class="LR_Mini_ICON" style="display:'+(!islrminimin?'none':'block')+';'+(LR_pm011?'left':'right')+': 15px;bottom: '+LR_pm012+'px;" onclick="lrminiMax();"><a class="LR-BTN" style="background-color: '+LR_pm006+';"><span class="LR-ICON LR-ICON-CHAT1" id="LR-BTN-ICON"></span><span id="LR-CIRCLE" style="display:none;background-color: '+LR_pm006+';"></span> </a><div id="LR-BUBBLE" style="display:none;width:400px;'+(LR_pm011?'left:0;':'right: 0;margin-right:34px;')+'cursor:pointer;bottom: '+LR_pm012+'px;"><span class="LR-ICON" id="LR-BUBBLE-CLOSE" onclick="return closebarhtml(event);"></span><div id="LR-BUBBLE-INSIDE"><div id="LR-BUBBLE-title"><img id="LR-BUBBLE-AVATAR" src=""><span id="LR-BUBBLE-NAME"></span></div><div id="LR-BUBBLE-MSG"></div></div></div></div>';}

var IEmsg=(!minichathtml1 || (navigator.appName == "Microsoft Internet Explorer" && /MSIE 6.|MSIE 7.|MSIE 8.|MSIE 9./.test(navigator.userAgent)));
if(minichathtml1)
{
  if(window.addEventListener)
  {
  window.addEventListener('message', function (e) {
            var lr_cmd = e.data;
            if(lr_cmd.a=='hide')
            {
               lrminiMin();return;
            }
            if(lr_cmd.a=='newmsg' && LR_GetObj('LRMINIBar').style.display=='block')
            {
               lr_newcount++;
               var _obj=LR_GetObj('LR-CIRCLE');_obj.innerHTML=lr_newcount;_obj.style.display='block';
               LR_GetObj('LR-BUBBLE-title').style.display=(!lr_cmd.d || !lr_cmd.c)?'none':'block';
               
               LR_GetObj('LR-BUBBLE-MSG').innerHTML=lr_cmd.b;
               LR_GetObj('LR-BUBBLE-AVATAR').src=lr_cmd.c;
               LR_GetObj('LR-BUBBLE').style.display='none';
               LR_GetObj('LR-BUBBLE-NAME').innerHTML=lr_cmd.d;return;
            }
        }, false);
        }
       
        
         function closebarhtml(evt) {
         evt = evt || window.event;
         LR_GetObj('LR-BUBBLE').style.display='none';
            evt.cancelBubble = true;
        evt.returnValue = false;
        if (evt.preventDefault && evt.stopPropagation) {
          evt.preventDefault();
          evt.stopPropagation();
        }
    }
        
}


function LR_Check_region() {
  if (LR_defineregion) {
    var invitec0 = unescape(LR_ip1) + ' ' + unescape(LR_ip2);
    if (typeof(only_invite_list) != 'undefined') {
      LR_showinvite = 0;
      var invitec1 = only_invite_list.split('|');
      for (w = 0; w < invitec1.length; w++) {
        if (invitec1[w].length == 0) continue;
        if (invitec0.indexOf(invitec1[w]) != -1) {
          LR_showinvite = 1;
          break;
        }
      }
    } else if (typeof(never_invite_list) != 'undefined') {
      var invitec1 = never_invite_list.split('|');
      for (w = 0; w < invitec1.length; w++) {
        if (invitec1[w].length == 0) continue;
        if (invitec0.indexOf(invitec1[w]) != -1) {
          LR_showinvite = 0;
          break;
        }
      }
    }
  }
  if (LR_hidden_region != '') {
    var lrhgs = LR_hidden_region.split(",");
    var ipfrom = unescape(LR_ip1) + ' ' + unescape(LR_ip2);
    for (w = 0; w < lrhgs.length; w++) {
      if (lrhgs[w] == '') continue;
      if (ipfrom.indexOf(lrhgs[w]) != -1) {
        LR_showinvite = 0;
        return;
      };
    }
    if (LR_showfloat) LR_Floaters[0].showdiv(1);
  }
}

function LR_buildfloat() {
  return (typeof(LiveReceptionCode_need_help_html) != 'undefined') ? LiveReceptionCode_need_help_html : '<img ' + (LiveReceptionCode_isonline ? 'title="' + _lr_helpalt_on + '" alt="' + _lr_helpalt_on + '" src="' + LR_CheckUserUrl(_lr_helpsrc_on) + '"' : 'title="' + _lr_helpalt_of + '" alt="' + _lr_helpalt_of + '" src="' + LR_CheckUserUrl(_lr_helpsrc_of) + '"') + '  style="cursor:pointer" onclick="openZoosUrl(\'chatwin\');">';
}
function LR_checkagent(_lr_na) {
  var _lr_o = _lr_na.split('|');
  for (_lr_w = 0; _lr_w < _lr_o.length; _lr_w++) {
    if (navigator.userAgent.toLowerCase().indexOf(_lr_o[_lr_w]) > -1) return true;
  }
  return false;
}

function LR_check_block(lrobjinner) {
  if (typeof(lrobjinner) == 'undefined') return true;
  lrobjinner = lrobjinner.toLowerCase();
  return ((lrobjinner.indexOf('.gif') == -1 && lrobjinner.indexOf('.jpg') == -1 && lrobjinner.indexOf('.png') == -1 && lrobjinner.indexOf('.swf') == -1 && lrobjinner.indexOf('<iframe') == -1) || lrobjinner.indexOf(' Blocked_') != -1);
}
var LR_Floaters = new Array();
if (typeof(LR_Fid) == 'undefined') {
  var LR_Fid = 0;
  var LR_invitew = 211;
  var LR_inviteh = 110;
  var LR_inviteim = new Image;
  
  eval("function OnlinerIcon(){this.pms=new Array();this.LR_scrollTimer=null;this.autoScroll=LR_autoScroll;this.get_tip_str=onliner_get_tip_str;this.start=onliner_start;this.imageTimer=onliner_imageTimer;this.get_close_str=onliner_get_close_str;this.hidden=hidden_div;this.showdiv=show_div;}function LR_autoScroll(){this.imageTimer();}function onliner_get_tip_str(){  var tt = 'z-index:2147483647;position:fixed!important;'+((this.pms['xCenter']==1)?'left:50%;margin-left:-'+(typeof (lr_xCenter) != 'undefined'?lr_xCenter:LR_invitew)+'px!important;':((this.pms['alignx']==1)?'right':'left')+':'+this.pms['alignW']+'px;')+((this.pms['yCenter']==1)?'top:50%;margin-top:-'+(typeof (lr_yCenter) != 'undefined'?lr_yCenter:LR_inviteh)+'px!important;':((this.pms['aligny']==1)?'bottom':'top')+':'+this.pms['alignH']+'px;')+'_position:absolute;_margin-left:0px;_margin-top:0px;_top:expression(eval(document.compatMode && document.compatMode==\\'CSS1Compat\\')?(documentElement.scrollTop + '+((this.pms['yCenter']==1)?'(document.documentElement.clientHeight-this.offsetHeight)/2':((this.pms['aligny']==1)?'document.documentElement.clientHeight-this.offsetHeight-':'')+this.pms['alignH'])+'):(document.body.scrollTop + '+((this.pms['yCenter']==1)?'(document.body.clientHeight - this.clientHeight)/2':((this.pms['aligny']==1)?'document.body.clientHeight - this.clientHeight-':'')+this.pms['alignH'])+'));_left:expression(eval(document.compatMode && document.compatMode==\\'CSS1Compat\\')?(documentElement.scrollLeft + '+((this.pms['xCenter']==1)?'(document.documentElement.clientWidth-this.offsetWidth)/2':((this.pms['alignx']==1)?'document.documentElement.clientWidth-this.offsetWidth-':'')+this.pms['alignW'])+'):(document.body.scrollLeft + '+((this.pms['xCenter']==1)?'(document.body.clientWidth - this.clientWidth)/2':((this.pms['alignx']==1)?'document.body.clientWidth - this.clientWidth-':'')+this.pms['alignW'])+'));';return tt;}function onliner_get_close_str(){if(this.pms['closer_show']==1) return '<div id=\"swtColse\" style=\"width:20px; height:15px; top:0px; right:0px; position:absolute;background-image: url('+this.pms['closer_img']+');background-repeat: no-repeat;background-position: right top;cursor:pointer;\" onclick=\"LR_Hidemobileinvite('+this.pms['LR_Fid']+');onlinerIcon'+this.pms['LR_Fid']+'.hidden();\"></div>'; return '';}function hidden_div(){this.pms['show']='none';LR_GetObj(this.pms['LRdiv']).style.display='none';}function show_div(showclose){this.pms['show']='block';LR_GetObj(this.pms['LRdiv']).style.display='block';if(LR_GetObj(this.pms['LRfloater']+'close')!=null)LR_GetObj(this.pms['LRfloater']+'close').style.display=showclose?'block':'none';}function onliner_imageTimer(hand){ var _lrobj0=LR_GetObj(this.pms['LRfloater']+'_if');if(_lrobj0!=null){_lrobj0.style.width = _lrobj0.nextSibling.clientWidth+'px';_lrobj0.style.height = _lrobj0.nextSibling.clientHeight+'px';}var _lrobj=LR_GetObj(this.pms['LRdiv']); if(hand || (this.pms['show']=='block' && _lrobj!=null && LR_check_block(_lrobj.innerHTML) && !LR_check_block(this.pms['html']))){var con_img=this.pms['html'];var tt='';if((typeof(LR_above_flash) != 'undefined') && LR_above_flash)tt+='<iframe s'+'r'+'c=\"'+LR_imgurl+'JS/im.html\" id=\"'+this.pms['LRfloater']+'_if\" style=\"position:absolute;z-index:2147483647;top:expression(this.nextSibling.offsetTop);left:expression(this.nextSibling.offsetLeft);width:1px;\" frameborder=\"0\" allowtransparency=\"true\" ></iframe>';tt+='<DIV id=\"'+this.pms['LRfloater']+'\" >'+this.get_close_str()+con_img+'</div>';  _lrobj.innerHTML=tt; LR_GetObj(this.pms['LRfloater']).style.cssText=this.get_tip_str();var _lrobj1=LR_GetObj(this.pms['LRfloater']+'_if');if(_lrobj1!=null){_lrobj1.style.cssText=this.get_tip_str()+'z-index:2147483647;width:expression(this.nextSibling.clientWidth);height:expression(this.nextSibling.clientHeight);';}LR_GetObj(this.pms['LRdiv']).style.display=this.pms['show'];}  }function onliner_start(){  document.write('<div id=\"'+this.pms['LRdiv']+'\" style=\"display:none;\"></div>');}");
} else {
  LR_Fid++;
}
eval('var onlinerIcon' + LR_Fid + '=new OnlinerIcon();');
eval('onlinerIcon' + LR_Fid + '.pms[\'LR_Fid\']=LR_Fid;');
eval('onlinerIcon' + LR_Fid + '.pms[\'show\']=(LR_showfloat && LR_hidden_region.length==0)?\'block\':\'none\';');
eval('onlinerIcon' + LR_Fid + '.pms[\'aligny\']=_lr_tobottom;');
eval('onlinerIcon' + LR_Fid + '.pms[\'alignx\']=_lr_toright;');
eval('onlinerIcon' + LR_Fid + '.pms[\'alignW\']=_lr_left;');
eval('onlinerIcon' + LR_Fid + '.pms[\'alignH\']=_lr_top;');
eval('onlinerIcon' + LR_Fid + '.pms[\'html\']=LR_buildfloat();');
eval('onlinerIcon' + LR_Fid + '.pms[\'closer_show\']=(_lr_closesrc0==\'\')?0:1;');
eval('onlinerIcon' + LR_Fid + '.pms[\'closer_img\']="' + LR_imgurl + 'LR/closeimg/' + _lr_closesrc0 + '";');
eval('onlinerIcon' + LR_Fid + '.pms[\'LRfloater\']=\'LRfloater' + LR_Fid + '\';');
eval('onlinerIcon' + LR_Fid + '.pms[\'LRdiv\']=\'LRdiv' + LR_Fid + '\';');
eval('onlinerIcon' + LR_Fid + '.start();');
eval('onlinerIcon' + LR_Fid + '.LR_scrollTimer = window.setInterval(\'onlinerIcon' + LR_Fid + '.autoScroll()\', 200); ');
eval('LR_Floaters.push(onlinerIcon' + LR_Fid + ');');
if (!LR_checkagent('ucbrowser') && document.body) document.body.appendChild(LR_GetObj('LRdiv' + LR_Fid));
LR_Fid++;
eval('var onlinerIcon' + LR_Fid + '=new OnlinerIcon();');
eval('onlinerIcon' + LR_Fid + '.pms[\'LR_Fid\']=LR_Fid;');
eval('onlinerIcon' + LR_Fid + '.pms[\'show\']=\'none\';');
if ((typeof(Invite_ToBottom) != 'undefined') && (typeof(Invite_ToRight) != 'undefined') && (typeof(Invite_left) != 'undefined') && (typeof(Invite_top) != 'undefined')) {
  eval('onlinerIcon' + LR_Fid + '.pms[\'aligny\']=Invite_ToBottom;');
  eval('onlinerIcon' + LR_Fid + '.pms[\'alignx\']=Invite_ToRight;');
  eval('onlinerIcon' + LR_Fid + '.pms[\'alignW\']=Invite_left;');
  eval('onlinerIcon' + LR_Fid + '.pms[\'alignH\']=Invite_top;');
} else {
  eval('onlinerIcon' + LR_Fid + '.pms[\'xCenter\']=1;');
  eval('onlinerIcon' + LR_Fid + '.pms[\'yCenter\']=1;');
}
eval('onlinerIcon' + LR_Fid + '.pms[\'html\']=\'\';');
eval('onlinerIcon' + LR_Fid + '.pms[\'closer_show\']=0;');
eval('onlinerIcon' + LR_Fid + '.pms[\'closer_img\']="' + LR_sysurl + 'LR/closeimg/' + _lr_closesrc0 + '";');
eval('onlinerIcon' + LR_Fid + '.pms[\'LRfloater\']=\'LRfloater' + LR_Fid + '\';');
eval('onlinerIcon' + LR_Fid + '.pms[\'LRdiv\']=\'LRdiv' + LR_Fid + '\';');
eval('onlinerIcon' + LR_Fid + '.start();');
eval('onlinerIcon' + LR_Fid + '.LR_scrollTimer = window.setInterval(\'onlinerIcon' + LR_Fid + '.autoScroll()\', 200); ');
eval('LR_Floaters.push(onlinerIcon' + LR_Fid + ');');

function LR_showInviteDiv(h1, h2) {
  if (!LR_showinvite) return;
  if (h1 == null && h2 == null) return;
  if (h1 == '1' && h2 == '1' && LR_chated_no_invite && LR_getCookie('LR_lastchat') == '1') {
    return;
  }
  LR_invitew = 211;LR_inviteh = 110;
  var LR_ikind1 = (!LR_invite_display_kind || h2 == '1');
  if (typeof(LiveAutoInvite0) != 'undefined' && h1 == '1') h1 = LiveAutoInvite0;
  if (h2 == '1') h2 = LR_GetAutoInvite2();
  if (h1.indexOf('%IP%') != -1) {
    var ipfrom = unescape(LR_ip1);
    if (ipfrom.length < 3 || (LR_ip1 == null && LR_ip2 == null)) {
      h1 = '';
    } else {
      h1 = h1.replace('%IP%', ipfrom);
    }
  }
  LR_cur_invite = h2;
  LR_m_f(LR_m_d);
  if ((typeof(LR_invite_m) != 'undefined') && LR_invite_m) LR_m_d = LR_m_e();
  if (LR_UserInviteDiv != null && LR_ikind1) {
    LR_Floaters[1].pms['html'] = LR_UserInviteDiv.replace('{c0}', LR_invite_color0).replace('{c1}', LR_invite_color1).replace('{c2}', LR_invite_color2).replace('{c3}', LR_invite_color3).replace('{aimg}', LR_CheckUserUrl(LR_accept_img)).replace('{fimg}', LR_CheckUserUrl(LR_refuse_img)).replace('{pimg}', LR_CheckUserUrl(LR_ivite_img)).replace('{h1}', h1).replace('{h2}', h2).replace(/\{0\}/g, 'openZoosUrl();LR_HideInvite();').replace(/\{1\}/g, 'LR_RefuseChat();LR_HideInvite();');
  } else {
    onlinerIcon1.pms['closer_show'] = 0;
    
    LR_Floaters[1].pms['html'] = '<table ID="LR_Tb2" style="BORDER-COLLAPSE: collapse; background-color: ' + LR_invite_color1 + ';border: ' + LR_invite_color0 + ' 2px solid;margin:2px;padding:0;WIDTH: 420px;" align=center><tr><td style="HEIGHT: 20px;margin:0; padding:0;" width="407" valign="bottom">' + ((h1 == '') ? '' : '<font style="margin-LEFT: 12px;FONT-WEIGHT: bold; FONT-SIZE: 12px;COLOR: #000000;">' + h1 + '</font>') + '</td><TD width="13" style="PADDING-RIGHT: 0px; PADDING-LEFT: 0px; PADDING-BOTTOM: 0px; MARGIN: 0px; PADDING-TOP: 0px;"><a href="javascript:void(0)" onclick="LR_HideInvite();LR_RefuseChat();return false;"><img src="' + LR_CheckUserUrl(LR_close_img) + '" border="0"></a></TD></tr><TR><TD colspan="2"><table ID="LR_Tb3" style="BORDER-COLLAPSE: collapse;border: ' + LR_invite_color2 + ' 1px solid; background-color: #FFFFFF;margin-left:7px;margin-right:7px;margin-bottom:7px;margin-top:0;WIDTH: 400px;" align=center><tr><td><table cellspacing=0 cellpadding=0 ID="LR_Tb4" align=center style="WIDTH: 400px; HEIGHT: 104px;border:0;margin:0; padding:0;"><tr><td rowspan="2" style="WIDTH: 110px" align=center><img src="' + LR_CheckUserUrl(LR_ivite_img) + '"></td><td style="PADDING-RIGHT: 10px; PADDING-LEFT: 10px; PADDING-BOTTOM: 2px; PADDING-TOP: 19px;FONT-SIZE: 12px;color:' + LR_invite_color3 + ';" align=left valign=top>' + h2 + '</td></tr><tr><td align=right height=30><table border=0 style="margin:0; padding:0;WIDTH: 180px;"><tr><td><img src="' + LR_CheckUserUrl(LR_accept_img) + '" border=0 usemap="#Map93LR" /><map name="Map93LR"><area shape="rect" coords="1,1,78,22"  href="javascript:void(0)" onclick="openZoosUrl();LR_HideInvite();return false;"></map></td><td width=20></td><td><a href="javascript:void(0)" onclick="LR_HideInvite();LR_RefuseChat();return false;"><img src="' + LR_CheckUserUrl(LR_refuse_img) + '" border=0></a></td><td width=20></td></tr></table></td></tr></table></td></tr></table></td></tr></table>';
  }
  LR_Floaters[1].showdiv(0);
  LR_Floaters[1].imageTimer(true);
  if (LR_fade_invite) LR_fadeIn('LRfloater1');
  if (document.body) {
    document.body.appendChild(LR_GetObj('LRdiv0'));
    document.body.appendChild(LR_GetObj('LRdiv1'));
  }
  if (LR_invite_hide_float && LR_showfloat) LR_Floaters[0].hidden();
  window.focus();
  LR_SetCookie('lastshowinvite', new Date().getTime(), 720);
}

function LR_showHfloat() {
  if (LR_invite_hide_float && LR_showfloat) {
    LR_Floaters[0].showdiv(1);
    if (document.body) document.body.appendChild(LR_GetObj('LRdiv0'));
  }
}

function LR_HideInvite() {
  if (LR_Floaters[1].pms['html'] == '') return;
  LR_Floaters[1].pms['html'] = '';
  LR_showHfloat();
  LR_m_f(LR_m_d);
  if (LR_fade_invite) {
    if (LR_GetObj('LRfloater1') == null) return;
    LR_fadeOut('LRfloater1');
  } else {
    LR_Floaters[1].hidden();
  }

  if (LR_istate == 1) {
    LR_istate = 0;
  }
}

function LR_Hidemobileinvite(lid) {
  if (lid != 1) return;
  LR_RefuseChat();
  LR_HideInvite();
}

function LR_SetOpacity(ev, v) {
  ev.filters ? ev.style.filter = 'alpha(opacity=' + v + ')' : ev.style.opacity = v / 100;
}

function LR_fadeIn(elem) {
  if (LR_GetObj(elem) == null) {
    return;
  }
  speed = 120;
  opacity = 100;
  LR_GetObj(elem).style.display = 'none';
  LR_SetOpacity(LR_GetObj(elem), 0);
  var val = 0;
  (function() {
    LR_SetOpacity(LR_GetObj(elem), val);
    val += 5;
    if (val <= opacity) {
      setTimeout(arguments.callee, speed)
    }
  })();
}

function LR_fadeOut(elem) {
  if (LR_GetObj(elem) == null) {
    return;
  }
  speed = 50;
  opacity = 0;
  var val = 100;
  (function() {
    LR_SetOpacity(LR_GetObj(elem), val);
    val -= 5;
    if (val >= opacity) {
      setTimeout(arguments.callee, speed);
    } else if (val <= 0) {
      LR_GetObj(elem).style.display = 'none';
    }
  })();
}
LR_Fid++;
eval('var onlinerIcon' + LR_Fid + '=new OnlinerIcon();');
eval('onlinerIcon' + LR_Fid + '.pms[\'LR_Fid\']=LR_Fid;');
eval('onlinerIcon' + LR_Fid + '.pms[\'show\']=\'none\';');
if (typeof(Invite_ToCenter) == 'undefined') {
  eval('onlinerIcon' + LR_Fid + '.pms[\'aligny\']=_lr_mfloat_tobottom;');
  eval('onlinerIcon' + LR_Fid + '.pms[\'alignx\']=_lr_mfloat_toright;');
  eval('onlinerIcon' + LR_Fid + '.pms[\'alignW\']=_lr_mfloat_imgleft;');
  eval('onlinerIcon' + LR_Fid + '.pms[\'alignH\']=_lr_mfloat_imgtop;');
} else {
  eval('onlinerIcon' + LR_Fid + '.pms[\'xCenter\']=1;');
  eval('onlinerIcon' + LR_Fid + '.pms[\'yCenter\']=1;');
}
eval('onlinerIcon' + LR_Fid + '.pms[\'html\']=\'\';');
eval('onlinerIcon' + LR_Fid + '.pms[\'closer_show\']=0;');
eval('onlinerIcon' + LR_Fid + '.pms[\'LRfloater\']=\'LRfloater' + LR_Fid + '\';');
eval('onlinerIcon' + LR_Fid + '.pms[\'LRdiv\']=\'LRdiv' + LR_Fid + '\';');
eval('onlinerIcon' + LR_Fid + '.start();');
eval('onlinerIcon' + LR_Fid + '.LR_scrollTimer = window.setInterval(\'onlinerIcon' + LR_Fid + '.autoScroll()\', 200); ');
eval('LR_Floaters.push(onlinerIcon' + LR_Fid + ');');
LR_Fid++;
eval('var onlinerIcon' + LR_Fid + '=new OnlinerIcon();');
eval('onlinerIcon' + LR_Fid + '.pms[\'LR_Fid\']=LR_Fid;');
eval('onlinerIcon' + LR_Fid + '.pms[\'show\']=\'none\';');
eval('onlinerIcon' + LR_Fid + '.pms[\'aligny\']=1;');
eval('onlinerIcon' + LR_Fid + '.pms[\'alignx\']=1;');
eval('onlinerIcon' + LR_Fid + '.pms[\'alignW\']=0;');
eval('onlinerIcon' + LR_Fid + '.pms[\'alignH\']=0;');
eval('onlinerIcon' + LR_Fid + '.pms[\'html\']=\'\';');
eval('onlinerIcon' + LR_Fid + '.pms[\'closer_show\']=0;');
eval('onlinerIcon' + LR_Fid + '.pms[\'LRfloater\']=\'LRfloater' + LR_Fid + '\';');
eval('onlinerIcon' + LR_Fid + '.pms[\'LRdiv\']=\'LRdiv' + LR_Fid + '\';');
eval('onlinerIcon' + LR_Fid + '.start();');
eval('onlinerIcon' + LR_Fid + '.LR_scrollTimer = window.setInterval(\'onlinerIcon' + LR_Fid + '.autoScroll()\', 200); ');
eval('LR_Floaters.push(onlinerIcon' + LR_Fid + ');');
var lr_winunload = window.onunload;

function lrmove() {
  _lr_mfloat_toright = !_lr_mfloat_toright;
  var LR_o1 = LR_GetObj('LRfloater2').style;
  if (_lr_mfloat_toright == 1) {
    LR_o1.left = '';
    LR_o1.right = _lr_mfloat_imgleft + 'px';
  } else {
    LR_o1.right = '';
    LR_o1.left = _lr_mfloat_imgleft + 'px';
  }
}

function lr_winunload1() {
  if (LR_Floaters[2].pms['show'] != 'none' && LR_Floaters[2].pms['html'] != '') lr_closemini(1);
  if (typeof(lr_winunload) == 'function') {
    lr_winunload();
  }
}
var clickopenmini = 0;

function LR_showminiDiv(islrminimin) {
  if (LR_chatkind == -1 && !clickopenmini) {
    setTimeout('LR_showminiDiv();', 500);
    return;
  }
  if (LR_chatkind == 1) return;
  if (LR_Floaters[2].pms['html'] == '') {
    window.onunload = lr_winunload1;
  } else {
        if (LR_GetObj('LRMINIWIN').style.display != 'block') lrminiMax();

            return;
  }
  LR_invitew = 200;LR_inviteh = 200;
  if (!islrminimin) LR_SetCookie('LR_mimiwin', LR_Tick, 120);
  if (LR_Floaters[3].pms['html'] == '') {
    LR_Floaters[3].pms['html'] = minibarhtmlF(islrminimin);
  }
  LR_Floaters[2].pms['html'] = minichathtmlF(islrminimin);
  LR_Floaters[2].imageTimer(true);
  LR_Floaters[3].imageTimer(true);
  setTimeout("LR_GetObj('LRMINIWIN0').style.display='block';", 1000);
  lr_mini_blanksrc = islrminimin ? 1 : 0;
  lr_mini_closed = 0;
  setTimeout("LR_Floaters[2].showdiv(0);LR_Floaters[3].showdiv(0);", 300);
  LR_Floaters[1].hidden();
  if (document.body) {
    document.body.appendChild(LR_GetObj('LRdiv2'));
    document.body.appendChild(LR_GetObj('LRdiv3'));
  }
  if (!islrminimin) {
    setTimeout("LR_miniframe.location=LR_sysurl + 'LR/'+LR_minisrc()+'.aspx?id=' + LR_websiteid + '&cid=' + LR_cid + '&lng=' + LR_lng + '&sid=' + LR_sid+'&msg='+escape(LR_msg) + '&p=' + escape(location.href) + '&r=' + lr_refer5237", 100);
  }
}


function LR_showminiDiv_of() {
  if (LR_Floaters[3].pms['html'] == '') {
    LR_Floaters[3].pms['html'] = minibarhtmlF(0);
  }
  LR_Floaters[2].pms['html'] = minichathtmlF(0);
  LR_Floaters[2].imageTimer(true);
  LR_Floaters[3].imageTimer(true);
  setTimeout("LR_GetObj('LRMINIWIN0').style.display='block';", 1000);
  lr_mini_blanksrc = 0;
  lr_mini_closed = 0;
  setTimeout("LR_Floaters[2].showdiv(0);LR_Floaters[3].showdiv(0);", 300);
  if (document.body) {
    document.body.appendChild(LR_GetObj('LRdiv2'));
    document.body.appendChild(LR_GetObj('LRdiv3'));
  }
  setTimeout("LR_miniframe.location=LR_sysurl + 'LR/'+LR_minisrc()+'.aspx?id=' + LR_websiteid + '&cid=' + LR_cid + '&lng=' + LR_lng + '&sid=' + LR_sid + '&p=' + escape(location.href) + '&r=' + lr_refer5237", 100);
}

function lr_hidemini() {
  if (LR_Floaters[2].pms['html'] != '') {
    window.onunload = lr_winunload;
    LR_Floaters[2].pms['html'] = '';
    clickopenmini = 0;
    LR_Floaters[2].hidden();
  }
}
function LR_hcloopJS(url, param) {
  var me = arguments.callee;
  var src = url.indexOf('?') == '-1' ? url + '?' : url;
  src += param;
  if (src.indexOf('&d=') == '-1') src += '&d=' + new Date().getTime();
  me.Script && me.Script.parentNode.removeChild(me.Script);
  me.Script = document.createElement('script');
  me.Script.setAttribute('type', 'text/javascript');
  me.Script.setAttribute('charset', 'utf-8');
  me.Script.src = src;
  document.getElementsByTagName('head')[0].appendChild(me.Script);
}

function lr_closemini(nop) {
  if (!LiveReceptionCode_isonline) {
    lr_hidemini();
    lr_mini_closed = 1;
    return;
  }
  if (nop || confirm(LR_confirm_closechat)) {
      if(autoshowmini_time!=null){clearTimeout(autoshowmini_time);autoshowmini_time=null;}
    lr_hidemini();
    checkcount = -1;
    LR_inviteimgJS = 0;
    LR_hcloopJS(LR_sysurl + 'LR/CdEnd.aspx', 'id=' + LR_siteid + '&m=1&lng=' + LR_lng + '&sid=' + LR_sid);
    lastshowmini = new Date().getTime();
    lr_mini_closed = 1;
    _LR_show2();
  }
}
var lr_mini_blanksrc = 0,
  lr_mini_closed = -1;

function lrminiMin0(nop) {
  if (!lr_mini_blanksrc && nop) {
    window.onunload = lr_winunload;
    LR_miniframe.location = LR_sysurl + 'JS/im2.html';
    clickopenmini = 0;
    lr_mini_blanksrc = 1;
  }
}

function lrminiMin(nop) {
  if (LR_Floaters[2].pms['html'] == '') return;
  if (LR_GetObj('LRMINIBar').style.display == 'block') {
    lrminiMin0(nop);
    return;
  }
  LR_GetObj('LRMINIWIN').style.width = '390px';
  LR_GetObj('LRMINIWIN').style.display = 'none';
  lrminiMin0(nop);
  LR_GetObj('LRMINIBar').style.display = 'block';
  LR_maxoid = 0;
}

function lrminiMax() {
  if (lr_mini_blanksrc) {
    LR_SetCookie('LR_mimiwin', LR_Tick, 120);
    LR_miniframe.location = LR_sysurl + 'LR/' + LR_minisrc() + '.aspx?id=' + LR_websiteid + '&cid=' + LR_cid + '&lng=' + LR_lng + '&sid=' + LR_sid + '&p=' + escape(location.href) + '&r=' + lr_refer5237;
    lr_mini_blanksrc = 0;
    window.onunload = lr_winunload1;
    
  }
  if (LR_GetObj('LRMINIWIN') == null || LR_GetObj('LRMINIWIN').style.display != 'none') return;
  LR_GetObj('LRMINIWIN').style.display = 'block';
  LR_GetObj('LRMINIWIN').style.width = LiveReceptionCode_isonline ? '400px' : '420px';
  LR_GetObj('LRMINIBar').style.display = 'none';
  
  lr_newcount=0;
  if(LR_GetObj('LR-CIRCLE'))
  {
  LR_GetObj('LR-CIRCLE').style.display='none';
  LR_GetObj('LR-BUBBLE').style.display='none';
  }
}
if (typeof(LrinviteTimeout) == 'undefined' || isNaN(LrinviteTimeout) || LrinviteTimeout < 1) {
  LrinviteTimeout = 1;
}
if (!_lr_issupport_track && (LiveReceptionCode_isonline || !offline_invite_hidden)) {
  LR_nextinvite(1);
}

function getFlashMovieObject(movieName) {
  if (window.document[movieName]) {
    return window.document[movieName];
  }
  if (navigator.appName.indexOf('Microsoft Internet') == -1) {
    if (document.embeds && document.embeds[movieName]) return document.embeds[movieName];
  } else {
    return document.getElementById(movieName);
  }
}



function lr_refer5238() {
  if (typeof(lr_refer5236) != 'undefined') {
    return '&r=' + escape(lr_refer5236);
  }
  var lr_refer5235 = LR_getCookie('lr_refer5');
  if (lr_refer5235 != null) {
    LR_SetCookie('lr_refer5', '', -60);
    return '&r=' + lr_refer5235;
  }
  var ur = document.referrer;
  var i = ur.lastIndexOf('.');
  return '&rf1=' + escape(ur.substring(0, i)) + '&rf2=' + escape(ur.substr(i));
}

function openZoosUrl(url, data) {
  if (typeof(openZoosUrl_UserDefine) == 'function') {
    if (openZoosUrl_UserDefine()) return;
  };
  if (typeof(LR_istate) != 'undefined') {
    LR_istate = 3;
  }
  var lr_url1 = url;
  if (typeof(LR_opentimeout) != 'undefined' && typeof(LR_next_invite_seconds) != 'undefined') LR_next_invite_seconds = 999999;
  if (url == 'sendnote') {
    url = LR_sysurl + 'LR/Chatwin2.aspx?siteid=' + LR_websiteid + '&cid=' + LR_cid + '&sid=' + LR_sid + '&lng=' + LR_lng + '&p=' + escape(location.href) + lr_refer5238();
  } else {
    url = ((LR_userurl0 && typeof(LR_userurl) != 'undefined') ? LR_userurl : (LR_sysurl + 'LR/Chatpre.aspx')) + '?id=' + LR_websiteid + '&cid=' + LR_cid + '&lng=' + LR_lng + '&sid=' + LR_sid + '&p=' + escape(location.href) + lr_refer5238();
  }
  if (typeof(LR_UserSSL) != 'undefined' && LR_UserSSL && url.charAt(4) == ':') url = url.substring(0, 4) + 's' + url.substring(4, url.length);
  if (!data) {
    if (typeof(LR_explain) != 'undefined' && LR_explain != '') {
      url += '&e=' + escape(escape(LR_explain));
    } else if (typeof(LiveAutoInvite1) != 'undefined') {
      url += '&e=' + escape(escape(LiveAutoInvite1));
    }
  }
  if (typeof(LR_username) != 'undefined') {
    url += '&un=' + escape(LR_username);
  }
  if (typeof(LR_userdata) != 'undefined') {
    url += '&ud=' + escape(LR_userdata);
  }
  if (typeof(LR_ucd) != 'undefined') {
    url += '&ucd=' + escape(LR_ucd);
  }
  url+='&msg='+escape(LR_msg);
  if (data) url += data;
  url += '&d=' + new Date().getTime();
  if (typeof(LR_imgint) != 'undefined') url += '&imgint=' + LR_imgint;
  if (lr_url1 == 'fchatwin') {
    LR_ClientEnd = 0;
    window.location = url + '&f=1';
    return;
  }
  if (LR_sidexists != 2 && LiveReceptionCode_isonline && lr_url1 != 'bchatwin' && typeof(LR_pm003) != 'undefined' && LR_pm003 == 1) {
    LR_HideInvite();
    LR_istate = 1;
    clickopenmini = 1;
    LR_showminiDiv();
    lrminiMax();
    return;
  }

  var oWindow;
  try {
    if (LR_checkagent('opera|safari|se 2.x')) {
      oWindow = window.open(url);
    } else {
      oWindow = window.open(url, 'LRWIN_' + LR_websiteid, 'toolbar=no,width=760,height=460,resizable=yes,location=no,scrollbars=no,left=' + ((screen.width - 760) / 4) + ',top=' + ((screen.height - 460) / 4));
    }
    if (oWindow == null) {
      LR_ClientEnd = 0;
      window.location = url;
      return;
    }
    oWindow.focus();
  } catch (e) {
    if (oWindow == null) {
      LR_ClientEnd = 0;
      window.location = url;
    }
  }
}
if (LR_hasInstall > 0 && typeof(LR_swfok) == 'undefined') {
  var LR_swfok = 1;
  document.write('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="' + LR_sysurl.substring(0, LR_sysurl.indexOf('//')) + '//fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width=0 height=0 style="width: 0px; height: 0px; position: absolute;" id="LR_Flash" class="noswap"><param name=movie value="' + LR_sysurl + 'js/lrfla.swf"><PARAM NAME="BGColor" VALUE="FFFFFF"><param name=quality value=high><PARAM NAME="Scale" VALUE="NoBorder"><param name="allowScriptAccess" value="always" />' + (LR_hasInstall > 1 ? '' : '<embed src="' + LR_sysurl + 'js/lrfla.swf" style="width: 0px; height: 0px; position: absolute;"  quality=high width=0 height=0 type="application/x-shockwave-flash" pluginspage="' + LR_sysurl.substring(0, LR_sysurl.indexOf('//')) + '//www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" name="LR_Flash" allowScriptAccess="always"></embed>') + '</object>');
  try {
    document.write('<script language=\"VBScript\"\>\n');
    document.write('On Error Resume Next\n');
    document.write('Sub LR_Flash_FSCommand(ByVal command, ByVal args)\n');
    document.write('  Call LR_Flash_DoFSCommand(command, args)\n');
    document.write('End Sub\n');
    document.write('</SCRIPT\>');
  } catch (e) {}
  var LR_SaveTime = null;

  function LR_savedata(data, name) {
    if (LR_swfok) {
      LR_SaveTime = setTimeout('LR_savedata("' + data + '","' + name + '")', 5);
      return;
    }
    LR_swfok = 1;
    try {
      getFlashMovieObject('LR_Flash').SetVariable('send_type', 'SAVEDATA');
      getFlashMovieObject('LR_Flash').SetVariable('send_name', 'save');
      getFlashMovieObject('LR_Flash').SetVariable('send_vars', data);
      getFlashMovieObject('LR_Flash').SetVariable('obname', name);
      getFlashMovieObject('LR_Flash').SetVariable('send_go', 'true');
    } catch (e) {}
  }
  var LR_ReadTime = null;

  function LR_readdata(name) {
    if (LR_swfok) {
      LR_ReadTime = setTimeout('LR_readdata("' + name + '")', 50);
      return;
    }
    LR_swfok = 1;
    try {
      getFlashMovieObject('LR_Flash').SetVariable('send_type', 'READDATA');
      getFlashMovieObject('LR_Flash').SetVariable('send_name', 'read');
      getFlashMovieObject('LR_Flash').SetVariable('obname', name);
      getFlashMovieObject('LR_Flash').SetVariable('send_go', 'true');
    } catch (e) {}
  }
  var LR_swfloadok = 1;
  var LR_testload = 0;

  function LR_loadok() {
    if (LR_swfloadok) {
      LR_testload++;
      if (LR_testload == 20) {
        LR_SetCookie('LR_hasInstall', 0, 60);
        LR_hasInstall = 0;
        LR_useCookie();
        if (LR_swf_timeid != null) {
          clearInterval(LR_swf_timeid);
          LR_swf_timeid = null;
        }
        return;
      }
      try {
        getFlashMovieObject('LR_Flash').SetVariable('send_type', 'LOADOK');
        getFlashMovieObject('LR_Flash').SetVariable('send_go', 'true');
      } catch (e) {}
    } else {
      if (LR_swf_timeid != null) {
        clearInterval(LR_swf_timeid);
        LR_swf_timeid = null;
      }
    }
  }
  var LR_swf_timeid = null;
  if (LR_hasInstall > 0) LR_swf_timeid = setInterval('LR_loadok();', 100);
}
if (typeof(LR_Flash_DoFSCommand) != 'function') {
  function floatdata_append(_data, add) {
    if (_data != '') {
      _data += '|';
    }
    return _data += add;
  }

  function LR_Flash_DoFSCommand(command, args) {
    if (command == "LOADOK") {
      if (!LR_swfloadok) return;
      LR_swfloadok = 0;
      LR_swfok = 0;
      return;
    }
    if (command == "save") {
      if (args == 'true') {
        LR_swfok = 0;
        return;
      } else {}
      LR_swfok = 0;
    }
    if (command == "read") {
      var lrdata = '';
      if (args == '') {
        LR_readdata(LR_websiteid);
        LR_swfok = 0;
        return;
      } else if (args == '|') {} else {
        var oo = args.split('|');
        for (o = 0; o < oo.length; o++) {
          var oo1 = oo[o].split(',');
          if (oo1.length == 2) {
            if (isNaN(oo1[1])) {
              var v = 'if(typeof(LR_' + oo1[0] + ') != "undefined"){LR_' + oo1[0] + '=unescape(oo1[1]);}';
              eval(v);
            } else {
              eval('if(typeof(LR_' + oo1[0] + ') != "undefined"){LR_' + oo1[0] + '=oo1[1];}');
            }
          }
        }
      }
      if (LR_cid == '' || LR_cid == 'null') LR_cid = null;
      if (LR_sid == '' || LR_sid == 'null') LR_sid = null;
      if (LR_cid == null || LR_sid == null) {
        LR_cid = LR_getCookie('LiveWS' + LR_websiteid);
        LR_sid = LR_getCookie('LiveWS' + LR_websiteid + 'sessionid');
        lrdata = floatdata_append(lrdata, 'cid,' + LR_cid + '|sid,' + LR_sid + '|fistvisitetime,' + new Date().getTime() + '|lastvisitetime,' + new Date().getTime() + '|visitecounts,1|visitepages,1');
      } else {
        lrdata = floatdata_append(lrdata, 'lastvisitetime,' + new Date().getTime() + '|visitepages,' + (parseInt(LR_visitepages) + 1));
        if ((new Date().getTime() - parseInt(LR_lastvisitetime)) > 43200000) {
          LR_sid = LR_getCookie('LiveWS' + LR_websiteid + 'sessionid');
          lrdata = floatdata_append(lrdata, 'sid,' + LR_sid + '|visitecounts,' + (parseInt(LR_visitecounts) + 1));
        }
        LR_swfok = 0;
        if (lrdata != '') {
          LR_savedata(lrdata, LR_websiteid);
        }
      }
      LR_addnew0();
    }
  }
}

function LR_useCookie() {
  LR_cid = LR_getCookie('LiveWS' + LR_websiteid);
  LR_sid = LR_getCookie('LiveWS' + LR_websiteid + 'sessionid');
  LR_fistvisitetime = LR_getCookie('fistvisitetime');
  LR_lastvisitetime = LR_getCookie('lastvisitetime');
  LR_visitecounts = LR_getCookie('visitecounts');
  LR_visitepages = LR_getCookie('visitepages');
  LR_cname = LR_getCookie('cname');
  LR_ccolor = LR_getCookie('ccolor');
  if (LR_fistvisitetime == null) {
    LR_SetCookie('fistvisitetime', new Date().getTime(), 2628000);
    LR_SetCookie('lastvisitetime', new Date().getTime(), 2628000);
    LR_SetCookie('visitecounts', 1, 2628000);
    LR_SetCookie('visitepages', 1, 2628000);
  } else {
    LR_SetCookie('lastvisitetime', new Date().getTime(), 2628000);
    if ((new Date().getTime() - parseInt(LR_lastvisitetime)) > 43200000) {
      LR_SetCookie('visitecounts', (parseInt(LR_visitecounts) + 1), 2628000);
    }
    LR_SetCookie('visitepages', (parseInt(LR_visitepages) + 1), 2628000);
  }
  LR_addnew0();
}
if (LR_hasInstall > 0) {
  LR_readdata(LR_websiteid)
} else {
  LR_useCookie();
};

function LiveReceptionCode_BuildChatWin(_lrchatexplain, _lrhelpalt) {
  return ' href="javascript:void(0)"  onclick="openZoosUrl(\'chatwin\',\'&e=' + escape(escape(_lrchatexplain)) + '\');return false;" title="' + unescape(_lrhelpalt) + '" target="_self" ';
}

function LR_GetAutoInvite2() {
  if (LR_invitesearchkey && LR_skey != null && typeof(LiveAutoInvite3) != 'undefined') {
    return LiveAutoInvite3.replace('%SKEY%', unescape(LR_skey));
  } else if (LR_invitestring1_auto != '') {
    return LR_invitestring1_auto;
  } else {
    return LiveAutoInvite2.replace(/\\"/g, '"');
  }
}

function clearinviteTimeout() {
  if (LR_nexttimerID != null) {
    clearTimeout(LR_nexttimerID);
    LR_nexttimerID = null;
  }
  LR_HideInvite();
}

function LR_invitef() {
  if (LR_invite0 == 'fopenchatwin') {
    LR_gstate = 1;
    if (LR_istate < 2) {
      clearinviteTimeout();
      LR_istate = 2;
      window.focus();
      lr_hidemini();
      openZoosUrl('fchatwin');
    }
  } else if (LR_invite0 == 'no') {
    LR_gstate = 2;
    clearinviteTimeout();
    if (LR_istate > 0) {
      LR_istate = 0;
    }
  } else if (LR_invite0 == 'openchatwin') {
    LR_gstate = 1;
    if (LR_istate > -1) {
      clearinviteTimeout();
      LR_istate = 1;
      LR_showminiDiv();
    }
  } else if (LR_invite0 != '') {
    LR_gstate = 1;
    if (LR_istate > -1) {
      clearinviteTimeout();
      LR_istate = 1;
      LR_showInviteDiv(LR_invite0, LR_invite1);
    }
  }
}

function LR_IPCB(_lrip) {
    if(_lrip.status==0)
    {
        LR_hcloopJS(LR_sysurl + 'LS/newsidip.aspx', 'id=' + LR_siteid + '&sid=' + LR_sid + '&lng=' + _lrip.result.location.lng + '&lat=' + _lrip.result.location.lat + '&nation=' + encodeURIComponent(_lrip.result.ad_info.nation) + '&province=' + encodeURIComponent(_lrip.result.ad_info.province) + '&city=' + encodeURIComponent(_lrip.result.ad_info.city));
    }
}
function LR_LS() {
  if (LR_sidexists == -1) {
    setTimeout('LR_LS()', 100);
    return;
  }
  LR_Check_region();
  if (LR_invite0 == 'alerturl') {
    var oo5 = LR_invite1.split(',');
    alert(unescape(oo5[1]));
    window.location = oo5[0];
  } else if (LR_invite0 == 'url') {
    window.location = LR_invite1;
  } else if (LR_invite0 == 'alert') {
    alert(LR_invite1);
    LR_gstate = -2;
  }

  function LRedithref(pm, pv, href) {
    if (href.indexOf(pm) == -1) href += pm + pv;
    return href;
  }
  function LRedithref1() {
    var aList = document.getElementsByTagName('a');
    for (var i = 0; i < aList.length; i++) {
      var href0 = aList[i].href.toLowerCase();
      if (href0 && /chatpre.aspx|chatwin.aspx/.test(href0) && href0.indexOf('=' + LR_websiteid.toLowerCase()) > -1) {
        href0 = LRedithref('&r=', lr_refer5238(), href0);
        href0 = LRedithref('&p=', escape(location.href), href0);
        href0 = LRedithref('&cid=', LR_cid, href0);
        href0 = LRedithref('&sid=', LR_sid, href0);
        aList[i].href = href0;
      }
    }
  }
  LRedithref1();
  if (_lr_issupport_track) {
    if (LR_sidexists == 0) {
      var LR_Color = 16;
      if (navigator.appName != 'Netscape') {
        LR_Color = screen.colorDepth;
      } else {
        LR_Color = screen.pixelDepth;
      }
      var LR_sSize = screen.width + '*' + screen.height;
      var data = 'id=' + LR_siteid + '&sid=' + LR_sid + '&s=' + LR_sSize + '&ft=' + LR_fistvisitetime + '&fl=' + LR_lastvisitetime + '&vc=' + LR_visitecounts + '&vp=' + LR_visitepages + '&c=' + LR_Color + '&lng=' + LR_lng + '&cid=' + LR_cid + '&z=' + (new Date()).getTimezoneOffset() / 60;
      data += '&cn=' + escape(LR_cname) + '&co=' + escape(LR_ccolor);
      checkcount = -1;
      LR_inviteimgJS = 0;
      LR_hcloopJS(LR_sysurl + 'LS/newsid0.aspx', data);
      if(typeof(LR_IPTK) != 'undefined')
      {
          data = 'ip='+LR_ip+'&key='+LR_IPTK+'&output=jsonp&callback=LR_IPCB';
          LR_hcloopJS('http' + (LR_ssl ? 's' : '') + '://apis.map.qq.com/ws/location/v1/ip', data);
      }
    }
  }
  if (!LiveReceptionCode_isonline) {
    if (LR_pm004) LR_showminiDiv_of();
        if (offline_invite_hidden)return;
  }
  LR_invitef();
  if (_lr_issupport_track) LR_nextinvite(1);
  if (LR_sidexists == 2) return;
  if (LiveReceptionCode_isonline && _lr_issupport_track) {
    LR_hcloop();
  }
}
LR_LS();
function lronunload1() {
  if (!LR_ClientEnd) return;
  LR_ClientEnd = 0;
  LR_inviteimgJS = 0;
  LR_hcloopJS(LR_sysurl + 'LR/ClientEndJS.aspx', 'id=' + LR_siteid + '&lng=' + LR_lng + '&sid=' + LR_sid);
  try {
    if (typeof(lronunload0) == 'function') lronunload0();
  } catch (e) {}
}
var lronunload0 = window.onunload;
window.onunload = lronunload1;


function LR_nextinvite(fic) {
  if (LR_gstate < 1 && LR_istate == 0 && typeof(LiveAutoInvite0) != 'undefined') {
    if (!fic && (!LR_repeatinvite || typeof(LR_next_invite_seconds) == 'undefined')) return;
    var lastshowinvite = parseInt(LR_getCookie('lastshowinvite'));
    if (isNaN(lastshowinvite)) {
      lastshowinvite = 0;
    }
    var intimeout = _lr_invite_interval * 1000 - (new Date().getTime() - lastshowinvite);
    var intimeout1 = (fic ? LrinviteTimeout : LR_next_invite_seconds) * 1000;
    if (intimeout > 0) {
      intimeout1 += intimeout;
    }
    LR_istate = 1;
    LR_nexttimerID = setTimeout('LR_showInviteDiv("1","1")', intimeout1);
  }
}
function LR_RefuseChat() {
  if (LR_gstate == 1) {
    LR_invite0 = '';
    LR_istate = -1;
  }
  LR_nextinvite();
}





function _LR_show2(_lrshow) {
  if (lr_mini_closed!=1) return;
  if (typeof(LR_nextshowmini_s) != 'undefined' && !isNaN(LR_nextshowmini_s) && new Date().getTime() - lastshowmini > LR_nextshowmini_s * 1000) {
    LR_showminiDiv(_lrshow);
  }
}

function LR_CheckImgJS(w, w1, w2, w3) {
  LR_inviteimgJS = 1;
  if (!LR_cookie_test || w == 2) {
    LR_CheckImgJS1(w, w1, w2, w3);
    return;
  }
  var w0 = w + '|' + new Date().getTime() + '|' + (w1 ? w1 : '') + '|' + (w2 ? w2 : '') + '|' + (w3 ? w3 : '');
  LR_SetCookie('LR_check_data', w0, 0.1);
}

function LR_CheckImgJS1(w, w1, w2, w3) {
  if (!w) {
    return;
  }
  if (w == 28) {
    return;
  }
  if (checkcount == -1 && w != 6) return;
  if (w > 0) {
    if (LR_chatkind == -1) LR_chatkind = 0;
    if (w == 2) {
      LR_gstate = 1;
      if (LR_istate < 2) {
        clearinviteTimeout();
        LR_istate = 2;
        window.focus();
        lr_hidemini();
        openZoosUrl('fchatwin');
      }
    } else if (w == 8) {
      LR_gstate = 1;
      if (LR_istate > -1) {
        clearinviteTimeout();
        LR_istate = 1;
        if (w1) LR_chatkind = w1;
        LR_showminiDiv();
      }
    } else if (w == 4) {
      LR_gstate = 0;
      if (LR_istate > 1) {
        LR_istate = 0;
      }
      LR_nextinvite();
      if (LR_chatkind) {
        LR_chatkind = 0;
        lastshowmini = new Date().getTime();
        lr_mini_closed = 1;
      }
      _LR_show2(0);
    } else if (w == 5) {
      if (LR_gstate != 2) {
        LR_gstate = 2;
        LR_SetCookie('LR_lastchat', '1', 720);
      }
      clearinviteTimeout();
      if (LR_istate > 0) {
        LR_istate = 0;
      }
      if (w1) LR_chatkind = w1;
      if (w1 == 1) lr_hidemini();
      if (lr_mini_closed==1) return;
      if (w1 == 2 && LR_GetObj('LRMINIBar') == null) {
        LR_HideInvite();
        LR_istate = 1;
        LR_showminiDiv();
      }
      if (w2) LR_maxoid = w2;
      if (IEmsg && w3 && LR_getCookie('LR_mimiwin') == LR_Tick) lrminiMax();
    } else if (w == 7) {
      LR_gstate = -1;
      if (LR_istate > 1) {
        LR_istate = 0;
      }
      LiveReceptionCode_isonline = 0;
      if (typeof(LR_offline) == 'function') LR_offline();
      LR_Floaters[0].pms['html'] = LR_buildfloat();
      LR_Floaters[0].imageTimer(true);
      return;
    } else if (w == 1) {
      if (LR_gstate == 1) return;
      checkcount = 2;
      LR_invite0 = w1;
      LR_invite1 = w2;
      LR_invitef();
    }
  }
}

function LR_hcloop() {
  if (!LiveReceptionCode_isonline || !_lr_issupport_track || (LR_visitetime + 1800000) < new Date().getTime()) return;
  if (LR_cookie_test) {
    if (LR_getCookie('LR_mimiwin') != LR_Tick && LR_chatkind == 2 && !clickopenmini) lrminiMin(1);
    var LR_check_data = LR_getCookie('LR_check_data');
    if (LR_check_data != null) {
      var LR_ss = LR_check_data.split("|");
      if (LR_ss.length > 4 && LR_cookie_ctick < parseInt(LR_ss[1])) {
        LR_cookie_ctick = parseInt(LR_ss[1]);
        LR_CheckImgJS1(LR_ss[0], LR_ss[2], LR_ss[3], LR_ss[4]);
        setTimeout('LR_hcloop()', 500);
        return;
      }
    }
  }
  if (checkcount == -1 || !LR_inviteimgJS) {
    setTimeout('LR_hcloop()', 500);
    return;
  }
  if (LR_istate == -1) {
    LR_istate = -2;
    checkcount = -1;
    LR_inviteimgJS = 0;
    LR_hcloopJS(LR_sysurl + 'JS/RefuseChatjs.aspx', 'id=' + LR_siteid + '&sid=' + LR_sid + '&lng=' + LR_lng);
    setTimeout('LR_hcloop()', 500);
    return;
  }
  if (LR_cookie_test && LR_getCookie('lastinvite') != null) LR_lastinvite = LR_getCookie('lastinvite');
  if (LR_lastinvite != null) {
    if (LR_MCount1 < 5000) LR_MCount1 = 5000;
    if ((new Date().getTime() - parseInt(LR_lastinvite)) > LR_MCount1) {
      LR_lastinvite = new Date().getTime();
      LR_SetCookie('lastinvite', LR_lastinvite, 720);
      LR_inviteimgJS = 0;
      var url = '';
      if (LR_explain != '') {
        url = '&e=' + escape(escape(LR_explain));
        LR_explain = '';
      }
      LR_hcloopJS(LR_sysurl + 'js/CdCheck.aspx', 'id=' + LR_siteid + '&sid=' + LR_sid + url + ((LR_GetObj('LRMINIWIN') != null && LR_GetObj('LRMINIWIN').style.display == 'none') ? ('&oid=' + LR_maxoid) : ''));
    }
  }
  setTimeout('LR_hcloop()', 500);
}
var autoshowmini_time=null;
function LR_showminiDiv2() {
  if (typeof(LR_showminiDiv_no) != 'undefined' || !LR_pm001 || !LiveReceptionCode_isonline || !LR_pm002 || LR_sidexists == 2) return;
  if (LR_cid == null) {
    setTimeout('LR_showminiDiv2();', 300);
    return;
  }
  autoshowmini_time=setTimeout('LR_HideInvite();LR_istate=1;LR_showminiDiv();', typeof(LR_showminiDivtimeout) != 'undefined' ? LR_showminiDivtimeout * 1000 : 2000);
  return;
}
LR_showminiDiv2();


}
// document.writeln("</style>");
document.writeln("<div class=\"swtCenter swt\"> <span class=\"closeBtn_swt\"></span>");
/*2-3添加*/
// document.writeln("<div class=\"dashengt\"><img src=\"/static/images/danshengt.png\"></div>");
document.writeln("<a href=\"/zt/2017july/\" style=\"position: absolute;width: 100%;height:2.7rem;top: 15%;z-index:3;\"></a>")
// document.writeln("<span class=\"guangquan\"></span>")
// document.writeln("<span class=\"guangquan gq1\"></span>")
// document.writeln("<span class=\"guangquan gq2\"></span>")
/*2-3添加 
document.writeln("  <div class=\"swt_lists\"> ");
document.writeln("      <a href=\"tel:0754-87268339\" class=\"swt_list1\"><i class=\"swtCallIcon\"></i><em>拨打电话</em></a> ");
document.writeln("        <a href=\"javascript:swt('商务通弹框');\" class=\"swt_list2\" target=\"_blank\"><i class=\"swtLinkCounter\" id=\"swtLinkCounter\" style=\"color:#FFF;\">8</i><i class=\"swtLinkIcon\"></i><em>悄悄提问</em></a> ");
document.writeln("  </div>");
document.writeln("</div>");
document.writeln("");
// 底栏校对高度, 使其内容上下居中
$(".bottomBar .am-u-sm-5").height($(".bottomBar").height());
// 自定义商务通弹框淡入淡出代码
$(document).ready(function(){
  // 电话
  // $(".tel").attr("href","tel:075487268339");
  var temp=(window.location.href);  
      temp=(temp.substring(temp.indexOf('//')+2,temp.indexOf('/',temp.indexOf('//')+2)));
      if(temp=='mm.stmingliu.cn')
  setTimeout(openMswt,12000);
  function openMswt(){
    $(".swt").removeClass('animated zoomInDown zoomOutDown').addClass('animated zoomInDown').fadeIn();
  }
  function closeSwt(){
    setTimeout(openMswt,20000);
     }
  $(function(){$(".closeBtn_swt").on("click",function(){ 
      $('.swt').removeClass('zoomInDown zoomOutDown').addClass('animated zoomOutDown').
      fadeOut(1500);  
    closeSwt();
    }) })
  //顶栏QQ咨询
  // pubQQ();
});


/*咨询拖拽Start*/
    /*拖拽*/
var consult = document.getElementById("consult");
    var flag = false;
    var cur = {
        x:0,
        y:0
    }
    var nx,ny,dx,dy,x,y ;
    function down(){
        flag = true;
        var touch ;
        if(event.touches){
            touch = event.touches[0];
        }else {
            touch = event;
        }
        cur.x = touch.clientX;
        cur.y = touch.clientY;
        dx = consult.offsetLeft;
        dy = consult.offsetTop;
    }
    function move(){
        if(flag){
            var touch ;
            if(event.touches){
                touch = event.touches[0];
            }else {
                touch = event;
            }
            nx = touch.clientX - cur.x;
            ny = touch.clientY - cur.y;
            x = dx+nx;
            y = dy+ny;
            consult.style.left = x+"px";
            consult.style.top = y +"px";

            //阻止页面的滑动默认事件
            // document.addEventListener("touchmove",function(){
            //     event.preventDefault();
            // },false);
        }
    }
    //鼠标释放时候的函数
    function end(){
        flag = false;
    }
    consult.addEventListener("mousedown",function(){
        down();
    },false);
    consult.addEventListener("touchstart",function(){
        down();
    },false)
    consult.addEventListener("mousemove",function(){
        move();
        event.preventDefault();
    },false);
    consult.addEventListener("touchmove",function(){
        consultL = consult.offsetLeft;
        wW = window.innerWidth;
        // alert(wW)
        var consultW = consult.offsetWidth;
        move();
        event.preventDefault();

        if(consultL < -(consultW/1.2)){/*值越小出去的面积越大*/
          confirm('您好，是否需要关闭此咨询窗口？') ? consult.style.display = 'none' : consult.style.left = -(consultW/1.22)+20;          
        }
        if(consultL > wW-(consultW/10)){/**/
          confirm('您好，是否需要关闭此咨询窗口？') ? consult.style.display = 'none' :consult.style.left = wW-(consultW/4)-20;
        }

    },false)
    document.body.addEventListener("mouseup",function(){
        end();
    },false);
    consult.addEventListener("touchend",function(){
        end();
    },false);


//商务通官方JS代码
//document.writeln("<script language=\"javascript\" src=\"http://lvt.zoosnet.net/JS/LsJS.aspx?siteid=LVT81076038&float=1&lng=cn\"></script>");
//修复“有轨迹无对话，有对话无来路”的问题
function swt(){
  var e = 'wap';
  if(arguments.length == 1){
    e = escape(arguments[0]); // 中文需要转码
   //encodeURIComponent 其商务通第三方并不支持此方法
  }
  var r = encodeURIComponent(document.referrer); //来路页面
  var p = encodeURIComponent(window.location.href); //受访页面
  var url = 'http://lvt.zoosnet.net/LR/Chatpre.aspx?id=LVT81076038&lng=cn'; //商务通仅超链接
  // 商务通加载完成执行 openZoosUrl() 否则打开商务通超链接
  if (typeof openZoosUrl == 'undefined') {
    url = url + '&r=' + r + '&p=' + p + '&e=' + e;
    try{
       window.open(url);
    } catch(ex){
      window.location.href = url; // 兼容移动端不支持 window.open() 的浏览器
    }
    return false;
  }else {
    openZoosUrl('chatwin','&e='+e);
  }
}
function freeTel(){
  var phone = document.getElementById("callbF_text");
  swt("客户电话:"+phone.value);
}

/* 自定义商务通 end */

/* 百度统计start  
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?57f69f053dd73e78bfa9a3ce7bde269b";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
/* 百度统计end */
/*17-3-12:字体自适应start 
        (function (doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                if(clientWidth>=640){
                    docEl.style.fontSize = '100px';/*移动端字体最好剩以16以rem做单位 
                }else{
                    
                    docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
                    if(parseInt(docEl.style.fontSize) < 12 ){
                        docEl.style.fontSize = '12px';/*最小12pxrem就不能转换了 
                    }
                }
            };

        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window);
/*字体自适应End*/

/*手机号码start*/
// document.writeln('<style>#goutou{ width: 10rem;height: 5rem;position: fixed;right: -2rem;z-index: 99;  }#nianhou{position: fixed;right:0;left:0;top:0;bottom:0;background:rgba(0,0,0,.8);z-index: 10000;display: none;}#xf{ width:29rem;height:24rem;background:url(/static/images/xuanfu.png)no-repeat center top;background-size: 100%;position: absolute;z-index: 99; }#LR_text1{ position: relative;top:1.8rem;width: 18rem;margin-left: 2.8rem;border:none;padding:0;outline:none;font-size:2.4rem; }#xf>span:nth-of-type(2){ width: 3rem;height: 3rem;position: absolute;right: 0rem;top: 0rem; }#goutou>img{width:100%;}.on{-webkit-animation:fadeOutRightd 4s .2s ease both;-moz-animation:fadeOutRightd 4s .2s ease both;-ms-animation:fadeOutRightd 4s .2s ease both;-o-animation:fadeOutRightd 4s .2s ease both;}@-webkit-keyframes fadeOutRightd{0%{opacity:1;-webkit-transform:translateX(0)}25%{opacity:0;-webkit-transform:translateX(20px)}50%{opacity:1;-webkit-transform:translateX(10px)}75%{opacity:1;-webkit-transform:translateX(0px)}100%{opacity:0;-webkit-transform:translateX(20px);display:none;}}@-moz-keyframes fadeOutRightd{0%{opacity:1;-moz-transform:translateX(0)}25%{opacity:0;-moz-transform:translateX(20px)}50%{opacity:1;-moz-transform:translateX(10px)}75%{opacity:1;-moz-transform:translateX(0px)}100%{opacity:0;-moz-transform:translateX(20px);display:none;}}@-ms-keyframes fadeOutRightd{0%{opacity:1;-ms-transform:translateX(0)}25%{opacity:0;-ms-transform:translateX(20px)}50%{opacity:1;-ms-transform:translateX(10px)}75%{opacity:1;-ms-transform:translateX(0px)}100%{opacity:0;-ms-transform:translateX(20px);display:none;}}@-o-keyframes fadeOutRightd{0%{opacity:1;-o-transform:translateX(0)}25%{opacity:0;-o-transform:translateX(20px)}50%{opacity:1;-o-transform:translateX(10px)}75%{opacity:1;-o-transform:translateX(0px)}100%{opacity:0;-o-transform:translateX(20px);display:none;}}#xf2{ width:29rem;height:24rem;background:url(/static/images/xuanfu2.png)no-repeat center top;background-size: 100%;position: absolute;z-index: 99;display:none; }#xf2>span{ width: 3rem;height: 3rem;position: absolute;right: 0rem;top: 0rem; }</style>')
// document.writeln('<span id="cha" style="display: block;position: fixed;width: 2rem;height: 2rem;right: 4rem;text-align: center;top: 30%;z-index: 100;" onclick="gtgb();">x</span>')
// document.writeln('<div id="goutou"><img src="/static/images/xuanfu.gif"></div>')
// document.writeln('<div id="nianhou">')
// document.writeln('<div id="xf">')
// document.writeln('<span style="font-size:3.4rem;color:#ff284b;font-weight:800;text-align:center;display: block;margin:0 auto;line-height:9rem;">年后红包领不停</span>')
// document.writeln('<span onclick="pibinh();"></span>')
// document.writeln('<input type="number" id="LR_text1" placeholder="请输入手机号码">');
// document.writeln('<div id="LR_button1" onclick="validatemobile(LR_text1);" style="width: 100%;height: 6.8rem;position: absolute;bottom: 0;border-radius: 0 0 3rem 3rem;"></div>')
// document.writeln('</div>')
// document.writeln('<div id="xf2">')
// document.writeln('<span onclick="pibinh();"></span>')
// document.writeln('</div>')
// document.writeln('</div>')
// // function LR_submit1(chat){
// //       LR_explain='客人输入的内容如下:'+LR_GetObj('LR_text1').value;
// //       openZoosUrl(chat?'chat':'sendnote');
// //   }



// function pibinh(){
//   $('#nianhou').css({'display':'none'})
// }
// function gtgb(){

//   $('#goutou').addClass('on');setTimeout(function(){$('#goutou').hide('slow');},5000);
//   $('#cha').addClass('on');setTimeout(function(){$('#goutou').hide('slow');},5000);
// }
// $(function(){

//   $('#goutou').css({
//               top:($(window).height() - $("#goutou>img").outerHeight())/2
//             })
//   $('#cha').css({
//               top:($(window).height() - $("#goutou>img").outerHeight())/2
//             })

//   $('#goutou').click(function(){

//       $('#xf').css({
//               left:($(window).width() - $("#xf").outerWidth())/2,
//               top:($(window).height() - $("#xf").outerHeight())/2
//             })
//       $('#nianhou').css({ display:'block'})
      
//     })

// })
// function validatemobile(mobile){ 
//     var mobileVal = mobile.value;
//        if(mobileVal.length==0) 
//        { 
//           alert('请输入手机号码！'); 
//           document.form1.mobile.focus(); 
//           return false; 
//        }     
//        if(mobileVal.length!=11) 
//        { 
//            alert('请输入有效的手机号码！'); 
//            document.form1.mobile.focus(); 
//            return false; 
//        } 
//        var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/; 
//        if(!myreg.test(mobileVal)) 
//        { 
//            alert('请输入有效的手机号码！'); 
//            document.form1.mobile.focus(); 
//            return false; 
//        }
//        $('#xf').css({'display':'none'})
//        $('#xf2').css({
//               left:($(window).width() - $("#xf2").outerWidth())/2,
//               top:($(window).height() - $("#xf2").outerHeight())/2
//             })
//        $('#xf2').css({'display':'block'})

//    }
   
/*手机号码end*/
