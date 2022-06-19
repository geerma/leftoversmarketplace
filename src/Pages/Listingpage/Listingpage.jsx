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
        <input ></input>

        <label>Expiration Date</label>
        <input/>

        <label >Name of Item</label>
        <input />
        
        <label >Description</label>
        <input />
        <label>Major Allergens</label>
        <input />
        <button type="submit">Submit</button>
      </div>
    </div>
  );
};


export default Listingpage