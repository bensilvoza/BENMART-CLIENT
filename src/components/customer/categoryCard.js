import * as React from "react";

function CategoryCard(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px dashed black",
        borderRadius: "50%",
        width: "15rem",
        height: "15rem",
        fontFamily: "Pacifico",
        fontSize: "2rem",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <div style={{ color: "gray" }}>{props.name}</div>
    </div>
  );
}

export default CategoryCard;
