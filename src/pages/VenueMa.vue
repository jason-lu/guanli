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
        <el-input placeholder="请输入场馆名称..." v-model="query" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <!-- 列表展示部分 -->
      <ul class="venue-list">
        <li class="box clearfix" v-for="item in venueList" :key="item.id">
          <!-- 场馆图片 -->
          <div class="preview">
            <img :src=item.pictureurl />
          </div>
          <div class="content">
            <div class="name">{{item.name}}</div>
            <!-- 场馆评分 -->
            <el-rate
              v-model="item.score"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}"
            ></el-rate>
            <div
              class="desc ellipsis-2"
            >场馆简介：{{item.instruction}}</div>
            <div class="address">地址：{{item.address}}</div>
            <div class="message">联系方式：{{item.contactinfo}} {{item.contactname}}</div>

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
        :current-page="currentPage"
        :page-sizes="[3, 6, 9]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>

    <!-- 点击“新增/编辑场馆”弹出的复用模态框 -->
    <el-dialog title="提示" :visible.sync="editDialogVisible" width="30%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="场馆名称">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="场馆简介">
          <el-input type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="场馆地址">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="负责人">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="联系方式">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="活动图片">
          <!-- <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload> -->
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="edit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value5: 3.7,
      // 模拟数据
      venueList: [
        {
          id: 1,
          name: "五棵松拓展基地",
          address: "北京市海淀区复兴路69号五棵松体育馆",
          contactinfo: "13801012020",
          score: 3.6,
          pictureurl: require("../assets/img/img1.jpg"),
          instruction: "五棵松拓展基地为学校、企业、事业机关和民间爱好军事活动人士的军事训练、团队建设户外拓展、实战仿真演练等活动提供培训和解决方案。基地设备设施齐全，场地大，环境好，教员军事素质过硬，拥有丰富的军事化训练经验。",
          contactname: "张教练"
        },
        {
          id: 2,
          name: "太阳岛拓展培训基地",
          address: "上海市青浦区朱家角古镇",
          contactinfo: "13801012021",
          score: 3,
          pictureurl: require("../assets/img/venue2.jpg"),
          instruction: "太阳岛风景宜人，花香鸟语，拥有设施非常完备的拓展培训基地。基地设施由专家设计，严格按照国际户外运动标准建造，安全性能极高。可进行诸如空中体验廊、团队攀岩等大型户外体验式培训。配套完善，无论是餐饮与住宿，丰俭由人，均能最大限度满足学员的需要。",
          contactname: "王教练"
        },
        {
          id: 3,
          name: "东方绿舟拓展基地",
          address: "上海市青浦区沪青平公路6888号",
          contactinfo: "13801012022",
          score: 4,
          pictureurl: require("../assets/img/venue3.jpg"),
          instruction: "东方绿舟有着怡人的风光，3.5公里长的湖滨大道依着水波荡漾的淀山湖，17万平方米的四季常青大草坪为上海之最。东方绿舟除了部分常规拓展培训项目外，还可进行团队定向寻宝、攀岩速降等。另外还开设有勇敢者道路、趣桥世界、龙舟竞渡等休闲运动项目。",
          contactname: "李教练"
        },
      ],
      query: '', //搜索关键字
      editDialogVisible: false, //显示或隐藏‘编辑/新增’模态框
      currentPage: 1,
      pageSize: 3,
      total: 10,
      form: {},
      imageUrl: ""
    };
  },
  methods: {
    // 点击‘编辑’或‘新增’按钮时弹出模态框并渲染模态框内容
    showEditDialog() {
      this.editDialogVisible = true;
    },
    // 点击‘确定’提交‘编辑’或‘新增’请求
    edit() {
      
    },
    // 点击‘删除’按钮时弹出确认框，确认则发送删除请求
    async delAct() {
      try {
        await this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        });
        // 补：axios发送删除场馆的请求
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
    },
    // 每页显示数改变时
    handleSizeChange(val) {
    
    },
    // 当前页码改变时
    handleCurrentChange(val) {

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