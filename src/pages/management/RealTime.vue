<template>
    <div style="width: 100%; height: 100%; position: relative;">
        <div id="container-left">
            <div id="red-title">
                    红队
            </div>
            <div id="red-content">
                <p> 伤亡：{{injureRed}} </p>
                <p>积分： 0</p>
                <el-table
                :data="redTeam"
                style="width: 80%">
                    <el-table-column
                    prop="player"
                    label="玩家"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    width="180"
                    prop="equipment"
                    label="枪支">
                    </el-table-column>
                    <el-table-column
                    prop="status"
                    label="状态"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="remaining"
                    label="弹药剩余">
                    </el-table-column>
              </el-table>
            </div>
        </div>
        <div id="container-right">
            <div id="blue-title">
                蓝队
            </div>
            <div id="blue-content">
                <p> 伤亡：{{injureBlue}} </p>
                <p>积分： 0</p>
                <el-table
                :data="redTeam"
                style="width: 80%; position:absolute; right: 0px;">
                    <el-table-column
                    prop="player"
                    label="玩家"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    width="180"
                    prop="equipment"
                    label="枪支">
                    </el-table-column>
                    <el-table-column
                    prop="status"
                    label="状态"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="remaining"
                    label="弹药剩余">
                    </el-table-column>
              </el-table>
            </div>
        </div>
        <div style="height: 200px; width: 300px; background-color: #000000; z-index:10; position: relative; top:0; margin: auto;"></div>
    </div>
</template>

<script>
    export default {
        mounted() {
            //随机受伤人数
            this.id = setInterval(()=>{
                this.injureBlue>50? 50: this.injureBlue += Math.floor(Math.random()*10);
                this.injureRed>50? 50: this.injureRed += Math.floor(Math.random()*10);
            },10000)
        },
        data() {
            return {
                injureBlue: 0,
                injureRed: 0,
                redTeam:  [
                    {player:"队员1",equipment:"枪支1",status:'使用中',remaining:"20"},
                    {player:"队员2",equipment:"枪支2",status:'使用中',remaining:"21"},
                    {player:"队员3",equipment:"枪支3",status:'使用中',remaining:"25"},
                    {player:"队员4",equipment:"枪支4",status:'使用中',remaining:"23"},
                    {player:"队员5",equipment:"枪支5",status:'使用中',remaining:"24"},
                ]
            }
        },

        beforeDestroy() {
            clearInterval(this.id);
        }
    }
</script>

<style>
    #container-left {
        height: 100%; 
        width: 50%; 
        background-color: #FF325050; 
        float: left;

    }
    #container-right {
        height: 100%; 
        width: 50%; 
        background-color: #5032FF50; 
        float: right;
    }
    #blue-title {
        text-align: right; 
        font-size: 1.5rem; 
        color: rgba(120, 229, 248, 0.808);
        font-weight: 700;
        margin-right: 20px;
    }
    #blue-content {
        margin-top:20px;
        text-align: right; 
        color: rgba(255, 255, 255, 1);
        font-size: 1.2rem; 
        margin-right: 20px;
        position: relative;
    }
    #red-title {
        text-align: left; 
        font-size: 1.5rem; 
        color: rgba(241, 94, 94, 0.808);
        font-weight: 700;
        margin-left: 20px;
    }
    #red-content {
        margin-top:20px;
        text-align: left; 
        color: rgba(255, 255, 255, 1);
        font-size: 1.2rem; 
        margin-left: 20px;
    }
</style>