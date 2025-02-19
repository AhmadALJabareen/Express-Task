import React, { useState,useEffect } from "react";
import axios from "axios";
import './App.css'
function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/data")
      .then((response) => setItems(response.data))
      .catch((error) => console.error("Error fetching message:", error));
  }, []);
  return (
    <div className="parent">
      <h1>Express Task</h1>
      {items &&
        items.map((product) => {
          return <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <p>Category: {product.category}</p>
            <p>
              Rating: {product.rating.rate} ({product.rating.count} reviews)
            </p>
          </div>;
        })}
    </div>
  );
}

export default App;
