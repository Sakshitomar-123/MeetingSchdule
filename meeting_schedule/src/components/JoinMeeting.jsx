import React, { useState } from "react";

const JoinMeeting = ({ formData, handleFormChange }) => {
  const [isJoining, setIsJoining] = useState(false);

  const handleChange = (e) => {
    handleFormChange("meetingCode", e.target.value);
  };

  const handleJoin = (e) => {
    e.preventDefault();
    setIsJoining(true);
    // Simulate joining a meeting
    setTimeout(() => {
      alert("You have successfully joined the meeting!");
      setIsJoining(false);
    }, 2000);
  };

  return (
    <div className="join-meeting-container">
      <div className="join-meeting-card">
        <div className="meeting-header">
          <h2>Join SD Campus Demo Session</h2>
        </div>
        <form onSubmit={handleJoin}>
          <div className="form-group">
            <label>Enter Meeting Code or Link</label>
            <input
              type="text"
              value={formData.meetingCode}
              onChange={handleChange}
              placeholder="Meeting code or link"
              required
            />
          </div>
          <button
            type="submit"
            className="join-btn"
            disabled={!formData.meetingCode || isJoining}
          >
            {isJoining ? "Joining..." : "Join Meeting"}
          </button>
        </form>
        <div className="meeting-info">
          <p>Your scheduled session: Sainik & JNV Entrance Exam Demo</p>
          <p>
            Time:{" "}
            {formData.selectedDate && formData.selectedTime
              ? `${formData.selectedDate.toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })} at ${formData.selectedTime}`
              : "Date and time not selected"}
          </p>
          <p>Duration: 45 Minutes</p>
        </div>
      </div>
    </div>
  );
};

export default JoinMeeting;
