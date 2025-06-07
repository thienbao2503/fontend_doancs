"use client";
import { useEffect, useState } from "react";
import EmployeeHeader from "./_components/EmployeeHeader";
import EmployeeList from "./_components/EmployeeList";
import ModalNewUser from "./_components/ModalNewUser";
import { useTeamQuery } from "@/app/services/project-team/useQuery";

export default function Employees() {
  const [view, setView] = useState("grid");
  const [openModal, setOpenModal] = useState(false);
  // const contacts = [
  //   {
  //     id: 1,
  //     name: "Ruben Franci",
  //     email: "rubenfranci@gmail.com",
  //     imageSrc: "https://storage.googleapis.com/a1aa/image/1b25e06e-0903-4ff6-2285-9e94d271373e.jpg",
  //     imageAlt: "Man with beard and brown shirt, circular profile photo",
  //   },
  //   {
  //     id: 2,
  //     name: "Kaylynn Press",
  //     email: "kaylynnpress@gmail.com",
  //     imageSrc: "https://storage.googleapis.com/a1aa/image/8fb7b40c-7383-4d48-14d7-9bef24157654.jpg",
  //     imageAlt: "Woman with blonde hair and red shirt, circular profile photo",
  //   },
  //   {
  //     id: 3,
  //     name: "Corey Press",
  //     email: "coreypress@gmail.com",
  //     imageSrc: "https://storage.googleapis.com/a1aa/image/691d3830-9a7f-4311-f0f5-e45f0fdf8699.jpg",
  //     imageAlt: "Woman with brown hair and bangs, circular profile photo",
  //   },
  //   {
  //     id: 4,
  //     name: "Corey Press",
  //     email: "coreypress@gmail.com",
  //     imageSrc: "https://storage.googleapis.com/a1aa/image/691d3830-9a7f-4311-f0f5-e45f0fdf8699.jpg",
  //     imageAlt: "Woman with brown hair and bangs, circular profile photo",
  //   },
  //   {
  //     id: 5,
  //     name: "Corey Press",
  //     email: "coreypress@gmail.com",
  //     imageSrc: "https://storage.googleapis.com/a1aa/image/691d3830-9a7f-4311-f0f5-e45f0fdf8699.jpg",
  //     imageAlt: "Woman with brown hair and bangs, circular profile photo",
  //   },
  //   {
  //     id: 6,
  //     name: "Corey Press",
  //     email: "coreypress@gmail.com",
  //     imageSrc: "https://storage.googleapis.com/a1aa/image/691d3830-9a7f-4311-f0f5-e45f0fdf8699.jpg",
  //     imageAlt: "Woman with brown hair and bangs, circular profile photo",
  //   },
  //   // Thêm các nhân viên khác nếu muốn
  // ];
  const { data, refetch } = useTeamQuery.useGetAll({ page: 1 })

  return (
    <div className="flex flex-col space-y-4 h-full bg-[#f6f8fb]">
      <EmployeeHeader view={view} setView={setView} onNewContact={() => setOpenModal(true)} />
      <EmployeeList contacts={data} view={view} />
      <ModalNewUser open={openModal} onClose={() => setOpenModal(false)} onSuccess={() => refetch()} />
    </div>
  );
}