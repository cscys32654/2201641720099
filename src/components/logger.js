// src/utils/loggerUtils.js
const formatTime = () => new Date().toLocaleString();

export const logEvent = (message, data = {}) => {
  try {
    const logEntry = {
      id: Date.now() + Math.random().toString(36).substr(2, 5),
      timestamp: formatTime(),
      message,
      details: data,
    };

    const existingLogs = JSON.parse(localStorage.getItem("logs")) || [];
    existingLogs.push(logEntry);
    const trimmedLogs = existingLogs.slice(-50);
    localStorage.setItem("logs", JSON.stringify(trimmedLogs));
  } catch (error) {
    console.error("Failed to log event:", error);
  }
};
