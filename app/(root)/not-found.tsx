// app/not-found.tsx

import Link from "next/link";
import { startPagePath } from "@/app/lib/constants";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-grey-lighter">
      <h1 className="text-6xl font-bold text-red mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-grey-primary mb-4">
        Page Not Found
      </h2>
      <p className="text-grey-primary mb-8">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <Link href={startPagePath}>
        <span className="px-6 py-3 bg-blue-dark text-white rounded hover:bg-blue-dark transition-colors cursor-pointer">
          Go Home
        </span>
      </Link>
    </div>
  );
}