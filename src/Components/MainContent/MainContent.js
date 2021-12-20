import Sidebar from "../Sidebar/Sidebar";
import Items from "../Items/Items";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { mobile } from "../../responsive";

const MainContainter = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  ${mobile({ gridTemplateColumns: "0% 100%" })}
`;

const MainContent = ({ sort, searchText }) => {
  const [sidebarFilters, setSidebarFilters] = useState({
    gender: "",
    discount: 0,
  });

  const [sidebarFiltersApplied, setSidebarFiltersApplied] = useState(false);

  useEffect(() => {
    console.log(sidebarFilters);
    console.log(sidebarFiltersApplied);
  }, [sidebarFilters, sidebarFiltersApplied]);

  return (
    <MainContainter>
      <Sidebar
        setSidebarFilters={setSidebarFilters}
        setSidebarFiltersApplied={setSidebarFiltersApplied}
      />
      <Items
        sidebarFilters={sidebarFilters}
        sidebarFiltersApplied={sidebarFiltersApplied}
        sort={sort}
        searchText={searchText}
      />
    </MainContainter>
  );
};

export default MainContent;
