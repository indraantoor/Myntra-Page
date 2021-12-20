import Breadcrum from "../Components/Breadcrum/Breadcrum";
import Menu from "../Components/Menu/Menu";
import ProductsSection from "../Components/ProductsSection/ProductsSection";

const Home = ({ setSearchText, searchText }) => {
  return (
    <div>
      <Menu setSearchText={setSearchText} />
      <Breadcrum />
      <ProductsSection searchText={searchText} />
    </div>
  );
};

export default Home;
