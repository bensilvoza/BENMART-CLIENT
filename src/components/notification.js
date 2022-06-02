import * as React from "react";

function Notification(props) {
  return (
    <div
      style={{
        position: "fixed",
        left: "50%",
        transform: "translateX(-50%)",

        paddingTop: ".5rem",
        paddingBottom: ".5rem",
        paddingLeft: "1.2rem",
        paddingRight: "1.2rem",
        fontFamily: "Montserrat",
        marginTop: "1.5rem",
        border: props.border,
        color: props.color,
      }}
    >
      {props.message}
    </div>
  );
}

export default Notification;
