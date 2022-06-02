import * as React from "react";
import { useNavigate } from "react-router-dom";

// Base Web
import { FormControl } from "baseui/form-control";
import { Button, KIND } from "baseui/button";
import { Input } from "baseui/input";

function RegisterForm(props) {
  const navigate = useNavigate();

  function handleClickSignIn() {
    navigate("/login");
  }

  return (
    <div>
      <h1 style={{ fontFamily: "Montserrat", fontSize: "2rem" }}>
        Create account
      </h1>
      <form onSubmit={props.onSubmitForm}>
        <FormControl label="Firstname">
          <Input
            type="text"
            required
            value={props.firstnameValue}
            onChange={props.onChangeFirstname}
          />
        </FormControl>

        <FormControl label="Lastname">
          <Input
            type="text"
            required
            value={props.lastnameValue}
            onChange={props.onChangeLastname}
          />
        </FormControl>

        <FormControl label="Email">
          <Input
            type="email"
            required
            value={props.emailValue}
            onChange={props.onChangeEmail}
          />
        </FormControl>

        <FormControl label="Password">
          <Input
            type="password"
            required
            value={props.passwordValue}
            onChange={props.onChangePassword}
          />
        </FormControl>
        <Button
          overrides={{
            BaseButton: {
              style: {
                width: "100%",
                marginBottom: "5px",
              },
            },
          }}
          type="submit"
        >
          CREATE ACCOUNT
        </Button>
      </form>
      <Button
        overrides={{
          BaseButton: {
            style: {
              width: "100%",
            },
          },
        }}
        kind={KIND.secondary}
        onClick={handleClickSignIn}
      >
        SIGN IN
      </Button>
    </div>
  );
}

export default RegisterForm;
