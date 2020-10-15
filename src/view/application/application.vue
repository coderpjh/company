<template>
    <div class="clzy-application">
        <div class="application-topimg">
            <img src="../../assets/images/application/应用案例顶部背景.png" />
        </div>
        <div class="application-toptitle">
            <div class="title">
                <p>首页 > <span>应用案例</span></p>
            </div>
        </div>
        <img-marquee></img-marquee>
    </div>
</template>

<script>
import imgMarquee from './imgmarquee.vue'
export default {
    name: 'application',
    components: {
        imgMarquee
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
    @import './application.less';
</style>
