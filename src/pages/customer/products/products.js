// libraries
import * as React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// contexts
import { ProductsContext } from "../../../contexts/customer/productsContext";

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

// utils
import bundler from "../../../utils/bundler";
import categoryFilter from "../../../utils/categoryFilter";
import priceFilter from "../../../utils/priceFilter";

function Products() {
  const navigate = useNavigate();

  // context
  var { products } = React.useContext(ProductsContext);

  var [productsCopy, setProductsCopy] = React.useState([]);
  var [category, setCategory] = React.useState([]);
  var [priceSlider, setPriceSlider] = React.useState([2000]);

  function handleClickProduct(ID) {
    navigate("/products/" + ID);
  }

  React.useEffect(function () {
    async function run() {
      var bundle = bundler(products);
      setProductsCopy(bundle);
    }
    run();
  }, []);

  // category
  React.useEffect(
    function () {
      async function run() {
        var bundle = undefined;

        if (category.length == 0) {
          // if no category selected
          bundle = bundler(products);
        } else {
          var result = categoryFilter(products, category[0]["label"]);
          bundle = bundler(result);
        }
        setProductsCopy(bundle);
      }
      run();
    },
    [category]
  );

  // price slider or range
  React.useEffect(
    function () {
      async function run() {
        var result = priceFilter(products, priceSlider[0]);
        var bundle = bundler(result);
        setProductsCopy(bundle);
      }
      run();
    },
    [priceSlider]
  );

  console.log(category);
  console.log(priceSlider);
  console.log(products);
  console.log(productsCopy);

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
          <ProductsFilter
            category={category}
            onChangeCategory={(params) => setCategory(params.value)}
            priceSlider={priceSlider}
            onChangePriceSlider={({ value }) => value && setPriceSlider(value)}
          />
          <Space height="1rem" />
          <CompareProducts />
          <Space height="1rem" />
          <WishList />
          <Space height="1rem" />
        </Cell>

        <Cell span={9}>
          {productsCopy.map((chunk, index) => (
            <>
              {/* element need to bundle max of 3 per div => <div> <> <> <> </div> */}
              <div
                key={Math.floor(Math.random() * 1000000000)}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {chunk.map((product, index) => (
                  <div style={{ width: "30%" }} key={product[index]["ID"]}>
                    <ProductCard
                      url={product[index]["images"][0]["url"]}
                      price={product[index]["price"]}
                      name={product[index]["name"]}
                      description={parse(
                        product[0]["description"].substring(0, 100)
                      )}
                      onClickProduct={function () {
                        handleClickProduct(product[index]["ID"]);
                      }}
                    />
                  </div>
                ))}

                <Space height="1rem" />
              </div>
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
