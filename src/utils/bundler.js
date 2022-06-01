function bundler(products) {
  var bundle = [];
  var chunk = [];
  for (var i = 0; i < products.length; i++) {
    chunk.push(products[i]);
    if (chunk.length == 3) {
      bundle.push(chunk);
      if (i + 1 == products.length) break;
      chunk = [];
    }

    if (i + 1 == products.length) {
      bundle.push(chunk);
    }
  }

  return bundle;
}

export default bundler;
