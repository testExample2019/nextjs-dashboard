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
      <button
        type="button"
        className={`inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm uppercase font-semibold text-action-primary outline-1 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50`}
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {children}
        <svg
          className="-mr-1 size-5"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          data-slot="icon"
        >
          <path
            fillRule="evenodd"
            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
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
