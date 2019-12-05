<template>
  <div class="personal-container">
    <div class="box">
      <el-tabs
        tab-position="left"
        style="height: 200px;"
      >
        <el-tab-pane
          label="个人资料"
          class="content"
        >
          <ul>
            <li>昵称： ddddddddddsry <a @click="showInfoDialog">修改</a></li>
            <li>姓名： 宋**</li>
            <li>性别： 女</li>
            <li>手机号码: 188*****192</li>
            <li>电子邮箱： songruyi0804@163.com</li>
            <li>身份证号： 310************720</li>
            <li>联系人： 周梅权</li>
            <li>联系人手机： 13795288439</li>
          </ul>
        </el-tab-pane>
        <el-tab-pane
          label="我的积分"
          class="content myIntegral"
        >
          <p class="p1">您好！您当前的总积分为<span class="integral">466</span>分, 可用积分为<span class="integral">350</span>分, 在<a class="detail">积分明细</a>可查看更多信息。</p>
          <h3>积分用途</h3>
          <h4>武器兑换</h4>
          <p class="item">当累计到足够数量的可用积分，即可前往<a href="">设备管理</a>兑换武器</p>
          <h4>军衔升级</h4>
          <p class="item">每累计总积分数为10000时即可升级军衔</p>
          <h3>积分获取</h3>
          <h4>参与活动</h4>
          <p class="item">参与本站活动, 根据击杀人数及击杀对象的军衔判定获取积分奖励(与活动胜负无关)</p>
          <h4>邀请朋友</h4>
          <p class="item">邀请亲朋好友成为平台注册用户即可获取1000积分奖励</p>
        </el-tab-pane>
        <el-tab-pane
          label="安全中心"
          class="content safetyCenter"
        >
          <ul>
            <li>姓名: 宋** <a @click="showSafeDialog('姓名')">修改</a></li>
            <li>手机号码: 188*****192 <a @click="showSafeDialog('手机号码')">修改</a></li>
            <li>电子邮箱: songruyi0804@163.com<a @click="showSafeDialog('电子邮箱')">修改</a></li>
            <li>登录密码: 1****6<a @click="showSafeDialog('登录密码')">修改</a></li>
          </ul>
        </el-tab-pane>
      </el-tabs>
    </div>

    <!-- 点击个人资料页的‘修改’弹出的模态框 -->
    <el-dialog
      title="修改个人资料"
      :visible.sync="infoDialogVisible"
      width="30%"
    >
      <el-form
        ref="infoForm"
        :model="infoForm"
        label-width="100px"
      >
        <el-form-item
          label="昵称"
          prop="nickname"
        >
          <el-input v-model="infoForm.nickname"></el-input>
        </el-form-item>
        <el-form-item
          label="性别"
          prop="sex"
        >
          <el-input v-model="infoForm.sex"></el-input>
        </el-form-item>
        <el-form-item
          label="联系人"
          prop="linkmanName"
        >
          <el-input v-model="infoForm.linkmanName"></el-input>
        </el-form-item>
        <el-form-item
          label="联系人手机"
          prop="linkmanPhone"
        >
          <el-input v-model="infoForm.linkmanPhone"></el-input>
        </el-form-item>
      </el-form>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="infoDialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="modifyInfo"
        >确 定</el-button>
      </span>
    </el-dialog>

        <!-- 点击安全中心页的‘修改’弹出的模态框 -->
    <el-dialog
      :title="safeDialogTitle"
      :visible.sync="safeDialogVisible"
      width="30%"
    >
      <el-form
        ref="safeForm"
        :model="safeForm"
        label-width="100px"
      >
        <el-form-item
          :label="safeDialogLabel"
          prop="nickname"
        >
          <el-input v-model="safeForm.name"></el-input>
        </el-form-item>
      </el-form>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="safeDialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="modifySafe"
        >确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      infoDialogVisible: false,
      safeDialogVisible: false,
      infoForm: {
        name: ''
      },
      safeForm: {
        name: ''
      },
      safeDialogTitle: '修改姓名',
      safeDialogLabel: '姓名'
    }
  },
  methods: {
    showInfoDialog() {
      this.infoDialogVisible = true
    },
    modifyInfo() {

    },
    showSafeDialog(target) {
      this.safeDialogVisible = true
      this.safeDialogTitle = `修改${target}`
      this.safeDialogLabel = target
    },
    modifySafe() {

    }
  }
}
</script>
<style lang="less">
.personal-container {
  .el-tabs {
    height: 100% !important;
  }
  .el-tabs__item {
    color: #fff;
  }
}
</style>
<style lang="less" scoped>
.personal-container {
  min-width: 1055px;
  display: flex;
  justify-content: center;
  //   height: 100%;
  padding-top: 100px;
  box-sizing: border-box;
  width: 100%;

  .box {
    box-sizing: border-box;
    padding: 50px;
    background: rgba(0, 0, 0, 0.4);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.33);
    width: 80%;
    // height: 100%;
  }
  .content {
    padding-left: 60px;
    color: #fff;
    li {
      height: 50px;
      line-height: 50px;
      width: 50%;
      a {
        float: right;
      }
    }

    .detail,
    a {
      text-decoration: underline;
      color: #409eff;
    }
  }
  .myIntegral {
    .integral {
      padding: 0 10px;
      font-size: 30px;
    }
    .p1 {
      margin-bottom: 40px;
    }
    h3 {
      margin: 20px 0 10px 0;
      color: #409eff;
    }
    .item {
      color: #ccc;
      margin-bottom: 5px;
    }
    h4 {
      margin-bottom: 5px;
    }
  }
  .safetyCenter {
    a {
      float: right;
    }
  }
}
</style>