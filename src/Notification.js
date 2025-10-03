import React, { useState } from "react";
import { Toast, ToastContainer,  } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Notification.css";
import NotificationsTwoToneIcon from '@mui/icons-material/NotificationsTwoTone';


const Notification = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, text: "⏱  You are scheduled to assist on March 5, 10 AM.", category: "Reminder", timestamp: "2025-03-12 10:00 AM" },
    { id: 2, text: "⚠︎ A new blind student needs help!", category: "Alert", timestamp: "2025-03-12 2:30 PM" },
    { id: 3, text: "⏱︎ You are scheduled to assist on March 8, 3 PM.", category: "Reminder", timestamp: "2025-03-14 3:00 PM" }
  ]);

  const handleDismiss = (id) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
  };

  return (
    <div className="notifications-container">
      <h2><NotificationsTwoToneIcon/>Notifications</h2>
      <ToastContainer className="toast-container">
        {notifications.map((notification) => (
          <Toast key={notification.id} onClose={() => handleDismiss(notification.id)} className="custom-toast">
            <Toast.Header>
              <strong className="me-auto">{notification.category}</strong>
              <small>{notification.timestamp}</small>
            </Toast.Header>
            <Toast.Body>{notification.text}</Toast.Body>
          </Toast>
        ))}
      </ToastContainer>
    </div>
  );
};

export default Notification;
