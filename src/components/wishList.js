import * as React from "react";

// components
import Space from "./space";

// chakra
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

function WishList(props) {
  return (
    <div
      style={{
        border: "1px solid lightgray",
        borderRadius: "0.1rem",
        padding: "1rem",
      }}
    >
      <p style={{ fontFamily: "Montserrat", fontSize: "1.3rem" }}>
        Favorite Products
      </p>
      <Space height="1rem" />
      <Accordion allowToggle border="white">
        <AccordionItem>
          <h2>
            <AccordionButton p="0">
              <Box flex="1" textAlign="left">
                Choose here
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default WishList;
