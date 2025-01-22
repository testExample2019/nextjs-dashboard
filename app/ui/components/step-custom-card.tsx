"use client";

import { CardComponentProps } from "nextstepjs";

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
    <div className="step-custom-card bg-white p-6 rounded-lg shadow-lg flex flex-col gap-2 w-[35vw] border border-grey-border">
      <div className="flex items-center justify-between">
        <h2 className="text-22 text-grey-primary font-semibold">
          {step.title}
        </h2>
        {step.icon}
      </div>

      <div className={"max-h-60 overflow-y-auto text-sm relative"}>
        {step.content}
        <div className="sticky -bottom-0.5 left-0 right-0 h-6 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      </div>
      <div className="bg-gray-200 rounded-full h-2">
        <div
          className="bg-action-primary h-2 rounded-full"
          style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
        ></div>
      </div>
      {step.showControls && (
        <div className="flex justify-between mt-3 gap-4">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className="bg-white border border-grey-border text-grey-primary px-4 py-2 rounded-md font-semibold"
          >
            Previous
          </button>
          <button
            onClick={nextStep}
            className="bg-action-primary text-white px-4 py-2 rounded-md font-semibold"
          >
            {currentStep === totalSteps - 1 ? "Finish" : "Next"}
          </button>
        </div>
      )}

      {step.showSkip && (
        <button
          onClick={skipTour}
          className="px-4 py-2 rounded-md bg-slate-300 text-gray-800"
        >
          Skip
        </button>
      )}
      {arrow}
    </div>
  );
};

export default StepCustomCard;
