function compareAddress(oldAddress, newAddress) {
  if (oldAddress["street"] !== newAddress["street"]) return false;
  if (oldAddress["city"] !== newAddress["city"]) return false;
  if (oldAddress["region"] !== newAddress["region"]) return false;
  if (oldAddress["country"] !== newAddress["country"]) return false;
  return true;
}

export default compareAddress;
