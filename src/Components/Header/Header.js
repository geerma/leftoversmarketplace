import React from "react";
import "./header.css";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const navgiate = useNavigate();

  return (
    <div>
      <header>Leftovers Marketplace</header>
      <div>
        <button onClick={() => navgiate("/")}>Welcome</button>
        <button onClick={() => navgiate("/homepage")}>Home</button>
        <button onClick={() => navgiate("/leftoverspage")}>Leftovers</button>
        <button onClick={() => navgiate("/profilepage")}>Profile</button>
        <button onClick={() => navgiate("/")}>Sign In</button>
        <button onClick={() => navgiate("/homepage")}>Sign Out</button>
      </div>
    </div>
  );
};

export default Header;
