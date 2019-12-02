<template>
  <div class="activityDetail activePlace">
    <div class="content">
      <div class="title">{{activeData.name}}</div>
      <div class="parameter">
        <span>活动主题：{{activeData.theme}}</span>
        <span>活动场馆：{{activeData.gym.name}}</span>
        <span>活动时间：{{activeData.beginTime}} 至 {{activeData.endTime}}</span>
      </div>
      <div class="describe">活动描述：{{activeData.description}}</div>
    </div>
    <div class="place">
      <div class="place_title">场次管理</div>
      <div class="addPlace">
        <el-button @click="addOpenDialog" type="primary">添加场次</el-button>
      </div>

      <el-table  border :data="placeData" stripe style="width: 100%">
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column prop="beginTime" label="开始时间"></el-table-column>
        <el-table-column prop="endTime" label="结束时间"></el-table-column>
        <el-table-column prop="address" label="编辑" width="400" >
          <template slot-scope="scope">
            <!-- <pre>{{scope.row}}</pre> -->
            <el-button
              size="small"
              @click="editOpenDialog(scope.row.beginTime,scope.row.endTime,scope.row.id)"
              type="primary"
              icon="el-icon-edit"
            >修改场次</el-button>
            <el-button
              size="small"
              type="info"
              @click="openSureDel(scope.row.id)"
              icon="el-icon-delete"
            >删除场次</el-button>
            <el-button
              size="small"
              type="danger"
              @click="toDetail(scope.row.id,scope.row.activityId)"
              icon="el-icon-delete"
            >查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <div class="pagin">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pagenum"
          :page-sizes="[5, 10, 15,20]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="toatl"
        ></el-pagination>
      </div>

      <!-- 添加和编辑场次的对话框 -->
      <el-dialog
        @close="closeDialog"
        :title="dialogTitle"
        :visible.sync="dialogVisible"
        width="40%"
      >
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="活动时间" prop="placeTime">
            <el-date-picker
              :picker-options="pickerOptions"
              v-model="ruleForm.placeTime"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></el-date-picker>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogSure">确 定</el-button>
        </span>
      </el-dialog>
    </div>
    
  </div>
</template>
  
  <script>
import axios from "axios";
import qs from "qs";
import { log } from "util";
export default {
  data() {
    return {
      pickerOptions: {
        disabledDate: time => {
          return this.dealDisabledDate(time);
        }
      },
      // 场次id
      id: "",
      // 页码总数
      toatl: null,
      // 场次开始时间
      beginTime: "",
      // 场次结束时间
      endTime: "",
      // 场次的活动数据
      activeData: null,
      activity_id: "",
      pagenum: 1,
      pagesize: 5,
      // 表单验证规则
      rules: {
        placeTime: [
          {
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ]
      },
      // 默认的时间绑定
      ruleForm: {
        placeTime: []
      },
      dialogTitle: "",
      // 添加和编辑对话框的显示
      dialogVisible: false,
      //   activityDetail: {
      //     id: 3,
      //     gym_id: 3,
      //     theme: "合作类",
      //     gym: "东方绿舟培训基地",
      //     name: "古镇定向寻宝",
      //     pic_address: require("../../assets/img/activity3.jpg"),
      //     begin_time: "2019-11-20",
      //     end_time: "2019-11-21",
      //     description:
      //       "利用目的地的风土民情，以及周边的独特地形地貌，结合活动的主要目标，设计以特定主题作为主线的经典文化定向活动，是上海勇拓特色主题课程。一方面强化本次活动的主题，使之更加深入人心，同时在活动的过程中进一步熔炼团队精神，另一方面也让员工通过另外一种独特的方式了解目的地的一些名胜古迹，风土民情，即达到了融合团队的目的，又不留痕迹，形式上不失活泼，跳出了传统拓展训练的框架，以全新的方式向人们展示企业员工的风采！",
      //     status: 0 //未开始
      //   },
      activeName: "first",
      //   场馆数据
      placeData: []
    };
  },
  created() {
    this.getPlaceData();
    // this.placedata=  this.$route.query.placedata;
    // console.log(this.placedata);
    this.activeData = JSON.parse(this.$route.query.placedata)[0];
    console.log(this.activeData);
    //  this.toatl= this.activeData.toatl
  },
  mounted() {},
  methods: {
    // 点击进入活动详情
    toDetail(placeId,activityId){
      this.$router.push({ path: '/activityMa/placeDetail', query: { placeId,activityId}});
    },
    // 分页的方法
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pagesize = val;
      this.getPlaceData();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.pagenum = val;
      this.getPlaceData();
    },
    // 关闭对话框重置表单
    closeDialog() {
      this.beginTime = "";
      this.endTime = "";
      this.ruleForm.placeTime = [];
      this.$set((this.ruleForm.placeTimee = []));
      this.$refs.ruleForm.resetFields();
    },
    // 确认删除
    openSureDel(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          console.log(id);
          var { data: res } = await this.$http.post(
            "actGame/deleteGame",
            qs.stringify({ Id: id })
          );
          console.log(res);
          if (res.respBody.isSuccess == "true") {
            this.getPlaceData();
            this.$message({
              type: "success",
              message: "删除场次成功!"
            });
          } else {
            this.$message.info("删除场次失败");
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    // 处理时间的函数
    dealDisabledDate(time) {
      var begins = this.activeData.beginTime;
      var ends = this.activeData.endTime;
      let _end = new Date(ends).valueOf();
      let _start = new Date(begins).valueOf();
      var oneDay = 1 * 24 * 60 * 60 * 1000;
      _start = _start - oneDay;
      return time.getTime() > _end || time.getTime() < _start;
    },
    //  根据活动id查询场次
    async getPlaceData() {
      this.activity_id = this.$route.query.id;
      console.log(this.activity_id);
      console.log(this.$route.query.placedata);

      var data = await this.$http.post(
        "actGame/queryGame",
        qs.stringify({
          activity_id: this.activity_id,
          pagenum: this.pagenum,
          pagesize: this.pagesize
        })
      );

      if (data.data.respBody.isSuccess == "OK") {
        this.placeData = data.data.respBody.queries;
        this.toatl = data.data.respBody.totalCount;
      }else{
        this.$message.error('获取场馆信息失败')
      }
      console.log(this.placeData);
    },
    // 点击确认对话框
    dialogSure() {
      if (this.dialogTitle == "添加场次") {
        this.$refs.ruleForm.validate(async val => {
          if (val) {
            var filterTime = this.$options.filters["format"];
            this.beginTime = filterTime(
              this.ruleForm.placeTime[0],
              "yyyy-MM-dd hh:mm"
            );
            this.endTime = filterTime(
              this.ruleForm.placeTime[1],
              "yyyy-MM-dd hh:mm"
            );
            console.log(this.activity_id);
            var { data: res } = await this.$http.post(
              "actGame/createGame",
              qs.stringify({
                activityId: this.activity_id,
                beginTime: this.beginTime,
                endTime: this.endTime
              })
            );
            console.log(res);
            if (res.respBody.isSuccess == "true") {
              this.getPlaceData();
              this.$message.success("添加场次成功");
              this.dialogVisible = false;
            } else {
              this.$message.error("添加场次失败");
            }
          }
        });
      } else if (this.dialogTitle == "修改场次") {
        this.$refs.ruleForm.validate(async val => {
          if (val) {
            var filterTime = this.$options.filters["format"];
            this.beginTime = filterTime(
              this.ruleForm.placeTime[0],
              "yyyy-MM-dd hh:mm"
            );
            this.endTime = filterTime(
              this.ruleForm.placeTime[1],
              "yyyy-MM-dd hh:mm"
            );
            console.log(this.activity_id);
            var { data: res } = await this.$http.post(
              "actGame/updateGame",
              JSON.stringify({
                activityId: this.activity_id,
                beginTime: this.beginTime,
                endTime: this.endTime,
                id: this.id
              }),
              { headers: { "Content-Type": "application/json" } }
            );
            console.log(res);
            if (res.respBody.isSuccess == "OK") {
              this.getPlaceData();
              this.$message.success("修改场次成功");
              this.dialogVisible = false;
            } else {
              this.$message.error("修改场次失败");
            }
          }
        });
      }
    },
    // 点击添加场次
    addOpenDialog() {
      this.dialogVisible = true;
      this.ruleForm.placeTime = [];
      this.dialogTitle = "添加场次";
    },
    // 点击修改场次
    editOpenDialog(beginTime, endTime, id) {
      this.dialogVisible = true;
      this.dialogTitle = "修改场次";
      
      this.$nextTick(()=>{
      this.ruleForm.placeTime = [beginTime, endTime];
      })
      this.id = id;
      console.log(this.ruleForm.placeTime);
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

  <style >
.activityDetail .el-table tr,
.activityDetail .el-table td {
  border: 0;
  background-color: transparent !important;
}
.activityDetail .el-table th {
  background-color: rgba(148, 144, 144, 0.3) !important;
}
.activityDetail .el-table--striped .el-table__body tr.el-table__row--striped td {
  background-color: #fff;
  background-color: rgba(148, 144, 144, 0.3) !important;
  /* 双行 */
}
.activityDetail  .el-table thead {
  color: #fff !important;
}
</style>
  <style lang="less" scoped>

.el-pagination{
   margin-top: 30px;
  width: 40%;
  text-align: center;
  transform: translate(60%)
}
.addPlace {
  text-align: right;
  padding-bottom: 10px;
}
.place_title {
  padding: 20px;
  text-align: center;
  font-size: 25px;
  //   font-weight: 700;
}
.el-table {
  color: #fff;
  background-color: #51a9f18c !important;
}
.session {
  .el-tabs__item {
    color: #fff;
  }
}
.session-table {
  width: 100%;
  background-color: #3c79ac8c;
  border: 1px solid #2149698c;
  border-collapse: collapse;
  th,
  td {
    // padding: 15px 0;
    height: 55px;
    text-align: center;
    border: 2px solid #2149698c;
    a {
      //   text-decoration: underline;
      display: inline-block;
      background-color: #73bffdb2;
      border-radius: 5px;
      padding: 7px 15px;
      border: 1px solid #2149698c;
      color: #fff;

      &:hover {
        background-color: #73bffd54;
      }
    }
  }
  th {
    background-color: #2c67978c;
  }
  tr:nth-child(even) {
    background-color: #2c67978c;
  }
  tbody tr:hover {
    background-color: #2c67978c;
  }
}
.session {
  margin-top: 20px;
  background: rgba(200, 200, 200, 0.2);
  padding: 20px;
}

.activityDetail {
  width: 90%;
  margin: 50px auto;
  background: rgba(0, 0, 0, 0.4);
  padding: 50px;
  color: #fff;
}

.activityDetail .title {
  text-align: center;
  font-size: 24px;
}

.activityDetail .parameter span {
  display: inline-block;
  width: 32.3%;
  height: 30px;
  line-height: 30px;
  box-sizing: border-box;
  text-align: center;
  margin-top: 30px;
}

.activityDetail .describe {
  margin-top: 30px;
}
</style>
