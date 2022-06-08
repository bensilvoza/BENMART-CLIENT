import * as React from "react";

function FeedbackCard(props) {
  return (
    <div
      style={{
        border: "3px dashed gray",
        borderRadius: ".5rem",
        paddingTop: "3rem",
        paddingBottom: "3rem",
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
            backgroundColor: "lightgray",
            padding: "1rem",
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
