<template>
  <div class="actContainer">
    <!-- 页面标题 -->
    <div class="activity-title">活动列表</div>

    <!-- 页面内容 -->
    <div class="activity-container">
      <!-- 按钮 -->
      <div class="topBtn">
        <el-select
          clearable
          class="screen theme-select"
          v-model="screenGymId"
          @change="selectChange"
          placeholder="场馆筛选"
        >
          <el-option v-for="(item, i)  in paceData" :label="item.name" :key="i" :value="item.id"></el-option>
        </el-select>
        <!-- “新增活动”按钮 -->
        <button class="addBtn btn" @click="openAdd">新增活动</button>
        <!-- “搜索活动”按钮 -->
        <el-input placeholder="请输入主题名称..." v-model="queryText" class="input-with-select">
          <el-button slot="append" @click="queryEvent" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <!-- 列表展示部分 -->
      <ul class="activity-list">
        <div class="no-content" v-if="!activityList.length">无此结果</div>
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
            <!-- "编辑活动"按钮 @click="editActive(item.id)editdialogVisible = true" -->
            <button class="modifyBtn btn" @click="editActive(item.id)">
              <i class="el-icon-edit icon"></i>编辑
            </button>
            <!-- 场次管理按钮 -->
            <button class="placeBtn btn" @click="toPlace(item.id)">
              <i class="el-icon-setting icon"></i>场次管理
            </button>
          </div>
        </li>
      </ul>
      <!-- 分页器 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pagenum"
        :page-sizes="[1, 2, 3, 5]"
        :page-size="2"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>

    <!-- 点击“新增”弹出的模态框 -->
    <el-dialog title="添加页面" :visible.sync="addDialogVisible" width="40%" @close="closeEditDialog">
      <div>
        <!-- 表单区域 -->
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm editA"
        >
          <!-- <el-tabs v-model="activeName" tab-position="left"> -->
          <!--活动信息的表单验证  -->
          <el-form-item label="选择场馆" prop="gymId">
            <el-select v-model="ruleForm.gymId" placeholder="请选择场馆">
              <el-option v-for="(item, i) in paceData" :label="item.name" :key="i" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="editAc" label="活动名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item class="editAc" label="活动主题" prop="theme">
            <el-input v-model="ruleForm.theme"></el-input>
          </el-form-item>
          <el-form-item class="editAc" label="活动时间" required>
            <div class="block">
              <el-date-picker
                @change="chooseActiveTime"
                v-model="ruleForm.activeDate"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              ></el-date-picker>
            </div>
          </el-form-item>
          <!-- 活动描述 -->
          <el-form-item class="editAc" label="活动描述" prop="description">
            <el-input type="textarea" v-model="ruleForm.description"></el-input>
          </el-form-item>
          <!-- 活动状态 -->
          <el-form-item label="活动状态" prop="status">
            <el-select v-model="ruleForm.status" placeholder="请选择活动状态">
              <el-option label="进行中" value="1"></el-option>
              <el-option label="未开始" value="0"></el-option>
            </el-select>
          </el-form-item>
          <!-- 上传图片 -->
          <el-form-item label="上传图片" class="upload">
            <el-upload
              class="upload-demo"
              :limit="1"
              action="http://122.112.247.149:8004/api/v1/FileTransfer/uploadFile"
              :on-success="onSuccess"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList"
              list-type="picture"
            >
              <el-button type="primary">选择图片</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb(仅能上传一张哦)</div>
            </el-upload>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="sureAdd">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 点击编辑弹出模态框 -->
    <!-- <el-button type="text" @click="editdialogVisible = true">点击打开 Dialog</el-button> -->

    <el-dialog
      title="编辑活动"
      @close="editcloseEditDialog"
      :visible.sync="editdialogVisible"
      width="40%"
    >
      <el-form
        :model="editruleForm"
        :rules="rules"
        ref="editruleForm"
        label-width="100px"
        class="demo-ruleForm editA"
      >
        <!-- <el-tabs v-model="activeName" tab-position="left"> -->
        <!--活动信息的表单验证  -->
        <el-form-item label="选择场馆" prop="gymId">
          <el-select v-model="editruleForm.gymId" placeholder="请选择场馆">
            <el-option v-for="(item, i) in paceData" :label="item.name" :key="i" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="editAc" label="活动名称" prop="name">
          <el-input v-model="editruleForm.name"></el-input>
        </el-form-item>
        <el-form-item class="editAc" label="活动主题" prop="theme">
          <el-input v-model="editruleForm.theme"></el-input>
        </el-form-item>
        <el-form-item class="editAc" label="活动时间" required>
          <div class="block">
            <el-date-picker
              @change="editchooseActiveTime"
              v-model="editruleForm.activeDate"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></el-date-picker>
          </div>
        </el-form-item>
        <!-- 活动描述 -->
        <el-form-item class="editAc" label="活动描述" prop="description">
          <el-input type="textarea" v-model="editruleForm.description"></el-input>
        </el-form-item>
        <!-- 活动状态 -->
        <el-form-item label="活动状态" prop="status">
          <el-select v-model="editruleForm.status" placeholder="请选择活动状态">
            <el-option label="进行中" :value="1"></el-option>
            <el-option label="未开始" :value="0"></el-option>
          </el-select>
        </el-form-item>
        <!-- 上传图片 -->
        <el-form-item label="上传图片" class="upload">
          <el-upload
            class="upload-demo"
            :limit="1"
            action="http://122.112.247.149:8004/api/v1/FileTransfer/uploadFile"
            :on-success="editonSuccess"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            list-type="picture"
          >
            <el-button type="primary">选择图片</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb(仅能上传一张哦)</div>
          </el-upload>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editdialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editSure">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import qs from "qs";
import { log } from "util";
export default {
  data() {
    return {
      // 筛选的场馆id
      screenGymId: "",
      queryText: "",
      // 跳转到场馆的数据
      placedata: null,
      activeEditId: "",
      // 提交编辑时的场馆信息
      editPlace: [],
      beginTime: "",
      endTime: "",
      editContent: [],
      // 修改的模态框
      editdialogVisible: false,
      // 场馆信息
      paceData: [],

      // 上传图片信息
      fileList: [],
      // tab和进度条的帮顶属性
      activeName: "0",
      // 表单绑定的数据
      editruleForm: {
        // 选择场馆
        gymId: "",
        activeDate: [],
        // 活动开始时间
        // beginTime: "",
        // 活动结束时间
        // endTime: "",
        // 活动名称
        name: "",
        // 活动主题
        theme: "",
        // 活动描述
        description: "",

        // 图片临时路径
        picAddress: "",
        // 活动状态
        status: ""
      },
      // 1111111111111111111111111!!!!!!!!!!!!!!
      // 表单绑定的数据
      ruleForm: {
        // 选择场馆
        gymId: "",
        // 活动时间
        activeDate: [],
        // 活动开始时间

        // beginTime: "",
        // 活动结束时间
        // endTime: "",
        // 活动名称
        name: "",
        // 活动主题
        theme: "",
        // 活动描述
        description: "",

        // 图片临时路径
        picAddress: "",
        // 活动状态
        status: ""
      },
      // 表单的验证规则
      rules: {
        gymId: [{ required: true, message: "请选择场馆", trigger: "change" }],
        status: [{ required: true, message: "请选择状态", trigger: "change" }],
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        theme: [
          { required: true, message: "请输入活动主题", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        activeDate: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        description: [
          { required: true, message: "请输入活动描述", trigger: "blur" },
          { min: 10, message: "长度大于十个字符", trigger: "blur" }
        ]
      },

      // 添加的模态框
      addDialogVisible: false,
      total: 0,
      // 搜索值
      query: "",
      // 当前页
      pagenum: 1,
      // 每页显示多少条数据
      pagesize: 2,
      value5: 3.7,
      // 页面数据
      activityList: [],
      editDialogVisible: false,
      delDialogVisible: false,
      form: {},
      imageUrl: ""
    };
  },
  created() {
    if (this.$route.query.gymId) {
      this.screenGymId = this.$route.query.gymId * 1;
    } else {
      this.screenGymId = "";
    }
    this.getActiveData();
    this.getPlaceData();
  },

  methods: {
    // 筛选改变
    selectChange() {
      this.getActiveData();
      console.log(this.screenGymId);
    },
    // 点击跳转到场次管理页面
    toPlace(e) {
      this.placedata = this.activityList.filter(item => {
        return item.id == e;
      });
      this.$router.push({
        path: "/activityMa/activePlace",
        query: { id: e, placedata: JSON.stringify(this.placedata) }
      });
    },
    // 点击确认编辑
    editSure() {
      console.log(this.editruleForm);
      this.$refs.editruleForm.validate(async value => {
        console.log(value);
        if (!value) {
          return this.$message.error("请完整表单信息");
        } else {
          var data = await this.$http.post(
            "activity/updateActivity",
            JSON.stringify({
              id: this.activeEditId,
              beginTime: this.beginTime,
              endTime: this.endTime,
              gymId: this.editruleForm.gymId,
              theme: this.editruleForm.theme,
              name: this.editruleForm.name,
              picAddress: this.editruleForm.picAddress,
              beginTime: this.beginTime,
              endTime: this.endTime,
              description: this.editruleForm.description,
              status: this.editruleForm.status
              // gym:this.editPlace,
            }),
            { headers: { "Content-Type": "application/json" } }
          );
          console.log(data);
          if (data.status == 200) {
            this.$message.success("修改活动成功");
            this.getActiveData();

            this.editdialogVisible = false;
          } else {
            this.$message.error("修改活动失败");
          }
        }
      });
      //  this. editdialogVisible = false
    },
    openAdd() {
      this.addDialogVisible = true;
    },
    // 关闭模态框
    closeEditDialog() {
      this.$refs.ruleForm.resetFields();
      this.picAddress = "";
      this.activeEditId = "";
      this.fileList = [];
    },
    // 关闭编辑模态框
    editcloseEditDialog() {
      this.$refs.editruleForm.resetFields();
      this.picAddress = "";
      this.activeEditId = "";
      this.fileList = [];
    },
    // 获取场馆信息
    async getPlaceData() {
      var data = await this.$http.get("gym/getAllGym");
      if (data.status == 200) {
        this.paceData = data.data;
        console.log(this.paceData);
      } else {
        this.$message.error("获取场馆数据失败");
      }
    },
    // 图片上传成功的钩子
    onSuccess(response) {
      console.log(response);
      if (response.respBody.isSuccess == "OK") {
        this.$message.success("上传图片成功");
        this.ruleForm.picAddress = response.respBody.content;
      } else {
        this.$message.error("上传图片失败");
      }
    },
    editonSuccess(response) {
      console.log(response);
      if (response.respBody.isSuccess == "OK") {
        this.$message.success("上传图片成功");
        this.editruleForm.picAddress = response.respBody.content;
      } else {
        this.$message.error("上传图片失败");
      }
    },
    // 点击添加活动
    sureAdd() {
      console.log(this.ruleForm);
      this.$refs.ruleForm.validate(async value => {
        console.log(value);
        if (!value) {
          return this.$message.error("请完整表单信息");
        } else {
          var data = await this.$http.post(
            "activity/createActivity",
            qs.stringify({
              gymId: this.ruleForm.gymId,
              theme: this.ruleForm.theme,
              name: this.ruleForm.name,
              picAddress: this.ruleForm.picAddress,
              beginTime: this.beginTime,
              endTime: this.endTime,
              description: this.ruleForm.description,
              status: this.ruleForm.status
            })
          );
          console.log(data);
          if (data.data.respBody.isSuccess == "true") {
            this.$message.success("创建活动成功");
            this.addDialogVisible = false;
            this.getActiveData();
          } else {
            this.$message.error("创建活动失败");
          }
        }
      });
    },
    // 选择活动时间事触发
    chooseActiveTime() {
      // var newTime=[]
      var filterTime = this.$options.filters["format"];
      console.log(this.ruleForm.activeDate);
      if (this.ruleForm.activeDate) {
        this.beginTime = filterTime(this.ruleForm.activeDate[0], "yyyy-MM-dd ");
        this.endTime = filterTime(this.ruleForm.activeDate[1], "yyyy-MM-dd ");
      } else {
        this.beginTime = "";
        this.endTime = "";
      }

      // this.ruleForm.beginTime = filterTime(this.activeDate[0], "yyyy-MM-dd ");
      // this.ruleForm.endTime = filterTime(this.activeDate[1], "yyyy-MM-dd ");
      console.log(this.beginTime);
      console.log(this.endTime);
    },
    editchooseActiveTime() {
      var filterTime = this.$options.filters["format"];
      console.log(this.editruleForm.activeDate);
      if (this.editruleForm.activeDate) {
        this.beginTime = filterTime(
          this.editruleForm.activeDate[0],
          "yyyy-MM-dd "
        );
        this.endTime = filterTime(
          this.editruleForm.activeDate[1],
          "yyyy-MM-dd "
        );
      } else {
        console.log(this.beginTime);
        console.log(this.endTime);
      }

      // this.ruleForm.beginTime = filterTime(this.activeDate[0], "yyyy-MM-dd ");
      // this.ruleForm.endTime = filterTime(this.activeDate[1], "yyyy-MM-dd ");
      console.log(this.beginTime);
      console.log(this.endTime);
    },
    //   图片预览
    handlePreview() {},
    // 图片移除
    handleRemove() {},
    // 搜索事件
    queryEvent() {
      this.pagenum = 1;
      this.query = this.queryText;
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
          gym_id: this.screenGymId,
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
        console.log(this.activityList);
        this.activityList.map(item => {
          return (item.picAddress = `http://122.112.247.149:8003/resource/${item.picAddress.substr(
            item.picAddress.lastIndexOf("/")
          )}`);
        });
        console.log(this.activityList);
      }
    },
    // 点击新增活动跳转
    // addActive() {

    //   this.$router.push("/activityMa/activeAdd");
    // },
    // 点击编辑活动跳转
    // editActive(e) {
    //   this.$router.push({ path: "/activityMa/activeEdit", query: { id: e } });
    // },

    // 点击编辑活动
    editActive(e) {
      console.log(e);
      // 找到改id的活动信息
      this.editContent = this.activityList.filter(item => {
        return item.id == e;
      });
      console.log(this.editContent);
      // this.editruleForm = this.editContent[0];
      this.editruleForm.picAddress = this.editContent[0].picAddress;
      this.editruleForm.gymId = this.editContent[0].gymId;
      this.editruleForm.description = this.editContent[0].description;
      this.editruleForm.theme = this.editContent[0].theme;
      this.editruleForm.status = this.editContent[0].status;
      this.editruleForm.activeDate[0] = this.editContent[0].beginTime;
      this.editruleForm.activeDate[1] = this.editContent[0].endTime;
      this.editruleForm.name = this.editContent[0].name;
      this.editPlace = this.editContent[0].gym;
      this.$set(this.editruleForm.activeDate);
      this.beginTime = this.editContent[0].beginTime;
      this.endTime = this.editContent[0].endTime;
      this.activeEditId = e;
      if (this.editContent[0].picAddress) {
        this.fileList = [{ name: "", url: this.editContent[0].picAddress }];
        this.$set(this.fileList);
      }

      console.log(this.fileList);

      console.log(this.editruleForm.activeDate);

      // this.activeDate[1]=this.editContent[0].endTime;
      //     var time=new Date()
      // console.log(time);

      this.editdialogVisible = true;
    },
    // 点击删除活动
    async delAct(e) {
      try {
        await this.$confirm("此操作将永久删除该场馆, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        });
        var data = await this.$http.post(
          "actGame/queryGame",
          qs.stringify({
            activity_id: e,
            pagenum: this.pagenum,
            pagesize: this.pagesize
          })
        );
        if (data.data.respBody.queries.length != 0) {
          this.$message.error("删除失败,请先删除该活动下的场次");
        } else {
          var res = await this.$http.post(
            "activity/deleteActivity",
            qs.stringify({ Id: e })
          );
          console.log(res);

          if (res.status == 200) {
            this.getActiveData();
            this.$message({
              type: "success",
              message: "删除成功!"
            });
          } else {
            this.$message.info("删除活动失败");
          }
        }
      } catch {
        this.$message({
          type: "info",
          message: "已取消删除"
        });
      }
    }
  },
  // 过滤器
  filters: {
    // 时间过滤器
    format(value, arg) {
      function dateFormat(date, format) {
        if (typeof date === "string") {
          var mts = date.match(/(\/Date\((\d+)\)\/)/);
          if (mts && mts.length >= 3) {
            date = parseInt(mts[2]);
          }
        }
        date = new Date(date);
        if (!date || date.toUTCString() == "Invalid Date") {
          return "";
        }
        var map = {
          M: date.getMonth() + 1, //月份
          d: date.getDate(), //日
          h: date.getHours(), //小时
          m: date.getMinutes(), //分
          s: date.getSeconds(), //秒
          q: Math.floor((date.getMonth() + 3) / 3), //季度
          S: date.getMilliseconds() //毫秒
        };

        format = format.replace(/([yMdhmsqS])+/g, function(all, t) {
          var v = map[t];
          if (v !== undefined) {
            if (all.length > 1) {
              v = "0" + v;
              v = v.substr(v.length - 2);
            }
            return v;
          } else if (t === "y") {
            return (date.getFullYear() + "").substr(4 - all.length);
          }
          return all;
        });
        return format;
      }
      return dateFormat(value, arg);
    }
  }
};
</script>
<style lang="less" scoped>
// 页面内容主盒子
.activity-container .activity-list .box .content {
  .title {
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
.activity-list .no-content {
  width: 100%;
  text-align: center;
  margin: 50px 0;
}
.screen {
  margin-right: 10px;
}
</style>