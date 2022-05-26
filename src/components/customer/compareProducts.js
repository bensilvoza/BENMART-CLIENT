import * as React from "react";

// components
import Space from "./space";

function CompareProducts(props) {
  return (
    <div
      style={{
        border: "1px solid lightgray",
        borderRadius: "0.1rem",
        padding: "1rem",
      }}
    >
      <p style={{ fontFamily: "Montserrat", fontSize: "1.3rem" }}>
        Compare Products
      </p>
      <Space height="1rem" />
      <p>You have no items in here</p>
    </div>
  );
}

export default CompareProducts;
