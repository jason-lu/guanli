<template>
    <div class="data-container">
        <!-- 头部区域 -->
        <div class="titletop">
            <button class="titleleft">展示1</button>
            <div class="titletopmain">全民爱国主义实践基础实战演练管理平台</div>
            <button class="titleright">展示2</button>
        </div>
        <!-- 内容区域 -->
        <div class="datamaincontain">
            <!-- 左侧内容区域 -->
            <div class="datamainleft">
                <!-- 场馆数据 -->
                <div>
                    <div class="Title">各场馆数据</div>
                    <div class="ringArea">

                        <!-- 环图1 -->
                        <ve-ring class="ring" :data="ring_chartData_one" :settings="ringSettings"></ve-ring>
                        <!-- 环图2 -->
                        <ve-ring class="ring" :data="ring_chartData_two" :settings="ringSettings"></ve-ring>
                    </div>
                </div>
                <!-- 红蓝队数据表 -->
                <div>
                        <div class="Title">红蓝战队数据</div>
                    <div class="lineArea">
                        <!-- 条形图 -->
                    <ve-bar  class="line" :data="lin_chartData_one"></ve-bar>
                    <ve-bar  class="line" :data="lin_chartData_two"></ve-bar>
                    </div>
                </div>

                <!-- <echart-vue height="300px" width="100%" :options="activityOptions" class="charts"
                    id="mycharts-activity" />
                <echart-vue height="300px" width="100%" :options="options" class="charts" id="mycharts-top" /> -->
            </div>
            <!-- 内容中间区域 -->
            <div class="datamainmiddle">
                <div class="middletopbox">军民大数据</div>
                <div class="middledataboxtop">
                    <div class="middledatabox">
                        <div class="middlespanbox">
                            <span>会员总数</span>
                            <span class="middlespannum">12345</span>
                        </div>
                        <div class="middlespanbox">
                            <span>场馆数目</span>
                            <span class="middlespannum">382</span>
                        </div>
                        <div class="middlespanbox">
                            <span>装备数目</span>
                            <span class="middlespannum">300000</span>
                        </div>
                        <div class="middlespanbox">
                            <span>教员数目</span>
                            <span class="middlespannum">12345</span>
                        </div>
                    </div>
                    <div class="middledataview">
                        <span>战况总览</span>
                        <div class="middleviewimg">
                            <img class="preview" src="../../assets/img/activities-preview.jpg" />
                        </div>
                    </div>

                    <div class="middledataview">
                        <span>各战区排行</span>
                        <!-- <echart-vue height="300px" width="100%" :options="activityOptions2" class="charts" -->
                        <!-- id="mycharts-top2" /> -->

                    </div>
                </div>
            </div>
            <!-- 内容右侧区域 -->
            <div class="datamainright">
                <h2 class="datarighttop">战场实况</h2>
                <div class="datarightbox">数据数据</div>
                <div>
                    <video width="255" height="160" autoplay controls>
                        <source src="../../assets/video/zuozhan4.mp4" type="video/mp4">
                        <source src="movie.ogg" type="video/ogg">
                        您的浏览器不支持 HTML5 video 标签。
                    </video>
                    <video width="255" height="160" autoplay controls>
                        <source src="../../assets/video/a.mp4" type="video/mp4">
                        <source src="movie.ogg" type="video/ogg">
                        您的浏览器不支持 HTML5 video 标签。
                    </video>
                    <video width="255" height="160" autoplay controls>
                        <source src="../../assets/video/zuozhan3.mp4">
                        <source src="movie.ogg" type="video/ogg">
                        您的浏览器不支持 HTML5 video 标签。
                    </video>
                    <video width="255" height="160" autoplay controls>
                        <source src="../../assets/video/zuozhan1.mp4" type="video/mp4">
                        <source src="movie.ogg" type="video/ogg">
                        您的浏览器不支持 HTML5 video 标签。
                    </video>
                </div>
                <div class="datarightbox">图标图标等</div>
            </div>
        </div>

        <div class="border">

            <!-- <echart-vue height="300px" width="100%" :options="option" class="charts" id="mycharts-top" /> -->
            <!-- <echart-vue height="300px" width="100%" :options="activityOptions" class="charts" id="mycharts-activity" /> -->
        </div>
        <div style="flex-grow: 1; margin-left: 8px; color: #ffffff;">
            <!-- <Activities /> -->
        </div>
    </div>
</template>

<script>
    import EchartVue from '../util/EchartVue.vue';
    // import Activities from './frontComponent/Activities.vue';
    export default {
        mounted() {
        },
        methods: {
        },
        data() {
            this.ringSettings = {
                radius: [40, 100],
            }
            return {
                // 折线图数据
                lin_chartData_one: {
                    columns: ['日期', '访问用户', '下单用户', '下单率'],
                    rows: [
                        { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
                        { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
                        { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
                        { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
                        { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
                        { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
                    ]
                },
                lin_chartData_two: {
                    columns: ['日期', '访问用户', '下单用户', '下单率'],
                    rows: [
                        { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
                        { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
                        { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
                        { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
                        { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
                        { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
                    ]
                },
                // 饼图1数据
                ring_chartData_one: {
                    columns: ['日期', '访问用户'],
                    rows: [
                        { '日期': '1/1', '访问用户': 1393 },
                        { '日期': '1/2', '访问用户': 3530 },
                        { '日期': '1/3', '访问用户': 2923 },
                        { '日期': '1/4', '访问用户': 1723 },
                        { '日期': '1/5', '访问用户': 3792 },
                        { '日期': '1/6', '访问用户': 4593 }
                    ]
                },
                // 饼图2数据
                ring_chartData_two: {
                    columns: ['日期', '访问用户'],
                    rows: [
                        { '日期': '1/1', '访问用户': 1393 },
                        { '日期': '1/2', '访问用户': 3530 },
                        { '日期': '1/3', '访问用户': 2923 },
                        { '日期': '1/4', '访问用户': 1723 },
                        { '日期': '1/5', '访问用户': 3792 },
                        { '日期': '1/6', '访问用户': 4593 }
                    ]
                },
            }

            //         options: {
            //             title: {
            //                 text: '热门场馆top5',
            //                 textStyle: {
            //                     color: '#fff'
            //                 },
            //                 x: 'center',
            //             },
            //             backgroundColor: '#2c343c88',
            //             xAxis: {
            //                 show: true,
            //                 axisLabel: {
            //                     show: true,
            //                     textStyle: {
            //                         color: '#fff',
            //                     }
            //                 },
            //                 data: ['游泳馆馆', '体育馆馆', '体育公园', '体育中心', '文化公园']
            //             },
            //             yAxis: {
            //                 text: "人数",
            //                 axisLabel: {
            //                     show: true,
            //                     textStyle: {
            //                         color: '#fff',
            //                     }
            //                 },

            //             },
            //             series: [{
            //                 name: '访问来源',
            //                 type: 'bar',
            //                 radius: '55%',
            //                 roseType: 'angle',
            //                 itemStyle: {
            //                     // 阴影的大小
            //                     shadowBlur: 200,
            //                     // 阴影水平方向上的偏移
            //                     shadowOffsetX: 0,
            //                     // 阴影垂直方向上的偏移
            //                     shadowOffsetY: 0,
            //                     // 阴影颜色
            //                     shadowColor: 'rgba(0, 0, 0, 0.5)',
            //                     emphasis: {
            //                         shadowBlur: 200,
            //                         shadowColor: 'rgba(0, 0, 0, 0.5)'
            //                     },
            //                 },
            //                 data: [4001, 3325, 3130, 2744, 2345]
            //             }]
            //         },
            //         activityOptions: {
            //             title: {
            //                 text: '活动数量',
            //                 textStyle: {
            //                     color: '#fff'
            //                 },
            //                 x: 'center'
            //             },
            //             backgroundColor: '#2c343c88',
            //             // legend: {
            //             //     data:['活动数量']
            //             // },
            //             xAxis: {
            //                 show: true,
            //                 axisLabel: {
            //                     show: true,
            //                     textStyle: {
            //                         color: '#ffffff',
            //                     }
            //                 },
            //                 data: ['2019/07', '2019/08', '2019/09', '2019/10']
            //             },
            //             yAxis: {
            //                 show: true,
            //                 axisLabel: {
            //                     show: true,
            //                     textStyle: {
            //                         color: '#ffffff',
            //                     }
            //                 },
            //             },
            //             series: [{
            //                 name: '活动数量',
            //                 type: 'line',
            //                 data: [200, 300, 500, 300, 100]
            //             }]
            //         },
            //         activityOptions2: {
            //             title: {
            //                 text: '各战区排行榜',
            //                 textStyle: {
            //                     color: '#fff'
            //                 },
            //                 x: 'center',
            //             },
            //             backgroundColor: '#2c343c88',
            //             xAxis: {
            //                 show: true,
            //                 axisLabel: {
            //                     show: true,
            //                     textStyle: {
            //                         color: '#fff',
            //                     }
            //                 },
            //                 data: ['A战区', 'B战区', 'C战区', 'D战区', 'E战区']
            //             },
            //             yAxis: {
            //                 text: "人数",
            //                 axisLabel: {
            //                     show: true,
            //                     textStyle: {
            //                         color: '#fff',
            //                     }
            //                 },

            //             },
            //             series: [{
            //                 name: '访问来源',
            //                 type: 'bar',
            //                 radius: '55%',
            //                 roseType: 'angle',
            //                 itemStyle: {
            //                     // 阴影的大小
            //                     shadowBlur: 200,
            //                     // 阴影水平方向上的偏移
            //                     shadowOffsetX: 0,
            //                     // 阴影垂直方向上的偏移
            //                     shadowOffsetY: 0,
            //                     // 阴影颜色
            //                     shadowColor: 'rgba(0, 0, 0, 0.5)',
            //                     emphasis: {
            //                         shadowBlur: 200,
            //                         shadowColor: 'rgba(0, 0, 0, 0.5)'
            //                     },
            //                 },
            //                 data: [4001, 3325, 3130, 2744, 2345]
            //             }]

            //         }


        },
        components: {
            EchartVue,
            // Activities,
        }
    }
</script>

<style scoped>
    /*.border{
    width: 500px;
    height: 100%;
     border: 1px #a0b9fd solid; 
     background-color: #43578daa; 
    
     box-shadow: 2px 2px 3px a0b9fd; 
    text-align: center;
}
.data-container {
    position: relative;
    height: 100%;
    margin: auto;
    display: flex;
}
.charts {
    margin-top: 20px;
    position: relative;
}
.summary-title{
    color: #ffffff;
    font-size: 1.1rem;
    font-weight: 700;
}
.summary-number {
    color: rgb(253, 165, 51);
    margin-top: 10px;
    font-size: 1.4rem;
    font-weight: 700;
}*/
    .Title {
        text-align: center;
        font-size: 20px;
        margin: 20px 0;
    }

    .ringArea {
        padding:0 40px;
        display: flex;
        justify-content: space-around;
    }

    .ringArea .ring {
        flex: 1;
    }
    .lineArea{
        padding: 20px;
        display: flex;
        justify-content: space-around;
    }
    .lineArea .line {
        flex: 1;
    }

    .titletop {
        display: inline-block;
        width: 100%;
        height: 80px;
        text-align: center;
        color: #fff;
        font-size: 1.6rem;
        justify-content: center;
        align-items: flex-end;
        display: flex;
    }

    .titletopmain {
        background-color: rgb(46, 46, 148);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 500px;
        height: 60px;
        border-radius: 2px;
        margin: 0 20px;
        border-bottom: 1px solid #fff;
        opacity: 0.8;

    }

    .titleleft {
        font-size: 1.2rem;
        height: 40px;
        background-color: rgb(216, 162, 15);
        width: 160px;
        color: #fff;
        opacity: 0.8;
        border: none;
        border-radius: 10px;
    }

    .titleright {
        font-size: 1.2rem;
        height: 40px;
        background-color: rgb(39, 54, 141);
        width: 160px;
        color: #fff;
        opacity: 0.8;
        border: none;
        border-radius: 10px;

    }

    .datamaincontain {
        width: 100%;
        display: flex;
        flex-direction: row;
        margin-top: 10px;
        min-height: 1000px;
    }

    .datamainleft {
        color: #fff;
        ;
        width: 30%;
        border: 1px solid rgba(255, 255, 255, 0.5);
    }

    .datamainmiddle {
        width: 40%;
        border: 1px solid rgba(255, 255, 255, 0.5);
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .middletopbox {
        height: 60px;
        font-size: 1.4rem;
        display: flex;
        align-items: center;

    }

    .middledataview {
        margin-top: 20px;
        padding-top: 10px;
        font-size: 1.2rem;
        padding-left: 40px;
        border-top: 1px solid rgba(255, 255, 255, 0.5);
        min-height: 300px;
        min-width: 300px;
    }

    .middleviewimg {
        width: 100%;

    }

    .middledataboxtop {
        width: 100%;

    }

    .middledatabox {
        display: flex;
        flex-direction: row;
        width: 100%;
    }

    .middlespanbox {
        width: 25%;
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-top: 20px;
    }

    .middlespannum {
        display: block;
        height: 40px;
        width: 80px;
        text-align: center;
        font-size: 1.6rem;
        margin-top: 15px;
    }

    .datamainright {
        width: 30%;
        border: 1px solid rgba(255, 255, 255, 0.5);
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .datarighttop {
        color: #fff;
        font-size: 1.4rem;
    }

    .datarighttop>video {
        border: 1px solid #fff;
    }

    .datarightbox {
        background-color: rgb(47, 40, 77);
        width: 100%;
        height: 200px;
        opacity: 0.8;
    }
</style>