import * as React from "react";
import { useNavigate } from "react-router-dom";

// Base Web
import { FormControl } from "baseui/form-control";
import { Button } from "baseui/button";
import { Input } from "baseui/input";

function AddressForm(props) {
  const navigate = useNavigate();

  function handleClickCreateAccount() {
    navigate("/register");
  }
  return (
    <div>
      <form onSubmit={props.onSubmitForm}>
        <FormControl label="Street">
          <Input
            type="text"
            required
            value={props.street}
            onChange={props.onChangeStreet}
          />
        </FormControl>

        <FormControl label="City">
          <Input
            type="text"
            required
            value={props.city}
            onChange={props.onChangeCity}
          />
        </FormControl>

        <FormControl label="Region">
          <Input
            type="text"
            required
            value={props.region}
            onChange={props.onChangeRegion}
          />
        </FormControl>

        <FormControl label="Country">
          <Input
            type="text"
            required
            value={props.country}
            onChange={props.onChangeCountry}
          />
        </FormControl>
        <Button type="submit">Continue</Button>
      </form>
    </div>
  );
}

export default AddressForm;
