<!-- 注册 -->
<template>
    <div class="register_body">
        <div class="register_email">
            Email:<input
                type="text"
                class="register_text"
                v-model="email"
            /><button @touchstart="handleToVerify" :disabled="disabled">
                {{ verifyinfo }}
            </button>
        </div>
        <div>
            UserName:
            <input
                type="text"
                class="register_text"
                name="unm"
                v-model="username"
            />
        </div>
        <div>
            Password:
            <input
                type="password"
                class="register_text"
                name="pwd"
                v-model="password"
            />
        </div>
        <div>
            Confirm Password:
            <input type="password" class="register_text" name="cpwd" />
        </div>
        <div>
            Verification Code:
            <input
                type="text"
                name="vcode"
                class="register_text"
                v-model="verify"
            />
        </div>
        <div class="register_btn">
            <button @touchstart="handleToRegister">Register</button>
        </div>
        <div class="register_link">
            <router-link to="/mine/login">立即登录</router-link>
            <router-link to="/mine/findPassword">找回密码</router-link>
        </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { messageBox } from "@/components/JS"
export default {
    //import引入的组件需要注入到对象中才能使用
    name: 'register',
    props: {},
    components: {

    },
    data () {
        //这里存放数据
        return {
            email: '',
            username: '',
            password: '',
            verify: '',
            verifyinfo: 'send verification code',
            disabled: false
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        handleToVerify () {
            if (this.disabled) { return }
            this.axios.get('/api2/users/verify?email=' + this.email)
                .then(res => {
                    var status = res.data.status;
                    var that = this
                    if (status === 0) {
                        messageBox({
                            title: '验证码',
                            content: '验证码已发送',
                            ok: '确定',
                            handleOk () {
                                that.countDown();
                            }
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
        handleToRegister () {
            this.axios.post('/api2/users/register', { email: this.email, username: this.username, password: this.password, verify: this.verify })
                .then(res => {
                    var status = res.data.status;
                    var that = this
                    if (status === 1) {
                        messageBox({
                            title: '注册',
                            content: '用户注册成功',
                            ok: '确定',
                            handleOk () {
                                that.$router.push('/mine/login')
                            }
                        })
                    } else {
                        messageBox({
                            title: '注册',
                            content: res.data.msg + ',请重新注册',
                            ok: '确定'
                        })
                    }
                })
        },
        countDown () {
            this.disabled = true;
            var count = 60;
            var timer = setInterval(() => {
                count--
                this.verifyinfo = `剩余${count}秒`
                if (count === 0) {
                    this.disabled = false
                    count = 60;
                    this.verifyinfo = 'send verification code'
                    clearInterval(timer)

                }
            }, 1000);
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
#content .register_body {
    width: 100%;
    div {
        width: 96%;
        margin: 0 auto;
    }
    .register_email {
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
.register_body .register_text {
    width: 100%;
    height: 40px;
    border: none;
    border-bottom: 1px #ccc solid;
    margin-bottom: 5px;
    outline: none;
    text-indent: 10px;
}
.register_body .register_btn {
    height: 50px;
}
.register_body .register_btn button {
    width: 100%;
    height: 100%;
    background: #e54847;
    border-radius: 3px;
    border: none;
    display: block;
    color: white;
    font-size: 20px;
}
.register_body .register_link {
    display: flex;
    justify-content: space-between;
}
.register_body .register_link a {
    text-decoration: none;
    margin: 0 5px;
    font-size: 12px;
    color: #e54847;
}
</style>