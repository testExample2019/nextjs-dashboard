// StepsContext.tsx
"use client";

import React, { createContext, useContext, useEffect } from "react";
import { useNextStep } from "nextstepjs";
import { usePathname, useRouter } from "next/navigation";
import { DealPages, DealViews } from "@/app/lib/definitions";
import {
  instrumentDrawerPath,
  transactionDrawerPath,
  transactionRequestDrawerPath,
} from "@/app/lib/constants";

// Define the shape of the context if you need to expose any values.
type StepsContextProps = object;

const StepsContext = createContext<StepsContextProps | undefined>(undefined);

export const StepsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const path = usePathname();
  const { currentStep, setCurrentStep, startNextStep } = useNextStep();

  useEffect(() => {
    // Trigger the tour logic when the currentStep matches one of these values.
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
  }, [path, currentStep, startNextStep, setCurrentStep, router]);

  return <StepsContext.Provider value={{}}>{children}</StepsContext.Provider>;
};

// Custom hook for consuming the Steps context.
export const useSteps = (): StepsContextProps => {
  const context = useContext(StepsContext);
  if (context === undefined) {
    throw new Error("useSteps must be used within a StepsProvider");
  }
  return context;
};
