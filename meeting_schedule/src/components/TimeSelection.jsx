import React, { useState } from "react";
import LeftContent from "./LeftContent";

const TimeSelection = ({ formData, handleFormChange, nextSlide }) => {
  const handleTimeSelect = (time) => {
    handleFormChange("selectedTime", time);
  };

  const handleContinue = () => {
    if (formData.selectedTime) {
      nextSlide();
    }
  };

  const availableTimes = [
    { time: "5:00pm", slots: 10 },
    { time: "6:00pm", slots: 5 },
    { time: "7:00pm", slots: 2 },
  ];

  return (
    <div className="main-content">
      <LeftContent selectedDate={formData.selectedDate} />
      <div className="content-right">
        <div className="selection-container">
          <h2>Select A Time</h2>
          <div className="selected-date">
            <h3>
              {formData.selectedDate.toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </h3>
            <p>Time You're Available</p>
          </div>
          <div className="time-slots">
            {availableTimes.map((slot, index) => (
              <div
                key={index}
                className={`time-slot ${
                  formData.selectedTime === slot.time ? "selected" : ""
                }`}
                onClick={() => handleTimeSelect(slot.time)}
              >
                <div className="time">{slot.time}</div>
                <div className="slots-left">{slot.slots} spots left</div>
              </div>
            ))}
          </div>
          {formData.selectedTime && (
            <button className="continue-btn" onClick={handleContinue}>
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimeSelection;
