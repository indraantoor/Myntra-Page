import styled from "styled-components";

const BreadcrumContainer = styled.p`
  font-size: 14px;
  font-weight: 100;
  margin-left: 30px;
  margin-top: 10px;
  color: #282c3f;
`;

const CurrentPage = styled.span`
  font-weight: 700;
  color: #282c3f;
`;

const CurrentPageInformationContainer = styled.div`
  margin-left: 30px;
`;

const ItemCountContainer = styled.span`
  font-weight: 300;
  font-size: 18px;
`;

const Breadcrum = () => {
  return (
    <>
      <BreadcrumContainer>
        Home / Clothing / <CurrentPage>Shirts For Men & Women</CurrentPage>
      </BreadcrumContainer>
      <CurrentPageInformationContainer>
        <p>
          <CurrentPage>Shirts For Men & Women</CurrentPage>{" "}
          <ItemCountContainer>- 80922 Items</ItemCountContainer>
        </p>
      </CurrentPageInformationContainer>
    </>
  );
};

export default Breadcrum;