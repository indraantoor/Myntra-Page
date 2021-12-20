import { useEffect, useState } from "react";

const FilterByGender = ({ setFilters, setSidebarFiltersApplied }) => {
  const genderItems = ["Men", "Women", "Boys", "Girls"];
  const [gender, setGender] = useState("");

  useEffect(() => {
    setFilters((prev) => ({ ...prev, gender }));
  }, [gender, setFilters, setSidebarFiltersApplied]);

  return (
    <div
      style={{
        paddingRight: "150px",
        borderBottom: "1px solid #e9e9ed",
        color: "#282c3f",
      }}
    >
      <div
        style={{
          marginLeft: "30px",
          marginTop: "10px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingBottom: "10px",
          }}
        >
          {genderItems.map((items) => (
            <div>
              <input
                type="radio"
                id="gender"
                name="genderFilter"
                value={items.toLowerCase()}
                onChange={(e) => {
                  setGender(e.target.value);
                  setSidebarFiltersApplied(true);
                }}
                style={{ marginTop: "6px" }}
              />
              <label
                for="gender"
                style={{
                  marginLeft: "10px",
                  fontWeight: "700",
                  fontSize: "14px",
                }}
              >
                {items}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterByGender;
