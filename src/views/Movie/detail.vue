<!--  -->
<template>
    <div id="detailContainer" class="slide-enter-active">
        <Header title="影片详情">
            <i class="iconfont icon-right" @touchstart="handleToBack"></i>
        </Header>
        <Loading v-if="isLoading"></Loading>
        <div id="content" class="contentDetail" v-else>
            <div class="detail_list">
                <div
                    class="detail_list_bg"
                    :style="{
                        'background-image':
                            'url(' +
                            detailMovie.img.replace(/w\.h/, '148.208') +
                            ')'
                    }"
                ></div>
                <div class="detail_list_filter"></div>
                <div class="detail_list_content">
                    <div class="detail_list_img">
                        <img :src="detailMovie.img | setWH('148.208')" alt="" />
                    </div>
                    <div class="detail_list_info">
                        <h2>{{ detailMovie.nm }}</h2>
                        <p>{{ detailMovie.enm }}</p>
                        <p>{{ detailMovie.sc }}</p>
                        <p>{{ detailMovie.cat }}</p>
                        <p>{{ detailMovie.src }} / {{ detailMovie.dur }}分钟</p>
                        <p>{{ detailMovie.pubDesc }}</p>
                    </div>
                </div>
            </div>
            <div class="detail_intro">
                <p>
                    {{ detailMovie.dra }}
                </p>
            </div>
            <div class="detail_player swiper-container" ref="detail_player">
                <ul class="swiper-wrapper">
                    <li
                        v-for="(item, index) in detailMovie.photos"
                        :key="index"
                        class="swiper-slide"
                    >
                        <div>
                            <img :src="item | setWH('140.127')" alt="" />
                        </div>
                        <!-- <p>陈建斌</p>
                        <p>马先勇</p> -->
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Header from '@/components/Header'
export default {
    //import引入的组件需要注入到对象中才能使用
    name: 'detail',
    props: ['movieId'],

    components: {
        Header
    },
    data () {
        //这里存放数据
        return {
            detailMovie: {},
            isLoading: true
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        handleToBack () {
            this.$router.back()
        }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created () {

    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted () {
        // console.log(this.movieId);
        this.axios.get('/api/detailmovie?movieId=' + this.movieId)
            .then(res => {
                var msg = res.data.msg;
                if (msg === 'ok') {
                    this.detailMovie = res.data.data.detailMovie;
                    this.isLoading = false
                    this.$nextTick(() => {
                        new Swiper(this.$refs.detail_player, {
                            slidesPerView: 'auto',
                            freeMode: true,
                            freeModeSticky: true
                        })
                    })
                }
            })
            .catch(err => {
                console.error(err);
            })

    },
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
#detailContainer {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 100;
    width: 100%;
    min-height: 100%;
    background-color: #fff;
}
#detailContainer.slide-enter-active {
    animation: slideMove 0.3s ease forwards;
}
@keyframes slideMove {
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(0);
    }
}
#content.contentDetail {
    display: block;
    margin-bottom: 0;
}
#content .detail_list {
    height: 200px;
    width: 100%;
    position: relative;
    overflow: hidden;
}
.detail_list .detail_list_bg {
    width: 100%;
    height: 100%;
    background: 0 40%;
    filter: blur(20px);
    background-size: cover;
    position: absolute;
    left: 0;
    top: 0;
}
.detail_list .detail_list_filter {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #40454d;
    opacity: 0.55;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
}
.detail_list .detail_list_content {
    display: flex;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
}
.detail_list .detail_list_img {
    width: 108px;
    height: 150px;
    border: solid 1px #f0f2f3;
    margin: 20px;
}
.detail_list .detail_list_img img {
    width: 100%;
    height: 100%;
}
.detail_list .detail_list_info {
    margin-top: 20px;
}
.detail_list .detail_list_info h2 {
    font-size: 20px;
    color: white;
    font-weight: normal;
    line-height: 40px;
}
.detail_list .detail_list_info p {
    color: white;
    line-height: 20px;
    font-size: 14px;
    color: #ccc;
}
#content .detail_intro {
    padding: 10px;
}
#content .detail_player {
    margin: 20px;
}
.detail_player .swiper-slide {
    width: 70px;
    margin-right: 20px;
    text-align: center;
    font-size: 14px;
}
.detail_player .swiper-slide img {
    width: 100%;
    margin-bottom: 5px;
}
.detail_player .swiper-slide p:nth-of-type(2) {
    color: #999;
}
</style>