// libraries
import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Fade from "react-reveal/Fade";

// context
import { LoginContext } from "../../../contexts/customer/loginContext";

// HTML parser
import parse from "html-react-parser";

// Base Web
import { Grid, Cell } from "baseui/layout-grid";

// components
import HeaderNavigationCompact from "../../../components/customer/headerNavigationCompact";
import Foooter from "../../../components/customer/footer";
import ProductDetailsInfoAndCart from "../../../components/customer/productDetailsInfoAndCart";
import Notification from "../../../components/customer/addToCartNotification";
import Space from "../../../components/customer/space";

function Product() {
  const navigate = useNavigate();
  var { ID } = useParams();

  // context
  var { customer, isAuthenticated } = React.useContext(LoginContext);

  var [product, setProduct] = React.useState(undefined);
  var [showIsAuthenticatedMessage, setShowIsAuthenticatedMessage] =
    React.useState(false);
  var [showAddToCartNotification, setShowAddToCartNotification] =
    React.useState(false);
  var [notificationMessage, setNotificationMessage] = React.useState("");
  var [notificationBorderColor, setNotificationBorderColor] =
    React.useState("");
  var [notificationMessageColor, setNotificationMessageColor] =
    React.useState("");

  var [orderQuantity, setOrderQuantity] = React.useState(1);

  function handleClickSubtractOrder() {
    if (orderQuantity === 1) return;

    // create a copy of state first
    var orderQuantityCopy = orderQuantity;
    setOrderQuantity(orderQuantityCopy - 1);
  }

  function handleClickAddOrder() {
    var orderQuantityCopy = orderQuantity;
    setOrderQuantity(orderQuantityCopy + 1);
  }

  function handleClickProducts() {
    navigate("/products");
  }

  async function handleClickAddToCart() {
    var productID = ID;

    // communicate to the backend
    var send = await axios.get("http://localhost:5000/products/" + productID);

    var product = send["data"];

    var order = {
      ID: Math.floor(Math.random() * 1000000000),
      image: product["images"][0],
      productName: product["name"],
      price: product["price"],
      quantity: orderQuantity,
      total: product["price"] * orderQuantity,
    };

    var orders = JSON.parse(localStorage.getItem("orders"));

    if (orders == undefined) {
      // no orders found on localStorage
      // after the customer click the
      // add to cart button, store order to localStorage
      localStorage.setItem("orders", JSON.stringify([order]));
    } else {
      // orders is present at localStorage
      orders.push(order);
      localStorage.setItem("orders", JSON.stringify(orders));
    }

    // send a notification
    setShowAddToCartNotification(true);
    setNotificationMessage("Order added to cart!");
    setNotificationBorderColor("1px solid darkgreen");
    setNotificationMessageColor("darkgreen");

    // adding setTimeout
    // setTimeout is asynchronous
    setTimeout(function () {
      setShowAddToCartNotification(false);
      setNotificationMessage("");
      setNotificationBorderColor("");
      setNotificationMessageColor("");
    }, 5000);
  }

  // destroy is not a function
  // error occured when you put
  // async function in useEffect
  // parent loop
  React.useEffect(function () {
    async function run() {
      var productID = ID;
      async function getProduct() {
        var response = await axios.get(
          "http://localhost:5000/products/" + productID
        );
        return response["data"];
      }

      var product = await getProduct();
      setProduct(product);
    }
    run();
  }, []);

  return (
    <>
      {/* main notification */}
      {showIsAuthenticatedMessage === true && (
        <Fade top>
          <Notification backgroundColor="#fcc0b8" message="Login required" />
        </Fade>
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
          <HeaderNavigationCompact onClickProducts={handleClickProducts} />
          <Space height="4rem" />
        </Cell>

        {/* Product details */}
        {product !== undefined && (
          <Cell span={6}>
            <img
              style={{
                objectFit: "cover",
                width: "100%",
                height: "30rem",
                borderRadius: ".5rem",
              }}
              src={product["images"][0]["url"]}
              alt=""
            />
          </Cell>
        )}
        {product !== undefined && (
          <Cell span={6}>
            <ProductDetailsInfoAndCart
              name={product["name"]}
              price={product["price"]}
              description={parse(product["description"])}
              onClickAddToCart={handleClickAddToCart}
              showAddToCartNotification={showAddToCartNotification}
              notificationMessage={notificationMessage}
              notificationBorderColor={notificationBorderColor}
              notificationMessageColor={notificationMessageColor}
              orderQuantity={orderQuantity}
              onClickSubtractOrder={handleClickSubtractOrder}
              onClickAddOrder={handleClickAddOrder}
            />
          </Cell>
        )}

        <Cell span={12}>
          <Space height="15rem" />
        </Cell>
      </Grid>

      <div style={{ height: ".1rem", backgroundColor: "lightgray" }}></div>

      <Grid>
        <Cell span={12}>
          <Space height="1rem" />
          <Foooter />
          <Space height="5rem" />
        </Cell>
      </Grid>
    </>
  );
}

export default Product;
