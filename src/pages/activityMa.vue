<template>
  <div class="actContainer">
    <!-- 页面标题 -->
    <div class="activity-title">活动列表</div>

    <!-- 页面内容 -->
    <div class="activity-container">
      <!-- 按钮 -->
      <div class="topBtn">
        <!-- “新增活动”按钮 -->
        <button class="addBtn btn" @click="addActive">新增活动</button>
        <!-- “搜索活动”按钮 -->
        <el-input placeholder="请输入活动名称..." v-model="query" class="input-with-select">
          <el-button slot="append" @click="queryEvent" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <!-- 列表展示部分 -->
      <ul class="activity-list">
        <li class="box clearfix" v-for="item in activityList" :key="item.id">
          <!-- 活动图片 -->
          <div class="preview">
            <img :src="item.picAddress" />
          </div>
          <!-- 活动内容 -->
          <div class="content">
            <div class="title">活动名称：{{item.name}}</div>
            <div class="theme">活动主题：{{item.theme}}</div>
            <p class="desc ellipsis-2">活动描述：{{item.description}}</p>
            <div class="time">
              活动时间：
              <span>{{item.beginTime}}</span>至
              <span>{{item.endTime}}</span>
            </div>
            <div class="state">
              活动状态：
              <span class="notstarted" v-if="item.status == 0">未开始</span>
              <span class="underWay" v-else-if="item.status == 1">进行中</span>
              <span class="finished" v-else>已结束</span>
            </div>
            <!-- "删除活动"按钮 -->
            <button class="delBtn btn" @click="delAct(item.id)">
              <i class="el-icon-delete icon"></i>删除
            </button>
            <!-- "编辑活动"按钮 -->
            <button class="modifyBtn btn" @click="editActive(item.id)">
              <i class="el-icon-edit icon"></i>编辑
            </button>
          </div>
        </li>
      </ul>
      <!-- 分页器 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="1"
        :page-sizes="[1, 2, 3, 5]"
        :page-size="2"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>

    <!-- 点击“新增/编辑活动”弹出的复用模态框 -->
    <!-- <el-dialog title="提示" :visible.sync="editDialogVisible" width="30%">
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
        <el-form-item label="活动名称">
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
         
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="edit">确 定</el-button>
      </span>
    </el-dialog>-->
  </div>
</template>

<script>
import qs from "qs";
import { log } from "util";
export default {
  data() {
    return {
      total: 0,
      // 搜索值
      query: "",
      // 当前页
      pagenum: 1,
      // 每页显示多少条数据
      pagesize: 2,
      value5: 3.7,
      // 页面数据
      activityList: [  ],
      editDialogVisible: false,
      delDialogVisible: false,
      form: {},
      imageUrl: ""
    };
  },
  created() {
    this.getActiveData();
  },

  methods: {
    // 搜索事件
    queryEvent() {
      console.log(this.query);
      this.getActiveData();
    },
    // 当pagesize发生改变
    handleSizeChange(e) {
      this.pagesize = e;
      this.getActiveData();
    },
    // 当前页发生改变
    handleCurrentChange(e) {
      this.pagenum = e;
      this.getActiveData();
    },
    // 获取活动页面数据
    async getActiveData() {
      var data = await this.$http.post(
        "activity/queryActivity",
        qs.stringify({
          theme: this.query,
          pagenum: this.pagenum,
          pagesize: this.pagesize
        })
        
      );
      console.log(data);
      if (data.status !== 200) {
        this.$message.info("获取数据失败");
      } else {
        this.activityList = data.data.respBody.queries;
        this.total = data.data.respBody.totalCount;
      }
    },
    // 点击新增活动跳转
    addActive() {
      this.$router.push("/activityMa/activeAdd");
    },
    // 点击编辑活动跳转
    editActive(e) {
      this.$router.push({ path: "/activityMa/activeEdit", query: { id: e} });
    },
    // delAct(e) {
    //   this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
    //     confirmButtonText: "确定",
    //     cancelButtonText: "取消",
    //     type: "warning"
    //   })
    //     .then(async() => {
    //       console.log(e);
    //       var id=e;
    //     var data=await this.$http.post('activity/deleteActivity', qs.stringify({ Id:id }))
    //     console.log(data);
    //     })
    //     this.$message.success('删除成功')
    //     .catch(() => {
    //       this.$message({
    //         type: "info",
    //         message: "已取消删除"
    //       });
    //     });
    // }
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
.activity-list {
  min-width: 1400px !important;
  min-height: 450px !important;
}
</style>