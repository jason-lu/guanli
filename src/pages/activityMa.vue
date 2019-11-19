<template>
  <div class="actContainer">
    <!-- 页面标题 -->
    <div class="activity-title">活动列表</div>

    <!-- 页面内容 -->
    <div class="activity-container">
      <!-- 按钮 -->
      <div class="topBtn">
        <!-- “新增活动”按钮 -->
        <button class="addBtn btn" @click="showEditDialog">新增活动</button>
        <!-- “搜索活动”按钮 -->
        <el-input placeholder="请输入活动主题..." v-model="input3" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <!-- 列表展示部分 -->
      <ul class="activity-list">
        <li class="box clearfix" v-for="item in activityList" :key="item.gym_id">
          <!-- 活动图片 -->
          <div class="preview">
            <img :src="item.pic_address" />
          </div>
          <!-- 活动内容 -->
          <div class="content">
            <div class="theme">{{item.theme}}</div>
            <div class="title">{{item.name}}</div>
            <p class="desc ellipsis-2">活动描述：{{item.description}}</p>
            <div class="time">
              活动时间：
              <span>{{item.begin_time}}</span>至
              <span>{{item.end_time}}</span>
            </div>
            <div class="state">
              活动状态：
              <span class="notstarted" v-if="item.status == 0">未开始</span>
              <span class="underWay" v-else-if="item.status == 1">进行中</span>
              <span class="finished" v-else>已结束</span>
            </div>
            <!-- "删除活动"按钮 -->
            <button class="delBtn btn" @click="delAct">
              <i class="el-icon-delete icon"></i>删除
            </button>
            <!-- "编辑活动"按钮 -->
            <button class="modifyBtn btn" @click="showEditDialog">
              <i class="el-icon-edit icon"></i>编辑
            </button>
          </div>
        </li>
      </ul>
      <!-- 分页器 -->
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

    <!-- 点击“新增/编辑活动”弹出的复用模态框 -->
    <el-dialog title="提示" :visible.sync="editDialogVisible" width="30%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="活动场馆">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动主题">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="活动标题">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="活动描述">
          <el-input type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.date1"
              style="width: 100%;"
            ></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.date2"
              style="width: 100%;"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="活动状态">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动图片">
          <!-- 添加上传图片 -->
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="edit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value5: 3.7,
      // 模拟数据
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
          pic_address: require("../assets/img/activity1.jpg"),
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
        }
      ],
      editDialogVisible: false,
      delDialogVisible: false,
      form: {},
      imageUrl: ""
    };
  },
  methods: {
    showEditDialog() {
      this.editDialogVisible = true;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    // showDelDialog() {
    //   this.delDialogVisible = true;
    // },
    async delAct() {
      try {
        await this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        });
        this.$message({
          type: "success",
          message: "删除成功!"
        });
      } catch {
        this.$message({
          type: "info",
          message: "已取消删除"
        });
      }
    }
  }
};
</script>



<style lang="less" scoped>
// 页面内容主盒子
.activity-container .activity-list .box .content {
  .theme {
    font-size: 20px;
  }

  .desc {
    margin: 20px 0;
  }

  .state {
    .notstarted {
      color: #33a1c9;
    }
    .finished {
      color: rgb(207, 106, 69);
    }
    .underWay {
      color: #03a89e;
    }
  }
}
</style>