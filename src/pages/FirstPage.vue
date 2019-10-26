<template>
    <div>
        <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
    </div>
</template>

<script>
export default {
        mounted(){
    this.drawLine();
    },
    methods: {
        drawLine() {
              let myChart = this.$echarts.init(document.getElementById('myChart'))
              myChart.setOption({
                    title: { text: '在Vue中使用echarts' },
                    tooltip: {},
                    xAxis: {
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color:'#fff',
                            }
                        },
                        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'scatter',
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                });
        }
    }
}
</script>