<template>
    <div class="actContainer">
        <!-- 热点活动 -->
        <div class="activity-title">
            活动列表
        </div>
        <div class="activity-container">
            <ul class="activity-list">
                <li class="content">
                    <div class="left">
                        <img src="../assets/img/activities-preview.jpg" alt="">
                    </div>
                    <div class="right">
                        <div class="theme"></div>
                        <div class="title"></div>
                        <div class="des"></div>
                        <div class="time"><span>2011-11-11</span> 至 <span>2011-11-13</span></div>
                        <div class="status">状态</div>
                    </div>
                    <div class="edit">
                        <button>编辑</button>
                    </div>
                </li>
            </ul>

            <!-- <div class="box" v-for="(item, index) in hotActivityList" :key="index">
                <img class="preview" src="../assets/img/activities-preview.jpg" />
                <div class="content">
                    {{item.title}} <br />
                    {{item.type}} <br /> <br />
                    热度：<el-rate v-model="value5" disabled show-score text-color="#ff9900" score-template="{value}">
                    </el-rate>
                    <router-link id="detail" to="/activityListDetail">详情</router-link>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                value5: 3.7,
                hotActivityList: [
                    { title: '枪战训练1', type: '枪战训练' },
                    { title: "枪战对抗1", type: '枪战训练' },
                    { title: "枪战训练2", type: '枪战对抗' },
                    { title: "枪战对抗2", type: '枪战对抗' },
                ],
                activityList: [
                    { title: '枪战训练1', type: '枪战训练' },
                    { title: "枪战对抗1", type: '枪战训练' },
                    { title: "枪战训练2", type: '枪战对抗' },
                    { title: "枪战对抗2", type: '枪战对抗' },
                    { title: '枪战训练1', type: '枪战训练' },
                    { title: "枪战对抗1", type: '枪战训练' },

                ]
            }
        }
    }
</script>

<style lang="less" scoped>
    .actContainer {

        .activity-title {
            width: 600px;
            height: 80px;
            line-height: 80px;
            margin: auto;
            text-align: center;
            border-bottom: 1px solid #fff;
            color: #fff;
            font-size: 26px;
            margin-bottom: 20px;
        }
    }


    
    .activity-container {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Poppins', sans-serif;
        flex-flow: wrap;
    }

    .box {
        position: relative;
        margin: 20px 30px;
        width: 400px;
        height: 300px;
        display: flex;
        flex-grow: 1;
        justify-content: center;
        flex-direction: row;
        background: #060c2188;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.33);
    }

    .preview {
        width: 200px;
        height: 200px;
        flex-grow: 1;
    }


    .content {
        flex-grow: 1;
        padding: 20px;
        box-sizing: border-box;
        color: #fff;
    }

    #detail {
        position: absolute;
        right: 20px;
        bottom: 20px;
        color: #fff;

    }

</style>