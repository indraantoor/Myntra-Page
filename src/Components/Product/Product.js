import styled from "styled-components";

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  margin-right: 40px;
  margin-left: 40px;
`;

const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 21rem);
  grid-auto-rows: 360px;
  margin-top: 20px;
  grid-column-gap: 20px;
  margin-left: 30px;
  margin-right: 30px;
`;

const ItemContainer = styled.div``;

const ImgContainer = styled.div`
  background-color: red;
  height: 95%;
  cursor: pointer;
`;

const ProductInfoContainer = styled.div`
  margin-top: 20px;
  background-color: white;
`;

const BrandName = styled.h1`
  font-size: 24px;
  color: #282c3f;
  font-weight: 500;
`;

const ProductTitle = styled.h2`
  font-size: 20px;
  opacity: 0.8;
  color: #535665;
  font-weight: 400;
`;

const RatingContainer = styled.div`
  border: 1px solid #eaeaec;
  width: 10rem;
  padding: 5px;
  font-size: 16px;
  font-weight: 300;
  margin-top: 15px;
  color: #282c3f;
  cursor: pointer;
  &:hover {
    border: 1px solid #535766;
  }
`;

const PricingInfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SellingPrice = styled.h1`
  font-size: 24px;
  font-weight: 500;
`;

const OriginalPrice = styled.h1`
  padding-left: 10px;
  font-size: 20px;
  font-weight: 400;
  color: #7e818c;
  text-decoration: line-through;
`;

const Discount = styled.h1`
  padding-left: 10px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: #ff905a;
`;

const Product = () => {
  return (
    <ProductContainer>
      <div>
        <ItemsContainer>
          <ItemContainer>
            <ImgContainer>Hello</ImgContainer>
          </ItemContainer>
          <ItemContainer>
            <ImgContainer>Hello</ImgContainer>
          </ItemContainer>
          <ItemContainer>
            <ImgContainer>Hello</ImgContainer>
          </ItemContainer>
          <ItemContainer>
            <ImgContainer>Hello</ImgContainer>
          </ItemContainer>
          <ItemContainer>
            <ImgContainer>Hello</ImgContainer>
          </ItemContainer>
        </ItemsContainer>
      </div>
      <div style={{ backgroundColor: "white" }}>
        <ProductInfoContainer>
          <BrandName>Roadster</BrandName>
          <ProductTitle>Men Blue Printed Casual Shirt</ProductTitle>
          <RatingContainer>
            <span style={{ fontWeight: "500", paddingLeft: "10px" }}>4</span>{" "}
            <i
              class="bi bi-star-fill"
              style={{ color: "#03a685", fontSize: "12px" }}
            ></i>{" "}
            | 17.3k Ratings
          </RatingContainer>
          <hr />
          <PricingInfoContainer>
            <SellingPrice>
              <strong>Rs. 824</strong>
            </SellingPrice>
            <OriginalPrice>Rs. 1499</OriginalPrice>
            <Discount>( 45% OFF )</Discount>
          </PricingInfoContainer>
        </ProductInfoContainer>
      </div>
    </ProductContainer>
  );
};

export default Product;
