import { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";

const ItemsContainer = styled.div`
  height: 75%;
  display: flex;
  flex-direction: column;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid grey;
  padding: 5px;
`;

const ItemTitle = styled.h2`
  font-size: 24px;
`;

const ItemPrice = styled.h3`
  font-size: 14px;
  padding-bottom: 10px;
`;

const Size = styled.h3`
  font-size: 14px;
  padding-bottom: 10px;
`;

const Cart = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div
      style={{
        backgroundColor: "red",
        marginLeft: "50px",
        marginRight: "50px",
      }}
    >
      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <Modal isOpen={modalIsOpen} style={{ content: { top: "20%" } }}>
        <h1>Cart</h1>
        <ItemsContainer>
          <ItemContainer>
            <ItemTitle>Roadster</ItemTitle>
            <ItemPrice>Rs 699</ItemPrice>
            <Size>
              Size: S{" "}
              <button
                style={{
                  backgroundColor: "white",
                  border: "2px solid grey",
                  width: "5rem",
                  marginLeft: "5px",
                }}
              >
                Remove
              </button>
            </Size>
          </ItemContainer>
          <hr />
          <ItemContainer>
            <ItemTitle>Roadster</ItemTitle>
            <ItemPrice>Rs 699</ItemPrice>
            <Size>
              Size: S{" "}
              <button
                style={{
                  backgroundColor: "white",
                  border: "2px solid grey",
                  width: "5rem",
                  marginLeft: "5px",
                }}
              >
                Remove
              </button>
            </Size>
          </ItemContainer>
          <hr />
        </ItemsContainer>
        <button
          onClick={() => setModalIsOpen(false)}
          style={{
            backgroundColor: "white",
            border: "5px solid grey",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          Close Modal
        </button>
      </Modal>
    </div>
  );
};

export default Cart;
