<template>
  <div class="resetPasswd">

    <el-form
      ref="form"
      status-icon
      :model="form"
      :rules="rules"
      label-width="80px"
    >
      <h3 class="title">短信验证找回密码</h3>
      <el-form-item
        label="手机号"
        prop="phone"
      >
        <el-input
          v-model="form.phone"
          placeholder="请输入手机号"
        ></el-input>
      </el-form-item>
      </el-form-item>
      <el-form-item
        label="短信验证"
        prop="validateNo"
      >
        <el-row>
          <el-col :span="16">
            <el-input
              v-model="form.validateNo"
              placeholder="请输入短信验证码"
            >
            </el-input>
          </el-col>
          <el-col :span="8">
            <el-button
              @click="getMsgCode"
              type="primary"
              plain
              class="getcodebtn"
            >
              {{codeValue}}</el-button>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item
        label="账号密码"
        prop="passwd"
      >
        <el-input
          v-model="form.passwd"
          type="password"
          placeholder="请输入密码"
        >
        </el-input>
      </el-form-item>
      <el-form-item
        label="确认密码"
        prop="passwd2"
      >
        <el-input
          @keyup.enter.native="resetPasswd"
          v-model="form.passwd2"
          type="password"
          placeholder="请再次输入密码进行验证"
        >
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="resetPasswd"
        >提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>

      <p class="message">
        <router-link to="/login">用户登录</router-link>
        <router-link to="/register">用户注册</router-link>
      </p>
    </el-form>
  </div>
</template>
<script>
import qs from 'qs';
export default {
  data() {
    // 校验密码是否输入正确的二次验证
    var checkPasswd = (rule, value, callback) => {
      if (value !== this.form.passwd) {
        return callback(new Error('两次输入密码不一致'));
      } else {
        callback()
      }
    };
    // 发送验证码前校验用户是否存在，存在才允许发送验证码
    var checkPhone = (rule, value, callback) => {
      this.$http.post('member/validatePhone', qs.stringify({ phone: this.form.phone })).then(res => {
        console.log(res)
        if (res.data.respBody.isSuccess === 'true') {
          callback()
        } else {
          callback(new Error('用户名不存在请重新输入'));
        }
      }).catch(e => {
        console.log(e)
      })
    };
    return {
      form: {
        phone: '',
        passwd: '',
        passwd2: '',
        validateNo: ''
      },
      rules: {
        phone: [{
          required: true,
          message: '请输入手机号',
          trigger: ['blur', 'change']
        },
        {
          pattern: /^1[3456789]\d{9}$/,
          message: '请输入正确的手机号',
          trigger: ['blur', 'change']
        },
        {
          validator: checkPhone,
          trigger: ['blur']
        }
        ],
        passwd: [{
          required: true,
          message: '请输入密码',
          trigger: ['blur', 'change']
        },
        {
          min: 6,
          max: 14,
          message: '密码长度在 6 到 14 个字符',
          trigger: ['blur', 'change']
        }
        ],
        passwd2: [{
          required: true,
          message: '请再次输入密码',
          trigger: ['blur', 'change']
        },
        {
          validator: checkPasswd,
          trigger: ['blur', 'change']
        }
        ],
        validateNo: [{
          required: true,
          len: 4,
          message: '请输入4位验证码',
          trigger: ['blur', 'change']
        }]
      },
      codeValue: '获取验证码', //获取验证码按钮的显示值
      disabled: true, // 是否禁用获取验证码按钮
      totalCount: 10,
      interval: undefined,
    }
  },
  methods: {
    // 
    async resetPasswd() {
      try {
        await this.$refs.form.validate()
        const { data } = await this.$http.post('member/resetPasswd', qs.stringify(this.form))
        if (data.respBody.isSuccess === 'true') {
          this.$message({
            type: 'success',
            message: '密码修改成功，请登录！'
          })
        } else {
          this.$message({
            type: 'error',
            message: '密码修改失败，请稍后重试！'
          })
        }
      } catch (e) {
        console.log(e)
      }
    },
    // 重置按钮重置表单
    resetForm() {
      this.$refs.form.resetFields()
    },
    // 点击发送短信验证码，开启倒计时，60秒后重新发送
    // 点击发送短信验证码，开启倒计时，60秒后重新发送
    getMsgCode() {
      this.$refs.form.validateField('phone', (phoneError) => {
        console.log(`${phoneError}***************************`);
        if (!phoneError) {
          // 按钮60秒倒计时
          this.disabled = true
          this.totalCount = 5
          this.codeValue = `重新发送(${this.totalCount})`
          //补：60秒过倒计时过后才能调用的事件
          // .then(() => {
          //   this.$message('验证码已发送至登记手机号上，请查收。')
          // }).catch((err) => {
          //   this.$message(err);
          // });
          this.interval = setInterval(() => {
            this.totalCount--
            this.codeValue = `重新发送(${this.totalCount})`
            if (this.totalCount === 0) {
              clearInterval(this.interval)
              this.disabled = false
              this.codeValue = `重新发送`
            }
          }, 1000)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.resetPasswd {
  width: 100%;
  height: 100%;
  list-style: none;
  overflow: hidden;
  .el-form {
    width: 450px;
    background: linear-gradient(
      60deg,
      rgba(230, 230, 230, 1),
      rgba(230, 230, 230, 0.5)
    );
    box-shadow: 0px 0px 10px #ccc;
    // background-color: rgba(240, 240, 240, 0.8);
    margin: 0 auto;
    margin-top: 20vh;
    margin-bottom: 10px;
    padding: 20px 35px 20px 20px;
    position: relative;

    .title {
      text-align: center;
      padding-bottom: 40px;
      color: #606266;
    }

    .el-button {
      width: 40%;
    }

    .el-button:last-child {
      float: right;
    }

    .el-button.getcodebtn {
      float: right;
      width: 105px;
    }
    .message {
      border-top: 1px solid rgb(167, 167, 167);
      font-size: 14px;
      display: flex;
      justify-content: space-around;
      padding-top: 15px;
      a {
        color: #409eff;
        cursor: pointer;

        &:hover {
          color: #606266;
        }
      }
    }
  }
}
</style>