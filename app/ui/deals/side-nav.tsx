"use client";
import React, { useEffect } from "react";
import { DealNavType, DealPages, DealViews } from "@/app/lib/definitions";
import { SideNavLink } from "@/app/ui/deals/side-nav-link";
import { useNextStep } from "nextstepjs";
import { usePathname } from "next/navigation";

export default function DealsSideNav({
  dealsNavData,
}: {
  dealsNavData: DealNavType[];
}) {
  const path = usePathname();
  const { setCurrentStep, startNextStep, currentStep } = useNextStep();

  useEffect(() => {
    if (
      currentStep === 0 ||
      currentStep === 8 ||
      currentStep === 22 ||
      currentStep === 24 ||
      currentStep === 26
    ) {
      if (
        path.includes(DealPages.Dashboard) ||
        path.includes(DealPages.Transactions) ||
        path.includes(DealPages.Instruments) ||
        path.includes(DealPages.Documents)
      ) {
        startNextStep("mainTour");
      }
      path.includes(DealPages.Dashboard) && setCurrentStep(8);
      path.includes(DealPages.Transactions) && setCurrentStep(22);
      path.includes(DealPages.Instruments) && setCurrentStep(24);
      path.includes(DealPages.Documents) && setCurrentStep(26);
      path.includes(DealPages.Dashboard) &&
        path.includes(DealViews.Borrower) &&
        setCurrentStep(27);
    }
  }, [path]);

  return (
    <div id={`tour1-step7`} className={"flex  md:flex-col gap-4"}>
      {dealsNavData.map(
        ({
          id,
          slug,
          totalCommitment,
          funded,
          unfunded,
          displayName,
          stepId,
        }) => {
          return (
            <SideNavLink
              key={id}
              id={id}
              slug={slug}
              displayName={displayName}
              totalCommitment={totalCommitment}
              funded={funded}
              unfunded={unfunded}
              stepId={stepId}
            />
          );
        },
      )}
    </div>
  );
}
