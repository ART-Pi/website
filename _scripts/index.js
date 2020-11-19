;(function(){
    // var screnWidth = $(window).width();
    // $(".persimmonBanner .slider").css({"width":screnWidth*4})
    // $(".persimmonBanner .slider-item").css({"width":screnWidth})

    // var nowIndex = 0;
    // var timer;
    // function play(){
    //     timer = setInterval(function(){
    //         nowIndex ++;
    //         if(nowIndex >= 3){
    //             $(".persimmonBanner .slider-btn span").eq(0).addClass("current").siblings().removeClass("current");
    //         }
    //         if(nowIndex >= 4){
    //             console.log(nowIndex)
    //             nowIndex = 1
    //             $(".persimmonBanner .slider").css({"left":-screnWidth * nowIndex});
    //         }
           
    //         $(".persimmonBanner .slider").css({"left":-screnWidth*nowIndex})
    //         $(".persimmonBanner .slider-btn span").eq(nowIndex).addClass("current").siblings().removeClass("current");
    
    
    //     },2000)
    // }
     
    // play();

    // $(".persimmonBanner .wrapper").mouseenter(function(){
    //     clearInterval(timer);
    // })

    // $(".persimmonBanner .wrapper").mouseleave(function(){
    //    play();
    // })

    // $(".persimmonBanner .slider-btn span").click(function(item,index){
    //     console.log($(this).index())
    //     nowIndex = $(this).index();
    //     $(".persimmonBanner .slider").css({"left":-screnWidth*nowIndex})
    //     $(".persimmonBanner .slider-btn span").eq(nowIndex).addClass("current").siblings().removeClass("current");
    // })

    // $(".persimmonBanner .slider-btn span").mouseenter(function(item,index){
    //     console.log($(this).index())
    //     nowIndex = $(this).index();
    //     $(".persimmonBanner .slider").css({"left":-screnWidth*nowIndex})
    //     $(".persimmonBanner .slider-btn span").eq(nowIndex).addClass("current").siblings().removeClass("current");
    // })

    // $(".persimmonBanner .slider-page .slider-page-prev").click(function(){
    //     nowIndex --;
    //     if(nowIndex < 0){
    //         nowIndex = 2
    //     }
    //     $(".persimmonBanner .slider").css({"left":-screnWidth*nowIndex})
    //     $(".persimmonBanner .slider-btn span").eq(nowIndex).addClass("current").siblings().removeClass("current");
    // })

    // $(".persimmonBanner .slider-page .slider-page-next").click(function(){
    //     nowIndex ++;
    //     if(nowIndex > 2){
    //         nowIndex = 0
    //     }
    //     $(".persimmonBanner .slider").css({"left":-screnWidth*nowIndex})
    //     $(".persimmonBanner .slider-btn span").eq(nowIndex).addClass("current").siblings().removeClass("current");
    // })
    var screnWidth = $(window).width();
    $(".persimmonBanner .wrapper").css({"height": screnWidth * 0.3 })
    $(window).resize(function(){
        var screnWidth = $(window).width();
        $(".persimmonBanner .wrapper").css({"height": screnWidth * 0.3 })
    })
    var nowIndex = 0;
    var timer;

    function move(nowIndex){
        $(".persimmonBanner .slider .slider-item").eq(nowIndex).addClass("current").siblings().removeClass("current");
        $(".persimmonBanner .slider-btn span").eq(nowIndex).addClass("current").siblings().removeClass("current");
    }

    function play(){
        timer = setInterval(function(){
            nowIndex ++;
            if(nowIndex > 2){
                nowIndex = 0;
            }
            move(nowIndex);
        },2000)
    }

    play();

    $(".persimmonBanner .wrapper").mouseenter(function(){
        clearInterval(timer);
    })

    $(".persimmonBanner .wrapper").mouseleave(function(){
       play();
    })

    $(".persimmonBanner .slider-btn span").click(function(item,index){
        nowIndex = $(this).index();
        move(nowIndex);
    })

    $(".persimmonBanner .slider-page .slider-page-prev").click(function(){
        nowIndex --;
        if(nowIndex < 0){
            nowIndex = 2
        }
        move(nowIndex);
    })

    $(".persimmonBanner .slider-page .slider-page-next").click(function(){
        nowIndex ++;
        if(nowIndex > 2){
            nowIndex = 0
        }
        move(nowIndex);
    })

    
    //PC端滑动
    var startX,startY;
    $("body").mousedown(function(event){ //获取鼠标按下的位置
        startX = event.pageX;
        startY = event.pageY;
        // console.log(startX)
    });
    $("body").mouseup(function(event){//鼠标释放
        var newX = event.pageX;
        var newY = event.pageY;
        // console.log(newX)
        if(newX > startX){
            console.log("向右")
            nowIndex --;
            if(nowIndex < 0){
                nowIndex = 2
            }
            move(nowIndex);

        }
        if(newX < startX){
            console.log("向左")
            nowIndex ++;
            if(nowIndex > 2){
                nowIndex = 0
            }
            move(nowIndex);
        }
    })

    //移动端滑动
    // var moveStartX,moveStartY;
    // $("body").on("touchstart", function(e) {
    //     clearInterval(timer);
    //     // 判断默认行为是否可以被禁用
    //     if (e.cancelable) {
    //         // 判断默认行为是否已经被禁用
    //         if (!e.defaultPrevented) {
    //             e.preventDefault();
    //         }
    //     }	
    //     moveStartX = e.originalEvent.changedTouches[0].pageX,
    //     moveStartY = e.originalEvent.changedTouches[0].pageY;

    // });

    // $("body").on("touchend",function(e) {
    //     play();			
    //     // 判断默认行为是否可以被禁用
    //     if (e.cancelable) {
    //         // 判断默认行为是否已经被禁用
    //         if (!e.defaultPrevented) {
    //             e.preventDefault();
    //         }
    //     }			    
    //     moveEndX = e.originalEvent.changedTouches[0].pageX;
    //     moveEndY = e.originalEvent.changedTouches[0].pageY;
    //     dex = moveEndX - moveStartX;
    //    if(dex > 0){
    //         console.log("向右")
    //         nowIndex --;
    //         if(nowIndex < 0){
    //             nowIndex = 2
    //         }
    //         move(nowIndex);
    //    }
    //    if(dex < 0){
    //         console.log("向左")
    //         nowIndex ++;
    //         if(nowIndex > 2){
    //             nowIndex = 0
    //         }
    //         move(nowIndex);

    //    }
    // })


    

    $(".persimmonDesigner .video-box").click(function(){
        $(".persimmonDesigner .cover").css({"display":"block"})
    })

    $(".persimmonDesigner .cover").click(function(){
        $(".persimmonDesigner .cover").css({"display":"none"})
    })


})()