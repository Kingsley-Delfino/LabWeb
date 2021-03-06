const news = function () {
    $.ajax({
        url:"/getAllNews",
        type:"post",
        error: function (xhr, status, errorThrown) {
            console.log( "Error: " + errorThrown );
            console.log( "Status: " + status );
            console.log( xhr );
        },
        success:function (d) {
            let text = "";
            for(let i in d)
            {
                const title = d[i].title.substr(-1) === ' ' ? d[i].title : `${d[i].title} `;
                text += "<li class='paper-list-item'><a title='" + d[i].content + "' data-toggle='modal' data-target='#newsInfo' onclick=changeNewsInfo(this," + d[i].newsId+")>" + title + "</a>[" + d[i].pubDate + "]</li>"
            }
            $("#newsList>.container>.paper-list").html(text);
        }
    });

    const _index = function () {
        let searchButton = $("#searchButton");
        searchButton.click(function () {
            const text = $("#searchInput").val();
            $.ajax({
                url:"/getNewsWithText",
                data:{"text":text},
                type:"post",
                error: function (xhr, status, errorThrown) {
                    console.log( "Error: " + errorThrown );
                    console.log( "Status: " + status );
                    console.log( xhr );
                },
                success:function (d) {
                    let context = "";
                    for(let i in d)
                    {
                        const title = d[i].title.substr(-1) === ' ' ? d[i].title : `${d[i].title} `;
                        context += "<li class='paper-list-item'><a title='" + d[i].content + "' data-toggle='modal' data-target='#newsInfo' onclick=changeNewsInfo(this," + d[i].newsId+")>" + title + "</a><a>[" + d[i].pubDate + "]</a></li>"
                    }
                    if(d.length === 0) {
                        context += "<div style='text-align: center;'>未搜索到匹配内容。。。</div>";
                    }
                    $("#newsList>.container>.paper-list").html(context);
                }
            });
        });

        searchButton.mouseenter(function () {
            document.getElementById("searchIcon").src = "../img/icon/search_enter.png";
        });

        searchButton.mouseleave(function () {
            document.getElementById("searchIcon").src = "../img/icon/search_normal.png";
        });

        searchButton.mousedown(function () {
            document.getElementById("searchIcon").src = "../img/icon/search_click.png";
        });

        searchButton.mouseup(function () {
            document.getElementById("searchIcon").src = "../img/icon/search_enter.png";
        });
    };

    return {
        init: function () {
            _index();
        }
    }
};

function changeNewsInfo(news, newsId) {
    let initialText="";
    $("#newsInfo > div  >div > .modal-header > h4").html(initialText);
    $("#newsInfo > div  >div > .modal-body > p").html(initialText);
    $.ajax({
        url:"/getNewsPicture",
        data:{"newsId":newsId},
        type:"post",
        error: function (xhr, status, errorThrown) {
            console.log( "Error: " + errorThrown );
            console.log( "Status: " + status );
            console.log( xhr );
        },
        success:function (d) {
            let text = "";
            text += $(news).attr("title");
            text += "<br/>";
            text += "<div style='text-align: center'>"
            for(let i in d){
                text += "<img class='newsInfoPic' src='img/newsPic/"+ d[i].fileName +"' alt=''>"
            }
            text += "</div>"
            $("#newsInfo > div  >div > .modal-header > h4").html($(news).html());
            $("#newsInfo > div  >div > .modal-body > p").html(text);
        }
    })
}