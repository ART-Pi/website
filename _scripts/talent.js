;(function(){
    var screnWidth = $(window).width();
    var nowIndex = 0;
    var timer = null;
    var itemLengtn = $(".talentBanner .slider .slider-item").length;
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
            if(nowIndex > itemLengtn-1){
                nowIndex = 0;
            }
            move(nowIndex);
        },4000)
    }

    play();

    $(".talentBanner").mouseenter(function(){
        console.log(1)
        clearInterval(timer);
    })

    $(".talentBanner").mouseleave(function(){
        console.log(2)
        play();
    })

    $(".talentBanner .slider-btn span").click(function(item,index){
        nowIndex = $(this).index();
        move(nowIndex);
    })

    $(".talentBanner .slider-page .slider-page-prev").click(function(){
        nowIndex --;
        if(nowIndex < 0){
            nowIndex = itemLengtn-1
        }
        move(nowIndex);
    })

    $(".talentBanner .slider-page .slider-page-next").click(function(){
        nowIndex ++;
        if(nowIndex > itemLengtn -1 ){
            nowIndex = 0
        }
        move(nowIndex);
    })


//PC端滑动
// var startX,startY;
// $("body").mousedown(function(event){ //获取鼠标按下的位置
//     startX = event.pageX;
//     startY = event.pageY;
//     // console.log(startX)
// });
// $("body").mouseup(function(event){//鼠标释放
//     var newX = event.pageX;
//     var newY = event.pageY;
//     // console.log(newX)
//     if(newX > startX){
//         nowIndex --;
//         if(nowIndex < 0){
//             nowIndex = itemLengtn -1
//         }
//         move(nowIndex);

//     }
//     if(newX < startX){
//         nowIndex ++;
//         if(nowIndex > itemLengtn -1){
//             nowIndex = 0
//         }
//         move(nowIndex);
//     }
// })


    function effect(){
        // 视频动效
        var windowHeight = $(window).height();
        var scrollHeight = $(window).scrollTop();
        var videoTopHeight = $(".talentVideo .talentVideo-introduce").offset().top;
        var videoBottomHeight = $(".talentVideo .talentVideo-introduce").offset().top + $(".talentVideo .talentVideo-introduce").height();
        if(scrollHeight >= videoTopHeight - windowHeight && scrollHeight <= videoBottomHeight){
            $(".talentVideo .talentVideo-title").addClass("fadeInDown")
            $(".talentVideo .talentVideo-introduce").addClass("fadeInRight")
            $(".talentVideo .talentVideo-box").addClass("fadeInLeft")
        }

        // 合作伙伴动效
        var partner0Height = $(".talentPartner .talentPartner-item").eq(0).offset().top;
        var partner0Bottom = $(".talentPartner .talentPartner-item").eq(0).offset().top + $(".talentPartner .talentPartner-item").eq(0).height();
        if(windowHeight >= partner0Height - scrollHeight && scrollHeight <= partner0Bottom){
            for(var i=0;i<4;i++){
                $(".talentPartner .talentPartner-item").eq(i).addClass("fadeInUp")
            }
        }

        var partner1Height = $(".talentPartner .talentPartner-item").eq(3).offset().top;
        var partner1Bottom = $(".talentPartner .talentPartner-item").eq(3).offset().top +  $(".talentPartner .talentPartner-item").eq(3).height();
        if(windowHeight + scrollHeight >= partner1Height && scrollHeight <= partner1Bottom){
            for(var i=4;i<8;i++){
                $(".talentPartner .talentPartner-item").eq(i).addClass("fadeInUp")
            }
        }

        // 人才培养动效
        var train0Height = $(".talentTrain .talentTrain-item").eq(0).offset().top;
        var train0Bottom = $(".talentTrain .talentTrain-item").eq(0).offset().top + $(".talentTrain .talentTrain-item").eq(0).height();
        if(windowHeight + scrollHeight >= train0Height && scrollHeight <= train0Bottom){
            for(var i=0;i<3;i++){
                $(".talentTrain .talentTrain-item").eq(i).addClass("fadeInUp")
            }
        }

        var train1Height = $(".talentTrain .talentTrain-item").eq(4).offset().top;
        var train1Bottom = $(".talentTrain .talentTrain-item").eq(4).offset().top + $(".talentTrain .talentTrain-item").eq(4).height();

        if(windowHeight + scrollHeight >= train1Height && scrollHeight <= train1Bottom){
            for(var i=3;i<5;i++){
                console.log(i)
                $(".talentTrain .talentTrain-item").eq(i).addClass("fadeInUp")
            }
        }
    }

    effect();
    $(window).scroll(effect)

    // 合作伙伴更多
    $(".talentPartner .talentPartner-more .more").click(function(){
        $(this).addClass("hidden")
        $(".talentPartner .item-more").removeClass("hidden")
        $(".talentPartner .talentPartner-fold .fold").removeClass("hidden")
    })

    $(".talentPartner .talentPartner-fold .fold").click(function(){
        $(this).addClass("hidden")
        $(".talentPartner .item-more").addClass("hidden")
        $(".talentPartner .talentPartner-more .more").removeClass("hidden")
    })

})();