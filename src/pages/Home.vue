<template>
    <div class="content-container">
        <el-scrollbar style="height:100%">
            <LeftPanel v-if="showLeft" />
            <div class="rightplace" :class="{addLeft: showLeft}">
                <router-view @login="login"></router-view>
            </div>
        </el-scrollbar>
    </div>
</template>
<script>
    import LeftPanel from './LeftPanel.vue';
    export default {
        components: {
            LeftPanel,
        },
        props: {
            user: Object,
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
        computed: {
            showLeft() {
                // 当管理员权限时，首页及首页之下的所有路由均不显示左边导航
                const regex = RegExp(/^\/homePages/);
                console.log(this.$route.path)
                console.log(regex.test('/homePages/ssss'))
                return this.user ? this.user.name === 'admin' && !regex.test(this.$route.path) : false;
            }
        }
    }
</script>

<style lang="less" scoped>
    .addLeft {
        padding-left: 150px;
    }

    .rightplace {
        color: #fff;
        margin-left: 0;
        flex-grow: 1;
        height: 100%;
    }
</style>