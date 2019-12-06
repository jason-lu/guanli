<template>
  <div class="main-container clearfix" :class="{changeBg: isRealtime, bestTeamBg: isBestTeam}">
    <Navbar :user="user" @logout="logout"></Navbar>
    <Home :user="user" @login="login" />
  </div>
</template>

<script>
  import Home from "./pages/Home.vue";
  import Navbar from "./pages/Navbar.vue";
  import "babel-polyfill"
  export default {
    mounted() {
      let tokenStr = localStorage.getItem("token");
      if (tokenStr) {
        let userStr = tokenStr.split(".")[1];
        this.user = JSON.parse(atob(userStr)); //解析base64加密的字符串
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
        return this.$route.path === '/management/realtime' ? true : false;
      },
      isBestTeam() {
        return this.$route.path === '/homePages/bestTeam' ? true : false;
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
</style>