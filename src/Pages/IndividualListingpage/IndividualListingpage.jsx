import React from "react";
import "./individuallistingpage.css";
import { Header, IndividualListing } from "../../Components";
import { useParams, useLocation } from "react-router-dom";

const IndividualListingpage = () => {
  const params = useParams();
  const itemId = params.itemId;
  const item_name = params.name;
  const item_description = params.description;

  const { state } = useLocation();
  const { id } = state || {};

  return (
    <div className="individuallisting_container">
      <div>
        <Header />
      </div>
      {console.log(params)}
      <IndividualListing image={id} item_name={itemId} item_description={item_description} />
    </div>
  );
};

export default IndividualListingpage;
