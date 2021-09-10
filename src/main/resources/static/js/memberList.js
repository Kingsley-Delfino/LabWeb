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
        let textIntel = "";
        let textBigData = "";
        let textSoft = "";
        let textDesignAndClone = "";
        let textCode = "";
        let textPP = "";
        let textRobot = "";
        let textAI = "";
        let textTech = "";
        for(let i in d)
        {
            let degree;
            if(d[i].type==="硕士") degree="硕士";
            else if(d[i].type==="博士") degree="博士";

            let memberPhoto;
            if(d[i].isphoto==="1")  memberPhoto=d[i].picture;
            else if(d[i].isphoto==="0") memberPhoto="default";

            const tmpMember = "             <div class=\"AMember  col-md-3\">\n" +
                "                <img src=\"img/Member/"+ memberPhoto +".jpg\" alt=\"照片\" class=\"MemberPhoto\">\n" +
                "                <p>" + d[i].name + "</p>\n" +
                "                <p>"+ d[i].grade +"级"+ degree +"生</p>\n" +
                "            </div>" +
                "";

            if(d[i].research==="云原生与智能化运维组")
                textIntel += tmpMember;
            else if(d[i].research==="智能化软件开发组")
                textBigData += tmpMember;
            else if(d[i].research==="代码分析与优化组")
                textSoft += tmpMember;
            else if(d[i].research==="软件设计与克隆分析组")
                textDesignAndClone += tmpMember;
            else if(d[i].research==="代码大数据分析平台组")
                textCode += tmpMember;
            else if(d[i].research==="人机物融合智能组")
                textPP += tmpMember;
            else if(d[i].research==="机器人软件工程组")
                textRobot += tmpMember;
            else if(d[i].research==="AI系统工程组")
                textAI += tmpMember;
            else if(d[i].research==="AI系统工程组")
                textTech += tmpMember;
        }

        $(".inteliInfo").html(textIntel);
        $(".bigDataInfo").html(textBigData);
        $(".softInfo").html(textSoft);
        $(".designAndCloneInfo").html(textDesignAndClone);
        $(".codeInfo").html(textCode);
        $(".ppInfo").html(textPP);
        $(".robotInfo").html(textRobot);
        $(".aiInfo").html(textAI);
        $(".techInfo").html(textTech);
    }

})