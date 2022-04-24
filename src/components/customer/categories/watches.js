import * as React from "react";

function Watches(props) {
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
          fontSize: "7rem",
          color: "gray",
        }}
      >
        <div>
          <i className="bi bi-watch"></i>
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
        <div>Watches</div>
      </div>
    </div>
  );
}

export default Watches;
