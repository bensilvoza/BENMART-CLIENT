import * as React from "react";
import { RiShoppingBag3Line } from "react-icons/ri";

function Bags(props) {
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
          <RiShoppingBag3Line />
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
        <div>Bags</div>
      </div>
    </div>
  );
}

export default Bags;
