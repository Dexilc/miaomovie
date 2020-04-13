<!-- 修改密码 -->
<template>
    <div class="password_body">
        <div class="password_email">
            邮箱：<input
                type="text"
                class="password_text"
                v-model="email"
            /><button @touchstart="handleToVerify">
                发送验证码
            </button>
        </div>
        <div>
            新密码：<input
                type="password"
                class="password_text"
                v-model="password"
            />
        </div>
        <div>
            验证码：<input type="text" class="password_text" v-model="verify" />
        </div>
        <div class="password_btn">
            <button @touchstart="handleToPassword">修改</button>
        </div>
        <div class="password_link">
            <router-link to="/mine/register">立即注册</router-link>
            <router-link to="/mine/login">立即登录</router-link>
        </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { messageBox } from '@/components/JS'
export default {
    //import引入的组件需要注入到对象中才能使用
    name: 'findPassword',
    props: {},
    components: {

    },
    data () {
        //这里存放数据
        return {
            email: '',
            password: '',
            verify: ''
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        handleToVerify () {
            this.axios.get('/api2/users/verify?email=' + this.email)
                .then(res => {
                    var status = res.data.status;
                    if (status === 0) {
                        messageBox({
                            title: '验证码',
                            content: '验证码已发送',
                            ok: '确定'
                        })
                    } else {
                        messageBox({
                            title: '验证码',
                            content: '验证码发送失败',
                            ok: '确定'
                        })

                    }
                })
                .catch(err => {
                    console.error(err);
                })
        },
        handleToPassword () {
            this.axios.post('/api2/users/findPassword', { email: this.email, password: this.password, verify: this.verify })
                .then(res => {
                    var status = res.data.status
                    var that = this
                    if (status === 0) {
                        messageBox({
                            title: '修改',
                            content: '修改密码成功',
                            ok: '确定',
                            handleOk () {
                                that.$router.push('/mine/login')
                            }

                        })
                    } else {
                        messageBox({
                            title: '修改',
                            content: '修改密码失败',
                            ok: '确定'
                        })
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

    },
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
#content .password_body {
    width: 100%;
    div {
        width: 96%;
        margin: 0 auto;
    }
    .password_email {
        position: relative;
        button {
            position: absolute;
            right: 10px;
            height: 30px;
            border-radius: 3px;
            border: none;
            padding: 3px;
        }
    }
}
.password_body .password_text {
    width: 100%;
    height: 40px;
    border: none;
    border-bottom: 1px #ccc solid;
    margin-bottom: 5px;
    outline: none;
    text-indent: 10px;
}
.password_body .password_btn {
    height: 50px;
}
.password_body .password_btn button {
    width: 100%;
    height: 100%;
    background: #e54847;
    border-radius: 3px;
    border: none;
    display: block;
    color: white;
    font-size: 20px;
}
.password_body .password_link {
    display: flex;
    justify-content: space-between;
}
.password_body .password_link a {
    text-decoration: none;
    margin: 0 5px;
    font-size: 12px;
    color: #e54847;
}
</style>