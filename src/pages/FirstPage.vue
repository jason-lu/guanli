<template>
    <div class="first-container">
        <div class="news-container">
            <el-carousel height="300px" width="500px">
                <el-carousel-item v-for="(item,index) in newsList" :key="index">
                  <img :src="item.url" style="width: 50%; height: 300px; margin: auto; display: block;">
                  <span style="width:50%; position: absolute; padding: top 10px; display: block; 
                  text-align: center;
                  transform: translatex(50%); 
                  z-index: 1; color: #ffffff; 
                  bottom: 20px;margin: auto; background-color: #00000094;"> {{item.title}} </span>
                </el-carousel-item>
            </el-carousel>
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
                {title:'山东理工大学组织军训新生参观国教主题园',date:0, url:require('../assets/img/activity1.jpg')},
                {title:'重阳节，武警官兵到驻地看望慰问老兵',date:0, url:require('../assets/img/activity2.jpg')},
                {title:'来了！解放军首个汽车团迎来军运会圣火',date:0, url:require('../assets/img/activity3.jpg')},
                {title:'新疆军区某团八连到驻地学校开展国防教育活动',date:0, url:require('../assets/img/activity4.jpg')},
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
    background-color: #f5f5f5;
    height: 300px;
    width: 100%;
    position: relative;
    margin-top: 20px;
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