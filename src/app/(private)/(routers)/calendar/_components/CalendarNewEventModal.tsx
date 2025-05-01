import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const MEMBERS = [
  "Member 1",
  "Member 2",
  "Member 3"
];

export default function CalendarNewEventModal({
  open,
  onClose,
  onSave
}: {
  open: boolean;
  onClose: () => void;
  onSave: (task: {
    taskName: string;
    assignedTo: string;
    projectName: string;
    description: string;
    checklist: string;
    attachment: File | null;
  }) => void;
}) {
  const [taskName, setTaskName] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [checklist, setChecklist] = useState("");
  const [attachment, setAttachment] = useState<File | null>(null);

  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded-2xl p-8 w-full max-w-2xl shadow-xl" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          <span className="font-bold text-2xl text-center w-full text-[#23235F]">New Task</span>
          <button onClick={onClose} className="absolute right-6 top-6"><XMarkIcon className="w-6 h-6" /></button>
        </div>
        <form
          onSubmit={e => {
            e.preventDefault();
            if (taskName && assignedTo && projectName) {
              onSave({ taskName, assignedTo, projectName, description, checklist, attachment });
              setTaskName("");
              setAssignedTo("");
              setProjectName("");
              setDescription("");
              setChecklist("");
              setAttachment(null);
            }
          }}
          className="flex flex-col gap-5"
        >
          <div>
            <label className="block font-semibold mb-1">Task Name</label>
            <input
              className="border rounded-lg px-4 py-2 w-full"
              placeholder="Enter task Name"
              value={taskName}
              onChange={e => setTaskName(e.target.value)}
              required
            />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block font-semibold mb-1">Assigned to</label>
              <select
                className="border rounded-lg px-4 py-2 w-full"
                value={assignedTo}
                onChange={e => setAssignedTo(e.target.value)}
                required
              >
                <option value="">Memeber</option>
                {MEMBERS.map(m => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="block font-semibold mb-1">Project Name</label>
              <input
                className="border rounded-lg px-4 py-2 w-full"
                placeholder="Enter your project Name"
                value={projectName}
                onChange={e => setProjectName(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label className="block font-semibold mb-1">Description</label>
            <textarea
              className="border rounded-lg px-4 py-2 w-full min-h-[60px]"
              placeholder="Textarea"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Checklist</label>
            <input
              className="border rounded-lg px-4 py-2 w-full"
              placeholder="Add List"
              value={checklist}
              onChange={e => setChecklist(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Attachments</label>
            <div className="flex items-center border rounded-xl px-4 py-2 w-full">
              <span className=" flex-1 select-none">Upload media</span>
              <input
                type="file"
                id="attachment"
                className="hidden"
                onChange={e => setAttachment(e.target.files ? e.target.files[0] : null)}
              />
              <label
                htmlFor="attachment"
                className="bg-[#6c7cff] text-white px-4 py-1 rounded-lg cursor-pointer hover:bg-[#4f6ef7] transition ml-2"
                style={{ fontSize: 15, fontWeight: 500 }}
              >
                Browse
              </label>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-2">
            <button
              type="submit"
              className="bg-[#6c7cff] text-white rounded-lg px-6 py-2 font-semibold hover:bg-[#4f6ef7] transition"
            >
              Save
            </button>
            <button
              type="button"
              className="bg-[#6c7cff] text-white rounded-lg px-6 py-2 font-semibold hover:bg-[#4f6ef7] transition"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}