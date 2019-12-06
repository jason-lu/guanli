<template>
  <div class="w clearfix" id="box">
    <div class="navchange">
      <ul class="navUl">
        <li v-for="(item,index) in tabArr" :key="index">
          <a  :href="item.src">{{item.title}}</a>
        </li>
      </ul>
    </div>
    <div class="first-container">
      <div class="news-container">
        <el-carousel height="380px">
          <el-carousel-item v-for="(item,index) in newsList" :key="index">
            <img :src="item.url" style="width: 100%; height: 380px; margin: auto; display: block;" />
            <span
              style="width:50%; position: absolute; padding:  10px; display: block; 
                                        border-radius: 20px;
                                        text-align: center;
                                        transform: translatex(50%); 
                                        z-index: 1; color: #ffffff; 
                                        bottom: 20px;margin: auto; background-color: #00000064;"
            >{{item.title}}</span>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="news_right">
        <div class="news_right_one">
          <p class="bigtitle">山东理工大学组织军训新生参观国教主题园</p>
          <p class="new-content">近日，山东理工大学组织参加军训的新生参观国教主题园，进一步坚定学生爱党、爱国、爱军的理想信念。</p>
        </div>
        <div class="news-link">
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
      <!-- 国防教育基地 -->
      <div class="contentFirst">
         <a name="introduce" id="teach" style="position: relative;top: -80px;"></a>
        <div>
          <p class="content_t clearfix">
            <router-link class="content_title fl" to="#">国防教育基地</router-link>
            <router-link class="content_title fr margin" to="/homePages/base">更多</router-link>
          </p>
          <div class="content-box">
            <div class="div-box" v-for="(item,index) in educateList" :key="item.id">
              <router-link to="/homePages/base">
                <div>
                  <img :src="item.src" alt />
                </div>
                <div class="content-middle">
                  <div class="content-box-m">{{item.name}}</div>
                  <div class="smallbox-m"></div>
                </div>
                <p class="content-end">{{item.desc}}</p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <!-- 装备介绍 -->
      <div class="contentFirst" >
         <a name="introduce" id="introduce" style="position: relative;top: -80px;"></a>
        <div>
          <p class="content_t clearfix">
            <router-link class="content_title fl" to="#">装备介绍</router-link>
            <router-link class="content_title fr margin" to="/homePages/base">更多</router-link>
          </p>
          <div class="content-box">
            <div class="div-box" v-for="(item,index) in weaponList" :key="item.id">
              <router-link to="/homePages/navintroduce">
                <div>
                  <img :src="item.src" alt />
                </div>
                <div class="content-middle">
                  <div class="content-box-m">{{item.name}}</div>
                  <div class="smallbox-m"></div>
                </div>
                <p class="content-end">{{item.desc}}</p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <!-- 精英战队 -->
      <div class="contentFirst">
       <a name="introduce" id="team" style="position: relative;top: -80px;"></a>
        <div>
          <p class="content_t clearfix">
            <router-link class="content_title fl" to="#">精英战队</router-link>
            <router-link class="content_title fr margin" to="/homePages/base"></router-link>
          </p>
          <div class="content-box">
            <div class="div-box" v-for="(item,index) in heroTeam" :key="item.id">
              <router-link to="/homePages/bestTeam">
                <div>
                  <img :src="item.src" alt />
                </div>
                <div class="content-middle">
                  <div class="content-box-m">{{item.name}}</div>
                  <div class="smallbox-m"></div>
                </div>
                <p class="content-end">{{item.desc}}</p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <!-- 国防教育 -->
      <div class="contentFirst div-box" >
         <a name="introduce" id="country" style="position: relative;top: -80px;"></a>
        <div>
          <p class="content_t">
            <router-link class="content_title" to="#">学校国防教育</router-link>
          </p>
          <div class="content-pic">
            <img src="../assets/img/one-page-content.jpg" alt />
          </div>
        </div>
        <div>
          <p class="content_t"></p>
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

      <!-- 底部区域 -->
      <!-- <div class="glzjfoot">
        <div class="glzj_foot">
          <a rel="nofollow" href="#" target="_blank">关于游侠</a> |
          <a rel="nofollow" href="#" target="_blank">广告合作</a> |
          <a rel="nofollow" href="#" target="_blank">人才招聘</a> |
          <a href="#" target="_blank" rel="nofollow">意见建议</a> |
          <a rel="nofollow" href="#" target="_blank">联系我们</a> |
          <a href="#" target="_blank">网站地图</a> |
          <a rel="nofollow" href="#" target="_blank"></a> |
          <a rel="nofollow" href="#" target="_blank">版权保护投诉指引</a>
          <br />增值电信业务经营许可证 浙B2-20120287 |
          <a href="#" target="_blank" rel="nofollow">浙ICP备12018679号-4</a> | 浙网文[2015]0882-251 |
          <a rel="nofollow" href="#" target="_blank">浙公网安备 33010502000468号</a>
          <br />CopyRight © 1999-2019
          ALi213.Net All Right
          Reserved 游侠网 版权所有
        </div>
      </div>-->
    </div>
    <el-backtop target="#box" :bottom="100">
      <div
        style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }"
      >UP</div>
    </el-backtop>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isshowbox: true,
      newsList: [
        {
          title: "山东理工大学组织军训新生参观国教主题园",
          date: 0,
          url: require("../assets/img/activity1.jpg")
        },
        {
          title: "重阳节，武警官兵到驻地看望慰问老兵",
          date: 0,
          url: require("../assets/img/activity2.jpg")
        },
        {
          title: "来了！解放军首个汽车团迎来军运会圣火",
          date: 0,
          url: require("../assets/img/activity3.jpg")
        },
        {
          title: "新疆军区某团八连到驻地学校开展国防教育活动",
          date: 0,
          url: require("../assets/img/activity4.jpg")
        }
      ],
      tabArr: [
        // { title: "国防教育", src: "#" },
        // { title: "动态信息", src: "#" },
        // { title: "典型风采", src: "#" },
        { title: "国防教育基地", src: "#teach" },
        { title: "装备介绍", src: "#introduce" },
        // { title: "师资教材", src: "#" },
        { title: "精英战队", src: "#team" },
        { title: "社会国防教育", src: "#country" },
        // { title: "视频推荐", src: "#" }
      ],
      // 教育基地的数据
      educateList: [
        {
          id: 1,
          src: require("../assets/img/base1.png"),
          name: "国防教育基地",
          desc:
            "国防教育基地是指对有组织的中小学生开放的基地，是全民国防教育日向社会开放的有关国防教育的基本阵地。"
        },
        {
          id: 2,
          src: require("../assets/img/activity1.jpg"),
          name: "红色教育基地",
          desc:
            "红色教育是指以红色作为时代精神内涵的象征、务实的落点在于教育。呼唤有志青年忧国忧民、挑战自我、超越自我、挑战极限、奉献社会的崇高精神。"
        },
        {
          id: 3,
          src: require("../assets/img/base3.png"),
          name: "训练基地",
          desc:
            "全市最大最正规的场地！最好最专业的设备！最帅最热情的教练！体验超炫的射击对战！玩出不一样青春赛场！"
        },
        {
          id: 4,
          src: require("../assets/img/base4.png"),
          name: "国防教育基地",
          desc:
            "专业野战拓展训练机构专业提供拓展培训课程,户外拓展培训,军事训练基地,真人CS野战,拓展培训课程,体验式拓展训练"
        }
      ],
      // 装备介绍数据
      weaponList: [
        {
          id: 1,
          src: require("../assets/img/sea.png"),
          name: "海军武器装备",
          desc:
            "海军武器装备是海军诸兵种执行作战、训练任务和实施勤务保障的各种战斗装备和技术装备的总称。"
        },
        {
          id: 2,
          src: require("../assets/img/sky.png"),
          name: "空军武器装备",
          desc:
            "空军武器装备，装备空军各兵种的武器装备的统称。空军武器装备主要有各种飞机(包括战斗机、轰炸机、歼击轰炸机、强击机、侦察机、运输机、预警机、直升机、其他特种飞机)"
        },
        {
          id: 3,
          src: require("../assets/img/pic-gun4.png"),
          name: "陆军武器装备",
          desc:
            "陆军武器装备体和系、轻武器、火炮与导弹、坦克装甲车辆、直升机、工程装备、陆军武器装备展望等。"
        },
        {
          id: 4,
          src: require("../assets/img/space.png"),
          name: "太空武器装备",
          desc:
            "空军武器装备，装备空军各兵种的武器装备的统称。空军武器装备主要有各种飞机(包括战斗机、轰炸机、歼击轰炸机、强击机、侦察机、运输机、预警机、直升机、其他特种飞机)"
        }
      ],
      heroTeam: [
        {
          id: 1,
          src: require("../assets/img/team1.png"),
          name: "一杆狙打天下",
          desc:
            "一朝战友，一生朋友 ，这是一支让人闻风丧胆的战队，建队到现在3年，成员一共21人，各个是精英。"
        },
        {
          id: 2,
          src: require("../assets/img/team2.png"),
          name: "狂军团",
          desc:
            "我们是用激情来诠释明天的一群少年。纵然有过失败，纵然尝过泪水，但没有面对狂风的鸷，就不能拍展翅膀，翱翔云间，没有驰骋荒原的狼，就不会引喉高嗷，震斥山林。"
        },
        {
          id: 3,
          src: require("../assets/img/team3.png"),
          name: "反手就是一枪",
          desc:
            "战神优先，绵羊靠边。这是一支弹无虚发的战队，曾保持23场战斗的连胜，队长***更是有着10年的战斗经验"
        },
        {
          id: 4,
          src: require("../assets/img/team4.png"),
          name: "火线敢死队",
          desc:
            "我们是能点燃严冬浓雾，趋散乌云的精灵；我们是给荒凉带去生机，注入活力的风铃；我们是擦干流星泪光，映亮天宇的传奇。"
        }
      ]
    };
  },

  mounted() {},
  methods: {},
  destroyed() {}
};
</script>

<style scoped>
.glzjfoot {
  text-align: center;
  margin: 50px 0;
  color: #333;
}

.margin {
  margin-right: 20px;
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
  color: #ddecea;
}

.bigtitle {
  font-size: 22px;
}

.content-end {
  padding: 20px;
  margin-top: 25px;
  text-indent: 2rem;
  /* color: #999; */
  font-size: 14px;
}

.content-box-m {
  float: left;
  font-size: 18px;
  width: 120px;
  overflow: hidden;
}

.content-box-m:hover {
  color: #005541;
}

.smallbox-m {
  float: right;
  color: #fff;
  background-color: #008578;
  background: url('../assets/img/ico.png');
  background-position: -18px -0px;
  width: 35px;
  height: 35px;
  font-weight: 700;
  text-align: center;
}

.content-middle {
  overflow: hidden;
  margin-top: 50px;
}

.div-box {
  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.2);
  background-color: rgba(0, 0, 0, 0.4);
  overflow: hidden;
}

.div-box img {
  width: 100%;
  height: 200px;
  transition: all 0.5s;
}
.div-box img:hover {
  transform: scale(1.1);
}

.content-box {
  display: flex;
}

.content-box .div-box {
  margin-right: 10px;
  flex: 1;
  width: 280px;
  height: 434px;
}
.content-pic {
  margin: 20px 30px;
  overflow: hidden;
}
.content-pic img {
  height: 270px;
  width: 100%;
}

.descripte {
  color: #fff;
}

.contentFirstUl {
  margin-top: 60px;
}

.contentFirstUl li {
  margin-top: 10px;
  color: #fff;
  height: 30px;
  font-size: 20px;
}

.content-name-link {
  color: #fff;
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
  color: #fff;
  font-size: 24px;
  font-weight: 700;
}

a {
  text-decoration: none;
  /* color: #000; */
}

.box {
  /* background: #F5F5F5; */
}

.w {
  width: 1150px;
  margin: 0 auto;
}

.first-container {
  margin: 0 auto;
  width: 1150px;
  height: 100%;
  display: flex;
  justify-content: space-between;
}

.news_right {
  box-sizing: border-box;
  padding: 25px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.4);
  height: 380px;
  /* margin-top: 20px; */
  width: 45%;
}

.news-container {
  background-color: #f5f5f5;
  height: 380px;
  width: 55%;
  position: relative;
  /* margin-top: 20px; */
}

.navchange {
  height: 75px;
  line-height: 75px;
}

.navUl li {
  text-align: center;
  width: 21%;
  font-size: 18px;
  padding: 0 20px;
  float: left;
  height: 100%;
}

.navUl li:hover {
  color: #009c79;
}

.navUl a {
  text-decoration: none;
  /* color: #000; */
}

* {
  margin: 0;
  padding: 0;
}
</style>