import React, { Suspense } from 'react'
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config'
import { useSelector } from 'react-redux'
import { Layout } from 'antd'
import useMinHeight from '@/hooks/useMinHeight'
import { IRootStore } from '@/store/types'
import PageHeader from '@/pages/common/header'
import PageMenu from '@/pages/common/menuSide'
import PageFooter from '@/pages/common/footer'
import PageLoading from '@/components/pageLoading'
import './index.scss'

const { Header, Footer, Sider, Content } = Layout

function Page({ route }: RouteConfigComponentProps) {
    const { collapsed } = useSelector(({ commonReducer }: IRootStore) => ({ ...commonReducer }))

    const minHeight = useMinHeight(182)

    return (
        <Layout className="main-page">
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <PageMenu menuData={route?.routes} />
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    <PageHeader />
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight
                    }}
                >
                    <Suspense fallback={<PageLoading />}>{renderRoutes(route?.routes)}</Suspense>
                </Content>
                <Footer>
                    <PageFooter />
                </Footer>
            </Layout>
        </Layout>
    )
}

export default Page
