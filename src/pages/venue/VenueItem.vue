<template>
  <!-- 场馆详细信息弹窗 -->
  <transition
    enter-active-class="animated bounceInDown"
    leave-active-class="animated bounceOutRight"
  >
    <div
      v-show="isShowFlowTop"
      class="flow-top"
    >
      <div class="venueDetail clearfix">
        <div class="venueImg"><img
            src="../../assets/img/img1.jpg"
            alt=""
          ></div>
        <div class="venueContent">
          <div class="title">五棵松拓展基地</div>
          <el-rate
            class="star"
            v-model="value5"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}"
          >
          </el-rate>
          <p class="address"><i class="el-icon-location-outline"></i>地址：北京市海淀区复兴路69号五棵松体育馆</p>

          <div class="connectInfo clearfix">
            <p class="desc">五棵松拓展基地为学校、企业、事业机关和民间爱好军事活动人士的军事训练、团队建设
              户外拓展、实战仿真演练等活动提供培训和解决方案。基地设备设施齐全，场地大，环境好，教员军事素质过硬，拥有丰富的军事化训练经验。</p>
            <p class="contact">联系方式：13801012020 张教练</p>
          </div>
        </div>
        <router-link
          to="/activities?gymId=1"
          class="allActivity btn"
        ><span>>> </span>所有活动</router-link>
      </div>
      <div class="gun clearfix">
        <div class="gunTitle">场馆装备展示</div>
        <div class="gunItem">
          <ul>
            <li>
              <img
                src="../../assets/img/gun1.jpg"
                alt=""
              >
              <div class="name">M4卡宾枪</div>
              <div class="theme">自动步枪 | 二战后 | <img
                  src="../../assets/img/america_s.png"
                  alt=""
                >美国</div>
            </li>
            <li>
              <img
                src="../../assets/img/gun2.jpg"
                alt=""
              >
              <div class="name">81式自动步枪</div>
              <div class="theme">自动步枪 | 二战后 | <img
                  src="../../assets/img/china_s.png"
                  alt=""
                >美国</div>
            </li>
            <li>
              <img
                src="../../assets/img/gun3.jpg"
                alt=""
              >
              <div class="name">74式主战坦克</div>
              <div class="theme">主战坦克 | 二战后 | <img
                  src="../../assets/img/japan_s.png"
                  alt=""
                >日本</div>
            </li>
            <li>
              <img
                src="../../assets/img/gun4.jpg"
                alt=""
              >
              <div class="name">BM-30龙卷风式</div>
              <div class="theme">火箭炮 | 二战后 | <img
                  src="../../assets/img/russia_s.png"
                  alt=""
                >苏/俄</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="instructors clearfix">
        <div class="instructorsImg"><img
            src="../../assets/img/img2.jpg"
            alt=""
          ></div>
        <div class="instructorsContent">
          <div class="title">场馆明星教官：陈银朋</div>
          <p class="desc">擅长于摔擒和反恐战术</p>
          <p class="desc">心理素质过硬，为人沉稳正直，在多次的演习，抢险救灾和处突维稳中表现优异，受到上级领导的嘉奖并荣立三等功一次。做事沉着冷静，目标专一，适应环境能力强，被学员称为格斗专家。具备帮助学员快速提升的综合能力，能够使学员更加积极热情、坚强自信、更有影响力。</p>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  props: ['isShowFlowTop'],
  data() {
    return {
      value5: 4
    }
  }
}
</script>
<style lang="less" scoped>
.flow-top {
  width: 65vw;
  min-width: 830px;
  // min-height: 520px;
  height: 90vh;
  background-color: rgba(0, 0, 0, 0.85);
  position: fixed;
  left: 17%;
  top: 10%;
  overflow: auto;
  padding: 50px 50px 0px;
  box-sizing: border-box;
  color: #fff;

  &::-webkit-scrollbar {
    display: none;
  }

  .venueDetail,
  .instructors,
  .gun {
    border-bottom: 1px dotted #bbb;
    padding-bottom: 20px;
    position: relative;

    .allActivity {
      position: absolute;
      right: 20px;
      top: 10px;
      span {
        font-family: "宋体";
      }
    }
    .venueImg {
      width: 35%;
      float: left;

      img {
        width: 100%;
      }
    }
    .instructorsImg {
      margin-top: 30px;
      width: 35%;
      float: right;

      img {
        width: 100%;
      }
    }
    .venueContent {
      float: left;
      width: 65%;
      padding-left: 50px;
      box-sizing: border-box;

      .title {
        font-size: 20px;
      }

      .address {
        .el-icon-place {
          margin-right: 5px;
        }

        margin-top: 15px;
      }
    }
    .instructorsContent {
      float: left;
      width: 65%;
      padding-right: 50px;
      box-sizing: border-box;
      margin-top: 30px;

      .title {
        font-size: 20px;
      }

      .desc {
        margin-top: 15px;
      }
    }
    .connectInfo {
      margin-top: 30px;
      p {
        margin-bottom: 15px;
        line-height: 22px;
      }
    }
    .gunTitle {
      margin-top: 10px;
      margin-bottom: 10px;
      font-size: 20px;
    }
    .gunItem {
      ul {
        li {
          padding: 20px 10px;
          margin-right: 1%;
          float: left;
          background-color: rgba(0, 0, 0, 0.7);
          width: 21.5%;
          &:last-child {
            margin-right: 0;
          }
          & > img {
            width: 100%;
          }
          .name {
            height: 26px;
            line-height: 26px;
          }
          .theme {
            color: #999;
            font-size: 12px;
            height: 26px;
            line-height: 26px;
            img {
              vertical-align: middle;
            }
          }
        }
      }
    }
  }
  .instructors {
    border: none;
  }
}
</style>