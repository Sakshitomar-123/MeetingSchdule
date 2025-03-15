import React, { useState } from "react";
import DateSelection from "./DateSelection";
import TimeSelection from "./TimeSelection";
import DetailsForm from "./DetailsForm";
import Confirmation from "./Confirmation";
import JoinMeeting from "./JoinMeeting";
import Header from "./Header";
import Footer from "./Footer";

// Main App Component
function EventBooking() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    selectedDate: null,
    selectedTime: null,
    name: "",
    email: "",
    phone: "",
    otp: "",
    agreedToTerms: false,
    meetingCode: "",
    currentMonth: new Date(),
    timezone: "India Standard Time Zone (9:12 am)",
  });

  // Function to handle form data changes
  const handleFormChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to navigate to next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide + 1);
    window.scrollTo(0, 0);
  };

  // Function to navigate to a specific slide
  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
    window.scrollTo(0, 0);
  };

  // Render the current slide content
  const renderSlideContent = () => {
    switch (currentSlide) {
      case 0:
        return (
          <DateSelection
            formData={formData}
            handleFormChange={handleFormChange}
            nextSlide={nextSlide}
          />
        );
      case 1:
        return (
          <TimeSelection
            formData={formData}
            handleFormChange={handleFormChange}
            nextSlide={nextSlide}
          />
        );
      case 2:
        return (
          <DetailsForm
            formData={formData}
            handleFormChange={handleFormChange}
            nextSlide={nextSlide}
          />
        );
      case 3:
        return <Confirmation goToSlide={goToSlide} nextSlide={nextSlide} />;
      case 4:
        return (
          <JoinMeeting
            formData={formData}
            handleFormChange={handleFormChange}
          />
        );
      default:
        return (
          <DateSelection
            formData={formData}
            handleFormChange={handleFormChange}
            nextSlide={nextSlide}
          />
        );
    }
  };

  return (
    <div className="app-container">
      <Header />
      {renderSlideContent()}
      <Footer />
    </div>
  );
}

export default EventBooking;
