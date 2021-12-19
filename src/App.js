import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Menu from "./Components/Menu/Menu";
import Breadcrum from "./Components/Breadcrum/Breadcrum";
import FilterHeader from "./Components/FilterHeader/FilterHeader";
import MainContent from "./Components/MainContent/MainContent";
import Product from "./Components/Product/Product";

function App() {
  return (
    <>
      <Menu />
      <Breadcrum />
      {/* <FilterHeader />
      <MainContent /> */}
      <Product />
    </>
  );
}

export default App;
