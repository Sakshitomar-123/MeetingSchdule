import React from "react";
const Confirmation = ({ goToSlide, nextSlide }) => {
  const handleGoToHome = () => {
    goToSlide(0);
  };

  const handleContinue = () => {
    // nextSlide();
  };

  return (
    <div className="confirmation-container">
      <div className="confirmation-card">
        <div className="confirmation-icon">
          <div className="smiley">
            <div className="face">
              <div className="eyes"></div>
              <div className="mouth"></div>
            </div>
          </div>
        </div>
        <h2>Thanks For Submitting!</h2>
        <p>If You Would Like To Proceed, Click The Link To Continue.</p>
        <div className="meeting-link">
          <a
            href="https://meet.google.com/ckj-cbns-jfp"
            // onClick={(e) => {
            //   e.preventDefault();
            //   handleContinue();
            // }}
            target="_blank"
          >
            https://Www.Sdcampus.Com/School-Entrance-Exams?Assigned_to=SD+Campus&Event_type_uuid=486db509-06cc-4aca-895a-2620b549ee5e%26+JNV+Entrance+Exam+Demo+Session%3A+SD+Campus&Event_start_time=2025-04-01T17%3A00%3A00%2B05%3A30&Event_end_time=2025-04-01T17%3A45%3A00%2B05%3A30&Invitee_uuid=53f832d1-9dda-432f-9b7a-07f8d22341519&invitee_first_name=&invitee_last_name=&invitee_full_name=Vishal+Pandeyvishal9504@gmail.Com&Text_reminder_number=6&Answer_1=%2BRD1+B7D7=9D788
          </a>
        </div>
        <div className="confirmation-buttons">
          <button className="home-btn" onClick={handleGoToHome}>
            GO TO HOME
          </button>
          <button className="continue-btn" onClick={handleContinue}>
            CONTINUE
          </button>
        </div>
      </div>
    </div>
  );
};
export default Confirmation;
