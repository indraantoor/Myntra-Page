import FilterByGender from "../Filters/FilterByGender/FilterByGender";
import FilterByBrand from "../Filters/FilterByBrand/FilterByBrand";
import FilterByPrice from "../Filters/FilterByPrice/FilterByPrice";
import FilterByColor from "../Filters/FilterByColor/FilterByColor";
import FilterByDiscount from "../Filters/FilterByDiscount/FilterByDiscount";

const Sidebar = () => {
  return (
    <div
      style={{
        borderRight: "1px solid #e9e9ed",
        overflow: "hidden",
      }}
    >
      <FilterByGender />
      <FilterByBrand />
      <FilterByPrice />
      <FilterByColor />
      <FilterByDiscount />
    </div>
  );
};

export default Sidebar;
