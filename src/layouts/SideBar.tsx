"use client"
import Sider from "antd/es/layout/Sider";
import React from 'react';
import { AppstoreOutlined, ScheduleOutlined, FormOutlined, SettingOutlined, UserOutlined, CalendarOutlined, TeamOutlined, DesktopOutlined, ProjectOutlined } from '@ant-design/icons';

import type { MenuProps, MenuTheme } from 'antd';
import { Menu } from 'antd';
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

type MenuItem = Required<MenuProps>['items'][number];

function SideBar() {
    const router = useRouter();
    const [collapsed, setCollapsed] = useState(false);
    const items: MenuItem[] = [
        {
            key: 'dashboard',
            label: 'Tổng quan',
            icon: <AppstoreOutlined />,
        },
        {
            key: '/du-an',
            label: 'Dự Án | Công Trình',
            icon: <ProjectOutlined />,
        },
        {
            key: '/cong-viec',
            label: 'Công việc',
            icon: <FormOutlined />,
        },
        {
            key: '/roles',
            label: 'Phân Quyền',
            icon: <ScheduleOutlined />,
        },
        {
            key: 'employee',
            label: 'Nhân sự',
            icon: <TeamOutlined />,
        },
        // {
        //     key: 'desk',
        //     label: 'Desk',
        //     icon: <DesktopOutlined />,
        // },
        // {
        //     key: 'calendar',
        //     label: 'Calendar',
        //     icon: <CalendarOutlined />,
        // },
        // {
        //     key: 'sub4',
        //     label: 'Navigation Three',
        //     icon: <SettingOutlined />,
        //     children: [
        //         { key: '9', label: 'Option 9' },
        //         { key: '10', label: 'Option 10' },
        //         { key: '11', label: 'Option 11' },
        //         { key: '12', label: 'Option 12' },
        //     ],
        // },
    ];
    return (

        <Sider
            width={220}
            collapsible
            collapsed={collapsed}
            onCollapse={setCollapsed}
            style={{
                background: "rgba(255,255,255,0.85)",
                minHeight: "100vh",
                transition: "width 0.3s cubic-bezier(0.4,0,0.2,1), background 0.2s, border-radius 0.3s",
                boxShadow: "2px 0 8px 0 rgba(0,0,0,0.08)",
                borderRight: "1px solid #ececec",
                borderRadius: "0 16px 16px 0",
                overflow: "hidden"
            }}
            trigger={null}
        >
            <div className={`flex items-center py-3 px-3 ${collapsed ? "justify-center" : "justify-between"}`} style={{ overflow: "hidden" }}>
                <h1
                    className={`font-bold text-[#4B2DBD] text-lg transition-all duration-500 ease-in-out
                ${collapsed ? "opacity-0 w-0 ml-0" : "opacity-100 w-auto ml-2"}
            `}
                    style={{
                        transition: "all 0.5s cubic-bezier(0.4,0,0.2,1)",
                        whiteSpace: "nowrap",
                        overflow: "hidden"
                    }}
                >
                    {!collapsed && "ELEVATE"}
                </h1>
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="text-[#4B2DBD] text-lg focus:outline-none rounded hover:bg-[#edeaff] p-1 transition-all duration-500 ease-in-out"
                >
                    {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </button>
            </div>
            <Menu
                className="flex-1"
                items={items}
                mode="inline"
                theme="light"
                style={{
                    background: "transparent",
                    borderRight: 0,
                    color: "#4B2DBD",
                    fontWeight: 500,
                    transition: "color 0.3s"
                }}
                onClick={({ key }) => {
                    router.push(key);
                }}
            />

            {/* <div className="flex w-full justify-center py-3 px-3 transition-all duration-300 ease-in-out">
                <h1 className={`w-full text-center transition-all duration-300 text-[#4B2DBD] ${collapsed ? "text-xs" : "text-base"}`}>Nút Cuối Sidebar</h1>
            </div> */}

        </Sider>

    );
}

export default SideBar;