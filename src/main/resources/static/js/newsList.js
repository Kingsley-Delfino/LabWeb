$.ajax({
    url:"/getAllNewsInfo",
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
            // title 最后需要有空格
            const title = d[i].title.substr(-1) === ' ' ? d[i].title : `${d[i].title} `;
            text += "<li class=\"list-group-item\"><a title='"+ d[i].content +"' data-toggle=\"modal\" data-target=\"#newsInfo\" onclick=changeNewsInfo(this,"+d[i].newsid+")>"+ title +"</a><small>"+ d[i].pubdate +"</small></li>"


        }
        $("#newsList>.list-group").html(text);
    }

});

function changeNewsInfo(news,newsID) {
    let initext="";
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
            let text="";
            text+=$(news).attr("title");
            text+="<br />";
            text+="<div style='text-align: center'>"
            for(let i in d){
                text+= "<img class='newsInfoPic' src='img/newsPic/"+ d[i].filename +"'>"
            }
            text +="</div>"
            $("#newsInfo > div  >div > .modal-header > h4").html($(news).html());
            $("#newsInfo > div  >div > .modal-body > p").html(text);
        }
    })
}