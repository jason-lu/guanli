<template>
  <div class="leftpanel">
    <div id="firstpaneDiv" class="menu_list">
      <router-link class="menu_head" to="/management/">系统管理</router-link>
      <router-link class="menu_head" to="/management/VenueMa">场馆管理</router-link>
      <router-link class="menu_head" to="/management/activityMa">活动管理</router-link>
      <router-link class="menu_head" to="/management/realtime">实时战况</router-link>
      <router-link class="menu_head" to="/management/">装备管理</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>>

<style lang="less" scoped>
#firstpaneDiv {
  width: 150px;
  position: fixed;
  top: 50%;
  left: 10px;
  /*偏移*/
  transform: translateY(-50%);
  color: #fff;
}

.menu_head {
  /* margin-left: 50px;  */
  /* border-radius: 5px; */
  float: left;
  width: 100%;
  height: 47px;
  line-height: 47px;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
  color: #fff;
  text-decoration: none;
  border: 1px solid #ccc;
  font-weight: bold;
  background-color: #51a9f18c;
}

a {
  text-decoration: none;

  &:hover {
    background-color: #51a9f156;
  }

  &.router-link-exact-active {
    background-color: #51a9f136;
  }
}
.menu_list .current {
  background: #51a9f18c;
}

.menu_nva a:hover {
  text-decoration: none;
}
</style>