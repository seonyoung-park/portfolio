$(document).ready(function(){
    var li = $(".side").find("li");
    $(li).on("click",function(){
       $(this).addClass("on");
        $(this).find("span").stop().animate({"width":"100%"},300);
        $(this).siblings().removeClass("on");
        $(this).siblings().find("span").stop().animate({"width":"0"},200);
    });
    $(window).on("scroll",function(){
        var ht = $(window).height();
        var scroll = $(window).scrollTop();
        var list = $("body").children(".side").find("li");
        if(scroll>=ht*0.9 && scroll<ht*1.8){
            $(list).removeClass("on");
            $(list).eq(4).addClass("on");
            $(list).eq(4).find("span").stop().animate({"width":"100%"},200);
            $(list).eq(4).siblings().find("span").stop().animate({"width":"0"},100);
        }else if(scroll>=ht*1.8 && scroll<ht*2.8){
            $(list).removeClass("on");
            $(list).eq(3).addClass("on");
            $(list).eq(3).find("span").stop().animate({"width":"100%"},200);
            $(list).eq(3).siblings().find("span").stop().animate({"width":"0"},100);
        }else if(scroll>=ht*2.8 && scroll<ht*3.8){
            $(list).removeClass("on");
            $(list).eq(2).addClass("on");
            $(list).eq(2).find("span").stop().animate({"width":"100%"},200);
            $(list).eq(2).siblings().find("span").stop().animate({"width":"0"},100);
        }else if(scroll>=ht*3.8 && scroll<ht*4.8){
            $(list).removeClass("on");
            $(list).eq(1).addClass("on");
            $(list).eq(1).find("span").stop().animate({"width":"100%"},200);
            $(list).eq(1).siblings().find("span").stop().animate({"width":"0"},100);
        }else if(scroll>=ht*4.8 && scroll<ht*5.8){
            $(list).removeClass("on");
            $(list).eq(0).addClass("on");
            $(list).eq(0).find("span").stop().animate({"width":"100%"},200);
            $(list).eq(0).siblings().find("span").stop().animate({"width":"0"},100);
        }else{
            $(list).removeClass("on");
            $(list).find("span").stop().animate({"width":"0"},100);
        }
    });
    $(window).on("scroll",function(){
        var ht = $(window).height();
        var scroll = $(window).scrollTop();
        if(scroll>=ht*0.5){
            $("body").children(".side").stop().animate({"left":"0"},500);
        }else if(scroll<ht*0.5){
            $("body").children(".side").stop().animate({"left":"-50px"},500);
        }
    });
});
