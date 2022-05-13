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
import AddressForm from "../../../components/customer/addressForm";
import Space from "../../../components/customer/space";

// utils
import compareAddress from "../../../utils/customer/compareAddress";

function Shipping() {
  const navigate = useNavigate();

  // context
  var { customer, isAuthenticated } = React.useContext(LoginContext);

  var [orders, setOrders] = React.useState([]);
  var [orderTotal, setOrderTotal] = React.useState(0);

  var [street, setStreet] = React.useState("");
  var [city, setCity] = React.useState("");
  var [region, setRegion] = React.useState("");
  var [country, setCountry] = React.useState("");

  var [hasAddress, setHasAddress] = React.useState(false);

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

  function handleSubmit(e) {
    e.preventDefault();

    var address = {
      street: street,
      city: city,
      region: region,
      country: country,
    };

    var orderSummary = JSON.parse(localStorage.getItem("orderSummary"));

    orderSummary["address"] = address;

    localStorage.setItem("orderSummary", JSON.stringify(orderSummary));

    navigate("/summary");
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

      function checkCustomerAddress() {
        if (customer["address"] !== null) {
          // customer has an address
          setStreet(customer["address"]["street"]);
          setCity(customer["address"]["city"]);
          setRegion(customer["address"]["region"]);
          setCountry(customer["address"]["country"]);

          hasAddress(true);
        }
      }

      checkCustomerAddress();
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

          <AddressForm
            onSubmitForm={handleSubmit}
            street={street}
            onChangeStreet={(e) => setStreet(e.currentTarget.value)}
            city={city}
            onChangeCity={(e) => setCity(e.currentTarget.value)}
            region={region}
            onChangeRegion={(e) => setRegion(e.currentTarget.value)}
            country={country}
            onChangeCountry={(e) => setCountry(e.currentTarget.value)}
          />
        </Cell>
      </Grid>
    </>
  );
}

export default Shipping;
