import React from "react";
import "./listing.css";
import { useNavigate } from "react-router-dom";

const Listing = ({
  image,
  item_name,
  item_description,
  item_type,
  item_price,
  key,
}) => {
  const navigate = useNavigate();

  const handleDetail = (name) => {
    navigate(`/individuallistingpage/${name}`, {
      state: image,
      name: item_name,
      description: item_description,
      itemType: item_type,
      price: item_price,
    });
  };

  return (
    <div className="listing_box" onClick={() => handleDetail(item_name)}>
      <div className="image_box"> </div>
      <p>{item_name}</p>
    </div>
  );
};

export default Listing;
