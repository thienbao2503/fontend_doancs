"use client"
import { useEffect, useState } from "react";
import { Card, HeaderSearch, ModalAction } from "./_componets";
import { AppDispatch, RootState } from "@/app/redux/store";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { getAllAction, selectProjects } from "@/app/services/projects/slice";
import { IParmas, IState } from "@/app/services/projects/type";
import { useSelector } from "react-redux";

function Projects() {
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector(selectProjects);
  const [view, setView] = useState("grid");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [params, setParams] = useState<IParmas>({
    page: 1,
    limit: 10,
  })

  useEffect(() => {
    getData(params)
  }, [params])


  const getData = async (params: IParmas) => {
    await dispatch(getAllAction(params))
  }

  const handleAdd = async (data: any) => {
    const res = await dispatch(getAllAction(data))
  }
  const handleUpdate = async (data: any) => {

  }

  return (
    <div className="flex flex-col space-y-4 h-full">
      <HeaderSearch title="Dự Án | Công Trình" handleChangeTypeLayout={(type) => setView(type)} view={view} handleOpenModalCreate={() => setIsModalOpen(true)} />
      <section
        aria-label="Projects list"
        className={`gap-6 ${view === "grid"
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          : "flex flex-col overflow-y-auto"
          }`}
      >
        {data.map((project, index) => (
          <Card
            key={index}
            project={project}
            view={view}
            handleViewDetails={() => { }}
            handleEditProject={() => { }}
            handleDeleteProject={() => { }}
          />
        ))}
      </section>
      <ModalAction handleAdd={handleAdd} handleUpdate={handleUpdate} initialValues={null} isModalOpen={isModalOpen} handleCancel={() => setIsModalOpen(false)} handleOk={() => { }} />
    </div>
  );
}

export default Projects;