import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
}
export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6">
      <h2 className="text-2xl font-bold text-gray-800">Page Not Found</h2>
      <p className="mt-2 text-gray-600">Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>
      <Link
        href="/"
        className="mt-4 text-blue-600 hover:underline"
      >
        Go back home
      </Link>
    </div>
  );
}