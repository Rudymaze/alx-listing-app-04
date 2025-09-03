import React from "react";
import Image from "next/image";

const accommodationTypes = [
  "Rooms",
  "Mansion",
  "Countryside",
  "Apartment",
  "Villa",
];

const Header: React.FC = () => {
  return (
    <header style={headerStyle}>
      <div style={logoStyle}>
        <Image
          src="/asset/ruddy.jpg"
          alt="Logo"
          width={40}
          height={40}
          style={{ height: "40px" }}
        />
        <span
          style={{ marginLeft: "8px", fontWeight: "bold", fontSize: "1.5rem" }}>
          Property Listings
        </span>
      </div>
      <div style={searchBarStyle}>
        <input
          type="text"
          placeholder="Search properties..."
          style={searchInputStyle}
          aria-label="Search properties"
        />
        <button type="submit" style={searchButtonStyle} aria-label="Search">
          🔍
        </button>
      </div>
      <nav style={navStyle}>
        <ul style={navListStyle}>
          {accommodationTypes.map((type) => (
            <li key={type} style={navItemStyle}>
              <a href={`#${type.toLowerCase()}`} style={navLinkStyle}>
                {type}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div style={authButtonsStyle}>
        <button style={signInButtonStyle}>Sign In</button>
        <button style={signUpButtonStyle}>Sign Up</button>
      </div>
    </header>
  );
};

// Inline styles for simplicity; can be replaced with CSS or styled-components
const headerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px 20px",
  backgroundColor: "#f8f9fa",
  borderBottom: "1px solid #ddd",
  flexWrap: "wrap",
};

const logoStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  flex: "1 1 150px",
  minWidth: "150px",
};

const searchBarStyle: React.CSSProperties = {
  display: "flex",
  flex: "2 1 300px",
  maxWidth: "400px",
  margin: "0 20px",
};

const searchInputStyle: React.CSSProperties = {
  flex: 1,
  padding: "8px 12px",
  border: "1px solid #ccc",
  borderRadius: "4px 0 0 4px",
  fontSize: "1rem",
};

const searchButtonStyle: React.CSSProperties = {
  padding: "8px 12px",
  border: "1px solid #ccc",
  borderLeft: "none",
  borderRadius: "0 4px 4px 0",
  backgroundColor: "#007bff",
  color: "white",
  cursor: "pointer",
  fontSize: "1rem",
};

const navStyle: React.CSSProperties = {
  flex: "3 1 400px",
  minWidth: "200px",
};

const navListStyle: React.CSSProperties = {
  display: "flex",
  listStyle: "none",
  padding: 0,
  margin: 0,
  justifyContent: "center",
  gap: "15px",
  flexWrap: "wrap",
};

const navItemStyle: React.CSSProperties = {};

const navLinkStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "#333",
  fontWeight: "500",
  fontSize: "1rem",
  cursor: "pointer",
};

const authButtonsStyle: React.CSSProperties = {
  display: "flex",
  gap: "10px",
  flex: "1 1 150px",
  justifyContent: "flex-end",
  minWidth: "150px",
};

const signInButtonStyle: React.CSSProperties = {
  padding: "8px 16px",
  backgroundColor: "transparent",
  border: "1px solid #007bff",
  borderRadius: "4px",
  color: "#007bff",
  cursor: "pointer",
  fontSize: "1rem",
};

const signUpButtonStyle: React.CSSProperties = {
  padding: "8px 16px",
  backgroundColor: "#007bff",
  border: "none",
  borderRadius: "4px",
  color: "white",
  cursor: "pointer",
  fontSize: "1rem",
};

export default Header;
