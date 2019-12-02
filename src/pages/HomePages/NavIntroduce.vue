<template>
    <div class="plate">
        <div class="w">
            <button @click="aaa">点击获取数据</button>
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>装备介绍</el-breadcrumb-item>
                <el-breadcrumb-item>全球 · 兵器库</el-breadcrumb-item>
                <el-breadcrumb-item>枪械与单兵</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="content clearfix">
                <div class="leftbox">
                    <div class="content_up">
                        <span class="choose">枪械与单兵 - 筛选</span>
                        <div class="classAll">
                            <div class="classRow" :class="{h70:ish70}">
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
                                    <a href="#">干线支线</a>
                                    <a href="#">干线支线</a>


                                </div>
                                <div class="classRow_r"><a href="#" @click="changclass">{{ish70==true?"更多":"收起"}}</a></div>
                            </div>
                            <div class="classRow" :class="{h70n:ish70n}">
                                <div class="classRow_l">原产国:</div>
                                <div class="classRow_m">
                                    <a href="#">不限</a>
                                    <a href="#">中国</a>
                                    <a href="#">美国</a>
                                    <a href="#">英国</a>
                                    <a href="#">俄罗斯</a>
                                    <a href="#">法国</a>
                                    <a href="#">德国</a>
                                    <a href="#">日本</a>
                                    <a href="#">印度</a>
                                    <a href="#">韩国</a>
                                    <a href="#">意大利</a>
                                    <a href="#">巴西</a>
                                    <a href="#">俄罗斯</a>
                                    <a href="#">法国</a>
                                    <a href="#">德国</a>
                                    <a href="#">日本</a>
                                    <a href="#">印度</a>
                                    <a href="#">韩国</a>
                                    <a href="#">意大利</a>
                                    <a href="#">巴西</a>
                                    <a href="#">巴西</a>


                                </div>
                                <div class="classRow_r"><a href="#" @click="changclass2">{{ish70n==true?"更多":"收起"}}</a></div>
                            </div>
                            <div class="classRowend">
                                <div class="classRow_l">诞生期:</div>
                                <div class="classRow_m">
                                    <a href="#">不限</a>
                                    <a href="#">二战前</a>
                                    <a href="#">二战期间</a>
                                    <a href="#">二战后至冷战期间</a>
                                    <a href="#">冷战后至今</a>
                                    <a href="#">未知</a>
                                </div>
                                <div class="classRow_r"></div>
                            </div>
                            <div class="classRowend">
                                <div class="classRow_l">更多选项:</div>
                                <div class="classRow_m">
                                    <el-dropdown>
                                        <el-button size="small">
                                            更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
                                        </el-button>
                                        <el-dropdown-menu slot="dropdown">
                                            <el-dropdown-item>黄金糕</el-dropdown-item>
                                            <el-dropdown-item>狮子头</el-dropdown-item>
                                            <el-dropdown-item>螺蛳粉</el-dropdown-item>
                                            <el-dropdown-item>双皮奶</el-dropdown-item>
                                            <el-dropdown-item>蚵仔煎</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </el-dropdown>
                                    <el-dropdown>
                                        <el-button size="small">
                                            更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
                                        </el-button>
                                        <el-dropdown-menu slot="dropdown">
                                            <el-dropdown-item>黄金糕</el-dropdown-item>
                                            <el-dropdown-item>狮子头</el-dropdown-item>
                                            <el-dropdown-item>螺蛳粉</el-dropdown-item>
                                            <el-dropdown-item>双皮奶</el-dropdown-item>
                                            <el-dropdown-item>蚵仔煎</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </el-dropdown>
                                    <el-dropdown>
                                        <el-button size="small">
                                            更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
                                        </el-button>
                                        <el-dropdown-menu slot="dropdown">
                                            <el-dropdown-item>黄金糕</el-dropdown-item>
                                            <el-dropdown-item>狮子头</el-dropdown-item>
                                            <el-dropdown-item>螺蛳粉</el-dropdown-item>
                                            <el-dropdown-item>双皮奶</el-dropdown-item>
                                            <el-dropdown-item>蚵仔煎</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </el-dropdown>

                                </div>
                                <div class="classRow_r"></div>
                            </div>
                        </div>
                    </div>
                    <div class="content_down">
                        <div class="clearfix">
                            <div class="fl">
                                <div class="sort">
                                    <span>排序：</span>
                                    <button>近期关注</button>
                                    <button>最新更新</button>
                                    <button>首字母</button>
                                </div>

                            </div>
                            <div class="fr">共1330种飞行器</div>
                        </div>
                        <div class="content_pic">
                            <ul class="content_pic_ul clearfix">
                                <li>
                                    <a href="#">
                                        <img src="../../assets/img/pageone-introduce.png" alt="">
                                        <div class="content_pic_m">
                                            <div>雅克-130</div>
                                            <div>合作开发</div>
                                            <div class="color999">运输机 | 冷战后至今</div>
                                            <div>评分</div>
                                            <span class="color999">一周前更新</span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="../../assets/img/pic-gun1.png" alt="">
                                        <div class="content_pic_m">
                                            <div>雅克-130</div>
                                            <div>合作开发</div>
                                            <div class="color999">运输机 | 冷战后至今</div>
                                            <div>评分</div>
                                            <span class="color999">一周前更新</span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="../../assets/img/pic-gun2.png" alt="">
                                        <div class="content_pic_m">
                                            <div>雅克-130</div>
                                            <div>合作开发</div>
                                            <div class="color999">运输机 | 冷战后至今</div>
                                            <div>评分</div>
                                            <span class="color999">一周前更新</span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="../../assets/img/pic-gun3.png" alt="">
                                        <div class="content_pic_m">
                                            <div>雅克-130</div>
                                            <div>合作开发</div>
                                            <div class="color999">运输机 | 冷战后至今</div>
                                            <div>评分</div>
                                            <span class="color999">一周前更新</span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="../../assets/img/pic-gun4.png" alt="">
                                        <div class="content_pic_m">
                                            <div>雅克-130</div>
                                            <div>合作开发</div>
                                            <div class="color999">运输机 | 冷战后至今</div>
                                            <div>评分</div>
                                            <span class="color999">一周前更新</span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="../../assets/img/pic-gun5.png" alt="">
                                        <div class="content_pic_m">
                                            <div>雅克-130</div>
                                            <div>合作开发</div>
                                            <div class="color999">运输机 | 冷战后至今</div>
                                            <div>评分</div>
                                            <span class="color999">一周前更新</span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="../../assets/img/pic-gun6.png" alt="">
                                        <div class="content_pic_m">
                                            <div>雅克-130</div>
                                            <div>合作开发</div>
                                            <div class="color999">运输机 | 冷战后至今</div>
                                            <div>评分</div>
                                            <span class="color999">一周前更新</span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="../../assets/img/pic-gun7.png" alt="">
                                        <div class="content_pic_m">
                                            <div>雅克-130</div>
                                            <div>合作开发</div>
                                            <div class="color999">运输机 | 冷战后至今</div>
                                            <div>评分</div>
                                            <span class="color999">一周前更新</span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="../../assets/img/pic-gun8.png" alt="">
                                        <div class="content_pic_m">
                                            <div>雅克-130</div>
                                            <div>合作开发</div>
                                            <div class="color999">运输机 | 冷战后至今</div>
                                            <div>评分</div>
                                            <span class="color999">一周前更新</span>
                                        </div>
                                    </a>
                                </li>

                            </ul>
                        </div>
                        <div class="block pageposition">

                            <el-pagination layout="prev, pager, next" :total="50">
                            </el-pagination>
                        </div>
                    </div>
                </div>
                <div class="rightbox">
                    <div class="rightbox_up">
                        <div class="total">全部分类</div>
                        <div class="rightContent">
                            <a href="#">• 飞行器</a>
                            <a href="#">• 舰船舰艇</a>
                            <a href="#">• 枪械与单兵</a>
                            <a href="#">• 坦克装甲车辆</a>
                            <a href="#">• 火炮</a>
                            <a href="#">• 导弹武器</a>
                            <a href="#">• 太空装备</a>
                            <a href="#">• 爆炸物</a>
                            <a href="#">• 军事术语</a>
                            <!-- <a href="#">• 飞行器</a> -->
                        </div>
                    </div>
                    <div class="rightbox_down">
                            <div class="sortOder">枪械与单兵排行</div>
                            <div class="leftContent">
                                <a href="#">• 赫克勒-科赫G36自动步枪</a>
                                <a href="#">• 沙漠之鹰手枪</a>
                                <a href="#">• 斯太尔-曼利夏AUG自动步枪</a>
                                <a href="#">• 赫克勒-科赫G3自动步枪</a>
                                <a href="#">• 塔沃尔突击步枪</a>
                                <a href="#">• AK-47突击步枪</a>
                                <a href="#">• 赫克勒-科赫HK 416自动步</a>
                                <a href="#">• 卡拉什尼科夫1974(AK-74)</a>
                                <a href="#">• 95式步枪</a> 
                                <a href="#">• 柯尔特M1911/M1911A1手</a>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>


</template>
<script>
import qs from 'qs';
    export default {
        methods: {
            async  aaa (){
           const data=await  this.$http.post('member/passwdLogin', qs.stringify( {
                    phone:13212312311,
                    passwd:123456,
                }));
                console.log(data);  
            },
            changclass(){
                this.ish70=!this.ish70;
            },
            changclass2(){
                this.ish70n=!this.ish70n;
            }
        },
        data() {
            return {
                ish70:true,
                ish70n:true,
            };
        },

    }
</script>
<style scoped>
    .h70{
        height: 70px;
    }
    .h70n{
        height: 70px;
    }
    .rightbox_down{
        padding: 20px;
        margin-top: 20px;
       
        /* border:5px solid rgba(0, 0, 0, 0.2); */
        box-shadow:0px 15px 30px  rgba(0, 0, 0, 0.2);
    }
    .rightbox_up{
        padding: 20px;
        padding-bottom: 0;
        background-color: #444;
        opacity: 0.7;
        color: #fff;
    }
    .total {
        height: 50px;
    }
.leftContent a{
    display: block;
        height: 50px;
        line-height: 50px;
}
    .rightContent a {
        display: block;
        height: 50px;
        color: #fff;
        border-bottom: 1px solid #555555;
        line-height: 50px;

    }

    .pageposition {
        margin-top: 20px;
        text-align: center;
    }

    .pagechange {
        text-align: center;
    }

    .color999 {
        color: #999999;
    }

    ul {
        margin: 0;
        padding: 0;
    }

    .content_pic_ul {
        margin-top: 10px;
        width: 100%;
    }

    .content_pic_ul li {
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
        margin-bottom: 10px;
        width: 30.3%;
        margin-right: 3%;
        float: left;
        height: 270px;
    }

    .content_pic_m {
        padding: 5px;
    }

    .content_pic_m div {
        height: 22px;
    }

    .content_pic_ul li img {
        width: 100%;
    }

    .fr {
        float: right;
    }

    .fl {
        float: left;
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

    .content_down {
        margin-top: 45px;
    }

    .sort button {
        width: 95px;
        height: 30px;
        border: none;
        background-color: #E7E7E7;
    }

    .classRowend {
        height: 37px;
        line-height: 37px;
        overflow: hidden;
    }

    a {
        text-decoration: none;
        color: #000;
    }

    .classRow_m a {
        float: left;
        display: block;
        padding: 0 10px 18px;
        /* height: 25px; */
    }

    .classRow_r {
        float: right;
        width: 60px;
        height: 100%;

    }

    .classRow_m {
        float: left;
        height: 100%;
        width: 570px;

    }

    .classRow_l {
        float: left;
        width: 70px;
        height: 100%;
    }

    .classAll {
        margin-top: 10px;
    }

    .classRow {
        padding-top: 5px;
        overflow: hidden;
        /* height: 70px; */
        border-bottom: 1px dashed #ccc;
    }

    .choose {
        text-align: center;
        height: 30px;
        line-height: 30px;
        padding: 10px;
        border-bottom: 3px solid #FEA432;
    }

    .leftbox {
        padding: 20px;
        box-shadow: 0px 15px 30px  rgba(0, 0, 0, 0.2);
        width: 700px;
        float: left;
    }

    .rightbox {
      
        width: 320px;
        float: right;
    }

    .el-breadcrumb {
        padding-top: 40px;
        padding-bottom: 20px;
    }

    .plate {
        background-color: #fff;
        /* height: 100%; */
    }

    .w {
        width: 1150px;
        margin: 0 auto;
    }
</style>