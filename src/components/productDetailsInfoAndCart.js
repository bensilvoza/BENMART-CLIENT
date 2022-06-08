import * as React from "react";

// css
import "./productDetailsInfoAndCart.css";

// components
import Space from "./space";
import AddToCartNotification from "./addToCartNotification";

// base web
import { Button } from "baseui/button";

// utils
import thousandSeparator from "../utils/thousandSeparator";

function ProductDetailsInfoAndCart(props) {
  // put the state here
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
      <Space height="3rem" />

      <p className="button-heading">Color</p>
      <Space height="1rem" />
      <div>
        <div className="color-button">Lightblue</div>
        <div className="color-button">Gray</div>
        <div className="color-button">Matte Black</div>
        <div className="color-button">Pink</div>
      </div>

      <Space height="3rem" />

      <p className="button-heading">Size</p>
      <Space height="1rem" />
      <div>
        <div className="size-button">Small</div>
        <div className="size-button">Meduim</div>
        <div className="size-button">Large</div>
        <div className="size-button">Extra Large</div>
      </div>

      <Space height="3rem" />

      {props.showAddToCartNotification ? (
        <AddToCartNotification
          marginBottom=".3rem"
          message={props.notificationMessage}
          border={props.notificationBorderColor}
          color={props.notificationMessageColor}
        />
      ) : (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex" }}>
            <span
              onClick={props.onClickSubtractOrder}
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
              {props.orderQuantity}
            </span>
            <span
              onClick={props.onClickAddOrder}
              style={{ color: "gray", fontSize: "2rem", cursor: "pointer" }}
            >
              <i className="bi bi-plus-circle"></i>
            </span>
          </div>

          <div style={{ fontSize: "2rem" }}>
            ₱{thousandSeparator(props.price * props.orderQuantity)}.00
          </div>
        </div>
      )}

      <div>
        <Button
          onClick={props.onClickAddToCart}
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
