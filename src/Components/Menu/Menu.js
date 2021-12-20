import myntraLogo from "../../Assets/myntraLogo.png";
import Searchbar from "./Searchbar/Searchbar";
import styled from "styled-components";
import { mobile } from "../../responsive";
import { Link } from "react-router-dom";

const RightNavItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
`;

const Container = styled.div`
  height: 60px;
  box-shadow: 0 4px 12px 0 rgb(0 0 0 / 5%);
  padding-bottom: 80px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 18px;
  ${mobile({ flex: "2", justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 30px;
  font-weight: 700;
  color: #282c3f;
  ${mobile({ display: "none" })}
`;

const Menu = ({ setSearchText }) => {
  const leftNavItems = ["MEN", "WOMEN", "KIDS", "HOME & LIVING", "BEAUTY"];
  const rightNavItems = [
    { label: "Profile", icon: "bi bi-person" },
    { label: "Wishlist", icon: "bi bi-heart" },
    { label: "Bag", icon: "bi bi-handbag" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: "0",
        width: "100%",
        zIndex: "500",
        backgroundColor: "white",
      }}
    >
      <Container>
        <Wrapper>
          <Left>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <img
                src={myntraLogo}
                alt="Myntra Logo"
                style={{ marginLeft: "15px" }}
              />
            </Link>
            {leftNavItems.map((navItem) => (
              <MenuItem>{navItem}</MenuItem>
            ))}
            <MenuItem>
              STUDIO <sup style={{ color: "#ff3f6c" }}>NEW</sup>
            </MenuItem>
          </Left>

          <Right>
            <Searchbar setSearchText={setSearchText} />
            {rightNavItems.map((navItem) => (
              <MenuItem>
                <RightNavItemContainer>
                  <i class={navItem.icon} style={{ fontSize: "20px" }}></i>
                  {navItem.label}
                </RightNavItemContainer>
              </MenuItem>
            ))}
          </Right>
        </Wrapper>
      </Container>
    </nav>
  );
};

export default Menu;
