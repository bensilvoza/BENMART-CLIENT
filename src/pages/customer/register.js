// libraries
import * as React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// HTML parser
import parse from "html-react-parser";

// Base Web
import { Grid, Cell } from "baseui/layout-grid";
import { Notification } from "baseui/notification";

// components
import HeaderNavigationCompact from "../../components/headerNavigationCompact";
import RegisterForm from "../../components/registerForm";
import Space from "../../components/space";

function Register() {
  const navigate = useNavigate();

  var [firstname, setFirstname] = React.useState("");
  var [lastname, setLastname] = React.useState("");
  var [email, setEmail] = React.useState("");
  var [password, setPassword] = React.useState("");

  var [registrationMessage, setRegistrationMessage] = React.useState(false);

  function handleClickProducts() {
    navigate("/products");
  }

  async function handleSubmitForm(e) {
    e.preventDefault();

    // note:
    // mobileNumber field will be added soon
    var customer = {
      ID: Math.floor(Math.random() * 1000000000),
      firstname: firstname,
      lastname: lastname,
      email: email,
      mobileNumber: "",
      password: password,
      addressID: "",
    };

    // communicate to the backend
    var send = await axios.post("http://localhost:5000/register", customer);

    if (send["data"]["message"] === "OK") {
      // successful registration
      setFirstname("");
      setLastname("");
      setEmail("");
      setPassword("");

      setRegistrationMessage(true);
      // adding setTimeout
      // setTimeout is asynchronous
      setTimeout(function () {
        return setRegistrationMessage(false);
      }, 10000);
    }
  }

  // count every render
  // console.log("render: " + Math.random());

  return (
    <>
      <HeaderNavigationCompact onClickProducts={handleClickProducts} />
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
        <Cell span={6}>
          <Space height="1rem" />
          <Notification
            overrides={{
              Body: {
                style: {
                  visibility:
                    registrationMessage === true ? "visible" : "hidden",
                },
              },
            }}
          >
            Customer registered!
          </Notification>

          <Space height="1rem" />
          <RegisterForm
            onSubmitForm={handleSubmitForm}
            firstnameValue={firstname}
            onChangeFirstname={(e) => setFirstname(e.currentTarget.value)}
            lastnameValue={lastname}
            onChangeLastname={(e) => setLastname(e.currentTarget.value)}
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

export default Register;
