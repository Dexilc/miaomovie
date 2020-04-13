<!-- 弹窗组件 -->
<template>
    <div class="messageBox">
        <h2>{{ title }}</h2>
        <p>{{ content }}</p>
        <div>
            <div v-if="cancel" @touchstart="handleCancel">{{ cancel }}</div>
            <div v-if="ok" @touchstart="handleOk">{{ ok }}</div>
        </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
    //import引入的组件需要注入到对象中才能使用
    name: 'MessageBox',
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
.messageBox {
    width: 200px;
    height: 120px;
    border: 1px #ccc solid;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 3px 3px 3px 3px #ccc;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -60px 0 0 -100px;
    h2 {
        text-align: center;
        line-height: 40px;
        font-size: 18px;
    }
    p {
        text-align: center;
        line-height: 40px;
    }
    > div {
        display: flex;
        position: absolute;
        bottom: 0;
        width: 100%;
        border-top: 1px solid #ccc;
        div {
            flex: 1;
            text-align: center;
            line-height: 30px;
            border-right: 1px #ccc solid;
        }
        div:last-child {
            border: none;
        }
    }
}
</style>