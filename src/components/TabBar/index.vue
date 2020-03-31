<!-- 底部标签 -->
<template>
  <footer id="footer">
    <ul>
      <router-link tag="li" to="/movie">
        <i class="iconfont icon-dianying"></i>
        <p>电影</p>
      </router-link>
      <router-link tag="li" to="/cinema">
        <i class="iconfont icon-yingyuan"></i>
        <p>影院</p>
      </router-link>
      <router-link tag="li" to="/mine">
        <i class="iconfont icon-wode"></i>
        <p>我的</p>
      </router-link>
    </ul>
  </footer>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  name: 'TabBar',
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
<style scoped>
/* @import url(); 引入公共css类 */
#footer {
  width: 100%;
  height: 50px;
  background: white;
  border-top: 2px #ebe8e3 solid;
  position: fixed;
  left: 0;
  bottom: 0;
}

#footer ul {
  display: flex;
  text-align: center;
  height: 50px;
  align-items: center;
}

#footer ul li {
  flex: 1;
  height: 40px;
}

/* #footer ul li.active {
  color: #f03d37;
} */
#footer ul li.router-link-active {
  color: #f03d37;
}

#footer ul i {
  font-size: 20px;
}

#footer ul p {
  font-size: 12px;
  line-height: 18px;
}
</style>