import React from 'react'
import { Layout } from 'antd'
import PageHeader from '@/pages/common/header'
import PageMenu from '@/pages/common/menuSide'
import PageFooter from '@/pages/common/footer'

const { Header, Footer, Sider, Content } = Layout

function Page() {
    return (
        <Layout>
            <Sider>
                <PageMenu />
            </Sider>
            <Layout>
                <Header>
                    <PageHeader />
                </Header>
                <Content>Content</Content>
                <Footer>
                    <PageFooter />
                </Footer>
            </Layout>
        </Layout>
    )
}

export default Page
