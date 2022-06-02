import * as React from "react";
import { Grid, Cell } from "baseui/layout-grid";
import Space from "./space";

function CheckoutNavigation(props) {
  return (
    <Cell span={6}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "Montserrat",
          fontSize: "1.1rem",
        }}
      >
        <p>Sign In</p>
        <p>Shipping</p>
        <p>Summary</p>
        <p>Payment</p>
      </div>
    </Cell>
  );
}

export default CheckoutNavigation;
