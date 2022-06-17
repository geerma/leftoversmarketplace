import React from "react";
import "./header.css";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const navgiate = useNavigate();

  return (
    <div className="header_container">
      <header>Leftovers Marketplace</header>
      <div className="header_links">
        <button onClick={() => navgiate("/")}>Welcome</button>
        <button onClick={() => navgiate("/homepage")}>Home</button>
        <button onClick={() => navgiate("/leftoverspage")}>Leftovers</button>
        <button onClick={() => navgiate("/profilepage")}>Profile</button>
      </div>
      <div className="header_sign">
        <button onClick={() => navgiate("/")}>Sign In</button>
        <button onClick={() => navgiate("/homepage")}>Sign Out</button>
      </div>
    </div>
  );
};

export default Header;
