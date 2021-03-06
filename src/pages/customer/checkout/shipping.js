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
import HeaderNavigationCompact from "../../../components/headerNavigationCompact";
import CheckoutNavigation from "../../../components/checkoutNavigation";
import AddressForm from "../../../components/addressForm";
import Space from "../../../components/space";

function Shipping() {
  const navigate = useNavigate();

  // context
  var { customer, isAuthenticated, handleCustomerMate } =
    React.useContext(LoginContext);

  var [orders, setOrders] = React.useState([]);
  var [orderTotal, setOrderTotal] = React.useState(0);

  var [street, setStreet] = React.useState("");
  var [city, setCity] = React.useState("");
  var [region, setRegion] = React.useState("");
  var [country, setCountry] = React.useState("");

  function handleClickDeleteItem(ID) {
    // do not directly modify state
    // copy it first using standard method
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

  async function handleSubmit(e) {
    e.preventDefault();

    var address = {
      street: street,
      city: city,
      region: region,
      country: country,
    };

    var orderSummaryLocalStorage = JSON.parse(
      localStorage.getItem("orderSummary")
    );

    // update
    orderSummaryLocalStorage["address"] = address;

    // save to localStorage
    localStorage.setItem(
      "orderSummary",
      JSON.stringify(orderSummaryLocalStorage)
    );

    // update customer
    var customerCopy = { ...customer };
    customerCopy["address"] = address;

    // communicate to the backend
    var response = axios.post(
      "http://localhost:5000/register/edit",
      customerCopy
    );

    // context
    // update customer
    handleCustomerMate(customerCopy);

    navigate("/summary");
  }

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
        var orderSummaryLocalStorage = JSON.parse(
          localStorage.getItem("orderSummary")
        );

        if (orderSummaryLocalStorage["address"]["street"] !== undefined) {
          setStreet(orderSummaryLocalStorage["address"]["street"]);
          setCity(orderSummaryLocalStorage["address"]["city"]);
          setRegion(orderSummaryLocalStorage["address"]["region"]);
          setCountry(orderSummaryLocalStorage["address"]["country"]);
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
      <HeaderNavigationCompact />
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
