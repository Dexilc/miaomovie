<!-- 登录 -->
<template>
    <div class="login_body">
        <div>
            <input
                v-model="username"
                class="login_text"
                type="text"
                placeHolder="账户名/手机号/Email"
            />
        </div>
        <div>
            <input
                v-model="password"
                class="login_text"
                type="password"
                placeHolder="请输入您的密码"
            />
        </div>
        <div>
            <input
                v-model="verifyImg"
                class="login_text"
                type="text"
                placeHolder="请输入验证码"
            />
            <img
                src="/api2/users/verifyImg"
                alt="验证码"
                ref="verifyImg"
                @touchstart="flushVerifyImg"
            />
        </div>
        <div class="login_btn">
            <input type="submit" value="登录" @touchstart="handleToLogin" />
        </div>
        <div class="login_link">
            <router-link to="/mine/register">立即注册</router-link>
            <router-link to="/mine/findPassword">找回密码</router-link>
        </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { messageBox } from '@/components/JS'
export default {
    //import引入的组件需要注入到对象中才能使用
    name: 'login',
    props: {},
    components: {

    },
    data () {
        //这里存放数据
        return {
            username: '', password: '', verifyImg: ''
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        handleToLogin () {
            this.axios.post('/api2/users/login', {
                username: this.username,
                password: this.password,
                verifyImg: this.verifyImg
            })
                .then(res => {
                    var status = res.data.status;
                    var that = this
                    if (status === 0) {
                        messageBox({
                            title: '登录',
                            content: '登录成功',
                            ok: '确定',
                            handleOk () {
                                that.$router.push('/mine/center')
                            }
                        })
                    } else {
                        messageBox({
                            title: '登录',
                            content: res.data.msg,
                            ok: '确定',
                            handleOk () {
                                that.$refs.verifyImg.src = '/api2/users/verifyImg?' + Math.random()

                            }
                        })
                    }

                })
                .catch(err => {
                    console.error(err);
                })
        },
        flushVerifyImg (ev) {
            ev.target.src = '/api2/users/verifyImg?' + Math.random()
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
#content .login_body {
    width: 100%;
}
.login_body .login_text {
    width: 100%;
    height: 40px;
    border: none;
    border-bottom: 1px #ccc solid;
    margin-bottom: 5px;
    outline: none;
    text-indent: 10px;
}
.login_body .login_btn {
    height: 50px;
    margin: 10px;
}
.login_body .login_btn input {
    width: 100%;
    height: 100%;
    background: #e54847;
    border-radius: 3px;
    border: none;
    display: block;
    color: white;
    font-size: 20px;
}
.login_body .login_link {
    display: flex;
    justify-content: space-between;
}
.login_body .login_link a {
    text-decoration: none;
    margin: 0 5px;
    font-size: 12px;
    color: #e54847;
}
</style>