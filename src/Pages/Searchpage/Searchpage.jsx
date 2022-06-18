import React from "react";
import "./searchpage.css";

import { Header } from "../../Components";
import { useState } from "react";

const FilterComponent = () => {
  return (
    <>
      <p>Toggled Filter</p>
      <input type="range" min="5" max="50" value="10" class="slider" id="price" />
      <input type="checkbox"></input>
      <label>Asian</label>
      <input type="checkbox"></input>
      <label>Baked Goods</label>
      <input type="checkbox"></input>
      <label>Vegetables</label>
      <input type="checkbox"></input>
      <label>Fruits</label>
      <input type="checkbox"></input>
      <label>Gluten Free</label>
      <input type="checkbox"></input>
      <label>Dried Goods</label>
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
        <input placeholder="Search here" />
        <button onClick={() => setFilter((filterToggle) => !filterToggle)}>
          Filter
        </button>
        {filter && <FilterComponent />}
      </div>
    </div>
  );
};

export default Searchpage;
