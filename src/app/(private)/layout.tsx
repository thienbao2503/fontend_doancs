"use client"
import { HeaderCustom, SideBar } from '@/layouts';
import ProtectedRoute from '@/routing/ProtectedRoute';
import { ConfigProvider, Layout } from 'antd';

const { Content } = Layout;

interface IPops {
    children: React.ReactNode;
}

export default function RootLayout(props: IPops) {
    const { children } = props;
    const theme = {
        components: {
            Layout: {
                colorBgHeader: '#fff',
                colorBgBody: "#f7f9fc",
                colorBgContainer: '#fff',
                siderBg: '#fff',
                lightSiderBg: '#fff',
            },
            Menu: {
                colorBgContainer: '#fff',
                colorBgElevated: '#fff',
            },
        },
    }
    return (
        <ProtectedRoute>
            <ConfigProvider theme={theme}>
                <Layout className='h-screen'>
                    <SideBar />
                    <Layout>
                        <HeaderCustom />
                        <Content className='p-4'>
                            {children}
                        </Content>
                    </Layout>
                </Layout>
            </ConfigProvider>
        </ProtectedRoute>


    );
}
