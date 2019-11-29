<template>
  <div class="login">
    <el-tabs
      v-model="activeName"
      :stretch=stretch
    >
      <el-tab-pane
        label="密码登录"
        name="first"
      >
        <el-form
          ref="passwdLoginForm"
          status-icon
          :model="passwdLoginForm"
          :rules="rules"
          label-width="80px"
        >
          <el-form-item
            label="用户"
            prop="phone"
          >
            <el-input
              @keyup.enter.native="login"
              v-model="passwdLoginForm.phone"
              placeholder="请输入手机号码"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="密码"
            prop="passwd"
          >
            <el-input
              id="pwd"
              @keyup.enter.native="login"
              v-model="passwdLoginForm.passwd"
              type="password"
              placeholder="请输入密码"
              class="password"
            >
              <i
                slot="suffix"
                class="el-input__icon el-icon-view el-show"
                @click="showPwd"
              ></i>
            </el-input>
            <!-- <i class="lockBtn el-icon-lock"></i> -->
          </el-form-item>
          <el-form-item
            label="图片验证"
            prop="picCode"
          >
            <el-row>
              <el-col :span="16">
                <el-input
                  v-model="passwdLoginForm.picCode"
                  placeholder="请输入验证码"
                >
                </el-input>
              </el-col>
              <el-col :span="8">
                <img
                  @click="getPicCode"
                  class="vCodeImg"
                  alt="稍后重试"
                  title="点击切换验证码"
                  :src="picCodeSrc"
                />
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="login('passwdLoginForm')"
            >登录</el-button>
            <el-button @click="resetForm('passwdLoginForm')">重置</el-button>
          </el-form-item>
          <p class="message">
            <router-link to="/resetpasswd">忘记密码？</router-link>
            <router-link to="/register">用户注册</router-link>
          </p>
        </el-form>
      </el-tab-pane>
      <el-tab-pane
        label="短信登录"
        name="second"
      >
        <el-form
          ref="msgLoginForm"
          status-icon
          :model="msgLoginForm"
          :rules="rules"
          label-width="80px"
        >
          <el-form-item
            label="手机号码"
            prop="phone2"
          >
            <el-input
              v-model="msgLoginForm.phone2"
              placeholder="请输入手机号码"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="短信验证"
            prop="validateNo"
          >
            <el-row>
              <el-col :span="16">
                <el-input
                  @keyup.enter.native="login"
                  v-model="msgLoginForm.validateNo"
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
          <el-form-item>
            <el-button
              type="primary"
              @click="login('msgLoginForm')"
            >登录</el-button>
            <el-button @click="resetForm('msgLoginForm')">重置</el-button>
          </el-form-item>
          <p class="message">
            <router-link to="/resetpasswd">忘记密码？</router-link>
            <router-link to="/register">用户注册</router-link>
          </p>
        </el-form>
      </el-tab-pane>
    </el-tabs>

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
import axios from 'axios'
import qs from 'qs';
export default {
  data() {
    // 发送验证码前校验用户是否存在，存在才允许发送验证码
    var checkPhone = (rule, value, callback) => {
      this.$http.post('member/validatePhone', qs.stringify({ phone: this.msgLoginForm.phone2 })).then(res => {
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
      passwdLoginForm: {
        phone: '',
        passwd: '',
      },
      msgLoginForm: {
        phone2: '',
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
        }
        ],
        phone2: [{
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
        }],
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
        picCode: [{
          // required: true,
          len: 4,
          message: '请输入4位验证码',
          trigger: ['blur', 'change']
        }],
        validateNo: [{
          // required: true,
          len: 4,
          message: '请输入4位验证码',
          trigger: ['blur', 'change']
        }]
      },
      picCodeSrc: '',
      activeName: 'first',
      stretch: true,
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
  created() {
    this.getPicCode()
  },
  methods: {
    // 是否明文显示密码
    showPwd() {
      const input = document.getElementById('pwd');
      if (input.type === 'password') {
        input.type = 'text';
      } else if (input.type === 'text') {
        input.type = 'password';
      }
    },
    async login(form) {
      try {
        await this.$refs[form].validate()
        // 校验成功, 发送ajax
        // 18800266192
        const url = form == 'passwdLoginForm' ? 'member/passwdLogin' : 'member/validateLogin'
        const para = form == 'passwdLoginForm' ? qs.stringify(this.passwdLoginForm) : qs.stringify({...this.msgLoginForm, phone: this.msgLoginForm.phone2})
        const res = await this.$http.post(url, para)
        const { data } = res
        console.log(data)
        // const { meta: { status, msg }, data } = res
        if (data.respBody.isSuccess === 'true') {
          this.$message({
            type: 'success',
            message: '登录成功',
            duration: 3000
          })
          // 把token和登录的用户名存储起来
          let token = data.respHeader.token
          let username = atob(token.split('.')[1]).name || 'admin'
          localStorage.setItem('token', token)
          // 编程式导航
          this.$router.push('/profile')
          this.$router.go(0)
        } else {
          this.$message({
            type: 'error',
            message: '登陆失败',
            duration: 3000
          })
        }
      } catch (e) {
        console.log(e)
      }
    },
    // 重置按钮重置表单
    resetForm(form) {
      this.$refs[form].resetFields()
    },
    // 获得验证码图片
    async getPicCode() {
      const res = await axios.post('http://47.104.128.89:8001/api/v1/getVerifyCode')
      // const res = await this.$http.post('getVerifyCode')
      console.log(res)
      if (res.status === 200) {
        this.picCodeSrc = `data:image/png;base64,${res.data.image}`
        console.log(this.picCodeSrc)
      }
    },
    // 点击发送短信验证码，开启倒计时，60秒后重新发送
    getMsgCode() {
      this.$refs.msgLoginForm.validateField('phone', (phoneError) => {
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
<style lang="less">
.login {
  .el-tabs__nav-wrap::after {
    background-color: transparent;
  }
  .el-tabs__item {
    color: #606266;
  }
}
</style>
<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  list-style: none;
  overflow: hidden;
  display: flex;
  justify-content: center;

  .el-tabs {
    background: linear-gradient(
      60deg,
      rgba(230, 230, 230, 1),
      rgba(230, 230, 230, 0.5)
    );
    box-shadow: 0px 0px 10px #ccc;
    margin-top: 20vh;
    margin-bottom: 10px;
  }
  .el-form {
    width: 450px;
    padding: 10px 35px 15px 20px;
    position: relative;
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
    .el-icon-view {
      &:hover {
        cursor: pointer;
      }
    }
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
  .vCodeImg {
    height: 40px;
    float: right;
    cursor: pointer;
  }
}

// .login-container {
//     margin: auto;
//     width: 500px;
//     height: 300px;
//     position: relative;
//     transform: translateY(-50%);
//     top: 90%;
//     border-radius: 5px;
//     height: 100%;
// }

// .form {
//     position: absolute;
//     z-index: 1;
//     background: #FFFFFF;
//     max-width: 360px;
//     margin: 0 auto 100px;
//     padding: 45px;
//     text-align: center;
//     box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
// }

// .form input,
// .form2 input {
//     font-family: "Roboto", sans-serif;
//     outline: 0;
//     background: #f2f2f2;
//     width: 100%;
//     border: 0;
//     margin: 0 0 15px;
//     padding: 15px;
//     box-sizing: border-box;
//     font-size: 14px;
// }

// .form button,
// .form2 button {
//     font-family: "Roboto", sans-serif;
//     text-transform: uppercase;
//     outline: 0;
//     background: #4CAF50;
//     width: 100%;
//     border: 0;
//     padding: 15px;
//     color: #FFFFFF;
//     font-size: 14px;
//     -webkit-transition: all 0.3 ease;
//     transition: all 0.3 ease;
//     cursor: pointer;
// }

// .form button:hover,
// .form button:active,
// .form button:focus {
//     background: #43A047;
// }

// .form button:disabled {
//     background-color: #b3b3b3;
//     cursor: not-allowed;
// }

// .form .message {
//     margin: 15px 0 0;
//     color: #b3b3b3;
//     font-size: 12px;
// }

// .form .message a {
//     color: #4CAF50;
//     text-decoration: none;
// }

// form span {
//     cursor: pointer;
//     color: #4CAF50;

// }

// .form2 {
//     position: relative;
//     z-index: 1;
//     background: #FFFFFF;
//     height: 100%;
//     text-align: center;
//     box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
// }

// .form2-container {
//     padding-top: 40px;
//     width: 50%;
//     margin: auto;
// }
</style>