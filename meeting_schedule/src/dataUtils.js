// dateUtils.js

/**
 * Get the number of days in a month
 * @param {number} year - The year
 * @param {number} month - The month (0-11)
 * @returns {number} Number of days in the month
 */
export const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };
  
  /**
   * Get the first day of the month (0 = Sunday, 1 = Monday, etc.)
   * @param {number} year - The year
   * @param {number} month - The month (0-11)
   * @returns {number} The day of the week (0-6)
   */
  export const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };
  
  /**
   * Check if a date is today
   * @param {Date} date - The date to check
   * @returns {boolean} True if the date is today
   */
  export const isToday = (date) => {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  };
  
  /**
   * Check if a date is in the future
   * @param {Date} date - The date to check
   * @returns {boolean} True if the date is in the future
   */
  export const isInFuture = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date >= today;
  };
  
  /**
   * Format a date as a string (e.g., "Monday, January 1")
   * @param {Date} date - The date to format
   * @returns {string} The formatted date string
   */
  export const formatDate = (date) => {
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };
  
  /**
   * Format a time as a string (e.g., "5:00 PM")
   * @param {string} timeString - The time string (e.g., "17:00")
   * @returns {string} The formatted time string
   */
  export const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minutes} ${ampm}`;
  };
  
  /**
   * Generate time slots for a given date
   * @param {Date} date - The date to generate time slots for
   * @returns {Array} Array of time slots
   */
  export const generateTimeSlots = (date) => {
    // This is a simplified example; in a real app, you'd likely fetch 
    // available time slots from an API
    return [
      { time: '09:00', label: '9:00 AM', available: true, spotsLeft: 100 },
      { time: '10:00', label: '10:00 AM', available: true, spotsLeft: 85 },
      { time: '11:00', label: '11:00 AM', available: true, spotsLeft: 50 },
      { time: '13:00', label: '1:00 PM', available: true, spotsLeft: 75 },
      { time: '14:00', label: '2:00 PM', available: true, spotsLeft: 90 },
      { time: '15:00', label: '3:00 PM', available: true, spotsLeft: 95 },
      { time: '16:00', label: '4:00 PM', available: true, spotsLeft: 98 },
      { time: '17:00', label: '5:00 PM', available: true, spotsLeft: 100 }
    ];
  };