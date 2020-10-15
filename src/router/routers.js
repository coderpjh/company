import Main from '@/components/main'

var routers = [{
    path: '/login',
    name: 'login',
    meta: {
        title: '登录',
        hideInMenu: true

    },
    component: () => import('@/view/login/login.vue')
},

{
    path: '/emptybackmanager',
    name: 'emptybackmanager',
    component: Main,
    meta: {
        hideInMenu: false,
        notCache: true,
        title: ''
    },
    children: [{
        path: '/emptyback',
        name: 'emptyback',
        meta: {
            hideInMenu: false,
            notCache: true,
            title: '',
            notAuth: true
        },
        component: () => import('@/view/empty-back/empty-back.vue')
    }]
}, {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {},
    children: [{
        path: '/home',
        name: 'home',
        meta: {
            title: '首页'
        },
        component: () => import('@/view/home/')
    }]
},
{
    path: '/',
    name: 'solution',
    component: Main,
    meta: {},
    children: [{
        path: '/solution',
        name: 'thesolution',
        meta: {
            title: '解决方案'
        },
        component: () => import('@/view/solution/')
    }]
},
{
    path: '/',
    name: 'product',
    component: Main,
    meta: {},
    children: [{
        path: '/product',
        name: 'products',
        meta: {
            title: '产品中心'
        },
        component: () => import('@/view/userlogin/userlogin.vue')
    }]
},
{
    path: '/',
    name: 'application',
    component: Main,
    meta: {},
    children: [{
        path: '/application',
        name: 'theapplication',
        meta: {
            title: '应用案例'
        },
        component: () => import('@/view/application/')
    }]
},
// {
//     path: '/userlogin',
//     component: () => import('@/view/userlogin/userlogin/')
// },
{
    path: '/',
    name: 'news',
    component: Main,
    meta: {},
    children: [{
        path: '/news',
        redirect: '/news/mainnews',
        name: 'newsManager',

        meta: {
            title: '新闻资讯'
        },
        component: () => import('@/view/news/'),
        children: [
            {
                path: '/news/mainnews',
                name: 'mainnews',
                components: {
                    newscontent: () => import('@/view/news/maincontent/')
                }
            },
            {
                path: '/news/newsdetail',
                name: 'newsdetail',
                components: {
                    newscontent: () => import('@/view/news/newsdetail/')
                }
            }
        ]
    }]
},
{
    path: '/',
    name: 'aboutus',
    component: Main,
    meta: {},
    children: [{
        path: '/aboutus',
        name: 'newsaboutus',
        redirect: '/aboutus/companyprofile',
        meta: {
            title: '关于我们'
        },
        component: () => import('@/view/aboutus/'),
        children: [
            {
                path: '/aboutus/companyprofile',
                name: 'companyprofile',
                meta: {
                    title: '企业介绍'
                },
                components: {
                    aboutus: () => import('@/view/aboutus/company_profile/')
                }
            },
            {
                path: '/aboutus/qualification',
                name: 'qualification',
                meta: {
                    title: '企业资质'
                },
                components: {
                    aboutus: () => import('@/view/aboutus/qualification/')
                }
            },
            {
                path: '/aboutus/contectus',
                name: 'contectus',
                meta: {
                    title: '联系我们'
                },
                components: {
                    aboutus: () => import('@/view/aboutus/contectus/')
                }
            }
        ]
    }]
},
{
    path: '/userlogin',
    meta: {
        title: '登录',
        hideInMenu: true
    },
    component: () => import('@/view/userlogin/userlogin/')
}
]

export default routers
