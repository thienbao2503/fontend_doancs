"use client"
import { HeaderCustom, SideBar } from '@/layouts';
import PrivateRoutes from '@/routing/PrivateRoute';
import { ConfigProvider, Layout } from 'antd';
import { Provider } from 'react-redux';

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
        <Provider store={store}>
 <PrivateRoutes>
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
        </PrivateRoutes>
        </Provider>
       
    );
}
