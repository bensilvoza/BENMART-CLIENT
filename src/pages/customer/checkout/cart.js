// libraries
import * as React from "react";
import { useNavigate } from "react-router-dom";

// Base Web
import { Grid, Cell } from "baseui/layout-grid";
import { Button } from "baseui/button";

// context
import { LoginContext } from "../../../contexts/customer/loginContext";

// components
import HeaderNavigation from "../../../components/customer/headerNavigation";
import CartItems from "../../../components/customer/cartItems";
import Notification from "../../../components/customer/notification";
import Space from "../../../components/customer/space";

// utils
import thousandSeparator from "../../../utils/customer/thousandSeparator";

function Cart() {
  const navigate = useNavigate();

  // context
  var { customer, isAuthenticated } = React.useContext(LoginContext);

  var [orders, setOrders] = React.useState([]);
  var [orderTotal, setOrderTotal] = React.useState(0);

  var [showNotif, setShowNotif] = React.useState(false);
  var [notifBorder, setNotifBorder] = React.useState("");
  var [notifColor, setNotifColor] = React.useState("");
  var [notifMessage, setNotifMessage] = React.useState("");

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
    if (isAuthenticated == true) {
      var orderSummary = {
        ID: Math.floor(Math.random() * 1000000000),
        customerID: customer["ID"],
        orders: orders,
        address: "",
        total: orderTotal,
        paymentMethod: "COD",
        paid: false,
      };

      localStorage.setItem("orderSummary", JSON.stringify(orderSummary));

      navigate("/shipping");
    } else {
      setShowNotif(true);
      setNotifBorder("1px solid darkred");
      setNotifColor("darkred");
      setNotifMessage("Login required");

      // adding setTimeout
      // setTimeout is asynchronous
      setTimeout(function () {
        setShowNotif(false);
        setNotifBorder("");
        setNotifColor("");
        setNotifMessage("");
      }, 5000);
    }
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
      {showNotif && (
        <Notification
          border={notifBorder}
          color={notifColor}
          message={notifMessage}
        />
      )}

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
          <div style={{ visibility: showNotif ? "hidden" : "visible" }}>
            <HeaderNavigation />
          </div>
          <Space height="1rem" />
        </Cell>

        <Cell span={8}>
          <Space height="2rem" />
          <h1 style={{ fontFamily: "Montserrat", fontSize: "2rem" }}>
            Shopping Cart
          </h1>
          <Space height="1rem" />
        </Cell>

        <Cell span={12}></Cell>

        {orders.map((order) => (
          <CartItems
            image={order["image"]["url"]}
            productName={order["productName"]}
            orderQuantity={order["quantity"]}
            total={thousandSeparator(order["total"])}
            onClickDeleteItem={function () {
              handleClickDeleteItem(order["ID"]);
            }}
          />
        ))}

        <Cell span={8}>
          <Space height="2rem" />
          {orderTotal == 0 && (
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "1.4rem",
                textAlign: "center",
                fontStyle: "italic",
                color: "gray",
              }}
            >
              Cart is empty
            </p>
          )}

          {orderTotal > 0 && (
            <>
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
              <Button onClick={handleClickCheckout}>PROCEED TO CHECKOUT</Button>
            </>
          )}
          <Space height="8rem" />
        </Cell>
      </Grid>
    </>
  );
}

export default Cart;
