import * as React from "react";
import { Grid, Cell } from "baseui/layout-grid";
import Space from "./space";

function CartItems(props) {
  return (
    <>
      <Cell span={1}>
        <img src={props.image} />
      </Cell>
      <Cell span={2}>
        <p style={{ fontFamily: "Montserrat", fontSize: "1.1rem" }}>
          {props.productName}
        </p>
      </Cell>
      <Cell span={1}>
        <p style={{ fontFamily: "Montserrat", fontSize: "1.1rem" }}>
          {props.orderQuantity}
        </p>
      </Cell>
      <Cell span={3}>
        <p style={{ fontFamily: "Montserrat", fontSize: "1.1rem" }}>
          ₱{props.total}.00
        </p>
      </Cell>
      <Cell span={1}>
        <div
          onClick={props.onClickDeleteItem}
          style={{ fontSize: "1.3rem", color: "gray", cursor: "pointer" }}
        >
          <i className="bi bi-trash"></i>
        </div>
      </Cell>

      <Cell span={8}>
        <div
          style={{
            height: "1px",
            backgroundColor: "lightgray",
          }}
        ></div>
      </Cell>

      <Cell span={12}>
        <Space height="1rem" />
      </Cell>
    </>
  );
}

export default CartItems;
