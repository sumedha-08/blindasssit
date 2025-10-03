import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterHelper.css";
import { Eye, EyeOff } from "lucide-react";

const RegisterHelper = () => {
  const [isRegistering, setIsRegistering] = useState(true); // Toggle between Register & Login
  const [helper, setHelper] = useState({
    name: "",
    mobile: "",
    password: "", // Added password state for registration
    availability: "",
  });
  const [loginData, setLoginData] = useState({ mobile: "", password: "" }); // State for login
  const [showPassword, setShowPassword] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  const navigate = useNavigate();

  // Handle input changes for registration
  const handleChange = (e) => {
    setHelper({ ...helper, [e.target.name]: e.target.value });
  };

  // Handle input changes for login
  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  // Handle registration submission
  const handleRegister = (e) => {
    e.preventDefault();
    alert("✅Registration Successful! You will get a reminder before the exam.");
    navigate("/"); // Redirect to Home
  };

  // Handle login submission
  const handleLogin = (e) => {
    e.preventDefault();
    alert("✅Login Successful! Welcome Back.");
    navigate("/dashboard"); // Redirect to Dashboard after login
  };

  return (
    <div className="register-helper">
      <h2>{isRegistering ? "Register as a Helper" : "Helper Login"}</h2>

      {isRegistering ? (
        // Registration Form
        <form onSubmit={handleRegister}>
          <label className="labels">Name:</label>
          <input
            type="text"
            name="name"
            value={helper.name}
            onChange={handleChange}
            required
          />

          <label className="labels">Mobile Number:</label>
          <input
            type="tel"
            name="mobile"
            value={helper.mobile}
            onChange={handleChange}
            pattern="[0-9]{10}"
            required
          />

          <label className="labels">Password:</label>
          <div className="password-wrapper">
  <input
    type={showPassword ? "text" : "password"}
    name="password"
    value={helper.password}
    onChange={handleChange}
    required
    className="password-input"
  />
  <span
    className="eye-icon"
    onClick={() => setShowPassword(!showPassword)}
  >
    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
  </span>
</div>


          <label className="labels">Availability:</label>
          <select name="availability" value={helper.availability} onChange={handleChange} required>
            <option value="">Select Availability</option>
            <option value="Weekdays">Weekdays</option>
            <option value="Weekends">Weekends</option>
            <option value="Flexible">Flexible</option>
          </select>

          <button type="submit">Register</button>
        </form>
      ) : (
        // Login Form
        <form onSubmit={handleLogin}>
          <label className="labels">Mobile Number:</label>
          <input
            type="tel"
            name="mobile"
            value={loginData.mobile}
            onChange={handleLoginChange}
            pattern="[0-9]{10}"
            required
          />

          <label className="labels">Password:</label>
          <div className="password-wrapper">
  <input
    type={showLoginPassword ? "text" : "password"}
    name="password"
    value={loginData.password}
    onChange={handleLoginChange}
    required
    className="password-input"
  />
  <span
    className="eye-icon"
    onClick={() => setShowLoginPassword(!showLoginPassword)}
  >
    {showLoginPassword ? <EyeOff size={20} /> : <Eye size={20} />}
  </span>
</div>


          <button type="submit">Login</button>
        </form>
      )}

      {/* Toggle between Register and Login */}
      <p className="toggle-text">
        {isRegistering ? "Already registered?" : "New here?"} {" "}
        <span onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? "Login" : "Register"}
        </span>
      </p>
    </div>
  );
};

export default RegisterHelper;
