$(function () {

    echart_2();

    echart_3();

    echarts_1();
    echarts_4();
   
    char4();


 

    function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts_1'));

        var data = [
            {value: 81,name: '跳水'},
            {value: 62,name: '举重'},
            {value: 84,name: '体操'},
            {value: 60,name: '乒乓球'},
            {value: 67,name: '射击'}
        ];

        option = {
            backgroundColor: 'rgba(0,0,0,0)',
            tooltip: {
                trigger: 'item',
                formatter: "{b}: <br/>{c} ({d}%)"
            },
            color: ['#af89d6', '#4ac7f5', '#0089ff', '#f36f8a', '#f5c847'],
            legend: { //图例组件，颜色和名字
                x: '70%',
                y: 'center',
                orient: 'vertical',
                itemGap: 12, //图例每项之间的间隔
                itemWidth: 10,
                itemHeight: 10,
                icon: 'rect',
                data: ['跳水', '举重', '体操', '乒乓球', '射击'],
                textStyle: {
                    color: [],
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 12,
                }
            },
            series: [{
                name: '奖牌占比',
                type: 'pie',
                clockwise: false, //饼图的扇区是否是顺时针排布
                minAngle: 20, //最小的扇区角度（0 ~ 360）
                center: ['35%', '50%'], //饼图的中心（圆心）坐标
                radius: [50, 75], //饼图的半径
                avoidLabelOverlap: true, ////是否启用防止标签重叠
                itemStyle: { //图形样式
                    normal: {
                        borderColor: '#1e2239',
                        borderWidth: 2,
                    },
                },
                label: { //标签的位置
                    normal: {
                        show: true,
                        position: 'inside', //标签的位置
                        formatter: "{d}%",
                        textStyle: {
                            color: '#fff',
                        }
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontWeight: 'bold'
                        }
                    }
                },
                data: data
            }, {
                name: '',
                type: 'pie',
                clockwise: false,
                silent: true,
                minAngle: 20, //最小的扇区角度（0 ~ 360）
                center: ['35%', '50%'], //饼图的中心（圆心）坐标
                radius: [0, 40], //饼图的半径
                itemStyle: { //图形样式
                    normal: {
                        borderColor: '#1e2239',
                        borderWidth: 1.5,
                        opacity: 0.21,
                    }
                },
                label: { //标签的位置
                    normal: {
                        show: false,
                    }
                },
                data: data
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    //echart_2
    function echart_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_2'));
        
        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },

            legend: {
                // align: 'center',
                // left: '65%',
                top: '28',
                data: ['金牌', '银牌', '铜牌'],
                itemWidth:16,
                itemHeight:12,
                // borderRadius: 0, // 统一设置四个角的圆角大小
                icon: 'rect',
                textStyle: {
                    itemGap: 12, //图例每项之间的间隔
                    color: [],
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 14,
                }
            },
            grid: {
                left: '5%',
                right: '5%',
                bottom: '5%',
                containLabel: true
            },

            xAxis: {
                axisLabel: { //调整x轴的lable
                    textStyle: {
                        color: '#fff',
                        fontSize: 13,
                    }
                },
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                type: 'category',
                data: ['跳水', '举重', '体操', '乒乓球',"射击"],
                axisTick : {show: true},
                axisLabel: { //调整x轴的lable
                    textStyle: {
                        color: '#fff',
                        fontSize: 13,
                    }
                },
                splitLine: {
                    show: false
                }
            },
            series: [{
                name: '金牌',
                type: 'bar',
                stack: '总量',
                color:'gold',
                barWidth : 18,
                label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    }
                },
                data: [47,38,33,32,26]
            }, {
                name: '银牌',
                type: 'bar',
                stack: '总量',
                color:'silver',
                barWidth : 20,
                label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    }
                },
                data: [24,16,26,20,16]
            }, {
                name: '铜牌',
                type: 'bar',
                stack: '总量',
                color:'#a9631d',
                barWidth : 20,
                label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    }
                },
                data: [10,8,25,8,25]}
    

            ]

        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    
    // echart_map
    function echart_map() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_map'));

 
        var app = {};
        option = null;
        var posList = [
            'left', 'right', 'top', 'bottom',
            'inside',
            'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
            'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
        ];

        app.configParameters = {
            rotate: {
                min: -90,
                max: 90
            },
            align: {
                options: {
                    left: 'left',
                    center: 'center',
                    right: 'right'
                }
            },
            verticalAlign: {
                options: {
                    top: 'top',
                    middle: 'middle',
                    bottom: 'bottom'
                }
            },
            position: {
                options: echarts.util.reduce(posList, function (map, pos) {
                    map[pos] = pos;
                    return map;
                }, {})
            },
            distance: {
                min: 0,
                max: 100
            }
        };

        app.config = {
            rotate: 90,
            align: 'left',
            verticalAlign: 'middle',
            position: 'insideBottom',
            distance: 15,
            onChange: function () {
                var labelOption = {
                    normal: {
                        rotate: app.config.rotate,
                        align: app.config.align,
                        verticalAlign: app.config.verticalAlign,
                        position: app.config.position,
                        distance: app.config.distance
                    }
                };
                myChart.setOption({
                    series: [{
                        label: labelOption
                    }, {
                        label: labelOption
                    }, {
                        label: labelOption
                    }, {
                        label: labelOption
                    }]
                });
            }
        };


        var labelOption = {
            show: true,
            position: app.config.position,
            distance: app.config.distance,
            align: app.config.align,
            verticalAlign: app.config.verticalAlign,
            rotate: app.config.rotate,
            formatter: '{c}  {name|{a}}',
            fontSize: 16,
            rich: {
                name: {
                    textBorderColor: '#fff'
                }
            }
        };

        option = {
            color: ['#003366', '#006699', '#4cabce', '#e5323e'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['Forest', 'Steppe', 'Desert', 'Wetland']
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    mark: {show: true},
                    dataView: {show: true, readOnly: false},
                    magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            xAxis: [
                {
                    type: 'category',
                    axisTick: {show: false},
                    data: ['2012', '2013', '2014', '2015', '2016']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: 'Forest',
                    type: 'bar',
                    barGap: 0,
                    label: labelOption,
                    data: [320, 332, 301, 334, 390]
                },
                {
                    name: 'Steppe',
                    type: 'bar',
                    label: labelOption,
                    data: [220, 182, 191, 234, 290]
                },
                {
                    name: 'Desert',
                    type: 'bar',
                    label: labelOption,
                    data: [150, 232, 201, 154, 190]
                },
                {
                    name: 'Wetland',
                    type: 'bar',
                    label: labelOption,
                    data: [98, 77, 101, 99, 40]
                }
            ]
        };;
    
        myChart.setOption(option);
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });

    }

    //echart_3
    function echart_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_3'));
        var xAxisData = ['北京', '天津', '上海', '重庆', '河北', '河南', '云南', '辽宁', '黑龙江', '湖南'];
        var legendData= ['','',''];
        var title = "";
        var serieData = [];
        var metaDate = [
            [23,11,17,6,8,13,1,44,8,17]

        ]
        for(var v=0; v < legendData.length ; v++){
            var serie = {
                name:legendData[v],
                type: 'line',
                symbol:"circle",
                symbolSize:10,
                data: metaDate[v]
            };
            serieData.push(serie)
        }
        var colors = ["#ffff43"];
        var option = {
            backgroundColor: 'transparent',
            title : {text: title,textAlign:'left',textStyle:{color:"#fff",fontSize:"16",fontWeight:"normal"}},

            color:colors,
            grid: {left: '4%',top:"30%",bottom: "5%",right:"4%",containLabel: true},
            tooltip : { trigger: 'axis',axisPointer : { type : 'shadow'}},
            xAxis: [
                {
                    type: 'category',
                    axisLine: { show: true,lineStyle:{ color:'#2c3459' }},
                    axisLabel:{interval:0,textStyle:{color:'#fff',fontSize:10} },
                    axisTick : {show: false},
                    data:xAxisData,
                },
            ],
            yAxis: [
                {
                    axisTick : {show: false},
                    splitLine: {show:false},
                    axisLabel:{textStyle:{color:'#fff',fontSize:12} },
                    axisLine: { show: true,lineStyle:{ color:'#2c3459'}},
                },
            ],
            series:serieData
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    
    function echart_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_4'));

        /*中间显示的数据*/
        /*中间显示的数据*/
        var myData = ['超速', 'SOS', '偏移', '其他']
        var databeast = {
            1: [38, 25, 26, 32]
        }
        var databeauty = {
            1: [11, 38, 23, 30]
        }
        var timeLineData = [1]

        var option = {
            baseOption: {
                backgroundColor: 'transparent',
                timeline: {
                    show: false,
                    top: 0,
                    data: []
                },
                legend: {
                    show:true,
                 
                    left: '30%',
                    top: 30,
                  
                    // // borderRadius: 0, // 统一设置四个角的圆角大小
                    icon: 'rect',
                    textStyle: {
                        itemGap: 12, //图例每项之间的间隔
                        color: [],
                        fontStyle: 'normal',
                        fontFamily: '微软雅黑',
                        fontSize: 14,
                    }
                },
                tooltip: {
                    show: true,
                    trigger: 'axis',
                    formatter: '{b}<br/>{a}: {c}',
                    axisPointer: {
                        type: 'shadow'
                    }
                },

                grid: [{
                    show: false,
                    left: '8%',
                    top: 60,
                    bottom: 0,
                    containLabel: true,
                    width: '30%'
                }, {
                    show: false,
                    left: '57%',
                    top: 60,
                    bottom: 0,
                    width: '0%'
                }, {
                    show: false,
                    right: '8%',
                    top: 60,
                    bottom: 0,
                    containLabel: true,
                    width: '30%'
                }],

                xAxis: [{
                    type: 'value',
                    inverse: true,
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    position: 'top',
                    axisLabel: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }
                }, {
                    gridIndex: 1,
                    show: false
                }, {
                    gridIndex: 2,
                    nameTextStyle: {
                        color: '#50afff',
                        fontSize: 14
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    position: 'top',
                    axisLabel: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }
                }],
                yAxis: [{
                    type: 'category',
                    inverse: true,
                    position: 'right',
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    data: myData
                }, {
                    gridIndex: 1,
                    type: 'category',
                    inverse: true,
                    position: 'left',
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff',
                            fontSize: 14
                        }

                    },
                    data: myData.map(function(value) {
                        return {
                            value: value,
                            textStyle: {
                                align: 'center'
                            }
                        }
                    })
                }, {
                    gridIndex: 2,
                    type: 'category',
                    inverse: true,
                    position: 'left',
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false

                    },
                    data: myData
                }],
                series: [

                ]

            },
            options: []
        }

        option.baseOption.timeline.data.push(timeLineData[0])
        option.options.push({
            tooltip: {
                trigger: 'axis',
                formatter: '{b}<br/>{c} {a}'
            },
            series: [{
                name: '昨天',
                type: 'bar',
                barWidth: 17,
                label: {
                    normal: {
                        show: true,
                        position: 'left',
                        offset: [0, 0],
                        textStyle: {
                            color: '#fff',
                            fontSize: 14
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#0035f9',
                        // barBorderRadius: 50
                    }
                },

                data: databeast[timeLineData[0]]
            }, {
                name: '今天',
                type: 'bar',
                barWidth: 18,
                xAxisIndex: 2,
                yAxisIndex: 2,
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        offset: [0, 0],
                        textStyle: {
                            color: '#fff',
                            fontSize: 14
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#25f3e6',
                        // barBorderRadius: 50
                    }
                },
                data: databeauty[timeLineData[0]]
            }]
        })
        
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
        
    }


    function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));
        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#57617B'
                    }
                }
            },
            "legend": {

                "data": [
                    {"name": "金牌"},
                    {"name": "银牌"},
                    {"name": "铜牌"},
                    {"name": "金牌占比"}
                ],
                "top": "0%",
                "textStyle": {
                    "color": "rgba(255,255,255,0.9)"//图例文字
                }
            },

            "xAxis": [
                {
                    "type": "category",

                    data: ['1984洛杉矶', '1988年汉城', '1992巴塞罗那', '1996亚特兰大', '2000悉尼', '2004雅典', '2008北京', '2012伦敦', '2016里约', '2020东京'],
                    axisLine: { lineStyle: {color: "rgba(255,255,255,.1)"}},
                    axisLabel:  { textStyle: {color: "rgba(255,255,255,1)", fontSize: '10', },
                    },

                },
            ],
            "yAxis": [
                {
                    "type": "value",
                    "name": "奖牌数/枚",
                    "min": 0,
                    "max": 50,
                    "interval": 10,
                    "axisLabel": {
                        "show": true,

                    },
                    axisLine: {lineStyle: {color: 'rgba(255,255,67,.8)'}},//左线色

                },
                {
                    "type": "value",
                    "name": "金牌占比/%",
                    "show": true,
                    "axisLabel": {
                        "show": true,

                    },
                    axisLine: {lineStyle: {color: 'rgba(255,255,67,.8)'}},//右线色
                    splitLine: {show:true,lineStyle: {color:"#ffffff"}},//x轴线
                },
            ],
            "grid": {
                "top": "10%",
                "right":"30",
                "bottom":"30",
                "left":"30",
            },
            "series": [
                
                {
                    "name": "金牌",
                    "type": "bar",
                    "data": [
                        15,5,16,16,28,32,48,38,26,38
                    ],
                    "barWidth": "auto",

                    "itemStyle": {
                        "normal": {
                            "color": {
                                "type": "linear",
                                "x": 0,
                                "y": 0,
                                "x2": 0,
                                "y2": 1,
                                "colorStops": [
                                    {
                                        "offset": 0,
                                        "color": "#f8e102"
                                    },
                                    {
                                        "offset": 1,
                                        "color": "#f8e102"
                                    }
                                ],
                                "globalCoord": false
                            }
                        }
                    },
                    "barGap": "0"
                },
                {
                    "name": "银牌",
                    "type": "bar",
                    "data": [
                        8,11,22,22,16,17,22,31,18,32
                    ],
                    "barWidth": "auto",

                    "itemStyle": {
                        "normal": {
                            "color": {
                                "type": "linear",
                                "x": 0,
                                "y": 0,
                                "x2": 0,
                                "y2": 1,
                                "colorStops": [
                                    {
                                        "offset": 0,
                                        "color": "silver"
                                    },
                                    {
                                        "offset": 1,
                                        "color": "silver"
                                    }
                                ],
                                "globalCoord": false
                            }
                        }
                    },
                    
                    "barGap": "0"
                },{
                    "name": "铜牌",
                    "type": "bar",
                    "data": [
                        9,12,16,12,14,14,30,22,26,18
                    ],
                    "barWidth": "auto",

                    "itemStyle": {
                        "normal": {
                            "color": {
                                "type": "linear",
                                "x": 0,
                                "y": 0,
                                "x2": 0,
                                "y2": 1,
                                "colorStops": [
                                    {
                                        "offset": 0,
                                        "color": "#a9631d"
                                    },
                                    {
                                        "offset": 1,
                                        "color": "#a9631d"
                                    }
                                ],
                                "globalCoord": false
                            }
                        }
                    }},
                {
                    "name": "金牌占比",
                    "type": "line",
                    "yAxisIndex": 1,

                    "data": [47,18,30,32,46,51,48,42,37,43,41],
                    lineStyle: {
                        normal: {
                            width: 2
                        },
                    },
                    "itemStyle": {
                        "normal": {
                            "color": "#cdba00",

                        }
                    },
                    "smooth": true
                }
            ]
        };


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }




})




function char4() {

    var myChart = echarts.init($("#char4")[0]);

    option = {
        grid: {show:'true',borderWidth:'0'},
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },

            formatter: function (params) {
                var tar = params[0];
                return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
            }
        },

        xAxis : [
            {
                type : 'category',
                splitLine: {show:false},
                data : ['跳水','举重','体操','乒乓球',"射击"],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                        
                    }
                }

            }
        ],
        yAxis : [
            {
                type : 'value',
                splitLine: {show:false},
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                }
            }
        ],
        series : [

            {
                name:'奖牌总数',
                type:'bar',
                stack: '总量',
                itemStyle : {
                    normal: {
                        label : {show: true, position: 'inside'},
                        color: '#44aff0'
                    }
                    },
                data:[81, 62, 84, 60,67]
            }
        ]
    };

    myChart.setOption(option);
    window.addEventListener('resize', function () {myChart.resize();})

}
