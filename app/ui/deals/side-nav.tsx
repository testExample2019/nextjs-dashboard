"use client";
import React, { useEffect } from "react";
import { DealNavType } from "@/app/lib/definitions";
import { SideNavLink } from "@/app/ui/deals/side-nav-link";
import { useNextStep } from "nextstepjs";
import { usePathname, useRouter } from "next/navigation";

export default function DealsSideNav({
  dealsNavData,
}: {
  dealsNavData: DealNavType[];
}) {
  const path = usePathname();
  const { setCurrentStep, startNextStep, currentStep } = useNextStep();
  const router = useRouter();

  useEffect(() => {
    startNextStep("mainTour");
    setCurrentStep(7);
  }, []);

  return (
    <div id={`tour1-step9`} className={"flex  md:flex-col gap-4"}>
      {dealsNavData.map(
        ({ id, slug, totalCommitment, funded, unfunded, displayName }) => {
          return (
            <SideNavLink
              key={id}
              id={id}
              slug={slug}
              displayName={displayName}
              totalCommitment={totalCommitment}
              funded={funded}
              unfunded={unfunded}
            />
          );
        },
      )}
    </div>
  );
}
