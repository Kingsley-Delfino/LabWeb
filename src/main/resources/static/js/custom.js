

//make picture xy is screen
$(window).on("load resize",function(){
    // if($(window).scrollTop() == 0)        $("body").css({overflow:"hidden"});    //如果在顶部，禁用滚动条
    var h=window.innerHeight||document.body.clientHeight||document.documentElement.clientHeight;
    // $(".banner").css("min-height",h/2);
    // $(".bg-color").css("min-height",h/2);
    $("#courses").css("padding-top",h/30);
    $(".wayroom").css("height",$(".wayroom").prev().css("height"));
    $(".wayrooma1").mouseenter(function () {

        $(".wayroom1").stop().animate({paddingTop:'0%'})
        $(".wayroom1>p").stop().animate({opacity: 1})
        $(".wayroom1").prev().css("-webkit-filter","brightness(20%))")
        $(".wayroom1").prev().css("filter","brightness(20%)")

    })
    $(".wayrooma1").mouseleave(function () {
        $(".wayroom1").stop().animate({paddingTop:'35%'},function () {
            $(".wayroom1").prev().css("-webkit-filter","none")
            $(".wayroom1").prev().css("filter","none)")
        })
        $(".wayroom1>p").stop().animate({opacity: 0})

    })
    $(".wayrooma2").mouseenter(function () {

        $(".wayroom2").stop().animate({paddingTop:'0%'})
        $(".wayroom2>p").stop().animate({opacity: 1})
        $(".wayroom2").prev().css("-webkit-filter","brightness(20%))")
        $(".wayroom2").prev().css("filter","brightness(20%)")

    })
    $(".wayrooma2").mouseleave(function () {
        $(".wayroom2").stop().animate({paddingTop:'35%'},function () {
            $(".wayroom2").prev().css("-webkit-filter","none")
            $(".wayroom2").prev().css("filter","none)")
        })
        $(".wayroom2>p").stop().animate({opacity: 0})

    })
    $(".wayrooma3").mouseenter(function () {

        $(".wayroom3").stop().animate({paddingTop:'0%'})
        $(".wayroom3>p").stop().animate({opacity: 1})
        $(".wayroom3").prev().css("-webkit-filter","brightness(20%))")
        $(".wayroom3").prev().css("filter","brightness(20%)")

    })
    $(".wayrooma3").mouseleave(function () {
        $(".wayroom3").stop().animate({paddingTop:'35%'},function () {
            $(".wayroom3").prev().css("-webkit-filter","none")
            $(".wayroom3").prev().css("filter","none)")
        })
        $(".wayroom3>p").stop().animate({opacity: 0})

    })

    $("#courses>div").css("width", $(".banner").width());

    $('.paperListLink').tooltip()

});



// $(".mouse-hover").click(function () {
//     $("body").css({overflow:"scroll"});    //点击按钮启用滚动条
// });
// $("#myNavbar>ul>li").click(function () {
//     $("body").css({overflow:"scroll"});    //点击按钮启用滚动条
// });




// $(window).scroll(function () {
//     if ($(window).scrollTop() == 0) {
//         $("body").css({overflow:"hidden"});
//     }
// });


//get mouse x,y
function mousePosition(ev){
    ev = ev || window.event;
    if(ev.pageX || ev.pageY){
        return {x:ev.pageX, y:ev.pageY};
    }
    return {
        x:ev.clientX + document.body.scrollLeft - document.body.clientLeft,
        y:ev.clientY + document.body.scrollTop - document.body.clientTop
    };
}
// $(function () {
//     //hover display
//     $(".infoButton").mouseover(function(e){
//         //get mouse position
//             var mousePos = mousePosition(e);
//             var  xOffset = 0;
//             var  yOffset = 25;
//             $("#tooltip").css("display","block").css("position","absolute").css("top",(mousePos.y - yOffset) + "px").css("left",(mousePos.x + xOffset) + "px");
//             $("#tooltip").append($(".pm-staff-profile-bio" + $(this).attr("numberid") + "").html());
//
//     });
//     //hide display
//     $(".infoButton").mouseout(function(){
//         $("#tooltip").empty();
//         $("#tooltip").css("display","none");
//     });
//
// });

(function ($) {

    // Navigation scrolls
    $(".navbar-nav li a").on('click', function(event) {
        $('.navbar-nav li').removeClass('active');
        $(this).closest('li').addClass('active');
        var $anchor = $(this);
        var nav = $($anchor.attr('href'));
        if (nav.length) {
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');

        event.preventDefault();
        }
    });

    // Add smooth scrolling to all links in navbar
    $("a.mouse-hover, a.get-quote").on('click', function(event) {
      var hash = this.hash;
      if( hash ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1500, 'easeInOutExpo');
      }
    });
})(jQuery);


$(function(){
    $.ajax({
        url:"/getNewsInfo",
        type:"post",
        error: function (xhr, status, errorThrown) {
            console.log( "Error: " + errorThrown );
            console.log( "Status: " + status );
            console.log( xhr );
        },
        success:function (d) {
            var text = "";
            var content = ""

            for(var i in d)
            {
                content = d[i].content.split("。")
                text += "        <div class=\"fea\">\n" +
                    "              <div class=\"\"> \n" +
                    "                <div class=\"heading pull-right\">\n" +
                    "                  <h4><a href='' class='newsInfoTitleClick' data-toggle=\"modal\" data-target=\"#newsInfo\" onclick=changeNewsInfo(this,"+d[i].newsid+")>"+ d[i].title +"</a></h4>\n" +
                    "                  <h4><small>["+ d[i].pubdate +"]</small></h4>\n" +
                    "                  <p>" + content + "</p>\n" +
                    "                  <p style='display: none'>" + d[i].content + "</p>\n" +
                    "                </div>\n" +
                    "                <div class=\"fea-img pull-left\">\n" +
                    "                  <i class=\""+ d[i].icon +"\"></i>\n" +
                    "                </div>\n" +
                    "              </div>\n" +
                    "            </div>" +
                    ""


            }
            // $(".holder").css("clear","both");



            $(".feature-info").html(text);
            // $("div.holder").jPages({
            //     containerID : "itemContainer",
            //     previous : "←",
            //     next : "→",
            //     perPage : 5,
            //     delay : 50
            // });
            //
            // $("div.holder > a").css("font-size","20px")
            $('.feature-info').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                lazyLoad: 'ondemand',
            });
            $('.heading > p').css("max-height","200px");
        }





    })




    $('.communicateSlick').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
    });
    $('.projectSlick').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
    });

    $("div.projectSlick>div.slick-list>div.slick-track>div.slick-slide").addClass("span3");
    $("div.projectSlick>div.slick-list>div.slick-track>div.slick-slide>div>div.span3").removeClass("span3");
    var width = $("#communicate>div.container>div.tab-content>div.tab-pane>div.slick-list>div.slick-track>div.slick-slide>div>div").innerWidth()
    var height = (width-10 )*2/3 ;
    $("#communicate>div.container>div.tab-content>div.tab-pane>div.slick-list>div.slick-track>div.slick-slide>div>div>figure").css("width",width)
    $("#communicate>div.container>div.tab-content>div.tab-pane>div.slick-list>div.slick-track>div.slick-slide>div>div>figure").css("height",height)



    $.ajax({
        url:"/getByPaperInter",
        type:"post",
        error: function (xhr, status, errorThrown) {
            console.log( "Error: " + errorThrown );
            console.log( "Status: " + status );
            console.log( xhr );
        },
        success:function (d) {
            console.log(d)
            var text = ""
            for(var i=0;i<10;i++){
                text+="          <li class=\"list-group-item\">\n" +
                    "            <p style=\"margin-bottom: 0px;color:black;\">"+ d[i].authors +"</p>\n" +
                    "            <!--<a href=\"\">O2O Service Composition with Social Collaboration</a>-->\n" +
                    "            <a href='paper/"+d[i].filename+"' class=\"paperListLink\" data-toggle=\"tooltip\" data-placement=\"bottom\" title='"+ d[i].abstract +"'>"+ d[i].name +"</a>\n" +
                    "            <p style=\"margin-bottom: 0px;color: black\">"+ d[i].source +"</p>\n" +
                    "          </li>"
            }

            $("#paper-list-ul").html(text)
        }

        })
});

function changeNewsInfo(news,newsID) {
    var initext="";
    $("#newsInfo > div  >div > .modal-header > h4").html(initext);
    $("#newsInfo > div  >div > .modal-body > p").html(initext);
    $.ajax({
        url:"/getNewsInfoPic",
        data:{"newsID":newsID},
        type:"post",
        error: function (xhr, status, errorThrown) {
            console.log( "Error: " + errorThrown );
            console.log( "Status: " + status );
            console.log( xhr );
        },
        success:function (d) {
            var reg=new RegExp("<br>","g");
            var text="";
            text+=$(news).parent().next().next().next().html();
            // text=text.replace(reg,"\n")
            console.log(text)
            text+="<br />";
            text+="<div style='text-align: center'>"
            for(var i in d){
                text+= "<img class='newsInfoPic' src='../img/newsPic/"+ d[i].filename +"'>"
            }
            text +="</div>"
            $("#newsInfo > div  >div > .modal-header > h4").html($(news).html());
            $("#newsInfo > div  >div > .modal-body > p").html(text);
        }



    })
}




