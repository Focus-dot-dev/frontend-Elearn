export default function ProgressBar({ percentage, color, label }) {
    return (
      <div className="w-full">
        <div className="relative h-6 w-full bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full ${color} transition-all duration-500 ease-out flex items-center justify-center text-xs text-white font-medium`}
            style={{ width: `${percentage}%` }}
          >
            {label || `${percentage}%`}
          </div>
        </div>
      </div>
    );
  }
  