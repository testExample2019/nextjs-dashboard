"use client";
import React, { useEffect, useRef, useState } from "react";
import { useNextStep } from "nextstepjs";

interface DropdownItem<T> {
  id: number | string;
  label: string;
  actionType: T; // Action identifier
  active?: boolean;
}

interface ButtonDropdownProps<T> {
  children: React.ReactNode;
  dropdownItems: DropdownItem<T>[]; // Array of generic dropdown items
  onAction: (actionType: T) => void; // Handler for actions
  placeholder?: string;
  id?: string;
  disabled?: boolean;
}

export const ButtonDropdown = <T,>({
  children,
  dropdownItems,
  onAction,
  placeholder,
  id,
  disabled,
}: ButtonDropdownProps<T>) => {
  const { currentStep } = useNextStep();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    (currentStep === 12 && id === "tour1-step11") ||
    (currentStep === 28 && id === "tour1-step27") ||
    (currentStep === 30 && id === "tour1-step29")
      ? setIsDropdownOpen(true)
      : setIsDropdownOpen(false);
  }, [currentStep]);

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div
        className={`${disabled ? "opacity-40 pointer-events-none" : ""}`}
        onClick={toggleDropdown}
      >
        {children}
      </div>
      <div
        className={`${isDropdownOpen ? "flex" : "hidden"} flex-col overflow-hidden absolute right-0 z-10 mt-0 w-auto origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        id={id}
      >
        {placeholder && (
          <span className={"px-4 py-2 text-grey-secondary text-sm"}>
            {placeholder}
          </span>
        )}
        {dropdownItems.map(({ id, label, actionType, active }) => (
          <button
            key={id}
            className={`flex w-full px-4 py-2 text-sm capitalize text-nowrap  transition-all ${
              label.includes("Reject") ? "text-red" : "text-grey-primary"
            }  ${active ? "bg-blue-o hover:bg-blue-o hover:text-action-primary" : "hover:bg-grey-lighter"} `}
            aria-label={label}
            role="menuitem"
            id={`menu-item-${id}`}
            onClick={() => {
              onAction(actionType);
              setIsDropdownOpen(false);
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};
