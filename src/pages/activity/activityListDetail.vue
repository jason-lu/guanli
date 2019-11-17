<template>
    <div class="activityDetail">
        <div class="title">{{activityDetail.title}}</div>
        <div class="parameter">
            <span>活动类型：{{activityDetail.type}}</span>
            <span>活动场馆：{{activityDetail.place}}</span>
            <span>活动时长：{{activityDetail.time}}</span>
        </div>
        <div class="describe">
            {{activityDetail.describe}}
        </div>
        <div class="join">
                <el-button type="primary" @click="join">加入活动</el-button>
        </div>
    </div>


</template>

<script>
    export default{
        data(){
            return {
                activityDetail:{
                    title:'娱拓方案',
                    type:'枪战训练',
                    place:'场馆5',
                    time:'50分钟',
                    describe:'活动描述：中国企业的发展，经过了一段相当长时间的原始积累和个人英雄式的管理，已经进入到依靠团队和系统管理出效益的阶段。很多企业发展的瓶颈出现在人力资源发掘和管理上。如何在较短的时间内建设起一支强大的团队，是目前企业的共同诉求。上海西点卓越军团军事',
                    active:true//活动是否可参加
                }
            }
        },
        methods:{
            join(){
                this.$router.push('/activities/joinActivity');
            }
        }
    }
</script>

<style>
    .activityDetail{
        width:90%;
        margin:50px auto;
        background: rgba(0,0,0,0.4);
        padding:50px;
        color: #fff;
    }
    .activityDetail .title{
        text-align: center;
        font-size: 24px;
    }
    .activityDetail .parameter span{
        display: inline-block;
        width: 32.3%;
        height: 30px;
        line-height:30px;
        box-sizing: border-box;
        text-align: center;
        margin-top: 30px;
    }
    .activityDetail .describe{
        margin-top: 30px;
    }
    .activityDetail .join{
        text-align: center;
        margin-top: 20px;;
    }
</style>