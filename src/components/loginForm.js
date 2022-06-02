import * as React from "react";
import { useNavigate } from "react-router-dom";

// Base Web
import { FormControl } from "baseui/form-control";
import { Button, KIND } from "baseui/button";
import { Input } from "baseui/input";

function LoginForm(props) {
  const navigate = useNavigate();

  function handleClickCreateAccount() {
    navigate("/register");
  }
  return (
    <div>
      <h1 style={{ fontFamily: "Montserrat", fontSize: "2rem" }}>Sign in</h1>
      <form onSubmit={props.onSubmitForm}>
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
          SIGN IN
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
        onClick={handleClickCreateAccount}
      >
        CREATE ACCOUNT
      </Button>
    </div>
  );
}

export default LoginForm;
