;(function(){
  
  // 列表导航
  $(".listNav .listNav-item").click(function(){
    var name = $(this).attr("data-name");
    var top = $("." + name).offset().top -60;
    $("html,body").animate({scrollTop:top});
  })

  
  // 合作学校
  var index = 0;
  var partnerTimer = null;
  var showWidth = $(".partner .partner-show").width();
  var itemWidth = showWidth/3;
  var length = $(".partner .partner-item").length;
  $(".partner .partner-item").css({"width": itemWidth + "px"});
  $(".partner .partner-list").css({"width": (length * itemWidth)+length + "px"})

  $(window).resize(function(){
    showWidth = $(".partner .partner-show").width();
    itemWidth = showWidth/3;
    length = $(".partner .partner-item").length;
    $(".partner .partner-item").css({"width": itemWidth + "px"});
    $(".partner .partner-list").css({"width": (length * itemWidth)+length + "px"});
  })


  function paly(){
    partnerTimer = setInterval(function(){
      index ++ ;
      if(index >= length - 2){
        index = 1;
        $(".partner .partner-list").css({"left":0})
        $(".partner .partner-list").animate({"left":-(index * itemWidth ) + "px"})
      }else{
        $(".partner .partner-list").animate({"left":-(index * itemWidth ) + "px"})
      }
    },2500)
  }

  paly();

  $(".partner .partner-wrapper").mouseenter(function(){
    clearInterval(partnerTimer);
  })

  $(".partner .partner-wrapper").mouseleave(function(){
    clearInterval(partnerTimer);
    paly();
  })



  $(".partner .partner-prev").click(function(){
    index --;
    if(index <= 0){
      index = length - 4;
      $(".partner .partner-list").css({"left":-(index + 1)*itemWidth + "px" })
      $(".partner .partner-list").animate({"left":-(index * itemWidth ) + "px"})
    }else{
      $(".partner .partner-list").animate({"left":-(index * itemWidth ) + "px"})
    }
  })

  $(".partner .partner-next").click(function(){
    index ++ ;
    if(index >= length - 2){
      index = 1;
      $(".partner .partner-list").css({"left":0})
      $(".partner .partner-list").animate({"left":-(index * itemWidth ) + "px"})
    }else{
      $(".partner .partner-list").animate({"left":-(index * itemWidth ) + "px"})
    }
  })

  //精品课程
  $(".course .item-catalogue").mouseenter(function(){
    var item = $(this);
    setTimeout(function(){
      item.parent().siblings(".course-panel").css({"opacity":1,"left":0})
    },100)
  })

  $(".course .course1").mouseleave(function(){
    $(this).find(".course-panel").css({"opacity":0,"left":"-100%"})
  })

  $(".course .course2").mouseleave(function(){
    $(this).find(".course-panel").css({"opacity":0,"left":"100%"})
  })


  // 师资培训

  $(".teachServece .train-tab li").click(function(){
    var index = $(this).index();
    console.log(index)
    $(this).addClass("current").siblings().removeClass("current");
    $(".teachServece .train-content .panel" + index).addClass("current").siblings().removeClass("current");
  })

  $(".teachServece .item-content span").mouseenter(function(){
    $(this).parent().siblings(".item-detail").css({"zIndex":20,"opacity":"1",})
  })
  $(".teachServece .panel-item").mouseleave(function(){
    $(this).find(".item-detail").css({"zIndex":-20,"opacity":"0",})
  })

  // 侧导航
  roll();
  $(window).scroll(function(){
    roll();
  });

  function roll(){
    var scrollTop = $(document).scrollTop();
    var width = $(window).width();
    if(width >= 1350){
      if(scrollTop >= 400){
        $(".sideNav").slideDown("slow");
      }else{
          $(".sideNav").slideUp();
      }
    }else{
      $(".sideNav").slideUp();
    }
   
    var contentItems = $(".school-item");
    contentItems.each(function(index,item){
        var item = $(this);
        var offsetTop = item.offset().top;
        var itemHeight = item.height();
        if(scrollTop >= (offsetTop - 100) && scrollTop <= (offsetTop + itemHeight - 100)){
            $(".sideNav li").eq(index).addClass("current").siblings().removeClass("current");
        }
    })
  }

  $(".sideNav li").click(function(){
    $(this).addClass("current").siblings().removeClass("current");
    var index = $(this).index();
    var scrollTop =$(".school-item").eq(index).offset().top;
    $('html,body').animate({scrollTop:scrollTop})
  });


})();
