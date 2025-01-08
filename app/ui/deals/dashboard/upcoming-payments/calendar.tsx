import React from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  addDays,
  isSameDay,
} from "date-fns";

const Calendar = () => {
  const today = new Date();
  const monthStart = startOfMonth(today);
  const monthEnd = endOfMonth(monthStart);
  const weekStart = startOfWeek(monthStart, { weekStartsOn: 0 });

  const generateDays = () => {
    const days = [];
    let day = weekStart;

    while (day <= monthEnd || days.length % 7 !== 0) {
      days.push(new Date(day));
      day = addDays(day, 1);
    }
    return days;
  };

  return (
    <div className="w-full lg:w-[40%]">
      <div className="bg-white p-4 h-full">
        <div className="flex justify-between items-center mb-4">
          <p className="text-sm font-semibold text-action-primary">
            {format(monthStart, "MMMM yyyy").toUpperCase()}
          </p>
          <div className="space-x-3 flex justify-center">
            <button className="text-sm text-grey-primary">
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
            <span className="text-sm text-grey-primary font-semibold">
              Today
            </span>
            <button className="text-sm text-grey-primary">
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
            return (
              <span
                key={index}
                className={`text-sm w-8 h-8 flex items-center justify-center ${
                  isToday ? "bg-action-primary text-white rounded-full" : ""
                }`}
              >
                {date.getMonth() === monthStart.getMonth()
                  ? date.getDate()
                  : ""}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
