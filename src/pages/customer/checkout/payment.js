// libraries
import * as React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// context
import { LoginContext } from "../../../contexts/customer/loginContext";

// Base Web
import { Grid, Cell } from "baseui/layout-grid";
import { Button, KIND } from "baseui/button";

// components
import HeaderNavigation from "../../../components/customer/headerNavigation";
import CheckoutNavigation from "../../../components/customer/checkoutNavigation";
import PaymentMethod from "../../../components/customer/paymentMethod";
import Space from "../../../components/customer/space";

function Payment() {
  const navigate = useNavigate();

  // context
  var { customer, isAuthenticated } = React.useContext(LoginContext);

  var [orders, setOrders] = React.useState([]);
  var [orderTotal, setOrderTotal] = React.useState(0);

  function handleCompleteOrder() {
    var orderInformation = {
      ID: Math.floor(Math.random() * 1000000000),
      customerID: customer["ID"],
      orders: orders,
      total: orderTotal,
      paymentMethod: "cod",
      paid: false,
    };

    // communicate to backend
    // ...
  }

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
          <Space height="1rem" />
        </Cell>

        <Cell span={6}>
          <Space height="1rem" />
          <PaymentMethod />
          <Space height="1.5rem" />
          <Button
            kind={KIND.tertiary}
            overrides={{
              BaseButton: {
                style: {
                  marginRight: ".5rem",
                },
              },
            }}
          >
            GO BACK
          </Button>
          <Button onClick={handleCompleteOrder}>COMPLETE ORDER</Button>
        </Cell>
      </Grid>
    </>
  );
}

export default Payment;
