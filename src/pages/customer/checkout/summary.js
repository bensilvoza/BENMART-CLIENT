// libraries
import * as React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// context
import { LoginContext } from "../../../contexts/customer/loginContext";

// Base Web
import { Grid, Cell } from "baseui/layout-grid";
import { Button } from "baseui/button";

// components
import HeaderNavigation from "../../../components/customer/headerNavigation";
import CheckoutNavigation from "../../../components/customer/checkoutNavigation";
import OrderSummary from "../../../components/customer/orderSummary";
import Space from "../../../components/customer/space";

// utils
import compareAddress from "../../../utils/customer/compareAddress";

function Summary() {
  const navigate = useNavigate();

  // context
  var { customer, isAuthenticated } = React.useContext(LoginContext);

  var [orders, setOrders] = React.useState([]);
  var [orderTotal, setOrderTotal] = React.useState(0);
  var [address, setAddress] = React.useState("");

  // destroy is not a function
  // error occured when you put
  // async function in useEffect
  // parent loop
  React.useEffect(function () {
    async function run() {
      function getOrders() {
        // orders location is from localStorage
        var orders = JSON.parse(localStorage.getItem("orders"));
        setOrders(orders);

        var orderTotalCopy = 0;
        for (var order of orders) {
          orderTotalCopy = orderTotalCopy + order["total"];
        }
        setOrderTotal(orderTotalCopy);
      }
      getOrders();

      function getAddress() {
        var addressCopy = "";
        addressCopy = addressCopy + customer["address"]["street"];
        addressCopy = addressCopy + " " + customer["address"]["city"];
        addressCopy = addressCopy + " " + customer["address"]["region"];
        addressCopy = addressCopy + " " + customer["address"]["country"];
        return setAddress(addressCopy);
      }
      getAddress();
    }
    run();
  }, []);

  // count every render
  // console.log("render: " + Math.random());

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
          <Space height="3rem" />
        </Cell>

        <CheckoutNavigation />

        <Cell span={12}>
          <Space height="2rem" />
        </Cell>

        <Cell span={12}></Cell>
        <OrderSummary address={address} orders={orders} total={orderTotal} />
      </Grid>
    </>
  );
}

export default Summary;
