<template>
    <div class="first-container">
        <div class="side">
            <div class="title">热点新闻</div>
            <div class="news-container">
                <div v-for="(item,index) in newsList" :key=index style="padding-top: 6px;">
                    <div v-if="item.url">
                        <img src="../assets/img/news_preview.jpg" style="width: 90%; display: block;" alt="新闻图片">
                        <div class="news-title">{{item.title}}</div>
                        <div class="news-date"> {{getDate(0)}}</div>
                    </div>
                    <div v-else>
                        <div class="news-title">{{item.title}}</div>
                        <div class="news-date"> {{getDate(0)}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="main">
            <div class="title">热门活动</div>
            <Activities />
            <div>
                活动列表
            </div>
        </div>
        <div class="side">
            <div class="title">金牌教员</div>
            <ul class="personMsg">
                <li>
                    <img src="../assets/img/img2.jpg" alt="">
                    <div class="name">杨教官</div>
                </li>
                <li>
                    <img src="../assets/img/img2.jpg" alt="">
                    <div class="name">张教官</div>
                </li>
                <li>
                    <img src="../assets/img/img2.jpg" alt="">
                    <div class="name">李教官</div>
                </li>
            </ul>
            <div class="title">王牌战士</div>
            <ul class="personMsg">
                <li>
                    <img src="../assets/img/img2.jpg" alt="">
                    <div class="name">杨xx</div>
                </li>
                <li>
                    <img src="../assets/img/img2.jpg" alt="">
                    <div class="name">张xx</div>
                </li>
                <li>
                    <img src="../assets/img/img2.jpg" alt="">
                    <div class="name">李xx</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Activities from './frontComponent/Activities.vue';
export default {
    mounted(){
    },
    methods: {
        getDate(i) {
            let date = new Date();
            return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDay()}`;
        }
    },
    data() {
        return {
            newsList:[
                {title:'习近平接见联勤保障部队第一次党代会代表',date:0, url:'../assets/img/img1.jpg'},
                {title:'习近平接见联勤保障部队第一次党代会代表',date:0},
                {title:'习近平接见联勤保障部队第一次党代会代表',date:0},
                {title:'习近平接见联勤保障部队第一次党代会代表',date:0},
                {title:'习近平接见联勤保障部队第一次党代会代表',date:0},
                {title:'习近平接见联勤保障部队第一次党代会代表',date:0},
                {title:'习近平接见联勤保障部队第一次党代会代表',date:0},
                {title:'习近平接见联勤保障部队第一次党代会代表',date:0},
                {title:'习近平接见联勤保障部队第一次党代会代表',date:0},
                {title:'习近平接见联勤保障部队第一次党代会代表',date:0},
                {title:'习近平接见联勤保障部队第一次党代会代表',date:0},
                {title:'习近平接见联勤保障部队第一次党代会代表',date:0},
            ]
        };
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
    background-color: #ffffffee;
    margin-top:4px;
    height: 100vh;
    overflow: auto;
    position: relative;
}

.news-title{
    display: inline-block;
}
.news-date {
    display: inline-block;
    position: absolute;
    color: #969595;
    right:0;
}

.title{
        text-align: center;
        font-size: 22px;
        line-height: 30px;
        margin-top: 20px;
    }
    .personMsg{
        display: flex;
        padding:0;
        justify-content: space-between;
        flex-wrap: nowrap;
    }
    .personMsg li{
        margin: 4px;
        height: auto;
        list-style: none;
        background: #fff;
    }
    .personMsg li img{
        width: 100%;
    }
    .personMsg li .name{
        text-align: center;
        line-height: 30px;
    }
</style>