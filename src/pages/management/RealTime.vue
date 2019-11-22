<template>
  <div
    class="realtime"
    style="width: 100%; height: 100%; position: relative;"
  >
    <!-- <video class="container-center" width="300" height="200" autoplay controls>
            <source src="../../assets/video/a.mp4" type="video/mp4">
            <source src="movie.ogg" type="video/ogg">
            您的浏览器不支持 HTML5 video 标签。
        </video> -->
    <div id="container-left">
      <div id="blue-title">
        蓝队
      </div>
      <div id="blue-content">
        <p>伤亡：{{injureBlue}}&nbsp;&nbsp;&nbsp; 积分： 0</p>
        <!-- <el-table :data="blueTeam" style="width: 80%">
                    <el-table-column prop="player" label="玩家" width="180">
                    </el-table-column>
                    <el-table-column width="180" prop="equipment" label="枪支">
                    </el-table-column>
                    <el-table-column prop="status" label="状态" width="180">
                    </el-table-column>
                    <el-table-column prop="remaining" label="弹药剩余">
                    </el-table-column>
                </el-table> -->

        <table class="team-table">
          <thead>
            <tr>
              <th>玩家</th>
              <th>枪支</th>
              <th>状态</th>
              <th>弹药剩余</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>队员1</td>
              <td>枪支1</td>
              <td>使用中</td>
              <td>12</td>
            </tr>
            <tr>
              <td>队员2</td>
              <td>枪支1</td>
              <td>使用中</td>
              <td>12</td>
            </tr>
            <tr>
              <td>队员3</td>
              <td>枪支1</td>
              <td>使用中</td>
              <td>12</td>
            </tr>
            <tr>
              <td>队员4</td>
              <td>枪支1</td>
              <td>使用中</td>
              <td>12</td>
            </tr>
            <tr>
              <td>队员5</td>
              <td>枪支1</td>
              <td>使用中</td>
              <td>12</td>
            </tr>
          </tbody>
        </table>
        <div class="clearfix">
          <EchartVue
            class="blueChart"
            id="mychart"
            :options="options"
            width="80%"
          ></EchartVue>
        </div>
      </div>

      <!-- <echart-vue height="300px" width="100%" :options="options" class="charts" id="mycharts-top"/> -->

    </div>
    <div id="container-right">
      <div id="red-title">
        红队
      </div>
      <div id="red-content">
        <p>伤亡：{{injureRed}}&nbsp;&nbsp;&nbsp; 积分： 0</p>
        <!-- <el-table :data="redTeam" style="width: 80%; position:absolute; right: 0px;">
                    <el-table-column prop="player" label="玩家" width="180">
                    </el-table-column>
                    <el-table-column width="180" prop="equipment" label="枪支">
                    </el-table-column>
                    <el-table-column prop="status" label="状态" width="180">
                    </el-table-column>
                    <el-table-column prop="remaining" label="弹药剩余">
                    </el-table-column>
                </el-table> -->

        <table class="team-table">
          <thead>
            <tr>
              <th>玩家</th>
              <th>枪支</th>
              <th>状态</th>
              <th>弹药剩余</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>队员1</td>
              <td>枪支1</td>
              <td>使用中</td>
              <td>12</td>
            </tr>
            <tr>
              <td>队员2</td>
              <td>枪支1</td>
              <td>使用中</td>
              <td>12</td>
            </tr>
            <tr>
              <td>队员3</td>
              <td>枪支1</td>
              <td>使用中</td>
              <td>12</td>
            </tr>
            <tr>
              <td>队员4</td>
              <td>枪支1</td>
              <td>使用中</td>
              <td>12</td>
            </tr>
            <tr>
              <td>队员5</td>
              <td>枪支1</td>
              <td>使用中</td>
              <td>12</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="clearfix">
        <EchartVue
          id="mychart2"
          class="redChart"
          :options="options2"
          width="80%"
        ></EchartVue>
      </div>

    </div>

  </div>
</template>

<script>
import EchartVue from '../util/EchartVue.vue';
export default {
  mounted() {
    //随机受伤人数
    this.id = setInterval(() => {
      this.injureBlue > 50 ? 50 : this.injureBlue += Math.floor(Math.random() * 10);
      this.injureRed > 50 ? 50 : this.injureRed += Math.floor(Math.random() * 10);
    }, 10000)
  },
  data() {
    return {
      injureBlue: 0,
      injureRed: 0,
      redTeam: [{
        player: "队员1",
        equipment: "枪支1",
        status: '使用中',
        remaining: "20"
      },
      {
        player: "队员2",
        equipment: "枪支2",
        status: '使用中',
        remaining: "21"
      },
      {
        player: "队员3",
        equipment: "枪支3",
        status: '使用中',
        remaining: "25"
      },
      {
        player: "队员4",
        equipment: "枪支4",
        status: '使用中',
        remaining: "23"
      },
      {
        player: "队员5",
        equipment: "枪支5",
        status: '使用中',
        remaining: "24"
      },
      ],
      options: {
        // 修改柱形图背景颜色为渐变色
        color: new this.$echarts.graphic.LinearGradient(
          1, 1, 1, 0,
          [
            { offset: 0, color: 'rgba(21, 96, 131, 0.8)' },
            { offset: 1, color: 'rgba(120, 229, 248, 0.808)' }
          ]
        ),
        title: {
          text: '蓝队数据统计',
          textStyle: {
            color: '#fff'
          },
          x: 'center',
          y: '10px',
        },
        backgroundColor: 'rgba(0,0,0,.3)',
        xAxis: {
          show: true,
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff',
            }
          },
          // 修改轴线颜色
          axisLine: {
            lineStyle: {
              color: '#fff',
            }
          },
          data: ['队员1', '队员2', '队员3', '队员4', '队员5']
        },
        yAxis: {
          text: "弹药剩余",
          name: '弹药剩余',
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff',
            }
          },
          nameTextStyle: {
            color: "#fff"
          },
          // 修改轴线颜色
          axisLine: {
            lineStyle: {
              color: '#fff',
            }
          }
        },
        series: [{
          name: '访问来源',
          type: 'bar',
          radius: '55%',
          roseType: 'angle',
          itemStyle: {
            // 阴影的大小
            shadowBlur: 200,
            // 阴影水平方向上的偏移
            shadowOffsetX: 0,
            // 阴影垂直方向上的偏移
            shadowOffsetY: 0,
            // 阴影颜色
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            emphasis: {
              shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
          },
          data: [4001, 3325, 3130, 2744, 2345]
        }]
      },
      options2: {
        // 修改柱形图背景颜色为渐变色
        color: new this.$echarts.graphic.LinearGradient(
          1, 1, 1, 0,
          [
            { offset: 0, color: 'rgba(177, 33, 20, 0.8)' },
            { offset: 1, color: 'rgba(226, 148, 134, 0.8)' }
          ]
        ),
        title: {
          text: '红队数据统计',
          textStyle: {
            color: '#fff'
          },
          x: 'center',
          y: '10px',
        },
        backgroundColor: 'rgba(0,0,0,.3)',
        xAxis: {
          show: true,
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff',
            }
          },
          // 修改轴线颜色
          axisLine: {
            lineStyle: {
              color: '#fff',
            }
          },
          data: ['队员1', '队员2', '队员3', '队员4', '队员5']
        },
        yAxis: {
          text: "弹药剩余",
          name: '弹药剩余',
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff',
            }
          },
          nameTextStyle: {
            color: "#fff"
          },
          // 修改轴线颜色
          axisLine: {
            lineStyle: {
              color: '#fff',
            }
          }
        },
        series: [{
          name: '访问来源',
          type: 'bar',
          radius: '55%',
          roseType: 'angle',
          itemStyle: {
            // 阴影的大小
            shadowBlur: 200,
            // 阴影水平方向上的偏移
            shadowOffsetX: 0,
            // 阴影垂直方向上的偏移
            shadowOffsetY: 0,
            // 阴影颜色
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            emphasis: {
              shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
          },
          data: [401, 133, 130, 244, 605]
        }]
      },
    }
  },

  beforeDestroy() {
    clearInterval(this.id);
  },
  components: {
    EchartVue,
  }
}
</script>

<style lang="less" scoped>
.realtime {
  //   background: url(../../assets/img/pk_bg22.png) center center;
  background-size: cover;
}
.container-center {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

#container-left {
  height: 100%;
  width: 50%;
  // background-color: #ff325050;
  float: left;
  position: relative;
}

#container-right {
  height: 100%;
  width: 50%;
  // background-color: #5032ff50;
  float: right;
  position: relative;
}

.redChart,
.blueChart {
  width: 75%;
  position: absolute;
  left: 50%;
  transform: translateX(-40%);
}
#blue-title,
#red-title {
  text-align: center;
  font-size: 1.5rem;
  color: rgba(241, 94, 94, 0.808);
  font-weight: 700;
  margin-top: 20px;
  margin-right: 20px;
}

#blue-content,
#red-content {
  margin-top: 20px;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  font-size: 1.2rem;
  margin-right: 20px;
  margin-bottom: 20px;
  position: relative;
}

#blue-content {
  text-shadow: 0px 0px 5px rgb(0, 0, 0);
}

#blue-title {
  color: rgba(120, 229, 248, 0.808);
  margin-right: 0px;
  margin-left: 20px;
}

#red-content {
  margin-left: 20px;
  margin-right: 0px;
  color: #333;
}

// 表格样式
.team-table {
  text-align: center;
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
  th,
  td {
    height: 50px;
    text-align: center;
  }
}
</style>