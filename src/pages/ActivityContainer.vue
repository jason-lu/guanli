<template>
  <div class="actContainer">
    <!-- 全部活动 -->
    <div class="activity-title">全部活动</div>
    <div class="activity-container">
      <!-- 按钮 -->
      <div class="topBtn">
        <el-select class="theme-select" v-model="value" placeholder="请选择分类">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
          ></el-option>
        </el-select> 
        <!-- “搜索活动”按钮 -->
        <el-input placeholder="请输入活动名称..." v-model="input3" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <ul class="activity-list">
        <li class="box" v-for="(item, index) in activityList" :key="index">
          <div class="preview">
            <img :src="item.pic_address" />
          </div>
          <div class="content">
            <div class="name">{{item.name}}</div>
            <div class="theme">活动类型：{{item.theme}}</div>
            <div class="desc ellipsis-3">活动描述：{{item.description}}</div>
            <router-link id="detail" to="/activities/activityListDetail">
              <span>>></span> 查看详情
            </router-link>
          </div>
        </li>
      </ul>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[1, 2, 3, 5]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="5"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value5: 3.7,
      options: [{
          value: '选项1',
          label: '对抗类'
        }, {
          value: '选项2',
          label: '合作类'
        }, {
          value: '选项3',
          label: '培训类'
        }],
        value: '',
      activityList: [
        {
          id: 1,
          gym_id: 1,
          theme: "合作类",
          name: "舞动中华鼓动随心",
          pic_address: require("../assets/img/activity1.jpg"),
          begin_time: "2019-11-12",
          end_time: "2019-11-18",
          description:
            "中国鼓不只是聚力团队的一种活动形式，更是我们中国传统文化的一种精神的传承与发扬！中国鼓助长中华民族志气，彰显中华民族威风，满足人民一定的精神文化生活需求。弘扬中华民族鼓文化所蕴含的团结协作、拼搏奋进、自强不息的中华民族精神，对于提高中华民族素质，增强民族自信心、自豪感，丰富民族文化都有十分重要而深远的意义。上海勇拓体验根据多年团建行业经验，集合中国鼓文化的多元性特和操作形式，特推出大型主题活动——中国鼓。本项目一经推出，受到各合作企业的一致好评，既凝聚了团队、提示了士气，同时也是对我们中国文化和中国鼓精神的一种传承与发扬。",
          status: 1 //进行中
        },
        {
          id: 2,
          gym_id: 2,
          theme: "对抗类",
          name: "优棒团队",
          pic_address: require("../assets/img/activity2.jpg"),
          begin_time: "2019-11-12",
          end_time: "2019-11-13",
          description:
            "中国企业的发展，经过了一段相当长时间的原始积累和个人英雄式的管理，已经进入到依靠团队和系统管理出效益的阶段。很多企业发展的瓶颈出现在人力资源发掘和管理上。如何在较短的时间内建设起一支强大的团队，是目前企业的共同诉求。上海西点卓越军团军事",
          status: 2 //结束
        },
        {
          id: 3,
          gym_id: 3,
          theme: "合作类",
          name: "古镇定向寻宝",
          pic_address: require("../assets/img/activity3.jpg"),
          begin_time: "2019-11-20",
          end_time: "2019-11-21",
          description:
            "利用目的地的风土民情，以及周边的独特地形地貌，结合活动的主要目标，设计以特定主题作为主线的经典文化定向活动，是上海勇拓特色主题课程。一方面强化本次活动的主题，使之更加深入人心，同时在活动的过程中进一步熔炼团队精神，另一方面也让员工通过另外一种独特的方式了解目的地的一些名胜古迹，风土民情，即达到了融合团队的目的，又不留痕迹，形式上不失活泼，跳出了传统拓展训练的框架，以全新的方式向人们展示企业员工的风采！",
          status: 0 //未开始
        },
        {
          id: 4,
          gym_id: 4,
          theme: "训练类",
          name: "鼓舞飞扬",
          pic_address: require("../assets/img/activity4.jpg"),
          begin_time: "2019-11-20",
          end_time: "2019-11-21",
          description:
            "活力、热情、实力、激情与快乐是本次活动的特征，因此我们特别为本次参训人员制定了大型团队活动---鼓舞飞扬，让本次参加训练的员工可以建立一个团队、一个声音、知行合一、合而不同的团队合作精神，并且以主人翁的心态推动和完成本职工作。在此基础上，有助于打破人与人的隔阂，更加高效的协调工作，以顺利完成在工作中的合作目标。",
          status: 0 //未开始
        },
        {
          id: 4,
          gym_id: 4,
          theme: "对抗类",
          name: "七剑闯同里",
          pic_address: require("../assets/img/activity2.jpg"),
          begin_time: "2019-11-20",
          end_time: "2019-11-21",
          description:
            "本次《七剑闯同里》古镇定向活动，是上海勇拓体验结合同里古镇江南特色和线下定向寻宝的经验而研发的线上app团建活动（手机扫描二维码进入活动），是目前火遍全国各大城市的网红团建方式，深受年轻人喜欢。不仅可以学员快速融入团队，更好的感受团队协作的重要性，更可以让学员快速融入企业文化，各部门间配合更加默契。",
          status: 0 //未开始
        },
        {
          id: 4,
          gym_id: 4,
          theme: "对抗类",
          name: "龙舟竟渡",
          pic_address: require("../assets/img/base6.png"),
          begin_time: "2019-11-20",
          end_time: "2019-11-28",
          description:
            "龙舟运动起源于中国，有着悠久的历史文化底蕴，是中国民间传统水上体育娱乐项目之一。赛龙舟不仅是一种体育娱乐活动，更体现出我国传统的悠久历史文化继承性和人们的集体主义精神。在企业内部开展龙舟运动，不仅能够吸引更多热爱、参与的人群，并且可以培养员工吃苦耐劳、坚忍不拔、克服困难、顽强拼搏、团结互助和力争上游的优良品德，还可以增强组织纪律性和集体主义精神，是一项既有吸引力，又有教育意义的体育运动。",
          status: 0 //未开始
        }
      ]
    };
  }
};

// [
//     { title: '枪战训练1', type: '枪战训练' },
//     { title: "枪战对抗1", type: '枪战训练' },
//     { title: "枪战训练2", type: '枪战对抗' },
//     { title: "枪战对抗2", type: '枪战对抗' },
//     { title: '枪战训练1', type: '枪战训练' },
//     { title: "枪战对抗1", type: '枪战训练' },

//             ]
</script>

<style lang="less" scoped>
.activity-container .input-with-select {
//   margin-right: 0px;
  margin-bottom: 20px;
}
.activity-container .activity-list {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  .box {
    float: left;
    min-width: 600px;
    width: 45%;
    height: 240px;

    .preview {
      top: 40%;
    }

    .content {
      position: relative;
      padding-right: 20px;
      height: 100%;
      .name {
        font-size: 20px;
        margin-bottom: 10px;
      }
      .theme {
          margin-bottom: 10px;
      }
      #detail {
        position: absolute;
        padding: 5px 15px;
        right: 25px;
        bottom: 50px;
        border: 1px solid #234764;
        border-radius: 5px;
        background-color: #51a9f18c;

        &:hover {
          background-color: #51a9f154;
        }

        span {
          font-family: "宋体";
        }
      }
    }
  }
}
</style>