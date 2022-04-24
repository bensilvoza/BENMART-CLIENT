import * as React from "react";
import { BsGrid3X2Gap } from "react-icons/bs";

function SeeAll(props) {
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
          <BsGrid3X2Gap />
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
        <div>See all</div>
      </div>
    </div>
  );
}

export default SeeAll;
