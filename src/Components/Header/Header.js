import React from "react";
import "./header.css";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header_container">
      <header>Leftovers Marketplace</header>
      <div className="header_links">
        <button onClick={() => navigate("/")}>Welcome</button>
        <button onClick={() => navigate("/homepage")}>Home</button>
        <button onClick={() => navigate("/searchpage")}>Search</button>
        <button onClick={() => navigate("/profilepage")}>Profile</button>
      </div>
      <div className="header_sign">
        <button onClick={() => navigate("/")}>Sign In</button>
        <button onClick={() => navigate("/homepage")}>Sign Out</button>
      </div>
    </div>
  );
};

export default Header;
