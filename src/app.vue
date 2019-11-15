<template>
    <div id="main-container" class="clearfix">
      <Navbar :user="user" @logout="logout"></Navbar>
      <Home :user="user" @login="login"/>
    </div>
</template>

<script>
import Home from './pages/Home.vue';
import Navbar from "./pages/Navbar.vue";
export default {
  mounted() {
    let tokenStr = localStorage.getItem('token');
    if(tokenStr){
      let userStr = tokenStr.split('.')[1];
      this.user = JSON.parse(atob(userStr));
      console.log(this.user)
    }
  },
  data() {
    return {
      vue: "vue-webpack",
      isAdmin: false,
      user:null,
    };
  },
  components:{
    Home,
    Navbar
  },
  methods: {
    login() {
      this.user = JSON.parse(localStorage.getItem('currentUser'));
      console.log(this.user);
    },
    logout() {
      this.user = null;
      localStorage.removeItem('currentUser')
    }
  }
};
</script>

<style>
body {
  margin: 0;
  height: 100vh;
}

#main-container {
  /* position:fixed; */
  overflow:auto;
  width: 100%;
  background-image: url('./assets/img/mainbackground.png');
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
</style>