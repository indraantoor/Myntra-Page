import "./CharacteristicsDropdown.css";

const CharacteristicsDropdown = ({ items }) => {
  return (
    <div className="characteristicsDropdownContainer">
      {items.map((item) => (
        <div className="dropdownItemContainer">
          <span>
            {item}
            <i
              class="bi bi-chevron-compact-up"
              style={{ marginLeft: "5px" }}
            ></i>
          </span>
        </div>
      ))}
      <span style={{ marginLeft: "10px", fontSize: "14px", fontWeight: "500" }}>
        +16 more
      </span>
    </div>
  );
};

export default CharacteristicsDropdown;
