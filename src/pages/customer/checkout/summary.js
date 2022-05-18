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
import HeaderNavigationCompact from "../../../components/customer/headerNavigationCompact";
import CheckoutNavigation from "../../../components/customer/checkoutNavigation";
import OrderSummary from "../../../components/customer/orderSummary";
import Space from "../../../components/customer/space";

// utils
import compareAddress from "../../../utils/customer/compareAddress";

function Summary() {
  const navigate = useNavigate();

  // context
  var { customer, isAuthenticated } = React.useContext(LoginContext);

  var [orderSummary, setOrderSummary] = React.useState({});
  var [orderTotal, setOrderTotal] = React.useState(0);
  var [address, setAddress] = React.useState("");

  // destroy is not a function
  // error occured when you put
  // async function in useEffect
  // parent loop
  React.useEffect(function () {
    // order summary can be found on local storage
    var orderSummaryLocalStorage = JSON.parse(
      localStorage.getItem("orderSummary")
    );
    async function run() {
      function getOrderSummary() {
        setOrderSummary(orderSummaryLocalStorage);

        var orderTotalCopy = 0;
        for (var order of orderSummaryLocalStorage["orders"]) {
          orderTotalCopy = orderTotalCopy + order["total"];
        }
        setOrderTotal(orderTotalCopy);
      }
      getOrderSummary();

      function getAddress() {
        var addressCopy = "";
        addressCopy =
          addressCopy + orderSummaryLocalStorage["address"]["street"];
        addressCopy =
          addressCopy + " " + orderSummaryLocalStorage["address"]["city"];
        addressCopy =
          addressCopy + " " + orderSummaryLocalStorage["address"]["region"];
        addressCopy =
          addressCopy + " " + orderSummaryLocalStorage["address"]["country"];
        return setAddress(addressCopy);
      }
      getAddress();
    }
    run();
  }, []);

  console.log(address);
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
          <HeaderNavigationCompact />
          <Space height="3rem" />
        </Cell>

        <CheckoutNavigation />

        <Cell span={12}>
          <Space height="2rem" />
        </Cell>

        <Cell span={12}></Cell>
        <OrderSummary
          address={address}
          orders={
            orderSummary["orders"] == undefined ? [] : orderSummary["orders"]
          }
          total={orderTotal}
        />
      </Grid>
    </>
  );
}

export default Summary;
