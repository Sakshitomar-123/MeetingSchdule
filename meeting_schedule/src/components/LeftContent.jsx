import React, { memo, useMemo } from "react";
import logo from "../assets/logo.png";

const LeftContent = ({ selectedDate, selectedTime }) => {
  // Compute display time only when selectedTime changes
  const formattedTime = useMemo(() => {
    if (!selectedTime) return null;
    return `${selectedTime} - ${parseInt(selectedTime) + 1}:00pm`;
  }, [selectedTime]);

  // Compute display date only when selectedDate changes
  const formattedDate = useMemo(() => {
    if (!selectedDate) return null;
    return selectedDate.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }, [selectedDate]);

  return (
    <div className="content-left">
      <div className="purple-banner">
        <div className="banner-logo">
          <img src={logo} alt="Logo" />
        </div>
      </div>
      <div className="company-info">
        <div className="small-logo">
          <img src={logo} width={40} alt="Small Logo" />
        </div>
        <p>SD Campus ED-Tech PVT Ltd.</p>
        <h2>Sainik & JNV Entrance Exam Demo Session: SD Campus</h2>
      </div>
      <div className="session-details">
        <div className="detail-item">
          <span className="icon">⏱</span>
          <span>45 Mins</span>
        </div>
        <div className="detail-item">
          <span className="icon">🖥</span>
          <span>Web Conferencing Details Provided Upon Confirmation.</span>
        </div>
        {formattedTime && formattedDate && (
          <>
            <div className="detail-item">
              <span className="icon">📅</span>
              <span>
                {formattedTime}, {formattedDate}
              </span>
            </div>
            <div className="detail-item">
              <span className="icon">🌐</span>
              <span>India Standard Time</span>
            </div>
          </>
        )}
      </div>
      <div className="session-description">
        <p>
          SD Campus is Inviting You To Join FREE Demo Session For Sainik & JNV
          Entrance Exam.
        </p>
        <p>
          Join Us For An Informative Demo Session To Understand The Details,
          Syllabus, And Preparation Strategies For The Upcoming Sainik And
          Jawahar Navodaya Vidyalaya (JNV) Entrance Exams. This Session Will
          Provide Valuable Insights Into The Exam Pattern, Tips For Success, And
          Guidance On How To Effectively Prepare For These Competitive Exams.
        </p>
        <p>
          Whether You're A Parent Or A Student, This Demo Will Help Clarify Any
          Doubts And Give You A Clearer Understanding Of What To Expect. Don't
          Miss Out On This Opportunity To Enhance Your Preparation!
        </p>
      </div>
      <div className="cookie-settings">
        <button>Cookie Settings</button>
        <button>Report Abuse</button>
      </div>
    </div>
  );
};

// Prevents unnecessary re-renders
export default memo(LeftContent);
