"use client";

import React, { useState, useMemo } from "react";

const Calendar = () => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [currentDate, setCurrentDate] = useState(new Date());

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const generateCalendarDays = (month, year) => {
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = getDaysInMonth(month, year);
    const calendarDays = [];
    let week = [];

    // Days from previous month
    const prevMonth = month === 0 ? 11 : month - 1;
    const prevYear = month === 0 ? year - 1 : year;
    const daysInPrevMonth = getDaysInMonth(prevMonth, prevYear);

    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      week.unshift({
        day: daysInPrevMonth - i,
        isCurrentMonth: false,
      });
    }

    // Days in current month
    for (let day = 1; day <= daysInMonth; day++) {
      week.push({
        day,
        isCurrentMonth: true,
      });
      if (week.length === 7) {
        calendarDays.push(week);
        week = [];
      }
    }

    // Days from next month
    let nextMonthDay = 1;
    if (week.length > 0) {
      while (week.length < 7) {
        week.push({
          day: nextMonthDay++,
          isCurrentMonth: false,
        });
      }
      calendarDays.push(week);
    }

    // Ensure at least 6 rows for consistent layout
    while (calendarDays.length < 6) {
      week = [];
      for (let i = 0; i < 7; i++) {
        week.push({
          day: nextMonthDay++,
          isCurrentMonth: false,
        });
      }
      calendarDays.push(week);
    }

    return calendarDays;
  };

  const calendarDays = useMemo(
    () => generateCalendarDays(currentMonth, currentYear),
    [currentMonth, currentYear]
  );

  const handlePreviousMonth = () => {
    setCurrentDate(
      new Date(
        currentMonth === 0 ? currentYear - 1 : currentYear,
        currentMonth === 0 ? 11 : currentMonth - 1,
        1
      )
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(
        currentMonth === 11 ? currentYear + 1 : currentYear,
        currentMonth === 11 ? 0 : currentMonth + 1,
        1
      )
    );
  };

  const today = new Date();
  const isCurrentDay = (dayObj) => {
    return (
      dayObj.day === today.getDate() &&
      dayObj.isCurrentMonth &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear()
    );
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handlePreviousMonth}
          className="text-gray-500 hover:text-blue-500 focus:outline-none"
          aria-label="Previous Month"
        >
          ←
        </button>
        <h2 className="text-lg font-semibold text-[#1E1E50]">
          {currentDate.toLocaleString("default", { month: "long" })} {currentYear}
        </h2>
        <button
          onClick={handleNextMonth}
          className="text-gray-500 hover:text-blue-500 focus:outline-none"
          aria-label="Next Month"
        >
          →
        </button>
      </div>

      {/* Calendar */}
      <table className="w-full text-center text-sm text-[#1E1E50] border-collapse">
        <thead>
          <tr>
            {daysOfWeek.map((day) => (
              <th key={day} className="py-2 text-[#475569]">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {calendarDays.map((week, weekIdx) => (
            <tr key={weekIdx}>
              {week.map((dayObj, dayIdx) => (
                <td
                  key={`${weekIdx}-${dayIdx}`}
                  className={`py-2 border border-gray-100 ${
                    dayObj.isCurrentMonth ? "text-[#475569]" : "text-[#CBD5E1]"
                  }`}
                >
                  {isCurrentDay(dayObj) ? (
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#3B82F6] text-white font-medium">
                      {dayObj.day}
                    </div>
                  ) : (
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full hover:bg-blue-100 transition">
                      {dayObj.day}
                    </div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;