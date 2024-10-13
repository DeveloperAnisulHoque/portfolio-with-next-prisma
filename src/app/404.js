// pages/404.js

import { AlertCircle } from "lucide-react";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800">
      <AlertCircle size={64} className="text-red-600 mb-4" />
      <h1 className="text-3xl font-semibold">404 - Page Not Found</h1>
      <p className="mt-2 text-lg text-gray-600">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <p className="mt-4">
        Go back to the{" "}
        <a href="/" className="text-blue-500 hover:underline">
          homepage
        </a>
        .
      </p>
    </div>
  );
}
