<template>
  <div class="actContainer">
    <!-- 页面标题 -->
    <div class="activity-title">活动列表</div>

    <!-- 页面内容 -->
    <div class="activity-container">
      <!-- “新增活动”按钮 -->
      <button class="addBtn btn" @click="showDialog">新增活动</button>
      <!-- 列表展示部分 -->
      <ul class="activity-list">
        <li class="box" v-for="item in activityList" :key="item.id">
          <!-- 活动图片 -->
          <div class="preview">
            <img src="../assets/img/activities-preview.jpg" alt />
          </div>
          <!-- 活动内容 -->
          <div class="content">
            <div class="theme">活动主题</div>
            <div class="title">活动标题</div>
            <p
              class="desc"
            >活动描述：中国企业的发展，经过了一段相当长时间的原始积累和个人英雄式的管理，已经进入到依靠团队和系统管理出效益的阶段。很多企业发展的瓶颈出现在人力资源发掘和管理上。如何在较短的时间内建设起一支强大的团队，是目前企业的共同诉求。上海西点卓越军团军事</p>
            <div class="time">
              活动时间：
              <span>2019-11-11</span>至
              <span>2019-11-14</span>
            </div>
            <div class="state">
              活动状态：
              <span class="stateContent">进行中</span>
            </div>
            <!-- "编辑活动"按钮 -->
            <button class="modifyBtn btn" @click="showDialog">编辑</button>
          </div>
        </li>
      </ul>
    </div>

    <!-- 点击“新增/编辑活动”弹出的复用模态框 -->
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="活动主题">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="活动标题">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="活动描述">
          <el-input type="textarea" v-model="form.desc"></el-input>
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
              v-model="form.date1"
              style="width: 100%;"
            ></el-date-picker>
          </el-col>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
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
      activityList: [
        { id: 1, title: "枪战训练1", type: "枪战训练" },
        { id: 2, title: "枪战对抗1", type: "枪战训练" },
        { id: 3, title: "枪战训练2", type: "枪战对抗" },
        { id: 4, title: "枪战对抗2", type: "枪战对抗" }
      ],
      dialogVisible: false,
      form: {},
      imageUrl: ""
    };
  },
  methods: {
    showDialog() {
      this.dialogVisible = true;
    }
  }
};
</script>

<style lang="less" scoped>
// 页面标题
.activity-title {
  width: 600px;
  height: 80px;
  line-height: 80px;
  margin: 0 auto;
  text-align: center;
  border-bottom: 1px solid #fff;
  color: #fff;
  font-size: 26px;
  margin-bottom: 20px;
}

// 页面内容主盒子
.activity-container {
  line-height: 1.5;
  color: #fff;
  font-family: "Poppins", sans-serif;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: wrap;

  // 活动列表
  .activity-list {
    .box {
      position: relative;
      margin: 20px 30px;
      display: flex;
      flex-grow: 1;
      justify-content: center;
      flex-direction: row;
      background: #060c2188;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.33);

      // 左侧的展示图片
      .preview img {
        width: 200px;
        height: 200px;
        display: block;
      }

      // 右侧具体活动内容
      .content {
        padding: 10px 50px;
        padding-right: 100px;
        position: relative;

        .theme {
          font-size: 20px;
        }

        .desc {
          margin: 20px 0;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        .state .stateContent {
          color: #0a725a;
        }

        .modifyBtn {
          position: absolute;
          right: 100px;
          bottom: 20px;
        }
      }
    }
  }
}
// 按钮通用
.btn {
  color: #fff;
  padding: 0 30px;
  font-size: 14px;
  text-align: center;
  line-height: 30px;
  background-color: #51a9f18c;
  border: 1px solid #fff;
}

// 添加活动图片
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>