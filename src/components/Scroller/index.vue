<!--  -->
<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import BScroll from 'better-scroll'

export default {
    //import引入的组件需要注入到对象中才能使用
    name: 'Scroller',
    props: {
        handleToScroll: {
            type: Function,
            default: function () {

            }
        },
        handleToTouchEnd: {
            type: Function,
            default: function () {

            }
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
        toScrollTop (y) {
            this.scroll.scrollTo(0, y)
        }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created () {

    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted () {
        var scroll = new BScroll(this.$refs.wrapper, {
            tap: true,
            probeType: 1
        })
        this.scroll = scroll
        scroll.on('scroll', (pos) => {
            this.handleToScroll(pos)
        })
        scroll.on('touchEnd', (pos) => {
            this.handleToTouchEnd(pos)
        })
    },
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.wrapper {
    height: 100%;
}
</style>