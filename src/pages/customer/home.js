// libraries
import * as React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// contexts
import { ProductsContext } from "../../contexts/customer/productsContext";

// components
import HeaderNavigationCompact from "../../components/customer/headerNavigationCompact";
import CategoryCard from "../../components/customer/categoryCard";
import ProductCard from "../../components/customer/productCard";
import FeedbackCard from "../../components/customer/feedbackCard";
import Foooter from "../../components/customer/footer";
import Space from "../../components/customer/space";

// HTML parser
import parse from "html-react-parser";

// Base Web
import { Grid, Cell } from "baseui/layout-grid";
import HomepageBanner from "../../components/customer/homepageBanner";

function Home() {
  const navigate = useNavigate();

  // context
  var { products, handleProducts } = React.useContext(ProductsContext);

  var categoryIconUrls = [
    "https://res.cloudinary.com/benblog-cloudinary/image/upload/v1653748846/BENMART/perfume_tgbkpz.png",
    "https://res.cloudinary.com/benblog-cloudinary/image/upload/v1653748846/BENMART/wall-clock_u1lpck.png",
    "https://res.cloudinary.com/benblog-cloudinary/image/upload/v1653748845/BENMART/tshirt_kzjp1i.png",
    "https://res.cloudinary.com/benblog-cloudinary/image/upload/v1653749726/BENMART/cloth_p3kffz.png",
    "https://res.cloudinary.com/benblog-cloudinary/image/upload/v1653748845/BENMART/jeans_kqg4vp.png",
    "https://res.cloudinary.com/benblog-cloudinary/image/upload/v1653748845/BENMART/cap_beenkb.png",
    "https://res.cloudinary.com/benblog-cloudinary/image/upload/v1653748845/BENMART/flip-flops_e14cb5.png",
    "https://res.cloudinary.com/benblog-cloudinary/image/upload/v1653748845/BENMART/football-shorts_wyjn53.png",
  ];

  var [showProducts, setShowProducts] = React.useState([]);
  var [isOpen, setIsOpen] = React.useState(false);

  function handleClickProducts() {
    navigate("/products");
  }

  function handleClickCart() {
    navigate("/cart");
  }

  function handleClickAccount() {
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

  // destroy is not a function
  // error occured when you put
  // async function in useEffect
  // parent parameter
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
          <HeaderNavigationCompact
            onClickProducts={handleClickProducts}
            onClickCart={handleClickCart}
            onClickAccount={handleClickAccount}
            close={handleClickCloseSearchModal}
            isOpen={isOpen}
            handleClickOpenSearchModal={handleClickOpenSearchModal}
          />

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
          <Cell span={3}>
            <CategoryCard url={categoryIconUrl} />
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

        {/*
        homepage footer image temporarily hidden
        <Cell span={12}>
          <div>
            <img
              src="https://hasura.io/static/footer-img-79b3cfc0ceb3c7e466198ae09e1d4e6e.png"
              alt=""
            />
          </div>
        </Cell>
        */}
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
