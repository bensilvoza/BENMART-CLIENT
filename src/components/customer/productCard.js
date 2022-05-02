import * as React from "react";
import Space from "./space";

function ProductCard(props) {
  return (
    <div
      style={{
        padding: "1rem",
        border: "1px solid lightgray",
        borderRadius: ".5rem",
        cursor: "pointer",
      }}
      onClick={props.onClickProduct}
    >
      <img src={props.url} alt={props.filename} />
      <div style={{ height: ".5rem" }}></div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>₱{props.price}.00</div>
        <div style={{ color: "darkred" }}>
          <i className="bi bi-heart"></i>
        </div>
      </div>
      <Space height=".8rem" />
      <div style={{ fontWeight: "600" }}>{props.name}</div>
      <div>{props.description}</div>
    </div>
  );
}

export default ProductCard;
