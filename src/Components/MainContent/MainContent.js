import Sidebar from "../Sidebar/Sidebar";
import Items from "../Items/Items";
import styled from "styled-components";

const MainContainter = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
`;

const MainContent = () => {
  return (
    <MainContainter>
      <Sidebar />
      <Items />
    </MainContainter>
  );
};

export default MainContent;
