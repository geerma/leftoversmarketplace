import React, { useState } from "react";
import "./listingpage.css";
import { Header } from "../../Components";

const Listingpage = () => {
  const backend_URL = "https://leftoverbackend.herokuapp.com";

  const [postInfo, setPostInfo] = useState({
    userId: "Default User ID",
    postId: "Default Post ID",
    name: "",
    description: "Default Description",
    itemType: "Item Type",
    price: "$5",
    pictureURL: "Picture URL",
  });

  const handlePostSubmit = (e) => {
    e.preventDefault();
    console.log(postInfo);

    fetch(`${backend_URL}/api/posts/uploadPost`, {
      method: "POST",
      body: JSON.stringify({
        userId: postInfo.userId,
        postId: postInfo.postId,
        name: postInfo.name,
        description: postInfo.description,
        itemType: postInfo.itemType,
        price: postInfo.price,
        pictureURL: postInfo.pictureURL,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then(alert("Your post has been created"))
      .catch((error) => console.log(error));

    window.location.reload(false);

  };

  return (
    <div className="listing_container">
      <div>
        <Header />
      </div>
      <h1>List an Item</h1>
      <div className="listing_inputs">
        <form className="listing_inputs">
          <label>Name of Item</label>
          <input
            type=""
            placeholder="Name"
            onChange={(e) =>
              setPostInfo((prevState) => ({
                ...prevState,
                name: e.target.value,
              }))
            }
          />

          <label>Description</label>
          <input
            type=""
            placeholder="Description"
            onChange={(e) =>
              setPostInfo((prevState) => ({
                ...prevState,
                description: e.target.value,
              }))
            }
          />

          <label>Item Type</label>
          <input
            type=""
            placeholder="Item Type"
            onChange={(e) =>
              setPostInfo((prevState) => ({
                ...prevState,
                itemType: e.target.value,
              }))
            }
          />

          <label>Price</label>
          <input
            type="number"
            placeholder="Price"
            onChange={(e) =>
              setPostInfo((prevState) => ({
                ...prevState,
                price: e.target.value,
              }))
            }
          />

          <label>Best By</label>
          <input type="date" placeholder="Best By" />

          <label>Major Allergens</label>
          <input type="" placeholder="Major Allergens" />
          <label>Upload a Picture</label>
          <input type="file" id="photo" name="photo" accept="image/*" />
          <button type="submit" onClick={(e) => handlePostSubmit(e)}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Listingpage;
