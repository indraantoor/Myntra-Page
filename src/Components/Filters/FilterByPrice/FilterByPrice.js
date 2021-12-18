import styled from "styled-components";

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

const FilterByPrice = () => {
  const brandItems = [
    { label: "Rs. 239 to Rs. 5354", count: 79241 },
    { label: "Rs. 5354 to Rs. 10469", count: 192 },
    { label: "Rs. 10469 to Rs. 15584", count: 6 },
  ];
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
          <SidebarHeading>PRICE</SidebarHeading>
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
                type="checkbox"
                id="men"
                name="genderFilter"
                style={{ marginTop: "5px" }}
              />
              <label
                for="men"
                style={{
                  marginLeft: "10px",
                  fontWeight: "400",
                  fontSize: "14px",
                  color: "#282c3f",
                }}
              >
                <span>
                  {item.label}
                  <span
                    style={{
                      fontSize: "11px",
                      color: "#94969f",
                      marginLeft: "4px",
                    }}
                  >
                    {`(${item.count})`}
                  </span>
                </span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterByPrice;
