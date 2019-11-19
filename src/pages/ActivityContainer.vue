<template>
    <div class="actContainer">
        <!-- <div class="hotActivity">
            热点活动
        </div>
        <div class="activity-container">
            <div class="box" v-for="(item, index) in hotActivityList" :key="index">
                <img class="preview" src="../assets/img/activities-preview.jpg" />
                <div class="content">
                    {{item.title}} <br />
                    {{item.type}} <br /> <br />
                    热度：<el-rate v-model="value5" disabled show-score text-color="#ff9900" score-template="{value}">
                    </el-rate>
                    <router-link id="detail" to="/activities/activityListDetail">详情</router-link>
                </div>
            </div>
        </div> -->
        <!-- 全部活动 -->
        <div class="allActivity">
            全部活动
        </div>
        <div class="activity-container">
            <div class="box" v-for="(item, index) in activityList" :key="index">
                <img class="preview" src="../assets/img/activities-preview.jpg" />
                <div class="content">
                    {{item.title}} <br />
                    {{item.type}}
                    <router-link id="detail" to="/activities/activityListDetail">详情</router-link>
                    <!-- <button id="detail">详情</button> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                value5: 3.7,
                activityList: [
                    {
                        id: 1,
                        gym_id: 1,
                        theme: "活动主题1",
                        name: "活动名称1",
                        pic_address: require("../assets/img/activity1.jpg"),
                        begin_time: "2019-11-12",
                        end_time: "2019-11-18",
                        description:
                            "1中国企业的发展，经过了一段相当长时间的原始积累和个人英雄式的管理，已经进入到依靠团队和系统管理出效益的阶段。很多企业发展的瓶颈出现在人力资源发掘和管理上。如何在较短的时间内建设起一支强大的团队，是目前企业的共同诉求。上海西点卓越军团军事",
                        status: 1 //进行中
                    },
                    {
                        id: 2,
                        gym_id: 2,
                        theme: "活动主题2",
                        name: "活动名称2",
                        pic_address: require("../assets/img/activity2.jpg"),
                        begin_time: "2019-11-12",
                        end_time: "2019-11-13",
                        description:
                            "2中国企业的发展，经过了一段相当长时间的原始积累和个人英雄式的管理，已经进入到依靠团队和系统管理出效益的阶段。很多企业发展的瓶颈出现在人力资源发掘和管理上。如何在较短的时间内建设起一支强大的团队，是目前企业的共同诉求。上海西点卓越军团军事",
                        status: 2 //结束
                    },
                    {
                        id: 3,
                        gym_id: 3,
                        theme: "活动主题3",
                        name: "活动名称3",
                        pic_address: require("../assets/img/activity3.jpg"),
                        begin_time: "2019-11-20",
                        end_time: "2019-11-21",
                        description:
                            "3中国企业的发展，经过了一段相当长时间的原始积累和个人英雄式的管理，已经进入到依靠团队和系统管理出效益的阶段。很多企业发展的瓶颈出现在人力资源发掘和管理上。如何在较短的时间内建设起一支强大的团队，是目前企业的共同诉求。上海西点卓越军团军事",
                        status: 0 //未开始
                    },
                    {
                        id: 4,
                        gym_id: 4,
                        theme: "活动主题4",
                        name: "活动名称4",
                        pic_address: require("../assets/img/activity3.jpg"),
                        begin_time: "2019-11-20",
                        end_time: "2019-11-21",
                        description:
                            "4中国企业的发展，经过了一段相当长时间的原始积累和个人英雄式的管理，已经进入到依靠团队和系统管理出效益的阶段。很多企业发展的瓶颈出现在人力资源发掘和管理上。如何在较短的时间内建设起一支强大的团队，是目前企业的共同诉求。上海西点卓越军团军事",
                        status: 0 //未开始
                    }
                ]
            }
        }
    }

    // [
    //     { title: '枪战训练1', type: '枪战训练' },
    //     { title: "枪战对抗1", type: '枪战训练' },
    //     { title: "枪战训练2", type: '枪战对抗' },
    //     { title: "枪战对抗2", type: '枪战对抗' },
    //     { title: '枪战训练1', type: '枪战训练' },
    //     { title: "枪战对抗1", type: '枪战训练' },

    //             ]
</script>

<style scoped>
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

    .actContainer .hotActivity,
    .actContainer .allActivity {
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
</style>