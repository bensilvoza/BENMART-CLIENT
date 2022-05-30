import * as React from "react";

function FeedbackCard(props) {
  return (
    <div
      style={{
        border: "5px dashed gray",
        borderRadius: ".5rem",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "1.2rem",
          fontFamily: "Montserrat",
        }}
      >
        <div>We'd love to hear what you think!</div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            border: "2px solid gray",
            borderRadius: ".4rem",
            padding: ".3rem",
            fontFamily: "Montserrat",
            color: "black",
            marginTop: ".4rem",
          }}
        >
          Give feedback
        </div>
      </div>
    </div>
  );
}

export default FeedbackCard;
