"use client";

import { useState } from "react";
import { Modal, Form, Input, DatePicker, Button, Select, Popconfirm, message } from "antd";
import moment from "moment";

import {
  ClipboardIcon,
  ChatBubbleLeftRightIcon,
  CalendarIcon as CalendarIconHero,
  ChevronDownIcon,
  EyeIcon,
  PencilIcon,
  XMarkIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { HeaderSearch } from "./_components";

// Define Project type
interface Project {
  id: string;
  name: string;
}

// Define Task type
interface Task {
  id: string;
  projectId: string;
  title: string;
  progress: string;
  comments: string;
  tag: string;
  tagBgColor: string;
  tagTextColor: string;
  buttonBgColor: string;
  buttonTextColor: string;
  assignedTo: string;
  dueDate: string;
  description: string;
  checklist: { label: string; checked: boolean }[];
  attachments: string[];
  completed?: boolean;
}

// Helper function to generate tag styles based on category
const getTagStyles = (category: string) => {
  switch (category) {
    case "Design":
      return {
        tagBgColor: "bg-gradient-to-r from-[#B7C7FF] to-[#A3BFFA]",
        tagTextColor: "text-[#4F63F6]",
        buttonBgColor: "bg-[#B7C7FF]",
        buttonTextColor: "text-[#4F63F6]",
      };
    case "Development":
      return {
        tagBgColor: "bg-[#B9D9D5]",
        tagTextColor: "text-[#3B8B84]",
        buttonBgColor: "bg-[#B9D9D5]",
        buttonTextColor: "text-[#3B8B84]",
      };
    case "Testing":
      return {
        tagBgColor: "bg-[#F9B5A7]",
        tagTextColor: "text-[#D95D39]",
        buttonBgColor: "bg-[#F9B5A7]",
        buttonTextColor: "text-[#D95D39]",
      };
    default:
      return {
        tagBgColor: "bg-[#B7C7FF]",
        tagTextColor: "text-[#4F63F6]",
        buttonBgColor: "bg-[#B7C7FF]",
        buttonTextColor: "text-[#4F63F6]",
      };
  }
};

// NewProjectModal Component
const NewProjectModal = ({
  isOpen,
  onClose,
  onSave,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSave: (project: Project) => void;
}) => {
  const [form] = Form.useForm();

  if (!isOpen) return null;

  const handleSave = () => {
    form
      .validateFields()
      .then((values) => {
        const newProject: Project = {
          id: Date.now().toString(),
          name: values.projectName || "Untitled Project",
        };
        onSave(newProject);
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
        <h2 className="text-[#0B0E3F] text-xl font-bold mb-6">Create New Project</h2>
        <Form.Item
          label={<span className="text-[#0B0E3F] text-sm font-semibold">Project Name</span>}
          name="projectName"
          rules={[{ required: true, message: "Please enter the project name" }]}
        >
          <Input
            placeholder="Enter project name"
            className="rounded-lg border-[#E6E8F0] text-sm text-[#5F6F94] focus:ring-[#4F63F6] bg-[#F9FAFF] p-3"
          />
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
            Save Project
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

// NewTaskModal Component
const NewTaskModal = ({
  isOpen,
  onClose,
  onSave,
  projects,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSave: (task: Task) => void;
  projects: Project[];
}) => {
  const [form] = Form.useForm();
  const [checklistItems, setChecklistItems] = useState<{ label: string; checked: boolean }[]>([]);
  const [newChecklistItem, setNewChecklistItem] = useState("");

  if (!isOpen) return null;

  const addChecklistItem = () => {
    if (newChecklistItem.trim() === "") {
      message.warning("Checklist item cannot be empty");
      return;
    }
    if (checklistItems.some((item) => item.label === newChecklistItem.trim())) {
      message.warning("Checklist item already exists");
      return;
    }
    setChecklistItems([...checklistItems, { label: newChecklistItem.trim(), checked: false }]);
    setNewChecklistItem("");
  };

  const removeChecklistItem = (index: number) => {
    const updatedItems = [...checklistItems];
    updatedItems.splice(index, 1);
    setChecklistItems(updatedItems);
  };

  const handleSave = () => {
    form
      .validateFields()
      .then((values) => {
        const category = values.category || "Design";
        const tagStyles = getTagStyles(category);

        const newTask: Task = {
          id: Date.now().toString(),
          projectId: values.projectId,
          title: values.taskName || "Untitled Task",
          progress: "0/10",
          comments: "0",
          tag: category,
          ...tagStyles,
          assignedTo: values.assignedTo,
          dueDate: values.dueDate ? values.dueDate.format("DD/MM/YYYY") : "",
          description: values.description || "",
          checklist: checklistItems,
          attachments: [],
          completed: false,
        };
        onSave(newTask);
        form.resetFields();
        setChecklistItems([]);
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
          label={<span className="text-[#0B0E3F] text-sm font-semibold">Project</span>}
          name="projectId"
          rules={[{ required: true, message: "Please select a project" }]}
        >
          <Select
            placeholder="Select project"
            className="rounded-lg text-sm text-[#5F6F94] bg-[#F9FAFF]"
          >
            {projects.map((project) => (
              <Select.Option key={project.id} value={project.id}>
                {project.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

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
              <Select.Option value="Team C">Team C</Select.Option>
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

        <div className="mb-5">
          <label className="block text-[#0B0E3F] text-sm font-semibold mb-2">Checklist</label>
          <div className="flex items-center space-x-2 mb-3">
            <Input
              placeholder="Add checklist item"
              value={newChecklistItem}
              onChange={(e) => setNewChecklistItem(e.target.value)}
              onPressEnter={addChecklistItem}
              className="flex-1 rounded-lg border-[#E6E8F0] text-sm text-[#5F6F94] focus:ring-[#4F63F6] bg-[#F9FAFF] p-3"
            />
            <Button
              onClick={addChecklistItem}
              className="bg-gradient-to-r from-[#B7C7FF] to-[#A3BFFA] text-[#4F63F6] rounded-lg px-3 py-2 h-auto font-semibold"
            >
              Add
            </Button>
          </div>
          {checklistItems.length > 0 && (
            <div className="grid grid-cols-1 gap-2 mt-2 max-h-32 overflow-y-auto">
              {checklistItems.map((item, index) => (
                <div key={index} className="flex items-center justify-between bg-[#F9FAFF] p-2 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() => {
                        const updatedItems = [...checklistItems];
                        updatedItems[index].checked = !updatedItems[index].checked;
                        setChecklistItems(updatedItems);
                      }}
                      className="w-4 h-4 text-[#4F63F6] border-[#E6E8F0] rounded focus:ring-[#4F63F6]"
                    />
                    <span className="text-[#5F6F94] text-sm">{item.label}</span>
                  </div>
                  <button
                    onClick={() => removeChecklistItem(index)}
                    className="text-[#5F6F94] hover:text-red-500"
                  >
                    <XMarkIcon className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
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
            Save Task
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

// ViewTaskModal Component
const ViewTaskModal = ({
  isOpen,
  onClose,
  task,
  projectName,
}: {
  isOpen: boolean;
  onClose: () => void;
  task: Task | null;
  projectName: string;
}) => {
  if (!isOpen || !task) return null;

  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      width={500}
      centered
      className="rounded-2xl"
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[#0B0E3F] text-xl font-bold">{task.title}</h2>
          <span
            className={`${task.tagBgColor} ${task.tagTextColor} text-xs font-semibold rounded-lg px-4 py-1.5`}
          >
            {task.tag}
          </span>
        </div>

        <div className="space-y-4 mb-6">
          <div>
            <label className="text-[#0B0E3F] text-sm font-semibold">Project</label>
            <p className="text-[#5F6F94] text-sm mt-1">{projectName}</p>
          </div>

          <div>
            <label className="text-[#0B0E3F] text-sm font-semibold">Assigned to</label>
            <p className="text-[#5F6F94] text-sm mt-1">{task.assignedTo}</p>
          </div>

          <div>
            <label className="text-[#0B0E3F] text-sm font-semibold">Due Date</label>
            <p className="text-[#5F6F94] text-sm mt-1">{task.dueDate}</p>
          </div>

          <div>
            <label className="text-[#0B0E3F] text-sm font-semibold">Progress</label>
            <p className="text-[#5F6F94] text-sm mt-1">{task.progress}</p>
          </div>

          <div>
            <label className="text-[#0B0E3F] text-sm font-semibold">Description</label>
            <p className="text-[#5F6F94] text-sm mt-1 bg-[#F9FAFF] p-3 rounded-lg border border-[#E6E8F0]">
              {task.description || "No description provided."}
            </p>
          </div>

          <div>
            <label className="text-[#0B0E3F] text-sm font-semibold">Checklist</label>
            <div className="mt-2">
              {task.checklist.length > 0 ? (
                <div className="bg-[#F9FAFF] p-3 rounded-lg border border-[#E6E8F0] max-h-40 overflow-y-auto">
                  {task.checklist.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2 py-1 border-b border-[#E6E8F0] last:border-0">
                      <input
                        type="checkbox"
                        checked={item.checked}
                        disabled
                        className="w-4 h-4 text-[#4F63F6] border-[#E6E8F0] rounded focus:ring-[#4F63F6]"
                      />
                      <span className={`text-sm ${item.checked ? "line-through text-gray-400" : "text-[#5F6F94]"}`}>
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-[#5F6F94] text-sm mt-1 bg-[#F9FAFF] p-3 rounded-lg border border-[#E6E8F0]">
                  No checklist items.
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="text-[#0B0E3F] text-sm font-semibold">Attachments</label>
            <p className="text-[#5F6F94] text-sm mt-1 bg-[#F9FAFF] p-3 rounded-lg border border-[#E6E8F0]">
              {task.attachments.length > 0 ? task.attachments.join(", ") : "No attachments."}
            </p>
          </div>
        </div>

        <div className="flex justify-end">
          <Button
            onClick={onClose}
            className="bg-[#E6E8F0] text-[#5F6F94] rounded-lg px-5 py-2 h-auto font-semibold"
          >
            Close
          </Button>
        </div>
      </div>
    </Modal>
  );
};

// EditTaskModal Component
const EditTaskModal = ({
  isOpen,
  onClose,
  task,
  onSave,
  projects,
}: {
  isOpen: boolean;
  onClose: () => void;
  task: Task;
  onSave: (task: Task) => void;
  projects: Project[];
}) => {
  const [form] = Form.useForm();
  const [checklist, setChecklist] = useState(task.checklist || []);
  const [newChecklistItem, setNewChecklistItem] = useState("");
  const [completed, setCompleted] = useState(task.completed || false);

  if (!isOpen) return null;

  const addChecklistItem = () => {
    if (newChecklistItem.trim() === "") {
      message.warning("Checklist item cannot be empty");
      return;
    }
    if (checklist.some((item) => item.label === newChecklistItem.trim())) {
      message.warning("Checklist item already exists");
      return;
    }
    setChecklist([...checklist, { label: newChecklistItem.trim(), checked: false }]);
    setNewChecklistItem("");
  };

  const removeChecklistItem = (index: number) => {
    const updatedChecklist = [...checklist];
    updatedChecklist.splice(index, 1);
    setChecklist(updatedChecklist);
  };

  const toggleChecklistItem = (index: number) => {
    const updatedChecklist = [...checklist];
    updatedChecklist[index].checked = !updatedChecklist[index].checked;
    setChecklist(updatedChecklist);
  };

  const handleSave = () => {
    form
      .validateFields()
      .then((values) => {
        const updatedTask: Task = {
          ...task,
          projectId: values.projectId,
          title: values.taskName,
          assignedTo: values.assignedTo,
          dueDate: values.dueDate ? values.dueDate.format("DD/MM/YYYY") : task.dueDate,
          description: values.description,
          checklist: checklist,
          completed: completed,
        };
        onSave(updatedTask);
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
      <Form
        form={form}
        layout="vertical"
        className="p-6"
        initialValues={{
          projectId: task.projectId,
          taskName: task.title,
          assignedTo: task.assignedTo,
          dueDate: task.dueDate ? moment(task.dueDate, "DD/MM/YYYY") : null, // Parse dueDate with moment
          description: task.description,
        }}
      >
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={completed}
              onChange={() => setCompleted(!completed)}
              className="w-4 h-4 text-[#4F63F6] border-[#E6E8F0] rounded focus:ring-[#4F63F6]"
            />
            <span className="text-[#5F6F94] text-sm font-semibold">Mark as completed</span>
          </div>
          <span
            className={`${task.tagBgColor} ${task.tagTextColor} text-xs font-semibold rounded-lg px-4 py-1.5`}
          >
            {task.tag}
          </span>
        </div>

        <Form.Item
          label={<span className="text-[#0B0E3F] text-sm font-semibold">Project</span>}
          name="projectId"
          rules={[{ required: true, message: "Please select a project" }]}
        >
          <Select
            placeholder="Select project"
            className="rounded-lg text-sm text-[#5F6F94] bg-[#F9FAFF]"
          >
            {projects.map((project) => (
              <Select.Option key={project.id} value={project.id}>
                {project.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label={<span className="text-[#0B0E3F] text-sm font-semibold">Task Name</span>}
          name="taskName"
          rules={[{ required: true, message: "Please enter the task name" }]}
        >
          <Input
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
              <Select.Option value="Team C">Team C</Select.Option>
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
        </div>

        <Form.Item
          label={<span className="text-[#0B0E3F] text-sm font-semibold">Description</span>}
          name="description"
        >
          <Input.TextArea
            rows={4}
            className="rounded-lg border-[#E6E8F0] text-sm text-[#5F6F94] focus:ring-[#4F63F6] bg-[#F9FAFF] p-3"
          />
        </Form.Item>

        <div className="mb-5">
          <label className="block text-[#0B0E3F] text-sm font-semibold mb-2">Checklist</label>
          <div className="flex items-center space-x-2 mb-3">
            <Input
              placeholder="Add checklist item"
              value={newChecklistItem}
              onChange={(e) => setNewChecklistItem(e.target.value)}
              onPressEnter={addChecklistItem}
              className="flex-1 rounded-lg border-[#E6E8F0] text-sm text-[#5F6F94] focus:ring-[#4F63F6] bg-[#F9FAFF] p-3"
            />
            <Button
              onClick={addChecklistItem}
              className="bg-gradient-to-r from-[#B7C7FF] to-[#A3BFFA] text-[#4F63F6] rounded-lg px-3 py-2 h-auto font-semibold"
            >
              Add
            </Button>
          </div>
          {checklist.length > 0 && (
            <div className="grid grid-cols-1 gap-2 mt-2 max-h-32 overflow-y-auto">
              {checklist.map((item, index) => (
                <div key={index} className="flex items-center justify-between bg-[#F9FAFF] p-2 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() => toggleChecklistItem(index)}
                      className="w-4 h-4 text-[#4F63F6] border-[#E6E8F0] rounded focus:ring-[#4F63F6]"
                    />
                    <span className={`text-sm ${item.checked ? "line-through text-gray-400" : "text-[#5F6F94]"}`}>
                      {item.label}
                    </span>
                  </div>
                  <button
                    onClick={() => removeChecklistItem(index)}
                    className="text-[#5F6F94] hover:text-red-500"
                  >
                    <XMarkIcon className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
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
const TaskItem = ({
  task,
  projectName,
  onView,
  onEdit,
  onDelete,
}: {
  task: Task;
  projectName: string;
  onView: (task: Task) => void;
  onEdit: (task: Task) => void;
  onDelete: (taskId: string) => void;
}) => (
  <article className="flex items-center justify-between border border-[#E6E8F0] rounded-xl p-5 bg-[#F9FAFF] hover:shadow-md transition-all duration-300">
    <div className="flex items-start space-x-4">
      <input
        type="checkbox"
        checked={task.completed || false}
        disabled
        className="mt-1 text-[#4F63F6] border-[#E6E8F0] rounded focus:ring-[#4F63F6] w-5 h-5"
      />
      <div>
        <h2
          className={`text-[#0B0E3F] text-base font-semibold leading-6 tracking-tight ${task.completed ? "line-through text-gray-400" : ""
            }`}
        >
          {task.title}
        </h2>
        <p className="text-[#5F6F94] text-xs mt-1">Project: {projectName}</p>
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
        onClick={() => onView(task)}
        className="bg-[#B7C7FF] text-[#4F63F6] rounded-lg p-2.5 hover:opacity-80 transition-opacity duration-200"
        aria-label={`View task ${task.title}`}
      >
        <EyeIcon className="w-5 h-5" />
      </button>
      <button
        onClick={() => onEdit(task)}
        className={`${task.buttonBgColor} ${task.buttonTextColor} rounded-lg p-2.5 hover:opacity-80 transition-opacity duration-200`}
        aria-label={`Edit task ${task.title}`}
      >
        <PencilIcon className="w-5 h-5" />
      </button>
      <Popconfirm
        title="Are you sure you want to delete this task?"
        onConfirm={() => onDelete(task.id)}
        okText="Yes"
        cancelText="No"
      >
        <button
          className="bg-red-100 text-red-600 rounded-lg p-2.5 hover:opacity-80 transition-opacity duration-200"
          aria-label={`Delete task ${task.title}`}
        >
          <TrashIcon className="w-5 h-5" />
        </button>
      </Popconfirm>
    </div>
  </article>
);

// TaskList Component
const TaskList = () => {
  const [isNewProjectModalOpen, setIsNewProjectModalOpen] = useState(false);
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);
  const [isViewTaskModalOpen, setIsViewTaskModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState<Task | null>(null);
  const [selectedProjectId, setSelectedProjectId] = useState<string>("1");
  const [projects, setProjects] = useState<Project[]>([
    { id: "1", name: "webkit Project" },
    { id: "2", name: "Mobile App" },
  ]);
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      projectId: "1",
      title: "Design landing page of webkit",
      progress: "5/10",
      comments: "3",
      tag: "Design",
      tagBgColor: "bg-[#F9B5A7]",
      tagTextColor: "text-[#D95D39]",
      buttonBgColor: "bg-[#F9B5A7]",
      buttonTextColor: "text-[#D95D39]",
      assignedTo: "Team A",
      dueDate: "21/04/2025",
      description: "Create a modern landing page design for the webkit project.",
      checklist: [
        { label: "Design mobile version", checked: false },
        { label: "Use images of unsplash.com", checked: false },
      ],
      attachments: [],
      completed: false,
    },
    {
      id: "2",
      projectId: "1",
      title: "Create unique style of inner pages",
      progress: "5/10",
      comments: "3",
      tag: "Design",
      tagBgColor: "bg-[#B9D9D5]",
      tagTextColor: "text-[#3B8B84]",
      buttonBgColor: "bg-[#B9D9D5]",
      buttonTextColor: "text-[#3B8B84]",
      assignedTo: "Team B",
      dueDate: "22/04/2025",
      description: "Design unique styles for inner pages of the webkit project.",
      checklist: [{ label: "Vector images of small size", checked: false }],
      attachments: [],
      completed: false,
    },
    {
      id: "3",
      projectId: "2",
      title: "Activate from WordPress Dashboard",
      progress: "5/10",
      comments: "3",
      tag: "Development",
      tagBgColor: "bg-[#B7C7FF]",
      tagTextColor: "text-[#4F63F6]",
      buttonBgColor: "bg-[#B7C7FF]",
      buttonTextColor: "text-[#4F63F6]",
      assignedTo: "Team A",
      dueDate: "23/04/2025",
      description: "Implement activation feature in the WordPress dashboard.",
      checklist: [],
      attachments: [],
      completed: false,
    },
  ]);

  const handleSaveNewProject = (newProject: Project) => {
    setProjects((prevProjects) => [...prevProjects, newProject]);
    setSelectedProjectId(newProject.id);
    message.success("Project created successfully!");
  };

  const handleSaveNewTask = (newTask: Task) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
    message.success("Task created successfully!");
  };

  const handleViewTask = (task: Task) => {
    setCurrentTask(task);
    setIsViewTaskModalOpen(true);
  };

  const handleEditTask = (task: Task) => {
    setCurrentTask(task);
    setIsEditModalOpen(true);
  };

  const handleSaveEditedTask = (updatedTask: Task) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    message.success("Task updated successfully!");
  };

  const handleDeleteTask = (taskId: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    message.success("Task deleted successfully!");
  };

  const filteredTasks = tasks.filter((task) => task.projectId === selectedProjectId);
  const selectedProject = projects.find((project) => project.id === selectedProjectId);

  return (
    <div className="flex flex-col space-y-4 h-full">
      <section className="bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <HeaderSearch
          projects={projects}
          selectedProjectId={selectedProjectId}
          setSelectedProjectId={(id) => setSelectedProjectId(id.toLocaleString())}
          setIsNewProjectModalOpen={setIsNewProjectModalOpen}
          setIsNewTaskModalOpen={setIsNewTaskModalOpen}
        />
        <hr className="border-[#E6E8F0]" />

        {/* Task List */}
        <div className="flex flex-col gap-2">
          {filteredTasks.length === 0 ? (
            <p className="text-[#5F6F94] text-center text-sm">
              No tasks available for this project. Add a new task to get started!
            </p>
          ) : (
            filteredTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                projectName={selectedProject?.name || "Unknown Project"}
                onView={handleViewTask}
                onEdit={handleEditTask}
                onDelete={handleDeleteTask}
              />
            ))
          )}
        </div>
      </section>

      {/* Modals */}
      <NewProjectModal
        isOpen={isNewProjectModalOpen}
        onClose={() => setIsNewProjectModalOpen(false)}
        onSave={handleSaveNewProject}
      />
      <NewTaskModal
        isOpen={isNewTaskModalOpen}
        onClose={() => setIsNewTaskModalOpen(false)}
        onSave={handleSaveNewTask}
        projects={projects}
      />
      <ViewTaskModal
        isOpen={isViewTaskModalOpen}
        onClose={() => setIsViewTaskModalOpen(false)}
        task={currentTask}
        projectName={selectedProject?.name || "Unknown Project"}
      />
      {currentTask && (
        <EditTaskModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          task={currentTask}
          onSave={handleSaveEditedTask}
          projects={projects}
        />
      )}
    </div>

  );
};

export default TaskList;