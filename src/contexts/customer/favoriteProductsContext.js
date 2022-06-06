import * as React from "react";

export const FavoriteProductsContext = React.createContext();

function FavoriteProductsContextProvider(props) {
  var [favoriteProducts, setFavoriteProducts] = React.useState([]);

  function handleFavoriteProducts(data) {
    setFavoriteProducts(data);
  }
  // with or without mate is absolutely fine
  // handle favorite products mate
  var handleFavoriteProductsMate = handleFavoriteProducts;

  return (
    <FavoriteProductsContext.Provider
      value={{
        favoriteProducts: favoriteProducts,
        handleFavoriteProducts: handleFavoriteProducts,
      }}
    >
      {props.children}
    </FavoriteProductsContext.Provider>
  );
}

export default FavoriteProductsContextProvider;
