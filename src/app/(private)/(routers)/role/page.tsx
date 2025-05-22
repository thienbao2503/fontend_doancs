"use client"
import { useRoleQuery } from "@/app/services/role/useQuery";
import React from "react";

const RolePage = () => {

    const {data : dataRole} = useRoleQuery.useGetAll({page : 1, limit : 10})

    
  // Dữ liệu mẫu
  const roles = [
    { id: 1, name: "Admin", description: "Quản trị hệ thống" },
    { id: 2, name: "Editor", description: "Chỉnh sửa nội dung" },
    { id: 3, name: "Viewer", description: "Xem nội dung" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Danh sách vai trò</h1>
      <div>
        <button>thêm</button>
        <button>xửa</button>
        <button>xóa</button>
      </div>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>ID</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Tên vai trò</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Mô tả</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(dataRole) && dataRole?.map((item,index) => (
            <tr key={index}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item?.id}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item?.name}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item?.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>


          
  );
};

export default RolePage;