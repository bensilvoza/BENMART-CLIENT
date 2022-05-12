import * as React from "react";
import { useNavigate } from "react-router-dom";

// base web
import { Grid, Cell } from "baseui/layout-grid";
import { Button, KIND } from "baseui/button";

// components
import Space from "./space";

// utils
import thousandSeparator from "../../utils/customer/thousandSeparator";

function Orders(props) {
  // put the state here

  return (
    <>
      <Cell span={5}>
        <h1
          style={{
            fontFamily: "Montserrat",
            fontSize: "1.5rem",
            fontWeight: "700",
          }}
        >
          ORDER ID
        </h1>
        <p>{props.orderID}</p>
        <hr />

        <Space height="1rem" />
        <h1
          style={{
            fontFamily: "Montserrat",
            fontSize: "1.5rem",
            fontWeight: "700",
          }}
        >
          SHIPPING
        </h1>
        <p>Address: {props.address}</p>
        <hr />

        <Space height="1rem" />
        <h1
          style={{
            fontFamily: "Montserrat",
            fontSize: "1.5rem",
            fontWeight: "700",
          }}
        >
          PAYMENT METHOD
        </h1>
        <h1>--</h1>
        <hr />

        <Space height="1rem" />
        <h1
          style={{
            fontFamily: "Montserrat",
            fontSize: "1.5rem",
            fontWeight: "700",
          }}
        >
          ORDER ITEMS
        </h1>
        {props.orders.map((order) => (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>{order["productName"]}</p>
            <p>₱{thousandSeparator(order["price"] * order["quantity"])}.00</p>
          </div>
        ))}
      </Cell>

      <Cell span={4}>
        <div>
          <ul className="list-group">
            <li
              className="list-group-item"
              style={{
                fontFamily: "Montserrat",
                fontSize: "1.5rem",
                fontWeight: "700",
                padding: "1.5rem",
              }}
            >
              ORDER SUMMARY
            </li>
            <li className="list-group-item">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>Initial</p>
                <p>₱{thousandSeparator(props.total)}.00</p>
              </div>
            </li>
            <li className="list-group-item">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>Shipping</p>
                <p style={{ fontStyle: "italic" }}>free shipping</p>
              </div>
            </li>
            <li className="list-group-item">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>Tax</p>
                <p>₱{Math.round(props.total * 0.05)}.00</p>
              </div>
            </li>
            <li className="list-group-item">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>Total</p>
                <p>
                  ₱
                  {thousandSeparator(
                    Math.round(props.total + props.total * 0.05)
                  )}
                  .00
                </p>
              </div>
            </li>
          </ul>
        </div>
        <Space height="2rem" />
      </Cell>
    </>
  );
}

export default Orders;
