// libraries
import * as React from "react";

import Space from "../../components/customer/space";

// HTML parser
import parse from "html-react-parser";

// Base Web
import { Cell } from "baseui/layout-grid";
import { FormControl } from "baseui/form-control";
import { Button, KIND } from "baseui/button";
import { Input } from "baseui/input";
import { Checkbox, STYLE_TYPE, LABEL_PLACEMENT } from "baseui/checkbox";

function PersonalInformation(props) {
  // put the state here
  return (
    <Cell span={8}>
      <Space height="1rem" />
      <h1 style={{ fontFamily: "Montserrat", fontSize: "1.5rem" }}>
        Personal Information
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

        <Space height="1rem" />

        <h4 style={{ fontFamily: "Montserrat", fontSize: "1.5rem" }}>
          Customer Address
        </h4>
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

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Button
              overrides={{
                BaseButton: {
                  style: {
                    marginRight: ".5rem",
                  },
                },
              }}
              kind={KIND.secondary}
            >
              CANCEL
            </Button>

            <Button type="submit">UPDATE</Button>
          </div>

          <div>
            <Checkbox
              checked={props.isChecked}
              checkmarkType={STYLE_TYPE.toggle}
              onChange={props.onChangeIsChecked}
              labelPlacement={LABEL_PLACEMENT.right}
            >
              Toggle to Update Information
            </Checkbox>
          </div>
        </div>
      </form>

      <Space height="4rem" />
    </Cell>
  );
}

export default PersonalInformation;
