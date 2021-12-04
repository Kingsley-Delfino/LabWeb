$.ajax({
    url:"/getAllPaper",
    type:"post",
    error: function (xhr, status, errorThrown) {
        alert("ERROR")
        console.log( "Error: " + errorThrown );
        console.log( "Status: " + status );
        console.log( xhr );
    },
    success:function (d) {
        let text2018 = "";
        let text2017 = "";
        let text2016 = "";
        let text2015 = "";
        let text2014 = "";
        let text2013 = "";
        let text2012 = "";
        let text2011 = "";
        let text2010 = "";
        let text2009 = "";
        let text2008 = "";
        let textLater = "";
        for(let i in d)
        {
            let text = "<li class='list-group-item'>\n" +
                "<p style='margin-bottom: 0; color:black;'>"+ d[i].authors +"</p>\n" +
                "<a href='paper/" + d[i].fileName +"' class='paperListLink' data-toggle='tooltip' data-placement='bottom' title='"+ d[i].abstract +"'>"+ d[i].name +"</a>\n" +
                "<p style='margin-bottom: 0; color: black;'>"+ d[i].source +"</p>\n" +
                "</li>";
            switch(d[i].year) {
                case "2018" :
                    text2018 += text;
                    break;
                case "2017" :
                    text2017 += text;
                    break;
                case "2016" :
                    text2016 += text;
                    break;
                case "2015" :
                    text2015 += text;
                    break;
                case "2014" :
                    text2014 += text;
                    break;
                case "2013" :
                    text2013 += text;
                    break;
                case "2012" :
                    text2012 += text;
                    break;
                case "2011" :
                    text2011 += text;
                    break;
                case "2010" :
                    text2010 += text;
                    break;
                case "2009" :
                    text2009 += text;
                    break;
                case "2008" :
                    text2008 += text;
                    break;
                default :
                    textLater += text;
                    break;
            }
        }
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
    }
})