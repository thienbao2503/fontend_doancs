"use client";

import { useState } from "react";
import { Modal, Form, Input, DatePicker, Button, Select, Popconfirm, message } from "antd";
import moment from "moment";

import { EditTaskModal, HeaderSearch, NewTaskModal, TaskItem, ViewTaskModal } from "./_components";
import { useProjectQuery } from "@/app/services/projects/useQuery";
import { useTaskQuery } from "@/app/services/tasks/useQuery";
import { useEffect } from "react";
import toast from "react-hot-toast";


// TaskList Component
const TaskList = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<number>(0);
  const { data: dataProject, isLoading: loadingProject } = useProjectQuery.useGetAll({ page: 1, limit: 10 });
  const { data: dataTask, refetch: refetchTask, isLoading: loadingTask } = useTaskQuery.useGetAll({ page: 1, limit: 10, project_id: selectedProjectId == 0 ? undefined : selectedProjectId });
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

  const [isNewProjectModalOpen, setIsNewProjectModalOpen] = useState(false);
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);
  const [isViewTaskModalOpen, setIsViewTaskModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState<any | null>(null);


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
    <div className="flex flex-col space-y-4 h-full">
      <section className="bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <HeaderSearch
          projects={dataProject}
          selectedProjectId={selectedProjectId}
          setSelectedProjectId={(id: number) => setSelectedProjectId(id)}
          setIsNewTaskModalOpen={setIsNewTaskModalOpen}
        />
        <hr className="border-[#E6E8F0] my-2" />

        {/* Task List */}
        <div className="flex flex-col gap-2">
          {Array.isArray(dataTask) && dataTask.map((item, index) => (
            <TaskItem
              key={index}
              task={item}
              onView={handleViewTask}
              onEdit={handleEditTask}
              onDelete={(id) => handleDeleteTask(id)}
            />
          ))}

        </div>
      </section>

      {/* Modals */}

      <NewTaskModal
        isOpen={isNewTaskModalOpen}
        onClose={() => setIsNewTaskModalOpen(false)}
        onSave={() => refetchTask()}
        projects={dataProject}
      />
      <ViewTaskModal
        isOpen={isViewTaskModalOpen}
        onClose={() => setIsViewTaskModalOpen(false)}
        task={currentTask}
      />
      {currentTask && (
        <EditTaskModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          task={currentTask}
          onSave={() => refetchTask()}
          projects={dataProject}
        />
      )}
    </div>

  );
};

export default TaskList;


