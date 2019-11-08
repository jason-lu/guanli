<template>
    <div id="nav-container">
        <router-link to="/"><button class="nav-btn">首页</button></router-link> 
        <router-link to="/activities"><button class="nav-btn"> 活动</button></router-link>
        <router-link to="/venue"><button class="nav-btn">场馆</button></router-link>
        <!-- <span>军民融合</span> -->
        <router-link to="/venue"><button class="nav-btn">作战视频</button></router-link>
        <router-link to="/venue"><button class="nav-btn">活动回顾</button></router-link>
        <div class="right">
            <button v-if="!user" class="nav-btn left-btn" @click="clickHandler('/login',$event)">登录</button>
            <div v-else class="dropdown">
                    你好
                <button class="dropbtn">{{user.username}}
                </button>
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
    props:{
        user:Object,
    },
    methods: {
        clickHandler(path,event) {
            event.preventDefault();
            if(path){
                this.$router.push(path);
            } else {
                this.$emit("logout");
            }
            
        },
    }
}
</script>

<style scoped>
.nav-btn {
    border: 1px solid #f1f1f1;
    background: #61b0f08c;
    color: white;
    min-width: 80px;
    margin: 0 10px;
}

.nav-btn:hover {
    cursor: pointer;
    background: #90cafa8c;
}
#nav-container {
    position: sticky;
    top: 0;
    padding-top:4px;
    padding-bottom: 4px;
    color:white; 
    text-align:center;
    margin-bottom: 8px;
    z-index: 10;
    background-color: #000000;
}
.right {
    float: right;
    margin-right: 5px;
}

div.dropdown {
    position:relative;
    display:inline-block;
}
span {
    font-weight:bold;
}
button.dropbtn {
    background-color: #ffffff00;
    border: 1px solid #ffffff;
    border-radius: 4px;
    outline:none;
    color:white;
    cursor:pointer;

}
div.dropdown-content {
    display:none;
    position:absolute;
    right: 0;
    border-radius: 4px;
    background-color:#61b0f08c;
    color: #ffffff;
    width:160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
}
.dropdown-content span {
    display:block;
    text-decoration:none;
    color: #ffffff;
    padding:12px 15px;
    cursor: pointer;
    font-weight:normal !important;
}
/*注意这里不是.dropbtn:hover，因为dropbtn是一个button,不能够用hover*/
.dropdown:hover .dropdown-content {
    display:block;
}
.dropdown-content a:hover {
    background-color:#90cafa8c;
}
.dropdown:hover .dropbtn {
    background-color:#90cafa8c;
}

</style>