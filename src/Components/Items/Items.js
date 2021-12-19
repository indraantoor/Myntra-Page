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
  cursor: pointer;
  &:hover {
    box-shadow: 0 4px 12px 0 rgb(0 0 0 / 5%);
  }
`;

const PricingInfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ImgContainer = styled.div`
  background-color: red;
  height: 80%;
`;

const InformationContainer = styled.div`
  height: 20%;
`;

const BrandName = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: #282c3f;
  padding-left: 20px;
  padding-top: 3px;
`;

const ItemInfo = styled.h2`
  font-size: 14px;
  color: #535766;
  padding-left: 20px;
  font-weight: 300;
`;

const SellingPrice = styled.h1`
  padding-left: 20px;
  font-size: 14px;
  font-weight: 600;
`;

const OriginalPrice = styled.h1`
  padding-left: 5px;
  font-size: 12px;
  font-weight: 400;
  color: #7e818c;
  text-decoration: line-through;
`;

const Discount = styled.h1`
  padding-left: 5px;
  font-size: 12px;
  font-weight: 400;
  color: #ff3f6c;
`;

const Items = () => {
  return (
    <ItemsContainer>
      <ItemContainer>
        <ImgContainer>Hello</ImgContainer>
        <InformationContainer>
          <BrandName>HERE&NOW</BrandName>
          <ItemInfo>Checked Straight Shirts</ItemInfo>
          <PricingInfoContainer>
            <SellingPrice>Rs. 699</SellingPrice>
            <OriginalPrice>Rs. 1999</OriginalPrice>
            <Discount>( 65% OFF )</Discount>
          </PricingInfoContainer>
        </InformationContainer>
      </ItemContainer>
      <ItemContainer>
        <ImgContainer>Hello</ImgContainer>
        <InformationContainer>
          <BrandName>HERE&NOW</BrandName>
          <ItemInfo>Checked Straight Shirts</ItemInfo>
          <PricingInfoContainer>
            <SellingPrice>Rs. 699</SellingPrice>
            <OriginalPrice>Rs. 1999</OriginalPrice>
            <Discount>( 65% OFF )</Discount>
          </PricingInfoContainer>
        </InformationContainer>
      </ItemContainer>
      <ItemContainer>
        <ImgContainer>Hello</ImgContainer>
        <InformationContainer>
          <BrandName>HERE&NOW</BrandName>
          <ItemInfo>Checked Straight Shirts</ItemInfo>
          <PricingInfoContainer>
            <SellingPrice>Rs. 699</SellingPrice>
            <OriginalPrice>Rs. 1999</OriginalPrice>
            <Discount>( 65% OFF )</Discount>
          </PricingInfoContainer>
        </InformationContainer>
      </ItemContainer>
      <ItemContainer>
        <ImgContainer>Hello</ImgContainer>
        <InformationContainer>
          <BrandName>HERE&NOW</BrandName>
          <ItemInfo>Checked Straight Shirts</ItemInfo>
          <PricingInfoContainer>
            <SellingPrice>Rs. 699</SellingPrice>
            <OriginalPrice>Rs. 1999</OriginalPrice>
            <Discount>( 65% OFF )</Discount>
          </PricingInfoContainer>
        </InformationContainer>
      </ItemContainer>
      <ItemContainer>
        <ImgContainer>Hello</ImgContainer>
        <InformationContainer>
          <BrandName>HERE&NOW</BrandName>
          <ItemInfo>Checked Straight Shirts</ItemInfo>
          <PricingInfoContainer>
            <SellingPrice>Rs. 699</SellingPrice>
            <OriginalPrice>Rs. 1999</OriginalPrice>
            <Discount>( 65% OFF )</Discount>
          </PricingInfoContainer>
        </InformationContainer>
      </ItemContainer>
      <ItemContainer>
        <ImgContainer>Hello</ImgContainer>
        <InformationContainer>
          <BrandName>HERE&NOW</BrandName>
          <ItemInfo>Checked Straight Shirts</ItemInfo>
          <PricingInfoContainer>
            <SellingPrice>Rs. 699</SellingPrice>
            <OriginalPrice>Rs. 1999</OriginalPrice>
            <Discount>( 65% OFF )</Discount>
          </PricingInfoContainer>
        </InformationContainer>
      </ItemContainer>
      <ItemContainer>
        <ImgContainer>Hello</ImgContainer>
        <InformationContainer>
          <BrandName>HERE&NOW</BrandName>
          <ItemInfo>Checked Straight Shirts</ItemInfo>
          <PricingInfoContainer>
            <SellingPrice>Rs. 699</SellingPrice>
            <OriginalPrice>Rs. 1999</OriginalPrice>
            <Discount>( 65% OFF )</Discount>
          </PricingInfoContainer>
        </InformationContainer>
      </ItemContainer>
      <ItemContainer>
        <ImgContainer>Hello</ImgContainer>
        <InformationContainer>
          <BrandName>HERE&NOW</BrandName>
          <ItemInfo>Checked Straight Shirts</ItemInfo>
          <PricingInfoContainer>
            <SellingPrice>Rs. 699</SellingPrice>
            <OriginalPrice>Rs. 1999</OriginalPrice>
            <Discount>( 65% OFF )</Discount>
          </PricingInfoContainer>
        </InformationContainer>
      </ItemContainer>
    </ItemsContainer>
  );
};

export default Items;
