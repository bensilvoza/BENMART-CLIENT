import * as React from "react";

export const ProductsContext = React.createContext();

function ProductsContextProvider(props) {
  var [products, setProducts] = React.useState([]);

  function handleProducts(data) {
    setProducts(data);
  }
  // handle products mate
  var handleProductsMate = handleProducts;

  return (
    <ProductsContext.Provider
      value={{
        products: products,
        handleProducts: handleProducts,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
}

export default ProductsContextProvider;
