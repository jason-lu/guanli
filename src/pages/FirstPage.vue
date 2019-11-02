<template>
    <div class="first-container">
        <div class="side">
            <div class="title">热点新闻</div>
            <div class="news-container"></div>
        </div>
        <div class="main">
            <div class="title">热门活动</div>
            <Activities />
            <div>
                活动列表
            </div>
        </div>
        <div class="side">
            <div class="title">资讯</div>
            <div>金牌教员</div>
            <div>王牌战士</div>
        </div>
    </div>
</template>

<script>
    import Activities from './frontComponent/Activities.vue';
export default {
    mounted(){
    },
    methods: {
    },
    data() {
        return {};
    },
    components: {
        Activities,
    }
}
</script>

<style scoped>
.first-container {
    position: relative;
    height: 100%;
    margin: auto;
    background-color: #ffffffee;
    display: flex;
    justify-content: space-between;
}

.side {
    width: 180px;
    flex-grow: 1;
    margin: 0px 2px;
}
.main {
    flex-grow: 3;
}
.title {
    margin-top:10px;
    font-size: 1.1rem;
    text-align: center;
}

.news-container {
    background-image: url('../assets/img/side_news.png');
    height: 100vh;
}
</style>