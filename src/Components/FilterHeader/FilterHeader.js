import styled from "styled-components";
import FilterDropdown from "./FilterDropdown/FilterDropdown";

const SidebarHeading = styled.h1`
  font-weight: 700;
  font-size: 18px;
  margin-left: 30px;
`;

const SidebarContainer = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 20px;
  border-bottom: 1px solid #e9e9ed;
`;

const FilterHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const Right = styled.div`
  flex: 1;
  padding-bottom: 10px;
  border-bottom: 1px solid #e9e9ed;
`;

const FilterHeader = () => {
  return (
    <FilterHeaderContainer>
      <SidebarContainer>
        <SidebarHeading>FILTERS</SidebarHeading>
      </SidebarContainer>
      <Right>
        <FilterDropdown />
      </Right>
    </FilterHeaderContainer>
  );
};

export default FilterHeader;
