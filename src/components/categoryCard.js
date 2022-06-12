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
      <div>
        <img
          style={{
            width: "100%",
            height: "10rem",
            objectFit: "contain",
          }}
          src={props.url}
          alt="img"
        />
        <p
          style={{
            fontFamily: "Montserrat",
            fontSize: "1.5rem",
            textAlign: "center",
          }}
        >
          {props.description}
        </p>
      </div>
    </div>
  );
}

export default CategoryCard;
