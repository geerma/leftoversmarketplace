import React, { useState, useEffect } from "react";
import "./profilepage.css";

import { Header, TransactionListing } from "../../Components";
import profileImage from "../../Assets/Profile/Profile.png";
import profileImageLarge from "../../Assets/Profile/ProfileLarge.png";
import chatImage from "../../Assets/Profile/Chat.png";
import historyImage from "../../Assets/Profile/History.png";
import settingsImage from "../../Assets/Profile/Settings.png";
import convoImage from "../../Assets/Profile/chatpic.png";

const Profile = () => {


  return (
    <div className="profile_menu">
      <h1>Profile</h1>

      <div className="profile_menu_container">
        <img src={profileImageLarge} alt="profileimg" />
        <div className="profile_top_text">
          <h2>August Young</h2>
          <h3>4.8 Stars</h3>
        </div>
      </div>
    </div>
  );
};

const Chats = () => {
  return (
    <div className="conversation_page">
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

  const [sold, setSold] = useState([
    {
      image: "Image",
      item_name: "Sold 1",
    },
    {
      image: "Image",
      item_name: "Sold 2",
    },
    {
      image: "Image",
      item_name: "Sold 3",
    },
    {
      image: "Image",
      item_name: "Sold 4",
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
      {sold.map((item, index) => (
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

const Settings = () => {
  return (
    <div className="settings_container">
      <h1>Settings</h1>
      <button>Verify your Profile</button>
      <button>Report a User for Abuse</button>
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
          <button onClick={() => setProfileMenu("Settings")}>
            <img src={settingsImage} alt="settingsimg" />
          </button>
        </div>
        <div className="profile_info">
          {profileMenu === "Chats" ? (
            <Chats />
          ) : profileMenu === "History" ? (
            <TransactionHistory />
          )  : profileMenu === "Settings" ? (
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
