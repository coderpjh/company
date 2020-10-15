<template>
    <div class="clzy-home">
        <top-marquee></top-marquee>
        <div class="png">
            <topCard></topCard>
            <topCard></topCard>
            <topCard></topCard>
            <topCard></topCard>
        </div>
        <div class="tofuture">
            <div class="top">
                <div class="outside">
                    <p>从这里，走向未来</p>
                    <div class="inside"></div>
                </div>
                <img src="../../assets/images/home_images/从这里走向未来.png"/>
                <p>成理智源科技（成都）有限公司成立于2019年7月，是一家依托成都理工大
                学与中国科学院成都山地所的创新性科技企业，公司专注于地质灾害信息管
                理与监测预警领域，致力于打造国内领先的自动化灾害
                监测预警平台。</p>
               <button>了解详情</button>
            </div>
            <div class="videos">
                <myVideo></myVideo>
            </div>
        </div>
        <div class="convoy">
            <p>成理智源 · 地质灾害预警系统，截止目前已保驾护航<span>1,320,450,673</span>次</p>
        </div>
        <div class="scenes">
            <div class="outside">
                <p>多场景智能应用 · 守护地质安全</p>
                <div class="inside"></div>
            </div>
            <div class="content">
                <div class="up">
                    <img  src="../../assets/images/home_images/多种智能应用场景/泥石流监测.png"/>
                    <img  src="../../assets/images/home_images/多种智能应用场景/崩塌监测.png"/>
                    <img  src="../../assets/images/home_images/多种智能应用场景/区域风险.png"/>
                </div>
                <div class="down">
                    <img  src="../../assets/images/home_images/多种智能应用场景/滑坡监测.png"/>
                    <img  src="../../assets/images/home_images/多种智能应用场景/桥梁监测.png"/>
                    <img  src="../../assets/images/home_images/多种智能应用场景/应急指挥.png"/>
                </div>
            </div>
        </div>
        <div class="information">
            <div class="outside">
                <p>资讯阅读 · 乐在其中</p>
                <div class="inside"></div>
            </div>
            <div class="read">
                <readBox></readBox>
            </div>
        </div>
        <div class="client">
            <div class="outside">
                <p>专业研发多年 · 成为忠实客户的选择</p>
                <div class="inside"></div>
            </div>
            <div class="content">
                <div class="up">
                    <logo></logo>
                    <logo></logo>
                    <logo></logo>
                    <logo></logo>
                    <logo></logo>
                </div>
                <div class="down">
                    <logo></logo>
                    <logo></logo>
                    <logo></logo>
                    <logo></logo>
                    <logo></logo>
                </div>
            </div>
        </div>
        <!-- <div class="backtop"> -->
        <BackTop :height="100" :bottom="200" class="backtop">
                <img src="../../assets/images/home_images/返回顶部.png"/>
            </BackTop>
            <!-- </div> -->
    </div>
</template>

<script>
import readBox from './read_box.vue'
import logo from './logo.vue'
import myVideo from './myVideo.vue'
import topCard from './topCard.vue'
import topMarquee from './topMarquee.vue'
export default {
    name: 'Home',
    components: {
        topMarquee,
        topCard,
        myVideo,
        logo,
        readBox
    },
    data () {
        return {

        }
    },
    watch: {
        $route (to, from) {
            var aboutus = document.querySelector('.ivu-menu')
            var li = aboutus.children
            if (to.path === '/aboutus/contectus' ||
            to.path === '/aboutus/qualification' ||
            to.path === '/aboutus/companyprofile') {
                li[li.length - 1].className = 'ivu-menu-item ivu-menu-item-active ivu-menu-item-selected'
            }
            if (to.path === '/home' ||
            to.path === '/solution' ||
            to.path === '/product' ||
            to.path === '/news/mainnews' ||
            to.path === '/application') {
                li[li.length - 1].className = 'ivu-menu-item'
            }
            if (to.path === '/news/mainnews' || to.path === '/news/newsdetail') {
                li[li.length - 2].className = 'ivu-menu-item ivu-menu-item-active ivu-menu-item-selected'
            }
            if ((from.path === '/news/mainnews' && to.path !== '/news/newsdetail') ||
                (to.path !== '/news/mainnews' && from.path === '/news/newsdetail')
            ) {
                li[li.length - 2].className = 'ivu-menu-item'
            }
        }
    },
    methods: {

    },
    mounted () {

    }
}
</script>

<style lang="less">
@import './home.less';
</style>
