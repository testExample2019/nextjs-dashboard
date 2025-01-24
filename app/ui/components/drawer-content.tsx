import React from "react";
import { separateWords } from "@/app/lib/utils";
import Status from "@/app/ui/components/status";

interface TableProps {
  rows: { [key: string]: string | number | undefined }; // Object instead of array
  title?: string;
  cols?: number;
  horizontal?: boolean;
}

export const DrawerContent: React.FC<TableProps> = ({
  rows = {},
  cols = 2,
  title,
  horizontal = false,
}) => {
  // Extract headers dynamically from the keys of the object
  const headers = Object.keys(rows);

  return (
    <>
      {title && (
        <h2 className="text-base font-semibold text-grey-blue py-4 mb-4 border-b-1 border-grey-border">
          {title}
        </h2>
      )}
      <div
        className={`grid ${horizontal ? "grid-cols-1" : "grid-cols-2"} lg:grid-cols-${cols} gap-4`}
      >
        {headers.map((header, index) => {
          const value = rows[header]; // Get the value for the current key
          return (
            value && (
              <div
                key={index}
                className={`${horizontal ? "grid grid-cols-2" : "flex gap-3 flex-col"}`}
              >
                <p className="text-sm text-grey font-semibold capitalize">
                  {separateWords(header)}
                </p>
                <p className="text-base font-medium text-grey-primary ">
                  {header.includes("status") ? (
                    <Status status={`${value}`} />
                  ) : (
                    value
                  )}
                </p>
              </div>
            )
          );
        })}
      </div>
    </>
  );
};
