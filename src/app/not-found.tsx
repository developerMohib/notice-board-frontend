import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center">
      <h1 className="text-4xl font-bold text-gray-800">404</h1>
      <p className="text-gray-500 mt-2">Page not found</p>

      <Link
        href="/"
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
      >
        Go Home
      </Link>
    </div>
  );
}