import { useDrawer } from "@/app/lib/contexts";
import { ReactNode } from "react";

export const Drawer = ({ children }: { children: ReactNode }) => {
  const { isOpen, closeDrawer } = useDrawer();

  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Drawer Header */}
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">Drawer</h2>
        <button
          onClick={closeDrawer}
          className="absolute top-4 right-4 text-grey hover:text-grey-primary"
        >
          Close
        </button>
      </div>

      {/* Drawer Content */}
      <div className="p-4">
        <p>This is your global drawer content.</p>
        {children}
      </div>
    </div>
  );
};
