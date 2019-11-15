<template>
    <div class="content-container">
        <LeftPanel v-if="showLeft"/>
        <div style="color:black; margin-left:0; padding:0; flex-grow:1;">
            <router-view @login="login" ></router-view>
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
            return this.user? this.user.name === 'admin'  && this.$route.path !== '/': false;
        }
    }
}
</script>

<style scoped>
</style>