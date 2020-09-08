$.ajax({
    url:"/getMemberByWay",
    type:"post",
    // data:{RESEARCH:"智能化软件开发"},
    error: function (xhr, status, errorThrown) {
        alert("ERROR")
        console.log( "Error: " + errorThrown );
        console.log( "Status: " + status );
        console.log( xhr );
    },
    success:function (d) {
        var textIntel = "";
        var textMobile = "";
        var textBigData = "";
        var textSoft = "";
        var textClone = "";
        var textCode = "";
        var textDesign = "";
        var textPP = "";
        for(var i in d)
        {
            var degree;
            if(d[i].type==="硕士") degree="硕士";
            else if(d[i].type==="博士") degree="博士";

            var memberPhoto;
            if(d[i].isphoto==="1")  memberPhoto=d[i].picture;
            else if(d[i].isphoto==="0") memberPhoto="default";

            if(d[i].research==="云计算与微服务")
                textIntel += "             <div class=\"AMember  col-md-3\">\n" +
                    "                <img src=\"img/Member/"+ memberPhoto +".jpg\" alt=\"照片\" class=\"MemberPhoto\">\n" +
                    "                <p>" + d[i].name + "</p>\n" +
                    "                <p>"+ d[i].grade +"级"+ degree +"生</p>\n" +
                    "            </div>" +
                    ""
            else if(d[i].research==="代码深度学习")
                textMobile += "             <div class=\"AMember  col-md-3\">\n" +
                    "                <img src=\"img/Member/"+ memberPhoto +".jpg\" alt=\"照片\" class=\"MemberPhoto\">\n" +
                    "                <p>" + d[i].name + "</p>\n" +
                    "                <p>"+ d[i].grade +"级"+ degree +"生</p>\n" +
                    "            </div>" +
                    ""
            else if(d[i].research==="代码知识图谱")
                textBigData += "             <div class=\"AMember  col-md-3\">\n" +
                    "                <img src=\"img/Member/"+ memberPhoto +".jpg\" alt=\"照片\" class=\"MemberPhoto\">\n" +
                    "                <p>" + d[i].name + "</p>\n" +
                    "                <p>"+ d[i].grade +"级"+ degree +"生</p>\n" +
                    "            </div>" +
                    ""
            else if(d[i].research==="软件分析与挖掘")
                textSoft += "             <div class=\"AMember  col-md-3\">\n" +
                    "                <img src=\"img/Member/"+ memberPhoto +".jpg\" alt=\"照片\" class=\"MemberPhoto\">\n" +
                    "                <p>" + d[i].name + "</p>\n" +
                    "                <p>"+ d[i].grade +"级"+ degree +"生</p>\n" +
                    "            </div>" +
                    ""
            else if(d[i].research==="代码克隆分析")
                textClone += "             <div class=\"AMember  col-md-3\">\n" +
                    "                <img src=\"img/Member/"+ memberPhoto +".jpg\" alt=\"照片\" class=\"MemberPhoto\">\n" +
                    "                <p>" + d[i].name + "</p>\n" +
                    "                <p>"+ d[i].grade +"级"+ degree +"生</p>\n" +
                    "            </div>" +
                    ""
            else if(d[i].research==="代码大数据平台")
                textCode += "             <div class=\"AMember  col-md-3\">\n" +
                    "                <img src=\"img/Member/"+ memberPhoto +".jpg\" alt=\"照片\" class=\"MemberPhoto\">\n" +
                    "                <p>" + d[i].name + "</p>\n" +
                    "                <p>"+ d[i].grade +"级"+ degree +"生</p>\n" +
                    "            </div>" +
                    ""
            else if(d[i].research==="软件设计")
                textDesign += "             <div class=\"AMember  col-md-3\">\n" +
                    "                <img src=\"img/Member/"+ memberPhoto +".jpg\" alt=\"照片\" class=\"MemberPhoto\">\n" +
                    "                <p>" + d[i].name + "</p>\n" +
                    "                <p>"+ d[i].grade +"级"+ degree +"生</p>\n" +
                    "            </div>" +
                    ""
            else if(d[i].research==="人机物融合软件技术")
                textPP += "             <div class=\"AMember  col-md-3\">\n" +
                    "                <img src=\"img/Member/"+ memberPhoto +".jpg\" alt=\"照片\" class=\"MemberPhoto\">\n" +
                    "                <p>" + d[i].name + "</p>\n" +
                    "                <p>"+ d[i].grade +"级"+ degree +"生</p>\n" +
                    "            </div>" +
                    ""


        }



        $(".inteliInfo").html(textIntel);
        $(".mobileInfo").html(textMobile);
        $(".bigDataInfo").html(textBigData);
        $(".softInfo").html(textSoft);
        $(".cloneInfo").html(textClone);
        $(".codeInfo").html(textCode);
        $(".designInfo").html(textDesign);
        $(".ppInfo").html(textPP);
        // $("div.holder").jPages({
        //     containerID : "itemContainer",
        //     previous : "←",
        //     next : "→",
        //     perPage : 5,
        //     delay : 50
        // });

        // $("div.holder > a").css("font-size","20px")
    }

})