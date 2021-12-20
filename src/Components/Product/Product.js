import styled from "styled-components";
import data from "../../data";
import Modal from "react-modal";
import { useEffect, useState } from "react";
import Menu from "../Menu/Menu";
import Breadcrum from "../Breadcrum/Breadcrum";
import { mobile } from "../../responsive";

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  margin-right: 40px;
  margin-left: 40px;
  ${mobile({ display: "flex", flexDirection: "column" })}
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
  font-weight: 500;
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

const BestOffersContainer = styled.div`
  margin-top: 30px;
  color: #282c3f;
  padding-bottom: 10px;
`;

const BestOffersHeading = styled.h1`
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 8px;
`;

const ViewProducts = styled.div`
  color: #ff3f6c;
  font-size: 14px;
  cursor: pointer;
  font-weight: 500;
  margin-top: 4px;
`;

const Product = ({ setSearchText, searchText }) => {
  const [sellingItem, setSellingItem] = useState({});
  const [pinCode, setPincode] = useState("");
  const [check, setCheck] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    setSellingItem(JSON.parse(localStorage.getItem("product")));
    console.log(JSON.parse(localStorage.getItem("product")));
    setImages(JSON.parse(localStorage.getItem("product")).images);
  }, []);

  useEffect(() => {
    if (pinCode.length >= 6) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  }, [pinCode]);

  const AddToCart = () => {
    var a = [];
    a = JSON.parse(localStorage.getItem("cartItems")) || [];
    a.push(sellingItem);
    localStorage.setItem("cartItems", JSON.stringify(a));
  };

  return (
    <>
      <Menu setSearchText={setSearchText} />
      <Breadcrum currentUrl={sellingItem.brandName} />
      <ProductContainer>
        <div>
          <ItemsContainer>
            {images.map((img) => (
              <ItemContainer>
                <ImgContainer>
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundImage: `url(${img})`,
                      backgroundSize: "cover",
                    }}
                  ></div>
                </ImgContainer>
              </ItemContainer>
            ))}
          </ItemsContainer>
        </div>
        <div style={{ backgroundColor: "white" }}>
          <ProductInfoContainer>
            <BrandName>{sellingItem.brandName}</BrandName>
            <ProductTitle>{sellingItem.itemInfo}</ProductTitle>
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
                <strong>Rs. {sellingItem.sellingPrice}</strong>
              </SellingPrice>
              <OriginalPrice>Rs. {sellingItem.originalPrice}</OriginalPrice>
              <Discount>( {sellingItem.discount}% OFF )</Discount>
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
            <AddToBag onClick={(e) => AddToCart()}>
              <i
                class="bi bi-handbag-fill"
                style={{ paddingRight: "10px" }}
              ></i>
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
                <strong>Rs. {sellingItem.sellingPrice}</strong>
              </SellingPrice>
              <OriginalPrice style={{ fontSize: "16px" }}>
                Rs. {sellingItem.originalPrice}
              </OriginalPrice>
              <Discount style={{ fontSize: "16px" }}>
                ( {sellingItem.discount}% OFF )
              </Discount>
            </PricingInfoContainer>
            <SellerName>
              Seller:{" "}
              <strong
                style={{
                  color: "#ff3e6c",
                  fontWeight: "500",
                  cursor: "pointer",
                }}
              >
                Indraan
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
                onChange={(e) => setPincode(e.target.value)}
                maxLength={6}
              ></PincodeInput>
              {check ? (
                <PincodeButton style={{ color: " #ff3e6c", fontWeight: "500" }}>
                  Check
                </PincodeButton>
              ) : (
                <PincodeButton disabled>Check</PincodeButton>
              )}
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
          <BestOffersContainer>
            <BestOffersHeading>
              <strong>BEST OFFERS</strong>
              <i class="bi bi-tag" style={{ marginLeft: "8px" }}></i>
            </BestOffersHeading>
            <BestOffersHeading>
              <strong>BEST PRICE:</strong>{" "}
              <strong style={{ color: "#ff905a" }}>Rs. 1108</strong>
              <ul
                style={{
                  fontSize: "15px",
                  marginTop: "10px",
                  fontWeight: "400",
                }}
              >
                <li>Applicable on: Orders above Rs. 3999</li>
                <li>
                  Coupon code: <strong>EXTRA500</strong>
                </li>
                <li>
                  Coupon Discount: 13% off upto Rs. 500 (check cart for final
                  savings)
                </li>
              </ul>
              <ViewProducts>View Eligible Products</ViewProducts>
            </BestOffersHeading>
            <BestOffersHeading>
              <strong>
                10% Instant Discount on ICICI Bank Credit and Debit Cards
              </strong>{" "}
              <ul
                style={{
                  fontSize: "15px",
                  marginTop: "10px",
                  fontWeight: "400",
                }}
              >
                <li>Min spend Rs 3,000; Max discount Rs 1,000. TCA</li>
              </ul>
              <ViewProducts>View Eligible Products</ViewProducts>
            </BestOffersHeading>
            <BestOffersHeading>
              <strong>10% Instant Discount on Axis Bank Credit Cards</strong>{" "}
              <ul
                style={{
                  fontSize: "15px",
                  marginTop: "10px",
                  fontWeight: "400",
                }}
              >
                <li>in spend Rs 2,500; Max discount Rs 1,000. TCA</li>
              </ul>
              <ViewProducts>View Eligible Products</ViewProducts>
            </BestOffersHeading>
            <BestOffersHeading>
              <strong>Flat Rs 150 Cashback on Paytm Wallet.</strong>{" "}
              <ul
                style={{
                  fontSize: "15px",
                  marginTop: "10px",
                  fontWeight: "400",
                }}
              >
                <li>Min spend Rs 1,500 TCA</li>
              </ul>
              <ViewProducts>View Eligible Products</ViewProducts>
            </BestOffersHeading>
            <BestOffersHeading>
              <strong>Get upto Rs 500 Cashback on ZestMoney.</strong>{" "}
              <ul
                style={{
                  fontSize: "15px",
                  marginTop: "10px",
                  fontWeight: "400",
                }}
              >
                <li>Shop with 0% Interest* EMIs</li>
              </ul>
              <ViewProducts>View Eligible Products</ViewProducts>
            </BestOffersHeading>
            <BestOffersHeading>
              <strong>10% Instant Discount + 5% Unlimited Cashback.</strong>{" "}
              <ul
                style={{
                  fontSize: "15px",
                  marginTop: "10px",
                  fontWeight: "400",
                }}
              >
                <li>Shop with Flipkart Axis Bank Credit Card</li>
              </ul>
              <ViewProducts>View Eligible Products</ViewProducts>
            </BestOffersHeading>
            <BestOffersHeading>
              <strong>EMI option available</strong>{" "}
              <ul
                style={{
                  fontSize: "15px",
                  marginTop: "10px",
                  fontWeight: "400",
                }}
              >
                <li>EMI starting from Rs.60/month</li>
              </ul>
              <ViewProducts>View Plan</ViewProducts>
            </BestOffersHeading>
          </BestOffersContainer>
          <hr />
        </div>
      </ProductContainer>
    </>
  );
};

export default Product;
