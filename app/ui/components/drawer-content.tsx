"use client";
import React from "react";
import { separateWords } from "@/app/lib/utils";

interface TableProps {
  rows: { [key: string]: string | number | undefined }; // Object instead of array
  title?: string;

  cols?: number;
}

export const DrawerContent: React.FC<TableProps> = ({
  rows = {},
  cols = 2,
  title,
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
      <div className={`grid grid-cols-2 lg:grid-cols-${cols} gap-4`}>
        {headers.map((header, index) => {
          const value = rows[header]; // Get the value for the current key
          return (
            value && (
              <div key={index} className={"flex flex-col gap-3"}>
                <p className="text-sm text-grey font-semibold capitalize">
                  {separateWords(header)}
                </p>
                <p className="text-base font-medium text-grey-primary ">
                  {value}
                </p>
              </div>
            )
          );
        })}
      </div>
    </>
  );
};
