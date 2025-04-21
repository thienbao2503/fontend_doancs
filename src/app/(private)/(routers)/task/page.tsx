"use client";
import { useState } from "react";
import { Modal, Form, Input, DatePicker, Button, Select } from "antd";
import {
  ClipboardIcon,
  ChatBubbleLeftRightIcon,
  CalendarIcon as CalendarIconHero,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

// Define Task type
interface Task {
  title: string;
  progress: string;
  comments: string;
  tag: string;
  tagBgColor: string;
  tagTextColor: string;
  buttonBgColor: string;
  buttonTextColor: string;
}

// NewTaskModal Component
const NewTaskModal = ({
  isOpen,
  onClose,
  onSave,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSave: (task: Task) => void;
}) => {
  const [form] = Form.useForm();

  if (!isOpen) return null;

  const handleSave = () => {
    form
      .validateFields()
      .then((values) => {
        const newTask: Task = {
          title: values.taskName || "Untitled Task",
          progress: "0/10",
          comments: "0",
          tag: values.category || "Design",
          tagBgColor: "bg-gradient-to-r from-[#B7C7FF] to-[#A3BFFA]",
          tagTextColor: "text-[#4F63F6]",
          buttonBgColor: "bg-[#B7C7FF]",
          buttonTextColor: "text-[#4F63F6]",
        };
        onSave(newTask);
        form.resetFields();
        onClose();
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      width={500}
      centered
      className="rounded-2xl"
    >
      <Form form={form} layout="vertical" className="p-6">
        <h2 className="text-[#0B0E3F] text-xl font-bold mb-6">Create New Task</h2>

        <Form.Item
          label={<span className="text-[#0B0E3F] text-sm font-semibold">Task Name</span>}
          name="taskName"
          rules={[{ required: true, message: "Please enter the task name" }]}
        >
          <Input
            placeholder="Enter task name"
            className="rounded-lg border-[#E6E8F0] text-sm text-[#5F6F94] focus:ring-[#4F63F6] bg-[#F9FAFF] p-3"
          />
        </Form.Item>

        <div className="flex space-x-4 mb-5">
          <Form.Item
            label={<span className="text-[#0B0E3F] text-sm font-semibold">Assigned to</span>}
            name="assignedTo"
            rules={[{ required: true, message: "Please select members" }]}
            className="flex-1"
          >
            <Select
              placeholder="Members"
              className="rounded-lg text-sm text-[#5F6F94] bg-[#F9FAFF]"
            >
              <Select.Option value="Team A">Team A</Select.Option>
              <Select.Option value="Team B">Team B</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label={<span className="text-[#0B0E3F] text-sm font-semibold">Due Date*</span>}
            name="dueDate"
            rules={[{ required: true, message: "Please select the due date" }]}
            className="flex-1"
          >
            <DatePicker
              placeholder="dd/mm/yyyy"
              format="DD/MM/YYYY"
              className="w-full rounded-lg border-[#E6E8F0] text-sm text-[#5F6F94] focus:ring-[#4F63F6] bg-[#F9FAFF] p-3"
              suffixIcon={<CalendarIconHero className="w-5 h-5 text-gray-400" />}
            />
          </Form.Item>

          <Form.Item
            label={<span className="text-[#0B0E3F] text-sm font-semibold">Category</span>}
            name="category"
            initialValue="Design"
            className="flex-1"
          >
            <Select className="rounded-lg text-sm text-[#5F6F94] bg-[#F9FAFF]">
              <Select.Option value="Design">Design</Select.Option>
              <Select.Option value="Development">Development</Select.Option>
              <Select.Option value="Testing">Testing</Select.Option>
            </Select>
          </Form.Item>
        </div>

        <Form.Item
          label={<span className="text-[#0B0E3F] text-sm font-semibold">Description</span>}
          name="description"
        >
          <Input.TextArea
            placeholder="Add a description..."
            rows={4}
            className="rounded-lg border-[#E6E8F0] text-sm text-[#5F6F94] focus:ring-[#4F63F6] bg-[#F9FAFF] p-3"
          />
        </Form.Item>

        <Form.Item
          label={<span className="text-[#0B0E3F] text-sm font-semibold">Checklist</span>}
          name="checklist"
        >
          <Input
            placeholder="Add checklist item"
            className="rounded-lg border-[#E6E8F0] text-sm text-[#5F6F94] focus:ring-[#4F63F6] bg-[#F9FAFF] p-3"
          />
        </Form.Item>

        <Form.Item
          label={<span className="text-[#0B0E3F] text-sm font-semibold">Attachments</span>}
          name="attachments"
        >
          <div className="flex items-center space-x-3">
            <Input
              placeholder="Upload media"
              className="flex-1 rounded-lg border-[#E6E8F0] text-sm text-[#5F6F94] bg-[#F9FAFF] p-3"
              disabled
            />
            <Button className="bg-gradient-to-r from-[#B7C7FF] to-[#A3BFFA] text-[#4F63F6] rounded-lg px-5 py-2 h-auto font-semibold">
              Browse
            </Button>
          </div>
        </Form.Item>

        <div className="flex justify-end space-x-3">
          <Button
            onClick={onClose}
            className="bg-[#E6E8F0] text-[#5F6F94] rounded-lg px-5 py-2 h-auto font-semibold"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            className="bg-gradient-to-r from-[#4F63F6] to-[#647AFA] text-white rounded-lg px-5 py-2 h-auto font-semibold"
          >
            Save Task
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

// EditTaskModal Component
const EditTaskModal = ({
  isOpen,
  onClose,
  task,
  onSave,
}: {
  isOpen: boolean;
  onClose: () => void;
  task: Task;
  onSave: (task: Task) => void;
}) => {
  const [form] = Form.useForm();
  const [checklist, setChecklist] = useState([
    { label: "Design mobile version", checked: false },
    { label: "Use images of unsplash.com", checked: false },
    { label: "Vector images of small size.", checked: false },
    { label: "Design mobile version", checked: false },
    { label: "Use images of unsplash.com", checked: false },
    { label: "Vector images of small size..", checked: false },
  ]);

  if (!isOpen) return null;

  const handleSave = () => {
    form
      .validateFields()
      .then((values) => {
        const updatedTask: Task = {
          ...task,
          title: values.taskName,
        };
        onSave(updatedTask);
        onClose();
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const toggleChecklistItem = (index: number) => {
    setChecklist((prev) =>
      prev.map((item, i) => (i === index ? { ...item, checked: !item.checked } : item))
    );
  };

  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      width={500}
      centered
      className="rounded-2xl"
    >
      <Form
        form={form}
        layout="vertical"
        className="p-6"
        initialValues={{ taskName: task.title }}
      >
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="w-4 h-4 text-[#4F63F6] border-[#E6E8F0] rounded focus:ring-[#4F63F6]"
            />
            <span className="text-[#5F6F94] text-sm font-semibold">Mark as done</span>
          </div>
          <span
            className={`${task.tagBgColor} ${task.tagTextColor} text-xs font-semibold rounded-lg px-4 py-1.5`}
          >
            {task.tag}
          </span>
        </div>

        <Form.Item
          name="taskName"
          rules={[{ required: true, message: "Please enter the task name" }]}
        >
          <Input
            className="rounded-lg border-[#E6E8F0] text-sm text-[#5F6F94] focus:ring-[#4F63F6] bg-[#F9FAFF] p-3"
          />
        </Form.Item>

        <div className="flex space-x-4 mb-5">
          <Form.Item
            label={<span className="text-[#0B0E3F] text-sm font-semibold">Members</span>}
            name="members"
            rules={[{ required: true, message: "Please select members" }]}
            className="flex-1"
          >
            <Select
              placeholder="Members"
              className="rounded-lg text-sm text-[#5F6F94] bg-[#F9FAFF]"
            >
              <Select.Option value="Team A">Team A</Select.Option>
              <Select.Option value="Team B">Team B</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label={<span className="text-[#0B0E3F] text-sm font-semibold">Due Dates*</span>}
            name="dueDate"
            rules={[{ required: true, message: "Please select the due date" }]}
            className="flex-1"
          >
            <DatePicker
              placeholder="dd/mm/yyyy"
              format="DD/MM/YYYY"
              className="w-full rounded-lg border-[#E6E8F0] text-sm text-[#5F6F94] focus:ring-[#4F63F6] bg-[#F9FAFF] p-3"
              suffixIcon={<CalendarIconHero className="w-5 h-5 text-gray-400" />}
            />
          </Form.Item>
        </div>

        <Form.Item
          label={<span className="text-[#0B0E3F] text-sm font-semibold">Description</span>}
          name="description"
          initialValue="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        >
          <Input.TextArea
            rows={4}
            className="rounded-lg border-[#E6E8F0] text-sm text-[#5F6F94] focus:ring-[#4F63F6] bg-[#F9FAFF] p-3"
          />
        </Form.Item>

        {/* Checklist */}
        <div className="mb-5">
          <label className="block text-[#0B0E3F] text-sm font-semibold mb-2">Checklist</label>
          <div className="grid grid-cols-2 gap-2">
            {checklist.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => toggleChecklistItem(index)}
                  className="w-4 h-4 text-[#4F63F6] border-[#E6E8F0] rounded focus:ring-[#4F63F6]"
                />
                <span className="text-[#5F6F94] text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <Form.Item
          label={<span className="text-[#0B0E3F] text-sm font-semibold">Attachments</span>}
          name="attachments"
        >
          <div className="flex items-center space-x-3">
            <Input
              placeholder="Upload media"
              className="flex-1 rounded-lg border-[#E6E8F0] text-sm text-[#5F6F94] bg-[#F9FAFF] p-3"
              disabled
            />
            <Button className="bg-gradient-to-r from-[#B7C7FF] to-[#A3BFFA] text-[#4F63F6] rounded-lg px-5 py-2 h-auto font-semibold">
              Browse
            </Button>
          </div>
        </Form.Item>

        <div className="flex justify-end space-x-3">
          <Button
            onClick={onClose}
            className="bg-[#E6E8F0] text-[#5F6F94] rounded-lg px-5 py-2 h-auto font-semibold"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            className="bg-gradient-to-r from-[#4F63F6] to-[#647AFA] text-white rounded-lg px-5 py-2 h-auto font-semibold"
          >
            Save Changes
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

// TaskItem Component
const TaskItem = ({ task, index, onEdit }: { task: Task; index: number; onEdit: (task: Task) => void }) => (
  <article className="flex items-center justify-between border border-[#E6E8F0] rounded-xl p-5 bg-[#F9FAFF] hover:shadow-md transition-all duration-300">
    <div className="flex items-start space-x-4">
      <input
        type="checkbox"
        name={`task-${index}`}
        className="mt-1 text-[#4F63F6] border-[#E6E8F0] rounded focus:ring-[#4F63F6] w-5 h-5"
      />
      <div>
        <h2 className="text-[#0B0E3F] text-base font-semibold leading-6 tracking-tight">
          {task.title}
        </h2>
        <div className="flex space-x-3 mt-3">
          <div className="flex items-center space-x-2 bg-white text-[#5F6F94] text-xs font-medium rounded-lg px-3 py-1.5 shadow-sm">
            <ClipboardIcon className="w-4 h-4" />
            <span>{task.progress}</span>
          </div>
          <div className="flex items-center space-x-2 bg-white text-[#5F6F94] text-xs font-medium rounded-lg px-3 py-1.5 shadow-sm">
            <ChatBubbleLeftRightIcon className="w-4 h-4" />
            <span>{task.comments}</span>
          </div>
        </div>
      </div>
    </div>
    <div className="flex items-center space-x-3">
      <span
        className={`${task.tagBgColor} ${task.tagTextColor} text-xs font-semibold rounded-lg px-4 py-1.5 shadow-sm`}
      >
        {task.tag}
      </span>
      <button
        onClick={() => onEdit(task)}
        className={`${task.buttonBgColor} ${task.buttonTextColor} rounded-lg p-2.5 hover:opacity-80 transition-opacity duration-200`}
        aria-label={`Edit task ${task.title}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
          />
        </svg>
      </button>
    </div>
  </article>
);

// TaskList Component
const TaskList = () => {
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState<Task | null>(null);
  const [tasks, setTasks] = useState<Task[]>([
    {
      title: "Design landing page of webkit",
      progress: "5/10",
      comments: "3",
      tag: "Design",
      tagBgColor: "bg-[#F9B5A7]",
      tagTextColor: "text-[#D95D39]",
      buttonBgColor: "bg-[#F9B5A7]",
      buttonTextColor: "text-[#D95D39]",
    },
    {
      title: "Create unique style of inner pages",
      progress: "5/10",
      comments: "3",
      tag: "Design",
      tagBgColor: "bg-[#B9D9D5]",
      tagTextColor: "text-[#3B8B84]",
      buttonBgColor: "bg-[#B9D9D5]",
      buttonTextColor: "text-[#3B8B84]",
    },
    {
      title: "Activate from WordPress Dashboard",
      progress: "5/10",
      comments: "3",
      tag: "Design",
      tagBgColor: "bg-[#B7C7FF]",
      tagTextColor: "text-[#4F63F6]",
      buttonBgColor: "bg-[#B7C7FF]",
      buttonTextColor: "text-[#4F63F6]",
    },
  ]);

  const handleSaveNewTask = (newTask: Task) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleEditTask = (task: Task) => {
    setCurrentTask(task);
    setIsEditModalOpen(true);
  };

  const handleSaveEditedTask = (updatedTask: Task) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.title === currentTask?.title ? updatedTask : task))
    );
  };

  return (
    <div className="min-h-screen bg-[#F9FAFF]">
      <main className="flex-1 p-6">
      <section className="bg-white rounded-2xl shadow-lg p-8 space-y-6 border border-[#E6E8F0] -ml-5 -mt-5">
          {/* Header */}
          <header className="flex items-center justify-between ">
            <h1 className="text-[#0B0E3F] text-xl font-bold tracking-tight ">Your Task</h1>
            <div className="flex items-center space-x-4">
              <button className="text-[#5F6F94] text-sm font-semibold bg-[#F3F4F9] rounded-lg px-4 py-2.5 flex items-center space-x-2 hover:bg-[#E6E8F0] transition-all duration-200">
                <span>Project</span>
                <span className="font-medium">: webkit Project</span>
                <ChevronDownIcon className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsNewModalOpen(true)}
                className="bg-gradient-to-r from-[#4F63F6] to-[#647AFA] text-white text-sm font-semibold rounded-lg px-5 py-2.5 hover:from-[#647AFA] hover:to-[#4F63F6] transition-all duration-200 shadow-md"
              >
                New Task
              </button>
            </div>
          </header>

          <hr className="border-[#E6E8F0]" />

          {/* Task List */}
          {tasks.length === 0 ? (
            <p className="text-[#5F6F94] text-center text-sm">
              No tasks available. Add a new task to get started!
            </p>
          ) : (
            tasks.map((task, index) => (
              <TaskItem key={index} task={task} index={index} onEdit={handleEditTask} />
            ))
          )}
        </section>

        {/* Modals */}
        <NewTaskModal
          isOpen={isNewModalOpen}
          onClose={() => setIsNewModalOpen(false)}
          onSave={handleSaveNewTask}
        />
        {currentTask && (
          <EditTaskModal
            isOpen={isEditModalOpen}
            onClose={() => setIsEditModalOpen(false)}
            task={currentTask}
            onSave={handleSaveEditedTask}
          />
        )}
      </main>
    </div>
  );
};

export default TaskList;