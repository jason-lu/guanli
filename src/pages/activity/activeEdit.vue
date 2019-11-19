<!-- <template>
    <div class="editcontainer">
        <el-steps :space="200" :active="1" finish-status="success">
            <el-step title="已完成"></el-step>
            <el-step title="进行中"></el-step>
            <el-step title="步骤 3"></el-step>
        </el-steps>
        <button @click="aaa">123</button>
    </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
           async aaa(){
             var data= await  this.$http('https://www.easy-mock.com/mock/5dd3766b33d2d6265263041d/example_copy/mock');
             console.log(data);
             
            }
        }
    }
</script>
<style scoped>
    .editcontainer {
        width: 90%;
        margin: 50px auto 0px;
        background: rgba(0, 0, 0, 0.4);
        padding: 50px;
        color: #fff;
        /* padding: 50px 50px 0 50px;
        color: #fff; */
        /* height: 100%; */
    }
</style> -->