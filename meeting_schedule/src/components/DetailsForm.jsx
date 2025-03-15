import React from "react";
import LeftContent from "./LeftContent";
const DetailsForm = ({ formData, handleFormChange, nextSlide }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    handleFormChange(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would validate the OTP here
    nextSlide();
  };

  return (
    <div className="main-content">
      <LeftContent
        selectedDate={formData.selectedDate}
        selectedTime={formData.selectedTime}
      />
      <div className="content-right">
        <div className="form-container">
          <h2>Enter Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name*</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group">
              <label>Email*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                required
              />
            </div>
            <div className="form-group">
              <label>Enter Phone Number*</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your Number"
                required
              />
            </div>
            <div className="form-group">
              <label>Enter OTP*</label>
              <input
                type="text"
                name="otp"
                value={formData.otp}
                onChange={handleChange}
                placeholder="Enter OTP"
                required
              />
            </div>
            <div className="terms-checkbox">
              <input
                type="checkbox"
                id="terms"
                checked={formData.agreedToTerms}
                onChange={() =>
                  handleFormChange("agreedToTerms", !formData.agreedToTerms)
                }
                required
              />
              <label htmlFor="terms">
                By proceeding, you confirm that you have read and agree to
                <a href="#" className="terms-link">
                  {" "}
                  SD Campus Terms of Use
                </a>{" "}
                and
                <a href="#" className="terms-link">
                  {" "}
                  Privacy Notice
                </a>
                .
              </label>
            </div>
            <button
              type="submit"
              className="schedule-btn"
              disabled={
                !formData.agreedToTerms ||
                !formData.name ||
                !formData.email ||
                !formData.phone ||
                !formData.otp
              }
            >
              SCHEDULE EVENT
            </button>
            <p className="redirect-notice">
              You Will Be Redirected To An External Site.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
export default DetailsForm;
