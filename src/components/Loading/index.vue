<!--  -->
<template>
    <div class="loader"></div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
    //import引入的组件需要注入到对象中才能使用
    name: 'Loading',
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

$colors: hsla(337, 84, 48, 0.75) hsla(160, 50, 48, 0.75) hsla(190, 61, 65, 0.75)
    hsla(41, 82, 52, 0.75);
$size: 2.5em;
$thickness: 0.5em;

// Calculated variables.
$lat: ($size - $thickness) / 2;
$offset: $lat - $thickness;

.loader {
    position: relative;
    width: $size;
    height: $size;
    transform: rotate(165deg);

    &:before,
    &:after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        display: block;
        width: $thickness;
        height: $thickness;
        border-radius: $thickness / 2;
        transform: translate(-50%, -50%);
    }

    &:before {
        animation: before 2s infinite;
    }

    &:after {
        animation: after 2s infinite;
    }
}

@keyframes before {
    0% {
        width: $thickness;
        box-shadow: $lat (-$offset) nth($colors, 1),
            (-$lat) $offset nth($colors, 3);
    }
    35% {
        width: $size;
        box-shadow: 0 (-$offset) nth($colors, 1), 0 $offset nth($colors, 3);
    }
    70% {
        width: $thickness;
        box-shadow: (-$lat) (-$offset) nth($colors, 1),
            $lat $offset nth($colors, 3);
    }
    100% {
        box-shadow: $lat (-$offset) nth($colors, 1),
            (-$lat) $offset nth($colors, 3);
    }
}

@keyframes after {
    0% {
        height: $thickness;
        box-shadow: $offset $lat nth($colors, 2),
            (-$offset) (-$lat) nth($colors, 4);
    }
    35% {
        height: $size;
        box-shadow: $offset 0 nth($colors, 2), (-$offset) 0 nth($colors, 4);
    }
    70% {
        height: $thickness;
        box-shadow: $offset (-$lat) nth($colors, 2),
            (-$offset) $lat nth($colors, 4);
    }
    100% {
        box-shadow: $offset $lat nth($colors, 2),
            (-$offset) (-$lat) nth($colors, 4);
    }
}

/**
 * Attempt to center the whole thing!
 */

html,
body {
    height: 100%;
}

.loader {
    position: absolute;
    top: calc(50% - #{$size / 2});
    left: calc(50% - #{$size / 2});
}
</style>