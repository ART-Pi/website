;(function(){
    var backIndex = 0;
    var backLen = $(".talentBanner .back-wrapper li").length;
    var backTimer;
    // backTimer = setInterval(function(){
    //     backIndex ++;
    //     if(backIndex > backLen - 1){
    //         backIndex = 0;
    //     }
    //     // console.log(backIndex)
    //     $(".talentBanner .back-wrapper li").eq(backIndex).addClass("current").siblings().removeClass("current");
    // },4000)


})();

;(function(){
   
    var showWidth = $(".talentBanner .talentBanner-show").width();
    var showHeight = $(".talentBanner .talentBanner-show").height();
    console.log(showWidth)
    $(".talentBanner .slider-item").css({"width": showWidth + "px", "height": showHeight + "px"})
    $(".talentBanner .talentBanner-show .slider-item").each(function(index){
        $(this).css({"left": showWidth * index})
        $(this).find(".item-left").css({"opacity":1})
    })

    

    var showIndex = 0;
    var showLen = $(".talentBanner .talentBanner-show .slider-item").length;
    var showTimer;
    $(".talentBanner .talentBanner-show .slider-item").eq(showIndex).addClass("current").siblings().removeClass("current");
    // moveIn(showIndex);
    function openInterval(){
        // showTimer = setInterval(function(){
        //     showIndex ++ ;
        //     console.log(showIndex);
        //     if(showIndex >= showLen - 1 ){
        //         $(".talentBanner .talentBanner-show .slider").animate({"left":0},0);
        //         showIndex = 0;
        //     }
        //     move(showIndex,showWidth)
        //     // moveIn(showIndex)
        // },4000);
    
    }

    function move(showIndex,showWidth){
        $(".talentBanner .talentBanner-show .slider-item").eq(showIndex).addClass("current").siblings().removeClass("current");
        $(".talentBanner .talentBanner-show .slider").animate({"left": - showIndex * showWidth +"px"})
        $(".talentBanner .talentBanner-show .slider-item").eq(showIndex).find(".item-left").addClass("fadeInDown");
        $(".talentBanner .talentBanner-show .slider-item").eq(showIndex).siblings().find(".item-left").removeClass("fadeInDown");
        $(".talentBanner .talentBanner-show .slider-item").eq(showIndex).find(".item-right").addClass("fadeInRight");
        $(".talentBanner .talentBanner-show .slider-item").eq(showIndex).siblings().find(".item-right").removeClass("fadeInRight");
        $(".talentBanner .talentBanner-show .slider-btn span").eq(showIndex).addClass("current").siblings().removeClass("current")
   }
    // openInterval()
   //当页面大小变化时
   $(window).resize(function(){
        showWidth = $(".talentBanner .talentBanner-show").width();
        showHeight = $(".talentBanner .talentBanner-show").height();
        $(".talentBanner .slider-item").css({"width": showWidth + "px", "height": showHeight + "px"})
        $(".talentBanner .talentBanner-show .slider-item").each(function(index){
            $(this).css({"left": showWidth * index})
            $(this).find(".item-left").css({"opacity":1})
        })
        clearInterval(showTimer);
        moveIn(showIndex);
        // move(showIndex,showWidth)
        openInterval()
        
    })
    $(".talentBanner .talentBanner-show .slider-btn").mouseenter(function(){
        clearInterval(showTimer);
    })

    $(".talentBanner .talentBanner-show .slider-btn").mouseleave(function(){
        openInterval()
    })

    $(".talentBanner .talentBanner-show .slider-btn span").click(function(){
        showIndex = $(this).index();
        move(showIndex,showWidth)
        moveIn(showIndex)
    })
    $(".talentBanner .talentBanner-show .slider-page-prev").mouseenter(function(){
        clearInterval(showTimer);
    })
    $(".talentBanner .talentBanner-show .slider-page-prev").mouseleave(function(){
        openInterval()
    })
    $(".talentBanner .talentBanner-show .slider-page-next").mouseenter(function(){
        clearInterval(showTimer);
    })
    $(".talentBanner .talentBanner-show .slider-page-next").mouseleave(function(){
        openInterval()
    })
    $(".talentBanner .talentBanner-show .slider-page-prev").click(function(){
        showIndex -- ;
        console.log(showIndex)
        if(showIndex < 0){
            $(".talentBanner .talentBanner-show .slider").animate({"left":- showWidth * (showLen - 1) +"px"},0);
            showIndex = showLen - 2;
        }
        move(showIndex,showWidth)
        moveIn(showIndex)

    })

    $(".talentBanner .talentBanner-show .slider-page-next").click(function(){
        showIndex ++ ;
        if(showIndex >= showLen - 1 ){
            $(".talentBanner .talentBanner-show .slider").animate({"left":0},0);
            showIndex = 0;
        }
        move(showIndex,showWidth)
        moveIn(showIndex)

        
      
    })


    function moveIn(index){
        // $('.item-border2').stop(true).delay(1300).animate({
        //     width:'132px'
        // },300)
        // $('.item-border3').stop(true).delay(1000).animate({
        //     height:'48px'
        // },300)
        // $('.item-border4').stop(true).delay(1000).animate({
        //     height:'48px'
        // },300)
        // $('.item-border1').stop(true).delay(1300).animate({
        //     width:'132px'
        // },300)
        var width = $(".talentBanner .item-left .more").width();
        var height = $(".talentBanner .item-left .more").height();
        $(".talentBanner .slider-item").eq(index).find('.item-border2').stop(true).delay(1300).animate({
            width: width + 'px'
        },300);
        $(".talentBanner .slider-item").eq(index).find('.item-border3').stop(true).delay(1000).animate({
            height: height + 'px'
        },300)
        $(".talentBanner .slider-item").eq(index).find('.item-border4').stop(true).delay(1000).animate({
            height: height + 'px'
        },300)
        $(".talentBanner .slider-item").eq(index).find('.item-border1').stop(true).delay(1300).animate({
            width: width + 'px'
        },300)

        $(".talentBanner .slider-item").eq(index).siblings().find('.item-border2').css({"width":0});
        $(".talentBanner .slider-item").eq(index).siblings().find('.item-border3').css({"height":0});
        $(".talentBanner .slider-item").eq(index).siblings().find('.item-border4').css({"height":0});
        $(".talentBanner .slider-item").eq(index).siblings().find('.item-border1').css({"width":0});

    }

})();


