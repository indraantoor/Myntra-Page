import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Menu from "./Components/Menu/Menu";
import Breadcrum from "./Components/Breadcrum/Breadcrum";
import Product from "./Components/Product/Product";
import ProductsSection from "./Components/ProductsSection/ProductsSection";
import { useEffect, useState } from "react";
import Cart from "./Components/Cart/Cart";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log(searchText);
  });

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home setSearchText={setSearchText} searchText={searchText} />
          }
        />
        <Route path="/product" element={<Product setSearchText={setSearchText} searchText={searchText}/>} />
        {/* <Product /> */}
        {/* <Cart /> */}
      </Routes>
    </Router>
  );
}

export default App;
