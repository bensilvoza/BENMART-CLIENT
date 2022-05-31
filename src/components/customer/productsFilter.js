import * as React from "react";

// components
import Space from "./space";

// css
import "./productsFilter.css";

// Base Web
import { Accordion, Panel } from "baseui/accordion";
import { Slider } from "baseui/slider";
import { Select } from "baseui/select";

function ProductsFilter(props) {
  var [priceSlider, setPriceSlider] = React.useState([0]);
  var [category, setCategory] = React.useState([]);
  return (
    <div className="box">
      <p className="shop-by">Shop By</p>
      <Accordion accordion>
        <Panel title="Category">
          <Select
            options={[
              { label: "Cap", id: "1" },
              { label: "Shoes", id: "2" },
              { label: "Slippers", id: "3" },
              { label: "T-shirt", id: "4" },
              { label: "Shorts", id: "5" },
              { label: "Perfume", id: "6" },
            ]}
            value={category}
            placeholder="Choose"
            onChange={(params) => setCategory(params.value)}
          />
        </Panel>
        <Panel title="Price">
          {/* slider or range */}
          <div style={{ marginTop: "2rem" }}>
            <Slider
              min="0"
              max="2000"
              value={priceSlider}
              onChange={({ value }) => value && setPriceSlider(value)}
            />
          </div>
        </Panel>
        <Panel title="Size">Size selection will be added momentarily</Panel>
        <Panel title="Color">Color selection will be added momentarily</Panel>
      </Accordion>

      <Space height=".2rem" />
    </div>
  );
}

export default ProductsFilter;
