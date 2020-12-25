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
    function openInterval(){
        showTimer = setInterval(function(){
            console.log(showIndex);
            if(showIndex > showLen - 1 ){
                $(".talentBanner .talentBanner-show .slider").animate({"left":0},0);
                showIndex = 0;
            }
            move(showIndex,showWidth)
        },4000);
    
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
    openInterval()
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
        move(showIndex,showWidth)
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

    })

    $(".talentBanner .talentBanner-show .slider-page-next").click(function(){
        showIndex ++ ;
        if(showIndex >= showLen - 1 ){
            $(".talentBanner .talentBanner-show .slider").animate({"left":0},0);
            showIndex = 0;
        }
        move(showIndex,showWidth)
      
    })

})();

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?f2888650af4664bdef8737ed5d48757d";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

