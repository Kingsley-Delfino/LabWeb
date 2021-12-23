const paper = function () {

    const _index = function () {
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
                let count2018 = 0;
                let count2017 = 0;
                let count2016 = 0;
                let count2015 = 0;
                let count2014 = 0;
                let count2013 = 0;
                let count2012 = 0;
                let count2011 = 0;
                let count2010 = 0;
                let count2009 = 0;
                let count2008 = 0;
                let countLater = 0;
                for(let i in d)
                {
                    let text = "<li class='paper-list-item'>\n" +
                        "<p style='margin-bottom: 0; color:black;'>"+ d[i].authors +"</p>\n" +
                        "<a href='paper/" + d[i].fileName +"' class='paperListLink' data-toggle='tooltip' data-placement='bottom' title='"+ d[i].abstract +"'>"+ d[i].name +"</a>\n" +
                        "<p style='margin-bottom: 0; color: black;'>"+ d[i].source +"</p>\n" +
                        "</li>";
                    switch(d[i].year) {
                        case "2018" :
                            text2018 += text;
                            count2018 ++;
                            break;
                        case "2017" :
                            text2017 += text;
                            count2017 ++;
                            break;
                        case "2016" :
                            text2016 += text;
                            count2016 ++;
                            break;
                        case "2015" :
                            text2015 += text;
                            count2015 ++;
                            break;
                        case "2014" :
                            text2014 += text;
                            count2014 ++;
                            break;
                        case "2013" :
                            text2013 += text;
                            count2013 ++;
                            break;
                        case "2012" :
                            text2012 += text;
                            count2012 ++;
                            break;
                        case "2011" :
                            text2011 += text;
                            count2011 ++;
                            break;
                        case "2010" :
                            text2010 += text;
                            count2010 ++;
                            break;
                        case "2009" :
                            text2009 += text;
                            count2009 ++;
                            break;
                        case "2008" :
                            text2008 += text;
                            count2008 ++;
                            break;
                        default :
                            textLater += text;
                            countLater ++;
                            break;
                    }
                }
                $("#paper2018>.paper2018").html(text2018);
                $("#paper2017>.paper2017").html(text2017);
                $("#paper2016>.paper2016").html(text2016);
                $("#paper2015>.paper2015").html(text2015);
                $("#paper2014>.paper2014").html(text2014);
                $("#paper2013>.paper2013").html(text2013);
                $("#paper2012>.paper2012").html(text2012);
                $("#paper2011>.paper2011").html(text2011);
                $("#paper2010>.paper2010").html(text2010);
                $("#paper2009>.paper2009").html(text2009);
                $("#paper2008>.paper2008").html(text2008);
                $("#paperLater>.paperLater").html(textLater);
                $('.paperListLink').tooltip()
                const xData = ['2007及以前', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'];
                const yData = [countLater, count2008, count2009, count2010, count2011, count2012, count2013, count2014, count2015, count2016, count2017, count2018];
                showChart(xData, yData);
            }
        });
    };

    return {
        init: function () {
            _index();
        }
    }
};

function showChart(xData, yData) {
    const histogramChart = echarts.init(document.getElementById('chart'));
    const option = {
        backgroundColor: '#fffffa',
        dataZoom: [{
            type: 'slider',
            show: true,
            xAxisIndex: [0],
            start: 0,
            end: 100,
        }],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ["论文发表数量"],
        },
        xAxis: [{
            type: 'category',
            data: xData,
        }],
        yAxis: [{
            type: 'value'
        }],
        series: [{
            name: "论文发表数量",
            type: 'bar',
            stack: 'cloneNode',
            data: yData,
            color: ['#637e39']
        }]
    };
    histogramChart.setOption(option);
    histogramChart.off('click');
    histogramChart.on('click', function (params) {
        let group;
        switch (params.name) {
            case "2018" :
                group = document.getElementById("paper2018");
                break;
            case "2017" :
                group = document.getElementById("paper2017");
                break;
            case "2016" :
                group = document.getElementById("paper2016");
                break;
            case "2015" :
                group = document.getElementById("paper2015");
                break;
            case "2014" :
                group = document.getElementById("paper2014");
                break;
            case "2013" :
                group = document.getElementById("paper2013");
                break;
            case "2012" :
                group = document.getElementById("paper2012");
                break;
            case "2011" :
                group = document.getElementById("paper2011");
                break;
            case "2010" :
                group = document.getElementById("paper2010");
                break;
            case "2009" :
                group = document.getElementById("paper2009");
                break;
            case "2008" :
                group = document.getElementById("paper2008");
                break;
           default :
               group = document.getElementById("paperLater");
               break;
        }
        group.scrollIntoView( {
            behavior: "auto"
        });
    })
}

