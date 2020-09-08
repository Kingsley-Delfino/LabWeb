function getQueryVariable(variable)
{
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
    }
    return(false);
}



var h1=window.innerHeight||document.body.clientHeight||document.documentElement.clientHeight;
var h2=$(".ListBanner").height();
$(".ListList").css("min-height",h1-h2-10);


$(document).ready(function () {


    if(getQueryVariable("list")==="member")
    {
        if(getQueryVariable("type")==="D"){
            $(".ListTitle").html("博士研究生");

            $.ajax({
                url:"/getByLabMemberDoc",
                type:"post",
                error: function (xhr, status, errorThrown) {
                    alert("ERROR")
                    console.log( "Error: " + errorThrown );
                    console.log( "Status: " + status );
                    console.log( xhr );
                },
                success:function (d) {
                    var text = "";
                    for(var i in d)
                    {
                        text += "" +
                            "                <div class=\"AMember  col-md-3\">\n" +
                            "                    <img src=\"img/Member/default.jpg\" alt=\"照片\" class=\"MemberPhoto\">\n" +
                            "                    <p>"+ d[i].name +"</p>\n" +
                            "                    <p>"+ d[i].grade +"级博士生</p>\n" +
                            "                </div>" +
                            ""


                    }

                    $("#itemContainer").html(text);
                }

            })
        }

        else if(getQueryVariable("type")==="M")
        {

            $(".ListTitle").html("硕士研究生");

            $.ajax({
                url:"/getByLabMemberPostGraduate",
                type:"post",
                error: function (xhr, status, errorThrown) {
                    alert("ERROR")
                    console.log( "Error: " + errorThrown );
                    console.log( "Status: " + status );
                    console.log( xhr );
                },
                success:function (d) {
                    var text = "";
                    for(var i in d)
                    {
                        text += "" +
                            "                <div class=\"AMember  col-md-3\">\n" +
                            "                    <img src=\"img/Member/default.jpg\" alt=\"照片\" class=\"MemberPhoto\">\n" +
                            "                    <p>"+ d[i].name +"</p>\n" +
                            "                    <p>"+ d[i].grade +"级硕士生</p>\n" +
                            "                </div>" +
                            ""


                    }
                    $(".holder").css("clear","both");



                    $("#itemContainer").html(text);
                    $("div.holder").jPages({
                        containerID : "itemContainer",
                        previous : "←",
                        next : "→",
                        perPage : 18,
                        delay : 50
                    });

                    $("div.holder > a").css("font-size","20px")
                }

            })
        }

        else if(getQueryVariable("type")==="B")
        {

            $(".ListTitle").html("本科生");

            $.ajax({
                url:"/getByLabMemberUnGraduate",
                type:"post",
                error: function (xhr, status, errorThrown) {
                    alert("ERROR")
                    console.log( "Error: " + errorThrown );
                    console.log( "Status: " + status );
                    console.log( xhr );
                },
                success:function (d) {
                    var text = "";
                    for(var i in d)
                    {
                        text += "" +
                            "                <div class=\"AMember  col-md-3\">\n" +
                            "                    <img src=\"img/Member/default.jpg\" alt=\"照片\" class=\"MemberPhoto\">\n" +
                            "                    <p>"+ d[i].name +"</p>\n" +
                            "                    <p>"+ d[i].grade +"级本科生</p>\n" +
                            "                </div>" +
                            ""


                    }
                    $("#itemContainer").html(text);
                }

            })
        }
        else return;

        // else if(getQueryVariable("type")==="tea")
        // {
        //
        //     $(".ListTitle").html("教师");
        //
        //     $.ajax({
        //         url:"/getByLabMemberTea",
        //         type:"post",
        //         error: function (xhr, status, errorThrown) {
        //             alert("ERROR")
        //             console.log( "Error: " + errorThrown );
        //             console.log( "Status: " + status );
        //             console.log( xhr );
        //         },
        //         success:function (d) {
        //             var text = "";
        //
        //
        //             $("#itemContainer").html(text);
        //         }
        //
        //     })
        // }

    }


    if(getQueryVariable("list")==="paper"){
        if(getQueryVariable("type")==="I"){


            $(".ListTitle").html("国际会议和期刊");

            $.ajax({
                url:"/getByPaperInter",
                type:"post",
                error: function (xhr, status, errorThrown) {
                    alert("ERROR")
                    console.log( "Error: " + errorThrown );
                    console.log( "Status: " + status );
                    console.log( xhr );
                },
                success:function (d) {
                    var text = "";
                    for(var i in d)
                    {
                        text += " <div class=\"OneMain\">\n" +
                            "                <h3> "+ d[i].name +" <small style=\"margin-left: 0.5vw\"><a href=\"/ourPaper/"+ d[i].filename +"\">(PDF)</a> </small></h3>\n" +

                            "                <small><i>"+d[i].authors+"</i></small>\n" +
                            "                <br>\n" +
                            "                <small>\t"+ d[i].source +"</small>\n" +
                            "                <br>\n" +
                            "                <small>"+ d[i].year +" 年</small>\n" +
                            "                <p>摘要: "+ d[i].abstract +"</p>\n" +
                            "            </div>"


                    }
                    $(".holder").css("clear","both");



                    $("#itemContainer").html(text);
                    $("div.holder").jPages({
                        containerID : "itemContainer",
                        previous : "←",
                        next : "→",
                        perPage : 5,
                        delay : 50
                    });

                    $("div.holder > a").css("font-size","20px")
                }

            })

        }

        else if(getQueryVariable("type")==="N"){


            $(".ListTitle").html("国内期刊和会议");

            $.ajax({
                url:"/getByPaperNation",
                type:"post",
                error: function (xhr, status, errorThrown) {
                    alert("ERROR")
                    console.log( "Error: " + errorThrown );
                    console.log( "Status: " + status );
                    console.log( xhr );
                },
                success:function (d) {
                    var text = "";
                    for(var i in d)
                    {
                        text += " <div class=\"OneMain\">\n" +
                            "                <h3> "+ d[i].name +" <small style=\"margin-left: 0.5vw\"><a href=\"/ourPaper/"+ d[i].filename +"\">(PDF)</a> </small></h3>\n" +

                            "                <small><i>"+d[i].authors+"</i></small>\n" +
                            "                <br>\n" +
                            "                <small>\t"+ d[i].source +"</small>\n" +
                            "                <br>\n" +
                            "                <small>"+ d[i].year +" 年</small>\n" +
                            "                <p>摘要: "+ d[i].abstract +"</p>\n" +
                            "            </div>"


                    }
                    $(".holder").css("clear","both");



                    $("#itemContainer").html(text);
                    $("div.holder").jPages({
                        containerID : "itemContainer",
                        previous : "←",
                        next : "→",
                        perPage : 5,
                        delay : 50
                    });

                    $("div.holder > a").css("font-size","20px")
                }

            })

        }
        else if(getQueryVariable("type")==="x"){


            $(".ListTitle").html("技术报告");

            $.ajax({
                url:"/getByPaperTech",
                type:"post",
                error: function (xhr, status, errorThrown) {
                    alert("ERROR")
                    console.log( "Error: " + errorThrown );
                    console.log( "Status: " + status );
                    console.log( xhr );
                },
                success:function (d) {
                    var text = "";
                    for(var i in d)
                    {
                        text += " <div class=\"OneMain\">\n" +
                            "                <h3> "+ d[i].name +" <small style=\"margin-left: 0.5vw\"><a href=\"/ourPaper/"+ d[i].filename +"\">(PDF)</a> </small></h3>\n" +

                            "                <small><i>"+d[i].authors+"</i></small>\n" +
                            "                <br>\n" +
                            "                <small>\t"+ d[i].source +"</small>\n" +
                            "                <br>\n" +
                            "                <small>"+ d[i].year +" 年</small>\n" +
                            "                <p>摘要: "+ d[i].abstract +"</p>\n" +
                            "            </div>"


                    }
                    $(".holder").css("clear","both");



                    $("#itemContainer").html(text);
                    $("div.holder").jPages({
                        containerID : "itemContainer",
                        previous : "←",
                        next : "→",
                        perPage : 5,
                        delay : 50
                    });

                    $("div.holder > a").css("font-size","20px")
                }

            })

        }
        else if(getQueryVariable("type")==="D"){


            $(".ListTitle").html("毕业论文");

            $.ajax({
                url:"/getByPaperDegree",
                type:"post",
                error: function (xhr, status, errorThrown) {
                    alert("ERROR")
                    console.log( "Error: " + errorThrown );
                    console.log( "Status: " + status );
                    console.log( xhr );
                },
                success:function (d) {
                    var text = "";
                    for(var i in d)
                    {
                        var degree;
                        if(d[i].degree==="M") degree="硕士";
                        else if(d[i].degree==="B"||d[i].degree==="d") degree="博士";
                        text += " <div class=\"OneMain\">\n" +
                            "                <h3> "+ d[i].name +" <small style=\"margin-left: 0.5vw\"><a href=\"/degreePaper/"+ d[i].filename +"\">(PDF)</a> </small></h3>\n" +

                            "                <small><i>"+d[i].authors+"</i></small>\n" +
                            "                <br>\n" +
                            "                <small>"+ d[i].year +" 年"+ degree +"毕业论文</small>\n" +
                            "                <p>摘要: "+ d[i].abstract +"</p>\n" +
                            "            </div>"


                    }
                    $(".holder").css("clear","both");



                    $("#itemContainer").html(text);
                    $("div.holder").jPages({
                        containerID : "itemContainer",
                        previous : "←",
                        next : "→",
                        perPage : 5,
                        delay : 50
                    });

                    $("div.holder > a").css("font-size","20px")
                }

            })

        }
        else return;
    }


    if(getQueryVariable("list")==="activity"){
        $(".ListTitle").html("活动剪影");
        $.ajax({
            url:"/getByActivity",
            type:"post",
            error: function (xhr, status, errorThrown) {
                alert("ERROR")
                console.log( "Error: " + errorThrown );
                console.log( "Status: " + status );
                console.log( xhr );
            },
            success:function (d) {
                var text = "";
                for(var i in d)
                {
                    text += "             <div class=\"activity\">\n" +
                        "                <h3>"+ d[i].title +"</h3>\n" +
                        "                    <img class=\"activityImg\" src=\"activity/"+ d[i].actid +"/1.img\">\n" +
                        "                    <p>"+d[i].content+"</p>\n" +
                        "\n" +
                        "            </div>"


                }

                $(".holder").css("clear","both");
                $("#itemContainer").html(text);
                $("div.holder").jPages({
                    containerID : "itemContainer",
                    previous : "←",
                    next : "→",
                    perPage : 5,
                    delay : 50
                });

                $("div.holder > a").css("font-size","20px")
            }

        })

    }

    if(getQueryVariable("list")==="graduated"){
        $(".ListTitle").html("毕业生风采");
        var grade = getQueryVariable("grade");
        $.ajax({
            url:"/getByGraduated",
            type:"post",
            data:{"GRADUATEDATE":grade},
            error: function (xhr, status, errorThrown) {
                alert("ERROR")
                console.log( "Error: " + errorThrown );
                console.log( "Status: " + status );
                console.log( xhr );
            },
            success:function (d) {
                var text = "";
                for(var i in d)
                {
                    text += "" +
                        "            <div class=\"graduatedMember\">\n" +
                        "                <img class=\"graduatedMemberImg\" src=\"img/Member/default.jpg\">\n" +
                        "                <h3>"+ d[i].name +" <small>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+ d[i].graduatedate +"</small></h3>\n" +
                        "                <p>"+d[i].message+"</p>\n" +
                        "\n" +
                        "            </div>" +
                        ""


                }

                $(".holder").css("clear","both");
                $("#itemContainer").html(text);
                $("div.holder").jPages({
                    containerID : "itemContainer",
                    previous : "←",
                    next : "→",
                    perPage : 5,
                    delay : 50
                });

                $("div.holder > a").css("font-size","20px")
            }



        })

    }


























    $('.accordion').on('show', function (e) {

        $(e.target).prev('.accordion-heading').find('.accordion-toggle').addClass('active');
        $(e.target).prev('.accordion-heading').find('.accordion-toggle i').removeClass('icon-plus');
        $(e.target).prev('.accordion-heading').find('.accordion-toggle i').addClass('icon-minus');
    });

    $('.accordion').on('hide', function (e) {
        $(this).find('.accordion-toggle').not($(e.target)).removeClass('active');
        $(this).find('.accordion-toggle i').not($(e.target)).removeClass('icon-minus');
        $(this).find('.accordion-toggle i').not($(e.target)).addClass('icon-plus');
    });









})