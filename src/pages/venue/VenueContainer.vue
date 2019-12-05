<template>
  <div
    class="actContainer"
    @click="fadeFlowTop"
  >
    <!-- 全部活动 -->
    <div class="activity-title">全部场馆</div>
    <div class="activity-container">
      <!-- 按钮 -->
      <div class="topBtn">
        <!-- “搜索场馆”按钮 -->
        <el-input
          placeholder="请输入场馆名称..."
          v-model="name"
          class="input-with-select"
          @keyup.enter.native="queryActive"
        >
          <el-button
            slot="append"
            @click="queryActive"
            icon="el-icon-search"
          ></el-button>
        </el-input>
      </div>
      <ul class="activity-list">
        <li
          class="box"
          v-for="(item, index) in venueList"
          :key="index"
        >
          <div class="preview">
            <img :src="item.pictureUrl" />
          </div>
          <div class="content">
            <div class="name ellipsis-1">{{item.name}}</div>
            <el-rate
              class="star"
              v-model="item.score"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}"
            >
            </el-rate>
            <div class="desc ellipsis-3">场馆简介：{{item.instruction}}</div>
            <a
              id="detail"
              class="btn"
              @click.stop="showFlowTop"
            >
              <span>>> </span> 查看详情
            </a>
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
    <!-- 场馆详细信息弹窗 -->
    <VenueItem :isShowFlowTop=isShowFlowTop></VenueItem>
  </div>
</template>
  
  <script>
import qs from "qs";
import VenueItem from './VenueItem.vue'
export default {
  components: {
    VenueItem
  },
  data() {
    return {
      value5: 3.7,
      total: null,
      // 页面查询信息
      name: '',
      pagenum: 1,
      pagesize: 6,
      value: "",
      venueList: [],
      isShowFlowTop: false
    };
  },
  created() {
    this.name = this.$route.query.name
    this.getActiveData();
  },
  methods: {
    // 点击“查看详情”弹出场馆详细信息弹窗
    showFlowTop() {
      this.isShowFlowTop = true
    },
    // 点击空白区域收回弹窗
    fadeFlowTop() {
      this.isShowFlowTop = false
    },
    queryActive() {
      this.pagenum = 1;
      this.query = this.name;
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
        "gym/getGymByPage",
        qs.stringify({
          name: this.name,
          pagenum: this.pagenum,
          pagesize: this.pagesize
        })
      );
      console.log(data);
      if (data.status !== 200) {
        this.$message.info("获取数据失败");
      } else {
        this.venueList = data.data.respBody.queries;
        this.total = data.data.respBody.totalCount;
        console.log(this.venueList);
        this.venueList.map(item => {
            
          let url = item.pictureUrl.slice(item.pictureUrl.lastIndexOf('pics/') + 5)
          console.log(url)
          return item.pictureUrl = `http://122.112.247.149:8003/resource/${url}`
        });
        console.log(this.venueList);
      }
    }
  }
};
  </script>
  
  <style lang="less" scoped>
.activity-container .topBtn {
  margin-bottom: 20px;
  .input-with-select {
      margin-right: 0;
  }
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
      }
      .star {
        margin-bottom: 15px;
      }
      #detail {
        position: absolute;
        padding: 0px 15px;
        right: 25px;
        bottom: 60px;
        border: 1px solid rgba(6, 12, 33, 0.55);
        border-radius: 5px;
        background-color: rgba(81, 169, 241, 0.6);

        &:hover {
          background-color: rgba(81, 169, 241, 0.4);
        }

        span {
          font-family: "宋体";
        }
      }
    }
  }
}
</style>