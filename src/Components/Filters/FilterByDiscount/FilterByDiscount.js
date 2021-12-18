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

const FilterByDiscount = () => {
  const brandItems = [
    "10% and above",
    "20% and above",
    "30% and above",
    "40% and above",
    "50% and above",
    "60% and above",
    "70% and above",
    "80% and above",
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
                id="men"
                name="genderFilter"
                style={{ marginTop: "5px" }}
              />
              <label
                for="men"
                style={{
                  marginLeft: "10px",
                  fontWeight: "300",
                  fontSize: "14px",
                  color: "#282c3f",
                }}
              >
                <span>{item}</span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterByDiscount;
