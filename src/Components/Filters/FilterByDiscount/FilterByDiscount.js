import styled from "styled-components";
import { useEffect, useState } from "react";

const SidebarHeading = styled.h1`
  font-weight: 700;
  font-size: 14px;
  margin-left: 30px;
`;

const SidebarContainer = styled.aside`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const FilterByDiscount = ({ setFilters, setSidebarFiltersApplied }) => {
  const brandItems = [
    { label: "10% and above", value: 10 },
    { label: "20% and above", value: 20 },
    { label: "30% and above", value: 30 },
    { label: "40% and above", value: 40 },
    { label: "50% and above", value: 50 },
    { label: "60% and above", value: 60 },
    { label: "70% and above", value: 70 },
    { label: "80% and above", value: 80 },
  ];
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    setFilters((prev) => ({ ...prev, discount }));
  }, [discount, setFilters]);

  return (
    <div
      style={{
        borderBottom: "1px solid #e9e9ed",
        color: "#282c3f",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <SidebarContainer>
          <SidebarHeading>DISCOUNT RANGE</SidebarHeading>
        </SidebarContainer>
      </div>
      <div
        style={{
          marginLeft: "30px",
          marginTop: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingBottom: "10px",
          }}
        >
          {brandItems.map((item) => (
            <div>
              <input
                type="radio"
                id="discount"
                name="discountFilter"
                value={item.value}
                onChange={(e) => {
                  setDiscount(Number(e.target.value));
                  setSidebarFiltersApplied(true);
                }}
                style={{ marginTop: "5px" }}
              />
              <label
                for="discount"
                style={{
                  marginLeft: "10px",
                  fontWeight: "300",
                  fontSize: "14px",
                  color: "#282c3f",
                }}
              >
                <span>{item.label}</span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterByDiscount;
