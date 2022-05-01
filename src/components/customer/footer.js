import * as React from "react";

function Footer(props) {
  // put the state here
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        fontFamily: "Montserrat",
        fontSize: "1rem",
        fontWeight: "700",
      }}
    >
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "1.3rem" }}>About Us</div>
        <div style={{ marginRight: "1.3rem" }}>FAQ</div>
        <div style={{ marginRight: "1.3rem" }}>Help</div>
        <div style={{ marginRight: "1.3rem" }}>Contacts</div>
        <div>Terms & Conditions</div>
      </div>
      <div style={{ display: "flex" }}>
        <div>
          © BENMART.{" "}
          <span style={{ fontWeight: "400" }}>All Rights Reserved.</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
