<template>
  <div class="placeDetail">
    <div class="title">战队管理</div>
    <div class="clearfix">
      <div class="fl userQuery">用户名查询:</div>
      <div class="fl content">
        <el-input placeholder="请输入用户名" v-model="userQuery" class="input-with-select">
          <el-button @click="quryUser" slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <div class="fr">
        <el-button @click="start" type="primary">开始</el-button>
        <el-button @click="end" type="danger">结束</el-button>
      </div>
    </div>
    <!-- 用户信息 -->
    <div>
      <div class="userInfo">用户信息</div>
      <!-- table表格 -->
      <el-table class="table" :data="userList" border stripe style="width: 100%">
        <el-table-column type="index" width="50"></el-table-column>

        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="sex" label="性别" width="80"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column prop="phone" label="手机号"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <!-- <pre>{{scope.row}}</pre> -->
            <el-button @click="addTeam(scope.row.id,scope.row.name)" type="primary">加入战队</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 点击加入战队弹出对话框 -->
    <el-dialog title="加入战队" @close="closeDialog" :visible.sync="addArmDialogVisible" width="40%">
      <!-- 表单信息 -->
      <el-form
        :model="addArmRuleForm"
        :rules="addArmRules"
        ref="addArmRuleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="成员编号">
          <el-input v-model="addArmRuleForm.uerId" disabled></el-input>
        </el-form-item>
        <el-form-item label="成员姓名">
          <el-input v-model="addArmRuleForm.userName" disabled></el-input>
        </el-form-item>
        <el-form-item label="选择武器" prop="chooseWeapon">
          <el-select v-model="addArmRuleForm.chooseWeapon" placeholder="请选择武器">
            <el-option
              v-for="(item,i) in weaponList"
              :label="item.armTypeObject.armTypeValue"
              :key="i"
              :value="item.armId"
            ></el-option>
            <!-- <el-option label="区域二" value="beijing"></el-option> -->
          </el-select>
        </el-form-item>
        <el-form-item label="选择职务" prop="armyGrad">
          <el-select v-model="addArmRuleForm.armyGrad" placeholder="请选择职务">
            <el-option label="士兵" :value="1"></el-option>
            <el-option label="班长" :value="2"></el-option>
            <el-option label="排长" :value="3"></el-option>
            <el-option label="连长" :value="4"></el-option>
            <el-option label="营长" :value="5"></el-option>
            <el-option label="团长" :value="6"></el-option>
            <el-option label="旅长" :value="7"></el-option>
            <el-option label="师长" :value="8"></el-option>
            <el-option label="军长" :value="9"></el-option>
            <el-option label="司令" :value="10"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="选择队伍" prop="team">
          <el-select v-model="addArmRuleForm.team" placeholder="请选择活动队伍">
            <el-option label="红队" :value="1"></el-option>
            <el-option label="蓝队" :value="2"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addArmDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="SureJoin">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 战队信息 -->
    <div>
      <div class="userInfo">战队成员信息</div>
      <!-- table表格 -->
      <el-table class="table" :data="armData" border stripe style="width: 100%">
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column prop="member.name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="teamId" label="战队">
          <template slot-scope="scope">
            <el-button v-if="scope.row.teamId==2" size="small" type="primary">蓝队</el-button>
            <el-button v-if="scope.row.teamId==1" size="small" type="danger">红队</el-button>
          </template>
        </el-table-column>

        <el-table-column prop="armType.armTypeValue" label="武器"></el-table-column>
        <el-table-column prop="armyLevel.level" label="职务"></el-table-column>
        <el-table-column width="240" prop="address" label="操作">
          <template slot-scope="scope">
            <!-- <pre>{{scope.row}}</pre> -->
            <el-button icon="el-icon-edit" @click="editOpen(scope.row)" type="primary">编辑</el-button>
            <el-button icon="el-icon-delete" @click="sureDel(scope.row.id)" type="info">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
  
  <script>
import axios from "axios";
import qs from "qs";
export default {
  data() {
    return {
      // 武器识别码，默认空
      armCode: "",
      // 武器列表
      weaponList: [],
      // 使用状态,0未绑定，1已绑定,2,锁死，3损坏，4等等，分配武器时请使用0查询
      weaponStatus: 0,
      placeId: null,
      activityId: null,
      pagenum: 1,
      pagesize: 10000,
      // 添加战队的表单
      addArmRuleForm: {
        uerId: "",
        userName: "",
        chooseWeapon: null,
        // 军衔等级
        armyGrad: "",
        team: ""
      },
      // 添加战队表单验证
      addArmRules: {
        chooseWeapon: [
          { required: true, message: "请选择武器", trigger: "change" }
        ],
        armyGrad: [
          { required: true, message: "请选择职务", trigger: "change" }
        ],
        team: [{ required: true, message: "请选择队伍", trigger: "change" }]
      },
      // 点击加入战队的对话框显示
      addArmDialogVisible: false,
      // 用户名查询
      userQuery: "ddddddddddsry",
      // 用户信息列表
      userList: [],
      armData: [
        // {
        //   date: "2016-05-02",
        //   name: "王小虎",
        //   address: "上海市普陀区金沙江路 1518 弄"
        // },
        // {
        //   date: "2016-05-04",
        //   name: "王小虎",
        //   address: "上海市普陀区金沙江路 1517 弄"
        // },
        // {
        //   date: "2016-05-01",
        //   name: "王小虎",
        //   address: "上海市普陀区金沙江路 1519 弄"
        // },
        // {
        //   date: "2016-05-03",
        //   name: "王小虎",
        //   address: "上海市普陀区金沙江路 1516 弄"
        // }
      ]
    };
  },
  created() {
    this.placeId = this.$route.query.placeId;
    this.activityId = this.$route.query.activityId;
    console.log(`场次ID是${this.placeId},活动ID是${this.activityId}`);
    // 获取武器列表
    this.getWeaponList();
    // 获取人员列表
    this.getTeamMember();
  },
  methods: {
    // 点击编辑弹出模态框
    editOpen(row) {
      this.addArmDialogVisible = true;
      this.addArmRuleForm.uerId = row.memberId;
      this.addArmRuleForm.userName = row.member.name;
      this.addArmRuleForm.chooseWeapon = row.armSn.toString();
      this.addArmRuleForm.armyGrad = row.armyLevel.id;
      this.addArmRuleForm.team = row.teamId;
    },
    // 点击删除弹出确认框
    sureDel(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          var { data: res } = await this.$http.post(
            "actGame/delGameMember",
            qs.stringify({
              Id: id
            })
          );
          if (res.respBody.isSuccess == "true") {
            this.getTeamMember();
            this.$message({
              type: "success",
              message: "删除成功!"
            });
          } else {
            this.$message.info("删除成员失败");
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    // 获取战队人员信息
    async getTeamMember() {
      var { data: res } = await this.$http.post(
        "actGame/queryGameMember",
        qs.stringify({
          game_id: this.placeId,
          pagenum: this.pagenum,
          pagesize: this.pagesize
        })
      );
      // console.log(res);
      if (res.respBody.isSuccess == "OK") {
        this.armData = res.respBody.queries;
        console.log(this.armData);
      }
    },
    // 点击确认加入队伍
    SureJoin() {
      this.$refs.addArmRuleForm.validate(async value => {
        // console.log(value);
        if (value) {
          var { data: res } = await this.$http.post(
            "actGame/addGameMember",
            qs.stringify({
              gameId: this.placeId,
              memberId: this.addArmRuleForm.uerId,
              teamId: this.addArmRuleForm.team,
              levelId: this.addArmRuleForm.armyGrad,
              score: 0,
              armSn: this.addArmRuleForm.chooseWeapon
            })
          );
          console.log(res);
          if (res.respBody.isSuccess == "true") {
            this.$message.success("添加战队成功");
          } else {
            this.$message.info("添加战队失败");
          }
        }
      });
      // this.addArmDialogVisible = false;
    },

    // 关闭对话框
    closeDialog() {
      console.log(111);
      this.$refs.addArmRuleForm.resetFields();
      this.$set(this.addArmRuleForm);
      this.addArmRuleForm.chooseWeapon=null;
      this.addArmRuleForm.armyGrad='';
      this.addArmRuleForm.team='';

    },
    // 点击加入战队
    addTeam(uerId, userName) {
      this.addArmRuleForm.uerId = uerId;
      this.addArmRuleForm.userName = userName;

      this.addArmDialogVisible = true;
    },
    // 测试数据
    start() {
      this.$message.success("本场游戏开始");
    },
    end() {
      this.$message.success("本场游戏结束");
    },
    // 点击搜索，查询用户信息
    async quryUser() {
      var { data: res } = await this.$http.post(
        "member/queryMember",
        qs.stringify({
          name: this.userQuery,
          pagenum: this.pagenum,
          pagesize: this.pagesize
        })
      );
      console.log(res);
      if (res.respBody.isSuccess == "OK") {
        this.userList = res.respBody.queries;
      } else {
        this.$message.info("获取用户信息失败");
      }
      console.log(this.userList);
    },
    // 获取武器信息
    async getWeaponList() {
      var { data: res } = await axios.post(
        "http://122.112.247.149:8003/api/v1/arm/queryArm",
        qs.stringify({
          arm_id: this.armCode,
          status: this.weaponStatus,
          pagenum: this.pagenum,
          pagesize: this.pagesize
        })
      );
      // console.log(res);
      if (res.respBody.isSuccess == "OK") {
        this.weaponList = res.respBody.queries;
      } else {
        this.$message.info("获取武器数据失败");
      }
      console.log(this.weaponList);
    }
  }
};
</script>
    <style >
.content .el-input__inner {
  background-color: rgba(55, 105, 149, 0.8);
  color: #fff;
}
.content .el-input-group__append {
  color: #fff;
}
.content .el-input .el-button {
  background-color: rgba(55, 105, 149, 0.8);
}
.content .el-input {
  color: #fff !important;
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
   <style lang="less">
.el-table {
  color: #fff !important;
  background-color: #51a9f18c !important;
}
</style>
  <style scoped>
.fr {
  float: right;
}
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