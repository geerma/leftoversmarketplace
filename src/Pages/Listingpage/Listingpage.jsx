import React from "react";
import "./listingpage.css";
import { Header } from "../../Components";

const Listingpage = () => {
  return (
    <div className="listing_container">
      <div>
        <Header />
      </div>
      <h1>List an Item</h1>
      <div className="listing_inputs">
        <form className="listing_inputs">
          <label>Price</label>
          <input />

          <label>Expiration Date</label>
          <input />

          <label>Name of Item</label>
          <input />

          <label>Description</label>
          <input />
          <label>Major Allergens</label>
          <input />
          <label>Upload a Picture</label>
          <input type="file" id="photo" name="photo" accept="image/*" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Listingpage;
