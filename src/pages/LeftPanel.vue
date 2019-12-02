<template>
  <div class="leftpanel">
    <div id="firstpaneDiv" class="menu_list">
      <!-- <router-link class="menu_head" to="/management/">系统管理</router-link> -->
      <router-link class="menu_head" to="/management/VenueMa">场馆管理</router-link>
      <router-link class="menu_head" to="/management/activityMa">活动管理</router-link>
      <router-link class="menu_head" to="/management/realtime">实时战况</router-link>
        <router-link class="menu_head" to="/management/datadisplay">军民大数据</router-link>
      <!-- <router-link class="menu_head" to="/management/">装备管理</router-link> -->
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
  left: 20px;
  /*偏移*/
  transform: translateY(-50%);
  color: #fff;
  box-shadow: 2px 2px 15px 2px rgb(99, 99, 99);
}

.menu_head {
  float: left;
  width: 100%;
  height: 47px;
  line-height: 47px;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
  color: #ddd;
  text-decoration: none;
  border: 1px solid #2149698c;
  // font-weight: bold;
  background-color: #51a9f18c;
}

a {
  text-decoration: none;

  &:hover {
    background-color: #51a9f156;
  }

  &.router-link-active {
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