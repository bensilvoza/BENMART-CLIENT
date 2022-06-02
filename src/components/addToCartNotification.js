import * as React from "react";

function AddToCartNotification(props) {
  return (
    <div
      style={{
        fontFamily: "Montserrat",
        textAlign: "center",
        fontSize: "1rem",
        paddingTop: ".5rem",
        paddingBottom: ".5rem",
        border: props.border,
        color: props.color,
        marginBottom: props.marginBottom,
        borderRadius: ".2rem",
      }}
    >
      {props.message}
    </div>
  );
}

export default AddToCartNotification;
