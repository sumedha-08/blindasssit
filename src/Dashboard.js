import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import PersonIcon from '@mui/icons-material/Person';
import BlindIcon from '@mui/icons-material/Blind';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import HistoryToggleOffRoundedIcon from '@mui/icons-material/HistoryToggleOffRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

const Dashboard = () => {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [helpersCount, ] = useState(120); // Example count
  const [blindStudentsCount, ] = useState(45); // Example count
  const [profilesCount, ] = useState(200); // Example count
  const [unreadNotifications, setUnreadNotifications] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Simulating an API call to fetch unread notifications count
    setUnreadNotifications(3); // Example count
  }, []);

  return (
    <div className="dashboard">
      {/* Notification Badge in the Corner */}
      <div className="notification-icon" onClick={() => navigate("/notifications")}>
      <NotificationsActiveIcon/>
      {unreadNotifications > 0 && <span className="notification-badge">{unreadNotifications}</span>}
      </div>

      {/* Live Time & Date Display */}
      <p className="dashboard-time">
        <HistoryToggleOffRoundedIcon/> {currentTime.toLocaleTimeString()} | <CalendarMonthRoundedIcon/> {currentTime.toLocaleDateString()}
      </p>

      {/* Animated Welcome Banner */}
      <p className="dashboard-welcome">
        Hello, <strong>User!</strong> <RotateRightIcon/> Welcome back!
      </p>

      <h2>Welcome to Your Dashboard</h2>
      <p>Manage your activities and stay updated.</p>

      <div className="dashboard-cards">
        <div className="card" onClick={() => navigate("/helpers")}> 
          <div className="counter-box">{helpersCount}</div>
          <h3><HowToRegIcon/> <strong>Registered Helpers</strong></h3>
          <p>View and manage all registered helpers.</p>
        </div>

        <div className="card" onClick={() => navigate("/blind-students")}> 
          <div className="counter-box">{blindStudentsCount}</div>
          <h3><BlindIcon/> <strong>Blind Students</strong></h3>
          <p>See students who need assistance.</p>
        </div>

        <div className="card" onClick={() => navigate("/profile")}> 
          <div className="counter-box">{profilesCount}</div>
          <h3><PersonIcon/><strong>Profile</strong></h3>
          <p>View and edit your personal details.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;




