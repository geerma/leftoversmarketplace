import React, { useState, useEffect } from "react";
import "./homepage.css";

import { Header } from "../../Components";
import { useNavigate } from "react-router-dom";
import Listing from "../../Components/Listing/Listing";

import tomato from "../../Assets/tomato.png";
import bread from "../../Assets/bread.png";
import lettuce from "../../Assets/lettuce.png";

const Homepage = () => {
  const navigate = useNavigate();
  const [list, setList] = useState([
    {
      image: "Image",
      item_name: "Text1",
    },
    {
      image: "Image",
      item_name: "Text2",
    },
    {
      image: "Image",
      item_name: "Text3",
    },
    {
      image: "Image",
      item_name: "Text4",
    },
    {
      image: "Image",
      item_name: "Text5",
    },
    {
      image: "Image",
      item_name: "Text6",
    },
  ]);

  return (
    <div className="homepage_container">
      <div>
        <Header />
      </div>
      <img src={tomato} alt="tomato" />
      <img src={lettuce} alt="lettuce" />
      <img src={bread} alt="bread" />
      <div className="list_button">
        <button onClick={() => navigate("/listingpage")}>List an item</button>
      </div>
      <h1>Recently Listed:</h1>
      <div className="recently_listed_container">
        {list.map((item, index) => (
          <Listing
            image={item.image}
            item_name={item.item_name}
            key={item.item_name + index}
          />
        ))}
      </div>
      <h1>Closest to You:</h1>
      <div className="closest_container">
        {list.map((item, index) => (
          <Listing
            image={item.image}
            item_name={item.item_name}
            key={item.item_name + index}
          />
        ))}
      </div>
      <h1>Fresh Produce:</h1>
      <div className="fresh_produce_container">
        {list.map((item, index) => (
          <Listing
            image={item.image}
            item_name={item.item_name}
            key={item.item_name + index}
          />
        ))}
      </div>
      <h1>Pantry Friendly:</h1>
      <div className="pantry_friendly_container">
        {list.map((item, index) => (
          <Listing
            image={item.image}
            item_name={item.item_name}
            key={item.item_name + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
