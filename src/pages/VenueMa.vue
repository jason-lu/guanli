<template>
  <div class="venueContainer">
    <!-- 页面标题 -->
    <div class="venue-title">场馆列表</div>

    <!-- 页面内容 -->
    <div class="venue-container">
      <!-- 按钮 -->
      <div class="topBtn">
        <!-- “新增场馆”按钮 -->
        <button class="addBtn btn" @click="showEditDialog">新增场馆</button>
        <!-- “搜索场馆”按钮 -->
        <el-input placeholder="请输入场馆名称..." v-model="input3" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <!-- 列表展示部分 -->
      <ul class="venue-list">
        <li class="box" v-for="item in venueList" :key="item.id">
          <!-- 活动图片 -->
          <div class="preview">
            <img src="../assets/img/img1.jpg" />
          </div>
          <div class="content">
            <div class="name">场馆名称</div>
            <el-rate
              v-model="value5"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}"
            ></el-rate>
            <div
              class="desc ellipsis"
            >场馆简介：五棵松拓展基地为学校、企业、事业机关和民间爱好军事活动人士的军事训练、团队建设户外拓展、实战仿真演练等活动提供培训和解决方案。基地设备设施齐全，场地大，环境好，教员军事素质过硬，拥有丰富的军事化训练经验。</div>
            <div class="address">地址：北京市海淀区复兴路69号五棵松体育馆</div>
            <div class="message">联系方式：13801012020 张教练</div>

            <!-- "删除活动"按钮 -->
            <button class="delBtn btn" @click="delAct">
              <i class="el-icon-delete icon"></i>删除
            </button>
            <!-- "编辑活动"按钮 -->
            <button class="modifyBtn btn" @click="showEditDialog">
              <i class="el-icon-edit icon"></i>编辑
            </button>
          </div>
        </li>
      </ul>
      <!-- 分页器 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value5: 3.7,
      // 模拟数据
      venueList: [{ id: 1 }, { id: 2 }, { id: 3 }],
      editDialogVisible: false,
      form: {},
      imageUrl: ""
    };
  },
  methods: {
    showEditDialog() {
      this.editDialogVisible = true;
    },
    // showDelDialog() {
    //   this.delDialogVisible = true;
    // },
    async delAct() {
      try {
        await this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        });
        this.$message({
          type: "success",
          message: "删除成功!"
        });
      } catch {
        this.$message({
          type: "info",
          message: "已取消删除"
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
.venue-container .venue-list .box .content {
  .name {
    font-size: 20px;
  }
  .desc {
    margin: 20px 0;
  }
}
</style>