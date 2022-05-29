import * as React from "react";
import { useNavigate } from "react-router-dom";

// context
import { IsOpenSearchModalContext } from "../../contexts/customer/isOpenSearchModalContext";

// components
import SearchModal from "./searchModal";

function HeaderNavigationCompact(props) {
  const navigate = useNavigate();

  // context
  var { handleIsOpen } = React.useContext(IsOpenSearchModalContext);

  function handleClickBenmart() {
    navigate("/");
  }

  function handleClickOpenSearchModal() {
    var handleIsOpenMate = handleIsOpen;
    handleIsOpenMate();
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
          /* backgroundColor: "#F5F5F5", */
          padding: "2rem",
          borderBottom: "1px solid lightgray",
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
        <div onClick={handleClickOpenSearchModal} style={{ cursor: "pointer" }}>
          <span>
            <i className="bi bi-search m-0"></i>
          </span>
          <SearchModal />
        </div>
      </div>
    </div>
  );
}

export default HeaderNavigationCompact;
