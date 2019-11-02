<template>
    <div class="data-container">
        <div class="border">
            <P style="color: white; margin: auto; display: block; font-size: 1.3rem;">军民大数据</P>
            <div style="display: flex; flex-direction: row; justify-content: space-between; margin-top:10px;">
                <div>
                    <div class="summary-title">会员总人数</div>
                    <div class="summary-number">52360</div>
                </div>
                <div>
                    <div class="summary-title">教员数</div>
                    <div class="summary-number">525</div>
                </div>
                <div>
                    <div class="summary-title">场馆数</div>
                    <div class="summary-number">100</div>
                </div>
                <div>
                    <div class="summary-title">装备数</div>
                    <div class="summary-number">20000</div>
                </div>
                
            </div>
            <echart-vue height="300px" width="100%" :options="options" class="charts" id="mycharts-top"/>
            <echart-vue height="300px" width="100%" :options="activityOptions" class="charts"  id="mycharts-activity"/>
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
    mounted(){
    },
    methods: {
    },
    data() {
        return {
            options:{
                title: {
                    text: '热门场馆top5',
                    textStyle: {
                        color:'#fff'
                    },
                    x:'center',
                },
                backgroundColor: '#2c343c88',
                xAxis: {
                    show: true,
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color:'#fff',
                        }
                    },
                    data: ['游泳馆馆','体育馆馆','体育公园','体育中心','文化公园']
                },
                yAxis: {
                    text: "人数",
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color:'#fff',
                        }
                    },

                },
                series: [{
                    name: '访问来源',
                    type: 'bar',
                    radius: '55%',
                    roseType:'angle',
                    itemStyle:{
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
                    data:[4001,3325,3130,2744,2345]
                }]
            },
            activityOptions: {
                title: {
                    text: '活动数量',
                    textStyle: {
                        color:'#fff'
                    },
                    x:'center'
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
                            color:'#ffffff',
                        }
                    },
                    data: ['2019/07','2019/08','2019/09','2019/10']
                },
                yAxis: {
                    show: true,
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color:'#ffffff',
                        }
                    },
                },
                series: [{
                    name:'活动数量',
                    type:'line',
                    data: [200,300,500,300,100]
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
.border{
    width: 500px;
    height: 100%;
    /* border: 1px #a0b9fd solid; */
    /* background-color: #43578daa; */
    
    /* box-shadow: 2px 2px 3px a0b9fd; */
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
}
</style>