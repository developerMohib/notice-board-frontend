export default function Loading() {
    
return (
    <div className="flex items-center justify-center h-[70vh]">
      <div className="flex flex-col items-center gap-3">
        {/* Spinner */}
        <div className="w-10 h-10 border-4 border-gray-300 border-t-[#F95524] rounded-full animate-spin"></div>

        {/* Text */}
        <p className="text-sm text-gray-500">Loading...</p>
      </div>
    </div>
  );
}