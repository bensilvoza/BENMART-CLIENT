import * as React from "react";
import { useNavigate } from "react-router-dom";

// css
import "./headerNavigation.css";

// Base Web
import { Input } from "baseui/input";

// Chakra
import {
  InputGroup,
  InputLeftElement,
  Input as InputChakra,
} from "@chakra-ui/react";

function Header(props) {
  const navigate = useNavigate();

  function handleClickBenmart() {
    navigate("/");
  }

  function handleClickMenuIcon() {
    let r = document.querySelector(":root");
    r.style.setProperty("--menuIcon", "none");
    r.style.setProperty("--headerContainer", "block");
  }

  React.useEffect(function () {
    // to get current screen size
    // to be specific the width
    window.addEventListener("resize", function () {
      if (window.innerWidth <= 1250) {
        let r = document.querySelector(":root");
        r.style.setProperty("--menuIcon", "block");
        r.style.setProperty("--headerContainer", "none");
      }

      if (window.innerWidth >= 1251) {
        let r = document.querySelector(":root");
        r.style.setProperty("--menuIcon", "none");
      }
    });
  });

  return (
    <div>
      <div onClick={handleClickMenuIcon} className="menuIcon">
        <i className="bi bi-menu-button m-0"></i>
      </div>
      <div className="headerContainer">
        <p className="brandName" onClick={handleClickBenmart}>
          BENMART
        </p>
        <p className="mainItems" onClick={props.onClickProducts}>
          <span>
            <i className="bi bi-collection m-0"></i>
          </span>{" "}
          Products
        </p>
        <p className="mainItems" onClick={props.onClickCart}>
          <span>
            <i className="bi bi-bag m-0"></i>
          </span>{" "}
          Cart
        </p>
        <p className="mainItems" onClick={props.handleClickOrders}>
          <span>
            <i className="bi bi-journal-text m-0"></i>
          </span>{" "}
          Orders
        </p>
        <p className="mainItems" onClick={props.onClickAccount}>
          <span style={{ color: "gray" }}>
            <i className="bi bi-person-circle m-0"></i>
          </span>{" "}
          Account
        </p>
        <div className="searchContainer">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={
                <span
                  style={{
                    color: "gray",
                    fontSize: "1.2rem",
                  }}
                >
                  <i className="bi bi-search"></i>
                </span>
              }
            />
            <InputChakra
              type="text"
              focusBorderColor="black"
              placeholder="search our store"
              _placeholder={{ color: "gray", paddingLeft: ".2rem" }}
            />
          </InputGroup>
        </div>
      </div>
    </div>
  );
}

export default Header;
