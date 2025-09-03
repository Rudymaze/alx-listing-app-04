import React from "react";

const Footer: React.FC = () => {
  return (
    <footer style={footerStyle}>
      <div style={navLinksStyle}>
        <a href="/about" style={linkStyle}>
          About
        </a>
        <a href="/contact" style={linkStyle}>
          Contact
        </a>
        <a href="/privacy" style={linkStyle}>
          Privacy Policy
        </a>
      </div>
      <div style={socialLinksStyle}>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}>
          Facebook
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}>
          Twitter
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}>
          Instagram
        </a>
      </div>
      <div style={copyrightStyle}>
        &copy; 2023 Property Listings. All rights reserved.
      </div>
    </footer>
  );
};

const footerStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px",
  backgroundColor: "#f8f9fa",
  borderTop: "1px solid #ddd",
  fontSize: "0.9rem",
  color: "#555",
};

const navLinksStyle: React.CSSProperties = {
  display: "flex",
  gap: "15px",
  flex: "1 1 200px",
  justifyContent: "center",
};

const socialLinksStyle: React.CSSProperties = {
  display: "flex",
  gap: "15px",
  flex: "1 1 200px",
  justifyContent: "center",
};

const linkStyle: React.CSSProperties = {
  color: "#007bff",
  textDecoration: "none",
  cursor: "pointer",
};

const copyrightStyle: React.CSSProperties = {
  flex: "1 1 100%",
  textAlign: "center",
  marginTop: "10px",
  color: "#888",
};

export default Footer;
