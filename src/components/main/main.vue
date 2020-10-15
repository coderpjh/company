<template>
    <div>
    <div class="clzy-main">
       <Layout>
       <Header class="main-header" :menuList="menuList" :active-name="$route.name"></Header>
       <Content class="main-content-con">
           <Layout class="main-layout-con">
               <Content class="content-wrapper">
                   <keep-alive :include="cacheList">
                       <router-view />
                   </keep-alive>
               </Content>
           </Layout>
       </Content>
       <Footer class="main-footer"></Footer>
       </Layout>
    </div>
    <div id="cover"></div>
    <register-from></register-from>
    </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'
import Header from './components/header'
import Footer from './components/footer'
import registerFrom from './registerform'
export default {
    name: 'Main',
    components: {
        Header,
        Footer,
        registerFrom
    },
    computed: {
        menuList () {
            return this.$store.getters.menuList
        },
        cacheList () {
            return this.$store.state.user.cachedMenuList
        }
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
@import './main.less';
</style>
