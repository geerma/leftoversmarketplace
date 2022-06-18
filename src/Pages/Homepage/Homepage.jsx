import React from "react";
import "./homepage.css";

import { Header } from "../../Components";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="homepage_container">
      <div>
        <Header />
      </div>
      <button onClick={() => navigate("/listingpage")}>List an item</button>
      <h1>Recently Listed:</h1>
      <div>

      </div>
      <h1>Closest to You:</h1>
      <div>

      </div>
      <h1>Fresh Produce:</h1>
      <div>

      </div>
      <h1>Pantry Friendly:</h1>
      <div>

      </div>

    </div>
  );
};

export default Homepage;
