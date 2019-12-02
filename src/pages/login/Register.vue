<template>
  <div class="register">

    <el-form
      ref="form"
      status-icon
      :model="form"
      :rules="rules"
      label-width="80px"
    >

      <h3 class="title">用户注册</h3>
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
        prop="code"
      >
        <el-row>
          <el-col :span="16">
            <el-input
              v-model="form.code"
              placeholder="请输入短信验证码"
            >
            </el-input>
          </el-col>
          <el-col :span="8">
            <el-button
              @click="getMsgCode"
              :disabled="disabled"
              type="primary"
              plain
              class="getcodebtn"
            >{{codeValue}}</el-button>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item
        label="用户名"
        prop="name"
      >
        <el-input
          v-model="form.name"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="电子邮箱"
        prop="email"
      >
        <el-input
          v-model="form.email"
          placeholder="请输入邮箱"
        ></el-input>
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
          @keyup.enter.native="register"
          v-model="form.passwd2"
          type="password"
          placeholder="请再次输入密码进行验证"
        >
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="register"
        >注册</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
      <p class="message">
        <router-link to="/login">立即登录</router-link>
      </p>
    </el-form>
    <!-- <div v-if="!isShowProfile" class="login-container">
                  <div class="form">
                      <form v-if="isExist" class="login-form">
                          <input type="text" v-model="phone" placeholder="手机" />
                          <input type="password" v-model="password" placeholder="密码" />
                          <button :disabled="!isLoginCompleted" @click="login">登录</button>
                          <p class="message">没有账号？ <span @click="switchExist">注册</span></p>
                      </form>
                      <form v-else class="register-form">
                          <input type="text" v-model="username" placeholder="用户名" />
                          <input type="text" v-model="phone" placeholder="手机号码" />
                          <input type="text" v-model="email" placeholder="邮箱" />
                          <input type="password" v-model="password" placeholder="密码" />
                          <input type="password" v-model="passwordRepeat" placeholder="重复密码" />
                          <input type="text" v-model="verifyCodeInput" placeholder="验证码" />
                          <button :disabled="!isRegisertCompeleted" @click="register">注册</button>
                          <p class="message">已有账号？ <span @click="switchExist">登录</span></p>
                      </form>
                  </div>
              </div>
              <div class="form2" v-else>
                  <div class="form2-container">
                      <form class="register-form">
                          <input type="text" placeholder="昵称" />
                          <input type="text" placeholder="性别" />
                          <input type="text" placeholder="手机号码" />
                          <input type="text" placeholder="身份证号" />
                          <button :disabled="!isRegisertCompeleted" @click="register">完成注册</button>
                      </form>
                  </div>
              </div> -->
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
    return {
      form: {
        phone: '',
        passwd: '',
        passwd2: '',
        name: '',
        code: '',
        email: ''
      },
      rules: {
        name: [{
          required: true,
          message: '请输入用户名',
          trigger: ['blur', 'change']
        },
        {
          min: 1,
          max: 10,
          message: '密码长度在 1 到 10 个字符',
          trigger: ['blur', 'change']
        }
        ],
        phone: [{
          required: true,
          message: '请输入手机号',
          trigger: ['blur', 'change']
        },
        {
          pattern: /^1[3456789]\d{9}$/,
          message: '请输入正确的手机号',
          trigger: ['blur', 'change']
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
        email: [{
          required: true,
          message: '请输入邮箱',
          trigger: ['blur', 'change']
        },
        {
          pattern: /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,
          message: '请输入正确的邮箱',
          trigger: ['blur', 'change']
        }
        ],
        code: [{
          required: true,
          len: 4,
          message: '请输入4位验证码',
          trigger: ['blur', 'change']
        }]
      },
      codeValue: '获取验证码',  //获取验证码按钮的显示值
      disabled: false,  // 是否禁用获取验证码按钮
      totalCount: 10,
      interval: undefined,
      // username: '',
      // password: '',
      // phone: '',
      // email: '',
      // passwordRepeat: '',
      // isExist: true,
      // isShowProfile: false,
      // verifyData: null,
      // verifyCodeInput: '',
    }
  },
  computed: {
    // isLoginCompleted() {
    //   return this.phone.length > 3 && this.password.length >= 6;
    // },
    // isRegisertCompeleted() {
    //   const regex = RegExp(/\w+@\w+.{1}\w+/);
    //   return this.username.length > 3 && this.password.length >= 6 &&
    //     this.password === this.passwordRepeat && this.email.length > 3;
    // }
  },
  methods: {
    async register() {
      try {
        await this.$refs.form.validate()
        // 校验成功, 发送ajax
        // 18800266192
        const res = await this.$http.post('member/register', qs.stringify(this.form))
        const { data } = res
        console.log(res)
        // const { meta: { status, msg }, data } = res
        if (data.respBody.isSuccess === 'true') {
          this.$message({
            type: 'success',
            message: '注册成功，请登录!',
            duration: 3000
          })
          // 编程式导航
          // this.$router.push('/login')
        } else {
          this.$message({
            type: 'error',
            message: data.respHeader.respMessage,
            duration: 3000
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
    // login() {
    //   this.$http.post('member/passwdLogin', qs.stringify({
    //     phone: this.phone,
    //     passwd: this.password
    //   })).then(res => {
    //     if (res.data.respBody.isSuccess) {
    //       let token = res.data.respHeader.token;
    //       localStorage.setItem('token', token);
    //       let user = {
    //         name: atob(token.split('.')[1]).name || "admin"
    //       };
    //       console.log(user)
    //       this.$emit('login');
    //       this.$router.push('/profile');
    //     }

    //   }).catch(_ => {
    //     this.phone = '';
    //     this.password = '';
    //     this.passwordRepeat = '';
    //   });
    // },
    // switchShowProfile() {
    //   this.isShowProfile = true;
    // },
    // register() {
    //   //request param, 需要用qs做转换
    //   this.$http.post('member/register2', qs.stringify({
    //     name: this.username,
    //     phone: this.phone,
    //     email: this.email,
    //     passwd: this.password,
    //   })).then(res => {
    //     console.log(res)
    //     if (res.data.respBody.isSuccess) {

    //       this.isExist = !this.isExist;
    //     } else {
    //       alert('用户创建失败，请稍后再试');
    //     }
    //   }).catch(err => {
    //     alert("账户注册失败，请稍候再试")
    //   });
    // },
    // switchExist() {
    //   axios.post("http://47.104.128.89/api/getVerifyCode")
    //     // axios.post("${this.GLOBAL.baseUrl}api/getVerifyCode")
    //     .then(res => {
    //       //验证码以及验证码图片
    //       this.verifyData = res.data;
    //       this.verifyCodeInput = this.verifyData.code;
    //     });
    //   this.username = '';
    //   this.password = '';
    //   this.passwordRepeat = '';
    //   this.email = '';
    //   this.isExist = !this.isExist
    // }
  }
}
      </script>
      
      <style lang="less" scoped>
.register {
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
    margin-top: 10vh;
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