<template>
  <div id="nav-container">
    <ul class="clearfix">
      <li>
        <router-link to="/" class>首页</router-link>
      </li>
      <li>
        <router-link to="/activities" class>活动</router-link>
      </li>
      <li>
        <router-link to="/venue" class>场馆</router-link>
      </li>
      <li>
        <router-link to="/operationalVideo" class>作战视频</router-link>
      </li>
      <li>
        <router-link to="/venue" class>活动回顾</router-link>
      </li>
      <li>
        <router-link to="/management/datadisplay" class>军民大数据</router-link>
      </li>
    </ul>
    <div class="right">
      <a v-if="!user" class="loginbtn" @click="clickHandler('/login',$event)">登录</a>
      <div v-else class="dropdown">
        你好
        <a class="dropbtn">{{user.name}}</a>
        <div class="dropdown-content">
          <span @click="clickHandler('/profile',$event)">个人中心</span>
          <span @click="clickHandler(null,$event)">退出</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: Object
  },
  methods: {
    clickHandler(path, event) {
      event.preventDefault();
      if (path) {
        this.$router.push(path);
      } else {
        this.$emit("logout");
      }
    }
  }
};
</script>

<style lang="less" scoped>
#nav-container {
  width: 100%;
  line-height: 70px;
  height: 70px;
  position: fixed;
  top: 0;
  padding: 4px 0;
  color: #fff;
  text-align: center;
  z-index: 10;
  background-color: #000000;

  ul {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    li {
      float: left;
      border: 1px solid #f1f1f1;
      background: #61b0f08c;
      margin-right: 10px;
      border-radius: 5px;
      //   background: linear-gradient(to top, #61b0f08c, #98b8d38c);

      a {
        height: 20px;
        line-height: 20px;
        padding: 5px 25px;
        float: left;
        color: white;
      }
    }
  }

  .right {
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);

    .loginbtn {
      float: left;
    }

    .dropdown {
      margin-top: 70px;

      .dropdown-content {
        // display: none;
        position: absolute;
        right: 0;
        border-radius: 4px;
        background-color: #61b0f08c;
        color: #ffffff;
        width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      }
    }
  }

  .loginbtn {
    border: 1px solid #f1f1f1;
    background: #61b0f08c;
    margin-right: 10px;
    border-radius: 5px;
    height: 20px;
    line-height: 20px;
    padding: 5px 25px;
    color: white;
  }
}

// .right {
//   float: right;
//   margin-right: 5px;
// }

// div.dropdown {
//   position: relative;
//   display: inline-block;
// }
// span {
//   font-weight: bold;
// }
// button.dropbtn {
//   background-color: #ffffff00;
//   border: 1px solid #ffffff;
//   border-radius: 4px;
//   outline: none;
//   color: white;
//   cursor: pointer;
// }
// div.dropdown-content {
//   display: none;
//   position: absolute;
//   right: 0;
//   border-radius: 4px;
//   background-color: #61b0f08c;
//   color: #ffffff;
//   width: 160px;
//   box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
// }
// .dropdown-content span {
//   display: block;
//   text-decoration: none;
//   color: #ffffff;
//   padding: 12px 15px;
//   cursor: pointer;
//   font-weight: normal !important;
// }
// /*注意这里不是.dropbtn:hover，因为dropbtn是一个button,不能够用hover*/
// .dropdown:hover .dropdown-content {
//   display: block;
// }
// .dropdown-content a:hover {
//   background-color: #90cafa8c;
// }
// .dropdown:hover .dropbtn {
//   background-color: #90cafa8c;
// }
</style>