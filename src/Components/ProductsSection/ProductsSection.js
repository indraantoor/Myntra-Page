import { useEffect, useState } from "react";
import FilterHeader from "../FilterHeader/FilterHeader";
import MainContent from "../MainContent/MainContent";

const ProductsSection = ({ searchText }) => {
  const [sortedBy, setSortedBy] = useState("");

  useEffect(() => {
    console.log(sortedBy);
  });
  return (
    <>
      <FilterHeader setSortedBy={setSortedBy} />
      <MainContent sort={sortedBy} searchText={searchText} />
    </>
  );
};

export default ProductsSection;
