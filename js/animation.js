$(document).ready(function(){
    //nav
    var nav = $("#page1").find(".side");
    $("#nav").on("click",function(){
        $(nav).animate({right:"0"},600);
        $(this).css({display:"none"});
    });
    var exit = $("#page1").find("i");
    $(exit).on("click",function(){
        $(nav).animate({right:"-22%"},600);
        $("#nav").css({display:"block"});
    });

    //top
    $("#logo").on("click",function(){
       $("html,body").animate({scrollTop:0},800);
        $(".side").find("li").removeClass("on");
        $(".side").find("span").animate({"width":"0"},0);
    });

    //
    $(".box").find("div").animate({"opacity":"1"},1200);


    //
    $('.maintext').shuffleText("PORTFOLIO",{
        frames   : 40,    // Duration In ms (Milliseconds) Of Shuffle For Each Letter
        maxSpeed : 1000,  // Max Duration In ms (Milliseconds) Of Global Shuffle
        amount   : 3,     // Amount Of Shuffle For Each Letter
    });

    //
    $(function() {
            function swing() {
                $('#down').animate({'top':'87%'},600).animate({'top':'87.5%'},600, swing);
            }
            swing();
        });

    // sidebar li
    $('ul').pageScroll({
        speed:1100
    });

	//
	var alert = $("#alert");
	var close = $(alert).find("#close");
	$(close).on("click",function(){
		$(alert).hide(100);
	});

    // skill progress bar
    $(window).on("scroll",function(){
        var ht = $(window).height();
        var scroll = $(window).scrollTop();
        if(scroll>=ht*0.8 && scroll<ht*0.9){
            $('#demoprogressbar1').LineProgressbar({
                percentage: 80
            });
            $('#demoprogressbar2').LineProgressbar({
                percentage: 80
            });
            $('#demoprogressbar3').LineProgressbar({
                percentage: 50
            });
            $('#demoprogressbar4').LineProgressbar({
                percentage: 50
            });
            $('#demoprogressbar5').LineProgressbar({
                percentage: 60
            });
            $('#demoprogressbar6').LineProgressbar({
                percentage: 50
            });
        }
    });

    // web design
   $(window).on("scroll",function(){
        var ht = $(window).height();
        var scroll = $(window).scrollTop();
        if(scroll>=ht*2.5 && scroll<ht*3){
            $("#page4").find("li#web1").animate({"margin-top":"0","opacity":"1"},800);
            $("#page4").find("li#web2").delay(100).animate({"margin-top":"0","opacity":"1"},800);
            $("#page4").find("li#web3").delay(200).animate({"margin-top":"0","opacity":"1"},800);
        }
    });
    // web design
    var web = $("#page4").find("div").find("li");
    var black = $(web).find(".blackbg");
    var direct = $(black).find("img");
    $(web).on("mouseenter",function(){
       $(this).find(black).fadeIn(300);
        $(this).siblings().find(black).fadeOut(300);
        $(this).find(direct).animate({"padding-right":"0"},300);
    });
    $(web).on("mouseleave",function(){
       $(this).find(black).fadeOut(300);
        $(this).siblings().find(black).fadeOut(300);
        $(this).find(direct).animate({"padding-right":"15px"},300);
    });

    // ux/ui design
    var uxui = $("#page5").find("div");
    var black2 = $(uxui).find(".blackbg");
    var direct2 = $(black2).find("img");
    $(uxui).on("mouseenter",function(){
       $(this).find(black2).fadeIn(300);
        $(this).siblings().find(black2).fadeOut(300);
        $(this).find(direct2).animate({"padding-right":"0"},300);
    });
    $(uxui).on("mouseleave",function(){
       $(this).find(black2).fadeOut(300);
        $(this).siblings().find(black2).fadeOut(300);
        $(this).find(direct2).animate({"padding-right":"20px"},300);
    });

    // work
    var work = $("#page6").find("li");
    $(work).on("mouseenter",function(){
       $(this).find("img").stop().animate({"height":"108%"},200);
        $(this).siblings().find("img").stop().animate({"height":"100%"});
    });
    $(work).on("mouseleave",function(){
       $(this).find("img").stop().animate({"height":"100%"},100);
        $(this).siblings().find("img").stop().animate({"height":"100%"});
    });

    // work
    $("li#work").on("click",function(){
       $(".modal").fadeIn(300);
       var imgsrc = $(this).find("img").attr("src");
       var imgtext = $(this).find("img").attr("alt");
        $(".modalimg").attr({src:imgsrc});
    });
    $("span").on("click",function(){
       $(".modal").fadeOut(300);
    });
});
