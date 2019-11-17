<template>
  <div id="main-container" class="clearfix">
    <Navbar :user="user" @logout="logout"></Navbar>
    <Home :user="user" @login="login" />
  </div>
</template>

<script>
import Home from "./pages/Home.vue";
import Navbar from "./pages/Navbar.vue";
export default {
  mounted() {
    let tokenStr = localStorage.getItem("token");
    if (tokenStr) {
      let userStr = tokenStr.split(".")[1];
      this.user = JSON.parse(atob(userStr));
      console.log(this.user);
    }
  },
  data() {
    return {
      vue: "vue-webpack", 
      isAdmin: false,
      user: null
    };
  },
  components: {
    Home,
    Navbar
  },
  methods: {
    login() {
      this.user = JSON.parse(localStorage.getItem("currentUser"));
      console.log(this.user);
    },
    logout() {
      this.user = null;
      localStorage.removeItem("currentUser");
    }
  }
};
</script>


<style lang="less">
body {
  margin: 0;
  height: 100vh;
}

#main-container {
  /* position:fixed; */
  overflow: auto;
  width: 100%;
  background-image: url("./assets/img/mainbackground.png");
  background-size: cover;
  background-repeat: no-repeat no-repeat;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.content-container {
  background: #f1f1f12a;
  flex-grow: 1;
  display: flex;
}

ul {
  list-style: none;
}

// 多行溢出
.ellipsis {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

// 场馆及活动管理页面标题
.activity-title,
.venue-title {
  width: 600px;
  height: 80px;
  line-height: 80px;
  margin: 0 auto;
  text-align: center;
  border-bottom: 1px solid #fff;
  color: #fff;
  font-size: 26px;
  margin-bottom: 20px;
}

.venue-container,
.activity-container {
  // 修改默认的elementui的分页器样式
  .el-pagination {
    margin-bottom: 70px;
    background-color: #51a9f14f;
    padding: 10px 20px;
    border-radius: 5px;
    border: 1px solid #fff;

    .el-pagination__total,
    .el-pagination__jump {
      color: #fff;
    }
  }
  // 修改默认的elementui的搜索框样式
  .input-with-select {
    float: left;
    width: 300px;
    line-height: 30px;
    margin-right: 50px;

    .el-input__inner {
      background-color: #51a9f14f;
      height: 32px;
      line-height: 30px;
      border: 1px solid #fff;
      color: #fff;
    }

    .el-input-group__append {
      background: #51a9f18c;
      height: 30px;
      border: 1px solid #fff;

      .el-icon-search {
        color: #fff;
      }
    }
  }
}

// 页面内容主盒子
.activity-container,
.venue-container {
  line-height: 1.5;
  color: #fff;
  font-family: "Poppins", sans-serif;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: wrap;

  .addBtn {
    float: right;
  }

  // 活动列表
  .activity-list,
  .venue-list {
    padding-left: 0;
    .box {
      position: relative;
      margin: 20px;
      display: flex;
      flex-grow: 1;
      justify-content: center;
      flex-direction: row;
      background: #060c2188;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.33);

      // 左侧的展示图片
      .preview img {
        width: 300px;
        display: block;
      }

      // 右侧具体活动内容
      .content {
        padding: 10px 50px;
        padding-right: 100px;
        position: relative;

        .modifyBtn {
          position: absolute;
          right: 100px;
          bottom: 20px;
        }

        .delBtn {
          position: absolute;
          right: 210px;
          bottom: 20px;
          background-color: rgba(247, 71, 71, 0.5);
        }
      }
    }
  }
}

// 按钮通用
.btn {
  color: #fff;
  padding: 0 20px;
  font-size: 14px;
  text-align: center;
  line-height: 30px;
  background-color: #51a9f18c;
  border: 1px solid #fff;
  cursor: pointer;
}

.icon {
  padding-right: 10px;
}
</style>