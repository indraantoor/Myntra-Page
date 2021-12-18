import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Menu from "./Components/Menu/Menu";
import Breadcrum from "./Components/Breadcrum/Breadcrum";
import FilterHeader from "./Components/FilterHeader/FilterHeader";

function App() {
  return (
    <>
      <Menu />
      <Breadcrum />
      <FilterHeader />
    </>
  );
}

export default App;
