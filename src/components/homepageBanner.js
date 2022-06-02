import * as React from "react";
import { Grid, Cell } from "baseui/layout-grid";
import Lottie from "react-lottie";
import animationDelivery from "./lotties/delivery";
import Space from "./space";

function HomepageBanner(props) {
  const animationDeliverytOptions = {
    loop: true,
    autoplay: true,
    animationData: animationDelivery,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid>
      <Cell span={6} align={"center"}>
        <h1
          style={{
            fontFamily: "Montserrat",
            fontSize: "5rem",
            fontWeight: "800",
          }}
        >
          Out for Delivery
        </h1>
      </Cell>

      <Cell span={6}>
        <div>
          <Lottie
            options={animationDeliverytOptions}
            height={600}
            width={600}
          />
        </div>
      </Cell>
    </Grid>
  );
}

export default HomepageBanner;
