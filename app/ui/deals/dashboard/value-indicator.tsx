import React from "react";

type ValueIndicatorProps = {
  value: string; // String value, e.g., "+12.5" or "-12.5"
};

const ValueIndicator: React.FC<ValueIndicatorProps> = ({ value }) => {
  // Parse the string into a number and determine positivity
  const numericValue = parseFloat(value);
  const isPositive = numericValue > 0;
  const displayValue = Math.abs(numericValue).toFixed(1); // Always show absolute value, fixed to 1 decimal

  return (
    <div className="flex items-center space-x-1">
      {/* Caret */}
      <span
        className={`text-${isPositive ? "green" : "red"}`}
        style={{ transform: isPositive ? "rotate(0deg)" : "rotate(180deg)" }}
      >
        <svg
          width="11"
          height="6"
          viewBox="0 0 11 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.349 5.01562L0.317719 5.01562L5.33334 -1.04907e-06L10.349 5.01562Z"
            fill="currentColor"
          />
        </svg>
      </span>
      {/* Value */}
      <span className={`text-${isPositive ? "green" : "red"} font-medium`}>
        {displayValue}%
      </span>
    </div>
  );
};

export default ValueIndicator;
