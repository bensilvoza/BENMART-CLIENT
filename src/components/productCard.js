import * as React from "react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";

// context
import { LoginContext } from "../contexts/customer/loginContext";

// components
import Space from "./space";

function ProductCard(props) {
  // context
  var { customer, isAuthenticated } = React.useContext(LoginContext);

  const toast = useToast();

  var [border, setBorder] = React.useState("1px solid lightgray");
  var [heart, setHeart] = React.useState(false);

  function handleMouseEnter() {
    setBorder("1px solid black");
  }

  function handleMouseLeave() {
    setBorder("1px solid lightgray");
  }

  async function handleClickHeart() {
    if (isAuthenticated == false) {
      // toast for login required
      toast({
        title: "LOGIN REQUIRED",
        status: "warning",
        variant: "subtle",
        position: "top",
        duration: "10000",
      });
      return;
    }

    if (heart == false) {
      setHeart(true);
    } else {
      setHeart(false);
    }

    var productID = props.productID;

    // load or data
    var load = { customerEmail: customer["email"], productID: productID };

    // communicate to the backend
    var response = await axios.post("http://localhost:5000/favorite", load);
  }

  React.useEffect(function () {
    async function run() {
      if (isAuthenticated == true) {
        async function getFavoriteProductsList() {
          // communicate to the backend
          var response = await axios.get("http://localhost:5000/favorite");
          return response;
        }

        var response = await getFavoriteProductsList();
        console.log("response");
        console.log(response);
      }
    }

    run();
  });

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
          <i className={heart ? "bi bi-heart-fill" : "bi bi-heart"}></i>
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
