import * as React from "react";

function CategoryCard(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px dashed black",
        borderRadius: "2%",
        width: "17rem",
        height: "15rem",
        fontFamily: "Pacifico",
        fontSize: "2rem",
      }}
    >
      <div style={{ color: "gray" }}>{props.name}</div>
    </div>
  );
}

export default CategoryCard;
