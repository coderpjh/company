import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import store from '@/store'
import iView from 'view-design'
import config from '@/config'
import { getToken, setTitle } from '@/libs/util'

const { homeName } = config
Vue.use(Router)
const router = new Router({
    routes,
    mode: 'history'
})
const LOGIN_PAGE_NAME = 'login'
router.beforeEach((to, from, next) => {
    // 路由守卫，如果这里要做一些验证，如登录权限等，可在此进行配置
    iView.LoadingBar.start()
    const token = getToken()
    next()
    /* if (!token && to.name !== LOGIN_PAGE_NAME) {
        // 未登录且要跳转的页面不是登录页
        next({
            name: LOGIN_PAGE_NAME // 跳转到登录页
        })
    } else if (!token && to.name === LOGIN_PAGE_NAME) {
        // 未登陆且要跳转的页面是登录页
        next() // 跳转
    } else if (token && to.name === LOGIN_PAGE_NAME) {
        // 已登录且要跳转的页面是登录页
        next({
            name: homeName // 跳转到homeName页
        })
    } else {
        if (store.state.user.hasGetInfo) {
            next()
        } else {
            // ycz-clzy-20200329 基础框架没有认证信息获取等，先不做，直接跳转
            next()
            // store.dispatch('getUserInfo').then(user => {
            //     // 拉取用户信息，通过用户权限和跳转的页面的name来判断是否有权限访问;access必须是一个数组，如：['super_admin'] ['super_admin', 'admin']
            //     next()
            // }).catch(() => {
            //     setToken('')
            //     next({
            //         name: 'login'
            //     })
            // })
        }
    } */
})

router.afterEach(to => {
    setTitle(to, router.app)
    iView.LoadingBar.finish()
    window.scrollTo(0, 0)
})

export default router
