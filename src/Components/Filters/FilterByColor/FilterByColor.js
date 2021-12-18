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

const ColorContainer = styled.span`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  display: inline-block;
`;

const FilterByColor = () => {
  const brandItems = [
    { label: "Blue", count: 2719 },
    { label: "Yellow", count: 2466 },
    { label: "Navy Blue", count: 2359 },
    { label: "Black", count: 2235 },
    { label: "Green", count: 1970 },
    { label: "Pink", count: 1776 },
    { label: "Grey", count: 1853 },
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
          <SidebarHeading>COLOR</SidebarHeading>
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
                <span style={{ marginRight: "5px" }}>
                  <ColorContainer
                    style={{ backgroundColor: brandItems[0].label }}
                  ></ColorContainer>
                </span>

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
            +36 more
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterByColor;
