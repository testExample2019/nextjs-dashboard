"use client";
import React, { useEffect, useRef, useState } from "react";

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
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

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
      <div onClick={toggleDropdown}>{children}</div>
      <div
        className={`${isDropdownOpen ? "flex" : "hidden"} absolute right-0 z-10 mt-0 w-auto origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
      >
        <div>
          {dropdownItems.map(({ id, label, actionType }) => (
            <button
              key={id}
              className={`flex w-full px-4 py-2 text-sm  capitalize text-nowrap hover:bg-grey-lighter ${
                label.includes("Reject") ? "text-red" : "text-grey-primary"
              }`}
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
