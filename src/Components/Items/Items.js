import styled from "styled-components";
import { items } from "../../data";
import { useEffect, useState } from "react";

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

const Items = ({ sidebarFilters, sidebarFiltersApplied, sort, searchText }) => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [isUsingSearch, setIsUsingSearch] = useState(false);

  useEffect(() => {
    setProducts(items);
  }, [products]);

  useEffect(() => {
    if (sidebarFiltersApplied) {
      let filteredItems = products.filter((arrayItem) => {
        return arrayItem.gender === sidebarFilters.gender;
      });

      if (sidebarFilters.discount > 0) {
        filteredItems = products.filter((arrayItem) => {
          return arrayItem.discount >= sidebarFilters.discount;
        });
      }
      setFilterProducts(filteredItems);
      console.log(filteredItems);
    }
  }, [products, sidebarFiltersApplied, sidebarFilters]);

  useEffect(() => {
    if (sidebarFiltersApplied) {
      if (sort === "desc") {
        setFilterProducts((prev) =>
          [...prev].sort((a, b) => b.sellingPrice - a.sellingPrice)
        );
      } else if (sort === "asc") {
        setFilterProducts((prev) =>
          [...prev].sort((a, b) => a.sellingPrice - b.sellingPrice)
        );
      } else if (sort === "discount") {
        setFilterProducts((prev) =>
          [...prev].sort((a, b) => a.discount - b.discount)
        );
      } else {
      }
    }
  }, [sort, sidebarFiltersApplied]);

  useEffect(() => {
    if (!sidebarFiltersApplied) {
      if (sort === "desc") {
        setProducts((prev) =>
          [...prev].sort((a, b) => b.sellingPrice - a.sellingPrice)
        );
      } else if (sort === "asc") {
        setProducts((prev) =>
          [...prev].sort((a, b) => a.sellingPrice - b.sellingPrice)
        );
      } else if (sort === "discount") {
        setProducts((prev) =>
          [...prev].sort((a, b) => a.discount - b.discount)
        );
      } else {
      }
    }
  }, [products, sort, sidebarFiltersApplied]);

  useEffect(() => {
    if (searchText.length > 0) {
      setIsUsingSearch(true);
    } else {
      setIsUsingSearch(false);
    }
  }, [searchText, isUsingSearch]);

  useEffect(() => {
    if (isUsingSearch) {
      const searchFiltered = products.filter((product) => {
        if (searchText === "") {
          return product;
        } else if (
          product.brandName.toLowerCase().includes(searchText.toLowerCase()) ||
          product.itemInfo.toLowerCase().includes(searchText.toLowerCase())
        ) {
          return product;
        }
      });
      setFilterProducts(searchFiltered);
    }
  }, [isUsingSearch, products, searchText]);

  return (
    <ItemsContainer>
      {sidebarFiltersApplied || isUsingSearch
        ? filterProducts.map((item) => (
            <ItemContainer>
              <ImgContainer>Hello</ImgContainer>
              <InformationContainer>
                <BrandName>{item.brandName}</BrandName>
                <ItemInfo>{item.itemInfo}</ItemInfo>
                <PricingInfoContainer>
                  <SellingPrice>Rs. {item.sellingPrice}</SellingPrice>
                  <OriginalPrice>Rs. {item.originalPrice}</OriginalPrice>
                  <Discount>( {item.discount}% OFF )</Discount>
                </PricingInfoContainer>
              </InformationContainer>
            </ItemContainer>
          ))
        : products.map((item) => (
            <ItemContainer>
              <ImgContainer>Hello</ImgContainer>
              <InformationContainer>
                <BrandName>{item.brandName}</BrandName>
                <ItemInfo>{item.itemInfo}</ItemInfo>
                <PricingInfoContainer>
                  <SellingPrice>Rs. {item.sellingPrice}</SellingPrice>
                  <OriginalPrice>Rs. {item.originalPrice}</OriginalPrice>
                  <Discount>( {item.discount}% OFF )</Discount>
                </PricingInfoContainer>
              </InformationContainer>
            </ItemContainer>
          ))}
    </ItemsContainer>
  );
};

export default Items;
