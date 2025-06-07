"use client"
import { useEffect, useState } from "react";
import { Card, HeaderSearch, ModalAction, ModalView } from "./_componets";
import { IParmas } from "@/app/services/projects/type";
import { useProjectQuery } from "@/app/services/projects/useQuery";
import toast from "react-hot-toast";

function Projects() {
  const [view, setView] = useState("grid");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalViewOpen, setIsModalViewOpen] = useState(false);
  const [dataUpdate, setDataUpdate] = useState<any>(null);
  const [params, setParams] = useState<IParmas>({
    page: 1,
  });
  const { data, isLoading, refetch } = useProjectQuery.useGetAll(params)
  const { mutate: addProjectMutate, isPending } = useProjectQuery.useCreate(
    (data) => {
      toast.success(data.message)
      setIsModalOpen(false)
      refetch()
    },
    (error) => {
      toast.error(error?.errors?.[0]?.message || error?.message)
    }
  )
  const { mutate: getByIDMutate } = useProjectQuery.useGetByID(
    (data) => {
      setDataUpdate(data)
    },
    (error) => {
      toast.error(error?.errors?.[0]?.message || error?.message)
    }
  )
  const { mutate: updateProjectMutate } = useProjectQuery.useUpdate(
    (data) => {
      toast.success(data.message)
      setIsModalOpen(false)
      refetch()
    },
    (error) => {
      toast.error(error?.errors?.[0]?.message || error?.message)
    }
  )
  const { mutate: deleteProjectMutate } = useProjectQuery.useDelete(
    (data) => {
      toast.success(data.message)
      refetch()
    },
    (error) => {
      toast.error(error?.errors?.[0]?.message || error?.message)
    }
  )
  const { mutate: deleteTeamProjectMutate } = useProjectQuery.useDeleteTeam(
    (data) => {
      toast.success(data.message)
      refetch()
      if (dataUpdate && dataUpdate?.id) getByIDMutate(dataUpdate?.id)
    },
    (error) => {
      toast.error(error?.errors?.[0]?.message || error?.message)
    }
  )

  useEffect(() => {
    if (isLoading || isPending) toast.loading("Đang tải dữ liệu...", { id: "loading" })
    else toast.dismiss("loading")
  }, [isLoading])

  const handleAdd = async (data: any) => {
    addProjectMutate(data)
  }
  const handleUpdate = async (data: any) => {
    updateProjectMutate(data)
  }

  return (
    <div className="flex flex-col space-y-4 h-full">
      <HeaderSearch title="Dự Án | Công Trình" handleChangeTypeLayout={(type) => setView(type)} view={view} handleOpenModalCreate={() => {
        setDataUpdate(null)
        setIsModalOpen(true)
      }} />
      <section
        aria-label="Projects list"
        className={`gap-6 ${view === "grid"
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          : "flex flex-col overflow-y-auto"
          }`}
      >
        {Array.isArray(data) && data?.map((project, index) => (
          <Card
            key={index}
            project={project}
            view={view}
            handleViewDetails={(data) => {
              getByIDMutate(data.id)
              setIsModalViewOpen(true)
            }}
            handleEditProject={(data) => {
              getByIDMutate(data.id)
              setIsModalOpen(true)
            }}
            handleDeleteProject={(id) => deleteProjectMutate(id)}
          />
        ))}
      </section>
      {(!isLoading && data?.length <= 0) && <span className="text-center w-full">Không có dữ liệu</span>}
      <ModalAction
        handleAdd={handleAdd}
        handleUpdate={handleUpdate}
        initialValues={dataUpdate}
        isModalOpen={isModalOpen}
        handleCancel={() => {
          setIsModalOpen(false)
          setDataUpdate(null)
        }} />
      <ModalView
        onAddTeamSuccess={() => {
          refetch()
          if (dataUpdate && dataUpdate?.id) getByIDMutate(dataUpdate?.id)
        }}
        isModalOpen={isModalViewOpen}
        handleDeleteTeam={(data) => deleteTeamProjectMutate(data)}
        handleCancel={() => setIsModalViewOpen(false)}
        initialValues={dataUpdate}
      // handleAddTeam={(data) => addTeamProjectMutate(data)}
      />
    </div>
  );
}

export default Projects;