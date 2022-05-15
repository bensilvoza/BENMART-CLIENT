import * as React from "react";
import { Checkbox, LABEL_PLACEMENT } from "baseui/checkbox";

function PaymentMethod(props) {
  // put the state here

  return (
    <>
      <h1
        style={{
          fontFamily: "Montserrat",
          fontSize: "1.5rem",
          marginBottom: "1rem",
        }}
      >
        Payment Method
      </h1>

      <h2
        style={{ fontFamily: "Montserrat", fontSize: "1.5rem", color: "gray" }}
      >
        Select Method
      </h2>

      <div>
        <Checkbox
          checked={props.cod}
          onChange={props.onChangeCod}
          labelPlacement={LABEL_PLACEMENT.right}
        >
          Cash on Delivery
        </Checkbox>

        <Checkbox
          checked={props.gcash}
          onChange={props.onChangeGcash}
          labelPlacement={LABEL_PLACEMENT.right}
        >
          Gcash
        </Checkbox>

        <Checkbox
          checked={props.paypal}
          onChange={props.onChangePaypal}
          labelPlacement={LABEL_PLACEMENT.right}
        >
          <div>Paypal</div>
          <div style={{ color: "gray" }}>
            After clicking “Complete order”, you will be redirected to PayPal to
            complete your purchase securely.
          </div>
        </Checkbox>
      </div>
    </>
  );
}

export default PaymentMethod;
