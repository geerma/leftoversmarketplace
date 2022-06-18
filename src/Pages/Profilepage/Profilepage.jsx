import React, { useState, useEffect } from "react";
import "./profilepage.css";

import { Header } from "../../Components";
import profileImage  from "../../Assets/Profile/Profile.png"
import chatImage from "../../Assets/Chat.png"
import tomato from "../../Assets/tomato.png"

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
    </div>
  );
};

const Chats = () => {
  return (
    <div>
      <h1>Chats</h1>
    </div>
  );
};

const TransactionHistory = () => {
  return (
    <div>
      <h1>TransactionHistory</h1>
    </div>
  );
};

const Profilepage = () => {
  const [profileMenu, setProfileMenu] = useState("Profile");

  return (
    <div className="profile_container">
      <div>
        <Header />
      </div>
      <div className="profile_box">
        <div className="profile_icons">
          <button onClick={() => setProfileMenu("Profile")}><img src={profileImage} alt="profileimg" /></button>
          <button onClick={() => setProfileMenu("Chats")}><img src={chatImage} alt="profileimg" /></button>
          <button onClick={() => setProfileMenu("History")}>History</button>
          <button onClick={() => setProfileMenu("Exit")}>Exit</button>
          <button onClick={() => setProfileMenu("Settings")}>Settings</button>
          <img src={tomato} alt="tomato" />
        </div>
        <div className="profile_info">
          {profileMenu === "Chats" ? (
            <Chats />
          ) : profileMenu === "History" ? (
            <TransactionHistory />
          ) : (
            <Profile />
          )}
        </div>
      </div>
    </div>
  );
};

export default Profilepage;
