import React from "react";
import "./listing.css";

const Listing = ({ image, item_name }) => {
  return (
    <div className="listing_box">
      <div className="image_box">Item Image: {image}</div>
      <p>{item_name}</p>
    </div>
  );
};

export default Listing;
