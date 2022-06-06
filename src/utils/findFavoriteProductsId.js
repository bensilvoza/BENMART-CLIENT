function findFavoriteProductsId(favoriteProducts, ID) {
  for (var i = 0; i < favoriteProducts.length; i++) {
    if (favoriteProducts[i]["productID"] == ID) {
      return true;
    }
  }

  return false;
}

export default findFavoriteProductsId;
