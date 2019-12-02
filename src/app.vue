<template>
  <div class="main-container clearfix"  :class="{changeBg: isRealtime}">
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
      this.user = JSON.parse(atob(userStr));  //解析base64加密的字符串
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
  computed: {
    
    isRealtime() {
      return this.$route.path === '/management/realtime'? true : false;
    }
  },
  methods: {
    login() {
      this.user = JSON.parse(localStorage.getItem("currentUser"));
      console.log(this.user);
    },
    logout() {
      this.user = null;
      localStorage.removeItem("currentUser"); 
    },
  }
};
</script>


<style lang="less">
// .paly.el-form-item .el-form-item__content{
//         margin-left: 20px!important;
//         width: 70%!important;
//     }
// .editAc .el-input__inner,
// .editAc .el-textarea__inner
// {
//     width: 50%!important;
// }
// .editA .el-form-item__label {
//     color: #fff!important;
// }
//  .editTep .el-step__title.is-process {
//     font-weight: 700;
//     color: #409EFF!important;
// }
// .editA .el-tabs__item{
//     color: #fff!important;
// }
// .editA .el-tabs__item.is-active {
//     color: #409EFF!important;
// }
body,html {
  margin: 0;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}

.main-container {
  /* position:fixed; */
  overflow: auto;
  width: 100%;
  background-image: url("./assets/img/mainbackground.png");
  background-size: cover;
  background-repeat: no-repeat no-repeat;
  height: 100%;
  // display: flex;
  // flex-direction: column;
}
.changeBg {
  background-image: url("./assets/img/pk_bg22.png");
  background-position: 0 0;
}
.content-container {
  overflow: auto;
  height: 100%;
  padding-top: 78px;
  box-sizing: border-box;
  background-color: #f1f1f12a;
  
}

ul {
  list-style: none;
}
a {
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}

// 清除浮动
.clearfix::before,
.clearfix::after {
  display: table;
  content: "";
}
.clearfix::after {
  clear: both;
}

// 多行溢出
.ellipsis(@line: 2) {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: @line;
  overflow: hidden;
}
.ellipsis-1 {
  .ellipsis(1);
}
.ellipsis-2 {
  .ellipsis();
}
.ellipsis-3 {
  .ellipsis(3);
}
.ellipsis-8 {
  .ellipsis(8);
}

// 场馆及活动管理页面标题
.activity-title,
.venue-title,
.realtime-title {
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

// 修改默认的elementui上传图片样式
.upload-demo {
  .el-upload-list--picture .el-upload-list__item-name {
    display: none;
  }
  .el-upload-list--picture .el-upload-list__item {
    height: 140px;
    padding: 0px 0px 0px 80px;
  }
  .el-upload-list__item {
    width: 140px;
  }
  .el-upload-list--picture .el-upload-list__item-thumbnail {
    width: 140px;
    height: 140px;
  }
  .el-upload-list--picture .el-upload-list__item-status-label,
  .el-upload-list__item .el-icon-close {
    z-index: 1;
  }
}
.activePlace,
.venue-container,
.activity-container {
  // 修改默认的elementui的分页器样式
  .el-pagination {
    margin-bottom: 70px;
    background-color: #51a9f14f;
    padding: 10px 20px;
    border-radius: 5px;
    border: 1px solid #060c2188;

    .el-pagination__total,
    .el-pagination__jump {
      color: #fff;
    }
  }
  // 修改默认的elementui选择器样式
  .theme-select {
    .el-input__inner {
      line-height: 32px;
      height: 32px;
      border: 1px solid #060c2188;
      background-color: #51a9f14f;
      color: #ccc;
    }

    .el-input__prefix,
    .el-input__suffix {
      // line-height: 32px;
      height: 37px;
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
      border: 1px solid #060c2188;
      color: #fff;
    }

    .el-input-group__append {
      background: #51a9f18c;
      height: 30px;
      border: 1px solid #060c2188;

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
  color: #eee;
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
    width: 100%;
    min-width: 1000px;
    min-height: 450px;
    padding-left: 0;
    .box {
      position: relative;
      margin: 20px;
      // display: flex;
      // flex-grow: 1;
      // justify-content: center;
      // flex-direction: row;
      background: #060c2188;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.33);
      overflow: hidden;

      // 左侧的展示图片
      .preview {
        overflow: hidden;
        width: 300px;
        height: 210px;
        // float: left;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }

      .preview img {
        min-width: 300px;
        min-height: 210px;
        height: 210px;
        display: block;
        transition: all 0.5s;
      }

      .preview img:hover {
        transform: scale(1.1);
      }

      // 右侧具体活动内容
      .content {
        padding: 10px 0px;
        padding-right: 30px;
        position: relative;
        margin-left: 320px;
        // float: left;

        .modifyBtn {
          position: absolute;
          right: 30px;
          bottom: 20px;
        } 
        .placeBtn {
          position: absolute;
          right: 255px;
          bottom: 20px;
        } 


        .delBtn {
          position: absolute;
          right: 143px;
          bottom: 20px;
          background-color: rgba(247, 71, 71, 0.5);

          &:hover {
            background-color: rgba(247, 71, 71, 0.4);
          }
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
  // border: 1px solid #ccc;
  border: 1px solid #060c2188;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.4s;

  &:hover {
    background-color: #51a9f154;
  }
}

.icon {
  padding-right: 10px;
}
</style>