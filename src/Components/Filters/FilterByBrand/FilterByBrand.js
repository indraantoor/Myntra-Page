import styled from "styled-components";

const SidebarHeading = styled.h1`
  font-weight: 700;
  font-size: 14px;
  margin-left: 30px;
  margin-right: 10px;
`;

const SidebarContainer = styled.aside`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const FilterByBrand = () => {
  const brandItems = [
    { label: "Allen Solly", count: 2719 },
    { label: "Roadster", count: 2466 },
    { label: "Van Heusen", count: 2359 },
    { label: "Loius Philippe", count: 2235 },
    { label: "Blackberrys", count: 1970 },
    { label: "Louis Philippe Sport", count: 1776 },
    { label: "ColorPlus", count: 1853 },
    { label: "Parx", count: 1797 },
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
          <SidebarHeading>BRAND</SidebarHeading>
        </SidebarContainer>
        <span
          style={{
            marginTop: "10px",
            marginRight: "20px",
            backgroundColor: "#f5f5f6",
            padding: "5px",
            borderRadius: "100%",
            cursor: "pointer",
          }}
        >
          <i class="bi bi-search" style={{ padding: "5px" }}></i>
        </span>
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
          <div
            style={{
              fontSize: "14px",
              marginLeft: "20px",
              color: "#ff3f6c",
              fontWeight: "400",
              cursor: "pointer",
              marginTop: "5px",
            }}
          >
            +654 more
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterByBrand;
