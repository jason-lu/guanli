<template>
    <div>
        <!-- 卡片区域 -->
        <el-card class="box-card">
                <h2>添加页面</h2>
            <!-- 步骤条 -->
            <el-steps class="editTep" :active="activeName*1" finish-status="success" align-center>
                <el-step title="活动信息"></el-step>
                <el-step title="场次信息"></el-step>
                <el-step title="上传图片"></el-step>
            </el-steps>
            <!-- 表单区域 -->
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm editA">
                <!-- tab栏切换 -->
                <el-tabs v-model="activeName" tab-position="left">
                    <el-tab-pane label="活动信息" name="0">
                        <!--活动信息的表单验证  -->
                        <el-form-item label="活动名称" prop="name">
                            <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                        <el-form-item label="活动主题" prop="theme">
                            <el-input v-model="ruleForm.theme"></el-input>
                        </el-form-item>
                        <el-form-item label="活动时间" required>
                            <div class="block">
                                <el-date-picker @change="chooseActiveTime" v-model="ruleForm.date" type="daterange" range-separator="至"
                                    start-placeholder="开始日期" end-placeholder="结束日期">
                                </el-date-picker>
                            </div>
                        </el-form-item>
                        <!-- 活动描述 -->
                        <el-form-item label="活动描述" prop="desc">
                            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                        </el-form-item>
                    </el-tab-pane>
                    <!-- 场次 -->
                    <el-tab-pane label="场次信息" name="1">
                        <el-form-item class="paly" label="" prop="play">
                            <el-date-picker v-model="playValue" type="datetimerange" range-separator="至"
                                start-placeholder="开始日期" end-placeholder="结束日期">
                            </el-date-picker>
                            <el-button @click="addPlayEvent" type="primary">添加场次</el-button>
                        </el-form-item>

                        <!-- 显示所添加场次的区域 -->
                        <el-row>
                            <el-col :span="12">
                                <el-tag @close="playMove(i)" v-for="(item,i) in palytime" :key="i" closable type="''">
                                    {{item}}
                                </el-tag>
                            </el-col>

                        </el-row>
                    </el-tab-pane>
                    <!-- 图片上传 -->
                    <el-tab-pane label="上传图片" name="2">
                        <el-upload action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview"
                            :on-remove="handleRemove" :file-list="ruleForm.fileList" list-type="picture">
                            <el-button size="small" type="primary">点击上传</el-button>
                            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                        </el-upload>
                    </el-tab-pane>

                </el-tabs>
            </el-form>
        </el-card>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                // tab和进度条的帮顶属性
                activeName: '0',
                // 表单绑定的数据
                ruleForm: {
                    // 活动名称
                    name: '',
                    // 活动主题
                    theme: '',
                    // 活动描述
                    desc: '123',
                    // 活动时间
                    date: null,
                    // 上传图片信息
                    fileList: [],

                },
                // 场次时间
                playValue: [],
                // 场次数组
                palytime: [],
                // 表单的验证规则
                rules: {
                    name: [
                        { required: true, message: '请输入活动名称', trigger: 'blur' },
                        { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                    ],
                    theme: [
                        { required: true, message: '请输入活动名称', trigger: 'blur' },
                        { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                    ],
                    date: [
                        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                    ],
                },


            }
        },

        methods: {
            // 选择活动时间事触发
            chooseActiveTime(){
                console.log(this.ruleForm.date);
                
            },
            // 移除场次
            playMove(e) {
                this.palytime.splice(e, 1)
                console.log(this.palytime);
            },
            //   图片预览
            handlePreview() { },
            // 图片移除
            handleRemove() { },
            // 点击添加场次
            addPlayEvent() {
                var playdata = '';
                var filterTime = this.$options.filters['format'];
                this.playValue.forEach(item => {
                    playdata += filterTime(item, 'yyyy-MM-dd hh') + "至";
                });
                playdata = playdata.substr(0, playdata.length - 1)
                this.palytime.push(playdata);
                playdata = [];
                console.log(this.palytime);
            }
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
<style lang="less" scoped>
    .el-tag {
        margin: 20px;
    }

    .el-form-item {
        margin-top: 20px;
    }

    .el-form-item__label {
        color: #fff !important;
    }

    .el-step__title.is-process {
        font-weight: 700;
        color: #409EFF !important;
    }

    .el-tabs__item {
        color: #fff !important;
    }

    .el-tabs__item.is-active {
        color: #409EFF !important;
    }

    .el-form-item__label {
        color: #fff !important;
    }

    .el-tabs {
        margin-top: 20px;
    }

    .blue {
        color: blue;
    }

    .el-card {
        color: #fff;
    }

    .el-card {
        margin-top: 20px;
        background-color: rgba(0, 0, 0, 0.5);
        border: none;
    }

    .el-steps {
        text-align: center;
    }

    .el-tabs__item {
        color: #fff !important;
    }
</style>