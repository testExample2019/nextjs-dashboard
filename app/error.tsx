"use client";

import { useEffect } from "react";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  // Log the error for debugging purposes.
  useEffect(() => {
    console.error("Error boundary caught an error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <h1 className="text-3xl font-bold text-red mb-4">
        Something went wrong!
      </h1>
      <p className="text-grey-primary mb-8">{error.message}</p>
      <button
        onClick={reset}
        className="px-4 py-2 bg-blue-dark text-white rounded hover:bg-blue-dark"
      >
        Try again
      </button>
    </div>
  );
}
