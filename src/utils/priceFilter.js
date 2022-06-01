function priceFilter(products, priceSliderValue) {
  var results = [];
  for (var i = 0; i < products.length; i++) {
    if (priceSliderValue >= products[i]["price"]) {
      results.push(products[i]);
    }
  }

  return results;
}

export default priceFilter;
