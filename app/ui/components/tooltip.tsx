"use client";
import React, { ReactNode, useState } from "react";

type TooltipProps = {
  content: ReactNode; // Tooltip content, can be text or JSX
  children?: ReactNode; // The trigger element
};

const defaultIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M12 4.25C7.71875 4.25 4.25 7.75 4.25 12C4.25 16.2812 7.71875 19.75 12 19.75C16.25 19.75 19.75 16.2812 19.75 12C19.75 7.75 16.25 4.25 12 4.25ZM12 18.25C8.53125 18.25 5.75 15.4688 5.75 12C5.75 8.5625 8.53125 5.75 12 5.75C15.4375 5.75 18.25 8.5625 18.25 12C18.25 15.4688 15.4375 18.25 12 18.25ZM12 7.6875C11.25 7.6875 10.6875 8.28125 10.6875 9C10.6875 9.75 11.25 10.3125 12 10.3125C12.7188 10.3125 13.3125 9.75 13.3125 9C13.3125 8.28125 12.7188 7.6875 12 7.6875ZM13.75 15.625V14.875C13.75 14.6875 13.5625 14.5 13.375 14.5H13V11.375C13 11.1875 12.8125 11 12.625 11H10.625C10.4062 11 10.25 11.1875 10.25 11.375V12.125C10.25 12.3438 10.4062 12.5 10.625 12.5H11V14.5H10.625C10.4062 14.5 10.25 14.6875 10.25 14.875V15.625C10.25 15.8438 10.4062 16 10.625 16H13.375C13.5625 16 13.75 15.8438 13.75 15.625Z"
      fill="#4A90E2"
    />
  </svg>
);

const Tooltip: React.FC<TooltipProps> = ({
  content,
  children = defaultIcon,
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative inline-block">
      {/* Tooltip Trigger */}
      <div
        className="cursor-pointer"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        {children}
      </div>

      {/* Tooltip Content */}
      <div
        className={`absolute z-10 p-2 w-max max-w-[240px] text-xs text-grey-primary bg-white border border-gray-300 rounded shadow-md bottom-full mb-2 left-1/2 transform -translate-x-1/2 transition-opacity ${visible ? "opacity-1" : "opacity-0"}`}
      >
        <div className="relative">
          {/* Tooltip Content */}
          {content}

          <div className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white border-l border-b border-gray-300 -rotate-45"></div>
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
