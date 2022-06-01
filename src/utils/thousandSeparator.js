function thousandSeparator(n) {
  var n_array = [];
  for (var i = 0; i < String(n).length; i++) {
    n_array.push(String(n)[i]);
    n_array.push(" ");
  }

  var count_digits = 0;
  for (var i = n_array.length - 1; i >= 0; i--) {
    if (n_array[i].match(/[0-9]/) !== null) {
      count_digits++;
    }

    if (count_digits === 3) {
      n_array[i - 1] = ",";
      count_digits = 0;
    }
  }

  var output = "";

  for (var i = 0; i < n_array.length; i++) {
    if (n_array[i] !== " ") {
      output = output + n_array[i];
    }
  }

  return output;
}

export default thousandSeparator;
