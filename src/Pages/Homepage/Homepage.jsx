import React, { useState, useEffect } from "react";
import "./homepage.css";

import { Header } from "../../Components";
import { useNavigate } from "react-router-dom";
import Listing from "../../Components/Listing/Listing";

import tomato from "../../Assets/tomato.png";
import bread from "../../Assets/bread.png";
import lettuce from "../../Assets/lettuce.png";

const Homepage = () => {
  const backend_URL = "https://leftoverbackend.herokuapp.com";

  const navigate = useNavigate();
  const [list, setList] = useState([
    {
      image: "Image",
      item_name: "Onion 1",
    },
    {
      image: "Image",
      item_name: "Onion 2",
    },
    {
      image: "Image",
      item_name: "Onion 3",
    },
    {
      image: "Image",
      item_name: "Onion 4",
    },
    {
      image: "Image",
      item_name: "Onion 5",
    },
    {
      image: "Image",
      item_name: "Onion 6",
    },
  ]);

  const [post, setPost] = useState([]);

  const fetchData = async () => {
    await fetch(`${backend_URL}/api/posts/getAllPost`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="homepage_container">
      <div>
        <Header />
        <button
          onClick={() => {
            console.log(post);
          }}
        ></button>
      </div>
      <img src={tomato} alt="tomato" />
      <img src={lettuce} alt="lettuce" />
      <img src={bread} alt="bread" />
      <div className="list_button">
        <button onClick={() => navigate("/listingpage")}>List an item</button>
      </div>
      <h1>Recently Listed:</h1>
      <div className="recently_listed_container">
        {post &&
          post
            .slice(0, 5)
            .map((item, index) => (
              <Listing 
              image={item.pictureURL} 
              item_name={item.name} 
              item_description={item.description}
              item_type = {item.itemType}
              item_price = {item.price}
              key={index} />
            ))}
      </div>
      <h1>Closest to You:</h1>
      <div className="closest_container">
        {post &&
          post
            .slice(0, 5)
            .map((item, index) => (
              <Listing image="Image" item_name={item.name} key={index} />
            ))}
      </div>
      <h1>Fresh Produce:</h1>
      <div className="fresh_produce_container">
        {post &&
          post
            .slice(0, 5)
            .map((item, index) => (
              <Listing image="Image" item_name={item.name} key={index} />
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
