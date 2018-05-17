$(function(){
    $(".social-links li.weixin").mouseenter(function(){
        $(".wechat").show();
    });
    $(".remove-wechat").click(function(){
        $(".wechat").hide();
    });
});