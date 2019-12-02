<template>
  <div class="actContainer">
    <!-- 全部活动 -->
    <div class="activity-title">全部活动</div>
    <div class="activity-container">
      <!-- 按钮 -->
      <div class="topBtn">
        <!-- <el-select class="theme-select" v-model="value" placeholder="请选择分类">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
          ></el-option>
        </el-select> -->
        <!-- “搜索活动”按钮 -->
        <el-input placeholder="请输入活动主题..." v-model="queryText" class="input-with-select">
          <el-button slot="append" @click="queryActive" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <ul class="activity-list">
        <li
          class="box"
          v-for="(item, index) in activityList"
          :key="index"
        >
          <div class="preview">
            <img :src="item.picAddress" />
          </div>
          <div class="content">
<<<<<<< HEAD
            <div class="name ellipsis-1">活动名称：{{item.name}}</div>
=======
            <div class="name">活动名称：{{item.name}}</div>
>>>>>>> 2459ecb4d0ff5885c95e9092c5e143473e087c2a
            <div class="theme">活动主题：{{item.theme}}</div>
            <div class="desc ellipsis-3">活动描述：{{item.description}}</div>
            <router-link
              id="detail"
              to="/activities/activityListDetail"
            >
              <span>>></span> 查看详情
            </router-link>
          </div>
        </li>
      </ul>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pagenum"
        :page-sizes="[6, 10, 12, 20]"
        :page-size="6"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import qs from "qs";
export default {
  data() {
    return {
      queryText: '',
      value5: 3.7,
      total: null,
      // 页面查询信息
      query: "",
      pagenum: 1,
      pagesize: 6,
      options: [
        {
          value: "选项1",
          label: "对抗类"
        },
        {
          value: "选项2",
          label: "合作类"
        },
        {
          value: "选项3",
          label: "培训类"
        }
      ],
      value: "",
      activityList: []
    };
  },
  created() {
    this.getActiveData();
  },
  methods: {
    queryActive(){
      this.pagenum=1;
      this.query=this.queryText;
       this.getActiveData();
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pagesize = val;
      this.getActiveData();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.pagenum = val;
      this.getActiveData();
    },
    // 获取活动信息
    async getActiveData() {
      var data = await this.$http.post(
        "activity/queryActivity",
        qs.stringify({
          theme: this.query,
          pagenum: this.pagenum,
          pagesize: this.pagesize
        })
      );
      console.log(data);
      if (data.status !== 200) {
        this.$message.info("获取数据失败");
      } else {
        this.activityList = data.data.respBody.queries;
        this.total = data.data.respBody.totalCount;
        console.log(this.activityList);
        this.activityList.map(item => {
          return item.picAddress = `http://47.104.128.89:8003/resource/${item.picAddress.substr(item.picAddress.lastIndexOf('/'))}`
        });
        console.log(this.activityList);
      }
    }
  }
};

// [
//     { title: '枪战训练1', type: '枪战训练' },
//     { title: "枪战对抗1", type: '枪战训练' },
//     { title: "枪战训练2", type: '枪战对抗' },
//     { title: "枪战对抗2", type: '枪战对抗' },
//     { title: '枪战训练1', type: '枪战训练' },
//     { title: "枪战对抗1", type: '枪战训练' },

//             ]
</script>

<style lang="less" scoped>
.activity-container .input-with-select {
  //   margin-right: 0px;
  margin-bottom: 20px;
}
@media screen and(min-width: 1380px) {
  .box {
    // float: left;
    min-width: 550px;
    width: 45%;
    height: 240px;
  }
}
@media screen and(max-width: 1380px) {
  .box {
    // float: left;
    // min-width: 600px;
    // width: 45%;
    height: 240px;
    width: 90%;
    // min-width: 100%;
  }
}
.activity-container .activity-list {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  .box {
    .preview {
      top: 40%;
      // width: 45%;
      max-width: 300px;
    }

    .content {
      position: relative;
      padding-right: 20px;
      height: 100%;
      // width: 50%;
      // margin-left: 48%;

      .name {
        font-size: 20px;
        margin-bottom: 10px;
      }
      .theme {
        margin-bottom: 10px;
      }
      #detail {
        position: absolute;
        padding: 5px 15px;
        right: 25px;
        bottom: 50px;
        border: 1px solid #234764;
        border-radius: 5px;
        background-color: #51a9f18c;

        &:hover {
          background-color: #51a9f154;
        }

        span {
          font-family: "宋体";
        }
      }
    }
  }
}
</style>