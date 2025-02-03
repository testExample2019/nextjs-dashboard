import React from "react";
import {
  addDays,
  endOfMonth,
  format,
  isSameDay,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import { PaymentType } from "@/app/lib/definitions";
import { today } from "@/app/lib/constants";

const Calendar = ({ payments }: { payments: PaymentType[] }) => {
  const monthStart = startOfMonth(today);
  const monthEnd = endOfMonth(monthStart);
  const weekStart = startOfWeek(monthStart, { weekStartsOn: 0 });
  const paymentDates = payments?.map((payment) => payment.dueDate);

  const generateDays = () => {
    const days = [];
    let day = weekStart;

    while (day <= monthEnd || days.length % 7 !== 0) {
      days.push(new Date(day));
      day = addDays(day, 1);
    }
    return days;
  };

  if (!payments?.length) return null;

  return (
    <div className="bg-white p-4 h-full rounded-md">
      <div className="flex justify-between items-center mb-4">
        <p className="text-sm font-semibold text-action-primary">
          {format(monthStart, "MMMM yyyy").toUpperCase()}
        </p>
        <div className="space-x-3 flex justify-center">
          <button className="text-sm text-grey-primary cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
            >
              <path
                d="M11.5607 11.9393L7.62128 7.99997L11.5607 4.06056L10.5 3L5.5 7.99997L10.5 13L11.5607 11.9393Z"
                fill="currentColor"
              />
            </svg>
          </button>
          <span className="text-sm text-grey-primary font-semibold">Today</span>
          <button className="text-sm text-grey-primary cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
            >
              <path
                d="M5.43945 4.06066L9.37883 8.00003L5.43945 11.9394L6.50011 13L11.5001 8.00003L6.50011 3L5.43945 4.06066Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-5 text-center text-grey-primary">
        {["SU", "MO", "TU", "WE", "TH", "FR", "SA"].map((day, index) => (
          <span key={day + index} className="text-xs font-semibold text-grey">
            {day}
          </span>
        ))}
        {generateDays().map((date, index) => {
          const isToday = isSameDay(date, today);
          const isMarked = paymentDates.find((day) =>
            isSameDay(date, new Date(day)),
          );

          return (
            <span
              key={index}
              className={`text-sm w-8 h-8 flex items-center justify-center relative ${
                isToday ? "bg-blue-dark text-white rounded-full" : ""
              }`}
            >
              {date.getMonth() === monthStart.getMonth() ? date.getDate() : ""}
              {isMarked && (
                <span className="bg-red h-2.5 w-2.5 border-2 border-white rounded-full absolute right-0 top-0" />
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
