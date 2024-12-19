"use client";

import { redirect } from "next/navigation";

const LoanTemplatePage = () => {
  const templates = [
    {
      title: "Fixed",
      description: "Fixed Interest Rate",
      icon: "💲", // Replace with an SVG or icon library
    },
    {
      title: "Floating",
      description: "Floating Index Rate",
      icon: "📈",
    },
    {
      title: "Unitranche",
      description: "First & Last out lenders",
      icon: "🔗",
    },
    {
      title: "Blank Template",
      description: "Create from scratch",
      icon: "📄",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* Card Container */}
      <div className="max-w-3xl w-full p-8 bg-white rounded-lg shadow-lg border border-gray-200">
        {/* Header */}
        <h1 className="text-2xl font-semibold text-gray-800">
          Pick a template for a new loan
        </h1>
        <p className="mt-2 text-gray-600">
          We will prepopulate most of the fields to simplify the loan
          onboarding.
        </p>

        {/* Template Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {templates.map((template, index) => (
            <button
              key={index}
              onClick={() => redirect(`/template/setup`)}
              className="flex items-center justify-center p-4 border rounded-lg hover:shadow-md transition-shadow duration-200 cursor-pointer"
            >
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 flex items-center justify-center bg-action-primary text-purple-600 rounded-full">
                  {template.icon}
                </div>
                <h3 className="mt-2 text-sm font-medium text-gray-800">
                  {template.title}
                </h3>
                <p className="text-xs text-gray-500">{template.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoanTemplatePage;
