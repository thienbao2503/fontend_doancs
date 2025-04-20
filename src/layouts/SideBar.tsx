import Sider from "antd/es/layout/Sider";
import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps, MenuTheme } from 'antd';
import { Menu, Switch } from 'antd';
import { useRouter } from "next/navigation";

type MenuItem = Required<MenuProps>['items'][number];


function SideBar() {
    const router = useRouter();
    const items: MenuItem[] = [
        {
            key: 'dashboard',
            label: 'Dashboard',
            icon: <MailOutlined />,
        },
        {
            key: 'project',
            label: 'Project',
            icon: <AppstoreOutlined />,
        },
        {
            key: 'task',
            label: 'Task',
            icon: <AppstoreOutlined />,
        },
        {
            key: 'employee',
            label: 'Employee',
            icon: <AppstoreOutlined />,
        },
        {
            key: 'sub4',
            label: 'Navigation Three',
            icon: <SettingOutlined />,
            children: [
                { key: '9', label: 'Option 9' },
                { key: '10', label: 'Option 10' },
                { key: '11', label: 'Option 11' },
                { key: '12', label: 'Option 12' },
            ],
        },
    ];
    return (
        <Sider width="200">
            <div className="flex justify-center py-2">
                <h1>Tên Nhóm</h1>
            </div>
            <Menu className="flex-1" items={items} onClick={({ key }) => {
                router.push(key);
            }} />
            <div className="flex justify-center py-2">
                <h1>Nút Cuối Sidebar</h1>
            </div>
        </Sider>
    );
}

export default SideBar;