function positiveMultiply(a, b) {
  let result = a * b;
  if (result < 0) {
    return result * -1;
  }
  return result;
}
