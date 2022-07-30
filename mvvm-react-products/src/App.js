import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./presentation/view/product/List/ProductList";
import ProductNew from "./presentation/view/product/New/ProductNew";
import ProductsDetail from "./presentation/view/product/Detail/ProductDetail";

function App() {
  const [name, setName] = useState("");

  useEffect(() => {
    setName("Paul");
    console.log("test");
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/new" element={<ProductNew />} />
          <Route path="/product/detail/:id" element={<ProductsDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
