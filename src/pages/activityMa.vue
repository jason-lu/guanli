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
        <li class="box" v-for="item in activityList" :key="item.gym_id">
          <!-- 活动图片 -->
          <div class="preview">
            <img :src="item.pic_address" />
          </div>
          <!-- 活动内容 -->
          <div class="content">
            <div class="theme">{{item.theme}}</div>
            <div class="title">{{item.name}}</div>
            <p class="desc">活动描述：{{item.description}}</p>
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
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      ></el-pagination>
    </div>

    <!-- 点击“新增/编辑活动”弹出的复用模态框 -->
    <el-dialog title="提示" :visible.sync="editDialogVisible" width="30%">
      <el-form ref="form" :model="form" label-width="80px">
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
          theme: "活动主题1",
          name: "活动名称1",
          pic_address: require("../assets/img/activity1.jpg"),
          begin_time: "2019-11-12",
          end_time: "2019-11-18",
          description:
            "1中国企业的发展，经过了一段相当长时间的原始积累和个人英雄式的管理，已经进入到依靠团队和系统管理出效益的阶段。很多企业发展的瓶颈出现在人力资源发掘和管理上。如何在较短的时间内建设起一支强大的团队，是目前企业的共同诉求。上海西点卓越军团军事",
          status: 1 //进行中
        },
        {
          id: 2,
          gym_id: 2,
          theme: "活动主题2",
          name: "活动名称2",
          pic_address: require("../assets/img/activity2.jpg"),
          begin_time: "2019-11-12",
          end_time: "2019-11-13",
          description:
            "2中国企业的发展，经过了一段相当长时间的原始积累和个人英雄式的管理，已经进入到依靠团队和系统管理出效益的阶段。很多企业发展的瓶颈出现在人力资源发掘和管理上。如何在较短的时间内建设起一支强大的团队，是目前企业的共同诉求。上海西点卓越军团军事",
          status: 2 //结束
        },
        {
          id: 3,
          gym_id: 3,
          theme: "活动主题3",
          name: "活动名称3",
          pic_address: require("../assets/img/activity3.jpg"),
          begin_time: "2019-11-20",
          end_time: "2019-11-21",
          description:
            "3中国企业的发展，经过了一段相当长时间的原始积累和个人英雄式的管理，已经进入到依靠团队和系统管理出效益的阶段。很多企业发展的瓶颈出现在人力资源发掘和管理上。如何在较短的时间内建设起一支强大的团队，是目前企业的共同诉求。上海西点卓越军团军事",
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
    // showDelDialog() {
    //   this.delDialogVisible = true;
    // },
    async delAct() {
      try{
        await this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
        this.$message({
          type: "success",
          message: "删除成功!"
        })
      }catch{
        this.$message({
          type: "info",
          message: "已取消删除"
        })        
      }

    }
  }
}
</script>

<style lang="less">
.activity-container {
  // 修改默认的elementui的搜索框样式
  .input-with-select {
    float: left;
    width: 300px;
    line-height: 30px;
    margin-right: 50px;

    .el-input__inner {
      background-color: #51a9f14f;
      height: 32px;
      line-height: 30px;
      border: 1px solid #fff;
      color: #fff;
    }
    .el-input-group__append {
      background: #51a9f18c;
      height: 30px;
      border: 1px solid #fff;
      .el-icon-search {
        color: #fff;
      }
    }
  }
  // 修改默认的elementui的分页器样式
  .el-pagination {
    margin-bottom: 70px;
    background-color: #51a9f14f;
    padding: 10px 20px;
    border-radius: 5px;
    border: 1px solid #fff;

    .el-pagination__total,
    .el-pagination__jump {
      color: #fff;
    }
  }
}
</style>

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

  .addBtn {
    float: right;
  }

  // 活动列表
  .activity-list {
      padding-left: 0;
    .box {
      position: relative;
      margin: 20px;
      display: flex;
      flex-grow: 1;
      justify-content: center;
      flex-direction: row;
      background: #060c2188;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.33);

      // 左侧的展示图片
      .preview img {
        width: 300px;
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

        .state {
          .notstarted {
            color: #4a68bb;
          }
          .finished {
            color: #bd4c4c;
          }
          .underWay {
            color: #108167;
          }
        }

        .modifyBtn {
          position: absolute;
          right: 100px;
          bottom: 20px;
        }

        .delBtn {
          position: absolute;
          right: 210px;
          bottom: 20px;
          background-color: rgba(247, 71, 71, 0.5);
        }
      }
    }
  }
}
// 按钮通用
.btn {
  color: #fff;
  padding: 0 20px;
  font-size: 14px;
  text-align: center;
  line-height: 30px;
  background-color: #51a9f18c;
  border: 1px solid #fff;
  cursor: pointer;
}

.icon {
  padding-right: 10px;
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