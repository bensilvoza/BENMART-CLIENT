// libraries
import * as React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// components
import HeaderNavigation from "../../components/customer/headerNavigation";
import LoginForm from "../../components/customer/loginForm";
import Foooter from "../../components/customer/footer";
import Space from "../../components/customer/space";

// HTML parser
import parse from "html-react-parser";

// Base Web
import { Grid, Cell } from "baseui/layout-grid";

function Login() {
  const navigate = useNavigate();

  var [email, setEmail] = React.useState("");
  var [password, setPassword] = React.useState("");

  function handleClickProducts() {
    navigate("/products");
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    console.log(email);
    console.log(password);
  }

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
          <HeaderNavigation onClickProducts={handleClickProducts} />
        </Cell>

        <Cell span={6}>
          <Space height="6rem" />
          <LoginForm
            onSubmitForm={handleSubmitForm}
            emailValue={email}
            onChangeEmail={(e) => setEmail(e.currentTarget.value)}
            passwordValue={password}
            onChangePassword={(e) => setPassword(e.currentTarget.value)}
          />
        </Cell>
      </Grid>
    </>
  );
}

export default Login;
