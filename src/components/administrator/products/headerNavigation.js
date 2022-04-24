import * as React from "react";

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

function HeaderNavigation(props) {
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

  // count every render
  console.log("render: " + Math.random());

  return (
    <div>
      <div onClick={handleClickMenuIcon} className="menuIcon">
        <i className="bi bi-menu-button m-0"></i>
      </div>
      <div className="headerContainer">
        <p className="brandName" onClick={props.handleClickBenmart}>
          BENMART
        </p>
        <p className="mainItems" onClick={props.handleClickProducts}>
          <span>
            <i className="bi bi-collection m-0"></i>
          </span>{" "}
          Products
        </p>
        <p className="mainItems" onClick={props.handleClickOrders}>
          <span>
            <i className="bi bi-journal-text m-0"></i>
          </span>{" "}
          Orders
        </p>
        <p className="mainItems" onClick={props.handleClickAccount}>
          <span style={{ color: "gray" }}>
            <i className="bi bi-person-square m-0"></i>
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
              _placeholder={{ color: "black", paddingLeft: ".2rem" }}
            />
          </InputGroup>
        </div>
      </div>
    </div>
  );
}

export default HeaderNavigation;
