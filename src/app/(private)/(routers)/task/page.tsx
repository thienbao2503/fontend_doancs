"use client";
import { useState } from "react";

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

// Modal Component for New Task
const NewTaskModal = ({ isOpen, onClose, onSave }: { isOpen: boolean; onClose: () => void; onSave: (task: Task) => void }) => {
  const [taskName, setTaskName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("Design");

  if (!isOpen) return null;

  const handleSave = () => {
    const newTask: Task = {
      title: taskName || "Untitled Task",
      progress: "0/10",
      comments: "0",
      tag: category,
      tagBgColor: "bg-gradient-to-r from-[#B7C7FF] to-[#A3BFFA]",
      tagTextColor: "text-[#4F63F6]",
      buttonBgColor: "bg-[#B7C7FF]",
      buttonTextColor: "text-[#4F63F6]",
    };
    onSave(newTask);
    setTaskName("");
    setDueDate("");
    setCategory("Design");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-md flex items-center justify-center z-50 transition-opacity duration-300">
      <div className="bg-white rounded-2xl p-8 w-full max-w-lg shadow-2xl transform transition-all duration-300 scale-100 hover:scale-105 border border-gray-100">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[#0B0E3F] text-xl font-bold tracking-tight">Create New Task</h2>
          <button onClick={onClose} className="text-[#5F6F94] hover:text-[#4F63F6] transition-colors duration-200">
            <i className="fas fa-times text-lg"></i>
          </button>
        </div>

        {/* Task Name */}
        <div className="mb-5">
          <label className="block text-[#0B0E3F] text-sm font-semibold mb-2">Task Name</label>
          <input
            type="text"
            placeholder="Enter task name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="w-full p-3 border border-[#E6E8F0] rounded-lg text-sm text-[#5F6F94] focus:outline-none focus:ring-2 focus:ring-[#4F63F6] transition-all duration-200 bg-[#F9FAFF]"
          />
        </div>

        {/* Assigned To, Due Dates, Category */}
        <div className="flex space-x-4 mb-5">
          <div className="flex-1">
            <label className="block text-[#0B0E3F] text-sm font-semibold mb-2">Assigned to</label>
            <select className="w-full p-3 border border-[#E6E8F0] rounded-lg text-sm text-[#5F6F94] focus:outline-none focus:ring-2 focus:ring-[#4F63F6] transition-all duration-200 bg-[#F9FAFF]">
              <option>Members</option>
              <option>Team A</option>
              <option>Team B</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-[#0B0E3F] text-sm font-semibold mb-2">Due Date*</label>
            <div className="relative">
              <input
                type="text"
                placeholder="dd/mm/yyyy"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full p-3 border border-[#E6E8F0] rounded-lg text-sm text-[#5F6F94] focus:outline-none focus:ring-2 focus:ring-[#4F63F6] transition-all duration-200 bg-[#F9FAFF]"
              />
              <i className="fas fa-calendar-alt absolute right-4 top-4 text-[#5F6F94]"></i>
            </div>
          </div>
          <div className="flex-1">
            <label className="block text-[#0B0E3F] text-sm font-semibold mb-2">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-3 border border-[#E6E8F0] rounded-lg text-sm text-[#5F6F94] focus:outline-none focus:ring-2 focus:ring-[#4F63F6] transition-all duration-200 bg-[#F9FAFF]"
            >
              <option>Design</option>
              <option>Development</option>
              <option>Testing</option>
            </select>
          </div>
        </div>

        {/* Description */}
        <div className="mb-5">
          <label className="block text-[#0B0E3F] text-sm font-semibold mb-2">Description</label>
          <textarea
            placeholder="Add a description..."
            className="w-full p-3 border border-[#E6E8F0] rounded-lg text-sm text-[#5F6F94] focus:outline-none focus:ring-2 focus:ring-[#4F63F6] transition-all duration-200 bg-[#F9FAFF] h-28 resize-none"
          ></textarea>
        </div>

        {/* Checklist */}
        <div className="mb-5">
          <label className="block text-[#0B0E3F] text-sm font-semibold mb-2">Checklist</label>
          <input
            type="text"
            placeholder="Add checklist item"
            className="w-full p-3 border border-[#E6E8F0] rounded-lg text-sm text-[#5F6F94] focus:outline-none focus:ring-2 focus:ring-[#4F63F6] transition-all duration-200 bg-[#F9FAFF]"
          />
        </div>

        {/* Attachments */}
        <div className="mb-6">
          <label className="block text-[#0B0E3F] text-sm font-semibold mb-2">Attachments</label>
          <div className="flex items-center space-x-3">
            <input
              type="text"
              placeholder="Upload media"
              className="flex-1 p-3 border border-[#E6E8F0] rounded-lg text-sm text-[#5F6F94] bg-[#F9FAFF] disabled:opacity-50"
              disabled
            />
            <button className="bg-gradient-to-r from-[#B7C7FF] to-[#A3BFFA] text-[#4F63F6] text-sm font-semibold rounded-lg px-5 py-3 hover:from-[#A3BFFA] hover:to-[#B7C7FF] transition-all duration-200">
              Browse
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="bg-[#E6E8F0] text-[#5F6F94] text-sm font-semibold rounded-lg px-5 py-3 hover:bg-[#D1D5DB] transition-all duration-200"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-gradient-to-r from-[#4F63F6] to-[#647AFA] text-white text-sm font-semibold rounded-lg px-5 py-3 hover:from-[#647AFA] hover:to-[#4F63F6] transition-all duration-200"
          >
            Save Task
          </button>
        </div>
      </div>
    </div>
  );
};

// Modal Component for Editing Task
const EditTaskModal = ({ isOpen, onClose, task, onSave }: { isOpen: boolean; onClose: () => void; task: Task; onSave: (task: Task) => void }) => {
  const [taskName, setTaskName] = useState(task.title);
  const [dueDate, setDueDate] = useState("");
  const [description, setDescription] = useState("Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.");
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
    const updatedTask: Task = {
      ...task,
      title: taskName,
    };
    onSave(updatedTask);
    onClose();
  };

  const toggleChecklistItem = (index: number) => {
    setChecklist((prev) =>
      prev.map((item, i) => (i === index ? { ...item, checked: !item.checked } : item))
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-md flex items-center justify-center z-50 transition-opacity duration-300">
      <div className="bg-white rounded-2xl p-8 w-full max-w-lg shadow-2xl transform transition-all duration-300 scale-100 hover:scale-105 border border-gray-100">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-6">
          <button className="flex items-center space-x-2 text-[#5F6F94] text-sm font-semibold hover:text-[#4F63F6] transition-colors duration-200">
            <input type="checkbox" className="w-4 h-4 text-[#4F63F6] border-[#E6E8F0] rounded focus:ring-[#4F63F6]" />
            <span>Mark as done</span>
          </button>
          <span className="bg-gradient-to-r from-[#F9B5A7] to-[#FECACA] text-[#D95D39] text-xs font-semibold rounded-lg px-4 py-1.5 shadow-sm">
            {task.tag}
          </span>
        </div>

        {/* Task Name */}
        <div className="mb-5">
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="w-full p-3 border border-[#E6E8F0] rounded-lg text-sm text-[#5F6F94] focus:outline-none focus:ring-2 focus:ring-[#4F63F6] transition-all duration-200 bg-[#F9FAFF]"
          />
        </div>

        {/* Assigned To, Due Dates */}
        <div className="flex space-x-4 mb-5">
          <div className="flex-1">
            <label className="block text-[#0B0E3F] text-sm font-semibold mb-2">Members</label>
            <select className="w-full p-3 border border-[#E6E8F0] rounded-lg text-sm text-[#5F6F94] focus:outline-none focus:ring-2 focus:ring-[#4F63F6] transition-all duration-200 bg-[#F9FAFF]">
              <option>Members</option>
              <option>Team A</option>
              <option>Team B</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-[#0B0E3F] text-sm font-semibold mb-2">Due Dates*</label>
            <div className="relative">
              <input
                type="text"
                placeholder="dd/mm/yyyy"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full p-3 border border-[#E6E8F0] rounded-lg text-sm text-[#5F6F94] focus:outline-none focus:ring-2 focus:ring-[#4F63F6] transition-all duration-200 bg-[#F9FAFF]"
              />
              <i className="fas fa-calendar-alt absolute right-4 top-4 text-[#5F6F94]"></i>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-5">
          <label className="block text-[#0B0E3F] text-sm font-semibold mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 border border-[#E6E8F0] rounded-lg text-sm text-[#5F6F94] focus:outline-none focus:ring-2 focus:ring-[#4F63F6] transition-all duration-200 bg-[#F9FAFF] h-28 resize-none"
          ></textarea>
        </div>

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

        {/* Attachments */}
        <div className="mb-6">
          <label className="block text-[#0B0E3F] text-sm font-semibold mb-2">Attachments</label>
          <div className="flex items-center space-x-3">
            <input
              type="text"
              placeholder="Upload media"
              className="flex-1 p-3 border border-[#E6E8F0] rounded-lg text-sm text-[#5F6F94] bg-[#F9FAFF] disabled:opacity-50"
              disabled
            />
            <button className="bg-gradient-to-r from-[#B7C7FF] to-[#A3BFFA] text-[#4F63F6] text-sm font-semibold rounded-lg px-5 py-3 hover:from-[#A3BFFA] hover:to-[#B7C7FF] transition-all duration-200">
              Browse
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="bg-[#E6E8F0] text-[#5F6F94] text-sm font-semibold rounded-lg px-5 py-3 hover:bg-[#D1D5DB] transition-all duration-200"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-gradient-to-r from-[#4F63F6] to-[#647AFA] text-white text-sm font-semibold rounded-lg px-5 py-3 hover:from-[#647AFA] hover:to-[#4F63F6] transition-all duration-200"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

// Task Item Component
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
            <i className="fas fa-list-ul text-xs"></i>
            <span>{task.progress}</span>
          </div>
          <div className="flex items-center space-x-2 bg-white text-[#5F6F94] text-xs font-medium rounded-lg px-3 py-1.5 shadow-sm">
            <i className="fas fa-comment-dots text-xs"></i>
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
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
        </svg>
      </button>
    </div>
  </article>
);

// Main TaskList Component
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
      tagBgColor: "bg-gradient-to-r from-[#F9B5A7] to-[#FECACA]",
      tagTextColor: "text-[#D95D39]",
      buttonBgColor: "bg-[#F9B5A7]",
      buttonTextColor: "text-[#D95D39]",
    },
    {
      title: "Create unique style of inner pages",
      progress: "5/10",
      comments: "3",
      tag: "Design",
      tagBgColor: "bg-gradient-to-r from-[#B9D9D5] to-[#A7F3D0]",
      tagTextColor: "text-[#3B8B84]",
      buttonBgColor: "bg-[#B9D9D5]",
      buttonTextColor: "text-[#3B8B84]",
    },
    {
      title: "Activate from WordPress Dashboard",
      progress: "5/10",
      comments: "3",
      tag: "Design",
      tagBgColor: "bg-gradient-to-r from-[#B7C7FF] to-[#A3BFFA]",
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
    <div className="max-w-7xl mx-auto p-8 bg-gradient-to-b from-[#F9FAFF] to-[#E5E7EB] min-h-screen">
      {/* Header */}
      <header className="flex flex-col sm:flex-row items-center justify-between bg-white rounded-2xl shadow-lg px-8 py-6 mb-10 border border-[#E6E8F0]">
        <h1 className="text-[#0B0E3F] text-xl font-bold tracking-tight">Your Tasks</h1>
        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
          <button className="text-[#5F6F94] text-sm font-semibold bg-[#F3F4F9] rounded-lg px-4 py-2.5 flex items-center space-x-2 hover:bg-[#E6E8F0] transition-all duration-200">
            <span>Project</span>
            <span className="font-medium">: webkit Project</span>
            <i className="fas fa-chevron-down text-xs"></i>
          </button>
          <button
            onClick={() => setIsNewModalOpen(true)}
            className="bg-gradient-to-r from-[#4F63F6] to-[#647AFA] text-white text-sm font-semibold rounded-lg px-5 py-2.5 hover:from-[#647AFA] hover:to-[#4F63F6] transition-all duration-200 shadow-md"
          >
            + New Task
          </button>
        </div>
      </header>

      {/* Task List Container */}
      <section className="bg-white rounded-2xl shadow-lg p-8 space-y-6 border border-[#E6E8F0]">
        {tasks.length === 0 ? (
          <p className="text-[#5F6F94] text-center text-sm">No tasks available. Add a new task to get started!</p>
        ) : (
          tasks.map((task, index) => (
            <TaskItem key={index} task={task} index={index} onEdit={handleEditTask} />
          ))
        )}
      </section>

      {/* New Task Modal */}
      <NewTaskModal
        isOpen={isNewModalOpen}
        onClose={() => setIsNewModalOpen(false)}
        onSave={handleSaveNewTask}
      />

      {/* Edit Task Modal */}
      {currentTask && (
        <EditTaskModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          task={currentTask}
          onSave={handleSaveEditedTask}
        />
      )}
    </div>
  );
};

export default TaskList;