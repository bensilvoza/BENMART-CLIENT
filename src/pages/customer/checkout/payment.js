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
import HeaderNavigationCompact from "../../../components/customer/headerNavigationCompact";
import CheckoutNavigation from "../../../components/customer/checkoutNavigation";
import PaymentMethod from "../../../components/customer/paymentMethod";
import Space from "../../../components/customer/space";

function Payment() {
  const navigate = useNavigate();

  // context
  var { customer, isAuthenticated } = React.useContext(LoginContext);

  var [orders, setOrders] = React.useState([]);
  var [orderTotal, setOrderTotal] = React.useState(0);

  // payment method
  var [cod, setCod] = React.useState(false);
  var [gcash, setGcash] = React.useState(false);
  var [paypal, setPaypal] = React.useState(false);

  async function handleCompleteOrder() {
    var orderInformation = {
      ID: Math.floor(Math.random() * 1000000000),
      customerID: customer["ID"],
      orders: orders,
      total: orderTotal,
      paymentMethod: "cod",
      paid: false,
    };

    // paypal
    var createPaymentJSON = {
      intent: "sale",
      payer: {
        payment_method: "paypal",
      },
      redirect_urls: {
        return_url: "http://localhost:3000/payment/success",
        cancel_url: "http://localhost:3000/payment",
      },
      transactions: [{ amount: { currency: "PHP", total: orderTotal } }],
    };

    // load or data
    var load = {
      paymentMethod: "paypal",
      createPaymentJSON: createPaymentJSON,
    };

    // Paypal payment method
    // communicate to the backend
    if (paypal === true) {
      var send = await axios.post("http://localhost:5000/payment", load);

      // terminate
      return;
    }

    // COD payment method
    // communicate to the backend
    // JWT
    var token = JSON.parse(localStorage.getItem("jwt"));

    var config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };
    var send = await axios.post(
      "http://localhost:5000/orders",
      orderInformation,
      config
    );

    if (send["data"]["message"] == "OK") {
      // orders successfully saved to db
      navigate("/account");
    }
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
          <HeaderNavigationCompact />
          <Space height="3rem" />
        </Cell>

        <CheckoutNavigation />

        <Cell span={12}>
          <Space height="1rem" />
        </Cell>

        <Cell span={6}>
          <Space height="1rem" />
          <PaymentMethod
            cod={cod}
            onChangeCod={function (e) {
              setGcash(false);
              setPaypal(false);
              setCod(e.target.checked);
            }}
            gcash={gcash}
            onChangeGcash={function (e) {
              setCod(false);
              setPaypal(false);
              setGcash(e.target.checked);
            }}
            paypal={paypal}
            onChangePaypal={function (e) {
              setCod(false);
              setGcash(false);
              setPaypal(e.target.checked);
            }}
          />
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
