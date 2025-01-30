"use client";

import { CardComponentProps } from "nextstepjs";
import { Cross } from "@/app/ui/icons";

const StepCustomCard: React.FC<CardComponentProps> = ({
  step,
  currentStep,
  totalSteps,
  nextStep,
  prevStep,
  skipTour,
  arrow,
}) => {
  return (
    <div
      className={
        "step-custom-card bg-white rounded-lg shadow-lg border border-grey-border relative"
      }
    >
      <div className="p-4 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-18 text-grey-primary font-semibold capitalize">
            {step.title}
          </h2>
          {step.icon}
        </div>
        <div className={"max-h-[70vh] overflow-y-auto text-sm relative"}>
          {step.content}
          <div className="sticky -bottom-0.5 left-0 right-0 h-6 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
        </div>
        <div className="bg-grey-border rounded-full h-2 mb-2">
          <div
            className="bg-blue-dark h-2 rounded-full "
            style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
          />
        </div>
        <span className={"text-grey text-sm"}>
          {currentStep + 1} of {totalSteps} steps
        </span>
      </div>
      <div className={"flex flex-col p-2 gap-6 border-t border-grey-border"}>
        {step.showControls && (
          <div className="flex justify-between gap-2">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className={`bg-white border text-sm border-grey-border uppercase text-grey-primary px-4 py-2 rounded-md font-semibold w-full max-w-52 ${currentStep === 0 ? "opacity-50" : "opacity-100"}`}
            >
              Previous
            </button>
            <button
              onClick={nextStep}
              className="bg-action-primary text-sm text-white uppercase px-4 py-2 rounded-md font-semibold w-full max-w-52"
            >
              {currentStep === totalSteps - 1 ? "Finish" : "Next"}
            </button>
          </div>
        )}
        <button
          onClick={skipTour}
          className="p-1 rounded-md bg-white text-grey-primary text-xs absolute top-0 right-0" // TODO: Add condition
        >
          <Cross />
        </button>
      </div>
      {arrow}
    </div>
  );
};

export default StepCustomCard;
