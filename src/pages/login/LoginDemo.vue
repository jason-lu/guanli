<template>
    <div class="content-container developer-container dev-register-container">
      <nav-bar
        :address="address"
        :title="title"
        :register="true">
      </nav-bar>
      <div class="steps">
        <el-steps :active="2" align-center>
          <el-step title="开发商信息"></el-step>
          <el-step title="提交资质"></el-step>
          <el-step title="管理员信息"></el-step>
        </el-steps>
      </div>
      <div class="form-list">
          <el-form ref="thirdForm" size="medium" label-position="right" :model="thirdForm" :rules="rules" label-width="100px">
              <el-form-item label="管理员姓名" prop="userName" v-if="firstForm.devpType==0">
                  <el-input v-model.trim="thirdForm.userName" placeholder="请输入管理员姓名，最多20字" ></el-input>
              </el-form-item>
   
              <el-form-item label="管理员账号" prop="account">
                  <el-input v-model.trim="thirdForm.account" placeholder="请输入管理账号，最多50字"></el-input>
              </el-form-item>
   
              <el-form-item label="登录密码" prop="password"  >
                <el-input id="pwd" v-model.trim="thirdForm.password" type="password" placeholder="请输入长度为10-20位包含数字字母及其他特殊字符的密码" minlength="10" maxlength="20">
                  <i slot="suffix" class="el-input__icon el-icon-view el-show" @click="showPwd"></i>
                </el-input>
              </el-form-item>
   
              <el-form-item label="电子邮箱" prop="email">
                  <el-input  v-model.trim="thirdForm.email" placeholder="请输入电子邮箱，最多50字"></el-input>
              </el-form-item>
   
              <el-form-item label="电话" prop="telephone" v-if="firstForm.devpType==0">
                  <el-input  v-model.trim="thirdForm.telephone" placeholder="请输入电话，最多50字"></el-input>
              </el-form-item>
   
              <el-form-item label="传真" prop="fax" v-if="firstForm.devpType==0">
                  <el-input  v-model.trim="thirdForm.fax" placeholder="请输入传真，最多50字"></el-input>
              </el-form-item>
   
              <el-form-item label="邮编" prop="postCode" v-if="firstForm.devpType==0">
                  <el-input  v-model.trim="thirdForm.postCode" placeholder="请输入邮编，最多10字" maxlength=10></el-input>
              </el-form-item>
   
              <el-form-item label="手机号码" prop="phone" >
                  <el-input  v-model.trim="thirdForm.phone" placeholder="请输入手机号码" maxlength=11></el-input>
              </el-form-item>
   
              <el-form-item label="图片验证码" prop="captchaCode" >
                  <div class="vertification-area">
                      <el-input  v-model.trim="thirdForm.captchaCode" placeholder="请输入图片验证码" maxlength="10" style="margin-bottom: 0px; width: calc(100% - 110px); float: left;">
                      </el-input>
                      <img :src="captchaUrl" class="vertification-code" @click="refresh"/>
                    </div>
              </el-form-item>
   
              <el-form-item label="手机验证码" prop="phoneValidation" >
                  <div>
                      <el-input  v-model.trim="thirdForm.phoneValidation" placeholder="请输入手机验证码" style="width: calc(100% - 110px);" maxlength="6"></el-input>
                      <el-button v-show="sendAuthCode" @click="sendMsg(thirdForm.phone)" type="primary" class="sendMsg">发送验证码</el-button>
                      <el-button v-show="!sendAuthCode" type="primary" class="sendMsg">{{auth_time}}秒</el-button>
                  </div>
              </el-form-item>
              <el-form-item class="btn-wrap">
                <el-button class="previousStep" @click="previousStep()" >上一步</el-button>
                <el-button :disabled="this.sendAuthCode"  type="primary" @click="nextStep('thirdForm')" class="submitButton">提交</el-button>
              </el-form-item>
          </el-form>
      </div>
    </div>
    </template>
   
  <script>
  import md5 from '@/utils/MD5';
  import api from '@/api/mopApi';
  import global from '@/global';
  import navBar from '@/components/nav-bar';
  import titleBar from './basic/TitleBar';
   
  export default {
    data() {
      return {
        title: '移动运营平台',
        address: 'title.png',
        sendAuthCode: true, /* 布尔值，通过v-show控制显示‘获取按钮’还是‘倒计时’ */
        auth_time: '120', /* 倒计时 计数器 */
        firstForm: {},
        thirdForm: {
          userName: '',
          account: '',
          password: '',
          email: '',
          telephone: '',
          fax: '',
          postCode: '',
          phone: '',
          phoneValidation: '',
          captchaCode: '',
        },
        captchaUrl: `${global.CTX}/captcha`,
        rules: {
          userName: [
            { required: true, message: '请输入管理员姓名', trigger: 'blur' },
            { min: 1, max: 20, message: '管理员姓名在20字以内', trigger: 'blur' },
   
          ],
          account: [
            { required: true, message: '请输入管理员账号', trigger: 'blur' },
            { min: 1, max: 50, message: '管理员账号在50字以内', trigger: 'blur' },
            { pattern: /^\S+$/, message: '账号不允许有空格', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入长度为10-20位包含数字、字母、特殊字符的密码', trigger: 'blur' },
            { pattern: /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_]).{10,20}$/, message: '请输入长度为10-20位包含数字、字母、特殊字符的密码', trigger: 'blur' },
          ],
          postCode: [
            { max: 10, message: '邮编长度10位以内', trigger: 'blur' },
          ],
          fax: [
            { max: 50, message: '传真长度50字以内', trigger: 'blur' },
          ],
          email: [
            { required: true, message: '请输入邮箱', trigger: 'blur' },
            { max: 50, message: '邮箱在50字以内', trigger: 'blur' },
            { pattern: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/, message: '请检查邮箱格式是否正确', trigger: 'blur' },
          ],
  //最后的校验规则，不需要自己写校验规则也可以写成 { type: 'email', message: '请检查邮箱格式是否正确', trigger: 'blur' },
          /*type的枚举值有
              string: Must be of type string. This is the default type.
              number: Must be of type number.
              boolean: Must be of type boolean.
              method: Must be of type function.
              regexp: Must be an instance of RegExp or a string that does not generate an exception when creating a new RegExp.
              integer: Must be of type number and an integer.
              float: Must be of type number and a floating point number.
              array: Must be an array as determined by Array.isArray.
              object: Must be of type object and not Array.isArray.
              enum: Value must exist in the enum.
              date: Value must be valid as determined by Date
              url: Must be of type url.
              hex: Must be of type hex.
              email: Must be of type email.
              https://github.com/yiminghe/async-validator#type 
              https://www.cnblogs.com/chaoxiZ/p/10136780.html
  */
          telephone: [
            { max: 50, message: '电话长度在50位以内', trigger: 'blur' },
          ],
          phone: [
            { required: true, message: '请输入手机号码', trigger: 'blur' },
            { pattern: /^((1[3,5,8][0-9])|(14[5,7])|(17[0,5,6,7,8])|(19[7]))\d{8}$/, message: '请检查手机号是否正确', trigger: 'blur' },
          ],
          phoneValidation: [
            { required: true, message: '请输入手机验证码', trigger: 'blur' },
          ],
          captchaCode: [
            { required: true, message: '请输入图片验证码', trigger: 'blur' },
          ],
        },
      };
    },
    components: {
      titleBar,
      navBar,
    },
    methods: {
      // 是否显示密码
      showPwd() {
        const input = document.getElementById('pwd');
        if (input.type === 'password') {
          input.type = 'text';
        } else if (input.type === 'text') {
          input.type = 'password';
        }
      },
      // 刷新图片验证码
      refresh() {
        this.captchaUrl = `${global.CTX}/captcha?tm=${Math.random()}`;
      },
   
      // 倒计时
      getAuthCode() {
        if (this.authTimeTimer) {
          clearTimeout(this.authTimeTimer);
        }
        this.authTimeTimer = setTimeout(() => {
          this.auth_time -= 1;
          if (this.auth_time < 0) {
            this.sendAuthCode = true;
            clearTimeout(this.authTimeTimer);
          } else {
            this.getAuthCode();
          }
        }, 1000);
      },
      // 发送短信
      sendMsg(phoneNum) {
        this.$refs.thirdForm.validateField('phone', (phoneError) => {
          console.log(`${phoneError}***************************`);
   
          if (!phoneError) {
            this.auth_time = 120;
            this.sendAuthCode = false;
            api.sendMsg({
              params: {
                params: {
                  phone: phoneNum,
                  reason: 'developerReg',
                },
              },
            }).then(() => {
              this.getAuthCode();
              this.$confirm('验证码已发送至登记手机号上，请查收。', {
                confirmButtonText: '确定',
                center: true,
              });
            }).catch((err) => {
              this.sendAuthCode = true;
              this.$message({
                message: err.response.message,
                type: 'error',
              });
            });
          }
        });
      },
   
      // 验证登入账号是否存在
      checkDevpUserAccount(account) {
        api.checkDevpUserAccount({
          params: {
            params: {
              account,
            },
          },
        }).then((data) => {
          if (data.state === 0) {
            this.checkCaptcha();
          }
        }).catch((err) => {
          this.$message({
            message: err.response.message,
            type: 'error',
          });
        });
      },
   
      // 图片验证码验证是否正确
      checkCaptcha() {
        api.getCaptcha({
          params: {
            params: {
              captchaCode: this.thirdForm.captchaCode,
            },
          },
        }).then(() => {
          this.checkSmsValidCode();
        }).catch((err) => {
          this.$message({
            message: err.tip,
            type: 'error',
          });
          this.refresh();
        });
      },
   
      // 验证短信验证码
      checkSmsValidCode() {
        api.verifySmsValidCode({
          params: {
            params: {
              phone: this.thirdForm.phone,
              reason: 'developerReg',
              validCode: this.thirdForm.phoneValidation,
            },
          },
        }).then((data) => {
          if (data.state === 0) {
            this.submit();
          }
        }).catch((err) => {
          this.$message({
            message: err.tip,
            type: 'error',
          });
        });
      },
   
      // 上一步
      previousStep() {
        sessionStorage.setItem('needSecondStepCache', '1');
        this.$router.push({ name: 'DeveloperSecond' });
      },
      // 下一步
      nextStep(thirdForm) {
        this.$refs[thirdForm].validate((valid) => {
          if (valid) {
            this.checkDevpUserAccount(this.thirdForm.account);
          }
        });
      },
      // 向后台提交数据
      submit() {
        if (this.firstForm.devpType === '1') {
          this.thirdForm.userName = this.firstForm.devpNameself;
        }
        this.secondForm.cmmiLevel = (this.secondForm.cmmiLevel === '无' ? '' : this.secondForm.cmmiLevel);
        this.secondForm.isoLevel = (this.secondForm.isoLevel === '无' ? '' : this.secondForm.isoLevel);
        const passwordTemp = md5(this.thirdForm.password);
        api.registeredDeveloper({
          params: {
            data: {
              devpType: this.firstForm.devpType,
              devpName: this.firstForm.devpName,
              devpCode: this.firstForm.devpCode,
              logo: this.firstForm.logo,
              companyAddress: this.firstForm.companyAddress,
              companyDescrible: this.firstForm.companyDescrible,
              companyBusiness: this.firstForm.companyBusiness,
              identifyPositiveId: this.firstForm.identifyPositiveId,
              identifyReverseId: this.firstForm.identifyReverseId,
              employeeCode: this.firstForm.employeeCode,
              remarks: this.firstForm.remarks,
   
              cmmiLevel: this.secondForm.cmmiLevel,
              isoLevel: this.secondForm.isoLevel,
              qualificationId: this.secondForm.qualificationId,
   
              userName: this.thirdForm.userName,
              account: this.thirdForm.account,
              password: passwordTemp,
              email: this.thirdForm.email,
              telephone: this.thirdForm.telephone,
              fax: this.thirdForm.fax,
              postCode: this.thirdForm.postCode,
              phone: this.thirdForm.phone,
            },
          },
        }).then(() => {
          this.$router.push({
            name: 'ReturnSuccessMsg',
            params: {},
          });
        }).catch((err) => {
          this.$message({
            message: err.response.message,
            type: 'error',
          });
        });
      },
    },
    mounted() {
      this.firstForm = JSON.parse(sessionStorage.getItem('firstForm')) || {};
      this.secondForm = JSON.parse(sessionStorage.getItem('secondForm')) || {};
    },
  };
  </script>
   
  <style scoped lang="less">
    .developer-container {
      overflow: hidden;
      .btn-wrap{
        border-top: 1px solid #EBEEF6;
        padding-top: 30px;
        font-size: 0;
        .previousStep{
          padding: 10px 28px;
        }
        .submitButton{
          padding: 10px 35px;
        }
      }
    }
    .fl {
      float: left;
    }
    .fr {
      float: right;
    }
    .block {
      float: right;
      margin-left: -5px;
      margin-top: 20px;
    }
    .disabled {
      cursor: default;
      color: #bbb;
      pointer-events: none;
    }
    .vertification-area {
      height: 36px;
      .vertification-code {
        float: left;
        height: 36px;
        line-height: 36px;
        width: 100px;
        margin-left: 10px;
        border-radius: 4px;
        color: #fff;
        font-size: 24px;
        text-align: center;
        font-weight: bolder;
        cursor: pointer;
      }
    }
    .el-icon-view{
      &:hover{
        cursor: pointer;
      }
    }
  </style>
  <style lang="less">
  .dev-register-container{
    .steps {
      padding:40px 22%;
      margin: 48px auto 0;
      background: #F9FAFC;
      border-bottom: 1px solid #EBEEF6;
      @media screen and (max-width: 1660px) {
        padding: 40px 16%;
      }
      @media screen and (max-width: 1280px) {
        padding: 40px 10%;
      }
      .el-step__line{
        top: 14px;
      }
      .el-step__head {
        .el-step__icon{
          width: 30px;
          height: 30px;
          font-size: 14px;
          border-color: #C0CCDA;
          color: #C0CCDA;
        }
        &.is-process{
          .el-step__icon{
            color:#fff;
            background: #C0CCDA;
          }
        }
        &.is-finish{
          .el-step__icon{
            color:#fff;
            background: #20A0FF;
            border-color: #20A0FF;
          }
        }
      }
      .el-step__title {
        font-size: 14px;
        color: #C0CCDA;
        font-weight: bold;
        &.is-process{
          color: #475669;
        }
        &.is-finish{
          color: #20A0FF;
        }
      }
    }
    .form-list {
      margin: 30px auto 0;
      max-width: 800px;
      width: 75%;
    }
    .sendMsg{
      height:36px;
      vertical-align:middle;
      width: 100px;
      margin-left: 5px;
      padding: 10px 15px;
    }
  }
  </style>