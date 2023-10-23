import React from "react";

import "./App.css";
import Navbar from "./features/navbar/Navbar";
import ProductList from "./features/product list/ProductList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductList />
    </div>
  );
}

export default App;
