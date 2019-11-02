<template>
    <div style="background-color: #ffffff;">
        <div id="news-title">近期活动</div>
        <el-carousel indicator-position="outside">
                <el-carousel-item v-for="(item,index) in urls" :key="index">
                    <img :src="urls[index]" style="width: 100%;" />
                </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                urls: [
                    require("../../assets/img/news1.jpg"),
                    require("../../assets/img/news2.jpg"),
                    require("../../assets/img/news3.jpg"),
                    require("../../assets/img/news4.jpg"),
                ],
            }
        }
    }
</script>

<style>
#news-title {
    text-align: center;
    font-weight: 700;
    font-size: 1.2rem;
    margin-top: 4px;
    margin-bottom: 8px;
}
</style>