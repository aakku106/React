/** @format */

import React, { useState, lazy, Suspense } from "react";

const LazyComponent = lazy(() => 
  // Add artificial delay to better demonstrate lazy loading
  new Promise(resolve => {
    setTimeout(() => {
      resolve(import("../Components/Profile"));
    }, 1000); // 1 second delay
  })
);

export default function LazyLoadingExample() {
  const [showProfile, setShowProfile] = useState(false);
  
  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", color: "#333" }}>Lazy Loading Example</h1>
      
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <p style={{ marginBottom: "20px", color: "#666" }}>
          Click the button below to dynamically load the Profile component. 
          The component will only be loaded when you request it!
        </p>
        
        <button 
          onClick={() => setShowProfile(!showProfile)}
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            backgroundColor: showProfile ? "#e74c3c" : "#3498db",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "background-color 0.3s"
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = showProfile ? "#c0392b" : "#2980b9";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = showProfile ? "#e74c3c" : "#3498db";
          }}
        >
          {showProfile ? "🔼 Hide Profile" : "🔽 Show Profile (Lazy Load)"}
        </button>
      </div>

      {showProfile && (
        <div style={{ 
          border: "2px dashed #3498db", 
          borderRadius: "8px", 
          padding: "20px",
          backgroundColor: "#f8f9fa"
        }}>
          <Suspense fallback={
            <div style={{ 
              textAlign: "center", 
              padding: "40px",
              fontSize: "18px",
              color: "#3498db"
            }}>
              <div style={{
                width: "40px",
                height: "40px",
                border: "4px solid #f3f3f3",
                borderTop: "4px solid #3498db",
                borderRadius: "50%",
                animation: "spin 1s linear infinite",
                margin: "20px auto"
              }}></div>
              <p>🚀 Loading Profile Component...</p>
              <small style={{ color: "#666" }}>
                (This demonstrates React.lazy() in action)
              </small>
              <style>{`
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              `}</style>
            </div>
          }>
            <LazyComponent />
          </Suspense>
        </div>
      )}
      
      {!showProfile && (
        <div style={{ 
          textAlign: "center", 
          padding: "40px",
          backgroundColor: "#fff3cd",
          border: "1px solid #ffeaa7",
          borderRadius: "6px",
          color: "#856404"
        }}>
          <h3>💡 Lazy Loading Benefits:</h3>
          <ul style={{ textAlign: "left", maxWidth: "400px", margin: "0 auto" }}>
            <li>Reduces initial bundle size</li>
            <li>Faster page load times</li>
            <li>Components load only when needed</li>
            <li>Better user experience</li>
          </ul>
        </div>
      )}
    </div>
  );
}
