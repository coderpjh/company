export default {
    title: '成理智源科技',
    /**
     * @description 在Cookie中存储的时效性，默认1天
     */
    cookieExpires: 1,

    /**
     * @description api请求基础路径
     * ycz 2020-03-27 如果需要用到就在这里配置
     */
    baseUrl: {
        dev: 'http://localhost:8080/api/',
        pro: 'http://localhost:8080/api/'
    },
    /**
     * @description 默认打开的首页的路由name值，默认为home
     */
    homeName: 'home',
    /**
     * @description 需要加载的插件
     */
    plugin: {
        // 'error-store': {
        //   showInHeader: true, // 设为false后不会在顶部显示错误日志徽标
        //   developmentOff: false // 设为true后在开发环境不会收集错误信息，方便开发中排查错误
        // }
    }
}
