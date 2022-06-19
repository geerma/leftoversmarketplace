import React from "react";
import "./listing.css";
import { useNavigate } from "react-router-dom";

const Listing = ({ image, item_name }) => {

  const navigate = useNavigate();

  const handleDetail = (name) => {
    navigate(`/individuallistingpage/${name}`, {state: image});
  };

  return (
    <div className="listing_box" onClick={() => handleDetail(item_name)}>
      <div className="image_box"> </div>
      <p>{item_name}</p>
    </div>
  );
};

export default Listing;
