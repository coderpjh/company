<template>
    <div class="topcontainer">
        <div class="clzy-header">
            <div class="header-left">
                <div class="header-content">
                    <img :src="Logo" alt="成理智源" class="system-logo" />
                </div>
            </div>
            <div class="header-right">
                <!-- 菜单栏 -->
                <side-menu ref="sideMenu" :active-name="activeName" :collapsed="collapsed" @on-select="turnToPage"
                    :menu-list="menuList"></side-menu>
            </div>
            <div class="login_btns">
                <a href="javascript:;" class="btn_qq _login_type_item" data-type="qq" tabindex="0">
                    <img :src="QQ" />
                    <span class="btn_inner">QQ登录</span>
                </a>
                <a href="javascript:;" class="btn_weixin _login_type_item" data-type="wx" tabindex="0">
                    <img :src="WeiChat" />
                    <span class="btn_inner">微信登录</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import headbtn from './headbtn.vue'
    import SideMenu from './side-menu'
    import Logo from '@/assets/logo.png'
    import QQ from '@/assets/images/QQ.png'
    import WeiChat from '@/assets/images/weichat.png'
    export default {
        name: 'Header',
        components: {
            SideMenu,
            headbtn
        },
        props: {
            menuList: {
                type: Array,
                default: () => []
            },
            activeName: {
                type: String,
                default: ''
            },
            accordion: {
                type: Boolean
            }
        },
        data() {
            return {
                Logo,
                QQ,
                WeiChat,
                openedNames: [],
                collapsed: false
            }
        },
        methods: {
            turnToPage(route) {
                let {
                    name,
                    params,
                    query
                } = {}
                if (typeof route === 'string') name = route
                else {
                    name = route.name
                    params = route.params
                    query = route.query
                }
                if (name.indexOf('isTurnByHref_') > -1) {
                    window.open(name.split('_')[1])
                    return
                }
                this.$router.push({
                    name,
                    params,
                    query
                })
            }
        }
    }
</script>

<style lang="less">
    @import './header.less';
</style>
