<template>
    <div class="data-container">
        <div class="titletop">
            <button class="titleleft">展示1</button>
            <div class="titletopmain">全民爱国主义实践基础实战演练管理平台</div>
            <button class="titleright">展示2</button>
        </div>
        <div class="datamaincontain">
            <div class="datamainleft">
                <echart-vue height="300px" width="100%" :options="activityOptions" class="charts"
                    id="mycharts-activity" />
                <echart-vue height="300px" width="100%" :options="options" class="charts" id="mycharts-top" />
            </div>
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
                        <echart-vue height="300px" width="100%" :options="activityOptions2" class="charts"
                            id="mycharts-top2" />
                    </div>
                </div>
            </div>
            <div class="datamainright">
                <h2 class="datarighttop">战场实况</h2>
                <div class="datarightbox">数据数据</div>
                <div>
                    <video width="255" height="160" autoplay controls>
                        <source src="https://apd-24802b2fef8a270d75796421c369858c.v.smtcdns.com/vhot2.qqvideo.tc.qq.com/A5irJgEJvsruW1df3FwozYk7lPVrJUDFJu90K79LpuC0/uwMROfz2r5zEIaQXGdGnC2dfDmafRkP9ujxgqKjuATzMrE-2/z3004dsnf4q.mp4?sdtfrom=v1010&guid=41f927d2f51633de1037d5c6e00061e3&vkey=4F37893D1261247A1BF74FEDCD9E627F72168B14E9140AE2BD1364ECD18C0524E35BBC84E654D5E9D1A8760D7C99611113A46E3CBB6B3FAF4CD3F2A5F56DC8ABB8FE63C952B3D272F674CC31C925C654451476E90F813EEBC73CC8CAD10A2E919A443F3ABACD57890813D7F804F3B505726B838E59CCF917AD9527C84377B4A8" type="video/mp4">
                        <source src="movie.ogg" type="video/ogg">
                        您的浏览器不支持 HTML5 video 标签。
                    </video>
                    <video width="255" height="160" autoplay controls>
                        <source src="../../assets/video/a.mp4" type="video/mp4">
                        <source src="movie.ogg" type="video/ogg">
                        您的浏览器不支持 HTML5 video 标签。 
                    </video>
                    <video width="255" height="160" autoplay controls>
                        <source src="https://ugcws.video.gtimg.com/uwMROfz2r5zEIaQXGdGnC2dfJ6rBbB0u18Msl1j33cNgltoG/x0170vyslr8.p702.1.mp4?sdtfrom=v1010&guid=41f927d2f51633de1037d5c6e00061e3&vkey=F84CF69829CE98FFE5B6ED89F66764D896442D7AF9F8E8A92888862B906943278AADC787ECBC856AB72675B0C00FCAD3D40ED027E3599FFBFF52F3BE13A58B86911C126E0C31DF1CE751F1EA8E456D0D3F610D277C57B485D3BCE889FF3EA1965D000B0AA13E31F79819E064D967B661FC4CE6BB6254D1D4D98CAAC3A47AE6E1" type="video/mp4">
                        <source src="movie.ogg" type="video/ogg">
                        您的浏览器不支持 HTML5 video 标签。
                    </video>
                    <video width="255" height="160" controls>
                        <source src="movie.mp4" type="video/mp4">
                        <source src="movie.ogg" type="video/ogg">
                        您的浏览器不支持 HTML5 video 标签。
                    </video>
                </div>
                <div class="datarightbox">图标图标等</div>
            </div>
        </div>

        <div class="border">
            
            <echart-vue height="300px" width="100%" :options="option" class="charts" id="mycharts-top" />
            <echart-vue height="300px" width="100%" :options="activityOptions" class="charts" id="mycharts-activity" />
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
            return {
                options: {
                    title: {
                        text: '热门场馆top5',
                        textStyle: {
                            color: '#fff'
                        },
                        x: 'center',
                    },
                    backgroundColor: '#2c343c88',
                    xAxis: {
                        show: true,
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#fff',
                            }
                        },
                        data: ['游泳馆馆', '体育馆馆', '体育公园', '体育中心', '文化公园']
                    },
                    yAxis: {
                        text: "人数",
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#fff',
                            }
                        },

                    },
                    series: [{
                        name: '访问来源',
                        type: 'bar',
                        radius: '55%',
                        roseType: 'angle',
                        itemStyle: {
                            // 阴影的大小
                            shadowBlur: 200,
                            // 阴影水平方向上的偏移
                            shadowOffsetX: 0,
                            // 阴影垂直方向上的偏移
                            shadowOffsetY: 0,
                            // 阴影颜色
                            shadowColor: 'rgba(0, 0, 0, 0.5)',
                            emphasis: {
                                shadowBlur: 200,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            },
                        },
                        data: [4001, 3325, 3130, 2744, 2345]
                    }]
                },
                activityOptions: {
                    title: {
                        text: '活动数量',
                        textStyle: {
                            color: '#fff'
                        },
                        x: 'center'
                    },
                    backgroundColor: '#2c343c88',
                    // legend: {
                    //     data:['活动数量']
                    // },
                    xAxis: {
                        show: true,
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#ffffff',
                            }
                        },
                        data: ['2019/07', '2019/08', '2019/09', '2019/10']
                    },
                    yAxis: {
                        show: true,
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#ffffff',
                            }
                        },
                    },
                    series: [{
                        name: '活动数量',
                        type: 'line',
                        data: [200, 300, 500, 300, 100]
                    }]
                },
                activityOptions2: {
                    title: {
                        text: '各战区排行榜',
                        textStyle: {
                            color: '#fff'
                        },
                        x: 'center',
                    },
                    backgroundColor: '#2c343c88',
                    xAxis: {
                        show: true,
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#fff',
                            }
                        },
                        data: ['A战区', 'B战区', 'C战区', 'D战区', 'E战区']
                    },
                    yAxis: {
                        text: "人数",
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#fff',
                            }
                        },

                    },
                    series: [{
                        name: '访问来源',
                        type: 'bar',
                        radius: '55%',
                        roseType: 'angle',
                        itemStyle: {
                            // 阴影的大小
                            shadowBlur: 200,
                            // 阴影水平方向上的偏移
                            shadowOffsetX: 0,
                            // 阴影垂直方向上的偏移
                            shadowOffsetY: 0,
                            // 阴影颜色
                            shadowColor: 'rgba(0, 0, 0, 0.5)',
                            emphasis: {
                                shadowBlur: 200,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            },
                        },
                        data: [4001, 3325, 3130, 2744, 2345]
                    }]

                }

            }
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