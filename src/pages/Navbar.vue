<template>
  <div id="nav-container">
    <ul class="clearfix">
      <li>
        <router-link to="/homePages" class>首页</router-link>
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
        <router-link to="/ActiveBack" class>活动回顾</router-link>
      </li>
      <li>
        <router-link to="/management/datadisplay" class>军民大数据</router-link>
      </li>
    </ul>
    <div class="right">
      <a v-if="!user" class="loginbtn" @click="clickHandler('/login')">登录</a>
      <div v-else class="dropdown">
        <span class="hello">你好</span>
        <a class="dropbtn">{{user.name}}</a>
        <div class="dropdown-content">
          <span @click="clickHandler('/profile')">个人中心</span>
          <br />
          <span @click="clickHandler(null)">退出</span>
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
    async clickHandler(path) {
      if (path) {
        this.$router.push(path);
      } else {
        try {
        await this.$confirm("确认退出?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
        this.$router.push("/homePages");
        localStorage.removeItem("token");
        this.$emit("logout");
      } catch {
        this.$message({
          type: "info",
          message: "已取消退出"
        });
      }
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
  background-color: rgba(31, 31, 31, 0.95);

  ul {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 100%;

    li {
      height: 100%;
      float: left;
      overflow: hidden;

      a {
        height: 100%;
        line-height: 70px;
        padding: 0 25px;
        float: left;
        color: #c9c9dd;
        box-sizing: border-box;

        &:hover {
          background: linear-gradient(to top, #61b0f08c, rgba(0, 0, 0, 0));
          color: #fff;
        }
        &.router-link-active {
          color: #fff;
          background: linear-gradient(to top, #61b0f08c, rgba(0, 0, 0, 0));
        }
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
      cursor: pointer;
    }

    .dropdown {
      cursor: pointer;
      margin-right: 10px;

      .dropbtn {
        border: 1px solid #fff;
        // float: right;
        margin-left: 5px;
        padding: 5px 10px;
        height: 20px;
        line-height: 20px;
        border-radius: 5px;
      }
    }
  }

  .loginbtn {
    border: 1px solid #060c2188;
    background: #61b0f08c;
    margin-right: 10px;
    border-radius: 5px;
    height: 20px;
    line-height: 20px;
    padding: 5px 25px;
    color: white;
  }
}
.dropdown-content {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 60px;
  border-radius: 4px;

  color: #ffffff;
  width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: scale(0);
  transform-origin: right top;
  transition: all 0.3s;
  overflow: hidden;

  span {
    display: inline-block;
    height: 100%;
    width: 100%;
    background-color: #61b0f08c;
    transition: all 0.2s;
  }
  span:hover {
    background-color: #3376ac8c;
  }
}
.dropdown:hover .dropdown-content {
  opacity: 1;
  transform: scale(1);
}
</style>