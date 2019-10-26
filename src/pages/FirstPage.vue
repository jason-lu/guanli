<template>
    <div class="first-container">
        <echart-vue height="300px" width="480px" :options="options" class="charts" />
    </div>
</template>

<script>
import EchartVue from './util/EchartVue.vue';
export default {
    mounted(){
    },
    methods: {
    },
    data() {
        return {
            options:{
    title: {
        text: '场馆会员人数',
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
        data: ['游泳馆','体育馆','体育公园','体育中心','文化公园']
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
        data:[400,335,310,274,235]
    }]
}
        }
    },
    components: {
        EchartVue,
    }
}
</script>

<style scoped>
.first-container {
    height: 100%;
    padding-left: 20px;
}
.charts {
    position: relative;
    right: 20px;
}
</style>