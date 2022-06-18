import React from 'react'
import './listingpage.css'
import { Header } from "../../Components";

const Listingpage = () => {
  return (
    <div className="listing_container">
      <div>
        <Header />
      </div>
      <h1>List an Item</h1>
      <div className="listing_inputs">
        <label>Price</label>
        <input />
        <label>Expiration Date</label>
        <input />
        <label >Name of Item</label>
        <input placeholder="What are you listing"/>
        <label >Description</label>
        <input placeholder="Describe the item"/>
        <label>Ingredients & Allergens</label>
        <input placeholder="Please indicate if item contains nuts, dairy, gluten, etc."/>
        <button type="submit">Submit</button>
      </div>
    </div>
  );
};


export default Listingpage