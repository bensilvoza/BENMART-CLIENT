// libraries
import * as React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// components
import HeaderNavigation from "../../components/customer/headerNavigation";
import PersonalInformation from "../../components/customer/personalInformation";
import Foooter from "../../components/customer/footer";
import Space from "../../components/customer/space";

// HTML parser
import parse from "html-react-parser";

// Base Web
import { Grid, Cell } from "baseui/layout-grid";
import HomepageBanner from "../../components/customer/homepageBanner";

function Account() {
  const navigate = useNavigate();

  var [products, setProducts] = React.useState([]);

  function handleClickProducts() {
    navigate("/products");
  }

  function handleClickCart() {
    navigate("/cart");
  }

  function handleClickAccount() {
    navigate("/login");
  }

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

  // count every render
  // console.log("render: " + Math.random());

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
          <HeaderNavigation
            onClickProducts={handleClickProducts}
            onClickCart={handleClickCart}
            onClickAccount={handleClickAccount}
          />

          <Space height="3rem" />
        </Cell>

        <PersonalInformation />
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

export default Account;
