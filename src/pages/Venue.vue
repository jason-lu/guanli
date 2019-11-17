<template>
    <div class="venuePage">
        <div style="width: 1200px;margin: auto;">
            <img style="width: 100%;"  @click="showVenue" src="../assets/img/points.png" />
        </div>
        <div class="flow-top" @click="showDetail=false">
            <div class="venueContainer "v-if="showDetail">
                    <div class="baseMessage">
                        <div class="left">
                            <img src="../assets/img/img1.jpg" alt="">
                        </div>
                        <div class="right">
                            <div class="name">名称：五棵松拓展基地</div>
                            <div class="star">
                                    <el-rate
                                    v-model="value5"
                                    disabled
                                    show-score
                                    text-color="#ff9900"
                                    score-template="{value}">
                                    </el-rate>
                            </div>
                            <div class="introduction">
                                    场馆简介：五棵松拓展基地为学校、企业、事业机关和民间爱好军事活动人士的军事训练、团队建设
                                    户外拓展、实战仿真演练等活动提供培训和解决方案。
                                    基地设备设施齐全，场地大，环境好，教员军事素质过硬，拥有丰富的军事化训练经验。
                            </div>
                            <div>
                                    地址：北京市海淀区复兴路69号五棵松体育馆
                            </div>
                            <div>
                                    联系方式：13801012020 张教练
                            </div>
                        </div>
                    </div>
                    <div class="detailMessage">
                        <div class="title">场馆教官</div>
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
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default{
        created() {
            // axios.get("http://47.104.128.89:8002/gym/getAllGym")
            // .then(res =>{
            //     this.venueList = res.data;
            // })
        },
        data(){
            return {
                value5:5,
                showDetail:false,
                venueList: [],
                vuene:null //选中展示的场馆
            }
        },
        methods: {
            showVenue() {
                this.showDetail = !this.showDetail
            }
        }
    }
</script>

<style>
    .venuePage{
        width: 1200px;
        margin: 50px auto 0;
    }
    .venuePage .venueContainer{
        background: rgba(0,0,0,0.4);
        margin-bottom: 100px;
        margin-left: auto;
        margin-right: auto;
        padding: 20px;
        width: 70%;
        margin-top: 100px;
    }
    .venuePage .venueContainer .baseMessage{
        overflow: hidden;
    }
    .venuePage .venueContainer .baseMessage .left,.venuePage .venueContainer .baseMessage .right{
        float: left;
        color: #fff;
    }
    .venuePage .venueContainer .baseMessage .left{
        width: 400px;
        height: 250px;
        overflow: hidden;
    }
    .venuePage .venueContainer .baseMessage .left img{
        width: 100%;
    }
    .venuePage .venueContainer .baseMessage .right{
        margin-left: 50px;
        width: 500px;
    }
    .venuePage .venueContainer .baseMessage .right .name{
        height: 50px;
        line-height: 50px;
        font-size: 22px;
    }
    .venuePage .venueContainer .baseMessage .right .star{
        margin-bottom: 30px;
    }
    .venuePage .venueContainer .baseMessage .right .introduction{
        margin-bottom: 10px;
    }
    .venuePage .venueContainer .detailMessage{
        border-top: 1px solid #fff;
        margin-top:20px;
    }
    .venuePage .venueContainer .detailMessage .title{
        text-align: center;
        color: #fff;
        font-size: 22px;
        height: 30px;
        line-height: 30px;
        margin-top: 20px;
    }
    .venuePage .venueContainer .detailMessage .personMsg{
        display: flex;
        padding:0;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .venuePage .venueContainer .detailMessage .personMsg li{
        width: 340px;
        margin: 20px;
        height: auto;
        list-style: none;
        background: #fff;
    }
    .venuePage .venueContainer .detailMessage .personMsg li img{
        width: 100%;
    }
    .venuePage .venueContainer .detailMessage .personMsg li .name{
        text-align: center;
        line-height: 30px;
    }
    .flow-top {
        position: fixed;
        top:0;
        left: 0;
        background-color: rgba(0,0,0,0.6);
        margin: auto;
        width: 100%;
    }
</style>