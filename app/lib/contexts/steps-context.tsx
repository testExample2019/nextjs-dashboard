// StepsContext.tsx
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useNextStep } from "nextstepjs";
import { usePathname, useRouter } from "next/navigation";
import { DealPages, DealViews } from "@/app/lib/definitions";
import {
  instrumentDrawerPath,
  startPagePath,
  transactionDrawerPath,
  transactionRequestDrawerPath,
} from "@/app/lib/constants";

// Define the shape of the context.
type StepsContextProps = {
  tourFinished: boolean;
  restartTour: () => void;
};

const StepsContext = createContext<StepsContextProps | undefined>(undefined);

export const StepsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const path = usePathname();
  const { currentStep, setCurrentStep, startNextStep } = useNextStep();
  const [tourFinished, setTourFinished] = useState<boolean>(false);

  useEffect(() => {
    const isFinished = localStorage.getItem("tourFinished") === "true";
    if (isFinished) {
      setTourFinished(true);
    } else {
      startNextStep("mainTour");
    }
  }, [startNextStep, tourFinished]);

  useEffect(() => {
    const isFinished = localStorage.getItem("tourFinished") === "true";

    // If the tour is marked as finished, do not run the tour logic.
    if (isFinished) {
      return;
    }

    // If currentStep is 34, mark the tour as finished in both local storage and state.
    if (currentStep === 34) {
      localStorage.setItem("tourFinished", "true");
      setTourFinished(true);
      return;
    }

    // Run the tour logic for the specified steps.
    if (
      currentStep === 0 ||
      currentStep === 2 ||
      currentStep === 8 ||
      currentStep === 22 ||
      currentStep === 24 ||
      currentStep === 26
    ) {
      // Start the main tour if we are on one of these pages.
      if (
        path.includes(DealPages.Dashboard) ||
        path.includes(DealPages.Transactions) ||
        path.includes(DealPages.Instruments) ||
        path.includes(DealPages.Documents)
      ) {
        startNextStep("mainTour");
      }

      if (path.includes(DealPages.Setup) && currentStep === 0) {
        setCurrentStep(2);
      }

      if (path.includes(DealPages.Dashboard) && currentStep === 2) {
        setCurrentStep(8);
      }

      // Note: The following duplicate check might be intentional.
      if (path.includes(DealPages.Dashboard)) {
        setCurrentStep(8);
      }

      if (path.includes(DealPages.Dashboard) && currentStep === 22) {
        router.push(transactionRequestDrawerPath);
        setCurrentStep(20);
      }

      if (path.includes(DealPages.Transactions)) {
        setCurrentStep(22);
      }

      if (path.includes(DealPages.Transactions) && currentStep === 24) {
        router.push(transactionDrawerPath);
        setCurrentStep(22);
      }

      if (path.includes(DealPages.Instruments)) {
        setCurrentStep(24);
      }

      if (path.includes(DealPages.Instruments) && currentStep === 26) {
        router.push(instrumentDrawerPath);
        setCurrentStep(24);
      }

      if (path.includes(DealPages.Documents)) {
        setCurrentStep(26);
      }

      if (
        path.includes(DealPages.Dashboard) &&
        path.includes(DealViews.Borrower)
      ) {
        setCurrentStep(27);
      }
    }
  }, [tourFinished, path, currentStep, startNextStep, setCurrentStep, router]);

  // Function to restart the tour by clearing the finished flag from local storage,
  // resetting the state, and setting currentStep back to the initial value (0).
  const restartTour = () => {
    router.push(startPagePath);
    setCurrentStep(0);
    setTourFinished(false);
    localStorage.removeItem("tourFinished");
  };

  return (
    <StepsContext.Provider value={{ tourFinished, restartTour }}>
      {children}
    </StepsContext.Provider>
  );
};

// Custom hook for consuming the Steps context.
export const useSteps = (): StepsContextProps => {
  const context = useContext(StepsContext);
  if (context === undefined) {
    throw new Error("useSteps must be used within a StepsProvider");
  }
  return context;
};
