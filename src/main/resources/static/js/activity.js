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

        // $(".holder").css("clear","both");
        $("#activity").html(text);
        // $("div.holder").jPages({
        //     containerID : "itemContainer",
        //     previous : "←",
        //     next : "→",
        //     perPage : 5,
        //     delay : 50
        // });
        //
        // $("div.holder > a").css("font-size","20px")
    }

})