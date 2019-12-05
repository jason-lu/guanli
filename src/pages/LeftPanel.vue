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
  width: 140px;
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
  border: 1px solid rgba(33, 73, 105, .3);
  // font-weight: bold;
  background-color: rgba(81,169,241, .6);
}

a {
  text-decoration: none;

  &:hover {
    background-color: rgba(81,169,241, .4);
  }

  &.router-link-active {
    background-color: rgba(81,169,241, .25); 
  }

}
.menu_list .current {
  background: rgba(81,169,241, .6);
}

.menu_nva a:hover {
  text-decoration: none;
}
</style>