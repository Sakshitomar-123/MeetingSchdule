import React from "react";
import LeftContent from "./LeftContent";
const DateSelection = ({ formData, handleFormChange, nextSlide }) => {
  // Generate calendar days
  const generateCalendarDays = () => {
    const year = formData.currentMonth.getFullYear();
    const month = formData.currentMonth.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days = [];
    // Add empty cells for days before first day of month
    for (let i = 0; i < firstDay; i++) {
      days.push({ day: "", isCurrentMonth: false });
    }

    // Add days of current month
    for (let i = 1; i <= daysInMonth; i++) {
      const currentDate = new Date(year, month, i);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      days.push({
        day: i,
        isCurrentMonth: true,
        isSelectable: currentDate >= today,
        date: new Date(year, month, i),
      });
    }

    return days;
  };

  const handlePrevMonth = () => {
    handleFormChange(
      "currentMonth",
      new Date(
        formData.currentMonth.getFullYear(),
        formData.currentMonth.getMonth() - 1
      )
    );
  };

  const handleNextMonth = () => {
    handleFormChange(
      "currentMonth",
      new Date(
        formData.currentMonth.getFullYear(),
        formData.currentMonth.getMonth() + 1
      )
    );
  };

  const handleDateSelect = (date) => {
    handleFormChange("selectedDate", date);
  };

  const handleContinue = () => {
    // Only continue if a date is selected
    if (formData.selectedDate) {
      nextSlide();
    }
  };

  const days = generateCalendarDays();

  return (
    <div className="main-content">
      <LeftContent />
      <div className="content-right">
        <div className="selection-container">
          <h2>Select A Date & Time</h2>
          <div className="calendar-header">
            <button onClick={handlePrevMonth}>&lt;</button>
            <h3>
              {formData.currentMonth.toLocaleString("default", {
                month: "long",
                year: "numeric",
              })}
            </h3>
            <button onClick={handleNextMonth}>&gt;</button>
          </div>
          <div className="calendar">
            <div className="weekdays">
              <div>S</div>
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
            </div>
            <div className="days">
              {days.map((day, index) => (
                <div
                  key={index}
                  className={`day ${!day.isCurrentMonth ? "inactive" : ""} 
                      ${day.isSelectable ? "selectable" : "disabled"} 
                      ${
                        formData.selectedDate &&
                        day.date &&
                        formData.selectedDate.getTime() === day.date.getTime()
                          ? "selected"
                          : ""
                      }`}
                  onClick={() => day.isSelectable && handleDateSelect(day.date)}
                >
                  {day.day}
                </div>
              ))}
            </div>
          </div>
          <div className="timezone-selector">
            <label>Time Zone</label>
            <select
              value={formData.timezone}
              onChange={(e) => handleFormChange("timezone", e.target.value)}
            >
              <option value="India Standard Time Zone (9:12 am)">
                India Standard Time Zone (9:12 am)
              </option>
              <option value="GMT">GMT</option>
              <option value="EST">EST</option>
              <option value="PST">PST</option>
            </select>
          </div>
          {formData.selectedDate && (
            <button className="continue-btn" onClick={handleContinue}>
              Continue
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DateSelection;
