import styled from "styled-components";
import { mobile } from "../../../responsive";
import { useState, useEffect } from "react";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  background-color: #f5f5f6;
  color: #696e79;
  border-radius: 3px;
`;

const SearchIconContainer = styled.span`
  margin-left: 15px;
  margin-right: 14px;
`;

const Input = styled.input`
  border: none;
  width: 320px;
  background-color: #f5f5f6;
  color: #696e79;
  font-size: 14px;
  padding: 2px;
  ${mobile({ width: "50px" })}

  &:focus {
    outline: none;
  }
`;

const Searchbar = ({ placeholder, setSearchText }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    setSearchText(search);
  }, [search, setSearchText]);

  return (
    <SearchContainer>
      <SearchIconContainer>
        <i
          class="bi bi-search"
          style={{ color: "#696e79", fontWeight: "bold" }}
        ></i>
      </SearchIconContainer>
      <Input
        placeholder={placeholder || "Search for products, brands and more"}
        onChange={(e) => setSearch(e.target.value)}
      />
    </SearchContainer>
  );
};

export default Searchbar;
