<template>
    <div class="clzy-news">
        <div class="news-topimg">
            <img src="../../assets/images/新闻资讯顶部背景.png" />
        </div>
        <router-view name="newscontent"></router-view>
    </div>
</template>

<script>
export default {
    name: 'News',
    data () {
        return {

        }
    },
    methods: {

    },
    mounted () {

    }
}
</script>

<style lang="less">
    @import './news.less';
</style>
