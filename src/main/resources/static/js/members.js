$.ajax({
    url:"/getLabMemberByGroup",
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
        let textDev = "";
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
            if(d[i].isPhoto==="1") {
                memberPhoto= d[i].research + "/" + d[i].picture;
            }
            else if(d[i].isPhoto==="0") {
                memberPhoto="default";
            }
            const tmpMember = "<div class=\"AMember  col-md-3\">\n" +
                "<img src=\"img/Member/" + memberPhoto +".jpg\" alt=\"照片\" class=\"MemberPhoto\">\n" +
                "<p>" + d[i].name + "</p>\n" +
                "<p>" + d[i].grade + "级" + degree + "生</p>\n" +
                "</div>";
            switch (d[i].research) {
                case "云原生与智能化运维组" :
                    textIntel += tmpMember;
                    break;
                case "智能化软件开发组" :
                    textDev += tmpMember;
                    break;
                case "代码分析与优化组" :
                    textSoft += tmpMember;
                    break;
                case "软件设计与克隆分析组" :
                    textDesignAndClone += tmpMember;
                    break;
                case "代码大数据分析平台组" :
                    textCode += tmpMember;
                    break;
                case "人机物融合智能组" :
                    textPP += tmpMember;
                    break;
                case "机器人软件工程组" :
                    textRobot += tmpMember;
                    break;
                case "AI系统工程组" :
                    textAI += tmpMember;
                    break;
                case "程序分析技术组" :
                    textTech += tmpMember;
                    break;
                default :
                    break;
            }
        }
        $(".intelInfo").html(textIntel);
        $(".devInfo").html(textDev);
        $(".softInfo").html(textSoft);
        $(".designAndCloneInfo").html(textDesignAndClone);
        $(".codeInfo").html(textCode);
        $(".ppInfo").html(textPP);
        $(".robotInfo").html(textRobot);
        $(".aiInfo").html(textAI);
        $(".techInfo").html(textTech);
    }
})