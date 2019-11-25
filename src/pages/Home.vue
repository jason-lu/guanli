<template>
    <div class="content-container">
        <LeftPanel v-if="showLeft"/>
        <div style="color:black; margin-left:0; flex-grow:1;" :class="{addLeft: showLeft}">
            <router-view @login="login"></router-view>
        </div>
    </div>
</template>
<script>
import LeftPanel from './LeftPanel.vue';
export default {
    components: {
        LeftPanel,
    },
    props:{
        user:Object,
    },
    methods: {
        login() {
            this.$emit('login');
        }
    },
    data() {
        return {
            
        }
    },
    computed:{
        showLeft() {
            // 当管理员权限时，首页及首页之下的所有路由均不显示左边导航
            const regex = RegExp(/^\/homePages/);
            console.log(this.$route.path)
            console.log(regex.test('/homePages/ssss'))
            return this.user? this.user.name === 'admin' && !regex.test(this.$route.path): true;
        }
    }
}
</script>

<style scoped>
    .addLeft {
        padding-left: 173px;
    }
</style>