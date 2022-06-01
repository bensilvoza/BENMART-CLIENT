function categoryFilter(products, category) {
  var results = [];
  for (var i = 0; i < products.length; i++) {
    if (products[i]["category"] == category) {
      results.push(products[i]);
    }
  }

  return results;
}

export default categoryFilter;
