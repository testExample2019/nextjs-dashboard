import { Metadata } from "next";
import CardWrapper from "@/app/ui/dashboard/covenants-tracking";
import { CardsSkeleton } from "@/app/ui/skeletons";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "Lenders",
};
export default function Page() {
  return (
    <div className={"p-4"}>
      <h3 className={"text-grey-primary text-base font-semibold mb-4"}>
        Covenants Tracking
      </h3>
      <Suspense fallback={<CardsSkeleton />}>
        <CardWrapper />
      </Suspense>
    </div>
  );
}
