<template>
    <div>
        <div id="myChart" :style="{width: this.width, height: this.height}"></div>
    </div>
</template>
<script>
export default {
    mounted(){
        this.drawLine();
    },
    props:{
        height:{
            default:'300px'
        },
        width:{
            default:'300px'
        },
        options: {
            default:{}
        }
    },
    methods: {
        drawLine() {
              let myChart = this.$echarts.init(document.getElementById('myChart'))
              myChart.setOption(this.options);
        }
    }
}
</script>