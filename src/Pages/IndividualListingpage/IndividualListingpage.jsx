import React from "react";
import "./individuallistingpage.css";
import { Header, IndividualListing } from "../../Components";
import { useParams, useLocation } from "react-router-dom";

const IndividualListingpage = () => {
  const params = useParams();
  const itemId = params.itemId;

  const { state } = useLocation();
  const { id } = state || {};

  return (
    <div className="individuallisting_container">
      <div>
        <Header />
      </div>
      <IndividualListing image={id} item_name={itemId} key={itemId} />
    </div>
  );
};

export default IndividualListingpage;
