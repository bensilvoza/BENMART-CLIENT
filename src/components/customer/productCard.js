import * as React from "react";
import Space from "./space";

function ProductCard(props) {
  var [border, setBorder] = React.useState("1px solid lightgray");

  function handleMouseEnter() {
    setBorder("1px solid black");
  }

  function handleMouseLeave() {
    setBorder("1px solid lightgray");
  }

  return (
    <div
      style={{
        padding: "1rem",
        border: border,
        borderRadius: ".5rem",
      }}
    >
      <img
        style={{ width: "100%", height: "10rem", objectFit: "cover" }}
        src={props.url}
        alt={props.filename}
      />
      <div style={{ height: ".5rem" }}></div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>₱{props.price}.00</div>
        <div style={{ color: "darkred" }}>
          <i className="bi bi-heart"></i>
        </div>
      </div>
      <Space height=".8rem" />
      <div
        style={{
          cursor: "pointer",
        }}
        onClick={props.onClickProduct}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div style={{ fontWeight: "600" }}>{props.name}</div>
        <div>{props.description}</div>
      </div>
    </div>
  );
}

export default ProductCard;
