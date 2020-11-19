    ;(function(){
        var screnWidth = $(window).width();
        // $(".talentBanner .wrapper").css({"height": screnWidth * 0.3 })
        // $(window).resize(function(){
        //     var screnWidth = $(window).width();
        //     $(".talentBanner .wrapper").css({"height": screnWidth * 0.3 })
        // })
        var nowIndex = 0;
        var timer;
        var length = $(".talentBanner .slider .slider-item").length;
        console.log(length);
        function move(nowIndex){
            $(".talentBanner .slider .slider-item").eq(nowIndex).addClass("current").siblings().removeClass("current");
            $(".talentBanner .slider-btn span").eq(nowIndex).addClass("current").siblings().removeClass("current");

            // 轮播图动画
            $(".talentBanner .slider .slider-item").eq(nowIndex).find(".item-title").addClass("fadeInDown");
            $(".talentBanner .slider .slider-item").eq(nowIndex).siblings().find(".item-title").removeClass("fadeInDown");
            if(nowIndex == 0){

                $(".talentBanner .slider .slider-item").eq(nowIndex).find(".item-describe").addClass("fadeInRight");

            }else{

                $(".talentBanner .slider .slider-item").eq(nowIndex).find(".item-describe").addClass("fadeInLeft");
            }

            $(".talentBanner .slider .slider-item").eq(nowIndex).siblings().find(".item-describe").removeClass("fadeInLeft fadeInRight");

            $(".talentBanner .slider .slider-item").eq(nowIndex).find(".item-more").addClass("fadeInUp");
            $(".talentBanner .slider .slider-item").eq(nowIndex).siblings().find(".item-more").removeClass("fadeInUp");

        }

        function play(){
            timer = setInterval(function(){
                nowIndex ++;
                if(nowIndex > length - 1 ){
                    nowIndex = 0;
                }
                move(nowIndex);
            },2000)
        }

        // play();

        // $(".talentBanner .wrapper").mouseenter(function(){
        //     clearInterval(timer);
        // })

        // $(".talentBanner .wrapper").mouseleave(function(){
        //    play();
        // })

        $(".talentBanner .slider-btn span").click(function(item,index){
            nowIndex = $(this).index();
            move(nowIndex);
        })

        $(".talentBanner .slider-page .slider-page-prev").click(function(){
            nowIndex --;
            if(nowIndex < 0){
                nowIndex = length - 1
            }
            move(nowIndex);
        })

        $(".talentBanner .slider-page .slider-page-next").click(function(){
            nowIndex ++;
            if(nowIndex > length - 1){
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
    })();
    ;(function(){
        var itemIndex = 0;
        var itemTimer;
        var len = $(".ProductCase .ProductCase-content .slider-item").length;
        // var wrapperWidth = $(".ProductCase .ProductCase-content").width();
        // var wrapperHeight = $(".ProductCase .ProductCase-content").height();
        // $(".ProductCase .ProductCase-content .slider .slider-item").css({"width":wrapperWidth + "px","height":wrapperHeight + "px"});
        // $(".ProductCase .ProductCase-content .slider").css({"width":wrapperWidth * len + "px","height":wrapperHeight + "px"});
        // $(".ProductCase .ProductCase-content .slider .slider-item").each(function(index){
        //     $(this).css({"left": wrapperWidth * index})
        // })

        function itemMove(itemIndex){
            $(".ProductCase .ProductCase-tip .tip-item").eq(itemIndex).addClass("current").siblings().removeClass('current');
            $(".ProductCase .ProductCase-content .slider .slider-item").eq(itemIndex).addClass("current").siblings().removeClass("current");
        }
        $(".ProductCase .ProductCase-tip .tip-item").mouseenter(function(){
            clearInterval(itemTimer);
            itemIndex = $(this).index()
            console.log(itemIndex)
            itemMove(itemIndex)
        })
        // $(".ProductCase .ProductCase-tip .tip-item").mouseleave(function(){
        //     itemPlay()
        // })
        // function itemPlay(){
        //     itemTimer = setInterval(function(){
        //         itemIndex ++;
               
        //         if(itemIndex > len - 1){
        //             console.log("yyy")
        //             itemIndex = 0;
        //         }
        //         itemMove(itemIndex);
        //     },3000)
        // }
        // itemPlay();


        
    })();
     





    