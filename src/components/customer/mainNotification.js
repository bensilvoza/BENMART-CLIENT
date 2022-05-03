import * as React from "react";

function MainNotification(props) {
  return (
    <div
      style={{
        position: "fixed",
        left: "50%",
        transform: "translateX(-50%)",

        paddingTop: "1rem",
        paddingBottom: "1rem",
        paddingLeft: "3rem",
        paddingRight: "3rem",
        fontFamily: "Montserrat",
        backgroundColor: props.backgroundColor,
      }}
    >
      {props.message}
    </div>
  );
}

export default MainNotification;
