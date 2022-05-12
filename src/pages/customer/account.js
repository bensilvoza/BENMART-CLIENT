// libraries
import * as React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// HTML parser
import parse from "html-react-parser";

// Base Web
import { Grid, Cell } from "baseui/layout-grid";
import HomepageBanner from "../../components/customer/homepageBanner";

// context
import { LoginContext } from "../../contexts/customer/loginContext";

// components
import HeaderNavigation from "../../components/customer/headerNavigation";
import PersonalInformation from "../../components/customer/personalInformation";
import Orders from "../../components/customer/orders";
import Foooter from "../../components/customer/footer";
import Space from "../../components/customer/space";

function Account() {
  const navigate = useNavigate();

  // context
  var { customer } = React.useContext(LoginContext);

  var [ordersInformation, setOrdersInformation] = React.useState([]);

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
      async function getOrders() {
        var response = await axios.get("http://localhost:5000/orders");
        return response["data"];
      }

      var ordersCopy = await getOrders();

      ordersCopy = ordersCopy.filter(function (order) {
        return order["customerID"] == customer["ID"];
      });
      setOrdersInformation(ordersCopy);
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

        <Cell span={12}>
          <Space height="2rem" />
        </Cell>

        <Cell span={9}>
          <h1
            style={{
              fontFamily: "Montserrat",
              fontSize: "1.5rem",
              fontWeight: "700",
            }}
          >
            My Orders
          </h1>
          <Space height="2rem" />
        </Cell>

        {ordersInformation.map((orderInformation) => (
          <Orders
            orderID={orderInformation["ID"]}
            orders={orderInformation["orders"]}
            total={orderInformation["orderTotal"]}
          />
        ))}
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
