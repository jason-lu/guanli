<template>
    <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in 4" :key="item">
            <img :src="urls[item]" style="width: 100%;" />
        </el-carousel-item>
    </el-carousel>
</template>

<script>
    export default {
        data() {
            return {
                urls: [
                    "../../assets/img/news1.jpg",
                    "../../assets/img/news2.jpg",
                    "../../assets/img/news3.jpg",
                    "../../assets/img/news4.jpg",
                ],
            }
        }
    }
</script>

<style>

</style>