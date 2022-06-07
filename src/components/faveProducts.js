import * as React from "react";
import { useNavigate } from "react-router-dom";

// contexts
import { FavoriteProductsContext } from "../contexts/customer/favoriteProductsContext";

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

function FaveProducts(props) {
  const navigate = useNavigate();

  // contexts
  var { favoriteProducts } = React.useContext(FavoriteProductsContext);

  function handleClickfaveProductID(ID) {
    navigate("/products/" + ID);
  }

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
            {favoriteProducts.map((favoriteProduct) => (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontFamily: "Montserrat",
                  fontSize: "1.1rem",
                  marginBottom: ".5rem",
                  color: "gray",
                  cursor: "pointer",
                }}
                onClick={function () {
                  handleClickfaveProductID(favoriteProduct["productID"]);
                }}
              >
                <p>Product ID:</p>
                <p>{favoriteProduct["productID"]}</p>
              </div>
            ))}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default FaveProducts;
