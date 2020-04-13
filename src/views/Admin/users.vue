<!--  -->
<template>
    <div class="container">
        <el-table :data="nowTableData" border style="width: 100%">
            <el-table-column prop="date" label="注册日期"> </el-table-column>
            <el-table-column prop="userHead" label="用户头像">
                <template slot-scope="scope">
                    <img
                        :src="scope.row.userHead"
                        alt="head"
                        class="userHead"
                    />
                </template>
            </el-table-column>
            <el-table-column prop="username" label="用户姓名">
            </el-table-column>
            <el-table-column prop="email" label="注册邮箱"> </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                        type="text"
                        size="small"
                        @click="handleToFreeze(scope.$index, scope.row)"
                        >{{
                            scope.row.isFreeze ? "已冻结" : "未冻结"
                        }}</el-button
                    >
                    <el-button
                        type="danger"
                        size="small"
                        @click="handleToDelete(scope.$index, scope.row)"
                        >移除</el-button
                    >
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            background
            layout="prev, pager, next"
            :current-page.sync="currentPage"
            :page-size="3"
            :total="tableData.length"
            class="page"
        >
        </el-pagination>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
    //import引入的组件需要注入到对象中才能使用
    name: 'users',
    props: {},
    components: {

    },
    data () {
        //这里存放数据
        return {
            tableData: [],
            currentPage: 1,
            pageSize: 4
        };
    },
    //监听属性 类似于data概念
    computed: {
        nowTableData () {
            return this.tableData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize) || []
        }
    },
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        handleToFreeze (index, row) {
            this.axios.post('/api2/admin/updateFreeze', {
                email: row.email,
                isFreeze: !row.isFreeze
            })
                .then(res => {
                    var status = res.data.status;
                    if (status === 0) {
                        this.$alert('该用户已成功被冻结', '信息', {
                            confirmButtonText: '确定',
                            callback: action => {
                                this.tableData[index].isFreeze = !row.isFreeze
                            }
                        });
                    } else {
                        this.$alert('冻结操作失败', '信息', {
                            confirmButtonText: '确定',

                        });
                    }
                })
                .catch(err => {
                    console.error(err);
                })

        },
        handleToDelete (index, row) {
            this.axios.post('/api2/admin/deleteUser', { email: row.email })
                .then(res => {
                    var status = res.data.status;
                    if (status === 0) {
                        this.$alert('删除操作成功', '信息', {
                            confirmButtonText: '确定',
                            callback: action => {
                                this.tableData.splice(index, 1)
                            }
                        });
                    } else {
                        this.$alert('删除操作失败', '信息', {
                            confirmButtonText: '确定',

                        });
                    }
                })
                .catch(err => {
                    console.error(err);
                })
        }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created () {

    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted () {
        this.axios.get('/api2/admin/usersList')
            .then(res => {
                this.tableData = res.data.data.usersList
            })
            .catch(err => {
                console.error(err);
            })
    },
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.page {
    margin-top: 15px;
}
.userHead {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
}
</style>