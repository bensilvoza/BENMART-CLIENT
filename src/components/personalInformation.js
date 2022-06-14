// libraries
import * as React from "react";

import Space from "./space";

// HTML parser
import parse from "html-react-parser";

// Base Web
import { Cell } from "baseui/layout-grid";
import { FormControl } from "baseui/form-control";
import { Button, KIND } from "baseui/button";
import { Input } from "baseui/input";
import { Checkbox, STYLE_TYPE, LABEL_PLACEMENT } from "baseui/checkbox";

function PersonalInformation(props) {
  var [checked, setChecked] = React.useState(false);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <p
          style={{
            fontFamily: "Montserrat",
            fontSize: "1.5rem",
          }}
        >
          Personal Information
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontFamily: "Montserrat",
              fontSize: "1.1rem",
              color: "darkred",
            }}
          >
            LOGOUT
          </p>
        </div>
      </div>
      <form onSubmit={props.onSubmitForm}>
        <FormControl label="Firstname">
          <Input
            type="text"
            required
            value={props.firstname}
            onChange={props.onChangeFirstname}
          />
        </FormControl>

        <FormControl label="Lastname">
          <Input
            type="text"
            required
            value={props.lastname}
            onChange={props.onChangeLastname}
          />
        </FormControl>

        <FormControl label="Email">
          <Input
            type="email"
            required
            value={props.email}
            onChange={props.onChangeEmail}
          />
        </FormControl>

        <FormControl label="Old Password">
          <Input
            type="password"
            required
            value={props.password}
            onChange={props.onChangePassword}
          />
        </FormControl>

        <FormControl label="New Password">
          <Input
            type="password"
            required
            value={props.password}
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
          <div style={{ visibility: checked ? "visible" : "hidden" }}>
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
              checked={checked}
              checkmarkType={STYLE_TYPE.toggle}
              onChange={(e) => setChecked(e.target.checked)}
              labelPlacement={LABEL_PLACEMENT.right}
            >
              {checked == true
                ? "Click checkbox to cancel update"
                : "Click checkbox to update information"}
            </Checkbox>
          </div>
        </div>
      </form>

      <Space height="4rem" />
    </>
  );
}

export default PersonalInformation;
