<!-- 头部 -->
<template>
    <header id="header">
        <slot></slot>
        <h1>{{ title }}</h1>
    </header>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
    //import引入的组件需要注入到对象中才能使用
    name: 'Header',
    props: {
        title: {
            type: String,
            default: '喵喵电影'
        }
    },
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
<style scoped>
/* @import url(); 引入公共css类 */
#header {
    width: 100%;
    height: 50px;
    color: #fff;
    background: #e54847;
    border-bottom: 1px solid #e54847;
    position: relative;
}

#header h1 {
    font-size: 18px;
    text-align: center;
    line-height: 50px;
    font-weight: normal;
}

#header i {
    position: absolute;
    left: 5px;
    top: 50%;
    margin-top: -13px;
    font-size: 26px;
}
</style>