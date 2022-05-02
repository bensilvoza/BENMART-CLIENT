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
          <span style={{ fontWeight: "700", marginRight: ".2rem" }}>
            © BENMART.{" "}
          </span>
          All Rights Reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
