import * as React from "react";
import Space from "./space";

// base web
import { Button } from "baseui/button";
import Product from "../../pages/customer/products/product";

function ProductDetailsInfoAndCart(props) {
  // put the state here
  var [orderQuantity, setOrderQuantity] = React.useState(1);

  function handleClickSubtractOrder() {
    if (orderQuantity === 1) return;

    // create a copy of state first
    var orderQuantityCopy = orderQuantity;
    setOrderQuantity(orderQuantityCopy - 1);
  }

  function handleClickAddOrder() {
    var orderQuantityCopy = orderQuantity;
    setOrderQuantity(orderQuantityCopy + 1);
  }

  return (
    <div>
      <h1 style={{ fontFamily: "Montserrat", fontSize: "1.5rem" }}>
        {props.name}
      </h1>
      <Space height=".4rem" />
      <div style={{ height: ".3rem", backgroundColor: "lightgray" }}></div>
      <Space height="1rem" />
      <p style={{ fontFamily: "Montserrat", fontSize: "1.2rem" }}>
        {props.description}
      </p>

      <Space height="2rem" />
      <p
        style={{
          color: "gray",
          fontStyle: "italic",
          fontFamily: "Montserrat",
          fontSize: "1rem",
        }}
      >
        SHIPPING INFORMATION
      </p>
      <p
        style={{
          color: "gray",
          fontFamily: "Montserrat",
          fontSize: "1rem",
        }}
      >
        Our Online Store receives orders non-stop and you will receive your
        order based on the standard delivery time.
      </p>
      <Space height="2rem" />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex" }}>
          <span
            onClick={handleClickSubtractOrder}
            style={{
              color: "gray",
              fontSize: "2rem",
              marginRight: ".5rem",
              cursor: "pointer",
            }}
          >
            <i className="bi bi-dash-circle"></i>
          </span>
          <span
            style={{ fontSize: "2rem", marginRight: ".5rem", color: "gray" }}
          >
            {orderQuantity}
          </span>
          <span
            onClick={handleClickAddOrder}
            style={{ color: "gray", fontSize: "2rem", cursor: "pointer" }}
          >
            <i className="bi bi-plus-circle"></i>
          </span>
        </div>

        <div style={{ fontSize: "2rem" }}>
          ₱{props.price * orderQuantity}.00
        </div>
      </div>

      <div>
        <Button
          overrides={{
            BaseButton: {
              style: {
                width: "100%",
              },
            },
          }}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
}

export default ProductDetailsInfoAndCart;
