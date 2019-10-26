<template>
    <div class="activity-container">
        <div class="box" v-for="(item, index) in activityList"  :key="index">
            <img class="preview" src="../assets/img/activities-preview.jpg" />
            <div class="content">
                {{item.title}} <br />
                {{item.type}}
                <button id="detail">详情</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activityList: [
                {title:'枪战训练1',type:'枪战训练'},
                {title:"枪战对抗1",type:'枪战训练'},
                {title:"枪战训练2",type:'枪战对抗'},
                {title:"枪战对抗2",type:'枪战对抗'},
                {title:'枪战训练1',type:'枪战训练'},
                {title:"枪战对抗1",type:'枪战训练'},
                {title:"枪战训练2",type:'枪战对抗'},
                {title:"枪战对抗2",type:'枪战对抗'},
                {title:'枪战训练1',type:'枪战训练'},
                {title:"枪战对抗1",type:'枪战训练'},

            ]
        }
    }
}
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
    font-family: 'Poppins',sans-serif;
    flex-flow: wrap;
}
.box{
    position: relative;
    margin: 20px 30px;
    width: 400px;
    height: 300px;
    display: flex;
    flex-grow: 1;
    justify-content: center;
    flex-direction: row;
    background: #060c2188;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.33);
}

.preview {
    width: 200px;
    height: 200px;
    flex-grow: 1;
}


.content
{
    flex-grow: 1;
    padding: 20px;
    box-sizing: border-box;
    color: #fff;
}
#detail {
    position: absolute;
    right: 20px;
    bottom: 20px;

}
</style>