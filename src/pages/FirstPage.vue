<template>
    <div class="box">

        <div class="w clearfix">
            <div class="navchange">
                <ul class="navUl">
                    <li v-for="(item,index) in tabArr">
                        <router-link :to="item.src">{{item.title}}</router-link>
                    </li>
                </ul>
            </div>
            <div class="first-container">

                <div class="news-container">
                    <el-carousel height="380px">
                        <el-carousel-item v-for="(item,index) in newsList" :key="index">
                            <img :src="item.url" style="width: 100%; height: 380px; margin: auto; display: block;">
                            <span style="width:50%; position: absolute; padding:  10px; display: block; 
                                        border-radius: 20px;
                                        text-align: center;
                                        transform: translatex(50%); 
                                        z-index: 1; color: #ffffff; 
                                        bottom: 20px;margin: auto; background-color: #00000064;"> {{item.title}}
                            </span>
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <div class="news_right">
                    <div class="news_right_one">
                        <p class="bigtitle">山东理工大学组织军训新生参观国教主题园</p>
                        <p class="new-content">近日，山东理工大学组织参加军训的新生参观国教主题园，进一步坚定学生爱党、爱国、爱军的理想信念。</p>
                    </div>
                    <div class=" news-link">
                        <div>
                            <router-link to="#" class="new-link">重阳节，武警官兵到驻地看望慰问老兵</router-link>
                        </div>
                        <div>
                            <router-link to="#" class="new-link">来了！解放军首个汽车团迎来军运会圣火</router-link>
                        </div>
                        <div>
                            <router-link to="#" class="new-link">新疆军区某团八连到驻地学校开展国防教育活动</router-link>
                        </div>
                        <div>
                            <router-link to="#" class="new-link">-30℃严寒，边防官兵乘骑战马巡逻祖国的边防线</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <!-- container -->
            <div>
                <div class="contentFirst ">
                    <div>
                        <p class="content_t  clearfix">
                            <router-link class=" content_title fl" to="#">国防教育基地</router-link>
                            <router-link class="content_title fr margin" to="/homePages/base">更多分类</router-link>
                        </p>

                        <!-- <p class="content-name">
                            <router-link class="content-name-link" to="#">打开营门弘扬前辈精神，数十家单位参观这个旅史馆</router-link>
                        </p>
                        <span class="descripte">国庆前夕，第83集团军某旅打开营门，迎接驻地人员走进旅史馆参观。</span> -->
                        <ul class="contentFirstUl">
                            <li><a href="#">● 训练基地</a></li>
                            <li><a href="#">● 国防教育基地</a></li>
                            <li><a href="#">● 红色教育基地</a></li>
                            <li><a href="#">● 招募基地</a></li>
                        </ul>
                    </div>
                    <div>
                        <p class="content_t clearfix">
                            <router-link class="content_title fl" to="#">武器装备</router-link>
                            <router-link class="content_title fr" to="/homePages/navintroduce">更多</router-link>

                        </p>

                        <div>
                            <div class="clearfix gunContent">
                                <div class="fl">陆军装备</div>
                                <div class="fr ">
                                    <a href="#">陆军装备1</a>
                                    <a href="#">陆军装备2</a>
                                    <a href="#">陆军装备3</a>

                                </div>
                            </div>
                            <div class="clearfix gunContent">

                                <div class="fl">海军装备</div>
                                <div class="fr ">
                                    <a href="#">海军装备1</a>
                                    <a href="#">海军装备2</a>
                                    <a href="#">海军装备3</a>

                                </div>
                            </div>
                            <div class="clearfix gunContent">
                                <div class="fl">空军装备</div>
                                <div class="fr ">
                                    <a href="#">战斗机</a>
                                    <a href="#">无人机</a>
                                    <a href="#">运输机</a>

                                </div>
                            </div>
                            <div class="clearfix gunContent">
                                <div class="fl">海军装备</div>
                                <div class="fr ">
                                    <a href="#">海军1</a>
                                    <a href="#">海军2</a>
                                    <a href="#">海军3</a>
                                    <a href="#">海军3</a>
                                    <a href="#">海军3</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="contentFirst">
                    <div>
                        <p class="content_t">
                            <router-link class="content_title" to="#">学校国防教育</router-link>
                        </p>
                        <div class="content-pic">
                            <img src="../assets/img/one-page-content.jpg" alt="">
                        </div>
                    </div>
                    <div>
                        <p class="content_t">

                        </p>
                        <p class="content-name">
                            <router-link class="content-name-link" to="#">打开营门弘扬前辈精神，数十家单位参观这个旅史馆</router-link>
                        </p>
                        <span class="descripte">国庆前夕，第83集团军某旅打开营门，迎接驻地人员走进旅史馆参观。</span>
                        <ul class="contentFirstUl">
                            <li>● 教师节致军校教员|当时光流过三尺讲台</li>
                            <li>● 解放军总医院举办“忠诚的力量”强军故事会</li>
                            <li>● “和平方舟”号医院船举行航海日开放活动</li>
                        </ul>
                    </div>

                </div>
                <div class="contentFirst">
                    <div>
                        <p class="content_t">
                            <router-link class="content_title" to="#">教育基地</router-link>
                        </p>
                        <div class="content-box">
                            <div class="div-box">
                                <router-link to="#">
                                    <div><img src="../assets/img/pic-gun1.png" alt=""></div>
                                    <div class="content-middle">
                                        <div class="content-box-m">4月15日，推荐你去这几个地方探秘</div>
                                        <div class="smallbox-m">></div>
                                    </div>
                                    <p class="content-end">准备好了吗？来，一起感受一下“谍海穿越”是一种什么体验!</p>
                                </router-link>
                            </div>
                            <div class="div-box">
                                <router-link to="#">
                                    <div><img src="../assets/img/pic-gun3.png" alt=""></div>
                                    <div class="content-middle">
                                        <div class="content-box-m">4月15日，推荐你去这几个地方探秘</div>
                                        <div class="smallbox-m">></div>
                                    </div>
                                    <p class="content-end">准备好了吗？来，一起感受一下“谍海穿越”是一种什么体验!</p>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p class="content_t">

                        </p>
                        <div class="content-box">
                            <div class="div-box">
                                <router-link to="#">
                                    <div><img src="../assets/img/pic-gun4.png" alt=""></div>
                                    <div class="content-middle">
                                        <div class="content-box-m">4月15日，推荐你去这几个地方探秘</div>
                                        <div class="smallbox-m">></div>
                                    </div>
                                    <p class="content-end">准备好了吗？来，一起感受一下“谍海穿越”是一种什么体验!</p>
                                </router-link>
                            </div>
                            <div class="div-box">
                                <router-link to="#">
                                    <div><img src="../assets/img/pic-gun5.png" alt=""></div>
                                    <div class="content-middle">
                                        <div class="content-box-m">4月15日，推荐你去这几个地方探秘</div>
                                        <div class="smallbox-m">></div>
                                    </div>
                                    <p class="content-end">准备好了吗？来，一起感受一下“谍海穿越”是一种什么体验!</p>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 底部区域 -->
                <!-- <div class="glzjfoot">
                    <div class="glzj_foot">
                        <a rel="nofollow" href="#" target="_blank">关于游侠</a> | <a rel="nofollow" href="#"
                            target="_blank">广告合作</a> | <a rel="nofollow" href="#" target="_blank">人才招聘</a> | <a href="#"
                            target="_blank" rel="nofollow">意见建议</a> | <a rel="nofollow" href="#"
                            target="_blank">联系我们</a> | <a href="#" target="_blank">网站地图</a> | <a rel="nofollow" href="#"
                            target="_blank">
                        </a> | <a rel="nofollow" href="#" target="_blank">版权保护投诉指引</a><br>增值电信业务经营许可证 浙B2-20120287 | <a
                            href="#" target="_blank" rel="nofollow">浙ICP备12018679号-4</a> | 浙网文[2015]0882-251 | <a
                            rel="nofollow" href="#" target="_blank">浙公网安备 33010502000468号</a><br>CopyRight © 1999-2019
                        ALi213.Net All Right
                        Reserved 游侠网 版权所有
                    </div>
                </div> -->
                <!-- 底部返回小盒子 -->
                <div class="backtop " @click="goback" :class="{showbox:isshowbox}">
                    <em>返回</em>
                </div>

            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                isshowbox: true,
                newsList: [
                    { title: '山东理工大学组织军训新生参观国教主题园', date: 0, url: require('../assets/img/activity1.jpg') },
                    { title: '重阳节，武警官兵到驻地看望慰问老兵', date: 0, url: require('../assets/img/activity2.jpg') },
                    { title: '来了！解放军首个汽车团迎来军运会圣火', date: 0, url: require('../assets/img/activity3.jpg') },
                    { title: '新疆军区某团八连到驻地学校开展国防教育活动', date: 0, url: require('../assets/img/activity4.jpg') },
                ],
                tabArr: [
                    { title: '国防教育', src: '#' }, { title: "动态信息", src: '#' }, { title: "典型风采", src: '#' },
                    { title: '国防教育基地', src: 'homePages/base' }, { title: '装备介绍', src: 'homePages/navintroduce' }, { title: '师资教材', src: '#' },
                    { title: '热点专题', src: '#' }, { title: '社会国防教育', src: '#' }, { title: '视频推荐', src: '#' },
                ]
            };


        },

        mounted() {

            window.addEventListener('scroll', this.handleScroll, true)
        },
        methods: {
            // goback() {
            //     this.$nextTick(() => {
            //         window.scrollTo(0, 0)
                
            // })
         

            // },
            goback(){
                // console.log('goback函数被执行')
                window.scrollTo(0, 0);
                },
            handleScroll(e) {
                // console.log(e.target.scrollTop);
                
                if (e.target.scrollTop > 300) {
                    this.isshowbox = false;
                } else {
                    this.isshowbox = true;
                }

            }
        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll, true);
        },
    }



</script>

<style scoped>
    .showbox {
        display: none;
    }

    .backtop {
        position: fixed;
        bottom: 100px;
        right: 140px;
        height: 45px;
        width: 45px;
        background-color: #005541;
        color: #fff;
        text-align: center;
    }

    .backtop:hover {
        cursor: pointer;
    }

    .backtop em {
        line-height: 45px;
        font-style: normal;
    }

    .glzjfoot {
        text-align: center;
        margin: 50px 0;
        color: #333;
    }

    .margin {
        margin-right: 20px;
    }

    .gunContent {
        color: #333;
        margin-top: 45px;
        font-size: 20px;
    }

    .gunContent a {
        color: #333;

    }

    /* 清除浮动 */
    .clearfix:before,
    .clearfix:after {
        content: "";
        display: table;
    }

    .clearfix:after {
        clear: both;
    }

    .clearfix {
        *zoom: 1;
    }

    .fr {
        float: right;
    }

    .fl {
        float: left;
    }

    .news-link {
        margin-top: 20px;
    }

    .news-link div {
        height: 50px;
    }

    .new-link {
        color: #fff;
        font-size: 20px;
    }

    .news_right_one {
        border-bottom: 1px solid #008578;
    }

    .new-content {
        margin: 20px 0;
        line-height: 30px;
        text-indent: 2em;
        color: #DDECEA;
    }

    .bigtitle {
        font-size: 22px;
    }

    .content-end {
        margin-top: 25px;
        text-indent: 2rem;
        color: #999;
        font-size: 14px;
    }

    .content-box-m {
        float: left;
        font-size: 18px;
        width: 120px;
        height: 70px;
        overflow: hidden;
    }

    .content-box-m:hover {

        color: #005541;
    }

    .smallbox-m {
        float: right;
        color: #fff;
        background-color: #4CBAA1;
        width: 35px;
        height: 22px;
        font-weight: 700;
        text-align: center;
    }

    .content-middle {
        overflow: hidden;
        margin-top: 50px;
    }

    .div-box {
        box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.2);

    }

    .div-box img {
        width: 100%;
    }

    .content-box {
        display: flex;
    }

    .content-box .div-box {
        margin-right: 10px;
        flex: 1;
        width: 287px;
        height: 434px;
    }

    .content-pic img {
        padding: 20px;
        height: 270px;
        width: 475px;
    }

    .descripte {
        color: #999999;
    }

    .contentFirstUl {
        margin-top: 60px;
    }

    .contentFirstUl li {
        margin-top: 10px;
        color: #333;
        height: 30px;
        font-size: 20px;
    }

    .content-name-link {
        color: #333;
        font-size: 20px;
    }

    .content-name {
        margin: 45px 0 30px 0;
    }

    .contentFirst {
        display: flex;
        margin: 50px 0 20px;
    }

    .contentFirst div {
        flex: 1;
    }

    .content_t {
        line-height: 40px;
        height: 40px;

    }

    .content_title {
        color: #42716F;
        font-size: 24px;
        font-weight: 700;

    }

    a {
        text-decoration: none;
        color: #000;
    }

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
        box-sizing: border-box;
        padding: 25px;
        color: #fff;
        background-color: #009C79;
        height: 380px;
        margin-top: 20px;
        width: 45%;
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
        width: 55%;
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

    .navchange {
        height: 75px;
        line-height: 75px;
    }

    .navUl li {
        font-size: 18px;
        padding: 0 20px;
        float: left;
        height: 100%;
    }

    .navUl li:hover {
        color: #009C79;
    }

    .navUl a {
        text-decoration: none;
        color: #000;
    }

    * {
        margin: 0;
        padding: 0;
    }
</style>