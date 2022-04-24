import * as React from "react";
import { GiBilledCap } from "react-icons/gi";

function Caps(props) {
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
          <GiBilledCap />
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
        <div>Caps</div>
      </div>
    </div>
  );
}

export default Caps;
