<template>
  <div class="realtime">
    <div class="realtime-title">实时战况</div>
    <!-- 直播视频及比分模块 -->
    <div class="live-broadcast">
      <div class="container-video">
        <video
          autoplay
          controls
        >
          <source
            src="../../assets/video/a.mp4"
            type="video/mp4"
          >
          <source
            src="movie.ogg"
            type="video/ogg"
          >
          您的浏览器不支持 HTML5 video 标签。
        </video>
      </div>
      <div class="score">
        <div class="box">
          <div class="item">
            <div class="blue-title">
              蓝队
            </div>
            <p>伤亡：{{injureBlue}}&nbsp;&nbsp;&nbsp; 积分： 0</p>
          </div>
          <div class="item">
            <img
              src="../../assets/img/vs.png"
              alt=""
            >
          </div>
          <div class="item">
            <div class="red-title">
              红队
            </div>
            <p>伤亡：{{injureRed}}&nbsp;&nbsp;&nbsp; 积分： 0</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 蓝队数据模块 -->
    <div id="container-left">
      <div id="blue-title">
        蓝队数据
      </div>
      <div id="blue-content">
        <div class="blueChart">
          <EchartVue
            id="mychart"
            :options="optionsBlue"
            width="100%"
          ></EchartVue>
        </div>
        <table class="team-table">
          <thead>
            <tr>
              <th>玩家</th>
              <th>枪支</th>
              <th>武器状态</th>
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
    </div>
    <!-- 红队数据模块 -->
    <div id="container-right">
      <div id="red-title">
        红队数据
      </div>
      <div id="red-content">
        <div class="redChart">
          <EchartVue
            id="mychart2"
            :options="optionsRed"
            width="100%"
          ></EchartVue>
        </div>
        <table class="team-table">
          <thead>
            <tr>
              <th>玩家</th>
              <th>枪支</th>
              <th>武器状态</th>
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
      // ‘伤亡’数
      injureBlue: 0,
      injureRed: 0,
      // 蓝队柱状图数据
      optionsBlue: {
        // 修改柱形图背景颜色为渐变色
        color: new this.$echarts.graphic.LinearGradient(
          1, 1, 1, 0,
          [
            { offset: 0, color: 'rgba(21, 96, 131, 0.8)' },
            { offset: 1, color: 'rgba(120, 229, 248, 0.808)' }
          ]
        ),
        title: {
          text: '弹药剩余统计',
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
          text: "剩余数量",
          name: '剩余数量',
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
      // 红队柱状图数据
      optionsRed: {
        // 修改柱形图背景颜色为渐变色
        color: new this.$echarts.graphic.LinearGradient(
          1, 1, 1, 0,
          [
            { offset: 0, color: 'rgba(177, 33, 20, 0.8)' },
            { offset: 1, color: 'rgba(226, 148, 134, 0.8)' }
          ]
        ),
        title: {
          text: '弹药剩余统计',
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
          text: "剩余数量",
          name: '剩余数量',
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
  min-width: 1055px;
}
.live-broadcast {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  background-color: rgba(0, 0, 0, 0.5);
  height: 75vh;
  min-width: 1055px;
}

.container-video {
  height: 100%;
  float: left;
  padding-left: 20px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  video {
    height: 70vh;
    width: 60vw;
  min-width: 760px;
  }
}

.score {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  .item {
    color: #fff;
    font-size: 26px;
    margin: 60px 0;
    text-align: center;
    .red-title,
    .blue-title {
      font-size: 30px;
      text-align: center;
      text-shadow: 0px 0px 4px rgb(175, 32, 32);
      color: rgba(241, 94, 94, 0.808);
      font-size: 1.5rem;
      margin: 10px 0;
    }
    .blue-title {
      text-shadow: 0px 0px 4px rgb(35, 78, 194);
      color: rgba(120, 229, 248, 0.808);
    }
    p {
      font-size: 1.2rem;
    }
    img {
      width: 120px;
    }
  }
}
#container-right {
  height: 100%;
  width: 47%;
  // background-color: #5032ff50;
  float: right;
  padding-right: 20px;
  box-sizing: border-box;
}
#container-left {
  height: 100%;
  width: 47%;
  // background-color: #5032ff50;
  float: left;
  padding-left: 20px;
  box-sizing: border-box;
}
.redChart,
.blueChart {
  margin-top: 20px;
  width: 500px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 10px;
  overflow: hidden;
}
#blue-title,
#red-title {
  text-align: center;
  font-size: 1.5rem;
  color: rgba(241, 94, 94, 0.808);
  text-shadow: 0px 0px 2px rgb(133, 6, 6);
  font-weight: 700;
  margin-top: 20px;
  margin-right: 20px;
}

#blue-title {
  text-shadow: 0px 0px 4px rgb(35, 78, 194);
  color: rgba(120, 229, 248, 0.808);
  margin-right: 0px;
  margin-left: 20px;
}
#blue-content,
#red-content {
  margin-top: 20px;
  text-align: center;
  font-size: 1.2rem;
  margin-right: 20px;
  margin-bottom: 20px;
  position: relative;
  color: rgba(255, 255, 255, 1);
  text-shadow: 0px 0px 5px rgb(0, 0, 0);
}

#red-content {
  margin-left: 20px;
  margin-right: 0px;
  // color: #222;
  // text-shadow: 0px 0px 5px #ccc;
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