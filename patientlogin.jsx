import React from 'react';
import './patientLogin.css';

export default function PatientLogin() {
  return (
    <div className="patient-login-container">
      <div className="login-card">
        <h2 className="login-title">Patient Login</h2>
        <form className="login-form">
          <label htmlFor="wallet-address" className="login-label">Wallet Address</label>
          <input
            type="text"
            id="wallet-address"
            placeholder="Enter your wallet address (0x...)"
            className="login-input"
          />

          <label htmlFor="password" className="login-label">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="login-input"
          />

          <button type="submit" className="login-button">Login</button>
        </form>

        <div className="login-footer">
          <a href="#" className="forgot-password">Forgot Password?</a>
          <p>Don't have an account? <a href="#" className="register-link">Register here</a></p>
        </div>
      </div>
    </div>
  );
} 
