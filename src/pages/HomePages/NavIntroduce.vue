<template>
    <div class="plate">
        <div class="w">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item>装备介绍</el-breadcrumb-item>
                        <el-breadcrumb-item>全球 · 兵器库</el-breadcrumb-item>
                        <el-breadcrumb-item>飞行器</el-breadcrumb-item>
                </el-breadcrumb>
                <div class="content">
                    <div class="leftbox">
                        <div class="content_up">
                            <div class="choose">飞行器 - 筛选</div>
                            <div class="classAll">
                                <div class="classRow">
                                    <div class="classRow_l">大分类：</div>
                                    <div class="classRow_m">
                                        <a href="#">不限</a>
                                        <a href="#">战斗机</a>
                                        <a href="#">攻击机</a>
                                        <a href="#">预警机</a>
                                        <a href="#">反潜机</a>
                                        <a href="#">电子战机</a>
                                        <a href="#">电子战机</a>
                                        <a href="#">电子战机</a>
                                        <a href="#">电子战机</a>
                                        <a href="#">无人机</a>
                                        <a href="#">运输机</a>
                                        <a href="#">试验机</a>
                                        <a href="#">加油机</a>
                                        <a href="#">通用飞机</a>
                                        <a href="#">干线支线</a>
                                        

                                    </div>
                                    <div class="classRow_r"><a href="#">更多</a></div>
                                </div>
                                <div class="classRow">
                                        <div class="classRow_l">原产国:</div>
                                        <div class="classRow_m">
                                            <a href="#">不限</a>
                                            <a href="#">战斗机</a>
                                            <a href="#">攻击机</a>
                                            <a href="#">预警机</a>
                                            <a href="#">反潜机</a>
                                            <a href="#">电子战机</a>
                                            <a href="#">无人机</a>
                                            <a href="#">运输机</a>
                                            <a href="#">试验机</a>
                                            <a href="#">加油机</a>
                                            <a href="#">通用飞机</a>
                                            <a href="#">干线支线</a>
                                            
    
                                        </div>
                                        <div class="classRow_r"><a href="#">更多</a></div>
                                    </div>
                                    <div class="classRowend">
                                            <div class="classRow_l">诞生期:</div>
                                            <div class="classRow_m">
                                                <a href="#">不限</a>
                                                <a href="#">战斗机</a>
                                                <a href="#">攻击机</a>
                                                <a href="#">预警机</a>
                                                <a href="#">反潜机</a>
                                            </div>
                                            <div class="classRow_r"></div>
                                        </div>
                            </div>
                        </div>
                        <div class="content_down">down</div>
                    </div>
                    <div class="rightbox">123</div>
                </div>
        </div>
    </div>


</template>
<script>

    export default {
        methods: {
            
        },
        data() {
            return {

            };
        },

    }
</script>
<style scoped>
    .classRowend{
        overflow: hidden;
    }
    a{
        text-decoration: none;
        color: #000;
    }
    .classRow_m a{
        float: left;
        display: block;
        padding:0 10px 18px;
        /* height: 25px; */
    }
    .classRow_r{
        float: right;
        width: 60px;
        height: 100%;

    }
    .classRow_m{
        float: left;
        height: 100%;
        width: 570px;

    }
    .classRow_l{
        float: left;
        width: 70px;
        height: 100%;
    }
    .classAll{
        margin-top: 10px;
    }
    .classRow{
        overflow: hidden;
        height: 70px;
        background-color: pink;
        border-bottom: 1px dashed #ccc;
    }
    .choose{
        text-align: center;
        height: 30px;
        line-height: 30px;
        width: 120px;
        border-bottom: 3px solid #FEA432;
    }
    .leftbox{
        padding: 20px;
        background-color: #ccc;
        width: 700px;
        float: left;
    }
    .rightbox{
        padding: 20px;
        width: 320px;
        background-color: pink;
        float: right;
    }
    .el-breadcrumb{
        padding-top: 40px;
        padding-bottom: 20px;
    }
   .plate{
       background-color: #fff;
       height: 100%;
   }
   .w{
    width: 1150px;
    margin: 0 auto;
   }
</style>