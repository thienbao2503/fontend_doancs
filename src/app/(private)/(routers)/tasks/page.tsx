"use client";

import { useState } from "react";
import { Modal, Form, Input, DatePicker, Button, Select, Popconfirm, message, Pagination } from "antd";
import moment from "moment";

import { EditTaskModal, HeaderSearch, ModalAssign, ModalProgress, ModalUpload, NewTaskModal, TaskItem, ViewTaskModal } from "./_components";
import { useProjectQuery } from "@/app/services/projects/useQuery";
import { useTaskQuery } from "@/app/services/tasks/useQuery";
import { useEffect } from "react";
import toast from "react-hot-toast";


// TaskList Component
const TaskList = () => {
  const [page, setPage] = useState(1);

  const [selectedProjectId, setSelectedProjectId] = useState<number>(0);
  const { data: dataProject, isLoading: loadingProject } = useProjectQuery.useGetAll({ page: 1, limit: 10 });
  const { data: dataTask, refetch: refetchTask, isLoading: loadingTask } = useTaskQuery.useGetAll({ page: page, limit: 10, project_id: selectedProjectId == 0 ? undefined : selectedProjectId });
  const { mutate: deleteTask } = useTaskQuery.useDelete(
    (data) => {
      toast.success(data.message);
      refetchTask();
    },
    (error) => {
      toast.error(error.message);
    },
  );


  useEffect(() => {
    if (loadingProject || loadingTask) {
      toast.loading("Đang tải dữ liệu...", { id: "global-loading" });
    } else {
      toast.dismiss("global-loading");
    }
  }, [loadingProject, loadingTask]);

  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);
  const [isViewTaskModalOpen, setIsViewTaskModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalProsessOpen, setIsModalProgressOpen] = useState(false);
  const [isModalUploadImagesOpen, setIsModalUploadImagesOpen] = useState(false);


  const handleViewTask = (task: any) => {
    setCurrentTask(task);
    setIsViewTaskModalOpen(true);
  };

  const handleEditTask = (task: any) => {
    setCurrentTask(task);
    setIsEditModalOpen(true);
  };

  const handleDeleteTask = (taskId: any) => {
    deleteTask(taskId);
  };

  return (
    <div className="flex flex-col space-y-4 h-full ">
      <section className="bg-white rounded-2xl shadow-lg p-8 h-full">
        {/* Header */}
        <HeaderSearch
          projects={dataProject}
          selectedProjectId={selectedProjectId}
          setSelectedProjectId={(id: number) => setSelectedProjectId(id)}
          setIsNewTaskModalOpen={setIsNewTaskModalOpen}
        />
        <hr className="border-[#E6E8F0] my-2" />

        {/* Task List */}
        <div className="flex flex-col gap-2 h-[90%] overflow-y-auto mb-2">
          {Array.isArray(dataTask?.data) && dataTask.data.map((item, index) => (
            <TaskItem
              key={index}
              task={item}
              onView={handleViewTask}
              onEdit={handleEditTask}
              onDelete={(id) => handleDeleteTask(id)}
              onAssignTask={(task) => {
                setCurrentTask(task);
                setIsModalOpen(true);
              }}
              updateProgress={(task) => {
                setCurrentTask(task);
                setIsModalProgressOpen(true);
              }
              }
              addImages={(task) => {
                setCurrentTask(task);
                setIsModalUploadImagesOpen(true);
              }}
            />
          ))}
        </div>
        <Pagination
          className="mt-5 pt-5 flex justify-center"
          current={page}
          total={dataTask?.pagination?.totalPages || 0}
          pageSize={1}
          onChange={(page) => {
            setPage(page);
          }}
        />
      </section>


      {/* Modals */}

      <NewTaskModal
        isOpen={isNewTaskModalOpen}
        onClose={() => {
          setIsNewTaskModalOpen(false)
          refetchTask();
          setCurrentTask(null);
        }}
        onSave={() => refetchTask()}
        projects={dataProject}
      />
      <ViewTaskModal
        isOpen={isViewTaskModalOpen}
        onClose={() => {
          setIsViewTaskModalOpen(false)
          setCurrentTask(null);
        }}
        task={currentTask}
      />
      <EditTaskModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false)
          setCurrentTask(null);
        }}
        task={currentTask}
        onSave={() => refetchTask()}
        projects={dataProject}
      />
      <ModalAssign
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setCurrentTask(null);
        }}
        task={currentTask}
        onSave={() => refetchTask()}
        projects={dataProject}
      />
      <ModalProgress
        isOpen={isModalProsessOpen}
        onClose={() => {
          setIsModalProgressOpen(false)
          setCurrentTask(null);
        }}
        task={currentTask}
        onSave={() => refetchTask()}
        projects={dataProject}
      />
      <ModalUpload
        isOpen={isModalUploadImagesOpen}
        onClose={() => {
          setIsModalUploadImagesOpen(false)
          setCurrentTask(null);
        }}
        task={currentTask}
        onSave={() => {
          refetchTask()
          setCurrentTask(null);
        }}
      />
    </div>

  );
};

export default TaskList;


