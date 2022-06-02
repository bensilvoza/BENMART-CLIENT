// libraries
import * as React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// HTML parser
import parse from "html-react-parser";

// Base Web
import { Grid, Cell } from "baseui/layout-grid";
import { Notification, KIND as NOTIFICATIONKIND } from "baseui/notification";

// context
import { LoginContext } from "../../contexts/customer/loginContext";

// components
import HeaderNavigationCompact from "../../components/headerNavigationCompact";
import LoginForm from "../../components/loginForm";
import Foooter from "../../components/footer";
import Space from "../../components/space";

function Login() {
  const navigate = useNavigate();

  // context
  var { handleCustomerMate, handleAuthenticated } =
    React.useContext(LoginContext);

  var [email, setEmail] = React.useState("");
  var [password, setPassword] = React.useState("");

  var [showLoginMessage, setShowLoginMessage] = React.useState(false);

  function handleClickProducts() {
    navigate("/products");
  }

  async function handleSubmitForm(e) {
    e.preventDefault();

    var customer = {
      email: email,
      password: password,
    };

    // communicate to the backend
    var send = await axios.post("http://localhost:5000/login", customer);

    if (send["data"]["message"] === "ERROR") {
      // Incorrect credentials
      setShowLoginMessage(true);
      // adding setTimeout
      // setTimeout is asynchronous
      setTimeout(function () {
        return setShowLoginMessage(false);
      }, 10000);
    } else {
      // login
      var customer = send["data"]["customer"];

      // save JWT to localStorage
      localStorage.setItem(
        "jwt",
        JSON.stringify(`Bearer ${send["data"]["token"]}`)
      );

      // context
      // why save function to variable,
      // to use the function as a storage,
      // not to execute call or trigger the function
      // write customer details to context
      handleCustomerMate(customer);
      var handleAuthenticatedMateLocal = handleAuthenticated;
      // set customer as authenticated or login
      handleAuthenticatedMateLocal();

      // navigate customer to homepage
      navigate("/");
    }
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
          <HeaderNavigationCompact onClickProducts={handleClickProducts} />
        </Cell>

        <Cell span={6}>
          <Space height="1rem" />
          <Notification
            kind={NOTIFICATIONKIND.negative}
            overrides={{
              Body: {
                style: {
                  visibility: showLoginMessage === true ? "visible" : "hidden",
                },
              },
            }}
          >
            Incorrect credentials
          </Notification>

          <Space height="1rem" />
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
