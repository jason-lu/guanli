<template>
    <div class="box">

        <div class="w">
            <div class="navchange">
                <ul class="navUl">
                    <li v-for="(item,index) in tabArr">{{item}}</li>
                </ul>
            </div>
            <div class="first-container">

                <div class="news-container">
                    <el-carousel height="380px">
                        <el-carousel-item v-for="(item,index) in newsList" :key="index">
                            <img :src="item.url" style="width: 100%; height: 380px; margin: auto; display: block;">
                            <span style="width:50%; position: absolute; padding: top 10px; display: block; 
                                        text-align: center;
                                        transform: translatex(50%); 
                                        z-index: 1; color: #ffffff; 
                                        bottom: 20px;margin: auto; background-color: #00000094;"> {{item.title}}
                            </span>
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <div class="news_right">123</div>
            </div>
        </div>
    </div>
</template>

<script>
    import Activities from './frontComponent/Activities.vue';
    export default {
        mounted() {
        },
        methods: {
            getDate(i) {
                let date = new Date();
                return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDay()}`;
            }
        },
        data() {
            return {
                newsList: [
                    { title: '山东理工大学组织军训新生参观国教主题园', date: 0, url: require('../assets/img/activity1.jpg') },
                    { title: '重阳节，武警官兵到驻地看望慰问老兵', date: 0, url: require('../assets/img/activity2.jpg') },
                    { title: '来了！解放军首个汽车团迎来军运会圣火', date: 0, url: require('../assets/img/activity3.jpg') },
                    { title: '新疆军区某团八连到驻地学校开展国防教育活动', date: 0, url: require('../assets/img/activity4.jpg') },
                ],
                tabArr: ['国防教育', "动态信息", "典型风采", '学校国防教育', '教育基地', '师资教材', '热点专题', '社会国防教育', '视频推荐']
            };
        },
        components: {
            Activities,
        }
    }
</script>

<style scoped>
    .tabchange {
        height: 75px;
    }

    .box {
        background: #F5F5F5;
        height: 100%;
    }

    .w {
        width: 1150px;
        margin: 0 auto;
    }

    .first-container {
        margin: 0 auto;
        width: 1150px;
        height: 100%;

        background-color: #ffffffee;
        display: flex;
        justify-content: space-between;
    }

    .side {
        width: 180px;
        flex-grow: 1;
        margin: 0px 2px;
    }

    .news_right {
        background-color: #009C79;
        height: 380px;
        margin-top: 20px;
        width: 40%;
    }

    .main {
        flex-grow: 3;
    }

    .title {
        margin-top: 10px;
        font-size: 1.1rem;
        text-align: center;
    }

    .news-container {
        background-color: #f5f5f5;
        height: 380px;
        width: 60%;
        position: relative;
        margin-top: 20px;
    }


    .title {
        text-align: center;
        font-size: 22px;
        line-height: 30px;
        margin-top: 20px;
    }

    .personMsg {
        display: flex;
        padding: 0;
        justify-content: space-between;
        flex-wrap: nowrap;
    }

    .personMsg li {
        margin: 4px;
        height: auto;
        list-style: none;
        background: #fff;
    }

    .personMsg li img {
        width: 100%;
    }

    .personMsg li .name {
        text-align: center;
        line-height: 30px;
    }
    .navchange{
        height: 75px;
    }
</style>