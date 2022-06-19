import React from "react";
import "./searchpage.css";

import { Header } from "../../Components";
import { useState } from "react";
import {girl} from "../../Assets/searchGirl.png"


const FilterComponent = () => {
  return (
    <>
    <p>Price Range</p>
      <div className="filter_slider">
        <label>$1</label>
        <input type="range" min="1" max="50" value="20" class="slider" id="price" />
        <label>$50</label>
        
      </div>
      <p>Categories</p>
      <div className="filter_checkboxes">
        <label for="meals">
          <input id="meals" type="checkbox"/> Meals
        </label>

        <label for="bakedgoods">
          <input id="bakedgoods" type="checkbox"/> Baked Goods
        </label>

        <label for="veg">
          <input id="veg" type="checkbox"/> Vegetables
        </label>

        <label for="fruits">
          <input id="fruits" type="checkbox"/> Fruits
        </label>

        <label for="gluten">
          <input id="gluten" type="checkbox"/> Gluten-free
        </label>
        <label for="dried">
          <input id="dried" type="checkbox"/> Dried Goods
        </label>
      </div>
        
      
    </>
  );
};

const Searchpage = () => {
  const [filter, setFilter] = useState(false);
  

  return (
    <div className="search_container">
      <div>
        <Header />
      </div>
      <div className="search_inner_container">
        <h4>Looking for something?</h4>
        <div className="search_inner_functions">
          <input placeholder="Search here" />
          <button onClick={() => setFilter((filterToggle) => !filterToggle)}>
            Filter
          </button>
        </div>
        <div className="filter">
          {filter && <FilterComponent />}
        </div>
       
      </div>
    </div>
  );

};

export default Searchpage;
