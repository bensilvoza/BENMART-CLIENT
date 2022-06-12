// libraries
import * as React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// contexts
import { ProductsContext } from "../../contexts/customer/productsContext";
import { LoginContext } from "../../contexts/customer/loginContext";
import { FavoriteProductsContext } from "../../contexts/customer/favoriteProductsContext";

// HTML parser
import parse from "html-react-parser";

// Base Web
import { Grid, Cell } from "baseui/layout-grid";
import HomepageBanner from "../../components/homepageBanner";

// components
import HeaderNavigationCompact from "../../components/headerNavigationCompact";
import CategoryCard from "../../components/categoryCard";
import ProductCard from "../../components/productCard";
import FeedbackCard from "../../components/feedbackCard";
import Foooter from "../../components/footer";
import Space from "../../components/space";

// utils
import categoryIconUrls from "../../utils/categoryIconUrls";
import categoryDescriptions from "../../utils/categoryDescriptions";

function Home() {
  const navigate = useNavigate();

  // contexts
  var { products, handleProducts } = React.useContext(ProductsContext);
  var { customer, isAuthenticated } = React.useContext(LoginContext);
  var { handleFavoriteProducts } = React.useContext(FavoriteProductsContext);

  var [showProducts, setShowProducts] = React.useState([]);
  var [isOpen, setIsOpen] = React.useState(false);

  var [heart, setHeart] = React.useState(false);

  function handleClickProducts() {
    navigate("/products");
  }

  function handleClickCart() {
    navigate("/cart");
  }

  function handleClickAccount() {
    if (isAuthenticated == true) {
      return navigate("/account");
    }

    navigate("/login");
  }

  function handleClickProduct(ID) {
    navigate("/products/" + ID);
  }

  function handleClickOpenSearchModal() {
    setIsOpen(true);
  }

  function handleClickCloseSearchModal() {
    setIsOpen(false);
  }

  React.useEffect(function () {
    async function run() {
      if (products.length == 0) {
        // currently products is empty
        async function getProducts() {
          var response = await axios.get("http://localhost:5000/");
          return response["data"];
        }

        var response = await getProducts();

        // save products as global variable
        // some sort of a database
        handleProducts(response);

        var productsCopy = [];
        for (var i = 0; i <= 11; i++) {
          productsCopy.push(response[i]);
        }
        setShowProducts(productsCopy);
      } else {
        // currently products has data
        var productsCopy = [];
        for (var i = 0; i <= 11; i++) {
          productsCopy.push(products[i]);
        }
        setShowProducts(productsCopy);
      }

      if (isAuthenticated == true) {
        // communicate to backend
        // and get favorite products list
        var response = await axios.get(
          "http://localhost:5000/favorite?email=" + customer["email"]
        );
        // context
        // without using mate
        handleFavoriteProducts(response.data);
      }
    }
    run();
  }, []);

  return (
    <>
      <HeaderNavigationCompact
        onClickProducts={handleClickProducts}
        onClickCart={handleClickCart}
        onClickAccount={handleClickAccount}
        close={handleClickCloseSearchModal}
        isOpen={isOpen}
        handleClickOpenSearchModal={handleClickOpenSearchModal}
      />

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

        <HomepageBanner />

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

        {categoryIconUrls.map((categoryIconUrl, index) => (
          <Cell key={categoryIconUrl} span={3}>
            <CategoryCard
              url={categoryIconUrl}
              description={categoryDescriptions[index]}
            />
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
          <Cell key={product["ID"]} span={3}>
            <ProductCard
              productID={product["ID"]}
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
          <Space height="10rem" />
        </Cell>
      </Grid>
    </>
  );
}

export default Home;
