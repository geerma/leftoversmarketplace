import React from "react";
import "./individuallisting.css";
import { useNavigate } from "react-router-dom";

const IndividualListing = ({ image, item_name, item_description }) => {
  const navigate = useNavigate();

  return (
    <div className="individuallisting_box">
      <div className="individualimage_box"> </div>
      <h1>{item_name}</h1>
      <p>Three Onions from Whole Foods, bought them two days ago</p>
    </div>
  );
};

export default IndividualListing;
