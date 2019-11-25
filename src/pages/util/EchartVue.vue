<template>
    <div>
        <div :id="id" :style="{width: this.width, height: this.height}"></div>
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
            default:'100%'
        },
        options: {
            default:{}
        },
        id: {
            default: "mycharts"
        },
    },
    methods: {
        drawLine() {
              let myChart = this.$echarts.init(document.getElementById(this.id))
              myChart.setOption(this.options);
        }
    }
}
</script>