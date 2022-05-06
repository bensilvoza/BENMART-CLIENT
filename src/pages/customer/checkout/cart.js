// libraries
import * as React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Base Web
import { Grid, Cell } from "baseui/layout-grid";
import { Button } from "baseui/button";
import { Notification, KIND as NOTIFICATIONKIND } from "baseui/notification";

// components
import HeaderNavigation from "../../../components/customer/headerNavigation";
import Space from "../../../components/customer/space";

// utils
import thousandSeparator from "../../../utils/customer/thousandSeparator";

function Cart() {
  const navigate = useNavigate();

  var [orders, setOrders] = React.useState([]);
  var [orderTotal, setOrderTotal] = React.useState(0);

  // destroy is not a function
  // error occured when you put
  // async function in useEffect
  // parent loop
  React.useEffect(function () {
    async function run() {
      var orders = JSON.parse(localStorage.getItem("orders"));

      var orderTotalCopy = 0;
      for (var order of orders) {
        orderTotalCopy = orderTotalCopy + order["total"];
      }
      setOrderTotal(orderTotalCopy);
      setOrders(orders);
    }
    run();
  }, []);

  // count every render
  // console.log("render: " + Math.random());
  console.log(orders);
  return (
    <>
      <Grid
        overrides={{
          Grid: {
            style: {
              display: "flex",
              justifyContent: "center",
            },
          },
        }}
      >
        <Cell span={12}>
          <Space height="2rem" />
          <HeaderNavigation />
          <Space height="1rem" />
        </Cell>

        <Cell span={10}>
          <Space height="2rem" />
          <h1 style={{ fontFamily: "Montserrat", fontSize: "2rem" }}>
            Shopping Cart
          </h1>
          <Space height="1rem" />
        </Cell>

        <Cell span={12}></Cell>

        <Cell span={12}></Cell>

        {orders.map((order) => (
          <>
            <Cell span={2}>
              <img src={order["image"]["url"]} />
            </Cell>
            <Cell span={2}>
              <p style={{ fontFamily: "Montserrat", fontSize: "1.1rem" }}>
                {order["productName"]}
              </p>
            </Cell>
            <Cell span={1}>
              <p style={{ fontFamily: "Montserrat", fontSize: "1.1rem" }}>
                {order["quantity"]}
              </p>
            </Cell>
            <Cell span={3}>
              <p style={{ fontFamily: "Montserrat", fontSize: "1.1rem" }}>
                ₱{thousandSeparator(order["total"])}.00
              </p>
            </Cell>
            <Cell span={1}>
              <div style={{ fontSize: "1.3rem", color: "gray" }}>
                <i className="bi bi-trash"></i>
              </div>
            </Cell>

            <Cell span={9}>
              <div
                style={{
                  height: "1px",
                  backgroundColor: "lightgray",
                }}
              ></div>
            </Cell>

            <Cell span={12}>
              <Space height="1rem" />
            </Cell>
          </>
        ))}

        <Cell span={9}>
          <Space height="2rem" />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "1.5rem",
                fontWeight: "900",
                color: "gray",
              }}
            >
              TOTAL
            </p>
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "1.5rem",
                fontWeight: "900",
                color: "gray",
              }}
            >
              ₱{thousandSeparator(orderTotal)}.00
            </p>
          </div>
          <div
            style={{
              height: "10px",
              backgroundColor: "lightgray",
              marginBottom: "1rem",
            }}
          ></div>
          <Button onClick={() => alert("click")}>PROCEED TO CHECKOUT</Button>
          <Space height="6rem" />
        </Cell>
      </Grid>
    </>
  );
}

export default Cart;
