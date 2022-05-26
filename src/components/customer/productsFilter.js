import * as React from "react";

// components
import Space from "./space";

// css
import "./productsFilter.css";

// Base Web
import { Accordion, Panel } from "baseui/accordion";

function ProductsFilter(props) {
  var a = "";
  return (
    <div className="box">
      <p className="shop-by">Shop By</p>
      <Accordion accordion>
        <Panel title="Category">Content 1</Panel>
        <Panel title="Price">Content 2</Panel>
        <Panel title="Size">Content 3</Panel>
        <Panel title="Color">Content 3</Panel>
      </Accordion>

      <Space height=".2rem" />
    </div>
  );
}

export default ProductsFilter;
