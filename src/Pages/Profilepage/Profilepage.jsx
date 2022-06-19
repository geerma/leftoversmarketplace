import React, { useState, useEffect } from "react";
import "./profilepage.css";

import { Header, TransactionListing } from "../../Components";
import profileImage from "../../Assets/Profile/Profile.png";
import profileImageLarge from "../../Assets/Profile/ProfileLarge.png";
import chatImage from "../../Assets/Profile/Chat.png";
import historyImage from "../../Assets/Profile/History.png";
import exitImage from "../../Assets/Profile/Exit.png";
import settingsImage from "../../Assets/Profile/Settings.png";

const Profile = () => {
  const [sold, setSold] = useState([
    {
      image: "Image",
      item_name: "Text1",
    },
    {
      image: "Image",
      item_name: "Text2",
    },
    {
      image: "Image",
      item_name: "Text3",
    },
    {
      image: "Image",
      item_name: "Text4",
    },
  ]);

  return (
    <div className="profile_menu">
      <h1>Profile</h1>

      <div className="profile_menu_container">
        <img src={profileImageLarge} alt="profileimg" />
        <div className="profile_top_text">
          <h2>Name</h2>
          <h3>4.8 Stars</h3>
        </div>
        <div className="profile_bottom_text">
          <p>Based in Location</p>
        </div>
      </div>
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
  const [transaction, setTransaction] = useState([
    {
      image: "Image",
      item_name: "Transaction 1",
    },
    {
      image: "Image",
      item_name: "Transaction 2",
    },
    {
      image: "Image",
      item_name: "Transaction 3",
    },
    {
      image: "Image",
      item_name: "Transaction 4",
    },
  ]);

  return (
    <div className="transaction_history_container">
      <h1>Transaction History</h1>
      <h2>Purchased</h2>
      <div className="transaction_history">
        {transaction.map((item, index) => (
          <TransactionListing
            image={item.image}
            item_name={item.item_name}
            key={item.text + index}
          />
        ))}
      </div>
      <h2>Sold</h2>
      <div className="sold_history">
      {transaction.map((item, index) => (
          <TransactionListing
            image={item.image}
            item_name={item.item_name}
            key={item.text + index}
          />
        ))}
      </div>
    </div>
  );
};

const Exit = () => {
  return (
    <div>
      <h1>Exit</h1>
    </div>
  );
};

const Settings = () => {
  return (
    <div>
      <h1>Settings</h1>
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
          <button onClick={() => setProfileMenu("Profile")}>
            <img src={profileImage} alt="profileimg" />
          </button>
          <button onClick={() => setProfileMenu("Chats")}>
            <img src={chatImage} alt="profileimg" />
          </button>
          <button onClick={() => setProfileMenu("History")}>
            <img src={historyImage} alt="historyimg" />
          </button>
          <button onClick={() => setProfileMenu("Exit")}>
            <img src={exitImage} alt="exitimg" />
          </button>
          <button onClick={() => setProfileMenu("Settings")}>
            <img src={settingsImage} alt="settingsimg" />
          </button>
        </div>
        <div className="profile_info">
          {profileMenu === "Chats" ? (
            <Chats />
          ) : profileMenu === "History" ? (
            <TransactionHistory />
          ) : profileMenu === "Exit" ? (
            <Exit />
          ) : profileMenu === "Settings" ? (
            <Settings />
          ) : (
            <Profile />
          )}
        </div>
      </div>
    </div>
  );
};

export default Profilepage;
