// libraries
import * as React from "react";
import { useNavigate } from "react-router-dom";

// Base Web
import { Grid, Cell } from "baseui/layout-grid";
import { Button } from "baseui/button";

// components
import HeaderNavigation from "../../../components/customer/headerNavigation";
import CheckoutNavigation from "../../../components/customer/checkoutNavigation";
import AddressForm from "../../../components/customer/addressForm";
import Space from "../../../components/customer/space";

// utils
import thousandSeparator from "../../../utils/customer/thousandSeparator";

function Shipping() {
  const navigate = useNavigate();

  var [orders, setOrders] = React.useState([]);
  var [orderTotal, setOrderTotal] = React.useState(0);

  function handleClickDeleteItem(ID) {
    // do not directly modify state
    // copy it first using standard
    // immutability concern
    var ordersCopy = [...orders].filter(function (order) {
      return order["ID"] !== ID;
    });

    var orderTotalCopy = 0;
    for (var order of ordersCopy) {
      orderTotalCopy = orderTotalCopy + order["total"];
    }

    // update orders in localStorage
    localStorage.setItem("orders", JSON.stringify(ordersCopy));

    setOrderTotal(orderTotalCopy);
    setOrders(ordersCopy);
  }

  function handleClickCheckout() {
    navigate("/shipping");
  }

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
          <Space height="3rem" />
        </Cell>

        <CheckoutNavigation />

        <Cell span={12}></Cell>

        <Cell span={6}>
          <Space height="1rem" />
          <h1
            style={{
              fontFamily: "Montserrat",
              fontSize: "2rem",
              fontWeight: "600",
            }}
          >
            Shipping
          </h1>
          <Space height="1rem" />

          <AddressForm />
        </Cell>
      </Grid>
    </>
  );
}

export default Shipping;
