import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Menu from "./Components/Menu/Menu";
import Breadcrum from "./Components/Breadcrum/Breadcrum";
import Product from "./Components/Product/Product";
import ProductsSection from "./Components/ProductsSection/ProductsSection";

function App() {
  return (
    <>
      <Menu />
      <Breadcrum />
      <ProductsSection />
      {/* <Product /> */}
    </>
  );
}

export default App;
