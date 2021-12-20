import FilterByGender from "../Filters/FilterByGender/FilterByGender";
import FilterByBrand from "../Filters/FilterByBrand/FilterByBrand";
import FilterByPrice from "../Filters/FilterByPrice/FilterByPrice";
import FilterByColor from "../Filters/FilterByColor/FilterByColor";
import FilterByDiscount from "../Filters/FilterByDiscount/FilterByDiscount";
import { useState, useEffect } from "react";

const Sidebar = ({ setSidebarFilters, setSidebarFiltersApplied }) => {
  const [filters, setFilters] = useState({
    gender: "",
    discount: 0,
  });

  useEffect(() => {
    setSidebarFilters(filters);
  }, [filters, setSidebarFilters]);

  return (
    <div
      style={{
        borderRight: "1px solid #e9e9ed",
        overflow: "hidden",
      }}
    >
      <FilterByGender
        setFilters={setFilters}
        filters={filters}
        setSidebarFiltersApplied={setSidebarFiltersApplied}
      />
      <FilterByBrand />
      <FilterByPrice />
      <FilterByColor />
      <FilterByDiscount
        setFilters={setFilters}
        filters={filters}
        setSidebarFiltersApplied={setSidebarFiltersApplied}
      />
    </div>
  );
};

export default Sidebar;
