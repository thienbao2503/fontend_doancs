import { ChatBubbleLeftEllipsisIcon, ClipboardDocumentCheckIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function CalendarSidebar({ tasks }: { tasks: any[] }) {
  const getIcon = (title: string) => {
    switch (title) {
      case "Direct Development":
        return <ChatBubbleLeftEllipsisIcon className="h-6 w-6 text-orange-500" />;
      case "Action point assigned":
        return <ClipboardDocumentCheckIcon className="h-6 w-6 text-blue-500" />;
      case "Private Notes":
        return <EnvelopeIcon className="h-6 w-6 text-yellow-500" />;
      default:
        return <ChatBubbleLeftEllipsisIcon className="h-6 w-6 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Lịch nhỏ */}
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="font-semibold text-center mb-2">April 2025</div>
        {/* ... lịch nhỏ ... */}
      </div>
      {/* Danh sách nhiệm vụ */}
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="font-semibold mb-2">Nhiệm vụ của bạn</div>
        <div className="space-y-2">
          {tasks.map((task, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 bg-gray-50 rounded-lg p-3 shadow-sm hover:shadow-md transition"
            >
              <div>{getIcon(task.title)}</div>
              <div>
                <div className="font-semibold text-gray-800">{task.title}</div>
                <div className="text-sm text-gray-500">{task.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}