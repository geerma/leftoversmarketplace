import React from "react";
import "./listing.css";
import onion from "../../Assets/onion.jpg";

const Listing = ({ image, item_name }) => {
  return (
    <div className="listing_box">
      <div className="image_box"> </div>
      <p>{item_name}</p>
    </div>
  );
};

export default Listing;
