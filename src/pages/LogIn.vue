<template>
    <div style="height:100%">
        <div v-if="!isShowProfile" class="login-container">
            <div class="form">
                <form v-if="isExist" class="login-form">
                    <input type="text" v-model="phone" placeholder="手机"/>
                    <input type="password" v-model="password" placeholder="密码"/>
                    <button :disabled="!isLoginCompleted" @click="login">登录</button>
                    <p class="message">没有账号？ <span @click="switchExist">注册</span></p>
                </form>
                <form v-else class="register-form">
                    <input type="text" v-model="username" placeholder="用户名"/>
                    <input type="text"  v-model="phone" placeholder="手机号码"/>
                    <input type="text"  v-model="email" placeholder="邮箱"/>
                    <input type="password" v-model="password" placeholder="密码"/>
                    <input type="password" v-model="passwordRepeat"  placeholder="重复密码"/>
                    <input type="text" v-model="verifyCodeInput" placeholder="验证码"/>
                    <button :disabled="!isRegisertCompeleted" @click="register">注册</button>
                    <p class="message">已有账号？ <span @click="switchExist">登录</span></p>
                </form>
            </div>
        </div>
        <div class="form2" v-else>
            <div class="form2-container">
                <form class="register-form">
                    <input type="text" placeholder="昵称"/>
                    <input type="text" placeholder="性别"/>
                    <input type="text"  placeholder="手机号码"/>
                    <input type="text" placeholder="身份证号"/>
                <button :disabled="!isRegisertCompeleted" @click="register">完成注册</button>
            </form>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    import qs from 'qs';
export default {
    data() {
        return {
            username:'',
            password:'',
            phone:'',
            email:'',
            passwordRepeat:'',
            isExist:true,
            isShowProfile: false,
            verifyData:null,
            verifyCodeInput:'',
        }
    },
    computed: {
        isLoginCompleted() {
            return this.phone.length>3 && this.password.length>=6;
        },
        isRegisertCompeleted() {
            const regex = RegExp(/\w+@\w+.{1}\w+/);
            return this.username.length>3 && this.password.length>=6 
            && this.password === this.passwordRepeat && this.email.length > 3;
        }
    },
    methods: {
        login() {
            13212344567
            axios({
                url:`http://47.104.128.89/api/v1/passwdLogin`,
                method: 'post',
                data: qs.stringify({
                    phone: this.phone,
                    passwd: this.password
                })
            }).then(res => {
                if(res.data.respBody.isSuccess){
                    let token = res.data.respHeader.token;
                    localStorage.setItem('token',token);
                    let user = {name: atob(token.split('.')[1]).name || "admin"}
                    console.log(user)
                }
                
            }).catch ( _ => {
                this.phone = '';
                this.password = '';
                this.passwordRepeat = '';
            });
        },
        switchShowProfile() {
            this.isShowProfile = true;
        },
        register() {
            //request param, 需要用qs做转换
            axios({
                url:`http://47.104.128.89/api/v1/register2`,
                method: 'post',
                data: qs.stringify({
                    name:this.username,
                    phone: this.phone,
                    email: this.email,
                    passwd: this.password,
                })
            }).then(res => {
                console.log(res)
                if(res.data.respBody.isSuccess){
                    
                    this.isExist = !this.isExist;
                } else {
                    alert('用户创建失败，请稍后再试');
                }
            }).catch(err => {
                alert("账户注册失败，请稍候再试")
            });
        },
        switchExist() {
            axios.post("http://47.104.128.89/api/getVerifyCode")
            .then(res => {
                //验证码以及验证码图片
                this.verifyData = res.data;
                this.verifyCodeInput = this.verifyData.code;
            });
            this.username = '';
            this.password = '';
            this.passwordRepeat = '';
            this.email = '';
            this.isExist = !this.isExist
        }
    }
}
</script>

<style scoped>
.login-container {
    margin: auto;
    width: 500px;
    height: 300px;
    position: relative;
    transform: translateY(-50%);
    top:40%;
    border-radius: 5px;
}
.form {
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input, .form2 input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}

.form button, .form2 button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4CAF50;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}

.form button:hover,.form button:active,.form button:focus {
  background: #43A047;
}

.form button:disabled {
    background-color: #b3b3b3;
    cursor: not-allowed;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: #4CAF50;
  text-decoration: none;
}
form span {
    cursor: pointer;
    color: #4CAF50;

}

.form2 {
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  height: 100%;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}

.form2-container {
    padding-top: 40px;
    width: 50%;
    margin: auto;
}
</style>