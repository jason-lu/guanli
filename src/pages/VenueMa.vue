<template>
  <div class="venueContainer">
    <!-- 页面标题 -->
    <div class="venue-title">场馆列表</div>

    <!-- 页面内容 -->
    <div class="venue-container">
      <!-- 按钮 -->
      <div class="topBtn">
        <!-- “新增场馆”按钮 -->
        <button
          class="addBtn btn"
          @click="showAddDialog"
        >新增场馆</button>
        <!-- “搜索场馆”按钮 -->
        <el-input
          placeholder="请输入场馆名称..."
          v-model="query"
          class="input-with-select"
          @keyup.enter.native="search"
        >
          <el-button
            slot="append"
            icon="el-icon-search"
            @click="search"
          ></el-button>
        </el-input>
      </div>
      <!-- 若无搜索结果展示“无此结果”字样 -->
      <div
        class="no-content"
        v-if="!venueList.length"
      >
        无此结果
      </div>
      <!-- 列表展示部分 -->
      <ul
        class="venue-list"
        v-else
      >
        <li
          class="box clearfix"
          v-for="item in venueList"
          :key="item.id"
        >
          <!-- 场馆图片 -->
          <div class="preview">
            <img :src=item.pictureUrl />
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
            <div class="desc ellipsis-2">场馆简介：{{item.instruction}}</div>
            <div class="address">地址：{{item.address}}</div>
            <div class="message">联系方式：{{item.contactInfo}} {{item.contactName}}</div>

            <!-- "删除活动"按钮 -->
            <button
              class="delBtn btn"
              @click="delAct(item.id)"
            >
              <i class="el-icon-delete icon"></i>删除
            </button>
            <!-- "编辑活动"按钮 -->
            <button
              class="modifyBtn btn"
              @click="showModifyDialog(item.id)"
            >
              <i class="el-icon-edit icon"></i>编辑
            </button>
            <!-- 场次管理按钮 -->
            <button class="placeBtn btn" @click="toActivity(item.id)">
              <i class="el-icon-s-data icon"></i>所有活动
            </button>
          </div>
        </li>
      </ul>
      <!-- 分页器 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[2, 3, 5]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>

    <!-- 点击“新增/编辑场馆”弹出的复用模态框 -->
    <el-dialog
      :title="dialogTitle"
      :visible.sync="editDialogVisible"
      width="30%"
      @close="closeEditDialog"
    >
      <el-form
        ref="formData"
        :model="form"
        :rules="rules"
        label-width="80px"
      >
        <el-form-item
          label="场馆名称"
          prop="name"
        >
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item
          label="场馆简介"
          prop="instruction"
        >
          <el-input
            type="textarea"
            v-model="form.instruction"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="场馆地址"
          prop="address"
        >
          <el-input v-model="form.address"></el-input>
        </el-form-item>
        <el-form-item
          label="场馆评分"
          prop="score"
        >
          <el-rate
            v-model="form.score"
            show-score
            text-color="#ff9900"
          ></el-rate>
        </el-form-item>
        <el-form-item
          label="负责人"
          prop="contactName"
        >
          <el-input v-model="form.contactName"></el-input>
        </el-form-item>
        <el-form-item
          label="联系方式"
          prop="contactInfo"
        >
          <el-input v-model="form.contactInfo"></el-input>
        </el-form-item>
        <el-form-item
          label="活动图片"
          prop="pictureUrl"
        >
          <el-upload
            class="upload-demo"
            action="http://47.104.128.89:9009/api/v1/FileTransfer/uploadFile"
            :on-remove="handleRemove"
            :on-success="handleSuccess"
            :on-exceed="onExceed"
            :limit="limit"
            :file-list="fileList"
            list-type="picture"
          >
            <el-button
              size="small"
              type="primary"
            >点击上传</el-button>
            <div
              slot="tip"
              class="el-upload__tip"
            >只能上传1张jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
      </el-form>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="edit"
        >确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import qs from "qs";
export default {
  data() {
    return {
      value5: 3.7,
      // 模拟数据
      // venueList: [
      //   {
      //     id: 1,
      //     name: "五棵松拓展基地",
      //     address: "北京市海淀区复兴路69号五棵松体育馆",
      //     contactinfo: "13801012020",
      //     score: 3.6,
      //     pictureurl: require("../assets/img/img1.jpg"),
      //     instruction: "五棵松拓展基地为学校、企业、事业机关和民间爱好军事活动人士的军事训练、团队建设户外拓展、实战仿真演练等活动提供培训和解决方案。基地设备设施齐全，场地大，环境好，教员军事素质过硬，拥有丰富的军事化训练经验。",
      //     contactname: "张教练"
      //   },
      //   {
      //     id: 2,
      //     name: "太阳岛拓展培训基地",
      //     address: "上海市青浦区朱家角古镇",
      //     contactinfo: "13801012021",
      //     score: 3,
      //     pictureurl: require("../assets/img/venue2.jpg"),
      //     instruction: "太阳岛风景宜人，花香鸟语，拥有设施非常完备的拓展培训基地。基地设施由专家设计，严格按照国际户外运动标准建造，安全性能极高。可进行诸如空中体验廊、团队攀岩等大型户外体验式培训。配套完善，无论是餐饮与住宿，丰俭由人，均能最大限度满足学员的需要。",
      //     contactname: "王教练"
      //   },
      //   {
      //     id: 3,
      //     name: "东方绿舟拓展基地",
      //     address: "上海市青浦区沪青平公路6888号",
      //     contactinfo: "13801012022",
      //     score: 4,
      //     pictureurl: require("../assets/img/venue3.jpg"),
      //     instruction: "东方绿舟有着怡人的风光，3.5公里长的湖滨大道依着水波荡漾的淀山湖，17万平方米的四季常青大草坪为上海之最。东方绿舟除了部分常规拓展培训项目外，还可进行团队定向寻宝、攀岩速降等。另外还开设有勇敢者道路、趣桥世界、龙舟竞渡等休闲运动项目。",
      //     contactname: "李教练"
      //   },
      // ],
      venueList: [],
      venueList2: [],
      query: '', //搜索关键字
      editDialogVisible: false, //显示或隐藏‘编辑/新增’模态框
      currentPage: 1,
      pageSize: 3,
      total: 10,
      form: {  //新增及修改模态框内form表单数据
        id: "",
        name: "",
        address: "",
        score: "",
        contactInfo: "",
        instruction: "",
        contactName: "",
        pictureUrl: ""
      },
      rules: {
        name: [
          { required: true, message: '请输入场馆名称', trigger: ['blur', 'change'] }
        ],
        address: [
          { required: true, message: '请输入场馆地址', trigger: ['blur', 'change'] }
        ],
        score: [
          { required: true, message: '请输入场馆评分', trigger: ['blur', 'change'] }
        ],
        contactInfo: [
          { required: true, message: '请输入负责人联系方式', trigger: ['blur', 'change'] }
        ],
        instruction: [
          { required: true, message: '请输入场馆简介', trigger: ['blur', 'change'] }
        ],
        contactName: [
          { required: true, message: '请输入负责人姓名', trigger: ['blur', 'change'] }
        ]
      },
      dialogTitle: '新增场馆', //新增及修改模态框内标题
      fileList: [{ url: '' }],
      limit: 1,
    };
  },
  created() {
    // 首次渲染页面
    this.getVenueMaData()
  },
  methods: {
    // 渲染列表
    async getVenueMaData() {
      let { data } = await this.$http.post(
        "gym/getGymByPage",
        qs.stringify({
          name: this.query,
          pagenum: this.currentPage,
          pagesize: this.pageSize
        })
      )
      if (data.respHeader.respCode == 200) {
        console.log(data.respBody.queries)
        this.venueList = JSON.parse(JSON.stringify(data.respBody.queries))
        this.venueList2 = JSON.parse(JSON.stringify(data.respBody.queries))
        console.log(this.venueList)
        this.venueList.forEach(v => {
          v.score = +v.score
          let url = v.pictureUrl.slice(v.pictureUrl.lastIndexOf('pics/') + 5)
          console.log(url)
          v.pictureUrl = `http://47.104.128.89:8003/resource/${url}`
        })
        console.log(this.venueList)
        this.total = data.respBody.totalCount
      }
    },
    // 根据关键字点击搜索展示活动
    search() {
      this.currentPage = 1
      this.getVenueMaData()
    },
    // 点击‘编辑’按钮时弹出模态框并渲染模态框内容
    showModifyDialog(id) {
      this.editDialogVisible = true;
      this.dialogTitle = '编辑场馆'
      // 解决复用时关闭模态框再打开其他模态框时数据回显问题
      this.$nextTick(() => {
        this.form = JSON.parse(JSON.stringify(this.venueList2.filter(v => {
          return v.id === id
        })[0]))
        this.fileList = [{ url: '' }]
        this.fileList[0].url = `http://47.104.128.89:8003/resource/` + this.form.pictureUrl.slice(this.form.pictureUrl.lastIndexOf('pics/') + 5)
        // "/home/dev/pics/58937116-8518-4c78-898c-7279342cef78.jpg"  
        // "http://47.104.128.89:8003/resource/58937116-8518-4c78-898c-7279342cef78.jpg"
      })
    },
    // 点击‘新增’按钮时弹出模态框并渲染模态框内容
    showAddDialog() {
      this.editDialogVisible = true;
      this.dialogTitle = '新增场馆';
      this.fileList = []
    },
    // 关闭模态框时重置表单
    closeEditDialog() {
      this.$refs.formData.resetFields()
    },
    // 上传场馆图片相关操作
    // 上传成功时存储图片地址至form.pictureurl
    handleSuccess(response, file, fileList) {
      console.log(response, file, fileList)
      if (response.respBody.isSuccess == "OK") {
        this.form.pictureUrl = response.respBody.content
      } else {
        this.$message({
          type: 'error',
          message: '图片上传失败，请重试',
          duration: 1000
        })
      }
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    // 超出limit图片数时的回调
    onExceed(files, fileList) {
      this.$message({
        type: 'info',
        message: '最多只能上传一个图片',
        duration: 1000
      });
    },
    // 点击‘确定’提交‘编辑’或‘新增’请求
    async edit() {
      await this.$refs.formData.validate()
      let url = this.dialogTitle === '新增场馆' ? 'gym/add' : 'gym/updateGym'
      let para = this.dialogTitle === "新增场馆" ? qs.stringify(this.form) : JSON.stringify(this.form)
      let headers = this.dialogTitle === "新增场馆" ? {} : { "Content-Type": "application/json" }
      let pagenum = this.dialogTitle === "新增场馆" ? Math.ceil(++this.total / this.pageSize) : this.currentPage
      let { data } = await this.$http.post(url, para, { headers })
      if (data.respHeader.respCode == 200) {
        this.$message({
          type: "success",
          message: "操作成功!"
        });
        this.currentPage = pagenum
        this.getVenueMaData()
      }
      else if (data.respHeader.respCode == '001001001') {
        this.$message({
          type: "warning",
          message: "该场馆已存在"
        });
      }
      else {
        this.$message({
          type: "error",
          message: "操作失败,请重试!"
        });
      }
      this.editDialogVisible = false;
    },
    // 点击‘删除’按钮时弹出确认框，确认则发送删除请求
    async delAct(id) {
      try {
        await this.$confirm("此操作将永久删除该场馆, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        });
        // axios发送删除场馆的请求前加有没有活动的判断
        let res = await this.$http.post('activity/queryActivity',
          qs.stringify({
            gym_id: id,
            pagenum: 1,
            pagesize: 1
          })
        )
        console.log(res)
        await res.data.respBody.isSuccess === 'OK'
        if (res.data.respBody.queries.length === 0) {
          // axios发送删除场馆的请求
          let { data } = await this.$http.post('gym/delete',
            qs.stringify({
              gymId: id
            })
          )
          console.log(data)
          if (data.respHeader.respCode == 200) {
            this.$message({
              type: "success",
              message: "删除成功!"
            });
            if (this.venueList.length === 1 && this.currentPage !== 1) {
              this.currentPage--
            }
            this.getVenueMaData()
          }
        } else {
          this.$message({
            type: "error",
            duration: 6000,
            message: "对不起！该场馆下有正进行中的活动，故无法删除！如若要删除该场馆，请先删除该场馆下的所有如下活动及其场次！",
          });
          this.$router.push(`/management/activityMa?gymId=${id}`)
        }

      } catch {
        this.$message({
          type: "info",
          message: "已取消删除"
        });
      }
    },
    // 
    toActivity(id){
      this.$router.push(`/management/activityMa?gymId=${id}`)
    },
    // 每页显示数改变时
    handleSizeChange(val) {
      this.pageSize = val;
      this.currentPage = 1;
      this.getVenueMaData()
    },
    // 当前页码改变时
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getVenueMaData()
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
.venue-container .no-content {
  width: 100%;
  text-align: center;
  margin: 50px 0;
}
.el-form-item .el-rate {
  margin-top: 10px;
}
</style>