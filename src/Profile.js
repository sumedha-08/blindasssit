import React, { useState } from "react";
import "./Profile.css"; // Import the updated styles

const Profile = () => {
  // Sample user data (This will later come from MongoDB)
  const [user, ] = useState({
    name: "Sumedha Donolikar",
    age: "22",
    gender: "Female",
    email: "sum@gmail.com",
    mobile: "9876543210",
    location: "Pune, Maharashtra",
    experience: "2 years",
    role: "Helper",
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl2BZeBiBai8wF9CMfFXrhXN3LAnMC8L0anmZxZXxzey7_qR8oF3pJVQ52KiebJQHBZrI&usqp=CAU", // Placeholder Image
  });

  return (
    <div className="profile-wrapper">
      <div className="profile-container">
        <div className="profile-header">
          <img src={user.profilePic} alt="Profile" className="profile-pic" />
          <h2>{user.name}</h2>
          <p className="role">{user.role}</p>
        </div>

        <div className="profile-details">
          <p><strong>Age:</strong> {user.age}</p>
          <p><strong>Gender:</strong> {user.gender}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Mobile:</strong> {user.mobile}</p>
          <p><strong>Location:</strong> {user.location}</p>
          <p><strong>Experience of Assistance:</strong> {user.experience}</p>
        </div>

        <div className="profile-actions">
          <button className="edit-btn">Edit Profile</button>
          <button className="logout-btn">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

