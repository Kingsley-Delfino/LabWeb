// 研究方向
$(window).on("load resize",function(){
    const h = window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight;
    $("#courses").css("padding-top",h/30);
    let wayroom = $(".wayroom");
    wayroom.css("height",wayroom.prev().css("height"));

    let wayrooma1 = $(".wayrooma1");
    let wayroom1 = $(".wayroom1");
    wayrooma1.mouseenter(function () {
        wayroom1.stop().animate({paddingTop:'0%'})
        $(".wayroom1>p").stop().animate({opacity: 1})
        wayroom1.prev().css("-webkit-filter","brightness(20%))")
        wayroom1.prev().css("filter","brightness(20%)")
    })

    wayrooma1.mouseleave(function () {
        $(".wayroom1").stop().animate({paddingTop:'35%'},function () {
            wayroom1.prev().css("-webkit-filter","none")
            wayroom1.prev().css("filter","none)")
        })
        $(".wayroom1>p").stop().animate({opacity: 0})
    })

    let wayrooma2 = $(".wayrooma2");
    let wayroom2 = $(".wayroom2");
    wayrooma2.mouseenter(function () {
        wayroom2.stop().animate({paddingTop:'0%'})
        $(".wayroom2>p").stop().animate({opacity: 1})
        wayroom2.prev().css("-webkit-filter","brightness(20%))")
        wayroom2.prev().css("filter","brightness(20%)")
    })

    wayrooma2.mouseleave(function () {
        $(".wayroom2").stop().animate({paddingTop:'35%'},function () {
            wayroom2.prev().css("-webkit-filter","none")
            wayroom2.prev().css("filter","none)")
        })
        $(".wayroom2>p").stop().animate({opacity: 0})
    })

    let wayrooma3 = $(".wayrooma3");
    let wayroom3 = $(".wayroom3");
    wayrooma3.mouseenter(function () {
        wayroom3.stop().animate({paddingTop:'0%'})
        $(".wayroom3>p").stop().animate({opacity: 1})
        wayroom3.prev().css("-webkit-filter","brightness(20%))")
        wayroom3.prev().css("filter","brightness(20%)")
    })

    wayrooma3.mouseleave(function () {
        $(".wayroom3").stop().animate({paddingTop:'35%'},function () {
            wayroom3.prev().css("-webkit-filter","none")
            wayroom3.prev().css("filter","none)")
        })
        $(".wayroom3>p").stop().animate({opacity: 0})
    })

    $("#courses>div").css("width", $(".banner").width());
    $('.paperListLink').tooltip()
});

$(function(){
    // 实验室动态
    $.ajax({
        url:"/getNewsWithLimit",
        type:"post",
        error: function (xhr, status, errorThrown) {
            console.log( "Error: " + errorThrown );
            console.log( "Status: " + status );
            console.log( xhr );
        },
        success:function (d) {
            let text = "";
            let content = "";
            for(let i in d)
            {
                content = d[i].content.split("。")
                text += "<div class='fea'>\n" +
                    "<div class=''> \n" +
                    "<div class='heading pull-right'>\n" +
                    "<h4>" + d[i].title + "</h4>\n" +
                    "<p>[" + d[i].pubDate + "]</p>\n" +
                    "<p>" + content + "</p>\n" +
                    "</div>\n" +
                    "<div class='fea-img pull-left'>\n" +
                    "<i class='" + d[i].icon + "'></i>\n" +
                    "</div>\n" +
                    "</div>\n" +
                    "</div>";
            }
            $(".feature-info").html(text);
            $('.feature-info').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                lazyLoad: 'ondemand',
            });
            $('.heading > p').css("max-height","200px").css("word-break", "break-all");
        }
    });

    // 论文发表
    $.ajax({
        url:"/getAllPaper",
        type:"post",
        error: function (xhr, status, errorThrown) {
            console.log( "Error: " + errorThrown );
            console.log( "Status: " + status );
            console.log( xhr );
        },
        success:function (d) {
            let text = "";
            for(let i = 0; i < 10; i ++){
                text += "<li class='paper-list-item'>\n" +
                    "<p>" + d[i].authors + "</p>\n" +
                    "<a href='paper/" + d[i].fileName + "' class='paperListLink' data-toggle='tooltip' data-placement='bottom' title='" + d[i].abstract + "'>" + d[i].name + "</a>\n" +
                    "<p>" + d[i].source + "</p>\n" +
                    "</li>";
            }
            $("#paper-list-ul").html(text)
        }
    });
});