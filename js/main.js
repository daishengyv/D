$(function (){

    $('#dai').on('mouseover',function (){

        console.log(this);

        this.style['box-shadow'] = '-2px -5px 30px 5px rgba(255,255,255,0.5)';

    })


    document.addEventListener('mousemove', function (e){
        if(e.target.id != 'dai') return;


        let d = document.getElementById('dai');


        let l = d.offsetLeft;
        let t = d.offsetTop;
        let w = d.offsetWidth/2;
        let h = d.offsetHeight/2;
        let x = (e.pageX - l - w)*0.15;
        let y = (e.pageY  - t - h)*0.15;
        let ld = 0;
        let td = 0;
        ld = (e.pageX - l - w)/w*10;
        td = (e.pageY  - t - h)/h*10;

       $('#dai').css({
    
        'transform': 'scale(1.03) translate('+ x + 'px,' + y + 'px)' + 'rotateX('  +  ld+  'deg) rotateY(' + td + 'deg)'
       })

    //    rotateX( ' + e.pageX * 0.01 + 'deg) rotateY('+e.pageY * 0.01+'deg)


        console.log(e.pageX,e.pageY,l,t,w,h);
    });

    
    document.addEventListener('mouseout', function (e){

        $('#dai').css({
         'transform': 'scale(1) translate('+ 0 + 'px,' + 0 + 'px) rotateX( ' +0+ 'deg) rotateY('+0+'deg)',
         'box-shadow':'none'
        })
        
     });

    //  console.log($('.zwjs'));

     $('.poster-item').hover(function(){
        $(this.children).filter('.students_star').slideDown(1000);
       
      },function(){
        $(this.children).filter('.students_star').slideUp(1000);
       
      });

    //  $('.poster-item').hover(function(){
    //     // $(this).css('background','blue');
    //     $(this).hide(3000); //隐藏
    //     $(this).fadeOut(1000);  //默认400
    //     $(this).slideUp();
    //     $(this).fadeTo(1000,0.5);
    //   },function(){
    //     $(this).css('background','red');
    //     $(this).show(3000); //显示
    //     $(this).fadeIn(1000);
    //     $(this).slideDown();
    //     $(this).fadeTo(1000,1);
    //   });


    // var chart = echarts.init(dom, 'light');
  
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main-e') , 'light');

    // 指定图表的配置项和数据
    var   option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data:['Skills','Javascript','CSS3','HTML5','React','Jquery']
        },

        visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
                colorLightness: [0, 1]
            }
        },




        series: [
            {
                name:'Skills',
                type:'pie',
                selectedMode: 'single',
                radius: [0, '20%'],
    
                label: {
                    normal: {
                        position: 'inner',
                        fontSize:40
                      }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:0, name:'Skills'}
                ]
            },
            {
                name:'Javascript',
                type:'pie',
                selectedMode: 'single',
                radius: ['25%', '35%'],
    
                label: {
                    normal: {
                        position: 'inner',
                        fontSize:26,
                        backgroundColor: '#eee',
                        borderColor: '#aaa',
                        borderWidth: 1,
                        borderRadius: 4
                      }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:68, name:'68%'},
                    {value:32, name:'Javascript', selected:true}
                ]
            }
            ,
            {
                name:'CSS3',
                type:'pie',
                selectedMode: 'single',
                radius: ['40%', '50%'],
    
                label: {
                    normal: {
                        position: 'inner',
                        fontSize:26,
                        backgroundColor: '#eee',
                        borderColor: '#aaa',
                        borderWidth: 1,
                        borderRadius: 4
                      }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:80, name:'80%'},
                    {value:20, name:'CSS3'}
                ]
            }
            ,
            {
                name:'HTML5',
                type:'pie',
                selectedMode: 'single',
                radius: ['55%', '65%'],
    
                label: {
                    normal: {
                        position: 'inner',
                        fontSize:26,
                        backgroundColor: '#eee',
                        borderColor: '#aaa',
                        borderWidth: 1,
                        borderRadius: 4
                      }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:75, name:'75%'},
                    {value:25, name:'HTML5', selected:true}
                ]
            }
            ,
            {
                name:'React',
                type:'pie',
                selectedMode: 'single',
                radius: ['70%', '80%'],
    
                label: {
                    normal: {
                        position: 'inner',
                        fontSize:26,
                        backgroundColor: '#eee',
                        borderColor: '#aaa',
                        borderWidth: 1,
                        borderRadius: 4
                      }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:30, name:'30%'},
                    {value:70, name:'React'}
                ]
            }
            ,
            {
                name:'Jquery',
                type:'pie',
                selectedMode: 'single',
                radius: ['85%', '95%'],
    
                label: {
                    normal: {
                        position: 'inner',
                        fontSize:26,
                        backgroundColor: '#eee',
                        borderColor: '#aaa',
                        borderWidth: 1,
                        borderRadius: 4
                      }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:80, name:'80%'},
                    {value:20, name:'Jquery', selected:true}
                ],
                itemStyle: {
                    normal: {
                        // color:[ '#c23531','#000'],
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }

        
           
            
            // ,
            // {
            //     name:'访问来源',
            //     type:'pie',
            //     radius: ['25%', '35%'],
            //     label: {
            //         normal: {
            //             formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
            //             backgroundColor: '#eee',
            //             borderColor: '#aaa',
            //             borderWidth: 1,
            //             borderRadius: 4,
            //             // shadowBlur:3,
            //             // shadowOffsetX: 2,
            //             // shadowOffsetY: 2,
            //             // shadowColor: '#999',
            //             // padding: [0, 7],
            //             rich: {
            //                 a: {
            //                     color: '#999',
            //                     lineHeight: 22,
            //                     align: 'center'
            //                 },
            //                 // abg: {
            //                 //     backgroundColor: '#333',
            //                 //     width: '100%',
            //                 //     align: 'right',
            //                 //     height: 22,
            //                 //     borderRadius: [4, 4, 0, 0]
            //                 // },
            //                 hr: {
            //                     borderColor: '#aaa',
            //                     width: '100%',
            //                     borderWidth: 0.5,
            //                     height: 0
            //                 },
            //                 b: {
            //                     fontSize: 16,
            //                     lineHeight: 33
            //                 },
            //                 per: {
            //                     color: '#eee',
            //                     backgroundColor: '#334455',
            //                     padding: [2, 4],
            //                     borderRadius: 2
            //                 }
            //             }
            //         }
            //     },
            //     data:[
            //         {value:335, name:'直达'},
            //         {value:310, name:'邮件营销'},
            //         {value:234, name:'联盟广告'},
            //         {value:135, name:'视频广告'},
            //         {value:1048, name:'百度'},
            //         {value:251, name:'谷歌'},
            //         {value:147, name:'必应'},
            //         {value:102, name:'其他'}
            //     ]
            // }
        ]
    };






/* 


var total = 50;//最大温度数据单独出来定义，方便环形总数的修改

placeHolderStyle = {
    normal: {
        label: {
            show: false,
        },
        labelLine: {
            show: false,
        }
    }
};
option = {
    title : {
        text: '室内温度',//主标题
        subtext: '26℃',//副标题
        textStyle: {//主标题样式
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
        },
        subtextStyle: {//副标题样式
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0f0'
        },
        left:'center',
        top: 'middle'
    },
    tooltip: {
    show: true,
        trigger: 'item',//提示框触发类型，item数据项图形触发，主要应用于无类目轴的图表（散点图、饼形图等）
        formatter: function(params, ticket, callback) {//第一个参数数据集、第二个参数是异步回调标志、第三个参数是异步回调
            return params.seriesName + ": " + params.value + "℃";//系列名称：数据值
        }
    },
    color:['#dc1439','#e6b600','#053afe'],//调色盘颜色列表，默认情况下图例和饼形环图颜色使用
    legend: {
        top: "44px",
        left: "50%",
        itemHeight: 20,//图例的高度

 itemGap:10,//图例之间的间距        

data: ['室外温度', '室内温度设定点', '室内温度'],//图例的数据数组
        textStyle: {
            color: '#fff'
        },
        selectedMode: true,//图例选择模式
        orient: "vertical"//图例布局方式
    },
    series: [
    {
        name: '室外温度',
        type: 'pie',
        clockWise: false, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        radius: [180, 200],
        itemStyle: placeHolderStyle,
        label: {
            normal: {
                show: false,
            }
        },
        data: [{
        value: 28,
        itemStyle: {
            normal: {
                color: '#dc1439'
            }
        }
        }, 
        {
        value: total-28,
        itemStyle: {
            normal: {
                color: 'transparent'
            }
        }
    }]
    }, 
    {
        name: '室内温度设定点',
        type: 'pie',
        clockWise: false, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        radius: [150, 170],
        itemStyle: placeHolderStyle,
        data: [{
        value: 26,
        itemStyle: {
            normal: {
                color: '#e6b600'
            }
        }
        }, 
        {
        value: total-26,
        itemStyle: {
            normal: {
                color: 'transparent'
            }
        }
    }]
    }, 
    {
        name: '室内温度',
        type: 'pie',
        clockWise: false, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        radius: [120, 140],
        itemStyle: placeHolderStyle,
        data: [{
        value: 26,
        itemStyle: {
            normal: {
                color: '#053afe'
            }
        }
        }, 
        {
        value: total-26,
        itemStyle: {
            normal: {
                color: 'transparent'
            }
        }
    }]
    }]
};


*/


    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);




 






 
});












