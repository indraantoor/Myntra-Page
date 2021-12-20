import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Menu from "./Components/Menu/Menu";
import Breadcrum from "./Components/Breadcrum/Breadcrum";
import Product from "./Components/Product/Product";
import ProductsSection from "./Components/ProductsSection/ProductsSection";
import { useEffect, useState } from "react";

function App() {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log(searchText);
  });

  return (
    <>
      <Menu setSearchText={setSearchText} />
      <Breadcrum />
      {/* <ProductsSection searchText={searchText} /> */}
      <Product />
    </>
  );
}

export default App;
