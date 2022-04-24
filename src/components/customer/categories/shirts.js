import * as React from "react";
import { IoShirtOutline } from "react-icons/io5";

function Shirts(props) {
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
          <IoShirtOutline />
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
        <div>Shirts</div>
      </div>
    </div>
  );
}

export default Shirts;
