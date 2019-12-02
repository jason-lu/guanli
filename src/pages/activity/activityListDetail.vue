<template>
  <div class="activityDetail">
    <div class="content">
      <div class="title">{{activityDetail.name}}</div>
      <div class="parameter">
        <span>活动类型：{{activityDetail.theme}}</span>
        <span>活动场馆：{{activityDetail.gym}}</span>
        <span>活动时间：{{activityDetail.begin_time}} 至 {{activityDetail.end_time}}</span>
      </div>
      <div class="describe">活动描述：{{activityDetail.description}}</div>
    </div>
    <div class="session">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="11月19日" name="first">
          <table class="session-table">
            <thead>
              <tr>
                <th>活动时间</th>
                <th>人数限制</th>
                <th>人员情况</th>
                <th>价格(元/人)</th>
                <th>加入活动</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10.30~11.30</td>
                <td>6人</td>
                <td>差3人</td>
                <td>100</td>
                <td>
                    <el-button @click="addBlue" type="primary">加入蓝队</el-button>
                    <el-button @click="addRed"  type="danger">加入红队</el-button>
                  <!-- <router-link to="/activities/joinActivity">加入活动</router-link> -->
                </td>
              </tr>
              <tr>
                <td>12.00~13.00</td>
                <td>6人</td>
                <td>满人</td>
                <td>150</td>
                <td>
                    <el-button @click="addBlue" type="primary">加入蓝队</el-button>
                    <el-button @click="addRed"  type="danger">加入红队</el-button>
                  <!-- <router-link to="/activities/joinActivity">加入活动</router-link> -->
                </td>
              </tr>
              <tr>
                <td>13.30~14.30</td>
                <td>6人</td>
                <td>差2人</td>
                <td>150</td>
                <td>
                    <el-button @click="addBlue" type="primary">加入蓝队</el-button>
                    <el-button @click="addRed"  type="danger">加入红队</el-button>
                  <!-- <router-link to="/activities/joinActivity">加入活动</router-link> -->
                </td>
              </tr>
              <tr>
                <td>14.30~15.30</td>
                <td>6人</td>
                <td>满人</td>
                <td>100</td>
                <td>
                    <el-button @click="addBlue" type="primary">加入蓝队</el-button>
                    <el-button @click="addRed"  type="danger">加入红队</el-button>
                  <!-- <router-link to="/activities/joinActivity">加入活动</router-link> -->
                </td>
              </tr>
            </tbody>
          </table>
        </el-tab-pane>
        <el-tab-pane label="11月20日" name="second">
          <table class="session-table">
            <thead>
              <tr>
                <th>活动时间</th>
                <th>人数限制</th>
                <th>人员情况</th>
                <th>价格(元/人)</th>
                <th>加入活动</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10.30~11.30</td>
                <td>8人</td>
                <td>差3人</td>
                <td>100</td>
                <td>
                    <el-button @click="addBlue" type="primary">加入蓝队</el-button>
                    <el-button @click="addRed" type="danger">加入红队</el-button>
                  <!-- <router-link to="/activities/joinActivity">加入活动</router-link> -->
                </td>
              </tr>
              <tr>
                <td>12.00~13.00</td>
                <td>8人</td>
                <td>满人</td>
                <td>100</td>
                <td>
                    <el-button @click="addBlue" type="primary">加入蓝队</el-button>
                    <el-button @click="addRed"  type="danger">加入红队</el-button>
                  <!-- <router-link to="/activities/joinActivity">加入活动</router-link> -->
                </td>
              </tr>
              <tr>
                <td>13.30~14.30</td>
                <td>8人</td>
                <td>差4人</td>
                <td>150</td>
                <td>
                    <el-button @click="addBlue" type="primary">加入蓝队</el-button>
                    <el-button @click="addRed"  type="danger">加入红队</el-button>
                  <!-- <router-link to="/activities/joinActivity">加入活动</router-link> -->
                </td>
              </tr>
              <tr>
                <td>14.30~15.30</td>
                <td>6人</td>
                <td>差1人</td>
                <td>150</td>
                <td>
                    <el-button @click="addBlue" type="primary">加入蓝队</el-button>
                    <el-button @click="addRed"  type="danger">加入红队</el-button>
                  <!-- <router-link to="/activities/joinActivity">加入活动</router-link> -->
                </td>
              </tr>
            </tbody>
          </table>
        </el-tab-pane>
        <el-tab-pane label="11月21日" name="third">
          <table class="session-table">
            <thead>
              <tr>
                <th>活动时间</th>
                <th>人数限制</th>
                <th>人员情况</th>
                <th>价格(元/人)</th>
                <th>加入活动</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10.30~11.30</td>
                <td>6人</td>
                <td>满人</td>
                <td>100</td>
                <td>
                    <el-button @click="addBlue" type="primary">加入蓝队</el-button>
                    <el-button @click="addRed"  type="danger">加入红队</el-button>
                  <!-- <router-link to="/activities/joinActivity">加入活动</router-link> -->
                </td>
              </tr>
              <tr>
                <td>12.00~13.00</td>
                <td>6人</td>
                <td>满人</td>
                <td>100</td>
                <td>
                    <el-button @click="addBlue" type="primary">加入蓝队</el-button>
                    <el-button @click="addRed"  type="danger">加入红队</el-button>
                  <!-- <router-link to="/activities/joinActivity">加入活动</router-link> -->
                </td>
              </tr>
              <tr>
                <td>13.30~14.30</td>
                <td>6人</td>
                <td>满人</td>
                <td>100</td>
                <td>
                    <el-button @click="addBlue" type="primary">加入蓝队</el-button>
                    <el-button @click="addRed"  type="danger">加入红队</el-button>
                  <!-- <router-link to="/activities/joinActivity">加入活动</router-link> -->
                </td>
              </tr>
              <tr>
                <td>14.30~15.30</td>
                <td>6人</td>
                <td>满人</td>
                <td>100</td>
                <td>
                    <el-button @click="addBlue" type="primary">加入蓝队</el-button>
                    <el-button @click="addRed"  type="danger">加入红队</el-button>
                  <!-- <router-link to="/activities/joinActivity">加入活动</router-link> -->
                </td>
              </tr>
            </tbody>
          </table>
        </el-tab-pane>
        <el-tab-pane label="11月22日" name="fourth">
          <table class="session-table">
            <thead>
              <tr>
                <th>活动时间</th>
                <th>人数限制</th>
                <th>人员情况</th>
                <th>价格(元/人)</th>
                <th>加入活动</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10.30~11.30</td>
                <td>6人</td>
                <td>满人</td>
                <td>200</td>
                <td>
                    <el-button @click="addBlue" type="primary">加入蓝队</el-button>
                    <el-button @click="addRed"  type="danger">加入红队</el-button>
                  <!-- <router-link to="/activities/joinActivity">加入活动</router-link> -->
                </td>
              </tr>
              <tr>
                <td>12.00~13.00</td>
                <td>8人</td>
                <td>满人</td>
                <td>200</td>
                <td>
                    <el-button @click="addBlue" type="primary">加入蓝队</el-button>
                    <el-button @click="addRed"  type="danger">加入红队</el-button>
                  <!-- <router-link to="/activities/joinActivity">加入活动</router-link> -->
                </td>
              </tr>
              <tr>
                <td>13.30~14.30</td>
                <td>8人</td>
                <td>满人</td>
                <td>200</td>
                <td>
                    <el-button @click="addBlue" type="primary">加入蓝队</el-button>
                    <el-button @click="addRed"  type="danger">加入红队</el-button>
                  <!-- <router-link to="/activities/joinActivity">加入活动</router-link> -->
                </td>
              </tr>
              <tr>
                <td>14.30~15.30</td>
                <td>6人</td>
                <td>差5人</td>
                <td>200</td>
                <td>
                    <el-button @click="addBlue" type="primary">加入蓝队</el-button>
                    <el-button @click="addRed"  type="danger">加入红队</el-button>
                  <!-- <router-link to="/activities/joinActivity">加入活动</router-link> -->
                </td>
              </tr>
            </tbody>
          </table>
        </el-tab-pane>
      </el-tabs>
    </div>
    <!-- <div class="join">
            <el-button type="primary" @click="join">加入活动</el-button>
    </div>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      activityDetail: {
        id: 3,
        gym_id: 3,
        theme: "合作类",
        gym: "东方绿舟培训基地",
        name: "古镇定向寻宝",
        pic_address: require("../../assets/img/activity3.jpg"),
        begin_time: "2019-11-20",
        end_time: "2019-11-21",
        description:
          "利用目的地的风土民情，以及周边的独特地形地貌，结合活动的主要目标，设计以特定主题作为主线的经典文化定向活动，是上海勇拓特色主题课程。一方面强化本次活动的主题，使之更加深入人心，同时在活动的过程中进一步熔炼团队精神，另一方面也让员工通过另外一种独特的方式了解目的地的一些名胜古迹，风土民情，即达到了融合团队的目的，又不留痕迹，形式上不失活泼，跳出了传统拓展训练的框架，以全新的方式向人们展示企业员工的风采！",
        status: 0 //未开始
      },
      activeName: "first",
    };
  },
  methods: {
    // 假数据
    addBlue(){
      this.$message.success('加入蓝队成功')
    },
    // 假数据
      addRed(){
      this.$message.success('加入红队成功')
    },
    join() {
      this.$router.push("/activities/joinActivity");
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style lang="less">
.session {
  .el-tabs__item {
    color: #fff;
  }
}
.session-table {
  width: 100%;
  background-color: #3c79ac8c;
  border: 1px solid #2149698c;
  border-collapse: collapse;
  th,
  td {
    // padding: 15px 0;
    height: 55px;
    text-align: center;
    border: 2px solid #2149698c;
    a {
    //   text-decoration: underline;
      display: inline-block;
      background-color: #73bffdb2;
      border-radius: 5px;
      padding: 7px 15px;
      border: 1px solid #2149698c;
      color: #fff;

      &:hover {
          background-color: #73bffd54;
      }
    }
  }
  th {
    background-color: #2c67978c;
  }
  tr:nth-child(even) {
    background-color: #2c67978c;
  }
  tbody tr:hover {
    background-color: #2c67978c;
  }
}
</style>
<style scoped>
.session {
  margin-top: 20px;
  background: rgba(200, 200, 200, 0.2);
  padding: 20px;
}

.activityDetail {
  width: 90%;
  margin: 50px auto;
  background: rgba(0, 0, 0, 0.4);
  padding: 50px;
  color: #fff;
}

.activityDetail .title {
  text-align: center;
  font-size: 24px;
}

.activityDetail .parameter span {
  display: inline-block;
  width: 32.3%;
  height: 30px;
  line-height: 30px;
  box-sizing: border-box;
  text-align: center;
  margin-top: 30px;
}

.activityDetail .describe {
  margin-top: 30px;
}

.activityDetail .join {
  text-align: center;
  margin-top: 20px;
}
</style>