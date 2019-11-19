<template>
  <div id="profile-container">
    <div
      v-for="(item,index) in items"
      :key="index"
      class="list-item"
      :style="{ 'background-image': 'url(' + item.url + ')' }"
    >
      <div class="shadow">
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { name: "作战训练", url: require("../assets/img/bg1.png") },
        { name: "我的预定", url: require("../assets/img/bg2.png") },
        { name: "设备管理", url: require("../assets/img/bg3.png") },
        { name: "我的积分", url: require("../assets/img/background1.jpg") }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
#profile-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  .list-item {
    float: left;
    width: 48%;
    height: 42vh;
    margin-top: 1%;
    text-align: center;
    background-size: cover;
    background-position: center center;

    &:nth-child(odd) {
      margin-right: 1%;
    }

    .shadow {
      width: 100%;
      height: 100%;
      font-size: 2rem;
      cursor: pointer;
      background-color: rgba(0, 0, 0, 0.2);
      transition: all 0.4s;

      &:hover {
      background-color: rgba(0, 0, 0, 0);
      }

      span {
        display: inline-block;
        height: 30px;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        color: #eee;
        text-shadow: 2px 2px 5px #000;
      }
    }
  }
}
/*  修改前样式 */
/* #profile-container {
    display: flex;
    height: 100%;
    flex-direction: column;
}
.list-item {
    color:white;
    text-align: center;
    flex-grow: 1;
    background: no-repeat;
    background-size: cover;
}
.list-item span {
    font-size: 1.5rem;
    display: inline-block;
    height: 30px;
    position: relative;
    top:50%;
    transform: translateY(-50%);
}
.cover {
    background: #00000088 no-repeat cover;
    height: 100%;
} */
</style>