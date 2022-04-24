import * as React from "react";
import { GiSunglasses } from "react-icons/gi";

function Eyewear(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        border: "1px solid lightgray",
        borderRadius: ".5rem",
        padding: ".5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: "10rem",
          color: "gray",
        }}
      >
        <div>
          <GiSunglasses />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          fontFamily: "Montserrat",
          fontSize: "1.5rem",
        }}
      >
        <div>Eyewear</div>
      </div>
    </div>
  );
}

export default Eyewear;
