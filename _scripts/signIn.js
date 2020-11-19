

    $(".signProcess .signNav li").click(function(){
        console.log($(this).index())
        var index = $(this).index();
        $(".signProcess .signNav li").eq(index).addClass("current").siblings().removeClass("current");
        var height = $(".signProcess .sign-item").eq(index).offset().top - 315;
        $("html,body").animate({scrollTop:height})
    })

    $(window).scroll(function(){
        var footerHeight = $("#footer").offset().top;
        var scrollHeight = $(window).scrollTop();
        var screenHeight = $(window).height();
        
        if(scrollHeight + screenHeight >= footerHeight){
            $(".signBanner").addClass("current");
            $(".signProcess").addClass("current");
            $(".signProcess .signNav").addClass("current");
        }else{
            $(".signBanner").removeClass("current");
            $(".signProcess").removeClass("current");
            $(".signProcess .signNav").removeClass("current");
        }
    })
    
