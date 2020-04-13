<!-- 管理员 -->
<template>
    <div class="container">
        <el-container>
            <el-header
                >喵喵网管理后台，欢迎:{{ $store.state.user.name }}</el-header
            >
            <el-container>
                <el-aside width="200px">
                    <el-menu
                        default-active="1"
                        class="el-menu-vertical-demo"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b"
                    >
                        <el-menu-item index="1">
                            <i class="el-icon-menu"></i>
                            <router-link
                                to="/admin/users"
                                slot="title"
                                tag="span"
                                >用户管理</router-link
                            >
                        </el-menu-item>
                        <el-menu-item index="2">
                            <i class="el-icon-document"></i>
                            <router-link
                                to="/admin/movie"
                                slot="title"
                                tag="span"
                                >电影管理</router-link
                            >
                        </el-menu-item>
                        <el-menu-item index="3">
                            <i class="el-icon-setting"></i>
                            <router-link
                                to="/admin/cinema"
                                slot="title"
                                tag="span"
                                >影院管理</router-link
                            >
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import axios from 'axios'
export default {
    //import引入的组件需要注入到对象中才能使用
    name: 'admin',
    props: {},
    components: {

    },
    data () {
        //这里存放数据
        return {

        };
    },
    beforeRouteEnter (to, from, next) {
        axios.get('/api2/admin')
            .then(res => {
                var status = res.data.status;
                if (status === 0) {
                    next()
                } else {
                    next('/mine/login')
                }
            })

    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {

    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created () {

    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted () {

    },
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.el-header,
.el-footer {
    background-color: #b3c0d1;
    color: #333;
    padding-left: 60px;
    line-height: 60px;
}

.el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
}

.el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    // line-height: 160px;
}

body > .el-container {
    margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}
</style>