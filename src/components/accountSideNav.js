import * as React from "react";
import Space from "./space";

function AccountSideNav(props) {
  return (
    <div>
      <p style={{ fontFamily: "Montserrat", fontSize: "1.2rem" }}>
        Hello! Christian
      </p>
      <Space height="1rem" />
      <p
        style={{
          fontFamily: "Montserrat",
          fontSize: "1.4rem",
          padding: "1rem",
          border: "1px solid lightgray",
          cursor: "pointer",
        }}
        onClick={props.onClickManageMyAccount}
      >
        Manage My Account
      </p>
      <Space height=".5rem" />
      <p
        style={{
          fontFamily: "Montserrat",
          fontSize: "1.4rem",
          padding: "1rem",
          border: "1px solid lightgray",
          cursor: "pointer",
        }}
        onClick={props.onClickMyOrders}
      >
        My Orders
      </p>
      <Space height=".5rem" />
      <p
        style={{
          fontFamily: "Montserrat",
          fontSize: "1.4rem",
          padding: "1rem",
          border: "1px solid lightgray",
          cursor: "pointer",
        }}
      >
        My Favorite
      </p>
      <Space height=".5rem" />
      <p
        style={{
          fontFamily: "Montserrat",
          fontSize: "1.4rem",
          padding: "1rem",
          border: "1px solid lightgray",
          cursor: "pointer",
        }}
      >
        My Reviews
      </p>
    </div>
  );
}

export default AccountSideNav;
