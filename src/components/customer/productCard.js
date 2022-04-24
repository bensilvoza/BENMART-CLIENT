import * as React from "react";

function ProductCard(props) {
  return (
    <div>
      <img src={props.url} alt={props.filename} />
      <div style={{ height: ".5rem" }}></div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>{props.price}</div>
        <div>
          <i className="bi bi-heart"></i>
        </div>
      </div>
      <div>{props.description}</div>
    </div>
  );
}

export default ProductCard;
