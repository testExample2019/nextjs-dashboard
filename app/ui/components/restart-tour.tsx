// RestartTourFab.tsx
"use client";

import React from "react";
import { useSteps } from "@/app/lib/contexts/steps-context";
import { Reload } from "@/app/ui/icons";

const RestartTourFab: React.FC = () => {
  const { tourFinished, restartTour } = useSteps();

  // Only show the button if the tour is finished.
  if (!tourFinished) return null;

  return (
    <button
      onClick={restartTour}
      className="fixed inline-flex transition-all items-center justify-center bottom-4 right-4 w-12 h-12 rounded-full shadow-md hover:shadow-xl bg-blue-dark text-white cursor-pointer text-xl z-20"
      title="Restart Tour"
    >
      <Reload />
    </button>
  );
};

export default RestartTourFab;
