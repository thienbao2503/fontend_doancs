import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";

export default function CalendarTaskItem({ task }: { task: { title: string; description: string } }) {
  return (
    <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-2">
      <ClipboardDocumentCheckIcon className="w-6 h-6 text-blue-500" />
      <div>
        <div className="font-semibold text-sm">{task.title}</div>
        <div className="text-xs text-gray-500">{task.description}</div>
      </div>
    </div>
  );
}