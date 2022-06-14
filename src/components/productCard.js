import * as React from "react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";

// context
import { LoginContext } from "../contexts/customer/loginContext";
import { FavoriteProductsContext } from "../contexts/customer/favoriteProductsContext";

// utils
import findFavoriteProductsId from "../utils/findFavoriteProductsId";
import favoriteProductsInitialUpdater from "../utils/favoriteProductsInitialUpdater";

// components
import Space from "./space";

function ProductCard(props) {
  // contexts
  var { customer, isAuthenticated } = React.useContext(LoginContext);
  var { favoriteProducts, handleFavoriteProducts } = React.useContext(
    FavoriteProductsContext
  );

  const toast = useToast();

  var [border, setBorder] = React.useState("1px solid lightgray");
  var [heart, setHeart] = React.useState(false);
  var [isHeartFeatureOpen, setIsHeartFeatureOpen] = React.useState(false);

  function handleMouseEnter() {
    setBorder("1px solid black");
  }

  function handleMouseLeave() {
    setBorder("1px solid lightgray");
  }

  function handleMouseEnterOnParentDiv() {
    // open the fave products feature
    var val = findFavoriteProductsId(favoriteProducts, props.productID);
    setHeart(val);
    setIsHeartFeatureOpen(true);
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

    // update favorite products context
    var updatedFavoriteProducts = favoriteProductsInitialUpdater(
      favoriteProducts,
      productID
    );
    handleFavoriteProducts(updatedFavoriteProducts);

    // load or data
    var load = { customerEmail: customer["email"], productID: productID };

    // communicate to the backend
    var response = axios.post("http://localhost:5000/favorite", load);
  }

  return (
    <div
      style={{
        padding: "1rem",
        border: border,
        borderRadius: ".5rem",
      }}
      onMouseEnter={handleMouseEnterOnParentDiv}
    >
      <img
        style={{ width: "100%", height: "10rem", objectFit: "cover" }}
        src={props.url}
        alt={props.filename}
      />
      <div style={{ height: ".5rem" }}></div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "1.3rem",
        }}
      >
        <div style={{ color: "gray" }}>₱{props.price}.00</div>
        <div
          style={{ color: "pink", cursor: "pointer" }}
          onClick={handleClickHeart}
        >
          {isHeartFeatureOpen ? (
            <i className={heart ? "bi bi-heart-fill" : "bi bi-heart"}></i>
          ) : (
            <i
              className={
                findFavoriteProductsId(favoriteProducts, props.productID)
                  ? "bi bi-heart-fill"
                  : "bi bi-heart"
              }
            ></i>
          )}
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
