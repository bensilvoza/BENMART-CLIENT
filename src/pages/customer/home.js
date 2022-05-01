// libraries
import * as React from "react";
import axios from "axios";

// components
import HeaderNavigation from "../../components/customer/headerNavigation";
import FeaturedProducts from "../../components/customer/featuredProducts";
import CategoryCard from "../../components/customer/categoryCard";
import ProductCard from "../../components/customer/productCard";
import FeedbackCard from "../../components/customer/feedbackCard";
import Foooter from "../../components/customer/footer";
import Space from "../../components/customer/space";

// HTML parser
import parse from "html-react-parser";

// Base Web
import { Grid, Cell } from "baseui/layout-grid";

function Home() {
  var categories = [
    "Fragrances",
    "Watch",
    "Shirts",
    "Premuim Tees",
    "Jeans",
    "Cap",
    "Flip flops",
    "Shorts",
  ];
  var [products, setProducts] = React.useState([]);

  // destroy is not a function
  // error occured when you put
  // async function in useEffect
  // parent loop
  React.useEffect(function () {
    async function run() {
      async function getProducts() {
        var products = await axios.get("http://localhost:5000/");
        return products["data"];
      }
      var products = await getProducts();
      var productsCopy = [];
      for (var i = 0; i <= 11; i++) {
        productsCopy.push(products[i]);
      }
      setProducts(productsCopy);
    }
    run();
  }, []);

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

          {/* featured products */}
          <Space height="2.5rem" />
          <p style={{ fontFamily: "Montserrat", fontSize: "1.5rem" }}>
            Featured Products
          </p>
          <FeaturedProducts />
          <Space height="3rem" />
        </Cell>

        {/* categories */}
        <Cell span={12}>
          <p
            style={{
              fontFamily: "Montserrat",
              fontSize: "1.5rem",
            }}
          >
            Choose Category
          </p>
        </Cell>

        {categories.map((category, index) => (
          <Cell span={3}>
            <CategoryCard name={category} />
            {index + 1 === 4 && <Space height="1rem" />}
          </Cell>
        ))}

        <Cell span={12}>
          <p
            style={{
              fontFamily: "Montserrat",
              fontSize: "1.5rem",
              marginTop: "5rem",
            }}
          >
            Browse Products
          </p>
        </Cell>

        {products.map((product, index) => (
          <Cell span={3}>
            <ProductCard
              url={product["images"][0]["url"]}
              price={product["price"]}
              name={product["name"]}
              description={parse(product["description"].substring(0, 100))}
            />
            {index % 2 === 1 && <Space height="1rem" />}
          </Cell>
        ))}

        <Cell span={12}>
          <Space height="4rem" />
          <FeedbackCard />
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

export default Home;
