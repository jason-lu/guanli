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
            <button @click="join">加入活动</button>
        </div>
    </div>


</template>

<script>
    export default{
        data(){
            return {
                activityDetail:{
                    title:'活动名称',
                    type:'枪战训练',
                    place:'场馆5',
                    time:'50分钟',
                    describe:'活动描述',
                    active:true//活动是否可参加
                }
            }
        },
        methods:{
            join(){
                this.$router.push('/joinActivity');
            }
        }
    }
</script>

<style>
    .activityDetail{
        width:90%;
        margin:50px auto;
        background: #fff;
        padding:50px;
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
    }
</style>