import * as React from "react";

function CategoryCard(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        border: "1px dashed black",
        borderRadius: ".5rem",
        padding: "5rem",
      }}
    >
      <img
        style={{
          width: "100%",
          height: "10rem",
          objectFit: "contain",
        }}
        src={props.url}
        alt="img"
      />
    </div>
  );
}

export default CategoryCard;
