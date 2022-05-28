// libraries
import * as React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// HTML parser
import parse from "html-react-parser";

// Base Web
import { Grid, Cell } from "baseui/layout-grid";

// components
import HeaderNavigationCompact from "../../../components/customer/headerNavigationCompact";
import ProductCard from "../../../components/customer/productCard";
import Foooter from "../../../components/customer/footer";
import ProductsFilter from "../../../components/customer/productsFilter";
import CompareProducts from "../../../components/customer/compareProducts";
import WishList from "../../../components/customer/wishList";
import Space from "../../../components/customer/space";

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

      var response = await getProducts();
      var bundle = [];
      var p = [];
      for (var i = 0; i < response.length; i++) {
        p.push(response[i]);
        if (p.length == 3) {
          bundle.push(p);
          p = [];
        }
      }

      setProducts(bundle);
    }
    run();
  }, []);

  return (
    <>
      <Grid>
        <Cell span={12}>
          <HeaderNavigationCompact />
          <Space height="3rem" />
        </Cell>

        <Cell span={12}>
          <h1 style={{ fontFamily: "Montserrat", fontSize: "1.5rem" }}>
            Browse Products
          </h1>
          <Space height="1rem" />
        </Cell>

        <Cell span={3}>
          <ProductsFilter />
          <Space height="1rem" />
          <CompareProducts />
          <Space height="1rem" />
          <WishList />
          <Space height="1rem" />
        </Cell>

        <Cell span={9}>
          {products.map((product, index) => (
            <>
              {/* element need to bundle to 3 per div => <div> <> <> <> </div> */}
              <div
                key={Math.floor(Math.random() * 1000000000)}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ width: "30%" }} key={product[0]["ID"]}>
                  <ProductCard
                    url={product[0]["images"][0]["url"]}
                    price={product[0]["price"]}
                    name={product[0]["name"]}
                    description={parse(
                      product[0]["description"].substring(0, 100)
                    )}
                    onClickProduct={function () {
                      handleClickProduct(product[0]["ID"]);
                    }}
                  />
                </div>

                <div style={{ width: "30%" }} key={product[0]["ID"]}>
                  <ProductCard
                    url={product[1]["images"][0]["url"]}
                    price={product[1]["price"]}
                    name={product[1]["name"]}
                    description={parse(
                      product[1]["description"].substring(0, 100)
                    )}
                    onClickProduct={function () {
                      handleClickProduct(product[1]["ID"]);
                    }}
                  />
                </div>

                <div style={{ width: "30%" }} key={product[0]["ID"]}>
                  <ProductCard
                    url={product[2]["images"][0]["url"]}
                    price={product[2]["price"]}
                    name={product[2]["name"]}
                    description={parse(
                      product[2]["description"].substring(0, 100)
                    )}
                    onClickProduct={function () {
                      handleClickProduct(product[2]["ID"]);
                    }}
                  />
                </div>
              </div>

              <Space height="1rem" />
            </>
          ))}
        </Cell>

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
