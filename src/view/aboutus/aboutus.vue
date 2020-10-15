<template>
    <div class="clzy-aboutus">
        <div class="aboutus_topimg">
            <img src="../../assets/images/aboutus/关于我们顶部背景.png"/>
        </div>
        <div class="aboutus_top">
            <div class="aboutus_cav">
                <div class="left">
                    <p>首页 > 关于我们 > <span>{{this.$route.meta.title}}</span></p>
                </div>
                <div class="right">
                    <router-link to="/aboutus/contectus" class="active"><span>联系我们</span></router-link>
                    <router-link to="/aboutus/qualification" class="active"><span>企业资质</span></router-link>
                    <router-link to="/aboutus/companyprofile" class="active"><span>企业介绍</span></router-link>
                </div>
            </div>
        </div>
        <keep-alive><router-view name="aboutus"></router-view></keep-alive>
    </div>
</template>

<script>
export default {
    name: 'aboutus',
    components: {

    },
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
    @import './aboutus.less';
</style>
