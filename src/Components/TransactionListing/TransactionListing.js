import React from "react";
import "./transactionListing.css";

const TransactionListing = ({ image, item_name }) => {
  return (
    <div className="transactionlisting_box">
      <div className="transactionimage_box">Item Image: {image}</div>
      <p>{item_name}</p>
    </div>
  );
};

export default TransactionListing;
