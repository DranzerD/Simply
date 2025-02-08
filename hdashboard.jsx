import React from 'react';
import { Search, Link } from "lucide-react";
import './hdashboard1.css';

export default function DoctorDashboard() {
  return (
    <div className="doctor-dashboard-container">
      <nav className="navbar">
        <div className="navbar-brand">
          <Link className="navbar-brand-icon" />
          <span>HealthChain</span>
        </div>
        <div className="navbar-links">
          <a href="#" className="navbar-link active">Dashboard</a>
          <a href="#" className="navbar-link">Access Logs</a>
          <a href="#" className="navbar-link">Profile</a>
        </div>
        <button className="upload-button">Upload New Record</button>
      </nav>

      <main className="dashboard-content">
        <div className="search-card card">
          <label className="search-label">Search for Patients</label>
          <div className="search-input-group">
            <input
              type="text"
              placeholder="Search by Patient Wallet Address (0x...)"
              className="search-input"
            />
            <button className="search-button">
              <Search className="search-icon" /> Search
            </button>
          </div>
        </div>

        <div className="records-grid">
          {['0x4a3b...c7d8', '0x5b6c...d9e0'].map((address, index) => (
            <div className="record-card card" key={index}>
              <div className="card-header">
                <h3 className="card-title">{address}</h3>
                <p className="record-date">Updated {index === 0 ? '2 days' : '1 week'} ago</p>
              </div>
              <div className="card-content">
                <div className={`status-badge ${index === 0 ? 'pending' : 'granted'}`}>
                  {index === 0 ? 'Pending Access' : 'Access Granted'}
                </div>
                <div className="actions">
                  {index === 0 ? (
                    <button className="request">Request Access</button>
                  ) : (
                    <button className="view">View Records</button>
                  )}
                  <button className="delete">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
