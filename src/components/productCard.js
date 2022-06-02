import * as React from "react";
import axios from "axios";

// context
import { LoginContext } from "../contexts/customer/loginContext";

// components
import Space from "./space";

function ProductCard(props) {
  // context
  var { customer, isAuthenticated } = React.useContext(LoginContext);

  var [border, setBorder] = React.useState("1px solid lightgray");

  function handleMouseEnter() {
    setBorder("1px solid black");
  }

  function handleMouseLeave() {
    setBorder("1px solid lightgray");
  }

  async function handleClickHeart() {
    if (isAuthenticated == false) {
      // login required
      return;
    }
    console.log("this is from hndle click heart");
    console.log(props.productID);

    console.log("hahahah");
    console.log(customer);

    var productID = props.productID;

    // load or data
    var load = { customerEmail: customer["email"], productID: productID };

    // communicate to the backend
    var response = await axios.post("http://localhost:5000/favorite", load);
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
        <div
          style={{ color: "pink", cursor: "pointer" }}
          onClick={handleClickHeart}
        >
          <i className={"bi bi-heart"}></i>
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
