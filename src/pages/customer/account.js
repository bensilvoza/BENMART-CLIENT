// libraries
import * as React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// HTML parser
import parse from "html-react-parser";

// Base Web
import { Grid, Cell } from "baseui/layout-grid";

// context
import { LoginContext } from "../../contexts/customer/loginContext";

// components
import HeaderNavigationCompact from "../../components/headerNavigationCompact";
import PersonalInformation from "../../components/personalInformation";
import Orders from "../../components/orders";
import Foooter from "../../components/footer";
import Space from "../../components/space";

function Account() {
  const navigate = useNavigate();

  // context
  var { customer } = React.useContext(LoginContext);

  var [ordersInformation, setOrdersInformation] = React.useState([]);
  var [address, setAddress] = React.useState("");

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

      function getAddress() {
        var addressCopy = "";
        addressCopy = addressCopy + customer["address"]["street"];
        addressCopy = addressCopy + " " + customer["address"]["city"];
        addressCopy = addressCopy + " " + customer["address"]["region"];
        addressCopy = addressCopy + " " + customer["address"]["country"];
        return setAddress(addressCopy);
      }
      getAddress();
    }
    run();
  }, []);

  console.log(customer);
  console.log(ordersInformation);

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
          <HeaderNavigationCompact
            onClickProducts={handleClickProducts}
            onClickCart={handleClickCart}
            onClickAccount={handleClickAccount}
          />

          <Space height="3rem" />
        </Cell>

        <PersonalInformation />

        <Cell span={12}>
          <Space height="4rem" />
        </Cell>

        <Cell span={8}>
          <h1
            style={{
              fontFamily: "Montserrat",
              fontSize: "2rem",
              fontWeight: "700",
            }}
          >
            My Orders
          </h1>
          <Space height="2rem" />
        </Cell>

        {ordersInformation.map((orderInformation) => (
          <>
            <Orders
              orderID={orderInformation["ID"]}
              address={address}
              orders={orderInformation["orders"]}
              total={orderInformation["total"]}
              paymentMethod={orderInformation["paymentMethod"].toUpperCase()}
            />
            <Cell span={12}>
              <Space height="2rem" />
              <div style={{ textAlign: "center", fontSize: "2rem" }}>
                <i className="bi bi-three-dots m-0"></i>
              </div>
              <Space height="2rem" />
            </Cell>
          </>
        ))}
      </Grid>

      <div
        style={{
          height: ".1rem",
          backgroundColor: "lightgray",
          marginTop: "4rem",
        }}
      ></div>

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
