<!-- 个人中心 -->
<template>
    <div class="">
        <div>个人中心</div>
        <div>
            当前用户：{{ $store.state.user.name }}
            <a href="javascript:;" @touchstart="handleToLogout">退出</a>
        </div>
        <div v-if="$store.state.user.isAdmin">
            用户身份：管理员
            <a href="/admin" target="_blank">进入管理后台</a>
        </div>
        <div v-else>用户身份：普通会员</div>
        <div>
            <input
                type="file"
                name="file"
                value="上传头像"
                @change="uploadHead"
            />
            <img :src="$store.state.user.userHead" alt="" class="userhead" />
        </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import axios from 'axios'
import { messageBox } from '@/components/JS'
export default {
    //import引入的组件需要注入到对象中才能使用
    name: 'center',
    props: {},
    components: {

    },
    data () {
        //这里存放数据
        return {

        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        handleToLogout () {
            this.axios.get('/api2/users/logout')
                .then(res => {
                    var status = res.data.status;
                    if (status === 0) {
                        localStorage.removeItem('name')
                        localStorage.removeItem('isAdmin')
                        this.$store.commit('user/USER_NAME', { name: '', isAdmin: false, userHead: '' })
                        this.$router.push('/mine/login')
                    }
                })
        },
        uploadHead (ev) {
            const file = ev.target.files[0]
            const param = new FormData()
            param.append('file', file, file.name)
            var config = {
                headers: {
                    'Content-Type': "multipart/form-data"
                }
            }
            this.axios.post('/api2/users/uploadUserHead', param, config)
                .then(res => {
                    console.log(res)
                    var status = res.data.status;
                    var that = this
                    if (status === 0) {
                        messageBox({
                            title: '信息',
                            content: '上传头像成功',
                            ok: '确定',
                            handleOk () {
                                that.$store.commit('user/USER_NAME', {
                                    name: that.$store.state.user.name,
                                    isAdmin: that.$store.state.user.isAdmin,
                                    userHead: res.data.data.userHead + '?' + Math.random()
                                })
                            }

                        })
                    } else {
                        messageBox({
                            title: '信息',
                            content: '上传头像成功',
                            ok: '确定'
                        })
                    }
                })
                .catch(err => {
                    console.error(err);
                })
        }
    },
    beforeRouteEnter (to, from, next) {
        axios.get('/api2/users/getUser')
            .then(res => {
                var status = res.data.status;
                if (status === 0) {
                    next(vm => {
                        localStorage.setItem('name', res.data.data.username)
                        localStorage.setItem('isAdmin', res.data.data.isAdmin)
                        vm.$store.commit('user/USER_NAME', {
                            name: res.data.data.username,
                            isAdmin: res.data.data.isAdmin,
                            userHead: res.data.data.userHead
                        })
                    })
                } else {
                    next('/mine/login')
                }
            })

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
.userhead {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
}
</style>