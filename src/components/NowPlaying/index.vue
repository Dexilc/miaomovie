<!-- 正在热映 -->
<template>
    <div class="movie_body" ref="movie_body">
        <Loading v-if="isLoading" />
        <Scroller
            :handleToScroll="handleToScroll"
            :handleToTouchEnd="handleToTouchEnd"
            v-else
        >
            <ul>
                <li class="pulldown">
                    {{ pullDownMsg }}
                </li>
                <li v-for="item in movieList" :key="item.id">
                    <div class="pic_show" @tap="handleToDetail(item.id)">
                        <img :src="item.img | setWH('128.180')" />
                    </div>
                    <div class="info_list">
                        <h2 @tap="handleToDetail(item.id)">
                            {{ item.nm
                            }}<img
                                v-if="item.version"
                                src="@/assets/maxs.png"
                            />
                        </h2>
                        <p>
                            观众评分
                            <span class="grade">{{
                                (Math.random() * 10 + 1).toFixed(1)
                            }}</span>
                        </p>
                        <p>主演: {{ item.star }}</p>
                        <p>
                            今日{{
                                Math.floor(Math.random() * 100) + 1
                            }}家影院放映{{ item.wish }}场
                        </p>
                    </div>
                    <div class="btn_mall">
                        购票
                    </div>
                </li>
            </ul>
        </Scroller>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
export default {
    //import引入的组件需要注入到对象中才能使用
    name: 'NowPlaying',
    props: {},
    components: {

    },
    data () {
        //这里存放数据
        return {
            movieList: [],
            pullDownMsg: '',
            isLoading: true,
            prevCityId: -1
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        handleToDetail (movieId) {
            // console.log(movieId);
            this.$router.push('/movie/detail/1/' + movieId)
        },
        handleToScroll (pos) {
            if (pos.y > 30) {
                this.pullDownMsg = '正在加载…………'
            }
        },
        handleToTouchEnd (pos) {
            if (pos.y > 30) {
                this.axios.get('/api/movieOnInfoList?cityId=20').then((res) => {
                    var msg = res.data.msg;
                    if (msg === 'ok') {
                        this.pullDownMsg = '更新成功';
                        setTimeout(() => {
                            this.movieList = res.data.data.movieList
                            this.pullDownMsg = ''
                        }, 1000)
                    }
                })
            }
        }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created () {

    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    activated () {
        var cityId = this.$store.state.city.id;
        // 如果没切换id直接返回
        if (this.prevCityId === cityId) { return }
        // 切换id重新载入数据
        this.isLoading = true;
        this.axios.get('/api/movieOnInfoList?cityId=' + cityId)
            .then(res => {
                var msg = res.data.msg;
                if (msg === 'ok') {
                    this.movieList = res.data.data.movieList;
                    this.isLoading = false;
                    this.prevCityId = cityId
                    /* this.$nextTick(() => {
                        var scroll = new BScroll(this.$refs.movie_body, {
                            tap: true,
                            probeType: 1
                        })
                        scroll.on('scroll', (pos) => {
                            if (pos.y > 30) {
                                this.pullDownMsg = '正在加载…………'
                            }

                        })
                        scroll.on('touchEnd', (pos) => {
                            if (pos.y > 30) {
                                this.axios.get('/api/movieOnInfoList?cityId=2').then((res) => {
                                    var msg = res.data.msg;
                                    if (msg === 'ok') {
                                        this.pullDownMsg = '更新成功';
                                        setTimeout(() => {
                                            this.movieList = res.data.data.movieList
                                            this.pullDownMsg = ''
                                        }, 1000)
                                    }
                                })
                            }
                        })
                    }) */
                }
            })
            .catch(err => {
                console.error(err);
            })
    },
}
</script>
<style scoped>
#content .movie_body {
    flex: 1;
    overflow: auto;
}
.movie_body .pulldown {
    margin: 0;
    padding: 0;
    border: none;
    justify-content: center;
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