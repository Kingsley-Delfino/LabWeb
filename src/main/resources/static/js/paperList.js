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
        console.log(d)
        var text2018 = "";
        var text2017 = "";
        var text2016 = "";
        var text2015 = "";
        var text2014 = "";
        var text2013 = "";
        var text2012 = "";
        var text2011 = "";
        var text2010 = "";
        var text2009 = "";
        var text2008 = "";
        var textLater = "";
        for(var i in d)
        {
            if(d[i].year==="2018")
                text2018 += "<li class=\"list-group-item\">" +
                    "<p style=\"margin-bottom: 0px;color:black;\">"+ d[i].authors +"</p>\n" +
                    "            <a href=\"paper/"+ d[i].filename +"\" class=\"paperListLink\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\""+ d[i].abstract +"\">"+ d[i].name +"</a>\n" +
                    "            <p style=\"margin-bottom: 0px;color: black\">"+ d[i].source +"</p>\n" +
                    "</li>"
            if(d[i].year==="2017")
                text2017 += "<li class=\"list-group-item\">" +
                    "<p style=\"margin-bottom: 0px;color:black;\">"+ d[i].authors +"</p>\n" +
                    "            <a href=\"paper/"+ d[i].filename +"\" class=\"paperListLink\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\""+ d[i].abstract +"\">"+ d[i].name +"</a>\n" +
                    "            <p style=\"margin-bottom: 0px;color: black\">"+ d[i].source +"</p>\n" +
                    "</li>"
            else if(d[i].year==="2016")
                text2016 += "<li class=\"list-group-item\">" +
                    "<p style=\"margin-bottom: 0px;color:black;\">"+ d[i].authors +"</p>\n" +
                    "            <a href=\"paper/"+ d[i].filename +"\" class=\"paperListLink\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\""+ d[i].abstract +"\">"+ d[i].name +"</a>\n" +
                    "            <p style=\"margin-bottom: 0px;color: black\">"+ d[i].source +"</p>\n" +
                    "</li>"
            else if(d[i].year==="2015")
                text2015 += "<li class=\"list-group-item\">" +
                    "<p style=\"margin-bottom: 0px;color:black;\">"+ d[i].authors +"</p>\n" +
                    "            <a href=\"paper/"+ d[i].filename +"\" class=\"paperListLink\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\""+ d[i].abstract +"\">"+ d[i].name +"</a>\n" +
                    "            <p style=\"margin-bottom: 0px;color: black\">"+ d[i].source +"</p>\n" +
                    "</li>"
            else if(d[i].year==="2014")
                text2014 += "<li class=\"list-group-item\">" +
                    "<p style=\"margin-bottom: 0px;color:black;\">"+ d[i].authors +"</p>\n" +
                    "            <a href=\"paper/"+ d[i].filename +"\" class=\"paperListLink\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\""+ d[i].abstract +"\">"+ d[i].name +"</a>\n" +
                    "            <p style=\"margin-bottom: 0px;color: black\">"+ d[i].source +"</p>\n" +
                    "</li>"
            else if(d[i].year==="2013")
                text2013 += "<li class=\"list-group-item\">" +
                    "<p style=\"margin-bottom: 0px;color:black;\">"+ d[i].authors +"</p>\n" +
                    "            <a href=\"paper/"+ d[i].filename +"\" class=\"paperListLink\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\""+ d[i].abstract +"\">"+ d[i].name +"</a>\n" +
                    "            <p style=\"margin-bottom: 0px;color: black\">"+ d[i].source +"</p>\n" +
                    "</li>"
            else if(d[i].year==="2012")
                text2012 += "<li class=\"list-group-item\">" +
                    "<p style=\"margin-bottom: 0px;color:black;\">"+ d[i].authors +"</p>\n" +
                    "            <a href=\"paper/"+ d[i].filename +"\" class=\"paperListLink\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\""+ d[i].abstract +"\">"+ d[i].name +"</a>\n" +
                    "            <p style=\"margin-bottom: 0px;color: black\">"+ d[i].source +"</p>\n" +
                    "</li>"
            else if(d[i].year==="2011")
                text2011 += "<li class=\"list-group-item\">" +
                    "<p style=\"margin-bottom: 0px;color:black;\">"+ d[i].authors +"</p>\n" +
                    "            <a href=\"paper/"+ d[i].filename +"\" class=\"paperListLink\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\""+ d[i].abstract +"\">"+ d[i].name +"</a>\n" +
                    "            <p style=\"margin-bottom: 0px;color: black\">"+ d[i].source +"</p>\n" +
                    "</li>"
            else if(d[i].year==="2010")
                text2010 += "<li class=\"list-group-item\">" +
                    "<p style=\"margin-bottom: 0px;color:black;\">"+ d[i].authors +"</p>\n" +
                    "            <a href=\"paper/"+ d[i].filename +"\" class=\"paperListLink\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\""+ d[i].abstract +"\">"+ d[i].name +"</a>\n" +
                    "            <p style=\"margin-bottom: 0px;color: black\">"+ d[i].source +"</p>\n" +
                    "</li>"
            else if(d[i].year==="2009")
                text2009 += "<li class=\"list-group-item\">" +
                    "<p style=\"margin-bottom: 0px;color:black;\">"+ d[i].authors +"</p>\n" +
                    "            <a href=\"paper/"+ d[i].filename +"\" class=\"paperListLink\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\""+ d[i].abstract +"\">"+ d[i].name +"</a>\n" +
                    "            <p style=\"margin-bottom: 0px;color: black\">"+ d[i].source +"</p>\n" +
                    "</li>"
            else if(d[i].year==="2008")
                text2008 += "<li class=\"list-group-item\">" +
                    "<p style=\"margin-bottom: 0px;color:black;\">"+ d[i].authors +"</p>\n" +
                    "            <a href=\"paper/"+ d[i].filename +"\" class=\"paperListLink\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\""+ d[i].abstract +"\">"+ d[i].name +"</a>\n" +
                    "            <p style=\"margin-bottom: 0px;color: black\">"+ d[i].source +"</p>\n" +
                    "</li>"
            else
                textLater += "<li class=\"list-group-item\">" +
                    "<p style=\"margin-bottom: 0px;color:black;\">"+ d[i].authors +"</p>\n" +
                    "            <a href=\"paper/"+ d[i].filename +"\" class=\"paperListLink\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\""+ d[i].abstract +"\">"+ d[i].name +"</a>\n" +
                    "            <p style=\"margin-bottom: 0px;color: black\">"+ d[i].source +"</p>\n" +
                    "</li>"


        }
        // $(".holder").css("clear","both");


        $("#paperList>.paper2018").html(text2018);

        $("#paperList>.paper2017").html(text2017);
        $("#paperList>.paper2016").html(text2016);
        $("#paperList>.paper2015").html(text2015);
        $("#paperList>.paper2014").html(text2014);
        $("#paperList>.paper2013").html(text2013);
        $("#paperList>.paper2012").html(text2012);
        $("#paperList>.paper2011").html(text2011);
        $("#paperList>.paper2010").html(text2010);
        $("#paperList>.paper2009").html(text2009);
        $("#paperList>.paper2008").html(text2008);
        $("#paperList>.paperLater").html(textLater);

        $('.paperListLink').tooltip()
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