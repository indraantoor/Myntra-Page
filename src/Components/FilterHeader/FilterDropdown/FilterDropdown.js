import styled from "styled-components";
import { mobile } from "../../../responsive";
import CharacteristicsDropdown from "./CharacteristicsDropdown/CharacteristicsDropdown";
import { useEffect, useState } from "react";

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const Select = styled.select`
  font-size: 14px;
  width: 255px;
  padding: 4px;
  margin-right: 10px;
  border: none;
  color: #282c3f;
  border-radius: 2px;
  padding-left: 10px;
  &:focus {
    outline: none;
  }
  ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option`
  font-weight: 100;
  font-size: 14px;
  margin-top: 50px;
`;

const DropdownContainer = styled.div`
  margin-right: 30px;
  padding: 2px;
  border-radius: 2px;
  border: 1px solid #d4d5d9;
`;

const FilterDropdown = ({ setSortedBy }) => {
  const [sortBy, setSortBy] = useState("");

  const sortFilterItems = [
    { label: "Sort By: Recommended", value: "recommended" },
    { label: "What's New", value: "new" },
    { label: "Popularity", value: "popular" },
    { label: "Better Discount (THIS WORKS)", value: "discount" },
    { label: "Price: High To Low (THIS WORKS)", value: "desc" },
    { label: "Price: Low To High (THIS WORKS)", value: "asc" },
    { label: "Customer Rating", value: "rating" },
  ];

  const characteristicsFilterItems = [
    "Add-Ons",
    "Bundles",
    "Character",
    "Collar",
    "Country of Origin",
    "Fabric",
    "Fabric 2",
  ];

  useEffect(() => {
    setSortedBy(sortBy);
  });

  return (
    <FilterContainer>
      <div>
        <CharacteristicsDropdown items={characteristicsFilterItems} />
      </div>
      <Filter>
        <DropdownContainer>
          <Select onChange={(e) => setSortBy(e.target.value)}>
            {sortFilterItems.map((filterItem) => (
              <Option value={filterItem.value} id={filterItem.value}>
                {filterItem.label}
              </Option>
            ))}
          </Select>
        </DropdownContainer>
      </Filter>
    </FilterContainer>
  );
};

export default FilterDropdown;
