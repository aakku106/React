/** @format */

import React, { useState, useEffect } from "react";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simulate API call with delay to test lazy loading
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        setLoading(true);
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Simulate API response
        const userData = {
          id: 1,
          name: "Aakku Samma",
          email: "aakku@example.com",
          avatar: "https://via.placeholder.com/150",
          bio: "Full Stack Developer passionate about React and Node.js",
          location: "Nepal",
          joinDate: "January 2023",
          posts: 42,
          followers: 1234,
          following: 567
        };
        
        setUser(userData);
      } catch (err) {
        console.error("Profile loading error:", err);
        setError("Failed to load profile");
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>Loading Profile...</h2>
        <div style={{ 
          width: "50px", 
          height: "50px", 
          border: "5px solid #f3f3f3",
          borderTop: "5px solid #3498db",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
          margin: "20px auto"
        }}></div>
        <p>This component was lazily loaded!</p>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: "20px", color: "red", textAlign: "center" }}>
        <h2>Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div style={{ 
      padding: "20px", 
      maxWidth: "600px", 
      margin: "0 auto",
      border: "1px solid #ddd",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
    }}>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <img 
          src={user.avatar} 
          alt="Profile" 
          style={{ 
            width: "100px", 
            height: "100px", 
            borderRadius: "50%",
            marginBottom: "10px"
          }} 
        />
        <h1 style={{ margin: "10px 0", color: "#333" }}>{user.name}</h1>
        <p style={{ color: "#666", fontSize: "16px" }}>{user.email}</p>
      </div>
      
      <div style={{ marginBottom: "20px" }}>
        <h3 style={{ color: "#333", borderBottom: "2px solid #3498db", paddingBottom: "5px" }}>
          About
        </h3>
        <p style={{ lineHeight: "1.6", color: "#555" }}>{user.bio}</p>
        <p style={{ color: "#777" }}>
          📍 {user.location} • 📅 Joined {user.joinDate}
        </p>
      </div>

      <div style={{ 
        display: "flex", 
        justifyContent: "space-around",
        backgroundColor: "#f8f9fa",
        padding: "15px",
        borderRadius: "6px"
      }}>
        <div style={{ textAlign: "center" }}>
          <strong style={{ display: "block", fontSize: "18px", color: "#3498db" }}>
            {user.posts}
          </strong>
          <span style={{ color: "#666" }}>Posts</span>
        </div>
        <div style={{ textAlign: "center" }}>
          <strong style={{ display: "block", fontSize: "18px", color: "#3498db" }}>
            {user.followers}
          </strong>
          <span style={{ color: "#666" }}>Followers</span>
        </div>
        <div style={{ textAlign: "center" }}>
          <strong style={{ display: "block", fontSize: "18px", color: "#3498db" }}>
            {user.following}
          </strong>
          <span style={{ color: "#666" }}>Following</span>
        </div>
      </div>

      <div style={{ 
        marginTop: "20px", 
        padding: "10px", 
        backgroundColor: "#e8f5e8", 
        borderRadius: "4px",
        textAlign: "center"
      }}>
        <small style={{ color: "#2d8632" }}>
          ✅ This Profile component was loaded lazily!
        </small>
      </div>
    </div>
  );
}
