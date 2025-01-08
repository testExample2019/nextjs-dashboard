"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

type ToastType = "success" | "error" | "info" | "warning";

interface ToastContextProps {
  showToast: (message: string, type?: ToastType, duration?: number) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [toast, setToast] = useState<{
    message: string;
    type: ToastType;
    visible: boolean;
  }>({ message: "", type: "info", visible: false });

  const showToast = (
    message: string,
    type: ToastType = "info",
    duration: number = 3000,
  ) => {
    setToast({ message, type, visible: true });

    setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, duration);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      <>
        {children}
        {toast.visible && (
          <div
            className={`fixed top-5 right-5 z-50 px-4 py-3 rounded-lg shadow-lg transition-all duration-300 ${
              toast.type === "success"
                ? "bg-green text-white"
                : toast.type === "error"
                  ? "bg-red text-white"
                  : toast.type === "warning"
                    ? "bg-yellow text-black"
                    : "bg-action-primary text-white"
            }`}
          >
            <p className="text-sm font-medium">{toast.message}</p>
          </div>
        )}
      </>
    </ToastContext.Provider>
  );
};

// Hook for using the toast context
export const useToast = (): ToastContextProps => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
