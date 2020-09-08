// bind the on-change event
$(document).ready(function() {
    var text="                    <form class=\"upload-file-form\">\n" +
        "                        <input class=\"upload-file-input\" type=\"file\" name=\"uploadfile\" accept=\"*\" />\n" +
        "                    </form>"
    $("#fileuploaddiv").append(text);
    $(".upload-file-input:last").on("change", addfiles);

});

/**
 * Upload the file sending it via Ajax at the Spring Boot server.
 */
function addfiles() {
    var text="                    <form class=\"upload-file-form\">\n" +
        "                        <input class=\"upload-file-input\" type=\"file\" name=\"uploadfile\" accept=\"*\" />\n" +
        "                    </form>"
    $("#fileuploaddiv").append(text);
    $(".upload-file-input:last").on("change", addfiles);
} // function uploadFile


$("#newsButton").click(function () {
    event.preventDefault();
    var title = $("#newsTitle").val();
    var info = $("#newsInfo").val();
    info=info.replace(/\n|\r\n/g,"<br>");
    var icon = $("input[name=newsIcon]:checked").val();
    var month = new Date().getMonth();
    month+=1;
    var date = ""+ new Date().getFullYear() +"-"+ month +"-"+ new Date().getDate() +"";
    $.ajax({
        async:false,
        url:"/insertNewsInfo",
        type:"post",
        data:{title:title,
            CONTENT:info,
            ICON:icon,
            PUBDATE:date
                },
        error: function (xhr, status, errorThrown) {
            alert("fail")
            console.log( "Error: " + errorThrown );
            console.log( "Status: " + status );
            console.log( xhr );
        },
        success:function (d) {
            uploadfiles(d);

            alert("更新完成")

        }

    })

})

function uploadfiles(id) {

    var loop = $('.upload-file-form').length;
    var i;

    for(i=0;i<loop-1;i++) {
        var formdata = new FormData($(".upload-file-form")[i]);
        var file=formdata.get("uploadfile");
        var point = file.name.lastIndexOf(".");
        var type = file.name.substr(point);

        var newfilename = id + "_" + i+type;

        formdata.append("name",newfilename);
        console.log(newfilename)
        $.ajax({
            async:false,
            url: "/uploadFile",
            type: "POST",
            data: formdata,
            enctype: 'multipart/form-data',
            processData: false,
            contentType: false,
            cache: false,
            success: function () {
                console.log("文件上传成功")
                insertNewsInfoPic(id,newfilename);
            },
            error: function () {
                alert("文件上传失败")
            }
        });
    }
}

function insertNewsInfoPic(newsid,filename) {

        $.ajax({
            async:false,
            url: "/insertNewsInfoPic",
            type: "POST",
            data: {"NEWSID":newsid,
                    "FILENAME":filename},
            success: function () {
                console.log("图片数据库添加成功")
            },
            error: function () {
                alert("图片数据库添加失败")
            }
        });

}