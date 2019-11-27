<template>
    <div>
        <!-- 卡片区域 -->
        <el-card class="box-card">
            <h2>添加页面</h2>
            <!-- 表单区域 -->
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm editA">
                <!-- <el-tabs v-model="activeName" tab-position="left"> -->
                <!--活动信息的表单验证  -->
                <el-form-item label="选择场馆" prop="gymId">
                    <el-select v-model="ruleForm.gymId"  placeholder="请选择场馆">
                        <el-option v-for="(item, i) in paceData" :label="item.name" :key="i" :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item class="editAc" label="活动名称" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item class="editAc" label="活动主题" prop="theme">
                    <el-input v-model="ruleForm.theme"></el-input>
                </el-form-item>
                <el-form-item class="editAc" label="活动时间" required>
                    <div class="block">
                        <el-date-picker @change="chooseActiveTime" v-model="activeDate" type="daterange"
                            range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                        </el-date-picker>
                    </div>
                </el-form-item>
                <!-- 活动描述 -->
                <el-form-item class="editAc" label="活动描述" prop="description">
                    <el-input type="textarea" v-model="ruleForm.description"></el-input>
                </el-form-item>
                <!-- 活动状态 -->
                <el-form-item label="活动状态" prop="status">
                    <el-select v-model="ruleForm.status" placeholder="请选择活动状态">
                        <el-option label="进行中" value="1"></el-option>
                        <el-option label="未开始" value="0"></el-option>
                    </el-select>
                </el-form-item>
                <!-- 上传图片 -->
                <el-form-item label="上传图片" class="upload">
                    <el-upload class="upload-demo" :limit='1'
                        action="http://47.104.128.89:9009/api/v1/FileTransfer/uploadFile" :on-success="onSuccess"
                        :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" list-type="picture">
                        <el-button type="primary">选择图片</el-button>
                        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb(仅能上传一张哦)</div>
                    </el-upload>
                </el-form-item>

                <!-- </el-tabs> -->
                <div class="sure">
                    <el-button type="primary" @click="sureAdd">创建活动</el-button>
                    <!-- <el-button type="primary" @click="sureAdd('ruleForm')">创建活动</el-button> -->
                </div>
            </el-form>
        </el-card>
    </div>
</template>
<script>
    import qs from "qs";
    export default {
        data() {
            return {
                // 场馆信息
                paceData: [],
                // 活动时间
                activeDate: null,

                // 上传图片信息
                fileList: [],
                // tab和进度条的帮顶属性
                activeName: '0',
                // 表单绑定的数据
                ruleForm: {
                    // 选择场馆
                    gymId: '',
                    // 活动开始时间
                    beginTime: '',
                    // 活动结束时间
                    endTime: '',
                    // 活动名称
                    name: 'test',
                    // 活动主题
                    theme: 'test',
                    // 活动描述
                    description: '1234567890',

                    // 图片临时路径
                    picAddress: '',
                    // 活动状态
                    status: ''

                },
                // 表单的验证规则
                rules: {
                    gymId: [
                        { required: true, message: '请选择场馆', trigger: 'change' }
                    ],
                    status: [
                        { required: true, message: '请选择状态', trigger: 'change' }
                    ],
                    name: [
                        { required: true, message: '请输入活动名称', trigger: 'blur' },
                        { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                    ],
                    theme: [
                        { required: true, message: '请输入活动主题', trigger: 'blur' },
                        { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                    ],
                    date: [
                        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                    ],
                    description: [
                        { required: true, message: '请输入活动描述', trigger: 'blur' },
                        { min: 10, message: '长度大于十个字符', trigger: 'blur' }
                    ],
                },


            }
        },
        created() {
            this.getPlaceData();
        },

        methods: {
            // 获取场馆信息
            async  getPlaceData() {
                var data = await this.$http.get('gym/getAllGym')
                if (data.status == 200) {
                    this.paceData = data.data
                    console.log(this.paceData);


                } else {
                    this.$message.error('获取场馆数据失败')
                }
            },
            // 图片上传成功的钩子
            onSuccess(response) {
                console.log(response);
                if (response.respBody.isSuccess == "OK") {
                    this.$message.success('上传图片成功')
                    this.ruleForm.picAddress = response.respBody.content;
                } else {
                    this.$message.error('上传图片失败')
                }

            },
            // 点击添加活动
            sureAdd() {
                console.log(this.ruleForm);
                this.$refs.ruleForm.validate(async value => {
                    console.log(value);
                    if (!value) {
                        return this.$message.error('请完整表单信息')
                    } else {
                        var data = await this.$http.post('activity/createActivity', qs.stringify(this.ruleForm))
                        console.log(data);
                        if (data.data.respBody.isSuccess == 'true') {
                            this.$message.success('创建活动成功');
                            setTimeout(() => {
                                this.$router.push('/management/activityMa')
                            }, 3000);
                        } else {
                            this.$message.error('创建活动失败')
                        }
                    }

                })

            },
            // 选择活动时间事触发
            chooseActiveTime() {
                // var newTime=[]
                console.log(this.activeDate);
                var filterTime = this.$options.filters['format'];
                this.ruleForm.beginTime = filterTime(this.activeDate[0], 'yyyy-MM-dd ');
                this.ruleForm.endTime = filterTime(this.activeDate[1], 'yyyy-MM-dd ');
                console.log(this.ruleForm.beginTime);
                console.log(this.ruleForm.endTime);

            },
            //   图片预览
            handlePreview() { },
            // 图片移除
            handleRemove() { },
        },
        // 过滤器
        filters: {
            // 时间过滤器
            format(value, arg) {
                function dateFormat(date, format) {
                    if (typeof date === "string") {
                        var mts = date.match(/(\/Date\((\d+)\)\/)/);
                        if (mts && mts.length >= 3) {
                            date = parseInt(mts[2]);
                        }
                    }
                    date = new Date(date);
                    if (!date || date.toUTCString() == "Invalid Date") {
                        return "";
                    }
                    var map = {
                        "M": date.getMonth() + 1, //月份 
                        "d": date.getDate(), //日 
                        "h": date.getHours(), //小时 
                        "m": date.getMinutes(), //分 
                        "s": date.getSeconds(), //秒 
                        "q": Math.floor((date.getMonth() + 3) / 3), //季度 
                        "S": date.getMilliseconds() //毫秒 
                    };

                    format = format.replace(/([yMdhmsqS])+/g, function (all, t) {
                        var v = map[t];
                        if (v !== undefined) {
                            if (all.length > 1) {
                                v = '0' + v;
                                v = v.substr(v.length - 2);
                            }
                            return v;
                        } else if (t === 'y') {
                            return (date.getFullYear() + '').substr(4 - all.length);
                        }
                        return all;
                    });
                    return format;
                }
                return dateFormat(value, arg)
            }
        }
    }
</script>
<style>
    /* .el-card__body {
        padding-left: 450px !important;
    }
  .upload .el-upload-list__item{
      width: 50%!important;
  } */
</style>
<style lang="less" scoped>
    .sure {
        margin-top: 30px;
        margin-left: 247px;
    }

    .el-form-item {
        margin-top: 20px;
    }

    .el-form-item__label {
        color: #fff !important;
    }

    .el-form-item__label {
        color: #fff !important;
    }

    .blue {
        color: blue;
    }

    .el-card {
        margin-top: 20px;
        background-color: rgba(0, 0, 0, 0.5);
        border: none;
        color: #fff;
    }
</style>