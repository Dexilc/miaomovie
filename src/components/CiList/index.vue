<!-- 城市列表 -->
<template>
    <div class="cinema_body">
        <ul>
            <li v-for="item in cinemaList" :key="item.id">
                <div>
                    <span>{{ item.nm }}</span>
                    <span class="q"
                        ><span class="price">{{ item.sellPrice }}</span>
                        元起</span
                    >
                </div>
                <div class="address">
                    <span>{{ item.addr }}</span>
                    <span>{{ item.distance }}</span>
                </div>
                <div class="card">
                    <div
                        v-for="(num, key) in item.tag"
                        v-if="num === 1"
                        :key="key"
                        :class="key | classCard"
                    >
                        {{ key | formatCard }}
                    </div>
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
    name: 'CiList',
    props: {},
    components: {

    },
    data () {
        //这里存放数据
        return {
            cinemaList: []
        };
    },
    filters: {
        formatCard (key) {
            var card = [
                { key: 'allowRefund', value: '改签' },
                { key: 'endorse', value: '退票' },
                { key: 'sell', value: '折扣卡' },
                { key: 'snack', value: '小吃' },
            ]
            for (var i = 0; i < card.length; i++) {
                if (card[i].key === key) {
                    return card[i].value
                }
            }
            return ''
        },
        classCard (key) {
            var card = [
                { key: 'allowRefund', value: 'bl' },
                { key: 'endorse', value: 'bl' },
                { key: 'sell', value: 'or' },
                { key: 'snack', value: 'or' },
            ]
            for (var i = 0; i < card.length; i++) {
                if (card[i].key === key) {
                    return card[i].value
                }
            }
            return ''
        }
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
        this.axios.get('/api/cinemaList?cityId=10')
            .then(res => {
                var msg = res.data.msg
                if (msg === 'ok') {
                    this.cinemaList = res.data.data.cinemas
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
#content .cinema_body {
    flex: 1;
    overflow: auto;
}
.cinema_body ul {
    padding: 20px;
}
.cinema_body li {
    border-bottom: 1px solid #e6e6e6;
    margin-bottom: 20px;
}
.cinema_body div {
    margin-bottom: 10px;
}
.cinema_body .q {
    font-size: 11px;
    color: #f03d37;
}
.cinema_body .price {
    font-size: 18px;
}
.cinema_body .address {
    font-size: 13px;
    color: #666;
}
.cinema_body .address span:nth-of-type(2) {
    float: right;
}
.cinema_body .card {
    display: flex;
}
.cinema_body .card div {
    padding: 0 3px;
    height: 15px;
    line-height: 15px;
    border-radius: 2px;
    color: #f90;
    border: 1px solid #f90;
    font-size: 13px;
    margin-right: 5px;
}
.cinema_body .card div.or {
    color: #f90;
    border: 1px solid #f90;
}
.cinema_body .card div.bl {
    color: #589daf;
    border: 1px solid #589daf;
}
</style>