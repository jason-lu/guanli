<template>
  <div class="venuePage clearfix" @click="fadeFlowTop">
    <div class="map">
      <div class="mapTitle clearfix">
        <h3>你的位置<i class="el-icon-location"></i></h3>

        <div class="searchVenue clearfix">
          <el-input placeholder="请输入场馆名称..." @keyup.enter.native="queryVenue" v-model="name" class="input-with-select">
            <el-button slot="append" @click="queryVenue" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </div>
      <img @click.stop="showFlowTop" src="../../assets/img/points.png" />
    </div>
    <div class="venue">
      <div class="nearVenueList venueList">
        <h3>附近场馆</h3>
        <ul>
          <li @click.stop="showFlowTop">五棵松拓展基地<span>0.5km</span></li>
          <li @click.stop="showFlowTop">东方绿舟拓展基地<span>1.2km</span></li>
          <li @click.stop="showFlowTop">东方绿舟拓展基地<span>1.5km</span></li>
          <li @click.stop="showFlowTop">五棵松拓展基地<span>2.4km</span></li>
        </ul>
      </div>
      <div class="hotVenueList venueList">
        <h3 class="hot">热门场馆推荐 <router-link to="/venue/venuecontainer?name=">全部</router-link>
        </h3>
        <ul>
          <li @click.stop="showFlowTop">太阳岛拓展培训基地</li>
          <li @click.stop="showFlowTop">五棵松拓展基地</li>
          <li @click.stop="showFlowTop">太阳岛拓展培训基地</li>
          <li @click.stop="showFlowTop">安吉中南百草园景区</li>
        </ul>
      </div>
    </div>
    <!-- 场馆详细信息弹窗 -->
    <VenueItem :isShowFlowTop = isShowFlowTop></VenueItem>

    <!-- <div
      class="flow-top"
      @click="showDetail=false"
    >
      <div
        class="venueContainer "
        v-show="showDetail"
      >
        <div class="baseMessage">
          <div class="left">
            <img
              src="../assets/img/img1.jpg"
              alt=""
            >
          </div>
          <div class="right">
            <div class="name">名称：五棵松拓展基地</div>
            <div class="star">
              <el-rate
                v-model="value5"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}"
              >
              </el-rate>
            </div>
            <div class="introduction">
              场馆简介：五棵松拓展基地为学校、企业、事业机关和民间爱好军事活动人士的军事训练、团队建设
              户外拓展、实战仿真演练等活动提供培训和解决方案。
              基地设备设施齐全，场地大，环境好，教员军事素质过硬，拥有丰富的军事化训练经验。
            </div>
            <div>
              地址：北京市海淀区复兴路69号五棵松体育馆
            </div>
            <div>
              联系方式：13801012020 张教练
            </div>
          </div>
        </div>
        <div class="detailMessage">
          <div class="title">场馆教官</div>
          <ul class="personMsg">
            <li>
              <img
                src="../assets/img/img2.jpg"
                alt=""
              >
              <div class="name">杨教官</div>
            </li>
            <li>
              <img
                src="../assets/img/img2.jpg"
                alt=""
              >
              <div class="name">张教官</div>
            </li>
            <li>
              <img
                src="../assets/img/img2.jpg"
                alt=""
              >
              <div class="name">李教官</div>
            </li>
          </ul>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
  import VenueItem from './VenueItem.vue'
  export default {
    components: {
      VenueItem
    },
    created() {
      // axios.get("http://47.104.128.89:8002/gym/getAllGym")
      // .then(res =>{
      //     this.venueList = res.data;
      // })
    },
    data() {
      return {
        value5: 5,
        isShowFlowTop: false,
        name: '' //搜索表单的v-model
      }
    },
    methods: {
      showFlowTop() {
        this.isShowFlowTop = !this.isShowFlowTop
      },
      fadeFlowTop() {
        this.isShowFlowTop = false
      },
      queryVenue() {
        this.$router.push(`/venue/venuecontainer?name=${this.name}`)
      }
    }
  }
</script>

<style lang="less" scoped>
  .venuePage {
    padding: 50px 0 0 50px;
    position: relative;
    width: 100%;
    min-width: 1055px;
    box-sizing: border-box;

    h3 {
      height: 55px;
      line-height: 55px;
      color: #1bb8e0;
      text-shadow: 0px 0px 5px #20687a;
    }

    .map {
      float: left;
      width: 63%;

      img {
        width: 100%;
      }

      .mapTitle {
        padding-left: 20px;
        color: #1bb8e0;
        background: rgba(0, 0, 0, 0.4);

        h3 {
          float: left;
        }

        .searchVenue {
          float: right;
          display: flex;
          align-items: center;
          height: 55px;

          .input-with-select {
            margin-right: 10px;
          }
        }
      }

      .el-icon-location {
        margin-left: 8px;
      }
    }

    .venue {
      float: left;
      width: 30%;
      // background-color: pink;
      padding-left: 4%;
      box-sizing: border-box;
      color: #fff;

      .venueList {
        margin-bottom: 40px;
        width: 100%;
        background: rgba(0, 0, 0, 0.4);
        padding: 0 20px;
        box-sizing: border-box;

        // border: 1px solid red;
        h3.hot {
          position: relative;

          &::after {
            content: "";
            height: 60px;
            width: 60px;
            position: absolute;
            left: 104px;
            top: -3px;
            background: url(../../assets/img/hot.png) center center no-repeat;
            background-size: 16px 20px;
          }

          a {
            font-weight: 400;
            float: right;
            text-decoration: underline;
            font-size: 16px;
            color: #1bb8e0;
            text-shadow: none;
          }
        }

        ul {
          li {
            height: 45px;
            line-height: 45px;
            border-bottom: 1px solid #052e5c;
            position: relative;
            padding-left: 35px;
            cursor: pointer;

            span {
              float: right;
              color: rgb(158, 158, 158);
              font-size: 14px;
            }

            &:hover {
              color: #1bb8e0;
            }

            &::before {
              content: "";
              position: absolute;
              left: -23px;
              bottom: -8px;
              width: 60px;
              height: 60px;
              background: url(../../assets/img/more.png) center center;
              background-size: 45px 45px;
            }
          }
        }
      }
    }

    
  }

  // .venuePage .venueContainer .baseMessage {
  //   overflow: hidden;
  // }

  // .venuePage .venueContainer .baseMessage .left,
  // .venuePage .venueContainer .baseMessage .right {
  //   float: left;
  //   color: #fff;
  // }

  // .venuePage .venueContainer .baseMessage .left {
  //   width: 400px;
  //   height: 250px;
  //   overflow: hidden;
  // }

  // .venuePage .venueContainer .baseMessage .left img {
  //   width: 100%;
  // }

  // .venuePage .venueContainer .baseMessage .right {
  //   margin-left: 50px;
  //   width: 500px;
  // }

  // .venuePage .venueContainer .baseMessage .right .name {
  //   height: 50px;
  //   line-height: 50px;
  //   font-size: 22px;
  // }

  // .venuePage .venueContainer .baseMessage .right .star {
  //   margin-bottom: 30px;
  // }

  // .venuePage .venueContainer .baseMessage .right .introduction {
  //   margin-bottom: 10px;
  // }

  // .venuePage .venueContainer .detailMessage {
  //   border-top: 1px solid #fff;
  //   margin-top: 20px;
  // }

  // .venuePage .venueContainer .detailMessage .title {
  //   text-align: center;
  //   color: #fff;
  //   font-size: 22px;
  //   height: 30px;
  //   line-height: 30px;
  //   margin-top: 20px;
  // }

  // .venuePage .venueContainer .detailMessage .personMsg {
  //   display: flex;
  //   padding: 0;
  //   justify-content: space-between;
  //   flex-wrap: wrap;
  // }

  // .venuePage .venueContainer .detailMessage .personMsg li {
  //   width: 340px;
  //   margin: 20px;
  //   height: auto;
  //   list-style: none;
  //   background: #fff;
  // }

  // .venuePage .venueContainer .detailMessage .personMsg li img {
  //   width: 100%;
  // }

  // .venuePage .venueContainer .detailMessage .personMsg li .name {
  //   text-align: center;
  //   line-height: 30px;
  // }

  // .flow-top {
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   background-color: rgba(0, 0, 0, 0.6);
  //   margin: auto;
  //   width: 70%;
  // }
</style>