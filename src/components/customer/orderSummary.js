import * as React from "react";
import { useNavigate } from "react-router-dom";

// base web
import { Grid, Cell } from "baseui/layout-grid";
import { Button, KIND } from "baseui/button";

// components
import Space from "./space";

// utils
import thousandSeparator from "../../utils/thousandSeparator";

function OrderSummary(props) {
  const navigate = useNavigate();

  function handleClickGoBack() {
    navigate("/shipping");
  }

  function handleClickPayment() {
    navigate("/payment");
  }

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
                <p>₱0.00</p>
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
            <li className="list-group-item">
              <Button
                overrides={{
                  BaseButton: {
                    style: {
                      width: "100%",
                      marginBottom: ".3rem",
                    },
                  },
                }}
                onClick={handleClickPayment}
              >
                CONTINUE TO PAYMENT
              </Button>
              <Button
                overrides={{
                  BaseButton: {
                    style: {
                      width: "100%",
                    },
                  },
                }}
                kind={KIND.tertiary}
                onClick={handleClickGoBack}
              >
                GO BACK TO SHIPPING
              </Button>
            </li>
          </ul>
        </div>
      </Cell>
    </>
  );
}

export default OrderSummary;
