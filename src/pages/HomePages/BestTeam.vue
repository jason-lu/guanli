<template>
  <div class="box">
    <el-scrollbar style="height:100%">
      <div class="bestTeam">
        <!-- 面包屑 -->
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>
            <a href="/">活动管理</a>
          </el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="content">
          <h3 class="title">《一杆狙天下》TOP战队介绍</h3>
          <div class="introduce">
            <span>时间：2018-12-17 15:26:56</span>
            <span>来源：官网</span>
            <span>编辑：我是老瓜皮</span>
          </div>
          <div class="script">
            <p>
              滔搏运动（TOP）将与DAN电子竞技俱乐部携手打造全新的电竞体育品牌——TopsportsGaming，简称TOP电子竞技俱乐部。
              TOP电子竞技俱乐部将以原DAN电子竞技俱乐部为基础，融入新鲜血液后，TopsportsGaming将破DAN而生，
              努力地朝着电子竞技的更高峰攀登。整合后的TOP电子竞技俱乐部作为LPL联盟成员之一，将会参加LPL2018赛季的所有赛程。
              希望在滔搏运动的大力支持下，战队能再创奇迹，以更加优异的成绩来回报大家的喜爱。
            </p>
          </div>
          <!-- 图片 -->
          <div class="comtent_img">
            <img src="../../assets/img/king.png" alt />
          </div>
          <!-- 战队成员介绍 -->
          <div class="remember">
            <p class="remember_title">精英战队成员介绍</p>
            <!-- 人员 -->
            <div>
              <div class="clearfix remember_one">
                <div class="team_peple fl">
                  <img src="../../assets/img/peple1.png" alt />
                </div>
                <div class="team_pepleDesc fl">
                  <p>姓名：Christensen Emil</p>
                  <p>年龄：19</p>
                  <p>武器：m24</p>
                  <p>最喜欢的玩家：Potti</p>
                  <p class="desc">
                    技术风格：Heaton的反应看起来并不快，射击时一枪爆头的概率在世界顶级高手里面也不算突出，
                    但是在当今世界相信没人敢说正面能稳赢这位SK主力机枪手。Heaton的预备瞄准自然不必多说，
                    更重要的是其在遇敌后鼠标微调的准确度高得让人为之叹服，再凭借其对扫射弹道控制的世界超一流水平，
                    就能做到在最短的时间内把更多的子弹打到对手的身上，即使没有爆头也可以很短的时间内秒杀对手
                    （这里要注意的是Heaton是世界上少数几个使用640*480画面解析度的顶尖高手之一，
                    而解析度越低的画面对于中近距离的扫射相对而言要有利些）。
                    另外人们总夸奖Heaton的枪法优秀，但却忽略了其意识和身法移动也已经到了相当高的境界，
                    只是由于队伍的整体需要Heaton才会为进攻找突破口，而每次都去和满血的对手硬碰硬。
                  </p>
                </div>
              </div>
              <div class="border">
                <img src="../../assets/img/border.png" alt />
              </div>
            </div>
                      <div>
              <div class="clearfix remember_one">
                <div class="team_peple fl">
                  <img src="../../assets/img/peple2.png" alt />
                </div>
                <div class="team_pepleDesc fl">
                  <p>姓名：Christensen Emil</p>
                  <p>年龄：19</p>
                  <p>武器：m24</p>
                  <p>最喜欢的玩家：Potti</p>
                  <p class="desc">
                    技术风格：Heaton的反应看起来并不快，射击时一枪爆头的概率在世界顶级高手里面也不算突出，
                    但是在当今世界相信没人敢说正面能稳赢这位SK主力机枪手。Heaton的预备瞄准自然不必多说，
                    更重要的是其在遇敌后鼠标微调的准确度高得让人为之叹服，再凭借其对扫射弹道控制的世界超一流水平，
                    就能做到在最短的时间内把更多的子弹打到对手的身上，即使没有爆头也可以很短的时间内秒杀对手
                    （这里要注意的是Heaton是世界上少数几个使用640*480画面解析度的顶尖高手之一，
                    而解析度越低的画面对于中近距离的扫射相对而言要有利些）。
                    另外人们总夸奖Heaton的枪法优秀，但却忽略了其意识和身法移动也已经到了相当高的境界，
                    只是由于队伍的整体需要Heaton才会为进攻找突破口，而每次都去和满血的对手硬碰硬。
                  </p>
                </div>
              </div>
              <div class="border">
                <img src="../../assets/img/border.png" alt />
              </div>
            </div>
                      <div>
              <div class="clearfix remember_one">
                <div class="team_peple fl">
                  <img src="../../assets/img/peple3.png" alt />
                </div>
                <div class="team_pepleDesc fl">
                  <p>姓名：Christensen Emil</p>
                  <p>年龄：19</p>
                  <p>武器：m24</p>
                  <p>最喜欢的玩家：Potti</p>
                  <p class="desc">
                    技术风格：Heaton的反应看起来并不快，射击时一枪爆头的概率在世界顶级高手里面也不算突出，
                    但是在当今世界相信没人敢说正面能稳赢这位SK主力机枪手。Heaton的预备瞄准自然不必多说，
                    更重要的是其在遇敌后鼠标微调的准确度高得让人为之叹服，再凭借其对扫射弹道控制的世界超一流水平，
                    就能做到在最短的时间内把更多的子弹打到对手的身上，即使没有爆头也可以很短的时间内秒杀对手
                    （这里要注意的是Heaton是世界上少数几个使用640*480画面解析度的顶尖高手之一，
                    而解析度越低的画面对于中近距离的扫射相对而言要有利些）。
                    另外人们总夸奖Heaton的枪法优秀，但却忽略了其意识和身法移动也已经到了相当高的境界，
                    只是由于队伍的整体需要Heaton才会为进攻找突破口，而每次都去和满血的对手硬碰硬。
                  </p>
                </div>
              </div>
              <div class="border">
                <img src="../../assets/img/border.png" alt />
              </div>
            </div>

          </div>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>
      
      <script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="less"  scoped>
.fl {
  float: left;
}
.team_pepleDesc {
  width: 800px;
}
.box {
  height: 100%;
  background: url("../../assets/img/bgIMG.jpg") no-repeat;
  background-size: 100%;
}
.remember {
  margin-top: 20px;
  .remember_title {
    font-size: 20px;
    color: aqua;
    margin: 40px 0;
  }
  .remember_one {
    margin-top: 20px;
  }
  .team_peple {
    margin-right: 200px;
    // text-align: center;
    img {
      width: 250px;
      height: 250px;
    }
  }
}
.border img{
    margin-top: 20px;
    width: 100%;
    height: 5px;
}
.bestTeam {
  height: 100%;
  width: 70%;
  margin: 0px auto;
  //   background: rgba(0, 0, 0, 0.4);
  padding: 50px;
  color: #fff;
}
.introduce {
  margin-top: 30px;
  span {
    padding-right: 30px;
  }
}
.script {
  margin-top: 30px;
  p {
    text-indent: 2rem;
    line-height: 25px;
  }
}
.title {
  margin-top: 20px;
  text-align: center;
}
.comtent_img {
  margin-top: 20px;
  text-align: center;
  img {
    width: 1000px;
    height: 350px;
  }
}
</style>