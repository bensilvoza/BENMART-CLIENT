// libraries
import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

// HTML parser
import parse from "html-react-parser";

// Base Web
import { Grid, Cell } from "baseui/layout-grid";

// components
import HeaderNavigation from "../../../components/customer/headerNavigation";
import Foooter from "../../../components/customer/footer";
import ProductDetailsInfoAndCart from "../../../components/customer/productDetailsInfoAndCart";
import Space from "../../../components/customer/space";

function Product() {
  const navigate = useNavigate();
  var { ID } = useParams();

  var [product, setProduct] = React.useState(undefined);

  function handleClickProducts() {
    navigate("/products");
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

  console.log(product);

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
