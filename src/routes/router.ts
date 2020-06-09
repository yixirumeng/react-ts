import { createElement } from 'react'
import { Redirect } from 'react-router-dom'
import { HomeOutlined, AppstoreOutlined, UserOutlined } from '@ant-design/icons'
import Page from '@/pages'
import lazyImport from '@/utils/lazyImport'

const router = [
    {
        path: '/',
        component: Page,
        routes: [
            {
                path: '/',
                exact: true,
                redirect: '/welcome',
                render: () => createElement(Redirect, { to: '/welcome' })
            },
            {
                path: '/welcome',
                name: '首页',
                icon: createElement(HomeOutlined),
                component: lazyImport(() => import('@/pages/welcome'))
            },
            {
                path: '/user',
                name: '用户中心',
                icon: createElement(UserOutlined),
                component: lazyImport(() => import('@/pages/userCenter'))
            },
            {
                path: '/info',
                name: '信息中心',
                icon: createElement(AppstoreOutlined),
                component: lazyImport(() => import('@/pages/welcome'))
            }
        ]
    }
]

export default router
