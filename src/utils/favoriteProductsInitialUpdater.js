function favoriteProductsInitialUpdater(favoriteProducts, productID) {
  for (var i = 0; i < favoriteProducts.length; i++) {
    if (favoriteProducts[i]["productID"] == productID) {
      favoriteProducts.splice(i, 1);
      return favoriteProducts;
    }
  }

  favoriteProducts.push({ productID: productID });
  return favoriteProducts;
}

export default favoriteProductsInitialUpdater;
