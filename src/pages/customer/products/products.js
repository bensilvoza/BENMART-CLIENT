// libraries
import * as React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// components
import HeaderNavigationCompact from "../../../components/customer/headerNavigationCompact";
import ProductCard from "../../../components/customer/productCard";
import Foooter from "../../../components/customer/footer";
import ProductsFilter from "../../../components/customer/productsFilter";
import CompareProducts from "../../../components/customer/compareProducts";
import wishList from "../../../components/customer/wishList";
import Space from "../../../components/customer/space";

// HTML parser
import parse from "html-react-parser";

// Base Web
import { Grid, Cell } from "baseui/layout-grid";
import WishList from "../../../components/customer/wishList";

// note
// add sidebar to products page
// inspired from bench online store

function Products() {
  const navigate = useNavigate();

  var [products, setProducts] = React.useState([]);

  function handleClickProduct(ID) {
    navigate("/products/" + ID);
  }

  // destroy is not a function
  // error occured when you put
  // async function in useEffect
  // parent loop
  React.useEffect(function () {
    async function run() {
      async function getProducts() {
        var response = await axios.get("http://localhost:5000/products");
        return response["data"];
      }

      var products = await getProducts();
      var productsCopy = [];
      for (var i = 0; i < products.length; i++) {
        productsCopy.push(products[i]);
      }
      setProducts(productsCopy);
    }
    run();
  }, []);

  return (
    <>
      {/*
        note: add sidebar to products page inspired from bench online store
      */}
      <Grid>
        <Cell span={12}>
          <HeaderNavigationCompact />
          <Space height="3rem" />
        </Cell>

        <Cell span={3}>
          <ProductsFilter />
          <Space height="1rem" />
          <CompareProducts />
          <Space height="1rem" />
          <WishList />
          <Space height="1rem" />
        </Cell>

        {products.map((product, index) => (
          <Cell key={product["ID"]} span={3}>
            <ProductCard
              url={product["images"][0]["url"]}
              price={product["price"]}
              name={product["name"]}
              description={parse(product["description"].substring(0, 100))}
              onClickProduct={function () {
                handleClickProduct(product["ID"]);
              }}
            />
            {index % 2 === 1 && <Space height="1rem" />}
          </Cell>
        ))}

        <Cell span={12}>
          <Space height="6rem" />
        </Cell>
      </Grid>

      <div style={{ height: ".1rem", backgroundColor: "lightgray" }}></div>

      <Grid>
        <Cell span={12}>
          <Space height="1rem" />
          <Foooter />
          <Space height="8rem" />
        </Cell>
      </Grid>
    </>
  );
}

export default Products;
