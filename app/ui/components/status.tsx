import React from "react";
import { separateWords } from "@/app/lib/utils";

type StatusProps = {
  status:
    | "Open"
    | "Published"
    | "Scheduled"
    | "Reviewed"
    | "Pending"
    | "NotPaid"
    | "Paid"
    | string; // Define allowed statuses
};

const statusColors: Record<StatusProps["status"], string> = {
  Open: "text-blue-dark bg-blue-dark",
  Published: "text-blue-dark bg-blue-dark",
  Scheduled: "text-blue-dark bg-blue-dark",
  Paid: "text-green bg-green",
  Reviewed: "text-green bg-green",
  Pending: "text-orange bg-orange",
  NotPaid: "text-red bg-red",
};

const Status: React.FC<StatusProps> = ({ status }) => {
  return (
    <div className="flex items-center space-x-2">
      {statusColors[status] && (
        <span
          className={`w-2.5 h-2.5 rounded-full ${statusColors[status]} inline-block`}
        />
      )}
      <span
        className={`text-sm font-medium ${
          status.includes("overdue") ? "text-red" : "text-grey-primary"
        }`}
      >
        {separateWords(status)}
      </span>
    </div>
  );
};

export default Status;
