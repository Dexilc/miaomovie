<!--即将上映  -->
<template>
  <div class="movie_body">
    <ul>
      <li>
        <div class="pic_show"><img src="/images/movie_1.jpg" /></div>
        <div class="info_list">
          <h2>无名之辈</h2>
          <p><span class="person">17746</span> 人想看</p>
          <p>主演: 陈建斌,任素汐,潘斌龙</p>
          <p>2018-11-30上映</p>
        </div>
        <div class="btn_pre">
          预售
        </div>
      </li>
      <li>
        <div class="pic_show"><img src="/images/movie_2.jpg" /></div>
        <div class="info_list">
          <h2>毒液：致命守护者</h2>
          <p><span class="person">2346</span> 人想看</p>
          <p>主演: 汤姆·哈迪,米歇尔·威廉姆斯,里兹·阿迈德</p>
          <p>2018-11-30上映</p>
        </div>
        <div class="btn_pre">
          预售
        </div>
      </li>
      <li>
        <div class="pic_show"><img src="/images/movie_1.jpg" /></div>
        <div class="info_list">
          <h2>无名之辈</h2>
          <p><span class="person">17746</span> 人想看</p>
          <p>主演: 陈建斌,任素汐,潘斌龙</p>
          <p>2018-11-30上映</p>
        </div>
        <div class="btn_pre">
          预售
        </div>
      </li>
      <li>
        <div class="pic_show"><img src="/images/movie_2.jpg" /></div>
        <div class="info_list">
          <h2>毒液：致命守护者</h2>
          <p><span class="person">2346</span> 人想看</p>
          <p>主演: 汤姆·哈迪,米歇尔·威廉姆斯,里兹·阿迈德</p>
          <p>2018-11-30上映</p>
        </div>
        <div class="btn_pre">
          预售
        </div>
      </li>
      <li>
        <div class="pic_show"><img src="/images/movie_1.jpg" /></div>
        <div class="info_list">
          <h2>无名之辈</h2>
          <p><span class="person">17746</span> 人想看</p>
          <p>主演: 陈建斌,任素汐,潘斌龙</p>
          <p>2018-11-30上映</p>
        </div>
        <div class="btn_pre">
          预售
        </div>
      </li>
      <li>
        <div class="pic_show"><img src="/images/movie_2.jpg" /></div>
        <div class="info_list">
          <h2>毒液：致命守护者</h2>
          <p><span class="person">2346</span> 人想看</p>
          <p>主演: 汤姆·哈迪,米歇尔·威廉姆斯,里兹·阿迈德</p>
          <p>2018-11-30上映</p>
        </div>
        <div class="btn_pre">
          预售
        </div>
      </li>
      <li>
        <div class="pic_show"><img src="/images/movie_1.jpg" /></div>
        <div class="info_list">
          <h2>无名之辈</h2>
          <p><span class="person">17746</span> 人想看</p>
          <p>主演: 陈建斌,任素汐,潘斌龙</p>
          <p>2018-11-30上映</p>
        </div>
        <div class="btn_pre">
          预售
        </div>
      </li>
      <li>
        <div class="pic_show"><img src="/images/movie_2.jpg" /></div>
        <div class="info_list">
          <h2>毒液：致命守护者</h2>
          <p><span class="person">2346</span> 人想看</p>
          <p>主演: 汤姆·哈迪,米歇尔·威廉姆斯,里兹·阿迈德</p>
          <p>2018-11-30上映</p>
        </div>
        <div class="btn_pre">
          预售
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  name: 'ComingSoon',
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
#content .movie_body {
  flex: 1;
  overflow: auto;
}
.movie_body ul {
  margin: 0 12px;
  overflow: hidden;
}
.movie_body ul li {
  margin-top: 12px;
  display: flex;
  align-items: center;
  border-bottom: 1px #e6e6e6 solid;
  padding-bottom: 10px;
}
.movie_body .pic_show {
  width: 64px;
  height: 90px;
}
.movie_body .pic_show img {
  width: 100%;
}
.movie_body .info_list {
  margin-left: 10px;
  flex: 1;
  position: relative;
}
.movie_body .info_list h2 {
  font-size: 17px;
  line-height: 24px;
  width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.movie_body .info_list p {
  font-size: 13px;
  color: #666;
  line-height: 22px;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.movie_body .info_list .grade {
  font-weight: 700;
  color: #faaf00;
  font-size: 15px;
}
.movie_body .info_list img {
  width: 50px;
  position: absolute;
  right: 10px;
  top: 5px;
}
.movie_body .btn_mall,
.movie_body .btn_pre {
  width: 47px;
  height: 27px;
  line-height: 28px;
  text-align: center;
  background-color: #f03d37;
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
}
.movie_body .btn_pre {
  background-color: #3c9fe6;
}
</style>