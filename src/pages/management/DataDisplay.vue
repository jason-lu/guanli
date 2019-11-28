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
                        <ve-ring :legend="legend" class="ring" :data="ring_chartData_one" :settings="ringSettings"></ve-ring>
                        <!-- 环图2 -->
                        <ve-ring :legend="legend" class="ring" :data="ring_chartData_two" :settings="ringSettings"></ve-ring>
                    </div>
                </div>
                <!-- 红蓝队数据表 -->
                <div>
                    <div class="Title">红蓝战队数据</div>
                    <div class="lineArea">
                        <!-- 条形图 -->
                        <ve-bar :legend="legend" class="line" :data="lin_chartData_one"></ve-bar>
                        <ve-bar :legend="legend" class="line" :data="lin_chartData_two"></ve-bar>
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
                        <div class="Title">各战区战力</div>
                        <!-- <echart-vue height="300px" width="100%" :options="activityOptions2" class="charts" -->
                        <!-- id="mycharts-top2" /> -->
                        <ve-histogram :series="series" :x-axis="hisxAxis" :y-axis="hisyAxis"></ve-histogram>

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
            // 设置折线图数据
        
          this.legend={
              
                        textStyle: {
                            //文字样式
                            color: "#fff",
                  
                        }
                    },
            // 设置柱状图
            this.series = [
                {
                    name: "战区战力",
                    type: "bar",
                    barWidth: "50%",//这里是改变柱子的宽度
                    data: [3000, 5200, 3600, 6300, 3900, 4900, 5900],

                    itemStyle: {
                        //通常情况下：
                        normal: {
                            //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                            color: function (params) {
                                var colorList = [
                                    "#44F0FF",
                                    "#FA6E86",
                                    "#FFB980",
                                    "#19D4AE",
                                    "#FFB980",
                                    "#44F0FF",
                                ]; //每根柱子的颜色
                                return colorList[params.dataIndex];
                            }
                        },
                    }
                }];
            this.hisyAxis = [
                {
                    axisLabel: {
                        //   show: true,
                        textStyle: {
                            color: "white",//这里是改变字体颜色
                        }
                    }
                }
            ];
            this.hisxAxis = [
                {
                    data: [
                        "东部战区",
                        "西部战区",
                        "北部战区",
                        "南部战区",
                        "亚洲战区",
                        "欧洲战区",

                    ],
                    name: "战区",
                    axisLabel: {
                        //   show: true,
                        textStyle: {
                            color: "white",
                        }
                    }
                }
            ];
            // 设置环图
            this.ringSettings = {
                radius: [40, 100],
            }
            return {
                // 柱状图数据
                // histogramChartData: {
                //     columns: ['战区', '战区战力', ],
                //     rows: [
                //         { '战区': '东部战区', '战区战力': 1393, },
                //         { '战区': '西部战区', '战区战力': 3530, },
                //         { '战区': '北部战区', '战区战力': 2923, },
                //         { '战区': '南部战区', '战区战力': 1723, },
                //         { '战区': '亚洲战区', '战区战力': 3792,  },
                //         { '战区': '欧洲战区', '战区战力': 4593, }
                //     ]
                // },
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

            },
                components: {
                EchartVue,
        }
        }
</script>

<style scoped>
    .Title {
        text-align: center;
        font-size: 20px;
        margin: 20px 0;
    }

    .ringArea {
        display: flex;
        justify-content: space-around;
    }

    .ringArea .ring {
        flex: 1;
    }

    .lineArea {
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