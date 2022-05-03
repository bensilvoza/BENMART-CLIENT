// libraries
import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

// HTML parser
import parse from "html-react-parser";

// Base Web
import { Grid, Cell } from "baseui/layout-grid";

// context
import { LoginContext } from "../../../contexts/customer/loginContext";

// components
import HeaderNavigation from "../../../components/customer/headerNavigation";
import Foooter from "../../../components/customer/footer";
import ProductDetailsInfoAndCart from "../../../components/customer/productDetailsInfoAndCart";
import MainNotification from "../../../components/customer/mainNotification";
import Space from "../../../components/customer/space";

function Product() {
  const navigate = useNavigate();
  var { ID } = useParams();

  // context
  var { customer, isAuthenticated } = React.useContext(LoginContext);

  var [product, setProduct] = React.useState(undefined);
  var [showIsAuthenticatedMessage, setShowIsAuthenticatedMessage] =
    React.useState(false);

  function handleClickProducts() {
    navigate("/products");
  }

  function handleClickAddToCart() {
    if (isAuthenticated === false) {
      // customer is not logged in
      setShowIsAuthenticatedMessage(true);

      // adding setTimeout
      // setTimeout is asynchronous
      setTimeout(function () {
        return setShowIsAuthenticatedMessage(false);
      }, 10000);

      // terminate
      return;
    }

    console.log("I am still working");
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
        <MainNotification backgroundColor="#fcc0b8" message="Login required" />
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
          <HeaderNavigation onClickProducts={handleClickProducts} />
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
            />
          </Cell>
        )}

        <Cell span={12}>
          <Space height="5rem" />
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
