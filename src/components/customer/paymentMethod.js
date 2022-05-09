import * as React from "react";
import { Checkbox, LABEL_PLACEMENT } from "baseui/checkbox";

function PaymentMethod() {
  var [cod, setCod] = React.useState(false);
  var [gcash, setGcash] = React.useState(false);
  var [paypal, setPaypal] = React.useState(false);

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
          checked={cod}
          onChange={(e) => setCod(e.target.checked)}
          labelPlacement={LABEL_PLACEMENT.right}
        >
          Cash on Delivery
        </Checkbox>

        <Checkbox
          checked={gcash}
          onChange={(e) => setGcash(e.target.checked)}
          labelPlacement={LABEL_PLACEMENT.right}
        >
          Gcash
        </Checkbox>

        <Checkbox
          checked={paypal}
          onChange={(e) => setPaypal(e.target.checked)}
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
