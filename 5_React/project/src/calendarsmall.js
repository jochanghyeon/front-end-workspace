import React, { useState } from "react";
import Calendar from "react-calendar";
import "./calendarsmall.css";
import "react-calendar/dist/Calendar.css";

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="calendar-container">
      <Calendar
        onChange={handleDateChange}
        value={date}
        formatDay={(locale, date) => date.getDate()} // 일을 표시하도록 설정
      />
    </div>
  );
};

export default MyCalendar;
