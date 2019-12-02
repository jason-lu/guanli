<template>
  <div class="placeDetail">
    <div class="title">战队管理</div>
    <div class="clearfix">
      <div class="fl userQuery">用户名查询:</div>
      <div class="fl content">
        <el-input placeholder="请输入内容" v-model="userQuery" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </div>
    <!-- 用户信息 -->
    <div>
      <div class="userInfo">用户信息</div>
      <!-- table表格 -->
      <el-table class="table" :data="userData" border stripe style="width: 100%">
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column label="操作">
          <el-button @click="addArmDialogVisible = true" type="primary">加入战队</el-button>
        </el-table-column>
      </el-table>
    </div>
    <!-- 点击加入战队弹出对话框 -->
    <el-dialog title="加入战队" :visible.sync="addArmDialogVisible" width="30%">
      <!-- 表单信息 -->
      <el-form
        :model="addArmRuleForm"
        :rules="addArmRules"
        ref="addArmRuleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="成员编号" prop="name">
          <el-input v-model="addArmRuleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="成员姓名" prop="name">
          <el-input v-model="addArmRuleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="选择武器" prop="region">
          <el-select v-model="addArmRuleForm.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="选择职务" prop="region">
          <el-select v-model="addArmRuleForm.region" placeholder="请选择职务">
            <el-option label="士兵" value="1"></el-option>
            <el-option label="班长" value="2"></el-option>
            <el-option label="排长" value="3"></el-option>
            <el-option label="连长" value="4"></el-option>
            <el-option label="营长" value="5"></el-option>
            <el-option label="团长" value="6"></el-option>
            <el-option label="旅长" value="7"></el-option>
            <el-option label="师长" value="8"></el-option>
            <el-option label="军长" value="9"></el-option>
            <el-option label="司令" value="10"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="选择队伍" prop="region">
          <el-select v-model="addArmRuleForm.region" placeholder="请选择活动队伍">
            <el-option label="红队" value="1"></el-option>
            <el-option label="蓝队" value="2"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addArmDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addArmDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 战队信息 -->
    <div>
      <div class="userInfo">战队成员信息</div>
      <!-- table表格 -->
      <el-table class="table" :data="armData" border stripe style="width: 100%">
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      // 添加战队的表单
      addArmRuleForm: {},
      // 添加战队表单验证
      addArmRules: {},
      // 点击加入战队的对话框显示
      addArmDialogVisible: false,
      // 用户名查询
      userQuery: "",
      userData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      armData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {}
};
</script>
    <style >
  .content  .el-input__inner{
    background-color: rgba(55,105,149,.8);
    color: #fff;
  }
    .content .el-input-group__append{
    color: #fff;
  }
 .content .el-input .el-button{
 background-color: rgba(55,105,149,.8);
 }
 .content .el-input{
   color: #fff!important;
 }
.placeDetail .el-table tr,
.placeDetail .el-table td {
  border: 0;
  background-color: transparent !important;
}
.placeDetail .el-table th {
  background-color: rgba(148, 144, 144, 0.3) !important;
}
.placeDetail .el-table--striped .el-table__body tr.el-table__row--striped td {
  background-color: rgba(148, 144, 144, 0.3) !important;
  /* 双行 */
}
.placeDetail .el-table thead {
  color: #fff !important;
}
</style>
//   <style lang="less">
// .el-input{
//   background-color: #ccc!important;
// }
.el-table {
  color: #fff !important;
  background-color: #51a9f18c !important;
}
//   .session {
//     .el-tabs__item {
//       color: #fff;
//     }
//   }
//   .session-table {
//     width: 100%;
//     background-color: #3c79ac8c;
//     border: 1px solid #2149698c;
//     border-collapse: collapse;
//     th,
//     td {
//       // padding: 15px 0;
//       height: 55px;
//       text-align: center;
//       border: 2px solid #2149698c;
//       a {
//       //   text-decoration: underline;
//         display: inline-block;
//         background-color: #73bffdb2;
//         border-radius: 5px;
//         padding: 7px 15px;
//         border: 1px solid #2149698c;
//         color: #fff;

//         &:hover {
//             background-color: #73bffd54;
//         }
//       }
//     }
//     th {
//       background-color: #2c67978c;
//     }
//     tr:nth-child(even) {
//       background-color: #2c67978c;
//     }
//     tbody tr:hover {
//       background-color: #2c67978c;
//     }
//   }
</style>
  <style scoped>
.table {
  margin-top: 20px;
}
.session {
  margin-top: 20px;
  background: rgba(200, 200, 200, 0.2);
  padding: 20px;
}

.placeDetail {
  width: 90%;
  margin: 50px auto;
  background: rgba(0, 0, 0, 0.4);
  padding: 50px;
  color: #fff;
}
.fl {
  float: left;
}
.title {
  text-align: center;
  font-size: 25px;
  margin-bottom: 20px;
}
.userQuery {
  margin-right: 10px;
  line-height: 40px;
}
.userInfo {
  margin-top: 20px;
}
</style>