import * as React from "react";
import { useNavigate } from "react-router-dom";

// contexts
import { ProductsContext } from "../../contexts/customer/productsContext";

// Base Web
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
} from "baseui/modal";
import { Input, SIZE } from "baseui/input";
import { Grid, Cell } from "baseui/layout-grid";

// component
import ProductCard from "./productCard";
import Space from "./space";

// HTML parser
import parse from "html-react-parser";

function SearchModal(props) {
  const navigate = useNavigate();

  // context
  var { products } = React.useContext(ProductsContext);

  var [query, setQuery] = React.useState("try searching...");

  var [searchResults, setSearchResults] = React.useState([]);

  function handleClickProduct(ID) {
    navigate("/products/" + ID);
  }

  function handleSubmitQuery(e) {
    e.preventDefault();
    console.log("");
  }

  React.useEffect(
    function () {
      function run() {
        var searchResultsCopy = [];
        for (var i = 0; i < products.length; i++) {
          if (products[i]["name"].toLowerCase().includes(query.toLowerCase())) {
            searchResultsCopy.push(products[i]);
          }
        }
        setSearchResults(searchResultsCopy);
      }

      // call
      run();
    },
    [query]
  );

  return (
    <React.Fragment>
      <Modal
        onClose={props.close}
        isOpen={props.isOpen}
        overrides={{
          Dialog: {
            style: {
              width: "80vw",
              height: "80vh",
              display: "flex",
              flexDirection: "column",
            },
          },
        }}
      >
        <ModalHeader>Shop now at BENMART!</ModalHeader>
        <ModalBody style={{ flex: "1 1 0" }}>
          <form onSubmit={handleSubmitQuery}>
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              size={SIZE.large}
              placeholder="search our store..."
            />
          </form>

          <Space height="2rem" />

          <div style={{ overflow: "scroll", padding: "2rem", height: "30rem" }}>
            <Grid>
              {searchResults.map((product, index) => (
                <Cell span={3}>
                  <ProductCard
                    url={product["images"][0]["url"]}
                    price={product["price"]}
                    name={product["name"]}
                    description={parse(
                      product["description"].substring(0, 100)
                    )}
                    onClickProduct={function () {
                      handleClickProduct(product["ID"]);
                    }}
                  />
                  {index % 2 === 1 && <Space height="1rem" />}
                </Cell>
              ))}
            </Grid>
          </div>
        </ModalBody>
        <ModalFooter>
          <ModalButton onClick={props.close}>Close</ModalButton>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
}

export default SearchModal;
