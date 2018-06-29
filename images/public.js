// JavaScript Document
//toplink
// $(window).scroll(function() {
// 	var top_height = $(".banner").height() + $(".logos").height();
// 	var padding_top = 0;
// 	var scroll_top = 0;
// 	var scroll_top = $(document).scrollTop();
// 	$(".toplink2").hide();
// 	if (scroll_top >= top_height) {
// 		$(".toplink").addClass("fixed");
// 		$(".toplink li").first().addClass("on");
// 		$(".toplink2").show();
// 		$("div.part").each(function(index) {
// 			padding_top += $("div#" + index).get(0).offsetHeight;
// 			if (scroll_top>=padding_top + top_height - $("div#" + index).get(0).offsetHeight) {
// 				$(".toplink li").eq(index).addClass("on").siblings().removeClass("on");
// 			}
// 		});
// 	} else {
// 		$(".toplink").removeClass("fixed");
// 		$(".toplink li").removeClass("on");
// 		$(".toplink2").hide();
// 	}
// });
$(function() {
    $(".toplink li").click(function() {
        var index = $(".toplink li").index(this);
        $(this).addClass("on").siblings().removeClass("on");
    });
    var toplink_height = $(".toplink").height();
	$(".toplink li").click(function() {
        $("html,body").stop().animate({
            scrollTop:$("div#"+$(this).index()).offset().top - toplink_height
        }, 500);
    });

	var li_w = $(".case").find("li").width();
    var ul = $(".case").find("ul");
    var li_n = ul.children("li").length;
    ul.width(li_n * li_w);
    $(".next").click(function() {
        var box = $(this).closest(".case").find("ul");
        var left = box.css("left");
        left = parseInt(left.substring(0, left.length - 2));
        var w = left - li_w;
        if (w <= "-" + box.width()) {} else {
            if(!$(box).is(":animated")){
			$(box).animate({
                left:+w + "px"
            }, 500);
			}
        }
    });
    $(".prev").click(function() {
        var box = $(this).closest(".case").find("ul");
        var left = box.css("left");
        left = parseInt(left.substring(0, left.length - 2));
        var w = li_w + left;
        if (left == 0) {} else {
            if(!$(box).is(":animated")){
			$(box).animate({
                left:w + "px"
            }, 500);
			}
        }
    });
});
