import styled from "styled-components";
import FilterDropdown from "./FilterDropdown/FilterDropdown";

const SidebarHeading = styled.h1`
  font-weight: 700;
  font-size: 18px;
  margin-left: 30px;
`;

const SidebarContainer = styled.aside`
  display: flex;
  align-items: center;
  padding-right: 10px;
  border-bottom: 1px solid #e9e9ed;
`;

const FilterHeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  justify-content: space-between;
  margin-top: 20px;
`;

const Right = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid #e9e9ed;
`;

const FilterHeader = ({ setSortedBy }) => {
  return (
    <FilterHeaderContainer>
      <SidebarContainer>
        <SidebarHeading>FILTERS</SidebarHeading>
      </SidebarContainer>
      <Right>
        <FilterDropdown setSortedBy={setSortedBy} />
      </Right>
    </FilterHeaderContainer>
  );
};

export default FilterHeader;
