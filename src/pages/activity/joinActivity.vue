<template>
    <div class="joinTeam">
        <!-- <el-form ref="form" :model="form" label-width="100px">
            <el-form-item label="选择队伍：">
                <el-checkbox-group v-model="form.type">
                    <el-checkbox v-for="(item,index) in teamMemberList" :key="index" border :label="item.id"
                        name="type">{{item.name}}</el-checkbox>->
                </el-checkbox-group>
            </el-form-item>

            <el-form-item>
                <el-button type="danger" @click="onSubmit('1')">加入红队</el-button>
                <el-button type="primary" @click="onSubmit('2')">加入蓝队</el-button>
            </el-form-item>
        </el-form> -->
        <!-- 队员展示 -->
        <div class="member">
            <el-table :data="teamMemberList" stripe style="width: 100%">

                <el-table-column prop="id" label="成员编号" align="center">
                </el-table-column>
                <el-table-column prop="name" label="成员姓名" align="center">
                </el-table-column>
                <el-table-column prop="name" label="所属队伍" align="center">
                    <template slot-scope="scope">
                        <div v-if="scope.row.team==2"><span style="color:#409EFF">蓝队</span></div>
                        <div v-else-if="scope.row.team==1"><span style="color:#F56C6C">红队</span></div>
                        <div v-else><span style="color:#c0c4cc">暂未选择</span></div>
                    </template>
                </el-table-column>

                <el-table-column prop="gunNumber" label="武器编号" align="center">
                    <template slot-scope="scope">
                        <div v-if="typeof scope.row.gunNumber=='string'"><span style="color:#c0c4cc">暂未选择</span></div>
                        <div v-else>
                            <span v-for="(item,index) in armsList" v-if="scope.row.gunNumber==item.id">{{item.name}}</span>
                        </div>
                    </template>
                </el-table-column>

                <el-table-column prop="name" label="所属职务" align="center">
                    <template slot-scope="scope">
                        <div v-if="scope.row.job==1"><span>士兵</span></div>
                        <div v-else-if="scope.row.job==2"><span>连长</span></div>
                        <div v-else-if="scope.row.job==3"><span>军长</span></div>
                    </template>
                </el-table-column>
                <el-table-column prop="name" label="操作" align="center">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="editMsg(scope.row.id)">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>

        <el-dialog title="编辑成员" :visible.sync="dialogFormVisible" width="30%">
            <el-form :model="editForm">
                <el-form-item label="成员编号：" :label-width="formLabelWidth">
                    <span>{{editForm.id}}</span>
                </el-form-item>
                <el-form-item label="成员姓名：" :label-width="formLabelWidth">
                    <span>{{editForm.name}}</span>
                </el-form-item>
                <el-form-item label="选择枪支/武器：" :label-width="formLabelWidth">
                    <el-select v-model="editForm.arms" placeholder="请选选择枪支/武器">
                        <el-option v-for="(item,index) in armsList" :key="index" :label="item.name" :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="选择职务：" :label-width="formLabelWidth">
                    <el-select v-model="editForm.job" placeholder="请选择职务">
                        <el-option v-for="(item,index) in jobList" :key="index" :label="item.name" :value="item.id">
                        </el-option>
                        <!-- <el-option label="区域二" value="beijing"></el-option> -->
                    </el-select>
                </el-form-item>
                <el-form-item label="选择队伍：" :label-width="formLabelWidth">
                    <el-select v-model="editForm.team" placeholder="请选择队伍">
                        <el-option v-for="(item,index) in teamList" :key="index" :label="item.name" :value="item.id">
                        </el-option>
                    </el-select>
            </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitEdit">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                formLabelWidth: '120px',
                form: {
                    team:'',
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                teamMemberList: [
                    {
                        id: 0,
                        name: '队员1',
                        team: '0',//1红  2蓝   0未选择队伍
                        gunNumber: '',//枪支编号
                        job: 1//职务  1士兵， 2连长， 3军长
                    },
                    {
                        id: 1,
                        name: '队员2',
                        team: '0',//1红  2蓝   0未选择队伍
                        gunNumber: '',//枪支编号
                        job: 1//职务  1士兵， 2连长， 3军长
                    },
                    {
                        id: 2,
                        name: '队员3',
                        team: '0',//1红  2蓝   0未选择队伍
                        gunNumber: '',//枪支编号
                        job: 1//职务  1士兵， 2连长， 3军长
                    },
                    {
                        id: 3,
                        name: '队员4',
                        team: '0',//1红  2蓝   0未选择队伍
                        gunNumber: '',//枪支编号
                        job: 1//职务  1士兵， 2连长， 3军长
                    },
                    {
                        id: 4,
                        name: '队员5',
                        team: '0',//1红  2蓝   0未选择队伍
                        gunNumber: '',//枪支编号
                        job: 1//职务  1士兵， 2连长， 3军长
                    }
                ],
                dialogFormVisible: false,
                editForm: {
                    id:'',
                    name:'',
                    arms: '123',
                    job: '1d',
                    team: '',
                },
                // 武器列表
                armsList: [
                    {
                        id: 0,
                        name: '枪支1'
                    },
                    {
                        id: 1,
                        name: '枪支2'
                    },
                    {
                        id: 2,
                        name: '枪支3'
                    },
                    {
                        id: 3,
                        name: '枪支4'
                    }
                ],
                // 职务列表
                jobList: [
                    {
                        id: 1,
                        name: '士兵'
                    },
                    {
                        id: 2,
                        name: '连长'
                    },
                    {
                        id: 3,
                        name: '军长'
                    }
                ],
                teamList: [
                    {
                        id:1,
                        name:'红队'
                    },
                    {
                        id:2,
                        name:'蓝队'
                    },
                ],
                editMember:{},//当前编辑成员
            }
        },
        methods: {
            onSubmit(tag) {
                this.teamMemberList.forEach((item, index) => {
                    if (this.form.type.includes(item.id)) {
                        item.team = tag;
                    }
                })
                this.form.type = [];
            },
            editMsg(id) {
                this.dialogFormVisible = true;
                this.editMember = this.teamMemberList.filter((item)=>{
                    return item.id === id;
                })[0]
                this.editForm.id = this.editMember.id;
                this.editForm.name = this.editMember.name;
                this.editForm.arms = this.editMember.gunNumber;
                this.editForm.job = this.editMember.job;
            },
            submitEdit(){
                this.dialogFormVisible = false;
                this.teamMemberList.forEach((item,index)=>{
                    if(item.id==this.editMember.id){
                        item.gunNumber=this.editForm.arms;
                        item.job = this.editForm.job;
                    }
                })
            }
        }
    }
</script>
<style>
    .joinTeam {
        width: 90%;
        background: #fff;
        margin: 50px auto;
        padding: 50px;
        box-sizing: border-box;
    }
</style>