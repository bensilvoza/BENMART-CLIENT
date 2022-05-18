import * as React from "react";
import { useNavigate } from "react-router-dom";

function HeaderNavigationCompact(props) {
  const navigate = useNavigate();

  function handleClickBenmart() {
    navigate("/");
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          fontFamily: "Montserrat",
          fontSize: "1.1rem",
          fontWeight: "500",
          backgroundColor: "#F5F5F5",
          padding: "2rem",
        }}
      >
        <p style={{ cursor: "pointer" }} onClick={handleClickBenmart}>
          BENMART
        </p>
        <p style={{ cursor: "pointer" }} onClick={props.onClickProducts}>
          Products
        </p>
        <p style={{ cursor: "pointer" }} onClick={props.onClickCart}>
          Cart
        </p>
        <p style={{ cursor: "pointer" }} onClick={props.handleClickOrders}>
          Orders
        </p>
        <p style={{ cursor: "pointer" }} onClick={props.onClickAccount}>
          Account
        </p>
        <div>
          <span>
            <i className="bi bi-search m-0"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default HeaderNavigationCompact;
