import styled from "styled-components";

const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 13rem);
  grid-auto-rows: 360px;
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  justify-content: space-between;
  margin-top: 20px;
  margin-left: 30px;
  margin-right: 30px;
`;

const ItemContainer = styled.div`
  background-color: black;
  color: yellow;

  &:hover {
    background-color: teal;
  }
`;

const Items = () => {
  return (
    <ItemsContainer>
      <ItemContainer>Hello</ItemContainer>
      <ItemContainer>Hello</ItemContainer>
      <ItemContainer>Hello</ItemContainer>
      <ItemContainer>Hello</ItemContainer>
      <ItemContainer>Hello</ItemContainer>
      <ItemContainer>Hello</ItemContainer>
      <ItemContainer>Hello</ItemContainer>
      <ItemContainer>Hello</ItemContainer>
    </ItemsContainer>
  );
};

export default Items;
