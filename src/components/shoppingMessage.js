import * as React from "react";
import Space from "./space";

function ShoppingMessage(props) {
  const imgUrl =
    "https://res.cloudinary.com/benblog-cloudinary/image/upload/v1655113795/BENMART/online-shopping_ob21wd.png";

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <img style={{ objectFit: "contain", height: "20rem" }} src={imgUrl} />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          paddingLeft: "2rem",
        }}
      >
        <div>
          <p style={{ fontFamily: "Montserrat", fontSize: "2rem" }}>
            Shop whenever you want, however you want
          </p>
          <Space height="1.5rem" />
          <p
            style={{
              fontFamily: "Montserrat",
              fontSize: "1.5rem",
              color: "gray",
            }}
          >
            Shopping smarter doesn’t have to be harder. Start with Benmart via
            web, the App or our extension and let us do the deal-finding for
            you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ShoppingMessage;
