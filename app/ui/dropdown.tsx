"use client";
import React, { useState } from "react";

interface DropdownItem<T> {
  id: number;
  label: string;
  actionType: T; // Action identifier
}

interface ButtonDropdownProps<T> {
  children: React.ReactNode;
  dropdownItems: DropdownItem<T>[]; // Array of generic dropdown items
  onAction: (actionType: T) => void; // Handler for actions
}

export const ButtonDropdown = <T,>({
  children,
  dropdownItems,
  onAction,
}: ButtonDropdownProps<T>) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
        <div  onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            {children}
        </div>
      <div
        className={`${isDropdownOpen ? "flex" : "hidden"} absolute right-0 z-10 mt-0 w-auto origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
      >
        <div className="py-1" role="none">
          {dropdownItems.map(({ id, label, actionType }) => (
            <button
              key={id}
              className="block px-4 py-2 text-sm text-gray-700 capitalize text-nowrap"
              role="menuitem"
              id="menu-item-0"
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
    </div>
  );
};
