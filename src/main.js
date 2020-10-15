import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入video.js
import Video from 'video.js'
import 'video.js/dist/video-js.css'

// 引入vue-design组件库
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'

import '@/assets/them/them.less'
// 引入iconfont
import './assets/icons/iconfont.css'

import config from '@/config'
/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config

Vue.prototype.$video = Video
Vue.use(ViewUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
