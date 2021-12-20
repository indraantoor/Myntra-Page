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
  grid-auto-rows: 460px;
  margin-top: 20px;
  grid-column-gap: 20px;
  margin-left: 30px;
  margin-right: 30px;
`;

const ItemContainer = styled.div``;

const ImgContainer = styled.div`
  background-color: #ff3e6c;
  height: 95%;
  cursor: zoom-in;
`;

const ProductInfoContainer = styled.div`
  margin-top: 20px;
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
  color: black;
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

const TaxText = styled.div`
  color: #03a685;
  font-weight: 500;
  font-size: 14px;
`;

const SizeContainer = styled.div`
  margin-top: 30px;
`;

const SizeHeadingContainer = styled.div`
  width: 15rem;
  display: flex;
  justify-content: space-between;
`;

const SizeHeading = styled.h1`
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;

const SizeChartHeading = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: #ff3e6c;
  cursor: pointer;
`;

const SizeButtonContainer = styled.div`
  display: flex;
  width: 20rem;
`;

const Size = styled.div`
  margin-top: 10px;
  margin-left: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #bfc0c6;
  border-radius: 50px;
  cursor: pointer;
  color: #282c3f;
  width: 50px;
  height: 50px;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    border: 1px solid #ff3f6c;
  }
`;

const PurchaseButtonsContainer = styled.div`
  margin-top: 30px;
  width: 90%;
  display: flex;
  padding-bottom: 10px;
`;

const AddToBag = styled.button`
  padding: 15px;
  width: 60%;
  border: 1px solid #ff3e6c;
  background-color: #ff3e6c;
  color: white;
  font-weight: 500;
  font-size: 16px;
  border-radius: 4px;
  &:hover {
    background-color: #ff527b;
  }
`;
const Wishlist = styled.button`
  margin-left: 20px;
  flex: 1;
  border: 1px solid #d4d5d9;
  letter-spacing: 0.4px;
  color: #282c3f;
  font-weight: 500;
  border-radius: 4px;
  background-color: white;
  &:hover {
    border: 1px solid #282c3f;
  }
`;

const SellerInfoContainer = styled.div``;

const SellerName = styled.div``;

const SellerCount = styled.div`
  font-size: 14px;
  color: #ff3f6c;
  font-weight: 500;
  cursor: pointer;
`;

const DeliveryOptionContainer = styled.div``;

const DeliveryHeading = styled.h1`
  color: #282c3f;
  font-size: 16px;
  font-weight: 500;
`;

const Pincode = styled.div`
  background-color: white;
  padding: 10px;
  display: flex;
  width: 55%;
  border: 1px solid #d4d5d9;
  border-radius: 4px;
  color: #282c3f;
`;

const PincodeInput = styled.input`
  padding: 5px;
  border: none;

  &:focus {
    outline: none;
  }
`;

const PincodeButton = styled.button`
  margin-left: 10px;
  border: none;
  background: transparent;
`;

const PincodeText = styled.div`
  font-size: 13px;
  color: #282c3f;
  margin-top: 5px;
`;

const DeliveryOptionsFeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const DeliveryOptionsFeaturesText = styled.div`
  margin-top: 5px;
  color: #282c3f;
  font-size: 16px;
`;

const Product = () => {
  return (
    <ProductContainer>
      <div>
        <ItemsContainer>
          <ItemContainer>
            <ImgContainer>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url("https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg")`,
                  backgroundSize: "cover",
                }}
              ></div>
            </ImgContainer>
          </ItemContainer>
          <ItemContainer>
            <ImgContainer>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url("https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/1364628/2016/8/31/11472636737697-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-2.jpg")`,
                  backgroundSize: "cover",
                }}
              ></div>
            </ImgContainer>
          </ItemContainer>
          <ItemContainer>
            <ImgContainer>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url("https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/1364628/2016/8/31/11472636737673-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-3.jpg")`,
                  backgroundSize: "cover",
                }}
              ></div>
            </ImgContainer>
          </ItemContainer>
          <ItemContainer>
            <ImgContainer>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url("https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/1364628/2016/8/31/11472636737656-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-4.jpg")`,
                  backgroundSize: "cover",
                }}
              ></div>
            </ImgContainer>
          </ItemContainer>
          <ItemContainer>
            <ImgContainer>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url("https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/1364628/2016/8/31/11472636737616-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-5.jpg")`,
                  backgroundSize: "cover",
                }}
              ></div>
            </ImgContainer>
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
          <TaxText>
            <strong>inclusive of all taxes</strong>
          </TaxText>
          <SizeContainer>
            <SizeHeadingContainer>
              <SizeHeading>
                <strong>SELECT SIZE</strong>
              </SizeHeading>
              <SizeChartHeading>
                <strong>
                  SIZE CHART <i class="bi bi-chevron-compact-right"></i>
                </strong>
              </SizeChartHeading>
            </SizeHeadingContainer>
            <SizeButtonContainer>
              <Size>S</Size>
              <Size>M</Size>
              <Size>L</Size>
              <Size>XL</Size>
            </SizeButtonContainer>
          </SizeContainer>
        </ProductInfoContainer>
        <PurchaseButtonsContainer>
          <AddToBag>
            <i class="bi bi-handbag-fill" style={{ paddingRight: "10px" }}></i>
            ADD TO BAG
          </AddToBag>
          <Wishlist>
            <i class="bi bi-heart" style={{ paddingRight: "10px" }}></i>
            WISHLIST
          </Wishlist>
        </PurchaseButtonsContainer>
        <hr />
        <SellerInfoContainer>
          <PricingInfoContainer>
            <SellingPrice style={{ fontSize: "16px" }}>
              <strong>Rs. 824</strong>
            </SellingPrice>
            <OriginalPrice style={{ fontSize: "16px" }}>Rs. 1499</OriginalPrice>
            <Discount style={{ fontSize: "16px" }}>( 45% OFF )</Discount>
          </PricingInfoContainer>
          <SellerName>
            Seller:{" "}
            <strong
              style={{ color: "#ff3e6c", fontWeight: "500", cursor: "pointer" }}
            >
              Indraan Bai
            </strong>
            <SellerCount>1 more seller available</SellerCount>
          </SellerName>
        </SellerInfoContainer>
        <hr />
        <DeliveryOptionContainer>
          <DeliveryHeading>DELIVERY OPTIONS</DeliveryHeading>
          <Pincode>
            <PincodeInput
              type="text"
              placeholder="Enter a PIN code"
              maxLength={6}
            ></PincodeInput>
            <PincodeButton disabled>Check</PincodeButton>
          </Pincode>
          <PincodeText>
            Please enter PIN code to check delivery time & Pay on Delivery
            Availability
          </PincodeText>
          <DeliveryOptionsFeaturesContainer>
            <DeliveryOptionsFeaturesText>
              100% Original Products
            </DeliveryOptionsFeaturesText>
            <DeliveryOptionsFeaturesText>
              Pay on delivery might be available
            </DeliveryOptionsFeaturesText>
            <DeliveryOptionsFeaturesText>
              Easy 30 days returns and exchanges
            </DeliveryOptionsFeaturesText>
            <DeliveryOptionsFeaturesText>
              Try & Buy might be available
            </DeliveryOptionsFeaturesText>
          </DeliveryOptionsFeaturesContainer>
        </DeliveryOptionContainer>
      </div>
    </ProductContainer>
  );
};

export default Product;
